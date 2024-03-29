import { HandlesStyles } from "../utilities/style.handle"
import { isFixed, $ } from "../utilities/query"

export class Handles extends HTMLElement {
  constructor() {
    super()
    this.$shadow = this.attachShadow({ mode: 'closed' })
    this.styles = [HandlesStyles]
    this.on_resize = this.on_window_resize.bind(this)
  }

  connectedCallback() {
    this.$shadow.adoptedStyleSheets = this.styles
    window.addEventListener('resize', this.on_resize)
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.on_resize)
  }

  on_window_resize() {
    window.requestAnimationFrame(() => {
      const node_label_id = this.$shadow.host.getAttribute('data-label-id')
      const [source_el] = $(`[data-label-id="${node_label_id}"]`)

      if (!source_el) return

      this.position = {
        node_label_id,
        el: source_el,
        isFixed: isFixed(source_el),
      }
    })
  }

  set position({ el, node_label_id }) {
    this.$shadow.innerHTML = this.render(el.getBoundingClientRect(), node_label_id, isFixed(el))
  }

  render({ x, y, width, height, top, left }, node_label_id, isFixed) {
    this.$shadow.host.setAttribute('data-label-id', node_label_id)
    this.style.setProperty('--top', `${top + (isFixed ? 0 : window.scrollY)}px`)
    this.style.setProperty('--left', `${left}px`)
    this.style.setProperty('--position', isFixed ? 'fixed' : 'absolute')
    this.style.setProperty('--width', `${width}px`)
    this.style.setProperty('--height', `${height}px`)

    return `
      <svg
        class="visbug-handles"
        width="${width}" height="${height}"
        viewBox="0 0 ${width} ${height}"
        version="1.1" xmlns="http://www.w3.org/2000/svg"
      >
        <rect stroke="hotpink" fill="none" width="100%" height="100%"></rect>
      </svg>
      <visbug-handle placement="top-start"></visbug-handle>
      <visbug-handle placement="top-center"></visbug-handle>
      <visbug-handle placement="top-end"></visbug-handle>
      <visbug-handle placement="middle-start"></visbug-handle>
      <visbug-handle placement="middle-end"></visbug-handle>
      <visbug-handle placement="bottom-start"></visbug-handle>
      <visbug-handle placement="bottom-center"></visbug-handle>
      <visbug-handle placement="bottom-end"></visbug-handle>
    `
  }

}

customElements.define("visbug-handles", Handles)
