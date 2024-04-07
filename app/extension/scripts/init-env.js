const judgeList = ["uat.huilianyi.com"];
window.scriptContainer = document;
if (judgeList.find((item) => window.location.href.includes(item))) {
  // uat特殊处理iframe
  const iframe= document.querySelector("iframe");
  // 确保 iframe 加载完成后再进行操作
  iframe.onload = function() {
    // 获取 iframe 内部文档对象
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    window.scriptContainer = iframeDocument || document
  };
}
