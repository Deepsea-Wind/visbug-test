import { CompareStyles } from "../utilities/style.handle"
import {$, isOffBounds} from "../utilities/index"
import pixelmatch  from "../utilities/pixelmatch"
import { toDelete } from "../vis-bug/vis-bug.icons"

export class Compare extends HTMLElement {
   constructor() {
     super();
     this.mode = "";
     this.$shadow = this.attachShadow({ mode: "closed" })
     this.closeOverlay = this.closeOverlay.bind(this)
     this.showMagnifier = this.showMagnifier.bind(this)
     this.handleHtmlToImg = this.handleHtmlToImg.bind(this)
     this.handleMatch = this.handleMatch.bind(this)
      this.handleDelete = this.handleDelete.bind(this)
   }

  connectedCallback() {
     this.$shadow.innerHTML = this.render()
     this.$shadow.adoptedStyleSheets = [CompareStyles]
     $('.close-btn', this.$shadow)[0].addEventListener('click', this.closeOverlay)
     $('.visbug-diffCanvas', this.$shadow)[0].addEventListener('click', this.showMagnifier)
     $('#ui-upload-paste', this.$shadow)[0].addEventListener('click', () => this.handlePaste("#uiImage", true,".match-img-origin"))
     $('#ui-upload-file', this.$shadow)[0].addEventListener('click', () => this.handleUploadFile("#uiImage", true,".match-img-origin"))
     $('#page-upload-paste', this.$shadow)[0].addEventListener('click', () => this.handlePaste("#pageImage", false, ".match-img-page"))
     $('#page-upload-file', this.$shadow)[0].addEventListener('click', () => this.handleUploadFile("#pageImage", false, ".match-img-page"))
     $('#page-upload-select', this.$shadow)[0].addEventListener('click', this.handleHtmlToImg)
     $('#match-button', this.$shadow)[0].addEventListener('click', this.handleMatch)
     $(".delete-svg", this.$shadow).on('click', this.handleDelete)
  }

  disconnectedCallback() {
    $('.close-btn', this.$shadow)[0].removeEventListener('click', this.closeOverlay)
    $('.visbug-diffCanvas', this.$shadow)[0].removeEventListener('click', this.showMagnifier)
    $('#ui-upload-paste', this.$shadow)[0].removeEventListener('click', () => this.handlePaste("#uiImage", true,".match-img-origin"))
    $('#ui-upload-file', this.$shadow)[0].removeEventListener('click', () => this.handleUploadFile("#uiImage", true,".match-img-origin"))
    $('#page-upload-paste', this.$shadow)[0].removeEventListener('click', () => this.handlePaste("#pageImage", false, ".match-img-page"))
    $('#page-upload-file', this.$shadow)[0].removeEventListener('click', () => this.handleUploadFile("#pageImage", false, ".match-img-page"))
    $('#page-upload-select', this.$shadow)[0].removeEventListener('click', this.handleHtmlToImg)
    $('#match-button', this.$shadow)[0].removeEventListener('click', this.handleMatch)
    $(".delete-svg", this.$shadow).off('click', this.handleDelete)
  }

  closeOverlay() {
     $('.visbug-magnifier', this.$shadow)[0].style.display = 'none'
  }

  // 。。。this绑定丢失，我说怎么this没了
  showMagnifier(e) {
    const $target = e.target
    if (isOffBounds($target)) return
    // 放大镜
    const dataURL = $target.toDataURL('image/png');
    const magnifierDom = $('.visbug-magnifier', this.$shadow)[0];
    magnifierDom.style.display = "block";
    const magnifierImg = $('#magnifier-img', this.$shadow)[0];
    magnifierImg.src = dataURL;
    // 放大差异，计算判断长度还是宽度适应
    const adjustMode = this.adjustMode(magnifierImg);
    if (adjustMode === "width") {
      magnifierImg.style.width = "80%";
      magnifierImg.style.height = "auto";
    } else {
      magnifierImg.style.height = "80%";
      magnifierImg.style.width = "auto";
    }
  }

  adjustImage() {
    const originImgContainer = $('#match-img-origin', this.$shadow)[0];
    const uiImage = $('#uiImage', this.$shadow)[0];
    const pageImage = $('#pageImage', this.$shadow)[0];
    $(uiImage).on('load', () => {
      const mode = this.adjustMode(uiImage, originImgContainer.clientWidth, originImgContainer.clientHeight)
      if (mode === "width") {
        console.log("图片优先取宽度适应");
        uiImage.style.width = "100%"
        uiImage.style.height = "auto"
        pageImage.style.width = "100%"
        pageImage.style.height = "auto"
      } else {
        console.log("图片优先取高度适应");
        uiImage.style.width = "auto"
        uiImage.style.height = "100%"
        pageImage.style.width = "auto"
        pageImage.style.height = "100%"
      }
      this.mode = mode
    })
  }

  adjustMode(img, width = window.innerWidth, height = window.innerHeight) {
    const containerAspectRatio = width / height;
    const imageAspectRatio = img.width / img.height;
    if(imageAspectRatio > containerAspectRatio) {
      return "width";
    } else{
      return "height";
    }
  }

  pixelMatchMethod(uiImage, pageImage, mode, threshold = 0.2) {
    let width = Math.max(pageImage.width, uiImage.width) ;
    let height = Math.max(pageImage.height, uiImage.height);
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(uiImage, 0, 0, uiImage.width, uiImage.height);
    const imgData1 = ctx.getImageData(0, 0, width, height);
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(pageImage, 0, 0, pageImage.width, pageImage.height);
    const imgData2 = ctx.getImageData(0, 0, width, height);
    // 创建用于存储差异的画布
    const canvasDiff = $('#diffCanvas', this.$shadow)[0];
    canvasDiff.width = width;
    canvasDiff.height = height;
    const ctxDiff = canvasDiff.getContext('2d');

    const diff = new Uint8ClampedArray(width * height * 4);

    // 比较原始 UI 图和页面截图
    const mismatch = pixelmatch(
      imgData1.data,
      imgData2.data,
      diff,
      width,
      height,
      {threshold}
    );
    ctxDiff.putImageData(new ImageData(diff, width, height), 0, 0);

    if (mode === "width") {
      canvasDiff.style.width = "100%"
      canvasDiff.style.height = "auto"
    } else {
      canvasDiff.style.height = "100%"
      canvasDiff.style.width = "auto"
    }

    // 计算相似度
    const totalPixels = width * height;
    const similarity = 1 - (mismatch / totalPixels);
    const mismatchDom = $('#mismatch', this.$shadow)[0];
    mismatchDom.innerHTML = `Mismatched pixels: ${mismatch}`;
    const similarityNumDom = $('#similarity-num', this.$shadow)[0];
    similarityNumDom.innerHTML = `Similarity ratio: ${(similarity * 100).toFixed(2)}`;
  };

   listenRatio(uiImage, pageImage, mode) {
     const slider = $('#myRange', this.$shadow)[0];
     const output = $('#sliderValue', this.$shadow)[0];
     output.innerHTML = slider.value;
     slider.oninput = () => {
       output.innerHTML = slider.value;
       this.pixelMatchMethod(uiImage, pageImage, mode, slider.value);
     };
   }

   set htmlToImg(htmlToImg) {
      this.htmlToImgMethod = htmlToImg || Promise.resolve()
   }

   handleHtmlToImg() {
     this.htmlToImgMethod().then((imgSrc) => {
        if (imgSrc) {
          const pageImage = $('#pageImage', this.$shadow)[0];
          pageImage.src = imgSrc
          $(".match-img-page", this.$shadow)[0].classList.add('hover-mask')
          if (this.mode) {
            console.log("已经上传ui图");
            return;
          }
          const originImgContainer = $('#match-img-origin', this.$shadow)[0];
          $(pageImage).on('load', () => {
            const mode = this.adjustMode(pageImage, originImgContainer.clientWidth, originImgContainer.clientHeight)
            if (mode === "width") {
              console.log("dom节点优先取宽度适应");
              pageImage.style.width = "100%"
              pageImage.style.height = "auto"
            } else {
              console.log("dom节点优先取高度适应");
              pageImage.style.width = "auto"
              pageImage.style.height = "100%"
            }
          })
        }
     }).catch(() => {
       alert('截图获取失败，请稍后重试或联系管理员')
     })
   }

   async handlePaste(imgContainer, needAdjust = true, parent) {
     try {
       const container = $(imgContainer, this.$shadow)[0];
       // 读取剪贴板内容
       const items = await navigator.clipboard.read();
       // 遍历剪贴板中的每一项
       for (const item of items) {
         // 如果是图片类型的数据
         if (item.types.includes('image/png') || item.types.includes('image/jpeg')) {
           // 读取图片数据
           const blob = await item.getType('image/png' || 'image/jpeg');
           const imageUrl = URL.createObjectURL(blob);
           container.src = imageUrl;
           needAdjust && this.adjustImage();
           if (parent) {
             $(parent, this.$shadow)[0].classList.add('hover-mask');
           }
         }
       }
     } catch (error) {
       alert('Failed to read clipboard image:', error);
     }
   }

   handleUploadFile(imgContainer, needAdjust = true, parent) {
      const fileInput = $('#fileInput', this.$shadow)[0];
      fileInput.click();
      fileInput.onchange = () => {
        const file = fileInput.files[0];
        if (!file) return;
        if (!file.type.includes('image')) {
          alert('请选择图片文件');
          return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = new Image();
          img.src = e.target.result;
          img.onload = () => {
            $(imgContainer, this.$shadow)[0].src = img.src;
            needAdjust && this.adjustImage();
            if (parent) {
              $(parent, this.$shadow)[0].classList.add('hover-mask');
            }
          };
        };
        reader.readAsDataURL(file);
      };
   }

   handleMatch() {
     const uiImage = $('#uiImage', this.$shadow)[0];
     const pageImage = $('#pageImage', this.$shadow)[0];
     this.pixelMatchMethod(uiImage, pageImage, this.mode)
     this.listenRatio(uiImage, pageImage, this.mode)
   }

   handleDelete(e) {
     const target = e.target;
     const type = target.parentNode.parentNode.id;
     let parent;
     let img;
     switch (type) {
        case "ui-delete":
          parent = $('.match-img-origin', this.$shadow)[0];
          img = $('img', parent)[0];
          break;
        case "page-delete":
          parent = $('.match-img-page', this.$shadow)[0];
          img = $('img', parent)[0];
          break;
          default:
            break;
     }
     if (img) img.src = "";
     parent && parent.classList.remove('hover-mask');
   }

  render() {
    return `
     <div class="pixel-match-page">
     <input type="file" id="fileInput" style="display:none;">
     <div class="pixel-match">
			<div class="pixel-match-block">
				<div class="match-img-origin" id="match-img-origin">
				<div class="ui-upload-operate">
				 <button id="ui-upload-paste">粘贴</button>
				  <button id="ui-upload-file">上传</button>
        </div>
				    <div class="delete-svg" id="ui-delete">${toDelete}</div>
					  <img id="uiImage" src="" alt="UI Image">
				</div>
				<div class="match-img-page">
				 <div class="ui-upload-operate">
				 <button id="page-upload-paste">粘贴</button>
				  <button id="page-upload-file">上传</button>
				  <button id="page-upload-select">上传选中节点</button>
        </div>
			     	<div class="delete-svg" id="page-delete">${toDelete}</div>
					  <img id="pageImage" src="" alt="Page Image">
				</div>
			</div>
			<div class="pixel-match-result">
				<div class="match-img-origin">
					<canvas class="visbug-diffCanvas" id="diffCanvas" />
				</div>
				<div class="match-operator">
				  <div class="operator-line">
				  <button id="match-button">开始比对</button>
          </div>
					<div class="operator-line" id="mismatch">Mismatched pixels: -</div>
					<div class="operator-line" id="similarity-num">Similarity ratio: -</div>
					<div class="operator-line">
						<span>Threshold</span>
						<div class="slider-container">
						    <input type="range" min="0" max="1" value="0.2" step="0.01" class="slider" id="myRange">
						</div>
						<div class="slider-value" id="sliderValue">0.2</div>
					</div>
				</div>
			</div>
		</div>
		<div class="visbug-magnifier">
			<img id="magnifier-img" src="" alt="">
			<div class="close-btn">
				<div class="close-icon"></div>
			</div>
		</div>
</div>
    `
  }

}

customElements.define('visbug-compare', Compare)
