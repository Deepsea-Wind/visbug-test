import { $, schemeRule, createClassname } from "../utilities/index"
import { MetatipStyles, MetatipLightStyles, MetatipDarkStyles } from '../utilities/style.handle'

export class Metatip extends HTMLElement {

  constructor() {
    super()
    this.$shadow = this.attachShadow({mode: 'closed'})
    this.applyScheme = schemeRule(
      this.$shadow,
      MetatipStyles, MetatipLightStyles, MetatipDarkStyles
    )
  }

  connectedCallback() {
    this.applyScheme(document.querySelector("vis-bug").getAttribute("color-scheme"))
  }

  disconnectedCallback() {}

  set meta(data) {
    this.$shadow.innerHTML = this.render(data)
  }

  render({el, width, height, localModifications, notLocalModifications}) {
    return `
      <figure>
        <header>
          <h5>
            <a node>${el.nodeName.toLowerCase()}</a>
            <a>${el.id && '#' + el.id}</a>
            ${createClassname(el).split('.')
      .filter(name => name != '')
      .reduce((links, name) => `
                ${links}
                <a>.${name}</a>
              `, '')
    }
          </h5>
          <small>
            <span>${Math.round(width)}</span><span brand>px</span>
            <span divider>×</span>
            <span>${Math.round(height)}</span><span brand>px</span>
          </small>
        </header>

        <code>${notLocalModifications.reduce((items, item) => `
          ${items}
          <span><span prop>${item.prop}</span>:</span>
          <span value>${item.value}</span>
        `, '')}
        </code>
        ${localModifications.length ? `
          <details>
            <summary>Local Modifications / Inline Styles</summary>
            <code>${localModifications.reduce((items, item) => `
              ${items}
              <span><span prop>${item.prop}</span>:</span>
              <span value>${item.value}</span>
            `, '')}
            </code>
          </details>
        ` : ''}
      </figure>
    `
  }
}

customElements.define('visbug-metatip', Metatip)
