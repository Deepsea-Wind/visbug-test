import { $, isOffBounds, deepElementFromPoint, clearMeasurements, getStyle } from '../utilities/index'

window.loadScript = loadScript

if (!window.html2canvas) {
  loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js');
}

let compareState = {
  compare: null,
  visible: false,
  selected: [],
}

export function Compare(visbug) {
  if (compareState.compare) {
    compareState.compare.style.display = "block"
    compareState.visible = true
  } else {
    const compare = document.createElement('visbug-compare')
    document.body.appendChild(compare)

    compare.htmlToImg = () => htmlToImg(compareState.selected)
    compareState.compare = compare
    compareState.visible = true

    visbug.onSelectedUpdate((selected) => compareState.selected = selected)

  }
  return () => {
    // visbug.removeSelectedCallback(htmlToImg)
    // $('visbug-compare').forEach((el) => el.remove())
    hidePlane()
  }
}

const hidePlane = () => {
  compareState.compare.style.display = "none"
  compareState.visible = false
}


// 节点选择触发生成截图 （中控如果有html2canvas）
const htmlToImg = (els) => {
  console.log("selected", els);
  if (!els.length) {
    alert("请先选择需要截图的元素")
    return Promise.resolve();
  }
  return new Promise((resolve, reject) => {
    const option = {
      name: "元素截图",
      logging: false,
      scale: window.devicePixelRatio * 2,
    };
    let jpeg;
    window.html2canvas(els[0], {...option, allowTaint: true, useCORS: true}).then((canvas) => {
      try {
        //返回图片dataURL，参数：图片格式和清晰度(0-1)
        jpeg = canvas.toDataURL("image/jpeg", 1.0);
        // const image = new Image();
        // image.src = jpeg;
        // window.open(jpeg);
        // let page = window.open(jpeg, "_blank");
        // page.document.body.appendChild(image);
        // 将Base64数据转换为Blob对象
        // const image = new Image();
        // image.src = jpeg;
        // document.body.appendChild(image);
        // const blob = base64ToBlob(jpeg)
        // let url = URL.createObjectURL(blob);
        // window.open(url, "_blank");
        resolve(jpeg)
      } catch (e) {
        reject()
        console.error("截图获取失败，请稍后重试或联系管理员")
      }
    })
  })
}

function loadScript(scriptSrc) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = scriptSrc;
    script.crossOrigin = 'anonymous';
    try {
      script.appendChild(document.createTextNode("//code")); //javascript内容是利用createTextNode创建的（不过IE不认这个）
    } catch (e) {
      script.text = "//code"; //IE认为SCRIPT节点是个特殊的节点所有有个特殊的text属性
    }
    document.body.appendChild(script); /*兼容IE*/
    script.onload = () => {
      resolve();
    };
    script.onerror = () => {
      reject();
    };
  });
}

function base64ToBlob (base64String) {
  let parts = base64String.split(";base64,");
  let contentType = parts[0].split(":")[1];
  let raw = window.atob(parts[1]);
  let rawLength = raw.length;
  let uInt8Array = new Uint8Array(rawLength);
  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }
  return new Blob([uInt8Array], {
    type: contentType,
  });
}
