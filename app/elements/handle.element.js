import { HandleStyles } from "../utilities/style.handle"

export class Handle extends HTMLElement {
  constructor() {
    super()
    this.$shadow = this.attachShadow({mode: 'closed'})
    this.styles = [HandleStyles]
  }

  static get observedAttributes() {
    return ['placement']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'placement') {
      this.placement = newValue
    }
  }

  connectedCallback() {
    this.$shadow.adoptedStyleSheets = this.styles
    this.$shadow.innerHTML = this.render()
    this.button = this.$shadow.querySelector('button')
    // 暂时不配置拖动
    // this.button.addEventListener('pointerdown', this.on_element_resize_start.bind(this))
    this.placement = this.getAttribute('placement')
  }

  on_element_resize_start(e) {
    e.preventDefault()
    e.stopPropagation()
  }


  disconnectedCallback() {
    // this.button.removeEventListener('pointerdown', this.on_element_resize_start.bind(this))
  }

  render() {
    return `
      <button type="button" aria-label="Resize"></button>
    `
  }

}

customElements.define("visbug-handle", Handle)
