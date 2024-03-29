import {
  getStyles,
  camelToDash,
  $,
  deepElementFromPoint,
  getShadowValues,
  getTextShadowValues,
  rgbToHex,
  isOffBounds,
} from "../utilities/index"

const state = {
  active: {
    tip:  null,
    target: null,
  },
  tips: new Map(),
}

const services = {}

const mouse_quadrant = e => ({
  north: e.clientY > window.innerHeight / 2,
  west:  e.clientX > window.innerWidth / 2
})

const tip_position = (node, e, north, west) => ({
  top: `${north
    ? e.pageY - node.clientHeight - 20
    : e.pageY + 25}px`,
  left: `${west
    ? e.pageX - node.clientWidth + 23
    : e.pageX - 21}px`,
})

export function MetaTip(visbug) {
  state.restoring = false
  services.selectors = visbug.select

  $('body').on('mousemove', mouseMove)
  visbug.onSelectedUpdate(fixedPinned)

  return () => {
    $('body').off('mousemove', mouseMove)
    visbug.removeSelectedCallback(fixedPinned)
    hideAll()
  }
}

const fixedPinned = (els) => {
   if (els[0] == state.active.target) {
     state.restoring = true
   } else {
     state.restoring = false
     hideAll()
   }
}

const mouseMove = e => {
  const target = deepElementFromPoint(e.clientX, e.clientY)

  if (target.nodeName === 'VISBUG-METATIP') return

  if (isOffBounds(target)) {
    return
  }

  showTip(target, e)
}

export function showTip(target, e) {
  if (state.restoring) return
  if (!state.active.tip) {
    const tip = render(target)
    document.body.appendChild(tip)

    positionTip(tip, e)

    state.active.tip = tip
    state.active.target = target
  }
  else if (target == state.active.target) { // update position
    // update position
    positionTip(state.active.tip, e)
  }
  else { // update content
    render(target, state.active.tip)
    state.active.target = target
    positionTip(state.active.tip, e)
  }
}

const render = (el, tip = document.createElement('visbug-metatip')) => {
  const { width, height } = el.getBoundingClientRect()
  const styles = getStyles(el)
    .map(style => Object.assign(style, {
      prop: camelToDash(style.prop)
    }))
    .filter(style =>
      style.prop.includes('font-family')
        ? el.matches('h1,h2,h3,h4,h5,h6,p,a,dd,dt,li,ol,pre,abbr,cite,dfn,kbd,q,small,input,label,legend,textarea,blockquote,date,button,figcaption,nav,header,footer,em,b,code,mark,time,summary,details')
        : true
    )
    .map(style => {
      if (style.prop.includes('color') || style.prop.includes('background-color') || style.prop.includes('border-color') || style.prop.includes('Color') || style.prop.includes('fill') || style.prop.includes('stroke')) {
        let colorText = style.value;
        if (!(/^#[0-9A-Fa-f]{6}$/).test(style.value)) {
          const matchResult = style.value.toString().match(/\((\d+),\s*(\d+),\s*(\d+)\)/)
          if (matchResult) {
            const [, r, g, b] = matchResult.map(Number);
            colorText = rgbToHex([r, g, b])
          }
        }
        style.value = `
          <span color style="background-color:${style.value};"></span>
          <span color-value>${colorText}</span>
        `
      }
      if (style.prop.includes('box-shadow')) {
        const [, color, x, y, blur, spread] = getShadowValues(style.value)
        style.value = `${x} ${y} ${blur} ${spread}`
      }

      if (style.prop.includes('text-shadow')) {
        const [, color, x, y, blur] = getTextShadowValues(style.value)
        style.value = `${x} ${y} ${blur}`
      }

      if (style.prop.includes('font-family'))
        style.value = `<span string value>${style.value}</span>`

      if (style.prop.includes('grid-template-areas'))
        style.value = style.value.replace(/" "/g, '"<br>"')

      if (style.prop.includes('background-image'))
        style.value = `<a target="_blank" href="${style.value.slice(style.value.indexOf('(') + 2, style.value.length - 2)}">${style.value.slice(0,25) + '...'}</a>`

      // check if style is inline style, show indicator
      if (el.getAttribute('style') && el.getAttribute('style').includes(style.prop))
        style.value = `<span local-change>${style.value}</span>`

      return style
    })

  const localModifications = styles.filter(style =>
    el.getAttribute('style') && el.getAttribute('style').includes(style.prop)
      ? 1
      : 0)

  const notLocalModifications = styles.filter(style =>
    el.getAttribute('style') && el.getAttribute('style').includes(style.prop)
      ? 0
      : 1)

  tip.meta = {
    localModifications,
    notLocalModifications,
    el,
    width,
    height,
  }
  return tip
}

export function positionTip(tip, e) {
  const { north, west } = mouse_quadrant(e)
  const { left, top }   = tip_position(tip, e, north, west)

  tip.style.left  = left
  tip.style.top   = top

  tip.style.setProperty('--arrow', north
    ? 'var(--arrow-up)'
    : 'var(--arrow-down)')

  tip.style.setProperty('--arrow-top', !north
    ? '-8px'
    : '100%')

  tip.style.setProperty('--arrow-left', west
    ? 'calc(100% - 15px - 15px)'
    : '15px')
}


const clearActive = () => {
  state.active.tip    = null
  state.active.target = null
}

const hideAll = () => {
  if (state.active.tip) {
    state.active.tip.remove()
    clearActive()
  }
}
