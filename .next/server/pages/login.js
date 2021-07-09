module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/login": 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/login.tsx");
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

/***/ "./src/components/Inputs/InputField.tsx":
/*!**********************************************!*\
  !*** ./src/components/Inputs/InputField.tsx ***!
  \**********************************************/
/*! exports provided: InputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputField", function() { return InputField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Development\\QA\\OldQA\\web\\src\\components\\Inputs\\InputField.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const InputField = (_ref) => {
  let {
    label,
    textarea,
    size: _
  } = _ref,
      props = _objectWithoutProperties(_ref, ["label", "textarea", "size"]);

  let InputOrTextarea = _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"];
  const [field, {
    error
  }] = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useField"])(props);
  return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    isInvalid: !!error,
    maxWidth: "500px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
    htmlFor: field.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, label), __jsx(InputOrTextarea, _extends({}, field, props, {
    id: field.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  })), error ? __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormErrorMessage"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 16
    }
  }, error) : null);
};

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

/***/ "./src/pages/login.tsx":
/*!*****************************!*\
  !*** ./src/pages/login.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Wrapper */ "./src/components/Wrapper.tsx");
/* harmony import */ var _components_Inputs_InputField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Inputs/InputField */ "./src/components/Inputs/InputField.tsx");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _utils_toErrorMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/toErrorMap */ "./src/utils/toErrorMap.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_withApollo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/withApollo */ "./src/utils/withApollo.ts");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "D:\\Development\\QA\\OldQA\\web\\src\\pages\\login.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const Login = ({}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  const [login] = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_6__["useLoginMutation"])();
  const toast = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useToast"])();
  const {
    0: message,
    1: setmessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get("err")) {
      setmessage(js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get("err"));
    }

    js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.remove("err");
  }, []);

  if (message) {
    toast({
      title: message,
      status: "warning",
      duration: 4000,
      isClosable: true
    });
  }

  return __jsx(_components_Wrapper__WEBPACK_IMPORTED_MODULE_4__["Wrapper"], {
    variant: "small",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mt: 8,
    p: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Img"], {
    boxSize: "130px",
    w: "100%",
    objectFit: "cover",
    src: "/static/QA_Cursive_Logo.png",
    alt: "Logo",
    mx: "auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    textAlign: "center",
    mt: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "LogIn"), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: async (values, {
      setErrors
    }) => {
      var _response$data, _response$data2;

      const response = await login({
        variables: values,
        update: (cache, {
          data
        }) => {
          cache.writeQuery({
            query: _generated_graphql__WEBPACK_IMPORTED_MODULE_6__["MeDocument"],
            data: {
              __typename: "Query",
              me: data === null || data === void 0 ? void 0 : data.login.user
            }
          });
          cache.evict({
            fieldName: "posts:{}"
          });
        }
      });

      if ((_response$data = response.data) !== null && _response$data !== void 0 && _response$data.login.errors) {
        setErrors(Object(_utils_toErrorMap__WEBPACK_IMPORTED_MODULE_7__["toErrorMap"])(response.data.login.errors));
      } else if ((_response$data2 = response.data) !== null && _response$data2 !== void 0 && _response$data2.login.user) {
        if (typeof router.query.next === "string") {
          router.push(router.query.next);
        } else {
          // worked
          router.push("/");
        }
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, ({
    isSubmitting
  }) => __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx(_components_Inputs_InputField__WEBPACK_IMPORTED_MODULE_5__["InputField"], {
    name: "email",
    placeholder: "email",
    label: "Email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mt: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, __jsx(_components_Inputs_InputField__WEBPACK_IMPORTED_MODULE_5__["InputField"], {
    name: "password",
    placeholder: "password",
    label: "Password",
    type: "password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  })), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    mt: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/signup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }
  }, "SignUp")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/forgot-password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    ml: "auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 19
    }
  }, "Forgot password?"))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    mt: 4,
    type: "submit",
    isLoading: isSubmitting,
    background: "blue",
    color: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  }, "LogIn with email"))), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mt: 6,
    display: "grid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    href: "http://localhost:4000/auth/facebook",
    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"],
    mt: 6,
    colorScheme: "facebook",
    rightIcon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaFacebook"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 24
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, "LogIn with Facebook"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    href: "http://localhost:4000/auth/linkedin",
    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"],
    mt: 4,
    colorScheme: "linkedin",
    rightIcon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaLinkedin"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 24
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }, "LogIn with LinkedIn"), __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    href: "http://localhost:4000/auth/google",
    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"],
    mt: 4,
    colorScheme: "red",
    rightIcon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaGoogle"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 24
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, "LogIn with Google"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_withApollo__WEBPACK_IMPORTED_MODULE_10__["withApollo"])({
  ssr: false
})(Login));

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

/***/ "./src/utils/toErrorMap.ts":
/*!*********************************!*\
  !*** ./src/utils/toErrorMap.ts ***!
  \*********************************/
/*! exports provided: toErrorMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toErrorMap", function() { return toErrorMap; });
const toErrorMap = errors => {
  const errorMap = {};
  errors.forEach(({
    field,
    message
  }) => {
    errorMap[field] = message;
  });
  return errorMap;
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

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

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

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0lucHV0cy9JbnB1dEZpZWxkLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XcmFwcGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VuZXJhdGVkL2dyYXBocWwudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9sb2dpbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NyZWF0ZVdpdGhBcG9sbG8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3RvRXJyb3JNYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3dpdGhBcG9sbG8udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudC9yZWFjdC9zc3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZm9ybWlrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiJdLCJuYW1lcyI6WyJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInZhbHVlIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZUFzIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwibG9jYWxlIiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwiY2hhbmdlIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiUHJvbWlzZSIsImZldGNoQ29tcG9uZW50IiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsImRhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzZWdtZW50IiwiY2hhciIsImVuY29kZVVSSUNvbXBvbmVudCIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInZhbGlkYXRlIiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5Iiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiY3JlYXRlVXJsIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJ3YXJuVXJsIiwicHVzaFRvIiwicHVzaFJvdXRlIiwicHVzaFVybCIsInJlcGxhY2VUbyIsInJlcGxhY2VSb3V0ZSIsInJlcGxhY2VVcmwiLCJJbnB1dEZpZWxkIiwibGFiZWwiLCJ0ZXh0YXJlYSIsInNpemUiLCJJbnB1dE9yVGV4dGFyZWEiLCJJbnB1dCIsInVzZUZpZWxkIiwiV3JhcHBlciIsInZhcmlhbnQiLCJkZWZhdWx0T3B0aW9ucyIsIlJlZ3VsYXJNYWlsUmVzcG9uZXNGcmFnbWVudERvYyIsImdxbCIsIkFjdGl2aXR5U25pcHBldEZyYWdtZW50RG9jIiwiQWxsc3ViU25pcHBldEZyYWdtZW50RG9jIiwiUGFnaW5hdGVkQWN0aXZpdHlTbmlwcGV0RnJhZ21lbnREb2MiLCJSZWd1bGFyRXJyb3JGcmFnbWVudERvYyIsIlByb2ZpbGVVc2VyRnJhZ21lbnREb2MiLCJQcm9maWxlVXNlclJlc3BvbnNlRnJhZ21lbnREb2MiLCJRdW90ZVNuaXBwZXRGcmFnbWVudERvYyIsIlJlZ3VsYXJUZW1wbGF0ZXNGcmFnbWVudERvYyIsIlJlZ3VsYXJUZW1wbGF0ZVJlc3BvbnNlRnJhZ21lbnREb2MiLCJSZWd1bGFyUXVvdGVGcmFnbWVudERvYyIsIlJlZ3VsYXJRdW90ZVJlc3BvbnNlRnJhZ21lbnREb2MiLCJSZWd1bGFyU3ViRnJhZ21lbnREb2MiLCJSZWd1bGFyU3ViUmVzcG9uc2VGcmFnbWVudERvYyIsIlJlZ3VsYXJVc2VyRnJhZ21lbnREb2MiLCJSZWd1bGFyVXNlclJlc3BvbnNlRnJhZ21lbnREb2MiLCJTdWJTbmlwcGV0RnJhZ21lbnREb2MiLCJUZW1wbGF0ZXNTbmlwcGV0RnJhZ21lbnREb2MiLCJBbGx1c2VyU25pcHBldEZyYWdtZW50RG9jIiwiVXBkYXRlVGVtcGxhdGVzRG9jdW1lbnQiLCJ1c2VVcGRhdGVUZW1wbGF0ZXNNdXRhdGlvbiIsImJhc2VPcHRpb25zIiwiQXBvbGxvIiwiQWNjZXB0SW52aXRlRG9jdW1lbnQiLCJ1c2VBY2NlcHRJbnZpdGVNdXRhdGlvbiIsIkNhbmNlbFN1YnNjcmlwdGlvbkRvY3VtZW50IiwidXNlQ2FuY2VsU3Vic2NyaXB0aW9uTXV0YXRpb24iLCJDaGFuZ2VDcmVkaXRDYXJkRG9jdW1lbnQiLCJ1c2VDaGFuZ2VDcmVkaXRDYXJkTXV0YXRpb24iLCJDaGFuZ2VQYXNzd29yZERvY3VtZW50IiwidXNlQ2hhbmdlUGFzc3dvcmRNdXRhdGlvbiIsIlVwZGF0ZU1haWxhbmRGcmVxdWVuY3lEb2N1bWVudCIsInVzZVVwZGF0ZU1haWxhbmRGcmVxdWVuY3lNdXRhdGlvbiIsIkNyZWF0ZVF1b3RlRG9jdW1lbnQiLCJ1c2VDcmVhdGVRdW90ZU11dGF0aW9uIiwiQ3JlYXRlU3ViRG9jdW1lbnQiLCJ1c2VDcmVhdGVTdWJNdXRhdGlvbiIsIkNyZWF0ZVN1YkZyb21Db250YWN0RG9jdW1lbnQiLCJ1c2VDcmVhdGVTdWJGcm9tQ29udGFjdE11dGF0aW9uIiwiQ3JlYXRlU3ViRnJvbUludml0ZURvY3VtZW50IiwidXNlQ3JlYXRlU3ViRnJvbUludml0ZU11dGF0aW9uIiwiQ3JlYXRlU3Vic2NyaXB0aW9uRG9jdW1lbnQiLCJ1c2VDcmVhdGVTdWJzY3JpcHRpb25NdXRhdGlvbiIsIkNyZWF0ZVN1YnNmcndkcGFnZURvY3VtZW50IiwidXNlQ3JlYXRlU3Vic2Zyd2RwYWdlTXV0YXRpb24iLCJEZWxldGVRdW90ZURvY3VtZW50IiwidXNlRGVsZXRlUXVvdGVNdXRhdGlvbiIsIkRlbGV0ZVN1YkRvY3VtZW50IiwidXNlRGVsZXRlU3ViTXV0YXRpb24iLCJEZWxldGVUZW1wbGF0ZURvY3VtZW50IiwidXNlRGVsZXRlVGVtcGxhdGVNdXRhdGlvbiIsIkZvcmdvdFBhc3N3b3JkRG9jdW1lbnQiLCJ1c2VGb3Jnb3RQYXNzd29yZE11dGF0aW9uIiwiTG9naW5Eb2N1bWVudCIsInVzZUxvZ2luTXV0YXRpb24iLCJMb2dvdXREb2N1bWVudCIsInVzZUxvZ291dE11dGF0aW9uIiwiUmVTdWJyaWJlVXNlckV4aXN0aW5nQ2NEb2N1bWVudCIsInVzZVJlU3VicmliZVVzZXJFeGlzdGluZ0NjTXV0YXRpb24iLCJSZVN1YnJpYmVVc2VyTmV3Q2NEb2N1bWVudCIsInVzZVJlU3VicmliZVVzZXJOZXdDY011dGF0aW9uIiwiUmVnaXN0ZXJEb2N1bWVudCIsInVzZVJlZ2lzdGVyTXV0YXRpb24iLCJDcmVhdGVUZW1wbGF0ZXNEb2N1bWVudCIsInVzZUNyZWF0ZVRlbXBsYXRlc011dGF0aW9uIiwiVW5zdWJzY3JpYmVTdWJEb2N1bWVudCIsInVzZVVuc3Vic2NyaWJlU3ViTXV0YXRpb24iLCJVcGRhdGVRdW90ZURvY3VtZW50IiwidXNlVXBkYXRlUXVvdGVNdXRhdGlvbiIsIlVwZGF0ZVN1YkRvY3VtZW50IiwidXNlVXBkYXRlU3ViTXV0YXRpb24iLCJVcGRhdGVVc2VyRG9jdW1lbnQiLCJ1c2VVcGRhdGVVc2VyTXV0YXRpb24iLCJVcGRhdGVVc2VyQXV0aERvY3VtZW50IiwidXNlVXBkYXRlVXNlckF1dGhNdXRhdGlvbiIsIkFsbHN1YnNEb2N1bWVudCIsInVzZUFsbHN1YnNRdWVyeSIsInVzZUFsbHN1YnNMYXp5UXVlcnkiLCJBbGxzdWJzSWREb2N1bWVudCIsInVzZUFsbHN1YnNJZFF1ZXJ5IiwidXNlQWxsc3Vic0lkTGF6eVF1ZXJ5IiwiTWFpbEFjdGl2aXR5QnlJZERvY3VtZW50IiwidXNlTWFpbEFjdGl2aXR5QnlJZFF1ZXJ5IiwidXNlTWFpbEFjdGl2aXR5QnlJZExhenlRdWVyeSIsIlBhZ2luYXRlZEFjdGl2aXR5RG9jdW1lbnQiLCJ1c2VQYWdpbmF0ZWRBY3Rpdml0eVF1ZXJ5IiwidXNlUGFnaW5hdGVkQWN0aXZpdHlMYXp5UXVlcnkiLCJNYWlsQWN0aXZpdHlieUlkRG9jdW1lbnQiLCJ1c2VNYWlsQWN0aXZpdHlieUlkUXVlcnkiLCJ1c2VNYWlsQWN0aXZpdHlieUlkTGF6eVF1ZXJ5IiwiUXVvdGVzRG9jdW1lbnQiLCJ1c2VRdW90ZXNRdWVyeSIsInVzZVF1b3Rlc0xhenlRdWVyeSIsIlN1YnNEb2N1bWVudCIsInVzZVN1YnNRdWVyeSIsInVzZVN1YnNMYXp5UXVlcnkiLCJBbGx1c2VyRG9jdW1lbnQiLCJ1c2VBbGx1c2VyUXVlcnkiLCJ1c2VBbGx1c2VyTGF6eVF1ZXJ5IiwiTWFpbEFjdGl2aXR5RG9jdW1lbnQiLCJ1c2VNYWlsQWN0aXZpdHlRdWVyeSIsInVzZU1haWxBY3Rpdml0eUxhenlRdWVyeSIsIk1lRG9jdW1lbnQiLCJ1c2VNZVF1ZXJ5IiwidXNlTWVMYXp5UXVlcnkiLCJQcm9maWxlRG9jdW1lbnQiLCJ1c2VQcm9maWxlUXVlcnkiLCJ1c2VQcm9maWxlTGF6eVF1ZXJ5IiwiU3ViYnl0b2tlbkRvY3VtZW50IiwidXNlU3ViYnl0b2tlblF1ZXJ5IiwidXNlU3ViYnl0b2tlbkxhenlRdWVyeSIsIkdldEFsbHRlbXBsYXRlc0RvY3VtZW50IiwidXNlR2V0QWxsdGVtcGxhdGVzUXVlcnkiLCJ1c2VHZXRBbGx0ZW1wbGF0ZXNMYXp5UXVlcnkiLCJMb2dpbiIsInVzZVJvdXRlciIsImxvZ2luIiwidG9hc3QiLCJ1c2VUb2FzdCIsInNldG1lc3NhZ2UiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNvb2tpZXMiLCJyZW1vdmUiLCJ0aXRsZSIsInN0YXR1cyIsImR1cmF0aW9uIiwiaXNDbG9zYWJsZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ2YWx1ZXMiLCJzZXRFcnJvcnMiLCJyZXNwb25zZSIsInZhcmlhYmxlcyIsInVwZGF0ZSIsImNhY2hlIiwid3JpdGVRdWVyeSIsIl9fdHlwZW5hbWUiLCJtZSIsInVzZXIiLCJldmljdCIsImZpZWxkTmFtZSIsImVycm9ycyIsInRvRXJyb3JNYXAiLCJuZXh0IiwiaXNTdWJtaXR0aW5nIiwid2l0aEFwb2xsbyIsInNzciIsImdsb2JhbEFwb2xsb0NsaWVudCIsImluaXRPbkNvbnRleHQiLCJhYyIsImluQXBwQ29udGV4dCIsIkJvb2xlYW4iLCJ3YXJuIiwiYXBvbGxvQ2xpZW50IiwiaW5pdEFwb2xsb0NsaWVudCIsImFwb2xsb1N0YXRlIiwidG9KU09OIiwiaW5pdGlhbFN0YXRlIiwiY3JlYXRlQXBvbGxvQ2xpZW50IiwiY3JlYXRlV2l0aEFwb2xsbyIsIlBhZ2VDb21wb25lbnQiLCJXaXRoQXBvbGxvIiwiY2xpZW50IiwidW5kZWZpbmVkIiwiZGlzcGxheU5hbWUiLCJmaW5pc2hlZCIsImdldERhdGFGcm9tVHJlZSIsIkhlYWQiLCJyZXdpbmQiLCJleHRyYWN0Iiwic3NyTW9kZSIsInJlc3RvcmUiLCJlcnJvck1hcCIsImZvckVhY2giLCJjcmVhdGVDbGllbnQiLCJBcG9sbG9DbGllbnQiLCJ1cmkiLCJoZWFkZXJzIiwiY29va2llIiwicmVxIiwiSW5NZW1vcnlDYWNoZSIsInR5cGVQb2xpY2llcyIsIlF1ZXJ5IiwiZmllbGRzIiwic3VicyIsImtleUFyZ3MiLCJtZXJnZSIsImV4aXN0aW5nIiwiaW5jb21pbmciLCJxdW90ZXMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FB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LE1BQTFDO0FBRlY7QUFJRDs7QUFWSztBQWJGO0FBREg7QUFESztBQURTLEtBQWxCO0FBVFEsR0FBakIsQ0FEbUI7QUFBQSxDQUFyQjs7QUE0Q08sTUFBTTVDLFVBQVUsR0FBR2MsMEVBQWdCLENBQUNlLFlBQUQsQ0FBbkMsQzs7Ozs7Ozs7Ozs7QUNqRFAsMkM7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlcy9sb2dpblwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvbG9naW4udHN4XCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoYXMsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShcbiAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsImltcG9ydCBSZWFjdCwgeyBFcnJvckluZm8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGUsXG4gIE5leHRXZWJWaXRhbHNNZXRyaWMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL2NsaWVudC9yb3V0ZXInXG5cbmV4cG9ydCB7IEFwcEluaXRpYWxQcm9wcyB9XG5cbmV4cG9ydCB7IE5leHRXZWJWaXRhbHNNZXRyaWMgfVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0ID0gQXBwQ29udGV4dFR5cGU8Um91dGVyPlxuXG5leHBvcnQgdHlwZSBBcHBQcm9wczxQID0ge30+ID0gQXBwUHJvcHNUeXBlPFJvdXRlciwgUD5cblxuLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtcbiAgQ29tcG9uZW50LFxuICBjdHgsXG59OiBBcHBDb250ZXh0KTogUHJvbWlzZTxBcHBJbml0aWFsUHJvcHM+IHtcbiAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eClcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwPFAgPSB7fSwgQ1AgPSB7fSwgUyA9IHt9PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgUCAmIEFwcFByb3BzPENQPixcbiAgU1xuPiB7XG4gIHN0YXRpYyBvcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcblxuICAvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAvLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuICAvLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgX2Vycm9ySW5mbzogRXJyb3JJbmZvKTogdm9pZCB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlciwgQ29tcG9uZW50LCBwYWdlUHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHRoaXNcbiAgICAgIC5wcm9wcyBhcyBBcHBQcm9wczxDUD5cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9uZW50XG4gICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgIHtcbiAgICAgICAgICAvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbiAgICAgICAgICAvLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuICAgICAgICAgIC4uLighKF9fTl9TU0cgfHwgX19OX1NTUCkgPyB7IHVybDogY3JlYXRlVXJsKHJvdXRlcikgfSA6IHt9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5sZXQgd2FybkNvbnRhaW5lcjogKCkgPT4gdm9pZFxubGV0IHdhcm5Vcmw6ICgpID0+IHZvaWRcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybkNvbnRhaW5lciA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgV2FybmluZzogdGhlIFxcYENvbnRhaW5lclxcYCBpbiBcXGBfYXBwXFxgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxuXG4gIHdhcm5VcmwgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvdXJsLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxufVxuXG4vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcihwOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5Db250YWluZXIoKVxuICByZXR1cm4gcC5jaGlsZHJlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcjogUm91dGVyKSB7XG4gIC8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG4gIGNvbnN0IHsgcGF0aG5hbWUsIGFzUGF0aCwgcXVlcnkgfSA9IHJvdXRlclxuICByZXR1cm4ge1xuICAgIGdldCBxdWVyeSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBxdWVyeVxuICAgIH0sXG4gICAgZ2V0IHBhdGhuYW1lKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHBhdGhuYW1lXG4gICAgfSxcbiAgICBnZXQgYXNQYXRoKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIGFzUGF0aFxuICAgIH0sXG4gICAgYmFjazogKCkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH0sXG4gICAgcHVzaDogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgYXMpXG4gICAgfSxcbiAgICBwdXNoVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCBwdXNoUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcHVzaFVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSwgcHVzaFVybClcbiAgICB9LFxuICAgIHJlcGxhY2U6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsIGFzKVxuICAgIH0sXG4gICAgcmVwbGFjZVRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcmVwbGFjZVJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHJlcGxhY2VVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUsIHJlcGxhY2VVcmwpXG4gICAgfSxcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IElucHV0SFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUZpZWxkIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IHtcclxuICBGb3JtQ29udHJvbCxcclxuICBGb3JtTGFiZWwsXHJcbiAgSW5wdXQsXHJcbiAgRm9ybUVycm9yTWVzc2FnZSxcclxuICBUZXh0YXJlYSxcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuXHJcbnR5cGUgSW5wdXRGaWVsZFByb3BzID0gSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PiAmIHtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB0ZXh0YXJlYT86IGJvb2xlYW47XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgSW5wdXRGaWVsZDogUmVhY3QuRkM8SW5wdXRGaWVsZFByb3BzPiA9ICh7XHJcbiAgbGFiZWwsXHJcbiAgdGV4dGFyZWEsXHJcbiAgc2l6ZTogXyxcclxuICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgbGV0IElucHV0T3JUZXh0YXJlYSA9IElucHV0O1xyXG5cclxuICBjb25zdCBbZmllbGQsIHsgZXJyb3IgfV0gPSB1c2VGaWVsZChwcm9wcyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtQ29udHJvbCBpc0ludmFsaWQ9eyEhZXJyb3J9IG1heFdpZHRoPSc1MDBweCc+XHJcbiAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj17ZmllbGQubmFtZX0+e2xhYmVsfTwvRm9ybUxhYmVsPlxyXG4gICAgICA8SW5wdXRPclRleHRhcmVhIHsuLi5maWVsZH0gey4uLnByb3BzfSBpZD17ZmllbGQubmFtZX0gLz5cclxuICAgICAge2Vycm9yID8gPEZvcm1FcnJvck1lc3NhZ2U+e2Vycm9yfTwvRm9ybUVycm9yTWVzc2FnZT4gOiBudWxsfVxyXG4gICAgPC9Gb3JtQ29udHJvbD5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgU2lkZUJhciB9IGZyb20gJy4vU2lkZUJhcic7XHJcblxyXG5leHBvcnQgdHlwZSBXcmFwcGVyVmFyaWFudCA9ICdzbWFsbCcgfCAncmVndWxhcic7XHJcblxyXG5pbnRlcmZhY2UgV3JhcHBlclByb3BzIHtcclxuICB2YXJpYW50PzogV3JhcHBlclZhcmlhbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBXcmFwcGVyOiBSZWFjdC5GQzxXcmFwcGVyUHJvcHM+ID0gKHtcclxuICBjaGlsZHJlbixcclxuICB2YXJpYW50ID0gJ3JlZ3VsYXInLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBteD0nYXV0bydcclxuICAgICAgICBwdD17MzB9XHJcbiAgICAgICAgbWF4Vz17dmFyaWFudCA9PT0gJ3JlZ3VsYXInID8gJzEwMDBweCcgOiAnNDAwcHgnfVxyXG4gICAgICAgIHc9JzEwMCUnXHJcbiAgICAgID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0ICogYXMgQXBvbGxvIGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmV4cG9ydCB0eXBlIE1heWJlPFQ+ID0gVCB8IG51bGw7XG5leHBvcnQgdHlwZSBFeGFjdDxUIGV4dGVuZHMgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0+ID0geyBbSyBpbiBrZXlvZiBUXTogVFtLXSB9O1xuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSAge31cbi8qKiBBbGwgYnVpbHQtaW4gYW5kIGN1c3RvbSBzY2FsYXJzLCBtYXBwZWQgdG8gdGhlaXIgYWN0dWFsIHZhbHVlcyAqL1xuZXhwb3J0IHR5cGUgU2NhbGFycyA9IHtcbiAgSUQ6IHN0cmluZztcbiAgU3RyaW5nOiBzdHJpbmc7XG4gIEJvb2xlYW46IGJvb2xlYW47XG4gIEludDogbnVtYmVyO1xuICBGbG9hdDogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgUXVlcnkgPSB7XG4gIF9fdHlwZW5hbWU/OiAnUXVlcnknO1xuICBhbGx1c2VyPzogTWF5YmU8QWxsdXNlcj47XG4gIG1lPzogTWF5YmU8VXNlcj47XG4gIHF1b3RlczogUGFnaW5hdGVkUXVvdGVzO1xuICBxdW90ZT86IE1heWJlPFF1b3RlPjtcbiAgc3ViczogUGFnaW5hdGVkU3VicztcbiAgQWxsc3ViczogU3Vic0NvdW50O1xuICBBbGxzdWJzSWQ6IFN1YnNDb3VudDtcbiAgc3ViPzogTWF5YmU8U3ViPjtcbiAgc3ViYnl0b2tlbj86IE1heWJlPFN1Yj47XG4gIHRlbXA/OiBNYXliZTxUZW1wbGF0ZXM+O1xuICBnZXRBbGx0ZW1wbGF0ZXM6IFBhZ2luYXRlZFRlbXBsYXRlcztcbiAgbWFpbEFjdGl2aXR5OiBBY3Rpdml0eVJlc3BvbmU7XG4gIG1haWxBY3Rpdml0eUJ5SWQ6IEFjdGl2aXR5UmVzcG9uZTtcbiAgUGFnaW5hdGVkbWFpbEFjdGl2aXR5YnlJZDogUGFnaW5hdGVkQWN0aXZpdHk7XG4gIFBhZ2luYXRlZG1haWxBY3Rpdml0eTogUGFnaW5hdGVkQWN0aXZpdHk7XG59O1xuXG5cbmV4cG9ydCB0eXBlIFF1ZXJ5UXVvdGVzQXJncyA9IHtcbiAgY3Vyc29yPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBsaW1pdDogU2NhbGFyc1snSW50J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIFF1ZXJ5UXVvdGVBcmdzID0ge1xuICBpZDogU2NhbGFyc1snSW50J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIFF1ZXJ5U3Vic0FyZ3MgPSB7XG4gIGN1cnNvcj86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgbGltaXQ6IFNjYWxhcnNbJ0ludCddO1xufTtcblxuXG5leHBvcnQgdHlwZSBRdWVyeUFsbHN1YnNJZEFyZ3MgPSB7XG4gIElkOiBTY2FsYXJzWydJbnQnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgUXVlcnlTdWJBcmdzID0ge1xuICBpZDogU2NhbGFyc1snSW50J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIFF1ZXJ5U3ViYnl0b2tlbkFyZ3MgPSB7XG4gIHRva2VuOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgUXVlcnlUZW1wQXJncyA9IHtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xufTtcblxuXG5leHBvcnQgdHlwZSBRdWVyeUdldEFsbHRlbXBsYXRlc0FyZ3MgPSB7XG4gIGN1cnNvcj86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgbGltaXQ6IFNjYWxhcnNbJ0ludCddO1xufTtcblxuXG5leHBvcnQgdHlwZSBRdWVyeU1haWxBY3Rpdml0eUJ5SWRBcmdzID0ge1xuICBpZDogU2NhbGFyc1snSW50J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIFF1ZXJ5UGFnaW5hdGVkbWFpbEFjdGl2aXR5YnlJZEFyZ3MgPSB7XG4gIGN1cnNvcj86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgbGltaXQ6IFNjYWxhcnNbJ0ludCddO1xuICBpZDogU2NhbGFyc1snSW50J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIFF1ZXJ5UGFnaW5hdGVkbWFpbEFjdGl2aXR5QXJncyA9IHtcbiAgY3Vyc29yPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBsaW1pdDogU2NhbGFyc1snSW50J107XG59O1xuXG5leHBvcnQgdHlwZSBBbGx1c2VyID0ge1xuICBfX3R5cGVuYW1lPzogJ0FsbHVzZXInO1xuICB1c2VyPzogTWF5YmU8QXJyYXk8VXNlcj4+O1xufTtcblxuZXhwb3J0IHR5cGUgVXNlciA9IHtcbiAgX190eXBlbmFtZT86ICdVc2VyJztcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIHJvbGU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBpbnZpdGVMaW5rOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgZW1haWw6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBjdXN0b21lclR5cGU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBjY0xhc3Q0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgY2F0YWdvcnk6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgYWRkcmVzczogU2NhbGFyc1snU3RyaW5nJ107XG4gIGNpdHk6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBzdGF0ZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHppcDogU2NhbGFyc1snU3RyaW5nJ107XG4gIGNvbXBhbnk6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0aXRsZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIERlZmF1bHRUZW1wbGF0ZXM6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgbGlua2VkSW46IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0d2l0dGVyOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgZmFjZWJvb2s6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB3ZWJzaXRlOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFBhZ2luYXRlZFF1b3RlcyA9IHtcbiAgX190eXBlbmFtZT86ICdQYWdpbmF0ZWRRdW90ZXMnO1xuICBxdW90ZXM6IEFycmF5PFF1b3RlPjtcbiAgaGFzTW9yZTogU2NhbGFyc1snQm9vbGVhbiddO1xufTtcblxuZXhwb3J0IHR5cGUgUXVvdGUgPSB7XG4gIF9fdHlwZW5hbWU/OiAnUXVvdGUnO1xuICBpZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgbmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGNhdGFnb3J5OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgY3JlYXRvcklkOiBTY2FsYXJzWydGbG9hdCddO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1c2VyOiBVc2VyO1xufTtcblxuZXhwb3J0IHR5cGUgUGFnaW5hdGVkU3VicyA9IHtcbiAgX190eXBlbmFtZT86ICdQYWdpbmF0ZWRTdWJzJztcbiAgc3ViczogQXJyYXk8U3ViPjtcbiAgaGFzTW9yZTogU2NhbGFyc1snQm9vbGVhbiddO1xufTtcblxuZXhwb3J0IHR5cGUgU3ViID0ge1xuICBfX3R5cGVuYW1lPzogJ1N1Yic7XG4gIGlkOiBTY2FsYXJzWydGbG9hdCddO1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgZW1haWw6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1bnN1YnNjcmliZVRva2VuOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgc3Vic2NyaWJlZDogU2NhbGFyc1snQm9vbGVhbiddO1xuICBjcmVhdG9ySWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGZyZXF1ZW5jeTogU2NhbGFyc1snRmxvYXQnXTtcbiAgY3JlYXRvcjogVXNlcjtcbiAgY3JlYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdXBkYXRlZEF0OiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFN1YnNDb3VudCA9IHtcbiAgX190eXBlbmFtZT86ICdTdWJzQ291bnQnO1xuICBBY3RpdmVDb3VudDogU2NhbGFyc1snRmxvYXQnXTtcbiAgTm9uQWN0aXZlQ291bnQ6IFNjYWxhcnNbJ0Zsb2F0J107XG59O1xuXG5leHBvcnQgdHlwZSBUZW1wbGF0ZXMgPSB7XG4gIF9fdHlwZW5hbWU/OiAnVGVtcGxhdGVzJztcbiAgaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIHRpdGxlOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgc3ViamVjdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIGJvZHk6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBjcmVhdG9ySWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIEFjdGl2ZTogU2NhbGFyc1snQm9vbGVhbiddO1xuICBjcmVhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB1cGRhdGVkQXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgUGFnaW5hdGVkVGVtcGxhdGVzID0ge1xuICBfX3R5cGVuYW1lPzogJ1BhZ2luYXRlZFRlbXBsYXRlcyc7XG4gIHRlbXBsYXRlczogQXJyYXk8VGVtcGxhdGVzPjtcbiAgaGFzTW9yZTogU2NhbGFyc1snQm9vbGVhbiddO1xufTtcblxuZXhwb3J0IHR5cGUgQWN0aXZpdHlSZXNwb25lID0ge1xuICBfX3R5cGVuYW1lPzogJ0FjdGl2aXR5UmVzcG9uZSc7XG4gIG1haWxBY3Rpdml0eT86IE1heWJlPEFycmF5PE1haWxBY3Rpdml0eT4+O1xufTtcblxuZXhwb3J0IHR5cGUgTWFpbEFjdGl2aXR5ID0ge1xuICBfX3R5cGVuYW1lPzogJ01haWxBY3Rpdml0eSc7XG4gIGlkOiBTY2FsYXJzWydGbG9hdCddO1xuICBGcm9tX0VtYWlsPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBUb19FbWFpbD86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgc3ViamVjdD86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgYm9keT86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgU3RhdHVzPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBtc2dpZD86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgeG1zZ2lkPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBjcmVhdG9ySWQ/OiBNYXliZTxTY2FsYXJzWydGbG9hdCddPjtcbiAgc3Vic2lkPzogTWF5YmU8U2NhbGFyc1snRmxvYXQnXT47XG4gIG9wZW5fY291bnQ/OiBNYXliZTxTY2FsYXJzWydGbG9hdCddPjtcbiAgY2xpY2tzX2NvdW50PzogTWF5YmU8U2NhbGFyc1snRmxvYXQnXT47XG4gIGNyZWF0ZWRBdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHR5cGU/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIEF1dGhvcj86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgdXNlcjogVXNlcjtcbiAgc3ViczogU3ViO1xufTtcblxuZXhwb3J0IHR5cGUgUGFnaW5hdGVkQWN0aXZpdHkgPSB7XG4gIF9fdHlwZW5hbWU/OiAnUGFnaW5hdGVkQWN0aXZpdHknO1xuICBQYWdpbmF0ZWRtYWlsQWN0aXZpdHk6IEFycmF5PE1haWxBY3Rpdml0eT47XG4gIGhhc01vcmU6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbn07XG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uID0ge1xuICBfX3R5cGVuYW1lPzogJ011dGF0aW9uJztcbiAgY2hhbmdlUGFzc3dvcmQ6IFVzZXJSZXNwb25zZTtcbiAgdXBkYXRlVXNlcjogVXNlclJlc3BvbnNlO1xuICB1cGRhdGVBdXRoOiBVc2VyUmVzcG9uc2U7XG4gIGZvcmdvdFBhc3N3b3JkOiBTY2FsYXJzWydCb29sZWFuJ107XG4gIHJlZ2lzdGVyOiBVc2VyUmVzcG9uc2U7XG4gIGxvZ2luOiBVc2VyUmVzcG9uc2U7XG4gIGNyZWF0ZVN1YnNjcmlwdGlvbjogVXNlclJlc3BvbnNlO1xuICByZVN1YnJpYmVVc2VyTmV3Q0M6IFVzZXJSZXNwb25zZTtcbiAgcmVTdWJyaWJlVXNlckV4aXN0aW5nQ0M6IFVzZXJSZXNwb25zZTtcbiAgY2hhbmdlQ3JlZGl0Q2FyZDogVXNlclJlc3BvbnNlO1xuICBjYW5jZWxTdWJzY3JpcHRpb246IFVzZXJSZXNwb25zZTtcbiAgbG9nb3V0OiBTY2FsYXJzWydCb29sZWFuJ107XG4gIGNyZWF0ZVF1b3RlOiBRdW90ZVJlc3BvbnNlO1xuICB1cGRhdGVRdW90ZT86IE1heWJlPFF1b3RlUmVzcG9uc2U+O1xuICBkZWxldGVRdW90ZTogU2NhbGFyc1snQm9vbGVhbiddO1xuICBjcmVhdGVTdWI6IFN1YlJlc3BvbnNlO1xuICBjcmVhdGVTdWJGcm9tQ29udGFjdDogU3ViUmVzcG9uc2U7XG4gIGNyZWF0ZVN1YkZyb21JbnZpdGU6IFN1YlJlc3BvbnNlO1xuICBhY2NlcHRJbnZpdGU6IFN1YlJlc3BvbnNlO1xuICB1cGRhdGVTdWI6IFN1YlJlc3BvbnNlO1xuICB1cGRhdGVNYWlsYW5kRnJlcXVlbmN5OiBTdWJSZXNwb25zZTtcbiAgY3JlYXRlU3Vic2Zyd2RwYWdlOiBTdWJSZXNwb25zZTtcbiAgdW5zdWJzY3JpYmVTdWI6IFN1YlJlc3BvbnNlO1xuICBkZWxldGVTdWI6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgY3JlYXRlVGVtcGxhdGVzOiBUZW1wbGF0ZVJlc3BvbmVzO1xuICB1cGRhdGVUZW1wbGF0ZXM6IFRlbXBsYXRlUmVzcG9uZXM7XG4gIGRlbGV0ZVRlbXBsYXRlOiBTY2FsYXJzWydCb29sZWFuJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uQ2hhbmdlUGFzc3dvcmRBcmdzID0ge1xuICBuZXdQYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRva2VuOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25VcGRhdGVVc2VyQXJncyA9IHtcbiAgaW5wdXQ6IFVzZXJJbnB1dDtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25VcGRhdGVBdXRoQXJncyA9IHtcbiAgaW5wdXQ6IFVzZXJBdXRoSW5wdXQ7XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uRm9yZ290UGFzc3dvcmRBcmdzID0ge1xuICBlbWFpbDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uUmVnaXN0ZXJBcmdzID0ge1xuICBvcHRpb25zOiBVc2VybmFtZVBhc3N3b3JkSW5wdXQ7XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uTG9naW5BcmdzID0ge1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIGVtYWlsOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25DcmVhdGVTdWJzY3JpcHRpb25BcmdzID0ge1xuICBjY0xhc3Q0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgc291cmNlOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25SZVN1YnJpYmVVc2VyTmV3Q2NBcmdzID0ge1xuICBjY0xhc3Q0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgc291cmNlOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25DaGFuZ2VDcmVkaXRDYXJkQXJncyA9IHtcbiAgY2NMYXN0NDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHNvdXJjZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uQ3JlYXRlUXVvdGVBcmdzID0ge1xuICBpbnB1dDogUXVvdGVJbnB1dDtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25VcGRhdGVRdW90ZUFyZ3MgPSB7XG4gIGNhdGFnb3J5OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25EZWxldGVRdW90ZUFyZ3MgPSB7XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25DcmVhdGVTdWJBcmdzID0ge1xuICBpbnB1dDogU3ViSW5wdXQ7XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uQ3JlYXRlU3ViRnJvbUNvbnRhY3RBcmdzID0ge1xuICBlbWFpbHM6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0b2tlbjogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uQ3JlYXRlU3ViRnJvbUludml0ZUFyZ3MgPSB7XG4gIGlucHV0OiBTdWJJbnZpdGVJbnB1dDtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25BY2NlcHRJbnZpdGVBcmdzID0ge1xuICBmcmVxdWVuY3k6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIHN1YnNjcmliZWQ6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgdG9rZW46IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvblVwZGF0ZVN1YkFyZ3MgPSB7XG4gIHN1YnNjcmliZWQ6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgZW1haWw6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvblVwZGF0ZU1haWxhbmRGcmVxdWVuY3lBcmdzID0ge1xuICBlbWFpbDogU2NhbGFyc1snU3RyaW5nJ107XG4gIGZyZXF1ZW5jeTogU2NhbGFyc1snRmxvYXQnXTtcbiAgdG9rZW46IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkNyZWF0ZVN1YnNmcndkcGFnZUFyZ3MgPSB7XG4gIGZyZXF1ZW5jeTogU2NhbGFyc1snRmxvYXQnXTtcbiAgZW1haWw6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdG9rZW46IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvblVuc3Vic2NyaWJlU3ViQXJncyA9IHtcbiAgdG9rZW46IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkRlbGV0ZVN1YkFyZ3MgPSB7XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25DcmVhdGVUZW1wbGF0ZXNBcmdzID0ge1xuICBpbnB1dDogVGVtcGxhdGVJbnB1dDtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25VcGRhdGVUZW1wbGF0ZXNBcmdzID0ge1xuICBBY3RpdmU6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgc3ViamVjdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIGJvZHk6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0aXRsZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25EZWxldGVUZW1wbGF0ZUFyZ3MgPSB7XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXJSZXNwb25zZSA9IHtcbiAgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnO1xuICBlcnJvcnM/OiBNYXliZTxBcnJheTxGaWVsZEVycm9yPj47XG4gIHVzZXI/OiBNYXliZTxVc2VyPjtcbn07XG5cbmV4cG9ydCB0eXBlIEZpZWxkRXJyb3IgPSB7XG4gIF9fdHlwZW5hbWU/OiAnRmllbGRFcnJvcic7XG4gIGZpZWxkOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbWVzc2FnZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBVc2VySW5wdXQgPSB7XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBhZGRyZXNzOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgY2l0eTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHN0YXRlOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgemlwOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgY2F0YWdvcnk6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0aXRsZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGNvbXBhbnk6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0d2l0dGVyOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgZmFjZWJvb2s6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBsaW5rZWRJbjogU2NhbGFyc1snU3RyaW5nJ107XG4gIHdlYnNpdGU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBEZWZhdWx0VGVtcGxhdGVzOiBTY2FsYXJzWydCb29sZWFuJ107XG59O1xuXG5leHBvcnQgdHlwZSBVc2VyQXV0aElucHV0ID0ge1xuICBlbWFpbD86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgcGFzc3dvcmQ/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGNvbmZpcm0/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG59O1xuXG5leHBvcnQgdHlwZSBVc2VybmFtZVBhc3N3b3JkSW5wdXQgPSB7XG4gIGVtYWlsOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgUXVvdGVSZXNwb25zZSA9IHtcbiAgX190eXBlbmFtZT86ICdRdW90ZVJlc3BvbnNlJztcbiAgZXJyb3JzPzogTWF5YmU8QXJyYXk8RmllbGRFcnJvcj4+O1xuICBxdW90ZT86IE1heWJlPFF1b3RlPjtcbn07XG5cbmV4cG9ydCB0eXBlIFF1b3RlSW5wdXQgPSB7XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBjYXRhZ29yeTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBTdWJSZXNwb25zZSA9IHtcbiAgX190eXBlbmFtZT86ICdTdWJSZXNwb25zZSc7XG4gIGVycm9ycz86IE1heWJlPEFycmF5PEZpZWxkRXJyb3I+PjtcbiAgc3ViPzogTWF5YmU8U3ViPjtcbn07XG5cbmV4cG9ydCB0eXBlIFN1YklucHV0ID0ge1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgZW1haWw6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgU3ViSW52aXRlSW5wdXQgPSB7XG4gIG5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBlbWFpbDogU2NhbGFyc1snU3RyaW5nJ107XG4gIGZyZXF1ZW5jeTogU2NhbGFyc1snRmxvYXQnXTtcbiAgdG9rZW46IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgVGVtcGxhdGVSZXNwb25lcyA9IHtcbiAgX190eXBlbmFtZT86ICdUZW1wbGF0ZVJlc3BvbmVzJztcbiAgZXJyb3JzPzogTWF5YmU8QXJyYXk8RmllbGRFcnJvcj4+O1xuICB0ZW1wbGF0ZT86IE1heWJlPFRlbXBsYXRlcz47XG59O1xuXG5leHBvcnQgdHlwZSBUZW1wbGF0ZUlucHV0ID0ge1xuICBib2R5OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgc3ViamVjdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHRpdGxlOiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIEFjdGl2aXR5U25pcHBldEZyYWdtZW50ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnQWN0aXZpdHlSZXNwb25lJyB9XG4gICYgeyBtYWlsQWN0aXZpdHk/OiBNYXliZTxBcnJheTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ01haWxBY3Rpdml0eScgfVxuICAgICYgUmVndWxhck1haWxSZXNwb25lc0ZyYWdtZW50XG4gICk+PiB9XG4pO1xuXG5leHBvcnQgdHlwZSBBbGxzdWJTbmlwcGV0RnJhZ21lbnQgPSAoXG4gIHsgX190eXBlbmFtZT86ICdTdWJzQ291bnQnIH1cbiAgJiBQaWNrPFN1YnNDb3VudCwgJ0FjdGl2ZUNvdW50JyB8ICdOb25BY3RpdmVDb3VudCc+XG4pO1xuXG5leHBvcnQgdHlwZSBQYWdpbmF0ZWRBY3Rpdml0eVNuaXBwZXRGcmFnbWVudCA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ01haWxBY3Rpdml0eScgfVxuICAmIFBpY2s8TWFpbEFjdGl2aXR5LCAnaWQnIHwgJ0Zyb21fRW1haWwnIHwgJ1RvX0VtYWlsJyB8ICdzdWJqZWN0JyB8ICdTdGF0dXMnIHwgJ21zZ2lkJyB8ICdvcGVuX2NvdW50JyB8ICdjbGlja3NfY291bnQnIHwgJ2NyZWF0ZWRBdCcgfCAnYm9keScgfCAnY3JlYXRvcklkJyB8ICdBdXRob3InIHwgJ3R5cGUnIHwgJ3N1YnNpZCc+XG4gICYgeyB1c2VyOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAmIFBpY2s8VXNlciwgJ2lkJyB8ICduYW1lJz5cbiAgKSwgc3ViczogKFxuICAgIHsgX190eXBlbmFtZT86ICdTdWInIH1cbiAgICAmIFBpY2s8U3ViLCAnaWQnIHwgJ25hbWUnPlxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIFByb2ZpbGVVc2VyRnJhZ21lbnQgPSAoXG4gIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICYgUGljazxVc2VyLCAnaWQnIHwgJ2ludml0ZUxpbmsnIHwgJ25hbWUnIHwgJ2VtYWlsJyB8ICdhZGRyZXNzJyB8ICdjaXR5JyB8ICdzdGF0ZScgfCAnemlwJyB8ICdyb2xlJyB8ICdjYXRhZ29yeScgfCAndGl0bGUnIHwgJ2NvbXBhbnknIHwgJ3R3aXR0ZXInIHwgJ2ZhY2Vib29rJyB8ICdsaW5rZWRJbicgfCAnd2Vic2l0ZScgfCAnY3VzdG9tZXJUeXBlJyB8ICdjY0xhc3Q0JyB8ICdEZWZhdWx0VGVtcGxhdGVzJz5cbik7XG5cbmV4cG9ydCB0eXBlIFByb2ZpbGVVc2VyUmVzcG9uc2VGcmFnbWVudCA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZScgfVxuICAmIHsgZXJyb3JzPzogTWF5YmU8QXJyYXk8KFxuICAgIHsgX190eXBlbmFtZT86ICdGaWVsZEVycm9yJyB9XG4gICAgJiBSZWd1bGFyRXJyb3JGcmFnbWVudFxuICApPj4sIHVzZXI/OiBNYXliZTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAmIFByb2ZpbGVVc2VyRnJhZ21lbnRcbiAgKT4gfVxuKTtcblxuZXhwb3J0IHR5cGUgUXVvdGVTbmlwcGV0RnJhZ21lbnQgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdW90ZScgfVxuICAmIFBpY2s8UXVvdGUsICdpZCcgfCAnbmFtZScgfCAnY3JlYXRlZEF0JyB8ICdjYXRhZ29yeSc+XG4gICYgeyB1c2VyOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAmIFBpY2s8VXNlciwgJ2lkJyB8ICdlbWFpbCc+XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgUmVndWxhckVycm9yRnJhZ21lbnQgPSAoXG4gIHsgX190eXBlbmFtZT86ICdGaWVsZEVycm9yJyB9XG4gICYgUGljazxGaWVsZEVycm9yLCAnZmllbGQnIHwgJ21lc3NhZ2UnPlxuKTtcblxuZXhwb3J0IHR5cGUgUmVndWxhck1haWxSZXNwb25lc0ZyYWdtZW50ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTWFpbEFjdGl2aXR5JyB9XG4gICYgUGljazxNYWlsQWN0aXZpdHksICdpZCcgfCAnRnJvbV9FbWFpbCcgfCAnVG9fRW1haWwnIHwgJ3N1YmplY3QnIHwgJ1N0YXR1cycgfCAnb3Blbl9jb3VudCcgfCAnY2xpY2tzX2NvdW50JyB8ICdtc2dpZCcgfCAndHlwZSc+XG4pO1xuXG5leHBvcnQgdHlwZSBSZWd1bGFyUXVvdGVGcmFnbWVudCA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1b3RlJyB9XG4gICYgUGljazxRdW90ZSwgJ2lkJz5cbik7XG5cbmV4cG9ydCB0eXBlIFJlZ3VsYXJTdWJGcmFnbWVudCA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1N1YicgfVxuICAmIFBpY2s8U3ViLCAnaWQnPlxuKTtcblxuZXhwb3J0IHR5cGUgUmVndWxhclRlbXBsYXRlUmVzcG9uc2VGcmFnbWVudCA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1RlbXBsYXRlUmVzcG9uZXMnIH1cbiAgJiB7IGVycm9ycz86IE1heWJlPEFycmF5PChcbiAgICB7IF9fdHlwZW5hbWU/OiAnRmllbGRFcnJvcicgfVxuICAgICYgUmVndWxhckVycm9yRnJhZ21lbnRcbiAgKT4+LCB0ZW1wbGF0ZT86IE1heWJlPChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVGVtcGxhdGVzJyB9XG4gICAgJiBSZWd1bGFyVGVtcGxhdGVzRnJhZ21lbnRcbiAgKT4gfVxuKTtcblxuZXhwb3J0IHR5cGUgUmVndWxhclRlbXBsYXRlc0ZyYWdtZW50ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnVGVtcGxhdGVzJyB9XG4gICYgUGljazxUZW1wbGF0ZXMsICdpZCc+XG4pO1xuXG5leHBvcnQgdHlwZSBSZWd1bGFyVXNlckZyYWdtZW50ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnVXNlcicgfVxuICAmIFBpY2s8VXNlciwgJ2lkJyB8ICdlbWFpbCcgfCAnaW52aXRlTGluaycgfCAncm9sZSc+XG4pO1xuXG5leHBvcnQgdHlwZSBSZWd1bGFyUXVvdGVSZXNwb25zZUZyYWdtZW50ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVvdGVSZXNwb25zZScgfVxuICAmIHsgZXJyb3JzPzogTWF5YmU8QXJyYXk8KFxuICAgIHsgX190eXBlbmFtZT86ICdGaWVsZEVycm9yJyB9XG4gICAgJiBSZWd1bGFyRXJyb3JGcmFnbWVudFxuICApPj4sIHF1b3RlPzogTWF5YmU8KFxuICAgIHsgX190eXBlbmFtZT86ICdRdW90ZScgfVxuICAgICYgUmVndWxhclF1b3RlRnJhZ21lbnRcbiAgKT4gfVxuKTtcblxuZXhwb3J0IHR5cGUgUmVndWxhclN1YlJlc3BvbnNlRnJhZ21lbnQgPSAoXG4gIHsgX190eXBlbmFtZT86ICdTdWJSZXNwb25zZScgfVxuICAmIHsgZXJyb3JzPzogTWF5YmU8QXJyYXk8KFxuICAgIHsgX190eXBlbmFtZT86ICdGaWVsZEVycm9yJyB9XG4gICAgJiBSZWd1bGFyRXJyb3JGcmFnbWVudFxuICApPj4sIHN1Yj86IE1heWJlPChcbiAgICB7IF9fdHlwZW5hbWU/OiAnU3ViJyB9XG4gICAgJiBSZWd1bGFyU3ViRnJhZ21lbnRcbiAgKT4gfVxuKTtcblxuZXhwb3J0IHR5cGUgUmVndWxhclVzZXJSZXNwb25zZUZyYWdtZW50ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJyB9XG4gICYgeyBlcnJvcnM/OiBNYXliZTxBcnJheTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ0ZpZWxkRXJyb3InIH1cbiAgICAmIFJlZ3VsYXJFcnJvckZyYWdtZW50XG4gICk+PiwgdXNlcj86IE1heWJlPChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlcicgfVxuICAgICYgUmVndWxhclVzZXJGcmFnbWVudFxuICApPiB9XG4pO1xuXG5leHBvcnQgdHlwZSBTdWJTbmlwcGV0RnJhZ21lbnQgPSAoXG4gIHsgX190eXBlbmFtZT86ICdTdWInIH1cbiAgJiBQaWNrPFN1YiwgJ2lkJyB8ICdjcmVhdGVkQXQnIHwgJ3VwZGF0ZWRBdCcgfCAnbmFtZScgfCAnZW1haWwnIHwgJ3N1YnNjcmliZWQnIHwgJ2ZyZXF1ZW5jeSc+XG4gICYgeyBjcmVhdG9yOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAmIFBpY2s8VXNlciwgJ2lkJyB8ICdlbWFpbCc+XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgVGVtcGxhdGVzU25pcHBldEZyYWdtZW50ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnVGVtcGxhdGVzJyB9XG4gICYgUGljazxUZW1wbGF0ZXMsICdpZCcgfCAndGl0bGUnIHwgJ2JvZHknIHwgJ3N1YmplY3QnIHwgJ0FjdGl2ZScgfCAnY3JlYXRlZEF0Jz5cbik7XG5cbmV4cG9ydCB0eXBlIEFsbHVzZXJTbmlwcGV0RnJhZ21lbnQgPSAoXG4gIHsgX190eXBlbmFtZT86ICdBbGx1c2VyJyB9XG4gICYgeyB1c2VyPzogTWF5YmU8QXJyYXk8KFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgJiBQaWNrPFVzZXIsICdpZCcgfCAnbmFtZSc+XG4gICk+PiB9XG4pO1xuXG5leHBvcnQgdHlwZSBVcGRhdGVUZW1wbGF0ZXNNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xuICB0aXRsZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGJvZHk6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBzdWJqZWN0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgQWN0aXZlOiBTY2FsYXJzWydCb29sZWFuJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBVcGRhdGVUZW1wbGF0ZXNNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyB1cGRhdGVUZW1wbGF0ZXM6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVGVtcGxhdGVSZXNwb25lcycgfVxuICAgICYgUmVndWxhclRlbXBsYXRlUmVzcG9uc2VGcmFnbWVudFxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIEFjY2VwdEludml0ZU11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB0b2tlbjogU2NhbGFyc1snU3RyaW5nJ107XG4gIHN1YnNjcmliZWQ6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbiAgZnJlcXVlbmN5OiBTY2FsYXJzWydGbG9hdCddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgQWNjZXB0SW52aXRlTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgYWNjZXB0SW52aXRlOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1N1YlJlc3BvbnNlJyB9XG4gICAgJiBSZWd1bGFyU3ViUmVzcG9uc2VGcmFnbWVudFxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIENhbmNlbFN1YnNjcmlwdGlvbk11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8eyBba2V5OiBzdHJpbmddOiBuZXZlcjsgfT47XG5cblxuZXhwb3J0IHR5cGUgQ2FuY2VsU3Vic2NyaXB0aW9uTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgY2FuY2VsU3Vic2NyaXB0aW9uOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZScgfVxuICAgICYgUHJvZmlsZVVzZXJSZXNwb25zZUZyYWdtZW50XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgQ2hhbmdlQ3JlZGl0Q2FyZE11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICBzb3VyY2U6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBjY0xhc3Q0OiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIENoYW5nZUNyZWRpdENhcmRNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyBjaGFuZ2VDcmVkaXRDYXJkOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZScgfVxuICAgICYgUHJvZmlsZVVzZXJSZXNwb25zZUZyYWdtZW50XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgQ2hhbmdlUGFzc3dvcmRNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgdG9rZW46IFNjYWxhcnNbJ1N0cmluZyddO1xuICBuZXdQYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBDaGFuZ2VQYXNzd29yZE11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IGNoYW5nZVBhc3N3b3JkOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZScgfVxuICAgICYgUmVndWxhclVzZXJSZXNwb25zZUZyYWdtZW50XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgVXBkYXRlTWFpbGFuZEZyZXF1ZW5jeU11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB0b2tlbjogU2NhbGFyc1snU3RyaW5nJ107XG4gIGZyZXF1ZW5jeTogU2NhbGFyc1snRmxvYXQnXTtcbiAgZW1haWw6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgVXBkYXRlTWFpbGFuZEZyZXF1ZW5jeU11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IHVwZGF0ZU1haWxhbmRGcmVxdWVuY3k6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnU3ViUmVzcG9uc2UnIH1cbiAgICAmIFJlZ3VsYXJTdWJSZXNwb25zZUZyYWdtZW50XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgQ3JlYXRlUXVvdGVNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgaW5wdXQ6IFF1b3RlSW5wdXQ7XG59PjtcblxuXG5leHBvcnQgdHlwZSBDcmVhdGVRdW90ZU11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IGNyZWF0ZVF1b3RlOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1F1b3RlUmVzcG9uc2UnIH1cbiAgICAmIFJlZ3VsYXJRdW90ZVJlc3BvbnNlRnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBDcmVhdGVTdWJNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgaW5wdXQ6IFN1YklucHV0O1xufT47XG5cblxuZXhwb3J0IHR5cGUgQ3JlYXRlU3ViTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgY3JlYXRlU3ViOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1N1YlJlc3BvbnNlJyB9XG4gICAgJiBSZWd1bGFyU3ViUmVzcG9uc2VGcmFnbWVudFxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIENyZWF0ZVN1YkZyb21Db250YWN0TXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHRva2VuOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgZW1haWxzOiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIENyZWF0ZVN1YkZyb21Db250YWN0TXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgY3JlYXRlU3ViRnJvbUNvbnRhY3Q6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnU3ViUmVzcG9uc2UnIH1cbiAgICAmIFJlZ3VsYXJTdWJSZXNwb25zZUZyYWdtZW50XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgQ3JlYXRlU3ViRnJvbUludml0ZU11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICBpbnB1dDogU3ViSW52aXRlSW5wdXQ7XG59PjtcblxuXG5leHBvcnQgdHlwZSBDcmVhdGVTdWJGcm9tSW52aXRlTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgY3JlYXRlU3ViRnJvbUludml0ZTogKFxuICAgIHsgX190eXBlbmFtZT86ICdTdWJSZXNwb25zZScgfVxuICAgICYgUmVndWxhclN1YlJlc3BvbnNlRnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBDcmVhdGVTdWJzY3JpcHRpb25NdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgc291cmNlOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgY2NMYXN0NDogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBDcmVhdGVTdWJzY3JpcHRpb25NdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyBjcmVhdGVTdWJzY3JpcHRpb246IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJyB9XG4gICAgJiBQcm9maWxlVXNlclJlc3BvbnNlRnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBDcmVhdGVTdWJzZnJ3ZHBhZ2VNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgdG9rZW46IFNjYWxhcnNbJ1N0cmluZyddO1xuICBuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgZnJlcXVlbmN5OiBTY2FsYXJzWydGbG9hdCddO1xuICBlbWFpbDogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBDcmVhdGVTdWJzZnJ3ZHBhZ2VNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyBjcmVhdGVTdWJzZnJ3ZHBhZ2U6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnU3ViUmVzcG9uc2UnIH1cbiAgICAmIFJlZ3VsYXJTdWJSZXNwb25zZUZyYWdtZW50XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgRGVsZXRlUXVvdGVNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgaWQ6IFNjYWxhcnNbJ0ludCddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgRGVsZXRlUXVvdGVNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgUGljazxNdXRhdGlvbiwgJ2RlbGV0ZVF1b3RlJz5cbik7XG5cbmV4cG9ydCB0eXBlIERlbGV0ZVN1Yk11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICBpZDogU2NhbGFyc1snSW50J107XG59PjtcblxuXG5leHBvcnQgdHlwZSBEZWxldGVTdWJNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgUGljazxNdXRhdGlvbiwgJ2RlbGV0ZVN1Yic+XG4pO1xuXG5leHBvcnQgdHlwZSBEZWxldGVUZW1wbGF0ZU11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICBpZDogU2NhbGFyc1snSW50J107XG59PjtcblxuXG5leHBvcnQgdHlwZSBEZWxldGVUZW1wbGF0ZU11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiBQaWNrPE11dGF0aW9uLCAnZGVsZXRlVGVtcGxhdGUnPlxuKTtcblxuZXhwb3J0IHR5cGUgRm9yZ290UGFzc3dvcmRNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgZW1haWw6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgRm9yZ290UGFzc3dvcmRNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgUGljazxNdXRhdGlvbiwgJ2ZvcmdvdFBhc3N3b3JkJz5cbik7XG5cbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGVtYWlsOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyBsb2dpbjogKFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyUmVzcG9uc2UnIH1cbiAgICAmIFJlZ3VsYXJVc2VyUmVzcG9uc2VGcmFnbWVudFxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIExvZ291dE11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8eyBba2V5OiBzdHJpbmddOiBuZXZlcjsgfT47XG5cblxuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIFBpY2s8TXV0YXRpb24sICdsb2dvdXQnPlxuKTtcblxuZXhwb3J0IHR5cGUgUmVTdWJyaWJlVXNlckV4aXN0aW5nQ2NNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIFJlU3VicmliZVVzZXJFeGlzdGluZ0NjTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgcmVTdWJyaWJlVXNlckV4aXN0aW5nQ0M6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJyB9XG4gICAgJiBQcm9maWxlVXNlclJlc3BvbnNlRnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBSZVN1YnJpYmVVc2VyTmV3Q2NNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgc291cmNlOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgY2NMYXN0NDogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBSZVN1YnJpYmVVc2VyTmV3Q2NNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyByZVN1YnJpYmVVc2VyTmV3Q0M6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJyB9XG4gICAgJiBQcm9maWxlVXNlclJlc3BvbnNlRnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICBvcHRpb25zOiBVc2VybmFtZVBhc3N3b3JkSW5wdXQ7XG59PjtcblxuXG5leHBvcnQgdHlwZSBSZWdpc3Rlck11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IHJlZ2lzdGVyOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZScgfVxuICAgICYgUmVndWxhclVzZXJSZXNwb25zZUZyYWdtZW50XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgQ3JlYXRlVGVtcGxhdGVzTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGlucHV0OiBUZW1wbGF0ZUlucHV0O1xufT47XG5cblxuZXhwb3J0IHR5cGUgQ3JlYXRlVGVtcGxhdGVzTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgY3JlYXRlVGVtcGxhdGVzOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1RlbXBsYXRlUmVzcG9uZXMnIH1cbiAgICAmIFJlZ3VsYXJUZW1wbGF0ZVJlc3BvbnNlRnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBVbnN1YnNjcmliZVN1Yk11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB0b2tlbjogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBVbnN1YnNjcmliZVN1Yk11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IHVuc3Vic2NyaWJlU3ViOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1N1YlJlc3BvbnNlJyB9XG4gICAgJiBSZWd1bGFyU3ViUmVzcG9uc2VGcmFnbWVudFxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZVF1b3RlTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbiAgbmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGNhdGFnb3J5OiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFVwZGF0ZVF1b3RlTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgdXBkYXRlUXVvdGU/OiBNYXliZTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1F1b3RlUmVzcG9uc2UnIH1cbiAgICAmIFJlZ3VsYXJRdW90ZVJlc3BvbnNlRnJhZ21lbnRcbiAgKT4gfVxuKTtcblxuZXhwb3J0IHR5cGUgVXBkYXRlU3ViTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbiAgbmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGVtYWlsOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgc3Vic2NyaWJlZDogU2NhbGFyc1snQm9vbGVhbiddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgVXBkYXRlU3ViTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgdXBkYXRlU3ViOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1N1YlJlc3BvbnNlJyB9XG4gICAgJiBSZWd1bGFyU3ViUmVzcG9uc2VGcmFnbWVudFxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZVVzZXJNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgaW5wdXQ6IFVzZXJJbnB1dDtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFVwZGF0ZVVzZXJNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyB1cGRhdGVVc2VyOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXJSZXNwb25zZScgfVxuICAgICYgUHJvZmlsZVVzZXJSZXNwb25zZUZyYWdtZW50XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgVXBkYXRlVXNlckF1dGhNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgaW5wdXQ6IFVzZXJBdXRoSW5wdXQ7XG59PjtcblxuXG5leHBvcnQgdHlwZSBVcGRhdGVVc2VyQXV0aE11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IHVwZGF0ZUF1dGg6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlclJlc3BvbnNlJyB9XG4gICAgJiBSZWd1bGFyVXNlclJlc3BvbnNlRnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBBbGxzdWJzUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBBbGxzdWJzUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgQWxsc3ViczogKFxuICAgIHsgX190eXBlbmFtZT86ICdTdWJzQ291bnQnIH1cbiAgICAmIEFsbHN1YlNuaXBwZXRGcmFnbWVudFxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIEFsbHN1YnNJZFF1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8e1xuICBJZDogU2NhbGFyc1snSW50J107XG59PjtcblxuXG5leHBvcnQgdHlwZSBBbGxzdWJzSWRRdWVyeSA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JyB9XG4gICYgeyBBbGxzdWJzSWQ6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnU3Vic0NvdW50JyB9XG4gICAgJiBBbGxzdWJTbmlwcGV0RnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBNYWlsQWN0aXZpdHlCeUlkUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGlkOiBTY2FsYXJzWydJbnQnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIE1haWxBY3Rpdml0eUJ5SWRRdWVyeSA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JyB9XG4gICYgeyBtYWlsQWN0aXZpdHlCeUlkOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ0FjdGl2aXR5UmVzcG9uZScgfVxuICAgICYgQWN0aXZpdHlTbmlwcGV0RnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBQYWdpbmF0ZWRBY3Rpdml0eVF1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8e1xuICBsaW1pdDogU2NhbGFyc1snSW50J107XG4gIGN1cnNvcj86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFBhZ2luYXRlZEFjdGl2aXR5UXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgUGFnaW5hdGVkbWFpbEFjdGl2aXR5OiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1BhZ2luYXRlZEFjdGl2aXR5JyB9XG4gICAgJiBQaWNrPFBhZ2luYXRlZEFjdGl2aXR5LCAnaGFzTW9yZSc+XG4gICAgJiB7IFBhZ2luYXRlZG1haWxBY3Rpdml0eTogQXJyYXk8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ01haWxBY3Rpdml0eScgfVxuICAgICAgJiBQYWdpbmF0ZWRBY3Rpdml0eVNuaXBwZXRGcmFnbWVudFxuICAgICk+IH1cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBNYWlsQWN0aXZpdHlieUlkUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGxpbWl0OiBTY2FsYXJzWydJbnQnXTtcbiAgY3Vyc29yPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBpZDogU2NhbGFyc1snSW50J107XG59PjtcblxuXG5leHBvcnQgdHlwZSBNYWlsQWN0aXZpdHlieUlkUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgUGFnaW5hdGVkbWFpbEFjdGl2aXR5YnlJZDogKFxuICAgIHsgX190eXBlbmFtZT86ICdQYWdpbmF0ZWRBY3Rpdml0eScgfVxuICAgICYgUGljazxQYWdpbmF0ZWRBY3Rpdml0eSwgJ2hhc01vcmUnPlxuICAgICYgeyBQYWdpbmF0ZWRtYWlsQWN0aXZpdHk6IEFycmF5PChcbiAgICAgIHsgX190eXBlbmFtZT86ICdNYWlsQWN0aXZpdHknIH1cbiAgICAgICYgUGFnaW5hdGVkQWN0aXZpdHlTbmlwcGV0RnJhZ21lbnRcbiAgICApPiB9XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgUXVvdGVzUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGxpbWl0OiBTY2FsYXJzWydJbnQnXTtcbiAgY3Vyc29yPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xufT47XG5cblxuZXhwb3J0IHR5cGUgUXVvdGVzUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgcXVvdGVzOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1BhZ2luYXRlZFF1b3RlcycgfVxuICAgICYgUGljazxQYWdpbmF0ZWRRdW90ZXMsICdoYXNNb3JlJz5cbiAgICAmIHsgcXVvdGVzOiBBcnJheTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnUXVvdGUnIH1cbiAgICAgICYgUXVvdGVTbmlwcGV0RnJhZ21lbnRcbiAgICApPiB9XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgU3Vic1F1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8e1xuICBsaW1pdDogU2NhbGFyc1snSW50J107XG4gIGN1cnNvcj86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFN1YnNRdWVyeSA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JyB9XG4gICYgeyBzdWJzOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1BhZ2luYXRlZFN1YnMnIH1cbiAgICAmIFBpY2s8UGFnaW5hdGVkU3VicywgJ2hhc01vcmUnPlxuICAgICYgeyBzdWJzOiBBcnJheTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnU3ViJyB9XG4gICAgICAmIFN1YlNuaXBwZXRGcmFnbWVudFxuICAgICk+IH1cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBBbGx1c2VyUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7IFtrZXk6IHN0cmluZ106IG5ldmVyOyB9PjtcblxuXG5leHBvcnQgdHlwZSBBbGx1c2VyUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgYWxsdXNlcj86IE1heWJlPChcbiAgICB7IF9fdHlwZW5hbWU/OiAnQWxsdXNlcicgfVxuICAgICYgQWxsdXNlclNuaXBwZXRGcmFnbWVudFxuICApPiB9XG4pO1xuXG5leHBvcnQgdHlwZSBNYWlsQWN0aXZpdHlRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIE1haWxBY3Rpdml0eVF1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IG1haWxBY3Rpdml0eTogKFxuICAgIHsgX190eXBlbmFtZT86ICdBY3Rpdml0eVJlc3BvbmUnIH1cbiAgICAmIEFjdGl2aXR5U25pcHBldEZyYWdtZW50XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgTWVRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIE1lUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgbWU/OiBNYXliZTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAmIFJlZ3VsYXJVc2VyRnJhZ21lbnRcbiAgKT4gfVxuKTtcblxuZXhwb3J0IHR5cGUgUHJvZmlsZVF1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8eyBba2V5OiBzdHJpbmddOiBuZXZlcjsgfT47XG5cblxuZXhwb3J0IHR5cGUgUHJvZmlsZVF1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IG1lPzogTWF5YmU8KFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgJiBQcm9maWxlVXNlckZyYWdtZW50XG4gICk+IH1cbik7XG5cbmV4cG9ydCB0eXBlIFN1YmJ5dG9rZW5RdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgdG9rZW46IFNjYWxhcnNbJ1N0cmluZyddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgU3ViYnl0b2tlblF1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IHN1YmJ5dG9rZW4/OiBNYXliZTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1N1YicgfVxuICAgICYgU3ViU25pcHBldEZyYWdtZW50XG4gICk+IH1cbik7XG5cbmV4cG9ydCB0eXBlIEdldEFsbHRlbXBsYXRlc1F1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8e1xuICBsaW1pdDogU2NhbGFyc1snSW50J107XG4gIGN1cnNvcj86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIEdldEFsbHRlbXBsYXRlc1F1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IGdldEFsbHRlbXBsYXRlczogKFxuICAgIHsgX190eXBlbmFtZT86ICdQYWdpbmF0ZWRUZW1wbGF0ZXMnIH1cbiAgICAmIFBpY2s8UGFnaW5hdGVkVGVtcGxhdGVzLCAnaGFzTW9yZSc+XG4gICAgJiB7IHRlbXBsYXRlczogQXJyYXk8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ1RlbXBsYXRlcycgfVxuICAgICAgJiBUZW1wbGF0ZXNTbmlwcGV0RnJhZ21lbnRcbiAgICApPiB9XG4gICkgfVxuKTtcblxuZXhwb3J0IGNvbnN0IFJlZ3VsYXJNYWlsUmVzcG9uZXNGcmFnbWVudERvYyA9IGdxbGBcbiAgICBmcmFnbWVudCBSZWd1bGFyTWFpbFJlc3BvbmVzIG9uIE1haWxBY3Rpdml0eSB7XG4gIGlkXG4gIEZyb21fRW1haWxcbiAgVG9fRW1haWxcbiAgc3ViamVjdFxuICBTdGF0dXNcbiAgb3Blbl9jb3VudFxuICBjbGlja3NfY291bnRcbiAgbXNnaWRcbiAgdHlwZVxufVxuICAgIGA7XG5leHBvcnQgY29uc3QgQWN0aXZpdHlTbmlwcGV0RnJhZ21lbnREb2MgPSBncWxgXG4gICAgZnJhZ21lbnQgQWN0aXZpdHlTbmlwcGV0IG9uIEFjdGl2aXR5UmVzcG9uZSB7XG4gIG1haWxBY3Rpdml0eSB7XG4gICAgLi4uUmVndWxhck1haWxSZXNwb25lc1xuICB9XG59XG4gICAgJHtSZWd1bGFyTWFpbFJlc3BvbmVzRnJhZ21lbnREb2N9YDtcbmV4cG9ydCBjb25zdCBBbGxzdWJTbmlwcGV0RnJhZ21lbnREb2MgPSBncWxgXG4gICAgZnJhZ21lbnQgQWxsc3ViU25pcHBldCBvbiBTdWJzQ291bnQge1xuICBBY3RpdmVDb3VudFxuICBOb25BY3RpdmVDb3VudFxufVxuICAgIGA7XG5leHBvcnQgY29uc3QgUGFnaW5hdGVkQWN0aXZpdHlTbmlwcGV0RnJhZ21lbnREb2MgPSBncWxgXG4gICAgZnJhZ21lbnQgUGFnaW5hdGVkQWN0aXZpdHlTbmlwcGV0IG9uIE1haWxBY3Rpdml0eSB7XG4gIGlkXG4gIEZyb21fRW1haWxcbiAgVG9fRW1haWxcbiAgc3ViamVjdFxuICBTdGF0dXNcbiAgbXNnaWRcbiAgb3Blbl9jb3VudFxuICBjbGlja3NfY291bnRcbiAgY3JlYXRlZEF0XG4gIGJvZHlcbiAgY3JlYXRvcklkXG4gIEF1dGhvclxuICB0eXBlXG4gIHN1YnNpZFxuICB1c2VyIHtcbiAgICBpZFxuICAgIG5hbWVcbiAgfVxuICBzdWJzIHtcbiAgICBpZFxuICAgIG5hbWVcbiAgfVxufVxuICAgIGA7XG5leHBvcnQgY29uc3QgUmVndWxhckVycm9yRnJhZ21lbnREb2MgPSBncWxgXG4gICAgZnJhZ21lbnQgUmVndWxhckVycm9yIG9uIEZpZWxkRXJyb3Ige1xuICBmaWVsZFxuICBtZXNzYWdlXG59XG4gICAgYDtcbmV4cG9ydCBjb25zdCBQcm9maWxlVXNlckZyYWdtZW50RG9jID0gZ3FsYFxuICAgIGZyYWdtZW50IFByb2ZpbGVVc2VyIG9uIFVzZXIge1xuICBpZFxuICBpbnZpdGVMaW5rXG4gIG5hbWVcbiAgZW1haWxcbiAgYWRkcmVzc1xuICBjaXR5XG4gIHN0YXRlXG4gIHppcFxuICByb2xlXG4gIGNhdGFnb3J5XG4gIHRpdGxlXG4gIGNvbXBhbnlcbiAgdHdpdHRlclxuICBmYWNlYm9va1xuICBsaW5rZWRJblxuICB3ZWJzaXRlXG4gIGN1c3RvbWVyVHlwZVxuICBjY0xhc3Q0XG4gIERlZmF1bHRUZW1wbGF0ZXNcbn1cbiAgICBgO1xuZXhwb3J0IGNvbnN0IFByb2ZpbGVVc2VyUmVzcG9uc2VGcmFnbWVudERvYyA9IGdxbGBcbiAgICBmcmFnbWVudCBQcm9maWxlVXNlclJlc3BvbnNlIG9uIFVzZXJSZXNwb25zZSB7XG4gIGVycm9ycyB7XG4gICAgLi4uUmVndWxhckVycm9yXG4gIH1cbiAgdXNlciB7XG4gICAgLi4uUHJvZmlsZVVzZXJcbiAgfVxufVxuICAgICR7UmVndWxhckVycm9yRnJhZ21lbnREb2N9XG4ke1Byb2ZpbGVVc2VyRnJhZ21lbnREb2N9YDtcbmV4cG9ydCBjb25zdCBRdW90ZVNuaXBwZXRGcmFnbWVudERvYyA9IGdxbGBcbiAgICBmcmFnbWVudCBRdW90ZVNuaXBwZXQgb24gUXVvdGUge1xuICBpZFxuICBuYW1lXG4gIHVzZXIge1xuICAgIGlkXG4gICAgZW1haWxcbiAgfVxuICBjcmVhdGVkQXRcbiAgY2F0YWdvcnlcbn1cbiAgICBgO1xuZXhwb3J0IGNvbnN0IFJlZ3VsYXJUZW1wbGF0ZXNGcmFnbWVudERvYyA9IGdxbGBcbiAgICBmcmFnbWVudCBSZWd1bGFyVGVtcGxhdGVzIG9uIFRlbXBsYXRlcyB7XG4gIGlkXG59XG4gICAgYDtcbmV4cG9ydCBjb25zdCBSZWd1bGFyVGVtcGxhdGVSZXNwb25zZUZyYWdtZW50RG9jID0gZ3FsYFxuICAgIGZyYWdtZW50IFJlZ3VsYXJUZW1wbGF0ZVJlc3BvbnNlIG9uIFRlbXBsYXRlUmVzcG9uZXMge1xuICBlcnJvcnMge1xuICAgIC4uLlJlZ3VsYXJFcnJvclxuICB9XG4gIHRlbXBsYXRlIHtcbiAgICAuLi5SZWd1bGFyVGVtcGxhdGVzXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJFcnJvckZyYWdtZW50RG9jfVxuJHtSZWd1bGFyVGVtcGxhdGVzRnJhZ21lbnREb2N9YDtcbmV4cG9ydCBjb25zdCBSZWd1bGFyUXVvdGVGcmFnbWVudERvYyA9IGdxbGBcbiAgICBmcmFnbWVudCBSZWd1bGFyUXVvdGUgb24gUXVvdGUge1xuICBpZFxufVxuICAgIGA7XG5leHBvcnQgY29uc3QgUmVndWxhclF1b3RlUmVzcG9uc2VGcmFnbWVudERvYyA9IGdxbGBcbiAgICBmcmFnbWVudCBSZWd1bGFyUXVvdGVSZXNwb25zZSBvbiBRdW90ZVJlc3BvbnNlIHtcbiAgZXJyb3JzIHtcbiAgICAuLi5SZWd1bGFyRXJyb3JcbiAgfVxuICBxdW90ZSB7XG4gICAgLi4uUmVndWxhclF1b3RlXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJFcnJvckZyYWdtZW50RG9jfVxuJHtSZWd1bGFyUXVvdGVGcmFnbWVudERvY31gO1xuZXhwb3J0IGNvbnN0IFJlZ3VsYXJTdWJGcmFnbWVudERvYyA9IGdxbGBcbiAgICBmcmFnbWVudCBSZWd1bGFyU3ViIG9uIFN1YiB7XG4gIGlkXG59XG4gICAgYDtcbmV4cG9ydCBjb25zdCBSZWd1bGFyU3ViUmVzcG9uc2VGcmFnbWVudERvYyA9IGdxbGBcbiAgICBmcmFnbWVudCBSZWd1bGFyU3ViUmVzcG9uc2Ugb24gU3ViUmVzcG9uc2Uge1xuICBlcnJvcnMge1xuICAgIC4uLlJlZ3VsYXJFcnJvclxuICB9XG4gIHN1YiB7XG4gICAgLi4uUmVndWxhclN1YlxuICB9XG59XG4gICAgJHtSZWd1bGFyRXJyb3JGcmFnbWVudERvY31cbiR7UmVndWxhclN1YkZyYWdtZW50RG9jfWA7XG5leHBvcnQgY29uc3QgUmVndWxhclVzZXJGcmFnbWVudERvYyA9IGdxbGBcbiAgICBmcmFnbWVudCBSZWd1bGFyVXNlciBvbiBVc2VyIHtcbiAgaWRcbiAgZW1haWxcbiAgaW52aXRlTGlua1xuICByb2xlXG59XG4gICAgYDtcbmV4cG9ydCBjb25zdCBSZWd1bGFyVXNlclJlc3BvbnNlRnJhZ21lbnREb2MgPSBncWxgXG4gICAgZnJhZ21lbnQgUmVndWxhclVzZXJSZXNwb25zZSBvbiBVc2VyUmVzcG9uc2Uge1xuICBlcnJvcnMge1xuICAgIC4uLlJlZ3VsYXJFcnJvclxuICB9XG4gIHVzZXIge1xuICAgIC4uLlJlZ3VsYXJVc2VyXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJFcnJvckZyYWdtZW50RG9jfVxuJHtSZWd1bGFyVXNlckZyYWdtZW50RG9jfWA7XG5leHBvcnQgY29uc3QgU3ViU25pcHBldEZyYWdtZW50RG9jID0gZ3FsYFxuICAgIGZyYWdtZW50IFN1YlNuaXBwZXQgb24gU3ViIHtcbiAgaWRcbiAgY3JlYXRlZEF0XG4gIHVwZGF0ZWRBdFxuICBuYW1lXG4gIGVtYWlsXG4gIHN1YnNjcmliZWRcbiAgZnJlcXVlbmN5XG4gIGNyZWF0b3Ige1xuICAgIGlkXG4gICAgZW1haWxcbiAgfVxufVxuICAgIGA7XG5leHBvcnQgY29uc3QgVGVtcGxhdGVzU25pcHBldEZyYWdtZW50RG9jID0gZ3FsYFxuICAgIGZyYWdtZW50IFRlbXBsYXRlc1NuaXBwZXQgb24gVGVtcGxhdGVzIHtcbiAgaWRcbiAgdGl0bGVcbiAgYm9keVxuICBzdWJqZWN0XG4gIEFjdGl2ZVxuICBjcmVhdGVkQXRcbn1cbiAgICBgO1xuZXhwb3J0IGNvbnN0IEFsbHVzZXJTbmlwcGV0RnJhZ21lbnREb2MgPSBncWxgXG4gICAgZnJhZ21lbnQgYWxsdXNlclNuaXBwZXQgb24gQWxsdXNlciB7XG4gIHVzZXIge1xuICAgIGlkXG4gICAgbmFtZVxuICB9XG59XG4gICAgYDtcbmV4cG9ydCBjb25zdCBVcGRhdGVUZW1wbGF0ZXNEb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBVcGRhdGVUZW1wbGF0ZXMoJGlkOiBJbnQhLCAkdGl0bGU6IFN0cmluZyEsICRib2R5OiBTdHJpbmchLCAkc3ViamVjdDogU3RyaW5nISwgJEFjdGl2ZTogQm9vbGVhbiEpIHtcbiAgdXBkYXRlVGVtcGxhdGVzKFxuICAgIGlkOiAkaWRcbiAgICB0aXRsZTogJHRpdGxlXG4gICAgYm9keTogJGJvZHlcbiAgICBzdWJqZWN0OiAkc3ViamVjdFxuICAgIEFjdGl2ZTogJEFjdGl2ZVxuICApIHtcbiAgICAuLi5SZWd1bGFyVGVtcGxhdGVSZXNwb25zZVxuICB9XG59XG4gICAgJHtSZWd1bGFyVGVtcGxhdGVSZXNwb25zZUZyYWdtZW50RG9jfWA7XG5leHBvcnQgdHlwZSBVcGRhdGVUZW1wbGF0ZXNNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248VXBkYXRlVGVtcGxhdGVzTXV0YXRpb24sIFVwZGF0ZVRlbXBsYXRlc011dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZVVwZGF0ZVRlbXBsYXRlc011dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZVVwZGF0ZVRlbXBsYXRlc011dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZVVwZGF0ZVRlbXBsYXRlc011dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbdXBkYXRlVGVtcGxhdGVzTXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VVcGRhdGVUZW1wbGF0ZXNNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBpZDogLy8gdmFsdWUgZm9yICdpZCdcbiAqICAgICAgdGl0bGU6IC8vIHZhbHVlIGZvciAndGl0bGUnXG4gKiAgICAgIGJvZHk6IC8vIHZhbHVlIGZvciAnYm9keSdcbiAqICAgICAgc3ViamVjdDogLy8gdmFsdWUgZm9yICdzdWJqZWN0J1xuICogICAgICBBY3RpdmU6IC8vIHZhbHVlIGZvciAnQWN0aXZlJ1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VVcGRhdGVUZW1wbGF0ZXNNdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPFVwZGF0ZVRlbXBsYXRlc011dGF0aW9uLCBVcGRhdGVUZW1wbGF0ZXNNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248VXBkYXRlVGVtcGxhdGVzTXV0YXRpb24sIFVwZGF0ZVRlbXBsYXRlc011dGF0aW9uVmFyaWFibGVzPihVcGRhdGVUZW1wbGF0ZXNEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBVcGRhdGVUZW1wbGF0ZXNNdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VVcGRhdGVUZW1wbGF0ZXNNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBVcGRhdGVUZW1wbGF0ZXNNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxVcGRhdGVUZW1wbGF0ZXNNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBVcGRhdGVUZW1wbGF0ZXNNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxVcGRhdGVUZW1wbGF0ZXNNdXRhdGlvbiwgVXBkYXRlVGVtcGxhdGVzTXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IEFjY2VwdEludml0ZURvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIEFjY2VwdEludml0ZSgkdG9rZW46IFN0cmluZyEsICRzdWJzY3JpYmVkOiBCb29sZWFuISwgJGZyZXF1ZW5jeTogRmxvYXQhKSB7XG4gIGFjY2VwdEludml0ZSh0b2tlbjogJHRva2VuLCBzdWJzY3JpYmVkOiAkc3Vic2NyaWJlZCwgZnJlcXVlbmN5OiAkZnJlcXVlbmN5KSB7XG4gICAgLi4uUmVndWxhclN1YlJlc3BvbnNlXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJTdWJSZXNwb25zZUZyYWdtZW50RG9jfWA7XG5leHBvcnQgdHlwZSBBY2NlcHRJbnZpdGVNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248QWNjZXB0SW52aXRlTXV0YXRpb24sIEFjY2VwdEludml0ZU11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZUFjY2VwdEludml0ZU11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZUFjY2VwdEludml0ZU11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZUFjY2VwdEludml0ZU11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbYWNjZXB0SW52aXRlTXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VBY2NlcHRJbnZpdGVNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICB0b2tlbjogLy8gdmFsdWUgZm9yICd0b2tlbidcbiAqICAgICAgc3Vic2NyaWJlZDogLy8gdmFsdWUgZm9yICdzdWJzY3JpYmVkJ1xuICogICAgICBmcmVxdWVuY3k6IC8vIHZhbHVlIGZvciAnZnJlcXVlbmN5J1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VBY2NlcHRJbnZpdGVNdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPEFjY2VwdEludml0ZU11dGF0aW9uLCBBY2NlcHRJbnZpdGVNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248QWNjZXB0SW52aXRlTXV0YXRpb24sIEFjY2VwdEludml0ZU11dGF0aW9uVmFyaWFibGVzPihBY2NlcHRJbnZpdGVEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBBY2NlcHRJbnZpdGVNdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VBY2NlcHRJbnZpdGVNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBBY2NlcHRJbnZpdGVNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxBY2NlcHRJbnZpdGVNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBBY2NlcHRJbnZpdGVNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxBY2NlcHRJbnZpdGVNdXRhdGlvbiwgQWNjZXB0SW52aXRlTXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IENhbmNlbFN1YnNjcmlwdGlvbkRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIENhbmNlbFN1YnNjcmlwdGlvbiB7XG4gIGNhbmNlbFN1YnNjcmlwdGlvbiB7XG4gICAgLi4uUHJvZmlsZVVzZXJSZXNwb25zZVxuICB9XG59XG4gICAgJHtQcm9maWxlVXNlclJlc3BvbnNlRnJhZ21lbnREb2N9YDtcbmV4cG9ydCB0eXBlIENhbmNlbFN1YnNjcmlwdGlvbk11dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxDYW5jZWxTdWJzY3JpcHRpb25NdXRhdGlvbiwgQ2FuY2VsU3Vic2NyaXB0aW9uTXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlQ2FuY2VsU3Vic2NyaXB0aW9uTXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlQ2FuY2VsU3Vic2NyaXB0aW9uTXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlQ2FuY2VsU3Vic2NyaXB0aW9uTXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFtjYW5jZWxTdWJzY3JpcHRpb25NdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZUNhbmNlbFN1YnNjcmlwdGlvbk11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNhbmNlbFN1YnNjcmlwdGlvbk11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8Q2FuY2VsU3Vic2NyaXB0aW9uTXV0YXRpb24sIENhbmNlbFN1YnNjcmlwdGlvbk11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxDYW5jZWxTdWJzY3JpcHRpb25NdXRhdGlvbiwgQ2FuY2VsU3Vic2NyaXB0aW9uTXV0YXRpb25WYXJpYWJsZXM+KENhbmNlbFN1YnNjcmlwdGlvbkRvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIENhbmNlbFN1YnNjcmlwdGlvbk11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUNhbmNlbFN1YnNjcmlwdGlvbk11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIENhbmNlbFN1YnNjcmlwdGlvbk11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PENhbmNlbFN1YnNjcmlwdGlvbk11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIENhbmNlbFN1YnNjcmlwdGlvbk11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPENhbmNlbFN1YnNjcmlwdGlvbk11dGF0aW9uLCBDYW5jZWxTdWJzY3JpcHRpb25NdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgQ2hhbmdlQ3JlZGl0Q2FyZERvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIENoYW5nZUNyZWRpdENhcmQoJHNvdXJjZTogU3RyaW5nISwgJGNjTGFzdDQ6IFN0cmluZyEpIHtcbiAgY2hhbmdlQ3JlZGl0Q2FyZChzb3VyY2U6ICRzb3VyY2UsIGNjTGFzdDQ6ICRjY0xhc3Q0KSB7XG4gICAgLi4uUHJvZmlsZVVzZXJSZXNwb25zZVxuICB9XG59XG4gICAgJHtQcm9maWxlVXNlclJlc3BvbnNlRnJhZ21lbnREb2N9YDtcbmV4cG9ydCB0eXBlIENoYW5nZUNyZWRpdENhcmRNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248Q2hhbmdlQ3JlZGl0Q2FyZE11dGF0aW9uLCBDaGFuZ2VDcmVkaXRDYXJkTXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlQ2hhbmdlQ3JlZGl0Q2FyZE11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZUNoYW5nZUNyZWRpdENhcmRNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VDaGFuZ2VDcmVkaXRDYXJkTXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFtjaGFuZ2VDcmVkaXRDYXJkTXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VDaGFuZ2VDcmVkaXRDYXJkTXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgc291cmNlOiAvLyB2YWx1ZSBmb3IgJ3NvdXJjZSdcbiAqICAgICAgY2NMYXN0NDogLy8gdmFsdWUgZm9yICdjY0xhc3Q0J1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDaGFuZ2VDcmVkaXRDYXJkTXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxDaGFuZ2VDcmVkaXRDYXJkTXV0YXRpb24sIENoYW5nZUNyZWRpdENhcmRNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248Q2hhbmdlQ3JlZGl0Q2FyZE11dGF0aW9uLCBDaGFuZ2VDcmVkaXRDYXJkTXV0YXRpb25WYXJpYWJsZXM+KENoYW5nZUNyZWRpdENhcmREb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBDaGFuZ2VDcmVkaXRDYXJkTXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlQ2hhbmdlQ3JlZGl0Q2FyZE11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIENoYW5nZUNyZWRpdENhcmRNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxDaGFuZ2VDcmVkaXRDYXJkTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgQ2hhbmdlQ3JlZGl0Q2FyZE11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPENoYW5nZUNyZWRpdENhcmRNdXRhdGlvbiwgQ2hhbmdlQ3JlZGl0Q2FyZE11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBDaGFuZ2VQYXNzd29yZERvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIENoYW5nZVBhc3N3b3JkKCR0b2tlbjogU3RyaW5nISwgJG5ld1Bhc3N3b3JkOiBTdHJpbmchKSB7XG4gIGNoYW5nZVBhc3N3b3JkKHRva2VuOiAkdG9rZW4sIG5ld1Bhc3N3b3JkOiAkbmV3UGFzc3dvcmQpIHtcbiAgICAuLi5SZWd1bGFyVXNlclJlc3BvbnNlXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJVc2VyUmVzcG9uc2VGcmFnbWVudERvY31gO1xuZXhwb3J0IHR5cGUgQ2hhbmdlUGFzc3dvcmRNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248Q2hhbmdlUGFzc3dvcmRNdXRhdGlvbiwgQ2hhbmdlUGFzc3dvcmRNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VDaGFuZ2VQYXNzd29yZE11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZUNoYW5nZVBhc3N3b3JkTXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlQ2hhbmdlUGFzc3dvcmRNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2NoYW5nZVBhc3N3b3JkTXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VDaGFuZ2VQYXNzd29yZE11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIHRva2VuOiAvLyB2YWx1ZSBmb3IgJ3Rva2VuJ1xuICogICAgICBuZXdQYXNzd29yZDogLy8gdmFsdWUgZm9yICduZXdQYXNzd29yZCdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2hhbmdlUGFzc3dvcmRNdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPENoYW5nZVBhc3N3b3JkTXV0YXRpb24sIENoYW5nZVBhc3N3b3JkTXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPENoYW5nZVBhc3N3b3JkTXV0YXRpb24sIENoYW5nZVBhc3N3b3JkTXV0YXRpb25WYXJpYWJsZXM+KENoYW5nZVBhc3N3b3JkRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgQ2hhbmdlUGFzc3dvcmRNdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VDaGFuZ2VQYXNzd29yZE11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIENoYW5nZVBhc3N3b3JkTXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8Q2hhbmdlUGFzc3dvcmRNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBDaGFuZ2VQYXNzd29yZE11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPENoYW5nZVBhc3N3b3JkTXV0YXRpb24sIENoYW5nZVBhc3N3b3JkTXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IFVwZGF0ZU1haWxhbmRGcmVxdWVuY3lEb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiB1cGRhdGVNYWlsYW5kRnJlcXVlbmN5KCR0b2tlbjogU3RyaW5nISwgJGZyZXF1ZW5jeTogRmxvYXQhLCAkZW1haWw6IFN0cmluZyEpIHtcbiAgdXBkYXRlTWFpbGFuZEZyZXF1ZW5jeSh0b2tlbjogJHRva2VuLCBmcmVxdWVuY3k6ICRmcmVxdWVuY3ksIGVtYWlsOiAkZW1haWwpIHtcbiAgICAuLi5SZWd1bGFyU3ViUmVzcG9uc2VcbiAgfVxufVxuICAgICR7UmVndWxhclN1YlJlc3BvbnNlRnJhZ21lbnREb2N9YDtcbmV4cG9ydCB0eXBlIFVwZGF0ZU1haWxhbmRGcmVxdWVuY3lNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248VXBkYXRlTWFpbGFuZEZyZXF1ZW5jeU11dGF0aW9uLCBVcGRhdGVNYWlsYW5kRnJlcXVlbmN5TXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlVXBkYXRlTWFpbGFuZEZyZXF1ZW5jeU11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZVVwZGF0ZU1haWxhbmRGcmVxdWVuY3lNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VVcGRhdGVNYWlsYW5kRnJlcXVlbmN5TXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFt1cGRhdGVNYWlsYW5kRnJlcXVlbmN5TXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VVcGRhdGVNYWlsYW5kRnJlcXVlbmN5TXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgdG9rZW46IC8vIHZhbHVlIGZvciAndG9rZW4nXG4gKiAgICAgIGZyZXF1ZW5jeTogLy8gdmFsdWUgZm9yICdmcmVxdWVuY3knXG4gKiAgICAgIGVtYWlsOiAvLyB2YWx1ZSBmb3IgJ2VtYWlsJ1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VVcGRhdGVNYWlsYW5kRnJlcXVlbmN5TXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxVcGRhdGVNYWlsYW5kRnJlcXVlbmN5TXV0YXRpb24sIFVwZGF0ZU1haWxhbmRGcmVxdWVuY3lNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248VXBkYXRlTWFpbGFuZEZyZXF1ZW5jeU11dGF0aW9uLCBVcGRhdGVNYWlsYW5kRnJlcXVlbmN5TXV0YXRpb25WYXJpYWJsZXM+KFVwZGF0ZU1haWxhbmRGcmVxdWVuY3lEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBVcGRhdGVNYWlsYW5kRnJlcXVlbmN5TXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlVXBkYXRlTWFpbGFuZEZyZXF1ZW5jeU11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIFVwZGF0ZU1haWxhbmRGcmVxdWVuY3lNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxVcGRhdGVNYWlsYW5kRnJlcXVlbmN5TXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgVXBkYXRlTWFpbGFuZEZyZXF1ZW5jeU11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPFVwZGF0ZU1haWxhbmRGcmVxdWVuY3lNdXRhdGlvbiwgVXBkYXRlTWFpbGFuZEZyZXF1ZW5jeU11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBDcmVhdGVRdW90ZURvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIENyZWF0ZVF1b3RlKCRpbnB1dDogUXVvdGVJbnB1dCEpIHtcbiAgY3JlYXRlUXVvdGUoaW5wdXQ6ICRpbnB1dCkge1xuICAgIC4uLlJlZ3VsYXJRdW90ZVJlc3BvbnNlXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJRdW90ZVJlc3BvbnNlRnJhZ21lbnREb2N9YDtcbmV4cG9ydCB0eXBlIENyZWF0ZVF1b3RlTXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPENyZWF0ZVF1b3RlTXV0YXRpb24sIENyZWF0ZVF1b3RlTXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlQ3JlYXRlUXVvdGVNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VDcmVhdGVRdW90ZU11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZUNyZWF0ZVF1b3RlTXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFtjcmVhdGVRdW90ZU11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlQ3JlYXRlUXVvdGVNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBpbnB1dDogLy8gdmFsdWUgZm9yICdpbnB1dCdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlUXVvdGVNdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPENyZWF0ZVF1b3RlTXV0YXRpb24sIENyZWF0ZVF1b3RlTXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPENyZWF0ZVF1b3RlTXV0YXRpb24sIENyZWF0ZVF1b3RlTXV0YXRpb25WYXJpYWJsZXM+KENyZWF0ZVF1b3RlRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgQ3JlYXRlUXVvdGVNdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VDcmVhdGVRdW90ZU11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIENyZWF0ZVF1b3RlTXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8Q3JlYXRlUXVvdGVNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBDcmVhdGVRdW90ZU11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPENyZWF0ZVF1b3RlTXV0YXRpb24sIENyZWF0ZVF1b3RlTXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IENyZWF0ZVN1YkRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIENyZWF0ZVN1YigkaW5wdXQ6IFN1YklucHV0ISkge1xuICBjcmVhdGVTdWIoaW5wdXQ6ICRpbnB1dCkge1xuICAgIC4uLlJlZ3VsYXJTdWJSZXNwb25zZVxuICB9XG59XG4gICAgJHtSZWd1bGFyU3ViUmVzcG9uc2VGcmFnbWVudERvY31gO1xuZXhwb3J0IHR5cGUgQ3JlYXRlU3ViTXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPENyZWF0ZVN1Yk11dGF0aW9uLCBDcmVhdGVTdWJNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VDcmVhdGVTdWJNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VDcmVhdGVTdWJNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VDcmVhdGVTdWJNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2NyZWF0ZVN1Yk11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlQ3JlYXRlU3ViTXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgaW5wdXQ6IC8vIHZhbHVlIGZvciAnaW5wdXQnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZVN1Yk11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8Q3JlYXRlU3ViTXV0YXRpb24sIENyZWF0ZVN1Yk11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxDcmVhdGVTdWJNdXRhdGlvbiwgQ3JlYXRlU3ViTXV0YXRpb25WYXJpYWJsZXM+KENyZWF0ZVN1YkRvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIENyZWF0ZVN1Yk11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUNyZWF0ZVN1Yk11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIENyZWF0ZVN1Yk11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PENyZWF0ZVN1Yk11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIENyZWF0ZVN1Yk11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPENyZWF0ZVN1Yk11dGF0aW9uLCBDcmVhdGVTdWJNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgQ3JlYXRlU3ViRnJvbUNvbnRhY3REb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBDcmVhdGVTdWJGcm9tQ29udGFjdCgkdG9rZW46IFN0cmluZyEsICRlbWFpbHM6IFN0cmluZyEpIHtcbiAgY3JlYXRlU3ViRnJvbUNvbnRhY3QodG9rZW46ICR0b2tlbiwgZW1haWxzOiAkZW1haWxzKSB7XG4gICAgLi4uUmVndWxhclN1YlJlc3BvbnNlXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJTdWJSZXNwb25zZUZyYWdtZW50RG9jfWA7XG5leHBvcnQgdHlwZSBDcmVhdGVTdWJGcm9tQ29udGFjdE11dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxDcmVhdGVTdWJGcm9tQ29udGFjdE11dGF0aW9uLCBDcmVhdGVTdWJGcm9tQ29udGFjdE11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZUNyZWF0ZVN1YkZyb21Db250YWN0TXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlQ3JlYXRlU3ViRnJvbUNvbnRhY3RNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VDcmVhdGVTdWJGcm9tQ29udGFjdE11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbY3JlYXRlU3ViRnJvbUNvbnRhY3RNdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZUNyZWF0ZVN1YkZyb21Db250YWN0TXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgdG9rZW46IC8vIHZhbHVlIGZvciAndG9rZW4nXG4gKiAgICAgIGVtYWlsczogLy8gdmFsdWUgZm9yICdlbWFpbHMnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZVN1YkZyb21Db250YWN0TXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxDcmVhdGVTdWJGcm9tQ29udGFjdE11dGF0aW9uLCBDcmVhdGVTdWJGcm9tQ29udGFjdE11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxDcmVhdGVTdWJGcm9tQ29udGFjdE11dGF0aW9uLCBDcmVhdGVTdWJGcm9tQ29udGFjdE11dGF0aW9uVmFyaWFibGVzPihDcmVhdGVTdWJGcm9tQ29udGFjdERvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIENyZWF0ZVN1YkZyb21Db250YWN0TXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlQ3JlYXRlU3ViRnJvbUNvbnRhY3RNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBDcmVhdGVTdWJGcm9tQ29udGFjdE11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PENyZWF0ZVN1YkZyb21Db250YWN0TXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgQ3JlYXRlU3ViRnJvbUNvbnRhY3RNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxDcmVhdGVTdWJGcm9tQ29udGFjdE11dGF0aW9uLCBDcmVhdGVTdWJGcm9tQ29udGFjdE11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBDcmVhdGVTdWJGcm9tSW52aXRlRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gQ3JlYXRlU3ViRnJvbUludml0ZSgkaW5wdXQ6IFN1Ykludml0ZUlucHV0ISkge1xuICBjcmVhdGVTdWJGcm9tSW52aXRlKGlucHV0OiAkaW5wdXQpIHtcbiAgICAuLi5SZWd1bGFyU3ViUmVzcG9uc2VcbiAgfVxufVxuICAgICR7UmVndWxhclN1YlJlc3BvbnNlRnJhZ21lbnREb2N9YDtcbmV4cG9ydCB0eXBlIENyZWF0ZVN1YkZyb21JbnZpdGVNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248Q3JlYXRlU3ViRnJvbUludml0ZU11dGF0aW9uLCBDcmVhdGVTdWJGcm9tSW52aXRlTXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlQ3JlYXRlU3ViRnJvbUludml0ZU11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZUNyZWF0ZVN1YkZyb21JbnZpdGVNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VDcmVhdGVTdWJGcm9tSW52aXRlTXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFtjcmVhdGVTdWJGcm9tSW52aXRlTXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VDcmVhdGVTdWJGcm9tSW52aXRlTXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgaW5wdXQ6IC8vIHZhbHVlIGZvciAnaW5wdXQnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZVN1YkZyb21JbnZpdGVNdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPENyZWF0ZVN1YkZyb21JbnZpdGVNdXRhdGlvbiwgQ3JlYXRlU3ViRnJvbUludml0ZU11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxDcmVhdGVTdWJGcm9tSW52aXRlTXV0YXRpb24sIENyZWF0ZVN1YkZyb21JbnZpdGVNdXRhdGlvblZhcmlhYmxlcz4oQ3JlYXRlU3ViRnJvbUludml0ZURvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIENyZWF0ZVN1YkZyb21JbnZpdGVNdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VDcmVhdGVTdWJGcm9tSW52aXRlTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgQ3JlYXRlU3ViRnJvbUludml0ZU11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PENyZWF0ZVN1YkZyb21JbnZpdGVNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBDcmVhdGVTdWJGcm9tSW52aXRlTXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8Q3JlYXRlU3ViRnJvbUludml0ZU11dGF0aW9uLCBDcmVhdGVTdWJGcm9tSW52aXRlTXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IENyZWF0ZVN1YnNjcmlwdGlvbkRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIENyZWF0ZVN1YnNjcmlwdGlvbigkc291cmNlOiBTdHJpbmchLCAkY2NMYXN0NDogU3RyaW5nISkge1xuICBjcmVhdGVTdWJzY3JpcHRpb24oc291cmNlOiAkc291cmNlLCBjY0xhc3Q0OiAkY2NMYXN0NCkge1xuICAgIC4uLlByb2ZpbGVVc2VyUmVzcG9uc2VcbiAgfVxufVxuICAgICR7UHJvZmlsZVVzZXJSZXNwb25zZUZyYWdtZW50RG9jfWA7XG5leHBvcnQgdHlwZSBDcmVhdGVTdWJzY3JpcHRpb25NdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248Q3JlYXRlU3Vic2NyaXB0aW9uTXV0YXRpb24sIENyZWF0ZVN1YnNjcmlwdGlvbk11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZUNyZWF0ZVN1YnNjcmlwdGlvbk11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZUNyZWF0ZVN1YnNjcmlwdGlvbk11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZUNyZWF0ZVN1YnNjcmlwdGlvbk11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbY3JlYXRlU3Vic2NyaXB0aW9uTXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VDcmVhdGVTdWJzY3JpcHRpb25NdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBzb3VyY2U6IC8vIHZhbHVlIGZvciAnc291cmNlJ1xuICogICAgICBjY0xhc3Q0OiAvLyB2YWx1ZSBmb3IgJ2NjTGFzdDQnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZVN1YnNjcmlwdGlvbk11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8Q3JlYXRlU3Vic2NyaXB0aW9uTXV0YXRpb24sIENyZWF0ZVN1YnNjcmlwdGlvbk11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxDcmVhdGVTdWJzY3JpcHRpb25NdXRhdGlvbiwgQ3JlYXRlU3Vic2NyaXB0aW9uTXV0YXRpb25WYXJpYWJsZXM+KENyZWF0ZVN1YnNjcmlwdGlvbkRvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIENyZWF0ZVN1YnNjcmlwdGlvbk11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUNyZWF0ZVN1YnNjcmlwdGlvbk11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIENyZWF0ZVN1YnNjcmlwdGlvbk11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PENyZWF0ZVN1YnNjcmlwdGlvbk11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIENyZWF0ZVN1YnNjcmlwdGlvbk11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPENyZWF0ZVN1YnNjcmlwdGlvbk11dGF0aW9uLCBDcmVhdGVTdWJzY3JpcHRpb25NdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgQ3JlYXRlU3Vic2Zyd2RwYWdlRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gQ3JlYXRlU3Vic2Zyd2RwYWdlKCR0b2tlbjogU3RyaW5nISwgJG5hbWU6IFN0cmluZyEsICRmcmVxdWVuY3k6IEZsb2F0ISwgJGVtYWlsOiBTdHJpbmchKSB7XG4gIGNyZWF0ZVN1YnNmcndkcGFnZShcbiAgICB0b2tlbjogJHRva2VuXG4gICAgbmFtZTogJG5hbWVcbiAgICBmcmVxdWVuY3k6ICRmcmVxdWVuY3lcbiAgICBlbWFpbDogJGVtYWlsXG4gICkge1xuICAgIC4uLlJlZ3VsYXJTdWJSZXNwb25zZVxuICB9XG59XG4gICAgJHtSZWd1bGFyU3ViUmVzcG9uc2VGcmFnbWVudERvY31gO1xuZXhwb3J0IHR5cGUgQ3JlYXRlU3Vic2Zyd2RwYWdlTXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPENyZWF0ZVN1YnNmcndkcGFnZU11dGF0aW9uLCBDcmVhdGVTdWJzZnJ3ZHBhZ2VNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VDcmVhdGVTdWJzZnJ3ZHBhZ2VNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VDcmVhdGVTdWJzZnJ3ZHBhZ2VNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VDcmVhdGVTdWJzZnJ3ZHBhZ2VNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2NyZWF0ZVN1YnNmcndkcGFnZU11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlQ3JlYXRlU3Vic2Zyd2RwYWdlTXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgdG9rZW46IC8vIHZhbHVlIGZvciAndG9rZW4nXG4gKiAgICAgIG5hbWU6IC8vIHZhbHVlIGZvciAnbmFtZSdcbiAqICAgICAgZnJlcXVlbmN5OiAvLyB2YWx1ZSBmb3IgJ2ZyZXF1ZW5jeSdcbiAqICAgICAgZW1haWw6IC8vIHZhbHVlIGZvciAnZW1haWwnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZVN1YnNmcndkcGFnZU11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8Q3JlYXRlU3Vic2Zyd2RwYWdlTXV0YXRpb24sIENyZWF0ZVN1YnNmcndkcGFnZU11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxDcmVhdGVTdWJzZnJ3ZHBhZ2VNdXRhdGlvbiwgQ3JlYXRlU3Vic2Zyd2RwYWdlTXV0YXRpb25WYXJpYWJsZXM+KENyZWF0ZVN1YnNmcndkcGFnZURvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIENyZWF0ZVN1YnNmcndkcGFnZU11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUNyZWF0ZVN1YnNmcndkcGFnZU11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIENyZWF0ZVN1YnNmcndkcGFnZU11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PENyZWF0ZVN1YnNmcndkcGFnZU11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIENyZWF0ZVN1YnNmcndkcGFnZU11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPENyZWF0ZVN1YnNmcndkcGFnZU11dGF0aW9uLCBDcmVhdGVTdWJzZnJ3ZHBhZ2VNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgRGVsZXRlUXVvdGVEb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBEZWxldGVRdW90ZSgkaWQ6IEludCEpIHtcbiAgZGVsZXRlUXVvdGUoaWQ6ICRpZClcbn1cbiAgICBgO1xuZXhwb3J0IHR5cGUgRGVsZXRlUXVvdGVNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248RGVsZXRlUXVvdGVNdXRhdGlvbiwgRGVsZXRlUXVvdGVNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VEZWxldGVRdW90ZU11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZURlbGV0ZVF1b3RlTXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlRGVsZXRlUXVvdGVNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2RlbGV0ZVF1b3RlTXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VEZWxldGVRdW90ZU11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIGlkOiAvLyB2YWx1ZSBmb3IgJ2lkJ1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VEZWxldGVRdW90ZU11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8RGVsZXRlUXVvdGVNdXRhdGlvbiwgRGVsZXRlUXVvdGVNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248RGVsZXRlUXVvdGVNdXRhdGlvbiwgRGVsZXRlUXVvdGVNdXRhdGlvblZhcmlhYmxlcz4oRGVsZXRlUXVvdGVEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBEZWxldGVRdW90ZU11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZURlbGV0ZVF1b3RlTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgRGVsZXRlUXVvdGVNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxEZWxldGVRdW90ZU11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIERlbGV0ZVF1b3RlTXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8RGVsZXRlUXVvdGVNdXRhdGlvbiwgRGVsZXRlUXVvdGVNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgRGVsZXRlU3ViRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gRGVsZXRlU3ViKCRpZDogSW50ISkge1xuICBkZWxldGVTdWIoaWQ6ICRpZClcbn1cbiAgICBgO1xuZXhwb3J0IHR5cGUgRGVsZXRlU3ViTXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPERlbGV0ZVN1Yk11dGF0aW9uLCBEZWxldGVTdWJNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VEZWxldGVTdWJNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VEZWxldGVTdWJNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VEZWxldGVTdWJNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2RlbGV0ZVN1Yk11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlRGVsZXRlU3ViTXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgaWQ6IC8vIHZhbHVlIGZvciAnaWQnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZURlbGV0ZVN1Yk11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8RGVsZXRlU3ViTXV0YXRpb24sIERlbGV0ZVN1Yk11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxEZWxldGVTdWJNdXRhdGlvbiwgRGVsZXRlU3ViTXV0YXRpb25WYXJpYWJsZXM+KERlbGV0ZVN1YkRvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIERlbGV0ZVN1Yk11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZURlbGV0ZVN1Yk11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIERlbGV0ZVN1Yk11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PERlbGV0ZVN1Yk11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIERlbGV0ZVN1Yk11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPERlbGV0ZVN1Yk11dGF0aW9uLCBEZWxldGVTdWJNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgRGVsZXRlVGVtcGxhdGVEb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBEZWxldGVUZW1wbGF0ZSgkaWQ6IEludCEpIHtcbiAgZGVsZXRlVGVtcGxhdGUoaWQ6ICRpZClcbn1cbiAgICBgO1xuZXhwb3J0IHR5cGUgRGVsZXRlVGVtcGxhdGVNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248RGVsZXRlVGVtcGxhdGVNdXRhdGlvbiwgRGVsZXRlVGVtcGxhdGVNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VEZWxldGVUZW1wbGF0ZU11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZURlbGV0ZVRlbXBsYXRlTXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlRGVsZXRlVGVtcGxhdGVNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2RlbGV0ZVRlbXBsYXRlTXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VEZWxldGVUZW1wbGF0ZU11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIGlkOiAvLyB2YWx1ZSBmb3IgJ2lkJ1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VEZWxldGVUZW1wbGF0ZU11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8RGVsZXRlVGVtcGxhdGVNdXRhdGlvbiwgRGVsZXRlVGVtcGxhdGVNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248RGVsZXRlVGVtcGxhdGVNdXRhdGlvbiwgRGVsZXRlVGVtcGxhdGVNdXRhdGlvblZhcmlhYmxlcz4oRGVsZXRlVGVtcGxhdGVEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBEZWxldGVUZW1wbGF0ZU11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZURlbGV0ZVRlbXBsYXRlTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgRGVsZXRlVGVtcGxhdGVNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxEZWxldGVUZW1wbGF0ZU11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIERlbGV0ZVRlbXBsYXRlTXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8RGVsZXRlVGVtcGxhdGVNdXRhdGlvbiwgRGVsZXRlVGVtcGxhdGVNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgRm9yZ290UGFzc3dvcmREb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBGb3Jnb3RQYXNzd29yZCgkZW1haWw6IFN0cmluZyEpIHtcbiAgZm9yZ290UGFzc3dvcmQoZW1haWw6ICRlbWFpbClcbn1cbiAgICBgO1xuZXhwb3J0IHR5cGUgRm9yZ290UGFzc3dvcmRNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248Rm9yZ290UGFzc3dvcmRNdXRhdGlvbiwgRm9yZ290UGFzc3dvcmRNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VGb3Jnb3RQYXNzd29yZE11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZUZvcmdvdFBhc3N3b3JkTXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlRm9yZ290UGFzc3dvcmRNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2ZvcmdvdFBhc3N3b3JkTXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VGb3Jnb3RQYXNzd29yZE11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIGVtYWlsOiAvLyB2YWx1ZSBmb3IgJ2VtYWlsJ1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VGb3Jnb3RQYXNzd29yZE11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8Rm9yZ290UGFzc3dvcmRNdXRhdGlvbiwgRm9yZ290UGFzc3dvcmRNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248Rm9yZ290UGFzc3dvcmRNdXRhdGlvbiwgRm9yZ290UGFzc3dvcmRNdXRhdGlvblZhcmlhYmxlcz4oRm9yZ290UGFzc3dvcmREb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBGb3Jnb3RQYXNzd29yZE11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUZvcmdvdFBhc3N3b3JkTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgRm9yZ290UGFzc3dvcmRNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxGb3Jnb3RQYXNzd29yZE11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIEZvcmdvdFBhc3N3b3JkTXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8Rm9yZ290UGFzc3dvcmRNdXRhdGlvbiwgRm9yZ290UGFzc3dvcmRNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgTG9naW5Eb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBMb2dpbigkZW1haWw6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISkge1xuICBsb2dpbihlbWFpbDogJGVtYWlsLCBwYXNzd29yZDogJHBhc3N3b3JkKSB7XG4gICAgLi4uUmVndWxhclVzZXJSZXNwb25zZVxuICB9XG59XG4gICAgJHtSZWd1bGFyVXNlclJlc3BvbnNlRnJhZ21lbnREb2N9YDtcbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPExvZ2luTXV0YXRpb24sIExvZ2luTXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlTG9naW5NdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VMb2dpbk11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZUxvZ2luTXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFtsb2dpbk11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTG9naW5NdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBlbWFpbDogLy8gdmFsdWUgZm9yICdlbWFpbCdcbiAqICAgICAgcGFzc3dvcmQ6IC8vIHZhbHVlIGZvciAncGFzc3dvcmQnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvZ2luTXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxMb2dpbk11dGF0aW9uLCBMb2dpbk11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxMb2dpbk11dGF0aW9uLCBMb2dpbk11dGF0aW9uVmFyaWFibGVzPihMb2dpbkRvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlTG9naW5NdXRhdGlvbj47XG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PExvZ2luTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxMb2dpbk11dGF0aW9uLCBMb2dpbk11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBMb2dvdXREb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBMb2dvdXQge1xuICBsb2dvdXRcbn1cbiAgICBgO1xuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPExvZ291dE11dGF0aW9uLCBMb2dvdXRNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VMb2dvdXRNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VMb2dvdXRNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VMb2dvdXRNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2xvZ291dE11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTG9nb3V0TXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9nb3V0TXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxMb2dvdXRNdXRhdGlvbiwgTG9nb3V0TXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPExvZ291dE11dGF0aW9uLCBMb2dvdXRNdXRhdGlvblZhcmlhYmxlcz4oTG9nb3V0RG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlTG9nb3V0TXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8TG9nb3V0TXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgTG9nb3V0TXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8TG9nb3V0TXV0YXRpb24sIExvZ291dE11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBSZVN1YnJpYmVVc2VyRXhpc3RpbmdDY0RvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIFJlU3VicmliZVVzZXJFeGlzdGluZ0NDIHtcbiAgcmVTdWJyaWJlVXNlckV4aXN0aW5nQ0Mge1xuICAgIC4uLlByb2ZpbGVVc2VyUmVzcG9uc2VcbiAgfVxufVxuICAgICR7UHJvZmlsZVVzZXJSZXNwb25zZUZyYWdtZW50RG9jfWA7XG5leHBvcnQgdHlwZSBSZVN1YnJpYmVVc2VyRXhpc3RpbmdDY011dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxSZVN1YnJpYmVVc2VyRXhpc3RpbmdDY011dGF0aW9uLCBSZVN1YnJpYmVVc2VyRXhpc3RpbmdDY011dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZVJlU3VicmliZVVzZXJFeGlzdGluZ0NjTXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlUmVTdWJyaWJlVXNlckV4aXN0aW5nQ2NNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VSZVN1YnJpYmVVc2VyRXhpc3RpbmdDY011dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbcmVTdWJyaWJlVXNlckV4aXN0aW5nQ2NNdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZVJlU3VicmliZVVzZXJFeGlzdGluZ0NjTXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVTdWJyaWJlVXNlckV4aXN0aW5nQ2NNdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPFJlU3VicmliZVVzZXJFeGlzdGluZ0NjTXV0YXRpb24sIFJlU3VicmliZVVzZXJFeGlzdGluZ0NjTXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPFJlU3VicmliZVVzZXJFeGlzdGluZ0NjTXV0YXRpb24sIFJlU3VicmliZVVzZXJFeGlzdGluZ0NjTXV0YXRpb25WYXJpYWJsZXM+KFJlU3VicmliZVVzZXJFeGlzdGluZ0NjRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgUmVTdWJyaWJlVXNlckV4aXN0aW5nQ2NNdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VSZVN1YnJpYmVVc2VyRXhpc3RpbmdDY011dGF0aW9uPjtcbmV4cG9ydCB0eXBlIFJlU3VicmliZVVzZXJFeGlzdGluZ0NjTXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8UmVTdWJyaWJlVXNlckV4aXN0aW5nQ2NNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBSZVN1YnJpYmVVc2VyRXhpc3RpbmdDY011dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPFJlU3VicmliZVVzZXJFeGlzdGluZ0NjTXV0YXRpb24sIFJlU3VicmliZVVzZXJFeGlzdGluZ0NjTXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IFJlU3VicmliZVVzZXJOZXdDY0RvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIFJlU3VicmliZVVzZXJOZXdDQygkc291cmNlOiBTdHJpbmchLCAkY2NMYXN0NDogU3RyaW5nISkge1xuICByZVN1YnJpYmVVc2VyTmV3Q0Moc291cmNlOiAkc291cmNlLCBjY0xhc3Q0OiAkY2NMYXN0NCkge1xuICAgIC4uLlByb2ZpbGVVc2VyUmVzcG9uc2VcbiAgfVxufVxuICAgICR7UHJvZmlsZVVzZXJSZXNwb25zZUZyYWdtZW50RG9jfWA7XG5leHBvcnQgdHlwZSBSZVN1YnJpYmVVc2VyTmV3Q2NNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248UmVTdWJyaWJlVXNlck5ld0NjTXV0YXRpb24sIFJlU3VicmliZVVzZXJOZXdDY011dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZVJlU3VicmliZVVzZXJOZXdDY011dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZVJlU3VicmliZVVzZXJOZXdDY011dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZVJlU3VicmliZVVzZXJOZXdDY011dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbcmVTdWJyaWJlVXNlck5ld0NjTXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VSZVN1YnJpYmVVc2VyTmV3Q2NNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBzb3VyY2U6IC8vIHZhbHVlIGZvciAnc291cmNlJ1xuICogICAgICBjY0xhc3Q0OiAvLyB2YWx1ZSBmb3IgJ2NjTGFzdDQnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlU3VicmliZVVzZXJOZXdDY011dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8UmVTdWJyaWJlVXNlck5ld0NjTXV0YXRpb24sIFJlU3VicmliZVVzZXJOZXdDY011dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxSZVN1YnJpYmVVc2VyTmV3Q2NNdXRhdGlvbiwgUmVTdWJyaWJlVXNlck5ld0NjTXV0YXRpb25WYXJpYWJsZXM+KFJlU3VicmliZVVzZXJOZXdDY0RvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIFJlU3VicmliZVVzZXJOZXdDY011dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVJlU3VicmliZVVzZXJOZXdDY011dGF0aW9uPjtcbmV4cG9ydCB0eXBlIFJlU3VicmliZVVzZXJOZXdDY011dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PFJlU3VicmliZVVzZXJOZXdDY011dGF0aW9uPjtcbmV4cG9ydCB0eXBlIFJlU3VicmliZVVzZXJOZXdDY011dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPFJlU3VicmliZVVzZXJOZXdDY011dGF0aW9uLCBSZVN1YnJpYmVVc2VyTmV3Q2NNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgUmVnaXN0ZXJEb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBSZWdpc3Rlcigkb3B0aW9uczogVXNlcm5hbWVQYXNzd29yZElucHV0ISkge1xuICByZWdpc3RlcihvcHRpb25zOiAkb3B0aW9ucykge1xuICAgIC4uLlJlZ3VsYXJVc2VyUmVzcG9uc2VcbiAgfVxufVxuICAgICR7UmVndWxhclVzZXJSZXNwb25zZUZyYWdtZW50RG9jfWA7XG5leHBvcnQgdHlwZSBSZWdpc3Rlck11dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxSZWdpc3Rlck11dGF0aW9uLCBSZWdpc3Rlck11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZVJlZ2lzdGVyTXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlUmVnaXN0ZXJNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VSZWdpc3Rlck11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbcmVnaXN0ZXJNdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZVJlZ2lzdGVyTXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgb3B0aW9uczogLy8gdmFsdWUgZm9yICdvcHRpb25zJ1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWdpc3Rlck11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8UmVnaXN0ZXJNdXRhdGlvbiwgUmVnaXN0ZXJNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248UmVnaXN0ZXJNdXRhdGlvbiwgUmVnaXN0ZXJNdXRhdGlvblZhcmlhYmxlcz4oUmVnaXN0ZXJEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBSZWdpc3Rlck11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVJlZ2lzdGVyTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgUmVnaXN0ZXJNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxSZWdpc3Rlck11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8UmVnaXN0ZXJNdXRhdGlvbiwgUmVnaXN0ZXJNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgQ3JlYXRlVGVtcGxhdGVzRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gY3JlYXRlVGVtcGxhdGVzKCRpbnB1dDogdGVtcGxhdGVJbnB1dCEpIHtcbiAgY3JlYXRlVGVtcGxhdGVzKGlucHV0OiAkaW5wdXQpIHtcbiAgICAuLi5SZWd1bGFyVGVtcGxhdGVSZXNwb25zZVxuICB9XG59XG4gICAgJHtSZWd1bGFyVGVtcGxhdGVSZXNwb25zZUZyYWdtZW50RG9jfWA7XG5leHBvcnQgdHlwZSBDcmVhdGVUZW1wbGF0ZXNNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248Q3JlYXRlVGVtcGxhdGVzTXV0YXRpb24sIENyZWF0ZVRlbXBsYXRlc011dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZUNyZWF0ZVRlbXBsYXRlc011dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZUNyZWF0ZVRlbXBsYXRlc011dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZUNyZWF0ZVRlbXBsYXRlc011dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbY3JlYXRlVGVtcGxhdGVzTXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VDcmVhdGVUZW1wbGF0ZXNNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBpbnB1dDogLy8gdmFsdWUgZm9yICdpbnB1dCdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlVGVtcGxhdGVzTXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxDcmVhdGVUZW1wbGF0ZXNNdXRhdGlvbiwgQ3JlYXRlVGVtcGxhdGVzTXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPENyZWF0ZVRlbXBsYXRlc011dGF0aW9uLCBDcmVhdGVUZW1wbGF0ZXNNdXRhdGlvblZhcmlhYmxlcz4oQ3JlYXRlVGVtcGxhdGVzRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgQ3JlYXRlVGVtcGxhdGVzTXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlQ3JlYXRlVGVtcGxhdGVzTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgQ3JlYXRlVGVtcGxhdGVzTXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8Q3JlYXRlVGVtcGxhdGVzTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgQ3JlYXRlVGVtcGxhdGVzTXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8Q3JlYXRlVGVtcGxhdGVzTXV0YXRpb24sIENyZWF0ZVRlbXBsYXRlc011dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBVbnN1YnNjcmliZVN1YkRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIFVuc3Vic2NyaWJlU3ViKCR0b2tlbjogU3RyaW5nISkge1xuICB1bnN1YnNjcmliZVN1Yih0b2tlbjogJHRva2VuKSB7XG4gICAgLi4uUmVndWxhclN1YlJlc3BvbnNlXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJTdWJSZXNwb25zZUZyYWdtZW50RG9jfWA7XG5leHBvcnQgdHlwZSBVbnN1YnNjcmliZVN1Yk11dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxVbnN1YnNjcmliZVN1Yk11dGF0aW9uLCBVbnN1YnNjcmliZVN1Yk11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZVVuc3Vic2NyaWJlU3ViTXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlVW5zdWJzY3JpYmVTdWJNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VVbnN1YnNjcmliZVN1Yk11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbdW5zdWJzY3JpYmVTdWJNdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZVVuc3Vic2NyaWJlU3ViTXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgdG9rZW46IC8vIHZhbHVlIGZvciAndG9rZW4nXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVVuc3Vic2NyaWJlU3ViTXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxVbnN1YnNjcmliZVN1Yk11dGF0aW9uLCBVbnN1YnNjcmliZVN1Yk11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxVbnN1YnNjcmliZVN1Yk11dGF0aW9uLCBVbnN1YnNjcmliZVN1Yk11dGF0aW9uVmFyaWFibGVzPihVbnN1YnNjcmliZVN1YkRvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIFVuc3Vic2NyaWJlU3ViTXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlVW5zdWJzY3JpYmVTdWJNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBVbnN1YnNjcmliZVN1Yk11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PFVuc3Vic2NyaWJlU3ViTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgVW5zdWJzY3JpYmVTdWJNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxVbnN1YnNjcmliZVN1Yk11dGF0aW9uLCBVbnN1YnNjcmliZVN1Yk11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBVcGRhdGVRdW90ZURvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIFVwZGF0ZVF1b3RlKCRpZDogSW50ISwgJG5hbWU6IFN0cmluZyEsICRjYXRhZ29yeTogU3RyaW5nISkge1xuICB1cGRhdGVRdW90ZShpZDogJGlkLCBuYW1lOiAkbmFtZSwgY2F0YWdvcnk6ICRjYXRhZ29yeSkge1xuICAgIC4uLlJlZ3VsYXJRdW90ZVJlc3BvbnNlXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJRdW90ZVJlc3BvbnNlRnJhZ21lbnREb2N9YDtcbmV4cG9ydCB0eXBlIFVwZGF0ZVF1b3RlTXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPFVwZGF0ZVF1b3RlTXV0YXRpb24sIFVwZGF0ZVF1b3RlTXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlVXBkYXRlUXVvdGVNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VVcGRhdGVRdW90ZU11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZVVwZGF0ZVF1b3RlTXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFt1cGRhdGVRdW90ZU11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlVXBkYXRlUXVvdGVNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBpZDogLy8gdmFsdWUgZm9yICdpZCdcbiAqICAgICAgbmFtZTogLy8gdmFsdWUgZm9yICduYW1lJ1xuICogICAgICBjYXRhZ29yeTogLy8gdmFsdWUgZm9yICdjYXRhZ29yeSdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlVXBkYXRlUXVvdGVNdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPFVwZGF0ZVF1b3RlTXV0YXRpb24sIFVwZGF0ZVF1b3RlTXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPFVwZGF0ZVF1b3RlTXV0YXRpb24sIFVwZGF0ZVF1b3RlTXV0YXRpb25WYXJpYWJsZXM+KFVwZGF0ZVF1b3RlRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgVXBkYXRlUXVvdGVNdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VVcGRhdGVRdW90ZU11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIFVwZGF0ZVF1b3RlTXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8VXBkYXRlUXVvdGVNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBVcGRhdGVRdW90ZU11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPFVwZGF0ZVF1b3RlTXV0YXRpb24sIFVwZGF0ZVF1b3RlTXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IFVwZGF0ZVN1YkRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIFVwZGF0ZVN1YigkaWQ6IEludCEsICRuYW1lOiBTdHJpbmchLCAkZW1haWw6IFN0cmluZyEsICRzdWJzY3JpYmVkOiBCb29sZWFuISkge1xuICB1cGRhdGVTdWIoaWQ6ICRpZCwgbmFtZTogJG5hbWUsIGVtYWlsOiAkZW1haWwsIHN1YnNjcmliZWQ6ICRzdWJzY3JpYmVkKSB7XG4gICAgLi4uUmVndWxhclN1YlJlc3BvbnNlXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJTdWJSZXNwb25zZUZyYWdtZW50RG9jfWA7XG5leHBvcnQgdHlwZSBVcGRhdGVTdWJNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248VXBkYXRlU3ViTXV0YXRpb24sIFVwZGF0ZVN1Yk11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZVVwZGF0ZVN1Yk11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZVVwZGF0ZVN1Yk11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZVVwZGF0ZVN1Yk11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbdXBkYXRlU3ViTXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VVcGRhdGVTdWJNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBpZDogLy8gdmFsdWUgZm9yICdpZCdcbiAqICAgICAgbmFtZTogLy8gdmFsdWUgZm9yICduYW1lJ1xuICogICAgICBlbWFpbDogLy8gdmFsdWUgZm9yICdlbWFpbCdcbiAqICAgICAgc3Vic2NyaWJlZDogLy8gdmFsdWUgZm9yICdzdWJzY3JpYmVkJ1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VVcGRhdGVTdWJNdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPFVwZGF0ZVN1Yk11dGF0aW9uLCBVcGRhdGVTdWJNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248VXBkYXRlU3ViTXV0YXRpb24sIFVwZGF0ZVN1Yk11dGF0aW9uVmFyaWFibGVzPihVcGRhdGVTdWJEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBVcGRhdGVTdWJNdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VVcGRhdGVTdWJNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBVcGRhdGVTdWJNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxVcGRhdGVTdWJNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBVcGRhdGVTdWJNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxVcGRhdGVTdWJNdXRhdGlvbiwgVXBkYXRlU3ViTXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IFVwZGF0ZVVzZXJEb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBVcGRhdGVVc2VyKCRpbnB1dDogVXNlcklucHV0ISkge1xuICB1cGRhdGVVc2VyKGlucHV0OiAkaW5wdXQpIHtcbiAgICAuLi5Qcm9maWxlVXNlclJlc3BvbnNlXG4gIH1cbn1cbiAgICAke1Byb2ZpbGVVc2VyUmVzcG9uc2VGcmFnbWVudERvY31gO1xuZXhwb3J0IHR5cGUgVXBkYXRlVXNlck11dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxVcGRhdGVVc2VyTXV0YXRpb24sIFVwZGF0ZVVzZXJNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VVcGRhdGVVc2VyTXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlVXBkYXRlVXNlck11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZVVwZGF0ZVVzZXJNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW3VwZGF0ZVVzZXJNdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZVVwZGF0ZVVzZXJNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBpbnB1dDogLy8gdmFsdWUgZm9yICdpbnB1dCdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlVXBkYXRlVXNlck11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8VXBkYXRlVXNlck11dGF0aW9uLCBVcGRhdGVVc2VyTXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPFVwZGF0ZVVzZXJNdXRhdGlvbiwgVXBkYXRlVXNlck11dGF0aW9uVmFyaWFibGVzPihVcGRhdGVVc2VyRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgVXBkYXRlVXNlck11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVVwZGF0ZVVzZXJNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBVcGRhdGVVc2VyTXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8VXBkYXRlVXNlck11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIFVwZGF0ZVVzZXJNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxVcGRhdGVVc2VyTXV0YXRpb24sIFVwZGF0ZVVzZXJNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgVXBkYXRlVXNlckF1dGhEb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBVcGRhdGVVc2VyQXV0aCgkaW5wdXQ6IFVzZXJBdXRoSW5wdXQhKSB7XG4gIHVwZGF0ZUF1dGgoaW5wdXQ6ICRpbnB1dCkge1xuICAgIC4uLlJlZ3VsYXJVc2VyUmVzcG9uc2VcbiAgfVxufVxuICAgICR7UmVndWxhclVzZXJSZXNwb25zZUZyYWdtZW50RG9jfWA7XG5leHBvcnQgdHlwZSBVcGRhdGVVc2VyQXV0aE11dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxVcGRhdGVVc2VyQXV0aE11dGF0aW9uLCBVcGRhdGVVc2VyQXV0aE11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZVVwZGF0ZVVzZXJBdXRoTXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlVXBkYXRlVXNlckF1dGhNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VVcGRhdGVVc2VyQXV0aE11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbdXBkYXRlVXNlckF1dGhNdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZVVwZGF0ZVVzZXJBdXRoTXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgaW5wdXQ6IC8vIHZhbHVlIGZvciAnaW5wdXQnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVVwZGF0ZVVzZXJBdXRoTXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxVcGRhdGVVc2VyQXV0aE11dGF0aW9uLCBVcGRhdGVVc2VyQXV0aE11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxVcGRhdGVVc2VyQXV0aE11dGF0aW9uLCBVcGRhdGVVc2VyQXV0aE11dGF0aW9uVmFyaWFibGVzPihVcGRhdGVVc2VyQXV0aERvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIFVwZGF0ZVVzZXJBdXRoTXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlVXBkYXRlVXNlckF1dGhNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBVcGRhdGVVc2VyQXV0aE11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PFVwZGF0ZVVzZXJBdXRoTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgVXBkYXRlVXNlckF1dGhNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxVcGRhdGVVc2VyQXV0aE11dGF0aW9uLCBVcGRhdGVVc2VyQXV0aE11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBBbGxzdWJzRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgQWxsc3VicyB7XG4gIEFsbHN1YnMge1xuICAgIC4uLkFsbHN1YlNuaXBwZXRcbiAgfVxufVxuICAgICR7QWxsc3ViU25pcHBldEZyYWdtZW50RG9jfWA7XG5cbi8qKlxuICogX191c2VBbGxzdWJzUXVlcnlfX1xuICpcbiAqIFRvIHJ1biBhIHF1ZXJ5IHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCwgY2FsbCBgdXNlQWxsc3Vic1F1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlQWxsc3Vic1F1ZXJ5YCByZXR1cm5zIGFuIG9iamVjdCBmcm9tIEFwb2xsbyBDbGllbnQgdGhhdCBjb250YWlucyBsb2FkaW5nLCBlcnJvciwgYW5kIGRhdGEgcHJvcGVydGllc1xuICogeW91IGNhbiB1c2UgdG8gcmVuZGVyIHlvdXIgVUkuXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBxdWVyeSwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnM7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZUFsbHN1YnNRdWVyeSh7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbGxzdWJzUXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uUXVlcnlIb29rT3B0aW9uczxBbGxzdWJzUXVlcnksIEFsbHN1YnNRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlUXVlcnk8QWxsc3Vic1F1ZXJ5LCBBbGxzdWJzUXVlcnlWYXJpYWJsZXM+KEFsbHN1YnNEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgZnVuY3Rpb24gdXNlQWxsc3Vic0xhenlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5MYXp5UXVlcnlIb29rT3B0aW9uczxBbGxzdWJzUXVlcnksIEFsbHN1YnNRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgICByZXR1cm4gQXBvbGxvLnVzZUxhenlRdWVyeTxBbGxzdWJzUXVlcnksIEFsbHN1YnNRdWVyeVZhcmlhYmxlcz4oQWxsc3Vic0RvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgICAgfVxuZXhwb3J0IHR5cGUgQWxsc3Vic1F1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUFsbHN1YnNRdWVyeT47XG5leHBvcnQgdHlwZSBBbGxzdWJzTGF6eVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUFsbHN1YnNMYXp5UXVlcnk+O1xuZXhwb3J0IHR5cGUgQWxsc3Vic1F1ZXJ5UmVzdWx0ID0gQXBvbGxvLlF1ZXJ5UmVzdWx0PEFsbHN1YnNRdWVyeSwgQWxsc3Vic1F1ZXJ5VmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBBbGxzdWJzSWREb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBBbGxzdWJzSWQoJElkOiBJbnQhKSB7XG4gIEFsbHN1YnNJZChJZDogJElkKSB7XG4gICAgLi4uQWxsc3ViU25pcHBldFxuICB9XG59XG4gICAgJHtBbGxzdWJTbmlwcGV0RnJhZ21lbnREb2N9YDtcblxuLyoqXG4gKiBfX3VzZUFsbHN1YnNJZFF1ZXJ5X19cbiAqXG4gKiBUbyBydW4gYSBxdWVyeSB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQsIGNhbGwgYHVzZUFsbHN1YnNJZFF1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlQWxsc3Vic0lkUXVlcnlgIHJldHVybnMgYW4gb2JqZWN0IGZyb20gQXBvbGxvIENsaWVudCB0aGF0IGNvbnRhaW5zIGxvYWRpbmcsIGVycm9yLCBhbmQgZGF0YSBwcm9wZXJ0aWVzXG4gKiB5b3UgY2FuIHVzZSB0byByZW5kZXIgeW91ciBVSS5cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIHF1ZXJ5LCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucztcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlQWxsc3Vic0lkUXVlcnkoe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgSWQ6IC8vIHZhbHVlIGZvciAnSWQnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFsbHN1YnNJZFF1ZXJ5KGJhc2VPcHRpb25zOiBBcG9sbG8uUXVlcnlIb29rT3B0aW9uczxBbGxzdWJzSWRRdWVyeSwgQWxsc3Vic0lkUXVlcnlWYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZVF1ZXJ5PEFsbHN1YnNJZFF1ZXJ5LCBBbGxzdWJzSWRRdWVyeVZhcmlhYmxlcz4oQWxsc3Vic0lkRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFsbHN1YnNJZExhenlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5MYXp5UXVlcnlIb29rT3B0aW9uczxBbGxzdWJzSWRRdWVyeSwgQWxsc3Vic0lkUXVlcnlWYXJpYWJsZXM+KSB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgICAgcmV0dXJuIEFwb2xsby51c2VMYXp5UXVlcnk8QWxsc3Vic0lkUXVlcnksIEFsbHN1YnNJZFF1ZXJ5VmFyaWFibGVzPihBbGxzdWJzSWREb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbmV4cG9ydCB0eXBlIEFsbHN1YnNJZFF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUFsbHN1YnNJZFF1ZXJ5PjtcbmV4cG9ydCB0eXBlIEFsbHN1YnNJZExhenlRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VBbGxzdWJzSWRMYXp5UXVlcnk+O1xuZXhwb3J0IHR5cGUgQWxsc3Vic0lkUXVlcnlSZXN1bHQgPSBBcG9sbG8uUXVlcnlSZXN1bHQ8QWxsc3Vic0lkUXVlcnksIEFsbHN1YnNJZFF1ZXJ5VmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBNYWlsQWN0aXZpdHlCeUlkRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgbWFpbEFjdGl2aXR5QnlJZCgkaWQ6IEludCEpIHtcbiAgbWFpbEFjdGl2aXR5QnlJZChpZDogJGlkKSB7XG4gICAgLi4uQWN0aXZpdHlTbmlwcGV0XG4gIH1cbn1cbiAgICAke0FjdGl2aXR5U25pcHBldEZyYWdtZW50RG9jfWA7XG5cbi8qKlxuICogX191c2VNYWlsQWN0aXZpdHlCeUlkUXVlcnlfX1xuICpcbiAqIFRvIHJ1biBhIHF1ZXJ5IHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCwgY2FsbCBgdXNlTWFpbEFjdGl2aXR5QnlJZFF1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlTWFpbEFjdGl2aXR5QnlJZFF1ZXJ5YCByZXR1cm5zIGFuIG9iamVjdCBmcm9tIEFwb2xsbyBDbGllbnQgdGhhdCBjb250YWlucyBsb2FkaW5nLCBlcnJvciwgYW5kIGRhdGEgcHJvcGVydGllc1xuICogeW91IGNhbiB1c2UgdG8gcmVuZGVyIHlvdXIgVUkuXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBxdWVyeSwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnM7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZU1haWxBY3Rpdml0eUJ5SWRRdWVyeSh7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBpZDogLy8gdmFsdWUgZm9yICdpZCdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWFpbEFjdGl2aXR5QnlJZFF1ZXJ5KGJhc2VPcHRpb25zOiBBcG9sbG8uUXVlcnlIb29rT3B0aW9uczxNYWlsQWN0aXZpdHlCeUlkUXVlcnksIE1haWxBY3Rpdml0eUJ5SWRRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlUXVlcnk8TWFpbEFjdGl2aXR5QnlJZFF1ZXJ5LCBNYWlsQWN0aXZpdHlCeUlkUXVlcnlWYXJpYWJsZXM+KE1haWxBY3Rpdml0eUJ5SWREb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgZnVuY3Rpb24gdXNlTWFpbEFjdGl2aXR5QnlJZExhenlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5MYXp5UXVlcnlIb29rT3B0aW9uczxNYWlsQWN0aXZpdHlCeUlkUXVlcnksIE1haWxBY3Rpdml0eUJ5SWRRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgICByZXR1cm4gQXBvbGxvLnVzZUxhenlRdWVyeTxNYWlsQWN0aXZpdHlCeUlkUXVlcnksIE1haWxBY3Rpdml0eUJ5SWRRdWVyeVZhcmlhYmxlcz4oTWFpbEFjdGl2aXR5QnlJZERvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgICAgfVxuZXhwb3J0IHR5cGUgTWFpbEFjdGl2aXR5QnlJZFF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZU1haWxBY3Rpdml0eUJ5SWRRdWVyeT47XG5leHBvcnQgdHlwZSBNYWlsQWN0aXZpdHlCeUlkTGF6eVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZU1haWxBY3Rpdml0eUJ5SWRMYXp5UXVlcnk+O1xuZXhwb3J0IHR5cGUgTWFpbEFjdGl2aXR5QnlJZFF1ZXJ5UmVzdWx0ID0gQXBvbGxvLlF1ZXJ5UmVzdWx0PE1haWxBY3Rpdml0eUJ5SWRRdWVyeSwgTWFpbEFjdGl2aXR5QnlJZFF1ZXJ5VmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBQYWdpbmF0ZWRBY3Rpdml0eURvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IHBhZ2luYXRlZEFjdGl2aXR5KCRsaW1pdDogSW50ISwgJGN1cnNvcjogU3RyaW5nKSB7XG4gIFBhZ2luYXRlZG1haWxBY3Rpdml0eShsaW1pdDogJGxpbWl0LCBjdXJzb3I6ICRjdXJzb3IpIHtcbiAgICBoYXNNb3JlXG4gICAgUGFnaW5hdGVkbWFpbEFjdGl2aXR5IHtcbiAgICAgIC4uLlBhZ2luYXRlZEFjdGl2aXR5U25pcHBldFxuICAgIH1cbiAgfVxufVxuICAgICR7UGFnaW5hdGVkQWN0aXZpdHlTbmlwcGV0RnJhZ21lbnREb2N9YDtcblxuLyoqXG4gKiBfX3VzZVBhZ2luYXRlZEFjdGl2aXR5UXVlcnlfX1xuICpcbiAqIFRvIHJ1biBhIHF1ZXJ5IHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCwgY2FsbCBgdXNlUGFnaW5hdGVkQWN0aXZpdHlRdWVyeWAgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZVBhZ2luYXRlZEFjdGl2aXR5UXVlcnlgIHJldHVybnMgYW4gb2JqZWN0IGZyb20gQXBvbGxvIENsaWVudCB0aGF0IGNvbnRhaW5zIGxvYWRpbmcsIGVycm9yLCBhbmQgZGF0YSBwcm9wZXJ0aWVzXG4gKiB5b3UgY2FuIHVzZSB0byByZW5kZXIgeW91ciBVSS5cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIHF1ZXJ5LCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucztcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUGFnaW5hdGVkQWN0aXZpdHlRdWVyeSh7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBsaW1pdDogLy8gdmFsdWUgZm9yICdsaW1pdCdcbiAqICAgICAgY3Vyc29yOiAvLyB2YWx1ZSBmb3IgJ2N1cnNvcidcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUGFnaW5hdGVkQWN0aXZpdHlRdWVyeShiYXNlT3B0aW9uczogQXBvbGxvLlF1ZXJ5SG9va09wdGlvbnM8UGFnaW5hdGVkQWN0aXZpdHlRdWVyeSwgUGFnaW5hdGVkQWN0aXZpdHlRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlUXVlcnk8UGFnaW5hdGVkQWN0aXZpdHlRdWVyeSwgUGFnaW5hdGVkQWN0aXZpdHlRdWVyeVZhcmlhYmxlcz4oUGFnaW5hdGVkQWN0aXZpdHlEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgZnVuY3Rpb24gdXNlUGFnaW5hdGVkQWN0aXZpdHlMYXp5UXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uTGF6eVF1ZXJ5SG9va09wdGlvbnM8UGFnaW5hdGVkQWN0aXZpdHlRdWVyeSwgUGFnaW5hdGVkQWN0aXZpdHlRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgICByZXR1cm4gQXBvbGxvLnVzZUxhenlRdWVyeTxQYWdpbmF0ZWRBY3Rpdml0eVF1ZXJ5LCBQYWdpbmF0ZWRBY3Rpdml0eVF1ZXJ5VmFyaWFibGVzPihQYWdpbmF0ZWRBY3Rpdml0eURvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgICAgfVxuZXhwb3J0IHR5cGUgUGFnaW5hdGVkQWN0aXZpdHlRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VQYWdpbmF0ZWRBY3Rpdml0eVF1ZXJ5PjtcbmV4cG9ydCB0eXBlIFBhZ2luYXRlZEFjdGl2aXR5TGF6eVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVBhZ2luYXRlZEFjdGl2aXR5TGF6eVF1ZXJ5PjtcbmV4cG9ydCB0eXBlIFBhZ2luYXRlZEFjdGl2aXR5UXVlcnlSZXN1bHQgPSBBcG9sbG8uUXVlcnlSZXN1bHQ8UGFnaW5hdGVkQWN0aXZpdHlRdWVyeSwgUGFnaW5hdGVkQWN0aXZpdHlRdWVyeVZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgTWFpbEFjdGl2aXR5YnlJZERvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IG1haWxBY3Rpdml0eWJ5SWQoJGxpbWl0OiBJbnQhLCAkY3Vyc29yOiBTdHJpbmcsICRpZDogSW50ISkge1xuICBQYWdpbmF0ZWRtYWlsQWN0aXZpdHlieUlkKGxpbWl0OiAkbGltaXQsIGN1cnNvcjogJGN1cnNvciwgaWQ6ICRpZCkge1xuICAgIGhhc01vcmVcbiAgICBQYWdpbmF0ZWRtYWlsQWN0aXZpdHkge1xuICAgICAgLi4uUGFnaW5hdGVkQWN0aXZpdHlTbmlwcGV0XG4gICAgfVxuICB9XG59XG4gICAgJHtQYWdpbmF0ZWRBY3Rpdml0eVNuaXBwZXRGcmFnbWVudERvY31gO1xuXG4vKipcbiAqIF9fdXNlTWFpbEFjdGl2aXR5YnlJZFF1ZXJ5X19cbiAqXG4gKiBUbyBydW4gYSBxdWVyeSB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQsIGNhbGwgYHVzZU1haWxBY3Rpdml0eWJ5SWRRdWVyeWAgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZU1haWxBY3Rpdml0eWJ5SWRRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VNYWlsQWN0aXZpdHlieUlkUXVlcnkoe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgbGltaXQ6IC8vIHZhbHVlIGZvciAnbGltaXQnXG4gKiAgICAgIGN1cnNvcjogLy8gdmFsdWUgZm9yICdjdXJzb3InXG4gKiAgICAgIGlkOiAvLyB2YWx1ZSBmb3IgJ2lkJ1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNYWlsQWN0aXZpdHlieUlkUXVlcnkoYmFzZU9wdGlvbnM6IEFwb2xsby5RdWVyeUhvb2tPcHRpb25zPE1haWxBY3Rpdml0eWJ5SWRRdWVyeSwgTWFpbEFjdGl2aXR5YnlJZFF1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VRdWVyeTxNYWlsQWN0aXZpdHlieUlkUXVlcnksIE1haWxBY3Rpdml0eWJ5SWRRdWVyeVZhcmlhYmxlcz4oTWFpbEFjdGl2aXR5YnlJZERvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VNYWlsQWN0aXZpdHlieUlkTGF6eVF1ZXJ5KGJhc2VPcHRpb25zPzogQXBvbGxvLkxhenlRdWVyeUhvb2tPcHRpb25zPE1haWxBY3Rpdml0eWJ5SWRRdWVyeSwgTWFpbEFjdGl2aXR5YnlJZFF1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICAgIHJldHVybiBBcG9sbG8udXNlTGF6eVF1ZXJ5PE1haWxBY3Rpdml0eWJ5SWRRdWVyeSwgTWFpbEFjdGl2aXR5YnlJZFF1ZXJ5VmFyaWFibGVzPihNYWlsQWN0aXZpdHlieUlkRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICB9XG5leHBvcnQgdHlwZSBNYWlsQWN0aXZpdHlieUlkUXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlTWFpbEFjdGl2aXR5YnlJZFF1ZXJ5PjtcbmV4cG9ydCB0eXBlIE1haWxBY3Rpdml0eWJ5SWRMYXp5UXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlTWFpbEFjdGl2aXR5YnlJZExhenlRdWVyeT47XG5leHBvcnQgdHlwZSBNYWlsQWN0aXZpdHlieUlkUXVlcnlSZXN1bHQgPSBBcG9sbG8uUXVlcnlSZXN1bHQ8TWFpbEFjdGl2aXR5YnlJZFF1ZXJ5LCBNYWlsQWN0aXZpdHlieUlkUXVlcnlWYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IFF1b3Rlc0RvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IFF1b3RlcygkbGltaXQ6IEludCEsICRjdXJzb3I6IFN0cmluZykge1xuICBxdW90ZXMobGltaXQ6ICRsaW1pdCwgY3Vyc29yOiAkY3Vyc29yKSB7XG4gICAgaGFzTW9yZVxuICAgIHF1b3RlcyB7XG4gICAgICAuLi5RdW90ZVNuaXBwZXRcbiAgICB9XG4gIH1cbn1cbiAgICAke1F1b3RlU25pcHBldEZyYWdtZW50RG9jfWA7XG5cbi8qKlxuICogX191c2VRdW90ZXNRdWVyeV9fXG4gKlxuICogVG8gcnVuIGEgcXVlcnkgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50LCBjYWxsIGB1c2VRdW90ZXNRdWVyeWAgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZVF1b3Rlc1F1ZXJ5YCByZXR1cm5zIGFuIG9iamVjdCBmcm9tIEFwb2xsbyBDbGllbnQgdGhhdCBjb250YWlucyBsb2FkaW5nLCBlcnJvciwgYW5kIGRhdGEgcHJvcGVydGllc1xuICogeW91IGNhbiB1c2UgdG8gcmVuZGVyIHlvdXIgVUkuXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBxdWVyeSwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnM7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1b3Rlc1F1ZXJ5KHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIGxpbWl0OiAvLyB2YWx1ZSBmb3IgJ2xpbWl0J1xuICogICAgICBjdXJzb3I6IC8vIHZhbHVlIGZvciAnY3Vyc29yJ1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VRdW90ZXNRdWVyeShiYXNlT3B0aW9uczogQXBvbGxvLlF1ZXJ5SG9va09wdGlvbnM8UXVvdGVzUXVlcnksIFF1b3Rlc1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VRdWVyeTxRdW90ZXNRdWVyeSwgUXVvdGVzUXVlcnlWYXJpYWJsZXM+KFF1b3Rlc0RvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VRdW90ZXNMYXp5UXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uTGF6eVF1ZXJ5SG9va09wdGlvbnM8UXVvdGVzUXVlcnksIFF1b3Rlc1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICAgIHJldHVybiBBcG9sbG8udXNlTGF6eVF1ZXJ5PFF1b3Rlc1F1ZXJ5LCBRdW90ZXNRdWVyeVZhcmlhYmxlcz4oUXVvdGVzRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICB9XG5leHBvcnQgdHlwZSBRdW90ZXNRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VRdW90ZXNRdWVyeT47XG5leHBvcnQgdHlwZSBRdW90ZXNMYXp5UXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlUXVvdGVzTGF6eVF1ZXJ5PjtcbmV4cG9ydCB0eXBlIFF1b3Rlc1F1ZXJ5UmVzdWx0ID0gQXBvbGxvLlF1ZXJ5UmVzdWx0PFF1b3Rlc1F1ZXJ5LCBRdW90ZXNRdWVyeVZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgU3Vic0RvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IFN1YnMoJGxpbWl0OiBJbnQhLCAkY3Vyc29yOiBTdHJpbmcpIHtcbiAgc3VicyhsaW1pdDogJGxpbWl0LCBjdXJzb3I6ICRjdXJzb3IpIHtcbiAgICBoYXNNb3JlXG4gICAgc3VicyB7XG4gICAgICAuLi5TdWJTbmlwcGV0XG4gICAgfVxuICB9XG59XG4gICAgJHtTdWJTbmlwcGV0RnJhZ21lbnREb2N9YDtcblxuLyoqXG4gKiBfX3VzZVN1YnNRdWVyeV9fXG4gKlxuICogVG8gcnVuIGEgcXVlcnkgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50LCBjYWxsIGB1c2VTdWJzUXVlcnlgIGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VTdWJzUXVlcnlgIHJldHVybnMgYW4gb2JqZWN0IGZyb20gQXBvbGxvIENsaWVudCB0aGF0IGNvbnRhaW5zIGxvYWRpbmcsIGVycm9yLCBhbmQgZGF0YSBwcm9wZXJ0aWVzXG4gKiB5b3UgY2FuIHVzZSB0byByZW5kZXIgeW91ciBVSS5cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIHF1ZXJ5LCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucztcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlU3Vic1F1ZXJ5KHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIGxpbWl0OiAvLyB2YWx1ZSBmb3IgJ2xpbWl0J1xuICogICAgICBjdXJzb3I6IC8vIHZhbHVlIGZvciAnY3Vyc29yJ1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdWJzUXVlcnkoYmFzZU9wdGlvbnM6IEFwb2xsby5RdWVyeUhvb2tPcHRpb25zPFN1YnNRdWVyeSwgU3Vic1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VRdWVyeTxTdWJzUXVlcnksIFN1YnNRdWVyeVZhcmlhYmxlcz4oU3Vic0RvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdWJzTGF6eVF1ZXJ5KGJhc2VPcHRpb25zPzogQXBvbGxvLkxhenlRdWVyeUhvb2tPcHRpb25zPFN1YnNRdWVyeSwgU3Vic1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICAgIHJldHVybiBBcG9sbG8udXNlTGF6eVF1ZXJ5PFN1YnNRdWVyeSwgU3Vic1F1ZXJ5VmFyaWFibGVzPihTdWJzRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICB9XG5leHBvcnQgdHlwZSBTdWJzUXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlU3Vic1F1ZXJ5PjtcbmV4cG9ydCB0eXBlIFN1YnNMYXp5UXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlU3Vic0xhenlRdWVyeT47XG5leHBvcnQgdHlwZSBTdWJzUXVlcnlSZXN1bHQgPSBBcG9sbG8uUXVlcnlSZXN1bHQ8U3Vic1F1ZXJ5LCBTdWJzUXVlcnlWYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IEFsbHVzZXJEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBhbGx1c2VyIHtcbiAgYWxsdXNlciB7XG4gICAgLi4uYWxsdXNlclNuaXBwZXRcbiAgfVxufVxuICAgICR7QWxsdXNlclNuaXBwZXRGcmFnbWVudERvY31gO1xuXG4vKipcbiAqIF9fdXNlQWxsdXNlclF1ZXJ5X19cbiAqXG4gKiBUbyBydW4gYSBxdWVyeSB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQsIGNhbGwgYHVzZUFsbHVzZXJRdWVyeWAgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZUFsbHVzZXJRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VBbGx1c2VyUXVlcnkoe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQWxsdXNlclF1ZXJ5KGJhc2VPcHRpb25zPzogQXBvbGxvLlF1ZXJ5SG9va09wdGlvbnM8QWxsdXNlclF1ZXJ5LCBBbGx1c2VyUXVlcnlWYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZVF1ZXJ5PEFsbHVzZXJRdWVyeSwgQWxsdXNlclF1ZXJ5VmFyaWFibGVzPihBbGx1c2VyRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFsbHVzZXJMYXp5UXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uTGF6eVF1ZXJ5SG9va09wdGlvbnM8QWxsdXNlclF1ZXJ5LCBBbGx1c2VyUXVlcnlWYXJpYWJsZXM+KSB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgICAgcmV0dXJuIEFwb2xsby51c2VMYXp5UXVlcnk8QWxsdXNlclF1ZXJ5LCBBbGx1c2VyUXVlcnlWYXJpYWJsZXM+KEFsbHVzZXJEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbmV4cG9ydCB0eXBlIEFsbHVzZXJRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VBbGx1c2VyUXVlcnk+O1xuZXhwb3J0IHR5cGUgQWxsdXNlckxhenlRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VBbGx1c2VyTGF6eVF1ZXJ5PjtcbmV4cG9ydCB0eXBlIEFsbHVzZXJRdWVyeVJlc3VsdCA9IEFwb2xsby5RdWVyeVJlc3VsdDxBbGx1c2VyUXVlcnksIEFsbHVzZXJRdWVyeVZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgTWFpbEFjdGl2aXR5RG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgbWFpbEFjdGl2aXR5IHtcbiAgbWFpbEFjdGl2aXR5IHtcbiAgICAuLi5BY3Rpdml0eVNuaXBwZXRcbiAgfVxufVxuICAgICR7QWN0aXZpdHlTbmlwcGV0RnJhZ21lbnREb2N9YDtcblxuLyoqXG4gKiBfX3VzZU1haWxBY3Rpdml0eVF1ZXJ5X19cbiAqXG4gKiBUbyBydW4gYSBxdWVyeSB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQsIGNhbGwgYHVzZU1haWxBY3Rpdml0eVF1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlTWFpbEFjdGl2aXR5UXVlcnlgIHJldHVybnMgYW4gb2JqZWN0IGZyb20gQXBvbGxvIENsaWVudCB0aGF0IGNvbnRhaW5zIGxvYWRpbmcsIGVycm9yLCBhbmQgZGF0YSBwcm9wZXJ0aWVzXG4gKiB5b3UgY2FuIHVzZSB0byByZW5kZXIgeW91ciBVSS5cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIHF1ZXJ5LCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucztcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlTWFpbEFjdGl2aXR5UXVlcnkoe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWFpbEFjdGl2aXR5UXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uUXVlcnlIb29rT3B0aW9uczxNYWlsQWN0aXZpdHlRdWVyeSwgTWFpbEFjdGl2aXR5UXVlcnlWYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZVF1ZXJ5PE1haWxBY3Rpdml0eVF1ZXJ5LCBNYWlsQWN0aXZpdHlRdWVyeVZhcmlhYmxlcz4oTWFpbEFjdGl2aXR5RG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1haWxBY3Rpdml0eUxhenlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5MYXp5UXVlcnlIb29rT3B0aW9uczxNYWlsQWN0aXZpdHlRdWVyeSwgTWFpbEFjdGl2aXR5UXVlcnlWYXJpYWJsZXM+KSB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgICAgcmV0dXJuIEFwb2xsby51c2VMYXp5UXVlcnk8TWFpbEFjdGl2aXR5UXVlcnksIE1haWxBY3Rpdml0eVF1ZXJ5VmFyaWFibGVzPihNYWlsQWN0aXZpdHlEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbmV4cG9ydCB0eXBlIE1haWxBY3Rpdml0eVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZU1haWxBY3Rpdml0eVF1ZXJ5PjtcbmV4cG9ydCB0eXBlIE1haWxBY3Rpdml0eUxhenlRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VNYWlsQWN0aXZpdHlMYXp5UXVlcnk+O1xuZXhwb3J0IHR5cGUgTWFpbEFjdGl2aXR5UXVlcnlSZXN1bHQgPSBBcG9sbG8uUXVlcnlSZXN1bHQ8TWFpbEFjdGl2aXR5UXVlcnksIE1haWxBY3Rpdml0eVF1ZXJ5VmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBNZURvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IE1lIHtcbiAgbWUge1xuICAgIC4uLlJlZ3VsYXJVc2VyXG4gIH1cbn1cbiAgICAke1JlZ3VsYXJVc2VyRnJhZ21lbnREb2N9YDtcblxuLyoqXG4gKiBfX3VzZU1lUXVlcnlfX1xuICpcbiAqIFRvIHJ1biBhIHF1ZXJ5IHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCwgY2FsbCBgdXNlTWVRdWVyeWAgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZU1lUXVlcnlgIHJldHVybnMgYW4gb2JqZWN0IGZyb20gQXBvbGxvIENsaWVudCB0aGF0IGNvbnRhaW5zIGxvYWRpbmcsIGVycm9yLCBhbmQgZGF0YSBwcm9wZXJ0aWVzXG4gKiB5b3UgY2FuIHVzZSB0byByZW5kZXIgeW91ciBVSS5cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIHF1ZXJ5LCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucztcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlTWVRdWVyeSh7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZVF1ZXJ5KGJhc2VPcHRpb25zPzogQXBvbGxvLlF1ZXJ5SG9va09wdGlvbnM8TWVRdWVyeSwgTWVRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlUXVlcnk8TWVRdWVyeSwgTWVRdWVyeVZhcmlhYmxlcz4oTWVEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgZnVuY3Rpb24gdXNlTWVMYXp5UXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uTGF6eVF1ZXJ5SG9va09wdGlvbnM8TWVRdWVyeSwgTWVRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgICByZXR1cm4gQXBvbGxvLnVzZUxhenlRdWVyeTxNZVF1ZXJ5LCBNZVF1ZXJ5VmFyaWFibGVzPihNZURvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgICAgfVxuZXhwb3J0IHR5cGUgTWVRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VNZVF1ZXJ5PjtcbmV4cG9ydCB0eXBlIE1lTGF6eVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZU1lTGF6eVF1ZXJ5PjtcbmV4cG9ydCB0eXBlIE1lUXVlcnlSZXN1bHQgPSBBcG9sbG8uUXVlcnlSZXN1bHQ8TWVRdWVyeSwgTWVRdWVyeVZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgUHJvZmlsZURvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IFByb2ZpbGUge1xuICBtZSB7XG4gICAgLi4uUHJvZmlsZVVzZXJcbiAgfVxufVxuICAgICR7UHJvZmlsZVVzZXJGcmFnbWVudERvY31gO1xuXG4vKipcbiAqIF9fdXNlUHJvZmlsZVF1ZXJ5X19cbiAqXG4gKiBUbyBydW4gYSBxdWVyeSB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQsIGNhbGwgYHVzZVByb2ZpbGVRdWVyeWAgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZVByb2ZpbGVRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VQcm9maWxlUXVlcnkoe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUHJvZmlsZVF1ZXJ5KGJhc2VPcHRpb25zPzogQXBvbGxvLlF1ZXJ5SG9va09wdGlvbnM8UHJvZmlsZVF1ZXJ5LCBQcm9maWxlUXVlcnlWYXJpYWJsZXM+KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZVF1ZXJ5PFByb2ZpbGVRdWVyeSwgUHJvZmlsZVF1ZXJ5VmFyaWFibGVzPihQcm9maWxlRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IGZ1bmN0aW9uIHVzZVByb2ZpbGVMYXp5UXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uTGF6eVF1ZXJ5SG9va09wdGlvbnM8UHJvZmlsZVF1ZXJ5LCBQcm9maWxlUXVlcnlWYXJpYWJsZXM+KSB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgICAgcmV0dXJuIEFwb2xsby51c2VMYXp5UXVlcnk8UHJvZmlsZVF1ZXJ5LCBQcm9maWxlUXVlcnlWYXJpYWJsZXM+KFByb2ZpbGVEb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbmV4cG9ydCB0eXBlIFByb2ZpbGVRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VQcm9maWxlUXVlcnk+O1xuZXhwb3J0IHR5cGUgUHJvZmlsZUxhenlRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VQcm9maWxlTGF6eVF1ZXJ5PjtcbmV4cG9ydCB0eXBlIFByb2ZpbGVRdWVyeVJlc3VsdCA9IEFwb2xsby5RdWVyeVJlc3VsdDxQcm9maWxlUXVlcnksIFByb2ZpbGVRdWVyeVZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgU3ViYnl0b2tlbkRvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IHN1YmJ5dG9rZW4oJHRva2VuOiBTdHJpbmchKSB7XG4gIHN1YmJ5dG9rZW4odG9rZW46ICR0b2tlbikge1xuICAgIC4uLlN1YlNuaXBwZXRcbiAgfVxufVxuICAgICR7U3ViU25pcHBldEZyYWdtZW50RG9jfWA7XG5cbi8qKlxuICogX191c2VTdWJieXRva2VuUXVlcnlfX1xuICpcbiAqIFRvIHJ1biBhIHF1ZXJ5IHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCwgY2FsbCBgdXNlU3ViYnl0b2tlblF1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlU3ViYnl0b2tlblF1ZXJ5YCByZXR1cm5zIGFuIG9iamVjdCBmcm9tIEFwb2xsbyBDbGllbnQgdGhhdCBjb250YWlucyBsb2FkaW5nLCBlcnJvciwgYW5kIGRhdGEgcHJvcGVydGllc1xuICogeW91IGNhbiB1c2UgdG8gcmVuZGVyIHlvdXIgVUkuXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBxdWVyeSwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnM7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVN1YmJ5dG9rZW5RdWVyeSh7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICB0b2tlbjogLy8gdmFsdWUgZm9yICd0b2tlbidcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlU3ViYnl0b2tlblF1ZXJ5KGJhc2VPcHRpb25zOiBBcG9sbG8uUXVlcnlIb29rT3B0aW9uczxTdWJieXRva2VuUXVlcnksIFN1YmJ5dG9rZW5RdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsuLi5kZWZhdWx0T3B0aW9ucywgLi4uYmFzZU9wdGlvbnN9XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlUXVlcnk8U3ViYnl0b2tlblF1ZXJ5LCBTdWJieXRva2VuUXVlcnlWYXJpYWJsZXM+KFN1YmJ5dG9rZW5Eb2N1bWVudCwgb3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgZnVuY3Rpb24gdXNlU3ViYnl0b2tlbkxhenlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5MYXp5UXVlcnlIb29rT3B0aW9uczxTdWJieXRva2VuUXVlcnksIFN1YmJ5dG9rZW5RdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgICByZXR1cm4gQXBvbGxvLnVzZUxhenlRdWVyeTxTdWJieXRva2VuUXVlcnksIFN1YmJ5dG9rZW5RdWVyeVZhcmlhYmxlcz4oU3ViYnl0b2tlbkRvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgICAgfVxuZXhwb3J0IHR5cGUgU3ViYnl0b2tlblF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVN1YmJ5dG9rZW5RdWVyeT47XG5leHBvcnQgdHlwZSBTdWJieXRva2VuTGF6eVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVN1YmJ5dG9rZW5MYXp5UXVlcnk+O1xuZXhwb3J0IHR5cGUgU3ViYnl0b2tlblF1ZXJ5UmVzdWx0ID0gQXBvbGxvLlF1ZXJ5UmVzdWx0PFN1YmJ5dG9rZW5RdWVyeSwgU3ViYnl0b2tlblF1ZXJ5VmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBHZXRBbGx0ZW1wbGF0ZXNEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBHZXRBbGx0ZW1wbGF0ZXMoJGxpbWl0OiBJbnQhLCAkY3Vyc29yOiBTdHJpbmcpIHtcbiAgZ2V0QWxsdGVtcGxhdGVzKGxpbWl0OiAkbGltaXQsIGN1cnNvcjogJGN1cnNvcikge1xuICAgIGhhc01vcmVcbiAgICB0ZW1wbGF0ZXMge1xuICAgICAgLi4uVGVtcGxhdGVzU25pcHBldFxuICAgIH1cbiAgfVxufVxuICAgICR7VGVtcGxhdGVzU25pcHBldEZyYWdtZW50RG9jfWA7XG5cbi8qKlxuICogX191c2VHZXRBbGx0ZW1wbGF0ZXNRdWVyeV9fXG4gKlxuICogVG8gcnVuIGEgcXVlcnkgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50LCBjYWxsIGB1c2VHZXRBbGx0ZW1wbGF0ZXNRdWVyeWAgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZUdldEFsbHRlbXBsYXRlc1F1ZXJ5YCByZXR1cm5zIGFuIG9iamVjdCBmcm9tIEFwb2xsbyBDbGllbnQgdGhhdCBjb250YWlucyBsb2FkaW5nLCBlcnJvciwgYW5kIGRhdGEgcHJvcGVydGllc1xuICogeW91IGNhbiB1c2UgdG8gcmVuZGVyIHlvdXIgVUkuXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBxdWVyeSwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnM7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZUdldEFsbHRlbXBsYXRlc1F1ZXJ5KHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIGxpbWl0OiAvLyB2YWx1ZSBmb3IgJ2xpbWl0J1xuICogICAgICBjdXJzb3I6IC8vIHZhbHVlIGZvciAnY3Vyc29yJ1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VHZXRBbGx0ZW1wbGF0ZXNRdWVyeShiYXNlT3B0aW9uczogQXBvbGxvLlF1ZXJ5SG9va09wdGlvbnM8R2V0QWxsdGVtcGxhdGVzUXVlcnksIEdldEFsbHRlbXBsYXRlc1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gey4uLmRlZmF1bHRPcHRpb25zLCAuLi5iYXNlT3B0aW9uc31cbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VRdWVyeTxHZXRBbGx0ZW1wbGF0ZXNRdWVyeSwgR2V0QWxsdGVtcGxhdGVzUXVlcnlWYXJpYWJsZXM+KEdldEFsbHRlbXBsYXRlc0RvY3VtZW50LCBvcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VHZXRBbGx0ZW1wbGF0ZXNMYXp5UXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uTGF6eVF1ZXJ5SG9va09wdGlvbnM8R2V0QWxsdGVtcGxhdGVzUXVlcnksIEdldEFsbHRlbXBsYXRlc1F1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7Li4uZGVmYXVsdE9wdGlvbnMsIC4uLmJhc2VPcHRpb25zfVxuICAgICAgICAgIHJldHVybiBBcG9sbG8udXNlTGF6eVF1ZXJ5PEdldEFsbHRlbXBsYXRlc1F1ZXJ5LCBHZXRBbGx0ZW1wbGF0ZXNRdWVyeVZhcmlhYmxlcz4oR2V0QWxsdGVtcGxhdGVzRG9jdW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICB9XG5leHBvcnQgdHlwZSBHZXRBbGx0ZW1wbGF0ZXNRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VHZXRBbGx0ZW1wbGF0ZXNRdWVyeT47XG5leHBvcnQgdHlwZSBHZXRBbGx0ZW1wbGF0ZXNMYXp5UXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlR2V0QWxsdGVtcGxhdGVzTGF6eVF1ZXJ5PjtcbmV4cG9ydCB0eXBlIEdldEFsbHRlbXBsYXRlc1F1ZXJ5UmVzdWx0ID0gQXBvbGxvLlF1ZXJ5UmVzdWx0PEdldEFsbHRlbXBsYXRlc1F1ZXJ5LCBHZXRBbGx0ZW1wbGF0ZXNRdWVyeVZhcmlhYmxlcz47IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybWlrLCBGb3JtIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgTGluayxcclxuICBGbGV4LFxyXG4gIEhlYWRpbmcsXHJcbiAgSW1nLFxyXG4gIHVzZVRvYXN0LFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IEZhRmFjZWJvb2ssIEZhTGlua2VkaW4sIEZhR29vZ2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IFdyYXBwZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9XcmFwcGVyXCI7XHJcbmltcG9ydCB7IElucHV0RmllbGQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9JbnB1dHMvSW5wdXRGaWVsZFwiO1xyXG5pbXBvcnQgeyB1c2VMb2dpbk11dGF0aW9uLCBNZVF1ZXJ5LCBNZURvY3VtZW50IH0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcbmltcG9ydCB7IHRvRXJyb3JNYXAgfSBmcm9tIFwiLi4vdXRpbHMvdG9FcnJvck1hcFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgd2l0aEFwb2xsbyB9IGZyb20gXCIuLi91dGlscy93aXRoQXBvbGxvXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmNvbnN0IExvZ2luOiBSZWFjdC5GQzx7fT4gPSAoe30pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbbG9naW5dID0gdXNlTG9naW5NdXRhdGlvbigpO1xyXG4gIGNvbnN0IHRvYXN0ID0gdXNlVG9hc3QoKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0bWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiIGFzIGFueSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoQ29va2llcy5nZXQoXCJlcnJcIikpIHtcclxuICAgICAgc2V0bWVzc2FnZShDb29raWVzLmdldChcImVyclwiKSk7XHJcbiAgICB9XHJcbiAgICBDb29raWVzLnJlbW92ZShcImVyclwiKTtcclxuICB9LCBbXSk7XHJcbiAgaWYgKG1lc3NhZ2UpIHtcclxuICAgIHRvYXN0KHtcclxuICAgICAgdGl0bGU6IG1lc3NhZ2UsXHJcbiAgICAgIHN0YXR1czogXCJ3YXJuaW5nXCIsXHJcbiAgICAgIGR1cmF0aW9uOiA0MDAwLFxyXG4gICAgICBpc0Nsb3NhYmxlOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlciB2YXJpYW50PVwic21hbGxcIj5cclxuICAgICAgPEJveCBtdD17OH0gcD17NH0+XHJcbiAgICAgICAgPEltZ1xyXG4gICAgICAgICAgYm94U2l6ZT1cIjEzMHB4XCJcclxuICAgICAgICAgIHc9XCIxMDAlXCJcclxuICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcclxuICAgICAgICAgIHNyYz1cIi9zdGF0aWMvUUFfQ3Vyc2l2ZV9Mb2dvLnBuZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJMb2dvXCJcclxuICAgICAgICAgIG14PVwiYXV0b1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SGVhZGluZyB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtdD17NH0+XHJcbiAgICAgICAgICBMb2dJblxyXG4gICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7IGVtYWlsOiBcIlwiLCBwYXNzd29yZDogXCJcIiB9fVxyXG4gICAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMsIHsgc2V0RXJyb3JzIH0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBsb2dpbih7XHJcbiAgICAgICAgICAgICAgdmFyaWFibGVzOiB2YWx1ZXMsXHJcbiAgICAgICAgICAgICAgdXBkYXRlOiAoY2FjaGUsIHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYWNoZS53cml0ZVF1ZXJ5PE1lUXVlcnk+KHtcclxuICAgICAgICAgICAgICAgICAgcXVlcnk6IE1lRG9jdW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBfX3R5cGVuYW1lOiBcIlF1ZXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWU6IGRhdGE/LmxvZ2luLnVzZXIsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNhY2hlLmV2aWN0KHsgZmllbGROYW1lOiBcInBvc3RzOnt9XCIgfSk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhPy5sb2dpbi5lcnJvcnMpIHtcclxuICAgICAgICAgICAgICBzZXRFcnJvcnModG9FcnJvck1hcChyZXNwb25zZS5kYXRhLmxvZ2luLmVycm9ycykpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmRhdGE/LmxvZ2luLnVzZXIpIHtcclxuICAgICAgICAgICAgICBpZiAodHlwZW9mIHJvdXRlci5xdWVyeS5uZXh0ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChyb3V0ZXIucXVlcnkubmV4dCk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHdvcmtlZFxyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7KHsgaXNTdWJtaXR0aW5nIH0pID0+IChcclxuICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgPElucHV0RmllbGQgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJlbWFpbFwiIGxhYmVsPVwiRW1haWxcIiAvPlxyXG4gICAgICAgICAgICAgIDxCb3ggbXQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgPElucHV0RmllbGRcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8RmxleCBtdD17Mn0+XHJcbiAgICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbms+U2lnblVwPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL2ZvcmdvdC1wYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBtbD1cImF1dG9cIj5Gb3Jnb3QgcGFzc3dvcmQ/PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgbXQ9ezR9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNTdWJtaXR0aW5nfVxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZD1cImJsdWVcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgTG9nSW4gd2l0aCBlbWFpbFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgIDxCb3ggbXQ9ezZ9IGRpc3BsYXk9XCJncmlkXCI+XHJcbiAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuRkFDRUJPT0tfVVJMfVxyXG4gICAgICAgICAgICBhcz17TGlua31cclxuICAgICAgICAgICAgbXQ9ezZ9XHJcbiAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwiZmFjZWJvb2tcIlxyXG4gICAgICAgICAgICByaWdodEljb249ezxGYUZhY2Vib29rIC8+fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMb2dJbiB3aXRoIEZhY2Vib29rXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGhyZWY9e3Byb2Nlc3MuZW52LkxJTktFRElOX1VSTH1cclxuICAgICAgICAgICAgYXM9e0xpbmt9XHJcbiAgICAgICAgICAgIG10PXs0fVxyXG4gICAgICAgICAgICBjb2xvclNjaGVtZT1cImxpbmtlZGluXCJcclxuICAgICAgICAgICAgcmlnaHRJY29uPXs8RmFMaW5rZWRpbiAvPn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTG9nSW4gd2l0aCBMaW5rZWRJblxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5HT09HTEVfVVJMfVxyXG4gICAgICAgICAgICBhcz17TGlua31cclxuICAgICAgICAgICAgbXQ9ezR9XHJcbiAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwicmVkXCJcclxuICAgICAgICAgICAgcmlnaHRJY29uPXs8RmFHb29nbGUgLz59XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIExvZ0luIHdpdGggR29vZ2xlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L1dyYXBwZXI+ICBcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyh7IHNzcjogZmFsc2UgfSkoTG9naW4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuXHJcbi8vIE9uIHRoZSBjbGllbnQsIHdlIHN0b3JlIHRoZSBBcG9sbG8gQ2xpZW50IGluIHRoZSBmb2xsb3dpbmcgdmFyaWFibGUuXHJcbi8vIFRoaXMgcHJldmVudHMgdGhlIGNsaWVudCBmcm9tIHJlaW5pdGlhbGl6aW5nIGJldHdlZW4gcGFnZSB0cmFuc2l0aW9ucy5cclxubGV0IGdsb2JhbEFwb2xsb0NsaWVudCA9IG51bGw7XHJcblxyXG4vKipcclxuICogSW5zdGFsbHMgdGhlIEFwb2xsbyBDbGllbnQgb24gTmV4dFBhZ2VDb250ZXh0XHJcbiAqIG9yIE5leHRBcHBDb250ZXh0LiBVc2VmdWwgaWYgeW91IHdhbnQgdG8gdXNlIGFwb2xsb0NsaWVudFxyXG4gKiBpbnNpZGUgZ2V0U3RhdGljUHJvcHMsIGdldFN0YXRpY1BhdGhzIG9yIGdldFNlcnZlclNpZGVQcm9wc1xyXG4gKiBAcGFyYW0ge05leHRQYWdlQ29udGV4dCB8IE5leHRBcHBDb250ZXh0fSBjdHhcclxuICovXHJcbmV4cG9ydCBjb25zdCBpbml0T25Db250ZXh0ID0gKGFjLCBjdHgpID0+IHtcclxuICBjb25zdCBpbkFwcENvbnRleHQgPSBCb29sZWFuKGN0eC5jdHgpO1xyXG5cclxuICAvLyBXZSBjb25zaWRlciBpbnN0YWxsaW5nIGB3aXRoQXBvbGxvKHsgc3NyOiB0cnVlIH0pYCBvbiBnbG9iYWwgQXBwIGxldmVsXHJcbiAgLy8gYXMgYW50aXBhdHRlcm4gc2luY2UgaXQgZGlzYWJsZXMgcHJvamVjdCB3aWRlIEF1dG9tYXRpYyBTdGF0aWMgT3B0aW1pemF0aW9uLlxyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcbiAgICBpZiAoaW5BcHBDb250ZXh0KSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBcIldhcm5pbmc6IFlvdSBoYXZlIG9wdGVkLW91dCBvZiBBdXRvbWF0aWMgU3RhdGljIE9wdGltaXphdGlvbiBkdWUgdG8gYHdpdGhBcG9sbG9gIGluIGBwYWdlcy9fYXBwYC5cXG5cIiArXHJcbiAgICAgICAgICBcIlJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9vcHQtb3V0LWF1dG8tc3RhdGljLW9wdGltaXphdGlvblxcblwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBJbml0aWFsaXplIEFwb2xsb0NsaWVudCBpZiBub3QgYWxyZWFkeSBkb25lXHJcbiAgY29uc3QgYXBvbGxvQ2xpZW50ID1cclxuICAgIGN0eC5hcG9sbG9DbGllbnQgfHxcclxuICAgIGluaXRBcG9sbG9DbGllbnQoYWMsIGN0eC5hcG9sbG9TdGF0ZSB8fCB7fSwgaW5BcHBDb250ZXh0ID8gY3R4LmN0eCA6IGN0eCk7XHJcblxyXG4gIC8vIFdlIHNlbmQgdGhlIEFwb2xsbyBDbGllbnQgYXMgYSBwcm9wIHRvIHRoZSBjb21wb25lbnQgdG8gYXZvaWQgY2FsbGluZyBpbml0QXBvbGxvKCkgdHdpY2UgaW4gdGhlIHNlcnZlci5cclxuICAvLyBPdGhlcndpc2UsIHRoZSBjb21wb25lbnQgd291bGQgaGF2ZSB0byBjYWxsIGluaXRBcG9sbG8oKSBhZ2FpbiBidXQgdGhpc1xyXG4gIC8vIHRpbWUgd2l0aG91dCB0aGUgY29udGV4dC4gT25jZSB0aGF0IGhhcHBlbnMsIHRoZSBmb2xsb3dpbmcgY29kZSB3aWxsIG1ha2Ugc3VyZSB3ZSBzZW5kXHJcbiAgLy8gdGhlIHByb3AgYXMgYG51bGxgIHRvIHRoZSBicm93c2VyLlxyXG4gIGFwb2xsb0NsaWVudC50b0pTT04gPSAoKSA9PiBudWxsO1xyXG5cclxuICAvLyBBZGQgYXBvbGxvQ2xpZW50IHRvIE5leHRQYWdlQ29udGV4dCAmIE5leHRBcHBDb250ZXh0LlxyXG4gIC8vIFRoaXMgYWxsb3dzIHVzIHRvIGNvbnN1bWUgdGhlIGFwb2xsb0NsaWVudCBpbnNpZGUgb3VyXHJcbiAgLy8gY3VzdG9tIGBnZXRJbml0aWFsUHJvcHMoeyBhcG9sbG9DbGllbnQgfSlgLlxyXG4gIGN0eC5hcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQ7XHJcbiAgaWYgKGluQXBwQ29udGV4dCkge1xyXG4gICAgY3R4LmN0eC5hcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY3R4O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFsd2F5cyBjcmVhdGVzIGEgbmV3IGFwb2xsbyBjbGllbnQgb24gdGhlIHNlcnZlclxyXG4gKiBDcmVhdGVzIG9yIHJldXNlcyBhcG9sbG8gY2xpZW50IGluIHRoZSBicm93c2VyLlxyXG4gKiBAcGFyYW0gIHtOb3JtYWxpemVkQ2FjaGVPYmplY3R9IGluaXRpYWxTdGF0ZVxyXG4gKiBAcGFyYW0gIHtOZXh0UGFnZUNvbnRleHR9IGN0eFxyXG4gKi9cclxuY29uc3QgaW5pdEFwb2xsb0NsaWVudCA9IChhcG9sbG9DbGllbnQsIGluaXRpYWxTdGF0ZSwgY3R4KSA9PiB7XHJcbiAgLy8gTWFrZSBzdXJlIHRvIGNyZWF0ZSBhIG5ldyBjbGllbnQgZm9yIGV2ZXJ5IHNlcnZlci1zaWRlIHJlcXVlc3Qgc28gdGhhdCBkYXRhXHJcbiAgLy8gaXNuJ3Qgc2hhcmVkIGJldHdlZW4gY29ubmVjdGlvbnMgKHdoaWNoIHdvdWxkIGJlIGJhZClcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUFwb2xsb0NsaWVudChhcG9sbG9DbGllbnQoY3R4KSwgaW5pdGlhbFN0YXRlLCBjdHgpO1xyXG4gIH1cclxuXHJcbiAgLy8gUmV1c2UgY2xpZW50IG9uIHRoZSBjbGllbnQtc2lkZVxyXG4gIGlmICghZ2xvYmFsQXBvbGxvQ2xpZW50KSB7XHJcbiAgICBnbG9iYWxBcG9sbG9DbGllbnQgPSBjcmVhdGVBcG9sbG9DbGllbnQoXHJcbiAgICAgIGFwb2xsb0NsaWVudChjdHgpLFxyXG4gICAgICBpbml0aWFsU3RhdGUsXHJcbiAgICAgIGN0eFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBnbG9iYWxBcG9sbG9DbGllbnQ7XHJcbn07XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHdpdGhBcG9sbG8gSE9DXHJcbiAqIHRoYXQgcHJvdmlkZXMgdGhlIGFwb2xsb0NvbnRleHRcclxuICogdG8gYSBuZXh0LmpzIFBhZ2Ugb3IgQXBwVHJlZS5cclxuICogQHBhcmFtICB7T2JqZWN0fSB3aXRoQXBvbGxvT3B0aW9uc1xyXG4gKiBAcGFyYW0gIHtCb29sZWFufSBbd2l0aEFwb2xsb09wdGlvbnMuc3NyPWZhbHNlXVxyXG4gKiBAcmV0dXJucyB7KFBhZ2VDb21wb25lbnQ6IFJlYWN0Tm9kZSkgPT4gUmVhY3ROb2RlfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVdpdGhBcG9sbG8gPSAoYWMpID0+IHtcclxuICByZXR1cm4gKHsgc3NyID0gZmFsc2UgfSA9IHt9KSA9PiAoUGFnZUNvbXBvbmVudCkgPT4ge1xyXG4gICAgY29uc3QgV2l0aEFwb2xsbyA9ICh7IGFwb2xsb0NsaWVudCwgYXBvbGxvU3RhdGUsIC4uLnBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgICAgIGxldCBjbGllbnQ7XHJcbiAgICAgIGlmIChhcG9sbG9DbGllbnQpIHtcclxuICAgICAgICAvLyBIYXBwZW5zIG9uOiBnZXREYXRhRnJvbVRyZWUgJiBuZXh0LmpzIHNzclxyXG4gICAgICAgIGNsaWVudCA9IGFwb2xsb0NsaWVudDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBIYXBwZW5zIG9uOiBuZXh0LmpzIGNzclxyXG4gICAgICAgIGNsaWVudCA9IGluaXRBcG9sbG9DbGllbnQoYWMsIGFwb2xsb1N0YXRlLCB1bmRlZmluZWQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XHJcbiAgICAgICAgICA8UGFnZUNvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFNldCB0aGUgY29ycmVjdCBkaXNwbGF5TmFtZSBpbiBkZXZlbG9wbWVudFxyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICBjb25zdCBkaXNwbGF5TmFtZSA9XHJcbiAgICAgICAgUGFnZUNvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBQYWdlQ29tcG9uZW50Lm5hbWUgfHwgXCJDb21wb25lbnRcIjtcclxuICAgICAgV2l0aEFwb2xsby5kaXNwbGF5TmFtZSA9IGB3aXRoQXBvbGxvKCR7ZGlzcGxheU5hbWV9KWA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNzciB8fCBQYWdlQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xyXG4gICAgICBXaXRoQXBvbGxvLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAgICAgICBjb25zdCBpbkFwcENvbnRleHQgPSBCb29sZWFuKGN0eC5jdHgpO1xyXG4gICAgICAgIGNvbnN0IHsgYXBvbGxvQ2xpZW50IH0gPSBpbml0T25Db250ZXh0KGFjLCBjdHgpO1xyXG5cclxuICAgICAgICAvLyBSdW4gd3JhcHBlZCBnZXRJbml0aWFsUHJvcHMgbWV0aG9kc1xyXG4gICAgICAgIGxldCBwYWdlUHJvcHMgPSB7fTtcclxuICAgICAgICBpZiAoUGFnZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuICAgICAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IFBhZ2VDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbkFwcENvbnRleHQpIHtcclxuICAgICAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE9ubHkgb24gdGhlIHNlcnZlcjpcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgY29uc3QgeyBBcHBUcmVlIH0gPSBjdHg7XHJcbiAgICAgICAgICAvLyBXaGVuIHJlZGlyZWN0aW5nLCB0aGUgcmVzcG9uc2UgaXMgZmluaXNoZWQuXHJcbiAgICAgICAgICAvLyBObyBwb2ludCBpbiBjb250aW51aW5nIHRvIHJlbmRlclxyXG4gICAgICAgICAgaWYgKGN0eC5yZXMgJiYgY3R4LnJlcy5maW5pc2hlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFnZVByb3BzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIE9ubHkgaWYgZGF0YUZyb21UcmVlIGlzIGVuYWJsZWRcclxuICAgICAgICAgIGlmIChzc3IgJiYgQXBwVHJlZSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIC8vIEltcG9ydCBgQGFwb2xsby9yZWFjdC1zc3JgIGR5bmFtaWNhbGx5LlxyXG4gICAgICAgICAgICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gaGF2ZSB0aGlzIGluIG91ciBjbGllbnQgYnVuZGxlLlxyXG4gICAgICAgICAgICAgIGNvbnN0IHsgZ2V0RGF0YUZyb21UcmVlIH0gPSBhd2FpdCBpbXBvcnQoXHJcbiAgICAgICAgICAgICAgICBcIkBhcG9sbG8vY2xpZW50L3JlYWN0L3NzclwiXHJcbiAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgLy8gU2luY2UgQXBwQ29tcG9uZW50cyBhbmQgUGFnZUNvbXBvbmVudHMgaGF2ZSBkaWZmZXJlbnQgY29udGV4dCB0eXBlc1xyXG4gICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gbW9kaWZ5IHRoZWlyIHByb3BzIGEgbGl0dGxlLlxyXG4gICAgICAgICAgICAgIGxldCBwcm9wcztcclxuICAgICAgICAgICAgICBpZiAoaW5BcHBDb250ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcyA9IHsgLi4ucGFnZVByb3BzLCBhcG9sbG9DbGllbnQgfTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMgPSB7IHBhZ2VQcm9wczogeyAuLi5wYWdlUHJvcHMsIGFwb2xsb0NsaWVudCB9IH07XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAvLyBUYWtlIHRoZSBOZXh0LmpzIEFwcFRyZWUsIGRldGVybWluZSB3aGljaCBxdWVyaWVzIGFyZSBuZWVkZWQgdG8gcmVuZGVyLFxyXG4gICAgICAgICAgICAgIC8vIGFuZCBmZXRjaCB0aGVtLiBUaGlzIG1ldGhvZCBjYW4gYmUgcHJldHR5IHNsb3cgc2luY2UgaXQgcmVuZGVyc1xyXG4gICAgICAgICAgICAgIC8vIHlvdXIgZW50aXJlIEFwcFRyZWUgb25jZSBmb3IgZXZlcnkgcXVlcnkuIENoZWNrIG91dCBhcG9sbG8gZnJhZ21lbnRzXHJcbiAgICAgICAgICAgICAgLy8gaWYgeW91IHdhbnQgdG8gcmVkdWNlIHRoZSBudW1iZXIgb2YgcmVyZW5kZXJzLlxyXG4gICAgICAgICAgICAgIC8vIGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvZGF0YS9mcmFnbWVudHMvXHJcbiAgICAgICAgICAgICAgYXdhaXQgZ2V0RGF0YUZyb21UcmVlKDxBcHBUcmVlIHsuLi5wcm9wc30gLz4pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIC8vIFByZXZlbnQgQXBvbGxvIENsaWVudCBHcmFwaFFMIGVycm9ycyBmcm9tIGNyYXNoaW5nIFNTUi5cclxuICAgICAgICAgICAgICAvLyBIYW5kbGUgdGhlbSBpbiBjb21wb25lbnRzIHZpYSB0aGUgZGF0YS5lcnJvciBwcm9wOlxyXG4gICAgICAgICAgICAgIC8vIGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWFwb2xsby5odG1sI2dyYXBocWwtcXVlcnktZGF0YS1lcnJvclxyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGlsZSBydW5uaW5nIGBnZXREYXRhRnJvbVRyZWVgXCIsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gZ2V0RGF0YUZyb21UcmVlIGRvZXMgbm90IGNhbGwgY29tcG9uZW50V2lsbFVubW91bnRcclxuICAgICAgICAgICAgLy8gaGVhZCBzaWRlIGVmZmVjdCB0aGVyZWZvcmUgbmVlZCB0byBiZSBjbGVhcmVkIG1hbnVhbGx5XHJcbiAgICAgICAgICAgIEhlYWQucmV3aW5kKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4ucGFnZVByb3BzLFxyXG4gICAgICAgICAgLy8gRXh0cmFjdCBxdWVyeSBkYXRhIGZyb20gdGhlIEFwb2xsbyBzdG9yZVxyXG4gICAgICAgICAgYXBvbGxvU3RhdGU6IGFwb2xsb0NsaWVudC5jYWNoZS5leHRyYWN0KCksXHJcbiAgICAgICAgICAvLyBQcm92aWRlIHRoZSBjbGllbnQgZm9yIHNzci4gQXMgc29vbiBhcyB0aGlzIHBheWxvYWRcclxuICAgICAgICAgIC8vIGdldHMgSlNPTi5zdHJpbmdpZmllZCBpdCB3aWxsIHJlbW92ZSBpdHNlbGYuXHJcbiAgICAgICAgICBhcG9sbG9DbGllbnQ6IGN0eC5hcG9sbG9DbGllbnQsXHJcbiAgICAgICAgfTtcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gV2l0aEFwb2xsbztcclxuICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQXBvbGxvQ2xpZW50KGFwb2xsb0NsaWVudCwgaW5pdGlhbFN0YXRlLCBjdHgpIHtcclxuICAvLyBUaGUgYGN0eGAgKE5leHRQYWdlQ29udGV4dCkgd2lsbCBvbmx5IGJlIHByZXNlbnQgb24gdGhlIHNlcnZlci5cclxuICAvLyB1c2UgaXQgdG8gZXh0cmFjdCBhdXRoIGhlYWRlcnMgKGN0eC5yZXEpIG9yIHNpbWlsYXIuXHJcbiAgYXBvbGxvQ2xpZW50LnNzck1vZGUgPSBCb29sZWFuKGN0eCk7XHJcbiAgYXBvbGxvQ2xpZW50LmNhY2hlLnJlc3RvcmUoaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgcmV0dXJuIGFwb2xsb0NsaWVudDtcclxufVxyXG4iLCJpbXBvcnQgeyBGaWVsZEVycm9yIH0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdG9FcnJvck1hcCA9IChlcnJvcnM6IEZpZWxkRXJyb3JbXSkgPT4ge1xyXG4gIGNvbnN0IGVycm9yTWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XHJcbiAgZXJyb3JzLmZvckVhY2goKHsgZmllbGQsIG1lc3NhZ2UgfSkgPT4ge1xyXG4gICAgZXJyb3JNYXBbZmllbGRdID0gbWVzc2FnZTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGVycm9yTWFwO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBQYWdpbmF0ZWRRdW90ZXMsIFBhZ2luYXRlZFN1YnMgfSBmcm9tICcuLy4uL2dlbmVyYXRlZC9ncmFwaHFsJztcclxuaW1wb3J0IHsgY3JlYXRlV2l0aEFwb2xsbyB9IGZyb20gJy4vY3JlYXRlV2l0aEFwb2xsbyc7XHJcbmltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnbmV4dCc7XHJcblxyXG5jb25zdCBjcmVhdGVDbGllbnQgPSAoY3R4OiBOZXh0UGFnZUNvbnRleHQpID0+XHJcbiAgbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgICB1cmk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgYXMgc3RyaW5nLFxyXG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgY29va2llOlxyXG4gICAgICAgICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICAgPyBjdHg/LnJlcT8uaGVhZGVycy5jb29raWVcclxuICAgICAgICAgIDogdW5kZWZpbmVkKSB8fCAnJyxcclxuICAgIH0sXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe1xyXG4gICAgICB0eXBlUG9saWNpZXM6IHtcclxuICAgICAgICBRdWVyeToge1xyXG4gICAgICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgICAgIHN1YnM6IHtcclxuICAgICAgICAgICAgICBrZXlBcmdzOiBbXSxcclxuICAgICAgICAgICAgICBtZXJnZShcclxuICAgICAgICAgICAgICAgIGV4aXN0aW5nOiBQYWdpbmF0ZWRTdWJzIHwgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgaW5jb21pbmc6IFBhZ2luYXRlZFN1YnMsXHJcbiAgICAgICAgICAgICAgKTogUGFnaW5hdGVkU3VicyB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAuLi5pbmNvbWluZyxcclxuICAgICAgICAgICAgICAgICAgc3ViczogWy4uLihleGlzdGluZz8uc3VicyB8fCBbXSksIC4uLmluY29taW5nLnN1YnNdLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBxdW90ZXM6IHtcclxuICAgICAgICAgICAgICBrZXlBcmdzOiBbXSxcclxuICAgICAgICAgICAgICBtZXJnZShcclxuICAgICAgICAgICAgICAgIGV4aXN0aW5nOiBQYWdpbmF0ZWRRdW90ZXMgfCB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICBpbmNvbWluZzogUGFnaW5hdGVkUXVvdGVzLFxyXG4gICAgICAgICAgICAgICk6IFBhZ2luYXRlZFF1b3RlcyB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAuLi5pbmNvbWluZyxcclxuICAgICAgICAgICAgICAgICAgcXVvdGVzOiBbLi4uKGV4aXN0aW5nPy5xdW90ZXMgfHwgW10pLCAuLi5pbmNvbWluZy5xdW90ZXNdLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgfSk7XHJcblxyXG5leHBvcnQgY29uc3Qgd2l0aEFwb2xsbyA9IGNyZWF0ZVdpdGhBcG9sbG8oY3JlYXRlQ2xpZW50KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnQvcmVhY3Qvc3NyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9ybWlrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==