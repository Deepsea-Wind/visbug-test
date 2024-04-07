import {
  $,
  deepElementFromPoint,
  isOffBounds,
  getStyle,
  createClassname,
  isFixed,
  createMeasurements,
  clearMeasurements,
} from "../utilities";

/**
 1. 处理页面级标准事件(点击选择，监听...)
 2. tool特定功能隔离在外面注入
 3. tool通过订阅selectedCallbacks事件监听这里的行为
 */
export function Selectable(visbug) {
  const page = $(document.body)[0];
  let selectedCallbacks = []; // 事件队列，选择页面元素后进行广播触发
  let selected = []; // 页面元素，多选感觉现在没必要支持，先放着
  let handles = [];
  let labels = [];
  let hover_state = {
    target:   null,
    element:  null,
    label:    null,
  };

  const listen = () => {
    page.on('click', on_click)
    page.on('mousemove', on_hover)
    page.on('dblclick', on_dblclick)
  }

  const unListen = () => {
    page.off('click', on_click)
    page.off('mousemove', on_hover)
    page.off('dblclick', on_dblclick)
  }

  const on_click = (e) => {
    const $target = deepElementFromPoint(e.clientX, e.clientY);

    if (isOffBounds($target) && !selected.filter((el) => el == $target).length) return

    e.preventDefault()

    if (!e.shiftKey) {
      e.stopPropagation();
      clearMeasurements();
      unselect_all({ silent:true })
    }

    select($target)
  }


  const on_dblclick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const $target = deepElementFromPoint(e.clientX, e.clientY);
    if (isOffBounds($target)) return
    EditText([$target])
  }

  const on_hover = (e) => {
    const $target = deepElementFromPoint(e.clientX, e.clientY)
    const tool = visbug.activeTool
    if (isOffBounds($target) && !selected.filter((el) => el == $target).length) return
    clearMeasurements()
    clearHover()

    overlayHoverUI({
      el: $target,
      // no_hover: tool === 'guides',
      no_label: tool === 'inspector',
    })

    // 创建测量边框
    if (tool === 'guides' && selected.length >= 1 && !selected.includes($target)) {
      $target.setAttribute('data-measuring', true)
      const [$anchor] = selected
      createMeasurements({ $anchor, $target })
    }

  }

  const unselect_all = ({ silent = false } = {}) => {
    selected.forEach(el => {
      $(el).attr({
        'data-selected': null,
        'data-label-id': null,
        'data-measuring': null,
      })
    })

    Array.from([
      ...$('visbug-handles'),
      ...$('visbug-label'),
      ...$('visbug-hover'),
      ...$('visbug-distance'),
    ]).forEach(el => el.remove())

    labels    = []
    handles   = []
    selected  = []

    !silent && tellWatchers()
  }

  const select = (el) => {
    const id = handles.length
    const tool = visbug.activeTool

    el.setAttribute('data-selected', true)
    el.setAttribute('data-label-id', id)

    overlayMetaUI({
      el,
      id,
      // 暂时都不显示
      no_label: tool === 'inspector' || tool === 'guides',
    })

    selected.unshift(el)
    tellWatchers()
  }

  const onSelectedUpdate = (cb, immediateCallBack) => {
    selectedCallbacks.push(cb)
    immediateCallBack && cb(selected);
  };

  const removeSelectedCallback = (cb) => {
    selectedCallbacks = selectedCallbacks.filter(callback => callback != cb)
  }

  const tellWatchers = () => selectedCallbacks.forEach(cb => cb(selected))

  listen()

  const setLabel = (node, label) => {
    label.text = handleLabelText(node, visbug.activeTool)
    label.update = { boundingRect: node.getBoundingClientRect(), isFixed: isFixed(node) }
  }

  const setHandle = (el, handle) => {
    handle.position = {
      el,
      node_label_id:  el.getAttribute('data-label-id'),
    }
  }

  const createObserver = (node, { handle,label }) => {
     return new MutationObserver((list) => {
       label && setLabel(node, label)
       handle && setHandle(node, handle)
     })
  }

  const overlayMetaUI = ({ el, id, no_label = true }) => {
    let handle = createHandle({el, id})
    let label  = no_label
      ? null
      : createLabel({
        el,
        id,
        template: handleLabelText(el, visbug.activeTool)
      })
     // 对自身以及父节点，子节点观察，增删改查是做出调整变化
    let observer        = createObserver(el, { handle,label })
    let parentObserver  = createObserver(el, { handle,label })

    observer.observe(el, { attributes: true })
    parentObserver.observe(el.parentNode, { childList:true, subtree:true })

    // 不推荐，报警告了，提示推荐MutationObserver
    // $(handle).on('DOMNodeRemoved', () => {
    //   observer.disconnect()
    //   parentObserver.disconnect()
    // })
    const onDOMNodeRemovedObserver = onDOMNodeRemoved(handle, () => {
        observer.disconnect()
        parentObserver.disconnect()
    });
    onDOMNodeRemovedObserver.observe(handle.parentNode, { childList: true, subtree: true });
  }

  const onDOMNodeRemoved = (targetNode, cb) => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.removedNodes.length > 0) {
          if (Array.from(mutation.removedNodes).includes(targetNode)) {
            cb && cb();
            observer.disconnect();
          }
        }
      });
    });
    return observer;
  }

  const overlayHoverUI = ({el, no_hover = false, no_label = true}) => {
    if (hover_state.target === el) return
    hover_state.target = el

    hover_state.element = no_hover
      ? null
      : createHover(el)

    hover_state.label   = no_label
      ? null
      : createHoverLabel(el, handleLabelText(el, "wh"))

  };

  // 绘制选择边框
  const createHandle = ({el, id}) => {
    if (!handles[id]) {
      const handle = document.createElement('visbug-handles')
      handle.position = { el, node_label_id: id }
      document.body.appendChild(handle)
      handles[handles.length] = handle
      return handle;
    }
  }

  const createHoverLabel = (el, text) => {
    if (hover_state.label) {
      hover_state.label.remove()
    }

    hover_state.label = document.createElement('visbug-label')
    document.body.appendChild(hover_state.label)

    hover_state.label.text = text
    hover_state.label.position = {
      boundingRect:   {
        ...el.getBoundingClientRect(),
        x: 0,
        y: 18,
      },
      node_label_id:  'hover',
      isFixed: true,
    }

    hover_state.label.style.setProperty(`--label-bg`, `hsla(267, 100%, 58%, .3)`)

    return hover_state.label
  }

  const createLabel = ({ el, id, template }) => {
     if (!labels[id]) {
       const label = document.createElement('visbug-label')
       label.text = template
       label.position = {
         boundingRect:   el.getBoundingClientRect(),
         node_label_id:  id,
         isFixed: isFixed(el),
       }
       document.body.appendChild(label)
       labels[labels.length] = label
       return label
     }
  }

  const createHover = (el) => {
    if (!el.hasAttribute('data-label-id')) {
      if (hover_state.element) hover_state.element.remove()

      hover_state.element = document.createElement('visbug-hover')
      document.body.appendChild(hover_state.element)
      hover_state.element.position = {el}

      return hover_state.element
    }
  }

  const clearHover = () => {
    if (!hover_state.target) return

    hover_state.element && hover_state.element.remove()
    hover_state.label && hover_state.label.remove()

    hover_state.target  = null
    hover_state.element = null
    hover_state.label   = null
  }

  const disconnect = () => {
    unselect_all()
    unListen()
  }

  return {
    listen,
    unselect_all,
    onSelectedUpdate,
    removeSelectedCallback,
    disconnect,
  }

}

export const handleLabelText = (el, activeTool) => {
  switch(activeTool) {
    case 'wh':
      const { width, height } = el.getBoundingClientRect();
      return `
        <span style='margin-right: 10px'>w: ${Math.round(width)}</span>
        <span>h: ${Math.round(height)}</span>
       `
    case 'align':
      return getStyle(el, 'display')

    default:
      return `
        <a node>${el.nodeName.toLowerCase()}</a>
        <a>${el.id && '#' + el.id}</a>
        ${createClassname(el).split('.')
        .filter(name => name != '')
        .reduce((links, name) => `
            ${links}
            <a>.${name}</a>
          `, '')
      }
      `
  }
}

const stopBubbling = e => e.key != 'Escape' && e.stopPropagation()

const removeEditability = ({target}) => {
  target.removeAttribute('contenteditable')
  target.removeAttribute('spellcheck')
  target.removeEventListener('blur', removeEditability)
  target.removeEventListener('keydown', stopBubbling)
}

function EditText(elements) {
  elements.map(el => {
    let $el = $(el)

    $el.attr({
      contenteditable: true,
      spellcheck: true,
    })
    el.focus()

    $el.on('keydown', stopBubbling)
    $el.on('blur', removeEditability)
  })
}

