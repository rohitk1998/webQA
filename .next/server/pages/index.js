module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/index": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/components/ActiveLink.tsx":
/*!***************************************!*\
  !*** ./src/components/ActiveLink.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Development\\QA\\OldQA\\web\\src\\components\\ActiveLink.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const mtStlye = {
  base: '4',
  md: '8',
  lg: '8'
};
const linkDisplay = {
  base: 'inline',
  md: 'block',
  lg: 'block'
};

const ActiveLink = ({
  href,
  children
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  let color = router.pathname === href ? 'blue' : '';
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: href,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    color: color,
    display: linkDisplay,
    mt: mtStlye,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (ActiveLink);

/***/ }),

/***/ "./src/components/Drawer.tsx":
/*!***********************************!*\
  !*** ./src/components/Drawer.tsx ***!
  \***********************************/
/*! exports provided: DrawerBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerBar", function() { return DrawerBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/im */ "react-icons/im");
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_im__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ActiveLink */ "./src/components/ActiveLink.tsx");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _utils_isServer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/isServer */ "./src/utils/isServer.ts");
/* harmony import */ var _Profile_ProfileAvatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Profile/ProfileAvatar */ "./src/components/Profile/ProfileAvatar.tsx");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/icons */ "@chakra-ui/icons");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "D:\\Development\\QA\\OldQA\\web\\src\\components\\Drawer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const DrawerBar = () => {
  var _data$me, _data$me2;

  const {
    data,
    loading
  } = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_5__["useMeQuery"])({
    skip: Object(_utils_isServer__WEBPACK_IMPORTED_MODULE_6__["isServer"])()
  });
  const {
    isOpen,
    onOpen,
    onClose
  } = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useDisclosure"])();
  let quote = null;
  let mailActivity = null;
  let messages = null;
  let usermailActivity = null;
  let usermessages = null;
  let tempalte = null;

  if (loading) {} else if ((data === null || data === void 0 ? void 0 : (_data$me = data.me) === null || _data$me === void 0 ? void 0 : _data$me.role) !== "admin") {
    usermessages = __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      href: "/UserMessages",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 7
      }
    }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      as: react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdEmail"],
      mr: 2,
      mb: "2px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }
    }), "Messages");
  } else {
    messages = __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      href: "/messages",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 7
      }
    }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      as: react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdEmail"],
      mr: 2,
      mb: "2px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    }), "Messages");
    quote = __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      href: "/quotes",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 7
      }
    }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      as: react_icons_im__WEBPACK_IMPORTED_MODULE_3__["ImQuotesRight"],
      mr: 2,
      mb: "5px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }
    }), "Quotes");
    tempalte = __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      href: "/templates",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 7
      }
    }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      as: react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdEventNote"],
      mr: 2,
      mb: "5px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }
    }), "Templates");
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["IconButton"],
    "aria-label": "Options",
    icon: __jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__["HamburgerIcon"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 15
      }
    }),
    display: {
      lg: "none"
    },
    visibility: {
      lg: "hidden"
    },
    variant: "outline",
    bg: "yellow",
    onClick: onOpen,
    mt: 2,
    ml: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
    onClose: onClose,
    isOpen: isOpen,
    size: "full",
    placement: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["DrawerOverlay"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["DrawerContent"], {
    bg: "gray.200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["DrawerCloseButton"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["DrawerBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    height: {
      base: "100%"
    },
    flexDirection: "column",
    justifyContent: "space-between",
    mx: "auto",
    mt: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    mt: {
      base: "0",
      md: "30px",
      lg: "30px"
    },
    fontWeight: 600,
    fontSize: 19,
    flexDirection: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Img"], {
    boxSize: "130px" // w="50%"
    ,
    w: "250px",
    objectFit: "cover",
    src: "/static/QA_Cursive_Logo.png",
    alt: "Logo",
    mx: "auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 19
    }
  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    flexDirection: "column",
    mx: "auto",
    mt: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 19
    }
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    as: react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdHome"],
    mr: 2,
    mb: "5px",
    mx: "auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 23
    }
  }), "Dashboard"), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/contacts",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    as: react_icons_im__WEBPACK_IMPORTED_MODULE_3__["ImUsers"],
    mr: 2,
    mb: "5px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 23
    }
  }), "Contacts"), usermessages, tempalte, messages, quote)), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    mb: 32,
    justifyContent: "flex-end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, data && __jsx(_Profile_ProfileAvatar__WEBPACK_IMPORTED_MODULE_7__["ProfileAvatar"], {
    email: (_data$me2 = data.me) === null || _data$me2 === void 0 ? void 0 : _data$me2.email,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 28
    }
  }))), " ")))));
};

/***/ }),

/***/ "./src/components/Layout.tsx":
/*!***********************************!*\
  !*** ./src/components/Layout.tsx ***!
  \***********************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wrapper */ "./src/components/Wrapper.tsx");
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideBar */ "./src/components/SideBar.tsx");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Drawer */ "./src/components/Drawer.tsx");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\Development\\QA\\OldQA\\web\\src\\components\\Layout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Layout = ({
  children,
  variant
}) => {
  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    templateColumns: {
      base: 'repeat(0, 1fr)',
      md: 'repeat(4, 1fr)',
      lg: 'repeat(6, 1fr)'
    },
    templateRows: "repeat(1, 1fr)",
    height: "100vh",
    gap: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["GridItem"], {
    colSpan: 1,
    display: {
      base: 'none',
      md: 'none',
      lg: 'initial'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(_SideBar__WEBPACK_IMPORTED_MODULE_2__["SideBar"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["GridItem"], {
    colSpan: 4,
    p: 2,
    rowSpan: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(_Drawer__WEBPACK_IMPORTED_MODULE_3__["DrawerBar"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx(_Wrapper__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    variant: variant,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, children)));
};

/***/ }),

/***/ "./src/components/Mail_Activity/ActivityCard.tsx":
/*!*******************************************************!*\
  !*** ./src/components/Mail_Activity/ActivityCard.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_withApollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/withApollo */ "./src/utils/withApollo.ts");
var _jsxFileName = "D:\\Development\\QA\\OldQA\\web\\src\\components\\Mail_Activity\\ActivityCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ActivityCard = ({
  Delivered,
  Opened,
  Clicked,
  Bounces,
  SpamReports,
  ActiveCount,
  NonActiveCount
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
    minChildWidth: "120px",
    spacing: "10px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    bg: "#f2f8ff",
    boxShadow: "lg",
    height: "100px",
    width: "105px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    color: "gray.500",
    fontWeight: "semibold",
    letterSpacing: "wide",
    fontSize: "xs",
    textTransform: "uppercase",
    mt: "2",
    textAlign: ["center"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "Invitation Sent"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: 30,
    textAlign: ["center"],
    mt: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, ActiveCount)), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    bg: "#f2f8ff",
    boxShadow: "lg",
    height: "100px",
    width: "105px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    color: "gray.500",
    fontWeight: "semibold",
    letterSpacing: "wide",
    fontSize: "xs",
    textTransform: "uppercase",
    mt: "2",
    textAlign: ["center"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, "Invitation Accepted"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: 30,
    textAlign: ["center"],
    mt: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, NonActiveCount)), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    bg: "#f2f8ff",
    boxShadow: "lg",
    height: "100px",
    width: "105px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    color: "gray.500",
    fontWeight: "semibold",
    letterSpacing: "wide",
    fontSize: "xs",
    textTransform: "uppercase",
    mt: "2",
    textAlign: ["center"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, "DELIVERED"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: 30,
    textAlign: ["center"],
    mt: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, Delivered)), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    bg: "#f2f8ff",
    boxShadow: "lg",
    height: "100px",
    width: "105px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    color: "gray.500",
    fontWeight: "semibold",
    letterSpacing: "wide",
    fontSize: "xs",
    textTransform: "uppercase",
    textAlign: ["center"],
    mt: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, "OPENED"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: 30,
    textAlign: ["center"],
    mt: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, Opened)), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    bg: "#f2f8ff",
    boxShadow: "lg",
    height: "100px",
    width: "105px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    color: "gray.500",
    fontWeight: "semibold",
    letterSpacing: "wide",
    fontSize: "xs",
    textTransform: "uppercase",
    textAlign: ["center"],
    mt: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, "CLICKED"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: 30,
    textAlign: ["center"],
    mt: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, Clicked)), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    bg: "#f2f8ff",
    boxShadow: "lg",
    height: "100px",
    width: "105px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    color: "gray.500",
    fontWeight: "semibold",
    letterSpacing: "wide",
    fontSize: "xs",
    textTransform: "uppercase",
    textAlign: ["center"],
    mt: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, "BOUNCES"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: 30,
    textAlign: ["center"],
    mt: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, Bounces)), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    bg: "#f2f8ff",
    boxShadow: "lg",
    height: "100px",
    width: "105px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    color: "gray.500",
    fontWeight: "semibold",
    letterSpacing: "wide",
    fontSize: "xs",
    textTransform: "uppercase",
    textAlign: ["center"],
    mt: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }, "SPAM REPORTS"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: 30,
    textAlign: ["center"],
    mt: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  }, SpamReports))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_withApollo__WEBPACK_IMPORTED_MODULE_2__["withApollo"])({
  ssr: false
})(ActivityCard));

/***/ }),

/***/ "./src/components/Mail_Activity/ActivityChart.tsx":
/*!********************************************************!*\
  !*** ./src/components/Mail_Activity/ActivityChart.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_withApollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/withApollo */ "./src/utils/withApollo.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Development\\QA\\OldQA\\web\\src\\components\\Mail_Activity\\ActivityChart.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





const ActivityChart = ({
  Delivered,
  Opened,
  Clicked,
  Bounces,
  SpamReports,
  ActiveCount,
  NonActiveCount
}) => {
  const chartData = [];
  chartData.push({
    name: "Invitation Sent",
    count: ActiveCount
  });
  chartData.push({
    name: "Invitation Accepted",
    count: NonActiveCount
  });
  chartData.push({
    name: "Delivered",
    count: Delivered
  });
  chartData.push({
    name: "Opened",
    count: Opened
  });
  chartData.push({
    name: "Clicked",
    count: Clicked
  });
  chartData.push({
    name: "Bounces",
    count: Bounces
  });
  chartData.push({
    name: "Spam Reports",
    count: SpamReports
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    mt: 20,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["BarChart"], {
    width: 1100,
    height: 400,
    data: chartData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["XAxis"], {
    dataKey: "name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["YAxis"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_3__["Bar"], {
    dataKey: "count",
    fill: "#8884d8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_withApollo__WEBPACK_IMPORTED_MODULE_1__["withApollo"])({
  ssr: false
})(ActivityChart));

/***/ }),

/***/ "./src/components/Mail_Activity/index.tsx":
/*!************************************************!*\
  !*** ./src/components/Mail_Activity/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _utils_withApollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/withApollo */ "./src/utils/withApollo.ts");
/* harmony import */ var _utils_useIsAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/useIsAuth */ "./src/utils/useIsAuth.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ActivityCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ActivityCard */ "./src/components/Mail_Activity/ActivityCard.tsx");
/* harmony import */ var _ActivityChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ActivityChart */ "./src/components/Mail_Activity/ActivityChart.tsx");
var _jsxFileName = "D:\\Development\\QA\\OldQA\\web\\src\\components\\Mail_Activity\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







const EMailActivity = () => {
  var _subsCount$data, _subsCount$data2, _subsCount$data3, _subsCount$data4;

  Object(_utils_useIsAuth__WEBPACK_IMPORTED_MODULE_2__["useIsAuth"])();
  const {
    0: Delivered,
    1: setDelivered
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0);
  const {
    0: Opened,
    1: setOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0);
  const {
    0: Clicked,
    1: setClicked
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0);
  const {
    0: Bounces,
    1: setBounces
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0);
  const {
    0: SpamReports,
    1: setSpamReports
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0);
  Object(_utils_useIsAuth__WEBPACK_IMPORTED_MODULE_2__["useIsAuth"])();
  const {
    data,
    error,
    loading,
    fetchMore,
    variables
  } = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_0__["useMailActivityQuery"])();
  const subsCount = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_0__["useAllsubsQuery"])();

  if (!loading && !data) {
    return __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }, "you got query failed for some reason"), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }
    }, error === null || error === void 0 ? void 0 : error.message));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (data) {
      const mailActivity = data.mailActivity.mailActivity;
      let Delivered = [];
      let Opened = [];
      let Clicked = [];
      let Bounces = [];
      let SpamReports = [];
      mailActivity.map(mail => {
        Opened.push(mail.open_count);
        Clicked.push(mail.clicks_count);

        if (mail.Status === "delivered") {
          Delivered.push(mail);
        }

        if (mail.Status === "bounce") {
          Bounces.push(mail);
        }

        if (mail.Status === "spamreport") {
          SpamReports.push(mail);
        }
      });
      setDelivered(Delivered.length);
      setOpened(Opened.reduce((a, b) => a + b, 0));
      setClicked(Clicked.reduce((a, b) => a + b, 0));
      setBounces(Bounces.length);
      setSpamReports(SpamReports.length);
    }
  });

  if (data) {
    console.log(Delivered, Opened, Clicked, Bounces, SpamReports);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, !data ? __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, "loading...") : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_ActivityCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    Delivered: Delivered,
    Opened: Opened,
    Clicked: Clicked,
    Bounces: Bounces,
    SpamReports: SpamReports,
    ActiveCount: (_subsCount$data = subsCount.data) === null || _subsCount$data === void 0 ? void 0 : _subsCount$data.Allsubs.ActiveCount,
    NonActiveCount: (_subsCount$data2 = subsCount.data) === null || _subsCount$data2 === void 0 ? void 0 : _subsCount$data2.Allsubs.NonActiveCount,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }), __jsx(_ActivityChart__WEBPACK_IMPORTED_MODULE_5__["default"], {
    Delivered: Delivered,
    Opened: Opened,
    Clicked: Clicked,
    Bounces: Bounces,
    SpamReports: SpamReports,
    ActiveCount: (_subsCount$data3 = subsCount.data) === null || _subsCount$data3 === void 0 ? void 0 : _subsCount$data3.Allsubs.ActiveCount,
    NonActiveCount: (_subsCount$data4 = subsCount.data) === null || _subsCount$data4 === void 0 ? void 0 : _subsCount$data4.Allsubs.NonActiveCount,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_withApollo__WEBPACK_IMPORTED_MODULE_1__["withApollo"])({
  ssr: false
})(EMailActivity));

/***/ }),

/***/ "./src/components/Profile/ProfileAvatar.tsx":
/*!**************************************************!*\
  !*** ./src/components/Profile/ProfileAvatar.tsx ***!
  \**************************************************/
/*! exports provided: ProfileAvatar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileAvatar", function() { return ProfileAvatar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\Development\\QA\\OldQA\\web\\src\\components\\Profile\\ProfileAvatar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ProfileAvatar = ({
  email
}) => {
  const [logout, {
    loading: logoutFetching
  }] = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_4__["useLogoutMutation"])();
  const apolloClient = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useApolloClient"])(); // let body = null;

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mx: "auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["MenuButton"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    name: email,
    bg: "yellow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  })), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["MenuList"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, "Profile"))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    onClick: async () => {
      await logout();
      await router.replace("/login?next=" + router.pathname);
      await apolloClient.resetStore();
    },
    isLoading: logoutFetching,
    variant: "link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "Logout"))));
};

/***/ }),

/***/ "./src/components/SideBar.tsx":
/*!************************************!*\
  !*** ./src/components/SideBar.tsx ***!
  \************************************/
/*! exports provided: SideBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBar", function() { return SideBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/im */ "react-icons/im");
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_im__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ActiveLink */ "./src/components/ActiveLink.tsx");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _utils_isServer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/isServer */ "./src/utils/isServer.ts");
/* harmony import */ var _Profile_ProfileAvatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Profile/ProfileAvatar */ "./src/components/Profile/ProfileAvatar.tsx");
var _jsxFileName = "D:\\Development\\QA\\OldQA\\web\\src\\components\\SideBar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const SideBar = () => {
  var _data$me, _data$me2;

  const {
    data,
    loading
  } = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_5__["useMeQuery"])({
    skip: Object(_utils_isServer__WEBPACK_IMPORTED_MODULE_6__["isServer"])()
  });
  let quote = null;
  let mailActivity = null;
  let messages = null;
  let usermailActivity = null;
  let usermessages = null;
  let tempalte = null;

  if (loading) {} else if ((data === null || data === void 0 ? void 0 : (_data$me = data.me) === null || _data$me === void 0 ? void 0 : _data$me.role) !== "admin") {
    usermessages = __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      href: "/UserMessages",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }
    }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      as: react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdEmail"],
      mr: 2,
      mb: "5px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }), "Messages");
  } else {
    quote = __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      href: "/quotes",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 7
      }
    }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      as: react_icons_im__WEBPACK_IMPORTED_MODULE_3__["ImQuotesRight"],
      mr: 2,
      mb: "5px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }
    }), "Quotes");
    messages = __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      href: "/messages",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }
    }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      as: react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdEmail"],
      mr: 2,
      mb: "5px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }
    }), "Messages");
    tempalte = __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
      href: "/templates",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 7
      }
    }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      as: react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdEventNote"],
      mr: 2,
      mb: "5px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    }), "Templates");
  }

  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    bg: "gray.200",
    width: {
      base: "300px",
      md: "300px",
      lg: "300px"
    },
    height: {
      base: "100%",
      md: "100%",
      lg: "100%"
    },
    flexDirection: "column",
    justifyContent: "space-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    mt: {
      base: "0",
      md: "30px",
      lg: "30px"
    },
    fontWeight: 600,
    fontSize: 19,
    flexDirection: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Img"], {
    boxSize: "110px",
    w: "100%",
    objectFit: "cover",
    src: "/static/QA_Cursive_Logo.png",
    alt: "Logo",
    mx: "auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mx: "auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    as: react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdHome"],
    mr: 2,
    mb: "5px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }), "Dashboards"), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/contacts",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    as: react_icons_im__WEBPACK_IMPORTED_MODULE_3__["ImUsers"],
    mr: 2,
    mb: "5px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }), "Contacts"), usermessages, tempalte, messages, quote)), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    mt: {
      base: "0",
      md: "50px",
      lg: "50px"
    },
    mb: 14,
    justifyContent: "flex-end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, data && __jsx(_Profile_ProfileAvatar__WEBPACK_IMPORTED_MODULE_7__["ProfileAvatar"], {
    email: (_data$me2 = data.me) === null || _data$me2 === void 0 ? void 0 : _data$me2.email,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 18
    }
  })));
};

/***/ }),

/***/ "./src/components/UserMailActivity/index.tsx":
/*!***************************************************!*\
  !*** ./src/components/UserMailActivity/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _utils_withApollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/withApollo */ "./src/utils/withApollo.ts");
/* harmony import */ var _utils_useIsAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/useIsAuth */ "./src/utils/useIsAuth.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Mail_Activity_ActivityCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Mail_Activity/ActivityCard */ "./src/components/Mail_Activity/ActivityCard.tsx");
/* harmony import */ var _Mail_Activity_ActivityChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Mail_Activity/ActivityChart */ "./src/components/Mail_Activity/ActivityChart.tsx");
var _jsxFileName = "D:\\Development\\QA\\OldQA\\web\\src\\components\\UserMailActivity\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







const UsersMailsActivities = ({
  id
}) => {
  var _subsCount$data, _subsCount$data2, _subsCount$data3, _subsCount$data4;

  Object(_utils_useIsAuth__WEBPACK_IMPORTED_MODULE_2__["useIsAuth"])();
  const {
    0: Delivered,
    1: setDelivered
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0);
  const {
    0: Opened,
    1: setOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0);
  const {
    0: Clicked,
    1: setClicked
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0);
  const {
    0: Bounces,
    1: setBounces
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0);
  const {
    0: SpamReports,
    1: setSpamReports
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0);
  Object(_utils_useIsAuth__WEBPACK_IMPORTED_MODULE_2__["useIsAuth"])();
  const {
    data,
    error,
    loading,
    fetchMore,
    variables
  } = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_0__["useMailActivityByIdQuery"])({
    variables: {
      id: id
    },
    notifyOnNetworkStatusChange: true
  });
  const subsCount = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_0__["useAllsubsIdQuery"])({
    variables: {
      Id: id
    },
    notifyOnNetworkStatusChange: true
  });

  if (!loading && !data) {
    return __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }
    }, "you got query failed for some reason"), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    }, error === null || error === void 0 ? void 0 : error.message));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (data) {
      const mailActivity = data.mailActivityById.mailActivity;
      let Delivered = [];
      let Opened = [];
      let Clicked = [];
      let Bounces = [];
      let SpamReports = [];
      mailActivity.map(mail => {
        Opened.push(mail.open_count);
        Clicked.push(mail.clicks_count);

        if (mail.Status === "delivered") {
          Delivered.push(mail);
        }

        if (mail.Status === "bounce") {
          Bounces.push(mail);
        }

        if (mail.Status === "spamreport") {
          SpamReports.push(mail);
        }
      });
      setDelivered(Delivered.length);
      setOpened(Opened.reduce((a, b) => a + b, 0));
      setClicked(Clicked.reduce((a, b) => a + b, 0));
      setBounces(Bounces.length);
      setSpamReports(SpamReports.length);
    }
  });

  if (data) {
    console.log(Delivered, Opened, Clicked, Bounces, SpamReports);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, !data ? __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, "loading...") : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_Mail_Activity_ActivityCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    Delivered: Delivered,
    Opened: Opened,
    Clicked: Clicked,
    Bounces: Bounces,
    SpamReports: SpamReports,
    ActiveCount: (_subsCount$data = subsCount.data) === null || _subsCount$data === void 0 ? void 0 : _subsCount$data.AllsubsId.ActiveCount,
    NonActiveCount: (_subsCount$data2 = subsCount.data) === null || _subsCount$data2 === void 0 ? void 0 : _subsCount$data2.AllsubsId.NonActiveCount,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }), __jsx(_Mail_Activity_ActivityChart__WEBPACK_IMPORTED_MODULE_5__["default"], {
    Delivered: Delivered,
    Opened: Opened,
    Clicked: Clicked,
    Bounces: Bounces,
    SpamReports: SpamReports,
    ActiveCount: (_subsCount$data3 = subsCount.data) === null || _subsCount$data3 === void 0 ? void 0 : _subsCount$data3.AllsubsId.ActiveCount,
    NonActiveCount: (_subsCount$data4 = subsCount.data) === null || _subsCount$data4 === void 0 ? void 0 : _subsCount$data4.AllsubsId.NonActiveCount,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_withApollo__WEBPACK_IMPORTED_MODULE_1__["withApollo"])({
  ssr: false
})(UsersMailsActivities));

/***/ }),

/***/ "./src/components/Wrapper.tsx":
/*!************************************!*\
  !*** ./src/components/Wrapper.tsx ***!
  \************************************/
/*! exports provided: Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Development\\QA\\OldQA\\web\\src\\components\\Wrapper.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Wrapper = ({
  children,
  variant = 'regular'
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mx: "auto",
    pt: 30,
    maxW: variant === 'regular' ? '1000px' : '400px',
    w: "100%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, children));
};

/***/ }),

/***/ "./src/generated/graphql.tsx":
/*!***********************************!*\
  !*** ./src/generated/graphql.tsx ***!
  \***********************************/
/*! exports provided: RegularMailResponesFragmentDoc, ActivitySnippetFragmentDoc, AllsubSnippetFragmentDoc, PaginatedActivitySnippetFragmentDoc, RegularErrorFragmentDoc, ProfileUserFragmentDoc, ProfileUserResponseFragmentDoc, QuoteSnippetFragmentDoc, RegularTemplatesFragmentDoc, RegularTemplateResponseFragmentDoc, RegularQuoteFragmentDoc, RegularQuoteResponseFragmentDoc, RegularSubFragmentDoc, RegularSubResponseFragmentDoc, RegularUserFragmentDoc, RegularUserResponseFragmentDoc, SubSnippetFragmentDoc, TemplatesSnippetFragmentDoc, AlluserSnippetFragmentDoc, UpdateTemplatesDocument, useUpdateTemplatesMutation, AcceptInviteDocument, useAcceptInviteMutation, CancelSubscriptionDocument, useCancelSubscriptionMutation, ChangeCreditCardDocument, useChangeCreditCardMutation, ChangePasswordDocument, useChangePasswordMutation, UpdateMailandFrequencyDocument, useUpdateMailandFrequencyMutation, CreateQuoteDocument, useCreateQuoteMutation, CreateSubDocument, useCreateSubMutation, CreateSubFromContactDocument, useCreateSubFromContactMutation, CreateSubFromInviteDocument, useCreateSubFromInviteMutation, CreateSubscriptionDocument, useCreateSubscriptionMutation, CreateSubsfrwdpageDocument, useCreateSubsfrwdpageMutation, DeleteQuoteDocument, useDeleteQuoteMutation, DeleteSubDocument, useDeleteSubMutation, DeleteTemplateDocument, useDeleteTemplateMutation, ForgotPasswordDocument, useForgotPasswordMutation, LoginDocument, useLoginMutation, LogoutDocument, useLogoutMutation, ReSubribeUserExistingCcDocument, useReSubribeUserExistingCcMutation, ReSubribeUserNewCcDocument, useReSubribeUserNewCcMutation, RegisterDocument, useRegisterMutation, CreateTemplatesDocument, useCreateTemplatesMutation, UnsubscribeSubDocument, useUnsubscribeSubMutation, UpdateQuoteDocument, useUpdateQuoteMutation, UpdateSubDocument, useUpdateSubMutation, UpdateUserDocument, useUpdateUserMutation, UpdateUserAuthDocument, useUpdateUserAuthMutation, AllsubsDocument, useAllsubsQuery, useAllsubsLazyQuery, AllsubsIdDocument, useAllsubsIdQuery, useAllsubsIdLazyQuery, MailActivityByIdDocument, useMailActivityByIdQuery, useMailActivityByIdLazyQuery, PaginatedActivityDocument, usePaginatedActivityQuery, usePaginatedActivityLazyQuery, MailActivitybyIdDocument, useMailActivitybyIdQuery, useMailActivitybyIdLazyQuery, QuotesDocument, useQuotesQuery, useQuotesLazyQuery, SubsDocument, useSubsQuery, useSubsLazyQuery, AlluserDocument, useAlluserQuery, useAlluserLazyQuery, MailActivityDocument, useMailActivityQuery, useMailActivityLazyQuery, MeDocument, useMeQuery, useMeLazyQuery, ProfileDocument, useProfileQuery, useProfileLazyQuery, SubbytokenDocument, useSubbytokenQuery, useSubbytokenLazyQuery, GetAlltemplatesDocument, useGetAlltemplatesQuery, useGetAlltemplatesLazyQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularMailResponesFragmentDoc", function() { return RegularMailResponesFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitySnippetFragmentDoc", function() { return ActivitySnippetFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllsubSnippetFragmentDoc", function() { return AllsubSnippetFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatedActivitySnippetFragmentDoc", function() { return PaginatedActivitySnippetFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularErrorFragmentDoc", function() { return RegularErrorFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileUserFragmentDoc", function() { return ProfileUserFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileUserResponseFragmentDoc", function() { return ProfileUserResponseFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteSnippetFragmentDoc", function() { return QuoteSnippetFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularTemplatesFragmentDoc", function() { return RegularTemplatesFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularTemplateResponseFragmentDoc", function() { return RegularTemplateResponseFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularQuoteFragmentDoc", function() { return RegularQuoteFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularQuoteResponseFragmentDoc", function() { return RegularQuoteResponseFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularSubFragmentDoc", function() { return RegularSubFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularSubResponseFragmentDoc", function() { return RegularSubResponseFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularUserFragmentDoc", function() { return RegularUserFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularUserResponseFragmentDoc", function() { return RegularUserResponseFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubSnippetFragmentDoc", function() { return SubSnippetFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatesSnippetFragmentDoc", function() { return TemplatesSnippetFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlluserSnippetFragmentDoc", function() { return AlluserSnippetFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTemplatesDocument", function() { return UpdateTemplatesDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateTemplatesMutation", function() { return useUpdateTemplatesMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptInviteDocument", function() { return AcceptInviteDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAcceptInviteMutation", function() { return useAcceptInviteMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelSubscriptionDocument", function() { return CancelSubscriptionDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCancelSubscriptionMutation", function() { return useCancelSubscriptionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeCreditCardDocument", function() { return ChangeCreditCardDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useChangeCreditCardMutation", function() { return useChangeCreditCardMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordDocument", function() { return ChangePasswordDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useChangePasswordMutation", function() { return useChangePasswordMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMailandFrequencyDocument", function() { return UpdateMailandFrequencyDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateMailandFrequencyMutation", function() { return useUpdateMailandFrequencyMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQuoteDocument", function() { return CreateQuoteDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateQuoteMutation", function() { return useCreateQuoteMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSubDocument", function() { return CreateSubDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateSubMutation", function() { return useCreateSubMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSubFromContactDocument", function() { return CreateSubFromContactDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateSubFromContactMutation", function() { return useCreateSubFromContactMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSubFromInviteDocument", function() { return CreateSubFromInviteDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateSubFromInviteMutation", function() { return useCreateSubFromInviteMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSubscriptionDocument", function() { return CreateSubscriptionDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateSubscriptionMutation", function() { return useCreateSubscriptionMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSubsfrwdpageDocument", function() { return CreateSubsfrwdpageDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateSubsfrwdpageMutation", function() { return useCreateSubsfrwdpageMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteQuoteDocument", function() { return DeleteQuoteDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeleteQuoteMutation", function() { return useDeleteQuoteMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSubDocument", function() { return DeleteSubDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeleteSubMutation", function() { return useDeleteSubMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTemplateDocument", function() { return DeleteTemplateDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeleteTemplateMutation", function() { return useDeleteTemplateMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordDocument", function() { return ForgotPasswordDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForgotPasswordMutation", function() { return useForgotPasswordMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDocument", function() { return LoginDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLoginMutation", function() { return useLoginMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutDocument", function() { return LogoutDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLogoutMutation", function() { return useLogoutMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReSubribeUserExistingCcDocument", function() { return ReSubribeUserExistingCcDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReSubribeUserExistingCcMutation", function() { return useReSubribeUserExistingCcMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReSubribeUserNewCcDocument", function() { return ReSubribeUserNewCcDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReSubribeUserNewCcMutation", function() { return useReSubribeUserNewCcMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDocument", function() { return RegisterDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRegisterMutation", function() { return useRegisterMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTemplatesDocument", function() { return CreateTemplatesDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateTemplatesMutation", function() { return useCreateTemplatesMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsubscribeSubDocument", function() { return UnsubscribeSubDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUnsubscribeSubMutation", function() { return useUnsubscribeSubMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateQuoteDocument", function() { return UpdateQuoteDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateQuoteMutation", function() { return useUpdateQuoteMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSubDocument", function() { return UpdateSubDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateSubMutation", function() { return useUpdateSubMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserDocument", function() { return UpdateUserDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateUserMutation", function() { return useUpdateUserMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserAuthDocument", function() { return UpdateUserAuthDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateUserAuthMutation", function() { return useUpdateUserAuthMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllsubsDocument", function() { return AllsubsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAllsubsQuery", function() { return useAllsubsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAllsubsLazyQuery", function() { return useAllsubsLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllsubsIdDocument", function() { return AllsubsIdDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAllsubsIdQuery", function() { return useAllsubsIdQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAllsubsIdLazyQuery", function() { return useAllsubsIdLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailActivityByIdDocument", function() { return MailActivityByIdDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMailActivityByIdQuery", function() { return useMailActivityByIdQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMailActivityByIdLazyQuery", function() { return useMailActivityByIdLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatedActivityDocument", function() { return PaginatedActivityDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePaginatedActivityQuery", function() { return usePaginatedActivityQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePaginatedActivityLazyQuery", function() { return usePaginatedActivityLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailActivitybyIdDocument", function() { return MailActivitybyIdDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMailActivitybyIdQuery", function() { return useMailActivitybyIdQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMailActivitybyIdLazyQuery", function() { return useMailActivitybyIdLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesDocument", function() { return QuotesDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQuotesQuery", function() { return useQuotesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQuotesLazyQuery", function() { return useQuotesLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubsDocument", function() { return SubsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSubsQuery", function() { return useSubsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSubsLazyQuery", function() { return useSubsLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlluserDocument", function() { return AlluserDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAlluserQuery", function() { return useAlluserQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAlluserLazyQuery", function() { return useAlluserLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailActivityDocument", function() { return MailActivityDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMailActivityQuery", function() { return useMailActivityQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMailActivityLazyQuery", function() { return useMailActivityLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeDocument", function() { return MeDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMeQuery", function() { return useMeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMeLazyQuery", function() { return useMeLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDocument", function() { return ProfileDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useProfileQuery", function() { return useProfileQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useProfileLazyQuery", function() { return useProfileLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubbytokenDocument", function() { return SubbytokenDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSubbytokenQuery", function() { return useSubbytokenQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSubbytokenLazyQuery", function() { return useSubbytokenLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAlltemplatesDocument", function() { return GetAlltemplatesDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetAlltemplatesQuery", function() { return useGetAlltemplatesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGetAlltemplatesLazyQuery", function() { return useGetAlltemplatesLazyQuery; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */

const RegularMailResponesFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment RegularMailRespones on MailActivity {
  id
  From_Email
  To_Email
  subject
  Status
  open_count
  clicks_count
  msgid
  type
}
    `;
const ActivitySnippetFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment ActivitySnippet on ActivityRespone {
  mailActivity {
    ...RegularMailRespones
  }
}
    ${RegularMailResponesFragmentDoc}`;
const AllsubSnippetFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment AllsubSnippet on SubsCount {
  ActiveCount
  NonActiveCount
}
    `;
const PaginatedActivitySnippetFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment PaginatedActivitySnippet on MailActivity {
  id
  From_Email
  To_Email
  subject
  Status
  msgid
  open_count
  clicks_count
  createdAt
  body
  creatorId
  Author
  type
  subsid
  user {
    id
    name
  }
  subs {
    id
    name
  }
}
    `;
const RegularErrorFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment RegularError on FieldError {
  field
  message
}
    `;
const ProfileUserFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment ProfileUser on User {
  id
  inviteLink
  name
  email
  address
  city
  state
  zip
  role
  catagory
  title
  company
  twitter
  facebook
  linkedIn
  website
  customerType
  ccLast4
  DefaultTemplates
}
    `;
const ProfileUserResponseFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment ProfileUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...ProfileUser
  }
}
    ${RegularErrorFragmentDoc}
${ProfileUserFragmentDoc}`;
const QuoteSnippetFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment QuoteSnippet on Quote {
  id
  name
  user {
    id
    email
  }
  createdAt
  catagory
}
    `;
const RegularTemplatesFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment RegularTemplates on Templates {
  id
}
    `;
const RegularTemplateResponseFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment RegularTemplateResponse on TemplateRespones {
  errors {
    ...RegularError
  }
  template {
    ...RegularTemplates
  }
}
    ${RegularErrorFragmentDoc}
${RegularTemplatesFragmentDoc}`;
const RegularQuoteFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment RegularQuote on Quote {
  id
}
    `;
const RegularQuoteResponseFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment RegularQuoteResponse on QuoteResponse {
  errors {
    ...RegularError
  }
  quote {
    ...RegularQuote
  }
}
    ${RegularErrorFragmentDoc}
${RegularQuoteFragmentDoc}`;
const RegularSubFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment RegularSub on Sub {
  id
}
    `;
const RegularSubResponseFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment RegularSubResponse on SubResponse {
  errors {
    ...RegularError
  }
  sub {
    ...RegularSub
  }
}
    ${RegularErrorFragmentDoc}
${RegularSubFragmentDoc}`;
const RegularUserFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment RegularUser on User {
  id
  email
  inviteLink
  role
}
    `;
const RegularUserResponseFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
const SubSnippetFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment SubSnippet on Sub {
  id
  createdAt
  updatedAt
  name
  email
  subscribed
  frequency
  creator {
    id
    email
  }
}
    `;
const TemplatesSnippetFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment TemplatesSnippet on Templates {
  id
  title
  body
  subject
  Active
  createdAt
}
    `;
const AlluserSnippetFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment alluserSnippet on Alluser {
  user {
    id
    name
  }
}
    `;
const UpdateTemplatesDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation UpdateTemplates($id: Int!, $title: String!, $body: String!, $subject: String!, $Active: Boolean!) {
  updateTemplates(
    id: $id
    title: $title
    body: $body
    subject: $subject
    Active: $Active
  ) {
    ...RegularTemplateResponse
  }
}
    ${RegularTemplateResponseFragmentDoc}`;

/**
 * __useUpdateTemplatesMutation__
 *
 * To run a mutation, you first call `useUpdateTemplatesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTemplatesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTemplatesMutation, { data, loading, error }] = useUpdateTemplatesMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      body: // value for 'body'
 *      subject: // value for 'subject'
 *      Active: // value for 'Active'
 *   },
 * });
 */
function useUpdateTemplatesMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](UpdateTemplatesDocument, options);
}
const AcceptInviteDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation AcceptInvite($token: String!, $subscribed: Boolean!, $frequency: Float!) {
  acceptInvite(token: $token, subscribed: $subscribed, frequency: $frequency) {
    ...RegularSubResponse
  }
}
    ${RegularSubResponseFragmentDoc}`;

/**
 * __useAcceptInviteMutation__
 *
 * To run a mutation, you first call `useAcceptInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptInviteMutation, { data, loading, error }] = useAcceptInviteMutation({
 *   variables: {
 *      token: // value for 'token'
 *      subscribed: // value for 'subscribed'
 *      frequency: // value for 'frequency'
 *   },
 * });
 */
function useAcceptInviteMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](AcceptInviteDocument, options);
}
const CancelSubscriptionDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation CancelSubscription {
  cancelSubscription {
    ...ProfileUserResponse
  }
}
    ${ProfileUserResponseFragmentDoc}`;

/**
 * __useCancelSubscriptionMutation__
 *
 * To run a mutation, you first call `useCancelSubscriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelSubscriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelSubscriptionMutation, { data, loading, error }] = useCancelSubscriptionMutation({
 *   variables: {
 *   },
 * });
 */
function useCancelSubscriptionMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](CancelSubscriptionDocument, options);
}
const ChangeCreditCardDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation ChangeCreditCard($source: String!, $ccLast4: String!) {
  changeCreditCard(source: $source, ccLast4: $ccLast4) {
    ...ProfileUserResponse
  }
}
    ${ProfileUserResponseFragmentDoc}`;

/**
 * __useChangeCreditCardMutation__
 *
 * To run a mutation, you first call `useChangeCreditCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeCreditCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeCreditCardMutation, { data, loading, error }] = useChangeCreditCardMutation({
 *   variables: {
 *      source: // value for 'source'
 *      ccLast4: // value for 'ccLast4'
 *   },
 * });
 */
function useChangeCreditCardMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](ChangeCreditCardDocument, options);
}
const ChangePasswordDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
function useChangePasswordMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](ChangePasswordDocument, options);
}
const UpdateMailandFrequencyDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation updateMailandFrequency($token: String!, $frequency: Float!, $email: String!) {
  updateMailandFrequency(token: $token, frequency: $frequency, email: $email) {
    ...RegularSubResponse
  }
}
    ${RegularSubResponseFragmentDoc}`;

/**
 * __useUpdateMailandFrequencyMutation__
 *
 * To run a mutation, you first call `useUpdateMailandFrequencyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMailandFrequencyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMailandFrequencyMutation, { data, loading, error }] = useUpdateMailandFrequencyMutation({
 *   variables: {
 *      token: // value for 'token'
 *      frequency: // value for 'frequency'
 *      email: // value for 'email'
 *   },
 * });
 */
function useUpdateMailandFrequencyMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](UpdateMailandFrequencyDocument, options);
}
const CreateQuoteDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation CreateQuote($input: QuoteInput!) {
  createQuote(input: $input) {
    ...RegularQuoteResponse
  }
}
    ${RegularQuoteResponseFragmentDoc}`;

/**
 * __useCreateQuoteMutation__
 *
 * To run a mutation, you first call `useCreateQuoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuoteMutation, { data, loading, error }] = useCreateQuoteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useCreateQuoteMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](CreateQuoteDocument, options);
}
const CreateSubDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation CreateSub($input: SubInput!) {
  createSub(input: $input) {
    ...RegularSubResponse
  }
}
    ${RegularSubResponseFragmentDoc}`;

/**
 * __useCreateSubMutation__
 *
 * To run a mutation, you first call `useCreateSubMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubMutation, { data, loading, error }] = useCreateSubMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useCreateSubMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](CreateSubDocument, options);
}
const CreateSubFromContactDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation CreateSubFromContact($token: String!, $emails: String!) {
  createSubFromContact(token: $token, emails: $emails) {
    ...RegularSubResponse
  }
}
    ${RegularSubResponseFragmentDoc}`;

/**
 * __useCreateSubFromContactMutation__
 *
 * To run a mutation, you first call `useCreateSubFromContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubFromContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubFromContactMutation, { data, loading, error }] = useCreateSubFromContactMutation({
 *   variables: {
 *      token: // value for 'token'
 *      emails: // value for 'emails'
 *   },
 * });
 */
function useCreateSubFromContactMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](CreateSubFromContactDocument, options);
}
const CreateSubFromInviteDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation CreateSubFromInvite($input: SubInviteInput!) {
  createSubFromInvite(input: $input) {
    ...RegularSubResponse
  }
}
    ${RegularSubResponseFragmentDoc}`;

/**
 * __useCreateSubFromInviteMutation__
 *
 * To run a mutation, you first call `useCreateSubFromInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubFromInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubFromInviteMutation, { data, loading, error }] = useCreateSubFromInviteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useCreateSubFromInviteMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](CreateSubFromInviteDocument, options);
}
const CreateSubscriptionDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation CreateSubscription($source: String!, $ccLast4: String!) {
  createSubscription(source: $source, ccLast4: $ccLast4) {
    ...ProfileUserResponse
  }
}
    ${ProfileUserResponseFragmentDoc}`;

/**
 * __useCreateSubscriptionMutation__
 *
 * To run a mutation, you first call `useCreateSubscriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubscriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubscriptionMutation, { data, loading, error }] = useCreateSubscriptionMutation({
 *   variables: {
 *      source: // value for 'source'
 *      ccLast4: // value for 'ccLast4'
 *   },
 * });
 */
function useCreateSubscriptionMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](CreateSubscriptionDocument, options);
}
const CreateSubsfrwdpageDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation CreateSubsfrwdpage($token: String!, $name: String!, $frequency: Float!, $email: String!) {
  createSubsfrwdpage(
    token: $token
    name: $name
    frequency: $frequency
    email: $email
  ) {
    ...RegularSubResponse
  }
}
    ${RegularSubResponseFragmentDoc}`;

/**
 * __useCreateSubsfrwdpageMutation__
 *
 * To run a mutation, you first call `useCreateSubsfrwdpageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubsfrwdpageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubsfrwdpageMutation, { data, loading, error }] = useCreateSubsfrwdpageMutation({
 *   variables: {
 *      token: // value for 'token'
 *      name: // value for 'name'
 *      frequency: // value for 'frequency'
 *      email: // value for 'email'
 *   },
 * });
 */
function useCreateSubsfrwdpageMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](CreateSubsfrwdpageDocument, options);
}
const DeleteQuoteDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation DeleteQuote($id: Int!) {
  deleteQuote(id: $id)
}
    `;

/**
 * __useDeleteQuoteMutation__
 *
 * To run a mutation, you first call `useDeleteQuoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteQuoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteQuoteMutation, { data, loading, error }] = useDeleteQuoteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useDeleteQuoteMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](DeleteQuoteDocument, options);
}
const DeleteSubDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation DeleteSub($id: Int!) {
  deleteSub(id: $id)
}
    `;

/**
 * __useDeleteSubMutation__
 *
 * To run a mutation, you first call `useDeleteSubMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSubMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSubMutation, { data, loading, error }] = useDeleteSubMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useDeleteSubMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](DeleteSubDocument, options);
}
const DeleteTemplateDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation DeleteTemplate($id: Int!) {
  deleteTemplate(id: $id)
}
    `;

/**
 * __useDeleteTemplateMutation__
 *
 * To run a mutation, you first call `useDeleteTemplateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTemplateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTemplateMutation, { data, loading, error }] = useDeleteTemplateMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useDeleteTemplateMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](DeleteTemplateDocument, options);
}
const ForgotPasswordDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
function useForgotPasswordMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](ForgotPasswordDocument, options);
}
const LoginDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
function useLoginMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](LoginDocument, options);
}
const LogoutDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation Logout {
  logout
}
    `;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
function useLogoutMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](LogoutDocument, options);
}
const ReSubribeUserExistingCcDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation ReSubribeUserExistingCC {
  reSubribeUserExistingCC {
    ...ProfileUserResponse
  }
}
    ${ProfileUserResponseFragmentDoc}`;

/**
 * __useReSubribeUserExistingCcMutation__
 *
 * To run a mutation, you first call `useReSubribeUserExistingCcMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReSubribeUserExistingCcMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reSubribeUserExistingCcMutation, { data, loading, error }] = useReSubribeUserExistingCcMutation({
 *   variables: {
 *   },
 * });
 */
function useReSubribeUserExistingCcMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](ReSubribeUserExistingCcDocument, options);
}
const ReSubribeUserNewCcDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation ReSubribeUserNewCC($source: String!, $ccLast4: String!) {
  reSubribeUserNewCC(source: $source, ccLast4: $ccLast4) {
    ...ProfileUserResponse
  }
}
    ${ProfileUserResponseFragmentDoc}`;

/**
 * __useReSubribeUserNewCcMutation__
 *
 * To run a mutation, you first call `useReSubribeUserNewCcMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReSubribeUserNewCcMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reSubribeUserNewCcMutation, { data, loading, error }] = useReSubribeUserNewCcMutation({
 *   variables: {
 *      source: // value for 'source'
 *      ccLast4: // value for 'ccLast4'
 *   },
 * });
 */
function useReSubribeUserNewCcMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](ReSubribeUserNewCcDocument, options);
}
const RegisterDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
function useRegisterMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](RegisterDocument, options);
}
const CreateTemplatesDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation createTemplates($input: templateInput!) {
  createTemplates(input: $input) {
    ...RegularTemplateResponse
  }
}
    ${RegularTemplateResponseFragmentDoc}`;

/**
 * __useCreateTemplatesMutation__
 *
 * To run a mutation, you first call `useCreateTemplatesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTemplatesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTemplatesMutation, { data, loading, error }] = useCreateTemplatesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useCreateTemplatesMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](CreateTemplatesDocument, options);
}
const UnsubscribeSubDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation UnsubscribeSub($token: String!) {
  unsubscribeSub(token: $token) {
    ...RegularSubResponse
  }
}
    ${RegularSubResponseFragmentDoc}`;

/**
 * __useUnsubscribeSubMutation__
 *
 * To run a mutation, you first call `useUnsubscribeSubMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnsubscribeSubMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unsubscribeSubMutation, { data, loading, error }] = useUnsubscribeSubMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
function useUnsubscribeSubMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](UnsubscribeSubDocument, options);
}
const UpdateQuoteDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation UpdateQuote($id: Int!, $name: String!, $catagory: String!) {
  updateQuote(id: $id, name: $name, catagory: $catagory) {
    ...RegularQuoteResponse
  }
}
    ${RegularQuoteResponseFragmentDoc}`;

/**
 * __useUpdateQuoteMutation__
 *
 * To run a mutation, you first call `useUpdateQuoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuoteMutation, { data, loading, error }] = useUpdateQuoteMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      catagory: // value for 'catagory'
 *   },
 * });
 */
function useUpdateQuoteMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](UpdateQuoteDocument, options);
}
const UpdateSubDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation UpdateSub($id: Int!, $name: String!, $email: String!, $subscribed: Boolean!) {
  updateSub(id: $id, name: $name, email: $email, subscribed: $subscribed) {
    ...RegularSubResponse
  }
}
    ${RegularSubResponseFragmentDoc}`;

/**
 * __useUpdateSubMutation__
 *
 * To run a mutation, you first call `useUpdateSubMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSubMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSubMutation, { data, loading, error }] = useUpdateSubMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      subscribed: // value for 'subscribed'
 *   },
 * });
 */
function useUpdateSubMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](UpdateSubDocument, options);
}
const UpdateUserDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation UpdateUser($input: UserInput!) {
  updateUser(input: $input) {
    ...ProfileUserResponse
  }
}
    ${ProfileUserResponseFragmentDoc}`;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useUpdateUserMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](UpdateUserDocument, options);
}
const UpdateUserAuthDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation UpdateUserAuth($input: UserAuthInput!) {
  updateAuth(input: $input) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

/**
 * __useUpdateUserAuthMutation__
 *
 * To run a mutation, you first call `useUpdateUserAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserAuthMutation, { data, loading, error }] = useUpdateUserAuthMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useUpdateUserAuthMutation(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](UpdateUserAuthDocument, options);
}
const AllsubsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query Allsubs {
  Allsubs {
    ...AllsubSnippet
  }
}
    ${AllsubSnippetFragmentDoc}`;
/**
 * __useAllsubsQuery__
 *
 * To run a query within a React component, call `useAllsubsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllsubsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllsubsQuery({
 *   variables: {
 *   },
 * });
 */

function useAllsubsQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](AllsubsDocument, options);
}
function useAllsubsLazyQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](AllsubsDocument, options);
}
const AllsubsIdDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query AllsubsId($Id: Int!) {
  AllsubsId(Id: $Id) {
    ...AllsubSnippet
  }
}
    ${AllsubSnippetFragmentDoc}`;
/**
 * __useAllsubsIdQuery__
 *
 * To run a query within a React component, call `useAllsubsIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllsubsIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllsubsIdQuery({
 *   variables: {
 *      Id: // value for 'Id'
 *   },
 * });
 */

function useAllsubsIdQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](AllsubsIdDocument, options);
}
function useAllsubsIdLazyQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](AllsubsIdDocument, options);
}
const MailActivityByIdDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query mailActivityById($id: Int!) {
  mailActivityById(id: $id) {
    ...ActivitySnippet
  }
}
    ${ActivitySnippetFragmentDoc}`;
/**
 * __useMailActivityByIdQuery__
 *
 * To run a query within a React component, call `useMailActivityByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useMailActivityByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMailActivityByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */

function useMailActivityByIdQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](MailActivityByIdDocument, options);
}
function useMailActivityByIdLazyQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](MailActivityByIdDocument, options);
}
const PaginatedActivityDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query paginatedActivity($limit: Int!, $cursor: String) {
  PaginatedmailActivity(limit: $limit, cursor: $cursor) {
    hasMore
    PaginatedmailActivity {
      ...PaginatedActivitySnippet
    }
  }
}
    ${PaginatedActivitySnippetFragmentDoc}`;
/**
 * __usePaginatedActivityQuery__
 *
 * To run a query within a React component, call `usePaginatedActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaginatedActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaginatedActivityQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */

function usePaginatedActivityQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](PaginatedActivityDocument, options);
}
function usePaginatedActivityLazyQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](PaginatedActivityDocument, options);
}
const MailActivitybyIdDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query mailActivitybyId($limit: Int!, $cursor: String, $id: Int!) {
  PaginatedmailActivitybyId(limit: $limit, cursor: $cursor, id: $id) {
    hasMore
    PaginatedmailActivity {
      ...PaginatedActivitySnippet
    }
  }
}
    ${PaginatedActivitySnippetFragmentDoc}`;
/**
 * __useMailActivitybyIdQuery__
 *
 * To run a query within a React component, call `useMailActivitybyIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useMailActivitybyIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMailActivitybyIdQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *      id: // value for 'id'
 *   },
 * });
 */

function useMailActivitybyIdQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](MailActivitybyIdDocument, options);
}
function useMailActivitybyIdLazyQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](MailActivitybyIdDocument, options);
}
const QuotesDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query Quotes($limit: Int!, $cursor: String) {
  quotes(limit: $limit, cursor: $cursor) {
    hasMore
    quotes {
      ...QuoteSnippet
    }
  }
}
    ${QuoteSnippetFragmentDoc}`;
/**
 * __useQuotesQuery__
 *
 * To run a query within a React component, call `useQuotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuotesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */

function useQuotesQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](QuotesDocument, options);
}
function useQuotesLazyQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](QuotesDocument, options);
}
const SubsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query Subs($limit: Int!, $cursor: String) {
  subs(limit: $limit, cursor: $cursor) {
    hasMore
    subs {
      ...SubSnippet
    }
  }
}
    ${SubSnippetFragmentDoc}`;
/**
 * __useSubsQuery__
 *
 * To run a query within a React component, call `useSubsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */

function useSubsQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](SubsDocument, options);
}
function useSubsLazyQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](SubsDocument, options);
}
const AlluserDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query alluser {
  alluser {
    ...alluserSnippet
  }
}
    ${AlluserSnippetFragmentDoc}`;
/**
 * __useAlluserQuery__
 *
 * To run a query within a React component, call `useAlluserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAlluserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAlluserQuery({
 *   variables: {
 *   },
 * });
 */

function useAlluserQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](AlluserDocument, options);
}
function useAlluserLazyQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](AlluserDocument, options);
}
const MailActivityDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query mailActivity {
  mailActivity {
    ...ActivitySnippet
  }
}
    ${ActivitySnippetFragmentDoc}`;
/**
 * __useMailActivityQuery__
 *
 * To run a query within a React component, call `useMailActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useMailActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMailActivityQuery({
 *   variables: {
 *   },
 * });
 */

function useMailActivityQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](MailActivityDocument, options);
}
function useMailActivityLazyQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](MailActivityDocument, options);
}
const MeDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;
/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */

function useMeQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](MeDocument, options);
}
function useMeLazyQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](MeDocument, options);
}
const ProfileDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query Profile {
  me {
    ...ProfileUser
  }
}
    ${ProfileUserFragmentDoc}`;
/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *   },
 * });
 */

function useProfileQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](ProfileDocument, options);
}
function useProfileLazyQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](ProfileDocument, options);
}
const SubbytokenDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query subbytoken($token: String!) {
  subbytoken(token: $token) {
    ...SubSnippet
  }
}
    ${SubSnippetFragmentDoc}`;
/**
 * __useSubbytokenQuery__
 *
 * To run a query within a React component, call `useSubbytokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubbytokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubbytokenQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */

function useSubbytokenQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](SubbytokenDocument, options);
}
function useSubbytokenLazyQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](SubbytokenDocument, options);
}
const GetAlltemplatesDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query GetAlltemplates($limit: Int!, $cursor: String) {
  getAlltemplates(limit: $limit, cursor: $cursor) {
    hasMore
    templates {
      ...TemplatesSnippet
    }
  }
}
    ${TemplatesSnippetFragmentDoc}`;
/**
 * __useGetAlltemplatesQuery__
 *
 * To run a query within a React component, call `useGetAlltemplatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAlltemplatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAlltemplatesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */

function useGetAlltemplatesQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](GetAlltemplatesDocument, options);
}
function useGetAlltemplatesLazyQuery(baseOptions) {
  const options = _objectSpread(_objectSpread({}, defaultOptions), baseOptions);

  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](GetAlltemplatesDocument, options);
}

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.tsx");
/* harmony import */ var _utils_useIsAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/useIsAuth */ "./src/utils/useIsAuth.ts");
/* harmony import */ var _utils_withApollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/withApollo */ "./src/utils/withApollo.ts");
/* harmony import */ var _components_Mail_Activity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Mail_Activity */ "./src/components/Mail_Activity/index.tsx");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _utils_isServer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/isServer */ "./src/utils/isServer.ts");
/* harmony import */ var _components_UserMailActivity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UserMailActivity */ "./src/components/UserMailActivity/index.tsx");
var _jsxFileName = "D:\\Development\\QA\\OldQA\\web\\src\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Index = () => {
  var _data$me2;

  Object(_utils_useIsAuth__WEBPACK_IMPORTED_MODULE_2__["useIsAuth"])();
  const {
    0: userId,
    1: setUserId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    data,
    loading
  } = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_5__["useMeQuery"])({
    skip: Object(_utils_isServer__WEBPACK_IMPORTED_MODULE_6__["isServer"])()
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (data) {
      var _data$me;

      if ((data === null || data === void 0 ? void 0 : (_data$me = data.me) === null || _data$me === void 0 ? void 0 : _data$me.role) !== "admin") {
        setUserId(data.me.id);
      }
    }
  }, [data]);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, loading ? "" : (data === null || data === void 0 ? void 0 : (_data$me2 = data.me) === null || _data$me2 === void 0 ? void 0 : _data$me2.role) === "admin" ? __jsx(_components_Mail_Activity__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }) : userId !== 0 ? __jsx(_components_UserMailActivity__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: userId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }) : "");
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_withApollo__WEBPACK_IMPORTED_MODULE_3__["withApollo"])({
  ssr: false
})(Index));

/***/ }),

/***/ "./src/utils/createWithApollo.js":
/*!***************************************!*\
  !*** ./src/utils/createWithApollo.js ***!
  \***************************************/
/*! exports provided: initOnContext, createWithApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initOnContext", function() { return initOnContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWithApollo", function() { return createWithApollo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Development\\QA\\OldQA\\web\\src\\utils\\createWithApollo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




 // On the client, we store the Apollo Client in the following variable.
// This prevents the client from reinitializing between page transitions.

let globalApolloClient = null;
/**
 * Installs the Apollo Client on NextPageContext
 * or NextAppContext. Useful if you want to use apolloClient
 * inside getStaticProps, getStaticPaths or getServerSideProps
 * @param {NextPageContext | NextAppContext} ctx
 */

const initOnContext = (ac, ctx) => {
  const inAppContext = Boolean(ctx.ctx); // We consider installing `withApollo({ ssr: true })` on global App level
  // as antipattern since it disables project wide Automatic Static Optimization.

  if (true) {
    if (inAppContext) {
      console.warn("Warning: You have opted-out of Automatic Static Optimization due to `withApollo` in `pages/_app`.\n" + "Read more: https://err.sh/next.js/opt-out-auto-static-optimization\n");
    }
  } // Initialize ApolloClient if not already done


  const apolloClient = ctx.apolloClient || initApolloClient(ac, ctx.apolloState || {}, inAppContext ? ctx.ctx : ctx); // We send the Apollo Client as a prop to the component to avoid calling initApollo() twice in the server.
  // Otherwise, the component would have to call initApollo() again but this
  // time without the context. Once that happens, the following code will make sure we send
  // the prop as `null` to the browser.

  apolloClient.toJSON = () => null; // Add apolloClient to NextPageContext & NextAppContext.
  // This allows us to consume the apolloClient inside our
  // custom `getInitialProps({ apolloClient })`.


  ctx.apolloClient = apolloClient;

  if (inAppContext) {
    ctx.ctx.apolloClient = apolloClient;
  }

  return ctx;
};
/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {NormalizedCacheObject} initialState
 * @param  {NextPageContext} ctx
 */

const initApolloClient = (apolloClient, initialState, ctx) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (true) {
    return createApolloClient(apolloClient(ctx), initialState, ctx);
  } // Reuse client on the client-side


  if (!globalApolloClient) {
    globalApolloClient = createApolloClient(apolloClient(ctx), initialState, ctx);
  }

  return globalApolloClient;
};
/**
 * Creates a withApollo HOC
 * that provides the apolloContext
 * to a next.js Page or AppTree.
 * @param  {Object} withApolloOptions
 * @param  {Boolean} [withApolloOptions.ssr=false]
 * @returns {(PageComponent: ReactNode) => ReactNode}
 */


const createWithApollo = ac => {
  return ({
    ssr = false
  } = {}) => PageComponent => {
    const WithApollo = (_ref) => {
      let {
        apolloClient,
        apolloState
      } = _ref,
          pageProps = _objectWithoutProperties(_ref, ["apolloClient", "apolloState"]);

      let client;

      if (apolloClient) {
        // Happens on: getDataFromTree & next.js ssr
        client = apolloClient;
      } else {
        // Happens on: next.js csr
        client = initApolloClient(ac, apolloState, undefined);
      }

      return __jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"], {
        client: client,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 9
        }
      }, __jsx(PageComponent, _extends({}, pageProps, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }
      })));
    }; // Set the correct displayName in development


    if (true) {
      const displayName = PageComponent.displayName || PageComponent.name || "Component";
      WithApollo.displayName = `withApollo(${displayName})`;
    }

    if (ssr || PageComponent.getInitialProps) {
      WithApollo.getInitialProps = async ctx => {
        const inAppContext = Boolean(ctx.ctx);
        const {
          apolloClient
        } = initOnContext(ac, ctx); // Run wrapped getInitialProps methods

        let pageProps = {};

        if (PageComponent.getInitialProps) {
          pageProps = await PageComponent.getInitialProps(ctx);
        } else if (inAppContext) {
          pageProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(ctx);
        } // Only on the server:


        if (true) {
          const {
            AppTree
          } = ctx; // When redirecting, the response is finished.
          // No point in continuing to render

          if (ctx.res && ctx.res.finished) {
            return pageProps;
          } // Only if dataFromTree is enabled


          if (ssr && AppTree) {
            try {
              // Import `@apollo/react-ssr` dynamically.
              // We don't want to have this in our client bundle.
              const {
                getDataFromTree
              } = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! @apollo/client/react/ssr */ "@apollo/client/react/ssr", 7)); // Since AppComponents and PageComponents have different context types
              // we need to modify their props a little.

              let props;

              if (inAppContext) {
                props = _objectSpread(_objectSpread({}, pageProps), {}, {
                  apolloClient
                });
              } else {
                props = {
                  pageProps: _objectSpread(_objectSpread({}, pageProps), {}, {
                    apolloClient
                  })
                };
              } // Take the Next.js AppTree, determine which queries are needed to render,
              // and fetch them. This method can be pretty slow since it renders
              // your entire AppTree once for every query. Check out apollo fragments
              // if you want to reduce the number of rerenders.
              // https://www.apollographql.com/docs/react/data/fragments/


              await getDataFromTree(__jsx(AppTree, _extends({}, props, {
                __self: undefined,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 37
                }
              })));
            } catch (error) {
              // Prevent Apollo Client GraphQL errors from crashing SSR.
              // Handle them in components via the data.error prop:
              // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
              console.error("Error while running `getDataFromTree`", error);
            } // getDataFromTree does not call componentWillUnmount
            // head side effect therefore need to be cleared manually


            next_head__WEBPACK_IMPORTED_MODULE_2___default.a.rewind();
          }
        }

        return _objectSpread(_objectSpread({}, pageProps), {}, {
          // Extract query data from the Apollo store
          apolloState: apolloClient.cache.extract(),
          // Provide the client for ssr. As soon as this payload
          // gets JSON.stringified it will remove itself.
          apolloClient: ctx.apolloClient
        });
      };
    }

    return WithApollo;
  };
};

function createApolloClient(apolloClient, initialState, ctx) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  apolloClient.ssrMode = Boolean(ctx);
  apolloClient.cache.restore(initialState);
  return apolloClient;
}

/***/ }),

/***/ "./src/utils/isServer.ts":
/*!*******************************!*\
  !*** ./src/utils/isServer.ts ***!
  \*******************************/
/*! exports provided: isServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return isServer; });
const isServer = () => true;

/***/ }),

/***/ "./src/utils/useIsAuth.ts":
/*!********************************!*\
  !*** ./src/utils/useIsAuth.ts ***!
  \********************************/
/*! exports provided: useIsAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsAuth", function() { return useIsAuth; });
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const useIsAuth = () => {
  const {
    data,
    loading
  } = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_0__["useMeQuery"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (!loading && !(data !== null && data !== void 0 && data.me)) {
      router.replace("/login?next=" + router.pathname);
    }
  }, [loading, data, router]);
};

/***/ }),

/***/ "./src/utils/withApollo.ts":
/*!*********************************!*\
  !*** ./src/utils/withApollo.ts ***!
  \*********************************/
/*! exports provided: withApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withApollo", function() { return withApollo; });
/* harmony import */ var _createWithApollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createWithApollo */ "./src/utils/createWithApollo.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const createClient = ctx => {
  var _ctx$req;

  return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
    uri: "http://localhost:4000/graphql",
    credentials: 'include',
    headers: {
      cookie: (true ? ctx === null || ctx === void 0 ? void 0 : (_ctx$req = ctx.req) === null || _ctx$req === void 0 ? void 0 : _ctx$req.headers.cookie : undefined) || ''
    },
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]({
      typePolicies: {
        Query: {
          fields: {
            subs: {
              keyArgs: [],

              merge(existing, incoming) {
                return _objectSpread(_objectSpread({}, incoming), {}, {
                  subs: [...((existing === null || existing === void 0 ? void 0 : existing.subs) || []), ...incoming.subs]
                });
              }

            },
            quotes: {
              keyArgs: [],

              merge(existing, incoming) {
                return _objectSpread(_objectSpread({}, incoming), {}, {
                  quotes: [...((existing === null || existing === void 0 ? void 0 : existing.quotes) || []), ...incoming.quotes]
                });
              }

            }
          }
        }
      }
    })
  });
};

const withApollo = Object(_createWithApollo__WEBPACK_IMPORTED_MODULE_0__["createWithApollo"])(createClient);

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/react/ssr":
/*!*******************************************!*\
  !*** external "@apollo/client/react/ssr" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client/react/ssr");

/***/ }),

/***/ "@chakra-ui/icons":
/*!***********************************!*\
  !*** external "@chakra-ui/icons" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/im":
/*!*********************************!*\
  !*** external "react-icons/im" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/im");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FjdGl2ZUxpbmsudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RyYXdlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWlsX0FjdGl2aXR5L0FjdGl2aXR5Q2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbF9BY3Rpdml0eS9BY3Rpdml0eUNoYXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWlsX0FjdGl2aXR5L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlL1Byb2ZpbGVBdmF0YXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NpZGVCYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VzZXJNYWlsQWN0aXZpdHkvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1dyYXBwZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9nZW5lcmF0ZWQvZ3JhcGhxbC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY3JlYXRlV2l0aEFwb2xsby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaXNTZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3VzZUlzQXV0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvd2l0aEFwb2xsby50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50L3JlYWN0L3NzclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjaGFrcmEtdWkvaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ltXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvbWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlY2hhcnRzXCIiXSwibmFtZXMiOlsibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwiY29uc29sZSIsInJvdXRlciIsImVyciIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJ2YWx1ZSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsInJlc29sdmVBcyIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImxvY2FsZSIsImxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwic3RhdGUiLCJvcHRpb25zIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImNoYW5nZSIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiYWRkTG9jYWxlIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsImFwcENvbXAiLCJlcnJvciIsImNoYW5nZVN0YXRlIiwiX19OIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsIlByb21pc2UiLCJmZXRjaENvbXBvbmVudCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJkYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJjb21wb25lbnREaWRDYXRjaCIsInJlbmRlciIsImNyZWF0ZVVybCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwid2FyblVybCIsInB1c2hUbyIsInB1c2hSb3V0ZSIsInB1c2hVcmwiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwibXRTdGx5ZSIsIm1kIiwibGciLCJsaW5rRGlzcGxheSIsIkFjdGl2ZUxpbmsiLCJ1c2VSb3V0ZXIiLCJjb2xvciIsIkRyYXdlckJhciIsImxvYWRpbmciLCJ1c2VNZVF1ZXJ5Iiwic2tpcCIsImlzU2VydmVyIiwiaXNPcGVuIiwib25PcGVuIiwib25DbG9zZSIsInVzZURpc2Nsb3N1cmUiLCJxdW90ZSIsIm1haWxBY3Rpdml0eSIsIm1lc3NhZ2VzIiwidXNlcm1haWxBY3Rpdml0eSIsInVzZXJtZXNzYWdlcyIsInRlbXBhbHRlIiwibWUiLCJyb2xlIiwiTWRFbWFpbCIsIkltUXVvdGVzUmlnaHQiLCJNZEV2ZW50Tm90ZSIsIkljb25CdXR0b24iLCJNZEhvbWUiLCJJbVVzZXJzIiwiZW1haWwiLCJMYXlvdXQiLCJ2YXJpYW50IiwiQWN0aXZpdHlDYXJkIiwiRGVsaXZlcmVkIiwiT3BlbmVkIiwiQ2xpY2tlZCIsIkJvdW5jZXMiLCJTcGFtUmVwb3J0cyIsIkFjdGl2ZUNvdW50IiwiTm9uQWN0aXZlQ291bnQiLCJ3aXRoQXBvbGxvIiwic3NyIiwiQWN0aXZpdHlDaGFydCIsImNoYXJ0RGF0YSIsImNvdW50IiwidG9wIiwicmlnaHQiLCJsZWZ0IiwiYm90dG9tIiwiRU1haWxBY3Rpdml0eSIsInVzZUlzQXV0aCIsInNldERlbGl2ZXJlZCIsInVzZVN0YXRlIiwic2V0T3BlbmVkIiwic2V0Q2xpY2tlZCIsInNldEJvdW5jZXMiLCJzZXRTcGFtUmVwb3J0cyIsImZldGNoTW9yZSIsInZhcmlhYmxlcyIsInVzZU1haWxBY3Rpdml0eVF1ZXJ5Iiwic3Vic0NvdW50IiwidXNlQWxsc3Vic1F1ZXJ5IiwidXNlRWZmZWN0IiwibWFwIiwibWFpbCIsIm9wZW5fY291bnQiLCJjbGlja3NfY291bnQiLCJTdGF0dXMiLCJsZW5ndGgiLCJyZWR1Y2UiLCJhIiwiYiIsImxvZyIsIkFsbHN1YnMiLCJQcm9maWxlQXZhdGFyIiwibG9nb3V0IiwibG9nb3V0RmV0Y2hpbmciLCJ1c2VMb2dvdXRNdXRhdGlvbiIsImFwb2xsb0NsaWVudCIsInVzZUFwb2xsb0NsaWVudCIsInJlc2V0U3RvcmUiLCJTaWRlQmFyIiwiVXNlcnNNYWlsc0FjdGl2aXRpZXMiLCJpZCIsInVzZU1haWxBY3Rpdml0eUJ5SWRRdWVyeSIsIm5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZSIsInVzZUFsbHN1YnNJZFF1ZXJ5IiwiSWQiLCJtYWlsQWN0aXZpdHlCeUlkIiwiQWxsc3Vic0lkIiwiV3JhcHBlciIsImRlZmF1bHRPcHRpb25zIiwiUmVndWxhck1haWxSZXNwb25lc0ZyYWdtZW50RG9jIiwiZ3FsIiwiQWN0aXZpdHlTbmlwcGV0RnJhZ21lbnREb2MiLCJBbGxzdWJTbmlwcGV0RnJhZ21lbnREb2MiLCJQYWdpbmF0ZWRBY3Rpdml0eVNuaXBwZXRGcmFnbWVudERvYyIsIlJlZ3VsYXJFcnJvckZyYWdtZW50RG9jIiwiUHJvZmlsZVVzZXJGcmFnbWVudERvYyIsIlByb2ZpbGVVc2VyUmVzcG9uc2VGcmFnbWVudERvYyIsIlF1b3RlU25pcHBldEZyYWdtZW50RG9jIiwiUmVndWxhclRlbXBsYXRlc0ZyYWdtZW50RG9jIiwiUmVndWxhclRlbXBsYXRlUmVzcG9uc2VGcmFnbWVudERvYyIsIlJlZ3VsYXJRdW90ZUZyYWdtZW50RG9jIiwiUmVndWxhclF1b3RlUmVzcG9uc2VGcmFnbWVudERvYyIsIlJlZ3VsYXJTdWJGcmFnbWVudERvYyIsIlJlZ3VsYXJTdWJSZXNwb25zZUZyYWdtZW50RG9jIiwiUmVndWxhclVzZXJGcmFnbWVudERvYyIsIlJlZ3VsYXJVc2VyUmVzcG9uc2VGcmFnbWVudERvYyIsIlN1YlNuaXBwZXRGcmFnbWVudERvYyIsIlRlbXBsYXRlc1NuaXBwZXRGcmFnbWVudERvYyIsIkFsbHVzZXJTbmlwcGV0RnJhZ21lbnREb2MiLCJVcGRhdGVUZW1wbGF0ZXNEb2N1bWVudCIsInVzZVVwZGF0ZVRlbXBsYXRlc011dGF0aW9uIiwiYmFzZU9wdGlvbnMiLCJBcG9sbG8iLCJBY2NlcHRJbnZpdGVEb2N1bWVudCIsInVzZUFjY2VwdEludml0ZU11dGF0aW9uIiwiQ2FuY2VsU3Vic2NyaXB0aW9uRG9jdW1lbnQiLCJ1c2VDYW5jZWxTdWJzY3JpcHRpb25NdXRhdGlvbiIsIkNoYW5nZUNyZWRpdENhcmREb2N1bWVudCIsInVzZUNoYW5nZUNyZWRpdENhcmRNdXRhdGlvbiIsIkNoYW5nZVBhc3N3b3JkRG9jdW1lbnQiLCJ1c2VDaGFuZ2VQYXNzd29yZE11dGF0aW9uIiwiVXBkYXRlTWFpbGFuZEZyZXF1ZW5jeURvY3VtZW50IiwidXNlVXBkYXRlTWFpbGFuZEZyZXF1ZW5jeU11dGF0aW9uIiwiQ3JlYXRlUXVvdGVEb2N1bWVudCIsInVzZUNyZWF0ZVF1b3RlTXV0YXRpb24iLCJDcmVhdGVTdWJEb2N1bWVudCIsInVzZUNyZWF0ZVN1Yk11dGF0aW9uIiwiQ3JlYXRlU3ViRnJvbUNvbnRhY3REb2N1bWVudCIsInVzZUNyZWF0ZVN1YkZyb21Db250YWN0TXV0YXRpb24iLCJDcmVhdGVTdWJGcm9tSW52aXRlRG9jdW1lbnQiLCJ1c2VDcmVhdGVTdWJGcm9tSW52aXRlTXV0YXRpb24iLCJDcmVhdGVTdWJzY3JpcHRpb25Eb2N1bWVudCIsInVzZUNyZWF0ZVN1YnNjcmlwdGlvbk11dGF0aW9uIiwiQ3JlYXRlU3Vic2Zyd2RwYWdlRG9jdW1lbnQiLCJ1c2VDcmVhdGVTdWJzZnJ3ZHBhZ2VNdXRhdGlvbiIsIkRlbGV0ZVF1b3RlRG9jdW1lbnQiLCJ1c2VEZWxldGVRdW90ZU11dGF0aW9uIiwiRGVsZXRlU3ViRG9jdW1lbnQiLCJ1c2VEZWxldGVTdWJNdXRhdGlvbiIsIkRlbGV0ZVRlbXBsYXRlRG9jdW1lbnQiLCJ1c2VEZWxldGVUZW1wbGF0ZU11dGF0aW9uIiwiRm9yZ290UGFzc3dvcmREb2N1bWVudCIsInVzZUZvcmdvdFBhc3N3b3JkTXV0YXRpb24iLCJMb2dpbkRvY3VtZW50IiwidXNlTG9naW5NdXRhdGlvbiIsIkxvZ291dERvY3VtZW50IiwiUmVTdWJyaWJlVXNlckV4aXN0aW5nQ2NEb2N1bWVudCIsInVzZVJlU3VicmliZVVzZXJFeGlzdGluZ0NjTXV0YXRpb24iLCJSZVN1YnJpYmVVc2VyTmV3Q2NEb2N1bWVudCIsInVzZVJlU3VicmliZVVzZXJOZXdDY011dGF0aW9uIiwiUmVnaXN0ZXJEb2N1bWVudCIsInVzZVJlZ2lzdGVyTXV0YXRpb24iLCJDcmVhdGVUZW1wbGF0ZXNEb2N1bWVudCIsInVzZUNyZWF0ZVRlbXBsYXRlc011dGF0aW9uIiwiVW5zdWJzY3JpYmVTdWJEb2N1bWVudCIsInVzZVVuc3Vic2NyaWJlU3ViTXV0YXRpb24iLCJVcGRhdGVRdW90ZURvY3VtZW50IiwidXNlVXBkYXRlUXVvdGVNdXRhdGlvbiIsIlVwZGF0ZVN1YkRvY3VtZW50IiwidXNlVXBkYXRlU3ViTXV0YXRpb24iLCJVcGRhdGVVc2VyRG9jdW1lbnQiLCJ1c2VVcGRhdGVVc2VyTXV0YXRpb24iLCJVcGRhdGVVc2VyQXV0aERvY3VtZW50IiwidXNlVXBkYXRlVXNlckF1dGhNdXRhdGlvbiIsIkFsbHN1YnNEb2N1bWVudCIsInVzZUFsbHN1YnNMYXp5UXVlcnkiLCJBbGxzdWJzSWREb2N1bWVudCIsInVzZUFsbHN1YnNJZExhenlRdWVyeSIsIk1haWxBY3Rpdml0eUJ5SWREb2N1bWVudCIsInVzZU1haWxBY3Rpdml0eUJ5SWRMYXp5UXVlcnkiLCJQYWdpbmF0ZWRBY3Rpdml0eURvY3VtZW50IiwidXNlUGFnaW5hdGVkQWN0aXZpdHlRdWVyeSIsInVzZVBhZ2luYXRlZEFjdGl2aXR5TGF6eVF1ZXJ5IiwiTWFpbEFjdGl2aXR5YnlJZERvY3VtZW50IiwidXNlTWFpbEFjdGl2aXR5YnlJZFF1ZXJ5IiwidXNlTWFpbEFjdGl2aXR5YnlJZExhenlRdWVyeSIsIlF1b3Rlc0RvY3VtZW50IiwidXNlUXVvdGVzUXVlcnkiLCJ1c2VRdW90ZXNMYXp5UXVlcnkiLCJTdWJzRG9jdW1lbnQiLCJ1c2VTdWJzUXVlcnkiLCJ1c2VTdWJzTGF6eVF1ZXJ5IiwiQWxsdXNlckRvY3VtZW50IiwidXNlQWxsdXNlclF1ZXJ5IiwidXNlQWxsdXNlckxhenlRdWVyeSIsIk1haWxBY3Rpdml0eURvY3VtZW50IiwidXNlTWFpbEFjdGl2aXR5TGF6eVF1ZXJ5IiwiTWVEb2N1bWVudCIsInVzZU1lTGF6eVF1ZXJ5IiwiUHJvZmlsZURvY3VtZW50IiwidXNlUHJvZmlsZVF1ZXJ5IiwidXNlUHJvZmlsZUxhenlRdWVyeSIsIlN1YmJ5dG9rZW5Eb2N1bWVudCIsInVzZVN1YmJ5dG9rZW5RdWVyeSIsInVzZVN1YmJ5dG9rZW5MYXp5UXVlcnkiLCJHZXRBbGx0ZW1wbGF0ZXNEb2N1bWVudCIsInVzZUdldEFsbHRlbXBsYXRlc1F1ZXJ5IiwidXNlR2V0QWxsdGVtcGxhdGVzTGF6eVF1ZXJ5IiwiSW5kZXgiLCJ1c2VySWQiLCJzZXRVc2VySWQiLCJnbG9iYWxBcG9sbG9DbGllbnQiLCJpbml0T25Db250ZXh0IiwiYWMiLCJpbkFwcENvbnRleHQiLCJCb29sZWFuIiwid2FybiIsImluaXRBcG9sbG9DbGllbnQiLCJhcG9sbG9TdGF0ZSIsInRvSlNPTiIsImluaXRpYWxTdGF0ZSIsImNyZWF0ZUFwb2xsb0NsaWVudCIsImNyZWF0ZVdpdGhBcG9sbG8iLCJQYWdlQ29tcG9uZW50IiwiV2l0aEFwb2xsbyIsImNsaWVudCIsInVuZGVmaW5lZCIsImRpc3BsYXlOYW1lIiwiZmluaXNoZWQiLCJnZXREYXRhRnJvbVRyZWUiLCJIZWFkIiwicmV3aW5kIiwiY2FjaGUiLCJleHRyYWN0Iiwic3NyTW9kZSIsInJlc3RvcmUiLCJjcmVhdGVDbGllbnQiLCJBcG9sbG9DbGllbnQiLCJ1cmkiLCJoZWFkZXJzIiwiY29va2llIiwicmVxIiwiSW5NZW1vcnlDYWNoZSIsInR5cGVQb2xpY2llcyIsIlF1ZXJ5IiwiZmllbGRzIiwic3VicyIsImtleUFyZ3MiLCJtZXJnZSIsImV4aXN0aW5nIiwiaW5jb21pbmciLCJxdW90ZXMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Es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bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBhZ2VzL2luZGV4XCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShhcywgcm91dGVyICYmIHJvdXRlci5sb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKFxuICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbiAgTmV4dFdlYlZpdGFsc01ldHJpYyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHsgTmV4dFdlYlZpdGFsc01ldHJpYyB9XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHQgPSBBcHBDb250ZXh0VHlwZTxSb3V0ZXI+XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzPFAgPSB7fT4gPSBBcHBQcm9wc1R5cGU8Um91dGVyLCBQPlxuXG4vKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovXG5hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe1xuICBDb21wb25lbnQsXG4gIGN0eCxcbn06IEFwcENvbnRleHQpOiBQcm9taXNlPEFwcEluaXRpYWxQcm9wcz4ge1xuICBjb25zdCBwYWdlUHJvcHMgPSBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KVxuICByZXR1cm4geyBwYWdlUHJvcHMgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHA8UCA9IHt9LCBDUCA9IHt9LCBTID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBQICYgQXBwUHJvcHM8Q1A+LFxuICBTXG4+IHtcbiAgc3RhdGljIG9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuXG4gIC8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gIC8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4gIC8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBfZXJyb3JJbmZvOiBFcnJvckluZm8pOiB2b2lkIHtcbiAgICB0aHJvdyBlcnJvclxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcm91dGVyLCBDb21wb25lbnQsIHBhZ2VQcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gdGhpc1xuICAgICAgLnByb3BzIGFzIEFwcFByb3BzPENQPlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAge1xuICAgICAgICAgIC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuICAgICAgICAgIC8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4gICAgICAgICAgLi4uKCEoX19OX1NTRyB8fCBfX05fU1NQKSA/IHsgdXJsOiBjcmVhdGVVcmwocm91dGVyKSB9IDoge30pXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmxldCB3YXJuQ29udGFpbmVyOiAoKSA9PiB2b2lkXG5sZXQgd2FyblVybDogKCkgPT4gdm9pZFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuQ29udGFpbmVyID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBXYXJuaW5nOiB0aGUgXFxgQ29udGFpbmVyXFxgIGluIFxcYF9hcHBcXGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG5cbiAgd2FyblVybCA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYFdhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy91cmwtZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG59XG5cbi8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5leHBvcnQgZnVuY3Rpb24gQ29udGFpbmVyKHA6IGFueSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FybkNvbnRhaW5lcigpXG4gIHJldHVybiBwLmNoaWxkcmVuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyOiBSb3V0ZXIpIHtcbiAgLy8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbiAgY29uc3QgeyBwYXRobmFtZSwgYXNQYXRoLCBxdWVyeSB9ID0gcm91dGVyXG4gIHJldHVybiB7XG4gICAgZ2V0IHF1ZXJ5KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHF1ZXJ5XG4gICAgfSxcbiAgICBnZXQgcGF0aG5hbWUoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcGF0aG5hbWVcbiAgICB9LFxuICAgIGdldCBhc1BhdGgoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gYXNQYXRoXG4gICAgfSxcbiAgICBiYWNrOiAoKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByb3V0ZXIuYmFjaygpXG4gICAgfSxcbiAgICBwdXNoOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBhcylcbiAgICB9LFxuICAgIHB1c2hUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHB1c2hSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCBwdXNoVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLCBwdXNoVXJsKVxuICAgIH0sXG4gICAgcmVwbGFjZTogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCwgYXMpXG4gICAgfSxcbiAgICByZXBsYWNlVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCByZXBsYWNlUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcmVwbGFjZVVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSwgcmVwbGFjZVVybClcbiAgICB9LFxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIExpbmssIEljb24gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IG10U3RseWUgPSB7IGJhc2U6ICc0JywgbWQ6ICc4JywgbGc6ICc4JyB9O1xyXG5jb25zdCBsaW5rRGlzcGxheSA9IHsgYmFzZTogJ2lubGluZScsIG1kOiAnYmxvY2snLCBsZzogJ2Jsb2NrJyB9O1xyXG5cclxuaW50ZXJmYWNlIEFjdGl2ZUxpbmtQcm9wcyB7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG4gIGNoaWxkcmVuOiBvYmplY3Q7XHJcbn1cclxuXHJcbmNvbnN0IEFjdGl2ZUxpbms6IFJlYWN0LkZDPEFjdGl2ZUxpbmtQcm9wcz4gPSAoeyBocmVmLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGxldCBjb2xvciA9IHJvdXRlci5wYXRobmFtZSA9PT0gaHJlZiA/ICdibHVlJyA6ICcnO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE5leHRMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICA8TGluayBjb2xvcj17Y29sb3J9IGRpc3BsYXk9e2xpbmtEaXNwbGF5fSBtdD17bXRTdGx5ZX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L05leHRMaW5rPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY3RpdmVMaW5rO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgRmxleCxcclxuICBJY29uLFxyXG4gIEltZyxcclxuICB1c2VEaXNjbG9zdXJlLFxyXG4gIERyYXdlcixcclxuICBEcmF3ZXJCb2R5LFxyXG4gIERyYXdlckNvbnRlbnQsXHJcbiAgRHJhd2VyT3ZlcmxheSxcclxuICBCdXR0b24sXHJcbiAgRHJhd2VyQ2xvc2VCdXR0b24sXHJcbiAgSWNvbkJ1dHRvbixcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBNZEhvbWUsIE1kRW1haWwsIE1kRXZlbnROb3RlLCBNZE5vdGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuaW1wb3J0IHsgSW1Vc2VycywgSW1RdW90ZXNSaWdodCwgSW1Cb29rbWFyayB9IGZyb20gXCJyZWFjdC1pY29ucy9pbVwiO1xyXG5pbXBvcnQgQWN0aXZlTGluayBmcm9tIFwiLi9BY3RpdmVMaW5rXCI7XHJcbmltcG9ydCB7IHVzZU1lUXVlcnkgfSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcclxuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tIFwiLi4vdXRpbHMvaXNTZXJ2ZXJcIjtcclxuaW1wb3J0IHsgUHJvZmlsZUF2YXRhciB9IGZyb20gXCIuL1Byb2ZpbGUvUHJvZmlsZUF2YXRhclwiO1xyXG5pbXBvcnQgeyBIYW1idXJnZXJJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBEcmF3ZXJCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nIH0gPSB1c2VNZVF1ZXJ5KHtcclxuICAgIHNraXA6IGlzU2VydmVyKCksXHJcbiAgfSk7XHJcbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xyXG5cclxuICBsZXQgcXVvdGUgPSBudWxsO1xyXG4gIGxldCBtYWlsQWN0aXZpdHkgPSBudWxsO1xyXG4gIGxldCBtZXNzYWdlcyA9IG51bGw7XHJcbiAgbGV0IHVzZXJtYWlsQWN0aXZpdHkgPSBudWxsO1xyXG4gIGxldCB1c2VybWVzc2FnZXMgPSBudWxsO1xyXG4gIGxldCB0ZW1wYWx0ZSA9IG51bGw7XHJcblxyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgfSBlbHNlIGlmIChkYXRhPy5tZT8ucm9sZSAhPT0gXCJhZG1pblwiKSB7XHJcbiAgICB1c2VybWVzc2FnZXMgPSAoXHJcbiAgICAgIDxBY3RpdmVMaW5rIGhyZWY9XCIvVXNlck1lc3NhZ2VzXCI+XHJcbiAgICAgICAgPEljb24gYXM9e01kRW1haWx9IG1yPXsyfSBtYj1cIjJweFwiIC8+XHJcbiAgICAgICAgTWVzc2FnZXNcclxuICAgICAgPC9BY3RpdmVMaW5rPlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbWVzc2FnZXMgPSAoXHJcbiAgICAgIDxBY3RpdmVMaW5rIGhyZWY9XCIvbWVzc2FnZXNcIj5cclxuICAgICAgICA8SWNvbiBhcz17TWRFbWFpbH0gbXI9ezJ9IG1iPVwiMnB4XCIgLz5cclxuICAgICAgICBNZXNzYWdlc1xyXG4gICAgICA8L0FjdGl2ZUxpbms+XHJcbiAgICApO1xyXG4gICAgcXVvdGUgPSAoXHJcbiAgICAgIDxBY3RpdmVMaW5rIGhyZWY9XCIvcXVvdGVzXCI+XHJcbiAgICAgICAgPEljb24gYXM9e0ltUXVvdGVzUmlnaHR9IG1yPXsyfSBtYj1cIjVweFwiIC8+XHJcbiAgICAgICAgUXVvdGVzXHJcbiAgICAgIDwvQWN0aXZlTGluaz5cclxuICAgICk7XHJcblxyXG4gICAgdGVtcGFsdGUgPSAoXHJcbiAgICAgIDxBY3RpdmVMaW5rIGhyZWY9XCIvdGVtcGxhdGVzXCI+XHJcbiAgICAgICAgPEljb24gYXM9e01kRXZlbnROb3RlfSBtcj17Mn0gbWI9XCI1cHhcIiAvPlxyXG4gICAgICAgIFRlbXBsYXRlc1xyXG4gICAgICA8L0FjdGl2ZUxpbms+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBhcz17SWNvbkJ1dHRvbn1cclxuICAgICAgICBhcmlhLWxhYmVsPVwiT3B0aW9uc1wiXHJcbiAgICAgICAgaWNvbj17PEhhbWJ1cmdlckljb24gLz59XHJcbiAgICAgICAgZGlzcGxheT17eyBsZzogXCJub25lXCIgfX1cclxuICAgICAgICB2aXNpYmlsaXR5PXt7IGxnOiBcImhpZGRlblwiIH19XHJcbiAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgIGJnPVwieWVsbG93XCJcclxuICAgICAgICBvbkNsaWNrPXtvbk9wZW59XHJcbiAgICAgICAgbXQ9ezJ9XHJcbiAgICAgICAgbWw9ezJ9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxEcmF3ZXIgb25DbG9zZT17b25DbG9zZX0gaXNPcGVuPXtpc09wZW59IHNpemU9XCJmdWxsXCIgcGxhY2VtZW50PVwibGVmdFwiPlxyXG4gICAgICAgIDxEcmF3ZXJPdmVybGF5PlxyXG4gICAgICAgICAgPERyYXdlckNvbnRlbnQgYmc9XCJncmF5LjIwMFwiPlxyXG4gICAgICAgICAgICA8RHJhd2VyQ2xvc2VCdXR0b24gLz5cclxuICAgICAgICAgICAgPERyYXdlckJvZHk+XHJcbiAgICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICAgIGhlaWdodD17eyBiYXNlOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICAgICAgbXg9XCJhdXRvXCJcclxuICAgICAgICAgICAgICAgIG10PXs0fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgICAgIG10PXt7IGJhc2U6IFwiMFwiLCBtZDogXCIzMHB4XCIsIGxnOiBcIjMwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PXs2MDB9XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXsxOX1cclxuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWdcclxuICAgICAgICAgICAgICAgICAgICBib3hTaXplPVwiMTMwcHhcIiBcclxuICAgICAgICAgICAgICAgICAgICAvLyB3PVwiNTAlXCJcclxuICAgICAgICAgICAgICAgICAgICB3PScyNTBweCdcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9RQV9DdXJzaXZlX0xvZ28ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICBteD1cImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8RmxleCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbXg9XCJhdXRvXCIgbXQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBY3RpdmVMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBhcz17TWRIb21lfSBtcj17Mn0gbWI9XCI1cHhcIiBteD1cImF1dG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9BY3RpdmVMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBY3RpdmVMaW5rIGhyZWY9XCIvY29udGFjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGFzPXtJbVVzZXJzfSBtcj17Mn0gbWI9XCI1cHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ29udGFjdHNcclxuICAgICAgICAgICAgICAgICAgICA8L0FjdGl2ZUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIGZvciB1c2VycyAqL31cclxuICAgICAgICAgICAgICAgICAgICB7dXNlcm1lc3NhZ2VzfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogRm9yIGFkbWluICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHt0ZW1wYWx0ZX1cclxuICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZXN9XHJcbiAgICAgICAgICAgICAgICAgICAge3F1b3RlfVxyXG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICA8RmxleCBtYj17MzJ9IGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEgJiYgPFByb2ZpbGVBdmF0YXIgZW1haWw9e2RhdGEubWU/LmVtYWlsfSAvPn1cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICA8L0ZsZXg+e1wiIFwifVxyXG4gICAgICAgICAgICA8L0RyYXdlckJvZHk+XHJcbiAgICAgICAgICA8L0RyYXdlckNvbnRlbnQ+XHJcbiAgICAgICAgPC9EcmF3ZXJPdmVybGF5PlxyXG4gICAgICA8L0RyYXdlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFdyYXBwZXIsIFdyYXBwZXJWYXJpYW50IH0gZnJvbSAnLi9XcmFwcGVyJztcclxuXHJcbmltcG9ydCB7IFNpZGVCYXIgfSBmcm9tICcuL1NpZGVCYXInO1xyXG5pbXBvcnQgeyBEcmF3ZXJCYXIgfSBmcm9tICcuL0RyYXdlcic7XHJcbmltcG9ydCB7IEJveCwgRmxleCwgR3JpZCwgR3JpZEl0ZW0gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBMYXlvdXRQcm9wcyB7XHJcbiAgdmFyaWFudD86IFdyYXBwZXJWYXJpYW50O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTGF5b3V0OiBSZWFjdC5GQzxMYXlvdXRQcm9wcz4gPSAoeyBjaGlsZHJlbiwgdmFyaWFudCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkXHJcbiAgICAgIHRlbXBsYXRlQ29sdW1ucz17e1xyXG4gICAgICAgIGJhc2U6ICdyZXBlYXQoMCwgMWZyKScsXHJcbiAgICAgICAgbWQ6ICdyZXBlYXQoNCwgMWZyKScsXHJcbiAgICAgICAgbGc6ICdyZXBlYXQoNiwgMWZyKScsXHJcbiAgICAgIH19XHJcbiAgICAgIHRlbXBsYXRlUm93cz0ncmVwZWF0KDEsIDFmciknXHJcbiAgICAgIGhlaWdodD0nMTAwdmgnXHJcbiAgICAgIGdhcD17Mn1cclxuICAgID5cclxuICAgICAgPEdyaWRJdGVtXHJcbiAgICAgICAgY29sU3Bhbj17MX1cclxuICAgICAgICBkaXNwbGF5PXt7IGJhc2U6ICdub25lJywgbWQ6ICdub25lJywgbGc6ICdpbml0aWFsJyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPFNpZGVCYXIgLz5cclxuICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgPEdyaWRJdGVtIGNvbFNwYW49ezR9IHA9ezJ9IHJvd1NwYW49ezF9PlxyXG4gICAgICAgIDxEcmF3ZXJCYXIgLz5cclxuICAgICAgICA8V3JhcHBlciB2YXJpYW50PXt2YXJpYW50fT57Y2hpbGRyZW59PC9XcmFwcGVyPlxyXG4gICAgICA8L0dyaWRJdGVtPlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJveCwgVGV4dCwgU2ltcGxlR3JpZCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IHdpdGhBcG9sbG8gfSBmcm9tIFwiLi4vLi4vdXRpbHMvd2l0aEFwb2xsb1wiO1xyXG5cclxudHlwZSBDYXJkUHJvcHMgPSB7XHJcbiAgRGVsaXZlcmVkOiBudW1iZXI7XHJcbiAgT3BlbmVkOiBudW1iZXI7XHJcbiAgQ2xpY2tlZDogbnVtYmVyO1xyXG4gIEJvdW5jZXM6IG51bWJlcjtcclxuICBTcGFtUmVwb3J0czogbnVtYmVyO1xyXG4gIEFjdGl2ZUNvdW50OiBudW1iZXI7XHJcbiAgTm9uQWN0aXZlQ291bnQ6IG51bWJlcjtcclxufTtcclxuXHJcbmNvbnN0IEFjdGl2aXR5Q2FyZDogUmVhY3QuRkM8Q2FyZFByb3BzPiA9ICh7XHJcbiAgRGVsaXZlcmVkLFxyXG4gIE9wZW5lZCxcclxuICBDbGlja2VkLFxyXG4gIEJvdW5jZXMsXHJcbiAgU3BhbVJlcG9ydHMsXHJcbiAgQWN0aXZlQ291bnQsXHJcbiAgTm9uQWN0aXZlQ291bnQsXHJcbn06IENhcmRQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U2ltcGxlR3JpZCBtaW5DaGlsZFdpZHRoPVwiMTIwcHhcIiBzcGFjaW5nPVwiMTBweFwiPlxyXG4gICAgICAgIDxCb3ggYmc9XCIjZjJmOGZmXCIgYm94U2hhZG93PVwibGdcIiBoZWlnaHQ9XCIxMDBweFwiIHdpZHRoPVwiMTA1cHhcIj5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgY29sb3I9XCJncmF5LjUwMFwiXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJzZW1pYm9sZFwiXHJcbiAgICAgICAgICAgIGxldHRlclNwYWNpbmc9XCJ3aWRlXCJcclxuICAgICAgICAgICAgZm9udFNpemU9XCJ4c1wiXHJcbiAgICAgICAgICAgIHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIlxyXG4gICAgICAgICAgICBtdD1cIjJcIlxyXG4gICAgICAgICAgICB0ZXh0QWxpZ249e1tcImNlbnRlclwiXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgSW52aXRhdGlvbiBTZW50XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxUZXh0IGZvbnRTaXplPXszMH0gdGV4dEFsaWduPXtbXCJjZW50ZXJcIl19IG10PXsxfT5cclxuICAgICAgICAgICAge0FjdGl2ZUNvdW50fVxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxCb3ggYmc9XCIjZjJmOGZmXCIgYm94U2hhZG93PVwibGdcIiBoZWlnaHQ9XCIxMDBweFwiIHdpZHRoPVwiMTA1cHhcIj5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgY29sb3I9XCJncmF5LjUwMFwiXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJzZW1pYm9sZFwiXHJcbiAgICAgICAgICAgIGxldHRlclNwYWNpbmc9XCJ3aWRlXCJcclxuICAgICAgICAgICAgZm9udFNpemU9XCJ4c1wiXHJcbiAgICAgICAgICAgIHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIlxyXG4gICAgICAgICAgICBtdD1cIjJcIlxyXG4gICAgICAgICAgICB0ZXh0QWxpZ249e1tcImNlbnRlclwiXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgSW52aXRhdGlvbiBBY2NlcHRlZFxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8VGV4dCBmb250U2l6ZT17MzB9IHRleHRBbGlnbj17W1wiY2VudGVyXCJdfSBtdD17MX0+XHJcbiAgICAgICAgICAgIHtOb25BY3RpdmVDb3VudH1cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgPEJveCBiZz1cIiNmMmY4ZmZcIiBib3hTaGFkb3c9XCJsZ1wiIGhlaWdodD1cIjEwMHB4XCIgd2lkdGg9XCIxMDVweFwiPlxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBjb2xvcj1cImdyYXkuNTAwXCJcclxuICAgICAgICAgICAgZm9udFdlaWdodD1cInNlbWlib2xkXCJcclxuICAgICAgICAgICAgbGV0dGVyU3BhY2luZz1cIndpZGVcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT1cInhzXCJcclxuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiXHJcbiAgICAgICAgICAgIG10PVwiMlwiXHJcbiAgICAgICAgICAgIHRleHRBbGlnbj17W1wiY2VudGVyXCJdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBERUxJVkVSRURcclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPFRleHQgZm9udFNpemU9ezMwfSB0ZXh0QWxpZ249e1tcImNlbnRlclwiXX0gbXQ9ezV9PlxyXG4gICAgICAgICAgICB7RGVsaXZlcmVkfVxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICA8Qm94IGJnPVwiI2YyZjhmZlwiIGJveFNoYWRvdz1cImxnXCIgaGVpZ2h0PVwiMTAwcHhcIiB3aWR0aD1cIjEwNXB4XCI+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIGNvbG9yPVwiZ3JheS41MDBcIlxyXG4gICAgICAgICAgICBmb250V2VpZ2h0PVwic2VtaWJvbGRcIlxyXG4gICAgICAgICAgICBsZXR0ZXJTcGFjaW5nPVwid2lkZVwiXHJcbiAgICAgICAgICAgIGZvbnRTaXplPVwieHNcIlxyXG4gICAgICAgICAgICB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCJcclxuICAgICAgICAgICAgdGV4dEFsaWduPXtbXCJjZW50ZXJcIl19XHJcbiAgICAgICAgICAgIG10PVwiMlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIE9QRU5FRFxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8VGV4dCBmb250U2l6ZT17MzB9IHRleHRBbGlnbj17W1wiY2VudGVyXCJdfSBtdD17NX0+XHJcbiAgICAgICAgICAgIHtPcGVuZWR9XHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIDxCb3ggYmc9XCIjZjJmOGZmXCIgYm94U2hhZG93PVwibGdcIiBoZWlnaHQ9XCIxMDBweFwiIHdpZHRoPVwiMTA1cHhcIj5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgY29sb3I9XCJncmF5LjUwMFwiXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJzZW1pYm9sZFwiXHJcbiAgICAgICAgICAgIGxldHRlclNwYWNpbmc9XCJ3aWRlXCJcclxuICAgICAgICAgICAgZm9udFNpemU9XCJ4c1wiXHJcbiAgICAgICAgICAgIHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIlxyXG4gICAgICAgICAgICB0ZXh0QWxpZ249e1tcImNlbnRlclwiXX1cclxuICAgICAgICAgICAgbXQ9XCIyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQ0xJQ0tFRFxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8VGV4dCBmb250U2l6ZT17MzB9IHRleHRBbGlnbj17W1wiY2VudGVyXCJdfSBtdD17NX0+XHJcbiAgICAgICAgICAgIHtDbGlja2VkfVxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICA8Qm94IGJnPVwiI2YyZjhmZlwiIGJveFNoYWRvdz1cImxnXCIgaGVpZ2h0PVwiMTAwcHhcIiB3aWR0aD1cIjEwNXB4XCI+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIGNvbG9yPVwiZ3JheS41MDBcIlxyXG4gICAgICAgICAgICBmb250V2VpZ2h0PVwic2VtaWJvbGRcIlxyXG4gICAgICAgICAgICBsZXR0ZXJTcGFjaW5nPVwid2lkZVwiXHJcbiAgICAgICAgICAgIGZvbnRTaXplPVwieHNcIlxyXG4gICAgICAgICAgICB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCJcclxuICAgICAgICAgICAgdGV4dEFsaWduPXtbXCJjZW50ZXJcIl19XHJcbiAgICAgICAgICAgIG10PVwiMlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEJPVU5DRVNcclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPFRleHQgZm9udFNpemU9ezMwfSB0ZXh0QWxpZ249e1tcImNlbnRlclwiXX0gbXQ9ezV9PlxyXG4gICAgICAgICAgICB7Qm91bmNlc31cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgPEJveCBiZz1cIiNmMmY4ZmZcIiBib3hTaGFkb3c9XCJsZ1wiIGhlaWdodD1cIjEwMHB4XCIgd2lkdGg9XCIxMDVweFwiPlxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBjb2xvcj1cImdyYXkuNTAwXCJcclxuICAgICAgICAgICAgZm9udFdlaWdodD1cInNlbWlib2xkXCJcclxuICAgICAgICAgICAgbGV0dGVyU3BhY2luZz1cIndpZGVcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT1cInhzXCJcclxuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiXHJcbiAgICAgICAgICAgIHRleHRBbGlnbj17W1wiY2VudGVyXCJdfVxyXG4gICAgICAgICAgICBtdD1cIjJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTUEFNIFJFUE9SVFNcclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPFRleHQgZm9udFNpemU9ezMwfSB0ZXh0QWxpZ249e1tcImNlbnRlclwiXX0gbXQ9ezV9PlxyXG4gICAgICAgICAgICB7U3BhbVJlcG9ydHN9XHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvU2ltcGxlR3JpZD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKHsgc3NyOiBmYWxzZSB9KShBY3Rpdml0eUNhcmQpO1xyXG4iLCJpbXBvcnQgeyBCb3ggfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyB3aXRoQXBvbGxvIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3dpdGhBcG9sbG9cIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBCYXJDaGFydCxcclxuICBCYXIsXHJcbiAgQ2VsbCxcclxuICBYQXhpcyxcclxuICBZQXhpcyxcclxuICBDYXJ0ZXNpYW5HcmlkLFxyXG4gIFRvb2x0aXAsXHJcbiAgTGVnZW5kLFxyXG4gIFJlc3BvbnNpdmVDb250YWluZXIsXHJcbn0gZnJvbSBcInJlY2hhcnRzXCI7XHJcblxyXG50eXBlIENhcmRQcm9wcyA9IHtcclxuICBEZWxpdmVyZWQ6IG51bWJlcjtcclxuICBPcGVuZWQ6IG51bWJlcjtcclxuICBDbGlja2VkOiBudW1iZXI7XHJcbiAgQm91bmNlczogbnVtYmVyO1xyXG4gIFNwYW1SZXBvcnRzOiBudW1iZXI7XHJcbiAgQWN0aXZlQ291bnQ6IG51bWJlcjtcclxuICBOb25BY3RpdmVDb3VudDogbnVtYmVyO1xyXG59O1xyXG5jb25zdCBBY3Rpdml0eUNoYXJ0OiBSZWFjdC5GQzxDYXJkUHJvcHM+ID0gKHtcclxuICBEZWxpdmVyZWQsXHJcbiAgT3BlbmVkLFxyXG4gIENsaWNrZWQsXHJcbiAgQm91bmNlcyxcclxuICBTcGFtUmVwb3J0cyxcclxuICBBY3RpdmVDb3VudCxcclxuICBOb25BY3RpdmVDb3VudCxcclxufTogQ2FyZFByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2hhcnREYXRhOiBhbnkgPSBbXTtcclxuICBjaGFydERhdGEucHVzaCh7IG5hbWU6IFwiSW52aXRhdGlvbiBTZW50XCIsIGNvdW50OiBBY3RpdmVDb3VudCB9KTtcclxuICBjaGFydERhdGEucHVzaCh7IG5hbWU6IFwiSW52aXRhdGlvbiBBY2NlcHRlZFwiLCBjb3VudDogTm9uQWN0aXZlQ291bnQgfSk7XHJcbiAgY2hhcnREYXRhLnB1c2goeyBuYW1lOiBcIkRlbGl2ZXJlZFwiLCBjb3VudDogRGVsaXZlcmVkIH0pO1xyXG4gIGNoYXJ0RGF0YS5wdXNoKHsgbmFtZTogXCJPcGVuZWRcIiwgY291bnQ6IE9wZW5lZCB9KTtcclxuICBjaGFydERhdGEucHVzaCh7IG5hbWU6IFwiQ2xpY2tlZFwiLCBjb3VudDogQ2xpY2tlZCB9KTtcclxuICBjaGFydERhdGEucHVzaCh7IG5hbWU6IFwiQm91bmNlc1wiLCBjb3VudDogQm91bmNlcyB9KTtcclxuICBjaGFydERhdGEucHVzaCh7IG5hbWU6IFwiU3BhbSBSZXBvcnRzXCIsIGNvdW50OiBTcGFtUmVwb3J0cyB9KTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Qm94IG10PXsyMH0+XHJcbiAgICAgICAgPEJhckNoYXJ0XHJcbiAgICAgICAgICB3aWR0aD17MTEwMH1cclxuICAgICAgICAgIGhlaWdodD17NDAwfVxyXG4gICAgICAgICAgZGF0YT17Y2hhcnREYXRhfVxyXG4gICAgICAgICAgbWFyZ2luPXt7XHJcbiAgICAgICAgICAgIHRvcDogNSxcclxuICAgICAgICAgICAgcmlnaHQ6IDMwLFxyXG4gICAgICAgICAgICBsZWZ0OiAyMCxcclxuICAgICAgICAgICAgYm90dG9tOiA1LFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7LyogPENhcnRlc2lhbkdyaWQgc3Ryb2tlRGFzaGFycmF5PVwiMyAzXCIgLz4gKi99XHJcbiAgICAgICAgICA8WEF4aXMgZGF0YUtleT1cIm5hbWVcIiAvPlxyXG4gICAgICAgICAgPFlBeGlzIC8+XHJcbiAgICAgICAgICA8VG9vbHRpcCAvPlxyXG4gICAgICAgICAgey8qIDxMZWdlbmQvPiAqL31cclxuICAgICAgICAgIDxCYXIgZGF0YUtleT1cImNvdW50XCIgZmlsbD1cIiM4ODg0ZDhcIiAvPlxyXG4gICAgICAgIDwvQmFyQ2hhcnQ+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oeyBzc3I6IGZhbHNlIH0pKEFjdGl2aXR5Q2hhcnQpO1xyXG4iLCJpbXBvcnQgeyB1c2VNYWlsQWN0aXZpdHlRdWVyeSwgdXNlQWxsc3Vic1F1ZXJ5IH0gZnJvbSBcIi4uLy4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcbmltcG9ydCB7IHdpdGhBcG9sbG8gfSBmcm9tIFwiLi4vLi4vdXRpbHMvd2l0aEFwb2xsb1wiO1xyXG5pbXBvcnQgeyB1c2VJc0F1dGggfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXNlSXNBdXRoXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBY3Rpdml0eUNhcmQgZnJvbSBcIi4vQWN0aXZpdHlDYXJkXCI7XHJcbmltcG9ydCBBY3Rpdml0eUNoYXJ0IGZyb20gXCIuL0FjdGl2aXR5Q2hhcnRcIjtcclxuXHJcbmNvbnN0IEVNYWlsQWN0aXZpdHkgPSAoKSA9PiB7XHJcbiAgdXNlSXNBdXRoKCk7XHJcbiAgY29uc3QgW0RlbGl2ZXJlZCwgc2V0RGVsaXZlcmVkXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtPcGVuZWQsIHNldE9wZW5lZF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbQ2xpY2tlZCwgc2V0Q2xpY2tlZF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbQm91bmNlcywgc2V0Qm91bmNlc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbU3BhbVJlcG9ydHMsIHNldFNwYW1SZXBvcnRzXSA9IHVzZVN0YXRlKDApO1xyXG4gIHVzZUlzQXV0aCgpO1xyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcsIGZldGNoTW9yZSwgdmFyaWFibGVzIH0gPSB1c2VNYWlsQWN0aXZpdHlRdWVyeSgpO1xyXG5cclxuICBjb25zdCBzdWJzQ291bnQgPSB1c2VBbGxzdWJzUXVlcnkoKTtcclxuXHJcbiAgaWYgKCFsb2FkaW5nICYmICFkYXRhKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+eW91IGdvdCBxdWVyeSBmYWlsZWQgZm9yIHNvbWUgcmVhc29uPC9kaXY+XHJcbiAgICAgICAgPGRpdj57ZXJyb3I/Lm1lc3NhZ2V9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBjb25zdCBtYWlsQWN0aXZpdHk6IGFueSA9IGRhdGEhLm1haWxBY3Rpdml0eS5tYWlsQWN0aXZpdHk7XHJcbiAgICAgIGxldCBEZWxpdmVyZWQ6IGFueSA9IFtdO1xyXG4gICAgICBsZXQgT3BlbmVkOiBhbnkgPSBbXTtcclxuICAgICAgbGV0IENsaWNrZWQ6IGFueSA9IFtdO1xyXG4gICAgICBsZXQgQm91bmNlczogYW55ID0gW107XHJcbiAgICAgIGxldCBTcGFtUmVwb3J0czogYW55ID0gW107XHJcblxyXG4gICAgICBtYWlsQWN0aXZpdHkubWFwKChtYWlsOiBhbnkpID0+IHtcclxuICAgICAgICBPcGVuZWQucHVzaChtYWlsLm9wZW5fY291bnQpO1xyXG4gICAgICAgIENsaWNrZWQucHVzaChtYWlsLmNsaWNrc19jb3VudCk7XHJcblxyXG4gICAgICAgIGlmIChtYWlsLlN0YXR1cyA9PT0gXCJkZWxpdmVyZWRcIikge1xyXG4gICAgICAgICAgRGVsaXZlcmVkLnB1c2gobWFpbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtYWlsLlN0YXR1cyA9PT0gXCJib3VuY2VcIikge1xyXG4gICAgICAgICAgQm91bmNlcy5wdXNoKG1haWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWFpbC5TdGF0dXMgPT09IFwic3BhbXJlcG9ydFwiKSB7XHJcbiAgICAgICAgICBTcGFtUmVwb3J0cy5wdXNoKG1haWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHNldERlbGl2ZXJlZChEZWxpdmVyZWQubGVuZ3RoKTtcclxuICAgICAgc2V0T3BlbmVkKE9wZW5lZC5yZWR1Y2UoKGE6IGFueSwgYjogYW55KSA9PiBhICsgYiwgMCkpO1xyXG4gICAgICBzZXRDbGlja2VkKENsaWNrZWQucmVkdWNlKChhOiBhbnksIGI6IGFueSkgPT4gYSArIGIsIDApKTtcclxuICAgICAgc2V0Qm91bmNlcyhCb3VuY2VzLmxlbmd0aCk7XHJcbiAgICAgIHNldFNwYW1SZXBvcnRzKFNwYW1SZXBvcnRzLmxlbmd0aCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgaWYgKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKERlbGl2ZXJlZCwgT3BlbmVkLCBDbGlja2VkLCBCb3VuY2VzLCBTcGFtUmVwb3J0cyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgeyFkYXRhID8gKFxyXG4gICAgICAgIDxkaXY+bG9hZGluZy4uLjwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8QWN0aXZpdHlDYXJkXHJcbiAgICAgICAgICAgIERlbGl2ZXJlZD17RGVsaXZlcmVkfVxyXG4gICAgICAgICAgICBPcGVuZWQ9e09wZW5lZH1cclxuICAgICAgICAgICAgQ2xpY2tlZD17Q2xpY2tlZH1cclxuICAgICAgICAgICAgQm91bmNlcz17Qm91bmNlc31cclxuICAgICAgICAgICAgU3BhbVJlcG9ydHM9e1NwYW1SZXBvcnRzfVxyXG4gICAgICAgICAgICBBY3RpdmVDb3VudD17c3Vic0NvdW50LmRhdGE/LkFsbHN1YnMhLkFjdGl2ZUNvdW50fVxyXG4gICAgICAgICAgICBOb25BY3RpdmVDb3VudD17c3Vic0NvdW50LmRhdGE/LkFsbHN1YnMhLk5vbkFjdGl2ZUNvdW50fVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8QWN0aXZpdHlDaGFydFxyXG4gICAgICAgICAgICBEZWxpdmVyZWQ9e0RlbGl2ZXJlZH1cclxuICAgICAgICAgICAgT3BlbmVkPXtPcGVuZWR9XHJcbiAgICAgICAgICAgIENsaWNrZWQ9e0NsaWNrZWR9XHJcbiAgICAgICAgICAgIEJvdW5jZXM9e0JvdW5jZXN9XHJcbiAgICAgICAgICAgIFNwYW1SZXBvcnRzPXtTcGFtUmVwb3J0c31cclxuICAgICAgICAgICAgQWN0aXZlQ291bnQ9e3N1YnNDb3VudC5kYXRhPy5BbGxzdWJzIS5BY3RpdmVDb3VudH1cclxuICAgICAgICAgICAgTm9uQWN0aXZlQ291bnQ9e3N1YnNDb3VudC5kYXRhPy5BbGxzdWJzIS5Ob25BY3RpdmVDb3VudH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyh7IHNzcjogZmFsc2UgfSkoRU1haWxBY3Rpdml0eSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgTGluayxcclxuICBBdmF0YXIsXHJcbiAgTWVudUJ1dHRvbixcclxuICBNZW51SXRlbSxcclxuICBNZW51TGlzdCxcclxuICBNZW51LFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUFwb2xsb0NsaWVudCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VMb2dvdXRNdXRhdGlvbiB9IGZyb20gXCIuLi8uLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmludGVyZmFjZSBQcm9maWxlQXZhdGFyUHJvcHMge1xyXG4gIGVtYWlsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQcm9maWxlQXZhdGFyOiBSZWFjdC5GQzxQcm9maWxlQXZhdGFyUHJvcHM+ID0gKHsgZW1haWwgfSkgPT4ge1xyXG4gIGNvbnN0IFtsb2dvdXQsIHsgbG9hZGluZzogbG9nb3V0RmV0Y2hpbmcgfV0gPSB1c2VMb2dvdXRNdXRhdGlvbigpO1xyXG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IHVzZUFwb2xsb0NsaWVudCgpO1xyXG4gIC8vIGxldCBib2R5ID0gbnVsbDtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggbXg9XCJhdXRvXCI+XHJcbiAgICAgIDxNZW51PlxyXG4gICAgICAgIDxNZW51QnV0dG9uPlxyXG4gICAgICAgICAgPEF2YXRhciBuYW1lPXtlbWFpbH0gYmc9XCJ5ZWxsb3dcIiAvPlxyXG4gICAgICAgIDwvTWVudUJ1dHRvbj5cclxuICAgICAgICA8TWVudUxpc3Q+XHJcbiAgICAgICAgICA8TWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cclxuICAgICAgICAgICAgICA8TGluaz5Qcm9maWxlPC9MaW5rPlxyXG4gICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgYXdhaXQgbG9nb3V0KCk7XHJcbiAgICAgICAgICAgICAgYXdhaXQgcm91dGVyLnJlcGxhY2UoXCIvbG9naW4/bmV4dD1cIiArIHJvdXRlci5wYXRobmFtZSk7XHJcbiAgICAgICAgICAgICAgYXdhaXQgYXBvbGxvQ2xpZW50LnJlc2V0U3RvcmUoKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgaXNMb2FkaW5nPXtsb2dvdXRGZXRjaGluZ31cclxuICAgICAgICAgICAgdmFyaWFudD1cImxpbmtcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgPC9NZW51TGlzdD5cclxuICAgICAgPC9NZW51PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCb3gsIEZsZXgsIEljb24sIEltZyB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IE1kSG9tZSwgTWRFbWFpbCwgTWRFdmVudE5vdGUsIE1kTm90ZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgeyBJbVVzZXJzLCBJbVF1b3Rlc1JpZ2h0LCBJbUJvb2ttYXJrIH0gZnJvbSBcInJlYWN0LWljb25zL2ltXCI7XHJcblxyXG5pbXBvcnQgQWN0aXZlTGluayBmcm9tIFwiLi9BY3RpdmVMaW5rXCI7XHJcbmltcG9ydCB7IHVzZU1lUXVlcnkgfSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcclxuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tIFwiLi4vdXRpbHMvaXNTZXJ2ZXJcIjtcclxuaW1wb3J0IHsgUHJvZmlsZUF2YXRhciB9IGZyb20gXCIuL1Byb2ZpbGUvUHJvZmlsZUF2YXRhclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNpZGVCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nIH0gPSB1c2VNZVF1ZXJ5KHtcclxuICAgIHNraXA6IGlzU2VydmVyKCksXHJcbiAgfSk7XHJcblxyXG4gIGxldCBxdW90ZSA9IG51bGw7XHJcbiAgbGV0IG1haWxBY3Rpdml0eSA9IG51bGw7XHJcbiAgbGV0IG1lc3NhZ2VzID0gbnVsbDtcclxuICBsZXQgdXNlcm1haWxBY3Rpdml0eSA9IG51bGw7XHJcbiAgbGV0IHVzZXJtZXNzYWdlcyA9IG51bGw7XHJcbiAgbGV0IHRlbXBhbHRlID0gbnVsbDtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHtcclxuICB9IGVsc2UgaWYgKGRhdGE/Lm1lPy5yb2xlICE9PSBcImFkbWluXCIpIHtcclxuICAgIHVzZXJtZXNzYWdlcyA9IChcclxuICAgICAgPEFjdGl2ZUxpbmsgaHJlZj1cIi9Vc2VyTWVzc2FnZXNcIj5cclxuICAgICAgICA8SWNvbiBhcz17TWRFbWFpbH0gbXI9ezJ9IG1iPVwiNXB4XCIgLz5cclxuICAgICAgICBNZXNzYWdlc1xyXG4gICAgICA8L0FjdGl2ZUxpbms+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBxdW90ZSA9IChcclxuICAgICAgPEFjdGl2ZUxpbmsgaHJlZj1cIi9xdW90ZXNcIj5cclxuICAgICAgICA8SWNvbiBhcz17SW1RdW90ZXNSaWdodH0gbXI9ezJ9IG1iPVwiNXB4XCIgLz5cclxuICAgICAgICBRdW90ZXNcclxuICAgICAgPC9BY3RpdmVMaW5rPlxyXG4gICAgKTtcclxuXHJcbiAgICBtZXNzYWdlcyA9IChcclxuICAgICAgPEFjdGl2ZUxpbmsgaHJlZj1cIi9tZXNzYWdlc1wiPlxyXG4gICAgICAgIDxJY29uIGFzPXtNZEVtYWlsfSBtcj17Mn0gbWI9XCI1cHhcIiAvPlxyXG4gICAgICAgIE1lc3NhZ2VzXHJcbiAgICAgIDwvQWN0aXZlTGluaz5cclxuICAgICk7XHJcbiAgICB0ZW1wYWx0ZSA9IChcclxuICAgICAgPEFjdGl2ZUxpbmsgaHJlZj1cIi90ZW1wbGF0ZXNcIj5cclxuICAgICAgICA8SWNvbiBhcz17TWRFdmVudE5vdGV9IG1yPXsyfSBtYj1cIjVweFwiIC8+XHJcbiAgICAgICAgVGVtcGxhdGVzXHJcbiAgICAgIDwvQWN0aXZlTGluaz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXhcclxuICAgICAgYmc9XCJncmF5LjIwMFwiXHJcbiAgICAgIHdpZHRoPXt7IGJhc2U6IFwiMzAwcHhcIiwgbWQ6IFwiMzAwcHhcIiwgbGc6IFwiMzAwcHhcIiB9fVxyXG4gICAgICBoZWlnaHQ9e3sgYmFzZTogXCIxMDAlXCIsIG1kOiBcIjEwMCVcIiwgbGc6IFwiMTAwJVwiIH19XHJcbiAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgPlxyXG4gICAgICA8RmxleFxyXG4gICAgICAgIG10PXt7IGJhc2U6IFwiMFwiLCBtZDogXCIzMHB4XCIsIGxnOiBcIjMwcHhcIiB9fVxyXG4gICAgICAgIGZvbnRXZWlnaHQ9ezYwMH1cclxuICAgICAgICBmb250U2l6ZT17MTl9XHJcbiAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXHJcbiAgICAgID5cclxuICAgICAgICA8SW1nXHJcbiAgICAgICAgICBib3hTaXplPVwiMTEwcHhcIlxyXG4gICAgICAgICAgdz1cIjEwMCVcIlxyXG4gICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgc3JjPVwiL3N0YXRpYy9RQV9DdXJzaXZlX0xvZ28ucG5nXCJcclxuICAgICAgICAgIGFsdD1cIkxvZ29cIlxyXG4gICAgICAgICAgbXg9XCJhdXRvXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8Qm94IG14PVwiYXV0b1wiPlxyXG4gICAgICAgICAgPEFjdGl2ZUxpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPEljb24gYXM9e01kSG9tZX0gbXI9ezJ9IG1iPVwiNXB4XCIgLz5cclxuICAgICAgICAgICAgRGFzaGJvYXJkc1xyXG4gICAgICAgICAgPC9BY3RpdmVMaW5rPlxyXG4gICAgICAgICAgPEFjdGl2ZUxpbmsgaHJlZj1cIi9jb250YWN0c1wiPlxyXG4gICAgICAgICAgICA8SWNvbiBhcz17SW1Vc2Vyc30gbXI9ezJ9IG1iPVwiNXB4XCIgLz5cclxuICAgICAgICAgICAgQ29udGFjdHNcclxuICAgICAgICAgIDwvQWN0aXZlTGluaz5cclxuXHJcbiAgICAgICAgICB7LyogZm9yIHVzZXJzICovfVxyXG4gICAgICAgICAge3VzZXJtZXNzYWdlc31cclxuXHJcbiAgICAgICAgICB7LyogRm9yIGFkbWluICovfVxyXG4gICAgICAgICAge3RlbXBhbHRlfVxyXG4gICAgICAgICAge21lc3NhZ2VzfVxyXG4gICAgICAgICAge3F1b3RlfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICAgIDxGbGV4XHJcbiAgICAgICAgbXQ9e3sgYmFzZTogXCIwXCIsIG1kOiBcIjUwcHhcIiwgbGc6IFwiNTBweFwiIH19XHJcbiAgICAgICAgbWI9ezE0fVxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIlxyXG4gICAgICA+XHJcbiAgICAgICAge2RhdGEgJiYgPFByb2ZpbGVBdmF0YXIgZW1haWw9e2RhdGEubWU/LmVtYWlsfSAvPn1cclxuICAgICAgPC9GbGV4PlxyXG4gICAgPC9GbGV4PlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCB7XHJcbiAgdXNlTWFpbEFjdGl2aXR5QnlJZFF1ZXJ5LFxyXG4gIHVzZUFsbHN1YnNJZFF1ZXJ5LFxyXG59IGZyb20gXCIuLi8uLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xyXG5pbXBvcnQgeyB3aXRoQXBvbGxvIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3dpdGhBcG9sbG9cIjtcclxuaW1wb3J0IHsgdXNlSXNBdXRoIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3VzZUlzQXV0aFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWN0aXZpdHlDYXJkIGZyb20gXCIuLi9NYWlsX0FjdGl2aXR5L0FjdGl2aXR5Q2FyZFwiO1xyXG5pbXBvcnQgQWN0aXZpdHlDaGFydCBmcm9tIFwiLi4vTWFpbF9BY3Rpdml0eS9BY3Rpdml0eUNoYXJ0XCI7XHJcblxyXG5pbnRlcmZhY2UgVXNlckFjdGl2aXR5UHJvcHMge1xyXG4gIGlkOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IFVzZXJzTWFpbHNBY3Rpdml0aWVzOiBSZWFjdC5GQzxVc2VyQWN0aXZpdHlQcm9wcz4gPSAoeyBpZCB9KSA9PiB7XHJcbiAgdXNlSXNBdXRoKCk7XHJcbiAgY29uc3QgW0RlbGl2ZXJlZCwgc2V0RGVsaXZlcmVkXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtPcGVuZWQsIHNldE9wZW5lZF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbQ2xpY2tlZCwgc2V0Q2xpY2tlZF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbQm91bmNlcywgc2V0Qm91bmNlc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbU3BhbVJlcG9ydHMsIHNldFNwYW1SZXBvcnRzXSA9IHVzZVN0YXRlKDApO1xyXG4gIHVzZUlzQXV0aCgpO1xyXG4gIGNvbnN0IHtcclxuICAgIGRhdGEsXHJcbiAgICBlcnJvcixcclxuICAgIGxvYWRpbmcsXHJcbiAgICBmZXRjaE1vcmUsXHJcbiAgICB2YXJpYWJsZXMsXHJcbiAgfSA9IHVzZU1haWxBY3Rpdml0eUJ5SWRRdWVyeSh7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgaWQ6IGlkLFxyXG4gICAgfSxcclxuICAgIG5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZTogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc3Vic0NvdW50ID0gdXNlQWxsc3Vic0lkUXVlcnkoe1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIElkOiBpZCxcclxuICAgIH0sXHJcbiAgICBub3RpZnlPbk5ldHdvcmtTdGF0dXNDaGFuZ2U6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIGlmICghbG9hZGluZyAmJiAhZGF0YSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PnlvdSBnb3QgcXVlcnkgZmFpbGVkIGZvciBzb21lIHJlYXNvbjwvZGl2PlxyXG4gICAgICAgIDxkaXY+e2Vycm9yPy5tZXNzYWdlfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgY29uc3QgbWFpbEFjdGl2aXR5OiBhbnkgPSBkYXRhIS5tYWlsQWN0aXZpdHlCeUlkLm1haWxBY3Rpdml0eTtcclxuICAgICAgbGV0IERlbGl2ZXJlZDogYW55ID0gW107XHJcbiAgICAgIGxldCBPcGVuZWQ6IGFueSA9IFtdO1xyXG4gICAgICBsZXQgQ2xpY2tlZDogYW55ID0gW107XHJcbiAgICAgIGxldCBCb3VuY2VzOiBhbnkgPSBbXTtcclxuICAgICAgbGV0IFNwYW1SZXBvcnRzOiBhbnkgPSBbXTtcclxuXHJcbiAgICAgIG1haWxBY3Rpdml0eS5tYXAoKG1haWw6IGFueSkgPT4ge1xyXG4gICAgICAgIE9wZW5lZC5wdXNoKG1haWwub3Blbl9jb3VudCk7XHJcbiAgICAgICAgQ2xpY2tlZC5wdXNoKG1haWwuY2xpY2tzX2NvdW50KTtcclxuXHJcbiAgICAgICAgaWYgKG1haWwuU3RhdHVzID09PSBcImRlbGl2ZXJlZFwiKSB7XHJcbiAgICAgICAgICBEZWxpdmVyZWQucHVzaChtYWlsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1haWwuU3RhdHVzID09PSBcImJvdW5jZVwiKSB7XHJcbiAgICAgICAgICBCb3VuY2VzLnB1c2gobWFpbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtYWlsLlN0YXR1cyA9PT0gXCJzcGFtcmVwb3J0XCIpIHtcclxuICAgICAgICAgIFNwYW1SZXBvcnRzLnB1c2gobWFpbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgc2V0RGVsaXZlcmVkKERlbGl2ZXJlZC5sZW5ndGgpO1xyXG4gICAgICBzZXRPcGVuZWQoT3BlbmVkLnJlZHVjZSgoYTogYW55LCBiOiBhbnkpID0+IGEgKyBiLCAwKSk7XHJcbiAgICAgIHNldENsaWNrZWQoQ2xpY2tlZC5yZWR1Y2UoKGE6IGFueSwgYjogYW55KSA9PiBhICsgYiwgMCkpO1xyXG4gICAgICBzZXRCb3VuY2VzKEJvdW5jZXMubGVuZ3RoKTtcclxuICAgICAgc2V0U3BhbVJlcG9ydHMoU3BhbVJlcG9ydHMubGVuZ3RoKTtcclxuICAgIH1cclxuICB9KTtcclxuICBpZiAoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coRGVsaXZlcmVkLCBPcGVuZWQsIENsaWNrZWQsIEJvdW5jZXMsIFNwYW1SZXBvcnRzKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHshZGF0YSA/IChcclxuICAgICAgICA8ZGl2PmxvYWRpbmcuLi48L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPEFjdGl2aXR5Q2FyZFxyXG4gICAgICAgICAgICBEZWxpdmVyZWQ9e0RlbGl2ZXJlZH1cclxuICAgICAgICAgICAgT3BlbmVkPXtPcGVuZWR9XHJcbiAgICAgICAgICAgIENsaWNrZWQ9e0NsaWNrZWR9XHJcbiAgICAgICAgICAgIEJvdW5jZXM9e0JvdW5jZXN9XHJcbiAgICAgICAgICAgIFNwYW1SZXBvcnRzPXtTcGFtUmVwb3J0c31cclxuICAgICAgICAgICAgQWN0aXZlQ291bnQ9e3N1YnNDb3VudC5kYXRhPy5BbGxzdWJzSWQuQWN0aXZlQ291bnR9XHJcbiAgICAgICAgICAgIE5vbkFjdGl2ZUNvdW50PXtzdWJzQ291bnQuZGF0YT8uQWxsc3Vic0lkLk5vbkFjdGl2ZUNvdW50fVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8QWN0aXZpdHlDaGFydFxyXG4gICAgICAgICAgICBEZWxpdmVyZWQ9e0RlbGl2ZXJlZH1cclxuICAgICAgICAgICAgT3BlbmVkPXtPcGVuZWR9XHJcbiAgICAgICAgICAgIENsaWNrZWQ9e0NsaWNrZWR9XHJcbiAgICAgICAgICAgIEJvdW5jZXM9e0JvdW5jZXN9XHJcbiAgICAgICAgICAgIFNwYW1SZXBvcnRzPXtTcGFtUmVwb3J0c31cclxuICAgICAgICAgICAgQWN0aXZlQ291bnQ9e3N1YnNDb3VudC5kYXRhPy5BbGxzdWJzSWQuQWN0aXZlQ291bnR9XHJcbiAgICAgICAgICAgIE5vbkFjdGl2ZUNvdW50PXtzdWJzQ291bnQuZGF0YT8uQWxsc3Vic0lkLk5vbkFjdGl2ZUNvdW50fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKHsgc3NyOiBmYWxzZSB9KShVc2Vyc01haWxzQWN0aXZpdGllcyk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyBTaWRlQmFyIH0gZnJvbSAnLi9TaWRlQmFyJztcclxuXHJcbmV4cG9ydCB0eXBlIFdyYXBwZXJWYXJpYW50ID0gJ3NtYWxsJyB8ICdyZWd1bGFyJztcclxuXHJcbmludGVyZmFjZSBXcmFwcGVyUHJvcHMge1xyXG4gIHZhcmlhbnQ/OiBXcmFwcGVyVmFyaWFudDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXBwZXI6IFJlYWN0LkZDPFdyYXBwZXJQcm9wcz4gPSAoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIHZhcmlhbnQgPSAncmVndWxhcicsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJveFxyXG4gICAgICAgIG14PSdhdXRvJ1xyXG4gICAgICAgIHB0PXszMH1cclxuICAgICAgICBtYXhXPXt2YXJpYW50ID09PSAncmVndWxhcicgPyAnMTAwMHB4JyA6ICc0MDBweCd9XHJcbiAgICAgICAgdz0nMTAwJSdcclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgKiBhcyBBcG9sbG8gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuZXhwb3J0IHR5cGUgTWF5YmU8VD4gPSBUIHwgbnVsbDtcbmV4cG9ydCB0eXBlIEV4YWN0PFQgZXh0ZW5kcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfT4gPSB7IFtLIGluIGtleW9mIFRdOiBUW0tdIH07XG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9ICB7fVxuLyoqIEFsbCBidWlsdC1pbiBhbmQgY3VzdG9tIHNjYWxhcnMsIG1hcHBlZCB0byB0aGVpciBhY3R1YWwgdmFsdWVzICovXG5leHBvcnQgdHlwZSBTY2FsYXJzID0ge1xuICBJRDogc3RyaW5nO1xuICBTdHJpbmc6IHN0cmluZztcbiAgQm9vbGVhbjogYm9vbGVhbjtcbiAgSW50OiBudW1iZXI7XG4gIEZsb2F0OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBRdWVyeSA9IHtcbiAgX190eXBlbmFtZT86ICdRdWVyeSc7XG4gIGFsbHVzZXI/OiBNYXliZTxBbGx1c2VyPjtcbiAgbWU/OiBNYXliZTxVc2VyPjtcbiAgcXVvdGVzOiBQYWdpbmF0ZWRRdW90ZXM7XG4gIHF1b3RlPzogTWF5YmU8UXVvdGU+O1xuICBzdWJzOiBQYWdpbmF0ZWRTdWJzO1xuICBBbGxzdWJzOiBTdWJzQ291bnQ7XG4gIEFsbHN1YnNJZDogU3Vic0NvdW50O1xuICBzdWI/OiBNYXliZTxTdWI+O1xuICBzdWJieXRva2VuPzogTWF5YmU8U3ViPjtcbiAgdGVtcD86IE1heWJlPFRlbXBsYXRlcz47XG4gIGdldEFsbHRlbXBsYXRlczogUGFnaW5hdGVkVGVtcGxhdGVzO1xuICBtYWlsQWN0aXZpdHk6IEFjdGl2aXR5UmVzcG9uZTtcbiAgbWFpbEFjdGl2aXR5QnlJZDogQWN0aXZpdHlSZXNwb25lO1xuICBQYWdpbmF0ZWRtYWlsQWN0aXZpdHlieUlkOiBQYWdpbmF0ZWRBY3Rpdml0eTtcbiAgUGFnaW5hdGVkbWFpbEFjdGl2aXR5OiBQYWdpbmF0ZWRBY3Rpdml0eTtcbn07XG5cblxuZXhwb3J0IHR5cGUgUXVlcnlRdW90ZXNBcmdzID0ge1xuICBjdXJzb3I/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGxpbWl0OiBTY2FsYXJzWydJbnQnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgUXVlcnlRdW90ZUFyZ3MgPSB7XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgUXVlcnlTdWJzQXJncyA9IHtcbiAgY3Vyc29yPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBsaW1pdDogU2NhbGFyc1snSW50J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIFF1ZXJ5QWxsc3Vic0lkQXJncyA9IHtcbiAgSWQ6IFNjYWxhcnNbJ0ludCddO1xufTtcblxuXG5leHBvcnQgdHlwZSBRdWVyeVN1YkFyZ3MgPSB7XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgUXVlcnlTdWJieXRva2VuQXJncyA9IHtcbiAgdG9rZW46IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBRdWVyeVRlbXBBcmdzID0ge1xuICBpZDogU2NhbGFyc1snSW50J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIFF1ZXJ5R2V0QWxsdGVtcGxhdGVzQXJncyA9IHtcbiAgY3Vyc29yPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBsaW1pdDogU2NhbGFyc1snSW50J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIFF1ZXJ5TWFpbEFjdGl2aXR5QnlJZEFyZ3MgPSB7XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgUXVlcnlQYWdpbmF0ZWRtYWlsQWN0aXZpdHlieUlkQXJncyA9IHtcbiAgY3Vyc29yPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBsaW1pdDogU2NhbGFyc1snSW50J107XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgUXVlcnlQYWdpbmF0ZWRtYWlsQWN0aXZpdHlBcmdzID0ge1xuICBjdXJzb3I/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGxpbWl0OiBTY2FsYXJzWydJbnQnXTtcbn07XG5cbmV4cG9ydCB0eXBlIEFsbHVzZXIgPSB7XG4gIF9fdHlwZW5hbWU/OiAnQWxsdXNlcic7XG4gIHVzZXI/OiBNYXliZTxBcnJheTxVc2VyPj47XG59O1xuXG5leHBvcnQgdHlwZSBVc2VyID0ge1xuICBfX3R5cGVuYW1lPzogJ1VzZXInO1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgcm9sZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGludml0ZUxpbms6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBlbWFpbDogU2NhbGFyc1snU3RyaW5nJ107XG4gIGN1c3RvbWVyVHlwZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGNjTGFzdDQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBjYXRhZ29yeTogU2NhbGFyc1snU3RyaW5nJ107XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBhZGRyZXNzOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgY2l0eTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHN0YXRlOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgemlwOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgY29tcGFueTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRpdGxlOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgRGVmYXVsdFRlbXBsYXRlczogU2NhbGFyc1snQm9vbGVhbiddO1xuICBsaW5rZWRJbjogU2NhbGFyc1snU3RyaW5nJ107XG4gIHR3aXR0ZXI6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBmYWNlYm9vazogU2NhbGFyc1snU3RyaW5nJ107XG4gIHdlYnNpdGU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgUGFnaW5hdGVkUXVvdGVzID0ge1xuICBfX3R5cGVuYW1lPzogJ1BhZ2luYXRlZFF1b3Rlcyc7XG4gIHF1b3RlczogQXJyYXk8UXVvdGU+O1xuICBoYXNNb3JlOiBTY2FsYXJzWydCb29sZWFuJ107XG59O1xuXG5leHBvcnQgdHlwZSBRdW90ZSA9IHtcbiAgX190eXBlbmFtZT86ICdRdW90ZSc7XG4gIGlkOiBTY2FsYXJzWydGbG9hdCddO1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgY2F0YWdvcnk6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBjcmVhdG9ySWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVzZXI6IFVzZXI7XG59O1xuXG5leHBvcnQgdHlwZSBQYWdpbmF0ZWRTdWJzID0ge1xuICBfX3R5cGVuYW1lPzogJ1BhZ2luYXRlZFN1YnMnO1xuICBzdWJzOiBBcnJheTxTdWI+O1xuICBoYXNNb3JlOiBTY2FsYXJzWydCb29sZWFuJ107XG59O1xuXG5leHBvcnQgdHlwZSBTdWIgPSB7XG4gIF9fdHlwZW5hbWU/OiAnU3ViJztcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBlbWFpbDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVuc3Vic2NyaWJlVG9rZW46IFNjYWxhcnNbJ1N0cmluZyddO1xuICBzdWJzY3JpYmVkOiBTY2FsYXJzWydCb29sZWFuJ107XG4gIGNyZWF0b3JJZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgZnJlcXVlbmN5OiBTY2FsYXJzWydGbG9hdCddO1xuICBjcmVhdG9yOiBVc2VyO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgU3Vic0NvdW50ID0ge1xuICBfX3R5cGVuYW1lPzogJ1N1YnNDb3VudCc7XG4gIEFjdGl2ZUNvdW50OiBTY2FsYXJzWydGbG9hdCddO1xuICBOb25BY3RpdmVDb3VudDogU2NhbGFyc1snRmxvYXQnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFRlbXBsYXRlcyA9IHtcbiAgX190eXBlbmFtZT86ICdUZW1wbGF0ZXMnO1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgdGl0bGU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBzdWJqZWN0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgYm9keTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGNyZWF0b3JJZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgQWN0aXZlOiBTY2FsYXJzWydCb29sZWFuJ107XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVwZGF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBQYWdpbmF0ZWRUZW1wbGF0ZXMgPSB7XG4gIF9fdHlwZW5hbWU/OiAnUGFnaW5hdGVkVGVtcGxhdGVzJztcbiAgdGVtcGxhdGVzOiBBcnJheTxUZW1wbGF0ZXM+O1xuICBoYXNNb3JlOiBTY2FsYXJzWydCb29sZWFuJ107XG59O1xuXG5leHBvcnQgdHlwZSBBY3Rpdml0eVJlc3BvbmUgPSB7XG4gIF9fdHlwZW5hbWU/OiAnQWN0aXZpdHlSZXNwb25lJztcbiAgbWFpbEFjdGl2aXR5PzogTWF5YmU8QXJyYXk8TWFpbEFjdGl2aXR5Pj47XG59O1xuXG5leHBvcnQgdHlwZSBNYWlsQWN0aXZpdHkgPSB7XG4gIF9fdHlwZW5hbWU/OiAnTWFpbEFjdGl2aXR5JztcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIEZyb21fRW1haWw/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIFRvX0VtYWlsPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBzdWJqZWN0PzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBib2R5PzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBTdGF0dXM/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIG1zZ2lkPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICB4bXNnaWQ/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGNyZWF0b3JJZD86IE1heWJlPFNjYWxhcnNbJ0Zsb2F0J10+O1xuICBzdWJzaWQ/OiBNYXliZTxTY2FsYXJzWydGbG9hdCddPjtcbiAgb3Blbl9jb3VudD86IE1heWJlPFNjYWxhcnNbJ0Zsb2F0J10+O1xuICBjbGlja3NfY291bnQ/OiBNYXliZTxTY2FsYXJzWydGbG9hdCddPjtcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdHlwZT86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgQXV0aG9yPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICB1c2VyOiBVc2VyO1xuICBzdWJzOiBTdWI7XG59O1xuXG5leHBvcnQgdHlwZSBQYWdpbmF0ZWRBY3Rpdml0eSA9IHtcbiAgX190eXBlbmFtZT86ICdQYWdpbmF0ZWRBY3Rpdml0eSc7XG4gIFBhZ2luYXRlZG1haWxBY3Rpdml0eTogQXJyYXk8TWFpbEFjdGl2aXR5PjtcbiAgaGFzTW9yZTogU2NhbGFyc1snQm9vbGVhbiddO1xufTtcblxuZXhwb3J0IHR5cGUgTXV0YXRpb24gPSB7XG4gIF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nO1xuICBjaGFuZ2VQYXNzd29yZDogVXNlclJlc3BvbnNlO1xuICB1cGRhdGVVc2VyOiBVc2VyUmVzcG9uc2U7XG4gIHVwZGF0ZUF1dGg6IFVzZXJSZXNwb25zZTtcbiAgZm9yZ290UGFzc3dvcmQ6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgcmVnaXN0ZXI6IFVzZXJSZXNwb25zZTtcbiAgbG9naW46IFVzZXJSZXNwb25zZTtcbiAgY3JlYXRlU3Vic2NyaXB0aW9uOiBVc2VyUmVzcG9uc2U7XG4gIHJlU3VicmliZVVzZXJOZXdDQzogVXNlclJlc3BvbnNlO1xuICByZVN1YnJpYmVVc2VyRXhpc3RpbmdDQzogVXNlclJlc3BvbnNlO1xuICBjaGFuZ2VDcmVkaXRDYXJkOiBVc2VyUmVzcG9uc2U7XG4gIGNhbmNlbFN1YnNjcmlwdGlvbjogVXNlclJlc3BvbnNlO1xuICBsb2dvdXQ6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgY3JlYXRlUXVvdGU6IFF1b3RlUmVzcG9uc2U7XG4gIHVwZGF0ZVF1b3RlPzogTWF5YmU8UXVvdGVSZXNwb25zZT47XG4gIGRlbGV0ZVF1b3RlOiBTY2FsYXJzWydCb29sZWFuJ107XG4gIGNyZWF0ZVN1YjogU3ViUmVzcG9uc2U7XG4gIGNyZWF0ZVN1YkZyb21Db250YWN0OiBTdWJSZXNwb25zZTtcbiAgY3JlYXRlU3ViRnJvbUludml0ZTogU3ViUmVzcG9uc2U7XG4gIGFjY2VwdEludml0ZTogU3ViUmVzcG9uc2U7XG4gIHVwZGF0ZVN1YjogU3ViUmVzcG9uc2U7XG4gIHVwZGF0ZU1haWxhbmRGcmVxdWVuY3k6IFN1YlJlc3BvbnNlO1xuICBjcmVhdGVTdWJzZnJ3ZHBhZ2U6IFN1YlJlc3BvbnNlO1xuICB1bnN1YnNjcmliZVN1YjogU3ViUmVzcG9uc2U7XG4gIGRlbGV0ZVN1YjogU2NhbGFyc1snQm9vbGVhbiddO1xuICBjcmVhdGVUZW1wbGF0ZXM6IFRlbXBsYXRlUmVzcG9uZXM7XG4gIHVwZGF0ZVRlbXBsYXRlczogVGVtcGxhdGVSZXNwb25lcztcbiAgZGVsZXRlVGVtcGxhdGU6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25DaGFuZ2VQYXNzd29yZEFyZ3MgPSB7XG4gIG5ld1Bhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdG9rZW46IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvblVwZGF0ZVVzZXJBcmdzID0ge1xuICBpbnB1dDogVXNlcklucHV0O1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvblVwZGF0ZUF1dGhBcmdzID0ge1xuICBpbnB1dDogVXNlckF1dGhJbnB1dDtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25Gb3Jnb3RQYXNzd29yZEFyZ3MgPSB7XG4gIGVtYWlsOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25SZWdpc3RlckFyZ3MgPSB7XG4gIG9wdGlvbnM6IFVzZXJuYW1lUGFzc3dvcmRJbnB1dDtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25Mb2dpbkFyZ3MgPSB7XG4gIHBhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgZW1haWw6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkNyZWF0ZVN1YnNjcmlwdGlvbkFyZ3MgPSB7XG4gIGNjTGFzdDQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBzb3VyY2U6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvblJlU3VicmliZVVzZXJOZXdDY0FyZ3MgPSB7XG4gIGNjTGFzdDQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBzb3VyY2U6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkNoYW5nZUNyZWRpdENhcmRBcmdzID0ge1xuICBjY0xhc3Q0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgc291cmNlOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25DcmVhdGVRdW90ZUFyZ3MgPSB7XG4gIGlucHV0OiBRdW90ZUlucHV0O1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvblVwZGF0ZVF1b3RlQXJncyA9IHtcbiAgY2F0YWdvcnk6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkRlbGV0ZVF1b3RlQXJncyA9IHtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkNyZWF0ZVN1YkFyZ3MgPSB7XG4gIGlucHV0OiBTdWJJbnB1dDtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25DcmVhdGVTdWJGcm9tQ29udGFjdEFyZ3MgPSB7XG4gIGVtYWlsczogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRva2VuOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25DcmVhdGVTdWJGcm9tSW52aXRlQXJncyA9IHtcbiAgaW5wdXQ6IFN1Ykludml0ZUlucHV0O1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkFjY2VwdEludml0ZUFyZ3MgPSB7XG4gIGZyZXF1ZW5jeTogU2NhbGFyc1snRmxvYXQnXTtcbiAgc3Vic2NyaWJlZDogU2NhbGFyc1snQm9vbGVhbiddO1xuICB0b2tlbjogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uVXBkYXRlU3ViQXJncyA9IHtcbiAgc3Vic2NyaWJlZDogU2NhbGFyc1snQm9vbGVhbiddO1xuICBlbWFpbDogU2NhbGFyc1snU3RyaW5nJ107XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBpZDogU2NhbGFyc1snSW50J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uVXBkYXRlTWFpbGFuZEZyZXF1ZW5jeUFyZ3MgPSB7XG4gIGVtYWlsOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgZnJlcXVlbmN5OiBTY2FsYXJzWydGbG9hdCddO1xuICB0b2tlbjogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uQ3JlYXRlU3Vic2Zyd2RwYWdlQXJncyA9IHtcbiAgZnJlcXVlbmN5OiBTY2FsYXJzWydGbG9hdCddO1xuICBlbWFpbDogU2NhbGFyc1snU3RyaW5nJ107XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0b2tlbjogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uVW5zdWJzY3JpYmVTdWJBcmdzID0ge1xuICB0b2tlbjogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uRGVsZXRlU3ViQXJncyA9IHtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkNyZWF0ZVRlbXBsYXRlc0FyZ3MgPSB7XG4gIGlucHV0OiBUZW1wbGF0ZUlucHV0O1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvblVwZGF0ZVRlbXBsYXRlc0FyZ3MgPSB7XG4gIEFjdGl2ZTogU2NhbGFyc1snQm9vbGVhbiddO1xuICBzdWJqZWN0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgYm9keTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRpdGxlOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkRlbGV0ZVRlbXBsYXRlQXJncyA9IHtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xufTtcblxuZXhwb3J0IHR5cGUgVXNlclJlc3BvbnNlID0ge1xuICBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZSc7XG4gIGVycm9ycz86IE1heWJlPEFycmF5PEZpZWxkRXJyb3I+PjtcbiAgdXNlcj86IE1heWJlPFVzZXI+O1xufTtcblxuZXhwb3J0IHR5cGUgRmllbGRFcnJvciA9IHtcbiAgX190eXBlbmFtZT86ICdGaWVsZEVycm9yJztcbiAgZmllbGQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBtZXNzYWdlOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXJJbnB1dCA9IHtcbiAgbmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGFkZHJlc3M6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBjaXR5OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgc3RhdGU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB6aXA6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBjYXRhZ29yeTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRpdGxlOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgY29tcGFueTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHR3aXR0ZXI6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBmYWNlYm9vazogU2NhbGFyc1snU3RyaW5nJ107XG4gIGxpbmtlZEluOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgd2Vic2l0ZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIERlZmF1bHRUZW1wbGF0ZXM6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXJBdXRoSW5wdXQgPSB7XG4gIGVtYWlsPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBwYXNzd29yZD86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgY29uZmlybT86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXJuYW1lUGFzc3dvcmRJbnB1dCA9IHtcbiAgZW1haWw6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBRdW90ZVJlc3BvbnNlID0ge1xuICBfX3R5cGVuYW1lPzogJ1F1b3RlUmVzcG9uc2UnO1xuICBlcnJvcnM/OiBNYXliZTxBcnJheTxGaWVsZEVycm9yPj47XG4gIHF1b3RlPzogTWF5YmU8UXVvdGU+O1xufTtcblxuZXhwb3J0IHR5cGUgUXVvdGVJbnB1dCA9IHtcbiAgbmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGNhdGFnb3J5OiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFN1YlJlc3BvbnNlID0ge1xuICBfX3R5cGVuYW1lPzogJ1N1YlJlc3BvbnNlJztcbiAgZXJyb3JzPzogTWF5YmU8QXJyYXk8RmllbGRFcnJvcj4+O1xuICBzdWI/OiBNYXliZTxTdWI+O1xufTtcblxuZXhwb3J0IHR5cGUgU3ViSW5wdXQgPSB7XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBlbWFpbDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBTdWJJbnZpdGVJbnB1dCA9IHtcbiAgbmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGVtYWlsOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgZnJlcXVlbmN5OiBTY2FsYXJzWydGbG9hdCddO1xuICB0b2tlbjogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBUZW1wbGF0ZVJlc3BvbmVzID0ge1xuICBfX3R5cGVuYW1lPzogJ1RlbXBsYXRlUmVzcG9uZXMnO1xuICBlcnJvcnM/OiBNYXliZTxBcnJheTxGaWVsZEVycm9yPj47XG4gIHRlbXBsYXRlPzogTWF5YmU8VGVtcGxhdGVzPjtcbn07XG5cbmV4cG9ydCB0eXBlIFRlbXBsYXRlSW5wdXQgPSB7XG4gIGJvZHk6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBzdWJqZWN0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdGl0bGU6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgQWN0aXZpdHlTbmlwcGV0RnJhZ21lbnQgPSAoXG4gIHsgX190eXBlbmFtZT86ICdBY3Rpdml0eVJlc3BvbmUnIH1cbiAgJiB7IG1haWxBY3Rpdml0eT86IE1heWJlPEFycmF5PChcbiAgICB7IF9fdHlwZW5hbWU/OiAnTWFpbEFjdGl2aXR5JyB9XG4gICAgJiBSZWd1bGFyTWFpbFJlc3BvbmVzRnJhZ21lbnRcbiAgKT4+IH1cbik7XG5cbmV4cG9ydCB0eXBlIEFsbHN1YlNuaXBwZXRGcmFnbWVudCA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1N1YnNDb3VudCcgfVxuICAmIFBpY2s8U3Vic0NvdW50LCAnQWN0aXZlQ291bnQnIHwgJ05vbkFjdGl2ZUNvdW50Jz5cbik7XG5cbmV4cG9ydCB0eXBlIFBhZ2luYXRlZEFjdGl2aXR5U25pcHBldEZyYWdtZW50ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTWFpbEFjdGl2aXR5JyB9XG4gICYgUGljazxNYWlsQWN0aXZpdHksICdpZCcgfCAnRnJvbV9FbWFpbCcgfCAnVG9fRW1haWwnIHwgJ3N1YmplY3QnIHwgJ1N0YXR1cycgfCAnbXNnaWQnIHwgJ29wZW5fY291bnQnIHwgJ2NsaWNrc19jb3VudCcgfCAnY3JlYXRlZEF0JyB8ICdib2R5JyB8ICdjcmVhdG9ySWQnIHwgJ0F1dGhvcicgfCAndHlwZScgfCAnc3Vic2lkJz5cbiAgJiB7IHVzZXI6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlcicgfVxuICAgICYgUGljazxVc2VyLCAnaWQnIHwgJ25hbWUnPlxuICApLCBzdWJzOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1N1YicgfVxuICAgICYgUGljazxTdWIsICdpZCcgfCAnbmFtZSc+XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgUHJvZmlsZVVzZXJGcmFnbWVudCA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgJiBQaWNrPFVzZXIsICdpZCcgfCAnaW52aXRlTGluaycgfCAnbmFtZScgfCAnZW1haWwnIHwgJ2FkZHJlc3MnIHwgJ2NpdHknIHwgJ3N0YXRlJyB8ICd6aXAnIHwgJ3JvbGUnIHwgJ2NhdGFnb3J5JyB8ICd0aXRsZScgfCAnY29tcGFueScgfCAndHdpdHRlcicgfCAnZmFjZWJvb2snIHwgJ2xpbmtlZEluJyB8ICd3ZWJzaXRlJyB8ICdjdXN0b21lclR5cGUnIHwgJ2NjTGFzdDQnIHwgJ0RlZmF1bHRUZW1wbGF0ZXMnPlxuKTtcblxuZXhwb3J0IHR5cGUgUHJvZmlsZVVzZXJSZXNwb25zZUZyYWdtZW50ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJyB9XG4gICYgeyBlcnJvcnM/OiBNYXliZTxBcnJheTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InIH1cbiAgICAmIFJlZ3VsYXJFcnJvckZyYWdtZW50XG4gICk+PiwgdXNlcj86IE1heWJlPChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlcicgfVxuICAgICYgUHJvZmlsZVVzZXJGcmFnbWVudFxuICApPiB9XG4pO1xuXG5leHBvcnQgdHlwZSBRdW90ZVNuaXBwZXRGcmFnbWVudCA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1b3RlJyB9XG4gICYgUGljazxRdW90ZSwgJ2lkJyB8ICduYW1lJyB8ICdjcmVhdGVkQXQnIHwgJ2NhdGFnb3J5Jz5cbiAgJiB7IHVzZXI6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlcicgfVxuICAgICYgUGljazxVc2VyLCAnaWQnIHwgJ2VtYWlsJz5cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBSZWd1bGFyRXJyb3JGcmFnbWVudCA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InIH1cbiAgJiBQaWNrPEZpZWxkRXJyb3IsICdmaWVsZCcgfCAnbWVzc2FnZSc+XG4pO1xuXG5leHBvcnQgdHlwZSBSZWd1bGFyTWFpbFJlc3BvbmVzRnJhZ21lbnQgPSAoXG4gIHsgX190eXBlbmFtZT86ICdNYWlsQWN0aXZpdHknIH1cbiAgJiBQaWNrPE1haWxBY3Rpdml0eSwgJ2lkJyB8ICdGcm9tX0VtYWlsJyB8ICdUb19FbWFpbCcgfCAnc3ViamVjdCcgfCAnU3RhdHVzJyB8ICdvcGVuX2NvdW50JyB8ICdjbGlja3NfY291bnQnIHwgJ21zZ2lkJyB8ICd0eXBlJz5cbik7XG5cbmV4cG9ydCB0eXBlIFJlZ3VsYXJRdW90ZUZyYWdtZW50ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVvdGUnIH1cbiAgJiBQaWNrPFF1b3RlLCAnaWQnPlxuKTtcblxuZXhwb3J0IHR5cGUgUmVndWxhclN1YkZyYWdtZW50ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnU3ViJyB9XG4gICYgUGljazxTdWIsICdpZCc+XG4pO1xuXG5leHBvcnQgdHlwZSBSZWd1bGFyVGVtcGxhdGVSZXNwb25zZUZyYWdtZW50ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnVGVtcGxhdGVSZXNwb25lcycgfVxuICAmIHsgZXJyb3JzPzogTWF5YmU8QXJyYXk8KFxuICAgIHsgX190eXBlbmFtZT86ICdGaWVsZEVycm9yJyB9XG4gICAgJiBSZWd1bGFyRXJyb3JGcmFnbWVudFxuICApPj4sIHRlbXBsYXRlPzogTWF5YmU8KFxuICAgIHsgX190eXBlbmFtZT86ICdUZW1wbGF0ZXMnIH1cbiAgICAmIFJlZ3VsYXJUZW1wbGF0ZXNGcmFnbWVudFxuICApPiB9XG4pO1xuXG5leHBvcnQgdHlwZSBSZWd1bGFyVGVtcGxhdGVzRnJhZ21lbnQgPSAoXG4gIHsgX190eXBlbmFtZT86ICdUZW1wbGF0ZXMnIH1cbiAgJiBQaWNrPFRlbXBsYXRlcywgJ2lkJz5cbik7XG5cbmV4cG9ydCB0eXBlIFJlZ3VsYXJVc2VyRnJhZ21lbnQgPSAoXG4gIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICYgUGljazxVc2VyLCAnaWQnIHwgJ2VtYWlsJyB8ICdpbnZpdGVMaW5rJyB8ICdyb2xlJz5cbik7XG5cbmV4cG9ydCB0eXBlIFJlZ3VsYXJRdW90ZVJlc3BvbnNlRnJhZ21lbnQgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdW90ZVJlc3BvbnNlJyB9XG4gICYgeyBlcnJvcnM/OiBNYXliZTxBcnJheTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InIH1cbiAgICAmIFJlZ3VsYXJFcnJvckZyYWdtZW50XG4gICk+PiwgcXVvdGU/OiBNYXliZTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1F1b3RlJyB9XG4gICAgJiBSZWd1bGFyUXVvdGVGcmFnbWVudFxuICApPiB9XG4pO1xuXG5leHBvcnQgdHlwZSBSZWd1bGFyU3ViUmVzcG9uc2VGcmFnbWVudCA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1N1YlJlc3BvbnNlJyB9XG4gICYgeyBlcnJvcnM/OiBNYXliZTxBcnJheTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InIH1cbiAgICAmIFJlZ3VsYXJFcnJvckZyYWdtZW50XG4gICk+Piwgc3ViPzogTWF5YmU8KFxuICAgIHsgX190eXBlbmFtZT86ICdTdWInIH1cbiAgICAmIFJlZ3VsYXJTdWJGcmFnbWVudFxuICApPiB9XG4pO1xuXG5leHBvcnQgdHlwZSBSZWd1bGFyVXNlclJlc3BvbnNlRnJhZ21lbnQgPSAoXG4gIHsgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnIH1cbiAgJiB7IGVycm9ycz86IE1heWJlPEFycmF5PChcbiAgICB7IF9fdHlwZW5hbWU/OiAnRmllbGRFcnJvcicgfVxuICAgICYgUmVndWxhckVycm9yRnJhZ21lbnRcbiAgKT4+LCB1c2VyPzogTWF5YmU8KFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgJiBSZWd1bGFyVXNlckZyYWdtZW50XG4gICk+IH1cbik7XG5cbmV4cG9ydCB0eXBlIFN1YlNuaXBwZXRGcmFnbWVudCA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1N1YicgfVxuICAmIFBpY2s8U3ViLCAnaWQnIHwgJ2NyZWF0ZWRBdCcgfCAndXBkYXRlZEF0JyB8ICduYW1lJyB8ICdlbWFpbCcgfCAnc3Vic2NyaWJlZCcgfCAnZnJlcXVlbmN5Jz5cbiAgJiB7IGNyZWF0b3I6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlcicgfVxuICAgICYgUGljazxVc2VyLCAnaWQnIHwgJ2VtYWlsJz5cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBUZW1wbGF0ZXNTbmlwcGV0RnJhZ21lbnQgPSAoXG4gIHsgX190eXBlbmFtZT86ICdUZW1wbGF0ZXMnIH1cbiAgJiBQaWNrPFRlbXBsYXRlcywgJ2lkJyB8ICd0aXRsZScgfCAnYm9keScgfCAnc3ViamVjdCcgfCAnQWN0aXZlJyB8ICdjcmVhdGVkQXQnPlxuKTtcblxuZXhwb3J0IHR5cGUgQWxsdXNlclNuaXBwZXRGcmFnbWVudCA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ0FsbHVzZXInIH1cbiAgJiB7IHVzZXI/OiBNYXliZTxBcnJheTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAmIFBpY2s8VXNlciwgJ2lkJyB8ICduYW1lJz5cbiAgKT4+IH1cbik7XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZVRlbXBsYXRlc011dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICBpZDogU2NhbGFyc1snSW50J107XG4gIHRpdGxlOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgYm9keTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHN1YmplY3Q6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBBY3RpdmU6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFVwZGF0ZVRlbXBsYXRlc011dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IHVwZGF0ZVRlbXBsYXRlczogKFxuICAgIHsgX190eXBlbmFtZT86ICdUZW1wbGF0ZVJlc3BvbmVzJyB9XG4gICAgJiBSZWd1bGFyVGVtcGxhdGVSZXNwb25zZUZyYWdtZW50XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgQWNjZXB0SW52aXRlTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHRva2VuOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgc3Vic2NyaWJlZDogU2NhbGFyc1snQm9vbGVhbiddO1xuICBmcmVxdWVuY3k6IFNjYWxhcnNbJ0Zsb2F0J107XG59PjtcblxuXG5leHBvcnQgdHlwZSBBY2NlcHRJbnZpdGVNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyBhY2NlcHRJbnZpdGU6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnU3ViUmVzcG9uc2UnIH1cbiAgICAmIFJlZ3VsYXJTdWJSZXNwb25zZUZyYWdtZW50XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgQ2FuY2VsU3Vic2NyaXB0aW9uTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBDYW5jZWxTdWJzY3JpcHRpb25NdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyBjYW5jZWxTdWJzY3JpcHRpb246IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJyB9XG4gICAgJiBQcm9maWxlVXNlclJlc3BvbnNlRnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBDaGFuZ2VDcmVkaXRDYXJkTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHNvdXJjZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGNjTGFzdDQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgQ2hhbmdlQ3JlZGl0Q2FyZE11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IGNoYW5nZUNyZWRpdENhcmQ6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJyB9XG4gICAgJiBQcm9maWxlVXNlclJlc3BvbnNlRnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBDaGFuZ2VQYXNzd29yZE11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB0b2tlbjogU2NhbGFyc1snU3RyaW5nJ107XG4gIG5ld1Bhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIENoYW5nZVBhc3N3b3JkTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgY2hhbmdlUGFzc3dvcmQ6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJyB9XG4gICAgJiBSZWd1bGFyVXNlclJlc3BvbnNlRnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBVcGRhdGVNYWlsYW5kRnJlcXVlbmN5TXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHRva2VuOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgZnJlcXVlbmN5OiBTY2FsYXJzWydGbG9hdCddO1xuICBlbWFpbDogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBVcGRhdGVNYWlsYW5kRnJlcXVlbmN5TXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgdXBkYXRlTWFpbGFuZEZyZXF1ZW5jeTogKFxuICAgIHsgX190eXBlbmFtZT86ICdTdWJSZXNwb25zZScgfVxuICAgICYgUmVndWxhclN1YlJlc3BvbnNlRnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBDcmVhdGVRdW90ZU11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICBpbnB1dDogUXVvdGVJbnB1dDtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIENyZWF0ZVF1b3RlTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgY3JlYXRlUXVvdGU6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnUXVvdGVSZXNwb25zZScgfVxuICAgICYgUmVndWxhclF1b3RlUmVzcG9uc2VGcmFnbWVudFxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIENyZWF0ZVN1Yk11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICBpbnB1dDogU3ViSW5wdXQ7XG59PjtcblxuXG5leHBvcnQgdHlwZSBDcmVhdGVTdWJNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyBjcmVhdGVTdWI6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnU3ViUmVzcG9uc2UnIH1cbiAgICAmIFJlZ3VsYXJTdWJSZXNwb25zZUZyYWdtZW50XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgQ3JlYXRlU3ViRnJvbUNvbnRhY3RNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgdG9rZW46IFNjYWxhcnNbJ1N0cmluZyddO1xuICBlbWFpbHM6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgQ3JlYXRlU3ViRnJvbUNvbnRhY3RNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyBjcmVhdGVTdWJGcm9tQ29udGFjdDogKFxuICAgIHsgX190eXBlbmFtZT86ICdTdWJSZXNwb25zZScgfVxuICAgICYgUmVndWxhclN1YlJlc3BvbnNlRnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBDcmVhdGVTdWJGcm9tSW52aXRlTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGlucHV0OiBTdWJJbnZpdGVJbnB1dDtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIENyZWF0ZVN1YkZyb21JbnZpdGVNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyBjcmVhdGVTdWJGcm9tSW52aXRlOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1N1YlJlc3BvbnNlJyB9XG4gICAgJiBSZWd1bGFyU3ViUmVzcG9uc2VGcmFnbWVudFxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIENyZWF0ZVN1YnNjcmlwdGlvbk11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICBzb3VyY2U6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBjY0xhc3Q0OiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIENyZWF0ZVN1YnNjcmlwdGlvbk11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IGNyZWF0ZVN1YnNjcmlwdGlvbjogKFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnIH1cbiAgICAmIFByb2ZpbGVVc2VyUmVzcG9uc2VGcmFnbWVudFxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIENyZWF0ZVN1YnNmcndkcGFnZU11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB0b2tlbjogU2NhbGFyc1snU3RyaW5nJ107XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBmcmVxdWVuY3k6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGVtYWlsOiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIENyZWF0ZVN1YnNmcndkcGFnZU11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IGNyZWF0ZVN1YnNmcndkcGFnZTogKFxuICAgIHsgX190eXBlbmFtZT86ICdTdWJSZXNwb25zZScgfVxuICAgICYgUmVndWxhclN1YlJlc3BvbnNlRnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBEZWxldGVRdW90ZU11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICBpZDogU2NhbGFyc1snSW50J107XG59PjtcblxuXG5leHBvcnQgdHlwZSBEZWxldGVRdW90ZU11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiBQaWNrPE11dGF0aW9uLCAnZGVsZXRlUXVvdGUnPlxuKTtcblxuZXhwb3J0IHR5cGUgRGVsZXRlU3ViTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIERlbGV0ZVN1Yk11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiBQaWNrPE11dGF0aW9uLCAnZGVsZXRlU3ViJz5cbik7XG5cbmV4cG9ydCB0eXBlIERlbGV0ZVRlbXBsYXRlTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIERlbGV0ZVRlbXBsYXRlTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIFBpY2s8TXV0YXRpb24sICdkZWxldGVUZW1wbGF0ZSc+XG4pO1xuXG5leHBvcnQgdHlwZSBGb3Jnb3RQYXNzd29yZE11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICBlbWFpbDogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBGb3Jnb3RQYXNzd29yZE11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiBQaWNrPE11dGF0aW9uLCAnZm9yZ290UGFzc3dvcmQnPlxuKTtcblxuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgZW1haWw6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IGxvZ2luOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZScgfVxuICAgICYgUmVndWxhclVzZXJSZXNwb25zZUZyYWdtZW50XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgUGljazxNdXRhdGlvbiwgJ2xvZ291dCc+XG4pO1xuXG5leHBvcnQgdHlwZSBSZVN1YnJpYmVVc2VyRXhpc3RpbmdDY011dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8eyBba2V5OiBzdHJpbmddOiBuZXZlcjsgfT47XG5cblxuZXhwb3J0IHR5cGUgUmVTdWJyaWJlVXNlckV4aXN0aW5nQ2NNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyByZVN1YnJpYmVVc2VyRXhpc3RpbmdDQzogKFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnIH1cbiAgICAmIFByb2ZpbGVVc2VyUmVzcG9uc2VGcmFnbWVudFxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIFJlU3VicmliZVVzZXJOZXdDY011dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICBzb3VyY2U6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBjY0xhc3Q0OiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFJlU3VicmliZVVzZXJOZXdDY011dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IHJlU3VicmliZVVzZXJOZXdDQzogKFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnIH1cbiAgICAmIFByb2ZpbGVVc2VyUmVzcG9uc2VGcmFnbWVudFxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIG9wdGlvbnM6IFVzZXJuYW1lUGFzc3dvcmRJbnB1dDtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgcmVnaXN0ZXI6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJyB9XG4gICAgJiBSZWd1bGFyVXNlclJlc3BvbnNlRnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBDcmVhdGVUZW1wbGF0ZXNNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgaW5wdXQ6IFRlbXBsYXRlSW5wdXQ7XG59PjtcblxuXG5leHBvcnQgdHlwZSBDcmVhdGVUZW1wbGF0ZXNNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyBjcmVhdGVUZW1wbGF0ZXM6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVGVtcGxhdGVSZXNwb25lcycgfVxuICAgICYgUmVndWxhclRlbXBsYXRlUmVzcG9uc2VGcmFnbWVudFxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIFVuc3Vic2NyaWJlU3ViTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHRva2VuOiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFVuc3Vic2NyaWJlU3ViTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgdW5zdWJzY3JpYmVTdWI6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnU3ViUmVzcG9uc2UnIH1cbiAgICAmIFJlZ3VsYXJTdWJSZXNwb25zZUZyYWdtZW50XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgVXBkYXRlUXVvdGVNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgY2F0YWdvcnk6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgVXBkYXRlUXVvdGVNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyB1cGRhdGVRdW90ZT86IE1heWJlPChcbiAgICB7IF9fdHlwZW5hbWU/OiAnUXVvdGVSZXNwb25zZScgfVxuICAgICYgUmVndWxhclF1b3RlUmVzcG9uc2VGcmFnbWVudFxuICApPiB9XG4pO1xuXG5leHBvcnQgdHlwZSBVcGRhdGVTdWJNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgZW1haWw6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBzdWJzY3JpYmVkOiBTY2FsYXJzWydCb29sZWFuJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBVcGRhdGVTdWJNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyB1cGRhdGVTdWI6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnU3ViUmVzcG9uc2UnIH1cbiAgICAmIFJlZ3VsYXJTdWJSZXNwb25zZUZyYWdtZW50XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgVXBkYXRlVXNlck11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICBpbnB1dDogVXNlcklucHV0O1xufT47XG5cblxuZXhwb3J0IHR5cGUgVXBkYXRlVXNlck11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IHVwZGF0ZVVzZXI6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJyB9XG4gICAgJiBQcm9maWxlVXNlclJlc3BvbnNlRnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBVcGRhdGVVc2VyQXV0aE11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICBpbnB1dDogVXNlckF1dGhJbnB1dDtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFVwZGF0ZVVzZXJBdXRoTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgdXBkYXRlQXV0aDogKFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnIH1cbiAgICAmIFJlZ3VsYXJVc2VyUmVzcG9uc2VGcmFnbWVudFxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIEFsbHN1YnNRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIEFsbHN1YnNRdWVyeSA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JyB9XG4gICYgeyBBbGxzdWJzOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1N1YnNDb3VudCcgfVxuICAgICYgQWxsc3ViU25pcHBldEZyYWdtZW50XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgQWxsc3Vic0lkUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7XG4gIElkOiBTY2FsYXJzWydJbnQnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIEFsbHN1YnNJZFF1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IEFsbHN1YnNJZDogKFxuICAgIHsgX190eXBlbmFtZT86ICdTdWJzQ291bnQnIH1cbiAgICAmIEFsbHN1YlNuaXBwZXRGcmFnbWVudFxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIE1haWxBY3Rpdml0eUJ5SWRRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgTWFpbEFjdGl2aXR5QnlJZFF1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IG1haWxBY3Rpdml0eUJ5SWQ6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnQWN0aXZpdHlSZXNwb25lJyB9XG4gICAgJiBBY3Rpdml0eVNuaXBwZXRGcmFnbWVudFxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIFBhZ2luYXRlZEFjdGl2aXR5UXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGxpbWl0OiBTY2FsYXJzWydJbnQnXTtcbiAgY3Vyc29yPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xufT47XG5cblxuZXhwb3J0IHR5cGUgUGFnaW5hdGVkQWN0aXZpdHlRdWVyeSA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JyB9XG4gICYgeyBQYWdpbmF0ZWRtYWlsQWN0aXZpdHk6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnUGFnaW5hdGVkQWN0aXZpdHknIH1cbiAgICAmIFBpY2s8UGFnaW5hdGVkQWN0aXZpdHksICdoYXNNb3JlJz5cbiAgICAmIHsgUGFnaW5hdGVkbWFpbEFjdGl2aXR5OiBBcnJheTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnTWFpbEFjdGl2aXR5JyB9XG4gICAgICAmIFBhZ2luYXRlZEFjdGl2aXR5U25pcHBldEZyYWdtZW50XG4gICAgKT4gfVxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIE1haWxBY3Rpdml0eWJ5SWRRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgbGltaXQ6IFNjYWxhcnNbJ0ludCddO1xuICBjdXJzb3I/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIE1haWxBY3Rpdml0eWJ5SWRRdWVyeSA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JyB9XG4gICYgeyBQYWdpbmF0ZWRtYWlsQWN0aXZpdHlieUlkOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1BhZ2luYXRlZEFjdGl2aXR5JyB9XG4gICAgJiBQaWNrPFBhZ2luYXRlZEFjdGl2aXR5LCAnaGFzTW9yZSc+XG4gICAgJiB7IFBhZ2luYXRlZG1haWxBY3Rpdml0eTogQXJyYXk8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ01haWxBY3Rpdml0eScgfVxuICAgICAgJiBQYWdpbmF0ZWRBY3Rpdml0eVNuaXBwZXRGcmFnbWVudFxuICAgICk+IH1cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBRdW90ZXNRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgbGltaXQ6IFNjYWxhcnNbJ0ludCddO1xuICBjdXJzb3I/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG59PjtcblxuXG5leHBvcnQgdHlwZSBRdW90ZXNRdWVyeSA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JyB9XG4gICYgeyBxdW90ZXM6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnUGFnaW5hdGVkUXVvdGVzJyB9XG4gICAgJiBQaWNrPFBhZ2luYXRlZFF1b3RlcywgJ2hhc01vcmUnPlxuICAgICYgeyBxdW90ZXM6IEFycmF5PChcbiAgICAgIHsgX190eXBlbmFtZT86ICdRdW90ZScgfVxuICAgICAgJiBRdW90ZVNuaXBwZXRGcmFnbWVudFxuICAgICk+IH1cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBTdWJzUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGxpbWl0OiBTY2FsYXJzWydJbnQnXTtcbiAgY3Vyc29yPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xufT47XG5cblxuZXhwb3J0IHR5cGUgU3Vic1F1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IHN1YnM6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnUGFnaW5hdGVkU3VicycgfVxuICAgICYgUGljazxQYWdpbmF0ZWRTdWJzLCAnaGFzTW9yZSc+XG4gICAgJiB7IHN1YnM6IEFycmF5PChcbiAgICAgIHsgX190eXBlbmFtZT86ICdTdWInIH1cbiAgICAgICYgU3ViU25pcHBldEZyYWdtZW50XG4gICAgKT4gfVxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIEFsbHVzZXJRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIEFsbHVzZXJRdWVyeSA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JyB9XG4gICYgeyBhbGx1c2VyPzogTWF5YmU8KFxuICAgIHsgX190eXBlbmFtZT86ICdBbGx1c2VyJyB9XG4gICAgJiBBbGx1c2VyU25pcHBldEZyYWdtZW50XG4gICk+IH1cbik7XG5cbmV4cG9ydCB0eXBlIE1haWxBY3Rpdml0eVF1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8eyBba2V5OiBzdHJpbmddOiBuZXZlcjsgfT47XG5cblxuZXhwb3J0IHR5cGUgTWFpbEFjdGl2aXR5UXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgbWFpbEFjdGl2aXR5OiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ0FjdGl2aXR5UmVzcG9uZScgfVxuICAgICYgQWN0aXZpdHlTbmlwcGV0RnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBNZVF1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8eyBba2V5OiBzdHJpbmddOiBuZXZlcjsgfT47XG5cblxuZXhwb3J0IHR5cGUgTWVRdWVyeSA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JyB9XG4gICYgeyBtZT86IE1heWJlPChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlcicgfVxuICAgICYgUmVndWxhclVzZXJGcmFnbWVudFxuICApPiB9XG4pO1xuXG5leHBvcnQgdHlwZSBQcm9maWxlUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBQcm9maWxlUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgbWU/OiBNYXliZTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAmIFByb2ZpbGVVc2VyRnJhZ21lbnRcbiAgKT4gfVxuKTtcblxuZXhwb3J0IHR5cGUgU3ViYnl0b2tlblF1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8e1xuICB0b2tlbjogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBTdWJieXRva2VuUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgc3ViYnl0b2tlbj86IE1heWJlPChcbiAgICB7IF9fdHlwZW5hbWU/OiAnU3ViJyB9XG4gICAgJiBTdWJTbmlwcGV0RnJhZ21lbnRcbiAgKT4gfVxuKTtcblxuZXhwb3J0IHR5cGUgR2V0QWxsdGVtcGxhdGVzUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGxpbWl0OiBTY2FsYXJzWydJbnQnXTtcbiAgY3Vyc29yPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xufT47XG5cblxuZXhwb3J0IHR5cGUgR2V0QWxsdGVtcGxhdGVzUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgZ2V0QWxsdGVtcGxhdGVzOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1BhZ2luYXRlZFRlbXBsYXRlcycgfVxuICAgICYgUGljazxQYWdpbmF0ZWRUZW1wbGF0ZXMsICdoYXNNb3JlJz5cbiAgICAmIHsgdGVtcGxhdGVzOiBBcnJheTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnVGVtcGxhdGVzJyB9XG4gICAgICAmIFRlbXBsYXRlc1NuaXBwZXRGcmFnbWVudFxuICAgICk+IH1cbiAgKSB9XG4pO1xuXG5leHBvcnQgY29uc3QgUmVndWxhck1haWxSZXNwb25lc0ZyYWdtZW50RG9jID0gZ3FsYFxuICAgIGZyYWdtZW50IFJlZ3VsYXJNYWlsUmVzcG9uZXMgb24gTWFpbEFjdGl2aXR5IHtcbiAgaWRcbiAgRnJvbV9FbWFpbFxuICBUb19FbWFpbFxuICBzdWJqZWN0XG4gIFN0YXR1c1xuICBvcGVuX2NvdW50XG4gIGNsaWNrc19jb3VudFxuICBtc2dpZFxuICB0eXBlXG59XG4gICAgYDtcbmV4cG9ydCBjb25zdCBBY3Rpdml0eVNuaXBwZXRGcmFnbWVudERvYyA9IGdxbGBcbiAgICBmcmFnbWVudCBBY3Rpdml0eVNuaXBwZXQgb24gQWN0aXZpdHlSZXNwb25lIHtcbiAgbWFpbEFjdGl2aXR5IHtcbiAgICAuLi5SZWd1bGFyTWFpbFJlc3BvbmVzXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJNYWlsUmVzcG9uZXNGcmFnbWVudERvY31gO1xuZXhwb3J0IGNvbnN0IEFsbHN1YlNuaXBwZXRGcmFnbWVudERvYyA9IGdxbGBcbiAgICBmcmFnbWVudCBBbGxzdWJTbmlwcGV0IG9uIFN1YnNDb3VudCB7XG4gIEFjdGl2ZUNvdW50XG4gIE5vbkFjdGl2ZUNvdW50XG59XG4gICAgYDtcbmV4cG9ydCBjb25zdCBQYWdpbmF0ZWRBY3Rpdml0eVNuaXBwZXRGcmFnbWVudERvYyA9IGdxbGBcbiAgICBmcmFnbWVudCBQYWdpbmF0ZWRBY3Rpdml0eVNuaXBwZXQgb24gTWFpbEFjdGl2aXR5IHtcbiAgaWRcbiAgRnJvbV9FbWFpbFxuICBUb19FbWFpbFxuICBzdWJqZWN0XG4gIFN0YXR1c1xuICBtc2dpZFxuICBvcGVuX2NvdW50XG4gIGNsaWNrc19jb3VudFxuICBjcmVhdGVkQXRcbiAgYm9keVxuICBjcmVhdG9ySWRcbiAgQXV0aG9yXG4gIHR5cGVcbiAgc3Vic2lkXG4gIHVzZXIge1xuICAgIGlkXG4gICAgbmFtZVxuICB9XG4gIHN1YnMge1xuICAgIGlkXG4gICAgbmFtZVxuICB9XG59XG4gICAgYDtcbmV4cG9ydCBjb25zdCBSZWd1bGFyRXJyb3JGcmFnbWVudERvYyA9IGdxbGBcbiAgICBmcmFnbWVudCBSZWd1bGFyRXJyb3Igb24gRmllbGRFcnJvciB7XG4gIGZpZWxkXG4gIG1lc3NhZ2Vcbn1cbiAgICBgO1xuZXhwb3J0IGNvbnN0IFByb2ZpbGVVc2VyRnJhZ21lbnREb2MgPSBncWxgXG4gICAgZnJhZ21lbnQgUHJvZmlsZVVzZXIgb24gVXNlciB7XG4gIGlkXG4gIGludml0ZUxpbmtcbiAgbmFtZVxuICBlbWFpbFxuICBhZGRyZXNzXG4gIGNpdHlcbiAgc3RhdGVcbiAgemlwXG4gIHJvbGVcbiAgY2F0YWdvcnlcbiAgdGl0bGVcbiAgY29tcGFueVxuICB0d2l0dGVyXG4gIGZhY2Vib29rXG4gIGxpbmtlZEluXG4gIHdlYnNpdGVcbiAgY3VzdG9tZXJUeXBlXG4gIGNjTGFzdDRcbiAgRGVmYXVsdFRlbXBsYXRlc1xufVxuICAgIGA7XG5leHBvcnQgY29uc3QgUHJvZmlsZVVzZXJSZXNwb25zZUZyYWdtZW50RG9jID0gZ3FsYFxuICAgIGZyYWdtZW50IFByb2ZpbGVVc2VyUmVzcG9uc2Ugb24gVXNlclJlc3BvbnNlIHtcbiAgZXJyb3JzIHtcbiAgICAuLi5SZWd1bGFyRXJyb3JcbiAgfVxuICB1c2VyIHtcbiAgICAuLi5Qcm9maWxlVXNlclxuICB9XG59XG4gICAgJHtSZWd1bGFyRXJyb3JGcmFnbWVudERvY31cbiR7UHJvZmlsZVVzZXJGcmFnbWVudERvY31gO1xuZXhwb3J0IGNvbnN0IFF1b3RlU25pcHBldEZyYWdtZW50RG9jID0gZ3FsYFxuICAgIGZyYWdtZW50IFF1b3RlU25pcHBldCBvbiBRdW90ZSB7XG4gIGlkXG4gIG5hbWVcbiAgdXNlciB7XG4gICAgaWRcbiAgICBlbWFpbFxuICB9XG4gIGNyZWF0ZWRBdFxuICBjYXRhZ29yeVxufVxuICAgIGA7XG5leHBvcnQgY29uc3QgUmVndWxhclRlbXBsYXRlc0ZyYWdtZW50RG9jID0gZ3FsYFxuICAgIGZyYWdtZW50IFJlZ3VsYXJUZW1wbGF0ZXMgb24gVGVtcGxhdGVzIHtcbiAgaWRcbn1cbiAgICBgO1xuZXhwb3J0IGNvbnN0IFJlZ3VsYXJUZW1wbGF0ZVJlc3BvbnNlRnJhZ21lbnREb2MgPSBncWxgXG4gICAgZnJhZ21lbnQgUmVndWxhclRlbXBsYXRlUmVzcG9uc2Ugb24gVGVtcGxhdGVSZXNwb25lcyB7XG4gIGVycm9ycyB7XG4gICAgLi4uUmVndWxhckVycm9yXG4gIH1cbiAgdGVtcGxhdGUge1xuICAgIC4uLlJlZ3VsYXJUZW1wbGF0ZXNcbiAgfVxufVxuICAgICR7UmVndWxhckVycm9yRnJhZ21lbnREb2N9XG4ke1JlZ3VsYXJUZW1wbGF0ZXNGcmFnbWVudERvY31gO1xuZXhwb3J0IGNvbnN0IFJlZ3VsYXJRdW90ZUZyYWdtZW50RG9jID0gZ3FsYFxuICAgIGZyYWdtZW50IFJlZ3VsYXJRdW90ZSBvbiBRdW90ZSB7XG4gIGlkXG59XG4gICAgYDtcbmV4cG9ydCBjb25zdCBSZWd1bGFyUXVvdGVSZXNwb25zZUZyYWdtZW50RG9jID0gZ3FsYFxuICAgIGZyYWdtZW50IFJlZ3VsYXJRdW90ZVJlc3BvbnNlIG9uIFF1b3RlUmVzcG9uc2Uge1xuICBlcnJvcnMge1xuICAgIC4uLlJlZ3VsYXJFcnJvclxuICB9XG4gIHF1b3RlIHtcbiAgICAuLi5SZWd1bGFyUXVvdGVcbiAgfVxufVxuICAgICR7UmVndWxhckVycm9yRnJhZ21lbnREb2N9XG4ke1JlZ3VsYXJRdW90ZUZyYWdtZW50RG9jfWA7XG5leHBvcnQgY29uc3QgUmVndWxhclN1YkZyYWdtZW50RG9jID0gZ3FsYFxuICAgIGZyYWdtZW50IFJlZ3VsYXJTdWIgb24gU3ViIHtcbiAgaWRcbn1cbiAgICBgO1xuZXhwb3J0IGNvbnN0IFJlZ3VsYXJTdWJSZXNwb25zZUZyYWdtZW50RG9jID0gZ3FsYFxuICAgIGZyYWdtZW50IFJlZ3VsYXJTdWJSZXNwb25zZSBvbiBTdWJSZXNwb25zZSB7XG4gIGVycm9ycyB7XG4gICAgLi4uUmVndWxhckVycm9yXG4gIH1cbiAgc3ViIHtcbiAgICAuLi5SZWd1bGFyU3ViXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJFcnJvckZyYWdtZW50RG9jfVxuJHtSZWd1bGFyU3ViRnJhZ21lbnREb2N9YDtcbmV4cG9ydCBjb25zdCBSZWd1bGFyVXNlckZyYWdtZW50RG9jID0gZ3FsYFxuICAgIGZyYWdtZW50IFJlZ3VsYXJVc2VyIG9uIFVzZXIge1xuICBpZFxuICBlbWFpbFxuICBpbnZpdGVMaW5rXG4gIHJvbGVcbn1cbiAgICBgO1xuZXhwb3J0IGNvbnN0IFJlZ3VsYXJVc2VyUmVzcG9uc2VGcmFnbWVudERvYyA9IGdxbGBcbiAgICBmcmFnbWVudCBSZWd1bGFyVXNlclJlc3BvbnNlIG9uIFVzZXJSZXNwb25zZSB7XG4gIGVycm9ycyB7XG4gICAgLi4uUmVndWxhckVycm9yXG4gIH1cbiAgdXNlciB7XG4gICAgLi4uUmVndWxhclVzZXJcbiAgfVxufVxuICAgICR7UmVndWxhckVycm9yRnJhZ21lbnREb2N9XG4ke1JlZ3VsYXJVc2VyRnJhZ21lbnREb2N9YDtcbmV4cG9ydCBjb25zdCBTdWJTbmlwcGV0RnJhZ21lbnREb2MgPSBncWxgXG4gICAgZnJhZ21lbnQgU3ViU25pcHBldCBvbiBTdWIge1xuICBpZFxuICBjcmVhdGVkQXRcbiAgdXBkYXRlZEF0XG4gIG5hbWVcbiAgZW1haWxcbiAgc3Vic2NyaWJlZFxuICBmcmVxdWVuY3lcbiAgY3JlYXRvciB7XG4gICAgaWRcbiAgICBlbWFpbFxuICB9XG59XG4gICAgYDtcbmV4cG9ydCBjb25zdCBUZW1wbGF0ZXNTbmlwcGV0RnJhZ21lbnREb2MgPSBncWxgXG4gICAgZnJhZ21lbnQgVGVtcGxhdGVzU25pcHBldCBvbiBUZW1wbGF0ZXMge1xuICBpZFxuICB0aXRsZVxuICBib2R5XG4gIHN1YmplY3RcbiAgQWN0aXZlXG4gIGNyZWF0ZWRBdFxufVxuICAgIGA7XG5leHBvcnQgY29uc3QgQWxsdXNlclNuaXBwZXRGcmFnbWVudERvYyA9IGdxbGBcbiAgICBmcmFnbWVudCBhbGx1c2VyU25pcHBldCBvbiBBbGx1c2VyIHtcbiAgdXNlciB7XG4gICAgaWRcbiAgICBuYW1lXG4gIH1cbn1cbiAgICBgO1xuZXhwb3J0IGNvbnN0IFVwZGF0ZVRlbXBsYXRlc0RvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIFVwZGF0ZVRlbXBsYXRlcygkaWQ6IEludCEsICR0aXRsZTogU3RyaW5nISwgJGJvZHk6IFN0cmluZyEsICRzdWJqZWN0OiBTdHJpbmchLCAkQWN0aXZlOiBCb29sZWFuISkge1xuICB1cGRhdGVUZW1wbGF0ZXMoXG4gICAgaWQ6ICRpZFxuICAgIHRpdGxlOiAkdGl0bGVcbiAgICBib2R5OiAkYm9keVxuICAgIHN1YmplY3Q6ICRzdWJqZWN0XG4gICAgQWN0aXZlOiAkQWN0aXZlXG4gICkge1xuICAgIC4uLlJlZ3VsYXJUZW1wbGF0ZVJlc3BvbnNlXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJUZW1wbGF0ZVJlc3BvbnNlRnJhZ21lbnREb2N9YDtcbmV4cG9ydCB0eXBlIFVwZGF0ZVRlbXBsYXRlc011dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxVcGRhdGVUZW1wbGF0ZXNNdXRhdGlvbiwgVXBkYXRlVGVtcGxhdGVzTXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlVXBkYXRlVGVtcGxhdGVzTXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlVXBkYXRlVGVtcGxhdGVzTXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlVXBkYXRlVGVtcGxhdGVzTXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFt1cGRhdGVUZW1wbGF0ZXNNdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZVVwZGF0ZVRlbXBsYXRlc011dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIGlkOiAvLyB2YWx1ZSBmb3IgJ2lkJ1xuICogICAgICB0aXRsZTogLy8gdmFsdWUgZm9yICd0aXRsZSdcbiAqICAgICAgYm9keTogLy8gdmFsdWUgZm9yICdib2R5J1xuICogICAgICBzdWJqZWN0OiAvLyB2YWx1ZSBmb3IgJ3N1YmplY3QnXG4gKiAgICAgIEFjdGl2ZTogLy8gdmFsdWUgZm9yICdBY3RpdmUnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVVwZGF0ZVRlbXBsYXRlc011dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8VXBkYXRlVGVtcGxhdGVzTXV0YXRpb24sIFVwZGF0ZVRlbXBsYXRlc011dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxVcGRhdGVUZW1wbGF0ZXNNdXRhdGlvbiwgVXBkYXRlVGVtcGxhdGVzTXV0YXRpb25WYXJpYWJsZXM+KFVwZGF0ZVRlbXBsYXRlc0RvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIFVwZGF0ZVRlbXBsYXRlc011dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVVwZGF0ZVRlbXBsYXRlc011dGF0aW9uPjtcbmV4cG9ydCB0eXBlIFVwZGF0ZVRlbXBsYXRlc011dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PFVwZGF0ZVRlbXBsYXRlc011dGF0aW9uPjtcbmV4cG9ydCB0eXBlIFVwZGF0ZVRlbXBsYXRlc011dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPFVwZGF0ZVRlbXBsYXRlc011dGF0aW9uLCBVcGRhdGVUZW1wbGF0ZXNNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgQWNjZXB0SW52aXRlRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gQWNjZXB0SW52aXRlKCR0b2tlbjogU3RyaW5nISwgJHN1YnNjcmliZWQ6IEJvb2xlYW4hLCAkZnJlcXVlbmN5OiBGbG9hdCEpIHtcbiAgYWNjZXB0SW52aXRlKHRva2VuOiAkdG9rZW4sIHN1YnNjcmliZWQ6ICRzdWJzY3JpYmVkLCBmcmVxdWVuY3k6ICRmcmVxdWVuY3kpIHtcbiAgICAuLi5SZWd1bGFyU3ViUmVzcG9uc2VcbiAgfVxufVxuICAgICR7UmVndWxhclN1YlJlc3BvbnNlRnJhZ21lbnREb2N9YDtcbmV4cG9ydCB0eXBlIEFjY2VwdEludml0ZU11dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxBY2NlcHRJbnZpdGVNdXRhdGlvbiwgQWNjZXB0SW52aXRlTXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlQWNjZXB0SW52aXRlTXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlQWNjZXB0SW52aXRlTXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlQWNjZXB0SW52aXRlTXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFthY2NlcHRJbnZpdGVNdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZUFjY2VwdEludml0ZU11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIHRva2VuOiAvLyB2YWx1ZSBmb3IgJ3Rva2VuJ1xuICogICAgICBzdWJzY3JpYmVkOiAvLyB2YWx1ZSBmb3IgJ3N1YnNjcmliZWQnXG4gKiAgICAgIGZyZXF1ZW5jeTogLy8gdmFsdWUgZm9yICdmcmVxdWVuY3knXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFjY2VwdEludml0ZU11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8QWNjZXB0SW52aXRlTXV0YXRpb24sIEFjY2VwdEludml0ZU11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxBY2NlcHRJbnZpdGVNdXRhdGlvbiwgQWNjZXB0SW52aXRlTXV0YXRpb25WYXJpYWJsZXM+KEFjY2VwdEludml0ZURvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIEFjY2VwdEludml0ZU11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUFjY2VwdEludml0ZU11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIEFjY2VwdEludml0ZU11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PEFjY2VwdEludml0ZU11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIEFjY2VwdEludml0ZU11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPEFjY2VwdEludml0ZU11dGF0aW9uLCBBY2NlcHRJbnZpdGVNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgQ2FuY2VsU3Vic2NyaXB0aW9uRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gQ2FuY2VsU3Vic2NyaXB0aW9uIHtcbiAgY2FuY2VsU3Vic2NyaXB0aW9uIHtcbiAgICAuLi5Qcm9maWxlVXNlclJlc3BvbnNlXG4gIH1cbn1cbiAgICAke1Byb2ZpbGVVc2VyUmVzcG9uc2VGcmFnbWVudERvY31gO1xuZXhwb3J0IHR5cGUgQ2FuY2VsU3Vic2NyaXB0aW9uTXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPENhbmNlbFN1YnNjcmlwdGlvbk11dGF0aW9uLCBDYW5jZWxTdWJzY3JpcHRpb25NdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VDYW5jZWxTdWJzY3JpcHRpb25NdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VDYW5jZWxTdWJzY3JpcHRpb25NdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VDYW5jZWxTdWJzY3JpcHRpb25NdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2NhbmNlbFN1YnNjcmlwdGlvbk11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlQ2FuY2VsU3Vic2NyaXB0aW9uTXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2FuY2VsU3Vic2NyaXB0aW9uTXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxDYW5jZWxTdWJzY3JpcHRpb25NdXRhdGlvbiwgQ2FuY2VsU3Vic2NyaXB0aW9uTXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPENhbmNlbFN1YnNjcmlwdGlvbk11dGF0aW9uLCBDYW5jZWxTdWJzY3JpcHRpb25NdXRhdGlvblZhcmlhYmxlcz4oQ2FuY2VsU3Vic2NyaXB0aW9uRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgQ2FuY2VsU3Vic2NyaXB0aW9uTXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlQ2FuY2VsU3Vic2NyaXB0aW9uTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgQ2FuY2VsU3Vic2NyaXB0aW9uTXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8Q2FuY2VsU3Vic2NyaXB0aW9uTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgQ2FuY2VsU3Vic2NyaXB0aW9uTXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8Q2FuY2VsU3Vic2NyaXB0aW9uTXV0YXRpb24sIENhbmNlbFN1YnNjcmlwdGlvbk11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBDaGFuZ2VDcmVkaXRDYXJkRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gQ2hhbmdlQ3JlZGl0Q2FyZCgkc291cmNlOiBTdHJpbmchLCAkY2NMYXN0NDogU3RyaW5nISkge1xuICBjaGFuZ2VDcmVkaXRDYXJkKHNvdXJjZTogJHNvdXJjZSwgY2NMYXN0NDogJGNjTGFzdDQpIHtcbiAgICAuLi5Qcm9maWxlVXNlclJlc3BvbnNlXG4gIH1cbn1cbiAgICAke1Byb2ZpbGVVc2VyUmVzcG9uc2VGcmFnbWVudERvY31gO1xuZXhwb3J0IHR5cGUgQ2hhbmdlQ3JlZGl0Q2FyZE11dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxDaGFuZ2VDcmVkaXRDYXJkTXV0YXRpb24sIENoYW5nZUNyZWRpdENhcmRNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VDaGFuZ2VDcmVkaXRDYXJkTXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlQ2hhbmdlQ3JlZGl0Q2FyZE11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZUNoYW5nZUNyZWRpdENhcmRNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2NoYW5nZUNyZWRpdENhcmRNdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZUNoYW5nZUNyZWRpdENhcmRNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBzb3VyY2U6IC8vIHZhbHVlIGZvciAnc291cmNlJ1xuICogICAgICBjY0xhc3Q0OiAvLyB2YWx1ZSBmb3IgJ2NjTGFzdDQnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNoYW5nZUNyZWRpdENhcmRNdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPENoYW5nZUNyZWRpdENhcmRNdXRhdGlvbiwgQ2hhbmdlQ3JlZGl0Q2FyZE11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxDaGFuZ2VDcmVkaXRDYXJkTXV0YXRpb24sIENoYW5nZUNyZWRpdENhcmRNdXRhdGlvblZhcmlhYmxlcz4oQ2hhbmdlQ3JlZGl0Q2FyZERvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIENoYW5nZUNyZWRpdENhcmRNdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VDaGFuZ2VDcmVkaXRDYXJkTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgQ2hhbmdlQ3JlZGl0Q2FyZE11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PENoYW5nZUNyZWRpdENhcmRNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBDaGFuZ2VDcmVkaXRDYXJkTXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8Q2hhbmdlQ3JlZGl0Q2FyZE11dGF0aW9uLCBDaGFuZ2VDcmVkaXRDYXJkTXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IENoYW5nZVBhc3N3b3JkRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gQ2hhbmdlUGFzc3dvcmQoJHRva2VuOiBTdHJpbmchLCAkbmV3UGFzc3dvcmQ6IFN0cmluZyEpIHtcbiAgY2hhbmdlUGFzc3dvcmQodG9rZW46ICR0b2tlbiwgbmV3UGFzc3dvcmQ6ICRuZXdQYXNzd29yZCkge1xuICAgIC4uLlJlZ3VsYXJVc2VyUmVzcG9uc2VcbiAgfVxufVxuICAgICR7UmVndWxhclVzZXJSZXNwb25zZUZyYWdtZW50RG9jfWA7XG5leHBvcnQgdHlwZSBDaGFuZ2VQYXNzd29yZE11dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxDaGFuZ2VQYXNzd29yZE11dGF0aW9uLCBDaGFuZ2VQYXNzd29yZE11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZUNoYW5nZVBhc3N3b3JkTXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlQ2hhbmdlUGFzc3dvcmRNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VDaGFuZ2VQYXNzd29yZE11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbY2hhbmdlUGFzc3dvcmRNdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZUNoYW5nZVBhc3N3b3JkTXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgdG9rZW46IC8vIHZhbHVlIGZvciAndG9rZW4nXG4gKiAgICAgIG5ld1Bhc3N3b3JkOiAvLyB2YWx1ZSBmb3IgJ25ld1Bhc3N3b3JkJ1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDaGFuZ2VQYXNzd29yZE11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8Q2hhbmdlUGFzc3dvcmRNdXRhdGlvbiwgQ2hhbmdlUGFzc3dvcmRNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248Q2hhbmdlUGFzc3dvcmRNdXRhdGlvbiwgQ2hhbmdlUGFzc3dvcmRNdXRhdGlvblZhcmlhYmxlcz4oQ2hhbmdlUGFzc3dvcmREb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBDaGFuZ2VQYXNzd29yZE11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUNoYW5nZVBhc3N3b3JkTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgQ2hhbmdlUGFzc3dvcmRNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxDaGFuZ2VQYXNzd29yZE11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIENoYW5nZVBhc3N3b3JkTXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8Q2hhbmdlUGFzc3dvcmRNdXRhdGlvbiwgQ2hhbmdlUGFzc3dvcmRNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgVXBkYXRlTWFpbGFuZEZyZXF1ZW5jeURvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIHVwZGF0ZU1haWxhbmRGcmVxdWVuY3koJHRva2VuOiBTdHJpbmchLCAkZnJlcXVlbmN5OiBGbG9hdCEsICRlbWFpbDogU3RyaW5nISkge1xuICB1cGRhdGVNYWlsYW5kRnJlcXVlbmN5KHRva2VuOiAkdG9rZW4sIGZyZXF1ZW5jeTogJGZyZXF1ZW5jeSwgZW1haWw6ICRlbWFpbCkge1xuICAgIC4uLlJlZ3VsYXJTdWJSZXNwb25zZVxuICB9XG59XG4gICAgJHtSZWd1bGFyU3ViUmVzcG9uc2VGcmFnbWVudERvY31gO1xuZXhwb3J0IHR5cGUgVXBkYXRlTWFpbGFuZEZyZXF1ZW5jeU11dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxVcGRhdGVNYWlsYW5kRnJlcXVlbmN5TXV0YXRpb24sIFVwZGF0ZU1haWxhbmRGcmVxdWVuY3lNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VVcGRhdGVNYWlsYW5kRnJlcXVlbmN5TXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlVXBkYXRlTWFpbGFuZEZyZXF1ZW5jeU11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZVVwZGF0ZU1haWxhbmRGcmVxdWVuY3lNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW3VwZGF0ZU1haWxhbmRGcmVxdWVuY3lNdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZVVwZGF0ZU1haWxhbmRGcmVxdWVuY3lNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICB0b2tlbjogLy8gdmFsdWUgZm9yICd0b2tlbidcbiAqICAgICAgZnJlcXVlbmN5OiAvLyB2YWx1ZSBmb3IgJ2ZyZXF1ZW5jeSdcbiAqICAgICAgZW1haWw6IC8vIHZhbHVlIGZvciAnZW1haWwnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVVwZGF0ZU1haWxhbmRGcmVxdWVuY3lNdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPFVwZGF0ZU1haWxhbmRGcmVxdWVuY3lNdXRhdGlvbiwgVXBkYXRlTWFpbGFuZEZyZXF1ZW5jeU11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxVcGRhdGVNYWlsYW5kRnJlcXVlbmN5TXV0YXRpb24sIFVwZGF0ZU1haWxhbmRGcmVxdWVuY3lNdXRhdGlvblZhcmlhYmxlcz4oVXBkYXRlTWFpbGFuZEZyZXF1ZW5jeURvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIFVwZGF0ZU1haWxhbmRGcmVxdWVuY3lNdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VVcGRhdGVNYWlsYW5kRnJlcXVlbmN5TXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgVXBkYXRlTWFpbGFuZEZyZXF1ZW5jeU11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PFVwZGF0ZU1haWxhbmRGcmVxdWVuY3lNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBVcGRhdGVNYWlsYW5kRnJlcXVlbmN5TXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8VXBkYXRlTWFpbGFuZEZyZXF1ZW5jeU11dGF0aW9uLCBVcGRhdGVNYWlsYW5kRnJlcXVlbmN5TXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IENyZWF0ZVF1b3RlRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gQ3JlYXRlUXVvdGUoJGlucHV0OiBRdW90ZUlucHV0ISkge1xuICBjcmVhdGVRdW90ZShpbnB1dDogJGlucHV0KSB7XG4gICAgLi4uUmVndWxhclF1b3RlUmVzcG9uc2VcbiAgfVxufVxuICAgICR7UmVndWxhclF1b3RlUmVzcG9uc2VGcmFnbWVudERvY31gO1xuZXhwb3J0IHR5cGUgQ3JlYXRlUXVvdGVNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248Q3JlYXRlUXVvdGVNdXRhdGlvbiwgQ3JlYXRlUXVvdGVNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VDcmVhdGVRdW90ZU11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZUNyZWF0ZVF1b3RlTXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlQ3JlYXRlUXVvdGVNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2NyZWF0ZVF1b3RlTXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VDcmVhdGVRdW90ZU11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIGlucHV0OiAvLyB2YWx1ZSBmb3IgJ2lucHV0J1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVRdW90ZU11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8Q3JlYXRlUXVvdGVNdXRhdGlvbiwgQ3JlYXRlUXVvdGVNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248Q3JlYXRlUXVvdGVNdXRhdGlvbiwgQ3JlYXRlUXVvdGVNdXRhdGlvblZhcmlhYmxlcz4oQ3JlYXRlUXVvdGVEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBDcmVhdGVRdW90ZU11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUNyZWF0ZVF1b3RlTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgQ3JlYXRlUXVvdGVNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxDcmVhdGVRdW90ZU11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIENyZWF0ZVF1b3RlTXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8Q3JlYXRlUXVvdGVNdXRhdGlvbiwgQ3JlYXRlUXVvdGVNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgQ3JlYXRlU3ViRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gQ3JlYXRlU3ViKCRpbnB1dDogU3ViSW5wdXQhKSB7XG4gIGNyZWF0ZVN1YihpbnB1dDogJGlucHV0KSB7XG4gICAgLi4uUmVndWxhclN1YlJlc3BvbnNlXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJTdWJSZXNwb25zZUZyYWdtZW50RG9jfWA7XG5leHBvcnQgdHlwZSBDcmVhdGVTdWJNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248Q3JlYXRlU3ViTXV0YXRpb24sIENyZWF0ZVN1Yk11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZUNyZWF0ZVN1Yk11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZUNyZWF0ZVN1Yk11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZUNyZWF0ZVN1Yk11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbY3JlYXRlU3ViTXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VDcmVhdGVTdWJNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBpbnB1dDogLy8gdmFsdWUgZm9yICdpbnB1dCdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlU3ViTXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxDcmVhdGVTdWJNdXRhdGlvbiwgQ3JlYXRlU3ViTXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPENyZWF0ZVN1Yk11dGF0aW9uLCBDcmVhdGVTdWJNdXRhdGlvblZhcmlhYmxlcz4oQ3JlYXRlU3ViRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgQ3JlYXRlU3ViTXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlQ3JlYXRlU3ViTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgQ3JlYXRlU3ViTXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8Q3JlYXRlU3ViTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgQ3JlYXRlU3ViTXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8Q3JlYXRlU3ViTXV0YXRpb24sIENyZWF0ZVN1Yk11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBDcmVhdGVTdWJGcm9tQ29udGFjdERvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIENyZWF0ZVN1YkZyb21Db250YWN0KCR0b2tlbjogU3RyaW5nISwgJGVtYWlsczogU3RyaW5nISkge1xuICBjcmVhdGVTdWJGcm9tQ29udGFjdCh0b2tlbjogJHRva2VuLCBlbWFpbHM6ICRlbWFpbHMpIHtcbiAgICAuLi5SZWd1bGFyU3ViUmVzcG9uc2VcbiAgfVxufVxuICAgICR7UmVndWxhclN1YlJlc3BvbnNlRnJhZ21lbnREb2N9YDtcbmV4cG9ydCB0eXBlIENyZWF0ZVN1YkZyb21Db250YWN0TXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPENyZWF0ZVN1YkZyb21Db250YWN0TXV0YXRpb24sIENyZWF0ZVN1YkZyb21Db250YWN0TXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlQ3JlYXRlU3ViRnJvbUNvbnRhY3RNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VDcmVhdGVTdWJGcm9tQ29udGFjdE11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZUNyZWF0ZVN1YkZyb21Db250YWN0TXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFtjcmVhdGVTdWJGcm9tQ29udGFjdE11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlQ3JlYXRlU3ViRnJvbUNvbnRhY3RNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICB0b2tlbjogLy8gdmFsdWUgZm9yICd0b2tlbidcbiAqICAgICAgZW1haWxzOiAvLyB2YWx1ZSBmb3IgJ2VtYWlscydcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlU3ViRnJvbUNvbnRhY3RNdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPENyZWF0ZVN1YkZyb21Db250YWN0TXV0YXRpb24sIENyZWF0ZVN1YkZyb21Db250YWN0TXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPENyZWF0ZVN1YkZyb21Db250YWN0TXV0YXRpb24sIENyZWF0ZVN1YkZyb21Db250YWN0TXV0YXRpb25WYXJpYWJsZXM+KENyZWF0ZVN1YkZyb21Db250YWN0RG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgQ3JlYXRlU3ViRnJvbUNvbnRhY3RNdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VDcmVhdGVTdWJGcm9tQ29udGFjdE11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIENyZWF0ZVN1YkZyb21Db250YWN0TXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8Q3JlYXRlU3ViRnJvbUNvbnRhY3RNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBDcmVhdGVTdWJGcm9tQ29udGFjdE11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPENyZWF0ZVN1YkZyb21Db250YWN0TXV0YXRpb24sIENyZWF0ZVN1YkZyb21Db250YWN0TXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IENyZWF0ZVN1YkZyb21JbnZpdGVEb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBDcmVhdGVTdWJGcm9tSW52aXRlKCRpbnB1dDogU3ViSW52aXRlSW5wdXQhKSB7XG4gIGNyZWF0ZVN1YkZyb21JbnZpdGUoaW5wdXQ6ICRpbnB1dCkge1xuICAgIC4uLlJlZ3VsYXJTdWJSZXNwb25zZVxuICB9XG59XG4gICAgJHtSZWd1bGFyU3ViUmVzcG9uc2VGcmFnbWVudERvY31gO1xuZXhwb3J0IHR5cGUgQ3JlYXRlU3ViRnJvbUludml0ZU11dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxDcmVhdGVTdWJGcm9tSW52aXRlTXV0YXRpb24sIENyZWF0ZVN1YkZyb21JbnZpdGVNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VDcmVhdGVTdWJGcm9tSW52aXRlTXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlQ3JlYXRlU3ViRnJvbUludml0ZU11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZUNyZWF0ZVN1YkZyb21JbnZpdGVNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2NyZWF0ZVN1YkZyb21JbnZpdGVNdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZUNyZWF0ZVN1YkZyb21JbnZpdGVNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBpbnB1dDogLy8gdmFsdWUgZm9yICdpbnB1dCdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlU3ViRnJvbUludml0ZU11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8Q3JlYXRlU3ViRnJvbUludml0ZU11dGF0aW9uLCBDcmVhdGVTdWJGcm9tSW52aXRlTXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPENyZWF0ZVN1YkZyb21JbnZpdGVNdXRhdGlvbiwgQ3JlYXRlU3ViRnJvbUludml0ZU11dGF0aW9uVmFyaWFibGVzPihDcmVhdGVTdWJGcm9tSW52aXRlRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgQ3JlYXRlU3ViRnJvbUludml0ZU11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUNyZWF0ZVN1YkZyb21JbnZpdGVNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBDcmVhdGVTdWJGcm9tSW52aXRlTXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8Q3JlYXRlU3ViRnJvbUludml0ZU11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIENyZWF0ZVN1YkZyb21JbnZpdGVNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxDcmVhdGVTdWJGcm9tSW52aXRlTXV0YXRpb24sIENyZWF0ZVN1YkZyb21JbnZpdGVNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgQ3JlYXRlU3Vic2NyaXB0aW9uRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gQ3JlYXRlU3Vic2NyaXB0aW9uKCRzb3VyY2U6IFN0cmluZyEsICRjY0xhc3Q0OiBTdHJpbmchKSB7XG4gIGNyZWF0ZVN1YnNjcmlwdGlvbihzb3VyY2U6ICRzb3VyY2UsIGNjTGFzdDQ6ICRjY0xhc3Q0KSB7XG4gICAgLi4uUHJvZmlsZVVzZXJSZXNwb25zZVxuICB9XG59XG4gICAgJHtQcm9maWxlVXNlclJlc3BvbnNlRnJhZ21lbnREb2N9YDtcbmV4cG9ydCB0eXBlIENyZWF0ZVN1YnNjcmlwdGlvbk11dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxDcmVhdGVTdWJzY3JpcHRpb25NdXRhdGlvbiwgQ3JlYXRlU3Vic2NyaXB0aW9uTXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlQ3JlYXRlU3Vic2NyaXB0aW9uTXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlQ3JlYXRlU3Vic2NyaXB0aW9uTXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlQ3JlYXRlU3Vic2NyaXB0aW9uTXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFtjcmVhdGVTdWJzY3JpcHRpb25NdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZUNyZWF0ZVN1YnNjcmlwdGlvbk11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIHNvdXJjZTogLy8gdmFsdWUgZm9yICdzb3VyY2UnXG4gKiAgICAgIGNjTGFzdDQ6IC8vIHZhbHVlIGZvciAnY2NMYXN0NCdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlU3Vic2NyaXB0aW9uTXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxDcmVhdGVTdWJzY3JpcHRpb25NdXRhdGlvbiwgQ3JlYXRlU3Vic2NyaXB0aW9uTXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPENyZWF0ZVN1YnNjcmlwdGlvbk11dGF0aW9uLCBDcmVhdGVTdWJzY3JpcHRpb25NdXRhdGlvblZhcmlhYmxlcz4oQ3JlYXRlU3Vic2NyaXB0aW9uRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgQ3JlYXRlU3Vic2NyaXB0aW9uTXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlQ3JlYXRlU3Vic2NyaXB0aW9uTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgQ3JlYXRlU3Vic2NyaXB0aW9uTXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8Q3JlYXRlU3Vic2NyaXB0aW9uTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgQ3JlYXRlU3Vic2NyaXB0aW9uTXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8Q3JlYXRlU3Vic2NyaXB0aW9uTXV0YXRpb24sIENyZWF0ZVN1YnNjcmlwdGlvbk11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBDcmVhdGVTdWJzZnJ3ZHBhZ2VEb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBDcmVhdGVTdWJzZnJ3ZHBhZ2UoJHRva2VuOiBTdHJpbmchLCAkbmFtZTogU3RyaW5nISwgJGZyZXF1ZW5jeTogRmxvYXQhLCAkZW1haWw6IFN0cmluZyEpIHtcbiAgY3JlYXRlU3Vic2Zyd2RwYWdlKFxuICAgIHRva2VuOiAkdG9rZW5cbiAgICBuYW1lOiAkbmFtZVxuICAgIGZyZXF1ZW5jeTogJGZyZXF1ZW5jeVxuICAgIGVtYWlsOiAkZW1haWxcbiAgKSB7XG4gICAgLi4uUmVndWxhclN1YlJlc3BvbnNlXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJTdWJSZXNwb25zZUZyYWdtZW50RG9jfWA7XG5leHBvcnQgdHlwZSBDcmVhdGVTdWJzZnJ3ZHBhZ2VNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248Q3JlYXRlU3Vic2Zyd2RwYWdlTXV0YXRpb24sIENyZWF0ZVN1YnNmcndkcGFnZU11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZUNyZWF0ZVN1YnNmcndkcGFnZU11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZUNyZWF0ZVN1YnNmcndkcGFnZU11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZUNyZWF0ZVN1YnNmcndkcGFnZU11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbY3JlYXRlU3Vic2Zyd2RwYWdlTXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VDcmVhdGVTdWJzZnJ3ZHBhZ2VNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICB0b2tlbjogLy8gdmFsdWUgZm9yICd0b2tlbidcbiAqICAgICAgbmFtZTogLy8gdmFsdWUgZm9yICduYW1lJ1xuICogICAgICBmcmVxdWVuY3k6IC8vIHZhbHVlIGZvciAnZnJlcXVlbmN5J1xuICogICAgICBlbWFpbDogLy8gdmFsdWUgZm9yICdlbWFpbCdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlU3Vic2Zyd2RwYWdlTXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxDcmVhdGVTdWJzZnJ3ZHBhZ2VNdXRhdGlvbiwgQ3JlYXRlU3Vic2Zyd2RwYWdlTXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPENyZWF0ZVN1YnNmcndkcGFnZU11dGF0aW9uLCBDcmVhdGVTdWJzZnJ3ZHBhZ2VNdXRhdGlvblZhcmlhYmxlcz4oQ3JlYXRlU3Vic2Zyd2RwYWdlRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgQ3JlYXRlU3Vic2Zyd2RwYWdlTXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlQ3JlYXRlU3Vic2Zyd2RwYWdlTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgQ3JlYXRlU3Vic2Zyd2RwYWdlTXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8Q3JlYXRlU3Vic2Zyd2RwYWdlTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgQ3JlYXRlU3Vic2Zyd2RwYWdlTXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8Q3JlYXRlU3Vic2Zyd2RwYWdlTXV0YXRpb24sIENyZWF0ZVN1YnNmcndkcGFnZU11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBEZWxldGVRdW90ZURvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIERlbGV0ZVF1b3RlKCRpZDogSW50ISkge1xuICBkZWxldGVRdW90ZShpZDogJGlkKVxufVxuICAgIGA7XG5leHBvcnQgdHlwZSBEZWxldGVRdW90ZU11dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxEZWxldGVRdW90ZU11dGF0aW9uLCBEZWxldGVRdW90ZU11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZURlbGV0ZVF1b3RlTXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlRGVsZXRlUXVvdGVNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VEZWxldGVRdW90ZU11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbZGVsZXRlUXVvdGVNdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZURlbGV0ZVF1b3RlTXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgaWQ6IC8vIHZhbHVlIGZvciAnaWQnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZURlbGV0ZVF1b3RlTXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxEZWxldGVRdW90ZU11dGF0aW9uLCBEZWxldGVRdW90ZU11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxEZWxldGVRdW90ZU11dGF0aW9uLCBEZWxldGVRdW90ZU11dGF0aW9uVmFyaWFibGVzPihEZWxldGVRdW90ZURvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIERlbGV0ZVF1b3RlTXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlRGVsZXRlUXVvdGVNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBEZWxldGVRdW90ZU11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PERlbGV0ZVF1b3RlTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgRGVsZXRlUXVvdGVNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxEZWxldGVRdW90ZU11dGF0aW9uLCBEZWxldGVRdW90ZU11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBEZWxldGVTdWJEb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBEZWxldGVTdWIoJGlkOiBJbnQhKSB7XG4gIGRlbGV0ZVN1YihpZDogJGlkKVxufVxuICAgIGA7XG5leHBvcnQgdHlwZSBEZWxldGVTdWJNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248RGVsZXRlU3ViTXV0YXRpb24sIERlbGV0ZVN1Yk11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZURlbGV0ZVN1Yk11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZURlbGV0ZVN1Yk11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZURlbGV0ZVN1Yk11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbZGVsZXRlU3ViTXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VEZWxldGVTdWJNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBpZDogLy8gdmFsdWUgZm9yICdpZCdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRGVsZXRlU3ViTXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxEZWxldGVTdWJNdXRhdGlvbiwgRGVsZXRlU3ViTXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPERlbGV0ZVN1Yk11dGF0aW9uLCBEZWxldGVTdWJNdXRhdGlvblZhcmlhYmxlcz4oRGVsZXRlU3ViRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgRGVsZXRlU3ViTXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlRGVsZXRlU3ViTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgRGVsZXRlU3ViTXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8RGVsZXRlU3ViTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgRGVsZXRlU3ViTXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8RGVsZXRlU3ViTXV0YXRpb24sIERlbGV0ZVN1Yk11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBEZWxldGVUZW1wbGF0ZURvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIERlbGV0ZVRlbXBsYXRlKCRpZDogSW50ISkge1xuICBkZWxldGVUZW1wbGF0ZShpZDogJGlkKVxufVxuICAgIGA7XG5leHBvcnQgdHlwZSBEZWxldGVUZW1wbGF0ZU11dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxEZWxldGVUZW1wbGF0ZU11dGF0aW9uLCBEZWxldGVUZW1wbGF0ZU11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZURlbGV0ZVRlbXBsYXRlTXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlRGVsZXRlVGVtcGxhdGVNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VEZWxldGVUZW1wbGF0ZU11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbZGVsZXRlVGVtcGxhdGVNdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZURlbGV0ZVRlbXBsYXRlTXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgaWQ6IC8vIHZhbHVlIGZvciAnaWQnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZURlbGV0ZVRlbXBsYXRlTXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxEZWxldGVUZW1wbGF0ZU11dGF0aW9uLCBEZWxldGVUZW1wbGF0ZU11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxEZWxldGVUZW1wbGF0ZU11dGF0aW9uLCBEZWxldGVUZW1wbGF0ZU11dGF0aW9uVmFyaWFibGVzPihEZWxldGVUZW1wbGF0ZURvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIERlbGV0ZVRlbXBsYXRlTXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlRGVsZXRlVGVtcGxhdGVNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBEZWxldGVUZW1wbGF0ZU11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PERlbGV0ZVRlbXBsYXRlTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgRGVsZXRlVGVtcGxhdGVNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxEZWxldGVUZW1wbGF0ZU11dGF0aW9uLCBEZWxldGVUZW1wbGF0ZU11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBGb3Jnb3RQYXNzd29yZERvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIEZvcmdvdFBhc3N3b3JkKCRlbWFpbDogU3RyaW5nISkge1xuICBmb3Jnb3RQYXNzd29yZChlbWFpbDogJGVtYWlsKVxufVxuICAgIGA7XG5leHBvcnQgdHlwZSBGb3Jnb3RQYXNzd29yZE11dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxGb3Jnb3RQYXNzd29yZE11dGF0aW9uLCBGb3Jnb3RQYXNzd29yZE11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZUZvcmdvdFBhc3N3b3JkTXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlRm9yZ290UGFzc3dvcmRNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VGb3Jnb3RQYXNzd29yZE11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbZm9yZ290UGFzc3dvcmRNdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZUZvcmdvdFBhc3N3b3JkTXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgZW1haWw6IC8vIHZhbHVlIGZvciAnZW1haWwnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvcmdvdFBhc3N3b3JkTXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxGb3Jnb3RQYXNzd29yZE11dGF0aW9uLCBGb3Jnb3RQYXNzd29yZE11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxGb3Jnb3RQYXNzd29yZE11dGF0aW9uLCBGb3Jnb3RQYXNzd29yZE11dGF0aW9uVmFyaWFibGVzPihGb3Jnb3RQYXNzd29yZERvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIEZvcmdvdFBhc3N3b3JkTXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlRm9yZ290UGFzc3dvcmRNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBGb3Jnb3RQYXNzd29yZE11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PEZvcmdvdFBhc3N3b3JkTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgRm9yZ290UGFzc3dvcmRNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxGb3Jnb3RQYXNzd29yZE11dGF0aW9uLCBGb3Jnb3RQYXNzd29yZE11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBMb2dpbkRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIExvZ2luKCRlbWFpbDogU3RyaW5nISwgJHBhc3N3b3JkOiBTdHJpbmchKSB7XG4gIGxvZ2luKGVtYWlsOiAkZW1haWwsIHBhc3N3b3JkOiAkcGFzc3dvcmQpIHtcbiAgICAuLi5SZWd1bGFyVXNlclJlc3BvbnNlXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJVc2VyUmVzcG9uc2VGcmFnbWVudERvY31gO1xuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248TG9naW5NdXRhdGlvbiwgTG9naW5NdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VMb2dpbk11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZUxvZ2luTXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlTG9naW5NdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2xvZ2luTXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VMb2dpbk11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIGVtYWlsOiAvLyB2YWx1ZSBmb3IgJ2VtYWlsJ1xuICogICAgICBwYXNzd29yZDogLy8gdmFsdWUgZm9yICdwYXNzd29yZCdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9naW5NdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPExvZ2luTXV0YXRpb24sIExvZ2luTXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPExvZ2luTXV0YXRpb24sIExvZ2luTXV0YXRpb25WYXJpYWJsZXM+KExvZ2luRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VMb2dpbk11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8TG9naW5NdXRhdGlvbj47XG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPExvZ2luTXV0YXRpb24sIExvZ2luTXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IExvZ291dERvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIExvZ291dCB7XG4gIGxvZ291dFxufVxuICAgIGA7XG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248TG9nb3V0TXV0YXRpb24sIExvZ291dE11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZUxvZ291dE11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZUxvZ291dE11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZUxvZ291dE11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbbG9nb3V0TXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VMb2dvdXRNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2dvdXRNdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPExvZ291dE11dGF0aW9uLCBMb2dvdXRNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248TG9nb3V0TXV0YXRpb24sIExvZ291dE11dGF0aW9uVmFyaWFibGVzPihMb2dvdXREb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VMb2dvdXRNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxMb2dvdXRNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxMb2dvdXRNdXRhdGlvbiwgTG9nb3V0TXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IFJlU3VicmliZVVzZXJFeGlzdGluZ0NjRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gUmVTdWJyaWJlVXNlckV4aXN0aW5nQ0Mge1xuICByZVN1YnJpYmVVc2VyRXhpc3RpbmdDQyB7XG4gICAgLi4uUHJvZmlsZVVzZXJSZXNwb25zZVxuICB9XG59XG4gICAgJHtQcm9maWxlVXNlclJlc3BvbnNlRnJhZ21lbnREb2N9YDtcbmV4cG9ydCB0eXBlIFJlU3VicmliZVVzZXJFeGlzdGluZ0NjTXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPFJlU3VicmliZVVzZXJFeGlzdGluZ0NjTXV0YXRpb24sIFJlU3VicmliZVVzZXJFeGlzdGluZ0NjTXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlUmVTdWJyaWJlVXNlckV4aXN0aW5nQ2NNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VSZVN1YnJpYmVVc2VyRXhpc3RpbmdDY011dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZVJlU3VicmliZVVzZXJFeGlzdGluZ0NjTXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFtyZVN1YnJpYmVVc2VyRXhpc3RpbmdDY011dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlUmVTdWJyaWJlVXNlckV4aXN0aW5nQ2NNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZVN1YnJpYmVVc2VyRXhpc3RpbmdDY011dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8UmVTdWJyaWJlVXNlckV4aXN0aW5nQ2NNdXRhdGlvbiwgUmVTdWJyaWJlVXNlckV4aXN0aW5nQ2NNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248UmVTdWJyaWJlVXNlckV4aXN0aW5nQ2NNdXRhdGlvbiwgUmVTdWJyaWJlVXNlckV4aXN0aW5nQ2NNdXRhdGlvblZhcmlhYmxlcz4oUmVTdWJyaWJlVXNlckV4aXN0aW5nQ2NEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBSZVN1YnJpYmVVc2VyRXhpc3RpbmdDY011dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVJlU3VicmliZVVzZXJFeGlzdGluZ0NjTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgUmVTdWJyaWJlVXNlckV4aXN0aW5nQ2NNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxSZVN1YnJpYmVVc2VyRXhpc3RpbmdDY011dGF0aW9uPjtcbmV4cG9ydCB0eXBlIFJlU3VicmliZVVzZXJFeGlzdGluZ0NjTXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8UmVTdWJyaWJlVXNlckV4aXN0aW5nQ2NNdXRhdGlvbiwgUmVTdWJyaWJlVXNlckV4aXN0aW5nQ2NNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgUmVTdWJyaWJlVXNlck5ld0NjRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gUmVTdWJyaWJlVXNlck5ld0NDKCRzb3VyY2U6IFN0cmluZyEsICRjY0xhc3Q0OiBTdHJpbmchKSB7XG4gIHJlU3VicmliZVVzZXJOZXdDQyhzb3VyY2U6ICRzb3VyY2UsIGNjTGFzdDQ6ICRjY0xhc3Q0KSB7XG4gICAgLi4uUHJvZmlsZVVzZXJSZXNwb25zZVxuICB9XG59XG4gICAgJHtQcm9maWxlVXNlclJlc3BvbnNlRnJhZ21lbnREb2N9YDtcbmV4cG9ydCB0eXBlIFJlU3VicmliZVVzZXJOZXdDY011dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxSZVN1YnJpYmVVc2VyTmV3Q2NNdXRhdGlvbiwgUmVTdWJyaWJlVXNlck5ld0NjTXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlUmVTdWJyaWJlVXNlck5ld0NjTXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlUmVTdWJyaWJlVXNlck5ld0NjTXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlUmVTdWJyaWJlVXNlck5ld0NjTXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFtyZVN1YnJpYmVVc2VyTmV3Q2NNdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZVJlU3VicmliZVVzZXJOZXdDY011dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIHNvdXJjZTogLy8gdmFsdWUgZm9yICdzb3VyY2UnXG4gKiAgICAgIGNjTGFzdDQ6IC8vIHZhbHVlIGZvciAnY2NMYXN0NCdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVTdWJyaWJlVXNlck5ld0NjTXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxSZVN1YnJpYmVVc2VyTmV3Q2NNdXRhdGlvbiwgUmVTdWJyaWJlVXNlck5ld0NjTXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPFJlU3VicmliZVVzZXJOZXdDY011dGF0aW9uLCBSZVN1YnJpYmVVc2VyTmV3Q2NNdXRhdGlvblZhcmlhYmxlcz4oUmVTdWJyaWJlVXNlck5ld0NjRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgUmVTdWJyaWJlVXNlck5ld0NjTXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlUmVTdWJyaWJlVXNlck5ld0NjTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgUmVTdWJyaWJlVXNlck5ld0NjTXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8UmVTdWJyaWJlVXNlck5ld0NjTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgUmVTdWJyaWJlVXNlck5ld0NjTXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8UmVTdWJyaWJlVXNlck5ld0NjTXV0YXRpb24sIFJlU3VicmliZVVzZXJOZXdDY011dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBSZWdpc3RlckRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIFJlZ2lzdGVyKCRvcHRpb25zOiBVc2VybmFtZVBhc3N3b3JkSW5wdXQhKSB7XG4gIHJlZ2lzdGVyKG9wdGlvbnM6ICRvcHRpb25zKSB7XG4gICAgLi4uUmVndWxhclVzZXJSZXNwb25zZVxuICB9XG59XG4gICAgJHtSZWd1bGFyVXNlclJlc3BvbnNlRnJhZ21lbnREb2N9YDtcbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPFJlZ2lzdGVyTXV0YXRpb24sIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlUmVnaXN0ZXJNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VSZWdpc3Rlck11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZVJlZ2lzdGVyTXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFtyZWdpc3Rlck11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlUmVnaXN0ZXJNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBvcHRpb25zOiAvLyB2YWx1ZSBmb3IgJ29wdGlvbnMnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZ2lzdGVyTXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxSZWdpc3Rlck11dGF0aW9uLCBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxSZWdpc3Rlck11dGF0aW9uLCBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzPihSZWdpc3RlckRvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlUmVnaXN0ZXJNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBSZWdpc3Rlck11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PFJlZ2lzdGVyTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgUmVnaXN0ZXJNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxSZWdpc3Rlck11dGF0aW9uLCBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBDcmVhdGVUZW1wbGF0ZXNEb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBjcmVhdGVUZW1wbGF0ZXMoJGlucHV0OiB0ZW1wbGF0ZUlucHV0ISkge1xuICBjcmVhdGVUZW1wbGF0ZXMoaW5wdXQ6ICRpbnB1dCkge1xuICAgIC4uLlJlZ3VsYXJUZW1wbGF0ZVJlc3BvbnNlXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJUZW1wbGF0ZVJlc3BvbnNlRnJhZ21lbnREb2N9YDtcbmV4cG9ydCB0eXBlIENyZWF0ZVRlbXBsYXRlc011dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxDcmVhdGVUZW1wbGF0ZXNNdXRhdGlvbiwgQ3JlYXRlVGVtcGxhdGVzTXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlQ3JlYXRlVGVtcGxhdGVzTXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlQ3JlYXRlVGVtcGxhdGVzTXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlQ3JlYXRlVGVtcGxhdGVzTXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFtjcmVhdGVUZW1wbGF0ZXNNdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZUNyZWF0ZVRlbXBsYXRlc011dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIGlucHV0OiAvLyB2YWx1ZSBmb3IgJ2lucHV0J1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVUZW1wbGF0ZXNNdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPENyZWF0ZVRlbXBsYXRlc011dGF0aW9uLCBDcmVhdGVUZW1wbGF0ZXNNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248Q3JlYXRlVGVtcGxhdGVzTXV0YXRpb24sIENyZWF0ZVRlbXBsYXRlc011dGF0aW9uVmFyaWFibGVzPihDcmVhdGVUZW1wbGF0ZXNEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBDcmVhdGVUZW1wbGF0ZXNNdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VDcmVhdGVUZW1wbGF0ZXNNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBDcmVhdGVUZW1wbGF0ZXNNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxDcmVhdGVUZW1wbGF0ZXNNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBDcmVhdGVUZW1wbGF0ZXNNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxDcmVhdGVUZW1wbGF0ZXNNdXRhdGlvbiwgQ3JlYXRlVGVtcGxhdGVzTXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IFVuc3Vic2NyaWJlU3ViRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gVW5zdWJzY3JpYmVTdWIoJHRva2VuOiBTdHJpbmchKSB7XG4gIHVuc3Vic2NyaWJlU3ViKHRva2VuOiAkdG9rZW4pIHtcbiAgICAuLi5SZWd1bGFyU3ViUmVzcG9uc2VcbiAgfVxufVxuICAgICR7UmVndWxhclN1YlJlc3BvbnNlRnJhZ21lbnREb2N9YDtcbmV4cG9ydCB0eXBlIFVuc3Vic2NyaWJlU3ViTXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPFVuc3Vic2NyaWJlU3ViTXV0YXRpb24sIFVuc3Vic2NyaWJlU3ViTXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlVW5zdWJzY3JpYmVTdWJNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VVbnN1YnNjcmliZVN1Yk11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZVVuc3Vic2NyaWJlU3ViTXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFt1bnN1YnNjcmliZVN1Yk11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlVW5zdWJzY3JpYmVTdWJNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICB0b2tlbjogLy8gdmFsdWUgZm9yICd0b2tlbidcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlVW5zdWJzY3JpYmVTdWJNdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPFVuc3Vic2NyaWJlU3ViTXV0YXRpb24sIFVuc3Vic2NyaWJlU3ViTXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPFVuc3Vic2NyaWJlU3ViTXV0YXRpb24sIFVuc3Vic2NyaWJlU3ViTXV0YXRpb25WYXJpYWJsZXM+KFVuc3Vic2NyaWJlU3ViRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgVW5zdWJzY3JpYmVTdWJNdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VVbnN1YnNjcmliZVN1Yk11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIFVuc3Vic2NyaWJlU3ViTXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8VW5zdWJzY3JpYmVTdWJNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBVbnN1YnNjcmliZVN1Yk11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPFVuc3Vic2NyaWJlU3ViTXV0YXRpb24sIFVuc3Vic2NyaWJlU3ViTXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IFVwZGF0ZVF1b3RlRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gVXBkYXRlUXVvdGUoJGlkOiBJbnQhLCAkbmFtZTogU3RyaW5nISwgJGNhdGFnb3J5OiBTdHJpbmchKSB7XG4gIHVwZGF0ZVF1b3RlKGlkOiAkaWQsIG5hbWU6ICRuYW1lLCBjYXRhZ29yeTogJGNhdGFnb3J5KSB7XG4gICAgLi4uUmVndWxhclF1b3RlUmVzcG9uc2VcbiAgfVxufVxuICAgICR7UmVndWxhclF1b3RlUmVzcG9uc2VGcmFnbWVudERvY31gO1xuZXhwb3J0IHR5cGUgVXBkYXRlUXVvdGVNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248VXBkYXRlUXVvdGVNdXRhdGlvbiwgVXBkYXRlUXVvdGVNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VVcGRhdGVRdW90ZU11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZVVwZGF0ZVF1b3RlTXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlVXBkYXRlUXVvdGVNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW3VwZGF0ZVF1b3RlTXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VVcGRhdGVRdW90ZU11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIGlkOiAvLyB2YWx1ZSBmb3IgJ2lkJ1xuICogICAgICBuYW1lOiAvLyB2YWx1ZSBmb3IgJ25hbWUnXG4gKiAgICAgIGNhdGFnb3J5OiAvLyB2YWx1ZSBmb3IgJ2NhdGFnb3J5J1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VVcGRhdGVRdW90ZU11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8VXBkYXRlUXVvdGVNdXRhdGlvbiwgVXBkYXRlUXVvdGVNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248VXBkYXRlUXVvdGVNdXRhdGlvbiwgVXBkYXRlUXVvdGVNdXRhdGlvblZhcmlhYmxlcz4oVXBkYXRlUXVvdGVEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBVcGRhdGVRdW90ZU11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVVwZGF0ZVF1b3RlTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgVXBkYXRlUXVvdGVNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxVcGRhdGVRdW90ZU11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIFVwZGF0ZVF1b3RlTXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8VXBkYXRlUXVvdGVNdXRhdGlvbiwgVXBkYXRlUXVvdGVNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgVXBkYXRlU3ViRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gVXBkYXRlU3ViKCRpZDogSW50ISwgJG5hbWU6IFN0cmluZyEsICRlbWFpbDogU3RyaW5nISwgJHN1YnNjcmliZWQ6IEJvb2xlYW4hKSB7XG4gIHVwZGF0ZVN1YihpZDogJGlkLCBuYW1lOiAkbmFtZSwgZW1haWw6ICRlbWFpbCwgc3Vic2NyaWJlZDogJHN1YnNjcmliZWQpIHtcbiAgICAuLi5SZWd1bGFyU3ViUmVzcG9uc2VcbiAgfVxufVxuICAgICR7UmVndWxhclN1YlJlc3BvbnNlRnJhZ21lbnREb2N9YDtcbmV4cG9ydCB0eXBlIFVwZGF0ZVN1Yk11dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxVcGRhdGVTdWJNdXRhdGlvbiwgVXBkYXRlU3ViTXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlVXBkYXRlU3ViTXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlVXBkYXRlU3ViTXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlVXBkYXRlU3ViTXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFt1cGRhdGVTdWJNdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZVVwZGF0ZVN1Yk11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIGlkOiAvLyB2YWx1ZSBmb3IgJ2lkJ1xuICogICAgICBuYW1lOiAvLyB2YWx1ZSBmb3IgJ25hbWUnXG4gKiAgICAgIGVtYWlsOiAvLyB2YWx1ZSBmb3IgJ2VtYWlsJ1xuICogICAgICBzdWJzY3JpYmVkOiAvLyB2YWx1ZSBmb3IgJ3N1YnNjcmliZWQnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVVwZGF0ZVN1Yk11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8VXBkYXRlU3ViTXV0YXRpb24sIFVwZGF0ZVN1Yk11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxVcGRhdGVTdWJNdXRhdGlvbiwgVXBkYXRlU3ViTXV0YXRpb25WYXJpYWJsZXM+KFVwZGF0ZVN1YkRvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIFVwZGF0ZVN1Yk11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVVwZGF0ZVN1Yk11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIFVwZGF0ZVN1Yk11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PFVwZGF0ZVN1Yk11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIFVwZGF0ZVN1Yk11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPFVwZGF0ZVN1Yk11dGF0aW9uLCBVcGRhdGVTdWJNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgVXBkYXRlVXNlckRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIFVwZGF0ZVVzZXIoJGlucHV0OiBVc2VySW5wdXQhKSB7XG4gIHVwZGF0ZVVzZXIoaW5wdXQ6ICRpbnB1dCkge1xuICAgIC4uLlByb2ZpbGVVc2VyUmVzcG9uc2VcbiAgfVxufVxuICAgICR7UHJvZmlsZVVzZXJSZXNwb25zZUZyYWdtZW50RG9jfWA7XG5leHBvcnQgdHlwZSBVcGRhdGVVc2VyTXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPFVwZGF0ZVVzZXJNdXRhdGlvbiwgVXBkYXRlVXNlck11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZVVwZGF0ZVVzZXJNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VVcGRhdGVVc2VyTXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlVXBkYXRlVXNlck11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbdXBkYXRlVXNlck11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlVXBkYXRlVXNlck11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIGlucHV0OiAvLyB2YWx1ZSBmb3IgJ2lucHV0J1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VVcGRhdGVVc2VyTXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxVcGRhdGVVc2VyTXV0YXRpb24sIFVwZGF0ZVVzZXJNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248VXBkYXRlVXNlck11dGF0aW9uLCBVcGRhdGVVc2VyTXV0YXRpb25WYXJpYWJsZXM+KFVwZGF0ZVVzZXJEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBVcGRhdGVVc2VyTXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlVXBkYXRlVXNlck11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIFVwZGF0ZVVzZXJNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxVcGRhdGVVc2VyTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgVXBkYXRlVXNlck11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPFVwZGF0ZVVzZXJNdXRhdGlvbiwgVXBkYXRlVXNlck11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBVcGRhdGVVc2VyQXV0aERvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIFVwZGF0ZVVzZXJBdXRoKCRpbnB1dDogVXNlckF1dGhJbnB1dCEpIHtcbiAgdXBkYXRlQXV0aChpbnB1dDogJGlucHV0KSB7XG4gICAgLi4uUmVndWxhclVzZXJSZXNwb25zZVxuICB9XG59XG4gICAgJHtSZWd1bGFyVXNlclJlc3BvbnNlRnJhZ21lbnREb2N9YDtcbmV4cG9ydCB0eXBlIFVwZGF0ZVVzZXJBdXRoTXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPFVwZGF0ZVVzZXJBdXRoTXV0YXRpb24sIFVwZGF0ZVVzZXJBdXRoTXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlVXBkYXRlVXNlckF1dGhNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VVcGRhdGVVc2VyQXV0aE11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZVVwZGF0ZVVzZXJBdXRoTXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFt1cGRhdGVVc2VyQXV0aE11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlVXBkYXRlVXNlckF1dGhNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBpbnB1dDogLy8gdmFsdWUgZm9yICdpbnB1dCdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlVXBkYXRlVXNlckF1dGhNdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPFVwZGF0ZVVzZXJBdXRoTXV0YXRpb24sIFVwZGF0ZVVzZXJBdXRoTXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPFVwZGF0ZVVzZXJBdXRoTXV0YXRpb24sIFVwZGF0ZVVzZXJBdXRoTXV0YXRpb25WYXJpYWJsZXM+KFVwZGF0ZVVzZXJBdXRoRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgVXBkYXRlVXNlckF1dGhNdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VVcGRhdGVVc2VyQXV0aE11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIFVwZGF0ZVVzZXJBdXRoTXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8VXBkYXRlVXNlckF1dGhNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBVcGRhdGVVc2VyQXV0aE11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPFVwZGF0ZVVzZXJBdXRoTXV0YXRpb24sIFVwZGF0ZVVzZXJBdXRoTXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IEFsbHN1YnNEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBBbGxzdWJzIHtcbiAgQWxsc3VicyB7XG4gICAgLi4uQWxsc3ViU25pcHBldFxuICB9XG59XG4gICAgJHtBbGxzdWJTbmlwcGV0RnJhZ21lbnREb2N9YDtcblxuLyoqXG4gKiBfX3VzZUFsbHN1YnNRdWVyeV9fXG4gKlxuICogVG8gcnVuIGEgcXVlcnkgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50LCBjYWxsIGB1c2VBbGxzdWJzUXVlcnlgIGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VBbGxzdWJzUXVlcnlgIHJldHVybnMgYW4gb2JqZWN0IGZyb20gQXBvbGxvIENsaWVudCB0aGF0IGNvbnRhaW5zIGxvYWRpbmcsIGVycm9yLCBhbmQgZGF0YSBwcm9wZXJ0aWVzXG4gKiB5b3UgY2FuIHVzZSB0byByZW5kZXIgeW91ciBVSS5cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIHF1ZXJ5LCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucztcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlQWxsc3Vic1F1ZXJ5KHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFsbHN1YnNRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5RdWVyeUhvb2tPcHRpb25zPEFsbHN1YnNRdWVyeSwgQWxsc3Vic1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VRdWVyeTxBbGxzdWJzUXVlcnksIEFsbHN1YnNRdWVyeVZhcmlhYmxlcz4oQWxsc3Vic0RvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbGxzdWJzTGF6eVF1ZXJ5KGJhc2VPcHRpb25zPzogQXBvbGxvLkxhenlRdWVyeUhvb2tPcHRpb25zPEFsbHN1YnNRdWVyeSwgQWxsc3Vic1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICAgIHJldHVybiBBcG9sbG8udXNlTGF6eVF1ZXJ5PEFsbHN1YnNRdWVyeSwgQWxsc3Vic1F1ZXJ5VmFyaWFibGVzPihBbGxzdWJzRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICB9XG5leHBvcnQgdHlwZSBBbGxzdWJzUXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlQWxsc3Vic1F1ZXJ5PjtcbmV4cG9ydCB0eXBlIEFsbHN1YnNMYXp5UXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlQWxsc3Vic0xhenlRdWVyeT47XG5leHBvcnQgdHlwZSBBbGxzdWJzUXVlcnlSZXN1bHQgPSBBcG9sbG8uUXVlcnlSZXN1bHQ8QWxsc3Vic1F1ZXJ5LCBBbGxzdWJzUXVlcnlWYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IEFsbHN1YnNJZERvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IEFsbHN1YnNJZCgkSWQ6IEludCEpIHtcbiAgQWxsc3Vic0lkKElkOiAkSWQpIHtcbiAgICAuLi5BbGxzdWJTbmlwcGV0XG4gIH1cbn1cbiAgICAke0FsbHN1YlNuaXBwZXRGcmFnbWVudERvY31gO1xuXG4vKipcbiAqIF9fdXNlQWxsc3Vic0lkUXVlcnlfX1xuICpcbiAqIFRvIHJ1biBhIHF1ZXJ5IHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCwgY2FsbCBgdXNlQWxsc3Vic0lkUXVlcnlgIGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VBbGxzdWJzSWRRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VBbGxzdWJzSWRRdWVyeSh7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBJZDogLy8gdmFsdWUgZm9yICdJZCdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQWxsc3Vic0lkUXVlcnkoYmFzZU9wdGlvbnM6IEFwb2xsby5RdWVyeUhvb2tPcHRpb25zPEFsbHN1YnNJZFF1ZXJ5LCBBbGxzdWJzSWRRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlUXVlcnk8QWxsc3Vic0lkUXVlcnksIEFsbHN1YnNJZFF1ZXJ5VmFyaWFibGVzPihBbGxzdWJzSWREb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgZnVuY3Rpb24gdXNlQWxsc3Vic0lkTGF6eVF1ZXJ5KGJhc2VPcHRpb25zPzogQXBvbGxvLkxhenlRdWVyeUhvb2tPcHRpb25zPEFsbHN1YnNJZFF1ZXJ5LCBBbGxzdWJzSWRRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgICByZXR1cm4gQXBvbGxvLnVzZUxhenlRdWVyeTxBbGxzdWJzSWRRdWVyeSwgQWxsc3Vic0lkUXVlcnlWYXJpYWJsZXM+KEFsbHN1YnNJZERvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgICAgfVxuZXhwb3J0IHR5cGUgQWxsc3Vic0lkUXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlQWxsc3Vic0lkUXVlcnk+O1xuZXhwb3J0IHR5cGUgQWxsc3Vic0lkTGF6eVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUFsbHN1YnNJZExhenlRdWVyeT47XG5leHBvcnQgdHlwZSBBbGxzdWJzSWRRdWVyeVJlc3VsdCA9IEFwb2xsby5RdWVyeVJlc3VsdDxBbGxzdWJzSWRRdWVyeSwgQWxsc3Vic0lkUXVlcnlWYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IE1haWxBY3Rpdml0eUJ5SWREb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBtYWlsQWN0aXZpdHlCeUlkKCRpZDogSW50ISkge1xuICBtYWlsQWN0aXZpdHlCeUlkKGlkOiAkaWQpIHtcbiAgICAuLi5BY3Rpdml0eVNuaXBwZXRcbiAgfVxufVxuICAgICR7QWN0aXZpdHlTbmlwcGV0RnJhZ21lbnREb2N9YDtcblxuLyoqXG4gKiBfX3VzZU1haWxBY3Rpdml0eUJ5SWRRdWVyeV9fXG4gKlxuICogVG8gcnVuIGEgcXVlcnkgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50LCBjYWxsIGB1c2VNYWlsQWN0aXZpdHlCeUlkUXVlcnlgIGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VNYWlsQWN0aXZpdHlCeUlkUXVlcnlgIHJldHVybnMgYW4gb2JqZWN0IGZyb20gQXBvbGxvIENsaWVudCB0aGF0IGNvbnRhaW5zIGxvYWRpbmcsIGVycm9yLCBhbmQgZGF0YSBwcm9wZXJ0aWVzXG4gKiB5b3UgY2FuIHVzZSB0byByZW5kZXIgeW91ciBVSS5cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIHF1ZXJ5LCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucztcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlTWFpbEFjdGl2aXR5QnlJZFF1ZXJ5KHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIGlkOiAvLyB2YWx1ZSBmb3IgJ2lkJ1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNYWlsQWN0aXZpdHlCeUlkUXVlcnkoYmFzZU9wdGlvbnM6IEFwb2xsby5RdWVyeUhvb2tPcHRpb25zPE1haWxBY3Rpdml0eUJ5SWRRdWVyeSwgTWFpbEFjdGl2aXR5QnlJZFF1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VRdWVyeTxNYWlsQWN0aXZpdHlCeUlkUXVlcnksIE1haWxBY3Rpdml0eUJ5SWRRdWVyeVZhcmlhYmxlcz4oTWFpbEFjdGl2aXR5QnlJZERvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VNYWlsQWN0aXZpdHlCeUlkTGF6eVF1ZXJ5KGJhc2VPcHRpb25zPzogQXBvbGxvLkxhenlRdWVyeUhvb2tPcHRpb25zPE1haWxBY3Rpdml0eUJ5SWRRdWVyeSwgTWFpbEFjdGl2aXR5QnlJZFF1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICAgIHJldHVybiBBcG9sbG8udXNlTGF6eVF1ZXJ5PE1haWxBY3Rpdml0eUJ5SWRRdWVyeSwgTWFpbEFjdGl2aXR5QnlJZFF1ZXJ5VmFyaWFibGVzPihNYWlsQWN0aXZpdHlCeUlkRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICB9XG5leHBvcnQgdHlwZSBNYWlsQWN0aXZpdHlCeUlkUXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlTWFpbEFjdGl2aXR5QnlJZFF1ZXJ5PjtcbmV4cG9ydCB0eXBlIE1haWxBY3Rpdml0eUJ5SWRMYXp5UXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlTWFpbEFjdGl2aXR5QnlJZExhenlRdWVyeT47XG5leHBvcnQgdHlwZSBNYWlsQWN0aXZpdHlCeUlkUXVlcnlSZXN1bHQgPSBBcG9sbG8uUXVlcnlSZXN1bHQ8TWFpbEFjdGl2aXR5QnlJZFF1ZXJ5LCBNYWlsQWN0aXZpdHlCeUlkUXVlcnlWYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IFBhZ2luYXRlZEFjdGl2aXR5RG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgcGFnaW5hdGVkQWN0aXZpdHkoJGxpbWl0OiBJbnQhLCAkY3Vyc29yOiBTdHJpbmcpIHtcbiAgUGFnaW5hdGVkbWFpbEFjdGl2aXR5KGxpbWl0OiAkbGltaXQsIGN1cnNvcjogJGN1cnNvcikge1xuICAgIGhhc01vcmVcbiAgICBQYWdpbmF0ZWRtYWlsQWN0aXZpdHkge1xuICAgICAgLi4uUGFnaW5hdGVkQWN0aXZpdHlTbmlwcGV0XG4gICAgfVxuICB9XG59XG4gICAgJHtQYWdpbmF0ZWRBY3Rpdml0eVNuaXBwZXRGcmFnbWVudERvY31gO1xuXG4vKipcbiAqIF9fdXNlUGFnaW5hdGVkQWN0aXZpdHlRdWVyeV9fXG4gKlxuICogVG8gcnVuIGEgcXVlcnkgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50LCBjYWxsIGB1c2VQYWdpbmF0ZWRBY3Rpdml0eVF1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlUGFnaW5hdGVkQWN0aXZpdHlRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VQYWdpbmF0ZWRBY3Rpdml0eVF1ZXJ5KHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIGxpbWl0OiAvLyB2YWx1ZSBmb3IgJ2xpbWl0J1xuICogICAgICBjdXJzb3I6IC8vIHZhbHVlIGZvciAnY3Vyc29yJ1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VQYWdpbmF0ZWRBY3Rpdml0eVF1ZXJ5KGJhc2VPcHRpb25zOiBBcG9sbG8uUXVlcnlIb29rT3B0aW9uczxQYWdpbmF0ZWRBY3Rpdml0eVF1ZXJ5LCBQYWdpbmF0ZWRBY3Rpdml0eVF1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VRdWVyeTxQYWdpbmF0ZWRBY3Rpdml0eVF1ZXJ5LCBQYWdpbmF0ZWRBY3Rpdml0eVF1ZXJ5VmFyaWFibGVzPihQYWdpbmF0ZWRBY3Rpdml0eURvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VQYWdpbmF0ZWRBY3Rpdml0eUxhenlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5MYXp5UXVlcnlIb29rT3B0aW9uczxQYWdpbmF0ZWRBY3Rpdml0eVF1ZXJ5LCBQYWdpbmF0ZWRBY3Rpdml0eVF1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICAgIHJldHVybiBBcG9sbG8udXNlTGF6eVF1ZXJ5PFBhZ2luYXRlZEFjdGl2aXR5UXVlcnksIFBhZ2luYXRlZEFjdGl2aXR5UXVlcnlWYXJpYWJsZXM+KFBhZ2luYXRlZEFjdGl2aXR5RG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICB9XG5leHBvcnQgdHlwZSBQYWdpbmF0ZWRBY3Rpdml0eVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVBhZ2luYXRlZEFjdGl2aXR5UXVlcnk+O1xuZXhwb3J0IHR5cGUgUGFnaW5hdGVkQWN0aXZpdHlMYXp5UXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlUGFnaW5hdGVkQWN0aXZpdHlMYXp5UXVlcnk+O1xuZXhwb3J0IHR5cGUgUGFnaW5hdGVkQWN0aXZpdHlRdWVyeVJlc3VsdCA9IEFwb2xsby5RdWVyeVJlc3VsdDxQYWdpbmF0ZWRBY3Rpdml0eVF1ZXJ5LCBQYWdpbmF0ZWRBY3Rpdml0eVF1ZXJ5VmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBNYWlsQWN0aXZpdHlieUlkRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgbWFpbEFjdGl2aXR5YnlJZCgkbGltaXQ6IEludCEsICRjdXJzb3I6IFN0cmluZywgJGlkOiBJbnQhKSB7XG4gIFBhZ2luYXRlZG1haWxBY3Rpdml0eWJ5SWQobGltaXQ6ICRsaW1pdCwgY3Vyc29yOiAkY3Vyc29yLCBpZDogJGlkKSB7XG4gICAgaGFzTW9yZVxuICAgIFBhZ2luYXRlZG1haWxBY3Rpdml0eSB7XG4gICAgICAuLi5QYWdpbmF0ZWRBY3Rpdml0eVNuaXBwZXRcbiAgICB9XG4gIH1cbn1cbiAgICAke1BhZ2luYXRlZEFjdGl2aXR5U25pcHBldEZyYWdtZW50RG9jfWA7XG5cbi8qKlxuICogX191c2VNYWlsQWN0aXZpdHlieUlkUXVlcnlfX1xuICpcbiAqIFRvIHJ1biBhIHF1ZXJ5IHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCwgY2FsbCBgdXNlTWFpbEFjdGl2aXR5YnlJZFF1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlTWFpbEFjdGl2aXR5YnlJZFF1ZXJ5YCByZXR1cm5zIGFuIG9iamVjdCBmcm9tIEFwb2xsbyBDbGllbnQgdGhhdCBjb250YWlucyBsb2FkaW5nLCBlcnJvciwgYW5kIGRhdGEgcHJvcGVydGllc1xuICogeW91IGNhbiB1c2UgdG8gcmVuZGVyIHlvdXIgVUkuXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBxdWVyeSwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnM7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZU1haWxBY3Rpdml0eWJ5SWRRdWVyeSh7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBsaW1pdDogLy8gdmFsdWUgZm9yICdsaW1pdCdcbiAqICAgICAgY3Vyc29yOiAvLyB2YWx1ZSBmb3IgJ2N1cnNvcidcbiAqICAgICAgaWQ6IC8vIHZhbHVlIGZvciAnaWQnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1haWxBY3Rpdml0eWJ5SWRRdWVyeShiYXNlT3B0aW9uczogQXBvbGxvLlF1ZXJ5SG9va09wdGlvbnM8TWFpbEFjdGl2aXR5YnlJZFF1ZXJ5LCBNYWlsQWN0aXZpdHlieUlkUXVlcnlWYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZVF1ZXJ5PE1haWxBY3Rpdml0eWJ5SWRRdWVyeSwgTWFpbEFjdGl2aXR5YnlJZFF1ZXJ5VmFyaWFibGVzPihNYWlsQWN0aXZpdHlieUlkRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1haWxBY3Rpdml0eWJ5SWRMYXp5UXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uTGF6eVF1ZXJ5SG9va09wdGlvbnM8TWFpbEFjdGl2aXR5YnlJZFF1ZXJ5LCBNYWlsQWN0aXZpdHlieUlkUXVlcnlWYXJpYWJsZXM+KSB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgICAgcmV0dXJuIEFwb2xsby51c2VMYXp5UXVlcnk8TWFpbEFjdGl2aXR5YnlJZFF1ZXJ5LCBNYWlsQWN0aXZpdHlieUlkUXVlcnlWYXJpYWJsZXM+KE1haWxBY3Rpdml0eWJ5SWREb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbmV4cG9ydCB0eXBlIE1haWxBY3Rpdml0eWJ5SWRRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VNYWlsQWN0aXZpdHlieUlkUXVlcnk+O1xuZXhwb3J0IHR5cGUgTWFpbEFjdGl2aXR5YnlJZExhenlRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VNYWlsQWN0aXZpdHlieUlkTGF6eVF1ZXJ5PjtcbmV4cG9ydCB0eXBlIE1haWxBY3Rpdml0eWJ5SWRRdWVyeVJlc3VsdCA9IEFwb2xsby5RdWVyeVJlc3VsdDxNYWlsQWN0aXZpdHlieUlkUXVlcnksIE1haWxBY3Rpdml0eWJ5SWRRdWVyeVZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgUXVvdGVzRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgUXVvdGVzKCRsaW1pdDogSW50ISwgJGN1cnNvcjogU3RyaW5nKSB7XG4gIHF1b3RlcyhsaW1pdDogJGxpbWl0LCBjdXJzb3I6ICRjdXJzb3IpIHtcbiAgICBoYXNNb3JlXG4gICAgcXVvdGVzIHtcbiAgICAgIC4uLlF1b3RlU25pcHBldFxuICAgIH1cbiAgfVxufVxuICAgICR7UXVvdGVTbmlwcGV0RnJhZ21lbnREb2N9YDtcblxuLyoqXG4gKiBfX3VzZVF1b3Rlc1F1ZXJ5X19cbiAqXG4gKiBUbyBydW4gYSBxdWVyeSB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQsIGNhbGwgYHVzZVF1b3Rlc1F1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlUXVvdGVzUXVlcnlgIHJldHVybnMgYW4gb2JqZWN0IGZyb20gQXBvbGxvIENsaWVudCB0aGF0IGNvbnRhaW5zIGxvYWRpbmcsIGVycm9yLCBhbmQgZGF0YSBwcm9wZXJ0aWVzXG4gKiB5b3UgY2FuIHVzZSB0byByZW5kZXIgeW91ciBVSS5cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIHF1ZXJ5LCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucztcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVvdGVzUXVlcnkoe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgbGltaXQ6IC8vIHZhbHVlIGZvciAnbGltaXQnXG4gKiAgICAgIGN1cnNvcjogLy8gdmFsdWUgZm9yICdjdXJzb3InXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVF1b3Rlc1F1ZXJ5KGJhc2VPcHRpb25zOiBBcG9sbG8uUXVlcnlIb29rT3B0aW9uczxRdW90ZXNRdWVyeSwgUXVvdGVzUXVlcnlWYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZVF1ZXJ5PFF1b3Rlc1F1ZXJ5LCBRdW90ZXNRdWVyeVZhcmlhYmxlcz4oUXVvdGVzRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IGZ1bmN0aW9uIHVzZVF1b3Rlc0xhenlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5MYXp5UXVlcnlIb29rT3B0aW9uczxRdW90ZXNRdWVyeSwgUXVvdGVzUXVlcnlWYXJpYWJsZXM+KSB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgICAgcmV0dXJuIEFwb2xsby51c2VMYXp5UXVlcnk8UXVvdGVzUXVlcnksIFF1b3Rlc1F1ZXJ5VmFyaWFibGVzPihRdW90ZXNEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbmV4cG9ydCB0eXBlIFF1b3Rlc1F1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVF1b3Rlc1F1ZXJ5PjtcbmV4cG9ydCB0eXBlIFF1b3Rlc0xhenlRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VRdW90ZXNMYXp5UXVlcnk+O1xuZXhwb3J0IHR5cGUgUXVvdGVzUXVlcnlSZXN1bHQgPSBBcG9sbG8uUXVlcnlSZXN1bHQ8UXVvdGVzUXVlcnksIFF1b3Rlc1F1ZXJ5VmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBTdWJzRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgU3VicygkbGltaXQ6IEludCEsICRjdXJzb3I6IFN0cmluZykge1xuICBzdWJzKGxpbWl0OiAkbGltaXQsIGN1cnNvcjogJGN1cnNvcikge1xuICAgIGhhc01vcmVcbiAgICBzdWJzIHtcbiAgICAgIC4uLlN1YlNuaXBwZXRcbiAgICB9XG4gIH1cbn1cbiAgICAke1N1YlNuaXBwZXRGcmFnbWVudERvY31gO1xuXG4vKipcbiAqIF9fdXNlU3Vic1F1ZXJ5X19cbiAqXG4gKiBUbyBydW4gYSBxdWVyeSB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQsIGNhbGwgYHVzZVN1YnNRdWVyeWAgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZVN1YnNRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VTdWJzUXVlcnkoe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgbGltaXQ6IC8vIHZhbHVlIGZvciAnbGltaXQnXG4gKiAgICAgIGN1cnNvcjogLy8gdmFsdWUgZm9yICdjdXJzb3InXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN1YnNRdWVyeShiYXNlT3B0aW9uczogQXBvbGxvLlF1ZXJ5SG9va09wdGlvbnM8U3Vic1F1ZXJ5LCBTdWJzUXVlcnlWYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZVF1ZXJ5PFN1YnNRdWVyeSwgU3Vic1F1ZXJ5VmFyaWFibGVzPihTdWJzRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN1YnNMYXp5UXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uTGF6eVF1ZXJ5SG9va09wdGlvbnM8U3Vic1F1ZXJ5LCBTdWJzUXVlcnlWYXJpYWJsZXM+KSB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgICAgcmV0dXJuIEFwb2xsby51c2VMYXp5UXVlcnk8U3Vic1F1ZXJ5LCBTdWJzUXVlcnlWYXJpYWJsZXM+KFN1YnNEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbmV4cG9ydCB0eXBlIFN1YnNRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VTdWJzUXVlcnk+O1xuZXhwb3J0IHR5cGUgU3Vic0xhenlRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VTdWJzTGF6eVF1ZXJ5PjtcbmV4cG9ydCB0eXBlIFN1YnNRdWVyeVJlc3VsdCA9IEFwb2xsby5RdWVyeVJlc3VsdDxTdWJzUXVlcnksIFN1YnNRdWVyeVZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgQWxsdXNlckRvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IGFsbHVzZXIge1xuICBhbGx1c2VyIHtcbiAgICAuLi5hbGx1c2VyU25pcHBldFxuICB9XG59XG4gICAgJHtBbGx1c2VyU25pcHBldEZyYWdtZW50RG9jfWA7XG5cbi8qKlxuICogX191c2VBbGx1c2VyUXVlcnlfX1xuICpcbiAqIFRvIHJ1biBhIHF1ZXJ5IHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCwgY2FsbCBgdXNlQWxsdXNlclF1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlQWxsdXNlclF1ZXJ5YCByZXR1cm5zIGFuIG9iamVjdCBmcm9tIEFwb2xsbyBDbGllbnQgdGhhdCBjb250YWlucyBsb2FkaW5nLCBlcnJvciwgYW5kIGRhdGEgcHJvcGVydGllc1xuICogeW91IGNhbiB1c2UgdG8gcmVuZGVyIHlvdXIgVUkuXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBxdWVyeSwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnM7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZUFsbHVzZXJRdWVyeSh7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbGx1c2VyUXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uUXVlcnlIb29rT3B0aW9uczxBbGx1c2VyUXVlcnksIEFsbHVzZXJRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlUXVlcnk8QWxsdXNlclF1ZXJ5LCBBbGx1c2VyUXVlcnlWYXJpYWJsZXM+KEFsbHVzZXJEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgZnVuY3Rpb24gdXNlQWxsdXNlckxhenlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5MYXp5UXVlcnlIb29rT3B0aW9uczxBbGx1c2VyUXVlcnksIEFsbHVzZXJRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgICByZXR1cm4gQXBvbGxvLnVzZUxhenlRdWVyeTxBbGx1c2VyUXVlcnksIEFsbHVzZXJRdWVyeVZhcmlhYmxlcz4oQWxsdXNlckRvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgICAgfVxuZXhwb3J0IHR5cGUgQWxsdXNlclF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUFsbHVzZXJRdWVyeT47XG5leHBvcnQgdHlwZSBBbGx1c2VyTGF6eVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUFsbHVzZXJMYXp5UXVlcnk+O1xuZXhwb3J0IHR5cGUgQWxsdXNlclF1ZXJ5UmVzdWx0ID0gQXBvbGxvLlF1ZXJ5UmVzdWx0PEFsbHVzZXJRdWVyeSwgQWxsdXNlclF1ZXJ5VmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBNYWlsQWN0aXZpdHlEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBtYWlsQWN0aXZpdHkge1xuICBtYWlsQWN0aXZpdHkge1xuICAgIC4uLkFjdGl2aXR5U25pcHBldFxuICB9XG59XG4gICAgJHtBY3Rpdml0eVNuaXBwZXRGcmFnbWVudERvY31gO1xuXG4vKipcbiAqIF9fdXNlTWFpbEFjdGl2aXR5UXVlcnlfX1xuICpcbiAqIFRvIHJ1biBhIHF1ZXJ5IHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCwgY2FsbCBgdXNlTWFpbEFjdGl2aXR5UXVlcnlgIGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VNYWlsQWN0aXZpdHlRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VNYWlsQWN0aXZpdHlRdWVyeSh7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNYWlsQWN0aXZpdHlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5RdWVyeUhvb2tPcHRpb25zPE1haWxBY3Rpdml0eVF1ZXJ5LCBNYWlsQWN0aXZpdHlRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlUXVlcnk8TWFpbEFjdGl2aXR5UXVlcnksIE1haWxBY3Rpdml0eVF1ZXJ5VmFyaWFibGVzPihNYWlsQWN0aXZpdHlEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgZnVuY3Rpb24gdXNlTWFpbEFjdGl2aXR5TGF6eVF1ZXJ5KGJhc2VPcHRpb25zPzogQXBvbGxvLkxhenlRdWVyeUhvb2tPcHRpb25zPE1haWxBY3Rpdml0eVF1ZXJ5LCBNYWlsQWN0aXZpdHlRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgICByZXR1cm4gQXBvbGxvLnVzZUxhenlRdWVyeTxNYWlsQWN0aXZpdHlRdWVyeSwgTWFpbEFjdGl2aXR5UXVlcnlWYXJpYWJsZXM+KE1haWxBY3Rpdml0eURvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgICAgfVxuZXhwb3J0IHR5cGUgTWFpbEFjdGl2aXR5UXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlTWFpbEFjdGl2aXR5UXVlcnk+O1xuZXhwb3J0IHR5cGUgTWFpbEFjdGl2aXR5TGF6eVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZU1haWxBY3Rpdml0eUxhenlRdWVyeT47XG5leHBvcnQgdHlwZSBNYWlsQWN0aXZpdHlRdWVyeVJlc3VsdCA9IEFwb2xsby5RdWVyeVJlc3VsdDxNYWlsQWN0aXZpdHlRdWVyeSwgTWFpbEFjdGl2aXR5UXVlcnlWYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IE1lRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgTWUge1xuICBtZSB7XG4gICAgLi4uUmVndWxhclVzZXJcbiAgfVxufVxuICAgICR7UmVndWxhclVzZXJGcmFnbWVudERvY31gO1xuXG4vKipcbiAqIF9fdXNlTWVRdWVyeV9fXG4gKlxuICogVG8gcnVuIGEgcXVlcnkgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50LCBjYWxsIGB1c2VNZVF1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlTWVRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VNZVF1ZXJ5KHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lUXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uUXVlcnlIb29rT3B0aW9uczxNZVF1ZXJ5LCBNZVF1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VRdWVyeTxNZVF1ZXJ5LCBNZVF1ZXJ5VmFyaWFibGVzPihNZURvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZUxhenlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5MYXp5UXVlcnlIb29rT3B0aW9uczxNZVF1ZXJ5LCBNZVF1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICAgIHJldHVybiBBcG9sbG8udXNlTGF6eVF1ZXJ5PE1lUXVlcnksIE1lUXVlcnlWYXJpYWJsZXM+KE1lRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICB9XG5leHBvcnQgdHlwZSBNZVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZU1lUXVlcnk+O1xuZXhwb3J0IHR5cGUgTWVMYXp5UXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlTWVMYXp5UXVlcnk+O1xuZXhwb3J0IHR5cGUgTWVRdWVyeVJlc3VsdCA9IEFwb2xsby5RdWVyeVJlc3VsdDxNZVF1ZXJ5LCBNZVF1ZXJ5VmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBQcm9maWxlRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgUHJvZmlsZSB7XG4gIG1lIHtcbiAgICAuLi5Qcm9maWxlVXNlclxuICB9XG59XG4gICAgJHtQcm9maWxlVXNlckZyYWdtZW50RG9jfWA7XG5cbi8qKlxuICogX191c2VQcm9maWxlUXVlcnlfX1xuICpcbiAqIFRvIHJ1biBhIHF1ZXJ5IHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCwgY2FsbCBgdXNlUHJvZmlsZVF1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlUHJvZmlsZVF1ZXJ5YCByZXR1cm5zIGFuIG9iamVjdCBmcm9tIEFwb2xsbyBDbGllbnQgdGhhdCBjb250YWlucyBsb2FkaW5nLCBlcnJvciwgYW5kIGRhdGEgcHJvcGVydGllc1xuICogeW91IGNhbiB1c2UgdG8gcmVuZGVyIHlvdXIgVUkuXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBxdWVyeSwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnM7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVByb2ZpbGVRdWVyeSh7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VQcm9maWxlUXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uUXVlcnlIb29rT3B0aW9uczxQcm9maWxlUXVlcnksIFByb2ZpbGVRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlUXVlcnk8UHJvZmlsZVF1ZXJ5LCBQcm9maWxlUXVlcnlWYXJpYWJsZXM+KFByb2ZpbGVEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgZnVuY3Rpb24gdXNlUHJvZmlsZUxhenlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5MYXp5UXVlcnlIb29rT3B0aW9uczxQcm9maWxlUXVlcnksIFByb2ZpbGVRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgICByZXR1cm4gQXBvbGxvLnVzZUxhenlRdWVyeTxQcm9maWxlUXVlcnksIFByb2ZpbGVRdWVyeVZhcmlhYmxlcz4oUHJvZmlsZURvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgICAgfVxuZXhwb3J0IHR5cGUgUHJvZmlsZVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVByb2ZpbGVRdWVyeT47XG5leHBvcnQgdHlwZSBQcm9maWxlTGF6eVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVByb2ZpbGVMYXp5UXVlcnk+O1xuZXhwb3J0IHR5cGUgUHJvZmlsZVF1ZXJ5UmVzdWx0ID0gQXBvbGxvLlF1ZXJ5UmVzdWx0PFByb2ZpbGVRdWVyeSwgUHJvZmlsZVF1ZXJ5VmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBTdWJieXRva2VuRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgc3ViYnl0b2tlbigkdG9rZW46IFN0cmluZyEpIHtcbiAgc3ViYnl0b2tlbih0b2tlbjogJHRva2VuKSB7XG4gICAgLi4uU3ViU25pcHBldFxuICB9XG59XG4gICAgJHtTdWJTbmlwcGV0RnJhZ21lbnREb2N9YDtcblxuLyoqXG4gKiBfX3VzZVN1YmJ5dG9rZW5RdWVyeV9fXG4gKlxuICogVG8gcnVuIGEgcXVlcnkgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50LCBjYWxsIGB1c2VTdWJieXRva2VuUXVlcnlgIGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VTdWJieXRva2VuUXVlcnlgIHJldHVybnMgYW4gb2JqZWN0IGZyb20gQXBvbGxvIENsaWVudCB0aGF0IGNvbnRhaW5zIGxvYWRpbmcsIGVycm9yLCBhbmQgZGF0YSBwcm9wZXJ0aWVzXG4gKiB5b3UgY2FuIHVzZSB0byByZW5kZXIgeW91ciBVSS5cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIHF1ZXJ5LCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucztcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlU3ViYnl0b2tlblF1ZXJ5KHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIHRva2VuOiAvLyB2YWx1ZSBmb3IgJ3Rva2VuJ1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdWJieXRva2VuUXVlcnkoYmFzZU9wdGlvbnM6IEFwb2xsby5RdWVyeUhvb2tPcHRpb25zPFN1YmJ5dG9rZW5RdWVyeSwgU3ViYnl0b2tlblF1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VRdWVyeTxTdWJieXRva2VuUXVlcnksIFN1YmJ5dG9rZW5RdWVyeVZhcmlhYmxlcz4oU3ViYnl0b2tlbkRvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdWJieXRva2VuTGF6eVF1ZXJ5KGJhc2VPcHRpb25zPzogQXBvbGxvLkxhenlRdWVyeUhvb2tPcHRpb25zPFN1YmJ5dG9rZW5RdWVyeSwgU3ViYnl0b2tlblF1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICAgIHJldHVybiBBcG9sbG8udXNlTGF6eVF1ZXJ5PFN1YmJ5dG9rZW5RdWVyeSwgU3ViYnl0b2tlblF1ZXJ5VmFyaWFibGVzPihTdWJieXRva2VuRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICB9XG5leHBvcnQgdHlwZSBTdWJieXRva2VuUXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlU3ViYnl0b2tlblF1ZXJ5PjtcbmV4cG9ydCB0eXBlIFN1YmJ5dG9rZW5MYXp5UXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlU3ViYnl0b2tlbkxhenlRdWVyeT47XG5leHBvcnQgdHlwZSBTdWJieXRva2VuUXVlcnlSZXN1bHQgPSBBcG9sbG8uUXVlcnlSZXN1bHQ8U3ViYnl0b2tlblF1ZXJ5LCBTdWJieXRva2VuUXVlcnlWYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IEdldEFsbHRlbXBsYXRlc0RvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IEdldEFsbHRlbXBsYXRlcygkbGltaXQ6IEludCEsICRjdXJzb3I6IFN0cmluZykge1xuICBnZXRBbGx0ZW1wbGF0ZXMobGltaXQ6ICRsaW1pdCwgY3Vyc29yOiAkY3Vyc29yKSB7XG4gICAgaGFzTW9yZVxuICAgIHRlbXBsYXRlcyB7XG4gICAgICAuLi5UZW1wbGF0ZXNTbmlwcGV0XG4gICAgfVxuICB9XG59XG4gICAgJHtUZW1wbGF0ZXNTbmlwcGV0RnJhZ21lbnREb2N9YDtcblxuLyoqXG4gKiBfX3VzZUdldEFsbHRlbXBsYXRlc1F1ZXJ5X19cbiAqXG4gKiBUbyBydW4gYSBxdWVyeSB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQsIGNhbGwgYHVzZUdldEFsbHRlbXBsYXRlc1F1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlR2V0QWxsdGVtcGxhdGVzUXVlcnlgIHJldHVybnMgYW4gb2JqZWN0IGZyb20gQXBvbGxvIENsaWVudCB0aGF0IGNvbnRhaW5zIGxvYWRpbmcsIGVycm9yLCBhbmQgZGF0YSBwcm9wZXJ0aWVzXG4gKiB5b3UgY2FuIHVzZSB0byByZW5kZXIgeW91ciBVSS5cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIHF1ZXJ5LCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucztcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlR2V0QWxsdGVtcGxhdGVzUXVlcnkoe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgbGltaXQ6IC8vIHZhbHVlIGZvciAnbGltaXQnXG4gKiAgICAgIGN1cnNvcjogLy8gdmFsdWUgZm9yICdjdXJzb3InXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUdldEFsbHRlbXBsYXRlc1F1ZXJ5KGJhc2VPcHRpb25zOiBBcG9sbG8uUXVlcnlIb29rT3B0aW9uczxHZXRBbGx0ZW1wbGF0ZXNRdWVyeSwgR2V0QWxsdGVtcGxhdGVzUXVlcnlWYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZVF1ZXJ5PEdldEFsbHRlbXBsYXRlc1F1ZXJ5LCBHZXRBbGx0ZW1wbGF0ZXNRdWVyeVZhcmlhYmxlcz4oR2V0QWxsdGVtcGxhdGVzRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUdldEFsbHRlbXBsYXRlc0xhenlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5MYXp5UXVlcnlIb29rT3B0aW9uczxHZXRBbGx0ZW1wbGF0ZXNRdWVyeSwgR2V0QWxsdGVtcGxhdGVzUXVlcnlWYXJpYWJsZXM+KSB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgICAgcmV0dXJuIEFwb2xsby51c2VMYXp5UXVlcnk8R2V0QWxsdGVtcGxhdGVzUXVlcnksIEdldEFsbHRlbXBsYXRlc1F1ZXJ5VmFyaWFibGVzPihHZXRBbGx0ZW1wbGF0ZXNEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbmV4cG9ydCB0eXBlIEdldEFsbHRlbXBsYXRlc1F1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUdldEFsbHRlbXBsYXRlc1F1ZXJ5PjtcbmV4cG9ydCB0eXBlIEdldEFsbHRlbXBsYXRlc0xhenlRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VHZXRBbGx0ZW1wbGF0ZXNMYXp5UXVlcnk+O1xuZXhwb3J0IHR5cGUgR2V0QWxsdGVtcGxhdGVzUXVlcnlSZXN1bHQgPSBBcG9sbG8uUXVlcnlSZXN1bHQ8R2V0QWxsdGVtcGxhdGVzUXVlcnksIEdldEFsbHRlbXBsYXRlc1F1ZXJ5VmFyaWFibGVzPjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgdXNlSXNBdXRoIH0gZnJvbSBcIi4uL3V0aWxzL3VzZUlzQXV0aFwiO1xyXG5pbXBvcnQgeyB3aXRoQXBvbGxvIH0gZnJvbSBcIi4uL3V0aWxzL3dpdGhBcG9sbG9cIjtcclxuaW1wb3J0IEVNYWlsQWN0aXZpdHkgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFpbF9BY3Rpdml0eVwiO1xyXG5pbXBvcnQgeyB1c2VNZVF1ZXJ5IH0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcbmltcG9ydCB7IGlzU2VydmVyIH0gZnJvbSBcIi4uL3V0aWxzL2lzU2VydmVyXCI7XHJcbmltcG9ydCBVc2Vyc01haWxzQWN0aXZpdGllcyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VyTWFpbEFjdGl2aXR5XCI7XHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gIHVzZUlzQXV0aCgpO1xyXG4gIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcgfSA9IHVzZU1lUXVlcnkoe1xyXG4gICAgc2tpcDogaXNTZXJ2ZXIoKSxcclxuICB9KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgaWYgKGRhdGE/Lm1lPy5yb2xlICE9PSBcImFkbWluXCIpIHtcclxuICAgICAgICBzZXRVc2VySWQoZGF0YS5tZSEuaWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW2RhdGFdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApIDogZGF0YT8ubWU/LnJvbGUgPT09IFwiYWRtaW5cIiA/IChcclxuICAgICAgICA8RU1haWxBY3Rpdml0eSAvPlxyXG4gICAgICApIDogdXNlcklkICE9PSAwID8gKFxyXG4gICAgICAgIDxVc2Vyc01haWxzQWN0aXZpdGllcyBpZD17dXNlcklkfSAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIFwiXCJcclxuICAgICAgKX1cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKHsgc3NyOiBmYWxzZSB9KShJbmRleCk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5cclxuLy8gT24gdGhlIGNsaWVudCwgd2Ugc3RvcmUgdGhlIEFwb2xsbyBDbGllbnQgaW4gdGhlIGZvbGxvd2luZyB2YXJpYWJsZS5cclxuLy8gVGhpcyBwcmV2ZW50cyB0aGUgY2xpZW50IGZyb20gcmVpbml0aWFsaXppbmcgYmV0d2VlbiBwYWdlIHRyYW5zaXRpb25zLlxyXG5sZXQgZ2xvYmFsQXBvbGxvQ2xpZW50ID0gbnVsbDtcclxuXHJcbi8qKlxyXG4gKiBJbnN0YWxscyB0aGUgQXBvbGxvIENsaWVudCBvbiBOZXh0UGFnZUNvbnRleHRcclxuICogb3IgTmV4dEFwcENvbnRleHQuIFVzZWZ1bCBpZiB5b3Ugd2FudCB0byB1c2UgYXBvbGxvQ2xpZW50XHJcbiAqIGluc2lkZSBnZXRTdGF0aWNQcm9wcywgZ2V0U3RhdGljUGF0aHMgb3IgZ2V0U2VydmVyU2lkZVByb3BzXHJcbiAqIEBwYXJhbSB7TmV4dFBhZ2VDb250ZXh0IHwgTmV4dEFwcENvbnRleHR9IGN0eFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGluaXRPbkNvbnRleHQgPSAoYWMsIGN0eCkgPT4ge1xyXG4gIGNvbnN0IGluQXBwQ29udGV4dCA9IEJvb2xlYW4oY3R4LmN0eCk7XHJcblxyXG4gIC8vIFdlIGNvbnNpZGVyIGluc3RhbGxpbmcgYHdpdGhBcG9sbG8oeyBzc3I6IHRydWUgfSlgIG9uIGdsb2JhbCBBcHAgbGV2ZWxcclxuICAvLyBhcyBhbnRpcGF0dGVybiBzaW5jZSBpdCBkaXNhYmxlcyBwcm9qZWN0IHdpZGUgQXV0b21hdGljIFN0YXRpYyBPcHRpbWl6YXRpb24uXHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcclxuICAgIGlmIChpbkFwcENvbnRleHQpIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIFwiV2FybmluZzogWW91IGhhdmUgb3B0ZWQtb3V0IG9mIEF1dG9tYXRpYyBTdGF0aWMgT3B0aW1pemF0aW9uIGR1ZSB0byBgd2l0aEFwb2xsb2AgaW4gYHBhZ2VzL19hcHBgLlxcblwiICtcclxuICAgICAgICAgIFwiUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC9uZXh0LmpzL29wdC1vdXQtYXV0by1zdGF0aWMtb3B0aW1pemF0aW9uXFxuXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEluaXRpYWxpemUgQXBvbGxvQ2xpZW50IGlmIG5vdCBhbHJlYWR5IGRvbmVcclxuICBjb25zdCBhcG9sbG9DbGllbnQgPVxyXG4gICAgY3R4LmFwb2xsb0NsaWVudCB8fFxyXG4gICAgaW5pdEFwb2xsb0NsaWVudChhYywgY3R4LmFwb2xsb1N0YXRlIHx8IHt9LCBpbkFwcENvbnRleHQgPyBjdHguY3R4IDogY3R4KTtcclxuXHJcbiAgLy8gV2Ugc2VuZCB0aGUgQXBvbGxvIENsaWVudCBhcyBhIHByb3AgdG8gdGhlIGNvbXBvbmVudCB0byBhdm9pZCBjYWxsaW5nIGluaXRBcG9sbG8oKSB0d2ljZSBpbiB0aGUgc2VydmVyLlxyXG4gIC8vIE90aGVyd2lzZSwgdGhlIGNvbXBvbmVudCB3b3VsZCBoYXZlIHRvIGNhbGwgaW5pdEFwb2xsbygpIGFnYWluIGJ1dCB0aGlzXHJcbiAgLy8gdGltZSB3aXRob3V0IHRoZSBjb250ZXh0LiBPbmNlIHRoYXQgaGFwcGVucywgdGhlIGZvbGxvd2luZyBjb2RlIHdpbGwgbWFrZSBzdXJlIHdlIHNlbmRcclxuICAvLyB0aGUgcHJvcCBhcyBgbnVsbGAgdG8gdGhlIGJyb3dzZXIuXHJcbiAgYXBvbGxvQ2xpZW50LnRvSlNPTiA9ICgpID0+IG51bGw7XHJcblxyXG4gIC8vIEFkZCBhcG9sbG9DbGllbnQgdG8gTmV4dFBhZ2VDb250ZXh0ICYgTmV4dEFwcENvbnRleHQuXHJcbiAgLy8gVGhpcyBhbGxvd3MgdXMgdG8gY29uc3VtZSB0aGUgYXBvbGxvQ2xpZW50IGluc2lkZSBvdXJcclxuICAvLyBjdXN0b20gYGdldEluaXRpYWxQcm9wcyh7IGFwb2xsb0NsaWVudCB9KWAuXHJcbiAgY3R4LmFwb2xsb0NsaWVudCA9IGFwb2xsb0NsaWVudDtcclxuICBpZiAoaW5BcHBDb250ZXh0KSB7XHJcbiAgICBjdHguY3R4LmFwb2xsb0NsaWVudCA9IGFwb2xsb0NsaWVudDtcclxuICB9XHJcblxyXG4gIHJldHVybiBjdHg7XHJcbn07XHJcblxyXG4vKipcclxuICogQWx3YXlzIGNyZWF0ZXMgYSBuZXcgYXBvbGxvIGNsaWVudCBvbiB0aGUgc2VydmVyXHJcbiAqIENyZWF0ZXMgb3IgcmV1c2VzIGFwb2xsbyBjbGllbnQgaW4gdGhlIGJyb3dzZXIuXHJcbiAqIEBwYXJhbSAge05vcm1hbGl6ZWRDYWNoZU9iamVjdH0gaW5pdGlhbFN0YXRlXHJcbiAqIEBwYXJhbSAge05leHRQYWdlQ29udGV4dH0gY3R4XHJcbiAqL1xyXG5jb25zdCBpbml0QXBvbGxvQ2xpZW50ID0gKGFwb2xsb0NsaWVudCwgaW5pdGlhbFN0YXRlLCBjdHgpID0+IHtcclxuICAvLyBNYWtlIHN1cmUgdG8gY3JlYXRlIGEgbmV3IGNsaWVudCBmb3IgZXZlcnkgc2VydmVyLXNpZGUgcmVxdWVzdCBzbyB0aGF0IGRhdGFcclxuICAvLyBpc24ndCBzaGFyZWQgYmV0d2VlbiBjb25uZWN0aW9ucyAod2hpY2ggd291bGQgYmUgYmFkKVxyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlQXBvbGxvQ2xpZW50KGFwb2xsb0NsaWVudChjdHgpLCBpbml0aWFsU3RhdGUsIGN0eCk7XHJcbiAgfVxyXG5cclxuICAvLyBSZXVzZSBjbGllbnQgb24gdGhlIGNsaWVudC1zaWRlXHJcbiAgaWYgKCFnbG9iYWxBcG9sbG9DbGllbnQpIHtcclxuICAgIGdsb2JhbEFwb2xsb0NsaWVudCA9IGNyZWF0ZUFwb2xsb0NsaWVudChcclxuICAgICAgYXBvbGxvQ2xpZW50KGN0eCksXHJcbiAgICAgIGluaXRpYWxTdGF0ZSxcclxuICAgICAgY3R4XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGdsb2JhbEFwb2xsb0NsaWVudDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgd2l0aEFwb2xsbyBIT0NcclxuICogdGhhdCBwcm92aWRlcyB0aGUgYXBvbGxvQ29udGV4dFxyXG4gKiB0byBhIG5leHQuanMgUGFnZSBvciBBcHBUcmVlLlxyXG4gKiBAcGFyYW0gIHtPYmplY3R9IHdpdGhBcG9sbG9PcHRpb25zXHJcbiAqIEBwYXJhbSAge0Jvb2xlYW59IFt3aXRoQXBvbGxvT3B0aW9ucy5zc3I9ZmFsc2VdXHJcbiAqIEByZXR1cm5zIHsoUGFnZUNvbXBvbmVudDogUmVhY3ROb2RlKSA9PiBSZWFjdE5vZGV9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY3JlYXRlV2l0aEFwb2xsbyA9IChhYykgPT4ge1xyXG4gIHJldHVybiAoeyBzc3IgPSBmYWxzZSB9ID0ge30pID0+IChQYWdlQ29tcG9uZW50KSA9PiB7XHJcbiAgICBjb25zdCBXaXRoQXBvbGxvID0gKHsgYXBvbGxvQ2xpZW50LCBhcG9sbG9TdGF0ZSwgLi4ucGFnZVByb3BzIH0pID0+IHtcclxuICAgICAgbGV0IGNsaWVudDtcclxuICAgICAgaWYgKGFwb2xsb0NsaWVudCkge1xyXG4gICAgICAgIC8vIEhhcHBlbnMgb246IGdldERhdGFGcm9tVHJlZSAmIG5leHQuanMgc3NyXHJcbiAgICAgICAgY2xpZW50ID0gYXBvbGxvQ2xpZW50O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEhhcHBlbnMgb246IG5leHQuanMgY3NyXHJcbiAgICAgICAgY2xpZW50ID0gaW5pdEFwb2xsb0NsaWVudChhYywgYXBvbGxvU3RhdGUsIHVuZGVmaW5lZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cclxuICAgICAgICAgIDxQYWdlQ29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cclxuICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gU2V0IHRoZSBjb3JyZWN0IGRpc3BsYXlOYW1lIGluIGRldmVsb3BtZW50XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgIGNvbnN0IGRpc3BsYXlOYW1lID1cclxuICAgICAgICBQYWdlQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFBhZ2VDb21wb25lbnQubmFtZSB8fCBcIkNvbXBvbmVudFwiO1xyXG4gICAgICBXaXRoQXBvbGxvLmRpc3BsYXlOYW1lID0gYHdpdGhBcG9sbG8oJHtkaXNwbGF5TmFtZX0pYDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3NyIHx8IFBhZ2VDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XHJcbiAgICAgIFdpdGhBcG9sbG8uZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluQXBwQ29udGV4dCA9IEJvb2xlYW4oY3R4LmN0eCk7XHJcbiAgICAgICAgY29uc3QgeyBhcG9sbG9DbGllbnQgfSA9IGluaXRPbkNvbnRleHQoYWMsIGN0eCk7XHJcblxyXG4gICAgICAgIC8vIFJ1biB3cmFwcGVkIGdldEluaXRpYWxQcm9wcyBtZXRob2RzXHJcbiAgICAgICAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xyXG4gICAgICAgIGlmIChQYWdlQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xyXG4gICAgICAgICAgcGFnZVByb3BzID0gYXdhaXQgUGFnZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGluQXBwQ29udGV4dCkge1xyXG4gICAgICAgICAgcGFnZVByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gT25seSBvbiB0aGUgc2VydmVyOlxyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICBjb25zdCB7IEFwcFRyZWUgfSA9IGN0eDtcclxuICAgICAgICAgIC8vIFdoZW4gcmVkaXJlY3RpbmcsIHRoZSByZXNwb25zZSBpcyBmaW5pc2hlZC5cclxuICAgICAgICAgIC8vIE5vIHBvaW50IGluIGNvbnRpbnVpbmcgdG8gcmVuZGVyXHJcbiAgICAgICAgICBpZiAoY3R4LnJlcyAmJiBjdHgucmVzLmZpbmlzaGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYWdlUHJvcHM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gT25seSBpZiBkYXRhRnJvbVRyZWUgaXMgZW5hYmxlZFxyXG4gICAgICAgICAgaWYgKHNzciAmJiBBcHBUcmVlKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgLy8gSW1wb3J0IGBAYXBvbGxvL3JlYWN0LXNzcmAgZHluYW1pY2FsbHkuXHJcbiAgICAgICAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCB0byBoYXZlIHRoaXMgaW4gb3VyIGNsaWVudCBidW5kbGUuXHJcbiAgICAgICAgICAgICAgY29uc3QgeyBnZXREYXRhRnJvbVRyZWUgfSA9IGF3YWl0IGltcG9ydChcclxuICAgICAgICAgICAgICAgIFwiQGFwb2xsby9jbGllbnQvcmVhY3Qvc3NyXCJcclxuICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAvLyBTaW5jZSBBcHBDb21wb25lbnRzIGFuZCBQYWdlQ29tcG9uZW50cyBoYXZlIGRpZmZlcmVudCBjb250ZXh0IHR5cGVzXHJcbiAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBtb2RpZnkgdGhlaXIgcHJvcHMgYSBsaXR0bGUuXHJcbiAgICAgICAgICAgICAgbGV0IHByb3BzO1xyXG4gICAgICAgICAgICAgIGlmIChpbkFwcENvbnRleHQpIHtcclxuICAgICAgICAgICAgICAgIHByb3BzID0geyAuLi5wYWdlUHJvcHMsIGFwb2xsb0NsaWVudCB9O1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcyA9IHsgcGFnZVByb3BzOiB7IC4uLnBhZ2VQcm9wcywgYXBvbGxvQ2xpZW50IH0gfTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC8vIFRha2UgdGhlIE5leHQuanMgQXBwVHJlZSwgZGV0ZXJtaW5lIHdoaWNoIHF1ZXJpZXMgYXJlIG5lZWRlZCB0byByZW5kZXIsXHJcbiAgICAgICAgICAgICAgLy8gYW5kIGZldGNoIHRoZW0uIFRoaXMgbWV0aG9kIGNhbiBiZSBwcmV0dHkgc2xvdyBzaW5jZSBpdCByZW5kZXJzXHJcbiAgICAgICAgICAgICAgLy8geW91ciBlbnRpcmUgQXBwVHJlZSBvbmNlIGZvciBldmVyeSBxdWVyeS4gQ2hlY2sgb3V0IGFwb2xsbyBmcmFnbWVudHNcclxuICAgICAgICAgICAgICAvLyBpZiB5b3Ugd2FudCB0byByZWR1Y2UgdGhlIG51bWJlciBvZiByZXJlbmRlcnMuXHJcbiAgICAgICAgICAgICAgLy8gaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9kYXRhL2ZyYWdtZW50cy9cclxuICAgICAgICAgICAgICBhd2FpdCBnZXREYXRhRnJvbVRyZWUoPEFwcFRyZWUgey4uLnByb3BzfSAvPik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgLy8gUHJldmVudCBBcG9sbG8gQ2xpZW50IEdyYXBoUUwgZXJyb3JzIGZyb20gY3Jhc2hpbmcgU1NSLlxyXG4gICAgICAgICAgICAgIC8vIEhhbmRsZSB0aGVtIGluIGNvbXBvbmVudHMgdmlhIHRoZSBkYXRhLmVycm9yIHByb3A6XHJcbiAgICAgICAgICAgICAgLy8gaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtYXBvbGxvLmh0bWwjZ3JhcGhxbC1xdWVyeS1kYXRhLWVycm9yXHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHdoaWxlIHJ1bm5pbmcgYGdldERhdGFGcm9tVHJlZWBcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBnZXREYXRhRnJvbVRyZWUgZG9lcyBub3QgY2FsbCBjb21wb25lbnRXaWxsVW5tb3VudFxyXG4gICAgICAgICAgICAvLyBoZWFkIHNpZGUgZWZmZWN0IHRoZXJlZm9yZSBuZWVkIHRvIGJlIGNsZWFyZWQgbWFudWFsbHlcclxuICAgICAgICAgICAgSGVhZC5yZXdpbmQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5wYWdlUHJvcHMsXHJcbiAgICAgICAgICAvLyBFeHRyYWN0IHF1ZXJ5IGRhdGEgZnJvbSB0aGUgQXBvbGxvIHN0b3JlXHJcbiAgICAgICAgICBhcG9sbG9TdGF0ZTogYXBvbGxvQ2xpZW50LmNhY2hlLmV4dHJhY3QoKSxcclxuICAgICAgICAgIC8vIFByb3ZpZGUgdGhlIGNsaWVudCBmb3Igc3NyLiBBcyBzb29uIGFzIHRoaXMgcGF5bG9hZFxyXG4gICAgICAgICAgLy8gZ2V0cyBKU09OLnN0cmluZ2lmaWVkIGl0IHdpbGwgcmVtb3ZlIGl0c2VsZi5cclxuICAgICAgICAgIGFwb2xsb0NsaWVudDogY3R4LmFwb2xsb0NsaWVudCxcclxuICAgICAgICB9O1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBXaXRoQXBvbGxvO1xyXG4gIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBcG9sbG9DbGllbnQoYXBvbGxvQ2xpZW50LCBpbml0aWFsU3RhdGUsIGN0eCkge1xyXG4gIC8vIFRoZSBgY3R4YCAoTmV4dFBhZ2VDb250ZXh0KSB3aWxsIG9ubHkgYmUgcHJlc2VudCBvbiB0aGUgc2VydmVyLlxyXG4gIC8vIHVzZSBpdCB0byBleHRyYWN0IGF1dGggaGVhZGVycyAoY3R4LnJlcSkgb3Igc2ltaWxhci5cclxuICBhcG9sbG9DbGllbnQuc3NyTW9kZSA9IEJvb2xlYW4oY3R4KTtcclxuICBhcG9sbG9DbGllbnQuY2FjaGUucmVzdG9yZShpbml0aWFsU3RhdGUpO1xyXG5cclxuICByZXR1cm4gYXBvbGxvQ2xpZW50O1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBpc1NlcnZlciA9ICgpID0+IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCI7XHJcbiIsImltcG9ydCB7IHVzZU1lUXVlcnkgfSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUlzQXV0aCA9ICgpID0+IHtcclxuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcgfSA9IHVzZU1lUXVlcnkoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFsb2FkaW5nICYmICFkYXRhPy5tZSkge1xyXG4gICAgICByb3V0ZXIucmVwbGFjZShcIi9sb2dpbj9uZXh0PVwiICsgcm91dGVyLnBhdGhuYW1lKTtcclxuICAgIH1cclxuICB9LCBbbG9hZGluZywgZGF0YSwgcm91dGVyXSk7XHJcbn07XHJcbiIsImltcG9ydCB7IFBhZ2luYXRlZFF1b3RlcywgUGFnaW5hdGVkU3VicyB9IGZyb20gJy4vLi4vZ2VuZXJhdGVkL2dyYXBocWwnO1xyXG5pbXBvcnQgeyBjcmVhdGVXaXRoQXBvbGxvIH0gZnJvbSAnLi9jcmVhdGVXaXRoQXBvbGxvJztcclxuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgeyBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICduZXh0JztcclxuXHJcbmNvbnN0IGNyZWF0ZUNsaWVudCA9IChjdHg6IE5leHRQYWdlQ29udGV4dCkgPT5cclxuICBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIHVyaTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCBhcyBzdHJpbmcsXHJcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBjb29raWU6XHJcbiAgICAgICAgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICA/IGN0eD8ucmVxPy5oZWFkZXJzLmNvb2tpZVxyXG4gICAgICAgICAgOiB1bmRlZmluZWQpIHx8ICcnLFxyXG4gICAgfSxcclxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSh7XHJcbiAgICAgIHR5cGVQb2xpY2llczoge1xyXG4gICAgICAgIFF1ZXJ5OiB7XHJcbiAgICAgICAgICBmaWVsZHM6IHtcclxuICAgICAgICAgICAgc3Viczoge1xyXG4gICAgICAgICAgICAgIGtleUFyZ3M6IFtdLFxyXG4gICAgICAgICAgICAgIG1lcmdlKFxyXG4gICAgICAgICAgICAgICAgZXhpc3Rpbmc6IFBhZ2luYXRlZFN1YnMgfCB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBpbmNvbWluZzogUGFnaW5hdGVkU3VicyxcclxuICAgICAgICAgICAgICApOiBQYWdpbmF0ZWRTdWJzIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLmluY29taW5nLFxyXG4gICAgICAgICAgICAgICAgICBzdWJzOiBbLi4uKGV4aXN0aW5nPy5zdWJzIHx8IFtdKSwgLi4uaW5jb21pbmcuc3Vic10sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHF1b3Rlczoge1xyXG4gICAgICAgICAgICAgIGtleUFyZ3M6IFtdLFxyXG4gICAgICAgICAgICAgIG1lcmdlKFxyXG4gICAgICAgICAgICAgICAgZXhpc3Rpbmc6IFBhZ2luYXRlZFF1b3RlcyB8IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIGluY29taW5nOiBQYWdpbmF0ZWRRdW90ZXMsXHJcbiAgICAgICAgICAgICAgKTogUGFnaW5hdGVkUXVvdGVzIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLmluY29taW5nLFxyXG4gICAgICAgICAgICAgICAgICBxdW90ZXM6IFsuLi4oZXhpc3Rpbmc/LnF1b3RlcyB8fCBbXSksIC4uLmluY29taW5nLnF1b3Rlc10sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCB3aXRoQXBvbGxvID0gY3JlYXRlV2l0aEFwb2xsbyhjcmVhdGVDbGllbnQpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudC9yZWFjdC9zc3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9pbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9tZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWNoYXJ0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9