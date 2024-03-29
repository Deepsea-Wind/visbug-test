export const isFirefox = navigator.userAgent.search('Firefox') > 0
export const isSafarish = navigator.userAgent.search('Safari') > 0
export const isChrome = navigator.userAgent.search('Chrome') > 0
export const isSafari = isSafarish && !isChrome
