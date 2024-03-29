import { BoxModelStyles } from '../utilities/style.handle'

export class BoxModel extends HTMLElement {

  constructor() {
    super()
    this.$shadow = this.attachShadow({mode: 'closed'})
    this.drawable = {}
  }

  connectedCallback() {
    this.$shadow.adoptedStyleSheets = [BoxModelStyles]
  }

  disconnectedCallback() {}

  set position(payload) {
    this.$shadow.innerHTML = this.render(payload)
    this.createMeasurements(payload)
  }

  render({ bounds, sides }) {
    this.drawable = {
      height: bounds.height,
      width: bounds.width + window.scrollX,
      top: bounds.top + window.scrollY,
      left: bounds.left,
      rotation: 'rotate(-45)',
    }

    this.drawable.bg = 'hsla(330, 100%, 71%, 15%)'
    this.drawable.stripe = 'hsla(330, 100%, 71%, 80%)'

    this.styles({sides})

    return `
      <div mask>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="pinstripe" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="${this.drawable.rotation}" class="pattern">
              <line x1="0" y="0" x2="0" y2="10" stroke="${this.drawable.stripe}" stroke-width="1"></line>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pinstripe)"></rect>
        </svg>
      </div>
    `
  }

  styles({sides}) {
    this.style.setProperty('--width', `${this.drawable.width}px`)
    this.style.setProperty('--height', `${this.drawable.height}px`)
    this.style.setProperty('--top', `${this.drawable.top}px`)
    this.style.setProperty('--left', `${this.drawable.left}px`)
    this.style.setProperty('--bg', `${this.drawable.bg}`)

    this.style.setProperty('--target-left', `${sides.left}px`)
    this.style.setProperty('--target-top', `${sides.top}px`)
    this.style.setProperty('--target-right', `${sides.right}px`)
    this.style.setProperty('--target-bottom', `${sides.bottom}px`)

    this.style.setProperty('--offset-right', `${this.drawable.width - sides.right}px`)
    this.style.setProperty('--offset-bottom', `${this.drawable.height - sides.bottom}px`)
  }

  createMeasurements({ bounds, sides }) {
    if (sides.top) {
      this.createMeasurement({
        x: bounds.left + (bounds.width / 2) - 3,
        y: bounds.top,
        d: sides.top,
        q: 'top',
        v: true,
        color: "pink",
      })
    }
    if (sides.bottom) {
      this.createMeasurement({
        x: bounds.left + (bounds.width / 2) - 3,
        y: bounds.bottom - sides.bottom,
        d: sides.bottom,
        q: 'bottom',
        v: true,
        color: "pink",
      })
    }
    if (sides.right) {
      this.createMeasurement({
        x: bounds.left,
        y: bounds.top + (bounds.height / 2) - 3,
        d: sides.left,
        q: 'right',
        v: false,
        color: "pink",
      })
    }
    if (sides.left) {
      this.createMeasurement({
        x: bounds.right - sides.right,
        y:  bounds.top + (bounds.height / 2) - 3,
        d: sides.right,
        q: 'right',
        v: false,
        color: "pink",
      })
    }
  }

  createMeasurement(line_model, node_label_id= 0) {
    const measurement = document.createElement('visbug-distance')
    measurement.position = { line_model, node_label_id }
    this.$shadow.appendChild(measurement)
  }
}

customElements.define('visbug-boxmodel', BoxModel)
