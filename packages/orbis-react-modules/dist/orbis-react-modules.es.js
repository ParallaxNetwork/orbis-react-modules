import Qe, { createContext as Mt, useState as x, useContext as Dt, useRef as te, useEffect as U, useMemo as Xe } from "react";
import { Orbis as Zt } from "@orbisclub/orbis-sdk";
import se from "react-string-replace";
import { DateTime as Ae } from "luxon";
import jt from "ethereum-blockies-base64";
import * as ee from "@radix-ui/react-dropdown-menu";
import * as Q from "@radix-ui/react-alert-dialog";
var he = { exports: {} }, ie = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue;
function It() {
  if (Ue)
    return ie;
  Ue = 1;
  var n = Qe, i = Symbol.for("react.element"), s = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(y, c, u) {
    var h, a = {}, v = null, k = null;
    u !== void 0 && (v = "" + u), c.key !== void 0 && (v = "" + c.key), c.ref !== void 0 && (k = c.ref);
    for (h in c)
      p.call(c, h) && !w.hasOwnProperty(h) && (a[h] = c[h]);
    if (y && y.defaultProps)
      for (h in c = y.defaultProps, c)
        a[h] === void 0 && (a[h] = c[h]);
    return { $$typeof: i, type: y, key: v, ref: k, props: a, _owner: l.current };
  }
  return ie.Fragment = s, ie.jsx = _, ie.jsxs = _, ie;
}
var ce = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function Ft() {
  return qe || (qe = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Qe, i = Symbol.for("react.element"), s = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), y = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), Z = Symbol.iterator, V = "@@iterator";
    function I(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Z && e[Z] || e[V];
      return typeof r == "function" ? r : null;
    }
    var A = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), f = 1; f < r; f++)
          o[f - 1] = arguments[f];
        P("error", e, o);
      }
    }
    function P(e, r, o) {
      {
        var f = A.ReactDebugCurrentFrame, R = f.getStackAddendum();
        R !== "" && (r += "%s", o = o.concat([R]));
        var N = o.map(function(C) {
          return String(C);
        });
        N.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, N);
      }
    }
    var j = !1, X = !1, O = !1, B = !1, q = !1, W;
    W = Symbol.for("react.module.reference");
    function z(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === p || e === w || q || e === l || e === u || e === h || B || e === k || j || X || O || typeof e == "object" && e !== null && (e.$$typeof === v || e.$$typeof === a || e.$$typeof === _ || e.$$typeof === y || e.$$typeof === c || e.$$typeof === W || e.getModuleId !== void 0));
    }
    function G(e, r, o) {
      var f = e.displayName;
      if (f)
        return f;
      var R = r.displayName || r.name || "";
      return R !== "" ? o + "(" + R + ")" : o;
    }
    function J(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case s:
          return "Portal";
        case w:
          return "Profiler";
        case l:
          return "StrictMode";
        case u:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var r = e;
            return J(r) + ".Consumer";
          case _:
            var o = e;
            return J(o._context) + ".Provider";
          case c:
            return G(e, e.render, "ForwardRef");
          case a:
            var f = e.displayName || null;
            return f !== null ? f : F(e.type) || "Memo";
          case v: {
            var R = e, N = R._payload, C = R._init;
            try {
              return F(C(N));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var E = Object.assign, m = 0, S, T, $, H, ae, ke, Se;
    function Oe() {
    }
    Oe.__reactDisabledLog = !0;
    function ct() {
      {
        if (m === 0) {
          S = console.log, T = console.info, $ = console.warn, H = console.error, ae = console.group, ke = console.groupCollapsed, Se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Oe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        m++;
      }
    }
    function lt() {
      {
        if (m--, m === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: E({}, e, {
              value: S
            }),
            info: E({}, e, {
              value: T
            }),
            warn: E({}, e, {
              value: $
            }),
            error: E({}, e, {
              value: H
            }),
            group: E({}, e, {
              value: ae
            }),
            groupCollapsed: E({}, e, {
              value: ke
            }),
            groupEnd: E({}, e, {
              value: Se
            })
          });
        }
        m < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var _e = A.ReactCurrentDispatcher, ge;
    function le(e, r, o) {
      {
        if (ge === void 0)
          try {
            throw Error();
          } catch (R) {
            var f = R.stack.trim().match(/\n( *(at )?)/);
            ge = f && f[1] || "";
          }
        return `
` + ge + e;
      }
    }
    var be = !1, ue;
    {
      var ut = typeof WeakMap == "function" ? WeakMap : Map;
      ue = new ut();
    }
    function Te(e, r) {
      if (!e || be)
        return "";
      {
        var o = ue.get(e);
        if (o !== void 0)
          return o;
      }
      var f;
      be = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var N;
      N = _e.current, _e.current = null, ct();
      try {
        if (r) {
          var C = function() {
            throw Error();
          };
          if (Object.defineProperty(C.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(C, []);
            } catch (K) {
              f = K;
            }
            Reflect.construct(e, [], C);
          } else {
            try {
              C.call();
            } catch (K) {
              f = K;
            }
            e.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (K) {
            f = K;
          }
          e();
        }
      } catch (K) {
        if (K && f && typeof K.stack == "string") {
          for (var g = K.stack.split(`
`), L = f.stack.split(`
`), M = g.length - 1, D = L.length - 1; M >= 1 && D >= 0 && g[M] !== L[D]; )
            D--;
          for (; M >= 1 && D >= 0; M--, D--)
            if (g[M] !== L[D]) {
              if (M !== 1 || D !== 1)
                do
                  if (M--, D--, D < 0 || g[M] !== L[D]) {
                    var Y = `
` + g[M].replace(" at new ", " at ");
                    return e.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", e.displayName)), typeof e == "function" && ue.set(e, Y), Y;
                  }
                while (M >= 1 && D >= 0);
              break;
            }
        }
      } finally {
        be = !1, _e.current = N, lt(), Error.prepareStackTrace = R;
      }
      var ne = e ? e.displayName || e.name : "", Ye = ne ? le(ne) : "";
      return typeof e == "function" && ue.set(e, Ye), Ye;
    }
    function dt(e, r, o) {
      return Te(e, !1);
    }
    function ft(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function de(e, r, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Te(e, ft(e));
      if (typeof e == "string")
        return le(e);
      switch (e) {
        case u:
          return le("Suspense");
        case h:
          return le("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return dt(e.render);
          case a:
            return de(e.type, r, o);
          case v: {
            var f = e, R = f._payload, N = f._init;
            try {
              return de(N(R), r, o);
            } catch {
            }
          }
        }
      return "";
    }
    var fe = Object.prototype.hasOwnProperty, Me = {}, De = A.ReactDebugCurrentFrame;
    function me(e) {
      if (e) {
        var r = e._owner, o = de(e.type, e._source, r ? r.type : null);
        De.setExtraStackFrame(o);
      } else
        De.setExtraStackFrame(null);
    }
    function mt(e, r, o, f, R) {
      {
        var N = Function.call.bind(fe);
        for (var C in e)
          if (N(e, C)) {
            var g = void 0;
            try {
              if (typeof e[C] != "function") {
                var L = Error((f || "React class") + ": " + o + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw L.name = "Invariant Violation", L;
              }
              g = e[C](r, C, f, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (M) {
              g = M;
            }
            g && !(g instanceof Error) && (me(R), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", o, C, typeof g), me(null)), g instanceof Error && !(g.message in Me) && (Me[g.message] = !0, me(R), d("Failed %s type: %s", o, g.message), me(null));
          }
      }
    }
    var ht = Array.isArray;
    function we(e) {
      return ht(e);
    }
    function pt(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, o = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function vt(e) {
      try {
        return Ze(e), !1;
      } catch {
        return !0;
      }
    }
    function Ze(e) {
      return "" + e;
    }
    function je(e) {
      if (vt(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pt(e)), Ze(e);
    }
    var oe = A.ReactCurrentOwner, _t = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, Fe, Ce;
    Ce = {};
    function gt(e) {
      if (fe.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function bt(e) {
      if (fe.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function wt(e, r) {
      if (typeof e.ref == "string" && oe.current && r && oe.current.stateNode !== r) {
        var o = F(oe.current.type);
        Ce[o] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(oe.current.type), e.ref), Ce[o] = !0);
      }
    }
    function Ct(e, r) {
      {
        var o = function() {
          Ie || (Ie = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function yt(e, r) {
      {
        var o = function() {
          Fe || (Fe = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var Et = function(e, r, o, f, R, N, C) {
      var g = {
        $$typeof: i,
        type: e,
        key: r,
        ref: o,
        props: C,
        _owner: N
      };
      return g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(g, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(g, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    };
    function Rt(e, r, o, f, R) {
      {
        var N, C = {}, g = null, L = null;
        o !== void 0 && (je(o), g = "" + o), bt(r) && (je(r.key), g = "" + r.key), gt(r) && (L = r.ref, wt(r, R));
        for (N in r)
          fe.call(r, N) && !_t.hasOwnProperty(N) && (C[N] = r[N]);
        if (e && e.defaultProps) {
          var M = e.defaultProps;
          for (N in M)
            C[N] === void 0 && (C[N] = M[N]);
        }
        if (g || L) {
          var D = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          g && Ct(C, D), L && yt(C, D);
        }
        return Et(e, g, L, R, f, oe.current, C);
      }
    }
    var ye = A.ReactCurrentOwner, Le = A.ReactDebugCurrentFrame;
    function re(e) {
      if (e) {
        var r = e._owner, o = de(e.type, e._source, r ? r.type : null);
        Le.setExtraStackFrame(o);
      } else
        Le.setExtraStackFrame(null);
    }
    var Ee;
    Ee = !1;
    function Re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function $e() {
      {
        if (ye.current) {
          var e = F(ye.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function At(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), o = e.lineNumber;
          return `

Check your code at ` + r + ":" + o + ".";
        }
        return "";
      }
    }
    var Ve = {};
    function xt(e) {
      {
        var r = $e();
        if (!r) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (r = `

Check the top-level render call using <` + o + ">.");
        }
        return r;
      }
    }
    function Be(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = xt(r);
        if (Ve[o])
          return;
        Ve[o] = !0;
        var f = "";
        e && e._owner && e._owner !== ye.current && (f = " It was passed a child from " + F(e._owner.type) + "."), re(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, f), re(null);
      }
    }
    function He(e, r) {
      {
        if (typeof e != "object")
          return;
        if (we(e))
          for (var o = 0; o < e.length; o++) {
            var f = e[o];
            Re(f) && Be(f, r);
          }
        else if (Re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var R = I(e);
          if (typeof R == "function" && R !== e.entries)
            for (var N = R.call(e), C; !(C = N.next()).done; )
              Re(C.value) && Be(C.value, r);
        }
      }
    }
    function Pt(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var o;
        if (typeof r == "function")
          o = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || r.$$typeof === a))
          o = r.propTypes;
        else
          return;
        if (o) {
          var f = F(r);
          mt(o, e.props, "prop", f, e);
        } else if (r.PropTypes !== void 0 && !Ee) {
          Ee = !0;
          var R = F(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Nt(e) {
      {
        for (var r = Object.keys(e.props), o = 0; o < r.length; o++) {
          var f = r[o];
          if (f !== "children" && f !== "key") {
            re(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), re(null);
            break;
          }
        }
        e.ref !== null && (re(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), re(null));
      }
    }
    function We(e, r, o, f, R, N) {
      {
        var C = z(e);
        if (!C) {
          var g = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var L = At(R);
          L ? g += L : g += $e();
          var M;
          e === null ? M = "null" : we(e) ? M = "array" : e !== void 0 && e.$$typeof === i ? (M = "<" + (F(e.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : M = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", M, g);
        }
        var D = Rt(e, r, o, R, N);
        if (D == null)
          return D;
        if (C) {
          var Y = r.children;
          if (Y !== void 0)
            if (f)
              if (we(Y)) {
                for (var ne = 0; ne < Y.length; ne++)
                  He(Y[ne], e);
                Object.freeze && Object.freeze(Y);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              He(Y, e);
        }
        return e === p ? Nt(D) : Pt(D), D;
      }
    }
    function kt(e, r, o) {
      return We(e, r, o, !0);
    }
    function St(e, r, o) {
      return We(e, r, o, !1);
    }
    var Ot = St, Tt = kt;
    ce.Fragment = p, ce.jsx = Ot, ce.jsxs = Tt;
  }()), ce;
}
(function(n) {
  process.env.NODE_ENV === "production" ? n.exports = It() : n.exports = Ft();
})(he);
const xe = he.exports.Fragment, t = he.exports.jsx, b = he.exports.jsxs, ze = () => /* @__PURE__ */ t("svg", {
  stroke: "currentColor",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 50 50",
  children: /* @__PURE__ */ t("path", {
    d: "M25,50a4.45,4.45,0,0,1-3.11-1.24L5.17,32.58a4.21,4.21,0,0,1-1-4.67,4.41,4.41,0,0,1,4.11-2.74h2.78a.44.44,0,0,0,.47-.4V5.42A5.49,5.49,0,0,1,17.08,0H32.92a5.49,5.49,0,0,1,5.55,5.42V24.77a.44.44,0,0,0,.47.4h2.78a4.41,4.41,0,0,1,4.11,2.74,4.21,4.21,0,0,1-1,4.67L28.11,48.76A4.45,4.45,0,0,1,25,50ZM8.28,28.26a1.29,1.29,0,0,0-1.25.8,1.14,1.14,0,0,0,.29,1.3L24,46.54a1.42,1.42,0,0,0,1.92,0L42.68,30.36a1.14,1.14,0,0,0,.29-1.3,1.3,1.3,0,0,0-1.25-.8H38.94a3.53,3.53,0,0,1-3.55-3.49V5.42a2.4,2.4,0,0,0-2.47-2.33H17.08a2.4,2.4,0,0,0-2.47,2.33V24.77a3.53,3.53,0,0,1-3.55,3.49Z"
  })
}), Ge = () => /* @__PURE__ */ b("svg", {
  stroke: "currentColor",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 50 50",
  children: [/* @__PURE__ */ t("path", {
    d: "M24,44a2.09,2.09,0,0,1-4,.74,2.78,2.78,0,0,1-.16-1c0-1.34,0-2.68,0-4,0-.83-.18-1-1-1-1.54,0-3.08,0-4.62,0-.76,0-.9.15-.91.93,0,1.41,0,2.81,0,4.21A2.09,2.09,0,0,1,11.36,46a2.11,2.11,0,0,1-2.25-1.66,3.08,3.08,0,0,1-.1-.8q0-6.93,0-13.87a2.17,2.17,0,0,1,2.26-2.4,2,2,0,0,1,2,2c0,1.43,0,2.86,0,4.28,0,.82.1.92.89.92,1.59,0,3.18,0,4.76,0,.64,0,.9-.26.89-.9,0-1.4,0-2.8,0-4.21a2,2,0,0,1,2.27-2.11A2,2,0,0,1,24,29.47C24.07,31.65,24.06,41.53,24,44Z"
  }), /* @__PURE__ */ t("path", {
    d: "M15,13.51c0,2.45,0,4.89,0,7.34a1.93,1.93,0,0,1-1.4,1.86A2,2,0,0,1,11.2,22a2.12,2.12,0,0,1-.32-1.07c0-1.36,0-2.72,0-4.08,0-1.08-.18-1.25-1.27-1.25H5.3c-1,0-1.08.11-1.08,1.11,0,1.34,0,2.67,0,4a1.91,1.91,0,0,1-2,2.1,2,2,0,0,1-2.2-2c0-.15,0-.31,0-.47C0,15.74,0,11.17,0,6.6A2.34,2.34,0,0,1,1.33,4.21,2,2,0,0,1,4.08,5.4a3.87,3.87,0,0,1,.13,1.07c0,1.34,0,2.68,0,4,0,.59.24.88.85.87,1.61,0,3.22,0,4.83,0a.81.81,0,0,0,.93-.9c0-1.31,0-2.62,0-3.94,0-1.56.78-2.52,2-2.51A2.25,2.25,0,0,1,15,6.51C15,8.85,15,13.51,15,13.51Z"
  }), /* @__PURE__ */ t("path", {
    d: "M17.4,20.33c.26-.71.62-1.83,1.07-2.91,1.61-3.91,3.25-7.81,4.89-11.71A2.42,2.42,0,0,1,25.53,4a2.4,2.4,0,0,1,2.11,1.75c.81,2,1.69,4,2.52,6s1.59,3.89,2.39,5.84c.31.73.65,1.44,1,2.17a2.07,2.07,0,0,1-.86,2.75,2,2,0,0,1-2.82-.74c-.51-1.17-1.3-1.28-2.37-1.24-1.56.06-3.13,0-4.69,0a1.18,1.18,0,0,0-1.31.8,2,2,0,0,1-2.09,1.42A2,2,0,0,1,17.4,20.33Zm8.1-4h1c.65,0,.78-.18.55-.81-.36-1-.78-1.88-1.19-2.81a.56.56,0,0,0-.39-.29c-.13,0-.29.19-.36.34-.28.61-.54,1.24-.8,1.87C23.63,16.29,23.63,16.29,25.5,16.29Z"
  }), /* @__PURE__ */ t("path", {
    d: "M42.79,43.89a2.09,2.09,0,0,1-1.72,2,2,2,0,0,1-2.33-1.19,1.51,1.51,0,0,0-1.72-1c-1.74,0-3.49,0-5.23,0a1.27,1.27,0,0,0-1.35.88A2.09,2.09,0,1,1,26.59,43Q29,37.22,31.37,31.46c.43-1,.88-2.08,1.34-3.11a1.83,1.83,0,0,1,1.87-1.1,1.8,1.8,0,0,1,1.83,1.13q1.37,3.29,2.76,6.56c1.07,2.51,2.17,5,3.23,7.53A3.07,3.07,0,0,1,42.79,43.89Zm-8.21-4.4h1.09c.57,0,.73-.27.52-.79C35.81,37.8,35.43,36.9,35,36c-.1-.2-.24-.53-.47-.52s-.36.32-.45.52c-.42.9-.79,1.82-1.19,2.72-.2.43-.05.67.38.72S34.58,39.48,34.58,39.49Z"
  }), /* @__PURE__ */ t("path", {
    d: "M45.82,33.61c0-1.45,0-2.9,0-4.35a1.81,1.81,0,0,1,1.32-1.92,2,2,0,0,1,2.41.75A2.42,2.42,0,0,1,50,29.35c0,2.87,0,5.75,0,8.62a2,2,0,0,1-1.29,2,2,2,0,0,1-2.86-1.87,1.48,1.48,0,0,1,0-.21V33.61Z"
  }), /* @__PURE__ */ t("path", {
    d: "M40.83,11.35c.83,0,1.67,0,2.51,0a2,2,0,0,1,2.07,2,2,2,0,0,1-1.93,2.19c-1.72.05-3.45.05-5.17,0a1.94,1.94,0,0,1-2-2.19,2,2,0,0,1,2.12-2C39.24,11.34,40,11.35,40.83,11.35Z"
  }), /* @__PURE__ */ t("path", {
    d: "M49.92,43.94a2,2,0,0,1-2.05,2,2,2,0,0,1-2-2.12,1.91,1.91,0,0,1,2.09-2.06A1.94,1.94,0,0,1,49.92,43.94Z"
  })]
}), Lt = () => /* @__PURE__ */ t("svg", {
  stroke: "currentColor",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 50 50",
  children: /* @__PURE__ */ t("path", {
    d: "M25.1,7.71a14.7,14.7,0,0,1,9.61-4.37c11.48-.44,18.66,10.75,13.7,21.34-2.85,6.09-7.52,10.69-12.57,14.91a103.8,103.8,0,0,1-9,6.54,3.38,3.38,0,0,1-2.93.35C15.28,41,7.29,34.86,2.22,25.7-.3,21.15-.84,16.36,1.46,11.52a14.44,14.44,0,0,1,22-5.1ZM47,18.19a28.27,28.27,0,0,0-.59-3.57,10.7,10.7,0,0,0-8.2-7.87,10.85,10.85,0,0,0-11.15,3.59c-1.84,2-2.08,2.06-3.93.13-.28-.29-.56-.59-.85-.86A10.71,10.71,0,0,0,11.43,6.89a10.9,10.9,0,0,0-7.92,8.18c-1,3.86.24,7.33,2.24,10.55C10.33,33,17.07,38.21,24.16,43a2.2,2.2,0,0,0,2-.13C32.39,38.69,38.25,34,42.8,28,45,25.08,46.69,22,47,18.19Z"
  })
}), $t = () => /* @__PURE__ */ t("svg", {
  stroke: "currentColor",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 50 50",
  children: /* @__PURE__ */ t("path", {
    d: "M25.1,7.71a14.7,14.7,0,0,1,9.61-4.37c11.48-.44,18.66,10.75,13.7,21.34-2.85,6.09-7.52,10.69-12.57,14.91a103.8,103.8,0,0,1-9,6.54,3.38,3.38,0,0,1-2.93.35C15.28,41,7.29,34.86,2.22,25.7-.3,21.15-.84,16.36,1.46,11.52a14.44,14.44,0,0,1,22-5.1Z"
  })
}), Vt = () => /* @__PURE__ */ b("svg", {
  stroke: "currentColor",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 50 50",
  children: [/* @__PURE__ */ t("path", {
    d: "M0,19.32c.07-.55.15-1.09.22-1.64A13.58,13.58,0,0,1,13.62,6c7.59,0,15.18,0,22.76,0a13.62,13.62,0,0,1,13.39,11.4A32.62,32.62,0,0,1,50,21.79a21.65,21.65,0,0,1-.38,5.14,13.7,13.7,0,0,1-10.8,10.32,18.91,18.91,0,0,1-2.91.22c-7.07,0-14.13,0-21.2,0a3,3,0,0,0-1.17.26Q7,40.77.43,43.82L0,44Zm3,20c.25-.09.42-.14.57-.21,3-1.41,6.08-2.84,9.13-4.23a3.44,3.44,0,0,1,1.34-.3c7.28,0,14.56,0,21.85,0a14.55,14.55,0,0,0,2.18-.17A10.72,10.72,0,0,0,47,24c0-1.51,0-3,0-4.54a9.69,9.69,0,0,0-.24-2.08A10.74,10.74,0,0,0,36,8.85H14a13.53,13.53,0,0,0-1.9.16A10.71,10.71,0,0,0,3,19.59V39.35Z"
  }), /* @__PURE__ */ t("path", {
    d: "M27.83,22.27a2.82,2.82,0,1,1-5.63,0,2.82,2.82,0,1,1,5.63,0Z"
  }), /* @__PURE__ */ t("path", {
    d: "M17.56,22.3a2.82,2.82,0,1,1-5.64,0,2.82,2.82,0,1,1,5.64,0Z"
  }), /* @__PURE__ */ t("path", {
    d: "M32.47,22.28a2.82,2.82,0,1,1,2.84,2.86A2.84,2.84,0,0,1,32.47,22.28Z"
  })]
}), Ke = () => /* @__PURE__ */ t("svg", {
  stroke: "currentColor",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 50 50",
  children: /* @__PURE__ */ t("path", {
    d: "M24.8,10.39c0,1.79,0,3.58,0,5.36,0,.72.24,1,.94,1.06,2.82.33,5.65.58,8.43,1.12a18.65,18.65,0,0,1,10.06,5.2,18.77,18.77,0,0,1,4.64,9.15c1,4.06,1,8.2,1.14,12.32,0,1.32-.54,2.07-1.53,2a2,2,0,0,1-1.28-.7c-.6-.9-1-1.91-1.57-2.87a16.34,16.34,0,0,0-10.52-8.4A38.8,38.8,0,0,0,26,33.25c-1,0-1.24.31-1.23,1.25,0,3.37,0,6.75,0,10.12,0,.8-.07,1.58-.93,1.9a1.87,1.87,0,0,1-2-.64Q14,38.56,6.05,31.28c-1.79-1.66-3.6-3.3-5.4-5a1.67,1.67,0,0,1,0-2.66l14.5-13.39C17.45,8.16,19.74,6.07,22,4a1.68,1.68,0,0,1,1.9-.44,1.54,1.54,0,0,1,.89,1.62C24.79,6.89,24.8,8.64,24.8,10.39Zm21.86,28.3a3.42,3.42,0,0,0,.07-.82c-.31-1.95-.51-3.93-1-5.84a14.14,14.14,0,0,0-8.8-10.15c-4.16-1.68-8.53-2-12.93-2.09-1.86-.05-2.24-.41-2.24-2.3q0-3.87,0-7.74c0-.34-.05-.68-.1-1.31L3.73,25,21.46,41.38l.25-.15c0-.35.06-.7.06-1,0-2.68,0-5.36,0-8,0-1.41.5-1.91,1.91-1.91a47.9,47.9,0,0,1,10.34,1c4.7,1,8.87,3,12,6.85A6.51,6.51,0,0,0,46.66,38.69Z"
  })
}), Bt = () => /* @__PURE__ */ b("svg", {
  stroke: "currentColor",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 50 50",
  children: [/* @__PURE__ */ t("path", {
    d: "M19.63,25.05A5.38,5.38,0,1,1,30.38,25a5.38,5.38,0,1,1-10.75.07Z"
  }), /* @__PURE__ */ t("path", {
    d: "M39.23,25A5.39,5.39,0,1,1,50,25,5.39,5.39,0,1,1,39.23,25Z"
  }), /* @__PURE__ */ t("path", {
    d: "M10.76,25a5.34,5.34,0,0,1-5.35,5.4A5.35,5.35,0,0,1,0,25a5.38,5.38,0,1,1,10.76,0Z"
  })]
}), Ht = () => /* @__PURE__ */ b("svg", {
  stroke: "currentColor",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 50 50",
  children: [/* @__PURE__ */ t("path", {
    d: "M30.85,36.71a12.08,12.08,0,0,1,0-24.16c.35,0,.69,0,1,0V0a6.18,6.18,0,0,0-3.7,1.12C26.82,2.31,23.87,9,19.24,13.29c-6.44,6-9.67,6.39-11.12,8a4.63,4.63,0,0,0-1.55,3.61v.12a4.63,4.63,0,0,0,1.55,3.61c1.45,1.65,4.68,2,11.12,8,4.63,4.32,7.58,11,8.94,12.17A6.18,6.18,0,0,0,31.88,50V36.67C31.54,36.69,31.2,36.71,30.85,36.71Z"
  }), /* @__PURE__ */ t("path", {
    d: "M43,34.92l-4.59-4.85a8.72,8.72,0,0,0-13-11.58,8.73,8.73,0,0,0,5.76,15.06h.25a8.69,8.69,0,0,0,4.86-1.48l4.59,4.85a1.44,1.44,0,0,0,1,.45A1.44,1.44,0,0,0,43,34.92ZM31.31,30.65A5.83,5.83,0,0,1,31.47,19h.16a5.83,5.83,0,0,1-.32,11.65Z"
  })]
}), Pe = (n) => {
  if (!n)
    return "-";
  const i = n.substring(0, 5), s = n.substring(n.length - 5);
  return i + "-" + s;
}, pe = (n, i = !1) => {
  if (!n)
    return "";
  const s = n.split(":");
  return i ? Pe(s[4]) : s[4];
}, et = (n) => n?.profile?.username || Pe(pe(n?.did)), tt = (n) => n?.metadata?.ensName || Pe(pe(n?.did)), rt = /\B@[a-z0-9_.⍙-]+/gi, Wt = (n) => {
  if (!n)
    return "";
  let {
    body: i
  } = n;
  const {
    mentions: s
  } = n, p = n.body.toString().match(rt);
  p && s && Array.isArray(s) && p.forEach((w) => {
    s.find((y) => y.username === w) !== void 0 && (i = i.replace(w, `<span class="highlighted" contenteditable="false">${w}</span>`));
  });
  const l = new RegExp(String.fromCharCode(160), "g");
  return i = i.replace(l, " "), i;
}, Yt = (n, i = !1, s = 0, p = "https://app.orbis.club/profile/") => {
  if (!n || !n.body)
    return null;
  let l = n.body;
  if (s > 0 && i && l.length > s)
    return l = l.substring(0, s), l + "...";
  l = se(l, "<br>", function(c, u) {
    return /* @__PURE__ */ t("br", {}, c + u);
  }), l = se(l, `
`, function(c, u) {
    return /* @__PURE__ */ t("br", {}, c + u);
  }), l = se(l, /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g, function(c, u) {
    return /* @__PURE__ */ t("a", {
      href: c,
      rel: "noreferrer",
      target: "_blank",
      title: c,
      className: "highlighted",
      children: c
    }, c + u);
  });
  const {
    mentions: w
  } = n, _ = n.body.toString().match(rt);
  _ && w && Array.isArray(w) && _.forEach((c) => {
    const u = w.find((h) => h.username === c);
    u !== void 0 && (l = se(l, c, (h, a) => u.did ? /* @__PURE__ */ t("a", {
      href: `${p}${u.did}`,
      target: "_blank",
      rel: "noreferrer",
      children: u.username
    }, h + a) : /* @__PURE__ */ t("span", {
      className: "highlighted",
      children: u.username
    }, h + a)));
  });
  const y = new RegExp(String.fromCharCode(160), "g");
  return l = se(l, y, function(c) {
    return " " + c;
  }), l;
}, Je = (n) => {
  const i = Ae.now(), s = Ae.fromSeconds(n), p = i.diff(s, ["days"]);
  let l = s.toRelative();
  return p.get("days") > 7 && (l = s.toLocaleString(Ae.DATETIME_MED)), l;
}, Ut = (n) => new Promise((i) => setTimeout(i, n)), qt = (n, i) => {
  let s;
  return (...p) => new Promise((l) => {
    s && clearTimeout(s), s = setTimeout(() => l(n(...p)), i);
  });
}, zt = {
  like: /* @__PURE__ */ t(Lt, {}),
  likeActive: /* @__PURE__ */ t($t, {}),
  haha: /* @__PURE__ */ t(Ge, {}),
  hahaActive: /* @__PURE__ */ t(Ge, {}),
  downvote: /* @__PURE__ */ t(ze, {}),
  downvoteActive: /* @__PURE__ */ t(ze, {}),
  replyto: /* @__PURE__ */ t(Ke, {}),
  replytoActive: /* @__PURE__ */ t(Ke, {}),
  comment: /* @__PURE__ */ t(Vt, {})
}, nt = Mt({}), ir = ({
  children: n,
  customIcons: i = null,
  options: s = {},
  profileUrl: p = "https://app.orbis.club/profile/",
  showPoweredByOrbis: l = !1,
  showCerscanProof: w = !1
}) => {
  const _ = new Zt(s), y = i || zt, [c, u] = x(!1), [h, a] = x(null), [v, k] = x(!1), Z = async () => {
    console.log("connecting", c);
    const d = await _.connect_v2({
      provider: c,
      chain: "ethereum"
    });
    if (console.log(d), d.status !== 200)
      await Ut(2e3), await Z();
    else {
      const {
        data: P
      } = await _.getProfile(d.did);
      a(P);
    }
  }, V = () => {
    _.logout().status === 200 && a(null);
  }, I = async () => {
    const d = await _.connectLit(c);
    return k(d.status === 200), d;
  }, A = async (d = !1) => {
    const P = await _.isConnected();
    if (P.status === 200) {
      const {
        data: j
      } = await _.getProfile(P.did);
      k(P?.details?.hasLit), a(j);
    } else
      d && await Z();
  };
  return /* @__PURE__ */ t(nt.Provider, {
    value: {
      orbis: _,
      icons: y,
      provider: c,
      profile: h,
      profileUrl: p,
      hasLit: v,
      showPoweredByOrbis: l,
      showCerscanProof: w,
      setProvider: u,
      connectOrbis: Z,
      connectLit: I,
      checkOrbisConnection: A,
      disconnectOrbis: V
    },
    children: n
  });
}, ve = () => Dt(nt), at = (n, i) => {
  const s = te(() => {
  });
  U(() => {
    s.current = n;
  }), U(() => {
    if (i !== null) {
      const p = setInterval(() => s.current(), i || 0);
      return () => clearInterval(p);
    }
  }, [i]);
}, ot = ({
  details: n
}) => {
  const i = pe(n?.did) || "";
  return /* @__PURE__ */ t("div", {
    className: "avatar",
    children: /* @__PURE__ */ t("img", {
      src: n?.profile?.pfp || jt(i),
      className: "w-full h-full object-cover object-center"
    })
  });
}, Ne = ({
  context: n,
  editPost: i,
  replyTo: s,
  placeholder: p = "Share your post here...",
  enterToShare: l = !0,
  popoverPosition: w = "top",
  cancelReplyTo: _,
  cancelEdit: y,
  callback: c
}) => {
  const {
    orbis: u,
    profile: h,
    connectOrbis: a
  } = ve(), v = te(null), [k, Z] = x(0), [V, I] = x(null), [A, d] = x(!1), [P, j] = x(""), [X, O] = x([]), [B, q] = x([]), W = () => {
    const m = document.getSelection();
    m && (Z(m.focusOffset), I(m.focusNode));
  }, z = () => {
    if (!v.current)
      return;
    v.current.focus();
    const m = document.getSelection();
    m && m.collapse(V, k);
  }, G = qt(async () => {
    d(!0), O([]);
    const {
      data: m,
      error: S
    } = await u.getProfilesByUsername(P);
    m ? O(m) : console.log(S), d(!1);
  }, 1e3), J = (m) => {
    z();
    const S = m?.details?.profile?.username?.trim();
    B?.find((H) => S === H?.username) || q([...B, {
      username: "@" + S,
      did: m.did
    }]);
    const $ = '<span href="/profile/' + m.did + '" class="text-lime-700" contenteditable="false" data-did="' + m.did + '">@' + S + "</span><span> </span>";
    for (let H = 0; H < P.length + 1; H++)
      document.execCommand("delete", !1, ""), H == P.length && document.execCommand("insertHTML", !1, $);
    setTimeout(() => {
      j(""), v.current.focus(), v.current.innerHTML.replace(/&nbsp;$/, " ");
    }, 100);
  }, F = async () => {
    if (!u || !h)
      return !1;
    const m = v.current.innerText, S = B.filter((T) => m.includes(T.username));
    if (i) {
      const T = {
        ...i.content,
        body: m,
        mentions: S
      };
      c && c(T), await u.editPost(i.stream_id, T);
    } else {
      const T = {
        body: m,
        context: n,
        master: s ? s.master || s.stream_id : null,
        reply_to: s ? s.stream_id : null,
        mentions: S || []
      }, $ = Math.floor(Date.now() / 1e3), H = {
        content: T,
        context: n,
        creator: h.did,
        creator_details: {
          did: h.did,
          profile: h.details?.profile,
          metadata: h.details?.metadata
        },
        stream_id: "new_post-" + $,
        timestamp: $,
        master: s ? s.master || s.stream_id : null,
        reply_to: s ? s.stream_id : null,
        reply_to_creator_details: s ? s.creator_details : null,
        reply_to_details: s ? s.content : null,
        count_commits: 1,
        count_likes: 0,
        count_haha: 0,
        count_downvotes: 0,
        count_replies: 0,
        type: s ? "reply" : null
      };
      console.log(H), c && c(H), v.current.innerText = "";
      const ae = await u.createPost(T);
      ae.status === 200 && (H.stream_id = ae.doc, c && c(H));
    }
  }, E = (m) => {
    !m.key || l && m.key === "Enter" && !m.shiftKey && (m.preventDefault(), F());
  };
  return U(() => {
    if (!v.current)
      return;
    v.current.innerText || (j(""), d(!1), O([]));
    let S = "";
    for (let T = k; T > 0; T--) {
      const $ = V?.textContent?.substring(T - 1, T)?.trim();
      if (S = $ + S, !$) {
        j(""), d(!1), O([]);
        return;
      }
      if ($ === "@") {
        j(S.replace("@", ""));
        return;
      }
      d(!1), j("");
    }
  }, [k, V]), U(() => {
    P ? G() : (d(!1), O([]));
  }, [P]), U(() => {
    s && v.current.focus();
  }, [s]), U(() => {
    if (i) {
      let {
        body: m
      } = i.content;
      const {
        mentions: S
      } = i.content;
      S?.length && (q(S), m = Wt(i.content)), v.current.innerHTML = m, setTimeout(() => {
        if (v.current.focus(), typeof window.getSelection < "u" && typeof document.createRange < "u") {
          const T = document.createRange();
          T.selectNodeContents(v.current), T.collapse(!1);
          const $ = window.getSelection();
          $?.removeAllRanges(), $?.addRange(T);
        }
      }, 100);
    }
  }, [i]), h ? /* @__PURE__ */ b("div", {
    className: "postbox",
    children: [P && /* @__PURE__ */ t("div", {
      className: `mentions ${w === "top" ? "mentions--top" : "mentions--bottom"}`,
      children: /* @__PURE__ */ t("div", {
        className: "mentions__scrollable",
        children: A ? /* @__PURE__ */ t("div", {
          className: "mentions__loading",
          children: "Loading..."
        }) : X.map((m) => /* @__PURE__ */ b("div", {
          className: "mentions__account",
          onClick: () => J(m),
          children: [/* @__PURE__ */ t("div", {
            className: "mentions__account__avatar",
            children: /* @__PURE__ */ t(ot, {
              details: m?.details
            })
          }), /* @__PURE__ */ b("div", {
            className: "mentions__account__name",
            children: [/* @__PURE__ */ t("span", {
              children: et(m?.details)
            }), /* @__PURE__ */ t("span", {
              className: "badge",
              children: tt(m?.details)
            })]
          })]
        }, m.did))
      })
    }), s && /* @__PURE__ */ b("div", {
      className: "replyto",
      children: [/* @__PURE__ */ b("div", {
        className: "replyto__details",
        children: ["Replying to", " ", /* @__PURE__ */ t("strong", {
          children: s?.creator_details?.profile?.username || s?.creator_details?.metadata?.ensName || pe(s?.creator_details?.did, !0)
        }), /* @__PURE__ */ t("br", {}), s.content?.body]
      }), _ && /* @__PURE__ */ t("button", {
        className: "replyto__cancel",
        onClick: () => _ && _(),
        children: "\xD7"
      })]
    }), /* @__PURE__ */ t("div", {
      ref: v,
      className: "postbox__contenteditable",
      contentEditable: !0,
      "data-placeholder": p,
      onKeyDown: E,
      onKeyUp: W,
      onMouseUp: W
    }), i && /* @__PURE__ */ t(xe, {
      children: /* @__PURE__ */ b("div", {
        className: "postbox__editmenu",
        children: [/* @__PURE__ */ t("button", {
          onClick: () => y && y(!1),
          children: "Cancel"
        }), " ", "\u2022 Enter to ", /* @__PURE__ */ t("button", {
          onClick: F,
          children: "Save"
        })]
      })
    }), !l && /* @__PURE__ */ t("button", {
      className: "postbox__share",
      onClick: F,
      children: "Share"
    })]
  }) : /* @__PURE__ */ t("button", {
    className: "gradient-button",
    onClick: a,
    children: "Connect"
  });
}, Gt = ({
  children: n,
  onAction: i
}) => /* @__PURE__ */ b(ee.Root, {
  children: [/* @__PURE__ */ t(ee.Trigger, {
    asChild: !0,
    children: n
  }), /* @__PURE__ */ t(ee.Portal, {
    children: /* @__PURE__ */ b(ee.Content, {
      className: "post__popover",
      side: "top",
      sideOffset: 5,
      children: [/* @__PURE__ */ t(ee.Item, {
        className: "edit",
        onSelect: () => i("edit"),
        children: "Edit Post"
      }), /* @__PURE__ */ t(ee.Item, {
        className: "delete",
        onSelect: () => i("delete"),
        children: "Delete Post"
      }), /* @__PURE__ */ t(ee.Arrow, {
        className: "post__popover__arrow"
      })]
    })
  })]
}), Kt = ({
  open: n,
  setOpen: i,
  confirm: s
}) => /* @__PURE__ */ t(Q.Root, {
  open: n,
  onOpenChange: i,
  children: /* @__PURE__ */ b(Q.Portal, {
    children: [/* @__PURE__ */ t(Q.Overlay, {
      className: "post__deleteconfirmation__overlay"
    }), /* @__PURE__ */ b(Q.Content, {
      className: "post__deleteconfirmation__content",
      children: [/* @__PURE__ */ t(Q.Title, {
        className: "post__deleteconfirmation__title",
        children: "Are you sure you want to delete this post?"
      }), /* @__PURE__ */ t(Q.Description, {
        className: "post__deleteconfirmation__description",
        children: "If you ask for deletion your post might be removed from the Ceramic nodes hosting it."
      }), /* @__PURE__ */ b("div", {
        className: "post__deleteconfirmation__actions",
        children: [/* @__PURE__ */ t(Q.Cancel, {
          asChild: !0,
          children: /* @__PURE__ */ t("button", {
            className: "cancel",
            children: "Cancel"
          })
        }), /* @__PURE__ */ t(Q.Action, {
          asChild: !0,
          children: /* @__PURE__ */ t("button", {
            className: "delete",
            onClick: s,
            children: "Delete"
          })
        })]
      })]
    })]
  })
}), st = ({
  post: n,
  replyTo: i = null,
  overflowLimit: s = 0,
  onClickReply: p
}) => {
  const l = te(), {
    orbis: w,
    profile: _,
    icons: y,
    profileUrl: c
  } = ve(), [u, h] = x(null), [a, v] = x({
    ...n
  }), [k, Z] = x(s > 0 ? a.content.body.length >= s : !1), [V, I] = x(!1), [A, d] = x(0), [P, j] = x(!1), [X, O] = x(null), B = async () => {
    if (!w || !_)
      return;
    const {
      data: E
    } = await w.getReaction(a.stream_id, _.did);
    E && h(E.type);
  }, q = async () => {
    const {
      data: E,
      error: m
    } = await w.getPost(n.stream_id);
    m && console.error(m), E && v(E);
  }, W = async (E) => {
    if (E === u)
      return;
    h(E);
    const m = {
      like: "count_likes",
      haha: "count_haha",
      downvote: "count_downvotes"
    }, S = {
      ...a
    };
    u && (S[m[u]] -= 1), S[m[E]] += 1, v({
      ...S
    }), (await w.react(a.stream_id, E)).status !== 200 && v({
      ...a
    });
  }, z = (E) => {
    E === "edit" ? I(!0) : E === "delete" && j(!0);
  }, G = (E) => {
    v({
      ...a,
      content: E,
      count_commits: a.count_commits + 1
    }), I(!1);
  }, J = async () => {
    console.log(`deleting ${a.stream_id}`), d(1), await w.deletePost(a.stream_id), d(2);
  }, F = Xe(() => {
    const E = [a.stream_id];
    return (a.stream_id.startsWith("new_post-") || A == 1) && E.push("post--pulse"), A == 2 && E.push("post--deleted"), E.join(" ");
  }, [a, A]);
  return at(() => {
    if (a) {
      const E = Je(a.timestamp);
      O(E);
    }
  }, a ? 6e4 : null), U(() => {
    n && q();
  }, [n]), U(() => {
    a && _ && B();
  }, [a, _]), /* @__PURE__ */ b("div", {
    ref: l,
    className: `post ${F}`,
    children: [/* @__PURE__ */ t("div", {
      className: "post__side",
      children: /* @__PURE__ */ t("div", {
        className: "post__avatar",
        children: /* @__PURE__ */ t(ot, {
          details: a?.creator_details
        })
      })
    }), /* @__PURE__ */ b("div", {
      className: "post__content",
      children: [/* @__PURE__ */ b("div", {
        className: "post__info",
        children: [/* @__PURE__ */ t("a", {
          href: `${c}${a.creator_details?.did}`,
          target: "_blank",
          rel: "noreferrer",
          children: et(a.creator_details)
        }), /* @__PURE__ */ t("span", {
          className: "badge",
          children: tt(a.creator_details)
        }), /* @__PURE__ */ b("span", {
          className: "post__time",
          children: ["\u2022 ", X || Je(a.timestamp)]
        })]
      }), /* @__PURE__ */ b("div", {
        className: "post__body content",
        children: [A == 2 ? "This post is deleted" : V ? /* @__PURE__ */ t(Ne, {
          context: a.context,
          editPost: a,
          cancelEdit: (E) => I(E),
          callback: G
        }) : /* @__PURE__ */ t(xe, {
          children: Yt(a.content, k, s, c)
        }), a.count_commits > 1 && A != 2 && /* @__PURE__ */ t("span", {
          className: "post__edited",
          children: "(edited)"
        })]
      }), a?.indexing_metadata?.urlMetadata && /* @__PURE__ */ b("div", {
        className: "post__metadata",
        children: [a?.indexing_metadata?.urlMetadata?.image && /* @__PURE__ */ t("a", {
          href: a?.indexing_metadata?.urlMetadata?.url,
          className: "post__metadata__image",
          target: "_blank",
          rel: "noreferrer",
          children: /* @__PURE__ */ t("img", {
            src: a?.indexing_metadata?.urlMetadata?.image
          })
        }), /* @__PURE__ */ b("div", {
          className: "post__metadata__content",
          children: [/* @__PURE__ */ t("small", {
            children: a?.indexing_metadata?.urlMetadata?.source
          }), /* @__PURE__ */ t("h1", {
            children: /* @__PURE__ */ t("a", {
              href: a?.indexing_metadata?.urlMetadata?.url,
              target: "_blank",
              rel: "noreferrer",
              children: a?.indexing_metadata?.urlMetadata?.title
            })
          }), /* @__PURE__ */ t("p", {
            children: a?.indexing_metadata?.urlMetadata?.description
          })]
        })]
      }), k && /* @__PURE__ */ t("button", {
        className: "gradient-button",
        onClick: () => Z(!1),
        children: "View more"
      }), A != 2 && /* @__PURE__ */ b("div", {
        className: "post__menu",
        children: [/* @__PURE__ */ b("div", {
          className: "post__reactions",
          children: [/* @__PURE__ */ t("button", {
            className: `${i?.stream_id === a.stream_id ? "active" : ""}`,
            onClick: () => p && p(a),
            title: "Reply",
            children: /* @__PURE__ */ t("span", {
              className: "icon",
              children: y.replyto
            })
          }), /* @__PURE__ */ b("button", {
            className: u === "like" ? "active" : "",
            onClick: () => W("like"),
            disabled: u === "like",
            title: "Like",
            children: [/* @__PURE__ */ t("span", {
              className: "icon",
              children: u === "like" ? y.likeActive : y.like
            }), /* @__PURE__ */ t("span", {
              children: a.count_likes
            })]
          }), /* @__PURE__ */ b("button", {
            className: u === "haha" ? "active" : "",
            onClick: () => W("haha"),
            disabled: u === "haha",
            title: "HAHA",
            children: [/* @__PURE__ */ t("span", {
              className: "icon",
              children: u === "haha" ? y.hahaActive : y.haha
            }), /* @__PURE__ */ t("span", {
              children: a.count_haha
            })]
          }), /* @__PURE__ */ b("button", {
            className: u === "downvote" ? "active" : "",
            onClick: () => W("downvote"),
            disabled: u === "downvote",
            title: "Downvote",
            children: [/* @__PURE__ */ t("span", {
              className: "icon",
              children: u === "downvote" ? y.downvoteActive : y.downvote
            }), /* @__PURE__ */ t("span", {
              children: a.count_downvotes
            })]
          })]
        }), a.stream_id !== "new_post" && /* @__PURE__ */ b("div", {
          className: "post__actions",
          children: [n?.creator_details?.did === _?.did && /* @__PURE__ */ t(Gt, {
            onAction: z,
            children: /* @__PURE__ */ t("button", {
              children: /* @__PURE__ */ t("span", {
                className: "icon",
                children: /* @__PURE__ */ t(Bt, {})
              })
            })
          }), /* @__PURE__ */ t("a", {
            href: `https://cerscan.com/mainnet/stream/${a.stream_id}`,
            className: "cerscan-proof",
            target: "_blank",
            rel: "noreferrer",
            title: "View on Cerscan",
            children: /* @__PURE__ */ t("span", {
              className: "icon",
              children: /* @__PURE__ */ t(Ht, {})
            })
          })]
        })]
      })]
    }), /* @__PURE__ */ t(Kt, {
      open: P,
      setOpen: j,
      confirm: J
    })]
  });
}, it = ({
  items: n,
  replies: i,
  replyTo: s = null,
  onClickReply: p
}) => /* @__PURE__ */ t(xe, {
  children: n.map((l) => /* @__PURE__ */ b("div", {
    className: "replies",
    children: [/* @__PURE__ */ t(st, {
      post: l,
      replyTo: s,
      onClickReply: () => p(l)
    }), i[l.stream_id] !== void 0 && /* @__PURE__ */ t(it, {
      items: i[l.stream_id],
      replies: i,
      replyTo: s,
      onClickReply: p
    })]
  }, l.stream_id))
}), Jt = ({
  context: n,
  master: i,
  innerPostbox: s,
  replyTo: p,
  onClickReply: l,
  onNewPost: w
}) => {
  const {
    orbis: _
  } = ve(), y = te(null), [c, u] = x([]), [h, a] = x(0), [v, k] = x(!1), Z = Xe(() => c.reduce((d, P) => (d[P.reply_to] = [...d[P.reply_to] || [], P], d), {}), [c]), V = async () => {
    if (!_ || !n || !i || v)
      return;
    k(!0);
    const {
      data: A,
      error: d
    } = await _.getPosts({
      context: n,
      master: i.stream_id
    }, h);
    A && (A.reverse(), u([...c, ...A]), a((P) => P + 1)), d && console.error(d), k(!1);
  }, I = (A) => {
    const d = [...c, A];
    u(d), l(null), A.stream_id.startsWith("new_post-") && setTimeout(() => {
      const P = y.current?.querySelector(`.${A.stream_id}`);
      w(P);
    }, 100);
  };
  return U(() => {
    n && i && V();
  }, [n, i]), /* @__PURE__ */ b("div", {
    ref: y,
    children: [Z[i.stream_id] !== void 0 && /* @__PURE__ */ t(it, {
      items: Z[i.stream_id],
      replies: Z,
      replyTo: p,
      onClickReply: l
    }), p && /* @__PURE__ */ t("div", {
      ref: s,
      children: /* @__PURE__ */ t(Ne, {
        context: n,
        replyTo: p,
        placeholder: "Reply this comment...",
        cancelReplyTo: () => l(null),
        callback: I
      })
    })]
  });
}, Qt = ({
  post: n,
  overflowLimit: i = 0,
  showToggleRepliesButton: s = !1
}) => {
  const p = te(null), l = te(null), [w, _] = x(!1), [y, c] = x(null), [u, h] = x(null);
  return U(() => {
    if (u !== null && l.current) {
      const a = l.current?.closest(".comments__posts");
      if (!a)
        return;
      const v = a.offsetHeight / 2;
      u === "masterPost" && l.current ? setTimeout(() => {
        a.scrollTo({
          top: l.current?.offsetTop - a.offsetTop,
          behavior: "smooth"
        });
      }, 500) : u === "postbox" && p.current ? setTimeout(() => {
        a.scrollTo({
          top: p.current?.offsetTop - v,
          behavior: "smooth"
        });
      }, 500) : setTimeout(() => {
        const k = u;
        a.scrollTo({
          top: k.offsetTop - v,
          behavior: "smooth"
        });
      }, 500);
    }
    return () => {
      setTimeout(() => {
        h(null);
      }, 500);
    };
  }, [y, w, u]), U(() => {
    w || c(null);
  }, [w]), /* @__PURE__ */ b("div", {
    ref: l,
    className: "comments__post",
    children: [/* @__PURE__ */ t(st, {
      post: n,
      replyTo: y,
      overflowLimit: i,
      onClickReply: () => {
        c(n), _(!0), h("postbox");
      }
    }), s && n.count_replies !== void 0 && n.count_replies > 0 && /* @__PURE__ */ b("button", {
      className: `comments__post__toggle-replies ${w ? "opened" : ""}`,
      onClick: () => {
        h(w ? null : "masterPost"), _((a) => !a);
      },
      children: [w ? "Hide" : "Show", " replies"]
    }), (!s || w) && /* @__PURE__ */ t(Jt, {
      context: n.context,
      master: n,
      replyTo: y,
      innerPostbox: p,
      onClickReply: (a) => {
        c(a), h("postbox");
      },
      onNewPost: (a) => h(a)
    })]
  });
}, Xt = ({
  onClick: n,
  text: i = "Load older posts"
}) => /* @__PURE__ */ t("button", {
  className: "gradient-button",
  onClick: n,
  children: i
}), er = () => /* @__PURE__ */ t("div", {
  className: "loading",
  children: "Loading..."
}), tr = () => /* @__PURE__ */ t("div", {
  className: "powered-by-orbis",
  children: /* @__PURE__ */ t("a", {
    href: "https://orbis.club",
    target: "_blank",
    rel: "noreferrer",
    children: /* @__PURE__ */ b("svg", {
      stroke: "currentColor",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 300 42.58",
      children: [/* @__PURE__ */ t("path", {
        d: "M2.12,42.48H0V20.17a19.39,19.39,0,0,1,2.41-.61,19.1,19.1,0,0,1,3.72-.3,9.12,9.12,0,0,1,3.38.6,7.32,7.32,0,0,1,2.6,1.75,7.84,7.84,0,0,1,1.7,2.77,10.66,10.66,0,0,1,.6,3.69,12,12,0,0,1-.5,3.53,7.9,7.9,0,0,1-1.49,2.78A6.92,6.92,0,0,1,10,36.19a7.79,7.79,0,0,1-3.25.65,7.82,7.82,0,0,1-2.88-.48,7.42,7.42,0,0,1-1.78-.89Zm0-9.07a6.14,6.14,0,0,0,.73.49,6.59,6.59,0,0,0,1,.49,9,9,0,0,0,1.27.38,7.48,7.48,0,0,0,1.44.14,5.85,5.85,0,0,0,2.62-.53,4.53,4.53,0,0,0,1.71-1.47,6.22,6.22,0,0,0,.95-2.19,11.33,11.33,0,0,0,.29-2.65A7.21,7.21,0,0,0,10.5,23a5.77,5.77,0,0,0-4.4-1.78,17,17,0,0,0-2.53.15,9.61,9.61,0,0,0-1.45.31Z"
      }), /* @__PURE__ */ t("path", {
        d: "M33.39,28a10.87,10.87,0,0,1-.57,3.62,7.94,7.94,0,0,1-1.6,2.77,7,7,0,0,1-2.43,1.78,7.8,7.8,0,0,1-6.19,0,7,7,0,0,1-2.43-1.78,7.94,7.94,0,0,1-1.6-2.77,11.78,11.78,0,0,1,0-7.24,8.32,8.32,0,0,1,1.6-2.79,7.18,7.18,0,0,1,2.43-1.79,7.92,7.92,0,0,1,6.19,0,7.18,7.18,0,0,1,2.43,1.79,8.32,8.32,0,0,1,1.6,2.79A11,11,0,0,1,33.39,28Zm-2.25,0a7.92,7.92,0,0,0-1.47-5,4.74,4.74,0,0,0-4-1.88,4.76,4.76,0,0,0-4,1.88,7.92,7.92,0,0,0-1.47,5,7.85,7.85,0,0,0,1.47,5,4.8,4.8,0,0,0,4,1.86,4.78,4.78,0,0,0,4-1.86A7.85,7.85,0,0,0,31.14,28Z"
      }), /* @__PURE__ */ t("path", {
        d: "M48.87,19.59c.19,1.08.45,2.24.76,3.47s.66,2.48,1,3.75.78,2.53,1.21,3.76.85,2.41,1.29,3.5c.37-.83.76-1.83,1.18-3s.82-2.43,1.24-3.74.8-2.64,1.16-4,.66-2.59.9-3.74h2.09c-.79,3.31-1.64,6.33-2.57,9.07s-2,5.33-3.06,7.79h-2c-.32-.77-.67-1.63-1-2.57s-.74-2-1.12-3-.75-2.21-1.11-3.39-.7-2.4-1-3.63c-.32,1.24-.66,2.45-1,3.64s-.73,2.31-1.11,3.39-.75,2.09-1.11,3-.7,1.8-1,2.56h-2a81.16,81.16,0,0,1-3.06-7.8c-.92-2.74-1.78-5.76-2.56-9.06h2.25c.24,1.15.54,2.39.9,3.73s.75,2.66,1.17,4,.83,2.56,1.26,3.73.82,2.18,1.19,3c.42-1.08.83-2.24,1.25-3.48s.81-2.49,1.18-3.76.71-2.5,1-3.73.61-2.39.87-3.47Z"
      }), /* @__PURE__ */ t("path", {
        d: "M62.25,28a10.73,10.73,0,0,1,.63-3.86,8.55,8.55,0,0,1,1.67-2.76,6.45,6.45,0,0,1,2.35-1.65,7.28,7.28,0,0,1,2.72-.53,6.36,6.36,0,0,1,4.94,2c1.23,1.35,1.84,3.42,1.84,6.23,0,.17,0,.34,0,.52s0,.34,0,.49H64.5A7.42,7.42,0,0,0,66,33.22a5.73,5.73,0,0,0,4.57,1.66,9.17,9.17,0,0,0,2.74-.33A10.6,10.6,0,0,0,74.8,34l.39,1.83a8.9,8.9,0,0,1-1.71.62,11.15,11.15,0,0,1-3,.35,9.7,9.7,0,0,1-3.78-.65,6.82,6.82,0,0,1-2.58-1.82,7.31,7.31,0,0,1-1.46-2.79A12.8,12.8,0,0,1,62.25,28Zm12-1.34A6.77,6.77,0,0,0,73,22.55a4,4,0,0,0-3.33-1.46,4.5,4.5,0,0,0-2,.45,5.31,5.31,0,0,0-1.56,1.23,5.61,5.61,0,0,0-1,1.77,7.55,7.55,0,0,0-.44,2.12Z"
      }), /* @__PURE__ */ t("path", {
        d: "M86.87,19.26a12.37,12.37,0,0,1,2,.16,6,6,0,0,1,1.29.33l-.42,1.83a4.77,4.77,0,0,0-1.06-.28,12,12,0,0,0-2.11-.15,10,10,0,0,0-2.2.2,6.84,6.84,0,0,0-1.09.32V36.45H81.13V20.37a15.3,15.3,0,0,1,2.25-.73A14,14,0,0,1,86.87,19.26Z"
      }), /* @__PURE__ */ t("path", {
        d: "M92.31,28A10.72,10.72,0,0,1,93,24.14a8.53,8.53,0,0,1,1.66-2.76A6.62,6.62,0,0,1,97,19.73a7.32,7.32,0,0,1,2.72-.53,6.33,6.33,0,0,1,4.94,2c1.23,1.35,1.85,3.42,1.85,6.23,0,.17,0,.34,0,.52s0,.34,0,.49H94.56a7.48,7.48,0,0,0,1.54,4.76,5.7,5.7,0,0,0,4.56,1.66,9.12,9.12,0,0,0,2.74-.33,11.41,11.41,0,0,0,1.47-.55l.39,1.83a9.48,9.48,0,0,1-1.71.62,11.2,11.2,0,0,1-3,.35,9.78,9.78,0,0,1-3.79-.65,6.71,6.71,0,0,1-2.57-1.82,7.19,7.19,0,0,1-1.47-2.79A13.19,13.19,0,0,1,92.31,28Zm12-1.34A6.64,6.64,0,0,0,103,22.55a4,4,0,0,0-3.32-1.46,4.5,4.5,0,0,0-2,.45,5.35,5.35,0,0,0-1.57,1.23,5.78,5.78,0,0,0-1,1.77,7.22,7.22,0,0,0-.44,2.12Z"
      }), /* @__PURE__ */ t("path", {
        d: "M124.6,35.92a17.79,17.79,0,0,1-2.42.62,18.92,18.92,0,0,1-3.71.3,8.92,8.92,0,0,1-3.38-.61,7.3,7.3,0,0,1-2.61-1.74,7.82,7.82,0,0,1-1.69-2.77,10.42,10.42,0,0,1-.61-3.69,11.74,11.74,0,0,1,.51-3.54,8.14,8.14,0,0,1,1.48-2.78,6.68,6.68,0,0,1,2.4-1.83,7.78,7.78,0,0,1,3.24-.65,8.14,8.14,0,0,1,2.89.47,7.76,7.76,0,0,1,1.78.9V11.53l2.12-.39Zm-2.12-13.27a8.64,8.64,0,0,0-.74-.49,8.14,8.14,0,0,0-1-.49,9.15,9.15,0,0,0-1.28-.37,6.6,6.6,0,0,0-1.43-.15,5.58,5.58,0,0,0-2.62.56,4.76,4.76,0,0,0-1.72,1.48,6.24,6.24,0,0,0-.94,2.18,11.47,11.47,0,0,0-.3,2.66,7.21,7.21,0,0,0,1.67,5.11,5.75,5.75,0,0,0,4.4,1.77,19,19,0,0,0,2.53-.14,9.61,9.61,0,0,0,1.45-.31Z"
      }), /* @__PURE__ */ t("path", {
        d: "M148.16,20.6a7.76,7.76,0,0,1,1.78-.9,8.1,8.1,0,0,1,2.89-.47,7.78,7.78,0,0,1,3.24.65,6.77,6.77,0,0,1,2.4,1.83A8.14,8.14,0,0,1,160,24.49a11.74,11.74,0,0,1,.51,3.54,10.42,10.42,0,0,1-.61,3.69,7.82,7.82,0,0,1-1.69,2.77,7.3,7.3,0,0,1-2.61,1.74,8.92,8.92,0,0,1-3.38.61,18.92,18.92,0,0,1-3.71-.3,17.79,17.79,0,0,1-2.42-.62V11.53l2.12-.39Zm0,13.86a9.61,9.61,0,0,0,1.45.31,18.88,18.88,0,0,0,2.53.14,5.75,5.75,0,0,0,4.4-1.77A7.21,7.21,0,0,0,158.21,28a11.47,11.47,0,0,0-.3-2.66,6.24,6.24,0,0,0-.94-2.18,4.81,4.81,0,0,0-1.71-1.48,5.65,5.65,0,0,0-2.63-.56,6.6,6.6,0,0,0-1.43.15,8.78,8.78,0,0,0-1.28.37,8.14,8.14,0,0,0-1,.49,8.64,8.64,0,0,0-.74.49Z"
      }), /* @__PURE__ */ t("path", {
        d: "M169.65,36.8c-.71-1.32-1.39-2.71-2.06-4.14s-1.29-2.88-1.86-4.35-1.11-2.94-1.59-4.4-.89-2.91-1.24-4.32h2.25c.24,1,.54,2.17.91,3.37s.79,2.45,1.26,3.74,1,2.6,1.54,3.94,1.18,2.68,1.85,4c.49-1.34.91-2.61,1.29-3.81s.72-2.38,1-3.56.62-2.4.92-3.64.6-2.58.91-4H177q-1.06,4.72-2.39,9.2A78.17,78.17,0,0,1,171.71,37a18,18,0,0,1-1.28,2.53A7.45,7.45,0,0,1,169,41.24a5.21,5.21,0,0,1-1.87,1,8.46,8.46,0,0,1-2.5.33,5.27,5.27,0,0,1-1.49-.2,5.39,5.39,0,0,1-.84-.29l.43-1.76a3.35,3.35,0,0,0,.73.27,4.36,4.36,0,0,0,1.26.18,6.45,6.45,0,0,0,1.65-.19,3.59,3.59,0,0,0,1.32-.67,4.93,4.93,0,0,0,1.07-1.22A10.93,10.93,0,0,0,169.65,36.8Z"
      }), /* @__PURE__ */ t("path", {
        d: "M216.92,24.48a16.13,16.13,0,0,1-.85,5.39A12.12,12.12,0,0,1,213.64,34a10.77,10.77,0,0,1-3.79,2.67,12.17,12.17,0,0,1-4.88,1,12,12,0,0,1-4.86-1A10.88,10.88,0,0,1,196.34,34a12.32,12.32,0,0,1-2.45-4.14,15.63,15.63,0,0,1-.88-5.39,15.4,15.4,0,0,1,.88-5.35A11.91,11.91,0,0,1,196.37,15a10.83,10.83,0,0,1,3.78-2.65,13,13,0,0,1,9.65,0A10.6,10.6,0,0,1,213.59,15,12.16,12.16,0,0,1,216,19.13,15.4,15.4,0,0,1,216.92,24.48Zm-5.9,0a9.76,9.76,0,0,0-1.6-5.88,5.66,5.66,0,0,0-8.91,0,9.76,9.76,0,0,0-1.59,5.88,10,10,0,0,0,1.59,6,5.63,5.63,0,0,0,8.91,0A10,10,0,0,0,211,24.48Z"
      }), /* @__PURE__ */ t("path", {
        d: "M237.07,17.24c-.47-.15-1.13-.32-2-.5a15,15,0,0,0-2.93-.26,12.38,12.38,0,0,0-2,.19,11.9,11.9,0,0,0-1.5.34V37h-5.76V13.24a31.28,31.28,0,0,1,4.17-1.16,25.55,25.55,0,0,1,5.54-.55c.39,0,.83,0,1.34.07s1,.11,1.52.19,1,.17,1.48.29a10.7,10.7,0,0,1,1.14.31Z"
      }), /* @__PURE__ */ t("path", {
        d: "M264.51,24.53a15.58,15.58,0,0,1-.88,5.41,11.78,11.78,0,0,1-2.52,4.12,11,11,0,0,1-4,2.62,14.63,14.63,0,0,1-5.29.91,34,34,0,0,1-5.45-.43,34.71,34.71,0,0,1-4.32-1V1L247.84,0V12.91a13.21,13.21,0,0,1,2.45-.95,11.2,11.2,0,0,1,3.22-.43,11.35,11.35,0,0,1,4.69.93,9.21,9.21,0,0,1,3.45,2.64,12.17,12.17,0,0,1,2.12,4.12A17.84,17.84,0,0,1,264.51,24.53Zm-5.91-.09a10.2,10.2,0,0,0-1.45-5.81,5.16,5.16,0,0,0-4.6-2.15,8.85,8.85,0,0,0-4.71,1.38V32.2a12.53,12.53,0,0,0,1.59.26,19.76,19.76,0,0,0,2.36.12,6.16,6.16,0,0,0,5-2.16A9,9,0,0,0,258.6,24.44Z"
      }), /* @__PURE__ */ t("path", {
        d: "M276.9,4.76a3.32,3.32,0,0,1-1,2.58,3.6,3.6,0,0,1-2.48.95,3.64,3.64,0,0,1-2.52-.95,3.32,3.32,0,0,1-1.05-2.58,3.37,3.37,0,0,1,1.05-2.62,3.64,3.64,0,0,1,2.52-1,3.6,3.6,0,0,1,2.48,1A3.37,3.37,0,0,1,276.9,4.76Z"
      }), /* @__PURE__ */ t("rect", {
        x: "270.51",
        y: "12.05",
        width: "5.76",
        height: "24.91"
      }), /* @__PURE__ */ t("path", {
        d: "M289.85,32.82a7.52,7.52,0,0,0,3.34-.55,1.94,1.94,0,0,0,1.05-1.88,2.47,2.47,0,0,0-1.12-2.05,16.73,16.73,0,0,0-3.7-1.76,30.09,30.09,0,0,1-2.88-1.21,9.87,9.87,0,0,1-2.26-1.5,6.13,6.13,0,0,1-1.5-2.08,7.13,7.13,0,0,1-.55-3,6.48,6.48,0,0,1,2.53-5.41,10.83,10.83,0,0,1,6.86-2,23.33,23.33,0,0,1,7.19,1.19l-1.05,4.67a13.68,13.68,0,0,0-2.43-.78,14.56,14.56,0,0,0-3.43-.36,6.08,6.08,0,0,0-2.86.59A2,2,0,0,0,288,18.58a2.65,2.65,0,0,0,.21,1.09,2.43,2.43,0,0,0,.74.89,7.62,7.62,0,0,0,1.38.81,22,22,0,0,0,2.1.83,34,34,0,0,1,3.48,1.5,9.36,9.36,0,0,1,2.35,1.67,5.71,5.71,0,0,1,1.36,2.12,8.3,8.3,0,0,1,.43,2.85,6.15,6.15,0,0,1-2.64,5.41c-1.77,1.22-4.28,1.84-7.55,1.84a20.84,20.84,0,0,1-5.29-.55,28.87,28.87,0,0,1-2.81-.88l1-4.81a28.54,28.54,0,0,0,3.07,1A16.2,16.2,0,0,0,289.85,32.82Z"
      })]
    })
  })
}), cr = ({
  context: n,
  algorithm: i = "all-context-master-posts",
  postboxPlaceholder: s = "Share your comment here",
  overflowLimit: p = 0,
  showToggleRepliesButton: l = !1
}) => {
  const w = te(), {
    orbis: _,
    showPoweredByOrbis: y
  } = ve(), [c, u] = x(0), [h, a] = x([]), [v, k] = x(!1), [Z, V] = x(!1), [I, A] = x(0), [d, P] = x(!1), j = async (O) => {
    if (!_ || !n || v)
      return;
    const B = O?.reset ? [] : [...h];
    O?.polling || (P(!0), k(!0));
    const {
      data: q,
      error: W
    } = await _.getPosts({
      context: n,
      algorithm: i
    }, O?.polling || O?.reset ? 0 : c);
    if (q)
      if (O?.polling) {
        const z = q.filter((G) => !B.some((J) => G.stream_id === J.stream_id));
        z.length > 0 && (a([...z, ...B]), A((G) => G + z.length));
      } else {
        a([...B, ...q]);
        const z = O?.reset ? 1 : c + 1;
        u(z), V(q.length >= 50), P(!1), k(!1);
      }
    W && console.error(W);
  }, X = (O) => {
    const B = [O, ...h];
    a(B);
  };
  return at(() => {
    j({
      polling: !0
    });
  }, d ? null : 1e4), U(() => {
    n && (u(0), setTimeout(() => {
      j({
        reset: !0
      });
    }, 100));
  }, [n]), /* @__PURE__ */ b("div", {
    ref: w,
    className: "comments",
    children: [/* @__PURE__ */ t("div", {
      className: "comments__postbox",
      children: /* @__PURE__ */ t(Ne, {
        context: n,
        placeholder: s,
        popoverPosition: "bottom",
        callback: X,
        enterToShare: !1
      })
    }), /* @__PURE__ */ b("div", {
      className: "comments__posts",
      children: [h.map((O) => /* @__PURE__ */ t(Qt, {
        post: O,
        overflowLimit: p,
        showToggleRepliesButton: l
      }, O.stream_id)), Z && !v && /* @__PURE__ */ t(Xt, {
        onClick: () => j()
      }), v && /* @__PURE__ */ t(er, {}), I > 0 && /* @__PURE__ */ b("div", {
        children: [I, " New ", I > 1 ? "Messages" : "Message"]
      })]
    }), y && /* @__PURE__ */ t(tr, {})]
  });
};
export {
  cr as Comments,
  ir as OrbisProvider,
  ve as useOrbis
};
