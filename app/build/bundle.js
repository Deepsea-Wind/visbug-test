const toDelete = `
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100">
   <path fill="#f37e98" d="M25,30l3.645,47.383C28.845,79.988,31.017,82,33.63,82h32.74c2.613,0,4.785-2.012,4.985-4.617L75,30"></path><path fill="#f15b6c" d="M65 38v35c0 1.65-1.35 3-3 3s-3-1.35-3-3V38c0-1.65 1.35-3 3-3S65 36.35 65 38zM53 38v35c0 1.65-1.35 3-3 3s-3-1.35-3-3V38c0-1.65 1.35-3 3-3S53 36.35 53 38zM41 38v35c0 1.65-1.35 3-3 3s-3-1.35-3-3V38c0-1.65 1.35-3 3-3S41 36.35 41 38zM77 24h-4l-1.835-3.058C70.442 19.737 69.14 19 67.735 19h-35.47c-1.405 0-2.707.737-3.43 1.942L27 24h-4c-1.657 0-3 1.343-3 3s1.343 3 3 3h54c1.657 0 3-1.343 3-3S78.657 24 77 24z"></path><path fill="#1f212b" d="M66.37 83H33.63c-3.116 0-5.744-2.434-5.982-5.54l-3.645-47.383 1.994-.154 3.645 47.384C29.801 79.378 31.553 81 33.63 81H66.37c2.077 0 3.829-1.622 3.988-3.692l3.645-47.385 1.994.154-3.645 47.384C72.113 80.566 69.485 83 66.37 83zM56 20c-.552 0-1-.447-1-1v-3c0-.552-.449-1-1-1h-8c-.551 0-1 .448-1 1v3c0 .553-.448 1-1 1s-1-.447-1-1v-3c0-1.654 1.346-3 3-3h8c1.654 0 3 1.346 3 3v3C57 19.553 56.552 20 56 20z"></path><path fill="#1f212b" d="M77,31H23c-2.206,0-4-1.794-4-4s1.794-4,4-4h3.434l1.543-2.572C28.875,18.931,30.518,18,32.265,18h35.471c1.747,0,3.389,0.931,4.287,2.428L73.566,23H77c2.206,0,4,1.794,4,4S79.206,31,77,31z M23,25c-1.103,0-2,0.897-2,2s0.897,2,2,2h54c1.103,0,2-0.897,2-2s-0.897-2-2-2h-4c-0.351,0-0.677-0.185-0.857-0.485l-1.835-3.058C69.769,20.559,68.783,20,67.735,20H32.265c-1.048,0-2.033,0.559-2.572,1.457l-1.835,3.058C27.677,24.815,27.351,25,27,25H23z"></path><path fill="#1f212b" d="M61.5 25h-36c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h36c.276 0 .5.224.5.5S61.776 25 61.5 25zM73.5 25h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5S73.776 25 73.5 25zM66.5 25h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5S66.776 25 66.5 25zM50 76c-1.654 0-3-1.346-3-3V38c0-1.654 1.346-3 3-3s3 1.346 3 3v25.5c0 .276-.224.5-.5.5S52 63.776 52 63.5V38c0-1.103-.897-2-2-2s-2 .897-2 2v35c0 1.103.897 2 2 2s2-.897 2-2v-3.5c0-.276.224-.5.5-.5s.5.224.5.5V73C53 74.654 51.654 76 50 76zM62 76c-1.654 0-3-1.346-3-3V47.5c0-.276.224-.5.5-.5s.5.224.5.5V73c0 1.103.897 2 2 2s2-.897 2-2V38c0-1.103-.897-2-2-2s-2 .897-2 2v1.5c0 .276-.224.5-.5.5S59 39.776 59 39.5V38c0-1.654 1.346-3 3-3s3 1.346 3 3v35C65 74.654 63.654 76 62 76z"></path><path fill="#1f212b" d="M59.5 45c-.276 0-.5-.224-.5-.5v-2c0-.276.224-.5.5-.5s.5.224.5.5v2C60 44.776 59.776 45 59.5 45zM38 76c-1.654 0-3-1.346-3-3V38c0-1.654 1.346-3 3-3s3 1.346 3 3v35C41 74.654 39.654 76 38 76zM38 36c-1.103 0-2 .897-2 2v35c0 1.103.897 2 2 2s2-.897 2-2V38C40 36.897 39.103 36 38 36z"></path>
  </svg>
`;

const search = `
  <svg viewBox="0 0 24 24">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
`;

const padding = `
  <svg viewBox="0 0 24 24">
    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"/>
  </svg>
`;

const inspector = `
  <svg viewBox="0 0 24 24">
    <g>
      <rect x="11" y="7" width="2" height="2"/>
      <rect x="11" y="11" width="2" height="6"/>
      <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8
        c0-4.41,3.59-8,8-8s8,3.59,8,8C20,16.41,16.41,20,12,20z"/>
    </g>
  </svg>
`;

const guides = `
  <svg viewBox="0 0 24 24">
    <path d="M21,6H3C1.9,6,1,6.9,1,8v8c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V8C23,6.9,22.1,6,21,6z M21,16H3V8h2v4h2V8h2v4h2V8h2v4h2V8
    h2v4h2V8h2V16z"/>
  </svg>
`;

const _switch = `
   <svg t="1712109889318" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1600" xmlns:xlink="http://www.w3.org/1999/xlink"> <path d="M640 146.56v135.936c36.224 15.808 69.504 38.4 98.304 67.2C798.72 410.112 832 490.496 832 576s-33.28 165.824-93.696 226.304C677.888 862.72 597.504 896 512 896s-165.824-33.28-226.304-93.696C225.28 741.888 192 661.504 192 576s33.28-165.824 93.696-226.304c28.8-28.8 62.08-51.392 98.304-67.2V146.56a448 448 0 1 0 256 0zM448 0h128v512H448z" p-id="1601"></path> </svg>
`;

const VisBugModel = {
  g: {
    tool: "guides",
    icon: guides,
    label: "标尺",
    description: "测量距离(g)",
  },
  i: {
    tool: 'inspector',
    icon: inspector,
    label: '信息面板',
    description: '样式信息面板(i)',
  },
  // m: {
  //   tool:        'margin',
  //   icon:        Icons.margin,
  //   label:       '',
  //   description: 'Add or subtract outer space from any or all sides of the selected element(s)',
  // },
  p: {
    tool:        'padding',
    icon:        padding,
    label:       '内边距',
    description: `padding(p)`,
  },
  c: {
    tool:        'compare',
    icon:        search,
    label:       'ui比照',
    description: '像素对比(s)',
  },
  b: {
    tool:        'switch',
    icon:        _switch,
    label:       '测量开关',
  },
};

(function () {

  if (typeof document === 'undefined' || 'adoptedStyleSheets' in document) { return; }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var hasShadyCss = 'ShadyCSS' in window && !window.ShadyCSS.nativeShadow;
  var deferredStyleSheets = [];
  var deferredDocumentStyleElements = [];
  var deferredAdopters = [];
  var adoptedSheetsRegistry = new WeakMap();
  var sheetMetadataRegistry = new WeakMap();
  var locationRegistry = new WeakMap();
  var shadowRootMap = new WeakMap();
  var observerRegistry = new WeakMap();
  var appliedActionsCursorRegistry = new WeakMap();
  var state = {
    loaded: false
  };
  var frame = {
    body: null,
    CSSStyleSheet: null
  };
  var OldCSSStyleSheet = CSSStyleSheet;

  var importPattern = /@import/;
  function checkAndPrepare(sheets, container) {
    var locationType = container === document ? 'Document' : 'ShadowRoot';
    if (!Array.isArray(sheets)) {
      throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Iterator getter is not callable.");
    }
    if (!sheets.every(instanceOfStyleSheet)) {
      throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + locationType + ": Failed to convert value to 'CSSStyleSheet'");
    }
    var uniqueSheets = sheets.filter(function (value, index) {
      return sheets.indexOf(value) === index;
    });
    adoptedSheetsRegistry.set(container, uniqueSheets);
    return uniqueSheets;
  }
  function isDocumentLoading() {
    return document.readyState === 'loading';
  }
  function getAdoptedStyleSheet(location) {
    return adoptedSheetsRegistry.get(location.parentNode === document.documentElement ? document : location);
  }
  function rejectImports(contents) {
    if (contents === void 0) {
      contents = '';
    }
    var imports = contents.match(importPattern) || [];
    var sheetContent = contents;
    if (imports.length) {
      console.warn('@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418');
      imports.forEach(function (_import) {
        sheetContent = sheetContent.replace(_import, '');
      });
    }
    return sheetContent;
  }

  var cssStyleSheetMethods = ['addImport', 'addPageRule', 'addRule', 'deleteRule', 'insertRule', 'removeImport', 'removeRule'];
  var illegalInvocation = 'Illegal invocation';
  function updatePrototype(proto) {
    proto.replace = function () {
      return Promise.reject(new DOMException("Can't call replace on non-constructed CSSStyleSheets."));
    };
    proto.replaceSync = function () {
      throw new DOMException("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.");
    };
  }
  function updateAdopters(sheet) {
    var _sheetMetadataRegistr = sheetMetadataRegistry.get(sheet),
        adopters = _sheetMetadataRegistr.adopters,
        basicStyleElement = _sheetMetadataRegistr.basicStyleElement;
    adopters.forEach(function (styleElement) {
      styleElement.innerHTML = basicStyleElement.innerHTML;
    });
  }
  var ConstructStyleSheet =
  function () {
    function ConstructStyleSheet() {
      var basicStyleElement = document.createElement('style');
      if (state.loaded) {
        frame.body.appendChild(basicStyleElement);
      } else {
        document.head.appendChild(basicStyleElement);
        basicStyleElement.disabled = true;
        deferredStyleSheets.push(basicStyleElement);
      }
      sheetMetadataRegistry.set(this, {
        adopters: new Map(),
        actions: [],
        basicStyleElement: basicStyleElement
      });
    }
    var _proto = ConstructStyleSheet.prototype;
    _proto.replace = function replace(contents) {
      var sanitized = rejectImports(contents);
      try {
        if (!sheetMetadataRegistry.has(this)) {
          throw new TypeError(illegalInvocation);
        }
        var _sheetMetadataRegistr2 = sheetMetadataRegistry.get(this),
            basicStyleElement = _sheetMetadataRegistr2.basicStyleElement;
        basicStyleElement.innerHTML = sanitized;
        updateAdopters(this);
        return Promise.resolve(this);
      } catch (ex) {
        return Promise.reject(ex);
      }
    };
    _proto.replaceSync = function replaceSync(contents) {
      var sanitized = rejectImports(contents);
      if (!sheetMetadataRegistry.has(this)) {
        throw new TypeError(illegalInvocation);
      }
      var _sheetMetadataRegistr3 = sheetMetadataRegistry.get(this),
          basicStyleElement = _sheetMetadataRegistr3.basicStyleElement;
      basicStyleElement.innerHTML = sanitized;
      updateAdopters(this);
      return this;
    };
    _createClass(ConstructStyleSheet, [{
      key: "cssRules",
      get: function get() {
        if (!sheetMetadataRegistry.has(this)) {
          throw new TypeError(illegalInvocation);
        }
        var _sheetMetadataRegistr4 = sheetMetadataRegistry.get(this),
            basicStyleElement = _sheetMetadataRegistr4.basicStyleElement;
        return basicStyleElement.sheet.cssRules;
      }
    }]);
    return ConstructStyleSheet;
  }();
  cssStyleSheetMethods.forEach(function (method) {
    ConstructStyleSheet.prototype[method] = function () {
      if (!sheetMetadataRegistry.has(this)) {
        throw new TypeError(illegalInvocation);
      }
      var args = arguments;
      var _sheetMetadataRegistr5 = sheetMetadataRegistry.get(this),
          adopters = _sheetMetadataRegistr5.adopters,
          actions = _sheetMetadataRegistr5.actions,
          basicStyleElement = _sheetMetadataRegistr5.basicStyleElement;
      var result = basicStyleElement.sheet[method].apply(basicStyleElement.sheet, args);
      adopters.forEach(function (styleElement) {
        if (styleElement.sheet) {
          styleElement.sheet[method].apply(styleElement.sheet, args);
        }
      });
      actions.push([method, args]);
      return result;
    };
  });
  function instanceOfStyleSheet(instance) {
    return instance && instance.constructor === ConstructStyleSheet || instance instanceof OldCSSStyleSheet || instance instanceof frame.CSSStyleSheet;
  }
  Object.defineProperty(ConstructStyleSheet, Symbol.hasInstance, {
    configurable: true,
    value: instanceOfStyleSheet
  });

  function adoptStyleSheets(location) {
    var newStyles = document.createDocumentFragment();
    var sheets = getAdoptedStyleSheet(location);
    var observer = observerRegistry.get(location);
    for (var i = 0, len = sheets.length; i < len; i++) {
      var _sheetMetadataRegistr = sheetMetadataRegistry.get(sheets[i]),
          adopters = _sheetMetadataRegistr.adopters,
          basicStyleElement = _sheetMetadataRegistr.basicStyleElement;
      var elementToAdopt = adopters.get(location);
      if (elementToAdopt) {
        observer.disconnect();
        newStyles.appendChild(elementToAdopt);
        if (!elementToAdopt.innerHTML || elementToAdopt.sheet && !elementToAdopt.sheet.cssText) {
          elementToAdopt.innerHTML = basicStyleElement.innerHTML;
        }
        observer.observe();
      } else {
        elementToAdopt = document.createElement('style');
        elementToAdopt.innerHTML = basicStyleElement.innerHTML;
        locationRegistry.set(elementToAdopt, location);
        appliedActionsCursorRegistry.set(elementToAdopt, 0);
        adopters.set(location, elementToAdopt);
        newStyles.appendChild(elementToAdopt);
      }
      if (location === document.head) {
        deferredDocumentStyleElements.push(elementToAdopt);
      }
    }
    location.insertBefore(newStyles, location.lastChild);
    for (var _i = 0, _len = sheets.length; _i < _len; _i++) {
      var _sheetMetadataRegistr2 = sheetMetadataRegistry.get(sheets[_i]),
          _adopters = _sheetMetadataRegistr2.adopters,
          actions = _sheetMetadataRegistr2.actions;
      var adoptedStyleElement = _adopters.get(location);
      var cursor = appliedActionsCursorRegistry.get(adoptedStyleElement);
      if (actions.length > 0) {
        for (var _i2 = cursor, _len2 = actions.length; _i2 < _len2; _i2++) {
          var _actions$_i = actions[_i2],
              key = _actions$_i[0],
              args = _actions$_i[1];
          adoptedStyleElement.sheet[key].apply(adoptedStyleElement.sheet, args);
        }
        appliedActionsCursorRegistry.set(adoptedStyleElement, actions.length - 1);
      }
    }
  }
  function removeExcludedStyleSheets(location, oldSheets) {
    var sheets = getAdoptedStyleSheet(location);
    for (var i = 0, len = oldSheets.length; i < len; i++) {
      if (sheets.indexOf(oldSheets[i]) > -1) {
        continue;
      }
      var _sheetMetadataRegistr3 = sheetMetadataRegistry.get(oldSheets[i]),
          adopters = _sheetMetadataRegistr3.adopters;
      var observer = observerRegistry.get(location);
      var styleElement = adopters.get(location);
      if (!styleElement) {
        styleElement = adopters.get(document.head);
      }
      observer.disconnect();
      styleElement.parentNode.removeChild(styleElement);
      observer.observe();
    }
  }

  function adoptAndRestoreStylesOnMutationCallback(mutations) {
    if (!document) {
      return;
    }
    for (var i = 0, len = mutations.length; i < len; i++) {
      var _mutations$i = mutations[i],
          addedNodes = _mutations$i.addedNodes,
          removedNodes = _mutations$i.removedNodes;
      for (var _i = 0, _len = removedNodes.length; _i < _len; _i++) {
        var location = locationRegistry.get(removedNodes[_i]);
        if (location) {
          adoptStyleSheets(location);
        }
      }
      if (!hasShadyCss) {
        for (var _i2 = 0, _len2 = addedNodes.length; _i2 < _len2; _i2++) {
          var iter = document.createNodeIterator(addedNodes[_i2], NodeFilter.SHOW_ELEMENT, function (node) {
            var shadowRoot = shadowRootMap.get(node);
            return shadowRoot && shadowRoot.adoptedStyleSheets.length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
          },
          null, false);
          var node = void 0;
          while (node = iter.nextNode()) {
            adoptStyleSheets(shadowRootMap.get(node));
          }
        }
      }
    }
  }
  function createObserver(location) {
    var observer = new MutationObserver(adoptAndRestoreStylesOnMutationCallback);
    var observerTool = {
      observe: function observe() {
        observer.observe(location, {
          childList: true,
          subtree: true
        });
      },
      disconnect: function disconnect() {
        observer.disconnect();
      }
    };
    observerRegistry.set(location, observerTool);
    observerTool.observe();
  }

  function initPolyfill() {
    var iframe = document.createElement('iframe');
    iframe.hidden = true;
    document.body.appendChild(iframe);
    frame.body = iframe.contentWindow.document.body;
    frame.CSSStyleSheet = iframe.contentWindow.CSSStyleSheet;
    updatePrototype(iframe.contentWindow.CSSStyleSheet.prototype);
    createObserver(document.body);
    state.loaded = true;
    var fragment = document.createDocumentFragment();
    for (var i = 0, len = deferredStyleSheets.length; i < len; i++) {
      deferredStyleSheets[i].disabled = false;
      fragment.appendChild(deferredStyleSheets[i]);
    }
    frame.body.appendChild(fragment);
    for (var _i = 0, _len = deferredDocumentStyleElements.length; _i < _len; _i++) {
      fragment.appendChild(deferredDocumentStyleElements[_i]);
    }
    document.body.insertBefore(fragment, document.body.firstChild);
    for (var _i2 = 0, _len2 = deferredAdopters.length; _i2 < _len2; _i2++) {
      adoptStyleSheets(deferredAdopters[_i2]);
    }
    deferredAdopters.length = 0;
    deferredStyleSheets.length = 0;
    deferredDocumentStyleElements.length = 0;
  }
  function initAdoptedStyleSheets() {
    var adoptedStyleSheetAccessors = {
      configurable: true,
      get: function get() {
        return adoptedSheetsRegistry.get(this) || [];
      },
      set: function set(sheets) {
        var oldSheets = adoptedSheetsRegistry.get(this) || [];
        checkAndPrepare(sheets, this);
        var location = this === document ?
        isDocumentLoading() ? this.head : this.body : this;
        var isConnected = 'isConnected' in location ? location.isConnected : document.body.contains(location);
        if (isConnected) {
          window.requestAnimationFrame(function () {
            adoptStyleSheets(location);
            removeExcludedStyleSheets(location, oldSheets);
          });
        } else {
          deferredAdopters.push(location);
        }
      }
    };
    Object.defineProperty(Document.prototype, 'adoptedStyleSheets', adoptedStyleSheetAccessors);
    if (typeof ShadowRoot !== 'undefined') {
      var attachShadow = Element.prototype.attachShadow;
      Element.prototype.attachShadow = function () {
        var location = hasShadyCss ? this : attachShadow.apply(this, arguments);
        shadowRootMap.set(this, location);
        createObserver(location);
        return location;
      };
      Object.defineProperty(ShadowRoot.prototype, 'adoptedStyleSheets', adoptedStyleSheetAccessors);
    }
  }

  updatePrototype(OldCSSStyleSheet.prototype);
  window.CSSStyleSheet = ConstructStyleSheet;
  initAdoptedStyleSheets();
  if (isDocumentLoading()) {
    document.addEventListener('DOMContentLoaded', initPolyfill);
  } else {
    initPolyfill();
  }

}());

var css_248z$f = ":host {\n  --theme-bg: hsl(0, 0%, 100%);\n  --theme-bd: hsl(0 0% 100% / var(--theme-bd-opacity));\n  --theme-bd-2: hsl(0 0% 100% / var(--theme-bd-2-opacity));\n  --theme-color: hotpink;\n  --theme-text_color: hsl(0, 0%, 10%);\n  --theme-icon_color: hsl(0, 0%, 20%);\n  --theme-icon_hover-bg: hsl(0, 0%, 95%);\n  --theme-icon_active-bg: hsl(0, 0%, 90%);\n}\n";

var css_248z$e = "\n:host > ol:first-of-type {\n   box-shadow: 0 0.25em 0.5em hsla(0,0%,0%,10%);\n }\n";

var css_248z$d = ":host {\n  --theme-bg: hsl(0, 0%, 10%);\n  --theme-bd: hsl(0 0% 10% / var(--theme-bd-opacity));\n  --theme-bd-2: hsl(0 0% 10% / var(--theme-bd-2-opacity));\n  --theme-color: hsl(330deg, 65%, 75%);\n  --theme-text_color: hsl(0, 0%, 90%);\n  --theme-icon_color: hsl(0, 0%, 80%);\n  --theme-icon_hover-bg: hsl(0, 0%, 15%);\n  --theme-icon_active-bg: hsl(0, 0%, 20%);\n}\n";

var css_248z$c = "\n:host > ol:first-of-type {\n   box-shadow: 0 0.25em 0.5em hsla(0,0%,0%,50%);\n }\n";

var css_248z$b = ":host {\n  --theme-bg: hsl(0, 0%, 100%);\n  --theme-bd: hsl(0 0% 100% / var(--theme-bd-opacity));\n  --theme-bd-2: hsl(0 0% 100% / var(--theme-bd-2-opacity));\n  --theme-bd-opacity: 1;\n  --theme-bd-2-opacity: 1;\n  --theme-color: hotpink;\n  --theme-blue: hsl(188, 90%, 45%);\n  --theme-purple: hsl(267, 100%, 58%);\n\n  --theme-text_color: hsl(0, 0%, 10%);\n  --theme-icon_color: hsl(0, 0%, 20%);\n  --theme-icon_hover-bg: hsl(0, 0%, 95%);\n  --theme-icon_active-bg: hsl(0, 0%, 90%);\n\n  --layer-top: 2147483647;\n  --layer-1: 2147483646;\n  --layer-2: 2147483645;\n  --layer-3: 2147483644;\n  --layer-4: 2147483643;\n  --layer-5: 2147483642;\n\n  --position: absolute;\n  --top: 0;\n  --left: 0;\n  --max-width: 0;\n\n  --text-shadow: 0 1px hsla(0, 0%, 0%, 0.4)\n\n}\n@media (prefers-color-scheme: dark) {\n:host {\n  --theme-bg: hsl(0, 0%, 10%);\n  --theme-bd: hsl(0 0% 10% / var(--theme-bd-opacity));\n  --theme-bd-2: hsl(0 0% 10% / var(--theme-bd-2-opacity));\n  --theme-color: hsl(330deg, 65%, 75%);\n  --theme-text_color: hsl(0, 0%, 90%);\n  --theme-icon_color: hsl(0, 0%, 80%);\n  --theme-icon_hover-bg: hsl(0, 0%, 15%);\n  --theme-icon_active-bg: hsl(0, 0%, 20%)\n\n}\n}\n@supports (backdrop-filter: blur(5px)) {\n:host {\n  --theme-bd-opacity: .8;\n  --theme-bd-2-opacity: .9\n\n}\n}\n@supports (-webkit-backdrop-filter: blur(5px)) {\n:host {\n  --theme-bd-opacity: .8;\n  --theme-bd-2-opacity: .9\n\n}\n}\n:host {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: var(--layer-1);\n  max-width: min-content;\n  opacity: 0;\n  animation: present-yourself .3s ease forwards\n}\n@media (prefers-reduced-motion: no-preference) {\n:host {\n  transform: translateX(-200%)\n}\n}\n:host [vis-bug-ol] aside {\n    transition: opacity 0.3s ease, transform 0.2s ease;\n  }\n:host .vis-bug-toggle li:not(:last-child) {\n   height: 0;\n   margin: 0;\n   opacity: 0;\n}\n:host > ol {\n  all: initial;\n  cursor: inherit;\n  font-size: 16px;\n  font-family: system-ui;\n  display: flex;\n  flex-direction: column;\n  margin: 1em 0 0 1.5em;\n  padding: 0;\n  list-style-type: none;\n  border-radius: 2em;\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px)\n}\n:host > ol:first-of-type {\n     box-shadow: 0 0.25em 0.5em hsla(0,0%,0%,10%);\n     backdrop-filter: blur(5px);\n     -webkit-backdrop-filter: blur(5px);\n     background-color: var(--theme-bd-2);\n   }\n:host > ol {\n  /*&:active {*/\n  /*   cursor: grabbing !important;*/\n  /* }*/\n}\n@media (prefers-color-scheme: dark) {\n:host > ol {\n      box-shadow: 0 0.25em 0.5em hsla(0,0%,0%,50%)\n}\n    }\n:host li {\n  height: 2.25em;\n  width: 2.25em;\n  margin: 0.05em 0.25em;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  opacity: 1;\n  border-radius: 50%;\n  transition: all .5s\n}\n:host li:first-child { margin-top: 0.25em; }\n:host li:last-child { margin-bottom: 0.25em; }\n:host li[data-tool]:hover {\n      cursor: pointer;\n      background-color: var(--theme-icon_hover-bg);\n     }\n:host li[data-tool]:active {\n       background-color: var(--theme-icon_active-bg);\n     }\n:host li[data-active=true] {\n       background-color: var(--theme-bg)\n    }\n:host li[data-active=true] > svg {\n        fill: var(--theme-color);\n      }\n:host li {\n  /*后续扩展可能需要*/\n  /*@media (max-height: 768px) {*/\n  /*  &:is(:nth-of-type(7),:nth-of-type(8), :nth-of-type(9), :nth-of-type(10), :nth-of-type(11), :nth-of-type(12), :nth-of-type(13)) > aside {*/\n  /*    top: auto;*/\n  /*  }*/\n  /*}*/\n}\n:host li > aside {\n       overflow: hidden;\n       position: absolute;\n       direction: ltr;\n       text-align: left;\n       left: 3em;\n       top: 0;\n       z-index: -2;\n       pointer-events: none;\n       background: var(--theme-bg);\n       color: var(--theme-text_color);\n       box-shadow: 0 0.1em 4.5em hsla(0,0%,0%,15%);\n       border-radius: 1em;\n       padding: 1em;\n       opacity: 0;\n       transform: translateX(-1em);\n       will-change: transform, opacity\n     }\n@media (prefers-reduced-motion: reduce) {\n:host li > aside {\n        transition-duration: 0s\n     }\n      }\n:host li > aside > div {\n          white-space: nowrap;\n        }\n:host li:hover > aside {\n       opacity: 1;\n       transform: translateX(0);\n       transition-delay: .5s;\n     }\n:host li > svg {\n  width: 50%;\n  fill: var(--theme-icon_color);\n}\n@keyframes present-yourself {\n  to {\n    opacity: 1;\n    transform: translate3d(0,0,0);\n  }\n}\n";

var css_248z$a = ":host {\n  --theme-bg: hsl(0, 0%, 100%);\n  --theme-bd: hsl(0 0% 100% / var(--theme-bd-opacity));\n  --theme-bd-2: hsl(0 0% 100% / var(--theme-bd-2-opacity));\n  --theme-bd-opacity: 1;\n  --theme-bd-2-opacity: 1;\n  --theme-color: hotpink;\n  --theme-blue: hsl(188, 90%, 45%);\n  --theme-purple: hsl(267, 100%, 58%);\n\n  --theme-text_color: hsl(0, 0%, 10%);\n  --theme-icon_color: hsl(0, 0%, 20%);\n  --theme-icon_hover-bg: hsl(0, 0%, 95%);\n  --theme-icon_active-bg: hsl(0, 0%, 90%);\n\n  --layer-top: 2147483647;\n  --layer-1: 2147483646;\n  --layer-2: 2147483645;\n  --layer-3: 2147483644;\n  --layer-4: 2147483643;\n  --layer-5: 2147483642;\n\n  --position: absolute;\n  --top: 0;\n  --left: 0;\n  --max-width: 0;\n\n  --text-shadow: 0 1px hsla(0, 0%, 0%, 0.4)\n\n}\n\n@media (prefers-color-scheme: dark) {\n\n:host {\n  --theme-bg: hsl(0, 0%, 10%);\n  --theme-bd: hsl(0 0% 10% / var(--theme-bd-opacity));\n  --theme-bd-2: hsl(0 0% 10% / var(--theme-bd-2-opacity));\n  --theme-color: hsl(330deg, 65%, 75%);\n  --theme-text_color: hsl(0, 0%, 90%);\n  --theme-icon_color: hsl(0, 0%, 80%);\n  --theme-icon_hover-bg: hsl(0, 0%, 15%);\n  --theme-icon_active-bg: hsl(0, 0%, 20%)\n\n}\n}\n\n@supports (backdrop-filter: blur(5px)) {\n\n:host {\n  --theme-bd-opacity: .8;\n  --theme-bd-2-opacity: .9\n\n}\n}\n\n@supports (-webkit-backdrop-filter: blur(5px)) {\n\n:host {\n  --theme-bd-opacity: .8;\n  --theme-bd-2-opacity: .9\n\n}\n}\n\n:host([placement^=\"top\"]) {\n  --align-self: start;\n  --translate-y: -50%;\n}\n\n:host([placement^=\"bottom\"]) {\n  --align-self: end;\n  --translate-y: 50%;\n}\n\n:host([placement$=\"start\"]) {\n  --justify-self: start;\n  --translate-x: -50%;\n}\n\n:host([placement$=\"end\"]) {\n  --justify-self: end;\n  --translate-x: 50%;\n}\n\n:host([placement^=\"top\"]),\n:host([placement^=\"bottom\"]) {\n  --cursor: ns-resize;\n}\n\n:host([placement$=\"start\"]),\n:host([placement$=\"end\"]) {\n  --cursor: ew-resize;\n}\n\n:host([placement=\"top-start\"]) {\n  --cursor: nw-resize;\n}\n\n:host([placement=\"top-end\"]) {\n  --cursor: ne-resize;\n}\n\n:host([placement=\"bottom-start\"]) {\n  --cursor: sw-resize;\n}\n\n:host([placement=\"bottom-end\"]) {\n  --cursor: se-resize;\n}\n\n:host {\n  display: grid;\n  grid-area: 1 / -1;\n  align-self: var(--align-self, center);\n  justify-self: var(--justify-self, center);\n  place-self: var(--align-self, center) var(--justify-self, center);\n  transform: translate(var(--translate-x, 0), var(--translate-y, 0));\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host > button {\n  pointer-events: auto;\n  background-color: white;\n  border: 1px solid hotpink;\n  padding: 0;\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 50%;\n  position: relative;\n  cursor: var(--cursor);\n}\n\n/*&::before {*/\n\n/*   content: '';*/\n\n/*   position: absolute;*/\n\n/*   inset: -0.5rem;*/\n\n/* }*/\n\n/*}*/\n\n";

var css_248z$9 = ":host {\n  --theme-bg: hsl(0, 0%, 100%);\n  --theme-bd: hsl(0 0% 100% / var(--theme-bd-opacity));\n  --theme-bd-2: hsl(0 0% 100% / var(--theme-bd-2-opacity));\n  --theme-bd-opacity: 1;\n  --theme-bd-2-opacity: 1;\n  --theme-color: hotpink;\n  --theme-blue: hsl(188, 90%, 45%);\n  --theme-purple: hsl(267, 100%, 58%);\n\n  --theme-text_color: hsl(0, 0%, 10%);\n  --theme-icon_color: hsl(0, 0%, 20%);\n  --theme-icon_hover-bg: hsl(0, 0%, 95%);\n  --theme-icon_active-bg: hsl(0, 0%, 90%);\n\n  --layer-top: 2147483647;\n  --layer-1: 2147483646;\n  --layer-2: 2147483645;\n  --layer-3: 2147483644;\n  --layer-4: 2147483643;\n  --layer-5: 2147483642;\n\n  --position: absolute;\n  --top: 0;\n  --left: 0;\n  --max-width: 0;\n\n  --text-shadow: 0 1px hsla(0, 0%, 0%, 0.4)\n\n}\n\n@media (prefers-color-scheme: dark) {\n\n:host {\n  --theme-bg: hsl(0, 0%, 10%);\n  --theme-bd: hsl(0 0% 10% / var(--theme-bd-opacity));\n  --theme-bd-2: hsl(0 0% 10% / var(--theme-bd-2-opacity));\n  --theme-color: hsl(330deg, 65%, 75%);\n  --theme-text_color: hsl(0, 0%, 90%);\n  --theme-icon_color: hsl(0, 0%, 80%);\n  --theme-icon_hover-bg: hsl(0, 0%, 15%);\n  --theme-icon_active-bg: hsl(0, 0%, 20%)\n\n}\n}\n\n@supports (backdrop-filter: blur(5px)) {\n\n:host {\n  --theme-bd-opacity: .8;\n  --theme-bd-2-opacity: .9\n\n}\n}\n\n@supports (-webkit-backdrop-filter: blur(5px)) {\n\n:host {\n  --theme-bd-opacity: .8;\n  --theme-bd-2-opacity: .9\n\n}\n}\n\n:host {\n  position: var(--position, 'absolute');\n  top: var(--top);\n  left: var(--left);\n  overflow: visible;\n  pointer-events: none;\n  z-index: var(--layer-3);\n  width: var(--width);\n  height: var(--height);\n  display: grid;\n  grid-template-rows: 1fr;\n  isolation: isolate;\n}\n\n:host > svg {\n  position: absolute;\n}\n";

var css_248z$8 = ":host {\n  --theme-bg: hsl(0, 0%, 100%);\n  --theme-bd: hsl(0 0% 100% / var(--theme-bd-opacity));\n  --theme-bd-2: hsl(0 0% 100% / var(--theme-bd-2-opacity));\n  --theme-bd-opacity: 1;\n  --theme-bd-2-opacity: 1;\n  --theme-color: hotpink;\n  --theme-blue: hsl(188, 90%, 45%);\n  --theme-purple: hsl(267, 100%, 58%);\n\n  --theme-text_color: hsl(0, 0%, 10%);\n  --theme-icon_color: hsl(0, 0%, 20%);\n  --theme-icon_hover-bg: hsl(0, 0%, 95%);\n  --theme-icon_active-bg: hsl(0, 0%, 90%);\n\n  --layer-top: 2147483647;\n  --layer-1: 2147483646;\n  --layer-2: 2147483645;\n  --layer-3: 2147483644;\n  --layer-4: 2147483643;\n  --layer-5: 2147483642;\n\n  --position: absolute;\n  --top: 0;\n  --left: 0;\n  --max-width: 0;\n\n  --text-shadow: 0 1px hsla(0, 0%, 0%, 0.4)\n\n}\n\n@media (prefers-color-scheme: dark) {\n\n:host {\n  --theme-bg: hsl(0, 0%, 10%);\n  --theme-bd: hsl(0 0% 10% / var(--theme-bd-opacity));\n  --theme-bd-2: hsl(0 0% 10% / var(--theme-bd-2-opacity));\n  --theme-color: hsl(330deg, 65%, 75%);\n  --theme-text_color: hsl(0, 0%, 90%);\n  --theme-icon_color: hsl(0, 0%, 80%);\n  --theme-icon_hover-bg: hsl(0, 0%, 15%);\n  --theme-icon_active-bg: hsl(0, 0%, 20%)\n\n}\n}\n\n@supports (backdrop-filter: blur(5px)) {\n\n:host {\n  --theme-bd-opacity: .8;\n  --theme-bd-2-opacity: .9\n\n}\n}\n\n@supports (-webkit-backdrop-filter: blur(5px)) {\n\n:host {\n  --theme-bd-opacity: .8;\n  --theme-bd-2-opacity: .9\n\n}\n}\n\n:host {\n  font-size: 16px;\n  --position: absolute;\n  --top: 0;\n  --left: 0;\n  --max-width: 0;\n}\n\n:host > span {\n  position: var(--position);\n  top: var(--top);\n  left: var(--left);\n  max-width: var(--max-width);\n  z-index: var(--layer-4);\n  transform: translateY(-100%);\n  background: var(--label-bg, hotpink);\n  border-radius: 0.2em 0.2em 0 0;\n  text-shadow: var(--text-shadow);\n  color: white;\n  display: inline-flex;\n  justify-content: center;\n  font-size: 0.8em;\n  font-weight: normal;\n  font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;\n  white-space: nowrap;\n  padding: 0.25em 0.4em 0.15em;\n  line-height: 1.1;\n}\n\n:host a {\n  text-decoration: none;\n  color: inherit;\n  cursor: pointer;\n  text-overflow: ellipsis;\n  overflow: hidden\n}\n\n:host a:hover {\n   text-decoration: underline;\n   color: white;\n }\n\n:host a[node]:before {\n   content: \"\\003c\";\n }\n\n:host a[node]:after {\n   content: \"\\003e\";\n }\n";

var css_248z$7 = ":host {\n  --theme-bg: hsl(0, 0%, 100%);\n  --theme-bd: hsl(0 0% 100% / var(--theme-bd-opacity));\n  --theme-bd-2: hsl(0 0% 100% / var(--theme-bd-2-opacity));\n  --theme-bd-opacity: 1;\n  --theme-bd-2-opacity: 1;\n  --theme-color: hotpink;\n  --theme-blue: hsl(188, 90%, 45%);\n  --theme-purple: hsl(267, 100%, 58%);\n\n  --theme-text_color: hsl(0, 0%, 10%);\n  --theme-icon_color: hsl(0, 0%, 20%);\n  --theme-icon_hover-bg: hsl(0, 0%, 95%);\n  --theme-icon_active-bg: hsl(0, 0%, 90%);\n\n  --layer-top: 2147483647;\n  --layer-1: 2147483646;\n  --layer-2: 2147483645;\n  --layer-3: 2147483644;\n  --layer-4: 2147483643;\n  --layer-5: 2147483642;\n\n  --position: absolute;\n  --top: 0;\n  --left: 0;\n  --max-width: 0;\n\n  --text-shadow: 0 1px hsla(0, 0%, 0%, 0.4)\n\n}\n\n@media (prefers-color-scheme: dark) {\n\n:host {\n  --theme-bg: hsl(0, 0%, 10%);\n  --theme-bd: hsl(0 0% 10% / var(--theme-bd-opacity));\n  --theme-bd-2: hsl(0 0% 10% / var(--theme-bd-2-opacity));\n  --theme-color: hsl(330deg, 65%, 75%);\n  --theme-text_color: hsl(0, 0%, 90%);\n  --theme-icon_color: hsl(0, 0%, 80%);\n  --theme-icon_hover-bg: hsl(0, 0%, 15%);\n  --theme-icon_active-bg: hsl(0, 0%, 20%)\n\n}\n}\n\n@supports (backdrop-filter: blur(5px)) {\n\n:host {\n  --theme-bd-opacity: .8;\n  --theme-bd-2-opacity: .9\n\n}\n}\n\n@supports (-webkit-backdrop-filter: blur(5px)) {\n\n:host {\n  --theme-bd-opacity: .8;\n  --theme-bd-2-opacity: .9\n\n}\n}\n\n:host {\n  --line-color: var(--theme-purple);\n  --line-base: var(--theme-color);\n  --line-width: 1px;\n  --distance-h: 5px;\n  --distance-w: 5px;\n  --line-w: 1px;\n  --line-h: 1px;\n  font-size: 16px;\n}\n\n:host > figure {\n  margin: 0;\n  position: absolute;\n  height: var(--distance-h);\n  width: var(--distance-w);\n  top: var(--top);\n  left: var(--left);\n  right: var(--right);\n  overflow: visible;\n  pointer-events: none;\n  z-index: var(--layer-3);\n  display: flex;\n  align-items: center;\n  justify-content: var(--justify, 'flex-start');\n  flex-direction: var(--direction);\n}\n\n:host > figure figcaption {\n  min-height: 3ex;\n  width: max-content;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  text-shadow: var(--text-shadow);\n  box-shadow: var(--text-shadow);\n  background: hsl(var(--line-color) / 75%);\n  border: 1px solid hsl(var(--line-color));\n  border-radius: 1em;\n  font-size: 0.5em;\n  font-weight: bold;\n  line-height: 1.1;\n  font-family: system-ui;\n  padding: 0 1ex;\n}\n\n/*:host > figure span {*/\n\n/*  background: hsl(var(--line-color));*/\n\n/*  height: var(--line-h);*/\n\n/*  width: var(--line-w);*/\n\n/*}*/\n\n:host > figure div {\n  flex: 2;\n  background: hsl(var(--line-color));\n  width: var(--line-w);\n  height: var(--line-h);\n}\n\n:host figure:matches([quadrant=\"bottom\"], [quadrant=\"right\"]) > div:first-of-type,\n:host figure:matches([quadrant=\"top\"], [quadrant=\"left\"]) > div:last-of-type {\n  background: linear-gradient(to var(--quadrant), hotpink 0%, hsl(var(--line-color)) 100%);\n}\n";

var css_248z$6 = ":host {\n  --theme-bg: hsl(0, 0%, 100%);\n  --theme-bd: hsl(0 0% 100% / var(--theme-bd-opacity));\n  --theme-bd-2: hsl(0 0% 100% / var(--theme-bd-2-opacity));\n  --theme-bd-opacity: 1;\n  --theme-bd-2-opacity: 1;\n  --theme-color: hotpink;\n  --theme-blue: hsl(188, 90%, 45%);\n  --theme-purple: hsl(267, 100%, 58%);\n\n  --theme-text_color: hsl(0, 0%, 10%);\n  --theme-icon_color: hsl(0, 0%, 20%);\n  --theme-icon_hover-bg: hsl(0, 0%, 95%);\n  --theme-icon_active-bg: hsl(0, 0%, 90%);\n\n  --layer-top: 2147483647;\n  --layer-1: 2147483646;\n  --layer-2: 2147483645;\n  --layer-3: 2147483644;\n  --layer-4: 2147483643;\n  --layer-5: 2147483642;\n\n  --position: absolute;\n  --top: 0;\n  --left: 0;\n  --max-width: 0;\n\n  --text-shadow: 0 1px hsla(0, 0%, 0%, 0.4)\n\n}\n\n@media (prefers-color-scheme: dark) {\n\n:host {\n  --theme-bg: hsl(0, 0%, 10%);\n  --theme-bd: hsl(0 0% 10% / var(--theme-bd-opacity));\n  --theme-bd-2: hsl(0 0% 10% / var(--theme-bd-2-opacity));\n  --theme-color: hsl(330deg, 65%, 75%);\n  --theme-text_color: hsl(0, 0%, 90%);\n  --theme-icon_color: hsl(0, 0%, 80%);\n  --theme-icon_hover-bg: hsl(0, 0%, 15%);\n  --theme-icon_active-bg: hsl(0, 0%, 20%)\n\n}\n}\n\n@supports (backdrop-filter: blur(5px)) {\n\n:host {\n  --theme-bd-opacity: .8;\n  --theme-bd-2-opacity: .9\n\n}\n}\n\n@supports (-webkit-backdrop-filter: blur(5px)) {\n\n:host {\n  --theme-bd-opacity: .8;\n  --theme-bd-2-opacity: .9\n\n}\n}\n\n:host rect {\n  width: 100%;\n  height: 100%;\n  vector-effect: non-scaling-stroke;\n  stroke: var(--hover-stroke, var(--theme-purple, hsl(267, 100%, 58%)));\n  stroke-width: 1px;\n  fill: none;\n}\n\n:host > svg {\n  z-index: var(--layer-5);\n  outline: 1px dashed hsl(267, 100%, 58%);\n}\n";

var css_248z$5 = ":host {\n  --theme-bg: hsl(0, 0%, 100%);\n  --theme-bd: hsl(0 0% 100% / var(--theme-bd-opacity));\n  --theme-bd-2: hsl(0 0% 100% / var(--theme-bd-2-opacity));\n  --theme-bd-opacity: 1;\n  --theme-bd-2-opacity: 1;\n  --theme-color: hotpink;\n  --theme-blue: hsl(188, 90%, 45%);\n  --theme-purple: hsl(267, 100%, 58%);\n\n  --theme-text_color: hsl(0, 0%, 10%);\n  --theme-icon_color: hsl(0, 0%, 20%);\n  --theme-icon_hover-bg: hsl(0, 0%, 95%);\n  --theme-icon_active-bg: hsl(0, 0%, 90%);\n\n  --layer-top: 2147483647;\n  --layer-1: 2147483646;\n  --layer-2: 2147483645;\n  --layer-3: 2147483644;\n  --layer-4: 2147483643;\n  --layer-5: 2147483642;\n\n  --position: absolute;\n  --top: 0;\n  --left: 0;\n  --max-width: 0;\n\n  --text-shadow: 0 1px hsla(0, 0%, 0%, 0.4)\n\n}\n\n@media (prefers-color-scheme: dark) {\n\n:host {\n  --theme-bg: hsl(0, 0%, 10%);\n  --theme-bd: hsl(0 0% 10% / var(--theme-bd-opacity));\n  --theme-bd-2: hsl(0 0% 10% / var(--theme-bd-2-opacity));\n  --theme-color: hsl(330deg, 65%, 75%);\n  --theme-text_color: hsl(0, 0%, 90%);\n  --theme-icon_color: hsl(0, 0%, 80%);\n  --theme-icon_hover-bg: hsl(0, 0%, 15%);\n  --theme-icon_active-bg: hsl(0, 0%, 20%)\n\n}\n}\n\n@supports (backdrop-filter: blur(5px)) {\n\n:host {\n  --theme-bd-opacity: .8;\n  --theme-bd-2-opacity: .9\n\n}\n}\n\n@supports (-webkit-backdrop-filter: blur(5px)) {\n\n:host {\n  --theme-bd-opacity: .8;\n  --theme-bd-2-opacity: .9\n\n}\n}\n\n:host {\n  --color: var(--theme-color);\n}\n\n:host > svg {\n  position:absolute;\n  top:0;\n  left:0;\n  overflow:visible;\n  pointer-events:none;\n  z-index:var(--layer-5);\n}\n\n:host rect,\n:host line {\n  stroke: var(--color);\n}\n\n:host line {\n  stroke-dasharray: 2;\n  stroke-dasharray-offset: 3;\n}\n";

var css_248z$4 = ":host [mask] {\n  pointer-events: none;\n  position: absolute;\n  z-index: var(--layer-5);\n  width: var(--width);\n  height: var(--height);\n  top: var(--top);\n  left: var(--left);\n  background-color: var(--bg);\n  clip-path: polygon(\n    0% 0%, 0% 100%, var(--target-left) 100%,\n    var(--target-left) var(--target-top),\n    var(--offset-right) var(--target-top),\n    var(--offset-right) var(--offset-bottom),\n    0 var(--offset-bottom), 0 100%,\n    100% 100%, 100% 0%\n  );\n}\n";

var css_248z$3 = ":host {\n  --theme-bg: hsl(0, 0%, 100%);\n  --theme-bd: hsl(0 0% 100% / var(--theme-bd-opacity));\n  --theme-bd-2: hsl(0 0% 100% / var(--theme-bd-2-opacity));\n  --theme-bd-opacity: 1;\n  --theme-bd-2-opacity: 1;\n  --theme-color: hotpink;\n  --theme-blue: hsl(188, 90%, 45%);\n  --theme-purple: hsl(267, 100%, 58%);\n\n  --theme-text_color: hsl(0, 0%, 10%);\n  --theme-icon_color: hsl(0, 0%, 20%);\n  --theme-icon_hover-bg: hsl(0, 0%, 95%);\n  --theme-icon_active-bg: hsl(0, 0%, 90%);\n\n  --layer-top: 2147483647;\n  --layer-1: 2147483646;\n  --layer-2: 2147483645;\n  --layer-3: 2147483644;\n  --layer-4: 2147483643;\n  --layer-5: 2147483642;\n\n  --position: absolute;\n  --top: 0;\n  --left: 0;\n  --max-width: 0;\n\n  --text-shadow: 0 1px hsla(0, 0%, 0%, 0.4)\n\n}\n\n@media (prefers-color-scheme: dark) {\n\n:host {\n  --theme-bg: hsl(0, 0%, 10%);\n  --theme-bd: hsl(0 0% 10% / var(--theme-bd-opacity));\n  --theme-bd-2: hsl(0 0% 10% / var(--theme-bd-2-opacity));\n  --theme-color: hsl(330deg, 65%, 75%);\n  --theme-text_color: hsl(0, 0%, 90%);\n  --theme-icon_color: hsl(0, 0%, 80%);\n  --theme-icon_hover-bg: hsl(0, 0%, 15%);\n  --theme-icon_active-bg: hsl(0, 0%, 20%)\n\n}\n}\n\n@supports (backdrop-filter: blur(5px)) {\n\n:host {\n  --theme-bd-opacity: .8;\n  --theme-bd-2-opacity: .9\n\n}\n}\n\n@supports (-webkit-backdrop-filter: blur(5px)) {\n\n:host {\n  --theme-bd-opacity: .8;\n  --theme-bd-2-opacity: .9\n\n}\n}\n\n:host {\n  position: absolute;\n  z-index: var(--layer-top);\n\n  --arrow-width: 15px;\n  --arrow-height: 8px;\n\n  --shadow-up: 5px;\n  --shadow-down: -5px;\n  --shadow-direction: var(--shadow-up);\n\n  --arrow-up: polygon(0 0, 100% 0, 50% 100%);\n  --arrow-down: polygon(50% 0, 0 100%, 100% 100%);\n  --arrow: var(--arrow-up);\n\n  --border-radius: .75em;\n\n  --copy-message-left-color: white;\n  --copy-message-right-color: white;\n}\n\n:host figure {\n  all: initial;\n  direction: ltr;\n  font-size: 16px;\n  font-family: system-ui;\n  max-width: 90vw;\n  background: var(--theme-bd);\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  color: var(--theme-text_color);\n  line-height: initial;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  border-radius: var(--border-radius);\n  line-height: initial;\n\n  border: 1px solid var(--theme-bg);\n  box-shadow:\n    0 3.6px 3.7px rgba(0, 0, 0, 0.101),\n    0 12.1px 12.3px rgba(0, 0, 0, 0.149),\n    0 -2px 4px rgba(0, 0, 0, 0.101),\n    0 -12.1px 24px rgba(0, 0, 0, 0.149),\n    0 54px 55px rgba(0, 0, 0, 0.25)\n}\n\n@media (min-width: 540px) {\n\n:host figure {\n  max-width: max(40ch, 50vw)\n}\n}\n\n:host figure:after {\n   content: \"\";\n   background: var(--theme-bg);\n   width: var(--arrow-width);\n   height: var(--arrow-height);\n   clip-path: var(--arrow);\n   position: absolute;\n   top: var(--arrow-top);\n   left: var(--arrow-left);\n }\n\n:host figure a {\n    text-decoration: none;\n    color: inherit;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    cursor: pointer\n}\n\n:host figure a:hover {\n   color: var(--theme-color);\n   text-decoration: underline;\n }\n\n:host figure a:empty {\n   display: none;\n }\n\n:host figure a[node]:before {\n   content: \"\\003c\";\n }\n\n:host figure a[node]:after {\n   content: \"\\003e\";\n }\n\n:host h5 {\n  display: flex;\n  font-size: 1em;\n  font-weight: bolder;\n  margin: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  max-width: max-content;\n}\n\n:host small {\n  font-size: 0.7em;\n  color: var(--theme-icon_color)\n}\n\n:host small > span {\n    color: var(--theme-text_color);\n  }\n\n:host a:not(:hover) {\n  text-decoration: none;\n}\n\n:host [brand] {\n  color: var(--theme-color);\n}\n\n:host [divider] {\n  color: var(--theme-blue);\n}\n\n:host header {\n  padding: 5px 10px;\n  user-select: none;\n  text-shadow: var(--text-shadow);\n}\n\n:host code {\n  display: grid;\n  grid-template-columns: max-content auto;\n  grid-gap: .25em .5em;\n  gap: .25em .5em;\n  border-radius: var(--border-radius);\n  list-style-type: none;\n  color: var(--light-grey);\n  background-color: var(--theme-bd-2);\n  border-top: 1px solid var(--theme-bg);\n  font-size: 1em;\n  font-family: 'Dank Mono', 'Operator Mono', 'Inconsolata', 'Fira Mono', 'SF Mono', 'Monaco', 'Droid Sans Mono', 'Source Code Pro', monospace\n}\n\n:host code[accessibility] > [prop]:first-of-type {\n   color: var(--theme-text_color);\n }\n\n:host details > :is(summary,code),\n:host > figure > code {\n  padding: 10px;\n  border-radius: var(--border-radius);\n}\n\n:host summary {\n  outline-offset: -2px;\n  outline-color: var(--theme-color);\n  max-inline-size: max-content\n}\n\n:host summary::marker {\n   color: var(--theme-color);\n }\n\n:host [value],\n:host [local-change] {\n  color: var(--theme-text_color);\n  display: inline-grid;\n  grid-auto-flow: column;\n  grid-gap: .5em;\n  gap: .5em;\n  align-items: center;\n  justify-content: flex-end;\n  text-align: right;\n  /* white-space: pre; */\n}\n\n:host [text] {\n  white-space: normal;\n}\n\n:host [longform] {\n  background: var(--theme-icon_hover-bg);\n  padding: 0.5em 0.75em;\n  border-radius: .25em;\n  font-family: sans-serif;\n  text-align: left;\n  line-height: 1.5;\n  max-inline-size: 40ch;\n}\n\n:host [prop] {\n  color: var(--theme-color);\n}\n\n:host [color] {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  width: 1em;\n  min-width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  box-shadow: inset 0 0 1px 0 hsla(0, 0%, 0%, 0.5);\n}\n\n:host [color-value] {\n  white-space: nowrap;\n}\n\n:host [local-modifications] {\n  margin-top: 1em;\n  margin-inline: 10px;\n  color: var(--theme-purple);\n  font-weight: bold\n}\n\n:host [local-modifications] + div {\n    margin-bottom: 1em;\n  }\n\n:host [contrast-compliance] {\n  display: grid;\n  grid-template-columns: max-content max-content;\n  grid-gap: 3ch;\n  gap: 3ch;\n  padding: 10px 10px 5px;\n}\n\n:host [contrast] {\n  display: grid;\n  justify-items: start\n}\n\n:host [contrast] > [value] {\n    font-size: 1.5em;\n  }\n\n:host [compliance] {\n  display: grid\n}\n\n:host [compliance] > div {\n    display: flex;\n    align-items: center;\n    grid-gap: 2ch;\n    gap: 2ch;\n  }\n\n:host [compliance] > div > span {\n    display: flex;\n    align-items: center;\n    grid-gap: .5ch;\n    gap: .5ch;\n  }\n\n:host [compliance] svg {\n    block-size: .75em;\n  }\n\n:host :is([contrast],[compliance]) [title] {\n  font-size: .7em;\n  opacity: .8;\n}\n\n:host [color-swatches] {\n  display: flex;\n  width: 100%;\n  height: 7em;\n  flex-direction: row;\n  padding: 0\n}\n\n@media (max-width: 700px) {\n\n:host [color-swatches] {\n  flex-direction: column;\n  height: 14em\n}\n}\n\n:host [color-swatch] {\n  min-width: 20ch;\n  height: 7em;\n  display: grid;\n  position: relative;\n  align-content: end;\n  box-sizing: border-box;\n  padding: 10px;\n  margin: 0;\n  cursor: copy\n}\n\n@media (max-width: 700px) {\n\n:host [color-swatch] {\n  width: 100%\n}\n}\n\n:host [color-swatch] > small,\n:host [color-swatch] > span,\n:host [color-swatch]:after {\n  cursor: copy;\n}\n\n:host [color-swatch] > small {\n  opacity: .8;\n}\n\n:host [color-swatch]:after {\n  content: \"📋 \\00a0 copy\";\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  transition: opacity 0.3s;\n  opacity: 0;\n}\n\n:host [color-swatch]:nth-child(1):after {\n  color: var(--copy-message-left-color);\n}\n\n:host [color-swatch]:nth-child(2):after {\n  color: var(--copy-message-right-color);\n}\n\n:host [color-swatch]:hover:after {\n  opacity: 1;\n}\n\n:host [color-swatch]:focus:after {\n  content: \"📋 \\00a0 copied\";\n}\n\n:host [accessibility] {\n  display: flex;\n  flex-direction: column\n}\n\n:host [accessibility] > :not([contrast-compliance]) {\n    display: grid;\n    align-items: center;\n    grid-template-columns: max-content 1fr\n}\n\n:host [accessibility] > :not([contrast-compliance]) [value] {\n    display: grid;\n    justify-content: flex-start;\n    padding-left: 1em;\n    text-align: left;\n  }\n\n:host [accessibility] > [contrast-compliance] {\n    justify-content: space-between\n}\n\n:host [accessibility] > [contrast-compliance] [value] {\n    justify-content: flex-start;\n    margin-right: 7px;\n  }\n\n:host [score] {\n  font-size: 1.5em;\n  line-height: .75\n}\n\n:host [score][pass=\"true\"] { color: green; }\n\n:host [score][pass=\"false\"] { color: red; }\n\n@media (prefers-color-scheme: dark) {\n:host [score][pass=\"true\"] { color: hsl(120deg, 50%, 75%); }\n:host [score][pass=\"false\"] { color: hsl(0deg, 50%, 65%); }\n}\n";

var css_248z$2 = "\n:host [score][pass=\"true\"] { color: green; }\n:host [score][pass=\"false\"] { color: red; }\n";

var css_248z$1 = "\n:host [score][pass=\"true\"] { color: hsl(120deg, 50%, 75%); }\n:host [score][pass=\"false\"] { color: hsl(0deg, 50%, 65%); }\n";

var css_248z = ":host {\n  --theme-bg: hsl(0, 0%, 100%);\n  --theme-bd: hsl(0 0% 100% / var(--theme-bd-opacity));\n  --theme-bd-2: hsl(0 0% 100% / var(--theme-bd-2-opacity));\n  --theme-bd-opacity: 1;\n  --theme-bd-2-opacity: 1;\n  --theme-color: hotpink;\n  --theme-blue: hsl(188, 90%, 45%);\n  --theme-purple: hsl(267, 100%, 58%);\n\n  --theme-text_color: hsl(0, 0%, 10%);\n  --theme-icon_color: hsl(0, 0%, 20%);\n  --theme-icon_hover-bg: hsl(0, 0%, 95%);\n  --theme-icon_active-bg: hsl(0, 0%, 90%);\n\n  --layer-top: 2147483647;\n  --layer-1: 2147483646;\n  --layer-2: 2147483645;\n  --layer-3: 2147483644;\n  --layer-4: 2147483643;\n  --layer-5: 2147483642;\n\n  --position: absolute;\n  --top: 0;\n  --left: 0;\n  --max-width: 0;\n\n  --text-shadow: 0 1px hsla(0, 0%, 0%, 0.4)\n\n}\n\n@media (prefers-color-scheme: dark) {\n\n:host {\n  --theme-bg: hsl(0, 0%, 10%);\n  --theme-bd: hsl(0 0% 10% / var(--theme-bd-opacity));\n  --theme-bd-2: hsl(0 0% 10% / var(--theme-bd-2-opacity));\n  --theme-color: hsl(330deg, 65%, 75%);\n  --theme-text_color: hsl(0, 0%, 90%);\n  --theme-icon_color: hsl(0, 0%, 80%);\n  --theme-icon_hover-bg: hsl(0, 0%, 15%);\n  --theme-icon_active-bg: hsl(0, 0%, 20%)\n\n}\n}\n\n@supports (backdrop-filter: blur(5px)) {\n\n:host {\n  --theme-bd-opacity: .8;\n  --theme-bd-2-opacity: .9\n\n}\n}\n\n@supports (-webkit-backdrop-filter: blur(5px)) {\n\n:host {\n  --theme-bd-opacity: .8;\n  --theme-bd-2-opacity: .9\n\n}\n}\n\n:host .loading {\n     pointer-events: none; /* 禁用点击事件 */\n     opacity: 0.5; /* 设置透明度 */\n     cursor: progress; /* 设置鼠标指针为加载指针 */\n   }\n\n:host .pixel-match-page {\n       position: fixed;\n       left: 0;\n       top: 0;\n       right: 0;\n       bottom: 0;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      background: #ffffff;\n      z-index: var(--layer-2);\n     }\n\n:host .pixel-match {\n      width: calc(100% - 40px);\n      padding: 20px;\n      height: calc(100% - 40px);\n      transition: all .3s;\n    }\n\n:host .pixel-match-block {\n      height: calc(50% - 10px);\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n    }\n\n:host .pixel-match-block .match-img-origin:after {\n      content: \"原图\";\n      position: absolute;\n      top: 0;\n      left: 0;\n      background: rgba(0, 0, 0, 0.5);\n      color: #fff;\n      padding: 5px;\n    }\n\n:host .pixel-match-block .match-img-page:after {\n      content: \"对比图\";\n      position: absolute;\n      top: 0;\n      left: 0;\n      background: rgba(0, 0, 0, 0.5);\n      color: #fff;\n      padding: 5px;\n    }\n\n:host .match-img-origin, :host .match-img-page {\n      position: relative;\n      border: 1px solid rgba(0, 0, 0, 0.5);\n      border-radius: 4px;\n      width: calc(50% - 10px);\n      height: 100%;\n      overflow: hidden;\n    }\n\n:host .hover-mask {\n  position: relative;\n}\n\n:host .hover-mask .ui-upload-operate {\n  display: none !important;\n}\n\n:host .hover-mask:hover svg {\n  display: block;\n}\n\n:host .hover-mask svg:hover {\n  width: 100px;\n  height: 100px;\n}\n\n:host .hover-mask:hover::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.2); /* 半透明黑色背景 */\n}\n\n:host .pixel-match-block svg {\n  position: absolute;\n  width: 80px;\n  height: 80px;\n  top: 50%;\n  left: 50%;\n  transition: all .3s;\n  transform: translate(-50%, -50%);\n  cursor: pointer;\n  display: none;\n}\n\n:host .pixel-match-block .ui-upload-operate {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    display: flex;\n  }\n\n:host .ui-upload-operate button:not(:first-child) {\n    margin-left: 10px;\n  }\n\n:host .pixel-match-result {\n      display: flex;\n      justify-content: space-between;\n      margin-top: 20px;\n      height: calc(50% - 10px);\n    }\n\n:host .match-operator {\n       width: calc(50% - 10px);\n      border: 1px solid rgba(0, 0, 0, 0.5);\n      border-radius: 4px;\n        padding-top: 20px;\n    }\n\n:host .operator-line {\n      display: flex;\n      align-items: center;\n      line-height: 35px;\n      padding: 0 20px;\n      font-weight: 500;\n    }\n\n:host .operator-line span {\n      margin-right: 10px;\n    }\n\n:host .slider-container {\n      width: 300px;\n      position: relative;\n      padding-top: 5px;\n    }\n\n:host .slider {\n      -webkit-appearance: none;\n      width: 100%;\n      height: 15px;\n      background: #d3d3d3;\n      outline: none;\n      opacity: 0.7;\n      transition: opacity .2s;\n      border-radius: 10px;\n      position: relative;\n    }\n\n:host .slider::-webkit-slider-thumb {\n      appearance: none;\n      width: 25px;\n      height: 25px;\n      background: hsl(267, 100%, 58%);\n      border-radius: 50%;\n      cursor: pointer;\n      position: relative;\n      z-index: 2;\n    }\n\n:host .slider::-moz-range-thumb {\n      width: 25px;\n      height: 25px;\n      background: hsl(267, 100%, 58%);\n      border-radius: 50%;\n      cursor: pointer;\n      position: relative;\n      z-index: 2;\n    }\n\n:host .slider-value {\n      text-align: center;\n      font-size: 14px;\n      margin-left: 10px;\n    }\n\n:host img[src=\"\"], :host img:not([src]){\n      opacity: 0;\n      border:none;\n      visibility: hidden;\n      max-width: none;\n    }\n\n:host .visbug-magnifier {\n      display: none;\n      /* 当元素祖先的 transform, perspective 或 filter 属性非 none 时，容器由视口改为该祖先 */\n      position: fixed;\n      left: 0;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */\n      z-index: var(--layer-top);\n    }\n\n:host .visbug-magnifier img {\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%);\n    }\n\n:host .close-btn {\n      position: absolute;\n      top: 10px;\n      right: 10px;\n      width: 30px;\n      height: 30px;\n      cursor: pointer;\n      opacity: 0.7;\n      transition: opacity 0.3s;\n    }\n\n:host .close-btn:hover {\n      opacity: 1;\n    }\n\n:host .close-icon {\n      position: relative;\n      width: 100%;\n      height: 100%;\n    }\n\n:host .close-icon::before,\n    :host .close-icon::after {\n      content: '';\n      position: absolute;\n      width: 2px;\n      height: 20px;\n      background-color: white;\n      top: 5px;\n      left: 50%;\n      transform: translateX(-50%);\n    }\n\n:host .close-icon::before {\n      transform: rotate(45deg);\n    }\n\n:host .close-icon::after {\n      transform: rotate(-45deg);\n    }\n\n:host #diffCanvas:hover {\n      cursor: -webkit-zoom-in;\n    }\n";

const constructStylesheet = (styles, stylesheet = new CSSStyleSheet()) => {
  stylesheet.replaceSync(styles);
  return stylesheet;
};

const LightTheme = constructStylesheet(css_248z$f);
const VisBugLightStyles = constructStylesheet(css_248z$e);
const DarkTheme = constructStylesheet(css_248z$d);
const VisBugDarkStyles = constructStylesheet(css_248z$c);
const VisBugStyle = constructStylesheet(css_248z$b);

const HandleStyles = constructStylesheet(css_248z$a);
const HandlesStyles = constructStylesheet(css_248z$9);
const LabelStyles = constructStylesheet(css_248z$8);
const DistanceStyles = constructStylesheet(css_248z$7);
const HoverStyles = constructStylesheet(css_248z$6);
const GridlineStyles = constructStylesheet(css_248z$5);
const BoxModelStyles = constructStylesheet(css_248z$4);
const MetatipStyles        = constructStylesheet(css_248z$3);
const MetatipLightStyles   = constructStylesheet(css_248z$2);
const MetatipDarkStyles    = constructStylesheet(css_248z$1);
const CompareStyles = constructStylesheet(css_248z);

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
    });
    return this;
  },
  attr: function (attr, val) {
    if (val === undefined) return this.getAttribute(attr)
    val === null ? this.removeAttribute(attr) : this.setAttribute(attr, val || '');
    return this;
  },
};

function $(query, $context = document) {
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
           this.forEach($el => Object.entries(attrs).forEach(([key, val]) => $el.attr(key, val)));
         }
         else if (typeof attrs == 'string' && (val || val == null || val == '')) {
           this.forEach($el => $el.attr(attrs, val));
         }
         return this
       }
     }
   )
}

const deepElementFromPoint = (x, y) => {
   const el = document.elementFromPoint(x, y);

  const crawlShadows = (node) => {
     if (node.shadowRoot) {
       const potential = node.shadowRoot.elementFromPoint(x, y);
       if (potential == node) return node
       return crawlShadows(potential)
     }
     return node;
  };

  const nested_shadow = crawlShadows(el);

  return nested_shadow || el

};

const isOffBounds = (node) => node.closest && (
  node.closest('vis-bug')
  || node.closest('visbug-metatip')
  || node.closest('visbug-label')
  || node.closest('visbug-handles')
  || node.closest('visbug-gridlines')
  || node.closest('visbug-compare')
);

const isFixed = elem => {
  do {
    if (window.getComputedStyle(elem).position == 'fixed') return true;
  } while (elem = elem.offsetParent);
  return false;
};

function windowBounds() {
  const height  = window.innerHeight;
  const width   = window.innerWidth;
  const body    = document.documentElement.clientWidth;

  const calcWidth = body <= width
    ? body
    : width;

  return {
    winHeight: height,
    winWidth:  calcWidth,
  }
}

const schemeRule = (shadow, style, light, dark) => {
  const lightScheme = light
    ? [style, LightTheme, light]
    : [style, LightTheme];

  const darkScheme = dark
    ? [style, DarkTheme, dark]
    : [style, DarkTheme];

  return attr => {
    if (attr === "light")
      shadow.adoptedStyleSheets = lightScheme;
    else if (attr === "dark")
      shadow.adoptedStyleSheets = darkScheme;
    else
      shadow.adoptedStyleSheets = [style];
  }
};

const isFirefox = navigator.userAgent.search('Firefox') > 0;
const isSafarish = navigator.userAgent.search('Safari') > 0;
const isChrome = navigator.userAgent.search('Chrome') > 0;
const isSafari = isSafarish && !isChrome;

const desiredPropMap = {
  color:               'rgb(0, 0, 0)',
  backgroundColor:     'rgba(0, 0, 0, 0)',
  backgroundImage:     'none',
  backgroundSize:      'auto',
  backgroundPosition:  '0% 0%',
  borderRadius:        '0px',
  boxShadow:           'none',
  padding:             '0px',
  margin:              '0px',
  fontFamily:          'auto',
  fontSize:            '16px',
  fontWeight:          '400',
  textAlign:           'start',
  textShadow:          'none',
  textTransform:       'none',
  lineHeight:          'normal',
  letterSpacing:       'normal',
  display:             'block',
  alignItems:          'normal',
  justifyContent:      'normal',
  flexDirection:       'row',
  flexWrap:            'nowrap',
  flexBasis:           'auto',
  // flexFlow:         'none',
  fill:                'rgb(0, 0, 0)',
  stroke:              'none',
  gridTemplateColumns: 'none',
  gridAutoColumns:     'auto',
  gridTemplateRows:    'none',
  gridAutoRows:        'auto',
  gridTemplateAreas:   'none',
  gridArea:            'auto / auto / auto / auto',
  gap:                 'normal',
  gridAutoFlow:        'row',
};

if (isFirefox) {
  desiredPropMap.backgroundSize = 'auto';
  desiredPropMap.borderWidth    = '';
  desiredPropMap.borderRadius   = '';
  desiredPropMap.padding        = '';
  desiredPropMap.margin         = '';
  desiredPropMap.gap            = '';
  desiredPropMap.gridArea       = '';
  desiredPropMap.borderColor    = '';
}

if (isSafari) {
  desiredPropMap.gap = 'normal normal';
}

const getStyle = (el, name) => {
  if (document.defaultView && document.defaultView.getComputedStyle) {
    name = name.replace(/([A-Z])/g, '-$1');
    name = name.toLowerCase();
    // 第二个参数是一个伪类字符串，用于指定要匹配的伪类, ''表示不指定任何伪类，即获取元素的默认计算样式。
    let s = document.defaultView.getComputedStyle(el, '');
    return s && s.getPropertyValue(name)
  }
};

const createClassname = (el, ellipse = false) => {
  if (!el.className) return ''

  const combined = Array.from(el.classList).reduce((classnames, classname) =>
      classnames += '.' + classname
    , '');

  return ellipse && combined.length > 30
    ? combined.substring(0,30) + '...'
    : combined
};

const getStyles = el => {
  const computedStyle = window.getComputedStyle(el, null);
  const vettedStyles = [];
  const borders = [];

  for (const prop in el.style) {
    const is_desired = desiredPropMap[prop];

    if (is_desired && is_desired != computedStyle[prop])
      vettedStyles.push({
        prop: prop,
        value: computedStyle[prop],
      });

    if (prop === 'borderColor' || prop === 'borderWidth' || prop === 'borderStyle')
      borders[prop] = computedStyle[prop].replace(/, rgba/g, '\rrgba');
  }

  const { borderColor, borderWidth, borderStyle } = borders;

  if (parseFloat(borderWidth) > 0) {
    vettedStyles.push({
      prop: 'borderColor',
      value: borderColor,
    });

    vettedStyles.push({
      prop: 'borderStyle',
      value: borderStyle,
    });

    vettedStyles.push({
      prop: 'borderWidth',
      value: borderWidth,
    });
  }

  return vettedStyles.sort(function({ prop: propA }, { prop: propB }) {
    if (propA < propB) return -1
    if (propA > propB) return 1
    return 0
  })
};

const camelToDash = (camelString = "") =>
  camelString.replace(/([A-Z])/g, ($1) =>
    "-"+$1.toLowerCase());


// returns [full, color, x, y, blur, spread]
const getShadowValues = shadow =>
  /([^\)]+\)) ([^\s]+) ([^\s]+) ([^\s]+) ([^\s]+)/.exec(shadow);

// returns [full, color, x, y, blur]
const getTextShadowValues = shadow =>
  /([^\)]+\)) ([^\s]+) ([^\s]+) ([^\s]+)/.exec(shadow);


function rgbToHex([r, g, b]) {
  // 将每个分量转换为十六进制，并确保为两位数
  const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  };

  // 将 R、G、B 分量转换为十六进制
  const hexR = componentToHex(r);
  const hexG = componentToHex(g);
  const hexB = componentToHex(b);

  // 拼接十六进制分量，形成完整的十六进制颜色值
  return "#" + hexR + hexG + hexB;
}

function draggable({el, surface = el, cursor = 'move', clickEvent}) {
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
  };

  const setup = () => {
    el.style.transition   = 'none';
    surface.style.cursor = cursor;
    surface.addEventListener('mousedown', onMouseDown, true);
    surface.addEventListener('mouseup', onMouseUp, true);
    document.addEventListener('mousemove', onMouseMove, true);
  };

  const teardown = () => {
    el.style.transition   = null;
    surface.style.cursor  = null;
    surface.removeEventListener('mousedown', onMouseDown, true);
    surface.removeEventListener('mouseup', onMouseUp, true);
    document.removeEventListener('mousemove', onMouseMove, true);
  };

  const onMouseDown =  e => {
    clickEvent && clickEvent(e);
    if (e.target !== state.surface) return;
    e.preventDefault();
    el.style.willChange = 'top,left';
    state.element.x  = parseInt(getStyle(el, 'left'));
    state.element.y  = parseInt(getStyle(el, 'top'));
    state.mouse.x = e.clientX;
    state.mouse.y = e.clientY;
    state.mouse.down = true;
    state.travelDistance = 0;
  };

  const onMouseMove = e => {
    if (!state.mouse.down) return
    e.preventDefault();
    e.stopPropagation();
    el.style.left = state.element.x + e.clientX - state.mouse.x + 'px';
    el.style.top  = state.element.y + e.clientY - state.mouse.y + 'px';
    state.travelDistance += 1;
  };

  const onMouseUp = e => {
    e.preventDefault();
    e.stopPropagation();
    state.mouse.down = false;
    el.style.willChange = null;
    state.element.x    = parseInt(el.style.left) || 0;
    state.element.y    = parseInt(el.style.top) || 0;
    state.travelDistance = 0;
  };

  setup();
  el.teardown = teardown;

  return el
}


const state$2 = {
  distances:  [],
  target:     null,
};

const clearMeasurements = () => {
  if (!state$2.distances) return
  $('[data-measuring]').forEach((el) => {
     el.removeAttribute('data-measuring');
  });
  state$2.distances.forEach((node) => node.remove());
  state$2.distances = [];
};

function calculateVisibleHeight(rect) {
  const viewportHeight = window.innerHeight;

  // 计算元素在视口中的可视高度
  const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);

  // 计算一半高度的垂直坐标
  const halfVerticalCoordinate = Math.max(rect.top, 0) + visibleHeight / 2;

  return halfVerticalCoordinate;
}

const createMeasurements = ({ $anchor, $target }) => {
  if (state$2.target == $target && state$2.distances.length) return
  state$2.target = $target;
  if (state$2.distances.length) clearMeasurements();

  const anchorBounds = $anchor.getBoundingClientRect();
  const targetBounds = $target.getBoundingClientRect();

  const measurements = [];

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
    });
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
    });
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
    });
  }

  if (anchorBounds.top < targetBounds.bottom && anchorBounds.top > targetBounds.top) {
    measurements.push({
      x: anchorBounds.left + (anchorBounds.width / 2) - 3,
      y: targetBounds.top,
      d: anchorBounds.top - targetBounds.top,
      q: "top",
      v: true,
      index: 6,
    });
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
    });
  }

  if (targetBounds.bottom > anchorBounds.bottom && targetBounds.top < anchorBounds.bottom) {
    measurements.push({
      x: anchorBounds.left + (anchorBounds.width / 2) - 3,
      y: anchorBounds.bottom,
      d: targetBounds.bottom - anchorBounds.bottom,
      q: "bottom",
      v: true,
      index: 8,
    });
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
    });
    measurements.push({
      x: anchorBounds.left,
      y: calculateVisibleHeight(anchorBounds),
      d: targetBounds.left - anchorBounds.left,
      q: "right",
      index: 10,
    });
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
    });
    measurements.push({
      x: anchorBounds.left + (anchorBounds.width / 2) - 3,
      y: targetBounds.bottom,
      d: anchorBounds.bottom - targetBounds.bottom,
      q: "top",
      v: true,
      index: 12,
    });
  }

  measurements.map((measurement) => Object.assign(measurement, {
    d: Math.round(measurement.d.toFixed(1) * 100) / 100
  })).filter((m) => Math.round(m.d) > 0).forEach((measurement) => {
    const $measurement = document.createElement("visbug-distance");
    $measurement.position = {
      line_model: measurement,
      node_label_id: state$2.distances.length,
    };
    document.body.appendChild($measurement);
    state$2.distances[state$2.distances.length] = $measurement;
  });

};

const state$1 = {
  gridlines: null,
  needPadding: false,
};

function Guides(visbug, needPadding) {
  state$1.needPadding = needPadding;
  $('body').on('mousemove', on_hover);
  $('body').on('mouseout', on_hoverout);

  window.addEventListener('scroll', hideGridlines);
  visbug.onSelectedUpdate(stickGuide);

  return () => {
    $('body').off('mousemove', on_hover);
    $('body').off('mouseout', on_hoverout);

    window.removeEventListener('scroll', hideGridlines);
    visbug.removeSelectedCallback(stickGuide);

    clearMeasurements();
    hideGridlines();
  }
}

const on_hover = e => {
  const target = deepElementFromPoint(e.clientX, e.clientY);
  if (isOffBounds(target)) return
  showGridlines(target);
};

const stickGuide = els => {
  if (!els.length) return

  state$1.gridlines && state$1.gridlines.remove();
  state$1.gridlines = null;
};

const on_hoverout = () => {
  hideGridlines();
};

const showGridlines = node => {
  const calculatedStyle   = getStyle(node, 'padding');
  let element;
  if (state$1.needPadding && calculatedStyle !== '0px') {
    element = document.createElement('visbug-boxmodel');
    element.position = calcParams(node);
  }
  if (state$1.gridlines) {
    state$1.gridlines.style.display = null;
    state$1.gridlines.update = node.getBoundingClientRect();
    state$1.gridlines.backdrop = {
      element,
    };
  }
  else {
    state$1.gridlines = document.createElement('visbug-gridlines');
    state$1.gridlines.position = node.getBoundingClientRect();
    state$1.gridlines.backdrop = {
      element,
    };

    document.body.appendChild(state$1.gridlines);
  }
};

const hideGridlines = () => {
  if (!state$1.gridlines) return
  state$1.gridlines.style.display = 'none';
};


const calcParams = (el) => {
  const bounds = el.getBoundingClientRect();

  const sides = {
    top:    getStyle(el, 'paddingTop'),
    right:  getStyle(el, 'paddingRight'),
    bottom: getStyle(el, 'paddingBottom'),
    left:   getStyle(el, 'paddingLeft'),
  };

  Object.entries(sides).forEach(([side, val]) => {
    if (typeof val !== 'number')
      val = parseInt(getStyle(el, 'padding'+'-'+side).slice(0, -2));
    sides[side] = Math.round(val.toFixed(1) * 100) / 100;
  });

  return {
    bounds,
    sides,
  }
};

/**
 1. 处理页面级标准事件(点击选择，监听...)
 2. tool特定功能隔离在外面注入
 3. tool通过订阅selectedCallbacks事件监听这里的行为
 */
function Selectable(visbug) {
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
    page.on('click', on_click);
    page.on('mousemove', on_hover);
    page.on('dblclick', on_dblclick);
  };

  const unListen = () => {
    page.off('click', on_click);
    page.off('mousemove', on_hover);
    page.off('dblclick', on_dblclick);
  };

  const on_click = (e) => {
    const $target = deepElementFromPoint(e.clientX, e.clientY);

    if (isOffBounds($target) && !selected.filter((el) => el == $target).length) return

    e.preventDefault();

    if (!e.shiftKey) {
      e.stopPropagation();
      clearMeasurements();
      unselect_all({ silent:true });
    }

    select($target);
  };


  const on_dblclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const $target = deepElementFromPoint(e.clientX, e.clientY);
    if (isOffBounds($target)) return
    EditText([$target]);
  };

  const on_hover = (e) => {
    const $target = deepElementFromPoint(e.clientX, e.clientY);
    const tool = visbug.activeTool;
    if (isOffBounds($target) && !selected.filter((el) => el == $target).length) return
    clearMeasurements();
    clearHover();

    overlayHoverUI({
      el: $target,
      // no_hover: tool === 'guides',
      no_label: tool === 'inspector',
    });

    // 创建测量边框
    if (tool === 'guides' && selected.length >= 1 && !selected.includes($target)) {
      $target.setAttribute('data-measuring', true);
      const [$anchor] = selected;
      createMeasurements({ $anchor, $target });
    }

  };

  const unselect_all = ({ silent = false } = {}) => {
    selected.forEach(el => {
      $(el).attr({
        'data-selected': null,
        'data-label-id': null,
        'data-measuring': null,
      });
    });

    Array.from([
      ...$('visbug-handles'),
      ...$('visbug-label'),
      ...$('visbug-hover'),
      ...$('visbug-distance'),
    ]).forEach(el => el.remove());

    labels    = [];
    handles   = [];
    selected  = [];

    !silent && tellWatchers();
  };

  const select = (el) => {
    const id = handles.length;
    const tool = visbug.activeTool;

    el.setAttribute('data-selected', true);
    el.setAttribute('data-label-id', id);

    overlayMetaUI({
      el,
      id,
      // 暂时都不显示
      no_label: tool === 'inspector' || tool === 'guides',
    });

    selected.unshift(el);
    tellWatchers();
  };

  const onSelectedUpdate = (cb, immediateCallBack) => {
    selectedCallbacks.push(cb);
    immediateCallBack && cb(selected);
  };

  const removeSelectedCallback = (cb) => {
    selectedCallbacks = selectedCallbacks.filter(callback => callback != cb);
  };

  const tellWatchers = () => selectedCallbacks.forEach(cb => cb(selected));

  listen();

  const setLabel = (node, label) => {
    label.text = handleLabelText(node, visbug.activeTool);
    label.update = { boundingRect: node.getBoundingClientRect(), isFixed: isFixed(node) };
  };

  const setHandle = (el, handle) => {
    handle.position = {
      el,
      node_label_id:  el.getAttribute('data-label-id'),
    };
  };

  const createObserver = (node, { handle,label }) => {
     return new MutationObserver((list) => {
       label && setLabel(node, label);
       handle && setHandle(node, handle);
     })
  };

  const overlayMetaUI = ({ el, id, no_label = true }) => {
    let handle = createHandle({el, id});
    let label  = no_label
      ? null
      : createLabel({
        el,
        id,
        template: handleLabelText(el, visbug.activeTool)
      });
     // 对自身以及父节点，子节点观察，增删改查是做出调整变化
    let observer        = createObserver(el, { handle,label });
    let parentObserver  = createObserver(el, { handle,label });

    observer.observe(el, { attributes: true });
    parentObserver.observe(el.parentNode, { childList:true, subtree:true });

    // 不推荐，报警告了，提示推荐MutationObserver
    // $(handle).on('DOMNodeRemoved', () => {
    //   observer.disconnect()
    //   parentObserver.disconnect()
    // })
    const onDOMNodeRemovedObserver = onDOMNodeRemoved(handle, () => {
        observer.disconnect();
        parentObserver.disconnect();
    });
    onDOMNodeRemovedObserver.observe(handle.parentNode, { childList: true, subtree: true });
  };

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
  };

  const overlayHoverUI = ({el, no_hover = false, no_label = true}) => {
    if (hover_state.target === el) return
    hover_state.target = el;

    hover_state.element = no_hover
      ? null
      : createHover(el);

    hover_state.label   = no_label
      ? null
      : createHoverLabel(el, handleLabelText(el, "wh"));

  };

  // 绘制选择边框
  const createHandle = ({el, id}) => {
    if (!handles[id]) {
      const handle = document.createElement('visbug-handles');
      handle.position = { el, node_label_id: id };
      document.body.appendChild(handle);
      handles[handles.length] = handle;
      return handle;
    }
  };

  const createHoverLabel = (el, text) => {
    if (hover_state.label) {
      hover_state.label.remove();
    }

    hover_state.label = document.createElement('visbug-label');
    document.body.appendChild(hover_state.label);

    hover_state.label.text = text;
    hover_state.label.position = {
      boundingRect:   {
        ...el.getBoundingClientRect(),
        x: 0,
        y: 18,
      },
      node_label_id:  'hover',
      isFixed: true,
    };

    hover_state.label.style.setProperty(`--label-bg`, `hsla(267, 100%, 58%, .3)`);

    return hover_state.label
  };

  const createLabel = ({ el, id, template }) => {
     if (!labels[id]) {
       const label = document.createElement('visbug-label');
       label.text = template;
       label.position = {
         boundingRect:   el.getBoundingClientRect(),
         node_label_id:  id,
         isFixed: isFixed(el),
       };
       document.body.appendChild(label);
       labels[labels.length] = label;
       return label
     }
  };

  const createHover = (el) => {
    if (!el.hasAttribute('data-label-id')) {
      if (hover_state.element) hover_state.element.remove();

      hover_state.element = document.createElement('visbug-hover');
      document.body.appendChild(hover_state.element);
      hover_state.element.position = {el};

      return hover_state.element
    }
  };

  const clearHover = () => {
    if (!hover_state.target) return

    hover_state.element && hover_state.element.remove();
    hover_state.label && hover_state.label.remove();

    hover_state.target  = null;
    hover_state.element = null;
    hover_state.label   = null;
  };

  const disconnect = () => {
    unselect_all();
    unListen();
  };

  return {
    listen,
    unselect_all,
    onSelectedUpdate,
    removeSelectedCallback,
    disconnect,
  }

}

const handleLabelText = (el, activeTool) => {
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
};

const stopBubbling = e => e.key != 'Escape' && e.stopPropagation();

const removeEditability = ({target}) => {
  target.removeAttribute('contenteditable');
  target.removeAttribute('spellcheck');
  target.removeEventListener('blur', removeEditability);
  target.removeEventListener('keydown', stopBubbling);
};

function EditText(elements) {
  elements.map(el => {
    let $el = $(el);

    $el.attr({
      contenteditable: true,
      spellcheck: true,
    });
    el.focus();

    $el.on('keydown', stopBubbling);
    $el.on('blur', removeEditability);
  });
}

const state = {
  active: {
    tip:  null,
    target: null,
  },
  tips: new Map(),
};

const mouse_quadrant = e => ({
  north: e.clientY > window.innerHeight / 2,
  west:  e.clientX > window.innerWidth / 2
});

const tip_position = (node, e, north, west) => ({
  top: `${north
    ? e.pageY - node.clientHeight - 20
    : e.pageY + 25}px`,
  left: `${west
    ? e.pageX - node.clientWidth + 23
    : e.pageX - 21}px`,
});

function MetaTip(visbug) {
  state.restoring = false;
  visbug.select;

  $('body').on('mousemove', mouseMove);
  visbug.onSelectedUpdate(fixedPinned);

  return () => {
    $('body').off('mousemove', mouseMove);
    visbug.removeSelectedCallback(fixedPinned);
    hideAll();
  }
}

const fixedPinned = (els) => {
   if (els[0] == state.active.target) {
     state.restoring = true;
   } else {
     state.restoring = false;
     hideAll();
   }
};

const mouseMove = e => {
  const target = deepElementFromPoint(e.clientX, e.clientY);

  if (target.nodeName === 'VISBUG-METATIP') return

  if (isOffBounds(target)) {
    return
  }

  showTip(target, e);
};

function showTip(target, e) {
  if (state.restoring) return
  if (!state.active.tip) {
    const tip = render(target);
    document.body.appendChild(tip);

    positionTip(tip, e);

    state.active.tip = tip;
    state.active.target = target;
  }
  else if (target == state.active.target) { // update position
    // update position
    positionTip(state.active.tip, e);
  }
  else { // update content
    render(target, state.active.tip);
    state.active.target = target;
    positionTip(state.active.tip, e);
  }
}

const render = (el, tip = document.createElement('visbug-metatip')) => {
  const { width, height } = el.getBoundingClientRect();
  const styles = getStyles(el)
    .map(style => Object.assign(style, {
      prop: camelToDash(style.prop)
    }))
    .filter(style =>
      style.prop.includes('font-family')
        ? el.matches('h1,h2,h3,h4,h5,h6,p,a,dd,dt,li,ol,pre,abbr,cite,dfn,kbd,q,small,input,label,legend,textarea,blockquote,date,button,figcaption,nav,header,footer,em,b,code,mark,time,summary,details')
        : true
    )
    .map(style => {
      if (style.prop.includes('color') || style.prop.includes('background-color') || style.prop.includes('border-color') || style.prop.includes('Color') || style.prop.includes('fill') || style.prop.includes('stroke')) {
        let colorText = style.value;
        if (!(/^#[0-9A-Fa-f]{6}$/).test(style.value)) {
          const matchResult = style.value.toString().match(/\((\d+),\s*(\d+),\s*(\d+)\)/);
          if (matchResult) {
            const [, r, g, b] = matchResult.map(Number);
            colorText = rgbToHex([r, g, b]);
          }
        }
        style.value = `
          <span color style="background-color:${style.value};"></span>
          <span color-value>${colorText}</span>
        `;
      }
      if (style.prop.includes('box-shadow')) {
        const [, color, x, y, blur, spread] = getShadowValues(style.value);
        style.value = `${x} ${y} ${blur} ${spread}`;
      }

      if (style.prop.includes('text-shadow')) {
        const [, color, x, y, blur] = getTextShadowValues(style.value);
        style.value = `${x} ${y} ${blur}`;
      }

      if (style.prop.includes('font-family'))
        style.value = `<span string value>${style.value}</span>`;

      if (style.prop.includes('grid-template-areas'))
        style.value = style.value.replace(/" "/g, '"<br>"');

      if (style.prop.includes('background-image'))
        style.value = `<a target="_blank" href="${style.value.slice(style.value.indexOf('(') + 2, style.value.length - 2)}">${style.value.slice(0,25) + '...'}</a>`;

      // check if style is inline style, show indicator
      if (el.getAttribute('style') && el.getAttribute('style').includes(style.prop))
        style.value = `<span local-change>${style.value}</span>`;

      return style
    });

  const localModifications = styles.filter(style =>
    el.getAttribute('style') && el.getAttribute('style').includes(style.prop)
      ? 1
      : 0);

  const notLocalModifications = styles.filter(style =>
    el.getAttribute('style') && el.getAttribute('style').includes(style.prop)
      ? 0
      : 1);

  tip.meta = {
    localModifications,
    notLocalModifications,
    el,
    width,
    height,
  };
  return tip
};

function positionTip(tip, e) {
  const { north, west } = mouse_quadrant(e);
  const { left, top }   = tip_position(tip, e, north, west);

  tip.style.left  = left;
  tip.style.top   = top;

  tip.style.setProperty('--arrow', north
    ? 'var(--arrow-up)'
    : 'var(--arrow-down)');

  tip.style.setProperty('--arrow-top', !north
    ? '-8px'
    : '100%');

  tip.style.setProperty('--arrow-left', west
    ? 'calc(100% - 15px - 15px)'
    : '15px');
}


const clearActive = () => {
  state.active.tip    = null;
  state.active.target = null;
};

const hideAll = () => {
  if (state.active.tip) {
    state.active.tip.remove();
    clearActive();
  }
};

window.loadScript = loadScript;

if (!window.html2canvas) {
  loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js');
}

let compareState = {
  compare: null,
  visible: false,
  selected: [],
};

function Compare$1(visbug) {
  if (compareState.compare) {
    compareState.compare.style.display = "block";
    compareState.visible = true;
  } else {
    const compare = document.createElement('visbug-compare');
    document.body.appendChild(compare);

    compare.htmlToImg = () => htmlToImg(compareState.selected);
    compareState.compare = compare;
    compareState.visible = true;

    visbug.onSelectedUpdate((selected) => compareState.selected = selected);

  }
  return () => {
    // visbug.removeSelectedCallback(htmlToImg)
    // $('visbug-compare').forEach((el) => el.remove())
    hidePlane();
  }
}

const hidePlane = () => {
  compareState.compare.style.display = "none";
  compareState.visible = false;
};


// 节点选择触发生成截图 （中控如果有html2canvas）
const htmlToImg = (els) => {
  console.log("selected", els);
  if (!els.length) {
    alert("请先选择需要截图的元素");
    return Promise.resolve();
  }
  return new Promise((resolve, reject) => {
    const option = {
      name: "元素截图",
      logging: false,
      scale: window.devicePixelRatio * 2,
    };
    let jpeg;
    window.html2canvas(els[0], {...option, allowTaint: true, useCORS: true}).then((canvas) => {
      try {
        //返回图片dataURL，参数：图片格式和清晰度(0-1)
        jpeg = canvas.toDataURL("image/jpeg", 1.0);
        // const image = new Image();
        // image.src = jpeg;
        // window.open(jpeg);
        // let page = window.open(jpeg, "_blank");
        // page.document.body.appendChild(image);
        // 将Base64数据转换为Blob对象
        // const image = new Image();
        // image.src = jpeg;
        // document.body.appendChild(image);
        // const blob = base64ToBlob(jpeg)
        // let url = URL.createObjectURL(blob);
        // window.open(url, "_blank");
        resolve(jpeg);
      } catch (e) {
        reject();
        console.error("截图获取失败，请稍后重试或联系管理员");
      }
    });
  })
};

function loadScript(scriptSrc) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = scriptSrc;
    script.crossOrigin = 'anonymous';
    try {
      script.appendChild(document.createTextNode("//code")); //javascript内容是利用createTextNode创建的（不过IE不认这个）
    } catch (e) {
      script.text = "//code"; //IE认为SCRIPT节点是个特殊的节点所有有个特殊的text属性
    }
    document.body.appendChild(script); /*兼容IE*/
    script.onload = () => {
      resolve();
    };
    script.onerror = () => {
      reject();
    };
  });
}

class Handles extends HTMLElement {
  constructor() {
    super();
    this.$shadow = this.attachShadow({ mode: 'closed' });
    this.styles = [HandlesStyles];
    this.on_resize = this.on_window_resize.bind(this);
  }

  connectedCallback() {
    this.$shadow.adoptedStyleSheets = this.styles;
    window.addEventListener('resize', this.on_resize);
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.on_resize);
  }

  on_window_resize() {
    window.requestAnimationFrame(() => {
      const node_label_id = this.$shadow.host.getAttribute('data-label-id');
      const [source_el] = $(`[data-label-id="${node_label_id}"]`);

      if (!source_el) return

      this.position = {
        node_label_id,
        el: source_el,
        isFixed: isFixed(source_el),
      };
    });
  }

  set position({ el, node_label_id }) {
    this.$shadow.innerHTML = this.render(el.getBoundingClientRect(), node_label_id, isFixed(el));
  }

  render({ x, y, width, height, top, left }, node_label_id, isFixed) {
    this.$shadow.host.setAttribute('data-label-id', node_label_id);
    this.style.setProperty('--top', `${top + (isFixed ? 0 : window.scrollY)}px`);
    this.style.setProperty('--left', `${left}px`);
    this.style.setProperty('--position', isFixed ? 'fixed' : 'absolute');
    this.style.setProperty('--width', `${width}px`);
    this.style.setProperty('--height', `${height}px`);

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

customElements.define("visbug-handles", Handles);

class Handle extends HTMLElement {
  constructor() {
    super();
    this.$shadow = this.attachShadow({mode: 'closed'});
    this.styles = [HandleStyles];
  }

  static get observedAttributes() {
    return ['placement']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'placement') {
      this.placement = newValue;
    }
  }

  connectedCallback() {
    this.$shadow.adoptedStyleSheets = this.styles;
    this.$shadow.innerHTML = this.render();
    this.button = this.$shadow.querySelector('button');
    // 暂时不配置拖动
    // this.button.addEventListener('pointerdown', this.on_element_resize_start.bind(this))
    this.placement = this.getAttribute('placement');
  }

  on_element_resize_start(e) {
    e.preventDefault();
    e.stopPropagation();
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

customElements.define("visbug-handle", Handle);

class Label extends HTMLElement {
   constructor() {
     super();
     this.$shadow = this.attachShadow({ mode: "closed" });
     this.on_resize = this.on_resize.bind(this);
     // this.dispatchQuery = this.dispatchQuery.bind(this)
   }

  connectedCallback() {
    this.$shadow.adoptedStyleSheets = [LabelStyles];
    // $('a', this.$shadow).on('click mouseenter', this.dispatchQuery)
    window.addEventListener('resize', this.on_resize);
  }

  disconnectedCallback() {
    // $('a', this.$shadow).off('click mouseenter', this.dispatchQuery)
    window.removeEventListener('resize', this.on_resize);
  }

  on_resize() {
    window.requestAnimationFrame(() => {
      const node_label_id = this.$shadow.host.getAttribute('data-label-id');
      const [source_el]   = $(`[data-label-id="${node_label_id}"]`);

      if (!source_el) return

      this.position = {
        node_label_id,
        boundingRect: source_el.getBoundingClientRect(),
        isFixed: isFixed(source_el),
      };
    });
  }

  set text(content) {
    this.$shadow.childElementCount
      ? this.$shadow.firstElementChild.innerHTML = content
      : this._text = content;
  }

  set position({ boundingRect, node_label_id, isFixed }) {
    this.$shadow.innerHTML = this.render(node_label_id);
    this.update = { boundingRect, isFixed };
  }

  set update({ boundingRect, isFixed }) {
    const top = boundingRect.y + (isFixed ? 0 : window.scrollY);
    const left = boundingRect.x;
    const position = isFixed ? 'fixed' : 'absolute';
    this.style.setProperty('--top', `${top}px`);
    this.style.setProperty('--left', `${left}px`);
    this.style.setProperty('--max-width', `${boundingRect.width + (window.innerWidth - boundingRect.x - boundingRect.width - 20)}px`);
    this.style.setProperty('--position', position);
    this.setAttribute('data-original-top', top);
    this.setAttribute('data-original-left', left);
    this.setAttribute('data-original-position', position);
  }

  render(node_label_id) {
    this.$shadow.host.setAttribute('data-label-id', node_label_id || ('label_' + Number(new Date())));
    return `<span>${this._text}</span>`
  }

}

customElements.define('visbug-label', Label);

class Distance extends HTMLElement {
  constructor() {
    super();
    this.$shadow = this.attachShadow({ mode: "closed" });
  }

  connectedCallback() {
    this.$shadow.adoptedStyleSheets = [DistanceStyles];
  }

  disconnectedCallback() {}

  set position({ line_model, node_label_id }) {
    this.styleProps = line_model;
    this.$shadow.innerHTML  = this.render(line_model, node_label_id);
  }

  set styleProps({ y, x, d, q, v = false, color, index }) {
    this.style.setProperty('--top', `${y + window.scrollY}px`);
    this.style.setProperty('--right', q === 'left' ? `${x}px` : 'auto');
    this.style.setProperty('--left', q !== 'left' ? `${x}px` : 'auto');
    this.style.setProperty('--direction', v ? 'column' : 'row');
    this.style.setProperty('--quadrant', q);

    if (q === 'left')
      this.style.setProperty('--justify', 'flex-end');

    v
      ? this.style.setProperty('--distance-h', `${d}px`)
      : this.style.setProperty('--distance-w', `${d}px`);

    v
      ? this.style.setProperty('--line-h', `var(--line-w)`)
      : this.style.setProperty('--line-w', `var(--line-w)`);

    this.style.setProperty('--line-color', color === 'pink'
      ? '330 100% 71%'
      : '267 100% 58%');
    this.style.setProperty('--line-base', color === 'pink'
      ? '330 100% 71%'
      : '267 100% 58%');
  }

  render({ q, d }, node_label_id) {
    this.$shadow.host.setAttribute('data-label-id', node_label_id);

    return `
      <figure quadrant="${q}">
        <div></div>
        <figcaption>${Math.round(d)}</figcaption>
        <div></div>
      </figure>
    `
  }
}

customElements.define("visbug-distance", Distance);

class Hover extends Handles {

  constructor() {
    super();
    this.styles = [HandlesStyles, HoverStyles];
  }

  render({ width, height, top, left }, node_label_id, isFixed) {
    this.style.setProperty('--top', `${top + (isFixed ? 0 : window.scrollY)}px`);
    this.style.setProperty('--left', `${left}px`);
    this.style.setProperty('--position', isFixed ? 'fixed' : 'absolute');

    return `
      <svg
        width="${width}" height="${height}"
        viewBox="0 0 ${width} ${height}"
      >
        <rect fill="none" width="100%" height="100%"></rect>
    `
  }
}

customElements.define('visbug-hover', Hover);

class Gridlines extends HTMLElement {

  constructor() {
    super();
    this.$shadow = this.attachShadow({mode: 'closed'});
  }

  connectedCallback() {
    this.$shadow.adoptedStyleSheets = [GridlineStyles];
  }

  disconnectedCallback() {}

  set position(boundingRect) {
    this.$shadow.innerHTML  = this.render(boundingRect);
  }

  set backdrop(bd) {
    const cur_child = this.$shadow.querySelector('visbug-boxmodel');
    cur_child && cur_child.remove();
    if (!bd.element) return
    this.$shadow.appendChild(bd.element);
  }

  set update({ width, height, top, left }) {
    const { winHeight, winWidth } = windowBounds();
    const svg = this.$shadow.querySelector('svg');
    const [rect,line1,line2,line3,line4] = svg.children;

    this.$shadow.host.style.display = 'block';

    svg.setAttribute('viewBox', `0 0 ${winWidth} ${winHeight}`);
    rect.setAttribute('width', width + 'px');
    rect.setAttribute('x', left);
    rect.setAttribute('y', top);
    line1.setAttribute('x1', left);
    line1.setAttribute('x2', left);
    line2.setAttribute('x1', left + width);
    line2.setAttribute('x2', left + width);
    line3.setAttribute('y1', top + window.scrollY);
    line3.setAttribute('y2', top + window.scrollY);
    line3.setAttribute('x2', winWidth);
    line4.setAttribute('y1', top + window.scrollY + height);
    line4.setAttribute('y2', top + window.scrollY + height);
    line4.setAttribute('x2', winWidth);
  }

  render({ x, y, width, height, top, left }) {
    const { winWidth, winHeight } = windowBounds();
    const { offsetHeight } = document.body;
    const calced_y = y + window.scrollY;

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

customElements.define('visbug-gridlines', Gridlines);

class BoxModel extends HTMLElement {

  constructor() {
    super();
    this.$shadow = this.attachShadow({mode: 'closed'});
    this.drawable = {};
  }

  connectedCallback() {
    this.$shadow.adoptedStyleSheets = [BoxModelStyles];
  }

  disconnectedCallback() {}

  set position(payload) {
    this.$shadow.innerHTML = this.render(payload);
    this.createMeasurements(payload);
  }

  render({ bounds, sides }) {
    this.drawable = {
      height: bounds.height,
      width: bounds.width + window.scrollX,
      top: bounds.top + window.scrollY,
      left: bounds.left,
      rotation: 'rotate(-45)',
    };

    this.drawable.bg = 'hsla(330, 100%, 71%, 15%)';
    this.drawable.stripe = 'hsla(330, 100%, 71%, 80%)';

    this.styles({sides});

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
    this.style.setProperty('--width', `${this.drawable.width}px`);
    this.style.setProperty('--height', `${this.drawable.height}px`);
    this.style.setProperty('--top', `${this.drawable.top}px`);
    this.style.setProperty('--left', `${this.drawable.left}px`);
    this.style.setProperty('--bg', `${this.drawable.bg}`);

    this.style.setProperty('--target-left', `${sides.left}px`);
    this.style.setProperty('--target-top', `${sides.top}px`);
    this.style.setProperty('--target-right', `${sides.right}px`);
    this.style.setProperty('--target-bottom', `${sides.bottom}px`);

    this.style.setProperty('--offset-right', `${this.drawable.width - sides.right}px`);
    this.style.setProperty('--offset-bottom', `${this.drawable.height - sides.bottom}px`);
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
      });
    }
    if (sides.bottom) {
      this.createMeasurement({
        x: bounds.left + (bounds.width / 2) - 3,
        y: bounds.bottom - sides.bottom,
        d: sides.bottom,
        q: 'bottom',
        v: true,
        color: "pink",
      });
    }
    if (sides.right) {
      this.createMeasurement({
        x: bounds.left,
        y: bounds.top + (bounds.height / 2) - 3,
        d: sides.left,
        q: 'right',
        v: false,
        color: "pink",
      });
    }
    if (sides.left) {
      this.createMeasurement({
        x: bounds.right - sides.right,
        y:  bounds.top + (bounds.height / 2) - 3,
        d: sides.right,
        q: 'right',
        v: false,
        color: "pink",
      });
    }
  }

  createMeasurement(line_model, node_label_id= 0) {
    const measurement = document.createElement('visbug-distance');
    measurement.position = { line_model, node_label_id };
    this.$shadow.appendChild(measurement);
  }
}

customElements.define('visbug-boxmodel', BoxModel);

class Metatip extends HTMLElement {

  constructor() {
    super();
    this.$shadow = this.attachShadow({mode: 'closed'});
    this.applyScheme = schemeRule(
      this.$shadow,
      MetatipStyles, MetatipLightStyles, MetatipDarkStyles
    );
  }

  connectedCallback() {
    this.applyScheme(document.querySelector("vis-bug").getAttribute("color-scheme"));
  }

  disconnectedCallback() {}

  set meta(data) {
    this.$shadow.innerHTML = this.render(data);
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

customElements.define('visbug-metatip', Metatip);

const defaultOptions = {
  threshold: 0.1,         // matching threshold (0 to 1); smaller is more sensitive
  includeAA: false,       // whether to skip anti-aliasing detection
  alpha: 0.1,             // opacity of original image in diff output
  aaColor: [255, 255, 0], // color of anti-aliased pixels in diff output
  diffColor: [255, 0, 0], // color of different pixels in diff output
  diffColorAlt: null,     // whether to detect dark on light differences between img1 and img2 and set an alternative color to differentiate between the two
  diffMask: false         // draw the diff over a transparent background (a mask)
};

function pixelmatch(img1, img2, output, width, height, options) {

  if (!isPixelData(img1) || !isPixelData(img2) || (output && !isPixelData(output)))
    throw new Error('Image data: Uint8Array, Uint8ClampedArray or Buffer expected.');

  if (img1.length !== img2.length || (output && output.length !== img1.length))
    throw new Error('Image sizes do not match.');

  if (img1.length !== width * height * 4) throw new Error('Image data size does not match width/height.');

  options = Object.assign({}, defaultOptions, options);

  // check if images are identical
  const len = width * height;
  const a32 = new Uint32Array(img1.buffer, img1.byteOffset, len);
  const b32 = new Uint32Array(img2.buffer, img2.byteOffset, len);
  let identical = true;

  for (let i = 0; i < len; i++) {
    if (a32[i] !== b32[i]) { identical = false; break; }
  }
  if (identical) { // fast path if identical
    if (output && !options.diffMask) {
      for (let i = 0; i < len; i++) drawGrayPixel(img1, 4 * i, options.alpha, output);
    }
    return 0;
  }

  // maximum acceptable square distance between two colors;
  // 35215 is the maximum possible value for the YIQ difference metric
  const maxDelta = 35215 * options.threshold * options.threshold;
  let diff = 0;

  // compare each pixel of one image against the other one
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {

      const pos = (y * width + x) * 4;

      // squared YUV distance between colors at this pixel position, negative if the img2 pixel is darker
      const delta = colorDelta(img1, img2, pos, pos);

      // the color difference is above the threshold
      if (Math.abs(delta) > maxDelta) {
        // check it's a real rendering difference or just anti-aliasing
        if (!options.includeAA && (antialiased(img1, x, y, width, height, img2) ||
          antialiased(img2, x, y, width, height, img1))) {
          // one of the pixels is anti-aliasing; draw as yellow and do not count as difference
          // note that we do not include such pixels in a mask
          if (output && !options.diffMask) drawPixel(output, pos, ...options.aaColor);

        } else {
          // found substantial difference not caused by anti-aliasing; draw it as such
          if (output) {
            drawPixel(output, pos, ...(delta < 0 && options.diffColorAlt || options.diffColor));
          }
          diff++;
        }

      } else if (output) {
        // pixels are similar; draw background as grayscale image blended with white
        if (!options.diffMask) drawGrayPixel(img1, pos, options.alpha, output);
      }
    }
  }

  // return the number of different pixels
  return diff;
}

function isPixelData(arr) {
  // work around instanceof Uint8Array not working properly in some Jest environments
  return ArrayBuffer.isView(arr) && arr.constructor.BYTES_PER_ELEMENT === 1;
}

// check if a pixel is likely a part of anti-aliasing;
// based on "Anti-aliased Pixel and Intensity Slope Detector" paper by V. Vysniauskas, 2009

function antialiased(img, x1, y1, width, height, img2) {
  const x0 = Math.max(x1 - 1, 0);
  const y0 = Math.max(y1 - 1, 0);
  const x2 = Math.min(x1 + 1, width - 1);
  const y2 = Math.min(y1 + 1, height - 1);
  const pos = (y1 * width + x1) * 4;
  let zeroes = x1 === x0 || x1 === x2 || y1 === y0 || y1 === y2 ? 1 : 0;
  let min = 0;
  let max = 0;
  let minX, minY, maxX, maxY;

  // go through 8 adjacent pixels
  for (let x = x0; x <= x2; x++) {
    for (let y = y0; y <= y2; y++) {
      if (x === x1 && y === y1) continue;

      // brightness delta between the center pixel and adjacent one
      const delta = colorDelta(img, img, pos, (y * width + x) * 4, true);

      // count the number of equal, darker and brighter adjacent pixels
      if (delta === 0) {
        zeroes++;
        // if found more than 2 equal siblings, it's definitely not anti-aliasing
        if (zeroes > 2) return false;

        // remember the darkest pixel
      } else if (delta < min) {
        min = delta;
        minX = x;
        minY = y;

        // remember the brightest pixel
      } else if (delta > max) {
        max = delta;
        maxX = x;
        maxY = y;
      }
    }
  }

  // if there are no both darker and brighter pixels among siblings, it's not anti-aliasing
  if (min === 0 || max === 0) return false;

  // if either the darkest or the brightest pixel has 3+ equal siblings in both images
  // (definitely not anti-aliased), this pixel is anti-aliased
  return (hasManySiblings(img, minX, minY, width, height) && hasManySiblings(img2, minX, minY, width, height)) ||
    (hasManySiblings(img, maxX, maxY, width, height) && hasManySiblings(img2, maxX, maxY, width, height));
}

// check if a pixel has 3+ adjacent pixels of the same color.
function hasManySiblings(img, x1, y1, width, height) {
  const x0 = Math.max(x1 - 1, 0);
  const y0 = Math.max(y1 - 1, 0);
  const x2 = Math.min(x1 + 1, width - 1);
  const y2 = Math.min(y1 + 1, height - 1);
  const pos = (y1 * width + x1) * 4;
  let zeroes = x1 === x0 || x1 === x2 || y1 === y0 || y1 === y2 ? 1 : 0;

  // go through 8 adjacent pixels
  for (let x = x0; x <= x2; x++) {
    for (let y = y0; y <= y2; y++) {
      if (x === x1 && y === y1) continue;

      const pos2 = (y * width + x) * 4;
      if (img[pos] === img[pos2] &&
        img[pos + 1] === img[pos2 + 1] &&
        img[pos + 2] === img[pos2 + 2] &&
        img[pos + 3] === img[pos2 + 3]) zeroes++;

      if (zeroes > 2) return true;
    }
  }

  return false;
}

// calculate color difference according to the paper "Measuring perceived color difference
// using YIQ NTSC transmission color space in mobile applications" by Y. Kotsarenko and F. Ramos

function colorDelta(img1, img2, k, m, yOnly) {
  let r1 = img1[k + 0];
  let g1 = img1[k + 1];
  let b1 = img1[k + 2];
  let a1 = img1[k + 3];

  let r2 = img2[m + 0];
  let g2 = img2[m + 1];
  let b2 = img2[m + 2];
  let a2 = img2[m + 3];

  if (a1 === a2 && r1 === r2 && g1 === g2 && b1 === b2) return 0;

  if (a1 < 255) {
    a1 /= 255;
    r1 = blend(r1, a1);
    g1 = blend(g1, a1);
    b1 = blend(b1, a1);
  }

  if (a2 < 255) {
    a2 /= 255;
    r2 = blend(r2, a2);
    g2 = blend(g2, a2);
    b2 = blend(b2, a2);
  }

  const y1 = rgb2y(r1, g1, b1);
  const y2 = rgb2y(r2, g2, b2);
  const y = y1 - y2;

  if (yOnly) return y; // brightness difference only

  const i = rgb2i(r1, g1, b1) - rgb2i(r2, g2, b2);
  const q = rgb2q(r1, g1, b1) - rgb2q(r2, g2, b2);

  const delta = 0.5053 * y * y + 0.299 * i * i + 0.1957 * q * q;

  // encode whether the pixel lightens or darkens in the sign
  return y1 > y2 ? -delta : delta;
}

function rgb2y(r, g, b) { return r * 0.29889531 + g * 0.58662247 + b * 0.11448223; }
function rgb2i(r, g, b) { return r * 0.59597799 - g * 0.27417610 - b * 0.32180189; }
function rgb2q(r, g, b) { return r * 0.21147017 - g * 0.52261711 + b * 0.31114694; }

// blend semi-transparent color with white
function blend(c, a) {
  return 255 + (c - 255) * a;
}

function drawPixel(output, pos, r, g, b) {
  output[pos + 0] = r;
  output[pos + 1] = g;
  output[pos + 2] = b;
  output[pos + 3] = 255;
}

function drawGrayPixel(img, i, alpha, output) {
  const r = img[i + 0];
  const g = img[i + 1];
  const b = img[i + 2];
  const val = blend(rgb2y(r, g, b), alpha * img[i + 3] / 255);
  drawPixel(output, i, val, val, val);
}

class Compare extends HTMLElement {
   constructor() {
     super();
     this.mode = "";
     this.$shadow = this.attachShadow({ mode: "closed" });
     this.closeOverlay = this.closeOverlay.bind(this);
     this.showMagnifier = this.showMagnifier.bind(this);
     this.handleHtmlToImg = this.handleHtmlToImg.bind(this);
     this.handleMatch = this.handleMatch.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
   }

  connectedCallback() {
     this.$shadow.innerHTML = this.render();
     this.$shadow.adoptedStyleSheets = [CompareStyles];
     $('.close-btn', this.$shadow)[0].addEventListener('click', this.closeOverlay);
     $('.visbug-diffCanvas', this.$shadow)[0].addEventListener('click', this.showMagnifier);
     $('#ui-upload-paste', this.$shadow)[0].addEventListener('click', () => this.handlePaste("#uiImage", true,".match-img-origin"));
     $('#ui-upload-file', this.$shadow)[0].addEventListener('click', () => this.handleUploadFile("#uiImage", true,".match-img-origin"));
     $('#page-upload-paste', this.$shadow)[0].addEventListener('click', () => this.handlePaste("#pageImage", false, ".match-img-page"));
     $('#page-upload-file', this.$shadow)[0].addEventListener('click', () => this.handleUploadFile("#pageImage", false, ".match-img-page"));
     $('#page-upload-select', this.$shadow)[0].addEventListener('click', this.handleHtmlToImg);
     $('#match-button', this.$shadow)[0].addEventListener('click', this.handleMatch);
     $(".delete-svg", this.$shadow).on('click', this.handleDelete);
  }

  disconnectedCallback() {
    $('.close-btn', this.$shadow)[0].removeEventListener('click', this.closeOverlay);
    $('.visbug-diffCanvas', this.$shadow)[0].removeEventListener('click', this.showMagnifier);
    $('#ui-upload-paste', this.$shadow)[0].removeEventListener('click', () => this.handlePaste("#uiImage", true,".match-img-origin"));
    $('#ui-upload-file', this.$shadow)[0].removeEventListener('click', () => this.handleUploadFile("#uiImage", true,".match-img-origin"));
    $('#page-upload-paste', this.$shadow)[0].removeEventListener('click', () => this.handlePaste("#pageImage", false, ".match-img-page"));
    $('#page-upload-file', this.$shadow)[0].removeEventListener('click', () => this.handleUploadFile("#pageImage", false, ".match-img-page"));
    $('#page-upload-select', this.$shadow)[0].removeEventListener('click', this.handleHtmlToImg);
    $('#match-button', this.$shadow)[0].removeEventListener('click', this.handleMatch);
    $(".delete-svg", this.$shadow).off('click', this.handleDelete);
  }

  closeOverlay() {
     $('.visbug-magnifier', this.$shadow)[0].style.display = 'none';
  }

  // 。。。this绑定丢失，我说怎么this没了
  showMagnifier(e) {
    const $target = e.target;
    if (isOffBounds($target)) return
    // 放大镜
    const dataURL = $target.toDataURL('image/png');
    const magnifierDom = $('.visbug-magnifier', this.$shadow)[0];
    magnifierDom.style.display = "block";
    const magnifierImg = $('#magnifier-img', this.$shadow)[0];
    magnifierImg.src = dataURL;
    // 放大差异，计算判断长度还是宽度适应
    const adjustMode = this.adjustMode(magnifierImg);
    if (adjustMode === "width") {
      magnifierImg.style.width = "80%";
      magnifierImg.style.height = "auto";
    } else {
      magnifierImg.style.height = "80%";
      magnifierImg.style.width = "auto";
    }
  }

  adjustImage() {
    const originImgContainer = $('#match-img-origin', this.$shadow)[0];
    const uiImage = $('#uiImage', this.$shadow)[0];
    const pageImage = $('#pageImage', this.$shadow)[0];
    $(uiImage).on('load', () => {
      const mode = this.adjustMode(uiImage, originImgContainer.clientWidth, originImgContainer.clientHeight);
      if (mode === "width") {
        console.log("图片优先取宽度适应");
        uiImage.style.width = "100%";
        uiImage.style.height = "auto";
        pageImage.style.width = "100%";
        pageImage.style.height = "auto";
      } else {
        console.log("图片优先取高度适应");
        uiImage.style.width = "auto";
        uiImage.style.height = "100%";
        pageImage.style.width = "auto";
        pageImage.style.height = "100%";
      }
      this.mode = mode;
    });
  }

  adjustMode(img, width = window.innerWidth, height = window.innerHeight) {
    const containerAspectRatio = width / height;
    const imageAspectRatio = img.width / img.height;
    if(imageAspectRatio > containerAspectRatio) {
      return "width";
    } else {
      return "height";
    }
  }

  pixelMatchMethod(uiImage, pageImage, mode, threshold = 0.2) {
    let width = Math.max(pageImage.width, uiImage.width) ;
    let height = Math.max(pageImage.height, uiImage.height);
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(uiImage, 0, 0, uiImage.width, uiImage.height);
    const imgData1 = ctx.getImageData(0, 0, width, height);
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(pageImage, 0, 0, pageImage.width, pageImage.height);
    const imgData2 = ctx.getImageData(0, 0, width, height);
    // 创建用于存储差异的画布
    const canvasDiff = $('#diffCanvas', this.$shadow)[0];
    canvasDiff.width = width;
    canvasDiff.height = height;
    const ctxDiff = canvasDiff.getContext('2d');

    const diff = new Uint8ClampedArray(width * height * 4);

    // 比较原始 UI 图和页面截图
    const mismatch = pixelmatch(
      imgData1.data,
      imgData2.data,
      diff,
      width,
      height,
      {threshold}
    );
    ctxDiff.putImageData(new ImageData(diff, width, height), 0, 0);

    if (mode === "width") {
      canvasDiff.style.width = "100%";
      canvasDiff.style.height = "auto";
    } else {
      canvasDiff.style.height = "100%";
      canvasDiff.style.width = "auto";
    }

    // 计算相似度
    const totalPixels = width * height;
    const similarity = 1 - (mismatch / totalPixels);
    const mismatchDom = $('#mismatch', this.$shadow)[0];
    mismatchDom.innerHTML = `Mismatched pixels: ${mismatch}`;
    const similarityNumDom = $('#similarity-num', this.$shadow)[0];
    similarityNumDom.innerHTML = `Similarity ratio: ${(similarity * 100).toFixed(2)}`;
  };

   listenRatio(uiImage, pageImage, mode) {
     const slider = $('#myRange', this.$shadow)[0];
     const output = $('#sliderValue', this.$shadow)[0];
     output.innerHTML = slider.value;
     slider.oninput = () => {
       output.innerHTML = slider.value;
       this.pixelMatchMethod(uiImage, pageImage, mode, slider.value);
     };
   }

   set htmlToImg(htmlToImg) {
      this.htmlToImgMethod = htmlToImg || Promise.resolve();
   }

   handleHtmlToImg() {
     const button = $('#page-upload-select', this.$shadow)[0];
     button.classList.add('loading');
     this.htmlToImgMethod().then((imgSrc) => {
        if (imgSrc) {
          const pageImage = $('#pageImage', this.$shadow)[0];
          pageImage.src = imgSrc;
          $(".match-img-page", this.$shadow)[0].classList.add('hover-mask');
          if (this.mode) {
            console.log("已经上传ui图");
            return;
          }
          const originImgContainer = $('#match-img-origin', this.$shadow)[0];
          $(pageImage).on('load', () => {
            const mode = this.adjustMode(pageImage, originImgContainer.clientWidth, originImgContainer.clientHeight);
            if (mode === "width") {
              console.log("dom节点优先取宽度适应");
              pageImage.style.width = "100%";
              pageImage.style.height = "auto";
            } else {
              console.log("dom节点优先取高度适应");
              pageImage.style.width = "auto";
              pageImage.style.height = "100%";
            }
          });
        }
     }).catch(() => {
       alert('截图获取失败，请稍后重试或联系管理员');
     }).finally(() => {
       button.classList.remove('loading');
     });
   }

   async handlePaste(imgContainer, needAdjust = true, parent) {
     try {
       const container = $(imgContainer, this.$shadow)[0];
       // 读取剪贴板内容
       const items = await navigator.clipboard.read();
       // 遍历剪贴板中的每一项
       for (const item of items) {
         // 如果是图片类型的数据
         if (item.types.includes('image/png') || item.types.includes('image/jpeg')) {
           // 读取图片数据
           const blob = await item.getType('image/png' || 'image/jpeg');
           const imageUrl = URL.createObjectURL(blob);
           container.src = imageUrl;
           needAdjust && this.adjustImage();
           if (parent) {
             $(parent, this.$shadow)[0].classList.add('hover-mask');
           }
         }
       }
     } catch (error) {
       alert('Failed to read clipboard image:', error);
     }
   }

   handleUploadFile(imgContainer, needAdjust = true, parent) {
      const fileInput = $('#fileInput', this.$shadow)[0];
      fileInput.click();
      fileInput.onchange = () => {
        const file = fileInput.files[0];
        if (!file) return;
        if (!file.type.includes('image')) {
          alert('请选择图片文件');
          return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = new Image();
          img.src = e.target.result;
          img.onload = () => {
            $(imgContainer, this.$shadow)[0].src = img.src;
            needAdjust && this.adjustImage();
            if (parent) {
              $(parent, this.$shadow)[0].classList.add('hover-mask');
            }
          };
        };
        reader.readAsDataURL(file);
      };
   }

   handleMatch() {
     const uiImage = $('#uiImage', this.$shadow)[0];
     const pageImage = $('#pageImage', this.$shadow)[0];
     this.pixelMatchMethod(uiImage, pageImage, this.mode);
     this.listenRatio(uiImage, pageImage, this.mode);
   }

   handleDelete(e) {
     const target = e.target;
     const type = target.parentNode.parentNode.id;
     let parent;
     let img;
     switch (type) {
        case "ui-delete":
          parent = $('.match-img-origin', this.$shadow)[0];
          img = $('img', parent)[0];
          break;
        case "page-delete":
          parent = $('.match-img-page', this.$shadow)[0];
          img = $('img', parent)[0];
          break;
     }
     if (img) img.src = "";
     parent && parent.classList.remove('hover-mask');
   }

  render() {
    return `
     <div class="pixel-match-page">
     <input type="file" id="fileInput" style="display:none;">
     <div class="pixel-match">
			<div class="pixel-match-block">
				<div class="match-img-origin" id="match-img-origin">
				<div class="ui-upload-operate">
				 <button id="ui-upload-paste">粘贴</button>
				  <button id="ui-upload-file">上传</button>
        </div>
				    <div class="delete-svg" id="ui-delete">${toDelete}</div>
					  <img id="uiImage" src="" alt="UI Image">
				</div>
				<div class="match-img-page">
				 <div class="ui-upload-operate">
				 <button id="page-upload-paste">粘贴</button>
				  <button id="page-upload-file">上传</button>
				  <button id="page-upload-select">上传选中节点</button>
        </div>
			     	<div class="delete-svg" id="page-delete">${toDelete}</div>
					  <img id="pageImage" src="" alt="Page Image">
				</div>
			</div>
			<div class="pixel-match-result">
				<div class="match-img-origin">
					<canvas class="visbug-diffCanvas" id="diffCanvas" />
				</div>
				<div class="match-operator">
				  <div class="operator-line">
				  <button id="match-button">开始比对</button>
          </div>
					<div class="operator-line" id="mismatch">Mismatched pixels: -</div>
					<div class="operator-line" id="similarity-num">Similarity ratio: -</div>
					<div class="operator-line">
						<span>Threshold</span>
						<div class="slider-container">
						    <input type="range" min="0" max="1" value="0.2" step="0.01" class="slider" id="myRange">
						</div>
						<div class="slider-value" id="sliderValue">0.2</div>
					</div>
				</div>
			</div>
		</div>
		<div class="visbug-magnifier">
			<img id="magnifier-img" src="" alt="">
			<div class="close-btn">
				<div class="close-icon"></div>
			</div>
		</div>
</div>
    `
  }

}

customElements.define('visbug-compare', Compare);

class VisBug extends HTMLElement {
   constructor() {
     super();
     // 统一装配选中功能
     this.toolbar_model = VisBugModel;
     this.$shadow = this.attachShadow({ mode: "closed" });
     this.applyScheme = schemeRule(this.$shadow, VisBugStyle, VisBugLightStyles, VisBugDarkStyles);
   }

   static get observedAttributes() {
     return ['color-scheme']
   }

  connectedCallback() {
    this.setup();
    this.selectorEngine = Selectable(this);
    this.toolSelected($('[data-tool="switch"]', this.$shadow)[0]);
  }

  disconnectedCallback() {
    this.deactivate_feature();
     this.clearUp();
    this.selectorEngine.disconnect();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'color-scheme')
      this.applyScheme(newValue);
  };

  clickEvent = (e) => {
    const target = e.target;
    const toolButton = target.closest('[data-tool]');
    if (toolButton) {
      e.stopPropagation();
      this.toolSelected(toolButton);
    }
  }

  toolSelected(el) {
     if (typeof el === 'string') {
       el = $(`[data-tool="${el}"]`, this.$shadow)[0];
     }
     // 增强el
     el = $(el)[0];

    if (this.active_tool) {
      this.active_tool.attr('data-active', null);
      this.deactivate_feature();
    }

     el.attr('data-active', true);
     this.active_tool = el;
     //data-* 属性
     this[el.dataset.tool]();
  }

  setup() {
    this.$shadow.innerHTML = this.render();
    if (!this.hasAttribute('color-scheme')) {
      this.setAttribute('color-scheme', 'auto');
    }
    const main_ol = this.$shadow.querySelector('ol[vis-bug-ol]');
    // tool装配鼠标拖动
    draggable({
      el:this,
      surface: main_ol,
      cursor: 'grab',
      clickEvent: this.clickEvent,
    });
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
      .filter(node => node.nodeName.includes('VISBUG') || node.nodeName.includes('VIS-BUG'))
      .forEach(el => el.remove());

    this.teardown();
  }

  guides() {
    this.deactivate_feature = Guides(this.selectorEngine, false);
  }

  inspector() {
    this.deactivate_feature = MetaTip(this.selectorEngine);
  }

  padding() {
    this.deactivate_feature = Guides(this.selectorEngine, true);
  }

  compare() {
    this.deactivate_feature = Compare$1(this.selectorEngine);
  }

  switch() {
    const main_ol = this.$shadow.querySelector('ol[vis-bug-ol]');
    if (!this.switchFlag) {
      this.switchFlag = true;
      main_ol.classList.add("vis-bug-toggle");
      const { disconnect } = this.selectorEngine;
      disconnect && disconnect();
    } else {
      this.switchFlag = false;
      main_ol.classList.remove("vis-bug-toggle");
      const { listen } = this.selectorEngine;
      listen && listen();
    }
    this.deactivate_feature = () => {};
  }

  demoTip({key, tool, label, description}) {
    return  description ? `
      <aside ${tool}>
        <div>${label} - ${description}</div>
      </aside>
    ` : ""
  }

  get activeTool() {
    return this.active_tool.dataset.tool;
  }

  render() {
    return `
      <ol vis-bug-ol>
        ${Object.entries(this.toolbar_model).reduce((list, [key, tool]) => `
          ${list}
          <li aria-label="${tool.label} Tool" aria-description="${tool.description}" aria-hotkey="${key}" data-tool="${tool.tool}" data-active="${key == 'b'}">
            ${tool.icon}
            ${this.demoTip({key, ...tool})}
          </li>
        `,'')}
      </ol>
    `
  }

}

customElements.define("vis-bug", VisBug);
