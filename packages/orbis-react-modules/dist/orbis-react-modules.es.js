import Qe, { createContext as Mt, useState as x, useContext as Dt, useRef as X, useEffect as Y, useMemo as Xe } from "react";
import { Orbis as Zt } from "@orbisclub/orbis-sdk";
import oe from "react-string-replace";
import { DateTime as Ee } from "luxon";
import jt from "ethereum-blockies-base64";
import * as Q from "@radix-ui/react-dropdown-menu";
import * as K from "@radix-ui/react-alert-dialog";
var me = { exports: {} }, se = {};
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
    return se;
  Ue = 1;
  var n = Qe, s = Symbol.for("react.element"), o = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, u = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(v, l, c) {
    var h, i = {}, y = null, O = null;
    c !== void 0 && (y = "" + c), l.key !== void 0 && (y = "" + l.key), l.ref !== void 0 && (O = l.ref);
    for (h in l)
      p.call(l, h) && !w.hasOwnProperty(h) && (i[h] = l[h]);
    if (v && v.defaultProps)
      for (h in l = v.defaultProps, l)
        i[h] === void 0 && (i[h] = l[h]);
    return { $$typeof: s, type: v, key: y, ref: O, props: i, _owner: u.current };
  }
  return se.Fragment = o, se.jsx = E, se.jsxs = E, se;
}
var ie = {};
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
function Lt() {
  return qe || (qe = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Qe, s = Symbol.for("react.element"), o = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), v = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), i = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), Z = Symbol.iterator, $ = "@@iterator";
    function V(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Z && e[Z] || e[$];
      return typeof r == "function" ? r : null;
    }
    var _ = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), d = 1; d < r; d++)
          a[d - 1] = arguments[d];
        k("error", e, a);
      }
    }
    function k(e, r, a) {
      {
        var d = _.ReactDebugCurrentFrame, A = d.getStackAddendum();
        A !== "" && (r += "%s", a = a.concat([A]));
        var P = a.map(function(C) {
          return String(C);
        });
        P.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, P);
      }
    }
    var N = !1, U = !1, L = !1, z = !1, H = !1, B;
    B = Symbol.for("react.module.reference");
    function J(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === p || e === w || H || e === u || e === c || e === h || z || e === O || N || U || L || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === i || e.$$typeof === E || e.$$typeof === v || e.$$typeof === l || e.$$typeof === B || e.getModuleId !== void 0));
    }
    function ne(e, r, a) {
      var d = e.displayName;
      if (d)
        return d;
      var A = r.displayName || r.name || "";
      return A !== "" ? a + "(" + A + ")" : a;
    }
    function ee(e) {
      return e.displayName || "Context";
    }
    function j(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case o:
          return "Portal";
        case w:
          return "Profiler";
        case u:
          return "StrictMode";
        case c:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var r = e;
            return ee(r) + ".Consumer";
          case E:
            var a = e;
            return ee(a._context) + ".Provider";
          case l:
            return ne(e, e.render, "ForwardRef");
          case i:
            var d = e.displayName || null;
            return d !== null ? d : j(e.type) || "Memo";
          case y: {
            var A = e, P = A._payload, C = A._init;
            try {
              return j(C(P));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var R = Object.assign, f = 0, S, D, F, q, ke, Ne, Se;
    function Te() {
    }
    Te.__reactDisabledLog = !0;
    function ct() {
      {
        if (f === 0) {
          S = console.log, D = console.info, F = console.warn, q = console.error, ke = console.group, Ne = console.groupCollapsed, Se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Te,
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
        f++;
      }
    }
    function lt() {
      {
        if (f--, f === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: R({}, e, {
              value: S
            }),
            info: R({}, e, {
              value: D
            }),
            warn: R({}, e, {
              value: F
            }),
            error: R({}, e, {
              value: q
            }),
            group: R({}, e, {
              value: ke
            }),
            groupCollapsed: R({}, e, {
              value: Ne
            }),
            groupEnd: R({}, e, {
              value: Se
            })
          });
        }
        f < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ve = _.ReactCurrentDispatcher, _e;
    function ce(e, r, a) {
      {
        if (_e === void 0)
          try {
            throw Error();
          } catch (A) {
            var d = A.stack.trim().match(/\n( *(at )?)/);
            _e = d && d[1] || "";
          }
        return `
` + _e + e;
      }
    }
    var ge = !1, le;
    {
      var ut = typeof WeakMap == "function" ? WeakMap : Map;
      le = new ut();
    }
    function Oe(e, r) {
      if (!e || ge)
        return "";
      {
        var a = le.get(e);
        if (a !== void 0)
          return a;
      }
      var d;
      ge = !0;
      var A = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var P;
      P = ve.current, ve.current = null, ct();
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
            } catch (G) {
              d = G;
            }
            Reflect.construct(e, [], C);
          } else {
            try {
              C.call();
            } catch (G) {
              d = G;
            }
            e.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (G) {
            d = G;
          }
          e();
        }
      } catch (G) {
        if (G && d && typeof G.stack == "string") {
          for (var g = G.stack.split(`
`), I = d.stack.split(`
`), T = g.length - 1, M = I.length - 1; T >= 1 && M >= 0 && g[T] !== I[M]; )
            M--;
          for (; T >= 1 && M >= 0; T--, M--)
            if (g[T] !== I[M]) {
              if (T !== 1 || M !== 1)
                do
                  if (T--, M--, M < 0 || g[T] !== I[M]) {
                    var W = `
` + g[T].replace(" at new ", " at ");
                    return e.displayName && W.includes("<anonymous>") && (W = W.replace("<anonymous>", e.displayName)), typeof e == "function" && le.set(e, W), W;
                  }
                while (T >= 1 && M >= 0);
              break;
            }
        }
      } finally {
        ge = !1, ve.current = P, lt(), Error.prepareStackTrace = A;
      }
      var re = e ? e.displayName || e.name : "", Ye = re ? ce(re) : "";
      return typeof e == "function" && le.set(e, Ye), Ye;
    }
    function dt(e, r, a) {
      return Oe(e, !1);
    }
    function ft(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ue(e, r, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Oe(e, ft(e));
      if (typeof e == "string")
        return ce(e);
      switch (e) {
        case c:
          return ce("Suspense");
        case h:
          return ce("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return dt(e.render);
          case i:
            return ue(e.type, r, a);
          case y: {
            var d = e, A = d._payload, P = d._init;
            try {
              return ue(P(A), r, a);
            } catch {
            }
          }
        }
      return "";
    }
    var de = Object.prototype.hasOwnProperty, Me = {}, De = _.ReactDebugCurrentFrame;
    function fe(e) {
      if (e) {
        var r = e._owner, a = ue(e.type, e._source, r ? r.type : null);
        De.setExtraStackFrame(a);
      } else
        De.setExtraStackFrame(null);
    }
    function mt(e, r, a, d, A) {
      {
        var P = Function.call.bind(de);
        for (var C in e)
          if (P(e, C)) {
            var g = void 0;
            try {
              if (typeof e[C] != "function") {
                var I = Error((d || "React class") + ": " + a + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw I.name = "Invariant Violation", I;
              }
              g = e[C](r, C, d, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              g = T;
            }
            g && !(g instanceof Error) && (fe(A), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", a, C, typeof g), fe(null)), g instanceof Error && !(g.message in Me) && (Me[g.message] = !0, fe(A), m("Failed %s type: %s", a, g.message), fe(null));
          }
      }
    }
    var ht = Array.isArray;
    function be(e) {
      return ht(e);
    }
    function pt(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
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
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pt(e)), Ze(e);
    }
    var ae = _.ReactCurrentOwner, _t = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, Le, we;
    we = {};
    function gt(e) {
      if (de.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function bt(e) {
      if (de.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function wt(e, r) {
      if (typeof e.ref == "string" && ae.current && r && ae.current.stateNode !== r) {
        var a = j(ae.current.type);
        we[a] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(ae.current.type), e.ref), we[a] = !0);
      }
    }
    function Ct(e, r) {
      {
        var a = function() {
          Ie || (Ie = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function yt(e, r) {
      {
        var a = function() {
          Le || (Le = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var Rt = function(e, r, a, d, A, P, C) {
      var g = {
        $$typeof: s,
        type: e,
        key: r,
        ref: a,
        props: C,
        _owner: P
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
        value: d
      }), Object.defineProperty(g, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    };
    function Et(e, r, a, d, A) {
      {
        var P, C = {}, g = null, I = null;
        a !== void 0 && (je(a), g = "" + a), bt(r) && (je(r.key), g = "" + r.key), gt(r) && (I = r.ref, wt(r, A));
        for (P in r)
          de.call(r, P) && !_t.hasOwnProperty(P) && (C[P] = r[P]);
        if (e && e.defaultProps) {
          var T = e.defaultProps;
          for (P in T)
            C[P] === void 0 && (C[P] = T[P]);
        }
        if (g || I) {
          var M = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          g && Ct(C, M), I && yt(C, M);
        }
        return Rt(e, g, I, A, d, ae.current, C);
      }
    }
    var Ce = _.ReactCurrentOwner, Fe = _.ReactDebugCurrentFrame;
    function te(e) {
      if (e) {
        var r = e._owner, a = ue(e.type, e._source, r ? r.type : null);
        Fe.setExtraStackFrame(a);
      } else
        Fe.setExtraStackFrame(null);
    }
    var ye;
    ye = !1;
    function Re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function $e() {
      {
        if (Ce.current) {
          var e = j(Ce.current.type);
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
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
    }
    var Ve = {};
    function xt(e) {
      {
        var r = $e();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
    }
    function Be(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = xt(r);
        if (Ve[a])
          return;
        Ve[a] = !0;
        var d = "";
        e && e._owner && e._owner !== Ce.current && (d = " It was passed a child from " + j(e._owner.type) + "."), te(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, d), te(null);
      }
    }
    function He(e, r) {
      {
        if (typeof e != "object")
          return;
        if (be(e))
          for (var a = 0; a < e.length; a++) {
            var d = e[a];
            Re(d) && Be(d, r);
          }
        else if (Re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var A = V(e);
          if (typeof A == "function" && A !== e.entries)
            for (var P = A.call(e), C; !(C = P.next()).done; )
              Re(C.value) && Be(C.value, r);
        }
      }
    }
    function Pt(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var a;
        if (typeof r == "function")
          a = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || r.$$typeof === i))
          a = r.propTypes;
        else
          return;
        if (a) {
          var d = j(r);
          mt(a, e.props, "prop", d, e);
        } else if (r.PropTypes !== void 0 && !ye) {
          ye = !0;
          var A = j(r);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", A || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function kt(e) {
      {
        for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
          var d = r[a];
          if (d !== "children" && d !== "key") {
            te(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), te(null);
            break;
          }
        }
        e.ref !== null && (te(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), te(null));
      }
    }
    function We(e, r, a, d, A, P) {
      {
        var C = J(e);
        if (!C) {
          var g = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var I = At(A);
          I ? g += I : g += $e();
          var T;
          e === null ? T = "null" : be(e) ? T = "array" : e !== void 0 && e.$$typeof === s ? (T = "<" + (j(e.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : T = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, g);
        }
        var M = Et(e, r, a, A, P);
        if (M == null)
          return M;
        if (C) {
          var W = r.children;
          if (W !== void 0)
            if (d)
              if (be(W)) {
                for (var re = 0; re < W.length; re++)
                  He(W[re], e);
                Object.freeze && Object.freeze(W);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              He(W, e);
        }
        return e === p ? kt(M) : Pt(M), M;
      }
    }
    function Nt(e, r, a) {
      return We(e, r, a, !0);
    }
    function St(e, r, a) {
      return We(e, r, a, !1);
    }
    var Tt = St, Ot = Nt;
    ie.Fragment = p, ie.jsx = Tt, ie.jsxs = Ot;
  }()), ie;
}
(function(n) {
  process.env.NODE_ENV === "production" ? n.exports = It() : n.exports = Lt();
})(me);
const Ae = me.exports.Fragment, t = me.exports.jsx, b = me.exports.jsxs, ze = () => /* @__PURE__ */ t("svg", {
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
}), Ft = () => /* @__PURE__ */ t("svg", {
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
}), xe = (n) => {
  if (!n)
    return "-";
  const s = n.substring(0, 5), o = n.substring(n.length - 5);
  return s + "-" + o;
}, he = (n, s = !1) => {
  if (!n)
    return "";
  const o = n.split(":");
  return s ? xe(o[4]) : o[4];
}, et = (n) => n?.profile?.username || xe(he(n?.did)), tt = (n) => n?.metadata?.ensName || xe(he(n?.did)), rt = /\B@[a-z0-9_.⍙-]+/gi, Wt = (n) => {
  if (!n)
    return "";
  let {
    body: s
  } = n;
  const {
    mentions: o
  } = n, p = n.body.toString().match(rt);
  p && o && Array.isArray(o) && p.forEach((w) => {
    o.find((v) => v.username === w) !== void 0 && (s = s.replace(w, `<span class="highlighted" contenteditable="false">${w}</span>`));
  });
  const u = new RegExp(String.fromCharCode(160), "g");
  return s = s.replace(u, " "), s;
}, Yt = (n, s = !1, o = 280, p = "https://app.orbis.club/profile/") => {
  if (!n || !n.body)
    return null;
  let u = n.body;
  if (s && u.length > o)
    return u = u.substring(0, o), u + "...";
  u = oe(u, "<br>", function(l, c) {
    return /* @__PURE__ */ t("br", {}, l + c);
  }), u = oe(u, `
`, function(l, c) {
    return /* @__PURE__ */ t("br", {}, l + c);
  }), u = oe(u, /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g, function(l, c) {
    return /* @__PURE__ */ t("a", {
      href: l,
      rel: "noreferrer",
      target: "_blank",
      title: l,
      className: "highlighted",
      children: l
    }, l + c);
  });
  const {
    mentions: w
  } = n, E = n.body.toString().match(rt);
  E && w && Array.isArray(w) && E.forEach((l) => {
    const c = w.find((h) => h.username === l);
    c !== void 0 && (u = oe(u, l, (h, i) => c.did ? /* @__PURE__ */ t("a", {
      href: `${p}${c.did}`,
      target: "_blank",
      rel: "noreferrer",
      children: c.username
    }, h + i) : /* @__PURE__ */ t("span", {
      className: "highlighted",
      children: c.username
    }, h + i)));
  });
  const v = new RegExp(String.fromCharCode(160), "g");
  return u = oe(u, v, function(l) {
    return " " + l;
  }), u;
}, Je = (n) => {
  const s = Ee.now(), o = Ee.fromSeconds(n), p = s.diff(o, ["days"]);
  let u = o.toRelative();
  return p.get("days") > 7 && (u = o.toLocaleString(Ee.DATETIME_MED)), u;
}, Ut = (n) => new Promise((s) => setTimeout(s, n)), qt = (n, s) => {
  let o;
  return (...p) => new Promise((u) => {
    o && clearTimeout(o), o = setTimeout(() => u(n(...p)), s);
  });
}, zt = {
  like: /* @__PURE__ */ t(Ft, {}),
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
  customIcons: s = null,
  options: o = {},
  profileUrl: p = "https://app.orbis.club/profile/",
  showPoweredByOrbis: u = !1
}) => {
  const w = new Zt(o), E = s || zt, [v, l] = x(!1), [c, h] = x(null), [i, y] = x(!1), O = async () => {
    console.log("connecting", v);
    const _ = await w.connect_v2({
      provider: v,
      chain: "ethereum"
    });
    if (console.log(_), _.status !== 200)
      await Ut(2e3), await O();
    else {
      const {
        data: m
      } = await w.getProfile(_.did);
      h(m);
    }
  }, Z = () => {
    w.logout().status === 200 && h(null);
  }, $ = async () => {
    const _ = await w.connectLit(v);
    return y(_.status === 200), _;
  }, V = async (_ = !1) => {
    const m = await w.isConnected();
    if (m.status === 200) {
      const {
        data: k
      } = await w.getProfile(m.did);
      y(m?.details?.hasLit), h(k);
    } else
      _ && await O();
  };
  return /* @__PURE__ */ t(nt.Provider, {
    value: {
      orbis: w,
      icons: E,
      provider: v,
      profile: c,
      profileUrl: p,
      hasLit: i,
      showPoweredByOrbis: u,
      setProvider: l,
      connectOrbis: O,
      connectLit: $,
      checkOrbisConnection: V,
      disconnectOrbis: Z
    },
    children: n
  });
}, pe = () => Dt(nt), at = (n, s) => {
  const o = X(() => {
  });
  Y(() => {
    o.current = n;
  }), Y(() => {
    if (s !== null) {
      const p = setInterval(() => o.current(), s || 0);
      return () => clearInterval(p);
    }
  }, [s]);
}, ot = ({
  details: n
}) => {
  const s = he(n?.did) || "";
  return /* @__PURE__ */ t("div", {
    className: "avatar",
    children: /* @__PURE__ */ t("img", {
      src: n?.profile?.pfp || jt(s),
      className: "w-full h-full object-cover object-center"
    })
  });
}, Pe = ({
  context: n,
  editPost: s,
  replyTo: o,
  placeholder: p = "Share your post here...",
  enterToSend: u = !0,
  popoverPosition: w = "top",
  cancelReplyTo: E,
  cancelEdit: v,
  callback: l
}) => {
  const {
    orbis: c,
    profile: h,
    connectOrbis: i
  } = pe(), y = X(null), [O, Z] = x(0), [$, V] = x(null), [_, m] = x(!1), [k, N] = x(""), [U, L] = x([]), [z, H] = x([]), B = () => {
    const f = document.getSelection();
    f && (Z(f.focusOffset), V(f.focusNode));
  }, J = () => {
    if (!y.current)
      return;
    y.current.focus();
    const f = document.getSelection();
    f && f.collapse($, O);
  }, ne = qt(async () => {
    m(!0), L([]);
    const {
      data: f,
      error: S
    } = await c.getProfilesByUsername(k);
    f ? L(f) : console.log(S), m(!1);
  }, 1e3), ee = (f) => {
    J();
    const S = f?.details?.profile?.username?.trim();
    z?.find((q) => S === q?.username) || H([...z, {
      username: "@" + S,
      did: f.did
    }]);
    const F = '<span href="/profile/' + f.did + '" class="text-lime-700" contenteditable="false" data-did="' + f.did + '">@' + S + "</span><span> </span>";
    for (let q = 0; q < k.length + 1; q++)
      document.execCommand("delete", !1, ""), q == k.length && document.execCommand("insertHTML", !1, F);
    setTimeout(() => {
      N(""), y.current.focus(), y.current.innerHTML.replace(/&nbsp;$/, " ");
    }, 100);
  }, j = async () => {
    if (!c || !h)
      return !1;
    const f = y.current.innerText, S = z.filter((D) => f.includes(D.username));
    if (s) {
      const D = {
        ...s.content,
        body: f,
        mentions: S
      };
      l && l(D);
    } else {
      const D = {
        body: f,
        context: n,
        master: o ? o.master || o.stream_id : void 0,
        reply_to: o ? o.stream_id : void 0,
        mentions: S || void 0
      }, F = Math.floor(Date.now() / 1e3), q = {
        content: D,
        context: n,
        creator: h.did,
        creator_details: {
          did: h.did,
          profile: h.details?.profile,
          metadata: h.details?.metadata
        },
        stream_id: "new_post-" + F,
        timestamp: F,
        master: o ? o.master || o.stream_id : null,
        reply_to: o ? o.stream_id : null,
        reply_to_creator_details: o ? o.creator_details : null,
        reply_to_details: o ? o.content : null,
        count_commits: 1,
        count_likes: 0,
        count_haha: 0,
        count_downvotes: 0,
        count_replies: 0,
        type: o ? "reply" : null
      };
      console.log(q), l && l(q), y.current.innerText = "";
    }
  }, R = (f) => {
    !f.key || u && f.key === "Enter" && !f.shiftKey && (f.preventDefault(), j());
  };
  return Y(() => {
    if (!y.current)
      return;
    y.current.innerText || (N(""), m(!1), L([]));
    let S = "";
    for (let D = O; D > 0; D--) {
      const F = $?.textContent?.substring(D - 1, D)?.trim();
      if (S = F + S, !F) {
        N(""), m(!1), L([]);
        return;
      }
      if (F === "@") {
        N(S.replace("@", ""));
        return;
      }
      m(!1), N("");
    }
  }, [O, $]), Y(() => {
    k ? ne() : (m(!1), L([]));
  }, [k]), Y(() => {
    o && y.current.focus();
  }, [o]), Y(() => {
    if (s) {
      let {
        body: f
      } = s.content;
      const {
        mentions: S
      } = s.content;
      S?.length && (H(S), f = Wt(s.content)), y.current.innerHTML = f, setTimeout(() => {
        if (y.current.focus(), typeof window.getSelection < "u" && typeof document.createRange < "u") {
          const D = document.createRange();
          D.selectNodeContents(y.current), D.collapse(!1);
          const F = window.getSelection();
          F?.removeAllRanges(), F?.addRange(D);
        }
      }, 100);
    }
  }, [s]), h ? /* @__PURE__ */ b("div", {
    className: "postbox",
    children: [k && /* @__PURE__ */ t("div", {
      className: `mentions ${w === "top" ? "mentions--top" : "mentions--bottom"}`,
      children: /* @__PURE__ */ t("div", {
        className: "mentions__scrollable",
        children: _ ? /* @__PURE__ */ t("div", {
          className: "mentions__loading",
          children: "Loading..."
        }) : U.map((f) => /* @__PURE__ */ b("div", {
          className: "mentions__account",
          onClick: () => ee(f),
          children: [/* @__PURE__ */ t("div", {
            className: "mentions__account__avatar",
            children: /* @__PURE__ */ t(ot, {
              details: f?.details
            })
          }), /* @__PURE__ */ b("div", {
            className: "mentions__account__name",
            children: [/* @__PURE__ */ t("span", {
              children: et(f?.details)
            }), /* @__PURE__ */ t("span", {
              className: "badge",
              children: tt(f?.details)
            })]
          })]
        }, f.did))
      })
    }), o && /* @__PURE__ */ b("div", {
      className: "replyto",
      children: [/* @__PURE__ */ b("div", {
        className: "replyto__details",
        children: ["Replying to", " ", /* @__PURE__ */ t("strong", {
          children: o?.creator_details?.profile?.username || o?.creator_details?.metadata?.ensName || he(o?.creator_details?.did, !0)
        }), /* @__PURE__ */ t("br", {}), o.content?.body]
      }), E && /* @__PURE__ */ t("button", {
        className: "replyto__cancel",
        onClick: () => E && E(),
        children: "\xD7"
      })]
    }), /* @__PURE__ */ t("div", {
      ref: y,
      className: "postbox__contenteditable",
      contentEditable: !0,
      "data-placeholder": p,
      onKeyDown: R,
      onKeyUp: B,
      onMouseUp: B
    }), s && /* @__PURE__ */ t(Ae, {
      children: /* @__PURE__ */ b("div", {
        className: "postbox__editmenu",
        children: [/* @__PURE__ */ t("button", {
          onClick: () => v && v(!1),
          children: "Cancel"
        }), " ", "\u2022 Enter to ", /* @__PURE__ */ t("button", {
          onClick: j,
          children: "Save"
        })]
      })
    }), !u && /* @__PURE__ */ t("button", {
      className: "send",
      onClick: j,
      children: "Send"
    })]
  }) : /* @__PURE__ */ t("button", {
    className: "gradient-button",
    onClick: i,
    children: "Connect to Ceramic"
  });
}, Gt = ({
  children: n,
  onAction: s
}) => /* @__PURE__ */ b(Q.Root, {
  children: [/* @__PURE__ */ t(Q.Trigger, {
    asChild: !0,
    children: n
  }), /* @__PURE__ */ t(Q.Portal, {
    children: /* @__PURE__ */ b(Q.Content, {
      className: "post__popover",
      side: "top",
      sideOffset: 5,
      children: [/* @__PURE__ */ t(Q.Item, {
        className: "edit",
        onSelect: () => s("edit"),
        children: "Edit Post"
      }), /* @__PURE__ */ t(Q.Item, {
        className: "delete",
        onSelect: () => s("delete"),
        children: "Delete Post"
      }), /* @__PURE__ */ t(Q.Arrow, {
        className: "post__popover__arrow"
      })]
    })
  })]
}), Kt = ({
  open: n,
  setOpen: s,
  confirm: o
}) => /* @__PURE__ */ t(K.Root, {
  open: n,
  onOpenChange: s,
  children: /* @__PURE__ */ b(K.Portal, {
    children: [/* @__PURE__ */ t(K.Overlay, {
      className: "post__deleteconfirmation__overlay"
    }), /* @__PURE__ */ b(K.Content, {
      className: "post__deleteconfirmation__content",
      children: [/* @__PURE__ */ t(K.Title, {
        className: "post__deleteconfirmation__title",
        children: "Are you sure you want to delete this post?"
      }), /* @__PURE__ */ t(K.Description, {
        className: "post__deleteconfirmation__description",
        children: "If you ask for deletion your post might be removed from the Ceramic nodes hosting it."
      }), /* @__PURE__ */ b("div", {
        className: "post__deleteconfirmation__actions",
        children: [/* @__PURE__ */ t(K.Cancel, {
          asChild: !0,
          children: /* @__PURE__ */ t("button", {
            className: "cancel",
            children: "Cancel"
          })
        }), /* @__PURE__ */ t(K.Action, {
          asChild: !0,
          children: /* @__PURE__ */ t("button", {
            className: "delete",
            onClick: o,
            children: "Delete"
          })
        })]
      })]
    })]
  })
}), st = ({
  post: n,
  replyTo: s = null,
  onClickReply: o
}) => {
  const u = X(), {
    orbis: w,
    profile: E,
    icons: v,
    profileUrl: l
  } = pe(), [c, h] = x(null), [i, y] = x({
    ...n
  }), [O, Z] = x(i.content.body.length >= 280), [$, V] = x(!1), [_, m] = x(0), [k, N] = x(!1), [U, L] = x(null), z = async () => {
    if (!w || !E)
      return;
    const {
      data: R
    } = await w.getReaction(i.stream_id, E.did);
    R && h(R.type);
  }, H = async () => {
    const {
      data: R,
      error: f
    } = await w.getPost(n.stream_id);
    f && console.error(f), R && y(R);
  }, B = async (R) => {
    if (R === c)
      return;
    h(R);
    const f = {
      like: "count_likes",
      haha: "count_haha",
      downvote: "count_downvotes"
    }, S = {
      ...i
    };
    c && (S[f[c]] -= 1), S[f[R]] += 1, y({
      ...S
    }), (await w.react(i.stream_id, R)).status !== 200 && y({
      ...i
    });
  }, J = (R) => {
    R === "edit" ? V(!0) : R === "delete" && N(!0);
  }, ne = (R) => {
    y({
      ...i,
      content: R,
      count_commits: i.count_commits + 1
    }), V(!1);
  }, ee = async () => {
    console.log(`deleting ${i.stream_id}`), m(1), setTimeout(() => {
      m(2);
    }, 2e3);
  }, j = Xe(() => {
    const R = [i.stream_id];
    return (i.stream_id.startsWith("new_post-") || _ == 1) && R.push("post--pulse"), _ == 2 && R.push("post--deleted"), R.join(" ");
  }, [i, _]);
  return at(() => {
    if (i) {
      const R = Je(i.timestamp);
      L(R);
    }
  }, i ? 6e4 : null), Y(() => {
    n && H();
  }, [n]), Y(() => {
    i && E && z();
  }, [i, E]), /* @__PURE__ */ b("div", {
    ref: u,
    className: `post ${j}`,
    children: [/* @__PURE__ */ t("div", {
      className: "post__avatar",
      children: /* @__PURE__ */ t(ot, {
        details: i?.creator_details
      })
    }), /* @__PURE__ */ b("div", {
      className: "post__content",
      children: [/* @__PURE__ */ b("div", {
        className: "post__info",
        children: [/* @__PURE__ */ t("a", {
          href: `${l}${i.creator_details?.did}`,
          target: "_blank",
          rel: "noreferrer",
          children: et(i.creator_details)
        }), /* @__PURE__ */ t("span", {
          className: "badge",
          children: tt(i.creator_details)
        }), /* @__PURE__ */ b("span", {
          className: "post__time",
          children: ["\u2022 ", U || Je(i.timestamp)]
        })]
      }), /* @__PURE__ */ b("div", {
        className: "post__body content",
        children: [_ == 2 ? "This post is deleted" : $ ? /* @__PURE__ */ t(Pe, {
          context: i.context,
          editPost: i,
          cancelEdit: (R) => V(R),
          callback: ne
        }) : /* @__PURE__ */ t(Ae, {
          children: Yt(i.content, O, 280, l)
        }), i.count_commits > 1 && _ != 2 && /* @__PURE__ */ t("span", {
          className: "post__edited",
          children: "(edited)"
        })]
      }), i?.indexing_metadata?.urlMetadata && /* @__PURE__ */ b("div", {
        className: "post__metadata",
        children: [i?.indexing_metadata?.urlMetadata?.image && /* @__PURE__ */ t("a", {
          href: i?.indexing_metadata?.urlMetadata?.url,
          className: "post__metadata__image",
          target: "_blank",
          rel: "noreferrer",
          children: /* @__PURE__ */ t("img", {
            src: i?.indexing_metadata?.urlMetadata?.image
          })
        }), /* @__PURE__ */ b("div", {
          className: "post__metadata__content",
          children: [/* @__PURE__ */ t("small", {
            children: i?.indexing_metadata?.urlMetadata?.source
          }), /* @__PURE__ */ t("h1", {
            children: /* @__PURE__ */ t("a", {
              href: i?.indexing_metadata?.urlMetadata?.url,
              target: "_blank",
              rel: "noreferrer",
              children: i?.indexing_metadata?.urlMetadata?.title
            })
          }), /* @__PURE__ */ t("p", {
            children: i?.indexing_metadata?.urlMetadata?.description
          })]
        })]
      }), O && /* @__PURE__ */ t("button", {
        className: "gradient-button",
        onClick: () => Z(!1),
        children: "View more"
      }), _ != 2 && /* @__PURE__ */ b("div", {
        className: "post__menu",
        children: [/* @__PURE__ */ b("div", {
          className: "post__reactions",
          children: [/* @__PURE__ */ t("button", {
            className: `${s?.stream_id === i.stream_id ? "active" : ""}`,
            onClick: () => o && o(i),
            title: "Reply",
            children: /* @__PURE__ */ t("span", {
              className: "icon",
              children: v.replyto
            })
          }), /* @__PURE__ */ b("button", {
            className: c === "like" ? "active" : "",
            onClick: () => B("like"),
            disabled: c === "like",
            title: "Like",
            children: [/* @__PURE__ */ t("span", {
              className: "icon",
              children: c === "like" ? v.likeActive : v.like
            }), /* @__PURE__ */ t("span", {
              children: i.count_likes
            })]
          }), /* @__PURE__ */ b("button", {
            className: c === "haha" ? "active" : "",
            onClick: () => B("haha"),
            disabled: c === "haha",
            title: "HAHA",
            children: [/* @__PURE__ */ t("span", {
              className: "icon",
              children: c === "haha" ? v.hahaActive : v.haha
            }), /* @__PURE__ */ t("span", {
              children: i.count_haha
            })]
          }), /* @__PURE__ */ b("button", {
            className: c === "downvote" ? "active" : "",
            onClick: () => B("downvote"),
            disabled: c === "downvote",
            title: "Downvote",
            children: [/* @__PURE__ */ t("span", {
              className: "icon",
              children: c === "downvote" ? v.downvoteActive : v.downvote
            }), /* @__PURE__ */ t("span", {
              children: i.count_downvotes
            })]
          })]
        }), i.stream_id !== "new_post" && /* @__PURE__ */ b("div", {
          className: "post__actions",
          children: [n?.creator_details?.did === E?.did && /* @__PURE__ */ t(Gt, {
            onAction: J,
            children: /* @__PURE__ */ t("button", {
              children: /* @__PURE__ */ t("span", {
                className: "icon",
                children: /* @__PURE__ */ t(Bt, {})
              })
            })
          }), /* @__PURE__ */ t("a", {
            href: `https://cerscan.com/mainnet/stream/${i.stream_id}`,
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
      open: k,
      setOpen: N,
      confirm: ee
    })]
  });
}, it = ({
  items: n,
  replies: s,
  replyTo: o = null,
  onClickReply: p
}) => /* @__PURE__ */ t(Ae, {
  children: n.map((u) => /* @__PURE__ */ b("div", {
    className: "replies",
    children: [/* @__PURE__ */ t(st, {
      post: u,
      replyTo: o,
      onClickReply: () => p(u)
    }), s[u.stream_id] !== void 0 && /* @__PURE__ */ t(it, {
      items: s[u.stream_id],
      replies: s,
      replyTo: o,
      onClickReply: p
    })]
  }, u.stream_id))
}), Jt = ({
  context: n,
  master: s,
  innerPostbox: o,
  replyTo: p,
  onClickReply: u,
  onNewPost: w
}) => {
  const {
    orbis: E
  } = pe(), v = X(null), [l, c] = x([]), [h, i] = x(0), [y, O] = x(!1), Z = Xe(() => l.reduce((m, k) => (m[k.reply_to] = [...m[k.reply_to] || [], k], m), {}), [l]), $ = async () => {
    if (!E || !n || !s || y)
      return;
    O(!0);
    const {
      data: _,
      error: m
    } = await E.getPosts({
      context: n,
      master: s.stream_id
    }, h);
    _ && (_.reverse(), c([...l, ..._]), i((k) => k + 1)), m && console.error(m), O(!1);
  }, V = (_) => {
    const m = [...l, _];
    c(m), u(null), _.stream_id.startsWith("new_post-") && setTimeout(() => {
      const k = v.current?.querySelector(`.${_.stream_id}`);
      w(k);
    }, 100);
  };
  return Y(() => {
    n && s && $();
  }, [n, s]), /* @__PURE__ */ b("div", {
    ref: v,
    children: [Z[s.stream_id] !== void 0 && /* @__PURE__ */ t(it, {
      items: Z[s.stream_id],
      replies: Z,
      replyTo: p,
      onClickReply: u
    }), p && /* @__PURE__ */ t("div", {
      ref: o,
      children: /* @__PURE__ */ t(Pe, {
        context: n,
        replyTo: p,
        placeholder: "Reply this comment...",
        cancelReplyTo: () => u(null),
        callback: V
      })
    })]
  });
}, Qt = ({
  post: n
}) => {
  const s = X(null), o = X(null), [p, u] = x(!1), [w, E] = x(null), [v, l] = x(null);
  return Y(() => {
    if (v !== null && o.current) {
      const c = o.current?.closest(".comments__posts");
      if (!c)
        return;
      const h = c.offsetHeight / 2;
      v === "masterPost" && o.current ? setTimeout(() => {
        c.scrollTo({
          top: o.current?.offsetTop - c.offsetTop,
          behavior: "smooth"
        });
      }, 500) : v === "postbox" && s.current ? setTimeout(() => {
        c.scrollTo({
          top: s.current?.offsetTop - h,
          behavior: "smooth"
        });
      }, 500) : setTimeout(() => {
        const i = v;
        c.scrollTo({
          top: i.offsetTop - h,
          behavior: "smooth"
        });
      }, 500);
    }
    return () => {
      setTimeout(() => {
        l(null);
      }, 500);
    };
  }, [w, p, v]), Y(() => {
    p || E(null);
  }, [p]), /* @__PURE__ */ b("div", {
    ref: o,
    className: "comments__post",
    children: [/* @__PURE__ */ t(st, {
      post: n,
      replyTo: w,
      onClickReply: () => {
        E(n), u(!0), l("postbox");
      }
    }), n.count_replies !== void 0 && n.count_replies > 0 && /* @__PURE__ */ b("button", {
      className: `comments__post__toggle-replies ${p ? "opened" : ""}`,
      onClick: () => {
        l(p ? null : "masterPost"), u((c) => !c);
      },
      children: [p ? "Hide" : "Show", " replies"]
    }), p && /* @__PURE__ */ t(Jt, {
      context: n.context,
      master: n,
      replyTo: w,
      innerPostbox: s,
      onClickReply: (c) => {
        E(c), l("postbox");
      },
      onNewPost: (c) => l(c)
    })]
  });
}, Xt = ({
  onClick: n,
  text: s = "Load older posts"
}) => /* @__PURE__ */ t("button", {
  className: "gradient-button",
  onClick: n,
  children: s
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
  algorithm: s = "all-context-master-posts",
  postboxPlaceholder: o = "Share your comment here"
}) => {
  const p = X(), {
    orbis: u,
    showPoweredByOrbis: w
  } = pe(), [E, v] = x(0), [l, c] = x([]), [h, i] = x(!1), [y, O] = x(!1), [Z, $] = x(0), [V, _] = x(!1), m = async (N) => {
    if (!u || !n || h)
      return;
    const U = N?.reset ? [] : [...l];
    N?.polling || (_(!0), i(!0));
    const {
      data: L,
      error: z
    } = await u.getPosts({
      context: n,
      algorithm: s
    }, N?.polling || N?.reset ? 0 : E);
    if (L)
      if (N?.polling) {
        const H = L.filter((B) => !U.some((J) => B.stream_id === J.stream_id));
        H.length > 0 && (c([...H, ...U]), $((B) => B + H.length));
      } else {
        c([...U, ...L]);
        const H = N?.reset ? 1 : E + 1;
        v(H), O(L.length >= 50), _(!1), i(!1);
      }
    z && console.error(z);
  }, k = (N) => {
    const U = [N, ...l];
    c(U);
  };
  return at(() => {
    m({
      polling: !0
    });
  }, V ? null : 1e4), Y(() => {
    n && (v(0), setTimeout(() => {
      m({
        reset: !0
      });
    }, 100));
  }, [n]), /* @__PURE__ */ b("div", {
    ref: p,
    className: "comments",
    children: [w && /* @__PURE__ */ t(tr, {}), /* @__PURE__ */ t("div", {
      className: "comments__postbox",
      children: /* @__PURE__ */ t(Pe, {
        context: n,
        placeholder: o,
        popoverPosition: "bottom",
        callback: k
      })
    }), /* @__PURE__ */ b("div", {
      className: "comments__posts",
      children: [l.map((N) => /* @__PURE__ */ t(Qt, {
        post: N
      }, N.stream_id)), y && !h && /* @__PURE__ */ t(Xt, {
        onClick: () => m()
      }), h && /* @__PURE__ */ t(er, {}), Z > 0 && /* @__PURE__ */ b("div", {
        children: [Z, " New ", Z > 1 ? "Messages" : "Message"]
      })]
    })]
  });
};
export {
  cr as Comments,
  ir as OrbisProvider,
  pe as useOrbis
};
