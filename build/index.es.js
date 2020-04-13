function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):
60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var D={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D;}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState");};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};
function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D;}var I=H.prototype=new G;I.constructor=H;objectAssign(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h;}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return {$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current}}
function N(a,b){return {$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return "$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return {result:a,keyPrefix:b,func:c,context:e,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a);}
function T(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0;}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e);}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V(a,b,c){return null==a?0:T(a,"",b,c)}function U(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W(a,b){a.func.call(a.context,b,a.count++);}
function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a));}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b);}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a}
var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:objectAssign};var Children={map:function(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b);},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];X(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(C(143));return a}};
var Component=F;var Fragment=r;var Profiler=u;var PureComponent=H;var StrictMode=t;var Suspense=y;var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;
var cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=objectAssign({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h]);}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f;}return {$$typeof:p,type:a.type,
key:d,ref:g,props:e,_owner:k}};var createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a};var createElement=M;var createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};var createRef=function(){return {current:null}};var forwardRef=function(a){return {$$typeof:x,render:a}};var isValidElement=O;
var lazy=function(a){return {$$typeof:A,_ctor:a,_status:-1,_result:null}};var memo=function(a,b){return {$$typeof:z,type:a,compare:void 0===b?null:b}};var useCallback=function(a,b){return Z().useCallback(a,b)};var useContext=function(a,b){return Z().useContext(a,b)};var useDebugValue=function(){};var useEffect=function(a,b){return Z().useEffect(a,b)};var useImperativeHandle=function(a,b,c){return Z().useImperativeHandle(a,b,c)};
var useLayoutEffect=function(a,b){return Z().useLayoutEffect(a,b)};var useMemo=function(a,b){return Z().useMemo(a,b)};var useReducer=function(a,b,c){return Z().useReducer(a,b,c)};var useRef=function(a){return Z().useRef(a)};var useState=function(a){return Z().useState(a)};var version="16.13.1";

var react_production_min = {
	Children: Children,
	Component: Component,
	Fragment: Fragment,
	Profiler: Profiler,
	PureComponent: PureComponent,
	StrictMode: StrictMode,
	Suspense: Suspense,
	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	cloneElement: cloneElement,
	createContext: createContext,
	createElement: createElement,
	createFactory: createFactory,
	createRef: createRef,
	forwardRef: forwardRef,
	isValidElement: isValidElement,
	lazy: lazy,
	memo: memo,
	useCallback: useCallback,
	useContext: useContext,
	useDebugValue: useDebugValue,
	useEffect: useEffect,
	useImperativeHandle: useImperativeHandle,
	useLayoutEffect: useLayoutEffect,
	useMemo: useMemo,
	useReducer: useReducer,
	useRef: useRef,
	useState: useState,
	version: version
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var react_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

var _assign = objectAssign;
var checkPropTypes = checkPropTypes_1;

var ReactVersion = '16.13.1';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var Resolved = 1;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {

      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var name = getComponentName(type);
    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      setCurrentlyValidatingElement(element);
      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
      setCurrentlyValidatingElement(null);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    setCurrentlyValidatingElement(fragment);
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        break;
      }
    }

    if (fragment.ref !== null) {
      error('Invalid attribute `ref` supplied to `React.Fragment`.');
    }

    setCurrentlyValidatingElement(null);
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}
});
var react_development_1 = react_development.Children;
var react_development_2 = react_development.Component;
var react_development_3 = react_development.Fragment;
var react_development_4 = react_development.Profiler;
var react_development_5 = react_development.PureComponent;
var react_development_6 = react_development.StrictMode;
var react_development_7 = react_development.Suspense;
var react_development_8 = react_development.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var react_development_9 = react_development.cloneElement;
var react_development_10 = react_development.createContext;
var react_development_11 = react_development.createElement;
var react_development_12 = react_development.createFactory;
var react_development_13 = react_development.createRef;
var react_development_14 = react_development.forwardRef;
var react_development_15 = react_development.isValidElement;
var react_development_16 = react_development.lazy;
var react_development_17 = react_development.memo;
var react_development_18 = react_development.useCallback;
var react_development_19 = react_development.useContext;
var react_development_20 = react_development.useDebugValue;
var react_development_21 = react_development.useEffect;
var react_development_22 = react_development.useImperativeHandle;
var react_development_23 = react_development.useLayoutEffect;
var react_development_24 = react_development.useMemo;
var react_development_25 = react_development.useReducer;
var react_development_26 = react_development.useRef;
var react_development_27 = react_development.useState;
var react_development_28 = react_development.version;

var react = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = react_production_min;
} else {
  module.exports = react_development;
}
});

var React = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': react,
	__moduleExports: react
});

var MyComponent = function () { return (undefined("div", { role: "heading" }, "My First Component")); };

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var colors = require("../colors.scss");
var imgRatio = 1;
var defaultSize = {
    width: "500px",
    height: "500px",
};
function Signature(_a) {
    var width = _a.width, height = _a.height, text = _a.text, _b = _a.color, color = _b === void 0 ? colors.primaryDark : _b, restProps = __rest(_a, ["width", "height", "text", "color"]);
    var svgWidth = defaultSize.width;
    var svgHeight = defaultSize.height;
    if (width) {
        svgWidth = width + "px";
        svgHeight = width / imgRatio + "px";
    }
    if (height) {
        svgHeight = height + "px";
        svgWidth = height * imgRatio + "px";
    }
    return text ? (undefined("svg", __assign({ preserveAspectRatio: "xMidYMid meet", width: svgWidth, height: svgHeight, id: "prefix__Calque_2", x: 0, y: 0, viewBox: "9 -8 117 117", xmlSpace: "preserve" }, restProps),
        undefined("text", { opacity: "0" },
            "`$",
            text,
            "`"),
        undefined("style", null, ".prefix__st0{fill:" + color + "}"),
        undefined("g", { "aria-hidden": "true", id: "prefix__Symbols" },
            undefined("g", { "aria-hidden": "true", id: "prefix__Footer", transform: "translate(-452 -33)" },
                undefined("g", { "aria-hidden": "true", transform: "translate(452 33)", id: "prefix__There-is-a-better-way_footer" },
                    undefined("path", { "aria-hidden": "true", id: "prefix__Fill-1", className: "prefix__st0", d: "M53.2 51.1s9-2.2 10.9-7c1.6-4.2-3.9-7.1-13.3-7.2-25.8-.4-29.6 14.7-18.7 14.9 4 0 6.7-.8 8.6-2.3l-1-1.4c-1.2 1-3.8 1.7-5.2 1.7-6.6-.1 1-10.7 11.5-10.6 2.4 0 1.9 2.9-1.1 6.6-11 14-14.9 19.2-3.6 19.4 6.3.1 15.1-3.5 17.1-8.8 1.9-4.9-4.4-5.3-5.2-5.3m5.2-6.3c-1.2 3.2-6.8 5.6-10.2 5.8l1.2-1.5c2.9-3.7 4.8-8.2 3-10 4.8.1 7.3 2.4 6 5.7M41.8 63.1c-3.7 0-.4-4 5.3-11.2 2.2.2 6.5 1 5.1 4.6-1.3 3.5-7.3 6.7-10.4 6.6" }),
                    undefined("path", { "aria-hidden": "true", id: "prefix__Fill-3", className: "prefix__st0", d: "M85.3 39.5s3 1.7 3 2.9S74.7 57 74.7 61.6c4.3-.9 11.7-5.7 11.7-5.7l1.1 1s-8 7.2-12.5 7.2c-2.5 0-4-3.8-4-5.1.1-1.5 13.8-18.5 14.3-19.5" }),
                    undefined("path", { "aria-hidden": "true", id: "prefix__Fill-5", className: "prefix__st0", d: "M97.8 39.6s3 1.7 3 2.9-13.6 14.6-13.6 19.2c4.3-.9 11.7-5.8 11.7-5.8l1.1 1s-8 7.2-12.5 7.2c-2.5 0-4-3.8-4-5.1 0-1.3 13.7-18.3 14.3-19.4" }),
                    undefined("path", { "aria-hidden": "true", id: "prefix__Fill-7", className: "prefix__st0", d: "M68.7 46.6s2.3 3 4.6 3c1.6 0 11.9-2.5 33.4-3.1-.2-.8-1.5-1.8-3.1-1.8s-16.2-.3-34.9 1.9" }),
                    undefined("path", { "aria-hidden": "true", id: "prefix__Fill-9", className: "prefix__st0", d: "M73.7 55.5c-2 4.1-7.7 7.4-11.5 7.4-1 0-1.7-.2-2.1-.6-.4-.4-.3-1 .1-1.8.2-.3.4-.7.6-1 6.1-2 10.7-4.7 10.8-6.3 0-1.1-2-3.4-3.5-3.4-2.3 0-5 1.3-7.4 3.5-1.4 1.3-2.5 2.8-3.2 4.2l-.8 3.2c0 1.1.4 1.9 1.2 2.6 1 .9 2.7 1.4 4.9 1.4h.1c8.9.1 13.1-5.3 13.1-6.9-.1-1.3-2.3-2.3-2.3-2.3m-5.1-3.1c.3 0 .3.1.3.1.2.6-2.9 2.9-6.3 4.7 2-2.5 4.6-4.8 6-4.8" }),
                    undefined("path", { "aria-hidden": "true", id: "prefix__Fill-11", className: "prefix__st0", d: "M111.3 55.1c-2 4.1-7.7 7.4-11.5 7.4-1 0-1.7-.2-2.1-.6-.4-.4-.3-1 .1-1.8.2-.3.4-.7.6-1 6.1-2 10.7-4.7 10.8-6.3 0-1.1-2-3.4-3.5-3.4-2.3 0-5 1.3-7.4 3.5-1.4 1.3-2.5 2.8-3.2 4.2l-.8 3.1c0 1.1.4 1.9 1.2 2.6 1 .9 2.7 1.4 4.9 1.4h.1c8.9.1 13.1-5.3 13.1-6.9 0-1.2-2.3-2.2-2.3-2.2m-5.1-3.1c.3 0 .3.1.3.1.2.6-2.9 2.9-6.3 4.7 2.1-2.5 4.7-4.8 6-4.8" }),
                    undefined("path", { "aria-hidden": "true", id: "prefix__Fill-13", className: "prefix__st0", d: "M109.5 13.4c-2 4.1-7.7 7.5-11.5 7.5-1 0-1.7-.2-2.1-.6s-.3-1 .1-1.8c.2-.3.4-.7.6-1 6.1-2.1 10.7-4.8 10.8-6.4 0-1.1-2-3.3-3.5-3.3-2.3 0-5 1.3-7.4 3.6l-.1.1c.3-1.3.1-3-2.1-3-3.2 0-6.7 4.4-10 8.2 1.5-3 4-5.9 4-6.8 0-1.6-2.2-2-3.3-2.3-.2.9-2.6 5-4.6 8.2-2.6 3.2-7.1 5.5-10.2 5.5-1 0-1.7-.2-2.1-.6s-.3-1 .1-1.8c.2-.3.4-.7.6-1 6.1-2.1 10.7-4.8 10.8-6.4 0-1.1-2-3.3-3.5-3.3-2.3 0-5 1.3-7.4 3.6-1.4 1.3-2.5 2.8-3.2 4.2-2.9 2.1-6.1 4.1-7.6 4.1-2.8 0 6-9.1 5.9-9.8s-2.2-1.9-4-2.7c-3.7 2.2-8.6 5-12.5 9 1.8-3.1 12.2-16.1 12.2-19 0-.9-1.1-1.3-2.4-1.9 2.8 0 5.3 0 7.4.1 1 .1.7-.3-.2-1.1C62-7.6 52.6-7.8 49.1-7.8c-10.8-.1-24.8.8-33.2 3.1 2.1 2.6 4.2 4.6 6.5 4C27.1-2 34.3-3 41.7-3.8 36.2.9 26 15.6 26.8 19.7c.4 2.2 3.2 3.5 4.9 4.3 0-4.8 12-23.7 14.6-26.3.4-.4-.2-1.1-1.3-1.8 3.6-.3 7.2-.5 10.5-.6C53-.8 41 19.2 41 19.2c.4 1 2.4 2.7 3.5 2.7 1.3 0 9.2-9.1 12.8-10.5-2.4 3.1-4.8 6-4.5 7.7s3.2 3.3 4.9 3.3c1.5 0 4.3-1.6 7-3.5 0 1.1.4 1.9 1.2 2.6 1 .9 2.7 1.3 4.9 1.3h.1c3.4 0 6.2-.8 8.2-1.9.9.6 1.9.9 2.5.9 1.1 0 6.3-7.8 9.8-9.7l4 .4c-.9 1-1.5 2-2 3 0 0-.8 1.5-.8 3.2 0 1.1.4 1.9 1.2 2.6 1 .9 2.7 1.3 4.9 1.3h.1c8.9 0 13.1-5.5 13.1-7-.1-1.3-2.4-2.2-2.4-2.2m-5.1-3.1c.3 0 .3.1.3.1.2.6-2.9 2.9-6.3 4.7 2.1-2.4 4.7-4.8 6-4.8m-27.7.3c.3 0 .3.1.3.1.2.6-2.9 2.9-6.3 4.7 2-2.5 4.6-4.8 6-4.8" }),
                    undefined("path", { "aria-hidden": "true", id: "prefix__Fill-15", className: "prefix__st0", d: "M107.2 61.5c.9 1.2 2.8 2 3.7 2 1.1 0 6.3-7.7 9.8-9.6l4.5.5c.8-.8 1.6-4.1-1.5-4.2-3.2 0-6.7 4.4-10 8.1 1.5-2.9 4-5.9 4-6.8 0-1.6-2.2-2-3.3-2.3-.5 1.6-7.2 12.3-7.2 12.3" }),
                    undefined("path", { "aria-hidden": "true", id: "prefix__Fill-17", className: "prefix__st0", d: "M79.9 37.4c3.3-1.2 2-5.9.4-8.3-.9-1.3-3.6-1.7-3.6-1.7-.8 2.7-8.6 11.2-11 11.2s3.6-5.6 3.2-7.9c-.1-.8-1.4-1.6-2.5-2.1 1.9-.6 4.9-1.8 5-3.4.4-3.4-5.1-2.9-5.1-2.9s.5 2.9-.9 5.9c-.2-.1-.6-.2-.6-.2 0 2.2-4.4 7.6-3.9 10.4.2 1.3 3 2.8 4.6 2.8.9 0 2.1-.6 3.5-1.5.7.7 2.5 2.1 5.8 2.1 3.9 0 11.8-4.6 14.6-2l.2-.5c-.6-2.5-3.4-3.9-9.7-1.9m-10.4 1.8c3.4-2.3 7.4-6.2 8.2-7.7 1.1 2.5 2.2 8.4-8.2 7.7" }),
                    undefined("path", { "aria-hidden": "true", id: "prefix__Fill-19", className: "prefix__st0", d: "M26.7 82.6c-9.9-3-1.5-16.4 9.7-16.4 9.3 0-4.4 17.6-4.4 23.2 0 .7 2.9 2.7 4.7 2.7 5.4 0 23.8-15.7 23.8-19.1 0-2-3.7-2.4-3.7-2.4-.3 2.4-10.2 15-20.8 19.3 1.7-4.1 9-16.5 9-20.5 0-2.3-1.8-5.2-8.2-5.2-15.2 0-20.1 8.7-20.1 13.3.1 7.6 10 5.1 10 5.1" }),
                    undefined("path", { "aria-hidden": "true", id: "prefix__Fill-21", className: "prefix__st0", d: "M55.7 68c0 10.4-8.1 15.3-8.1 20.9 0 .7 2.3 2.8 4.1 2.8 7.6 0 28.2-18.2 28.2-22.3 0-2-5.7-3.6-5.7-3.6 0 7.4-12.4 20.3-22.3 23.4 1.7-4.1 9.7-15 9.7-19 .1-1.9-4-2.2-5.9-2.2" }),
                    undefined("path", { "aria-hidden": "true", id: "prefix__Fill-23", className: "prefix__st0", d: "M27.7 53.4c2 3.3-2.9 8.5-6.3 8.1-2.1-.2 3.8-10.1 6.2-12.2 0 0-.9-1.1-2.3-1.2-.8-.1-1.6.3-2.4 1-.6-.3-1.5-.7-2.8-.8-8.9-1-15 14.2-8 14.9 2.4.3 4.3-1.1 5.6-2.5 0 1.6.8 2.4 2.2 2.5 5.8.6 10.1-4.2 10.5-6.5.4-3.1-2.7-3.3-2.7-3.3m-8.4 1.3s-.1 0 0 0c-1.5 3-3.7 6.6-5.5 6.4-2.5-.3 2.4-12.5 7.8-11 .1 0 .1 0 .2.1-1 1.3-1.8 2.9-2.5 4.5" }),
                    undefined("path", { "aria-hidden": "true", id: "prefix__Fill-25", className: "prefix__st0", d: "M86 85.7c-1.3 2.6-4.9 5-8.4 4.6-2.1-.2 4.9-9.7 7.6-11.7 0 0-.8-1-2.1-1.2-.8-.1-1.7.3-2.5 1-.6-.3-1.4-.7-2.7-.8-8.9-.9-16.7 13.6-9.7 14.4 2.4.2 4.4-1 5.9-2.4-.1 1.6.6 2.3 1.9 2.4 5.7.6 12.8-4 13.4-6.3.8-3-3.4 0-3.4 0m-9.7-1.9c-1.8 2.9-4.5 6.3-6.2 6.2-2.5-.3 3.8-12 9-10.5.1 0 .1 0 .2.1-1.1 1.1-2.1 2.7-3 4.2" }),
                    undefined("g", { "aria-hidden": "true", id: "prefix__Group-29", transform: "translate(30 82.888)" },
                        undefined("path", { "aria-hidden": "true", id: "prefix__Fill-27", className: "prefix__st0", d: "M79.3-6.6l-.1-.2c-1.3-.7-2.6-1-3.2-1-.4 0-.8.1-1.1.4-.3.3-6.7 6.8-10 9.6-3.8 3.2-7 4.4-8.8 4.4 0-.1 8.3-7.5 8.1-10.6-.4-3.3-4.7-2.7-4.7-2.7 2.3 4-6.7 10.3-6.5 12.8.2.7 2.6 2.6 3.8 2.6 1.9 0 4.9-1.7 8.9-5.1 1.8-1.5 3.7-3.2 5.6-5.1-2 3.3-9.1 12.5-9.1 12.5 0 .1-.1.1-.1.2-.6 1.1-.4 1.9.1 2.4-11.6 3.6-29.8 8.6-42 7.2-6.8-.7-8.1-6.4-8.1-6.4-2.3 2.7-6.9 10.4 2.7 11.4 18.2 1.8 41.9-8.5 53-11.7.6 1.2 1.7 2.1 3.7 2.2 4.5.4 7.9-4.8 3.1-5.2-2-.2-6 1.1-7.4.9-2.1 0 11.4-17.8 12.1-18.6M73.4 13c1.6.1.4 1.8-.9 1.7-.9-.1-1.4-.4-2-1.1.8-.4 2-.7 2.9-.6" })),
                    undefined("path", { "aria-hidden": "true", id: "prefix__Fill-30", className: "prefix__st0", d: "M53.8 32.4c5.3.6 10.3.9 11.5-2.1-4.9 1.5-17.6-2.9-23.1-2.9s-6.3 3.8-3.9 6.2c1.3-3.1 7.2-2.3 13.2-1.5l2.3.3z" }),
                    undefined("path", { "aria-hidden": "true", id: "prefix__Fill-32", className: "prefix__st0", d: "M91.5 32.4c-5.3.6-10.3.9-11.5-2.1 4.9 1.5 17.6-2.9 23.1-2.9s6.3 3.8 3.9 6.2c-1.3-3.1-7.2-2.3-13.2-1.5l-2.3.3z" })))))) : (undefined("svg", __assign({ preserveAspectRatio: "xMidYMid meet", width: svgWidth, height: svgHeight, "aria-hidden": "true", id: "prefix__Calque_1", x: 0, y: 0, viewBox: "9 -8 117 117", xmlSpace: "preserve" }, restProps),
        undefined("style", null, ".prefix__st0{fill:" + color + "}"),
        undefined("g", { id: "prefix__Symbols" },
            undefined("g", { id: "prefix__Footer", transform: "translate(-452 -33)" },
                undefined("g", { transform: "translate(452 33)", id: "prefix__There-is-a-better-way_footer" },
                    undefined("path", { id: "prefix__Fill-1", className: "prefix__st0", d: "M53.2 51.1s9-2.2 10.9-7c1.6-4.2-3.9-7.1-13.3-7.2-25.8-.4-29.6 14.7-18.7 14.9 4 0 6.7-.8 8.6-2.3l-1-1.4c-1.2 1-3.8 1.7-5.2 1.7-6.6-.1 1-10.7 11.5-10.6 2.4 0 1.9 2.9-1.1 6.6-11 14-14.9 19.2-3.6 19.4 6.3.1 15.1-3.5 17.1-8.8 1.9-4.9-4.4-5.3-5.2-5.3m5.2-6.3c-1.2 3.2-6.8 5.6-10.2 5.8l1.2-1.5c2.9-3.7 4.8-8.2 3-10 4.8.1 7.3 2.4 6 5.7M41.8 63.1c-3.7 0-.4-4 5.3-11.2 2.2.2 6.5 1 5.1 4.6-1.3 3.5-7.3 6.7-10.4 6.6" }),
                    undefined("path", { id: "prefix__Fill-3", className: "prefix__st0", d: "M85.3 39.5s3 1.7 3 2.9S74.7 57 74.7 61.6c4.3-.9 11.7-5.7 11.7-5.7l1.1 1s-8 7.2-12.5 7.2c-2.5 0-4-3.8-4-5.1.1-1.5 13.8-18.5 14.3-19.5" }),
                    undefined("path", { id: "prefix__Fill-5", className: "prefix__st0", d: "M97.8 39.6s3 1.7 3 2.9-13.6 14.6-13.6 19.2c4.3-.9 11.7-5.8 11.7-5.8l1.1 1s-8 7.2-12.5 7.2c-2.5 0-4-3.8-4-5.1 0-1.3 13.7-18.3 14.3-19.4" }),
                    undefined("path", { id: "prefix__Fill-7", className: "prefix__st0", d: "M68.7 46.6s2.3 3 4.6 3c1.6 0 11.9-2.5 33.4-3.1-.2-.8-1.5-1.8-3.1-1.8s-16.2-.3-34.9 1.9" }),
                    undefined("path", { id: "prefix__Fill-9", className: "prefix__st0", d: "M73.7 55.5c-2 4.1-7.7 7.4-11.5 7.4-1 0-1.7-.2-2.1-.6-.4-.4-.3-1 .1-1.8.2-.3.4-.7.6-1 6.1-2 10.7-4.7 10.8-6.3 0-1.1-2-3.4-3.5-3.4-2.3 0-5 1.3-7.4 3.5-1.4 1.3-2.5 2.8-3.2 4.2l-.8 3.2c0 1.1.4 1.9 1.2 2.6 1 .9 2.7 1.4 4.9 1.4h.1c8.9.1 13.1-5.3 13.1-6.9-.1-1.3-2.3-2.3-2.3-2.3m-5.1-3.1c.3 0 .3.1.3.1.2.6-2.9 2.9-6.3 4.7 2-2.5 4.6-4.8 6-4.8" }),
                    undefined("path", { id: "prefix__Fill-11", className: "prefix__st0", d: "M111.3 55.1c-2 4.1-7.7 7.4-11.5 7.4-1 0-1.7-.2-2.1-.6-.4-.4-.3-1 .1-1.8.2-.3.4-.7.6-1 6.1-2 10.7-4.7 10.8-6.3 0-1.1-2-3.4-3.5-3.4-2.3 0-5 1.3-7.4 3.5-1.4 1.3-2.5 2.8-3.2 4.2l-.8 3.1c0 1.1.4 1.9 1.2 2.6 1 .9 2.7 1.4 4.9 1.4h.1c8.9.1 13.1-5.3 13.1-6.9 0-1.2-2.3-2.2-2.3-2.2m-5.1-3.1c.3 0 .3.1.3.1.2.6-2.9 2.9-6.3 4.7 2.1-2.5 4.7-4.8 6-4.8" }),
                    undefined("path", { id: "prefix__Fill-13", className: "prefix__st0", d: "M109.5 13.4c-2 4.1-7.7 7.5-11.5 7.5-1 0-1.7-.2-2.1-.6s-.3-1 .1-1.8c.2-.3.4-.7.6-1 6.1-2.1 10.7-4.8 10.8-6.4 0-1.1-2-3.3-3.5-3.3-2.3 0-5 1.3-7.4 3.6l-.1.1c.3-1.3.1-3-2.1-3-3.2 0-6.7 4.4-10 8.2 1.5-3 4-5.9 4-6.8 0-1.6-2.2-2-3.3-2.3-.2.9-2.6 5-4.6 8.2-2.6 3.2-7.1 5.5-10.2 5.5-1 0-1.7-.2-2.1-.6s-.3-1 .1-1.8c.2-.3.4-.7.6-1 6.1-2.1 10.7-4.8 10.8-6.4 0-1.1-2-3.3-3.5-3.3-2.3 0-5 1.3-7.4 3.6-1.4 1.3-2.5 2.8-3.2 4.2-2.9 2.1-6.1 4.1-7.6 4.1-2.8 0 6-9.1 5.9-9.8s-2.2-1.9-4-2.7c-3.7 2.2-8.6 5-12.5 9 1.8-3.1 12.2-16.1 12.2-19 0-.9-1.1-1.3-2.4-1.9 2.8 0 5.3 0 7.4.1 1 .1.7-.3-.2-1.1C62-7.6 52.6-7.8 49.1-7.8c-10.8-.1-24.8.8-33.2 3.1 2.1 2.6 4.2 4.6 6.5 4C27.1-2 34.3-3 41.7-3.8 36.2.9 26 15.6 26.8 19.7c.4 2.2 3.2 3.5 4.9 4.3 0-4.8 12-23.7 14.6-26.3.4-.4-.2-1.1-1.3-1.8 3.6-.3 7.2-.5 10.5-.6C53-.8 41 19.2 41 19.2c.4 1 2.4 2.7 3.5 2.7 1.3 0 9.2-9.1 12.8-10.5-2.4 3.1-4.8 6-4.5 7.7s3.2 3.3 4.9 3.3c1.5 0 4.3-1.6 7-3.5 0 1.1.4 1.9 1.2 2.6 1 .9 2.7 1.3 4.9 1.3h.1c3.4 0 6.2-.8 8.2-1.9.9.6 1.9.9 2.5.9 1.1 0 6.3-7.8 9.8-9.7l4 .4c-.9 1-1.5 2-2 3 0 0-.8 1.5-.8 3.2 0 1.1.4 1.9 1.2 2.6 1 .9 2.7 1.3 4.9 1.3h.1c8.9 0 13.1-5.5 13.1-7-.1-1.3-2.4-2.2-2.4-2.2m-5.1-3.1c.3 0 .3.1.3.1.2.6-2.9 2.9-6.3 4.7 2.1-2.4 4.7-4.8 6-4.8m-27.7.3c.3 0 .3.1.3.1.2.6-2.9 2.9-6.3 4.7 2-2.5 4.6-4.8 6-4.8" }),
                    undefined("path", { id: "prefix__Fill-15", className: "prefix__st0", d: "M107.2 61.5c.9 1.2 2.8 2 3.7 2 1.1 0 6.3-7.7 9.8-9.6l4.5.5c.8-.8 1.6-4.1-1.5-4.2-3.2 0-6.7 4.4-10 8.1 1.5-2.9 4-5.9 4-6.8 0-1.6-2.2-2-3.3-2.3-.5 1.6-7.2 12.3-7.2 12.3" }),
                    undefined("path", { id: "prefix__Fill-17", className: "prefix__st0", d: "M79.9 37.4c3.3-1.2 2-5.9.4-8.3-.9-1.3-3.6-1.7-3.6-1.7-.8 2.7-8.6 11.2-11 11.2s3.6-5.6 3.2-7.9c-.1-.8-1.4-1.6-2.5-2.1 1.9-.6 4.9-1.8 5-3.4.4-3.4-5.1-2.9-5.1-2.9s.5 2.9-.9 5.9c-.2-.1-.6-.2-.6-.2 0 2.2-4.4 7.6-3.9 10.4.2 1.3 3 2.8 4.6 2.8.9 0 2.1-.6 3.5-1.5.7.7 2.5 2.1 5.8 2.1 3.9 0 11.8-4.6 14.6-2l.2-.5c-.6-2.5-3.4-3.9-9.7-1.9m-10.4 1.8c3.4-2.3 7.4-6.2 8.2-7.7 1.1 2.5 2.2 8.4-8.2 7.7" }),
                    undefined("path", { id: "prefix__Fill-19", className: "prefix__st0", d: "M26.7 82.6c-9.9-3-1.5-16.4 9.7-16.4 9.3 0-4.4 17.6-4.4 23.2 0 .7 2.9 2.7 4.7 2.7 5.4 0 23.8-15.7 23.8-19.1 0-2-3.7-2.4-3.7-2.4-.3 2.4-10.2 15-20.8 19.3 1.7-4.1 9-16.5 9-20.5 0-2.3-1.8-5.2-8.2-5.2-15.2 0-20.1 8.7-20.1 13.3.1 7.6 10 5.1 10 5.1" }),
                    undefined("path", { id: "prefix__Fill-21", className: "prefix__st0", d: "M55.7 68c0 10.4-8.1 15.3-8.1 20.9 0 .7 2.3 2.8 4.1 2.8 7.6 0 28.2-18.2 28.2-22.3 0-2-5.7-3.6-5.7-3.6 0 7.4-12.4 20.3-22.3 23.4 1.7-4.1 9.7-15 9.7-19 .1-1.9-4-2.2-5.9-2.2" }),
                    undefined("path", { id: "prefix__Fill-23", className: "prefix__st0", d: "M27.7 53.4c2 3.3-2.9 8.5-6.3 8.1-2.1-.2 3.8-10.1 6.2-12.2 0 0-.9-1.1-2.3-1.2-.8-.1-1.6.3-2.4 1-.6-.3-1.5-.7-2.8-.8-8.9-1-15 14.2-8 14.9 2.4.3 4.3-1.1 5.6-2.5 0 1.6.8 2.4 2.2 2.5 5.8.6 10.1-4.2 10.5-6.5.4-3.1-2.7-3.3-2.7-3.3m-8.4 1.3s-.1 0 0 0c-1.5 3-3.7 6.6-5.5 6.4-2.5-.3 2.4-12.5 7.8-11 .1 0 .1 0 .2.1-1 1.3-1.8 2.9-2.5 4.5" }),
                    undefined("path", { id: "prefix__Fill-25", className: "prefix__st0", d: "M86 85.7c-1.3 2.6-4.9 5-8.4 4.6-2.1-.2 4.9-9.7 7.6-11.7 0 0-.8-1-2.1-1.2-.8-.1-1.7.3-2.5 1-.6-.3-1.4-.7-2.7-.8-8.9-.9-16.7 13.6-9.7 14.4 2.4.2 4.4-1 5.9-2.4-.1 1.6.6 2.3 1.9 2.4 5.7.6 12.8-4 13.4-6.3.8-3-3.4 0-3.4 0m-9.7-1.9c-1.8 2.9-4.5 6.3-6.2 6.2-2.5-.3 3.8-12 9-10.5.1 0 .1 0 .2.1-1.1 1.1-2.1 2.7-3 4.2" }),
                    undefined("g", { id: "prefix__Group-29", transform: "translate(30 82.888)" },
                        undefined("path", { id: "prefix__Fill-27", className: "prefix__st0", d: "M79.3-6.6l-.1-.2c-1.3-.7-2.6-1-3.2-1-.4 0-.8.1-1.1.4-.3.3-6.7 6.8-10 9.6-3.8 3.2-7 4.4-8.8 4.4 0-.1 8.3-7.5 8.1-10.6-.4-3.3-4.7-2.7-4.7-2.7 2.3 4-6.7 10.3-6.5 12.8.2.7 2.6 2.6 3.8 2.6 1.9 0 4.9-1.7 8.9-5.1 1.8-1.5 3.7-3.2 5.6-5.1-2 3.3-9.1 12.5-9.1 12.5 0 .1-.1.1-.1.2-.6 1.1-.4 1.9.1 2.4-11.6 3.6-29.8 8.6-42 7.2-6.8-.7-8.1-6.4-8.1-6.4-2.3 2.7-6.9 10.4 2.7 11.4 18.2 1.8 41.9-8.5 53-11.7.6 1.2 1.7 2.1 3.7 2.2 4.5.4 7.9-4.8 3.1-5.2-2-.2-6 1.1-7.4.9-2.1 0 11.4-17.8 12.1-18.6M73.4 13c1.6.1.4 1.8-.9 1.7-.9-.1-1.4-.4-2-1.1.8-.4 2-.7 2.9-.6" })),
                    undefined("path", { id: "prefix__Fill-30", className: "prefix__st0", d: "M53.8 32.4c5.3.6 10.3.9 11.5-2.1-4.9 1.5-17.6-2.9-23.1-2.9s-6.3 3.8-3.9 6.2c1.3-3.1 7.2-2.3 13.2-1.5l2.3.3z" }),
                    undefined("path", { id: "prefix__Fill-32", className: "prefix__st0", d: "M91.5 32.4c-5.3.6-10.3.9-11.5-2.1 4.9 1.5 17.6-2.9 23.1-2.9s6.3 3.8 3.9 6.2c-1.3-3.1-7.2-2.3-13.2-1.5l-2.3.3z" }))))));
}

var colors$1 = require("../colors.scss");
var imgRatio$1 = 1;
var defaultSize$1 = {
    width: "10px",
    height: "10px",
};
function Acronym(_a) {
    var width = _a.width, height = _a.height, text = _a.text, white = _a.white, restProps = __rest(_a, ["width", "height", "text", "white"]);
    var svgWidth = defaultSize$1.width;
    var svgHeight = defaultSize$1.height;
    if (width) {
        svgWidth = width + "px";
        svgHeight = width / imgRatio$1 + "px";
    }
    if (height) {
        svgHeight = height + "px";
        svgWidth = height * imgRatio$1 + "px";
    }
    var whiteColor = colors$1.lightest;
    return white ? (undefined("div", null,
        undefined("svg", __assign({ role: "link", preserveAspectRatio: "xMidYMid meet", width: svgWidth, height: svgHeight, id: "prefix__Calque_1", x: 0, y: 0, viewBox: "-32 34 34 34", xmlSpace: "preserve" }, restProps),
            undefined("a", { href: "https://octo.com" },
                undefined("text", { opacity: "0" },
                    "`$",
                    text,
                    "`")),
            undefined("style", null, ".prefix__st14{fill:" + whiteColor + "}"),
            undefined("g", { "aria-hidden": "true", id: "prefix__Symbols" },
                undefined("g", { "aria-hidden": "true", id: "prefix__Menu-Mobile", transform: "translate(-30 -15)" },
                    undefined("g", { "aria-hidden": "true", id: "prefix__T\\xEAte-octo", transform: "translate(30 14)" },
                        undefined("g", { "aria-hidden": "true", id: "prefix__Group-3", transform: "translate(28 .419)" },
                            undefined("path", { "aria-hidden": "true", id: "prefix__Fill-1", className: "prefix__st14", d: "M-27.1 35.6c1 1 1 2.5 0 3.5s-2.5 1-3.5 0-1-2.5 0-3.5c1-.9 2.6-.9 3.5 0" })),
                        undefined("path", { "aria-hidden": "true", id: "prefix__Fill-4", className: "prefix__st14", d: "M-8.9 45.8c1 1 1 2.5 0 3.5s-2.5 1-3.5 0-1-2.5 0-3.5c1-.9 2.5-.9 3.5 0" }),
                        undefined("g", { "aria-hidden": "true", id: "prefix__Group-8", transform: "translate(0 .419)" },
                            undefined("path", { "aria-hidden": "true", id: "prefix__Fill-6", d: "M-15 61.3c-5.3 0-9.7-4.3-9.7-9.7 0-5.3 4.3-9.7 9.7-9.7s9.7 4.3 9.7 9.7c-.1 5.3-4.4 9.7-9.7 9.7m0-26.4c-9.2 0-16.7 7.5-16.7 16.7s7.5 16.7 16.7 16.7S1.7 60.8 1.7 51.6-5.8 34.9-15 34.9", className: "prefix__st14" })))))))) : (undefined("div", null,
        undefined("svg", __assign({ role: "link", preserveAspectRatio: "xMidYMid meet", width: svgWidth, height: svgHeight, id: "prefix__Calque_1", x: 0, y: 0, viewBox: "-32 34 34 34", xmlSpace: "preserve" }, restProps),
            undefined("a", { href: "https://octo.com" },
                undefined("text", { opacity: "0" },
                    "`$",
                    text,
                    "`")),
            undefined("style", null, ".prefix__st15{fill:#00abc7}"),
            undefined("g", { "aria-hidden": "true", id: "prefix__Symbols" },
                undefined("g", { "aria-hidden": "true", id: "prefix__Menu-Mobile", transform: "translate(-30 -15)" },
                    undefined("g", { "aria-hidden": "true", id: "prefix__T\\xEAte-octo", transform: "translate(30 14)" },
                        undefined("g", { "aria-hidden": "true", id: "prefix__Group-3", transform: "translate(28 .419)" },
                            undefined("path", { "aria-hidden": "true", id: "prefix__Fill-1", className: "prefix__st15", d: "M-27.1 35.6c1 1 1 2.5 0 3.5s-2.5 1-3.5 0-1-2.5 0-3.5c1-.9 2.6-.9 3.5 0" })),
                        undefined("path", { "aria-hidden": "true", id: "prefix__Fill-4", className: "prefix__st15", d: "M-8.9 45.8c1 1 1 2.5 0 3.5s-2.5 1-3.5 0-1-2.5 0-3.5c1-.9 2.5-.9 3.5 0" }),
                        undefined("g", { "aria-hidden": "true", id: "prefix__Group-8", transform: "translate(0 .419)" },
                            undefined("path", { "aria-hidden": "true", id: "prefix__Fill-6", d: "M-15 61.3c-5.3 0-9.7-4.3-9.7-9.7 0-5.3 4.3-9.7 9.7-9.7s9.7 4.3 9.7 9.7c-.1 5.3-4.4 9.7-9.7 9.7m0-26.4c-9.2 0-16.7 7.5-16.7 16.7s7.5 16.7 16.7 16.7S1.7 60.8 1.7 51.6-5.8 34.9-15 34.9", fill: "#0e2356" }))))))));
}

var colors$2 = require("../colors.scss");
var imgRatio$2 = 1;
var defaultSize$2 = {
    width: "10px",
    height: "10px",
};
function CodedLogo(_a) {
    var width = _a.width, height = _a.height, text = _a.text, white = _a.white, restProps = __rest(_a, ["width", "height", "text", "white"]);
    var svgWidth = defaultSize$2.width;
    var svgHeight = defaultSize$2.height;
    if (width) {
        svgWidth = width + "px";
        svgHeight = width / imgRatio$2 + "px";
    }
    if (height) {
        svgHeight = height + "px";
        svgWidth = height * imgRatio$2 + "px";
    }
    var whiteColor = colors$2.lightest;
    return white ? (undefined("div", null,
        undefined("svg", __assign({ role: "link", preserveAspectRatio: "xMidYMid meet", width: svgWidth, height: svgHeight, id: "prefix__Logo2_white", x: 0, y: 0, viewBox: "0 0 608.03 392.81", xmlSpace: "preserve" }, restProps),
            undefined("a", { href: "https://octo.com" },
                undefined("text", { opacity: "0" },
                    "`$",
                    text,
                    "`")),
            undefined("style", null, ".prefix__st8{fill:" + whiteColor + "}"),
            undefined("path", { "aria-hidden": "true", className: "prefix__st8", d: "M244.63 126.97c-11.43-6.79-19.11-19.26-19.11-33.49s7.68-26.7 19.11-33.5V24.69c-29.86 8.62-51.77 36.19-51.77 68.78 0 32.6 21.91 60.16 51.77 68.78v-35.28z" }),
            undefined("path", { "aria-hidden": "true", className: "prefix__st8", d: "M519.67 1.44c5.56-.01 10.07 4.49 10.08 10.05.01 5.56-4.49 10.07-10.05 10.08-5.56.01-10.07-4.49-10.08-10.05-.01-5.57 4.49-10.08 10.05-10.08zM519.61 58.06c5.56-.01 10.07 4.49 10.08 10.05.01 5.56-4.49 10.07-10.05 10.08-5.56 0-10.07-4.5-10.07-10.05-.01-5.56 4.48-10.07 10.04-10.08z" }),
            undefined("path", { "aria-hidden": "true", className: "prefix__st8", d: "M88.94 77.7c-8.81 0-15.95 7.18-15.95 16.02 0 8.85 7.14 16.02 15.96 16.02 8.81 0 15.95-7.17 15.95-16.03 0-8.84-7.15-16.01-15.96-16.01zm.01 28.27c-6.74.01-12.2-5.48-12.2-12.24 0-6.77 5.45-12.25 12.19-12.25 6.73 0 12.19 5.48 12.19 12.24.01 6.77-5.45 12.25-12.18 12.25z" }),
            undefined("path", { "aria-hidden": "true", className: "prefix__st8", d: "M127.85 93.57c0 21.79-17.69 39.52-39.43 39.52s-39.43-17.73-39.43-39.52c0-21.79 17.69-39.52 39.43-39.52s39.43 17.73 39.43 39.52zM88.41 25.35c-37.54 0-68.08 30.6-68.08 68.22s30.54 68.22 68.08 68.22 68.08-30.6 68.08-68.22c.01-37.62-30.54-68.22-68.08-68.22z" }),
            undefined("path", { "aria-hidden": "true", className: "prefix__st8", d: "M89.05 85.81c4.36 0 7.9 3.54 7.9 7.92 0 4.37-3.54 7.92-7.9 7.91-4.36 0-7.9-3.54-7.9-7.91 0-4.38 3.54-7.92 7.9-7.92z" }),
            undefined("g", { "aria-hidden": "true" },
                undefined("path", { "aria-hidden": "true", className: "prefix__st8", d: "M519.65 25.35c-37.54 0-68.08 30.6-68.08 68.22s30.54 68.22 68.08 68.22 68.08-30.6 68.08-68.22c.01-37.62-30.54-68.22-68.08-68.22zm0 107.74c-21.74 0-39.43-17.73-39.43-39.52 0-21.79 17.69-39.52 39.43-39.52s39.43 17.73 39.43 39.52c.01 21.79-17.68 39.52-39.43 39.52z" })),
            undefined("path", { "aria-hidden": "true", className: "prefix__st8", d: "M362.13 77.53V24.97h-32.11v52.56h-53.04v31.82h53.04v52.56h32.11v-52.56h53.05V77.53h-53.05z" }),
            undefined("g", { "aria-hidden": "true" },
                undefined("path", { "aria-hidden": "true", className: "prefix__st8", d: "M37.7 320.41h15.51l17.05 52.29H57.84l-3.6-11.63H35.2l-3.6 11.63H20.43l17.27-52.29zm.07 32.25h13.89l-6.91-22.6-6.98 22.6zM90.62 373.5c-2.8 0-5.4-.43-7.83-1.28-2.43-.85-4.52-2.11-6.29-3.77-1.76-1.66-3.15-3.69-4.15-6.11-1-2.41-1.51-5.18-1.51-8.3v-.59c0-3.07.52-5.84 1.55-8.3 1.03-2.46 2.45-4.57 4.26-6.33 1.81-1.71 3.92-3.01 6.32-3.91 2.4-.9 4.97-1.35 7.72-1.35 2.21 0 4.35.26 6.43.77s3.96 1.35 5.63 2.52c1.61 1.17 2.96 2.71 4.04 4.61 1.08 1.9 1.74 4.22 1.98 6.95H98.7c-.34-2.19-1.16-3.83-2.46-4.9-1.3-1.07-3.08-1.61-5.33-1.61-2.79 0-5.02.99-6.69 2.95-1.66 1.97-2.5 4.78-2.5 8.42v.58c0 3.84.82 6.73 2.47 8.68 1.64 1.95 3.96 2.92 6.94 2.92 2.16 0 4.01-.6 5.55-1.81 1.55-1.21 2.44-3.04 2.69-5.51h9.62c-.14 2.29-.66 4.38-1.54 6.25-.88 1.88-2.11 3.48-3.67 4.79-1.57 1.37-3.46 2.43-5.66 3.18-2.21.78-4.71 1.15-7.5 1.15zM130.89 373.5c-2.8 0-5.4-.43-7.83-1.28-2.43-.85-4.52-2.11-6.29-3.77-1.76-1.66-3.15-3.69-4.15-6.11-1-2.41-1.51-5.18-1.51-8.3v-.59c0-3.07.52-5.84 1.55-8.3 1.03-2.46 2.45-4.57 4.26-6.33 1.81-1.71 3.92-3.01 6.32-3.91 2.4-.9 4.97-1.35 7.72-1.35 2.21 0 4.35.26 6.43.77s3.96 1.35 5.63 2.52c1.61 1.17 2.96 2.71 4.04 4.61 1.08 1.9 1.74 4.22 1.98 6.95h-10.07c-.34-2.19-1.16-3.83-2.46-4.9-1.3-1.07-3.08-1.61-5.33-1.61-2.79 0-5.02.99-6.69 2.95-1.66 1.97-2.5 4.78-2.5 8.42v.58c0 3.84.82 6.73 2.47 8.68 1.64 1.95 3.96 2.92 6.94 2.92 2.16 0 4.01-.6 5.55-1.81 1.55-1.21 2.44-3.04 2.69-5.51h9.62c-.14 2.29-.66 4.38-1.54 6.25-.88 1.88-2.11 3.48-3.67 4.79-1.57 1.37-3.46 2.43-5.66 3.18-2.2.78-4.7 1.15-7.5 1.15zM171.46 373.5c-2.89 0-5.56-.44-8.01-1.32-2.45-.88-4.56-2.17-6.32-3.88-1.81-1.66-3.22-3.68-4.23-6.07-1-2.39-1.51-5.12-1.51-8.19v-.59c0-3.02.5-5.75 1.51-8.19 1-2.44 2.41-4.54 4.23-6.29 1.76-1.71 3.85-3.03 6.25-3.99 2.4-.95 4.99-1.43 7.79-1.43 2.5 0 4.88.38 7.13 1.13 2.25.76 4.24 1.92 5.95 3.48 1.72 1.56 3.09 3.57 4.12 6.03 1.03 2.46 1.54 5.4 1.54 8.81v2.93H162.2c.15 3.22 1.04 5.69 2.68 7.43 1.64 1.73 3.94 2.59 6.87 2.59 2.49 0 4.37-.49 5.62-1.46s2.05-2.27 2.39-3.88h10.07c-.64 4.15-2.54 7.33-5.7 9.55-3.15 2.24-7.38 3.34-12.67 3.34zm8.09-24.06c-.2-2.93-1-5.08-2.43-6.47-1.42-1.39-3.41-2.08-5.95-2.08-2.4 0-4.38.74-5.92 2.23s-2.51 3.6-2.9 6.33h17.2zM196.16 334.45h10.65v6.07c.98-1.9 2.5-3.53 4.56-4.9 2.06-1.36 4.71-2.05 7.94-2.05 1.91 0 3.65.29 5.22.88s2.94 1.46 4.12 2.63c1.13 1.22 2.01 2.77 2.64 4.65.64 1.88.96 4.08.96 6.62v24.36h-10.66v-22.82c0-2.63-.54-4.57-1.62-5.81-1.08-1.24-2.79-1.87-5.14-1.87-2.3 0-4.21.7-5.74 2.08-1.52 1.39-2.28 3.5-2.28 6.33v22.09h-10.65v-38.26zM253.19 373.43c-4.07 0-7.15-1.01-9.26-3.03-2.11-2.02-3.16-5.04-3.16-9.03v-19.38h-4.92v-7.53h4.92v-8.26h10.59v8.26h8.08v7.53h-8.08v18.43c0 1.51.36 2.64 1.06 3.4.71.76 1.78 1.13 3.2 1.13.78 0 1.51-.06 2.17-.18.66-.12 1.29-.3 1.87-.55v8.19c-.73.24-1.64.48-2.72.7-1.08.21-2.33.32-3.75.32zM275.98 373.5c-1.86 0-3.59-.28-5.18-.84a11.02 11.02 0 01-4.15-2.6c-1.18-1.17-2.09-2.67-2.76-4.5-.66-1.83-.99-3.99-.99-6.47v-24.65h10.59v23.18c0 2.54.56 4.45 1.69 5.74s2.79 1.94 5 1.94c2.25 0 4.15-.7 5.69-2.08 1.55-1.39 2.32-3.5 2.32-6.33v-22.45h10.58v38.25h-10.58v-6c-.98 1.95-2.46 3.57-4.45 4.86-1.99 1.31-4.58 1.95-7.76 1.95zM305.96 334.45h10.65v7.31c1.22-2.58 2.82-4.53 4.78-5.85s4.51-2 7.65-2.05v9.87c-3.97-.05-7.03.66-9.19 2.12-2.16 1.46-3.24 4.02-3.24 7.68v19.16h-10.65v-38.24zM350.79 373.5c-2.89 0-5.56-.44-8.01-1.32-2.45-.88-4.56-2.17-6.32-3.88-1.81-1.66-3.22-3.68-4.23-6.07-1-2.39-1.51-5.12-1.51-8.19v-.59c0-3.02.5-5.75 1.51-8.19 1-2.44 2.41-4.54 4.23-6.29 1.76-1.71 3.85-3.03 6.25-3.99 2.4-.95 4.99-1.43 7.79-1.43 2.5 0 4.88.38 7.13 1.13 2.25.76 4.24 1.92 5.95 3.48 1.72 1.56 3.09 3.57 4.12 6.03 1.03 2.46 1.54 5.4 1.54 8.81v2.93h-27.71c.15 3.22 1.04 5.69 2.68 7.43 1.64 1.73 3.94 2.59 6.87 2.59 2.49 0 4.37-.49 5.62-1.46s2.05-2.27 2.39-3.88h10.07c-.64 4.15-2.54 7.33-5.7 9.55-3.15 2.24-7.38 3.34-12.67 3.34zm8.09-24.06c-.2-2.93-1-5.08-2.43-6.47-1.42-1.39-3.41-2.08-5.95-2.08-2.4 0-4.38.74-5.92 2.23s-2.51 3.6-2.9 6.33h17.2z" }),
                undefined("g", { "aria-hidden": "true" },
                    undefined("path", { "aria-hidden": "true", className: "prefix__st8", d: "M393.89 323.45h12.68c4.11 0 7.69.6 10.74 1.8 3.04 1.2 5.57 2.85 7.58 4.94 2.01 2.09 3.51 4.56 4.5 7.41.98 2.85 1.48 5.94 1.48 9.28v.6c0 3.29-.48 6.39-1.44 9.28-.96 2.89-2.45 5.41-4.46 7.54-2.01 2.14-4.55 3.82-7.62 5.04-3.06 1.22-6.7 1.84-10.9 1.84H393.9v-47.73zm12.42 43.06c3.09 0 5.78-.45 8.08-1.34 2.3-.89 4.23-2.16 5.77-3.81 1.54-1.65 2.71-3.64 3.49-5.99.78-2.34 1.17-4.98 1.17-7.93v-.54c0-2.76-.35-5.29-1.04-7.59-.69-2.3-1.79-4.28-3.29-5.95s-3.42-2.96-5.77-3.88c-2.35-.91-5.18-1.37-8.49-1.37h-6.51v38.39h6.59zM443.81 328.99c-1.03 0-1.9-.36-2.62-1.07-.72-.71-1.07-1.58-1.07-2.6s.36-1.89 1.07-2.6c.71-.71 1.59-1.07 2.62-1.07s1.9.36 2.62 1.07c.71.71 1.07 1.58 1.07 2.6s-.36 1.89-1.07 2.6c-.72.72-1.59 1.07-2.62 1.07zm-2.68 7.28h5.57v34.92h-5.57v-34.92zM472.93 383.94c-2.59 0-4.84-.29-6.74-.87s-3.49-1.35-4.76-2.3c-1.27-.96-2.27-2.09-2.99-3.41-.72-1.31-1.19-2.7-1.41-4.17h5.7c.81 4.05 4.18 6.08 10.13 6.08 3.44 0 6.18-.86 8.22-2.57 2.04-1.71 3.05-4.44 3.05-8.18v-5.07c-.49.85-1.15 1.67-1.98 2.47s-1.77 1.5-2.82 2.1c-1.05.6-2.18 1.09-3.39 1.47-1.21.38-2.44.57-3.69.57-2.28 0-4.41-.41-6.37-1.24-1.97-.82-3.66-1.97-5.07-3.44s-2.52-3.21-3.32-5.24c-.8-2.02-1.21-4.24-1.21-6.64v-.47c0-2.36.4-4.6 1.21-6.71.8-2.11 1.92-3.96 3.35-5.54 1.43-1.58 3.15-2.83 5.17-3.74 2.01-.91 4.23-1.37 6.64-1.37 2.95 0 5.34.61 7.18 1.84 1.83 1.22 3.26 2.68 4.29 4.37v-5.61h5.57v32.58c0 2.54-.43 4.75-1.28 6.64-.85 1.89-2.01 3.46-3.49 4.71-1.48 1.25-3.23 2.18-5.27 2.8-2.01.63-4.26.94-6.72.94zm-.07-18.56c1.61 0 3.12-.28 4.53-.83a10.42 10.42 0 003.66-2.39c1.03-1.04 1.83-2.32 2.42-3.85.58-1.53.87-3.26.87-5.21v-.46c0-3.9-1-6.92-2.99-9.06s-4.71-3.22-8.15-3.22c-1.74 0-3.31.31-4.7.93-1.39.62-2.55 1.47-3.49 2.56-.94 1.08-1.67 2.39-2.18 3.92-.51 1.53-.77 3.2-.77 5.01v.53c0 1.9.29 3.6.87 5.08.58 1.48 1.35 2.74 2.31 3.78a9.66 9.66 0 003.42 2.39c1.33.54 2.73.82 4.2.82zM504.6 328.99c-1.03 0-1.9-.36-2.62-1.07-.72-.71-1.07-1.58-1.07-2.6s.36-1.89 1.07-2.6c.71-.71 1.59-1.07 2.62-1.07s1.9.36 2.62 1.07c.71.71 1.07 1.58 1.07 2.6s-.36 1.89-1.07 2.6c-.72.72-1.6 1.07-2.62 1.07zm-2.69 7.28h5.57v34.92h-5.57v-34.92zM530.36 371.65c-3.22 0-5.6-.85-7.14-2.54s-2.31-3.92-2.31-6.68v-21.5h-5.03v-4.67h5.03v-7.95h5.57v7.95h8.19v4.67h-8.19v20.96c0 3.38 1.45 5.07 4.36 5.07.89 0 1.68-.07 2.35-.2.67-.13 1.32-.31 1.95-.53v4.67c-.58.22-1.23.4-1.95.53-.73.16-1.67.22-2.83.22zM553.44 371.79c-1.61 0-3.13-.2-4.56-.6-1.43-.4-2.67-1.02-3.72-1.87s-1.88-1.91-2.48-3.21c-.6-1.29-.91-2.83-.91-4.61 0-2 .49-3.69 1.48-5.07.98-1.38 2.29-2.49 3.92-3.34 1.63-.84 3.51-1.46 5.64-1.84a37 37 0 016.54-.57h5.03v-2.52c0-2.79-.58-4.79-1.75-6-1.16-1.22-3.09-1.83-5.77-1.83-4.83 0-7.51 2.07-8.05 6.21h-5.57c.18-2 .68-3.69 1.51-5.07.83-1.38 1.88-2.5 3.15-3.37s2.71-1.49 4.29-1.87c1.59-.38 3.23-.57 4.93-.57 1.65 0 3.26.19 4.83.57 1.57.38 2.93 1.05 4.09 2s2.1 2.24 2.82 3.84 1.07 3.63 1.07 6.08v23.03h-5.57v-4.41c-1.3 1.65-2.8 2.89-4.5 3.74-1.68.85-3.83 1.28-6.42 1.28zm.53-4.41c1.48 0 2.85-.19 4.13-.57 1.27-.38 2.37-.92 3.29-1.64.92-.71 1.64-1.59 2.18-2.64.54-1.04.81-2.24.81-3.57v-4.34h-4.83c-1.75 0-3.37.12-4.86.37-1.5.25-2.8.63-3.89 1.17-1.1.53-1.95 1.24-2.55 2.1s-.91 1.95-.91 3.24c0 1.83.49 3.26 1.48 4.31.97 1.05 2.69 1.57 5.15 1.57zM581.82 319.58h5.63v51.61h-5.63v-51.61z" })),
                undefined("g", { "aria-hidden": "true" },
                    undefined("path", { "aria-hidden": "true", className: "prefix__st8", d: "M221.13 285.5H587.5v3H221.13zM20.58 274.99h8.55c3.08 0 5.32.65 6.72 1.95 1.4 1.3 2.1 3.1 2.1 5.4v.12c0 2.24-.72 3.97-2.16 5.18-1.44 1.21-3.56 1.81-6.36 1.81h-2.07v6.99h-6.78v-21.45zm8.19 9.9c1.82 0 2.73-.8 2.73-2.4v-.12c0-.84-.23-1.43-.68-1.79-.45-.35-1.12-.52-2.02-.52h-1.44v4.83h1.41zM51.87 274.99h8.79l6.72 21.45h-7.2l-.99-3.57h-6.78l-.96 3.57h-6.33l6.75-21.45zm1.83 13.26h4.23l-2.1-7.77-2.13 7.77zM77.4 274.99h8.76c2.98 0 5.22.58 6.72 1.75s2.25 2.91 2.25 5.21v.12c0 1.48-.34 2.67-1.02 3.55-.68.89-1.55 1.58-2.61 2.06l4.89 8.76h-7.14l-3.99-7.35h-1.08v7.35H77.4v-21.45zm8.37 9.72c1.86 0 2.79-.78 2.79-2.34v-.12c0-.78-.23-1.33-.69-1.67-.46-.33-1.15-.49-2.07-.49h-1.62v4.62h1.59zM109.95 280.21h-5.4v-5.22h17.67v5.22h-5.43v16.23h-6.84v-16.23zM156.12 296.83c-1.76 0-3.34-.26-4.74-.79-1.4-.53-2.59-1.28-3.57-2.25s-1.73-2.13-2.25-3.48-.78-2.83-.78-4.46v-.24c0-1.66.29-3.17.88-4.51.59-1.35 1.4-2.5 2.43-3.45 1.03-.95 2.24-1.68 3.64-2.21 1.4-.52 2.9-.78 4.5-.78 1.64 0 3.17.25 4.58.74s2.63 1.2 3.66 2.12c1.03.92 1.83 2.04 2.42 3.38s.87 2.84.87 4.54v.24c0 1.68-.28 3.21-.83 4.57-.55 1.37-1.33 2.54-2.36 3.51-1.02.97-2.25 1.72-3.67 2.26s-3.02.81-4.78.81zm.18-5.34c1.34 0 2.4-.5 3.19-1.48.79-.99 1.19-2.39 1.19-4.19v-.24c0-1.82-.4-3.21-1.2-4.17s-1.88-1.44-3.24-1.44c-1.32 0-2.38.47-3.17 1.42s-1.18 2.34-1.18 4.18v.24c0 1.84.39 3.25 1.18 4.21.79.98 1.87 1.47 3.23 1.47zM178.32 274.99h14.85v5.22h-8.04v4.02h6.48v5.01h-6.48v7.2h-6.81v-21.45z" })),
                undefined("g", { "aria-hidden": "true" },
                    undefined("path", { "aria-hidden": "true", className: "prefix__st8", d: "M30.24 203.75h-9.7v-6.62h26.88v6.62h-9.7v27.36h-7.49v-27.36zM157.54 215.32c-.35-.51-.85-.94-1.49-1.27-.64-.34-1.33-.5-2.06-.5-1.82 0-3.24.54-4.25 1.63s-1.51 2.51-1.51 4.27.5 3.18 1.51 4.27c1.01 1.09 2.42 1.63 4.25 1.63.8 0 1.49-.18 2.06-.53.58-.35 1.07-.77 1.49-1.25l4.75 4.99c-1.12 1.15-2.44 1.96-3.96 2.42s-2.97.7-4.34.7c-1.79 0-3.48-.29-5.06-.86s-2.96-1.4-4.13-2.47-2.09-2.36-2.76-3.86c-.67-1.5-1.01-3.18-1.01-5.04 0-1.86.34-3.54 1.01-5.04.67-1.5 1.59-2.79 2.76-3.86 1.17-1.07 2.54-1.9 4.13-2.47s3.27-.86 5.06-.86c1.38 0 2.82.23 4.34.7s2.84 1.27 3.96 2.42l-4.75 4.98zM206.69 194.82v16.13h.1c.16-.45.43-.9.82-1.34.38-.45.85-.85 1.39-1.2.54-.35 1.18-.64 1.92-.86.74-.22 1.54-.34 2.4-.34 1.82 0 3.3.28 4.42.84 1.12.56 1.99 1.34 2.62 2.33.62.99 1.05 2.16 1.27 3.5s.34 2.8.34 4.37v12.86h-7.2v-11.42c0-.67-.02-1.37-.07-2.09-.05-.72-.19-1.38-.43-1.99-.24-.61-.61-1.1-1.1-1.49-.5-.38-1.21-.58-2.14-.58-.93 0-1.68.17-2.26.5-.58.34-1.02.79-1.32 1.34-.3.56-.5 1.19-.6 1.9-.1.71-.14 1.44-.14 2.21v11.62h-7.2v-36.29h7.18zM261.65 207.78h6.91v3.17h.1c.22-.45.54-.9.96-1.34.42-.45.91-.85 1.49-1.2s1.23-.64 1.97-.86c.74-.22 1.54-.34 2.4-.34 1.82 0 3.3.28 4.42.84 1.12.56 1.99 1.34 2.62 2.33.62.99 1.05 2.16 1.27 3.5s.34 2.8.34 4.37v12.86h-7.2v-11.42c0-.67-.02-1.37-.07-2.09-.05-.72-.19-1.38-.43-1.99-.24-.61-.61-1.1-1.1-1.49-.5-.38-1.21-.58-2.14-.58-.93 0-1.68.17-2.26.5-.58.34-1.02.79-1.32 1.34-.3.56-.5 1.19-.6 1.9-.1.71-.14 1.44-.14 2.21v11.62h-7.2v-23.33zM322.94 219.45c0-1.86.34-3.54 1.01-5.04.67-1.5 1.59-2.79 2.76-3.86 1.17-1.07 2.54-1.9 4.13-2.47s3.27-.86 5.06-.86 3.48.29 5.06.86 2.96 1.4 4.13 2.47a11.55 11.55 0 012.76 3.86c.67 1.5 1.01 3.18 1.01 5.04 0 1.86-.34 3.54-1.01 5.04a11.55 11.55 0 01-2.76 3.86c-1.17 1.07-2.54 1.9-4.13 2.47s-3.27.86-5.06.86-3.48-.29-5.06-.86-2.96-1.4-4.13-2.47a11.55 11.55 0 01-2.76-3.86c-.67-1.51-1.01-3.19-1.01-5.04zm7.2 0c0 1.76.5 3.18 1.51 4.27 1.01 1.09 2.42 1.63 4.25 1.63s3.24-.54 4.25-1.63c1.01-1.09 1.51-2.51 1.51-4.27s-.5-3.18-1.51-4.27-2.42-1.63-4.25-1.63-3.24.54-4.25 1.63-1.51 2.51-1.51 4.27zM387.79 194.82h7.2v36.29h-7.2v-36.29zM433.92 219.45c0-1.86.34-3.54 1.01-5.04.67-1.5 1.59-2.79 2.76-3.86 1.17-1.07 2.54-1.9 4.13-2.47s3.27-.86 5.06-.86c1.79 0 3.48.29 5.06.86s2.96 1.4 4.13 2.47a11.55 11.55 0 012.76 3.86c.67 1.5 1.01 3.18 1.01 5.04 0 1.86-.34 3.54-1.01 5.04-.67 1.5-1.59 2.79-2.76 3.86s-2.54 1.9-4.13 2.47-3.27.86-5.06.86c-1.79 0-3.48-.29-5.06-.86s-2.96-1.4-4.13-2.47a11.55 11.55 0 01-2.76-3.86c-.67-1.51-1.01-3.19-1.01-5.04zm7.2 0c0 1.76.5 3.18 1.51 4.27 1.01 1.09 2.42 1.63 4.25 1.63 1.82 0 3.24-.54 4.25-1.63 1.01-1.09 1.51-2.51 1.51-4.27s-.5-3.18-1.51-4.27c-1.01-1.09-2.42-1.63-4.25-1.63-1.82 0-3.24.54-4.25 1.63-1.01 1.08-1.51 2.51-1.51 4.27zM576.96 234.9a50.61 50.61 0 01-1.39 3.31c-.45.96-1.02 1.77-1.7 2.42-.69.66-1.56 1.15-2.62 1.49-1.06.34-2.45.5-4.18.5-1.86 0-3.65-.29-5.38-.86l.96-5.9c1.09.48 2.21.72 3.36.72.8 0 1.46-.09 1.97-.26.51-.18.94-.43 1.27-.77.34-.34.62-.74.84-1.22.22-.48.46-1.04.72-1.68l.53-1.34-10.22-23.52h7.78l6 15.41h.1l5.14-15.41h7.39l-10.57 27.11zM497.81 207.78h6.62v3.07h.1c.29-.42.67-.84 1.15-1.27.48-.43 1.06-.82 1.73-1.18.67-.35 1.43-.64 2.28-.86.85-.22 1.78-.34 2.81-.34 1.66 0 3.15.34 4.46 1.03s2.42 1.59 3.34 2.71c.91 1.12 1.62 2.42 2.11 3.89.5 1.47.74 2.98.74 4.51 0 1.76-.27 3.38-.82 4.85-.54 1.47-1.32 2.74-2.33 3.82a10.62 10.62 0 01-3.62 2.5c-1.41.59-2.98.89-4.7.89-1.09 0-2.25-.23-3.48-.7-1.23-.46-2.26-1.26-3.1-2.38h-.1v2.26c0 1.66.52 3.03 1.56 4.1 1.04 1.07 2.66 1.61 4.87 1.61 1.47 0 2.82-.27 4.06-.82 1.23-.54 2.41-1.28 3.53-2.21l3.98 5.95c-1.7 1.34-3.55 2.25-5.57 2.71-2.02.46-4.06.7-6.14.7-4.54 0-7.93-1.14-10.15-3.43-2.22-2.29-3.34-5.64-3.34-10.06v-21.35zm17.71 9.34c-.29-.69-.7-1.3-1.22-1.82-.53-.53-1.13-.95-1.82-1.27s-1.45-.48-2.28-.48c-.8 0-1.55.16-2.26.48s-1.32.74-1.85 1.27a5.55 5.55 0 00-1.22 1.82c-.29.69-.43 1.42-.43 2.18 0 .77.14 1.5.43 2.18.29.69.7 1.3 1.22 1.82.53.53 1.14.95 1.85 1.27s1.46.48 2.26.48c.83 0 1.59-.16 2.28-.48s1.3-.74 1.82-1.27c.53-.53.94-1.14 1.22-1.82.29-.69.43-1.42.43-2.18 0-.76-.14-1.49-.43-2.18zM85.01 223.38c.61.83 1.32 1.51 2.14 2.04.82.53 1.82.79 3 .79 1.41 0 2.59-.41 3.55-1.22s1.58-1.91 1.87-3.29h-16.7v-2.26c0-1.86.26-3.54.77-5.04s1.24-2.79 2.18-3.86c.94-1.07 2.1-1.9 3.46-2.47 1.36-.58 2.87-.86 4.54-.86 1.79 0 3.48.29 5.06.86s2.96 1.4 4.13 2.47a11.55 11.55 0 012.76 3.86c.67 1.5 1.01 3.18 1.01 5.04 0 1.86-.34 3.54-1.01 5.04-.67 1.5-1.59 2.79-2.76 3.86s-2.54 1.9-4.13 2.47-3.27.86-5.06.86c-1.89 0-3.71-.4-5.47-1.2s-3.22-1.94-4.37-3.41l5.03-3.68zm10.56-6.57c-.03-.58-.17-1.13-.41-1.66a4.32 4.32 0 00-1.01-1.39c-.43-.4-.95-.73-1.56-.98-.61-.26-1.31-.38-2.11-.38-1.31 0-2.38.43-3.22 1.3-.83.86-1.23 1.9-1.2 3.12h9.51z" })))))) : (undefined("div", null,
        undefined("svg", __assign({ role: "link", preserveAspectRatio: "xMidYMid meet", width: svgWidth, height: svgHeight, id: "prefix__Logo2", x: 0, y: 0, viewBox: "0 0 608.03 392.81", xmlSpace: "preserve" }, restProps),
            undefined("a", { href: "https://octo.com" },
                undefined("text", { opacity: "0" },
                    "`$",
                    text,
                    "`")),
            undefined("style", null, ".prefix__st9{fill:#0e2356}.prefix__st10{fill:#00afcb}.prefix__st11{fill-rule:evenodd;clip-rule:evenodd;fill:#0e2356}.prefix__st12{fill:#1d1d1b}.prefix__st13{fill:#ffb600}"),
            undefined("path", { "aria-hidden": "true", className: "prefix__st9", d: "M244.63 126.97c-11.43-6.79-19.11-19.26-19.11-33.49s7.68-26.7 19.11-33.5V24.69c-29.86 8.62-51.77 36.19-51.77 68.78 0 32.6 21.91 60.16 51.77 68.78v-35.28z" }),
            undefined("path", { "aria-hidden": "true", className: "prefix__st10", d: "M519.67 1.44c5.56-.01 10.07 4.49 10.08 10.05.01 5.56-4.49 10.07-10.05 10.08-5.56.01-10.07-4.49-10.08-10.05-.01-5.57 4.49-10.08 10.05-10.08zM519.61 58.06c5.56-.01 10.07 4.49 10.08 10.05.01 5.56-4.49 10.07-10.05 10.08-5.56 0-10.07-4.5-10.07-10.05-.01-5.56 4.48-10.07 10.04-10.08z" }),
            undefined("path", { "aria-hidden": "true", className: "prefix__st11", d: "M88.94 77.7c-8.81 0-15.95 7.18-15.95 16.02 0 8.85 7.14 16.02 15.96 16.02 8.81 0 15.95-7.17 15.95-16.03 0-8.84-7.15-16.01-15.96-16.01zm.01 28.27c-6.74.01-12.2-5.48-12.2-12.24 0-6.77 5.45-12.25 12.19-12.25 6.73 0 12.19 5.48 12.19 12.24.01 6.77-5.45 12.25-12.18 12.25z" }),
            undefined("path", { "aria-hidden": "true", className: "prefix__st11", d: "M127.85 93.57c0 21.79-17.69 39.52-39.43 39.52s-39.43-17.73-39.43-39.52c0-21.79 17.69-39.52 39.43-39.52s39.43 17.73 39.43 39.52zM88.41 25.35c-37.54 0-68.08 30.6-68.08 68.22s30.54 68.22 68.08 68.22 68.08-30.6 68.08-68.22c.01-37.62-30.54-68.22-68.08-68.22z" }),
            undefined("path", { "aria-hidden": "true", className: "prefix__st9", d: "M89.05 85.81c4.36 0 7.9 3.54 7.9 7.92 0 4.37-3.54 7.92-7.9 7.91-4.36 0-7.9-3.54-7.9-7.91 0-4.38 3.54-7.92 7.9-7.92z" }),
            undefined("g", { "aria-hidden": "true" },
                undefined("path", { "aria-hidden": "true", className: "prefix__st11", d: "M519.65 25.35c-37.54 0-68.08 30.6-68.08 68.22s30.54 68.22 68.08 68.22 68.08-30.6 68.08-68.22c.01-37.62-30.54-68.22-68.08-68.22zm0 107.74c-21.74 0-39.43-17.73-39.43-39.52 0-21.79 17.69-39.52 39.43-39.52s39.43 17.73 39.43 39.52c.01 21.79-17.68 39.52-39.43 39.52z" })),
            undefined("path", { "aria-hidden": "true", className: "prefix__st9", d: "M362.13 77.53V24.97h-32.11v52.56h-53.04v31.82h53.04v52.56h32.11v-52.56h53.05V77.53h-53.05z" }),
            undefined("g", { "aria-hidden": "true" },
                undefined("path", { "aria-hidden": "true", className: "prefix__st12", d: "M37.7 320.41h15.51l17.05 52.29H57.84l-3.6-11.63H35.2l-3.6 11.63H20.43l17.27-52.29zm.07 32.25h13.89l-6.91-22.6-6.98 22.6zM90.62 373.5c-2.8 0-5.4-.43-7.83-1.28-2.43-.85-4.52-2.11-6.29-3.77-1.76-1.66-3.15-3.69-4.15-6.11-1-2.41-1.51-5.18-1.51-8.3v-.59c0-3.07.52-5.84 1.55-8.3 1.03-2.46 2.45-4.57 4.26-6.33 1.81-1.71 3.92-3.01 6.32-3.91 2.4-.9 4.97-1.35 7.72-1.35 2.21 0 4.35.26 6.43.77s3.96 1.35 5.63 2.52c1.61 1.17 2.96 2.71 4.04 4.61 1.08 1.9 1.74 4.22 1.98 6.95H98.7c-.34-2.19-1.16-3.83-2.46-4.9-1.3-1.07-3.08-1.61-5.33-1.61-2.79 0-5.02.99-6.69 2.95-1.66 1.97-2.5 4.78-2.5 8.42v.58c0 3.84.82 6.73 2.47 8.68 1.64 1.95 3.96 2.92 6.94 2.92 2.16 0 4.01-.6 5.55-1.81 1.55-1.21 2.44-3.04 2.69-5.51h9.62c-.14 2.29-.66 4.38-1.54 6.25-.88 1.88-2.11 3.48-3.67 4.79-1.57 1.37-3.46 2.43-5.66 3.18-2.21.78-4.71 1.15-7.5 1.15zM130.89 373.5c-2.8 0-5.4-.43-7.83-1.28-2.43-.85-4.52-2.11-6.29-3.77-1.76-1.66-3.15-3.69-4.15-6.11-1-2.41-1.51-5.18-1.51-8.3v-.59c0-3.07.52-5.84 1.55-8.3 1.03-2.46 2.45-4.57 4.26-6.33 1.81-1.71 3.92-3.01 6.32-3.91 2.4-.9 4.97-1.35 7.72-1.35 2.21 0 4.35.26 6.43.77s3.96 1.35 5.63 2.52c1.61 1.17 2.96 2.71 4.04 4.61 1.08 1.9 1.74 4.22 1.98 6.95h-10.07c-.34-2.19-1.16-3.83-2.46-4.9-1.3-1.07-3.08-1.61-5.33-1.61-2.79 0-5.02.99-6.69 2.95-1.66 1.97-2.5 4.78-2.5 8.42v.58c0 3.84.82 6.73 2.47 8.68 1.64 1.95 3.96 2.92 6.94 2.92 2.16 0 4.01-.6 5.55-1.81 1.55-1.21 2.44-3.04 2.69-5.51h9.62c-.14 2.29-.66 4.38-1.54 6.25-.88 1.88-2.11 3.48-3.67 4.79-1.57 1.37-3.46 2.43-5.66 3.18-2.2.78-4.7 1.15-7.5 1.15zM171.46 373.5c-2.89 0-5.56-.44-8.01-1.32-2.45-.88-4.56-2.17-6.32-3.88-1.81-1.66-3.22-3.68-4.23-6.07-1-2.39-1.51-5.12-1.51-8.19v-.59c0-3.02.5-5.75 1.51-8.19 1-2.44 2.41-4.54 4.23-6.29 1.76-1.71 3.85-3.03 6.25-3.99 2.4-.95 4.99-1.43 7.79-1.43 2.5 0 4.88.38 7.13 1.13 2.25.76 4.24 1.92 5.95 3.48 1.72 1.56 3.09 3.57 4.12 6.03 1.03 2.46 1.54 5.4 1.54 8.81v2.93H162.2c.15 3.22 1.04 5.69 2.68 7.43 1.64 1.73 3.94 2.59 6.87 2.59 2.49 0 4.37-.49 5.62-1.46s2.05-2.27 2.39-3.88h10.07c-.64 4.15-2.54 7.33-5.7 9.55-3.15 2.24-7.38 3.34-12.67 3.34zm8.09-24.06c-.2-2.93-1-5.08-2.43-6.47-1.42-1.39-3.41-2.08-5.95-2.08-2.4 0-4.38.74-5.92 2.23s-2.51 3.6-2.9 6.33h17.2zM196.16 334.45h10.65v6.07c.98-1.9 2.5-3.53 4.56-4.9 2.06-1.36 4.71-2.05 7.94-2.05 1.91 0 3.65.29 5.22.88s2.94 1.46 4.12 2.63c1.13 1.22 2.01 2.77 2.64 4.65.64 1.88.96 4.08.96 6.62v24.36h-10.66v-22.82c0-2.63-.54-4.57-1.62-5.81-1.08-1.24-2.79-1.87-5.14-1.87-2.3 0-4.21.7-5.74 2.08-1.52 1.39-2.28 3.5-2.28 6.33v22.09h-10.65v-38.26zM253.19 373.43c-4.07 0-7.15-1.01-9.26-3.03-2.11-2.02-3.16-5.04-3.16-9.03v-19.38h-4.92v-7.53h4.92v-8.26h10.59v8.26h8.08v7.53h-8.08v18.43c0 1.51.36 2.64 1.06 3.4.71.76 1.78 1.13 3.2 1.13.78 0 1.51-.06 2.17-.18.66-.12 1.29-.3 1.87-.55v8.19c-.73.24-1.64.48-2.72.7-1.08.21-2.33.32-3.75.32zM275.98 373.5c-1.86 0-3.59-.28-5.18-.84a11.02 11.02 0 01-4.15-2.6c-1.18-1.17-2.09-2.67-2.76-4.5-.66-1.83-.99-3.99-.99-6.47v-24.65h10.59v23.18c0 2.54.56 4.45 1.69 5.74s2.79 1.94 5 1.94c2.25 0 4.15-.7 5.69-2.08 1.55-1.39 2.32-3.5 2.32-6.33v-22.45h10.58v38.25h-10.58v-6c-.98 1.95-2.46 3.57-4.45 4.86-1.99 1.31-4.58 1.95-7.76 1.95zM305.96 334.45h10.65v7.31c1.22-2.58 2.82-4.53 4.78-5.85s4.51-2 7.65-2.05v9.87c-3.97-.05-7.03.66-9.19 2.12-2.16 1.46-3.24 4.02-3.24 7.68v19.16h-10.65v-38.24zM350.79 373.5c-2.89 0-5.56-.44-8.01-1.32-2.45-.88-4.56-2.17-6.32-3.88-1.81-1.66-3.22-3.68-4.23-6.07-1-2.39-1.51-5.12-1.51-8.19v-.59c0-3.02.5-5.75 1.51-8.19 1-2.44 2.41-4.54 4.23-6.29 1.76-1.71 3.85-3.03 6.25-3.99 2.4-.95 4.99-1.43 7.79-1.43 2.5 0 4.88.38 7.13 1.13 2.25.76 4.24 1.92 5.95 3.48 1.72 1.56 3.09 3.57 4.12 6.03 1.03 2.46 1.54 5.4 1.54 8.81v2.93h-27.71c.15 3.22 1.04 5.69 2.68 7.43 1.64 1.73 3.94 2.59 6.87 2.59 2.49 0 4.37-.49 5.62-1.46s2.05-2.27 2.39-3.88h10.07c-.64 4.15-2.54 7.33-5.7 9.55-3.15 2.24-7.38 3.34-12.67 3.34zm8.09-24.06c-.2-2.93-1-5.08-2.43-6.47-1.42-1.39-3.41-2.08-5.95-2.08-2.4 0-4.38.74-5.92 2.23s-2.51 3.6-2.9 6.33h17.2z" }),
                undefined("g", { "aria-hidden": "true" },
                    undefined("path", { "aria-hidden": "true", className: "prefix__st13", d: "M393.89 323.45h12.68c4.11 0 7.69.6 10.74 1.8 3.04 1.2 5.57 2.85 7.58 4.94 2.01 2.09 3.51 4.56 4.5 7.41.98 2.85 1.48 5.94 1.48 9.28v.6c0 3.29-.48 6.39-1.44 9.28-.96 2.89-2.45 5.41-4.46 7.54-2.01 2.14-4.55 3.82-7.62 5.04-3.06 1.22-6.7 1.84-10.9 1.84H393.9v-47.73zm12.42 43.06c3.09 0 5.78-.45 8.08-1.34 2.3-.89 4.23-2.16 5.77-3.81 1.54-1.65 2.71-3.64 3.49-5.99.78-2.34 1.17-4.98 1.17-7.93v-.54c0-2.76-.35-5.29-1.04-7.59-.69-2.3-1.79-4.28-3.29-5.95s-3.42-2.96-5.77-3.88c-2.35-.91-5.18-1.37-8.49-1.37h-6.51v38.39h6.59zM443.81 328.99c-1.03 0-1.9-.36-2.62-1.07-.72-.71-1.07-1.58-1.07-2.6s.36-1.89 1.07-2.6c.71-.71 1.59-1.07 2.62-1.07s1.9.36 2.62 1.07c.71.71 1.07 1.58 1.07 2.6s-.36 1.89-1.07 2.6c-.72.72-1.59 1.07-2.62 1.07zm-2.68 7.28h5.57v34.92h-5.57v-34.92zM472.93 383.94c-2.59 0-4.84-.29-6.74-.87s-3.49-1.35-4.76-2.3c-1.27-.96-2.27-2.09-2.99-3.41-.72-1.31-1.19-2.7-1.41-4.17h5.7c.81 4.05 4.18 6.08 10.13 6.08 3.44 0 6.18-.86 8.22-2.57 2.04-1.71 3.05-4.44 3.05-8.18v-5.07c-.49.85-1.15 1.67-1.98 2.47s-1.77 1.5-2.82 2.1c-1.05.6-2.18 1.09-3.39 1.47-1.21.38-2.44.57-3.69.57-2.28 0-4.41-.41-6.37-1.24-1.97-.82-3.66-1.97-5.07-3.44s-2.52-3.21-3.32-5.24c-.8-2.02-1.21-4.24-1.21-6.64v-.47c0-2.36.4-4.6 1.21-6.71.8-2.11 1.92-3.96 3.35-5.54 1.43-1.58 3.15-2.83 5.17-3.74 2.01-.91 4.23-1.37 6.64-1.37 2.95 0 5.34.61 7.18 1.84 1.83 1.22 3.26 2.68 4.29 4.37v-5.61h5.57v32.58c0 2.54-.43 4.75-1.28 6.64-.85 1.89-2.01 3.46-3.49 4.71-1.48 1.25-3.23 2.18-5.27 2.8-2.01.63-4.26.94-6.72.94zm-.07-18.56c1.61 0 3.12-.28 4.53-.83a10.42 10.42 0 003.66-2.39c1.03-1.04 1.83-2.32 2.42-3.85.58-1.53.87-3.26.87-5.21v-.46c0-3.9-1-6.92-2.99-9.06s-4.71-3.22-8.15-3.22c-1.74 0-3.31.31-4.7.93-1.39.62-2.55 1.47-3.49 2.56-.94 1.08-1.67 2.39-2.18 3.92-.51 1.53-.77 3.2-.77 5.01v.53c0 1.9.29 3.6.87 5.08.58 1.48 1.35 2.74 2.31 3.78a9.66 9.66 0 003.42 2.39c1.33.54 2.73.82 4.2.82zM504.6 328.99c-1.03 0-1.9-.36-2.62-1.07-.72-.71-1.07-1.58-1.07-2.6s.36-1.89 1.07-2.6c.71-.71 1.59-1.07 2.62-1.07s1.9.36 2.62 1.07c.71.71 1.07 1.58 1.07 2.6s-.36 1.89-1.07 2.6c-.72.72-1.6 1.07-2.62 1.07zm-2.69 7.28h5.57v34.92h-5.57v-34.92zM530.36 371.65c-3.22 0-5.6-.85-7.14-2.54s-2.31-3.92-2.31-6.68v-21.5h-5.03v-4.67h5.03v-7.95h5.57v7.95h8.19v4.67h-8.19v20.96c0 3.38 1.45 5.07 4.36 5.07.89 0 1.68-.07 2.35-.2.67-.13 1.32-.31 1.95-.53v4.67c-.58.22-1.23.4-1.95.53-.73.16-1.67.22-2.83.22zM553.44 371.79c-1.61 0-3.13-.2-4.56-.6-1.43-.4-2.67-1.02-3.72-1.87s-1.88-1.91-2.48-3.21c-.6-1.29-.91-2.83-.91-4.61 0-2 .49-3.69 1.48-5.07.98-1.38 2.29-2.49 3.92-3.34 1.63-.84 3.51-1.46 5.64-1.84a37 37 0 016.54-.57h5.03v-2.52c0-2.79-.58-4.79-1.75-6-1.16-1.22-3.09-1.83-5.77-1.83-4.83 0-7.51 2.07-8.05 6.21h-5.57c.18-2 .68-3.69 1.51-5.07.83-1.38 1.88-2.5 3.15-3.37s2.71-1.49 4.29-1.87c1.59-.38 3.23-.57 4.93-.57 1.65 0 3.26.19 4.83.57 1.57.38 2.93 1.05 4.09 2s2.1 2.24 2.82 3.84 1.07 3.63 1.07 6.08v23.03h-5.57v-4.41c-1.3 1.65-2.8 2.89-4.5 3.74-1.68.85-3.83 1.28-6.42 1.28zm.53-4.41c1.48 0 2.85-.19 4.13-.57 1.27-.38 2.37-.92 3.29-1.64.92-.71 1.64-1.59 2.18-2.64.54-1.04.81-2.24.81-3.57v-4.34h-4.83c-1.75 0-3.37.12-4.86.37-1.5.25-2.8.63-3.89 1.17-1.1.53-1.95 1.24-2.55 2.1s-.91 1.95-.91 3.24c0 1.83.49 3.26 1.48 4.31.97 1.05 2.69 1.57 5.15 1.57zM581.82 319.58h5.63v51.61h-5.63v-51.61z" })),
                undefined("g", { "aria-hidden": "true" },
                    undefined("path", { "aria-hidden": "true", className: "prefix__st12", d: "M221.13 285.5H587.5v3H221.13zM20.58 274.99h8.55c3.08 0 5.32.65 6.72 1.95 1.4 1.3 2.1 3.1 2.1 5.4v.12c0 2.24-.72 3.97-2.16 5.18-1.44 1.21-3.56 1.81-6.36 1.81h-2.07v6.99h-6.78v-21.45zm8.19 9.9c1.82 0 2.73-.8 2.73-2.4v-.12c0-.84-.23-1.43-.68-1.79-.45-.35-1.12-.52-2.02-.52h-1.44v4.83h1.41zM51.87 274.99h8.79l6.72 21.45h-7.2l-.99-3.57h-6.78l-.96 3.57h-6.33l6.75-21.45zm1.83 13.26h4.23l-2.1-7.77-2.13 7.77zM77.4 274.99h8.76c2.98 0 5.22.58 6.72 1.75s2.25 2.91 2.25 5.21v.12c0 1.48-.34 2.67-1.02 3.55-.68.89-1.55 1.58-2.61 2.06l4.89 8.76h-7.14l-3.99-7.35h-1.08v7.35H77.4v-21.45zm8.37 9.72c1.86 0 2.79-.78 2.79-2.34v-.12c0-.78-.23-1.33-.69-1.67-.46-.33-1.15-.49-2.07-.49h-1.62v4.62h1.59zM109.95 280.21h-5.4v-5.22h17.67v5.22h-5.43v16.23h-6.84v-16.23zM156.12 296.83c-1.76 0-3.34-.26-4.74-.79-1.4-.53-2.59-1.28-3.57-2.25s-1.73-2.13-2.25-3.48-.78-2.83-.78-4.46v-.24c0-1.66.29-3.17.88-4.51.59-1.35 1.4-2.5 2.43-3.45 1.03-.95 2.24-1.68 3.64-2.21 1.4-.52 2.9-.78 4.5-.78 1.64 0 3.17.25 4.58.74s2.63 1.2 3.66 2.12c1.03.92 1.83 2.04 2.42 3.38s.87 2.84.87 4.54v.24c0 1.68-.28 3.21-.83 4.57-.55 1.37-1.33 2.54-2.36 3.51-1.02.97-2.25 1.72-3.67 2.26s-3.02.81-4.78.81zm.18-5.34c1.34 0 2.4-.5 3.19-1.48.79-.99 1.19-2.39 1.19-4.19v-.24c0-1.82-.4-3.21-1.2-4.17s-1.88-1.44-3.24-1.44c-1.32 0-2.38.47-3.17 1.42s-1.18 2.34-1.18 4.18v.24c0 1.84.39 3.25 1.18 4.21.79.98 1.87 1.47 3.23 1.47zM178.32 274.99h14.85v5.22h-8.04v4.02h6.48v5.01h-6.48v7.2h-6.81v-21.45z" })),
                undefined("g", { "aria-hidden": "true" },
                    undefined("path", { "aria-hidden": "true", className: "prefix__st9", d: "M30.24 203.75h-9.7v-6.62h26.88v6.62h-9.7v27.36h-7.49v-27.36zM157.54 215.32c-.35-.51-.85-.94-1.49-1.27-.64-.34-1.33-.5-2.06-.5-1.82 0-3.24.54-4.25 1.63s-1.51 2.51-1.51 4.27.5 3.18 1.51 4.27c1.01 1.09 2.42 1.63 4.25 1.63.8 0 1.49-.18 2.06-.53.58-.35 1.07-.77 1.49-1.25l4.75 4.99c-1.12 1.15-2.44 1.96-3.96 2.42s-2.97.7-4.34.7c-1.79 0-3.48-.29-5.06-.86s-2.96-1.4-4.13-2.47-2.09-2.36-2.76-3.86c-.67-1.5-1.01-3.18-1.01-5.04 0-1.86.34-3.54 1.01-5.04.67-1.5 1.59-2.79 2.76-3.86 1.17-1.07 2.54-1.9 4.13-2.47s3.27-.86 5.06-.86c1.38 0 2.82.23 4.34.7s2.84 1.27 3.96 2.42l-4.75 4.98zM206.69 194.82v16.13h.1c.16-.45.43-.9.82-1.34.38-.45.85-.85 1.39-1.2.54-.35 1.18-.64 1.92-.86.74-.22 1.54-.34 2.4-.34 1.82 0 3.3.28 4.42.84 1.12.56 1.99 1.34 2.62 2.33.62.99 1.05 2.16 1.27 3.5s.34 2.8.34 4.37v12.86h-7.2v-11.42c0-.67-.02-1.37-.07-2.09-.05-.72-.19-1.38-.43-1.99-.24-.61-.61-1.1-1.1-1.49-.5-.38-1.21-.58-2.14-.58-.93 0-1.68.17-2.26.5-.58.34-1.02.79-1.32 1.34-.3.56-.5 1.19-.6 1.9-.1.71-.14 1.44-.14 2.21v11.62h-7.2v-36.29h7.18zM261.65 207.78h6.91v3.17h.1c.22-.45.54-.9.96-1.34.42-.45.91-.85 1.49-1.2s1.23-.64 1.97-.86c.74-.22 1.54-.34 2.4-.34 1.82 0 3.3.28 4.42.84 1.12.56 1.99 1.34 2.62 2.33.62.99 1.05 2.16 1.27 3.5s.34 2.8.34 4.37v12.86h-7.2v-11.42c0-.67-.02-1.37-.07-2.09-.05-.72-.19-1.38-.43-1.99-.24-.61-.61-1.1-1.1-1.49-.5-.38-1.21-.58-2.14-.58-.93 0-1.68.17-2.26.5-.58.34-1.02.79-1.32 1.34-.3.56-.5 1.19-.6 1.9-.1.71-.14 1.44-.14 2.21v11.62h-7.2v-23.33zM322.94 219.45c0-1.86.34-3.54 1.01-5.04.67-1.5 1.59-2.79 2.76-3.86 1.17-1.07 2.54-1.9 4.13-2.47s3.27-.86 5.06-.86 3.48.29 5.06.86 2.96 1.4 4.13 2.47a11.55 11.55 0 012.76 3.86c.67 1.5 1.01 3.18 1.01 5.04 0 1.86-.34 3.54-1.01 5.04a11.55 11.55 0 01-2.76 3.86c-1.17 1.07-2.54 1.9-4.13 2.47s-3.27.86-5.06.86-3.48-.29-5.06-.86-2.96-1.4-4.13-2.47a11.55 11.55 0 01-2.76-3.86c-.67-1.51-1.01-3.19-1.01-5.04zm7.2 0c0 1.76.5 3.18 1.51 4.27 1.01 1.09 2.42 1.63 4.25 1.63s3.24-.54 4.25-1.63c1.01-1.09 1.51-2.51 1.51-4.27s-.5-3.18-1.51-4.27-2.42-1.63-4.25-1.63-3.24.54-4.25 1.63-1.51 2.51-1.51 4.27zM387.79 194.82h7.2v36.29h-7.2v-36.29zM433.92 219.45c0-1.86.34-3.54 1.01-5.04.67-1.5 1.59-2.79 2.76-3.86 1.17-1.07 2.54-1.9 4.13-2.47s3.27-.86 5.06-.86c1.79 0 3.48.29 5.06.86s2.96 1.4 4.13 2.47a11.55 11.55 0 012.76 3.86c.67 1.5 1.01 3.18 1.01 5.04 0 1.86-.34 3.54-1.01 5.04-.67 1.5-1.59 2.79-2.76 3.86s-2.54 1.9-4.13 2.47-3.27.86-5.06.86c-1.79 0-3.48-.29-5.06-.86s-2.96-1.4-4.13-2.47a11.55 11.55 0 01-2.76-3.86c-.67-1.51-1.01-3.19-1.01-5.04zm7.2 0c0 1.76.5 3.18 1.51 4.27 1.01 1.09 2.42 1.63 4.25 1.63 1.82 0 3.24-.54 4.25-1.63 1.01-1.09 1.51-2.51 1.51-4.27s-.5-3.18-1.51-4.27c-1.01-1.09-2.42-1.63-4.25-1.63-1.82 0-3.24.54-4.25 1.63-1.01 1.08-1.51 2.51-1.51 4.27zM576.96 234.9a50.61 50.61 0 01-1.39 3.31c-.45.96-1.02 1.77-1.7 2.42-.69.66-1.56 1.15-2.62 1.49-1.06.34-2.45.5-4.18.5-1.86 0-3.65-.29-5.38-.86l.96-5.9c1.09.48 2.21.72 3.36.72.8 0 1.46-.09 1.97-.26.51-.18.94-.43 1.27-.77.34-.34.62-.74.84-1.22.22-.48.46-1.04.72-1.68l.53-1.34-10.22-23.52h7.78l6 15.41h.1l5.14-15.41h7.39l-10.57 27.11zM497.81 207.78h6.62v3.07h.1c.29-.42.67-.84 1.15-1.27.48-.43 1.06-.82 1.73-1.18.67-.35 1.43-.64 2.28-.86.85-.22 1.78-.34 2.81-.34 1.66 0 3.15.34 4.46 1.03s2.42 1.59 3.34 2.71c.91 1.12 1.62 2.42 2.11 3.89.5 1.47.74 2.98.74 4.51 0 1.76-.27 3.38-.82 4.85-.54 1.47-1.32 2.74-2.33 3.82a10.62 10.62 0 01-3.62 2.5c-1.41.59-2.98.89-4.7.89-1.09 0-2.25-.23-3.48-.7-1.23-.46-2.26-1.26-3.1-2.38h-.1v2.26c0 1.66.52 3.03 1.56 4.1 1.04 1.07 2.66 1.61 4.87 1.61 1.47 0 2.82-.27 4.06-.82 1.23-.54 2.41-1.28 3.53-2.21l3.98 5.95c-1.7 1.34-3.55 2.25-5.57 2.71-2.02.46-4.06.7-6.14.7-4.54 0-7.93-1.14-10.15-3.43-2.22-2.29-3.34-5.64-3.34-10.06v-21.35zm17.71 9.34c-.29-.69-.7-1.3-1.22-1.82-.53-.53-1.13-.95-1.82-1.27s-1.45-.48-2.28-.48c-.8 0-1.55.16-2.26.48s-1.32.74-1.85 1.27a5.55 5.55 0 00-1.22 1.82c-.29.69-.43 1.42-.43 2.18 0 .77.14 1.5.43 2.18.29.69.7 1.3 1.22 1.82.53.53 1.14.95 1.85 1.27s1.46.48 2.26.48c.83 0 1.59-.16 2.28-.48s1.3-.74 1.82-1.27c.53-.53.94-1.14 1.22-1.82.29-.69.43-1.42.43-2.18 0-.76-.14-1.49-.43-2.18zM85.01 223.38c.61.83 1.32 1.51 2.14 2.04.82.53 1.82.79 3 .79 1.41 0 2.59-.41 3.55-1.22s1.58-1.91 1.87-3.29h-16.7v-2.26c0-1.86.26-3.54.77-5.04s1.24-2.79 2.18-3.86c.94-1.07 2.1-1.9 3.46-2.47 1.36-.58 2.87-.86 4.54-.86 1.79 0 3.48.29 5.06.86s2.96 1.4 4.13 2.47a11.55 11.55 0 012.76 3.86c.67 1.5 1.01 3.18 1.01 5.04 0 1.86-.34 3.54-1.01 5.04-.67 1.5-1.59 2.79-2.76 3.86s-2.54 1.9-4.13 2.47-3.27.86-5.06.86c-1.89 0-3.71-.4-5.47-1.2s-3.22-1.94-4.37-3.41l5.03-3.68zm10.56-6.57c-.03-.58-.17-1.13-.41-1.66a4.32 4.32 0 00-1.01-1.39c-.43-.4-.95-.73-1.56-.98-.61-.26-1.31-.38-2.11-.38-1.31 0-2.38.43-3.22 1.3-.83.86-1.23 1.9-1.2 3.12h9.51z" }))))));
}

var colors$3 = require("../colors.scss");
var imgRatio$3 = 1;
var defaultSize$3 = {
    width: "10px",
    height: "10px",
};
function CorporateLogo(_a) {
    var width = _a.width, height = _a.height, text = _a.text, white = _a.white, restProps = __rest(_a, ["width", "height", "text", "white"]);
    var svgWidth = defaultSize$3.width;
    var svgHeight = defaultSize$3.height;
    if (width) {
        svgWidth = width + "px";
        svgHeight = width / imgRatio$3 + "px";
    }
    if (height) {
        svgHeight = height + "px";
        svgWidth = height * imgRatio$3 + "px";
    }
    var whiteColor = colors$3.lightest;
    return white ? (undefined("div", null,
        undefined("svg", __assign({ role: "link", preserveAspectRatio: "xMidYMid meet", width: svgWidth, height: svgHeight, id: "prefix__Logo1_white", x: 0, y: 0, viewBox: "0 0 608.03 392.81", xmlSpace: "preserve" }, restProps),
            undefined("style", null, ".prefix__st1{fill:" + whiteColor + "}"),
            undefined("path", { "aria-hidden": "true", className: "prefix__st1", d: "M584.73 28.21c3.93 3.93 3.93 10.3 0 14.23-3.93 3.93-10.3 3.93-14.23 0s-3.93-10.3 0-14.23 10.3-3.93 14.23 0zM544.61 68.15c3.93 3.93 3.93 10.3 0 14.23-3.93 3.93-10.3 3.93-14.23 0-3.93-3.93-3.93-10.3 0-14.23 3.92-3.93 10.29-3.93 14.23 0z" }),
            undefined("path", { "aria-hidden": "true", className: "prefix__st1", d: "M442.25 25.09H309.38v30.56h51.4v105.61h30.07V55.65h51.4z" }),
            undefined("path", { "aria-hidden": "true", className: "prefix__st1", d: "M244.88 132.87c-21.74 0-39.43-17.73-39.43-39.51 0-21.79 17.69-39.51 39.43-39.51 9.33 0 17.91 3.27 24.67 8.73l20.33-20.33c-12-10.63-27.76-17.1-45-17.1-37.54 0-68.07 30.6-68.07 68.21 0 37.61 30.54 68.21 68.07 68.21 17.14 0 32.8-6.39 44.78-16.9l-20.34-20.34c-6.73 5.34-15.22 8.54-24.44 8.54zM88.91 77.49c-8.81 0-15.95 7.17-15.95 16.02s7.14 16.02 15.95 16.02c8.81 0 15.95-7.17 15.95-16.02.01-8.85-7.14-16.02-15.95-16.02zm.01 28.27c-6.74 0-12.19-5.48-12.2-12.24 0-6.76 5.45-12.25 12.19-12.25 6.73 0 12.19 5.48 12.19 12.24 0 6.77-5.45 12.25-12.18 12.25z" }),
            undefined("path", { "aria-hidden": "true", className: "prefix__st1", d: "M127.81 93.36c0 21.79-17.69 39.51-39.43 39.51s-39.43-17.73-39.43-39.51c0-21.79 17.69-39.51 39.43-39.51s39.43 17.72 39.43 39.51zM88.38 25.15c-37.54 0-68.07 30.6-68.07 68.21 0 37.61 30.54 68.21 68.07 68.21 37.53 0 68.07-30.6 68.07-68.21.01-37.61-30.53-68.21-68.07-68.21z" }),
            undefined("path", { "aria-hidden": "true", className: "prefix__st1", d: "M89.02 85.6c4.36 0 7.9 3.54 7.9 7.91s-3.54 7.92-7.9 7.91c-4.36 0-7.9-3.54-7.9-7.91s3.54-7.92 7.9-7.91z" }),
            undefined("path", { "aria-hidden": "true", d: "M519.57 25.15c-37.54 0-68.07 30.6-68.07 68.21 0 37.61 30.54 68.21 68.07 68.21 37.54 0 68.08-30.6 68.08-68.21 0-37.61-30.54-68.21-68.08-68.21zm0 107.72c-21.74 0-39.43-17.73-39.43-39.51 0-21.79 17.69-39.51 39.43-39.51S559 71.58 559 93.36c0 21.78-17.69 39.51-39.43 39.51z", fillRule: "evenodd", clipRule: "evenodd", className: "prefix__st1" }),
            undefined("path", { "aria-hidden": "true", className: "prefix__st1", d: "M519.57 25.15c-37.54 0-68.07 30.6-68.07 68.21 0 37.61 30.54 68.21 68.07 68.21 37.54 0 68.08-30.6 68.08-68.21 0-37.61-30.54-68.21-68.08-68.21zm0 107.72c-21.74 0-39.43-17.73-39.43-39.51 0-21.79 17.69-39.51 39.43-39.51S559 71.58 559 93.36c0 21.78-17.69 39.51-39.43 39.51z" }),
            undefined("path", { "aria-hidden": "true", className: "prefix__st1", d: "M221.13 285.5H587.5v3H221.13z" }),
            undefined("g", { "aria-hidden": "true" },
                undefined("path", { "aria-hidden": "true", className: "prefix__st1", d: "M37.7 320.41h15.51l17.05 52.29H57.84l-3.6-11.63H35.2l-3.6 11.63H20.43l17.27-52.29zm.07 32.25h13.89l-6.91-22.6-6.98 22.6zM90.62 373.5c-2.8 0-5.4-.43-7.83-1.28-2.43-.85-4.52-2.11-6.29-3.77-1.76-1.66-3.15-3.69-4.15-6.11-1-2.41-1.51-5.18-1.51-8.3v-.59c0-3.07.52-5.84 1.55-8.3 1.03-2.46 2.45-4.57 4.26-6.33 1.81-1.71 3.92-3.01 6.32-3.91 2.4-.9 4.97-1.35 7.72-1.35 2.21 0 4.35.26 6.43.77s3.96 1.35 5.63 2.52c1.61 1.17 2.96 2.71 4.04 4.61 1.08 1.9 1.74 4.22 1.98 6.95H98.7c-.34-2.19-1.16-3.83-2.46-4.9-1.3-1.07-3.08-1.61-5.33-1.61-2.79 0-5.02.99-6.69 2.95-1.66 1.97-2.5 4.78-2.5 8.42v.58c0 3.84.82 6.73 2.47 8.68 1.64 1.95 3.96 2.92 6.94 2.92 2.16 0 4.01-.6 5.55-1.81 1.55-1.21 2.44-3.04 2.69-5.51h9.62c-.14 2.29-.66 4.38-1.54 6.25-.88 1.88-2.11 3.48-3.67 4.79-1.57 1.37-3.46 2.43-5.66 3.18-2.21.78-4.71 1.15-7.5 1.15zM130.89 373.5c-2.8 0-5.4-.43-7.83-1.28-2.43-.85-4.52-2.11-6.29-3.77-1.76-1.66-3.15-3.69-4.15-6.11-1-2.41-1.51-5.18-1.51-8.3v-.59c0-3.07.52-5.84 1.55-8.3 1.03-2.46 2.45-4.57 4.26-6.33 1.81-1.71 3.92-3.01 6.32-3.91 2.4-.9 4.97-1.35 7.72-1.35 2.21 0 4.35.26 6.43.77s3.96 1.35 5.63 2.52c1.61 1.17 2.96 2.71 4.04 4.61 1.08 1.9 1.74 4.22 1.98 6.95h-10.07c-.34-2.19-1.16-3.83-2.46-4.9-1.3-1.07-3.08-1.61-5.33-1.61-2.79 0-5.02.99-6.69 2.95-1.66 1.97-2.5 4.78-2.5 8.42v.58c0 3.84.82 6.73 2.47 8.68 1.64 1.95 3.96 2.92 6.94 2.92 2.16 0 4.01-.6 5.55-1.81 1.55-1.21 2.44-3.04 2.69-5.51h9.62c-.14 2.29-.66 4.38-1.54 6.25-.88 1.88-2.11 3.48-3.67 4.79-1.57 1.37-3.46 2.43-5.66 3.18-2.2.78-4.7 1.15-7.5 1.15zM171.46 373.5c-2.89 0-5.56-.44-8.01-1.32-2.45-.88-4.56-2.17-6.32-3.88-1.81-1.66-3.22-3.68-4.23-6.07-1-2.39-1.51-5.12-1.51-8.19v-.59c0-3.02.5-5.75 1.51-8.19 1-2.44 2.41-4.54 4.23-6.29 1.76-1.71 3.85-3.03 6.25-3.99 2.4-.95 4.99-1.43 7.79-1.43 2.5 0 4.88.38 7.13 1.13 2.25.76 4.24 1.92 5.95 3.48 1.72 1.56 3.09 3.57 4.12 6.03 1.03 2.46 1.54 5.4 1.54 8.81v2.93H162.2c.15 3.22 1.04 5.69 2.68 7.43 1.64 1.73 3.94 2.59 6.87 2.59 2.49 0 4.37-.49 5.62-1.46s2.05-2.27 2.39-3.88h10.07c-.64 4.15-2.54 7.33-5.7 9.55-3.15 2.24-7.38 3.34-12.67 3.34zm8.09-24.06c-.2-2.93-1-5.08-2.43-6.47-1.42-1.39-3.41-2.08-5.95-2.08-2.4 0-4.38.74-5.92 2.23s-2.51 3.6-2.9 6.33h17.2zM196.16 334.45h10.65v6.07c.98-1.9 2.5-3.53 4.56-4.9 2.06-1.36 4.71-2.05 7.94-2.05 1.91 0 3.65.29 5.22.88s2.94 1.46 4.12 2.63c1.13 1.22 2.01 2.77 2.64 4.65.64 1.88.96 4.08.96 6.62v24.36h-10.66v-22.82c0-2.63-.54-4.57-1.62-5.81-1.08-1.24-2.79-1.87-5.14-1.87-2.3 0-4.21.7-5.74 2.08-1.52 1.39-2.28 3.5-2.28 6.33v22.09h-10.65v-38.26zM253.19 373.43c-4.07 0-7.15-1.01-9.26-3.03-2.11-2.02-3.16-5.04-3.16-9.03v-19.38h-4.92v-7.53h4.92v-8.26h10.59v8.26h8.08v7.53h-8.08v18.43c0 1.51.36 2.64 1.06 3.4.71.76 1.78 1.13 3.2 1.13.78 0 1.51-.06 2.17-.18.66-.12 1.29-.3 1.87-.55v8.19c-.73.24-1.64.48-2.72.7-1.08.21-2.33.32-3.75.32zM275.98 373.5c-1.86 0-3.59-.28-5.18-.84a11.02 11.02 0 01-4.15-2.6c-1.18-1.17-2.09-2.67-2.76-4.5-.66-1.83-.99-3.99-.99-6.47v-24.65h10.59v23.18c0 2.54.56 4.45 1.69 5.74s2.79 1.94 5 1.94c2.25 0 4.15-.7 5.69-2.08 1.55-1.39 2.32-3.5 2.32-6.33v-22.45h10.58v38.25h-10.58v-6c-.98 1.95-2.46 3.57-4.45 4.86-1.99 1.31-4.58 1.95-7.76 1.95zM305.96 334.45h10.65v7.31c1.22-2.58 2.82-4.53 4.78-5.85s4.51-2 7.65-2.05v9.87c-3.97-.05-7.03.66-9.19 2.12-2.16 1.46-3.24 4.02-3.24 7.68v19.16h-10.65v-38.24zM350.79 373.5c-2.89 0-5.56-.44-8.01-1.32-2.45-.88-4.56-2.17-6.32-3.88-1.81-1.66-3.22-3.68-4.23-6.07-1-2.39-1.51-5.12-1.51-8.19v-.59c0-3.02.5-5.75 1.51-8.19 1-2.44 2.41-4.54 4.23-6.29 1.76-1.71 3.85-3.03 6.25-3.99 2.4-.95 4.99-1.43 7.79-1.43 2.5 0 4.88.38 7.13 1.13 2.25.76 4.24 1.92 5.95 3.48 1.72 1.56 3.09 3.57 4.12 6.03 1.03 2.46 1.54 5.4 1.54 8.81v2.93h-27.71c.15 3.22 1.04 5.69 2.68 7.43 1.64 1.73 3.94 2.59 6.87 2.59 2.49 0 4.37-.49 5.62-1.46s2.05-2.27 2.39-3.88h10.07c-.64 4.15-2.54 7.33-5.7 9.55-3.15 2.24-7.38 3.34-12.67 3.34zm8.09-24.06c-.2-2.93-1-5.08-2.43-6.47-1.42-1.39-3.41-2.08-5.95-2.08-2.4 0-4.38.74-5.92 2.23s-2.51 3.6-2.9 6.33h17.2z" }),
                undefined("g", { "aria-hidden": "true" },
                    undefined("path", { "aria-hidden": "true", className: "prefix__st1", d: "M393.89 323.45h12.68c4.11 0 7.69.6 10.74 1.8 3.04 1.2 5.57 2.85 7.58 4.94 2.01 2.09 3.51 4.56 4.5 7.41.98 2.85 1.48 5.94 1.48 9.28v.6c0 3.29-.48 6.39-1.44 9.28-.96 2.89-2.45 5.41-4.46 7.54-2.01 2.14-4.55 3.82-7.62 5.04-3.06 1.22-6.7 1.84-10.9 1.84H393.9v-47.73zm12.42 43.06c3.09 0 5.78-.45 8.08-1.34 2.3-.89 4.23-2.16 5.77-3.81 1.54-1.65 2.71-3.64 3.49-5.99.78-2.34 1.17-4.98 1.17-7.93v-.54c0-2.76-.35-5.29-1.04-7.59-.69-2.3-1.79-4.28-3.29-5.95s-3.42-2.96-5.77-3.88c-2.35-.91-5.18-1.37-8.49-1.37h-6.51v38.39h6.59zM443.81 328.99c-1.03 0-1.9-.36-2.62-1.07-.72-.71-1.07-1.58-1.07-2.6s.36-1.89 1.07-2.6c.71-.71 1.59-1.07 2.62-1.07s1.9.36 2.62 1.07c.71.71 1.07 1.58 1.07 2.6s-.36 1.89-1.07 2.6c-.72.72-1.59 1.07-2.62 1.07zm-2.68 7.28h5.57v34.92h-5.57v-34.92zM472.93 383.94c-2.59 0-4.84-.29-6.74-.87s-3.49-1.35-4.76-2.3c-1.27-.96-2.27-2.09-2.99-3.41-.72-1.31-1.19-2.7-1.41-4.17h5.7c.81 4.05 4.18 6.08 10.13 6.08 3.44 0 6.18-.86 8.22-2.57 2.04-1.71 3.05-4.44 3.05-8.18v-5.07c-.49.85-1.15 1.67-1.98 2.47s-1.77 1.5-2.82 2.1c-1.05.6-2.18 1.09-3.39 1.47-1.21.38-2.44.57-3.69.57-2.28 0-4.41-.41-6.37-1.24-1.97-.82-3.66-1.97-5.07-3.44s-2.52-3.21-3.32-5.24c-.8-2.02-1.21-4.24-1.21-6.64v-.47c0-2.36.4-4.6 1.21-6.71.8-2.11 1.92-3.96 3.35-5.54 1.43-1.58 3.15-2.83 5.17-3.74 2.01-.91 4.23-1.37 6.64-1.37 2.95 0 5.34.61 7.18 1.84 1.83 1.22 3.26 2.68 4.29 4.37v-5.61h5.57v32.58c0 2.54-.43 4.75-1.28 6.64-.85 1.89-2.01 3.46-3.49 4.71-1.48 1.25-3.23 2.18-5.27 2.8-2.01.63-4.26.94-6.72.94zm-.07-18.56c1.61 0 3.12-.28 4.53-.83a10.42 10.42 0 003.66-2.39c1.03-1.04 1.83-2.32 2.42-3.85.58-1.53.87-3.26.87-5.21v-.46c0-3.9-1-6.92-2.99-9.06s-4.71-3.22-8.15-3.22c-1.74 0-3.31.31-4.7.93-1.39.62-2.55 1.47-3.49 2.56-.94 1.08-1.67 2.39-2.18 3.92-.51 1.53-.77 3.2-.77 5.01v.53c0 1.9.29 3.6.87 5.08.58 1.48 1.35 2.74 2.31 3.78a9.66 9.66 0 003.42 2.39c1.33.54 2.73.82 4.2.82zM504.6 328.99c-1.03 0-1.9-.36-2.62-1.07-.72-.71-1.07-1.58-1.07-2.6s.36-1.89 1.07-2.6c.71-.71 1.59-1.07 2.62-1.07s1.9.36 2.62 1.07c.71.71 1.07 1.58 1.07 2.6s-.36 1.89-1.07 2.6c-.72.72-1.6 1.07-2.62 1.07zm-2.69 7.28h5.57v34.92h-5.57v-34.92zM530.36 371.65c-3.22 0-5.6-.85-7.14-2.54s-2.31-3.92-2.31-6.68v-21.5h-5.03v-4.67h5.03v-7.95h5.57v7.95h8.19v4.67h-8.19v20.96c0 3.38 1.45 5.07 4.36 5.07.89 0 1.68-.07 2.35-.2.67-.13 1.32-.31 1.95-.53v4.67c-.58.22-1.23.4-1.95.53-.73.16-1.67.22-2.83.22zM553.44 371.79c-1.61 0-3.13-.2-4.56-.6-1.43-.4-2.67-1.02-3.72-1.87s-1.88-1.91-2.48-3.21c-.6-1.29-.91-2.83-.91-4.61 0-2 .49-3.69 1.48-5.07.98-1.38 2.29-2.49 3.92-3.34 1.63-.84 3.51-1.46 5.64-1.84a37 37 0 016.54-.57h5.03v-2.52c0-2.79-.58-4.79-1.75-6-1.16-1.22-3.09-1.83-5.77-1.83-4.83 0-7.51 2.07-8.05 6.21h-5.57c.18-2 .68-3.69 1.51-5.07.83-1.38 1.88-2.5 3.15-3.37s2.71-1.49 4.29-1.87c1.59-.38 3.23-.57 4.93-.57 1.65 0 3.26.19 4.83.57 1.57.38 2.93 1.05 4.09 2s2.1 2.24 2.82 3.84 1.07 3.63 1.07 6.08v23.03h-5.57v-4.41c-1.3 1.65-2.8 2.89-4.5 3.74-1.68.85-3.83 1.28-6.42 1.28zm.53-4.41c1.48 0 2.85-.19 4.13-.57 1.27-.38 2.37-.92 3.29-1.64.92-.71 1.64-1.59 2.18-2.64.54-1.04.81-2.24.81-3.57v-4.34h-4.83c-1.75 0-3.37.12-4.86.37-1.5.25-2.8.63-3.89 1.17-1.1.53-1.95 1.24-2.55 2.1s-.91 1.95-.91 3.24c0 1.83.49 3.26 1.48 4.31.97 1.05 2.69 1.57 5.15 1.57zM581.82 319.58h5.63v51.61h-5.63v-51.61z" }))),
            undefined("g", { "aria-hidden": "true" },
                undefined("path", { className: "prefix__st1", d: "M30.24 203.75h-9.7v-6.62h26.88v6.62h-9.7v27.36h-7.49v-27.36zM101.67 227.08c-1.15 1.47-2.61 2.61-4.37 3.41s-3.58 1.2-5.47 1.2c-1.79 0-3.48-.29-5.06-.86s-2.96-1.4-4.13-2.47-2.09-2.36-2.76-3.86c-.67-1.5-1.01-3.18-1.01-5.04 0-1.86.34-3.54 1.01-5.04.67-1.5 1.59-2.79 2.76-3.86 1.17-1.07 2.54-1.9 4.13-2.47s3.27-.86 5.06-.86c1.66 0 3.18.29 4.54.86 1.36.58 2.51 1.4 3.46 2.47.94 1.07 1.67 2.36 2.18 3.86.51 1.5.77 3.18.77 5.04v2.26h-16.7c.29 1.38.91 2.47 1.87 3.29s2.14 1.22 3.55 1.22c1.18 0 2.18-.26 3-.79.82-.53 1.53-1.21 2.14-2.04l5.03 3.68zm-6.1-10.27c.03-1.21-.37-2.26-1.2-3.12-.83-.86-1.9-1.3-3.22-1.3-.8 0-1.5.13-2.11.38-.61.26-1.13.58-1.56.98-.43.4-.77.86-1.01 1.39-.24.53-.38 1.08-.41 1.66h9.51zM157.54 215.32c-.35-.51-.85-.94-1.49-1.27-.64-.34-1.33-.5-2.06-.5-1.82 0-3.24.54-4.25 1.63s-1.51 2.51-1.51 4.27.5 3.18 1.51 4.27c1.01 1.09 2.42 1.63 4.25 1.63.8 0 1.49-.18 2.06-.53.58-.35 1.07-.77 1.49-1.25l4.75 4.99c-1.12 1.15-2.44 1.96-3.96 2.42s-2.97.7-4.34.7c-1.79 0-3.48-.29-5.06-.86s-2.96-1.4-4.13-2.47-2.09-2.36-2.76-3.86c-.67-1.5-1.01-3.18-1.01-5.04 0-1.86.34-3.54 1.01-5.04.67-1.5 1.59-2.79 2.76-3.86 1.17-1.07 2.54-1.9 4.13-2.47s3.27-.86 5.06-.86c1.38 0 2.82.23 4.34.7s2.84 1.27 3.96 2.42l-4.75 4.98zM206.69 194.82v16.13h.1c.16-.45.43-.9.82-1.34.38-.45.85-.85 1.39-1.2.54-.35 1.18-.64 1.92-.86.74-.22 1.54-.34 2.4-.34 1.82 0 3.3.28 4.42.84 1.12.56 1.99 1.34 2.62 2.33.62.99 1.05 2.16 1.27 3.5s.34 2.8.34 4.37v12.86h-7.2v-11.42c0-.67-.02-1.37-.07-2.09-.05-.72-.19-1.38-.43-1.99-.24-.61-.61-1.1-1.1-1.49-.5-.38-1.21-.58-2.14-.58-.93 0-1.68.17-2.26.5-.58.34-1.02.79-1.32 1.34-.3.56-.5 1.19-.6 1.9-.1.71-.14 1.44-.14 2.21v11.62h-7.2v-36.29h7.18zM261.65 207.78h6.91v3.17h.1c.22-.45.54-.9.96-1.34.42-.45.91-.85 1.49-1.2s1.23-.64 1.97-.86c.74-.22 1.54-.34 2.4-.34 1.82 0 3.3.28 4.42.84 1.12.56 1.99 1.34 2.62 2.33.62.99 1.05 2.16 1.27 3.5s.34 2.8.34 4.37v12.86h-7.2v-11.42c0-.67-.02-1.37-.07-2.09-.05-.72-.19-1.38-.43-1.99-.24-.61-.61-1.1-1.1-1.49-.5-.38-1.21-.58-2.14-.58-.93 0-1.68.17-2.26.5-.58.34-1.02.79-1.32 1.34-.3.56-.5 1.19-.6 1.9-.1.71-.14 1.44-.14 2.21v11.62h-7.2v-23.33zM322.94 219.45c0-1.86.34-3.54 1.01-5.04.67-1.5 1.59-2.79 2.76-3.86 1.17-1.07 2.54-1.9 4.13-2.47s3.27-.86 5.06-.86 3.48.29 5.06.86 2.96 1.4 4.13 2.47a11.55 11.55 0 012.76 3.86c.67 1.5 1.01 3.18 1.01 5.04 0 1.86-.34 3.54-1.01 5.04a11.55 11.55 0 01-2.76 3.86c-1.17 1.07-2.54 1.9-4.13 2.47s-3.27.86-5.06.86-3.48-.29-5.06-.86-2.96-1.4-4.13-2.47a11.55 11.55 0 01-2.76-3.86c-.67-1.51-1.01-3.19-1.01-5.04zm7.2 0c0 1.76.5 3.18 1.51 4.27 1.01 1.09 2.42 1.63 4.25 1.63s3.24-.54 4.25-1.63c1.01-1.09 1.51-2.51 1.51-4.27s-.5-3.18-1.51-4.27-2.42-1.63-4.25-1.63-3.24.54-4.25 1.63-1.51 2.51-1.51 4.27zM387.79 194.82h7.2v36.29h-7.2v-36.29zM433.92 219.45c0-1.86.34-3.54 1.01-5.04.67-1.5 1.59-2.79 2.76-3.86 1.17-1.07 2.54-1.9 4.13-2.47s3.27-.86 5.06-.86c1.79 0 3.48.29 5.06.86s2.96 1.4 4.13 2.47a11.55 11.55 0 012.76 3.86c.67 1.5 1.01 3.18 1.01 5.04 0 1.86-.34 3.54-1.01 5.04-.67 1.5-1.59 2.79-2.76 3.86s-2.54 1.9-4.13 2.47-3.27.86-5.06.86c-1.79 0-3.48-.29-5.06-.86s-2.96-1.4-4.13-2.47a11.55 11.55 0 01-2.76-3.86c-.67-1.51-1.01-3.19-1.01-5.04zm7.2 0c0 1.76.5 3.18 1.51 4.27 1.01 1.09 2.42 1.63 4.25 1.63 1.82 0 3.24-.54 4.25-1.63 1.01-1.09 1.51-2.51 1.51-4.27s-.5-3.18-1.51-4.27c-1.01-1.09-2.42-1.63-4.25-1.63-1.82 0-3.24.54-4.25 1.63-1.01 1.08-1.51 2.51-1.51 4.27zM523.15 229.14c0 4.42-1.11 7.77-3.34 10.06-2.22 2.29-5.61 3.43-10.15 3.43-2.08 0-4.13-.23-6.14-.7-2.02-.46-3.87-1.37-5.57-2.71l3.98-5.95c1.12.93 2.3 1.66 3.53 2.21 1.23.54 2.58.82 4.06.82 2.21 0 3.83-.54 4.87-1.61s1.56-2.44 1.56-4.1v-2.26h-.1c-.83 1.12-1.86 1.91-3.1 2.38-1.23.46-2.39.7-3.48.7-1.73 0-3.3-.3-4.7-.89-1.41-.59-2.62-1.42-3.62-2.5-1.01-1.07-1.79-2.34-2.33-3.82-.54-1.47-.82-3.09-.82-4.85 0-1.54.25-3.04.74-4.51.5-1.47 1.2-2.77 2.11-3.89.91-1.12 2.02-2.02 3.34-2.71 1.31-.69 2.8-1.03 4.46-1.03 1.02 0 1.96.11 2.81.34.85.22 1.61.51 2.28.86.67.35 1.25.74 1.73 1.18.48.43.86.86 1.15 1.27h.1v-3.07h6.62v21.35zm-18.14-9.84c0 .77.14 1.5.43 2.18.29.69.7 1.3 1.22 1.82.53.53 1.13.95 1.82 1.27s1.45.48 2.28.48c.8 0 1.55-.16 2.26-.48s1.32-.74 1.85-1.27.94-1.14 1.22-1.82c.29-.69.43-1.42.43-2.18 0-.77-.14-1.5-.43-2.18-.29-.69-.7-1.3-1.22-1.82-.53-.53-1.14-.95-1.85-1.27s-1.46-.48-2.26-.48c-.83 0-1.59.16-2.28.48s-1.3.74-1.82 1.27a5.55 5.55 0 00-1.22 1.82c-.29.69-.43 1.42-.43 2.18zM576.96 234.9a50.61 50.61 0 01-1.39 3.31c-.45.96-1.02 1.77-1.7 2.42-.69.66-1.56 1.15-2.62 1.49-1.06.34-2.45.5-4.18.5-1.86 0-3.65-.29-5.38-.86l.96-5.9c1.09.48 2.21.72 3.36.72.8 0 1.46-.09 1.97-.26.51-.18.94-.43 1.27-.77.34-.34.62-.74.84-1.22.22-.48.46-1.04.72-1.68l.53-1.34-10.22-23.52h7.78l6 15.41h.1l5.14-15.41h7.39l-10.57 27.11z" })),
            undefined("g", { "aria-hidden": "true" },
                undefined("path", { "aria-hidden": "true", className: "prefix__st1", d: "M20.58 274.99h8.55c3.08 0 5.32.65 6.72 1.95 1.4 1.3 2.1 3.1 2.1 5.4v.12c0 2.24-.72 3.97-2.16 5.18-1.44 1.21-3.56 1.81-6.36 1.81h-2.07v6.99h-6.78v-21.45zm8.19 9.9c1.82 0 2.73-.8 2.73-2.4v-.12c0-.84-.23-1.43-.68-1.79-.45-.35-1.12-.52-2.02-.52h-1.44v4.83h1.41zM51.87 274.99h8.79l6.72 21.45h-7.2l-.99-3.57h-6.78l-.96 3.57h-6.33l6.75-21.45zm1.83 13.26h4.23l-2.1-7.77-2.13 7.77zM77.4 274.99h8.76c2.98 0 5.22.58 6.72 1.75s2.25 2.91 2.25 5.21v.12c0 1.48-.34 2.67-1.02 3.55-.68.89-1.55 1.58-2.61 2.06l4.89 8.76h-7.14l-3.99-7.35h-1.08v7.35H77.4v-21.45zm8.37 9.72c1.86 0 2.79-.78 2.79-2.34v-.12c0-.78-.23-1.33-.69-1.67-.46-.33-1.15-.49-2.07-.49h-1.62v4.62h1.59zM109.95 280.21h-5.4v-5.22h17.67v5.22h-5.43v16.23h-6.84v-16.23zM156.12 296.83c-1.76 0-3.34-.26-4.74-.79-1.4-.53-2.59-1.28-3.57-2.25s-1.73-2.13-2.25-3.48-.78-2.83-.78-4.46v-.24c0-1.66.29-3.17.88-4.51.59-1.35 1.4-2.5 2.43-3.45 1.03-.95 2.24-1.68 3.64-2.21 1.4-.52 2.9-.78 4.5-.78 1.64 0 3.17.25 4.58.74s2.63 1.2 3.66 2.12c1.03.92 1.83 2.04 2.42 3.38s.87 2.84.87 4.54v.24c0 1.68-.28 3.21-.83 4.57-.55 1.37-1.33 2.54-2.36 3.51-1.02.97-2.25 1.72-3.67 2.26s-3.02.81-4.78.81zm.18-5.34c1.34 0 2.4-.5 3.19-1.48.79-.99 1.19-2.39 1.19-4.19v-.24c0-1.82-.4-3.21-1.2-4.17s-1.88-1.44-3.24-1.44c-1.32 0-2.38.47-3.17 1.42s-1.18 2.34-1.18 4.18v.24c0 1.84.39 3.25 1.18 4.21.79.98 1.87 1.47 3.23 1.47zM178.32 274.99h14.85v5.22h-8.04v4.02h6.48v5.01h-6.48v7.2h-6.81v-21.45z" }))))) : (undefined("div", null,
        undefined("svg", __assign({ role: "link", preserveAspectRatio: "xMidYMid meet", width: svgWidth, height: svgHeight, id: "prefix__Logo1", x: 0, y: 0, viewBox: "0 0 608.03 392.81", xmlSpace: "preserve" }, restProps),
            undefined("style", null, ".prefix__st2{fill:#00b0cc}.prefix__st3,.prefix__st4{fill:#001e57}.prefix__st5{fill-rule:evenodd;clip-rule:evenodd}.prefix__st6{fill:#1d1d1b}.prefix__st7{fill:#ffb600}"),
            undefined("path", { "aria-hidden": "true", className: "prefix__st2", d: "M584.73 28.21c3.93 3.93 3.93 10.3 0 14.23-3.93 3.93-10.3 3.93-14.23 0s-3.93-10.3 0-14.23 10.3-3.93 14.23 0zM544.61 68.15c3.93 3.93 3.93 10.3 0 14.23-3.93 3.93-10.3 3.93-14.23 0-3.93-3.93-3.93-10.3 0-14.23 3.92-3.93 10.29-3.93 14.23 0z" }),
            undefined("path", { "aria-hidden": "true", className: "prefix__st3", d: "M442.25 25.09H309.38v30.56h51.4v105.61h30.07V55.65h51.4z" }),
            undefined("path", { "aria-hidden": "true", className: "prefix__st4", d: "M244.88 132.87c-21.74 0-39.43-17.73-39.43-39.51 0-21.79 17.69-39.51 39.43-39.51 9.33 0 17.91 3.27 24.67 8.73l20.33-20.33c-12-10.63-27.76-17.1-45-17.1-37.54 0-68.07 30.6-68.07 68.21 0 37.61 30.54 68.21 68.07 68.21 17.14 0 32.8-6.39 44.78-16.9l-20.34-20.34c-6.73 5.34-15.22 8.54-24.44 8.54zM88.91 77.49c-8.81 0-15.95 7.17-15.95 16.02s7.14 16.02 15.95 16.02c8.81 0 15.95-7.17 15.95-16.02.01-8.85-7.14-16.02-15.95-16.02zm.01 28.27c-6.74 0-12.19-5.48-12.2-12.24 0-6.76 5.45-12.25 12.19-12.25 6.73 0 12.19 5.48 12.19 12.24 0 6.77-5.45 12.25-12.18 12.25z" }),
            undefined("path", { "aria-hidden": "true", className: "prefix__st4", d: "M127.81 93.36c0 21.79-17.69 39.51-39.43 39.51s-39.43-17.73-39.43-39.51c0-21.79 17.69-39.51 39.43-39.51s39.43 17.72 39.43 39.51zM88.38 25.15c-37.54 0-68.07 30.6-68.07 68.21 0 37.61 30.54 68.21 68.07 68.21 37.53 0 68.07-30.6 68.07-68.21.01-37.61-30.53-68.21-68.07-68.21z" }),
            undefined("path", { "aria-hidden": "true", className: "prefix__st3", d: "M89.02 85.6c4.36 0 7.9 3.54 7.9 7.91s-3.54 7.92-7.9 7.91c-4.36 0-7.9-3.54-7.9-7.91s3.54-7.92 7.9-7.91z" }),
            undefined("path", { "aria-hidden": "true", d: "M519.57 25.15c-37.54 0-68.07 30.6-68.07 68.21 0 37.61 30.54 68.21 68.07 68.21 37.54 0 68.08-30.6 68.08-68.21 0-37.61-30.54-68.21-68.08-68.21zm0 107.72c-21.74 0-39.43-17.73-39.43-39.51 0-21.79 17.69-39.51 39.43-39.51S559 71.58 559 93.36c0 21.78-17.69 39.51-39.43 39.51z", fillRule: "evenodd", clipRule: "evenodd", className: "prefix__st2" }),
            undefined("path", { "aria-hidden": "true", className: "prefix__st3", d: "M519.57 25.15c-37.54 0-68.07 30.6-68.07 68.21 0 37.61 30.54 68.21 68.07 68.21 37.54 0 68.08-30.6 68.08-68.21 0-37.61-30.54-68.21-68.08-68.21zm0 107.72c-21.74 0-39.43-17.73-39.43-39.51 0-21.79 17.69-39.51 39.43-39.51S559 71.58 559 93.36c0 21.78-17.69 39.51-39.43 39.51z" }),
            undefined("path", { "aria-hidden": "true", className: "prefix__st6", d: "M221.13 285.5H587.5v3H221.13z" }),
            undefined("g", { "aria-hidden": "true" },
                undefined("path", { "aria-hidden": "true", className: "prefix__st6", d: "M37.7 320.41h15.51l17.05 52.29H57.84l-3.6-11.63H35.2l-3.6 11.63H20.43l17.27-52.29zm.07 32.25h13.89l-6.91-22.6-6.98 22.6zM90.62 373.5c-2.8 0-5.4-.43-7.83-1.28-2.43-.85-4.52-2.11-6.29-3.77-1.76-1.66-3.15-3.69-4.15-6.11-1-2.41-1.51-5.18-1.51-8.3v-.59c0-3.07.52-5.84 1.55-8.3 1.03-2.46 2.45-4.57 4.26-6.33 1.81-1.71 3.92-3.01 6.32-3.91 2.4-.9 4.97-1.35 7.72-1.35 2.21 0 4.35.26 6.43.77s3.96 1.35 5.63 2.52c1.61 1.17 2.96 2.71 4.04 4.61 1.08 1.9 1.74 4.22 1.98 6.95H98.7c-.34-2.19-1.16-3.83-2.46-4.9-1.3-1.07-3.08-1.61-5.33-1.61-2.79 0-5.02.99-6.69 2.95-1.66 1.97-2.5 4.78-2.5 8.42v.58c0 3.84.82 6.73 2.47 8.68 1.64 1.95 3.96 2.92 6.94 2.92 2.16 0 4.01-.6 5.55-1.81 1.55-1.21 2.44-3.04 2.69-5.51h9.62c-.14 2.29-.66 4.38-1.54 6.25-.88 1.88-2.11 3.48-3.67 4.79-1.57 1.37-3.46 2.43-5.66 3.18-2.21.78-4.71 1.15-7.5 1.15zM130.89 373.5c-2.8 0-5.4-.43-7.83-1.28-2.43-.85-4.52-2.11-6.29-3.77-1.76-1.66-3.15-3.69-4.15-6.11-1-2.41-1.51-5.18-1.51-8.3v-.59c0-3.07.52-5.84 1.55-8.3 1.03-2.46 2.45-4.57 4.26-6.33 1.81-1.71 3.92-3.01 6.32-3.91 2.4-.9 4.97-1.35 7.72-1.35 2.21 0 4.35.26 6.43.77s3.96 1.35 5.63 2.52c1.61 1.17 2.96 2.71 4.04 4.61 1.08 1.9 1.74 4.22 1.98 6.95h-10.07c-.34-2.19-1.16-3.83-2.46-4.9-1.3-1.07-3.08-1.61-5.33-1.61-2.79 0-5.02.99-6.69 2.95-1.66 1.97-2.5 4.78-2.5 8.42v.58c0 3.84.82 6.73 2.47 8.68 1.64 1.95 3.96 2.92 6.94 2.92 2.16 0 4.01-.6 5.55-1.81 1.55-1.21 2.44-3.04 2.69-5.51h9.62c-.14 2.29-.66 4.38-1.54 6.25-.88 1.88-2.11 3.48-3.67 4.79-1.57 1.37-3.46 2.43-5.66 3.18-2.2.78-4.7 1.15-7.5 1.15zM171.46 373.5c-2.89 0-5.56-.44-8.01-1.32-2.45-.88-4.56-2.17-6.32-3.88-1.81-1.66-3.22-3.68-4.23-6.07-1-2.39-1.51-5.12-1.51-8.19v-.59c0-3.02.5-5.75 1.51-8.19 1-2.44 2.41-4.54 4.23-6.29 1.76-1.71 3.85-3.03 6.25-3.99 2.4-.95 4.99-1.43 7.79-1.43 2.5 0 4.88.38 7.13 1.13 2.25.76 4.24 1.92 5.95 3.48 1.72 1.56 3.09 3.57 4.12 6.03 1.03 2.46 1.54 5.4 1.54 8.81v2.93H162.2c.15 3.22 1.04 5.69 2.68 7.43 1.64 1.73 3.94 2.59 6.87 2.59 2.49 0 4.37-.49 5.62-1.46s2.05-2.27 2.39-3.88h10.07c-.64 4.15-2.54 7.33-5.7 9.55-3.15 2.24-7.38 3.34-12.67 3.34zm8.09-24.06c-.2-2.93-1-5.08-2.43-6.47-1.42-1.39-3.41-2.08-5.95-2.08-2.4 0-4.38.74-5.92 2.23s-2.51 3.6-2.9 6.33h17.2zM196.16 334.45h10.65v6.07c.98-1.9 2.5-3.53 4.56-4.9 2.06-1.36 4.71-2.05 7.94-2.05 1.91 0 3.65.29 5.22.88s2.94 1.46 4.12 2.63c1.13 1.22 2.01 2.77 2.64 4.65.64 1.88.96 4.08.96 6.62v24.36h-10.66v-22.82c0-2.63-.54-4.57-1.62-5.81-1.08-1.24-2.79-1.87-5.14-1.87-2.3 0-4.21.7-5.74 2.08-1.52 1.39-2.28 3.5-2.28 6.33v22.09h-10.65v-38.26zM253.19 373.43c-4.07 0-7.15-1.01-9.26-3.03-2.11-2.02-3.16-5.04-3.16-9.03v-19.38h-4.92v-7.53h4.92v-8.26h10.59v8.26h8.08v7.53h-8.08v18.43c0 1.51.36 2.64 1.06 3.4.71.76 1.78 1.13 3.2 1.13.78 0 1.51-.06 2.17-.18.66-.12 1.29-.3 1.87-.55v8.19c-.73.24-1.64.48-2.72.7-1.08.21-2.33.32-3.75.32zM275.98 373.5c-1.86 0-3.59-.28-5.18-.84a11.02 11.02 0 01-4.15-2.6c-1.18-1.17-2.09-2.67-2.76-4.5-.66-1.83-.99-3.99-.99-6.47v-24.65h10.59v23.18c0 2.54.56 4.45 1.69 5.74s2.79 1.94 5 1.94c2.25 0 4.15-.7 5.69-2.08 1.55-1.39 2.32-3.5 2.32-6.33v-22.45h10.58v38.25h-10.58v-6c-.98 1.95-2.46 3.57-4.45 4.86-1.99 1.31-4.58 1.95-7.76 1.95zM305.96 334.45h10.65v7.31c1.22-2.58 2.82-4.53 4.78-5.85s4.51-2 7.65-2.05v9.87c-3.97-.05-7.03.66-9.19 2.12-2.16 1.46-3.24 4.02-3.24 7.68v19.16h-10.65v-38.24zM350.79 373.5c-2.89 0-5.56-.44-8.01-1.32-2.45-.88-4.56-2.17-6.32-3.88-1.81-1.66-3.22-3.68-4.23-6.07-1-2.39-1.51-5.12-1.51-8.19v-.59c0-3.02.5-5.75 1.51-8.19 1-2.44 2.41-4.54 4.23-6.29 1.76-1.71 3.85-3.03 6.25-3.99 2.4-.95 4.99-1.43 7.79-1.43 2.5 0 4.88.38 7.13 1.13 2.25.76 4.24 1.92 5.95 3.48 1.72 1.56 3.09 3.57 4.12 6.03 1.03 2.46 1.54 5.4 1.54 8.81v2.93h-27.71c.15 3.22 1.04 5.69 2.68 7.43 1.64 1.73 3.94 2.59 6.87 2.59 2.49 0 4.37-.49 5.62-1.46s2.05-2.27 2.39-3.88h10.07c-.64 4.15-2.54 7.33-5.7 9.55-3.15 2.24-7.38 3.34-12.67 3.34zm8.09-24.06c-.2-2.93-1-5.08-2.43-6.47-1.42-1.39-3.41-2.08-5.95-2.08-2.4 0-4.38.74-5.92 2.23s-2.51 3.6-2.9 6.33h17.2z" }),
                undefined("g", { "aria-hidden": "true" },
                    undefined("path", { "aria-hidden": "true", className: "prefix__st7", d: "M393.89 323.45h12.68c4.11 0 7.69.6 10.74 1.8 3.04 1.2 5.57 2.85 7.58 4.94 2.01 2.09 3.51 4.56 4.5 7.41.98 2.85 1.48 5.94 1.48 9.28v.6c0 3.29-.48 6.39-1.44 9.28-.96 2.89-2.45 5.41-4.46 7.54-2.01 2.14-4.55 3.82-7.62 5.04-3.06 1.22-6.7 1.84-10.9 1.84H393.9v-47.73zm12.42 43.06c3.09 0 5.78-.45 8.08-1.34 2.3-.89 4.23-2.16 5.77-3.81 1.54-1.65 2.71-3.64 3.49-5.99.78-2.34 1.17-4.98 1.17-7.93v-.54c0-2.76-.35-5.29-1.04-7.59-.69-2.3-1.79-4.28-3.29-5.95s-3.42-2.96-5.77-3.88c-2.35-.91-5.18-1.37-8.49-1.37h-6.51v38.39h6.59zM443.81 328.99c-1.03 0-1.9-.36-2.62-1.07-.72-.71-1.07-1.58-1.07-2.6s.36-1.89 1.07-2.6c.71-.71 1.59-1.07 2.62-1.07s1.9.36 2.62 1.07c.71.71 1.07 1.58 1.07 2.6s-.36 1.89-1.07 2.6c-.72.72-1.59 1.07-2.62 1.07zm-2.68 7.28h5.57v34.92h-5.57v-34.92zM472.93 383.94c-2.59 0-4.84-.29-6.74-.87s-3.49-1.35-4.76-2.3c-1.27-.96-2.27-2.09-2.99-3.41-.72-1.31-1.19-2.7-1.41-4.17h5.7c.81 4.05 4.18 6.08 10.13 6.08 3.44 0 6.18-.86 8.22-2.57 2.04-1.71 3.05-4.44 3.05-8.18v-5.07c-.49.85-1.15 1.67-1.98 2.47s-1.77 1.5-2.82 2.1c-1.05.6-2.18 1.09-3.39 1.47-1.21.38-2.44.57-3.69.57-2.28 0-4.41-.41-6.37-1.24-1.97-.82-3.66-1.97-5.07-3.44s-2.52-3.21-3.32-5.24c-.8-2.02-1.21-4.24-1.21-6.64v-.47c0-2.36.4-4.6 1.21-6.71.8-2.11 1.92-3.96 3.35-5.54 1.43-1.58 3.15-2.83 5.17-3.74 2.01-.91 4.23-1.37 6.64-1.37 2.95 0 5.34.61 7.18 1.84 1.83 1.22 3.26 2.68 4.29 4.37v-5.61h5.57v32.58c0 2.54-.43 4.75-1.28 6.64-.85 1.89-2.01 3.46-3.49 4.71-1.48 1.25-3.23 2.18-5.27 2.8-2.01.63-4.26.94-6.72.94zm-.07-18.56c1.61 0 3.12-.28 4.53-.83a10.42 10.42 0 003.66-2.39c1.03-1.04 1.83-2.32 2.42-3.85.58-1.53.87-3.26.87-5.21v-.46c0-3.9-1-6.92-2.99-9.06s-4.71-3.22-8.15-3.22c-1.74 0-3.31.31-4.7.93-1.39.62-2.55 1.47-3.49 2.56-.94 1.08-1.67 2.39-2.18 3.92-.51 1.53-.77 3.2-.77 5.01v.53c0 1.9.29 3.6.87 5.08.58 1.48 1.35 2.74 2.31 3.78a9.66 9.66 0 003.42 2.39c1.33.54 2.73.82 4.2.82zM504.6 328.99c-1.03 0-1.9-.36-2.62-1.07-.72-.71-1.07-1.58-1.07-2.6s.36-1.89 1.07-2.6c.71-.71 1.59-1.07 2.62-1.07s1.9.36 2.62 1.07c.71.71 1.07 1.58 1.07 2.6s-.36 1.89-1.07 2.6c-.72.72-1.6 1.07-2.62 1.07zm-2.69 7.28h5.57v34.92h-5.57v-34.92zM530.36 371.65c-3.22 0-5.6-.85-7.14-2.54s-2.31-3.92-2.31-6.68v-21.5h-5.03v-4.67h5.03v-7.95h5.57v7.95h8.19v4.67h-8.19v20.96c0 3.38 1.45 5.07 4.36 5.07.89 0 1.68-.07 2.35-.2.67-.13 1.32-.31 1.95-.53v4.67c-.58.22-1.23.4-1.95.53-.73.16-1.67.22-2.83.22zM553.44 371.79c-1.61 0-3.13-.2-4.56-.6-1.43-.4-2.67-1.02-3.72-1.87s-1.88-1.91-2.48-3.21c-.6-1.29-.91-2.83-.91-4.61 0-2 .49-3.69 1.48-5.07.98-1.38 2.29-2.49 3.92-3.34 1.63-.84 3.51-1.46 5.64-1.84a37 37 0 016.54-.57h5.03v-2.52c0-2.79-.58-4.79-1.75-6-1.16-1.22-3.09-1.83-5.77-1.83-4.83 0-7.51 2.07-8.05 6.21h-5.57c.18-2 .68-3.69 1.51-5.07.83-1.38 1.88-2.5 3.15-3.37s2.71-1.49 4.29-1.87c1.59-.38 3.23-.57 4.93-.57 1.65 0 3.26.19 4.83.57 1.57.38 2.93 1.05 4.09 2s2.1 2.24 2.82 3.84 1.07 3.63 1.07 6.08v23.03h-5.57v-4.41c-1.3 1.65-2.8 2.89-4.5 3.74-1.68.85-3.83 1.28-6.42 1.28zm.53-4.41c1.48 0 2.85-.19 4.13-.57 1.27-.38 2.37-.92 3.29-1.64.92-.71 1.64-1.59 2.18-2.64.54-1.04.81-2.24.81-3.57v-4.34h-4.83c-1.75 0-3.37.12-4.86.37-1.5.25-2.8.63-3.89 1.17-1.1.53-1.95 1.24-2.55 2.1s-.91 1.95-.91 3.24c0 1.83.49 3.26 1.48 4.31.97 1.05 2.69 1.57 5.15 1.57zM581.82 319.58h5.63v51.61h-5.63v-51.61z" }))),
            undefined("g", { "aria-hidden": "true" },
                undefined("path", { className: "prefix__st5", d: "M30.24 203.75h-9.7v-6.62h26.88v6.62h-9.7v27.36h-7.49v-27.36zM101.67 227.08c-1.15 1.47-2.61 2.61-4.37 3.41s-3.58 1.2-5.47 1.2c-1.79 0-3.48-.29-5.06-.86s-2.96-1.4-4.13-2.47-2.09-2.36-2.76-3.86c-.67-1.5-1.01-3.18-1.01-5.04 0-1.86.34-3.54 1.01-5.04.67-1.5 1.59-2.79 2.76-3.86 1.17-1.07 2.54-1.9 4.13-2.47s3.27-.86 5.06-.86c1.66 0 3.18.29 4.54.86 1.36.58 2.51 1.4 3.46 2.47.94 1.07 1.67 2.36 2.18 3.86.51 1.5.77 3.18.77 5.04v2.26h-16.7c.29 1.38.91 2.47 1.87 3.29s2.14 1.22 3.55 1.22c1.18 0 2.18-.26 3-.79.82-.53 1.53-1.21 2.14-2.04l5.03 3.68zm-6.1-10.27c.03-1.21-.37-2.26-1.2-3.12-.83-.86-1.9-1.3-3.22-1.3-.8 0-1.5.13-2.11.38-.61.26-1.13.58-1.56.98-.43.4-.77.86-1.01 1.39-.24.53-.38 1.08-.41 1.66h9.51zM157.54 215.32c-.35-.51-.85-.94-1.49-1.27-.64-.34-1.33-.5-2.06-.5-1.82 0-3.24.54-4.25 1.63s-1.51 2.51-1.51 4.27.5 3.18 1.51 4.27c1.01 1.09 2.42 1.63 4.25 1.63.8 0 1.49-.18 2.06-.53.58-.35 1.07-.77 1.49-1.25l4.75 4.99c-1.12 1.15-2.44 1.96-3.96 2.42s-2.97.7-4.34.7c-1.79 0-3.48-.29-5.06-.86s-2.96-1.4-4.13-2.47-2.09-2.36-2.76-3.86c-.67-1.5-1.01-3.18-1.01-5.04 0-1.86.34-3.54 1.01-5.04.67-1.5 1.59-2.79 2.76-3.86 1.17-1.07 2.54-1.9 4.13-2.47s3.27-.86 5.06-.86c1.38 0 2.82.23 4.34.7s2.84 1.27 3.96 2.42l-4.75 4.98zM206.69 194.82v16.13h.1c.16-.45.43-.9.82-1.34.38-.45.85-.85 1.39-1.2.54-.35 1.18-.64 1.92-.86.74-.22 1.54-.34 2.4-.34 1.82 0 3.3.28 4.42.84 1.12.56 1.99 1.34 2.62 2.33.62.99 1.05 2.16 1.27 3.5s.34 2.8.34 4.37v12.86h-7.2v-11.42c0-.67-.02-1.37-.07-2.09-.05-.72-.19-1.38-.43-1.99-.24-.61-.61-1.1-1.1-1.49-.5-.38-1.21-.58-2.14-.58-.93 0-1.68.17-2.26.5-.58.34-1.02.79-1.32 1.34-.3.56-.5 1.19-.6 1.9-.1.71-.14 1.44-.14 2.21v11.62h-7.2v-36.29h7.18zM261.65 207.78h6.91v3.17h.1c.22-.45.54-.9.96-1.34.42-.45.91-.85 1.49-1.2s1.23-.64 1.97-.86c.74-.22 1.54-.34 2.4-.34 1.82 0 3.3.28 4.42.84 1.12.56 1.99 1.34 2.62 2.33.62.99 1.05 2.16 1.27 3.5s.34 2.8.34 4.37v12.86h-7.2v-11.42c0-.67-.02-1.37-.07-2.09-.05-.72-.19-1.38-.43-1.99-.24-.61-.61-1.1-1.1-1.49-.5-.38-1.21-.58-2.14-.58-.93 0-1.68.17-2.26.5-.58.34-1.02.79-1.32 1.34-.3.56-.5 1.19-.6 1.9-.1.71-.14 1.44-.14 2.21v11.62h-7.2v-23.33zM322.94 219.45c0-1.86.34-3.54 1.01-5.04.67-1.5 1.59-2.79 2.76-3.86 1.17-1.07 2.54-1.9 4.13-2.47s3.27-.86 5.06-.86 3.48.29 5.06.86 2.96 1.4 4.13 2.47a11.55 11.55 0 012.76 3.86c.67 1.5 1.01 3.18 1.01 5.04 0 1.86-.34 3.54-1.01 5.04a11.55 11.55 0 01-2.76 3.86c-1.17 1.07-2.54 1.9-4.13 2.47s-3.27.86-5.06.86-3.48-.29-5.06-.86-2.96-1.4-4.13-2.47a11.55 11.55 0 01-2.76-3.86c-.67-1.51-1.01-3.19-1.01-5.04zm7.2 0c0 1.76.5 3.18 1.51 4.27 1.01 1.09 2.42 1.63 4.25 1.63s3.24-.54 4.25-1.63c1.01-1.09 1.51-2.51 1.51-4.27s-.5-3.18-1.51-4.27-2.42-1.63-4.25-1.63-3.24.54-4.25 1.63-1.51 2.51-1.51 4.27zM387.79 194.82h7.2v36.29h-7.2v-36.29zM433.92 219.45c0-1.86.34-3.54 1.01-5.04.67-1.5 1.59-2.79 2.76-3.86 1.17-1.07 2.54-1.9 4.13-2.47s3.27-.86 5.06-.86c1.79 0 3.48.29 5.06.86s2.96 1.4 4.13 2.47a11.55 11.55 0 012.76 3.86c.67 1.5 1.01 3.18 1.01 5.04 0 1.86-.34 3.54-1.01 5.04-.67 1.5-1.59 2.79-2.76 3.86s-2.54 1.9-4.13 2.47-3.27.86-5.06.86c-1.79 0-3.48-.29-5.06-.86s-2.96-1.4-4.13-2.47a11.55 11.55 0 01-2.76-3.86c-.67-1.51-1.01-3.19-1.01-5.04zm7.2 0c0 1.76.5 3.18 1.51 4.27 1.01 1.09 2.42 1.63 4.25 1.63 1.82 0 3.24-.54 4.25-1.63 1.01-1.09 1.51-2.51 1.51-4.27s-.5-3.18-1.51-4.27c-1.01-1.09-2.42-1.63-4.25-1.63-1.82 0-3.24.54-4.25 1.63-1.01 1.08-1.51 2.51-1.51 4.27zM523.15 229.14c0 4.42-1.11 7.77-3.34 10.06-2.22 2.29-5.61 3.43-10.15 3.43-2.08 0-4.13-.23-6.14-.7-2.02-.46-3.87-1.37-5.57-2.71l3.98-5.95c1.12.93 2.3 1.66 3.53 2.21 1.23.54 2.58.82 4.06.82 2.21 0 3.83-.54 4.87-1.61s1.56-2.44 1.56-4.1v-2.26h-.1c-.83 1.12-1.86 1.91-3.1 2.38-1.23.46-2.39.7-3.48.7-1.73 0-3.3-.3-4.7-.89-1.41-.59-2.62-1.42-3.62-2.5-1.01-1.07-1.79-2.34-2.33-3.82-.54-1.47-.82-3.09-.82-4.85 0-1.54.25-3.04.74-4.51.5-1.47 1.2-2.77 2.11-3.89.91-1.12 2.02-2.02 3.34-2.71 1.31-.69 2.8-1.03 4.46-1.03 1.02 0 1.96.11 2.81.34.85.22 1.61.51 2.28.86.67.35 1.25.74 1.73 1.18.48.43.86.86 1.15 1.27h.1v-3.07h6.62v21.35zm-18.14-9.84c0 .77.14 1.5.43 2.18.29.69.7 1.3 1.22 1.82.53.53 1.13.95 1.82 1.27s1.45.48 2.28.48c.8 0 1.55-.16 2.26-.48s1.32-.74 1.85-1.27.94-1.14 1.22-1.82c.29-.69.43-1.42.43-2.18 0-.77-.14-1.5-.43-2.18-.29-.69-.7-1.3-1.22-1.82-.53-.53-1.14-.95-1.85-1.27s-1.46-.48-2.26-.48c-.83 0-1.59.16-2.28.48s-1.3.74-1.82 1.27a5.55 5.55 0 00-1.22 1.82c-.29.69-.43 1.42-.43 2.18zM576.96 234.9a50.61 50.61 0 01-1.39 3.31c-.45.96-1.02 1.77-1.7 2.42-.69.66-1.56 1.15-2.62 1.49-1.06.34-2.45.5-4.18.5-1.86 0-3.65-.29-5.38-.86l.96-5.9c1.09.48 2.21.72 3.36.72.8 0 1.46-.09 1.97-.26.51-.18.94-.43 1.27-.77.34-.34.62-.74.84-1.22.22-.48.46-1.04.72-1.68l.53-1.34-10.22-23.52h7.78l6 15.41h.1l5.14-15.41h7.39l-10.57 27.11z" })),
            undefined("g", { "aria-hidden": "true" },
                undefined("path", { "aria-hidden": "true", className: "prefix__st7", d: "M20.58 274.99h8.55c3.08 0 5.32.65 6.72 1.95 1.4 1.3 2.1 3.1 2.1 5.4v.12c0 2.24-.72 3.97-2.16 5.18-1.44 1.21-3.56 1.81-6.36 1.81h-2.07v6.99h-6.78v-21.45zm8.19 9.9c1.82 0 2.73-.8 2.73-2.4v-.12c0-.84-.23-1.43-.68-1.79-.45-.35-1.12-.52-2.02-.52h-1.44v4.83h1.41zM51.87 274.99h8.79l6.72 21.45h-7.2l-.99-3.57h-6.78l-.96 3.57h-6.33l6.75-21.45zm1.83 13.26h4.23l-2.1-7.77-2.13 7.77zM77.4 274.99h8.76c2.98 0 5.22.58 6.72 1.75s2.25 2.91 2.25 5.21v.12c0 1.48-.34 2.67-1.02 3.55-.68.89-1.55 1.58-2.61 2.06l4.89 8.76h-7.14l-3.99-7.35h-1.08v7.35H77.4v-21.45zm8.37 9.72c1.86 0 2.79-.78 2.79-2.34v-.12c0-.78-.23-1.33-.69-1.67-.46-.33-1.15-.49-2.07-.49h-1.62v4.62h1.59zM109.95 280.21h-5.4v-5.22h17.67v5.22h-5.43v16.23h-6.84v-16.23zM156.12 296.83c-1.76 0-3.34-.26-4.74-.79-1.4-.53-2.59-1.28-3.57-2.25s-1.73-2.13-2.25-3.48-.78-2.83-.78-4.46v-.24c0-1.66.29-3.17.88-4.51.59-1.35 1.4-2.5 2.43-3.45 1.03-.95 2.24-1.68 3.64-2.21 1.4-.52 2.9-.78 4.5-.78 1.64 0 3.17.25 4.58.74s2.63 1.2 3.66 2.12c1.03.92 1.83 2.04 2.42 3.38s.87 2.84.87 4.54v.24c0 1.68-.28 3.21-.83 4.57-.55 1.37-1.33 2.54-2.36 3.51-1.02.97-2.25 1.72-3.67 2.26s-3.02.81-4.78.81zm.18-5.34c1.34 0 2.4-.5 3.19-1.48.79-.99 1.19-2.39 1.19-4.19v-.24c0-1.82-.4-3.21-1.2-4.17s-1.88-1.44-3.24-1.44c-1.32 0-2.38.47-3.17 1.42s-1.18 2.34-1.18 4.18v.24c0 1.84.39 3.25 1.18 4.21.79.98 1.87 1.47 3.23 1.47zM178.32 274.99h14.85v5.22h-8.04v4.02h6.48v5.01h-6.48v7.2h-6.81v-21.45z" })))));
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

function Button(_a) {
    var kind = _a.kind, label = _a.label, icon = _a.icon, iconPosition = _a.iconPosition, className = _a.className, onClick = _a.onClick, href = _a.href, _b = _a.disabled, disabled = _b === void 0 ? false : _b, htmlProps = __rest(_a, ["kind", "label", "icon", "iconPosition", "className", "onClick", "href", "disabled"]);
    return kind === "link" ? (react.createElement("a", { className: classnames(className, kind), href: href, rel: "noopener noreferrer", target: "_blank" },
        iconPosition === "left" && icon,
        label,
        iconPosition === "right" && icon)) : (react.createElement("button", __assign({ className: classnames(className, kind), onClick: onClick, disabled: disabled }, htmlProps),
        iconPosition === "left" && icon,
        label,
        iconPosition === "right" && icon));
}

export { Acronym, Button, CodedLogo, CorporateLogo, MyComponent, Signature };
//# sourceMappingURL=index.es.js.map
