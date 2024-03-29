const sugar = {
  on: function (names, fn) {
    names.split(' ').forEach(name => {
       this.addEventListener(name, fn);
    });
    return this;
  },
  off: function (names, fn) {
    names.split(' ').forEach(name => {
      this.removeEventListener(name, fn);
    })
    return this;
  },
  attr: function (attr, val) {
    if (val === undefined) return this.getAttribute(attr)
    val === null ? this.removeAttribute(attr) : this.setAttribute(attr, val || '');
    return this;
  },
};

export function $(query, $context = document) {
   let $node = query instanceof NodeList || Array.isArray(query)
   ? query : query instanceof HTMLElement || query instanceof SVGAElement || query.namespaceURI === 'http://www.w3.org/2000/svg'
   ? [query] : $context.querySelectorAll(query);

   if (!$node.length) $node = [];

   return Object.assign(
     Array.from($node).map($el => Object.assign($el, sugar)),
     {
       on: function (names, fn) {
          this.forEach($el => $el.on(names, fn));
          return this;
       },
       off: function (names, fn) {
         this.forEach($el => $el.off(names, fn));
         return this;
       },
       attr: function (attrs, val) {
         if (typeof attrs === 'string' && val === undefined) return this[0].attr(attrs)
         else if (typeof attrs === 'object') {
           this.forEach($el => Object.entries(attrs).forEach(([key, val]) => $el.attr(key, val)))
         }
         else if (typeof attrs == 'string' && (val || val == null || val == '')) {
           this.forEach($el => $el.attr(attrs, val))
         }
         return this
       }
     }
   )
}

export const deepElementFromPoint = (x, y) => {
   const el = document.elementFromPoint(x, y);

  const crawlShadows = (node) => {
     if (node.shadowRoot) {
       const potential = node.shadowRoot.elementFromPoint(x, y)
       if (potential == node) return node
       return crawlShadows(potential)
     }
     return node;
  }

  const nested_shadow = crawlShadows(el)

  return nested_shadow || el

}

export const isOffBounds = (node) => node.closest && (
  node.closest('vis-bug')
  || node.closest('visbug-metatip')
  || node.closest('visbug-label')
  || node.closest('visbug-handles')
  || node.closest('visbug-gridlines')
  || node.closest('visbug-compare')
)

export const isFixed = elem => {
  do {
    if (window.getComputedStyle(elem).position == 'fixed') return true;
  } while (elem = elem.offsetParent);
  return false;
}

export function windowBounds() {
  const height  = window.innerHeight
  const width   = window.innerWidth
  const body    = document.documentElement.clientWidth

  const calcWidth = body <= width
    ? body
    : width

  return {
    winHeight: height,
    winWidth:  calcWidth,
  }
}
