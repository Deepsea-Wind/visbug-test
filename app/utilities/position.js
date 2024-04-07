import { getStyle } from "./style.method";
import { $ } from "../utilities/query"

export function draggable({el, surface = el, cursor = 'move', clickEvent}) {
  const state = {
    target: el,
    surface,
    mouse: {
      down: false,
      x: 0,
      y: 0,
    },
    element: {
      x: 0,
      y: 0,
    },
    travelDistance: 0
  }

  const setup = () => {
    el.style.transition   = 'none';
    surface.style.cursor = cursor;
    surface.addEventListener('mousedown', onMouseDown, true)
    surface.addEventListener('mouseup', onMouseUp, true)
    document.addEventListener('mousemove', onMouseMove, true)
  };

  const teardown = () => {
    el.style.transition   = null
    surface.style.cursor  = null
    surface.removeEventListener('mousedown', onMouseDown, true)
    surface.removeEventListener('mouseup', onMouseUp, true)
    document.removeEventListener('mousemove', onMouseMove, true)
  }

  const onMouseDown =  e => {
    clickEvent && clickEvent(e);
    if (e.target !== state.surface) return;
    e.preventDefault()
    el.style.willChange = 'top,left';
    state.element.x  = parseInt(getStyle(el, 'left'));
    state.element.y  = parseInt(getStyle(el, 'top'));
    state.mouse.x = e.clientX
    state.mouse.y = e.clientY
    state.mouse.down = true
    state.travelDistance = 0
  };

  const onMouseMove = e => {
    if (!state.mouse.down) return
    e.preventDefault()
    e.stopPropagation()
    el.style.left = state.element.x + e.clientX - state.mouse.x + 'px'
    el.style.top  = state.element.y + e.clientY - state.mouse.y + 'px'
    state.travelDistance += 1
  };

  const onMouseUp = e => {
    e.preventDefault()
    e.stopPropagation()
    state.mouse.down = false
    el.style.willChange = null
    state.element.x    = parseInt(el.style.left) || 0
    state.element.y    = parseInt(el.style.top) || 0
    state.travelDistance = 0
  };

  setup();
  el.teardown = teardown;

  return el
}


const state = {
  distances:  [],
  target:     null,
}

export const clearMeasurements = () => {
  if (!state.distances) return
  $('[data-measuring]').forEach((el) => {
     el.removeAttribute('data-measuring')
  });
  state.distances.forEach((node) => node.remove())
  state.distances = []
}

function calculateVisibleHeight(rect) {
  const viewportHeight = window.innerHeight;

  // 计算元素在视口中的可视高度
  const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);

  // 计算一半高度的垂直坐标
  const halfVerticalCoordinate = Math.max(rect.top, 0) + visibleHeight / 2;

  return halfVerticalCoordinate;
}

export const createMeasurements = ({ $anchor, $target }) => {
  if (state.target == $target && state.distances.length) return
  state.target = $target
  if (state.distances.length) clearMeasurements();

  const anchorBounds = $anchor.getBoundingClientRect()
  const targetBounds = $target.getBoundingClientRect()

  const measurements = []

  // right
  if (targetBounds.left > anchorBounds.right) {
     measurements.push({
       x: anchorBounds.right,
       // 考虑到视觉看不到，觉得还是调整一下比较好
       // y: anchorBounds.top + (anchorBounds.height / 2) - 3,
       y: calculateVisibleHeight(anchorBounds),
       d: targetBounds.left - anchorBounds.right,
       q: "right",
       index: 1,
     });
  }

  if (targetBounds.right > anchorBounds.right && anchorBounds.right > targetBounds.left) {
    measurements.push({
      x: anchorBounds.right,
      y: calculateVisibleHeight(anchorBounds),
      d: targetBounds.right - anchorBounds.right,
      q: "right",
      index: 2,
    });
  }

  // left
  if (targetBounds.right < anchorBounds.left) {
     // measurements.push({
     //   x: window.innerWidth - anchorBounds.left,
     //   y: anchorBounds.top + (anchorBounds.height / 2) - 3,
     //   d: anchorBounds.left - targetBounds.right,
     //   q: "left",
     //   index: 3,
     // })
    // 受到滚动条的宽度影响，决定使用左定位
    measurements.push({
      x: targetBounds.right,
      y: calculateVisibleHeight(anchorBounds),
      d: anchorBounds.left - targetBounds.right,
      q: "right",
      index: 3,
    })
  }

  if (targetBounds.right > anchorBounds.left && targetBounds.left < anchorBounds.left) {
    // measurements.push({
    //   x: window.innerWidth - anchorBounds.left,
    //   y: anchorBounds.top + (anchorBounds.height / 2) - 3,
    //   d: anchorBounds.left - targetBounds.left,
    //   q: "left",
    //   index: 4,
    // })
    // 受到滚动条的宽度影响，决定使用左定位
    measurements.push({
      x: targetBounds.left,
      y: calculateVisibleHeight(anchorBounds),
      d: anchorBounds.left - targetBounds.left,
      q: "right",
      index: 4,
    })
  }

  // top
  if (anchorBounds.top > targetBounds.bottom) {
    measurements.push({
      x: anchorBounds.left + (anchorBounds.width / 2) - 3,
      y: targetBounds.bottom,
      d: anchorBounds.top - targetBounds.bottom,
      q: "top",
      v: true,
      index: 5,
    })
  }

  if (anchorBounds.top < targetBounds.bottom && anchorBounds.top > targetBounds.top) {
    measurements.push({
      x: anchorBounds.left + (anchorBounds.width / 2) - 3,
      y: targetBounds.top,
      d: anchorBounds.top - targetBounds.top,
      q: "top",
      v: true,
      index: 6,
    })
  }

  // bottom
  if (targetBounds.top > anchorBounds.bottom) {
    measurements.push({
      x: anchorBounds.left + (anchorBounds.width / 2) - 3,
      y: anchorBounds.bottom,
      d: targetBounds.top - anchorBounds.bottom,
      q: "bottom",
      v: true,
      index: 7,
    })
  }

  if (targetBounds.bottom > anchorBounds.bottom && targetBounds.top < anchorBounds.bottom) {
    measurements.push({
      x: anchorBounds.left + (anchorBounds.width / 2) - 3,
      y: anchorBounds.bottom,
      d: targetBounds.bottom - anchorBounds.bottom,
      q: "bottom",
      v: true,
      index: 8,
    })
  }

  // inside  left/right
  if (anchorBounds.right > targetBounds.right && anchorBounds.left < targetBounds.left) {
    // 受到滚动条的宽度影响，觉得还是调整定位从左边开始绘制比较好
    // measurements.push({
    //   x: window.innerWidth - anchorBounds.left,
    //   y: anchorBounds.top + (anchorBounds.height / 2) - 3,
    //   d: anchorBounds.left - targetBounds.left,
    //   q: "left",
    // })
    measurements.push({
      x: targetBounds.right,
      y: calculateVisibleHeight(anchorBounds),
      d: anchorBounds.right - targetBounds.right,
      q: "right",
      index: 9,
    })
    measurements.push({
      x: anchorBounds.left,
      y: calculateVisibleHeight(anchorBounds),
      d: targetBounds.left - anchorBounds.left,
      q: "right",
      index: 10,
    })
  }

  // inside top/bottom
  if (anchorBounds.top < targetBounds.top && anchorBounds.bottom > targetBounds.bottom) {
    measurements.push({
      x: anchorBounds.left + (anchorBounds.width / 2) - 3,
      y: anchorBounds.top,
      d: targetBounds.top - anchorBounds.top,
      q: "bottom",
      v: true,
      index: 11,
    })
    measurements.push({
      x: anchorBounds.left + (anchorBounds.width / 2) - 3,
      y: targetBounds.bottom,
      d: anchorBounds.bottom - targetBounds.bottom,
      q: "top",
      v: true,
      index: 12,
    })
  }

  measurements.map((measurement) => Object.assign(measurement, {
    d: Math.round(measurement.d.toFixed(1) * 100) / 100
  })).filter((m) => Math.round(m.d) > 0).forEach((measurement) => {
    const $measurement = document.createElement("visbug-distance")
    $measurement.position = {
      line_model: measurement,
      node_label_id: state.distances.length,
    }
    document.body.appendChild($measurement)
    state.distances[state.distances.length] = $measurement
  })

}
