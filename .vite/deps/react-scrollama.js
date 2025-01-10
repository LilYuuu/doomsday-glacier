import {
  require_react
} from "./chunk-WNPTCGAH.js";
import {
  __toESM
} from "./chunk-5WRI5ZAA.js";

// node_modules/react-scrollama/dist/index.es.js
var React = __toESM(require_react());
var import_react = __toESM(require_react());
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var isOffsetInPixels = function isOffsetInPixels2(offset) {
  return typeof offset === "string" && offset.includes("px");
};
var markerStyles = {
  position: "fixed",
  left: 0,
  width: "100%",
  height: 0,
  borderTop: "2px dashed black",
  zIndex: 9999
};
var offsetTextStyles = {
  fontSize: "12px",
  fontFamily: "monospace",
  margin: 0,
  padding: 6
};
var useTop = function useTop2(offset) {
  var offsetInPixels = isOffsetInPixels(offset);
  if (offsetInPixels) {
    return offset;
  } else {
    return "".concat(offset * 100, "%");
  }
};
var DebugOffset = function DebugOffset2(_ref) {
  var offset = _ref.offset;
  var top = useTop(offset);
  return import_react.default.createElement("div", {
    style: _objectSpread2(_objectSpread2({}, markerStyles), {}, {
      top
    })
  }, import_react.default.createElement("p", {
    style: offsetTextStyles
  }, "trigger: ", offset));
};
var createThreshold = function createThreshold2(theta, height) {
  var count = Math.ceil(height / theta);
  var t = [];
  var ratio = 1 / count;
  for (var i = 0; i <= count; i += 1) {
    t.push(i * ratio);
  }
  return t;
};
var Scrollama = function Scrollama2(props) {
  var debug = props.debug, children = props.children, _props$offset = props.offset, offset = _props$offset === void 0 ? 0.3 : _props$offset, _props$onStepEnter = props.onStepEnter, onStepEnter = _props$onStepEnter === void 0 ? function() {
  } : _props$onStepEnter, _props$onStepExit = props.onStepExit, onStepExit = _props$onStepExit === void 0 ? function() {
  } : _props$onStepExit, _props$onStepProgress = props.onStepProgress, onStepProgress = _props$onStepProgress === void 0 ? null : _props$onStepProgress, _props$threshold = props.threshold, threshold = _props$threshold === void 0 ? 4 : _props$threshold;
  var isOffsetDefinedInPixels = isOffsetInPixels(offset);
  var _useState = (0, import_react.useState)(0), _useState2 = _slicedToArray(_useState, 2), lastScrollTop = _useState2[0], setLastScrollTop = _useState2[1];
  var _useState3 = (0, import_react.useState)(null), _useState4 = _slicedToArray(_useState3, 2), windowInnerHeight = _useState4[0], setWindowInnerHeight = _useState4[1];
  var handleSetLastScrollTop = function handleSetLastScrollTop2(scrollTop) {
    setLastScrollTop(scrollTop);
  };
  var handleWindowResize = function handleWindowResize2(e) {
    setWindowInnerHeight(window.innerHeight);
  };
  import_react.default.useEffect(function() {
    if (isOffsetDefinedInPixels) {
      window.addEventListener("resize", handleWindowResize);
      return function() {
        window.removeEventListener("resize", handleWindowResize);
      };
    }
  }, []);
  var isBrowser = typeof window !== "undefined";
  var innerHeight = isBrowser ? windowInnerHeight || window.innerHeight : 0;
  var offsetValue = isOffsetDefinedInPixels ? +offset.replace("px", "") / innerHeight : offset;
  var progressThreshold = (0, import_react.useMemo)(function() {
    return createThreshold(threshold, innerHeight);
  }, [innerHeight]);
  return import_react.default.createElement(import_react.default.Fragment, null, debug && import_react.default.createElement(DebugOffset, {
    offset
  }), import_react.default.Children.map(children, function(child, i) {
    return import_react.default.cloneElement(child, {
      scrollamaId: "react-scrollama-".concat(i),
      offset: offsetValue,
      onStepEnter,
      onStepExit,
      onStepProgress,
      lastScrollTop,
      handleSetLastScrollTop,
      progressThreshold,
      innerHeight
    });
  }));
};
var observerMap = /* @__PURE__ */ new Map();
var RootIds = /* @__PURE__ */ new WeakMap();
var rootId = 0;
var unsupportedValue = void 0;
function getRootId(root) {
  if (!root) return "0";
  if (RootIds.has(root)) return RootIds.get(root);
  rootId += 1;
  RootIds.set(root, rootId.toString());
  return RootIds.get(root);
}
function optionsToId(options) {
  return Object.keys(options).sort().filter((key) => options[key] !== void 0).map((key) => {
    return `${key}_${key === "root" ? getRootId(options.root) : options[key]}`;
  }).toString();
}
function createObserver(options) {
  let id = optionsToId(options);
  let instance = observerMap.get(id);
  if (!instance) {
    const elements = /* @__PURE__ */ new Map();
    let thresholds;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        var _elements$get;
        const inView = entry.isIntersecting && thresholds.some((threshold) => entry.intersectionRatio >= threshold);
        if (options.trackVisibility && typeof entry.isVisible === "undefined") {
          entry.isVisible = inView;
        }
        (_elements$get = elements.get(entry.target)) == null ? void 0 : _elements$get.forEach((callback) => {
          callback(inView, entry);
        });
      });
    }, options);
    thresholds = observer.thresholds || (Array.isArray(options.threshold) ? options.threshold : [options.threshold || 0]);
    instance = {
      id,
      observer,
      elements
    };
    observerMap.set(id, instance);
  }
  return instance;
}
function observe(element, callback, options = {}, fallbackInView = unsupportedValue) {
  if (typeof window.IntersectionObserver === "undefined" && fallbackInView !== void 0) {
    const bounds = element.getBoundingClientRect();
    callback(fallbackInView, {
      isIntersecting: fallbackInView,
      target: element,
      intersectionRatio: typeof options.threshold === "number" ? options.threshold : 0,
      time: 0,
      boundingClientRect: bounds,
      intersectionRect: bounds,
      rootBounds: bounds
    });
    return () => {
    };
  }
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  let callbacks = elements.get(element) || [];
  if (!elements.has(element)) {
    elements.set(element, callbacks);
  }
  callbacks.push(callback);
  observer.observe(element);
  return function unobserve() {
    callbacks.splice(callbacks.indexOf(callback), 1);
    if (callbacks.length === 0) {
      elements.delete(element);
      observer.unobserve(element);
    }
    if (elements.size === 0) {
      observer.disconnect();
      observerMap.delete(id);
    }
  };
}
function useInView({
  threshold,
  delay,
  trackVisibility,
  rootMargin,
  root,
  triggerOnce,
  skip,
  initialInView,
  fallbackInView,
  onChange
} = {}) {
  const unobserve = React.useRef();
  const callback = React.useRef();
  const [state, setState] = React.useState({
    inView: !!initialInView
  });
  callback.current = onChange;
  const setRef = React.useCallback(
    (node) => {
      if (unobserve.current !== void 0) {
        unobserve.current();
        unobserve.current = void 0;
      }
      if (skip) return;
      if (node) {
        unobserve.current = observe(node, (inView, entry) => {
          setState({
            inView,
            entry
          });
          if (callback.current) callback.current(inView, entry);
          if (entry.isIntersecting && triggerOnce && unobserve.current) {
            unobserve.current();
            unobserve.current = void 0;
          }
        }, {
          root,
          rootMargin,
          threshold,
          // @ts-ignore
          trackVisibility,
          // @ts-ignore
          delay
        }, fallbackInView);
      }
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string so it won't change between renders.
      // eslint-disable-next-line react-hooks/exhaustive-deps
      Array.isArray(threshold) ? threshold.toString() : threshold,
      root,
      rootMargin,
      triggerOnce,
      skip,
      trackVisibility,
      fallbackInView,
      delay
    ]
  );
  React.useEffect(() => {
    if (!unobserve.current && state.entry && !triggerOnce && !skip) {
      setState({
        inView: !!initialInView
      });
    }
  });
  const result = [setRef, state.inView, state.entry];
  result.ref = result[0];
  result.inView = result[1];
  result.entry = result[2];
  return result;
}
var useRootMargin = function useRootMargin2(offset) {
  return "-".concat(offset * 100, "% 0px -").concat(100 - offset * 100, "% 0px");
};
var useProgressRootMargin = function useProgressRootMargin2(direction, offset, node, innerHeight) {
  if (!node.current) return "0px";
  var offsetHeight = node.current.offsetHeight / innerHeight;
  if (direction === "down") return "".concat((offsetHeight - offset) * 100, "% 0px ").concat(offset * 100 - 100, "% 0px");
  return "-".concat(offset * 100, "% 0px ").concat(offsetHeight * 100 - (100 - offset * 100), "% 0px");
};
var Step = function Step2(props) {
  var children = props.children, data = props.data, handleSetLastScrollTop = props.handleSetLastScrollTop, lastScrollTop = props.lastScrollTop, _props$onStepEnter = props.onStepEnter, onStepEnter = _props$onStepEnter === void 0 ? function() {
  } : _props$onStepEnter, _props$onStepExit = props.onStepExit, onStepExit = _props$onStepExit === void 0 ? function() {
  } : _props$onStepExit, _props$onStepProgress = props.onStepProgress, onStepProgress = _props$onStepProgress === void 0 ? null : _props$onStepProgress, offset = props.offset, scrollamaId = props.scrollamaId, progressThreshold = props.progressThreshold, innerHeight = props.innerHeight;
  var isBrowser = typeof window !== "undefined";
  var scrollTop = isBrowser ? document.documentElement.scrollTop : 0;
  var direction = lastScrollTop < scrollTop ? "down" : "up";
  var rootMargin = useRootMargin(offset);
  var ref = (0, import_react.useRef)(null);
  var _useState = (0, import_react.useState)(false), _useState2 = _slicedToArray(_useState, 2), isIntersecting = _useState2[0], setIsIntersecting = _useState2[1];
  var _useInView = useInView({
    rootMargin,
    threshold: 0
  }), inViewRef = _useInView.ref, entry = _useInView.entry;
  var progressRootMargin = (0, import_react.useMemo)(function() {
    return useProgressRootMargin(direction, offset, ref, innerHeight);
  }, [direction, offset, ref, innerHeight]);
  var _useInView2 = useInView({
    rootMargin: progressRootMargin,
    threshold: progressThreshold
  }), scrollProgressRef = _useInView2.ref, scrollProgressEntry = _useInView2.entry;
  var setRefs = (0, import_react.useCallback)(function(node) {
    ref.current = node;
    inViewRef(node);
    scrollProgressRef(node);
  }, [inViewRef, scrollProgressRef]);
  import_react.default.useEffect(function() {
    if (isIntersecting) {
      var _scrollProgressEntry$ = scrollProgressEntry.target.getBoundingClientRect(), height = _scrollProgressEntry$.height, top = _scrollProgressEntry$.top;
      var progress = Math.min(1, Math.max(0, (window.innerHeight * offset - top) / height));
      onStepProgress && onStepProgress({
        progress,
        scrollamaId,
        data,
        element: scrollProgressEntry.target,
        entry: scrollProgressEntry,
        direction
      });
    }
  }, [scrollProgressEntry]);
  import_react.default.useEffect(function() {
    if (entry && !entry.isIntersecting && isIntersecting) {
      onStepExit({
        element: entry.target,
        scrollamaId,
        data,
        entry,
        direction
      });
      setIsIntersecting(false);
      handleSetLastScrollTop(scrollTop);
    } else if (entry && entry.isIntersecting && !isIntersecting) {
      setIsIntersecting(true);
      onStepEnter({
        element: entry.target,
        scrollamaId,
        data,
        entry,
        direction
      });
      handleSetLastScrollTop(scrollTop);
    }
  }, [entry]);
  return import_react.default.cloneElement(import_react.default.Children.only(children), {
    "data-react-scrollama-id": scrollamaId,
    ref: setRefs,
    entry
  });
};
export {
  Scrollama,
  Step
};
//# sourceMappingURL=react-scrollama.js.map
