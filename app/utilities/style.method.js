import { desiredPropMap } from "./design-properties"

export const getStyle = (el, name) => {
  if (document.defaultView && document.defaultView.getComputedStyle) {
    name = name.replace(/([A-Z])/g, '-$1')
    name = name.toLowerCase()
    // 第二个参数是一个伪类字符串，用于指定要匹配的伪类, ''表示不指定任何伪类，即获取元素的默认计算样式。
    let s = document.defaultView.getComputedStyle(el, '')
    return s && s.getPropertyValue(name)
  }
}

export const createClassname = (el, ellipse = false) => {
  if (!el.className) return ''

  const combined = Array.from(el.classList).reduce((classnames, classname) =>
      classnames += '.' + classname
    , '')

  return ellipse && combined.length > 30
    ? combined.substring(0,30) + '...'
    : combined
}

export const getStyles = el => {
  const computedStyle = window.getComputedStyle(el, null)
  const vettedStyles = []
  const borders = []

  for (const prop in el.style) {
    const is_desired = desiredPropMap[prop]

    if (is_desired && is_desired != computedStyle[prop])
      vettedStyles.push({
        prop: prop,
        value: computedStyle[prop],
      })

    if (prop === 'borderColor' || prop === 'borderWidth' || prop === 'borderStyle')
      borders[prop] = computedStyle[prop].replace(/, rgba/g, '\rrgba')
  }

  const { borderColor, borderWidth, borderStyle } = borders

  if (parseFloat(borderWidth) > 0) {
    vettedStyles.push({
      prop: 'borderColor',
      value: borderColor,
    })

    vettedStyles.push({
      prop: 'borderStyle',
      value: borderStyle,
    })

    vettedStyles.push({
      prop: 'borderWidth',
      value: borderWidth,
    })
  }

  return vettedStyles.sort(function({ prop: propA }, { prop: propB }) {
    if (propA < propB) return -1
    if (propA > propB) return 1
    return 0
  })
}

export const camelToDash = (camelString = "") =>
  camelString.replace(/([A-Z])/g, ($1) =>
    "-"+$1.toLowerCase())


// returns [full, color, x, y, blur, spread]
export const getShadowValues = shadow =>
  /([^\)]+\)) ([^\s]+) ([^\s]+) ([^\s]+) ([^\s]+)/.exec(shadow)

// returns [full, color, x, y, blur]
export const getTextShadowValues = shadow =>
  /([^\)]+\)) ([^\s]+) ([^\s]+) ([^\s]+)/.exec(shadow)


export function rgbToHex([r, g, b]) {
  // 将每个分量转换为十六进制，并确保为两位数
  const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  };

  // 将 R、G、B 分量转换为十六进制
  const hexR = componentToHex(r);
  const hexG = componentToHex(g);
  const hexB = componentToHex(b);

  // 拼接十六进制分量，形成完整的十六进制颜色值
  return "#" + hexR + hexG + hexB;
}
