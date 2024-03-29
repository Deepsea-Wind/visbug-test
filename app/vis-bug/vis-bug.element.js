import { VisBugModel } from "./model";
import { Guides, Selectable, MetaTip, Compare } from "../features/index"
import { $, VisBugStyle, VisBugLightStyles, VisBugDarkStyles, schemeRule, draggable } from "../utilities/index";
import "../elements/index"

export default class VisBug extends HTMLElement {
   constructor() {
     super();

     this.toolbar_model = VisBugModel;
     this.$shadow = this.attachShadow({ mode: "closed" });
     this.applyScheme = schemeRule(this.$shadow, VisBugStyle, VisBugLightStyles, VisBugDarkStyles);
   }

   static get observedAttributes() {
     return ['color-scheme']
   }

  connectedCallback() {
    this.setup();
    // 统一装配选中功能
    this.selectorEngine = Selectable(this)
    this.toolSelected($('[data-tool="guides"]', this.$shadow)[0])
  }

  disconnectedCallback() {
    this.deactivate_feature();
     this.clearUp();
    this.selectorEngine.disconnect();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'color-scheme')
      this.applyScheme(newValue)
  };

  clickEvent = (e) => {
    const target = e.target;
    const toolButton = target.closest('[data-tool]');
    if (toolButton) {
      e.stopPropagation();
      this.toolSelected(toolButton)
    }
  }

  toolSelected(el) {
     if (typeof el === 'string') {
       el = $(`[data-tool="${el}"]`, this.$shadow)[0];
     }
     // 增强el
     el = $(el)[0];

    if (this.active_tool) {
      this.active_tool.attr('data-active', null)
      this.deactivate_feature()
    }

     el.attr('data-active', true);
     this.active_tool = el;
     //data-* 属性
     this[el.dataset.tool]();
  }

  setup() {
    this.$shadow.innerHTML = this.render()
    if (!this.hasAttribute('color-scheme')) {
      this.setAttribute('color-scheme', 'auto')
    }
    const main_ol = this.$shadow.querySelector('ol[vis-bug-ol]');
    // tool装配鼠标拖动
    draggable({
      el:this,
      surface: main_ol,
      cursor: 'grab',
      clickEvent: this.clickEvent,
    })
    // 监听文档的键盘事件
    // document.addEventListener('keydown', function(event) {
    //   if (event.key === 'h') {
    //     // 阻止浏览器默认行为
    //     event.preventDefault();
    //     this.keySequence += event.key;
    //     if (this.keySequence === 'hly') {
    //        console.log("开启调试");
    //     }
    //   }
    // });
  }

  clearUp() {
    Array.from(document.body.children)
      .filter(node => node.nodeName.includes('VISBUG'))
      .forEach(el => el.remove())

    this.teardown();
  }

  guides() {
    this.deactivate_feature = Guides(this.selectorEngine, false)
  }

  inspector() {
    this.deactivate_feature = MetaTip(this.selectorEngine)
  }

  padding() {
    this.deactivate_feature = Guides(this.selectorEngine, true)
  }

  compare() {
    this.deactivate_feature = Compare(this.selectorEngine)
  }

  demoTip({key, tool, label, description}) {
    return `
      <aside ${tool}>
        <div>${label} - ${description}</div>
      </aside>
    `
  }

  get activeTool() {
    return this.active_tool.dataset.tool;
  }

  render() {
    return `
      <ol vis-bug-ol>
        ${Object.entries(this.toolbar_model).reduce((list, [key, tool]) => `
          ${list}
          <li aria-label="${tool.label} Tool" aria-description="${tool.description}" aria-hotkey="${key}" data-tool="${tool.tool}" data-active="${key == 'g'}">
            ${tool.icon}
            ${this.demoTip({key, ...tool})}
          </li>
        `,'')}
      </ol>
    `
  }

}

customElements.define("vis-bug", VisBug);
