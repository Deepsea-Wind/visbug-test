import { $, isOffBounds, deepElementFromPoint, clearMeasurements, getStyle } from '../utilities/index'

const state = {
  gridlines: null,
  needPadding: false,
}

export function Guides(visbug, needPadding) {
  state.needPadding = needPadding
  $('body').on('mousemove', on_hover)
  $('body').on('mouseout', on_hoverout)

  window.addEventListener('scroll', hideGridlines)
  visbug.onSelectedUpdate(stickGuide)

  return () => {
    $('body').off('mousemove', on_hover)
    $('body').off('mouseout', on_hoverout)

    window.removeEventListener('scroll', hideGridlines)
    visbug.removeSelectedCallback(stickGuide)

    clearMeasurements()
    hideGridlines()
  }
}

const on_hover = e => {
  const target = deepElementFromPoint(e.clientX, e.clientY)
  if (isOffBounds(target)) return
  showGridlines(target)
}

const stickGuide = els => {
  if (!els.length) return

  state.gridlines && state.gridlines.remove()
  state.gridlines = null
}

const on_hoverout = () => {
  hideGridlines()
}

const showGridlines = node => {
  const calculatedStyle   = getStyle(node, 'padding')
  let element
  if (state.needPadding && calculatedStyle !== '0px') {
    element = document.createElement('visbug-boxmodel')
    element.position = calcParams(node)
  }
  if (state.gridlines) {
    state.gridlines.style.display = null
    state.gridlines.update = node.getBoundingClientRect()
    state.gridlines.backdrop = {
      element,
    }
  }
  else {
    state.gridlines = document.createElement('visbug-gridlines')
    state.gridlines.position = node.getBoundingClientRect()
    state.gridlines.backdrop = {
      element,
    }

    document.body.appendChild(state.gridlines)
  }
}

const hideGridlines = () => {
  if (!state.gridlines) return
  state.gridlines.style.display = 'none'
}


const calcParams = (el) => {
  const bounds = el.getBoundingClientRect()

  const sides = {
    top:    getStyle(el, 'paddingTop'),
    right:  getStyle(el, 'paddingRight'),
    bottom: getStyle(el, 'paddingBottom'),
    left:   getStyle(el, 'paddingLeft'),
  }

  Object.entries(sides).forEach(([side, val]) => {
    if (typeof val !== 'number')
      val = parseInt(getStyle(el, 'padding'+'-'+side).slice(0, -2))
    sides[side] = Math.round(val.toFixed(1) * 100) / 100
  })

  return {
    bounds,
    sides,
  }
}
