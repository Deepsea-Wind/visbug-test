import { windowBounds } from '../utilities/index'
import { GridlineStyles } from '../utilities/style.handle'

export class Gridlines extends HTMLElement {

  constructor() {
    super()
    this.$shadow = this.attachShadow({mode: 'closed'})
  }

  connectedCallback() {
    this.$shadow.adoptedStyleSheets = [GridlineStyles]
  }

  disconnectedCallback() {}

  set position(boundingRect) {
    this.$shadow.innerHTML  = this.render(boundingRect)
  }

  set backdrop(bd) {
    const cur_child = this.$shadow.querySelector('visbug-boxmodel')
    cur_child && cur_child.remove()
    if (!bd.element) return
    this.$shadow.appendChild(bd.element)
  }

  set update({ width, height, top, left }) {
    const { winHeight, winWidth } = windowBounds()
    const svg = this.$shadow.querySelector('svg')
    const [rect,line1,line2,line3,line4] = svg.children

    this.$shadow.host.style.display = 'block'

    svg.setAttribute('viewBox', `0 0 ${winWidth} ${winHeight}`)
    rect.setAttribute('width', width + 'px')
    rect.setAttribute('x', left)
    rect.setAttribute('y', top)
    line1.setAttribute('x1', left)
    line1.setAttribute('x2', left)
    line2.setAttribute('x1', left + width)
    line2.setAttribute('x2', left + width)
    line3.setAttribute('y1', top + window.scrollY)
    line3.setAttribute('y2', top + window.scrollY)
    line3.setAttribute('x2', winWidth)
    line4.setAttribute('y1', top + window.scrollY + height)
    line4.setAttribute('y2', top + window.scrollY + height)
    line4.setAttribute('x2', winWidth)
  }

  render({ x, y, width, height, top, left }) {
    const { winWidth, winHeight } = windowBounds()
    const { offsetHeight } = document.body
    const calced_y = y + window.scrollY

    return `
      <svg
        width="100%"
        viewBox="0 0 ${winWidth} ${winHeight}"
        version="1.1" xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          fill="none"
          width="${width}" height="${height}"
          x="${x}" y="${y}"
          style="display:none;"
        ></rect>
        <line x1="${x}" y1="0" x2="${x}" y2="${offsetHeight}"></line>
        <line x1="${x + width}" y1="0" x2="${x + width}" y2="${offsetHeight}"></line>
        <line x1="0" y1="${calced_y}" x2="${winWidth}" y2="${calced_y}"></line>
        <line x1="0" y1="${calced_y + height}" x2="${winWidth}" y2="${calced_y + height}"></line>
      </svg>
    `
  }
}

customElements.define('visbug-gridlines', Gridlines)
