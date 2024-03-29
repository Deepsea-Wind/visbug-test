import { CompareStyles } from "../utilities/style.handle"
import {$, isOffBounds} from "../utilities/index"
import pixelmatch  from "../utilities/pixelmatch"
import { toDelete } from "../vis-bug/vis-bug.icons"

export class Compare extends HTMLElement {
   constructor() {
     super();
     this.loadedCount = 0;
     this.$shadow = this.attachShadow({ mode: "closed" })
     this.closeOverlay = this.closeOverlay.bind(this)
     this.showMagnifier = this.showMagnifier.bind(this)
     this.handleHtmlToImg = this.handleHtmlToImg.bind(this)
   }

  connectedCallback() {
     this.$shadow.innerHTML = this.render()
     this.$shadow.adoptedStyleSheets = [CompareStyles]
     $('.close-btn', this.$shadow)[0].addEventListener('click', this.closeOverlay)
     $('.visbug-diffCanvas', this.$shadow)[0].addEventListener('click', this.showMagnifier)
    $('#ui-upload-btn', this.$shadow)[0].addEventListener('click', this.handleHtmlToImg)
     this.adjustImage()
  }

  disconnectedCallback() {
    $('.close-btn', this.$shadow)[0].removeEventListener('click', this.closeOverlay)
    $('.visbug-diffCanvas', this.$shadow)[0].removeEventListener('click', this.showMagnifier)
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
    $(uiImage).on('load', () => this.onImgLoad(originImgContainer, uiImage, pageImage))
    $(pageImage).on('load', () => this.onImgLoad(originImgContainer, uiImage, pageImage))
  }

  onImgLoad(originImgContainer, uiImage, pageImage) {
    this.loadedCount++
    if (this.loadedCount === 2) {
       console.log("两张图片加载完毕");
      const mode = this.adjustMode(uiImage, originImgContainer.clientWidth, originImgContainer.clientHeight)
      if (mode === "width") {
        console.log("图片优先取宽度适应");
        uiImage.style.width = "100%"
        uiImage.style.height = "auto"
        pageImage.style.width = "100%"
        pageImage.style.height = "auto"
        // uiImage.width = originImgContainer.clientWidth;
        // uiImage.height = "auto"
        // pageImage.width = originImgContainer.clientWidth;
        // pageImage.height = "auto"
      } else {
        console.log("图片优先取高度适应");
        uiImage.style.width = "auto"
        uiImage.style.height = "100%"
        pageImage.style.width = "auto"
        pageImage.style.height = "100%"
        // uiImage.height = originImgContainer.clientHeight;
        // uiImage.width = "auto"
        // pageImage.height = originImgContainer.clientHeight;
        // pageImage.width = "auto"
      }
      this.loadedCount = 0;
      this.pixelMatchMethod(uiImage, pageImage, mode)
      this.listenRatio(uiImage, pageImage, mode)
    }
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
           $('#uiImage', this.$shadow)[0].src = imgSrc
           this.adjustImage()
        }
     }).catch(() => {
       alert('截图获取失败，请稍后重试或联系管理员')
     })
   }

  render() {
    return `
     <div class="pixel-match-page">
     <div class="pixel-match">
			<div class="pixel-match-block">
				<div class="match-img-origin" id="match-img-origin">
				    ${toDelete}
<!--				    ../demo/img/origin-ui.png-->
					  <img id="uiImage" src="" alt="UI Image">
				</div>
				<div class="match-img-page">
			     	${toDelete}
<!--			     	../demo/img/page-ui.jpeg-->
					  <img id="pageImage" src="" alt="Page Image">
				</div>
			</div>
			<div class="pixel-match-result">
				<div class="match-img-origin">
					<canvas class="visbug-diffCanvas" id="diffCanvas" />
				</div>
				<div class="match-operator">
					<div class="operator-line" id="mismatch">Mismatched pixels: -</div>
					<div class="operator-line" id="similarity-num">Similarity ratio: -</div>
					<div class="operator-line">
						<span>Threshold</span>
						<div class="slider-container">
						    <input type="range" min="0" max="1" value="0.2" step="0.01" class="slider" id="myRange">
						</div>
						<div class="slider-value" id="sliderValue">0.2</div>
					</div>
					 <button style="position: absolute" id="ui-upload-btn">上传DOM截图</button>
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
