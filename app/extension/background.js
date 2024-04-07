const state = {
  injected: {},
  loaded: {},
}
const toggleIn = ({ id, url }) => {
  if (url?.startsWith("chrome://")) return undefined;
  if (state.injected[id]) {
    if (state.loaded[id]) {
      chrome.scripting.executeScript({
        target : {tabId : id},
        files : [ "scripts/eject.js" ],
      })
        .then(() => {
          state.loaded[id] = false
          console.log("visbug注销")
        });
    } else {
      chrome.scripting.executeScript({
        target : {tabId : id},
        files : [ "scripts/restore.js" ],
      })
        .then(() => {
          state.loaded[id] = true
          console.log("visbug恢复")
        });
    }
  } else {
    chrome.scripting.executeScript({
      target : {tabId : id},
      files : [ "scripts/inject.js" ],
    })
      .then(() => {
        state.injected[id] = true
        state.loaded[id] = true
        console.log("script注入")
      });
  }
}

chrome.action.onClicked.addListener(toggleIn);

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  // 检查页面是否完成加载
  if (changeInfo.status === 'complete') {
    state.injected[tabId] = false
    state.loaded[tabId] = false
  }
});

