
const script = scriptContainer.createElement('script')
script.type = 'module'
script.src = chrome.runtime.getURL('scripts/bundle.min.js')
scriptContainer.body.appendChild(script)

const visbug = scriptContainer.createElement('vis-bug')
scriptContainer.body.appendChild(visbug)
