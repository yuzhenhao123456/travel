function isElementInViewport(t) {
    "function" == typeof jQuery && t instanceof jQuery && (t = t[0]);
    var e = t.getBoundingClientRect();
    return e.top >= 0 && e.left >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth)
}
if (function (t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
            if (!t.document)throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function (t, e) {
        function n(t) {
            var e = t.length, n = oe.type(t);
            return "function" === n || oe.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }

        function i(t, e, n) {
            if (oe.isFunction(e))return oe.grep(t, function (t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType)return oe.grep(t, function (t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (de.test(e))return oe.filter(e, t, n);
                e = oe.filter(e, t)
            }
            return oe.grep(t, function (t) {
                return oe.inArray(t, e) >= 0 !== n
            })
        }

        function o(t, e) {
            do t = t[e]; while (t && 1 !== t.nodeType);
            return t
        }

        function s(t) {
            var e = we[t] = {};
            return oe.each(t.match(be) || [], function (t, n) {
                e[n] = !0
            }), e
        }

        function r() {
            fe.addEventListener ? (fe.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (fe.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
        }

        function a() {
            (fe.addEventListener || "load" === event.type || "complete" === fe.readyState) && (r(), oe.ready())
        }

        function l(t, e, n) {
            if (void 0 === n && 1 === t.nodeType) {
                var i = "data-" + e.replace(Se, "-$1").toLowerCase();
                if (n = t.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ce.test(n) ? oe.parseJSON(n) : n
                    } catch (o) {
                    }
                    oe.data(t, e, n)
                } else n = void 0
            }
            return n
        }

        function c(t) {
            var e;
            for (e in t)if (("data" !== e || !oe.isEmptyObject(t[e])) && "toJSON" !== e)return !1;
            return !0
        }

        function u(t, e, n, i) {
            if (oe.acceptData(t)) {
                var o, s, r = oe.expando, a = t.nodeType, l = a ? oe.cache : t, c = a ? t[r] : t[r] && r;
                if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof e)return c || (c = a ? t[r] = J.pop() || oe.guid++ : r), l[c] || (l[c] = a ? {} : {toJSON: oe.noop}), ("object" == typeof e || "function" == typeof e) && (i ? l[c] = oe.extend(l[c], e) : l[c].data = oe.extend(l[c].data, e)), s = l[c], i || (s.data || (s.data = {}), s = s.data), void 0 !== n && (s[oe.camelCase(e)] = n), "string" == typeof e ? (o = s[e], null == o && (o = s[oe.camelCase(e)])) : o = s, o
            }
        }

        function h(t, e, n) {
            if (oe.acceptData(t)) {
                var i, o, s = t.nodeType, r = s ? oe.cache : t, a = s ? t[oe.expando] : oe.expando;
                if (r[a]) {
                    if (e && (i = n ? r[a] : r[a].data)) {
                        oe.isArray(e) ? e = e.concat(oe.map(e, oe.camelCase)) : e in i ? e = [e] : (e = oe.camelCase(e), e = e in i ? [e] : e.split(" ")), o = e.length;
                        for (; o--;)delete i[e[o]];
                        if (n ? !c(i) : !oe.isEmptyObject(i))return
                    }
                    (n || (delete r[a].data, c(r[a]))) && (s ? oe.cleanData([t], !0) : ne.deleteExpando || r != r.window ? delete r[a] : r[a] = null)
                }
            }
        }

        function d() {
            return !0
        }

        function p() {
            return !1
        }

        function f() {
            try {
                return fe.activeElement
            } catch (t) {
            }
        }

        function m(t) {
            var e = Ie.split("|"), n = t.createDocumentFragment();
            if (n.createElement)for (; e.length;)n.createElement(e.pop());
            return n
        }

        function g(t, e) {
            var n, i, o = 0, s = typeof t.getElementsByTagName !== Te ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Te ? t.querySelectorAll(e || "*") : void 0;
            if (!s)for (s = [], n = t.childNodes || t; null != (i = n[o]); o++)!e || oe.nodeName(i, e) ? s.push(i) : oe.merge(s, g(i, e));
            return void 0 === e || e && oe.nodeName(t, e) ? oe.merge([t], s) : s
        }

        function v(t) {
            Ne.test(t.type) && (t.defaultChecked = t.checked)
        }

        function y(t, e) {
            return oe.nodeName(t, "table") && oe.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function b(t) {
            return t.type = (null !== oe.find.attr(t, "type")) + "/" + t.type, t
        }

        function w(t) {
            var e = Xe.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function x(t, e) {
            for (var n, i = 0; null != (n = t[i]); i++)oe._data(n, "globalEval", !e || oe._data(e[i], "globalEval"))
        }

        function k(t, e) {
            if (1 === e.nodeType && oe.hasData(t)) {
                var n, i, o, s = oe._data(t), r = oe._data(e, s), a = s.events;
                if (a) {
                    delete r.handle, r.events = {};
                    for (n in a)for (i = 0, o = a[n].length; o > i; i++)oe.event.add(e, n, a[n][i])
                }
                r.data && (r.data = oe.extend({}, r.data))
            }
        }

        function T(t, e) {
            var n, i, o;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(), !ne.noCloneEvent && e[oe.expando]) {
                    o = oe._data(e);
                    for (i in o.events)oe.removeEvent(e, i, o.handle);
                    e.removeAttribute(oe.expando)
                }
                "script" === n && e.text !== t.text ? (b(e).text = t.text, w(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ne.html5Clone && t.innerHTML && !oe.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Ne.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
            }
        }

        function C(e, n) {
            var i, o = oe(n.createElement(e)).appendTo(n.body), s = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(o[0])) ? i.display : oe.css(o[0], "display");
            return o.detach(), s
        }

        function S(t) {
            var e = fe, n = Ze[t];
            return n || (n = C(t, e), "none" !== n && n || (Qe = (Qe || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Qe[0].contentWindow || Qe[0].contentDocument).document, e.write(), e.close(), n = C(t, e), Qe.detach()), Ze[t] = n), n
        }

        function $(t, e) {
            return {
                get: function () {
                    var n = t();
                    if (null != n)return n ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function E(t, e) {
            if (e in t)return e;
            for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = pn.length; o--;)if (e = pn[o] + n, e in t)return e;
            return i
        }

        function _(t, e) {
            for (var n, i, o, s = [], r = 0, a = t.length; a > r; r++)i = t[r], i.style && (s[r] = oe._data(i, "olddisplay"), n = i.style.display, e ? (s[r] || "none" !== n || (i.style.display = ""), "" === i.style.display && _e(i) && (s[r] = oe._data(i, "olddisplay", S(i.nodeName)))) : (o = _e(i), (n && "none" !== n || !o) && oe._data(i, "olddisplay", o ? n : oe.css(i, "display"))));
            for (r = 0; a > r; r++)i = t[r], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? s[r] || "" : "none"));
            return t
        }

        function j(t, e, n) {
            var i = cn.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }

        function N(t, e, n, i, o) {
            for (var s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > s; s += 2)"margin" === n && (r += oe.css(t, n + Ee[s], !0, o)), i ? ("content" === n && (r -= oe.css(t, "padding" + Ee[s], !0, o)), "margin" !== n && (r -= oe.css(t, "border" + Ee[s] + "Width", !0, o))) : (r += oe.css(t, "padding" + Ee[s], !0, o), "padding" !== n && (r += oe.css(t, "border" + Ee[s] + "Width", !0, o)));
            return r
        }

        function L(t, e, n) {
            var i = !0, o = "width" === e ? t.offsetWidth : t.offsetHeight, s = tn(t), r = ne.boxSizing && "border-box" === oe.css(t, "boxSizing", !1, s);
            if (0 >= o || null == o) {
                if (o = en(t, e, s), (0 > o || null == o) && (o = t.style[e]), on.test(o))return o;
                i = r && (ne.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
            }
            return o + N(t, e, n || (r ? "border" : "content"), i, s) + "px"
        }

        function A(t, e, n, i, o) {
            return new A.prototype.init(t, e, n, i, o)
        }

        function O() {
            return setTimeout(function () {
                fn = void 0
            }), fn = oe.now()
        }

        function P(t, e) {
            var n, i = {height: t}, o = 0;
            for (e = e ? 1 : 0; 4 > o; o += 2 - e)n = Ee[o], i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }

        function D(t, e, n) {
            for (var i, o = (wn[e] || []).concat(wn["*"]), s = 0, r = o.length; r > s; s++)if (i = o[s].call(n, e, t))return i
        }

        function I(t, e, n) {
            var i, o, s, r, a, l, c, u, h = this, d = {}, p = t.style, f = t.nodeType && _e(t), m = oe._data(t, "fxshow");
            n.queue || (a = oe._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                a.unqueued || l()
            }), a.unqueued++, h.always(function () {
                h.always(function () {
                    a.unqueued--, oe.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = oe.css(t, "display"), u = "none" === c ? oe._data(t, "olddisplay") || S(t.nodeName) : c, "inline" === u && "none" === oe.css(t, "float") && (ne.inlineBlockNeedsLayout && "inline" !== S(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ne.shrinkWrapBlocks() || h.always(function () {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }));
            for (i in e)if (o = e[i], gn.exec(o)) {
                if (delete e[i], s = s || "toggle" === o, o === (f ? "hide" : "show")) {
                    if ("show" !== o || !m || void 0 === m[i])continue;
                    f = !0
                }
                d[i] = m && m[i] || oe.style(t, i)
            } else c = void 0;
            if (oe.isEmptyObject(d))"inline" === ("none" === c ? S(t.nodeName) : c) && (p.display = c); else {
                m ? "hidden"in m && (f = m.hidden) : m = oe._data(t, "fxshow", {}), s && (m.hidden = !f), f ? oe(t).show() : h.done(function () {
                    oe(t).hide()
                }), h.done(function () {
                    var e;
                    oe._removeData(t, "fxshow");
                    for (e in d)oe.style(t, e, d[e])
                });
                for (i in d)r = D(f ? m[i] : 0, i, h), i in m || (m[i] = r.start, f && (r.end = r.start, r.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function M(t, e) {
            var n, i, o, s, r;
            for (n in t)if (i = oe.camelCase(n), o = e[i], s = t[n], oe.isArray(s) && (o = s[1], s = t[n] = s[0]), n !== i && (t[i] = s, delete t[n]), r = oe.cssHooks[i], r && "expand"in r) {
                s = r.expand(s), delete t[i];
                for (n in s)n in t || (t[n] = s[n], e[n] = o)
            } else e[i] = o
        }

        function H(t, e, n) {
            var i, o, s = 0, r = bn.length, a = oe.Deferred().always(function () {
                delete l.elem
            }), l = function () {
                if (o)return !1;
                for (var e = fn || O(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, s = 1 - i, r = 0, l = c.tweens.length; l > r; r++)c.tweens[r].run(s);
                return a.notifyWith(t, [c, s, n]), 1 > s && l ? n : (a.resolveWith(t, [c]), !1)
            }, c = a.promise({
                elem: t,
                props: oe.extend({}, e),
                opts: oe.extend(!0, {specialEasing: {}}, n),
                originalProperties: e,
                originalOptions: n,
                startTime: fn || O(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var i = oe.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (e) {
                    var n = 0, i = e ? c.tweens.length : 0;
                    if (o)return this;
                    for (o = !0; i > n; n++)c.tweens[n].run(1);
                    return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
                }
            }), u = c.props;
            for (M(u, c.opts.specialEasing); r > s; s++)if (i = bn[s].call(c, t, u, c.opts))return i;
            return oe.map(u, D, c), oe.isFunction(c.opts.start) && c.opts.start.call(t, c), oe.fx.timer(oe.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function R(t) {
            return function (e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0, s = e.toLowerCase().match(be) || [];
                if (oe.isFunction(n))for (; i = s[o++];)"+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function F(t, e, n, i) {
            function o(a) {
                var l;
                return s[a] = !0, oe.each(t[a] || [], function (t, a) {
                    var c = a(e, n, i);
                    return "string" != typeof c || r || s[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
                }), l
            }

            var s = {}, r = t === Wn;
            return o(e.dataTypes[0]) || !s["*"] && o("*")
        }

        function z(t, e) {
            var n, i, o = oe.ajaxSettings.flatOptions || {};
            for (i in e)void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
            return n && oe.extend(!0, t, n), t
        }

        function q(t, e, n) {
            for (var i, o, s, r, a = t.contents, l = t.dataTypes; "*" === l[0];)l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
            if (o)for (r in a)if (a[r] && a[r].test(o)) {
                l.unshift(r);
                break
            }
            if (l[0]in n)s = l[0]; else {
                for (r in n) {
                    if (!l[0] || t.converters[r + " " + l[0]]) {
                        s = r;
                        break
                    }
                    i || (i = r)
                }
                s = s || i
            }
            return s ? (s !== l[0] && l.unshift(s), n[s]) : void 0
        }

        function B(t, e, n, i) {
            var o, s, r, a, l, c = {}, u = t.dataTypes.slice();
            if (u[1])for (r in t.converters)c[r.toLowerCase()] = t.converters[r];
            for (s = u.shift(); s;)if (t.responseFields[s] && (n[t.responseFields[s]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = u.shift())if ("*" === s)s = l; else if ("*" !== l && l !== s) {
                if (r = c[l + " " + s] || c["* " + s], !r)for (o in c)if (a = o.split(" "), a[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                    r === !0 ? r = c[o] : c[o] !== !0 && (s = a[0], u.unshift(a[1]));
                    break
                }
                if (r !== !0)if (r && t["throws"])e = r(e); else try {
                    e = r(e)
                } catch (h) {
                    return {state: "parsererror", error: r ? h : "No conversion from " + l + " to " + s}
                }
            }
            return {state: "success", data: e}
        }

        function W(t, e, n, i) {
            var o;
            if (oe.isArray(e))oe.each(e, function (e, o) {
                n || Jn.test(t) ? i(t, o) : W(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
            }); else if (n || "object" !== oe.type(e))i(t, e); else for (o in e)W(t + "[" + o + "]", e[o], n, i)
        }

        function U() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {
            }
        }

        function V() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
            }
        }

        function X(t) {
            return oe.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
        }

        var J = [], G = J.slice, K = J.concat, Y = J.push, Q = J.indexOf, Z = {}, te = Z.toString, ee = Z.hasOwnProperty, ne = {}, ie = "1.11.2", oe = function (t, e) {
            return new oe.fn.init(t, e)
        }, se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, re = /^-ms-/, ae = /-([\da-z])/gi, le = function (t, e) {
            return e.toUpperCase()
        };
        oe.fn = oe.prototype = {
            jquery: ie, constructor: oe, selector: "", length: 0, toArray: function () {
                return G.call(this)
            }, get: function (t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : G.call(this)
            }, pushStack: function (t) {
                var e = oe.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            }, each: function (t, e) {
                return oe.each(this, t, e)
            }, map: function (t) {
                return this.pushStack(oe.map(this, function (e, n) {
                    return t.call(e, n, e)
                }))
            }, slice: function () {
                return this.pushStack(G.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (t) {
                var e = this.length, n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: Y, sort: J.sort, splice: J.splice
        }, oe.extend = oe.fn.extend = function () {
            var t, e, n, i, o, s, r = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
            for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || oe.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)if (null != (o = arguments[a]))for (i in o)t = r[i], n = o[i], r !== n && (c && n && (oe.isPlainObject(n) || (e = oe.isArray(n))) ? (e ? (e = !1, s = t && oe.isArray(t) ? t : []) : s = t && oe.isPlainObject(t) ? t : {}, r[i] = oe.extend(c, s, n)) : void 0 !== n && (r[i] = n));
            return r
        }, oe.extend({
            expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
                throw new Error(t)
            }, noop: function () {
            }, isFunction: function (t) {
                return "function" === oe.type(t)
            }, isArray: Array.isArray || function (t) {
                return "array" === oe.type(t)
            }, isWindow: function (t) {
                return null != t && t == t.window
            }, isNumeric: function (t) {
                return !oe.isArray(t) && t - parseFloat(t) + 1 >= 0
            }, isEmptyObject: function (t) {
                var e;
                for (e in t)return !1;
                return !0
            }, isPlainObject: function (t) {
                var e;
                if (!t || "object" !== oe.type(t) || t.nodeType || oe.isWindow(t))return !1;
                try {
                    if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf"))return !1
                } catch (n) {
                    return !1
                }
                if (ne.ownLast)for (e in t)return ee.call(t, e);
                for (e in t);
                return void 0 === e || ee.call(t, e)
            }, type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[te.call(t)] || "object" : typeof t
            }, globalEval: function (e) {
                e && oe.trim(e) && (t.execScript || function (e) {
                    t.eval.call(t, e)
                })(e)
            }, camelCase: function (t) {
                return t.replace(re, "ms-").replace(ae, le)
            }, nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            }, each: function (t, e, i) {
                var o, s = 0, r = t.length, a = n(t);
                if (i) {
                    if (a)for (; r > s && (o = e.apply(t[s], i), o !== !1); s++); else for (s in t)if (o = e.apply(t[s], i), o === !1)break
                } else if (a)for (; r > s && (o = e.call(t[s], s, t[s]), o !== !1); s++); else for (s in t)if (o = e.call(t[s], s, t[s]), o === !1)break;
                return t
            }, trim: function (t) {
                return null == t ? "" : (t + "").replace(se, "")
            }, makeArray: function (t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? oe.merge(i, "string" == typeof t ? [t] : t) : Y.call(i, t)), i
            }, inArray: function (t, e, n) {
                var i;
                if (e) {
                    if (Q)return Q.call(e, t, n);
                    for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)if (n in e && e[n] === t)return n
                }
                return -1
            }, merge: function (t, e) {
                for (var n = +e.length, i = 0, o = t.length; n > i;)t[o++] = e[i++];
                if (n !== n)for (; void 0 !== e[i];)t[o++] = e[i++];
                return t.length = o, t
            }, grep: function (t, e, n) {
                for (var i, o = [], s = 0, r = t.length, a = !n; r > s; s++)i = !e(t[s], s), i !== a && o.push(t[s]);
                return o
            }, map: function (t, e, i) {
                var o, s = 0, r = t.length, a = n(t), l = [];
                if (a)for (; r > s; s++)o = e(t[s], s, i), null != o && l.push(o); else for (s in t)o = e(t[s], s, i), null != o && l.push(o);
                return K.apply([], l)
            }, guid: 1, proxy: function (t, e) {
                var n, i, o;
                return "string" == typeof e && (o = t[e], e = t, t = o), oe.isFunction(t) ? (n = G.call(arguments, 2), i = function () {
                    return t.apply(e || this, n.concat(G.call(arguments)))
                }, i.guid = t.guid = t.guid || oe.guid++, i) : void 0
            }, now: function () {
                return +new Date
            }, support: ne
        }), oe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
            Z["[object " + e + "]"] = e.toLowerCase()
        });
        var ce = function (t) {
            function e(t, e, n, i) {
                var o, s, r, a, l, c, h, p, f, m;
                if ((e ? e.ownerDocument || e : F) !== A && L(e), e = e || A, n = n || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a)return n;
                if (!i && P) {
                    if (11 !== a && (o = ye.exec(t)))if (r = o[1]) {
                        if (9 === a) {
                            if (s = e.getElementById(r), !s || !s.parentNode)return n;
                            if (s.id === r)return n.push(s), n
                        } else if (e.ownerDocument && (s = e.ownerDocument.getElementById(r)) && H(e, s) && s.id === r)return n.push(s), n
                    } else {
                        if (o[2])return Q.apply(n, e.getElementsByTagName(t)), n;
                        if ((r = o[3]) && x.getElementsByClassName)return Q.apply(n, e.getElementsByClassName(r)), n
                    }
                    if (x.qsa && (!D || !D.test(t))) {
                        if (p = h = R, f = e, m = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (c = S(t), (h = e.getAttribute("id")) ? p = h.replace(we, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;)c[l] = p + d(c[l]);
                            f = be.test(t) && u(e.parentNode) || e, m = c.join(",")
                        }
                        if (m)try {
                            return Q.apply(n, f.querySelectorAll(m)), n
                        } catch (g) {
                        } finally {
                            h || e.removeAttribute("id")
                        }
                    }
                }
                return E(t.replace(le, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > k.cacheLength && delete t[e.shift()], t[n + " "] = i
                }

                var e = [];
                return t
            }

            function i(t) {
                return t[R] = !0, t
            }

            function o(t) {
                var e = A.createElement("div");
                try {
                    return !!t(e)
                } catch (n) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function s(t, e) {
                for (var n = t.split("|"), i = t.length; i--;)k.attrHandle[n[i]] = e
            }

            function r(t, e) {
                var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
                if (i)return i;
                if (n)for (; n = n.nextSibling;)if (n === e)return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function l(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function c(t) {
                return i(function (e) {
                    return e = +e, i(function (n, i) {
                        for (var o, s = t([], n.length, e), r = s.length; r--;)n[o = s[r]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function u(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function h() {
            }

            function d(t) {
                for (var e = 0, n = t.length, i = ""; n > e; e++)i += t[e].value;
                return i
            }

            function p(t, e, n) {
                var i = e.dir, o = n && "parentNode" === i, s = q++;
                return e.first ? function (e, n, s) {
                    for (; e = e[i];)if (1 === e.nodeType || o)return t(e, n, s)
                } : function (e, n, r) {
                    var a, l, c = [z, s];
                    if (r) {
                        for (; e = e[i];)if ((1 === e.nodeType || o) && t(e, n, r))return !0
                    } else for (; e = e[i];)if (1 === e.nodeType || o) {
                        if (l = e[R] || (e[R] = {}), (a = l[i]) && a[0] === z && a[1] === s)return c[2] = a[2];
                        if (l[i] = c, c[2] = t(e, n, r))return !0
                    }
                }
            }

            function f(t) {
                return t.length > 1 ? function (e, n, i) {
                    for (var o = t.length; o--;)if (!t[o](e, n, i))return !1;
                    return !0
                } : t[0]
            }

            function m(t, n, i) {
                for (var o = 0, s = n.length; s > o; o++)e(t, n[o], i);
                return i
            }

            function g(t, e, n, i, o) {
                for (var s, r = [], a = 0, l = t.length, c = null != e; l > a; a++)(s = t[a]) && (!n || n(s, i, o)) && (r.push(s), c && e.push(a));
                return r
            }

            function v(t, e, n, o, s, r) {
                return o && !o[R] && (o = v(o)), s && !s[R] && (s = v(s, r)), i(function (i, r, a, l) {
                    var c, u, h, d = [], p = [], f = r.length, v = i || m(e || "*", a.nodeType ? [a] : a, []), y = !t || !i && e ? v : g(v, d, t, a, l), b = n ? s || (i ? t : f || o) ? [] : r : y;
                    if (n && n(y, b, a, l), o)for (c = g(b, p), o(c, [], a, l), u = c.length; u--;)(h = c[u]) && (b[p[u]] = !(y[p[u]] = h));
                    if (i) {
                        if (s || t) {
                            if (s) {
                                for (c = [], u = b.length; u--;)(h = b[u]) && c.push(y[u] = h);
                                s(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(h = b[u]) && (c = s ? te(i, h) : d[u]) > -1 && (i[c] = !(r[c] = h))
                        }
                    } else b = g(b === r ? b.splice(f, b.length) : b), s ? s(null, r, b, l) : Q.apply(r, b)
                })
            }

            function y(t) {
                for (var e, n, i, o = t.length, s = k.relative[t[0].type], r = s || k.relative[" "], a = s ? 1 : 0, l = p(function (t) {
                    return t === e
                }, r, !0), c = p(function (t) {
                    return te(e, t) > -1
                }, r, !0), u = [function (t, n, i) {
                    var o = !s && (i || n !== _) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                    return e = null, o
                }]; o > a; a++)if (n = k.relative[t[a].type])u = [p(f(u), n)]; else {
                    if (n = k.filter[t[a].type].apply(null, t[a].matches), n[R]) {
                        for (i = ++a; o > i && !k.relative[t[i].type]; i++);
                        return v(a > 1 && f(u), a > 1 && d(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(le, "$1"), n, i > a && y(t.slice(a, i)), o > i && y(t = t.slice(i)), o > i && d(t))
                    }
                    u.push(n)
                }
                return f(u)
            }

            function b(t, n) {
                var o = n.length > 0, s = t.length > 0, r = function (i, r, a, l, c) {
                    var u, h, d, p = 0, f = "0", m = i && [], v = [], y = _, b = i || s && k.find.TAG("*", c), w = z += null == y ? 1 : Math.random() || .1, x = b.length;
                    for (c && (_ = r !== A && r); f !== x && null != (u = b[f]); f++) {
                        if (s && u) {
                            for (h = 0; d = t[h++];)if (d(u, r, a)) {
                                l.push(u);
                                break
                            }
                            c && (z = w)
                        }
                        o && ((u = !d && u) && p--, i && m.push(u))
                    }
                    if (p += f, o && f !== p) {
                        for (h = 0; d = n[h++];)d(m, v, r, a);
                        if (i) {
                            if (p > 0)for (; f--;)m[f] || v[f] || (v[f] = K.call(l));
                            v = g(v)
                        }
                        Q.apply(l, v), c && !i && v.length > 0 && p + n.length > 1 && e.uniqueSort(l)
                    }
                    return c && (z = w, _ = y), m
                };
                return o ? i(r) : r
            }

            var w, x, k, T, C, S, $, E, _, j, N, L, A, O, P, D, I, M, H, R = "sizzle" + 1 * new Date, F = t.document, z = 0, q = 0, B = n(), W = n(), U = n(), V = function (t, e) {
                return t === e && (N = !0), 0
            }, X = 1 << 31, J = {}.hasOwnProperty, G = [], K = G.pop, Y = G.push, Q = G.push, Z = G.slice, te = function (t, e) {
                for (var n = 0, i = t.length; i > n; n++)if (t[n] === e)return n;
                return -1
            }, ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = ie.replace("w", "w#"), se = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]", re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)", ae = new RegExp(ne + "+", "g"), le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), ce = new RegExp("^" + ne + "*," + ne + "*"), ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), he = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), de = new RegExp(re), pe = new RegExp("^" + oe + "$"), fe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + se),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ee + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            }, me = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, be = /[+~]/, we = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), ke = function (t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, Te = function () {
                L()
            };
            try {
                Q.apply(G = Z.call(F.childNodes), F.childNodes), G[F.childNodes.length].nodeType
            } catch (Ce) {
                Q = {
                    apply: G.length ? function (t, e) {
                        Y.apply(t, Z.call(e))
                    } : function (t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            x = e.support = {}, C = e.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, L = e.setDocument = function (t) {
                var e, n, i = t ? t.ownerDocument || t : F;
                return i !== A && 9 === i.nodeType && i.documentElement ? (A = i, O = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), P = !C(i), x.attributes = o(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), x.getElementsByTagName = o(function (t) {
                    return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
                }), x.getElementsByClassName = ve.test(i.getElementsByClassName), x.getById = o(function (t) {
                    return O.appendChild(t).id = R, !i.getElementsByName || !i.getElementsByName(R).length
                }), x.getById ? (k.find.ID = function (t, e) {
                    if ("undefined" != typeof e.getElementById && P) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : []
                    }
                }, k.filter.ID = function (t) {
                    var e = t.replace(xe, ke);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete k.find.ID, k.filter.ID = function (t) {
                    var e = t.replace(xe, ke);
                    return function (t) {
                        var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), k.find.TAG = x.getElementsByTagName ? function (t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var n, i = [], o = 0, s = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = s[o++];)1 === n.nodeType && i.push(n);
                        return i
                    }
                    return s
                }, k.find.CLASS = x.getElementsByClassName && function (t, e) {
                        return P ? e.getElementsByClassName(t) : void 0
                    }, I = [], D = [], (x.qsa = ve.test(i.querySelectorAll)) && (o(function (t) {
                    O.appendChild(t).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && D.push("[*^$]=" + ne + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || D.push("\\[" + ne + "*(?:value|" + ee + ")"), t.querySelectorAll("[id~=" + R + "-]").length || D.push("~="), t.querySelectorAll(":checked").length || D.push(":checked"), t.querySelectorAll("a#" + R + "+*").length || D.push(".#.+[+~]")
                }), o(function (t) {
                    var e = i.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && D.push("name" + ne + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), D.push(",.*:")
                })), (x.matchesSelector = ve.test(M = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o(function (t) {
                    x.disconnectedMatch = M.call(t, "div"), M.call(t, "[s!='']:x"), I.push("!=", re)
                }), D = D.length && new RegExp(D.join("|")), I = I.length && new RegExp(I.join("|")), e = ve.test(O.compareDocumentPosition), H = e || ve.test(O.contains) ? function (t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function (t, e) {
                    if (e)for (; e = e.parentNode;)if (e === t)return !0;
                    return !1
                }, V = e ? function (t, e) {
                    if (t === e)return N = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === F && H(F, t) ? -1 : e === i || e.ownerDocument === F && H(F, e) ? 1 : j ? te(j, t) - te(j, e) : 0 : 4 & n ? -1 : 1)
                } : function (t, e) {
                    if (t === e)return N = !0, 0;
                    var n, o = 0, s = t.parentNode, a = e.parentNode, l = [t], c = [e];
                    if (!s || !a)return t === i ? -1 : e === i ? 1 : s ? -1 : a ? 1 : j ? te(j, t) - te(j, e) : 0;
                    if (s === a)return r(t, e);
                    for (n = t; n = n.parentNode;)l.unshift(n);
                    for (n = e; n = n.parentNode;)c.unshift(n);
                    for (; l[o] === c[o];)o++;
                    return o ? r(l[o], c[o]) : l[o] === F ? -1 : c[o] === F ? 1 : 0
                }, i) : A
            }, e.matches = function (t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function (t, n) {
                if ((t.ownerDocument || t) !== A && L(t), n = n.replace(he, "='$1']"), !(!x.matchesSelector || !P || I && I.test(n) || D && D.test(n)))try {
                    var i = M.call(t, n);
                    if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType)return i
                } catch (o) {
                }
                return e(n, A, null, [t]).length > 0
            }, e.contains = function (t, e) {
                return (t.ownerDocument || t) !== A && L(t), H(t, e)
            }, e.attr = function (t, e) {
                (t.ownerDocument || t) !== A && L(t);
                var n = k.attrHandle[e.toLowerCase()], i = n && J.call(k.attrHandle, e.toLowerCase()) ? n(t, e, !P) : void 0;
                return void 0 !== i ? i : x.attributes || !P ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function (t) {
                var e, n = [], i = 0, o = 0;
                if (N = !x.detectDuplicates, j = !x.sortStable && t.slice(0), t.sort(V), N) {
                    for (; e = t[o++];)e === t[o] && (i = n.push(o));
                    for (; i--;)t.splice(n[i], 1)
                }
                return j = null, t
            }, T = e.getText = function (t) {
                var e, n = "", i = 0, o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent)return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling)n += T(t)
                    } else if (3 === o || 4 === o)return t.nodeValue
                } else for (; e = t[i++];)n += T(e);
                return n
            }, k = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: fe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(xe, ke), t[3] = (t[3] || t[4] || t[5] || "").replace(xe, ke), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    }, CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    }, PSEUDO: function (t) {
                        var e, n = !t[6] && t[2];
                        return fe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && de.test(n) && (e = S(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(xe, ke).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    }, CLASS: function (t) {
                        var e = B[t + " "];
                        return e || (e = new RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) && B(t, function (t) {
                                return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                            })
                    }, ATTR: function (t, n, i) {
                        return function (o) {
                            var s = e.attr(o, t);
                            return null == s ? "!=" === n : n ? (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n ? s === i || s.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    }, CHILD: function (t, e, n, i, o) {
                        var s = "nth" !== t.slice(0, 3), r = "last" !== t.slice(-4), a = "of-type" === e;
                        return 1 === i && 0 === o ? function (t) {
                            return !!t.parentNode
                        } : function (e, n, l) {
                            var c, u, h, d, p, f, m = s !== r ? "nextSibling" : "previousSibling", g = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !l && !a;
                            if (g) {
                                if (s) {
                                    for (; m;) {
                                        for (h = e; h = h[m];)if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType)return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [r ? g.firstChild : g.lastChild], r && y) {
                                    for (u = g[R] || (g[R] = {}), c = u[t] || [], p = c[0] === z && c[1], d = c[0] === z && c[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (d = p = 0) || f.pop();)if (1 === h.nodeType && ++d && h === e) {
                                        u[t] = [z, p, d];
                                        break
                                    }
                                } else if (y && (c = (e[R] || (e[R] = {}))[t]) && c[0] === z)d = c[1]; else for (; (h = ++p && h && h[m] || (d = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++d || (y && ((h[R] || (h[R] = {}))[t] = [z, d]), h !== e)););
                                return d -= o, d === i || d % i === 0 && d / i >= 0
                            }
                        }
                    }, PSEUDO: function (t, n) {
                        var o, s = k.pseudos[t] || k.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return s[R] ? s(n) : s.length > 1 ? (o = [t, t, "", n], k.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                            for (var i, o = s(t, n), r = o.length; r--;)i = te(t, o[r]), t[i] = !(e[i] = o[r])
                        }) : function (t) {
                            return s(t, 0, o)
                        }) : s
                    }
                },
                pseudos: {
                    not: i(function (t) {
                        var e = [], n = [], o = $(t.replace(le, "$1"));
                        return o[R] ? i(function (t, e, n, i) {
                            for (var s, r = o(t, null, i, []), a = t.length; a--;)(s = r[a]) && (t[a] = !(e[a] = s))
                        }) : function (t, i, s) {
                            return e[0] = t, o(e, null, s, n), e[0] = null, !n.pop()
                        }
                    }), has: i(function (t) {
                        return function (n) {
                            return e(t, n).length > 0
                        }
                    }), contains: i(function (t) {
                        return t = t.replace(xe, ke), function (e) {
                            return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                        }
                    }), lang: i(function (t) {
                        return pe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xe, ke).toLowerCase(), function (e) {
                            var n;
                            do if (n = P ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }), target: function (e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    }, root: function (t) {
                        return t === O
                    }, focus: function (t) {
                        return t === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    }, enabled: function (t) {
                        return t.disabled === !1
                    }, disabled: function (t) {
                        return t.disabled === !0
                    }, checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    }, selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    }, empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)if (t.nodeType < 6)return !1;
                        return !0
                    }, parent: function (t) {
                        return !k.pseudos.empty(t)
                    }, header: function (t) {
                        return ge.test(t.nodeName)
                    }, input: function (t) {
                        return me.test(t.nodeName)
                    }, button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    }, text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    }, first: c(function () {
                        return [0]
                    }), last: c(function (t, e) {
                        return [e - 1]
                    }), eq: c(function (t, e, n) {
                        return [0 > n ? n + e : n]
                    }), even: c(function (t, e) {
                        for (var n = 0; e > n; n += 2)t.push(n);
                        return t
                    }), odd: c(function (t, e) {
                        for (var n = 1; e > n; n += 2)t.push(n);
                        return t
                    }), lt: c(function (t, e, n) {
                        for (var i = 0 > n ? n + e : n; --i >= 0;)t.push(i);
                        return t
                    }), gt: c(function (t, e, n) {
                        for (var i = 0 > n ? n + e : n; ++i < e;)t.push(i);
                        return t
                    })
                }
            }, k.pseudos.nth = k.pseudos.eq;
            for (w in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})k.pseudos[w] = a(w);
            for (w in{submit: !0, reset: !0})k.pseudos[w] = l(w);
            return h.prototype = k.filters = k.pseudos, k.setFilters = new h, S = e.tokenize = function (t, n) {
                var i, o, s, r, a, l, c, u = W[t + " "];
                if (u)return n ? 0 : u.slice(0);
                for (a = t, l = [], c = k.preFilter; a;) {
                    (!i || (o = ce.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(s = [])), i = !1, (o = ue.exec(a)) && (i = o.shift(), s.push({
                        value: i,
                        type: o[0].replace(le, " ")
                    }), a = a.slice(i.length));
                    for (r in k.filter)!(o = fe[r].exec(a)) || c[r] && !(o = c[r](o)) || (i = o.shift(), s.push({
                        value: i,
                        type: r,
                        matches: o
                    }), a = a.slice(i.length));
                    if (!i)break
                }
                return n ? a.length : a ? e.error(t) : W(t, l).slice(0)
            }, $ = e.compile = function (t, e) {
                var n, i = [], o = [], s = U[t + " "];
                if (!s) {
                    for (e || (e = S(t)), n = e.length; n--;)s = y(e[n]), s[R] ? i.push(s) : o.push(s);
                    s = U(t, b(o, i)), s.selector = t
                }
                return s
            }, E = e.select = function (t, e, n, i) {
                var o, s, r, a, l, c = "function" == typeof t && t, h = !i && S(t = c.selector || t);
                if (n = n || [], 1 === h.length) {
                    if (s = h[0] = h[0].slice(0), s.length > 2 && "ID" === (r = s[0]).type && x.getById && 9 === e.nodeType && P && k.relative[s[1].type]) {
                        if (e = (k.find.ID(r.matches[0].replace(xe, ke), e) || [])[0], !e)return n;
                        c && (e = e.parentNode), t = t.slice(s.shift().value.length)
                    }
                    for (o = fe.needsContext.test(t) ? 0 : s.length; o-- && (r = s[o], !k.relative[a = r.type]);)if ((l = k.find[a]) && (i = l(r.matches[0].replace(xe, ke), be.test(s[0].type) && u(e.parentNode) || e))) {
                        if (s.splice(o, 1), t = i.length && d(s), !t)return Q.apply(n, i), n;
                        break
                    }
                }
                return (c || $(t, h))(i, e, !P, n, be.test(t) && u(e.parentNode) || e), n
            }, x.sortStable = R.split("").sort(V).join("") === R, x.detectDuplicates = !!N, L(), x.sortDetached = o(function (t) {
                return 1 & t.compareDocumentPosition(A.createElement("div"))
            }), o(function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || s("type|href|height|width", function (t, e, n) {
                return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), x.attributes && o(function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || s("value", function (t, e, n) {
                return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), o(function (t) {
                return null == t.getAttribute("disabled")
            }) || s(ee, function (t, e, n) {
                var i;
                return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(t);
        oe.find = ce, oe.expr = ce.selectors, oe.expr[":"] = oe.expr.pseudos, oe.unique = ce.uniqueSort, oe.text = ce.getText, oe.isXMLDoc = ce.isXML, oe.contains = ce.contains;
        var ue = oe.expr.match.needsContext, he = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, de = /^.[^:#\[\.,]*$/;
        oe.filter = function (t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? oe.find.matchesSelector(i, t) ? [i] : [] : oe.find.matches(t, oe.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        }, oe.fn.extend({
            find: function (t) {
                var e, n = [], i = this, o = i.length;
                if ("string" != typeof t)return this.pushStack(oe(t).filter(function () {
                    for (e = 0; o > e; e++)if (oe.contains(i[e], this))return !0
                }));
                for (e = 0; o > e; e++)oe.find(t, i[e], n);
                return n = this.pushStack(o > 1 ? oe.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            }, filter: function (t) {
                return this.pushStack(i(this, t || [], !1))
            }, not: function (t) {
                return this.pushStack(i(this, t || [], !0))
            }, is: function (t) {
                return !!i(this, "string" == typeof t && ue.test(t) ? oe(t) : t || [], !1).length
            }
        });
        var pe, fe = t.document, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ge = oe.fn.init = function (t, e) {
            var n, i;
            if (!t)return this;
            if ("string" == typeof t) {
                if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : me.exec(t), !n || !n[1] && e)return !e || e.jquery ? (e || pe).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof oe ? e[0] : e, oe.merge(this, oe.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : fe, !0)), he.test(n[1]) && oe.isPlainObject(e))for (n in e)oe.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                if (i = fe.getElementById(n[2]), i && i.parentNode) {
                    if (i.id !== n[2])return pe.find(t);
                    this.length = 1, this[0] = i
                }
                return this.context = fe, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : oe.isFunction(t) ? "undefined" != typeof pe.ready ? pe.ready(t) : t(oe) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), oe.makeArray(t, this))
        };
        ge.prototype = oe.fn, pe = oe(fe);
        var ve = /^(?:parents|prev(?:Until|All))/, ye = {children: !0, contents: !0, next: !0, prev: !0};
        oe.extend({
            dir: function (t, e, n) {
                for (var i = [], o = t[e]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !oe(o).is(n));)1 === o.nodeType && i.push(o), o = o[e];
                return i
            }, sibling: function (t, e) {
                for (var n = []; t; t = t.nextSibling)1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        }), oe.fn.extend({
            has: function (t) {
                var e, n = oe(t, this), i = n.length;
                return this.filter(function () {
                    for (e = 0; i > e; e++)if (oe.contains(this, n[e]))return !0
                })
            }, closest: function (t, e) {
                for (var n, i = 0, o = this.length, s = [], r = ue.test(t) || "string" != typeof t ? oe(t, e || this.context) : 0; o > i; i++)for (n = this[i]; n && n !== e; n = n.parentNode)if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, t))) {
                    s.push(n);
                    break
                }
                return this.pushStack(s.length > 1 ? oe.unique(s) : s)
            }, index: function (t) {
                return t ? "string" == typeof t ? oe.inArray(this[0], oe(t)) : oe.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (t, e) {
                return this.pushStack(oe.unique(oe.merge(this.get(), oe(t, e))))
            }, addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), oe.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            }, parents: function (t) {
                return oe.dir(t, "parentNode")
            }, parentsUntil: function (t, e, n) {
                return oe.dir(t, "parentNode", n)
            }, next: function (t) {
                return o(t, "nextSibling")
            }, prev: function (t) {
                return o(t, "previousSibling")
            }, nextAll: function (t) {
                return oe.dir(t, "nextSibling")
            }, prevAll: function (t) {
                return oe.dir(t, "previousSibling")
            }, nextUntil: function (t, e, n) {
                return oe.dir(t, "nextSibling", n)
            }, prevUntil: function (t, e, n) {
                return oe.dir(t, "previousSibling", n)
            }, siblings: function (t) {
                return oe.sibling((t.parentNode || {}).firstChild, t)
            }, children: function (t) {
                return oe.sibling(t.firstChild)
            }, contents: function (t) {
                return oe.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : oe.merge([], t.childNodes)
            }
        }, function (t, e) {
            oe.fn[t] = function (n, i) {
                var o = oe.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = oe.filter(i, o)), this.length > 1 && (ye[t] || (o = oe.unique(o)), ve.test(t) && (o = o.reverse())), this.pushStack(o)
            }
        });
        var be = /\S+/g, we = {};
        oe.Callbacks = function (t) {
            t = "string" == typeof t ? we[t] || s(t) : oe.extend({}, t);
            var e, n, i, o, r, a, l = [], c = !t.once && [], u = function (s) {
                for (n = t.memory && s, i = !0, r = a || 0, a = 0, o = l.length, e = !0; l && o > r; r++)if (l[r].apply(s[0], s[1]) === !1 && t.stopOnFalse) {
                    n = !1;
                    break
                }
                e = !1, l && (c ? c.length && u(c.shift()) : n ? l = [] : h.disable())
            }, h = {
                add: function () {
                    if (l) {
                        var i = l.length;
                        !function s(e) {
                            oe.each(e, function (e, n) {
                                var i = oe.type(n);
                                "function" === i ? t.unique && h.has(n) || l.push(n) : n && n.length && "string" !== i && s(n)
                            })
                        }(arguments), e ? o = l.length : n && (a = i, u(n))
                    }
                    return this
                }, remove: function () {
                    return l && oe.each(arguments, function (t, n) {
                        for (var i; (i = oe.inArray(n, l, i)) > -1;)l.splice(i, 1), e && (o >= i && o--, r >= i && r--)
                    }), this
                }, has: function (t) {
                    return t ? oe.inArray(t, l) > -1 : !(!l || !l.length)
                }, empty: function () {
                    return l = [], o = 0, this
                }, disable: function () {
                    return l = c = n = void 0, this
                }, disabled: function () {
                    return !l
                }, lock: function () {
                    return c = void 0, n || h.disable(), this
                }, locked: function () {
                    return !c
                }, fireWith: function (t, n) {
                    return !l || i && !c || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? c.push(n) : u(n)), this
                }, fire: function () {
                    return h.fireWith(this, arguments), this
                }, fired: function () {
                    return !!i
                }
            };
            return h
        }, oe.extend({
            Deferred: function (t) {
                var e = [["resolve", "done", oe.Callbacks("once memory"), "resolved"], ["reject", "fail", oe.Callbacks("once memory"), "rejected"], ["notify", "progress", oe.Callbacks("memory")]], n = "pending", i = {
                    state: function () {
                        return n
                    }, always: function () {
                        return o.done(arguments).fail(arguments), this
                    }, then: function () {
                        var t = arguments;
                        return oe.Deferred(function (n) {
                            oe.each(e, function (e, s) {
                                var r = oe.isFunction(t[e]) && t[e];
                                o[s[1]](function () {
                                    var t = r && r.apply(this, arguments);
                                    t && oe.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === i ? n.promise() : this, r ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    }, promise: function (t) {
                        return null != t ? oe.extend(t, i) : i
                    }
                }, o = {};
                return i.pipe = i.then, oe.each(e, function (t, s) {
                    var r = s[2], a = s[3];
                    i[s[1]] = r.add, a && r.add(function () {
                        n = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), o[s[0]] = function () {
                        return o[s[0] + "With"](this === o ? i : this, arguments), this
                    }, o[s[0] + "With"] = r.fireWith
                }), i.promise(o), t && t.call(o, o), o
            }, when: function (t) {
                var e, n, i, o = 0, s = G.call(arguments), r = s.length, a = 1 !== r || t && oe.isFunction(t.promise) ? r : 0, l = 1 === a ? t : oe.Deferred(), c = function (t, n, i) {
                    return function (o) {
                        n[t] = this, i[t] = arguments.length > 1 ? G.call(arguments) : o, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
                if (r > 1)for (e = new Array(r), n = new Array(r), i = new Array(r); r > o; o++)s[o] && oe.isFunction(s[o].promise) ? s[o].promise().done(c(o, i, s)).fail(l.reject).progress(c(o, n, e)) : --a;
                return a || l.resolveWith(i, s), l.promise()
            }
        });
        var xe;
        oe.fn.ready = function (t) {
            return oe.ready.promise().done(t), this
        }, oe.extend({
            isReady: !1, readyWait: 1, holdReady: function (t) {
                t ? oe.readyWait++ : oe.ready(!0)
            }, ready: function (t) {
                if (t === !0 ? !--oe.readyWait : !oe.isReady) {
                    if (!fe.body)return setTimeout(oe.ready);
                    oe.isReady = !0, t !== !0 && --oe.readyWait > 0 || (xe.resolveWith(fe, [oe]), oe.fn.triggerHandler && (oe(fe).triggerHandler("ready"), oe(fe).off("ready")))
                }
            }
        }), oe.ready.promise = function (e) {
            if (!xe)if (xe = oe.Deferred(), "complete" === fe.readyState)setTimeout(oe.ready); else if (fe.addEventListener)fe.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1); else {
                fe.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
                var n = !1;
                try {
                    n = null == t.frameElement && fe.documentElement
                } catch (i) {
                }
                n && n.doScroll && !function o() {
                    if (!oe.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return setTimeout(o, 50)
                        }
                        r(), oe.ready()
                    }
                }()
            }
            return xe.promise(e)
        };
        var ke, Te = "undefined";
        for (ke in oe(ne))break;
        ne.ownLast = "0" !== ke, ne.inlineBlockNeedsLayout = !1, oe(function () {
            var t, e, n, i;
            n = fe.getElementsByTagName("body")[0], n && n.style && (e = fe.createElement("div"), i = fe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== Te && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
        }), function () {
            var t = fe.createElement("div");
            if (null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    ne.deleteExpando = !1
                }
            }
            t = null
        }(), oe.acceptData = function (t) {
            var e = oe.noData[(t.nodeName + " ").toLowerCase()], n = +t.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
        };
        var Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Se = /([A-Z])/g;
        oe.extend({
            cache: {},
            noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
            hasData: function (t) {
                return t = t.nodeType ? oe.cache[t[oe.expando]] : t[oe.expando], !!t && !c(t)
            },
            data: function (t, e, n) {
                return u(t, e, n)
            },
            removeData: function (t, e) {
                return h(t, e)
            },
            _data: function (t, e, n) {
                return u(t, e, n, !0)
            },
            _removeData: function (t, e) {
                return h(t, e, !0)
            }
        }), oe.fn.extend({
            data: function (t, e) {
                var n, i, o, s = this[0], r = s && s.attributes;
                if (void 0 === t) {
                    if (this.length && (o = oe.data(s), 1 === s.nodeType && !oe._data(s, "parsedAttrs"))) {
                        for (n = r.length; n--;)r[n] && (i = r[n].name, 0 === i.indexOf("data-") && (i = oe.camelCase(i.slice(5)), l(s, i, o[i])));
                        oe._data(s, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function () {
                    oe.data(this, t)
                }) : arguments.length > 1 ? this.each(function () {
                    oe.data(this, t, e)
                }) : s ? l(s, t, oe.data(s, t)) : void 0
            }, removeData: function (t) {
                return this.each(function () {
                    oe.removeData(this, t)
                })
            }
        }), oe.extend({
            queue: function (t, e, n) {
                var i;
                return t ? (e = (e || "fx") + "queue", i = oe._data(t, e), n && (!i || oe.isArray(n) ? i = oe._data(t, e, oe.makeArray(n)) : i.push(n)), i || []) : void 0
            }, dequeue: function (t, e) {
                e = e || "fx";
                var n = oe.queue(t, e), i = n.length, o = n.shift(), s = oe._queueHooks(t, e), r = function () {
                    oe.dequeue(t, e)
                };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete s.stop, o.call(t, r, s)), !i && s && s.empty.fire()
            }, _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return oe._data(t, n) || oe._data(t, n, {
                        empty: oe.Callbacks("once memory").add(function () {
                            oe._removeData(t, e + "queue"), oe._removeData(t, n)
                        })
                    })
            }
        }), oe.fn.extend({
            queue: function (t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? oe.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                    var n = oe.queue(this, t, e);
                    oe._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && oe.dequeue(this, t)
                })
            }, dequeue: function (t) {
                return this.each(function () {
                    oe.dequeue(this, t)
                })
            }, clearQueue: function (t) {
                return this.queue(t || "fx", [])
            }, promise: function (t, e) {
                var n, i = 1, o = oe.Deferred(), s = this, r = this.length, a = function () {
                    --i || o.resolveWith(s, [s])
                };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;)n = oe._data(s[r], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), o.promise(e)
            }
        });
        var $e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ee = ["Top", "Right", "Bottom", "Left"], _e = function (t, e) {
            return t = e || t, "none" === oe.css(t, "display") || !oe.contains(t.ownerDocument, t)
        }, je = oe.access = function (t, e, n, i, o, s, r) {
            var a = 0, l = t.length, c = null == n;
            if ("object" === oe.type(n)) {
                o = !0;
                for (a in n)oe.access(t, e, a, n[a], !0, s, r)
            } else if (void 0 !== i && (o = !0, oe.isFunction(i) || (r = !0), c && (r ? (e.call(t, i), e = null) : (c = e, e = function (t, e, n) {
                    return c.call(oe(t), n)
                })), e))for (; l > a; a++)e(t[a], n, r ? i : i.call(t[a], a, e(t[a], n)));
            return o ? t : c ? e.call(t) : l ? e(t[0], n) : s
        }, Ne = /^(?:checkbox|radio)$/i;
        !function () {
            var t = fe.createElement("input"), e = fe.createElement("div"), n = fe.createDocumentFragment();
            if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === e.firstChild.nodeType, ne.tbody = !e.getElementsByTagName("tbody").length, ne.htmlSerialize = !!e.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== fe.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), ne.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
                    ne.noCloneEvent = !1
                }), e.cloneNode(!0).click()), null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete e.test
                } catch (i) {
                    ne.deleteExpando = !1
                }
            }
        }(), function () {
            var e, n, i = fe.createElement("div");
            for (e in{
                submit: !0,
                change: !0,
                focusin: !0
            })n = "on" + e, (ne[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), ne[e + "Bubbles"] = i.attributes[n].expando === !1);
            i = null
        }();
        var Le = /^(?:input|select|textarea)$/i, Ae = /^key/, Oe = /^(?:mouse|pointer|contextmenu)|click/, Pe = /^(?:focusinfocus|focusoutblur)$/, De = /^([^.]*)(?:\.(.+)|)$/;
        oe.event = {
            global: {},
            add: function (t, e, n, i, o) {
                var s, r, a, l, c, u, h, d, p, f, m, g = oe._data(t);
                if (g) {
                    for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = oe.guid++), (r = g.events) || (r = g.events = {}), (u = g.handle) || (u = g.handle = function (t) {
                        return typeof oe === Te || t && oe.event.triggered === t.type ? void 0 : oe.event.dispatch.apply(u.elem, arguments)
                    }, u.elem = t), e = (e || "").match(be) || [""], a = e.length; a--;)s = De.exec(e[a]) || [], p = m = s[1], f = (s[2] || "").split(".").sort(), p && (c = oe.event.special[p] || {}, p = (o ? c.delegateType : c.bindType) || p, c = oe.event.special[p] || {}, h = oe.extend({
                        type: p,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && oe.expr.match.needsContext.test(o),
                        namespace: f.join(".")
                    }, l), (d = r[p]) || (d = r[p] = [], d.delegateCount = 0, c.setup && c.setup.call(t, i, f, u) !== !1 || (t.addEventListener ? t.addEventListener(p, u, !1) : t.attachEvent && t.attachEvent("on" + p, u))), c.add && (c.add.call(t, h), h.handler.guid || (h.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, h) : d.push(h), oe.event.global[p] = !0);
                    t = null
                }
            },
            remove: function (t, e, n, i, o) {
                var s, r, a, l, c, u, h, d, p, f, m, g = oe.hasData(t) && oe._data(t);
                if (g && (u = g.events)) {
                    for (e = (e || "").match(be) || [""], c = e.length; c--;)if (a = De.exec(e[c]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
                        for (h = oe.event.special[p] || {}, p = (i ? h.delegateType : h.bindType) || p, d = u[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = d.length; s--;)r = d[s], !o && m !== r.origType || n && n.guid !== r.guid || a && !a.test(r.namespace) || i && i !== r.selector && ("**" !== i || !r.selector) || (d.splice(s, 1), r.selector && d.delegateCount--, h.remove && h.remove.call(t, r));
                        l && !d.length && (h.teardown && h.teardown.call(t, f, g.handle) !== !1 || oe.removeEvent(t, p, g.handle), delete u[p])
                    } else for (p in u)oe.event.remove(t, p + e[c], n, i, !0);
                    oe.isEmptyObject(u) && (delete g.handle, oe._removeData(t, "events"))
                }
            },
            trigger: function (e, n, i, o) {
                var s, r, a, l, c, u, h, d = [i || fe], p = ee.call(e, "type") ? e.type : e, f = ee.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = u = i = i || fe, 3 !== i.nodeType && 8 !== i.nodeType && !Pe.test(p + oe.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), r = p.indexOf(":") < 0 && "on" + p, e = e[oe.expando] ? e : new oe.Event(p, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : oe.makeArray(n, [e]), c = oe.event.special[p] || {}, o || !c.trigger || c.trigger.apply(i, n) !== !1)) {
                    if (!o && !c.noBubble && !oe.isWindow(i)) {
                        for (l = c.delegateType || p, Pe.test(l + p) || (a = a.parentNode); a; a = a.parentNode)d.push(a), u = a;
                        u === (i.ownerDocument || fe) && d.push(u.defaultView || u.parentWindow || t)
                    }
                    for (h = 0; (a = d[h++]) && !e.isPropagationStopped();)e.type = h > 1 ? l : c.bindType || p, s = (oe._data(a, "events") || {})[e.type] && oe._data(a, "handle"), s && s.apply(a, n), s = r && a[r], s && s.apply && oe.acceptData(a) && (e.result = s.apply(a, n), e.result === !1 && e.preventDefault());
                    if (e.type = p, !o && !e.isDefaultPrevented() && (!c._default || c._default.apply(d.pop(), n) === !1) && oe.acceptData(i) && r && i[p] && !oe.isWindow(i)) {
                        u = i[r], u && (i[r] = null), oe.event.triggered = p;
                        try {
                            i[p]()
                        } catch (m) {
                        }
                        oe.event.triggered = void 0, u && (i[r] = u)
                    }
                    return e.result
                }
            },
            dispatch: function (t) {
                t = oe.event.fix(t);
                var e, n, i, o, s, r = [], a = G.call(arguments), l = (oe._data(this, "events") || {})[t.type] || [], c = oe.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                    for (r = oe.event.handlers.call(this, t, l), e = 0; (o = r[e++]) && !t.isPropagationStopped();)for (t.currentTarget = o.elem, s = 0; (i = o.handlers[s++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((oe.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function (t, e) {
                var n, i, o, s, r = [], a = e.delegateCount, l = t.target;
                if (a && l.nodeType && (!t.button || "click" !== t.type))for (; l != this; l = l.parentNode || this)if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                    for (o = [], s = 0; a > s; s++)i = e[s], n = i.selector + " ", void 0 === o[n] && (o[n] = i.needsContext ? oe(n, this).index(l) >= 0 : oe.find(n, this, null, [l]).length), o[n] && o.push(i);
                    o.length && r.push({elem: l, handlers: o})
                }
                return a < e.length && r.push({elem: this, handlers: e.slice(a)}), r
            },
            fix: function (t) {
                if (t[oe.expando])return t;
                var e, n, i, o = t.type, s = t, r = this.fixHooks[o];
                for (r || (this.fixHooks[o] = r = Oe.test(o) ? this.mouseHooks : Ae.test(o) ? this.keyHooks : {}), i = r.props ? this.props.concat(r.props) : this.props, t = new oe.Event(s), e = i.length; e--;)n = i[e], t[n] = s[n];
                return t.target || (t.target = s.srcElement || fe), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, r.filter ? r.filter(t, s) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (t, e) {
                    var n, i, o, s = e.button, r = e.fromElement;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || fe, o = i.documentElement, n = i.body, t.pageX = e.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !t.relatedTarget && r && (t.relatedTarget = r === t.target ? e.toElement : r), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
                }
            },
            special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== f() && this.focus)try {
                            return this.focus(), !1
                        } catch (t) {
                        }
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        return this === f() && this.blur ? (this.blur(), !1) : void 0
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        return oe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    }, _default: function (t) {
                        return oe.nodeName(t.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function (t, e, n, i) {
                var o = oe.extend(new oe.Event, n, {type: t, isSimulated: !0, originalEvent: {}});
                i ? oe.event.trigger(o, null, e) : oe.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
            }
        }, oe.removeEvent = fe.removeEventListener ? function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        } : function (t, e, n) {
            var i = "on" + e;
            t.detachEvent && (typeof t[i] === Te && (t[i] = null), t.detachEvent(i, n))
        }, oe.Event = function (t, e) {
            return this instanceof oe.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? d : p) : this.type = t, e && oe.extend(this, e), this.timeStamp = t && t.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(t, e)
        }, oe.Event.prototype = {
            isDefaultPrevented: p,
            isPropagationStopped: p,
            isImmediatePropagationStopped: p,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = d, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = d, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = d, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, oe.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, e) {
            oe.event.special[t] = {
                delegateType: e, bindType: e, handle: function (t) {
                    var n, i = this, o = t.relatedTarget, s = t.handleObj;
                    return (!o || o !== i && !oe.contains(i, o)) && (t.type = s.origType, n = s.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), ne.submitBubbles || (oe.event.special.submit = {
            setup: function () {
                return oe.nodeName(this, "form") ? !1 : void oe.event.add(this, "click._submit keypress._submit", function (t) {
                    var e = t.target, n = oe.nodeName(e, "input") || oe.nodeName(e, "button") ? e.form : void 0;
                    n && !oe._data(n, "submitBubbles") && (oe.event.add(n, "submit._submit", function (t) {
                        t._submit_bubble = !0
                    }), oe._data(n, "submitBubbles", !0))
                })
            }, postDispatch: function (t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && oe.event.simulate("submit", this.parentNode, t, !0))
            }, teardown: function () {
                return oe.nodeName(this, "form") ? !1 : void oe.event.remove(this, "._submit")
            }
        }), ne.changeBubbles || (oe.event.special.change = {
            setup: function () {
                return Le.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (oe.event.add(this, "propertychange._change", function (t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), oe.event.add(this, "click._change", function (t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), oe.event.simulate("change", this, t, !0)
                })), !1) : void oe.event.add(this, "beforeactivate._change", function (t) {
                    var e = t.target;
                    Le.test(e.nodeName) && !oe._data(e, "changeBubbles") && (oe.event.add(e, "change._change", function (t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || oe.event.simulate("change", this.parentNode, t, !0)
                    }), oe._data(e, "changeBubbles", !0))
                })
            }, handle: function (t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
            }, teardown: function () {
                return oe.event.remove(this, "._change"), !Le.test(this.nodeName)
            }
        }), ne.focusinBubbles || oe.each({focus: "focusin", blur: "focusout"}, function (t, e) {
            var n = function (t) {
                oe.event.simulate(e, t.target, oe.event.fix(t), !0)
            };
            oe.event.special[e] = {
                setup: function () {
                    var i = this.ownerDocument || this, o = oe._data(i, e);
                    o || i.addEventListener(t, n, !0), oe._data(i, e, (o || 0) + 1)
                }, teardown: function () {
                    var i = this.ownerDocument || this, o = oe._data(i, e) - 1;
                    o ? oe._data(i, e, o) : (i.removeEventListener(t, n, !0), oe._removeData(i, e))
                }
            }
        }), oe.fn.extend({
            on: function (t, e, n, i, o) {
                var s, r;
                if ("object" == typeof t) {
                    "string" != typeof e && (n = n || e, e = void 0);
                    for (s in t)this.on(s, e, n, t[s], o);
                    return this
                }
                if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1)i = p; else if (!i)return this;
                return 1 === o && (r = i, i = function (t) {
                    return oe().off(t), r.apply(this, arguments)
                }, i.guid = r.guid || (r.guid = oe.guid++)), this.each(function () {
                    oe.event.add(this, t, i, n, e)
                })
            }, one: function (t, e, n, i) {
                return this.on(t, e, n, i, 1)
            }, off: function (t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj)return i = t.handleObj, oe(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (o in t)this.off(o, e, t[o]);
                    return this
                }
                return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = p), this.each(function () {
                    oe.event.remove(this, t, n, e)
                })
            }, trigger: function (t, e) {
                return this.each(function () {
                    oe.event.trigger(t, e, this)
                })
            }, triggerHandler: function (t, e) {
                var n = this[0];
                return n ? oe.event.trigger(t, e, n, !0) : void 0
            }
        });
        var Ie = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Me = / jQuery\d+="(?:null|\d+)"/g, He = new RegExp("<(?:" + Ie + ")[\\s/>]", "i"), Re = /^\s+/, Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ze = /<([\w:]+)/, qe = /<tbody/i, Be = /<|&#?\w+;/, We = /<(?:script|style|link)/i, Ue = /checked\s*(?:[^=]|=\s*.checked.)/i, Ve = /^$|\/(?:java|ecma)script/i, Xe = /^true\/(.*)/, Je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, Ke = m(fe), Ye = Ke.appendChild(fe.createElement("div"));
        Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td, oe.extend({
            clone: function (t, e, n) {
                var i, o, s, r, a, l = oe.contains(t.ownerDocument, t);
                if (ne.html5Clone || oe.isXMLDoc(t) || !He.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (Ye.innerHTML = t.outerHTML, Ye.removeChild(s = Ye.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || oe.isXMLDoc(t)))for (i = g(s), a = g(t), r = 0; null != (o = a[r]); ++r)i[r] && T(o, i[r]);
                if (e)if (n)for (a = a || g(t), i = i || g(s), r = 0; null != (o = a[r]); r++)k(o, i[r]); else k(t, s);
                return i = g(s, "script"), i.length > 0 && x(i, !l && g(t, "script")), i = a = o = null, s
            }, buildFragment: function (t, e, n, i) {
                for (var o, s, r, a, l, c, u, h = t.length, d = m(e), p = [], f = 0; h > f; f++)if (s = t[f], s || 0 === s)if ("object" === oe.type(s))oe.merge(p, s.nodeType ? [s] : s); else if (Be.test(s)) {
                    for (a = a || d.appendChild(e.createElement("div")), l = (ze.exec(s) || ["", ""])[1].toLowerCase(), u = Ge[l] || Ge._default, a.innerHTML = u[1] + s.replace(Fe, "<$1></$2>") + u[2], o = u[0]; o--;)a = a.lastChild;
                    if (!ne.leadingWhitespace && Re.test(s) && p.push(e.createTextNode(Re.exec(s)[0])), !ne.tbody)for (s = "table" !== l || qe.test(s) ? "<table>" !== u[1] || qe.test(s) ? 0 : a : a.firstChild, o = s && s.childNodes.length; o--;)oe.nodeName(c = s.childNodes[o], "tbody") && !c.childNodes.length && s.removeChild(c);
                    for (oe.merge(p, a.childNodes), a.textContent = ""; a.firstChild;)a.removeChild(a.firstChild);
                    a = d.lastChild
                } else p.push(e.createTextNode(s));
                for (a && d.removeChild(a), ne.appendChecked || oe.grep(g(p, "input"), v), f = 0; s = p[f++];)if ((!i || -1 === oe.inArray(s, i)) && (r = oe.contains(s.ownerDocument, s), a = g(d.appendChild(s), "script"), r && x(a), n))for (o = 0; s = a[o++];)Ve.test(s.type || "") && n.push(s);
                return a = null, d
            }, cleanData: function (t, e) {
                for (var n, i, o, s, r = 0, a = oe.expando, l = oe.cache, c = ne.deleteExpando, u = oe.event.special; null != (n = t[r]); r++)if ((e || oe.acceptData(n)) && (o = n[a], s = o && l[o])) {
                    if (s.events)for (i in s.events)u[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, s.handle);
                    l[o] && (delete l[o], c ? delete n[a] : typeof n.removeAttribute !== Te ? n.removeAttribute(a) : n[a] = null, J.push(o))
                }
            }
        }), oe.fn.extend({
            text: function (t) {
                return je(this, function (t) {
                    return void 0 === t ? oe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || fe).createTextNode(t))
                }, null, t, arguments.length)
            }, append: function () {
                return this.domManip(arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = y(this, t);
                        e.appendChild(t)
                    }
                })
            }, prepend: function () {
                return this.domManip(arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = y(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            }, before: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            }, after: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            }, remove: function (t, e) {
                for (var n, i = t ? oe.filter(t, this) : this, o = 0; null != (n = i[o]); o++)e || 1 !== n.nodeType || oe.cleanData(g(n)), n.parentNode && (e && oe.contains(n.ownerDocument, n) && x(g(n, "script")), n.parentNode.removeChild(n));
                return this
            }, empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && oe.cleanData(g(t, !1)); t.firstChild;)t.removeChild(t.firstChild);
                    t.options && oe.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            }, clone: function (t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                    return oe.clone(this, t, e)
                })
            }, html: function (t) {
                return je(this, function (t) {
                    var e = this[0] || {}, n = 0, i = this.length;
                    if (void 0 === t)return 1 === e.nodeType ? e.innerHTML.replace(Me, "") : void 0;
                    if (!("string" != typeof t || We.test(t) || !ne.htmlSerialize && He.test(t) || !ne.leadingWhitespace && Re.test(t) || Ge[(ze.exec(t) || ["", ""])[1].toLowerCase()])) {
                        t = t.replace(Fe, "<$1></$2>");
                        try {
                            for (; i > n; n++)e = this[n] || {}, 1 === e.nodeType && (oe.cleanData(g(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (o) {
                        }
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            }, replaceWith: function () {
                var t = arguments[0];
                return this.domManip(arguments, function (e) {
                    t = this.parentNode, oe.cleanData(g(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            }, detach: function (t) {
                return this.remove(t, !0)
            }, domManip: function (t, e) {
                t = K.apply([], t);
                var n, i, o, s, r, a, l = 0, c = this.length, u = this, h = c - 1, d = t[0], p = oe.isFunction(d);
                if (p || c > 1 && "string" == typeof d && !ne.checkClone && Ue.test(d))return this.each(function (n) {
                    var i = u.eq(n);
                    p && (t[0] = d.call(this, n, i.html())), i.domManip(t, e)
                });
                if (c && (a = oe.buildFragment(t, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
                    for (s = oe.map(g(a, "script"), b), o = s.length; c > l; l++)i = a, l !== h && (i = oe.clone(i, !0, !0), o && oe.merge(s, g(i, "script"))), e.call(this[l], i, l);
                    if (o)for (r = s[s.length - 1].ownerDocument, oe.map(s, w), l = 0; o > l; l++)i = s[l], Ve.test(i.type || "") && !oe._data(i, "globalEval") && oe.contains(r, i) && (i.src ? oe._evalUrl && oe._evalUrl(i.src) : oe.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Je, "")));
                    a = n = null
                }
                return this
            }
        }), oe.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, e) {
            oe.fn[t] = function (t) {
                for (var n, i = 0, o = [], s = oe(t), r = s.length - 1; r >= i; i++)n = i === r ? this : this.clone(!0), oe(s[i])[e](n), Y.apply(o, n.get());
                return this.pushStack(o)
            }
        });
        var Qe, Ze = {};
        !function () {
            var t;
            ne.shrinkWrapBlocks = function () {
                if (null != t)return t;
                t = !1;
                var e, n, i;
                return n = fe.getElementsByTagName("body")[0], n && n.style ? (e = fe.createElement("div"), i = fe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== Te && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(fe.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
            }
        }();
        var tn, en, nn = /^margin/, on = new RegExp("^(" + $e + ")(?!px)[a-z%]+$", "i"), sn = /^(top|right|bottom|left)$/;
        t.getComputedStyle ? (tn = function (e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
        }, en = function (t, e, n) {
            var i, o, s, r, a = t.style;
            return n = n || tn(t), r = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== r || oe.contains(t.ownerDocument, t) || (r = oe.style(t, e)), on.test(r) && nn.test(e) && (i = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = i, a.minWidth = o, a.maxWidth = s)), void 0 === r ? r : r + ""
        }) : fe.documentElement.currentStyle && (tn = function (t) {
            return t.currentStyle
        }, en = function (t, e, n) {
            var i, o, s, r, a = t.style;
            return n = n || tn(t), r = n ? n[e] : void 0, null == r && a && a[e] && (r = a[e]), on.test(r) && !sn.test(e) && (i = a.left, o = t.runtimeStyle, s = o && o.left, s && (o.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : r, r = a.pixelLeft + "px", a.left = i, s && (o.left = s)), void 0 === r ? r : r + "" || "auto"
        }), function () {
            function e() {
                var e, n, i, o;
                n = fe.getElementsByTagName("body")[0], n && n.style && (e = fe.createElement("div"), i = fe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s = r = !1, l = !0, t.getComputedStyle && (s = "1%" !== (t.getComputedStyle(e, null) || {}).top, r = "4px" === (t.getComputedStyle(e, null) || {width: "4px"}).width, o = e.appendChild(fe.createElement("div")), o.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", o.style.marginRight = o.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(o, null) || {}).marginRight), e.removeChild(o)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = e.getElementsByTagName("td"), o[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === o[0].offsetHeight, a && (o[0].style.display = "", o[1].style.display = "none", a = 0 === o[0].offsetHeight), n.removeChild(i))
            }

            var n, i, o, s, r, a, l;
            n = fe.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = n.getElementsByTagName("a")[0], i = o && o.style, i && (i.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === i.opacity, ne.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, oe.extend(ne, {
                reliableHiddenOffsets: function () {
                    return null == a && e(), a
                }, boxSizingReliable: function () {
                    return null == r && e(), r
                }, pixelPosition: function () {
                    return null == s && e(), s
                }, reliableMarginRight: function () {
                    return null == l && e(), l
                }
            }))
        }(), oe.swap = function (t, e, n, i) {
            var o, s, r = {};
            for (s in e)r[s] = t.style[s], t.style[s] = e[s];
            o = n.apply(t, i || []);
            for (s in e)t.style[s] = r[s];
            return o
        };
        var rn = /alpha\([^)]*\)/i, an = /opacity\s*=\s*([^)]*)/, ln = /^(none|table(?!-c[ea]).+)/, cn = new RegExp("^(" + $e + ")(.*)$", "i"), un = new RegExp("^([+-])=(" + $e + ")", "i"), hn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, dn = {letterSpacing: "0", fontWeight: "400"}, pn = ["Webkit", "O", "Moz", "ms"];
        oe.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var n = en(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {"float": ne.cssFloat ? "cssFloat" : "styleFloat"},
            style: function (t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, s, r, a = oe.camelCase(e), l = t.style;
                    if (e = oe.cssProps[a] || (oe.cssProps[a] = E(l, a)), r = oe.cssHooks[e] || oe.cssHooks[a], void 0 === n)return r && "get"in r && void 0 !== (o = r.get(t, !1, i)) ? o : l[e];
                    if (s = typeof n, "string" === s && (o = un.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(oe.css(t, e)), s = "number"), null != n && n === n && ("number" !== s || oe.cssNumber[a] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(r && "set"in r && void 0 === (n = r.set(t, n, i)))))try {
                        l[e] = n
                    } catch (c) {
                    }
                }
            },
            css: function (t, e, n, i) {
                var o, s, r, a = oe.camelCase(e);
                return e = oe.cssProps[a] || (oe.cssProps[a] = E(t.style, a)), r = oe.cssHooks[e] || oe.cssHooks[a], r && "get"in r && (s = r.get(t, !0, n)), void 0 === s && (s = en(t, e, i)), "normal" === s && e in dn && (s = dn[e]), "" === n || n ? (o = parseFloat(s), n === !0 || oe.isNumeric(o) ? o || 0 : s) : s
            }
        }), oe.each(["height", "width"], function (t, e) {
            oe.cssHooks[e] = {
                get: function (t, n, i) {
                    return n ? ln.test(oe.css(t, "display")) && 0 === t.offsetWidth ? oe.swap(t, hn, function () {
                        return L(t, e, i)
                    }) : L(t, e, i) : void 0
                }, set: function (t, n, i) {
                    var o = i && tn(t);
                    return j(t, n, i ? N(t, e, i, ne.boxSizing && "border-box" === oe.css(t, "boxSizing", !1, o), o) : 0)
                }
            }
        }), ne.opacity || (oe.cssHooks.opacity = {
            get: function (t, e) {
                return an.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            }, set: function (t, e) {
                var n = t.style, i = t.currentStyle, o = oe.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "", s = i && i.filter || n.filter || "";
                n.zoom = 1, (e >= 1 || "" === e) && "" === oe.trim(s.replace(rn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = rn.test(s) ? s.replace(rn, o) : s + " " + o)
            }
        }), oe.cssHooks.marginRight = $(ne.reliableMarginRight, function (t, e) {
            return e ? oe.swap(t, {display: "inline-block"}, en, [t, "marginRight"]) : void 0
        }), oe.each({margin: "", padding: "", border: "Width"}, function (t, e) {
            oe.cssHooks[t + e] = {
                expand: function (n) {
                    for (var i = 0, o = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)o[t + Ee[i] + e] = s[i] || s[i - 2] || s[0];
                    return o
                }
            }, nn.test(t) || (oe.cssHooks[t + e].set = j)
        }), oe.fn.extend({
            css: function (t, e) {
                return je(this, function (t, e, n) {
                    var i, o, s = {}, r = 0;
                    if (oe.isArray(e)) {
                        for (i = tn(t), o = e.length; o > r; r++)s[e[r]] = oe.css(t, e[r], !1, i);
                        return s
                    }
                    return void 0 !== n ? oe.style(t, e, n) : oe.css(t, e)
                }, t, e, arguments.length > 1)
            }, show: function () {
                return _(this, !0)
            }, hide: function () {
                return _(this)
            }, toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    _e(this) ? oe(this).show() : oe(this).hide()
                })
            }
        }), oe.Tween = A, A.prototype = {
            constructor: A, init: function (t, e, n, i, o, s) {
                this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (oe.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var t = A.propHooks[this.prop];
                return t && t.get ? t.get(this) : A.propHooks._default.get(this)
            }, run: function (t) {
                var e, n = A.propHooks[this.prop];
                return this.pos = e = this.options.duration ? oe.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : A.propHooks._default.set(this), this
            }
        }, A.prototype.init.prototype = A.prototype, A.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = oe.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                }, set: function (t) {
                    oe.fx.step[t.prop] ? oe.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[oe.cssProps[t.prop]] || oe.cssHooks[t.prop]) ? oe.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, A.propHooks.scrollTop = A.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, oe.easing = {
            linear: function (t) {
                return t
            }, swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, oe.fx = A.prototype.init, oe.fx.step = {};
        var fn, mn, gn = /^(?:toggle|show|hide)$/, vn = new RegExp("^(?:([+-])=|)(" + $e + ")([a-z%]*)$", "i"), yn = /queueHooks$/, bn = [I], wn = {
            "*": [function (t, e) {
                var n = this.createTween(t, e), i = n.cur(), o = vn.exec(e), s = o && o[3] || (oe.cssNumber[t] ? "" : "px"), r = (oe.cssNumber[t] || "px" !== s && +i) && vn.exec(oe.css(n.elem, t)), a = 1, l = 20;
                if (r && r[3] !== s) {
                    s = s || r[3], o = o || [], r = +i || 1;
                    do a = a || ".5", r /= a, oe.style(n.elem, t, r + s); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                }
                return o && (r = n.start = +r || +i || 0, n.unit = s, n.end = o[1] ? r + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };
        oe.Animation = oe.extend(H, {
            tweener: function (t, e) {
                oe.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, i = 0, o = t.length; o > i; i++)n = t[i], wn[n] = wn[n] || [], wn[n].unshift(e)
            }, prefilter: function (t, e) {
                e ? bn.unshift(t) : bn.push(t)
            }
        }), oe.speed = function (t, e, n) {
            var i = t && "object" == typeof t ? oe.extend({}, t) : {
                complete: n || !n && e || oe.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !oe.isFunction(e) && e
            };
            return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                oe.isFunction(i.old) && i.old.call(this), i.queue && oe.dequeue(this, i.queue)
            }, i
        }, oe.fn.extend({
            fadeTo: function (t, e, n, i) {
                return this.filter(_e).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
            }, animate: function (t, e, n, i) {
                var o = oe.isEmptyObject(t), s = oe.speed(e, n, i), r = function () {
                    var e = H(this, oe.extend({}, t), s);
                    (o || oe._data(this, "finish")) && e.stop(!0)
                };
                return r.finish = r, o || s.queue === !1 ? this.each(r) : this.queue(s.queue, r)
            }, stop: function (t, e, n) {
                var i = function (t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                    var e = !0, o = null != t && t + "queueHooks", s = oe.timers, r = oe._data(this);
                    if (o)r[o] && r[o].stop && i(r[o]); else for (o in r)r[o] && r[o].stop && yn.test(o) && i(r[o]);
                    for (o = s.length; o--;)s[o].elem !== this || null != t && s[o].queue !== t || (s[o].anim.stop(n), e = !1, s.splice(o, 1));
                    (e || !n) && oe.dequeue(this, t)
                })
            }, finish: function (t) {
                return t !== !1 && (t = t || "fx"), this.each(function () {
                    var e, n = oe._data(this), i = n[t + "queue"], o = n[t + "queueHooks"], s = oe.timers, r = i ? i.length : 0;
                    for (n.finish = !0, oe.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = s.length; e--;)s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                    for (e = 0; r > e; e++)i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), oe.each(["toggle", "show", "hide"], function (t, e) {
            var n = oe.fn[e];
            oe.fn[e] = function (t, i, o) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(P(e, !0), t, i, o)
            }
        }), oe.each({
            slideDown: P("show"),
            slideUp: P("hide"),
            slideToggle: P("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (t, e) {
            oe.fn[t] = function (t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), oe.timers = [], oe.fx.tick = function () {
            var t, e = oe.timers, n = 0;
            for (fn = oe.now(); n < e.length; n++)t = e[n], t() || e[n] !== t || e.splice(n--, 1);
            e.length || oe.fx.stop(), fn = void 0
        }, oe.fx.timer = function (t) {
            oe.timers.push(t), t() ? oe.fx.start() : oe.timers.pop()
        }, oe.fx.interval = 13, oe.fx.start = function () {
            mn || (mn = setInterval(oe.fx.tick, oe.fx.interval))
        }, oe.fx.stop = function () {
            clearInterval(mn), mn = null
        }, oe.fx.speeds = {slow: 600, fast: 200, _default: 400}, oe.fn.delay = function (t, e) {
            return t = oe.fx ? oe.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
                var i = setTimeout(e, t);
                n.stop = function () {
                    clearTimeout(i)
                }
            })
        }, function () {
            var t, e, n, i, o;
            e = fe.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], n = fe.createElement("select"), o = n.appendChild(fe.createElement("option")), t = e.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ne.getSetAttribute = "t" !== e.className, ne.style = /top/.test(i.getAttribute("style")), ne.hrefNormalized = "/a" === i.getAttribute("href"), ne.checkOn = !!t.value, ne.optSelected = o.selected, ne.enctype = !!fe.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !o.disabled, t = fe.createElement("input"), t.setAttribute("value", ""), ne.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ne.radioValue = "t" === t.value
        }();
        var xn = /\r/g;
        oe.fn.extend({
            val: function (t) {
                var e, n, i, o = this[0];
                {
                    if (arguments.length)return i = oe.isFunction(t), this.each(function (n) {
                        var o;
                        1 === this.nodeType && (o = i ? t.call(this, n, oe(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : oe.isArray(o) && (o = oe.map(o, function (t) {
                            return null == t ? "" : t + ""
                        })), e = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], e && "set"in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                    });
                    if (o)return e = oe.valHooks[o.type] || oe.valHooks[o.nodeName.toLowerCase()], e && "get"in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(xn, "") : null == n ? "" : n)
                }
            }
        }), oe.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = oe.find.attr(t, "value");
                        return null != e ? e : oe.trim(oe.text(t))
                    }
                }, select: {
                    get: function (t) {
                        for (var e, n, i = t.options, o = t.selectedIndex, s = "select-one" === t.type || 0 > o, r = s ? null : [], a = s ? o + 1 : i.length, l = 0 > o ? a : s ? o : 0; a > l; l++)if (n = i[l], !(!n.selected && l !== o || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && oe.nodeName(n.parentNode, "optgroup"))) {
                            if (e = oe(n).val(), s)return e;
                            r.push(e)
                        }
                        return r
                    }, set: function (t, e) {
                        for (var n, i, o = t.options, s = oe.makeArray(e), r = o.length; r--;)if (i = o[r], oe.inArray(oe.valHooks.option.get(i), s) >= 0)try {
                            i.selected = n = !0
                        } catch (a) {
                            i.scrollHeight
                        } else i.selected = !1;
                        return n || (t.selectedIndex = -1), o
                    }
                }
            }
        }), oe.each(["radio", "checkbox"], function () {
            oe.valHooks[this] = {
                set: function (t, e) {
                    return oe.isArray(e) ? t.checked = oe.inArray(oe(t).val(), e) >= 0 : void 0
                }
            }, ne.checkOn || (oe.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var kn, Tn, Cn = oe.expr.attrHandle, Sn = /^(?:checked|selected)$/i, $n = ne.getSetAttribute, En = ne.input;
        oe.fn.extend({
            attr: function (t, e) {
                return je(this, oe.attr, t, e, arguments.length > 1)
            }, removeAttr: function (t) {
                return this.each(function () {
                    oe.removeAttr(this, t)
                })
            }
        }), oe.extend({
            attr: function (t, e, n) {
                var i, o, s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s)return typeof t.getAttribute === Te ? oe.prop(t, e, n) : (1 === s && oe.isXMLDoc(t) || (e = e.toLowerCase(), i = oe.attrHooks[e] || (oe.expr.match.bool.test(e) ? Tn : kn)), void 0 === n ? i && "get"in i && null !== (o = i.get(t, e)) ? o : (o = oe.find.attr(t, e), null == o ? void 0 : o) : null !== n ? i && "set"in i && void 0 !== (o = i.set(t, n, e)) ? o : (t.setAttribute(e, n + ""), n) : void oe.removeAttr(t, e))
            }, removeAttr: function (t, e) {
                var n, i, o = 0, s = e && e.match(be);
                if (s && 1 === t.nodeType)for (; n = s[o++];)i = oe.propFix[n] || n, oe.expr.match.bool.test(n) ? En && $n || !Sn.test(n) ? t[i] = !1 : t[oe.camelCase("default-" + n)] = t[i] = !1 : oe.attr(t, n, ""), t.removeAttribute($n ? n : i)
            }, attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!ne.radioValue && "radio" === e && oe.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }
        }), Tn = {
            set: function (t, e, n) {
                return e === !1 ? oe.removeAttr(t, n) : En && $n || !Sn.test(n) ? t.setAttribute(!$n && oe.propFix[n] || n, n) : t[oe.camelCase("default-" + n)] = t[n] = !0, n
            }
        }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var n = Cn[e] || oe.find.attr;
            Cn[e] = En && $n || !Sn.test(e) ? function (t, e, i) {
                var o, s;
                return i || (s = Cn[e], Cn[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, Cn[e] = s), o
            } : function (t, e, n) {
                return n ? void 0 : t[oe.camelCase("default-" + e)] ? e.toLowerCase() : null
            }
        }), En && $n || (oe.attrHooks.value = {
            set: function (t, e, n) {
                return oe.nodeName(t, "input") ? void(t.defaultValue = e) : kn && kn.set(t, e, n)
            }
        }), $n || (kn = {
            set: function (t, e, n) {
                var i = t.getAttributeNode(n);
                return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
            }
        }, Cn.id = Cn.name = Cn.coords = function (t, e, n) {
            var i;
            return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
        }, oe.valHooks.button = {
            get: function (t, e) {
                var n = t.getAttributeNode(e);
                return n && n.specified ? n.value : void 0
            }, set: kn.set
        }, oe.attrHooks.contenteditable = {
            set: function (t, e, n) {
                kn.set(t, "" === e ? !1 : e, n)
            }
        }, oe.each(["width", "height"], function (t, e) {
            oe.attrHooks[e] = {
                set: function (t, n) {
                    return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
                }
            }
        })), ne.style || (oe.attrHooks.style = {
            get: function (t) {
                return t.style.cssText || void 0
            }, set: function (t, e) {
                return t.style.cssText = e + ""
            }
        });
        var _n = /^(?:input|select|textarea|button|object)$/i, jn = /^(?:a|area)$/i;
        oe.fn.extend({
            prop: function (t, e) {
                return je(this, oe.prop, t, e, arguments.length > 1)
            }, removeProp: function (t) {
                return t = oe.propFix[t] || t, this.each(function () {
                    try {
                        this[t] = void 0, delete this[t]
                    } catch (e) {
                    }
                })
            }
        }), oe.extend({
            propFix: {"for": "htmlFor", "class": "className"}, prop: function (t, e, n) {
                var i, o, s, r = t.nodeType;
                if (t && 3 !== r && 8 !== r && 2 !== r)return s = 1 !== r || !oe.isXMLDoc(t), s && (e = oe.propFix[e] || e, o = oe.propHooks[e]), void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get"in o && null !== (i = o.get(t, e)) ? i : t[e]
            }, propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = oe.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : _n.test(t.nodeName) || jn.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }
        }), ne.hrefNormalized || oe.each(["href", "src"], function (t, e) {
            oe.propHooks[e] = {
                get: function (t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), ne.optSelected || (oe.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            oe.propFix[this.toLowerCase()] = this
        }), ne.enctype || (oe.propFix.enctype = "encoding");
        var Nn = /[\t\r\n\f]/g;
        oe.fn.extend({
            addClass: function (t) {
                var e, n, i, o, s, r, a = 0, l = this.length, c = "string" == typeof t && t;
                if (oe.isFunction(t))return this.each(function (e) {
                    oe(this).addClass(t.call(this, e, this.className))
                });
                if (c)for (e = (t || "").match(be) || []; l > a; a++)if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Nn, " ") : " ")) {
                    for (s = 0; o = e[s++];)i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                    r = oe.trim(i), n.className !== r && (n.className = r)
                }
                return this
            }, removeClass: function (t) {
                var e, n, i, o, s, r, a = 0, l = this.length, c = 0 === arguments.length || "string" == typeof t && t;
                if (oe.isFunction(t))return this.each(function (e) {
                    oe(this).removeClass(t.call(this, e, this.className))
                });
                if (c)for (e = (t || "").match(be) || []; l > a; a++)if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Nn, " ") : "")) {
                    for (s = 0; o = e[s++];)for (; i.indexOf(" " + o + " ") >= 0;)i = i.replace(" " + o + " ", " ");
                    r = t ? oe.trim(i) : "", n.className !== r && (n.className = r)
                }
                return this
            }, toggleClass: function (t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(oe.isFunction(t) ? function (n) {
                    oe(this).toggleClass(t.call(this, n, this.className, e), e)
                } : function () {
                    if ("string" === n)for (var e, i = 0, o = oe(this), s = t.match(be) || []; e = s[i++];)o.hasClass(e) ? o.removeClass(e) : o.addClass(e); else(n === Te || "boolean" === n) && (this.className && oe._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : oe._data(this, "__className__") || "")
                })
            }, hasClass: function (t) {
                for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Nn, " ").indexOf(e) >= 0)return !0;
                return !1
            }
        }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
            oe.fn[e] = function (t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), oe.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }, bind: function (t, e, n) {
                return this.on(t, null, e, n)
            }, unbind: function (t, e) {
                return this.off(t, null, e)
            }, delegate: function (t, e, n, i) {
                return this.on(e, t, n, i)
            }, undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        });
        var Ln = oe.now(), An = /\?/, On = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        oe.parseJSON = function (e) {
            if (t.JSON && t.JSON.parse)return t.JSON.parse(e + "");
            var n, i = null, o = oe.trim(e + "");
            return o && !oe.trim(o.replace(On, function (t, e, o, s) {
                return n && e && (i = 0), 0 === i ? t : (n = o || e, i += !s - !o, "")
            })) ? Function("return " + o)() : oe.error("Invalid JSON: " + e)
        }, oe.parseXML = function (e) {
            var n, i;
            if (!e || "string" != typeof e)return null;
            try {
                t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
            } catch (o) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + e), n
        };
        var Pn, Dn, In = /#.*$/, Mn = /([?&])_=[^&]*/, Hn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Rn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Fn = /^(?:GET|HEAD)$/, zn = /^\/\//, qn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Bn = {}, Wn = {}, Un = "*/".concat("*");
        try {
            Dn = location.href
        } catch (Vn) {
            Dn = fe.createElement("a"), Dn.href = "", Dn = Dn.href
        }
        Pn = qn.exec(Dn.toLowerCase()) || [], oe.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Dn,
                type: "GET",
                isLocal: Rn.test(Pn[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Un,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /xml/, html: /html/, json: /json/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": oe.parseJSON, "text xml": oe.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (t, e) {
                return e ? z(z(t, oe.ajaxSettings), e) : z(oe.ajaxSettings, t)
            },
            ajaxPrefilter: R(Bn),
            ajaxTransport: R(Wn),
            ajax: function (t, e) {
                function n(t, e, n, i) {
                    var o, u, v, y, w, k = e;
                    2 !== b && (b = 2, a && clearTimeout(a), c = void 0, r = i || "", x.readyState = t > 0 ? 4 : 0, o = t >= 200 && 300 > t || 304 === t, n && (y = q(h, x, n)), y = B(h, y, x, o), o ? (h.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (oe.lastModified[s] = w), w = x.getResponseHeader("etag"), w && (oe.etag[s] = w)), 204 === t || "HEAD" === h.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = y.state, u = y.data, v = y.error, o = !v)) : (v = k, (t || !k) && (k = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || k) + "", o ? f.resolveWith(d, [u, k, x]) : f.rejectWith(d, [x, k, v]), x.statusCode(g), g = void 0, l && p.trigger(o ? "ajaxSuccess" : "ajaxError", [x, h, o ? u : v]), m.fireWith(d, [x, k]), l && (p.trigger("ajaxComplete", [x, h]), --oe.active || oe.event.trigger("ajaxStop")))
                }

                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var i, o, s, r, a, l, c, u, h = oe.ajaxSetup({}, e), d = h.context || h, p = h.context && (d.nodeType || d.jquery) ? oe(d) : oe.event, f = oe.Deferred(), m = oe.Callbacks("once memory"), g = h.statusCode || {}, v = {}, y = {}, b = 0, w = "canceled", x = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (2 === b) {
                            if (!u)for (u = {}; e = Hn.exec(r);)u[e[1].toLowerCase()] = e[2];
                            e = u[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? r : null
                    },
                    setRequestHeader: function (t, e) {
                        var n = t.toLowerCase();
                        return b || (t = y[n] = y[n] || t, v[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return b || (h.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)if (2 > b)for (e in t)g[e] = [g[e], t[e]]; else x.always(t[x.status]);
                        return this
                    },
                    abort: function (t) {
                        var e = t || w;
                        return c && c.abort(e), n(0, e), this
                    }
                };
                if (f.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, h.url = ((t || h.url || Dn) + "").replace(In, "").replace(zn, Pn[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = oe.trim(h.dataType || "*").toLowerCase().match(be) || [""], null == h.crossDomain && (i = qn.exec(h.url.toLowerCase()), h.crossDomain = !(!i || i[1] === Pn[1] && i[2] === Pn[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Pn[3] || ("http:" === Pn[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = oe.param(h.data, h.traditional)), F(Bn, h, e, x), 2 === b)return x;
                l = oe.event && h.global, l && 0 === oe.active++ && oe.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Fn.test(h.type), s = h.url, h.hasContent || (h.data && (s = h.url += (An.test(s) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = Mn.test(s) ? s.replace(Mn, "$1_=" + Ln++) : s + (An.test(s) ? "&" : "?") + "_=" + Ln++)), h.ifModified && (oe.lastModified[s] && x.setRequestHeader("If-Modified-Since", oe.lastModified[s]), oe.etag[s] && x.setRequestHeader("If-None-Match", oe.etag[s])), (h.data && h.hasContent && h.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", h.contentType), x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Un + "; q=0.01" : "") : h.accepts["*"]);
                for (o in h.headers)x.setRequestHeader(o, h.headers[o]);
                if (h.beforeSend && (h.beforeSend.call(d, x, h) === !1 || 2 === b))return x.abort();
                w = "abort";
                for (o in{success: 1, error: 1, complete: 1})x[o](h[o]);
                if (c = F(Wn, h, e, x)) {
                    x.readyState = 1, l && p.trigger("ajaxSend", [x, h]), h.async && h.timeout > 0 && (a = setTimeout(function () {
                        x.abort("timeout")
                    }, h.timeout));
                    try {
                        b = 1, c.send(v, n)
                    } catch (k) {
                        if (!(2 > b))throw k;
                        n(-1, k)
                    }
                } else n(-1, "No Transport");
                return x
            },
            getJSON: function (t, e, n) {
                return oe.get(t, e, n, "json")
            },
            getScript: function (t, e) {
                return oe.get(t, void 0, e, "script")
            }
        }), oe.each(["get", "post"], function (t, e) {
            oe[e] = function (t, n, i, o) {
                return oe.isFunction(n) && (o = o || i, i = n, n = void 0), oe.ajax({
                    url: t,
                    type: e,
                    dataType: o,
                    data: n,
                    success: i
                })
            }
        }), oe._evalUrl = function (t) {
            return oe.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }, oe.fn.extend({
            wrapAll: function (t) {
                if (oe.isFunction(t))return this.each(function (e) {
                    oe(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = oe(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;)t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            }, wrapInner: function (t) {
                return this.each(oe.isFunction(t) ? function (e) {
                    oe(this).wrapInner(t.call(this, e))
                } : function () {
                    var e = oe(this), n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            }, wrap: function (t) {
                var e = oe.isFunction(t);
                return this.each(function (n) {
                    oe(this).wrapAll(e ? t.call(this, n) : t)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
                }).end()
            }
        }), oe.expr.filters.hidden = function (t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (t.style && t.style.display || oe.css(t, "display"))
        }, oe.expr.filters.visible = function (t) {
            return !oe.expr.filters.hidden(t)
        };
        var Xn = /%20/g, Jn = /\[\]$/, Gn = /\r?\n/g, Kn = /^(?:submit|button|image|reset|file)$/i, Yn = /^(?:input|select|textarea|keygen)/i;
        oe.param = function (t, e) {
            var n, i = [], o = function (t, e) {
                e = oe.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
            if (void 0 === e && (e = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(t) || t.jquery && !oe.isPlainObject(t))oe.each(t, function () {
                o(this.name, this.value)
            }); else for (n in t)W(n, t[n], e, o);
            return i.join("&").replace(Xn, "+")
        }, oe.fn.extend({
            serialize: function () {
                return oe.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var t = oe.prop(this, "elements");
                    return t ? oe.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !oe(this).is(":disabled") && Yn.test(this.nodeName) && !Kn.test(t) && (this.checked || !Ne.test(t))
                }).map(function (t, e) {
                    var n = oe(this).val();
                    return null == n ? null : oe.isArray(n) ? oe.map(n, function (t) {
                        return {name: e.name, value: t.replace(Gn, "\r\n")}
                    }) : {name: e.name, value: n.replace(Gn, "\r\n")}
                }).get()
            }
        }), oe.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && U() || V()
        } : U;
        var Qn = 0, Zn = {}, ti = oe.ajaxSettings.xhr();
        t.attachEvent && t.attachEvent("onunload", function () {
            for (var t in Zn)Zn[t](void 0, !0)
        }), ne.cors = !!ti && "withCredentials"in ti, ti = ne.ajax = !!ti, ti && oe.ajaxTransport(function (t) {
            if (!t.crossDomain || ne.cors) {
                var e;
                return {
                    send: function (n, i) {
                        var o, s = t.xhr(), r = ++Qn;
                        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (o in t.xhrFields)s[o] = t.xhrFields[o];
                        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (o in n)void 0 !== n[o] && s.setRequestHeader(o, n[o] + "");
                        s.send(t.hasContent && t.data || null), e = function (n, o) {
                            var a, l, c;
                            if (e && (o || 4 === s.readyState))if (delete Zn[r], e = void 0, s.onreadystatechange = oe.noop, o)4 !== s.readyState && s.abort(); else {
                                c = {}, a = s.status, "string" == typeof s.responseText && (c.text = s.responseText);
                                try {
                                    l = s.statusText
                                } catch (u) {
                                    l = ""
                                }
                                a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404
                            }
                            c && i(a, l, c, s.getAllResponseHeaders())
                        }, t.async ? 4 === s.readyState ? setTimeout(e) : s.onreadystatechange = Zn[r] = e : e()
                    }, abort: function () {
                        e && e(void 0, !0)
                    }
                }
            }
        }), oe.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /(?:java|ecma)script/},
            converters: {
                "text script": function (t) {
                    return oe.globalEval(t), t
                }
            }
        }), oe.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), oe.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var e, n = fe.head || oe("head")[0] || fe.documentElement;
                return {
                    send: function (i, o) {
                        e = fe.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, n) {
                            (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || o(200, "success"))
                        }, n.insertBefore(e, n.firstChild)
                    }, abort: function () {
                        e && e.onload(void 0, !0)
                    }
                }
            }
        });
        var ei = [], ni = /(=)\?(?=&|$)|\?\?/;
        oe.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var t = ei.pop() || oe.expando + "_" + Ln++;
                return this[t] = !0, t
            }
        }), oe.ajaxPrefilter("json jsonp", function (e, n, i) {
            var o, s, r, a = e.jsonp !== !1 && (ni.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = oe.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(ni, "$1" + o) : e.jsonp !== !1 && (e.url += (An.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
                return r || oe.error(o + " was not called"), r[0]
            }, e.dataTypes[0] = "json", s = t[o], t[o] = function () {
                r = arguments
            }, i.always(function () {
                t[o] = s, e[o] && (e.jsonpCallback = n.jsonpCallback, ei.push(o)), r && oe.isFunction(s) && s(r[0]), r = s = void 0
            }), "script") : void 0
        }), oe.parseHTML = function (t, e, n) {
            if (!t || "string" != typeof t)return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || fe;
            var i = he.exec(t), o = !n && [];
            return i ? [e.createElement(i[1])] : (i = oe.buildFragment([t], e, o), o && o.length && oe(o).remove(), oe.merge([], i.childNodes))
        };
        var ii = oe.fn.load;
        oe.fn.load = function (t, e, n) {
            if ("string" != typeof t && ii)return ii.apply(this, arguments);
            var i, o, s, r = this, a = t.indexOf(" ");
            return a >= 0 && (i = oe.trim(t.slice(a, t.length)), t = t.slice(0, a)), oe.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (s = "POST"), r.length > 0 && oe.ajax({
                url: t,
                type: s,
                dataType: "html",
                data: e
            }).done(function (t) {
                o = arguments, r.html(i ? oe("<div>").append(oe.parseHTML(t)).find(i) : t)
            }).complete(n && function (t, e) {
                    r.each(n, o || [t.responseText, e, t])
                }), this
        }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            oe.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), oe.expr.filters.animated = function (t) {
            return oe.grep(oe.timers, function (e) {
                return t === e.elem
            }).length
        };
        var oi = t.document.documentElement;
        oe.offset = {
            setOffset: function (t, e, n) {
                var i, o, s, r, a, l, c, u = oe.css(t, "position"), h = oe(t), d = {};
                "static" === u && (t.style.position = "relative"), a = h.offset(), s = oe.css(t, "top"), l = oe.css(t, "left"), c = ("absolute" === u || "fixed" === u) && oe.inArray("auto", [s, l]) > -1, c ? (i = h.position(), r = i.top, o = i.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), oe.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (d.top = e.top - a.top + r), null != e.left && (d.left = e.left - a.left + o), "using"in e ? e.using.call(t, d) : h.css(d)
            }
        }, oe.fn.extend({
            offset: function (t) {
                if (arguments.length)return void 0 === t ? this : this.each(function (e) {
                    oe.offset.setOffset(this, t, e)
                });
                var e, n, i = {top: 0, left: 0}, o = this[0], s = o && o.ownerDocument;
                if (s)return e = s.documentElement, oe.contains(e, o) ? (typeof o.getBoundingClientRect !== Te && (i = o.getBoundingClientRect()), n = X(s), {
                    top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : i
            }, position: function () {
                if (this[0]) {
                    var t, e, n = {top: 0, left: 0}, i = this[0];
                    return "fixed" === oe.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), oe.nodeName(t[0], "html") || (n = t.offset()), n.top += oe.css(t[0], "borderTopWidth", !0), n.left += oe.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - oe.css(i, "marginTop", !0),
                        left: e.left - n.left - oe.css(i, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent || oi; t && !oe.nodeName(t, "html") && "static" === oe.css(t, "position");)t = t.offsetParent;
                    return t || oi
                })
            }
        }), oe.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
            var n = /Y/.test(e);
            oe.fn[t] = function (i) {
                return je(this, function (t, i, o) {
                    var s = X(t);
                    return void 0 === o ? s ? e in s ? s[e] : s.document.documentElement[i] : t[i] : void(s ? s.scrollTo(n ? oe(s).scrollLeft() : o, n ? o : oe(s).scrollTop()) : t[i] = o)
                }, t, i, arguments.length, null)
            }
        }), oe.each(["top", "left"], function (t, e) {
            oe.cssHooks[e] = $(ne.pixelPosition, function (t, n) {
                return n ? (n = en(t, e), on.test(n) ? oe(t).position()[e] + "px" : n) : void 0
            })
        }), oe.each({Height: "height", Width: "width"}, function (t, e) {
            oe.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, i) {
                oe.fn[i] = function (i, o) {
                    var s = arguments.length && (n || "boolean" != typeof i), r = n || (i === !0 || o === !0 ? "margin" : "border");
                    return je(this, function (e, n, i) {
                        var o;
                        return oe.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? oe.css(e, n, r) : oe.style(e, n, i, r)
                    }, e, s ? i : void 0, s, null)
                }
            })
        }), oe.fn.size = function () {
            return this.length
        }, oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return oe
        });
        var si = t.jQuery, ri = t.$;
        return oe.noConflict = function (e) {
            return t.$ === oe && (t.$ = ri), e && t.jQuery === oe && (t.jQuery = si), oe
        }, typeof e === Te && (t.jQuery = t.$ = oe), oe
    }), function (t, e) {
        t.rails !== e && t.error("jquery-ujs has already been loaded!");
        var n, i = t(document);
        t.rails = n = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
            fileInputSelector: "input[type=file]",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            CSRFProtection: function (e) {
                var n = t('meta[name="csrf-token"]').attr("content");
                n && e.setRequestHeader("X-CSRF-Token", n)
            },
            refreshCSRFTokens: function () {
                var e = t("meta[name=csrf-token]").attr("content"), n = t("meta[name=csrf-param]").attr("content");
                t('form input[name="' + n + '"]').val(e)
            },
            fire: function (e, n, i) {
                var o = t.Event(n);
                return e.trigger(o, i), o.result !== !1
            },
            confirm: function (t) {
                return confirm(t)
            },
            ajax: function (e) {
                return t.ajax(e)
            },
            href: function (t) {
                return t[0].href
            },
            handleRemote: function (i) {
                var o, s, r, a, l, c;
                if (n.fire(i, "ajax:before")) {
                    if (a = i.data("with-credentials") || null, l = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form")) {
                        o = i.attr("method"), s = i.attr("action"), r = i.serializeArray();
                        var u = i.data("ujs:submit-button");
                        u && (r.push(u), i.data("ujs:submit-button", null))
                    } else i.is(n.inputChangeSelector) ? (o = i.data("method"), s = i.data("url"), r = i.serialize(), i.data("params") && (r = r + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (o = i.data("method") || "get", s = i.data("url"), r = i.serialize(), i.data("params") && (r = r + "&" + i.data("params"))) : (o = i.data("method"), s = n.href(i), r = i.data("params") || null);
                    return c = {
                        type: o || "GET", data: r, dataType: l, beforeSend: function (t, o) {
                            return o.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + o.accepts.script), n.fire(i, "ajax:beforeSend", [t, o]) ? void i.trigger("ajax:send", t) : !1
                        }, success: function (t, e, n) {
                            i.trigger("ajax:success", [t, e, n])
                        }, complete: function (t, e) {
                            i.trigger("ajax:complete", [t, e])
                        }, error: function (t, e, n) {
                            i.trigger("ajax:error", [t, e, n])
                        }, crossDomain: n.isCrossDomain(s)
                    }, a && (c.xhrFields = {withCredentials: a}), s && (c.url = s), n.ajax(c)
                }
                return !1
            },
            isCrossDomain: function (t) {
                var e = document.createElement("a");
                e.href = location.href;
                var n = document.createElement("a");
                try {
                    return n.href = t, n.href = n.href, !n.protocol || !n.host || e.protocol + "//" + e.host != n.protocol + "//" + n.host
                } catch (i) {
                    return !0
                }
            },
            handleMethod: function (i) {
                var o = n.href(i), s = i.data("method"), r = i.attr("target"), a = t("meta[name=csrf-token]").attr("content"), l = t("meta[name=csrf-param]").attr("content"), c = t('<form method="post" action="' + o + '"></form>'), u = '<input name="_method" value="' + s + '" type="hidden" />';
                l === e || a === e || n.isCrossDomain(o) || (u += '<input name="' + l + '" value="' + a + '" type="hidden" />'), r && c.attr("target", r), c.hide().append(u).appendTo("body"), c.submit()
            },
            formElements: function (e, n) {
                return e.is("form") ? t(e[0].elements).filter(n) : e.find(n)
            },
            disableFormElements: function (e) {
                n.formElements(e, n.disableSelector).each(function () {
                    n.disableFormElement(t(this))
                })
            },
            disableFormElement: function (t) {
                var n, i;
                n = t.is("button") ? "html" : "val", i = t.data("disable-with"), t.data("ujs:enable-with", t[n]()), i !== e && t[n](i), t.prop("disabled", !0)
            },
            enableFormElements: function (e) {
                n.formElements(e, n.enableSelector).each(function () {
                    n.enableFormElement(t(this))
                })
            },
            enableFormElement: function (t) {
                var e = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") && t[e](t.data("ujs:enable-with")), t.prop("disabled", !1)
            },
            allowAction: function (t) {
                var e, i = t.data("confirm"), o = !1;
                return i ? (n.fire(t, "confirm") && (o = n.confirm(i), e = n.fire(t, "confirm:complete", [o])), o && e) : !0
            },
            blankInputs: function (e, n, i) {
                var o, s, r = t(), a = n || "input,textarea", l = e.find(a);
                return l.each(function () {
                    if (o = t(this), s = o.is("input[type=checkbox],input[type=radio]") ? o.is(":checked") : o.val(), !s == !i) {
                        if (o.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + o.attr("name") + '"]').length)return !0;
                        r = r.add(o)
                    }
                }), r.length ? r : !1
            },
            nonBlankInputs: function (t, e) {
                return n.blankInputs(t, e, !0)
            },
            stopEverything: function (e) {
                return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
            },
            disableElement: function (t) {
                var i = t.data("disable-with");
                t.data("ujs:enable-with", t.html()), i !== e && t.html(i), t.bind("click.railsDisable", function (t) {
                    return n.stopEverything(t)
                })
            },
            enableElement: function (t) {
                t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
            }
        }, n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function (t, e, i) {
            t.crossDomain || n.CSRFProtection(i)
        }), t(window).on("pageshow.rails", function () {
            t(t.rails.enableSelector).each(function () {
                var e = t(this);
                e.data("ujs:enable-with") && t.rails.enableFormElement(e)
            }), t(t.rails.linkDisableSelector).each(function () {
                var e = t(this);
                e.data("ujs:enable-with") && t.rails.enableElement(e)
            })
        }), i.delegate(n.linkDisableSelector, "ajax:complete", function () {
            n.enableElement(t(this))
        }), i.delegate(n.buttonDisableSelector, "ajax:complete", function () {
            n.enableFormElement(t(this))
        }), i.delegate(n.linkClickSelector, "click.rails", function (i) {
            var o = t(this), s = o.data("method"), r = o.data("params"), a = i.metaKey || i.ctrlKey;
            if (!n.allowAction(o))return n.stopEverything(i);
            if (!a && o.is(n.linkDisableSelector) && n.disableElement(o), o.data("remote") !== e) {
                if (a && (!s || "GET" === s) && !r)return !0;
                var l = n.handleRemote(o);
                return l === !1 ? n.enableElement(o) : l.fail(function () {
                    n.enableElement(o)
                }), !1
            }
            return s ? (n.handleMethod(o), !1) : void 0
        }), i.delegate(n.buttonClickSelector, "click.rails", function (e) {
            var i = t(this);
            if (!n.allowAction(i))return n.stopEverything(e);
            i.is(n.buttonDisableSelector) && n.disableFormElement(i);
            var o = n.handleRemote(i);
            return o === !1 ? n.enableFormElement(i) : o.fail(function () {
                n.enableFormElement(i)
            }), !1
        }), i.delegate(n.inputChangeSelector, "change.rails", function (e) {
            var i = t(this);
            return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
        }), i.delegate(n.formSubmitSelector, "submit.rails", function (i) {
            var o, s, r = t(this), a = r.data("remote") !== e;
            if (!n.allowAction(r))return n.stopEverything(i);
            if (r.attr("novalidate") == e && (o = n.blankInputs(r, n.requiredInputSelector), o && n.fire(r, "ajax:aborted:required", [o])))return n.stopEverything(i);
            if (a) {
                if (s = n.nonBlankInputs(r, n.fileInputSelector)) {
                    setTimeout(function () {
                        n.disableFormElements(r)
                    }, 13);
                    var l = n.fire(r, "ajax:aborted:file", [s]);
                    return l || setTimeout(function () {
                        n.enableFormElements(r)
                    }, 13), l
                }
                return n.handleRemote(r), !1
            }
            setTimeout(function () {
                n.disableFormElements(r)
            }, 13)
        }), i.delegate(n.formInputClickSelector, "click.rails", function (e) {
            var i = t(this);
            if (!n.allowAction(i))return n.stopEverything(e);
            var o = i.attr("name"), s = o ? {name: o, value: i.val()} : null;
            i.closest("form").data("ujs:submit-button", s)
        }), i.delegate(n.formSubmitSelector, "ajax:send.rails", function (e) {
            this == e.target && n.disableFormElements(t(this))
        }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function (e) {
            this == e.target && n.enableFormElements(t(this))
        }), t(function () {
            n.refreshCSRFTokens()
        }))
    }(jQuery), function (t, e, n) {
        function i(e, n) {
            this.bodyOverflowX, this.callbacks = {
                hide: [],
                show: []
            }, this.checkInterval = null, this.Content, this.$el = t(e), this.$elProxy, this.elProxyPosition, this.enabled = !0, this.options = t.extend({}, l, n), this.mouseIsOverProxy = !1, this.namespace = "tooltipster-" + Math.round(1e5 * Math.random()), this.Status = "hidden", this.timerHide = null, this.timerShow = null, this.$tooltip, this.options.iconTheme = this.options.iconTheme.replace(".", ""), this.options.theme = this.options.theme.replace(".", ""), this._init()
        }

        function o(e, n) {
            var i = !0;
            return t.each(e, function (t) {
                return "undefined" == typeof n[t] || e[t] !== n[t] ? (i = !1, !1) : void 0
            }), i
        }

        function s() {
            return !u && c
        }

        function r() {
            var t = n.body || n.documentElement, e = t.style, i = "transition";
            if ("string" == typeof e[i])return !0;
            v = ["Moz", "Webkit", "Khtml", "O", "ms"], i = i.charAt(0).toUpperCase() + i.substr(1);
            for (var o = 0; o < v.length; o++)if ("string" == typeof e[v[o] + i])return !0;
            return !1
        }

        var a = "tooltipster", l = {
            animation: "fade",
            arrow: !0,
            arrowColor: "",
            autoClose: !0,
            content: null,
            contentAsHTML: !1,
            contentCloning: !0,
            debug: !0,
            delay: 200,
            minWidth: 0,
            maxWidth: null,
            functionInit: function () {
            },
            functionBefore: function (t, e) {
                e()
            },
            functionReady: function () {
            },
            functionAfter: function () {
            },
            icon: "(?)",
            iconCloning: !0,
            iconDesktop: !1,
            iconTouch: !1,
            iconTheme: "tooltipster-icon",
            interactive: !1,
            interactiveTolerance: 350,
            multiple: !1,
            offsetX: 0,
            offsetY: 0,
            onlyOne: !1,
            position: "top",
            positionTracker: !1,
            speed: 350,
            timer: 0,
            theme: "tooltipster-default",
            touchDevices: !0,
            trigger: "hover",
            updateAnimation: !0
        };
        i.prototype = {
            _init: function () {
                var e = this;
                if (n.querySelector) {
                    if (null !== e.options.content)e._content_set(e.options.content); else {
                        var i = e.$el.attr("title");
                        "undefined" == typeof i && (i = null), e._content_set(i)
                    }
                    var o = e.options.functionInit.call(e.$el, e.$el, e.Content);
                    "undefined" != typeof o && e._content_set(o), e.$el.removeAttr("title").addClass("tooltipstered"), !c && e.options.iconDesktop || c && e.options.iconTouch ? ("string" == typeof e.options.icon ? (e.$elProxy = t('<span class="' + e.options.iconTheme + '"></span>'), e.$elProxy.text(e.options.icon)) : e.$elProxy = e.options.iconCloning ? e.options.icon.clone(!0) : e.options.icon, e.$elProxy.insertAfter(e.$el)) : e.$elProxy = e.$el, "hover" == e.options.trigger ? (e.$elProxy.on("mouseenter." + e.namespace, function () {
                        (!s() || e.options.touchDevices) && (e.mouseIsOverProxy = !0, e._show())
                    }).on("mouseleave." + e.namespace, function () {
                        (!s() || e.options.touchDevices) && (e.mouseIsOverProxy = !1)
                    }), c && e.options.touchDevices && e.$elProxy.on("touchstart." + e.namespace, function () {
                        e._showNow()
                    })) : "click" == e.options.trigger && e.$elProxy.on("click." + e.namespace, function () {
                        (!s() || e.options.touchDevices) && e._show()
                    })
                }
            }, _show: function () {
                var t = this;
                "shown" != t.Status && "appearing" != t.Status && (t.options.delay ? t.timerShow = setTimeout(function () {
                    ("click" == t.options.trigger || "hover" == t.options.trigger && t.mouseIsOverProxy) && t._showNow()
                }, t.options.delay) : t._showNow())
            }, _showNow: function (n) {
                var i = this;
                i.options.functionBefore.call(i.$el, i.$el, function () {
                    if (i.enabled && null !== i.Content) {
                        n && i.callbacks.show.push(n), i.callbacks.hide = [], clearTimeout(i.timerShow), i.timerShow = null, clearTimeout(i.timerHide), i.timerHide = null, i.options.onlyOne && t(".tooltipstered").not(i.$el).each(function (e, n) {
                            var i = t(n), o = i.data("tooltipster-ns");
                            t.each(o, function (t, e) {
                                var n = i.data(e), o = n.status(), s = n.option("autoClose");
                                "hidden" !== o && "disappearing" !== o && s && n.hide()
                            })
                        });
                        var o = function () {
                            i.Status = "shown", t.each(i.callbacks.show, function (t, e) {
                                e.call(i.$el)
                            }), i.callbacks.show = []
                        };
                        if ("hidden" !== i.Status) {
                            var s = 0;
                            "disappearing" === i.Status ? (i.Status = "appearing", r() ? (i.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-" + i.options.animation + "-show"), i.options.speed > 0 && i.$tooltip.delay(i.options.speed), i.$tooltip.queue(o)) : i.$tooltip.stop().fadeIn(o)) : "shown" === i.Status && o()
                        } else {
                            i.Status = "appearing";
                            var s = i.options.speed;
                            i.bodyOverflowX = t("body").css("overflow-x"), t("body").css("overflow-x", "hidden");
                            var a = "tooltipster-" + i.options.animation, l = "-webkit-transition-duration: " + i.options.speed + "ms; -webkit-animation-duration: " + i.options.speed + "ms; -moz-transition-duration: " + i.options.speed + "ms; -moz-animation-duration: " + i.options.speed + "ms; -o-transition-duration: " + i.options.speed + "ms; -o-animation-duration: " + i.options.speed + "ms; -ms-transition-duration: " + i.options.speed + "ms; -ms-animation-duration: " + i.options.speed + "ms; transition-duration: " + i.options.speed + "ms; animation-duration: " + i.options.speed + "ms;", u = i.options.minWidth ? "min-width:" + Math.round(i.options.minWidth) + "px;" : "", h = i.options.maxWidth ? "max-width:" + Math.round(i.options.maxWidth) + "px;" : "", d = i.options.interactive ? "pointer-events: auto;" : "";
                            if (i.$tooltip = t('<div class="tooltipster-base ' + i.options.theme + '" style="' + u + " " + h + " " + d + " " + l + '"><div class="tooltipster-content"></div></div>'), r() && i.$tooltip.addClass(a), i._content_insert(), i.$tooltip.appendTo("body"), i.reposition(), i.options.functionReady.call(i.$el, i.$el, i.$tooltip), r() ? (i.$tooltip.addClass(a + "-show"), i.options.speed > 0 && i.$tooltip.delay(i.options.speed), i.$tooltip.queue(o)) : i.$tooltip.css("display", "none").fadeIn(i.options.speed, o), i._interval_set(), t(e).on("scroll." + i.namespace + " resize." + i.namespace, function () {
                                    i.reposition()
                                }), i.options.autoClose)if (t("body").off("." + i.namespace), "hover" == i.options.trigger)if (c && setTimeout(function () {
                                    t("body").on("touchstart." + i.namespace, function () {
                                        i.hide()
                                    })
                                }, 0), i.options.interactive) {
                                c && i.$tooltip.on("touchstart." + i.namespace, function (t) {
                                    t.stopPropagation()
                                });
                                var p = null;
                                i.$elProxy.add(i.$tooltip).on("mouseleave." + i.namespace + "-autoClose", function () {
                                    clearTimeout(p), p = setTimeout(function () {
                                        i.hide()
                                    }, i.options.interactiveTolerance)
                                }).on("mouseenter." + i.namespace + "-autoClose", function () {
                                    clearTimeout(p)
                                })
                            } else i.$elProxy.on("mouseleave." + i.namespace + "-autoClose", function () {
                                i.hide()
                            }); else"click" == i.options.trigger && (setTimeout(function () {
                                t("body").on("click." + i.namespace + " touchstart." + i.namespace, function () {
                                    i.hide()
                                })
                            }, 0), i.options.interactive && i.$tooltip.on("click." + i.namespace + " touchstart." + i.namespace, function (t) {
                                t.stopPropagation()
                            }))
                        }
                        i.options.timer > 0 && (i.timerHide = setTimeout(function () {
                            i.timerHide = null, i.hide()
                        }, i.options.timer + s))
                    }
                })
            }, _interval_set: function () {
                var e = this;
                e.checkInterval = setInterval(function () {
                    if (0 === t("body").find(e.$el).length || 0 === t("body").find(e.$elProxy).length || "hidden" == e.Status || 0 === t("body").find(e.$tooltip).length)("shown" == e.Status || "appearing" == e.Status) && e.hide(), e._interval_cancel(); else if (e.options.positionTracker) {
                        var n = e._repositionInfo(e.$elProxy), i = !1;
                        o(n.dimension, e.elProxyPosition.dimension) && ("fixed" === e.$elProxy.css("position") ? o(n.position, e.elProxyPosition.position) && (i = !0) : o(n.offset, e.elProxyPosition.offset) && (i = !0)), i || e.reposition()
                    }
                }, 200)
            }, _interval_cancel: function () {
                clearInterval(this.checkInterval), this.checkInterval = null
            }, _content_set: function (t) {
                "object" == typeof t && null !== t && this.options.contentCloning && (t = t.clone(!0)), this.Content = t
            }, _content_insert: function () {
                var t = this, e = this.$tooltip.find(".tooltipster-content");
                "string" != typeof t.Content || t.options.contentAsHTML ? e.empty().append(t.Content) : e.text(t.Content)
            }, _update: function (t) {
                var e = this;
                e._content_set(t), null !== e.Content ? "hidden" !== e.Status && (e._content_insert(), e.reposition(), e.options.updateAnimation && (r() ? (e.$tooltip.css({
                    width: "",
                    "-webkit-transition": "all " + e.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                    "-moz-transition": "all " + e.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                    "-o-transition": "all " + e.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                    "-ms-transition": "all " + e.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                    transition: "all " + e.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms"
                }).addClass("tooltipster-content-changing"), setTimeout(function () {
                    "hidden" != e.Status && (e.$tooltip.removeClass("tooltipster-content-changing"), setTimeout(function () {
                        "hidden" !== e.Status && e.$tooltip.css({
                            "-webkit-transition": e.options.speed + "ms",
                            "-moz-transition": e.options.speed + "ms",
                            "-o-transition": e.options.speed + "ms",
                            "-ms-transition": e.options.speed + "ms",
                            transition: e.options.speed + "ms"
                        })
                    }, e.options.speed))
                }, e.options.speed)) : e.$tooltip.fadeTo(e.options.speed, .5, function () {
                    "hidden" != e.Status && e.$tooltip.fadeTo(e.options.speed, 1)
                }))) : e.hide()
            }, _repositionInfo: function (t) {
                return {
                    dimension: {height: t.outerHeight(!1), width: t.outerWidth(!1)},
                    offset: t.offset(),
                    position: {left: parseInt(t.css("left")), top: parseInt(t.css("top"))}
                }
            }, hide: function (n) {
                var i = this;
                n && i.callbacks.hide.push(n), i.callbacks.show = [], clearTimeout(i.timerShow), i.timerShow = null, clearTimeout(i.timerHide), i.timerHide = null;
                var o = function () {
                    t.each(i.callbacks.hide, function (t, e) {
                        e.call(i.$el)
                    }), i.callbacks.hide = []
                };
                if ("shown" == i.Status || "appearing" == i.Status) {
                    i.Status = "disappearing";
                    var s = function () {
                        i.Status = "hidden", "object" == typeof i.Content && null !== i.Content && i.Content.detach(), i.$tooltip.remove(), i.$tooltip = null, t(e).off("." + i.namespace), t("body").off("." + i.namespace).css("overflow-x", i.bodyOverflowX), t("body").off("." + i.namespace), i.$elProxy.off("." + i.namespace + "-autoClose"), i.options.functionAfter.call(i.$el, i.$el), o()
                    };
                    r() ? (i.$tooltip.clearQueue().removeClass("tooltipster-" + i.options.animation + "-show").addClass("tooltipster-dying"), i.options.speed > 0 && i.$tooltip.delay(i.options.speed), i.$tooltip.queue(s)) : i.$tooltip.stop().fadeOut(i.options.speed, s)
                } else"hidden" == i.Status && o();
                return i
            }, show: function (t) {
                return this._showNow(t), this
            }, update: function (t) {
                return this.content(t)
            }, content: function (t) {
                return "undefined" == typeof t ? this.Content : (this._update(t), this)
            }, reposition: function () {
                function n() {
                    var n = t(e).scrollLeft();
                    0 > _ - n && (s = _ - n, _ = n), _ + l - n > r && (s = _ - (r + n - l), _ = r + n - l)
                }

                function i(n, i) {
                    a.offset.top - t(e).scrollTop() - c - L - 12 < 0 && i.indexOf("top") > -1 && (O = n), a.offset.top + a.dimension.height + c + 12 + L > t(e).scrollTop() + t(e).height() && i.indexOf("bottom") > -1 && (O = n, N = a.offset.top - c - L - 12)
                }

                var o = this;
                if (0 !== t("body").find(o.$tooltip).length) {
                    o.$tooltip.css("width", ""), o.elProxyPosition = o._repositionInfo(o.$elProxy);
                    var s = null, r = t(e).width(), a = o.elProxyPosition, l = o.$tooltip.outerWidth(!1), c = (o.$tooltip.innerWidth() + 1, o.$tooltip.outerHeight(!1));
                    if (o.$elProxy.is("area")) {
                        var u = o.$elProxy.attr("shape"), h = o.$elProxy.parent().attr("name"), d = t('img[usemap="#' + h + '"]'), p = d.offset().left, f = d.offset().top, m = void 0 !== o.$elProxy.attr("coords") ? o.$elProxy.attr("coords").split(",") : void 0;
                        if ("circle" == u) {
                            var g = parseInt(m[0]), v = parseInt(m[1]), y = parseInt(m[2]);
                            a.dimension.height = 2 * y, a.dimension.width = 2 * y, a.offset.top = f + v - y, a.offset.left = p + g - y
                        } else if ("rect" == u) {
                            var g = parseInt(m[0]), v = parseInt(m[1]), b = parseInt(m[2]), w = parseInt(m[3]);
                            a.dimension.height = w - v, a.dimension.width = b - g, a.offset.top = f + v, a.offset.left = p + g
                        } else if ("poly" == u) {
                            for (var x = 0, k = 0, T = 0, C = 0, S = "even", $ = 0; $ < m.length; $++) {
                                var E = parseInt(m[$]);
                                "even" == S ? (E > T && (T = E, 0 === $ && (x = T)), x > E && (x = E), S = "odd") : (E > C && (C = E, 1 == $ && (k = C)), k > E && (k = E), S = "even")
                            }
                            a.dimension.height = C - k, a.dimension.width = T - x, a.offset.top = f + k, a.offset.left = p + x
                        } else a.dimension.height = d.outerHeight(!1), a.dimension.width = d.outerWidth(!1), a.offset.top = f, a.offset.left = p
                    }
                    var _ = 0, j = 0, N = 0, L = parseInt(o.options.offsetY), A = parseInt(o.options.offsetX), O = o.options.position;
                    if ("top" == O) {
                        var P = a.offset.left + l - (a.offset.left + a.dimension.width);
                        _ = a.offset.left + A - P / 2, N = a.offset.top - c - L - 12, n(), i("bottom", "top")
                    }
                    if ("top-left" == O && (_ = a.offset.left + A, N = a.offset.top - c - L - 12, n(), i("bottom-left", "top-left")), "top-right" == O && (_ = a.offset.left + a.dimension.width + A - l, N = a.offset.top - c - L - 12, n(), i("bottom-right", "top-right")), "bottom" == O) {
                        var P = a.offset.left + l - (a.offset.left + a.dimension.width);
                        _ = a.offset.left - P / 2 + A, N = a.offset.top + a.dimension.height + L + 12, n(), i("top", "bottom")
                    }
                    if ("bottom-left" == O && (_ = a.offset.left + A, N = a.offset.top + a.dimension.height + L + 12, n(), i("top-left", "bottom-left")), "bottom-right" == O && (_ = a.offset.left + a.dimension.width + A - l, N = a.offset.top + a.dimension.height + L + 12, n(), i("top-right", "bottom-right")), "left" == O) {
                        _ = a.offset.left - A - l - 12, j = a.offset.left + A + a.dimension.width + 12;
                        var D = a.offset.top + c - (a.offset.top + a.dimension.height);
                        if (N = a.offset.top - D / 2 - L, 0 > _ && j + l > r) {
                            var I = 2 * parseFloat(o.$tooltip.css("border-width")), M = l + _ - I;
                            o.$tooltip.css("width", M + "px"), c = o.$tooltip.outerHeight(!1), _ = a.offset.left - A - M - 12 - I, D = a.offset.top + c - (a.offset.top + a.dimension.height), N = a.offset.top - D / 2 - L
                        } else 0 > _ && (_ = a.offset.left + A + a.dimension.width + 12, s = "left")
                    }
                    if ("right" == O) {
                        _ = a.offset.left + A + a.dimension.width + 12, j = a.offset.left - A - l - 12;
                        var D = a.offset.top + c - (a.offset.top + a.dimension.height);
                        if (N = a.offset.top - D / 2 - L, _ + l > r && 0 > j) {
                            var I = 2 * parseFloat(o.$tooltip.css("border-width")), M = r - _ - I;
                            o.$tooltip.css("width", M + "px"), c = o.$tooltip.outerHeight(!1), D = a.offset.top + c - (a.offset.top + a.dimension.height), N = a.offset.top - D / 2 - L
                        } else _ + l > r && (_ = a.offset.left - A - l - 12, s = "right")
                    }
                    if (o.options.arrow) {
                        var H = "tooltipster-arrow-" + O;
                        if (o.options.arrowColor.length < 1)var R = o.$tooltip.css("background-color"); else var R = o.options.arrowColor;
                        if (s ? "left" == s ? (H = "tooltipster-arrow-right", s = "") : "right" == s ? (H = "tooltipster-arrow-left", s = "") : s = "left:" + Math.round(s) + "px;" : s = "", "top" == O || "top-left" == O || "top-right" == O)var F = parseFloat(o.$tooltip.css("border-bottom-width")), z = o.$tooltip.css("border-bottom-color"); else if ("bottom" == O || "bottom-left" == O || "bottom-right" == O)var F = parseFloat(o.$tooltip.css("border-top-width")), z = o.$tooltip.css("border-top-color"); else if ("left" == O)var F = parseFloat(o.$tooltip.css("border-right-width")), z = o.$tooltip.css("border-right-color"); else if ("right" == O)var F = parseFloat(o.$tooltip.css("border-left-width")), z = o.$tooltip.css("border-left-color"); else var F = parseFloat(o.$tooltip.css("border-bottom-width")), z = o.$tooltip.css("border-bottom-color");
                        F > 1 && F++;
                        var q = "";
                        if (0 !== F) {
                            var B = "", W = "border-color: " + z + ";";
                            -1 !== H.indexOf("bottom") ? B = "margin-top: -" + Math.round(F) + "px;" : -1 !== H.indexOf("top") ? B = "margin-bottom: -" + Math.round(F) + "px;" : -1 !== H.indexOf("left") ? B = "margin-right: -" + Math.round(F) + "px;" : -1 !== H.indexOf("right") && (B = "margin-left: -" + Math.round(F) + "px;"), q = '<span class="tooltipster-arrow-border" style="' + B + " " + W + ';"></span>'
                        }
                        o.$tooltip.find(".tooltipster-arrow").remove();
                        var U = '<div class="' + H + ' tooltipster-arrow" style="' + s + '">' + q + '<span style="border-color:' + R + ';"></span></div>';
                        o.$tooltip.append(U)
                    }
                    o.$tooltip.css({top: Math.round(N) + "px", left: Math.round(_) + "px"})
                }
                return o
            }, enable: function () {
                return this.enabled = !0, this
            }, disable: function () {
                return this.hide(), this.enabled = !1, this
            }, destroy: function () {
                var e = this;
                e.hide(), e.$el[0] !== e.$elProxy[0] && e.$elProxy.remove(), e.$el.removeData(e.namespace).off("." + e.namespace);
                var n = e.$el.data("tooltipster-ns");
                if (1 === n.length) {
                    var i = "string" == typeof e.Content ? e.Content : t("<div></div>").append(e.Content).html();
                    e.$el.removeClass("tooltipstered").attr("title", i).removeData(e.namespace).removeData("tooltipster-ns").off("." + e.namespace)
                } else n = t.grep(n, function (t) {
                    return t !== e.namespace
                }), e.$el.data("tooltipster-ns", n);
                return e
            }, elementIcon: function () {
                return this.$el[0] !== this.$elProxy[0] ? this.$elProxy[0] : void 0
            }, elementTooltip: function () {
                return this.$tooltip ? this.$tooltip[0] : void 0
            }, option: function (t, e) {
                return "undefined" == typeof e ? this.options[t] : (this.options[t] = e, this)
            }, status: function () {
                return this.Status
            }
        }, t.fn[a] = function () {
            var e = arguments;
            if (0 === this.length) {
                if ("string" == typeof e[0]) {
                    var n = !0;
                    switch (e[0]) {
                        case"setDefaults":
                            t.extend(l, e[1]);
                            break;
                        default:
                            n = !1
                    }
                    return n ? !0 : this
                }
                return this
            }
            if ("string" == typeof e[0]) {
                var o = "#*$~&";
                return this.each(function () {
                    var n = t(this).data("tooltipster-ns"), i = n ? t(this).data(n[0]) : null;
                    if (!i)throw new Error("You called Tooltipster's \"" + e[0] + '" method on an uninitialized element');
                    if ("function" != typeof i[e[0]])throw new Error('Unknown method .tooltipster("' + e[0] + '")');
                    var s = i[e[0]](e[1], e[2]);
                    return s !== i ? (o = s, !1) : void 0
                }), "#*$~&" !== o ? o : this
            }
            var s = [], r = e[0] && "undefined" != typeof e[0].multiple, a = r && e[0].multiple || !r && l.multiple, c = e[0] && "undefined" != typeof e[0].debug, u = c && e[0].debug || !c && l.debug;
            return this.each(function () {
                var n = !1, o = t(this).data("tooltipster-ns"), r = null;
                o ? a ? n = !0 : u && console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.') : n = !0, n && (r = new i(this, e[0]), o || (o = []), o.push(r.namespace), t(this).data("tooltipster-ns", o), t(this).data(r.namespace, r)), s.push(r)
            }), a ? s : this
        };
        var c = !!("ontouchstart"in e), u = !1;
        t("body").one("mousemove", function () {
            u = !0
        })
    }(jQuery, window, document), !function (t, e, n, i) {
        var o = t(e);
        t.fn.lazyload = function (s) {
            function r() {
                var e = 0;
                l.each(function () {
                    var n = t(this);
                    if (!c.skip_invisible || n.is(":visible"))if (t.abovethetop(this, c) || t.leftofbegin(this, c)); else if (t.belowthefold(this, c) || t.rightoffold(this, c)) {
                        if (++e > c.failure_limit)return !1
                    } else n.trigger("appear"), e = 0
                })
            }

            var a, l = this, c = {
                threshold: 0,
                failure_limit: 0,
                event: "scroll",
                effect: "show",
                container: e,
                data_attribute: "original",
                skip_invisible: !0,
                appear: null,
                load: null,
                placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
            };
            return s && (i !== s.failurelimit && (s.failure_limit = s.failurelimit, delete s.failurelimit), i !== s.effectspeed && (s.effect_speed = s.effectspeed, delete s.effectspeed), t.extend(c, s)), a = c.container === i || c.container === e ? o : t(c.container), 0 === c.event.indexOf("scroll") && a.bind(c.event, function () {
                return r()
            }), this.each(function () {
                var e = this, n = t(e);
                e.loaded = !1, (n.attr("src") === i || n.attr("src") === !1) && n.is("img") && n.attr("src", c.placeholder), n.one("appear", function () {
                    if (!this.loaded) {
                        if (c.appear) {
                            var i = l.length;
                            c.appear.call(e, i, c)
                        }
                        t("<img />").bind("load", function () {
                            var i = n.attr("data-" + c.data_attribute);
                            n.hide(), n.is("img") ? n.attr("src", i) : n.css("background-image", "url('" + i + "')"), n[c.effect](c.effect_speed), e.loaded = !0;
                            var o = t.grep(l, function (t) {
                                return !t.loaded
                            });
                            if (l = t(o), c.load) {
                                var s = l.length;
                                c.load.call(e, s, c)
                            }
                        }).attr("src", n.attr("data-" + c.data_attribute))
                    }
                }), 0 !== c.event.indexOf("scroll") && n.bind(c.event, function () {
                    e.loaded || n.trigger("appear")
                })
            }), o.bind("resize", function () {
                r()
            }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && o.bind("pageshow", function (e) {
                e.originalEvent && e.originalEvent.persisted && l.each(function () {
                    t(this).trigger("appear")
                })
            }), t(n).ready(function () {
                r()
            }), this
        }, t.belowthefold = function (n, s) {
            var r;
            return r = s.container === i || s.container === e ? (e.innerHeight ? e.innerHeight : o.height()) + o.scrollTop() : t(s.container).offset().top + t(s.container).height(), r <= t(n).offset().top - s.threshold
        }, t.rightoffold = function (n, s) {
            var r;
            return r = s.container === i || s.container === e ? o.width() + o.scrollLeft() : t(s.container).offset().left + t(s.container).width(), r <= t(n).offset().left - s.threshold
        }, t.abovethetop = function (n, s) {
            var r;
            return r = s.container === i || s.container === e ? o.scrollTop() : t(s.container).offset().top, r >= t(n).offset().top + s.threshold + t(n).height()
        }, t.leftofbegin = function (n, s) {
            var r;
            return r = s.container === i || s.container === e ? o.scrollLeft() : t(s.container).offset().left, r >= t(n).offset().left + s.threshold + t(n).width()
        }, t.inviewport = function (e, n) {
            return !(t.rightoffold(e, n) || t.leftofbegin(e, n) || t.belowthefold(e, n) || t.abovethetop(e, n))
        }, t.extend(t.expr[":"], {
            "below-the-fold": function (e) {
                return t.belowthefold(e, {threshold: 0})
            }, "above-the-top": function (e) {
                return !t.belowthefold(e, {threshold: 0})
            }, "right-of-screen": function (e) {
                return t.rightoffold(e, {threshold: 0})
            }, "left-of-screen": function (e) {
                return !t.rightoffold(e, {threshold: 0})
            }, "in-viewport": function (e) {
                return t.inviewport(e, {threshold: 0})
            }, "above-the-fold": function (e) {
                return !t.belowthefold(e, {threshold: 0})
            }, "right-of-fold": function (e) {
                return t.rightoffold(e, {threshold: 0})
            }, "left-of-fold": function (e) {
                return !t.rightoffold(e, {threshold: 0})
            }
        })
    }(jQuery, window, document), !function (t, e, n, i) {
        function o(e, n) {
            this.element = e, this.options = t.extend({}, r, n), this._defaults = r, this._name = s, this.init()
        }

        var s = "stellar", r = {
            scrollProperty: "scroll",
            positionProperty: "position",
            horizontalScrolling: !0,
            verticalScrolling: !0,
            horizontalOffset: 0,
            verticalOffset: 0,
            responsive: !1,
            parallaxBackgrounds: !0,
            parallaxElements: !0,
            hideDistantElements: !0,
            hideElement: function (t) {
                t.hide()
            },
            showElement: function (t) {
                t.show()
            }
        }, a = {
            scroll: {
                getLeft: function (t) {
                    return t.scrollLeft()
                }, setLeft: function (t, e) {
                    t.scrollLeft(e)
                }, getTop: function (t) {
                    return t.scrollTop()
                }, setTop: function (t, e) {
                    t.scrollTop(e)
                }
            }, position: {
                getLeft: function (t) {
                    return -1 * parseInt(t.css("left"), 10)
                }, getTop: function (t) {
                    return -1 * parseInt(t.css("top"), 10)
                }
            }, margin: {
                getLeft: function (t) {
                    return -1 * parseInt(t.css("margin-left"), 10)
                }, getTop: function (t) {
                    return -1 * parseInt(t.css("margin-top"), 10)
                }
            }, transform: {
                getLeft: function (t) {
                    var e = getComputedStyle(t[0])[u];
                    return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[4], 10) : 0
                }, getTop: function (t) {
                    var e = getComputedStyle(t[0])[u];
                    return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[5], 10) : 0
                }
            }
        }, l = {
            position: {
                setLeft: function (t, e) {
                    t.css("left", e)
                }, setTop: function (t, e) {
                    t.css("top", e)
                }
            }, transform: {
                setPosition: function (t, e, n, i, o) {
                    t[0].style[u] = "translate3d(" + (e - n) + "px, " + (i - o) + "px, 0)"
                }
            }
        }, c = function () {
            var e, n = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/, i = t("script")[0].style, o = "";
            for (e in i)if (n.test(e)) {
                o = e.match(n)[0];
                break
            }
            return "WebkitOpacity"in i && (o = "Webkit"), "KhtmlOpacity"in i && (o = "Khtml"), function (t) {
                return o + (o.length > 0 ? t.charAt(0).toUpperCase() + t.slice(1) : t)
            }
        }(), u = c("transform"), h = t("<div />", {style: "background:#fff"}).css("background-position-x") !== i, d = h ? function (t, e, n) {
            t.css({"background-position-x": e, "background-position-y": n})
        } : function (t, e, n) {
            t.css("background-position", e + " " + n)
        }, p = h ? function (t) {
            return [t.css("background-position-x"), t.css("background-position-y")]
        } : function (t) {
            return t.css("background-position").split(" ")
        }, f = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (t) {
                setTimeout(t, 1e3 / 60)
            };
        o.prototype = {
            init: function () {
                this.options.name = s + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({firstLoad: !0}), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
            }, _defineElements: function () {
                this.element === n.body && (this.element = e), this.$scrollElement = t(this.element), this.$element = this.element === e ? t("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== i ? t(this.options.viewportElement) : this.$scrollElement[0] === e || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
            }, _defineGetters: function () {
                var t = this, e = a[t.options.scrollProperty];
                this._getScrollLeft = function () {
                    return e.getLeft(t.$scrollElement)
                }, this._getScrollTop = function () {
                    return e.getTop(t.$scrollElement)
                }
            }, _defineSetters: function () {
                var e = this, n = a[e.options.scrollProperty], i = l[e.options.positionProperty], o = n.setLeft, s = n.setTop;
                this._setScrollLeft = "function" == typeof o ? function (t) {
                    o(e.$scrollElement, t)
                } : t.noop, this._setScrollTop = "function" == typeof s ? function (t) {
                    s(e.$scrollElement, t)
                } : t.noop, this._setPosition = i.setPosition || function (t, n, o, s, r) {
                        e.options.horizontalScrolling && i.setLeft(t, n, o), e.options.verticalScrolling && i.setTop(t, s, r)
                    }
            }, _handleWindowLoadAndResize: function () {
                var n = this, i = t(e);
                n.options.responsive && i.bind("load." + this.name, function () {
                    n.refresh()
                }), i.bind("resize." + this.name, function () {
                    n._detectViewport(), n.options.responsive && n.refresh()
                })
            }, refresh: function (n) {
                var i = this, o = i._getScrollLeft(), s = i._getScrollTop();
                n && n.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), n && n.firstLoad && /WebKit/.test(navigator.userAgent) && t(e).load(function () {
                    var t = i._getScrollLeft(), e = i._getScrollTop();
                    i._setScrollLeft(t + 1), i._setScrollTop(e + 1), i._setScrollLeft(t), i._setScrollTop(e)
                }), this._setScrollLeft(o), this._setScrollTop(s)
            }, _detectViewport: function () {
                var t = this.$viewportElement.offset(), e = null !== t && t !== i;
                this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = e ? t.top : 0, this.viewportOffsetLeft = e ? t.left : 0
            }, _findParticles: function () {
                var e = this;
                if (this._getScrollLeft(), this._getScrollTop(), this.particles !== i)for (var n = this.particles.length - 1; n >= 0; n--)this.particles[n].$element.data("stellar-elementIsActive", i);
                this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function () {
                    var n, o, s, r, a, l, c, u, h, d = t(this), p = 0, f = 0, m = 0, g = 0;
                    if (d.data("stellar-elementIsActive")) {
                        if (d.data("stellar-elementIsActive") !== this)return
                    } else d.data("stellar-elementIsActive", this);
                    e.options.showElement(d), d.data("stellar-startingLeft") ? (d.css("left", d.data("stellar-startingLeft")), d.css("top", d.data("stellar-startingTop"))) : (d.data("stellar-startingLeft", d.css("left")), d.data("stellar-startingTop", d.css("top"))), s = d.position().left, r = d.position().top, a = "auto" === d.css("margin-left") ? 0 : parseInt(d.css("margin-left"), 10), l = "auto" === d.css("margin-top") ? 0 : parseInt(d.css("margin-top"), 10), u = d.offset().left - a, h = d.offset().top - l, d.parents().each(function () {
                        var e = t(this);
                        return e.data("stellar-offset-parent") === !0 ? (p = m, f = g, c = e, !1) : (m += e.position().left, void(g += e.position().top))
                    }), n = d.data("stellar-horizontal-offset") !== i ? d.data("stellar-horizontal-offset") : c !== i && c.data("stellar-horizontal-offset") !== i ? c.data("stellar-horizontal-offset") : e.horizontalOffset, o = d.data("stellar-vertical-offset") !== i ? d.data("stellar-vertical-offset") : c !== i && c.data("stellar-vertical-offset") !== i ? c.data("stellar-vertical-offset") : e.verticalOffset, e.particles.push({
                        $element: d,
                        $offsetParent: c,
                        isFixed: "fixed" === d.css("position"),
                        horizontalOffset: n,
                        verticalOffset: o,
                        startingPositionLeft: s,
                        startingPositionTop: r,
                        startingOffsetLeft: u,
                        startingOffsetTop: h,
                        parentOffsetLeft: p,
                        parentOffsetTop: f,
                        stellarRatio: d.data("stellar-ratio") !== i ? d.data("stellar-ratio") : 1,
                        width: d.outerWidth(!0),
                        height: d.outerHeight(!0),
                        isHidden: !1
                    })
                })
            }, _findBackgrounds: function () {
                var e, n = this, o = this._getScrollLeft(), s = this._getScrollTop();
                this.backgrounds = [], this.options.parallaxBackgrounds && (e = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (e = e.add(this.$element)), e.each(function () {
                    var e, r, a, l, c, u, h, f = t(this), m = p(f), g = 0, v = 0, y = 0, b = 0;
                    if (f.data("stellar-backgroundIsActive")) {
                        if (f.data("stellar-backgroundIsActive") !== this)return
                    } else f.data("stellar-backgroundIsActive", this);
                    f.data("stellar-backgroundStartingLeft") ? d(f, f.data("stellar-backgroundStartingLeft"), f.data("stellar-backgroundStartingTop")) : (f.data("stellar-backgroundStartingLeft", m[0]), f.data("stellar-backgroundStartingTop", m[1])), a = "auto" === f.css("margin-left") ? 0 : parseInt(f.css("margin-left"), 10), l = "auto" === f.css("margin-top") ? 0 : parseInt(f.css("margin-top"), 10), c = f.offset().left - a - o, u = f.offset().top - l - s, f.parents().each(function () {
                        var e = t(this);
                        return e.data("stellar-offset-parent") === !0 ? (g = y, v = b, h = e, !1) : (y += e.position().left, void(b += e.position().top))
                    }), e = f.data("stellar-horizontal-offset") !== i ? f.data("stellar-horizontal-offset") : h !== i && h.data("stellar-horizontal-offset") !== i ? h.data("stellar-horizontal-offset") : n.horizontalOffset, r = f.data("stellar-vertical-offset") !== i ? f.data("stellar-vertical-offset") : h !== i && h.data("stellar-vertical-offset") !== i ? h.data("stellar-vertical-offset") : n.verticalOffset, n.backgrounds.push({
                        $element: f,
                        $offsetParent: h,
                        isFixed: "fixed" === f.css("background-attachment"),
                        horizontalOffset: e,
                        verticalOffset: r,
                        startingValueLeft: m[0],
                        startingValueTop: m[1],
                        startingBackgroundPositionLeft: isNaN(parseInt(m[0], 10)) ? 0 : parseInt(m[0], 10),
                        startingBackgroundPositionTop: isNaN(parseInt(m[1], 10)) ? 0 : parseInt(m[1], 10),
                        startingPositionLeft: f.position().left,
                        startingPositionTop: f.position().top,
                        startingOffsetLeft: c,
                        startingOffsetTop: u,
                        parentOffsetLeft: g,
                        parentOffsetTop: v,
                        stellarRatio: f.data("stellar-background-ratio") === i ? 1 : f.data("stellar-background-ratio")
                    })
                }))
            }, _reset: function () {
                var t, e, n, i, o;
                for (o = this.particles.length - 1; o >= 0; o--)t = this.particles[o], e = t.$element.data("stellar-startingLeft"), n = t.$element.data("stellar-startingTop"), this._setPosition(t.$element, e, e, n, n), this.options.showElement(t.$element), t.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
                for (o = this.backgrounds.length - 1; o >= 0; o--)i = this.backgrounds[o], i.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), d(i.$element, i.startingValueLeft, i.startingValueTop)
            }, destroy: function () {
                this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = t.noop, t(e).unbind("load." + this.name).unbind("resize." + this.name)
            }, _setOffsets: function () {
                var n = this, i = t(e);
                i.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), i.bind("resize.horizontal-" + this.name, function () {
                    n.horizontalOffset = n.options.horizontalOffset()
                })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), i.bind("resize.vertical-" + this.name, function () {
                    n.verticalOffset = n.options.verticalOffset()
                })) : this.verticalOffset = this.options.verticalOffset
            }, _repositionElements: function () {
                var t, e, n, i, o, s, r, a, l, c, u = this._getScrollLeft(), h = this._getScrollTop(), p = !0, f = !0;
                if (this.currentScrollLeft !== u || this.currentScrollTop !== h || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                    for (this.currentScrollLeft = u, this.currentScrollTop = h, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, c = this.particles.length - 1; c >= 0; c--)t = this.particles[c], e = t.isFixed ? 1 : 0, this.options.horizontalScrolling ? (s = (u + t.horizontalOffset + this.viewportOffsetLeft + t.startingPositionLeft - t.startingOffsetLeft + t.parentOffsetLeft) * -(t.stellarRatio + e - 1) + t.startingPositionLeft, a = s - t.startingPositionLeft + t.startingOffsetLeft) : (s = t.startingPositionLeft, a = t.startingOffsetLeft), this.options.verticalScrolling ? (r = (h + t.verticalOffset + this.viewportOffsetTop + t.startingPositionTop - t.startingOffsetTop + t.parentOffsetTop) * -(t.stellarRatio + e - 1) + t.startingPositionTop, l = r - t.startingPositionTop + t.startingOffsetTop) : (r = t.startingPositionTop, l = t.startingOffsetTop), this.options.hideDistantElements && (f = !this.options.horizontalScrolling || a + t.width > (t.isFixed ? 0 : u) && a < (t.isFixed ? 0 : u) + this.viewportWidth + this.viewportOffsetLeft, p = !this.options.verticalScrolling || l + t.height > (t.isFixed ? 0 : h) && l < (t.isFixed ? 0 : h) + this.viewportHeight + this.viewportOffsetTop), f && p ? (t.isHidden && (this.options.showElement(t.$element), t.isHidden = !1), this._setPosition(t.$element, s, t.startingPositionLeft, r, t.startingPositionTop)) : t.isHidden || (this.options.hideElement(t.$element), t.isHidden = !0);
                    for (c = this.backgrounds.length - 1; c >= 0; c--)n = this.backgrounds[c], e = n.isFixed ? 0 : 1, i = this.options.horizontalScrolling ? (u + n.horizontalOffset - this.viewportOffsetLeft - n.startingOffsetLeft + n.parentOffsetLeft - n.startingBackgroundPositionLeft) * (e - n.stellarRatio) + "px" : n.startingValueLeft, o = this.options.verticalScrolling ? (h + n.verticalOffset - this.viewportOffsetTop - n.startingOffsetTop + n.parentOffsetTop - n.startingBackgroundPositionTop) * (e - n.stellarRatio) + "px" : n.startingValueTop, d(n.$element, i, o)
                }
            }, _handleScrollEvent: function () {
                var t = this, e = !1, n = function () {
                    t._repositionElements(), e = !1
                }, i = function () {
                    e || (f(n), e = !0)
                };
                this.$scrollElement.bind("scroll." + this.name, i), i()
            }, _startAnimationLoop: function () {
                var t = this;
                this._animationLoop = function () {
                    f(t._animationLoop), t._repositionElements()
                }, this._animationLoop()
            }
        }, t.fn[s] = function (e) {
            var n = arguments;
            return e === i || "object" == typeof e ? this.each(function () {
                t.data(this, "plugin_" + s) || t.data(this, "plugin_" + s, new o(this, e))
            }) : "string" == typeof e && "_" !== e[0] && "init" !== e ? this.each(function () {
                var i = t.data(this, "plugin_" + s);
                i instanceof o && "function" == typeof i[e] && i[e].apply(i, Array.prototype.slice.call(n, 1)), "destroy" === e && t.data(this, "plugin_" + s, null)
            }) : void 0
        }, t[s] = function () {
            var n = t(e);
            return n.stellar.apply(n, Array.prototype.slice.call(arguments, 0))
        }, t[s].scrollProperty = a, t[s].positionProperty = l, e.Stellar = o
    }(jQuery, this, document), function (t) {
        function e(t, e) {
            return t.toFixed(e.decimals)
        }

        t.fn.countTo = function (e) {
            return e = e || {}, t(this).each(function () {
                function n() {
                    u += r, c++, i(u), "function" == typeof o.onUpdate && o.onUpdate.call(a, u), c >= s && (l.removeData("countTo"), clearInterval(h.interval), u = o.to, "function" == typeof o.onComplete && o.onComplete.call(a, u))
                }

                function i(t) {
                    var e = o.formatter.call(a, t, o);
                    l.text(e)
                }

                var o = t.extend({}, t.fn.countTo.defaults, {
                    from: t(this).data("from"),
                    to: t(this).data("to"),
                    speed: t(this).data("speed"),
                    refreshInterval: t(this).data("refresh-interval"),
                    decimals: t(this).data("decimals")
                }, e), s = Math.ceil(o.speed / o.refreshInterval), r = (o.to - o.from) / s, a = this, l = t(this), c = 0, u = o.from, h = l.data("countTo") || {};
                l.data("countTo", h), h.interval && clearInterval(h.interval), h.interval = setInterval(n, o.refreshInterval), i(u)
            })
        }, t.fn.countTo.defaults = {
            from: 0,
            to: 0,
            speed: 1e3,
            refreshInterval: 100,
            decimals: 0,
            formatter: e,
            onUpdate: null,
            onComplete: null
        }
    }(jQuery), function () {
        function m() {
            return function () {
            }
        }

        function p(t) {
            return function () {
                return this[t]
            }
        }

        function r(t) {
            return function () {
                return t
            }
        }

        function u(t, e, n) {
            if ("string" == typeof t) {
                if (0 === t.indexOf("#") && (t = t.slice(1)), u.La[t])return u.La[t];
                t = u.r(t)
            }
            if (!t || !t.nodeName)throw new TypeError("The element or ID supplied is not valid. (videojs)");
            return t.player || new u.ea(t, e, n)
        }

        function B(t, e, n, i) {
            return n !== b ? (t.b.style[e] = -1 !== ("" + n).indexOf("%") || -1 !== ("" + n).indexOf("px") ? n : "auto" === n ? "" : n + "px", i || t.k("resize"), t) : t.b ? (n = t.b.style[e], i = n.indexOf("px"), -1 !== i ? parseInt(n.slice(0, i), 10) : parseInt(t.b["offset" + u.Y(e)], 10)) : 0
        }

        function C(t, e) {
            var n, i, o, s;
            return n = t.b, i = u.Oc(n), s = o = n.offsetWidth, n = t.handle, t.f.md ? (s = i.top, i = e.changedTouches ? e.changedTouches[0].pageY : e.pageY, n && (n = n.r().offsetHeight, s += n / 2, o -= n), Math.max(0, Math.min(1, (s - i + o) / o))) : (o = i.left, i = e.changedTouches ? e.changedTouches[0].pageX : e.pageX, n && (n = n.r().offsetWidth, o += n / 2, s -= n), Math.max(0, Math.min(1, (i - o) / s)))
        }

        function ba(t, e) {
            t.X(e), e.d("click", u.bind(t, function () {
                this.Sa()
            }))
        }

        function E(t) {
            t.ma = f, t.sa.nc(), t.b.setAttribute("aria-pressed", f), t.G && 0 < t.G.length && t.G[0].r().focus()
        }

        function D(t) {
            t.ma = l, t.sa.Sa(), t.b.setAttribute("aria-pressed", l)
        }

        function ca(t) {
            var e = {sources: [], tracks: []};
            if (u.i.B(e, u.vb(t)), t.hasChildNodes())for (var n, i = t.childNodes, o = 0, s = i.length; s > o; o++)t = i[o], n = t.nodeName.toLowerCase(), "source" === n ? e.sources.push(u.vb(t)) : "track" === n && e.tracks.push(u.vb(t));
            return e
        }

        function F(t, e, n) {
            t.h ? (t.Z = l, t.h.C(), t.Cb && (t.Cb = l, clearInterval(t.Na)), t.Db && G(t), t.h = l) : "Html5" !== e && t.N && (t.b.removeChild(t.N), t.N.oc = h, t.N = h), t.ua = e, t.Z = l;
            var i = u.i.B({source: n, parentEl: t.b}, t.f[e.toLowerCase()]);
            n && (n.src == t.s.src && 0 < t.s.currentTime && (i.startTime = t.s.currentTime), t.s.src = n.src), t.h = new window.videojs[e](t, i), t.h.M(function () {
                if (this.a.Ra(), !this.j.Kb) {
                    var t = this.a;
                    t.Cb = f, t.Na = setInterval(u.bind(t, function () {
                        this.s.lb < this.buffered().end(0) ? this.k("progress") : 1 == H(this) && (clearInterval(this.Na), this.k("progress"))
                    }), 500), t.h.Q("progress", function () {
                        this.j.Kb = f;
                        var t = this.a;
                        t.Cb = l, clearInterval(t.Na)
                    })
                }
                this.j.Nb || (t = this.a, t.Db = f, t.d("play", t.wc), t.d("pause", t.ta), t.h.Q("timeupdate", function () {
                    this.j.Nb = f, G(this.a)
                }))
            })
        }

        function G(t) {
            t.Db = l, t.ta(), t.t("play", t.wc), t.t("pause", t.ta)
        }

        function J(t, e, n) {
            if (t.h && t.h.Z)t.h.M(function () {
                this[e](n)
            }); else try {
                t.h[e](n)
            } catch (i) {
                throw u.log(i), i
            }
        }

        function I(t, e) {
            if (t.h.Z)try {
                return t.h[e]()
            } catch (n) {
                throw t.h[e] === b ? u.log("Video.js: " + e + " method not defined for " + t.ua + " playback technology.", n) : "TypeError" == n.name ? (u.log("Video.js: " + e + " unavailable on " + t.ua + " playback technology element.", n), t.h.Z = l) : u.log(n), n
            }
        }

        function H(t) {
            return t.duration() ? t.buffered().end(0) / t.duration() : 0
        }

        function K(t) {
            var e = u.Mb.Pa;
            t.F = l, e ? document[e.nb]() : t.h.Qa() ? J(t, "exitFullScreen") : (L(t), t.k("fullscreenchange"))
        }

        function L(t) {
            t.Qc = l, u.t(document, "keydown", t.gc), document.documentElement.style.overflow = t.Lc, u.w(document.body, "vjs-full-window"), t.k("exitFullWindow")
        }

        function da() {
            var t = u.media.Ta[i];
            return function () {
                throw Error('The "' + t + "\" method is not available on the playback technology's API")
            }
        }

        function ea() {
            var t = Q[S], e = t.charAt(0).toUpperCase() + t.slice(1);
            P["set" + e] = function (e) {
                return this.b.vjs_setProperty(t, e)
            }
        }

        function T(t) {
            P[t] = function () {
                return this.b.vjs_getProperty(t)
            }
        }

        function U(t) {
            return t.va = t.va || [], t.va
        }

        function V(t, e, n) {
            for (var i, o, s = t.va, r = 0, a = s.length; a > r; r++)i = s[r], i.id() === e ? (i.show(), o = i) : n && i.H() == n && 0 < i.mode() && i.disable();
            (e = o ? o.H() : n ? n : l) && t.k(e + "trackchange")
        }

        function W(t) {
            0 === t.ja && t.load(), 0 === t.ia && (t.a.d("timeupdate", u.bind(t, t.update, t.L)), t.a.d("ended", u.bind(t, t.reset, t.L)), ("captions" === t.A || "subtitles" === t.A) && t.a.R.textTrackDisplay.X(t))
        }

        function X(t) {
            var e = t.split(":");
            t = 0;
            var n, i, o;
            return 3 == e.length ? (n = e[0], i = e[1], e = e[2]) : (n = 0, i = e[0], e = e[1]), e = e.split(/\s+/), e = e.splice(0, 1)[0], e = e.split(/\.|,/), o = parseFloat(e[1]), e = e[0], t += 3600 * parseFloat(n), t += 60 * parseFloat(i), t += parseFloat(e), o && (t += o / 1e3), t
        }

        function $(t, e) {
            var n = t.split("."), i = Z;
            !(n[0]in i) && i.execScript && i.execScript("var " + n[0]);
            for (var o; n.length && (o = n.shift());)n.length || e === b ? i = i[o] ? i[o] : i[o] = {} : i[o] = e
        }

        var b = void 0, f = !0, h = null, l = !1, t;
        document.createElement("video"), document.createElement("audio");
        var v = u;
        window.xd = window.yd = u, u.Ob = "4.0", u.xc = "https:" == document.location.protocol ? "https://" : "http://", u.options = {
            techOrder: ["html5", "flash"],
            html5: {},
            flash: {},
            width: 300,
            height: 150,
            defaultVolume: 0,
            children: {
                mediaLoader: {},
                posterImage: {},
                textTrackDisplay: {},
                loadingSpinner: {},
                bigPlayButton: {},
                controlBar: {}
            }
        }, "GENERATED_CDN_VSN" !== u.Ob && (v.options.flash.swf = u.xc + "vjs.zencdn.net/" + u.Ob + "/video-js.swf"), u.La = {}, u.ka = u.CoreObject = m(), u.ka.extend = function (t) {
            var e, n;
            t = t || {}, e = t.init || t.g || this.prototype.init || this.prototype.g || m(), n = function () {
                e.apply(this, arguments)
            }, n.prototype = u.i.create(this.prototype), n.prototype.constructor = n, n.extend = u.ka.extend, n.create = u.ka.create;
            for (var i in t)t.hasOwnProperty(i) && (n.prototype[i] = t[i]);
            return n
        }, u.ka.create = function () {
            var t = u.i.create(this.prototype);
            return this.apply(t, arguments), t
        }, u.d = function (t, e, n) {
            var i = u.getData(t);
            i.z || (i.z = {}), i.z[e] || (i.z[e] = []), n.u || (n.u = u.u++), i.z[e].push(n), i.S || (i.disabled = l, i.S = function (e) {
                if (!i.disabled) {
                    e = u.fc(e);
                    var n = i.z[e.type];
                    if (n)for (var n = n.slice(0), o = 0, s = n.length; s > o && !e.lc(); o++)n[o].call(t, e)
                }
            }), 1 == i.z[e].length && (document.addEventListener ? t.addEventListener(e, i.S, l) : document.attachEvent && t.attachEvent("on" + e, i.S))
        }, u.t = function (t, e, n) {
            if (u.kc(t)) {
                var i = u.getData(t);
                if (i.z)if (e) {
                    var o = i.z[e];
                    if (o) {
                        if (n) {
                            if (n.u)for (i = 0; i < o.length; i++)o[i].u === n.u && o.splice(i--, 1)
                        } else i.z[e] = [];
                        u.cc(t, e)
                    }
                } else for (o in i.z)e = o, i.z[e] = [], u.cc(t, e)
            }
        }, u.cc = function (t, e) {
            var n = u.getData(t);
            0 === n.z[e].length && (delete n.z[e], document.removeEventListener ? t.removeEventListener(e, n.S, l) : document.detachEvent && t.detachEvent("on" + e, n.S)), u.zb(n.z) && (delete n.z, delete n.S, delete n.disabled), u.zb(n) && u.rc(t)
        }, u.fc = function (t) {
            function e() {
                return f
            }

            function n() {
                return l
            }

            if (!t || !t.Ab) {
                var i = t || window.event;
                t = {};
                for (var o in i)"layerX" !== o && "layerY" !== o && (t[o] = i[o]);
                if (t.target || (t.target = t.srcElement || document), t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement, t.preventDefault = function () {
                        i.preventDefault && i.preventDefault(), t.returnValue = l, t.yb = e
                    }, t.yb = n, t.stopPropagation = function () {
                        i.stopPropagation && i.stopPropagation(), t.cancelBubble = f, t.Ab = e
                    }, t.Ab = n, t.stopImmediatePropagation = function () {
                        i.stopImmediatePropagation && i.stopImmediatePropagation(), t.lc = e, t.stopPropagation()
                    }, t.lc = n, t.clientX != h) {
                    o = document.documentElement;
                    var s = document.body;
                    t.pageX = t.clientX + (o && o.scrollLeft || s && s.scrollLeft || 0) - (o && o.clientLeft || s && s.clientLeft || 0), t.pageY = t.clientY + (o && o.scrollTop || s && s.scrollTop || 0) - (o && o.clientTop || s && s.clientTop || 0)
                }
                t.which = t.charCode || t.keyCode, t.button != h && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
            }
            return t
        }, u.k = function (t, e) {
            var n = u.kc(t) ? u.getData(t) : {}, i = t.parentNode || t.ownerDocument;
            return "string" == typeof e && (e = {
                type: e,
                target: t
            }), e = u.fc(e), n.S && n.S.call(t, e), i && !e.Ab() ? u.k(i, e) : i || e.yb() || (n = u.getData(e.target), !e.target[e.type]) || (n.disabled = f, "function" == typeof e.target[e.type] && e.target[e.type](), n.disabled = l), !e.yb()
        }, u.Q = function (t, e, n) {
            u.d(t, e, function () {
                u.t(t, e, arguments.callee), n.apply(this, arguments)
            })
        };
        var w = Object.prototype.hasOwnProperty;
        u.e = function (t, e) {
            var n, i = document.createElement(t || "div");
            for (n in e)w.call(e, n) && (-1 !== n.indexOf("aria-") || "role" == n ? i.setAttribute(n, e[n]) : i[n] = e[n]);
            return i
        }, u.Y = function (t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }, u.i = {}, u.i.create = Object.create || function (t) {
                function e() {
                }

                return e.prototype = t, new e
            }, u.i.qa = function (t, e, n) {
            for (var i in t)w.call(t, i) && e.call(n || this, i, t[i])
        }, u.i.B = function (t, e) {
            if (!e)return t;
            for (var n in e)w.call(e, n) && (t[n] = e[n]);
            return t
        }, u.i.ec = function (t, e) {
            var n, i, o;
            t = u.i.copy(t);
            for (n in e)w.call(e, n) && (i = t[n], o = e[n], t[n] = u.i.mc(i) && u.i.mc(o) ? u.i.ec(i, o) : e[n]);
            return t
        }, u.i.copy = function (t) {
            return u.i.B({}, t)
        }, u.i.mc = function (t) {
            return !!t && "object" == typeof t && "[object Object]" === t.toString() && t.constructor === Object
        }, u.bind = function (t, e, n) {
            function i() {
                return e.apply(t, arguments)
            }

            return e.u || (e.u = u.u++), i.u = n ? n + "_" + e.u : e.u, i
        }, u.oa = {}, u.u = 1, u.expando = "vdata" + (new Date).getTime(), u.getData = function (t) {
            var e = t[u.expando];
            return e || (e = t[u.expando] = u.u++, u.oa[e] = {}), u.oa[e]
        }, u.kc = function (t) {
            return t = t[u.expando], !(!t || u.zb(u.oa[t]))
        }, u.rc = function (t) {
            var e = t[u.expando];
            if (e) {
                delete u.oa[e];
                try {
                    delete t[u.expando]
                } catch (n) {
                    t.removeAttribute ? t.removeAttribute(u.expando) : t[u.expando] = h
                }
            }
        }, u.zb = function (t) {
            for (var e in t)if (t[e] !== h)return l;
            return f
        }, u.p = function (t, e) {
            -1 == (" " + t.className + " ").indexOf(" " + e + " ") && (t.className = "" === t.className ? e : t.className + " " + e)
        }, u.w = function (t, e) {
            if (-1 != t.className.indexOf(e)) {
                for (var n = t.className.split(" "), i = n.length - 1; i >= 0; i--)n[i] === e && n.splice(i, 1);
                t.className = n.join(" ")
            }
        }, u.gb = u.e("video"), u.O = navigator.userAgent, u.Bc = !!u.O.match(/iPhone/i), u.Ac = !!u.O.match(/iPad/i), u.Cc = !!u.O.match(/iPod/i), u.Sb = u.Bc || u.Ac || u.Cc;
        var x = u, y, z = u.O.match(/OS (\d+)_/i);
        y = z && z[1] ? z[1] : b, x.qd = y, u.Za = !!u.O.match(/Android.*AppleWebKit/i);
        var aa = u, A = u.O.match(/Android (\d+)\./i);
        aa.yc = A && A[1] ? A[1] : h, u.zc = function () {
            return !!u.O.match("Firefox")
        }, u.vb = function (t) {
            var e = {};
            if (t && t.attributes && 0 < t.attributes.length)for (var n, i, o = t.attributes, s = o.length - 1; s >= 0; s--)n = o[s].name, i = o[s].value, ("boolean" == typeof t[n] || -1 !== ",autoplay,controls,loop,muted,default,".indexOf("," + n + ",")) && (i = i !== h ? f : l), e[n] = i;
            return e
        }, u.td = function (t, e) {
            var n = "";
            return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "").getPropertyValue(e) : t.currentStyle && (n = t["client" + e.substr(0, 1).toUpperCase() + e.substr(1)] + "px"), n
        }, u.xb = function (t, e) {
            e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
        }, u.Mb = {}, u.r = function (t) {
            return 0 === t.indexOf("#") && (t = t.slice(1)), document.getElementById(t)
        }, u.Ga = function (t, e) {
            e = e || t;
            var n = Math.floor(t % 60), i = Math.floor(t / 60 % 60), o = Math.floor(t / 3600), s = Math.floor(e / 60 % 60), r = Math.floor(e / 3600), o = o > 0 || r > 0 ? o + ":" : "";
            return o + (((o || s >= 10) && 10 > i ? "0" + i : i) + ":") + (10 > n ? "0" + n : n)
        }, u.Gc = function () {
            document.body.focus(), document.onselectstart = r(l)
        }, u.ld = function () {
            document.onselectstart = r(f)
        }, u.trim = function (t) {
            return t.toString().replace(/^\s+/, "").replace(/\s+$/, "")
        }, u.round = function (t, e) {
            return e || (e = 0), Math.round(t * Math.pow(10, e)) / Math.pow(10, e)
        }, u.rb = function (t, e) {
            return {
                length: 1, start: function () {
                    return t
                }, end: function () {
                    return e
                }
            }
        }, u.get = function (t, e, n) {
            var i = 0 === t.indexOf("file:") || 0 === window.location.href.indexOf("file:") && -1 === t.indexOf("http");
            "undefined" == typeof XMLHttpRequest && (window.XMLHttpRequest = function () {
                try {
                    return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
                } catch (t) {
                }
                try {
                    return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
                } catch (e) {
                }
                try {
                    return new window.ActiveXObject("Msxml2.XMLHTTP")
                } catch (n) {
                }
                throw Error("This browser does not support XMLHttpRequest.")
            });
            var o = new XMLHttpRequest;
            try {
                o.open("GET", t)
            } catch (s) {
                n(s)
            }
            o.onreadystatechange = function () {
                4 === o.readyState && (200 === o.status || i && 0 === o.status ? e(o.responseText) : n && n())
            };
            try {
                o.send()
            } catch (r) {
                n && n(r)
            }
        }, u.dd = function (t) {
            try {
                var e = window.localStorage || l;
                e && (e.volume = t)
            } catch (n) {
                22 == n.code || 1014 == n.code ? u.log("LocalStorage Full (VideoJS)", n) : 18 == n.code ? u.log("LocalStorage not allowed (VideoJS)", n) : u.log("LocalStorage Error (VideoJS)", n)
            }
        }, u.ic = function (t) {
            return t.match(/^https?:\/\//) || (t = u.e("div", {innerHTML: '<a href="' + t + '">x</a>'}).firstChild.href), t
        }, u.log = function () {
            u.log.history = u.log.history || [], u.log.history.push(arguments), window.console && window.console.log(Array.prototype.slice.call(arguments))
        }, u.Oc = function (t) {
            var e, n;
            return t.getBoundingClientRect && t.parentNode && (e = t.getBoundingClientRect()), e ? (t = document.documentElement, n = document.body, {
                left: e.left + (window.pageXOffset || n.scrollLeft) - (t.clientLeft || n.clientLeft || 0),
                top: e.top + (window.pageYOffset || n.scrollTop) - (t.clientTop || n.clientTop || 0)
            }) : {left: 0, top: 0}
        }, u.c = u.ka.extend({
            g: function (t, e, n) {
                if (this.a = t, this.f = u.i.copy(this.f), e = this.options(e), this.L = e.id || (e.el && e.el.id ? e.el.id : t.id() + "_component_" + u.u++), this.Tc = e.name || h, this.b = e.el || this.e(), this.D = [], this.pb = {}, this.R = {}, (t = this.f) && t.children) {
                    var i = this;
                    u.i.qa(t.children, function (t, e) {
                        e !== l && !e.loadEvent && (i[t] = i.X(t, e))
                    })
                }
                this.M(n)
            }
        }), t = u.c.prototype, t.C = function () {
            if (this.D)for (var t = this.D.length - 1; t >= 0; t--)this.D[t].C && this.D[t].C();
            this.R = this.pb = this.D = h, this.t(), this.b.parentNode && this.b.parentNode.removeChild(this.b), u.rc(this.b), this.b = h
        }, t.oc = p("a"), t.options = function (t) {
            return t === b ? this.f : this.f = u.i.ec(this.f, t)
        }, t.e = function (t, e) {
            return u.e(t, e)
        }, t.r = p("b"), t.id = p("L"), t.name = p("Tc"), t.children = p("D"), t.X = function (t, e) {
            var n, i;
            return "string" == typeof t ? (i = t, e = e || {}, n = e.componentClass || u.Y(i), e.name = i, n = new window.videojs[n](this.a || this, e)) : n = t, this.D.push(n), "function" == typeof n.id && (this.pb[n.id()] = n), (i = i || n.name && n.name()) && (this.R[i] = n), "function" == typeof n.el && n.el() && (this.pa || this.b).appendChild(n.el()), n
        }, t.removeChild = function (t) {
            if ("string" == typeof t && (t = this.R[t]), t && this.D) {
                for (var e = l, n = this.D.length - 1; n >= 0; n--)if (this.D[n] === t) {
                    e = f, this.D.splice(n, 1);
                    break
                }
                e && (this.pb[t.id] = h, this.R[t.name] = h, (e = t.r()) && e.parentNode === (this.pa || this.b) && (this.pa || this.b).removeChild(t.r()))
            }
        }, t.P = r(""), t.d = function (t, e) {
            return u.d(this.b, t, u.bind(this, e)), this
        }, t.t = function (t, e) {
            return u.t(this.b, t, e), this
        }, t.Q = function (t, e) {
            return u.Q(this.b, t, u.bind(this, e)), this
        }, t.k = function (t, e) {
            return u.k(this.b, t, e), this
        }, t.M = function (t) {
            return t && (this.Z ? t.call(this) : (this.Oa === b && (this.Oa = []), this.Oa.push(t))), this
        }, t.Ra = function () {
            this.Z = f;
            var t = this.Oa;
            if (t && 0 < t.length) {
                for (var e = 0, n = t.length; n > e; e++)t[e].call(this);
                this.Oa = [], this.k("ready")
            }
        }, t.p = function (t) {
            return u.p(this.b, t), this
        }, t.w = function (t) {
            return u.w(this.b, t), this
        }, t.show = function () {
            return this.b.style.display = "block", this
        }, t.v = function () {
            return this.b.style.display = "none", this
        }, t.ha = function () {
            return this.w("vjs-fade-out"), this.p("vjs-fade-in"), this
        }, t.Fa = function () {
            return this.w("vjs-fade-in"), this.p("vjs-fade-out"), this
        }, t.nc = function () {
            return this.p("vjs-lock-showing"), this
        }, t.Sa = function () {
            return this.w("vjs-lock-showing"), this
        }, t.disable = function () {
            this.v(), this.show = m(), this.ha = m()
        }, t.width = function (t, e) {
            return B(this, "width", t, e)
        }, t.height = function (t, e) {
            return B(this, "height", t, e)
        }, t.Kc = function (t, e) {
            return this.width(t, f).height(e)
        }, u.o = u.c.extend({
            g: function (t, e) {
                u.c.call(this, t, e);
                var n = l;
                this.d("touchstart", function () {
                    n = f
                }), this.d("touchmove", function () {
                    n = l
                });
                var i = this;
                this.d("touchend", function (t) {
                    n && i.n(t), t.preventDefault(), t.stopPropagation()
                }), this.d("click", this.n), this.d("focus", this.Ja), this.d("blur", this.Ia)
            }
        }), t = u.o.prototype, t.e = function (t, e) {
            return e = u.i.B({
                className: this.P(),
                innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">' + (this.na || "Need Text") + "</span></div>",
                ad: "button",
                "aria-live": "polite",
                tabIndex: 0
            }, e), u.c.prototype.e.call(this, t, e)
        }, t.P = function () {
            return "vjs-control " + u.c.prototype.P.call(this)
        }, t.n = m(), t.Ja = function () {
            u.d(document, "keyup", u.bind(this, this.$))
        }, t.$ = function (t) {
            (32 == t.which || 13 == t.which) && (t.preventDefault(), this.n())
        }, t.Ia = function () {
            u.t(document, "keyup", u.bind(this, this.$))
        }, u.J = u.c.extend({
            g: function (t, e) {
                u.c.call(this, t, e), this.Fc = this.R[this.f.barName], this.handle = this.R[this.f.handleName], t.d(this.pc, u.bind(this, this.update)), this.d("mousedown", this.Ka), this.d("touchstart", this.Ka), this.d("focus", this.Ja), this.d("blur", this.Ia), this.d("click", this.n), this.a.d("controlsvisible", u.bind(this, this.update)), t.M(u.bind(this, this.update)), this.K = {}
            }
        }), t = u.J.prototype, t.e = function (t, e) {
            return e = e || {}, e.className += " vjs-slider", e = u.i.B({
                ad: "slider",
                "aria-valuenow": 0,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                tabIndex: 0
            }, e), u.c.prototype.e.call(this, t, e)
        }, t.Ka = function (t) {
            t.preventDefault(), u.Gc(), this.K.move = u.bind(this, this.Fb), this.K.end = u.bind(this, this.Gb), u.d(document, "mousemove", this.K.move), u.d(document, "mouseup", this.K.end), u.d(document, "touchmove", this.K.move), u.d(document, "touchend", this.K.end), this.Fb(t)
        }, t.Gb = function () {
            u.ld(), u.t(document, "mousemove", this.K.move, l), u.t(document, "mouseup", this.K.end, l), u.t(document, "touchmove", this.K.move, l), u.t(document, "touchend", this.K.end, l), this.update()
        }, t.update = function () {
            if (this.b) {
                var t, e = this.wb(), n = this.handle, i = this.Fc;
                if (isNaN(e) && (e = 0), t = e, n) {
                    t = this.b.offsetWidth;
                    var o = n.r().offsetWidth;
                    t = o ? o / t : 0, e *= 1 - t, t = e + t / 2, n.r().style.left = u.round(100 * e, 2) + "%"
                }
                i.r().style.width = u.round(100 * t, 2) + "%"
            }
        }, t.Ja = function () {
            u.d(document, "keyup", u.bind(this, this.$))
        }, t.$ = function (t) {
            37 == t.which ? (t.preventDefault(), this.uc()) : 39 == t.which && (t.preventDefault(), this.vc())
        }, t.Ia = function () {
            u.t(document, "keyup", u.bind(this, this.$))
        }, t.n = function (t) {
            t.stopImmediatePropagation(), t.preventDefault()
        }, u.fa = u.c.extend(), u.fa.prototype.defaultValue = 0, u.fa.prototype.e = function (t, e) {
            return e = e || {}, e.className += " vjs-slider-handle", e = u.i.B({innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "</span>"}, e), u.c.prototype.e.call(this, "div", e)
        }, u.la = u.c.extend(), u.la.prototype.e = function () {
            var t = this.options().Ic || "ul";
            return this.pa = u.e(t, {className: "vjs-menu-content"}), t = u.c.prototype.e.call(this, "div", {
                append: this.pa,
                className: "vjs-menu"
            }), t.appendChild(this.pa), u.d(t, "click", function (t) {
                t.preventDefault(), t.stopImmediatePropagation()
            }), t
        }, u.I = u.o.extend({
            g: function (t, e) {
                u.o.call(this, t, e), this.selected(e.selected)
            }
        }), u.I.prototype.e = function (t, e) {
            return u.o.prototype.e.call(this, "li", u.i.B({className: "vjs-menu-item", innerHTML: this.f.label}, e))
        }, u.I.prototype.n = function () {
            this.selected(f)
        }, u.I.prototype.selected = function (t) {
            t ? (this.p("vjs-selected"), this.b.setAttribute("aria-selected", f)) : (this.w("vjs-selected"), this.b.setAttribute("aria-selected", l))
        }, u.ca = u.o.extend({
            g: function (t, e) {
                u.o.call(this, t, e), this.sa = this.Ea(), this.X(this.sa), this.G && 0 === this.G.length && this.v(), this.d("keyup", this.$), this.b.setAttribute("aria-haspopup", f), this.b.setAttribute("role", "button")
            }
        }), t = u.ca.prototype, t.ma = l, t.Ea = function () {
            var t = new u.la(this.a);
            if (this.options().title && t.r().appendChild(u.e("li", {
                    className: "vjs-menu-title",
                    innerHTML: u.Y(this.A),
                    jd: -1
                })), this.G = this.qb())for (var e = 0; e < this.G.length; e++)ba(t, this.G[e]);
            return t
        }, t.qb = m(), t.P = function () {
            return this.className + " vjs-menu-button " + u.o.prototype.P.call(this)
        }, t.Ja = m(), t.Ia = m(), t.n = function () {
            this.Q("mouseout", u.bind(this, function () {
                this.sa.Sa(), this.b.blur()
            })), this.ma ? D(this) : E(this)
        }, t.$ = function (t) {
            t.preventDefault(), 32 == t.which || 13 == t.which ? this.ma ? D(this) : E(this) : 27 == t.which && this.ma && D(this)
        }, u.ea = u.c.extend({
            g: function (t, e, n) {
                this.N = t, e = u.i.B(ca(t), e), this.s = {}, this.qc = e.poster, this.Da = e.controls, e.customControlsOnMobile !== f && (u.Sb || u.Za) ? (t.controls = e.controls, this.Da = l) : t.controls = l, u.c.call(this, this, e, n), this.Q("play", function (t) {
                    u.k(this.b, {
                        type: "firstplay",
                        target: this.b
                    }) || (t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation())
                }), this.d("ended", this.Vc), this.d("play", this.Ib), this.d("firstplay", this.Wc), this.d("pause", this.Hb), this.d("progress", this.Yc), this.d("durationchange", this.Uc), this.d("error", this.Eb), this.d("fullscreenchange", this.Xc), u.La[this.L] = this, e.plugins && u.i.qa(e.plugins, function (t, e) {
                    this[t](e)
                }, this)
            }
        }), t = u.ea.prototype, t.f = u.options, t.C = function () {
            u.La[this.L] = h, this.N && this.N.player && (this.N.player = h), this.b && this.b.player && (this.b.player = h), clearInterval(this.Na), this.ta(), this.h && this.h.C(), u.c.prototype.C.call(this)
        }, t.e = function () {
            var t = this.b = u.c.prototype.e.call(this, "div"), e = this.N;
            if (e.removeAttribute("width"), e.removeAttribute("height"), e.hasChildNodes())for (var n = e.childNodes.length, i = 0, o = e.childNodes; n > i; i++)("source" == o[0].nodeName.toLowerCase() || "track" == o[0].nodeName.toLowerCase()) && e.removeChild(o[0]);
            return e.id = e.id || "vjs_video_" + u.u++, t.id = e.id, t.className = e.className, e.id += "_html5_api", e.className = "vjs-tech", e.player = t.player = this, this.p("vjs-paused"), this.width(this.f.width, f), this.height(this.f.height, f), e.parentNode && e.parentNode.insertBefore(t, e), u.xb(e, t), t
        }, t.wc = function () {
            this.dc && this.ta(), this.dc = setInterval(u.bind(this, function () {
                this.k("timeupdate")
            }), 250)
        }, t.ta = function () {
            clearInterval(this.dc)
        }, t.Vc = function () {
            this.f.loop && (this.currentTime(0), this.play())
        }, t.Ib = function () {
            u.w(this.b, "vjs-paused"), u.p(this.b, "vjs-playing")
        }, t.Wc = function () {
            this.f.starttime && this.currentTime(this.f.starttime)
        }, t.Hb = function () {
            u.w(this.b, "vjs-playing"), u.p(this.b, "vjs-paused")
        }, t.Yc = function () {
            1 == H(this) && this.k("loadedalldata")
        }, t.Uc = function () {
            this.duration(I(this, "duration"))
        }, t.Eb = function (t) {
            u.log("Video Error", t)
        }, t.Xc = function () {
            this.F ? this.p("vjs-fullscreen") : this.w("vjs-fullscreen")
        },t.play = function () {
            return J(this, "play"), this
        },t.pause = function () {
            return J(this, "pause"), this
        },t.paused = function () {
            return I(this, "paused") === l ? l : f
        },t.currentTime = function (t) {
            return t !== b ? (this.s.vd = t, J(this, "setCurrentTime", t), this.Db && this.k("timeupdate"), this) : this.s.currentTime = I(this, "currentTime") || 0
        },t.duration = function (t) {
            return t !== b ? (this.s.duration = parseFloat(t), this) : this.s.duration
        },t.buffered = function () {
            var t = I(this, "buffered"), e = this.s.lb = this.s.lb || 0;
            return t && 0 < t.length && t.end(0) !== e && (e = t.end(0), this.s.lb = e), u.rb(0, e)
        },t.volume = function (t) {
            return t !== b ? (t = Math.max(0, Math.min(1, parseFloat(t))), this.s.volume = t, J(this, "setVolume", t), u.dd(t), this) : (t = parseFloat(I(this, "volume")), isNaN(t) ? 1 : t)
        },t.muted = function (t) {
            return t !== b ? (J(this, "setMuted", t), this) : I(this, "muted") || l
        },t.Qa = function () {
            return I(this, "supportsFullScreen") || l
        },t.Pa = function () {
            var t = u.Mb.Pa;
            return this.F = f, t ? (u.d(document, t.tb, u.bind(this, function () {
                this.F = document[t.F], this.F === l && u.t(document, t.tb, arguments.callee), this.k("fullscreenchange")
            })), this.b[t.sc]()) : this.h.Qa() ? J(this, "enterFullScreen") : (this.Qc = f, this.Lc = document.documentElement.style.overflow, u.d(document, "keydown", u.bind(this, this.gc)), document.documentElement.style.overflow = "hidden", u.p(document.body, "vjs-full-window"), this.k("enterFullWindow"), this.k("fullscreenchange")), this
        },t.gc = function (t) {
            27 === t.keyCode && (this.F === f ? K(this) : L(this))
        },t.src = function (t) {
            if (t instanceof Array) {
                var e;
                t:{
                    e = t;
                    for (var n = 0, i = this.f.techOrder; n < i.length; n++) {
                        var o = u.Y(i[n]), s = window.videojs[o];
                        if (s.isSupported())for (var r = 0, a = e; r < a.length; r++) {
                            var c = a[r];
                            if (s.canPlaySource(c)) {
                                e = {source: c, h: o};
                                break t
                            }
                        }
                    }
                    e = l
                }
                e ? (t = e.source, e = e.h, e == this.ua ? this.src(t) : F(this, e, t)) : this.b.appendChild(u.e("p", {innerHTML: 'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="http://bit.ly/ccMUEC">Chrome</a> or download the latest <a href="http://adobe.ly/mwfN1">Adobe Flash Player</a>.'}))
            } else t instanceof Object ? this.src(window.videojs[this.ua].canPlaySource(t) ? t.src : [t]) : (this.s.src = t, this.Z ? (J(this, "src", t), "auto" == this.f.preload && this.load(), this.f.autoplay && this.play()) : this.M(function () {
                this.src(t)
            }));
            return this
        },t.load = function () {
            return J(this, "load"), this
        },t.currentSrc = function () {
            return I(this, "currentSrc") || this.s.src || ""
        },t.Ma = function (t) {
            return t !== b ? (J(this, "setPreload", t), this.f.preload = t, this) : I(this, "preload")
        },t.autoplay = function (t) {
            return t !== b ? (J(this, "setAutoplay", t), this.f.autoplay = t, this) : I(this, "autoplay")
        },t.loop = function (t) {
            return t !== b ? (J(this, "setLoop", t), this.f.loop = t, this) : I(this, "loop")
        },t.poster = function (t) {
            return t !== b && (this.qc = t), this.qc
        },t.controls = function (t) {
            return t !== b && this.Da !== t && (this.Da = !!t, this.k("controlschange")), this.Da
        },t.error = function () {
            return I(this, "error")
        };
        var M, N, O;
        O = document.createElement("div"), N = {}, O.rd !== b ? (N.sc = "requestFullscreen", N.nb = "exitFullscreen", N.tb = "fullscreenchange", N.F = "fullScreen") : (document.mozCancelFullScreen ? (M = "moz", N.F = M + "FullScreen") : (M = "webkit", N.F = M + "IsFullScreen"), O[M + "RequestFullScreen"] && (N.sc = M + "RequestFullScreen", N.nb = M + "CancelFullScreen"), N.tb = M + "fullscreenchange"), document[N.nb] && (u.Mb.Pa = N), u.ba = u.c.extend({
            g: function (t, e) {
                u.c.call(this, t, e), t.controls() || this.disable(), t.Q("play", u.bind(this, function () {
                    var t, e = u.bind(this, this.ha), n = u.bind(this, this.Fa);
                    this.ha(), "ontouchstart"in window || (this.a.d("mouseover", e), this.a.d("mouseout", n), this.a.d("pause", u.bind(this, this.nc)), this.a.d("play", u.bind(this, this.Sa))), t = l, this.a.d("touchstart", function () {
                        t = f
                    }), this.a.d("touchmove", function () {
                        t = l
                    }), this.a.d("touchend", u.bind(this, function (e) {
                        var n;
                        t && (n = this.r().className.search("fade-in"), -1 !== n ? this.Fa() : this.ha()), t = l, this.a.paused() || e.preventDefault()
                    }))
                }))
            }
        }), u.ba.prototype.f = {
            wd: "play",
            children: {
                playToggle: {},
                currentTimeDisplay: {},
                timeDivider: {},
                durationDisplay: {},
                remainingTimeDisplay: {},
                progressControl: {},
                fullscreenToggle: {},
                volumeControl: {},
                muteToggle: {}
            }
        }, u.ba.prototype.e = function () {
            return u.e("div", {className: "vjs-control-bar"})
        }, u.ba.prototype.ha = function () {
            u.c.prototype.ha.call(this), this.a.k("controlsvisible")
        }, u.ba.prototype.Fa = function () {
            u.c.prototype.Fa.call(this), this.a.k("controlshidden")
        }, u.Vb = u.o.extend({
            g: function (t, e) {
                u.o.call(this, t, e), t.d("play", u.bind(this, this.Ib)), t.d("pause", u.bind(this, this.Hb))
            }
        }), t = u.Vb.prototype, t.na = "Play", t.P = function () {
            return "vjs-play-control " + u.o.prototype.P.call(this)
        }, t.n = function () {
            this.a.paused() ? this.a.play() : this.a.pause()
        }, t.Ib = function () {
            u.w(this.b, "vjs-paused"), u.p(this.b, "vjs-playing"), this.b.children[0].children[0].innerHTML = "Pause"
        }, t.Hb = function () {
            u.w(this.b, "vjs-playing"), u.p(this.b, "vjs-paused"), this.b.children[0].children[0].innerHTML = "Play"
        }, u.Wa = u.c.extend({
            g: function (t, e) {
                u.c.call(this, t, e), t.d("timeupdate", u.bind(this, this.xa))
            }
        }), u.Wa.prototype.e = function () {
            var t = u.c.prototype.e.call(this, "div", {className: "vjs-current-time vjs-time-controls vjs-control"});
            return this.content = u.e("div", {
                className: "vjs-current-time-display",
                innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
                "aria-live": "off"
            }), t.appendChild(u.e("div").appendChild(this.content)), t
        }, u.Wa.prototype.xa = function () {
            var t = this.a.Lb ? this.a.s.currentTime : this.a.currentTime();
            this.content.innerHTML = '<span class="vjs-control-text">Current Time </span>' + u.Ga(t, this.a.duration())
        }, u.Xa = u.c.extend({
            g: function (t, e) {
                u.c.call(this, t, e), t.d("timeupdate", u.bind(this, this.xa))
            }
        }), u.Xa.prototype.e = function () {
            var t = u.c.prototype.e.call(this, "div", {className: "vjs-duration vjs-time-controls vjs-control"});
            return this.content = u.e("div", {
                className: "vjs-duration-display",
                innerHTML: '<span class="vjs-control-text">Duration Time </span>0:00',
                "aria-live": "off"
            }), t.appendChild(u.e("div").appendChild(this.content)), t
        }, u.Xa.prototype.xa = function () {
            this.a.duration() && (this.content.innerHTML = '<span class="vjs-control-text">Duration Time </span>' + u.Ga(this.a.duration()))
        }, u.Zb = u.c.extend({
            g: function (t, e) {
                u.c.call(this, t, e)
            }
        }), u.Zb.prototype.e = function () {
            return u.c.prototype.e.call(this, "div", {
                className: "vjs-time-divider",
                innerHTML: "<div><span>/</span></div>"
            })
        }, u.eb = u.c.extend({
            g: function (t, e) {
                u.c.call(this, t, e), t.d("timeupdate", u.bind(this, this.xa))
            }
        }), u.eb.prototype.e = function () {
            var t = u.c.prototype.e.call(this, "div", {className: "vjs-remaining-time vjs-time-controls vjs-control"});
            return this.content = u.e("div", {
                className: "vjs-remaining-time-display",
                innerHTML: '<span class="vjs-control-text">Remaining Time </span>-0:00',
                "aria-live": "off"
            }), t.appendChild(u.e("div").appendChild(this.content)), t
        }, u.eb.prototype.xa = function () {
            this.a.duration() && this.a.duration() && (this.content.innerHTML = '<span class="vjs-control-text">Remaining Time </span>-' + u.Ga(this.a.duration() - this.a.currentTime()))
        }, u.za = u.o.extend({
            g: function (t, e) {
                u.o.call(this, t, e)
            }
        }), u.za.prototype.na = "Fullscreen", u.za.prototype.P = function () {
            return "vjs-fullscreen-control " + u.o.prototype.P.call(this)
        }, u.za.prototype.n = function () {
            this.a.F ? (K(this.a), this.b.children[0].children[0].innerHTML = "Fullscreen") : (this.a.Pa(), this.b.children[0].children[0].innerHTML = "Non-Fullscreen")
        }, u.cb = u.c.extend({
            g: function (t, e) {
                u.c.call(this, t, e)
            }
        }), u.cb.prototype.f = {children: {seekBar: {}}}, u.cb.prototype.e = function () {
            return u.c.prototype.e.call(this, "div", {className: "vjs-progress-control vjs-control"})
        }, u.Wb = u.J.extend({
            g: function (t, e) {
                u.J.call(this, t, e), t.d("timeupdate", u.bind(this, this.wa)), t.M(u.bind(this, this.wa))
            }
        }), t = u.Wb.prototype, t.f = {
            children: {loadProgressBar: {}, playProgressBar: {}, seekHandle: {}},
            barName: "playProgressBar",
            handleName: "seekHandle"
        }, t.pc = "timeupdate", t.e = function () {
            return u.J.prototype.e.call(this, "div", {
                className: "vjs-progress-holder",
                "aria-label": "video progress bar"
            })
        }, t.wa = function () {
            var t = this.a.Lb ? this.a.s.currentTime : this.a.currentTime();
            this.b.setAttribute("aria-valuenow", u.round(100 * this.wb(), 2)), this.b.setAttribute("aria-valuetext", u.Ga(t, this.a.duration()))
        }, t.wb = function () {
            return this.a.currentTime() / this.a.duration()
        }, t.Ka = function (t) {
            u.J.prototype.Ka.call(this, t), this.a.Lb = f, this.nd = !this.a.paused(), this.a.pause()
        }, t.Fb = function (t) {
            t = C(this, t) * this.a.duration(), t == this.a.duration() && (t -= .1), this.a.currentTime(t)
        }, t.Gb = function (t) {
            u.J.prototype.Gb.call(this, t), this.a.Lb = l, this.nd && this.a.play()
        }, t.vc = function () {
            this.a.currentTime(this.a.currentTime() + 5)
        }, t.uc = function () {
            this.a.currentTime(this.a.currentTime() - 5)
        }, u.$a = u.c.extend({
            g: function (t, e) {
                u.c.call(this, t, e), t.d("progress", u.bind(this, this.update))
            }
        }), u.$a.prototype.e = function () {
            return u.c.prototype.e.call(this, "div", {
                className: "vjs-load-progress",
                innerHTML: '<span class="vjs-control-text">Loaded: 0%</span>'
            })
        }, u.$a.prototype.update = function () {
            this.b.style && (this.b.style.width = u.round(100 * H(this.a), 2) + "%")
        }, u.Ub = u.c.extend({
            g: function (t, e) {
                u.c.call(this, t, e)
            }
        }), u.Ub.prototype.e = function () {
            return u.c.prototype.e.call(this, "div", {
                className: "vjs-play-progress",
                innerHTML: '<span class="vjs-control-text">Progress: 0%</span>'
            })
        }, u.fb = u.fa.extend(), u.fb.prototype.defaultValue = "00:00", u.fb.prototype.e = function () {
            return u.fa.prototype.e.call(this, "div", {className: "vjs-seek-handle"})
        }, u.ib = u.c.extend({
            g: function (t, e) {
                u.c.call(this, t, e), t.h && t.h.j && t.h.j.T === l && this.p("vjs-hidden"), t.d("loadstart", u.bind(this, function () {
                    t.h.j && t.h.j.T === l ? this.p("vjs-hidden") : this.w("vjs-hidden")
                }))
            }
        }), u.ib.prototype.f = {children: {volumeBar: {}}}, u.ib.prototype.e = function () {
            return u.c.prototype.e.call(this, "div", {className: "vjs-volume-control vjs-control"})
        }, u.hb = u.J.extend({
            g: function (t, e) {
                u.J.call(this, t, e), t.d("volumechange", u.bind(this, this.wa)), t.M(u.bind(this, this.wa)), setTimeout(u.bind(this, this.update), 0)
            }
        }), t = u.hb.prototype, t.wa = function () {
            this.b.setAttribute("aria-valuenow", u.round(100 * this.a.volume(), 2)), this.b.setAttribute("aria-valuetext", u.round(100 * this.a.volume(), 2) + "%")
        }, t.f = {
            children: {volumeLevel: {}, volumeHandle: {}},
            barName: "volumeLevel",
            handleName: "volumeHandle"
        }, t.pc = "volumechange", t.e = function () {
            return u.J.prototype.e.call(this, "div", {className: "vjs-volume-bar", "aria-label": "volume level"})
        }, t.Fb = function (t) {
            this.a.volume(C(this, t))
        }, t.wb = function () {
            return this.a.muted() ? 0 : this.a.volume()
        }, t.vc = function () {
            this.a.volume(this.a.volume() + .1)
        }, t.uc = function () {
            this.a.volume(this.a.volume() - .1)
        }, u.$b = u.c.extend({
            g: function (t, e) {
                u.c.call(this, t, e)
            }
        }), u.$b.prototype.e = function () {
            return u.c.prototype.e.call(this, "div", {
                className: "vjs-volume-level",
                innerHTML: '<span class="vjs-control-text"></span>'
            })
        }, u.jb = u.fa.extend(), u.jb.prototype.defaultValue = "00:00", u.jb.prototype.e = function () {
            return u.fa.prototype.e.call(this, "div", {className: "vjs-volume-handle"})
        }, u.da = u.o.extend({
            g: function (t, e) {
                u.o.call(this, t, e), t.d("volumechange", u.bind(this, this.update)), t.h && t.h.j && t.h.j.T === l && this.p("vjs-hidden"), t.d("loadstart", u.bind(this, function () {
                    t.h.j && t.h.j.T === l ? this.p("vjs-hidden") : this.w("vjs-hidden")
                }))
            }
        }), u.da.prototype.e = function () {
            return u.o.prototype.e.call(this, "div", {
                className: "vjs-mute-control vjs-control",
                innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
            })
        }, u.da.prototype.n = function () {
            this.a.muted(this.a.muted() ? l : f)
        }, u.da.prototype.update = function () {
            var t = this.a.volume(), e = 3;
            for (0 === t || this.a.muted() ? e = 0 : .33 > t ? e = 1 : .67 > t && (e = 2), this.a.muted() ? "Unmute" != this.b.children[0].children[0].innerHTML && (this.b.children[0].children[0].innerHTML = "Unmute") : "Mute" != this.b.children[0].children[0].innerHTML && (this.b.children[0].children[0].innerHTML = "Mute"), t = 0; 4 > t; t++)u.w(this.b, "vjs-vol-" + t);
            u.p(this.b, "vjs-vol-" + e)
        }, u.Ba = u.ca.extend({
            g: function (t, e) {
                u.ca.call(this, t, e), t.d("volumechange", u.bind(this, this.update)), t.h && t.h.j && t.h.j.T === l && this.p("vjs-hidden"), t.d("loadstart", u.bind(this, function () {
                    t.h.j && t.h.j.T === l ? this.p("vjs-hidden") : this.w("vjs-hidden")
                })), this.p("vjs-menu-button")
            }
        }), u.Ba.prototype.Ea = function () {
            var t = new u.la(this.a, {Ic: "div"}), e = new u.hb(this.a, u.i.B({md: f}, this.f.zd));
            return t.X(e), t
        }, u.Ba.prototype.n = function () {
            u.da.prototype.n.call(this), u.ca.prototype.n.call(this)
        }, u.Ba.prototype.e = function () {
            return u.o.prototype.e.call(this, "div", {
                className: "vjs-volume-menu-button vjs-menu-button vjs-control",
                innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
            })
        }, u.Ba.prototype.update = u.da.prototype.update, u.bb = u.o.extend({
            g: function (t, e) {
                u.o.call(this, t, e), (!t.poster() || !t.controls()) && this.v(), t.d("play", u.bind(this, this.v))
            }
        }), u.bb.prototype.e = function () {
            var t = u.e("div", {className: "vjs-poster", tabIndex: -1}), e = this.a.poster();
            return e && ("backgroundSize"in t.style ? t.style.backgroundImage = 'url("' + e + '")' : t.appendChild(u.e("img", {src: e}))), t
        }, u.bb.prototype.n = function () {
            this.a.play()
        }, u.Tb = u.c.extend({
            g: function (t, e) {
                u.c.call(this, t, e), t.d("canplay", u.bind(this, this.v)), t.d("canplaythrough", u.bind(this, this.v)), t.d("playing", u.bind(this, this.v)), t.d("seeked", u.bind(this, this.v)), t.d("seeking", u.bind(this, this.show)), t.d("seeked", u.bind(this, this.v)), t.d("error", u.bind(this, this.show)), t.d("waiting", u.bind(this, this.show))
            }
        }), u.Tb.prototype.e = function () {
            return u.c.prototype.e.call(this, "div", {className: "vjs-loading-spinner"})
        }, u.Ua = u.o.extend({
            g: function (t, e) {
                u.o.call(this, t, e), t.controls() || this.v(), t.d("play", u.bind(this, this.v))
            }
        }), u.Ua.prototype.e = function () {
            return u.o.prototype.e.call(this, "div", {
                className: "vjs-big-play-button",
                innerHTML: "<span></span>",
                "aria-label": "play video"
            })
        }, u.Ua.prototype.n = function () {
            this.a.play()
        }, u.q = u.c.extend({
            g: function (t, e, n) {
                u.c.call(this, t, e, n)
            }
        }), u.q.prototype.n = u.Za ? m() : function () {
            this.a.controls() && (this.a.paused() ? this.a.play() : this.a.pause())
        }, u.q.prototype.j = {
            T: f,
            hc: l,
            Kb: l,
            Nb: l
        }, u.media = {}, u.media.Ta = "play pause paused currentTime setCurrentTime duration buffered volume setVolume muted setMuted width height supportsFullScreen enterFullScreen src load currentSrc preload setPreload autoplay setAutoplay loop setLoop error networkState readyState seeking initialTime startOffsetTime played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks defaultPlaybackRate playbackRate mediaGroup controller controls defaultMuted".split(" ");
        for (var i = u.media.Ta.length - 1; i >= 0; i--)u.q.prototype[u.media.Ta[i]] = da();
        u.m = u.q.extend({
            g: function (t, e, n) {
                for (this.j.T = u.m.Hc(), this.j.Sc = !u.Sb, this.j.hc = f, u.q.call(this, t, e, n), (e = e.source) && this.b.currentSrc == e.src ? t.k("loadstart") : e && (this.b.src = e.src), t.M(function () {
                    this.f.autoplay && this.paused() && (this.N.poster = h, this.play())
                }), this.d("click", this.n), t = u.m.Ya.length - 1; t >= 0; t--)u.d(this.b, u.m.Ya[t], u.bind(this.a, this.Nc));
                this.Ra()
            }
        }), t = u.m.prototype, t.C = function () {
            u.q.prototype.C.call(this)
        }, t.e = function () {
            var t = this.a, e = t.N;
            e && this.j.Sc !== l || (e ? (t.r().removeChild(e), e = e.cloneNode(l)) : e = u.e("video", {
                id: t.id() + "_html5_api",
                className: "vjs-tech"
            }), e.player = t, u.xb(e, t.r()));
            for (var n = ["autoplay", "preload", "loop", "muted"], i = n.length - 1; i >= 0; i--) {
                var o = n[i];
                t.f[o] !== h && (e[o] = t.f[o])
            }
            return e
        }, t.Nc = function (t) {
            this.k(t), t.stopPropagation()
        }, t.play = function () {
            this.b.play()
        }, t.pause = function () {
            this.b.pause()
        }, t.paused = function () {
            return this.b.paused
        }, t.currentTime = function () {
            return this.b.currentTime
        }, t.cd = function (t) {
            try {
                this.b.currentTime = t
            } catch (e) {
                u.log(e, "Video is not ready. (Video.js)")
            }
        }, t.duration = function () {
            return this.b.duration || 0
        }, t.buffered = function () {
            return this.b.buffered
        }, t.volume = function () {
            return this.b.volume
        }, t.hd = function (t) {
            this.b.volume = t
        }, t.muted = function () {
            return this.b.muted
        }, t.fd = function (t) {
            this.b.muted = t
        }, t.width = function () {
            return this.b.offsetWidth
        }, t.height = function () {
            return this.b.offsetHeight
        }, t.Qa = function () {
            return "function" != typeof this.b.webkitEnterFullScreen || !/Android/.test(u.O) && /Chrome|Mac OS X 10.5/.test(u.O) ? l : f
        }, t.src = function (t) {
            this.b.src = t
        }, t.load = function () {
            this.b.load()
        }, t.currentSrc = function () {
            return this.b.currentSrc
        }, t.Ma = function () {
            return this.b.Ma
        }, t.gd = function (t) {
            this.b.Ma = t
        }, t.autoplay = function () {
            return this.b.autoplay
        }, t.bd = function (t) {
            this.b.autoplay = t
        }, t.loop = function () {
            return this.b.loop
        }, t.ed = function (t) {
            this.b.loop = t
        }, t.error = function () {
            return this.b.error
        }, u.m.isSupported = function () {
            return !!document.createElement("video").canPlayType
        }, u.m.mb = function (t) {
            return !!document.createElement("video").canPlayType(t.type)
        }, u.m.Hc = function () {
            var t = u.gb.volume;
            return u.gb.volume = t / 2 + .1, t !== u.gb.volume
        }, u.m.Ya = "loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" "), u.Za && 3 > u.yc && (document.createElement("video").constructor.prototype.canPlayType = function (t) {
            return t && -1 != t.toLowerCase().indexOf("video/mp4") ? "maybe" : ""
        }), u.l = u.q.extend({
            g: function (t, e, n) {
                u.q.call(this, t, e, n), n = e.source;
                var i = e.parentEl, o = this.b = u.e("div", {id: t.id() + "_temp_flash"}), s = t.id() + "_flash_api";
                t = t.f;
                var r = u.i.B({
                    readyFunction: "videojs.Flash.onReady",
                    eventProxyFunction: "videojs.Flash.onEvent",
                    errorEventProxyFunction: "videojs.Flash.onError",
                    autoplay: t.autoplay,
                    preload: t.Ma,
                    loop: t.loop,
                    muted: t.muted
                }, e.flashVars), a = u.i.B({wmode: "opaque", bgcolor: "#000000"}, e.params), l = u.i.B({
                    id: s,
                    name: s,
                    "class": "vjs-tech"
                }, e.attributes);
                if (n && (r.src = encodeURIComponent(u.ic(n.src))), u.xb(o, i), e.startTime && this.M(function () {
                        this.load(), this.play(), this.currentTime(e.startTime)
                    }), e.iFrameMode !== f || u.zc)u.l.Mc(e.swf, o, r, a, l); else {
                    var c = u.e("iframe", {
                        id: s + "_iframe",
                        name: s + "_iframe",
                        className: "vjs-tech",
                        scrolling: "no",
                        marginWidth: 0,
                        marginHeight: 0,
                        frameBorder: 0
                    });
                    r.readyFunction = "ready", r.eventProxyFunction = "events", r.errorEventProxyFunction = "errors", u.d(c, "load", u.bind(this, function () {
                        var t, n = c.contentWindow;
                        t = c.contentDocument ? c.contentDocument : c.contentWindow.document, t.write(u.l.jc(e.swf, r, a, l)), n.player = this.a, n.ready = u.bind(this.a, function (e) {
                            e = t.getElementById(e);
                            var n = this.h;
                            n.b = e, u.d(e, "click", n.bind(n.n)), u.l.ob(n)
                        }), n.events = u.bind(this.a, function (t, e) {
                            this && "flash" === this.ua && this.k(e)
                        }), n.errors = u.bind(this.a, function (t, e) {
                            u.log("Flash Error", e)
                        })
                    })), o.parentNode.replaceChild(c, o)
                }
            }
        }), t = u.l.prototype, t.C = function () {
            u.q.prototype.C.call(this)
        }, t.play = function () {
            this.b.vjs_play()
        }, t.pause = function () {
            this.b.vjs_pause()
        }, t.src = function (t) {
            if (t = u.ic(t), this.b.vjs_src(t), this.a.autoplay()) {
                var e = this;
                setTimeout(function () {
                    e.play()
                }, 0)
            }
        }, t.load = function () {
            this.b.vjs_load()
        }, t.poster = function () {
            this.b.vjs_getProperty("poster")
        }, t.buffered = function () {
            return u.rb(0, this.b.vjs_getProperty("buffered"))
        }, t.Qa = r(l);
        var P = u.l.prototype, Q = "preload currentTime defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "), R = "error currentSrc networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" "), S;
        for (S = 0; S < Q.length; S++)T(Q[S]), ea();
        for (S = 0; S < R.length; S++)T(R[S]);
        if (u.l.isSupported = function () {
                return 10 <= u.l.version()[0]
            }, u.l.mb = function (t) {
                return t.type in u.l.Pc ? "maybe" : void 0
            }, u.l.Pc = {
                "video/flv": "FLV",
                "video/x-flv": "FLV",
                "video/mp4": "MP4",
                "video/m4v": "MP4"
            }, u.l.onReady = function (t) {
                t = u.r(t);
                var e = t.player || t.parentNode.player, n = e.h;
                t.player = e, n.b = t, n.d("click", n.n), u.l.ob(n)
            }, u.l.ob = function (t) {
                t.r().vjs_getProperty ? t.Ra() : setTimeout(function () {
                    u.l.ob(t)
                }, 50)
            }, u.l.onEvent = function (t, e) {
                u.r(t).player.k(e)
            }, u.l.onError = function (t, e) {
                u.r(t).player.k("error"), u.log("Flash Error", e, t)
            }, u.l.version = function () {
                var t = "0,0,0";
                try {
                    t = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
                } catch (e) {
                    try {
                        navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (t = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
                    } catch (n) {
                    }
                }
                return t.split(",")
            }, u.l.Mc = function (t, e, n, i, o) {
                t = u.l.jc(t, n, i, o), t = u.e("div", {innerHTML: t}).childNodes[0], n = e.parentNode, e.parentNode.replaceChild(t, e);
                var s = n.childNodes[0];
                setTimeout(function () {
                    s.style.display = "block"
                }, 1e3)
            }, u.l.jc = function (t, e, n, i) {
                var o = "", s = "", r = "";
                return e && u.i.qa(e, function (t, e) {
                    o += t + "=" + e + "&amp;"
                }), n = u.i.B({
                    movie: t,
                    flashvars: o,
                    allowScriptAccess: "always",
                    allowNetworking: "all"
                }, n), u.i.qa(n, function (t, e) {
                    s += '<param name="' + t + '" value="' + e + '" />'
                }), i = u.i.B({data: t, width: "100%", height: "100%"}, i), u.i.qa(i, function (t, e) {
                    r += t + '="' + e + '" '
                }), '<object type="application/x-shockwave-flash"' + r + ">" + s + "</object>"
            }, u.Dc = u.c.extend({
                g: function (t, e, n) {
                    if (u.c.call(this, t, e, n), t.f.sources && 0 !== t.f.sources.length)t.src(t.f.sources); else for (e = 0, n = t.f.techOrder; e < n.length; e++) {
                        var i = u.Y(n[e]), o = window.videojs[i];
                        if (o && o.isSupported()) {
                            F(t, i);
                            break
                        }
                    }
                }
            }), u.U = u.c.extend({
                g: function (t, e) {
                    u.c.call(this, t, e), this.L = e.id || "vjs_" + e.kind + "_" + e.language + "_" + u.u++, this.tc = e.src, this.Jc = e["default"] || e.dflt, this.kd = e.title, this.ud = e.srclang, this.Rc = e.label, this.ga = [], this.ac = [], this.ia = this.ja = 0, this.a.d("fullscreenchange", u.bind(this, this.Ec))
                }
            }), t = u.U.prototype, t.H = p("A"), t.src = p("tc"), t.sb = p("Jc"), t.title = p("kd"), t.label = p("Rc"), t.readyState = p("ja"), t.mode = p("ia"), t.Ec = function () {
                this.b.style.fontSize = this.a.F ? 140 * (screen.width / this.a.width()) + "%" : ""
            }, t.e = function () {
                return u.c.prototype.e.call(this, "div", {className: "vjs-" + this.A + " vjs-text-track"})
            }, t.show = function () {
                W(this), this.ia = 2, u.c.prototype.show.call(this)
            }, t.v = function () {
                W(this), this.ia = 1, u.c.prototype.v.call(this)
            }, t.disable = function () {
                2 == this.ia && this.v(), this.a.t("timeupdate", u.bind(this, this.update, this.L)), this.a.t("ended", u.bind(this, this.reset, this.L)), this.reset(), this.a.R.textTrackDisplay.removeChild(this), this.ia = 0
            }, t.load = function () {
                0 === this.ja && (this.ja = 1, u.get(this.tc, u.bind(this, this.Zc), u.bind(this, this.Eb)))
            }, t.Eb = function (t) {
                this.error = t, this.ja = 3, this.k("error")
            }, t.Zc = function (t) {
                var e, n;
                t = t.split("\n");
                for (var i = "", o = 1, s = t.length; s > o; o++)if (i = u.trim(t[o])) {
                    for (-1 == i.indexOf("-->") ? (e = i, i = u.trim(t[++o])) : e = this.ga.length, e = {
                        id: e,
                        index: this.ga.length
                    }, n = i.split(" --> "), e.startTime = X(n[0]), e.ra = X(n[1]), n = []; t[++o] && (i = u.trim(t[o]));)n.push(i);
                    e.text = n.join("<br/>"), this.ga.push(e)
                }
                this.ja = 2, this.k("loaded")
            }, t.update = function () {
                if (0 < this.ga.length) {
                    var t = this.a.currentTime();
                    if (this.Jb === b || t < this.Jb || this.Ha <= t) {
                        var e, n, i, o, s = this.ga, r = this.a.duration(), a = 0, c = l, u = [];
                        for (t >= this.Ha || this.Ha === b ? o = this.ub !== b ? this.ub : 0 : (c = f, o = this.Bb !== b ? this.Bb : s.length - 1); ;) {
                            if (i = s[o], i.ra <= t)a = Math.max(a, i.ra), i.Ca && (i.Ca = l); else if (t < i.startTime) {
                                if (r = Math.min(r, i.startTime), i.Ca && (i.Ca = l), !c)break
                            } else c ? (u.splice(0, 0, i), n === b && (n = o), e = o) : (u.push(i), e === b && (e = o), n = o), r = Math.min(r, i.ra), a = Math.max(a, i.startTime), i.Ca = f;
                            if (c) {
                                if (0 === o)break;
                                o--
                            } else {
                                if (o === s.length - 1)break;
                                o++
                            }
                        }
                        for (this.ac = u, this.Ha = r, this.Jb = a, this.ub = e, this.Bb = n, t = this.ac, s = "", r = 0, a = t.length; a > r; r++)s += '<span class="vjs-tt-cue">' + t[r].text + "</span>";
                        this.b.innerHTML = s, this.k("cuechange")
                    }
                }
            }, t.reset = function () {
                this.Ha = 0, this.Jb = this.a.duration(), this.Bb = this.ub = 0
            }, u.Pb = u.U.extend(), u.Pb.prototype.A = "captions", u.Xb = u.U.extend(), u.Xb.prototype.A = "subtitles", u.Rb = u.U.extend(), u.Rb.prototype.A = "chapters", u.Yb = u.c.extend({
                g: function (t, e, n) {
                    if (u.c.call(this, t, e, n), t.f.tracks && 0 < t.f.tracks.length) {
                        e = this.a, t = t.f.tracks;
                        var i;
                        for (n = 0; n < t.length; n++) {
                            i = t[n];
                            var o = e, s = i.kind, r = i.label, a = i.language, l = i;
                            i = o.va = o.va || [], l = l || {}, l.kind = s, l.label = r, l.language = a, s = u.Y(s || "subtitles"), o = new window.videojs[s + "Track"](o, l), i.push(o)
                        }
                    }
                }
            }), u.Yb.prototype.e = function () {
                return u.c.prototype.e.call(this, "div", {className: "vjs-text-track-display"})
            }, u.W = u.I.extend({
                g: function (t, e) {
                    var n = this.aa = e.track;
                    e.label = n.label(), e.selected = n.sb(), u.I.call(this, t, e), this.a.d(n.H() + "trackchange", u.bind(this, this.update))
                }
            }), u.W.prototype.n = function () {
                u.I.prototype.n.call(this), V(this.a, this.aa.L, this.aa.H())
            }, u.W.prototype.update = function () {
                this.selected(2 == this.aa.mode() ? f : l)
            }, u.ab = u.W.extend({
                g: function (t, e) {
                    e.track = {
                        H: function () {
                            return e.kind
                        }, oc: t, label: function () {
                            return e.kind + " off"
                        }, sb: r(l), mode: r(l)
                    }, u.W.call(this, t, e), this.selected(f)
                }
            }), u.ab.prototype.n = function () {
                u.W.prototype.n.call(this), V(this.a, this.aa.L, this.aa.H())
            }, u.ab.prototype.update = function () {
                for (var t, e = U(this.a), n = 0, i = e.length, o = f; i > n; n++)t = e[n], t.H() == this.aa.H() && 2 == t.mode() && (o = l);
                this.selected(o ? f : l)
            }, u.V = u.ca.extend({
                g: function (t, e) {
                    u.ca.call(this, t, e), 1 >= this.G.length && this.v()
                }
            }), u.V.prototype.qb = function () {
                var t, e = [];
                e.push(new u.ab(this.a, {kind: this.A}));
                for (var n = 0; n < U(this.a).length; n++)t = U(this.a)[n], t.H() === this.A && e.push(new u.W(this.a, {track: t}));
                return e
            }, u.ya = u.V.extend({
                g: function (t, e, n) {
                    u.V.call(this, t, e, n), this.b.setAttribute("aria-label", "Captions Menu")
                }
            }), u.ya.prototype.A = "captions", u.ya.prototype.na = "Captions", u.ya.prototype.className = "vjs-captions-button", u.Aa = u.V.extend({
                g: function (t, e, n) {
                    u.V.call(this, t, e, n), this.b.setAttribute("aria-label", "Subtitles Menu")
                }
            }), u.Aa.prototype.A = "subtitles", u.Aa.prototype.na = "Subtitles", u.Aa.prototype.className = "vjs-subtitles-button", u.Qb = u.V.extend({
                g: function (t, e, n) {
                    u.V.call(this, t, e, n), this.b.setAttribute("aria-label", "Chapters Menu")
                }
            }), t = u.Qb.prototype, t.A = "chapters", t.na = "Chapters", t.className = "vjs-chapters-button", t.qb = function () {
                for (var t, e = [], n = 0; n < U(this.a).length; n++)t = U(this.a)[n], t.H() === this.A && e.push(new u.W(this.a, {track: t}));
                return e
            }, t.Ea = function () {
                for (var t, e, n = U(this.a), i = 0, o = n.length, s = this.G = []; o > i; i++)if (t = n[i], t.H() == this.A && t.sb()) {
                    if (2 > t.readyState())return this.sd = t, void t.d("loaded", u.bind(this, this.Ea));
                    e = t;
                    break
                }
                if (n = this.sa = new u.la(this.a), n.b.appendChild(u.e("li", {
                        className: "vjs-menu-title",
                        innerHTML: u.Y(this.A),
                        jd: -1
                    })), e) {
                    t = e.ga;
                    for (var r, i = 0, o = t.length; o > i; i++)r = t[i], r = new u.Va(this.a, {
                        track: e,
                        cue: r
                    }), s.push(r), n.X(r)
                }
                return 0 < this.G.length && this.show(), n
            }, u.Va = u.I.extend({
                g: function (t, e) {
                    var n = this.aa = e.track, i = this.cue = e.cue, o = t.currentTime();
                    e.label = i.text, e.selected = i.startTime <= o && o < i.ra, u.I.call(this, t, e), n.d("cuechange", u.bind(this, this.update))
                }
            }), u.Va.prototype.n = function () {
                u.I.prototype.n.call(this), this.a.currentTime(this.cue.startTime), this.update(this.cue.startTime)
            }, u.Va.prototype.update = function () {
                var t = this.cue, e = this.a.currentTime();
                this.selected(t.startTime <= e && e < t.ra ? f : l)
            }, u.i.B(u.ba.prototype.f.children, {
                subtitlesButton: {},
                captionsButton: {},
                chaptersButton: {}
            }), "undefined" != typeof window.JSON && "function" === window.JSON.parse)u.JSON = window.JSON; else {
            u.JSON = {};
            var Y = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
            u.JSON.parse = function (a, c) {
                function d(t, e) {
                    var n, i, o = t[e];
                    if (o && "object" == typeof o)for (n in o)Object.prototype.hasOwnProperty.call(o, n) && (i = d(o, n), i !== b ? o[n] = i : delete o[n]);
                    return c.call(t, e, o)
                }

                var e;
                if (a = String(a), Y.lastIndex = 0, Y.test(a) && (a = a.replace(Y, function (t) {
                        return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                    })), /^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))return e = eval("(" + a + ")"), "function" == typeof c ? d({"": e}, "") : e;
                throw new SyntaxError("JSON.parse(): invalid or malformed JSON data")
            }
        }
        u.bc = function () {
            var t, e, n = document.getElementsByTagName("video");
            if (n && 0 < n.length)for (var i = 0, o = n.length; o > i; i++) {
                if (!(e = n[i]) || !e.getAttribute) {
                    u.kb();
                    break
                }
                e.player === b && (t = e.getAttribute("data-setup"), t !== h && (t = u.JSON.parse(t || "{}"), v(e, t)))
            } else u.od || u.kb()
        }, u.kb = function () {
            setTimeout(u.bc, 1)
        }, u.Q(window, "load", function () {
            u.od = f
        }), u.kb(), u.$c = function (t, e) {
            u.ea.prototype[t] = e
        };
        var Z = this;
        Z.pd = f, $("videojs", u), $("_V_", u), $("videojs.options", u.options), $("videojs.cache", u.oa), $("videojs.Component", u.c), u.c.prototype.dispose = u.c.prototype.C, u.c.prototype.createEl = u.c.prototype.e, u.c.prototype.el = u.c.prototype.r, u.c.prototype.addChild = u.c.prototype.X, u.c.prototype.children = u.c.prototype.children, u.c.prototype.on = u.c.prototype.d, u.c.prototype.off = u.c.prototype.t, u.c.prototype.one = u.c.prototype.Q, u.c.prototype.trigger = u.c.prototype.k, u.c.prototype.triggerReady = u.c.prototype.Ra, u.c.prototype.show = u.c.prototype.show, u.c.prototype.hide = u.c.prototype.v, u.c.prototype.width = u.c.prototype.width, u.c.prototype.height = u.c.prototype.height, u.c.prototype.dimensions = u.c.prototype.Kc, u.c.prototype.ready = u.c.prototype.M, $("videojs.Player", u.ea), u.ea.prototype.dispose = u.ea.prototype.C, $("videojs.MediaLoader", u.Dc), $("videojs.TextTrackDisplay", u.Yb), $("videojs.ControlBar", u.ba), $("videojs.Button", u.o), $("videojs.PlayToggle", u.Vb), $("videojs.FullscreenToggle", u.za), $("videojs.BigPlayButton", u.Ua), $("videojs.LoadingSpinner", u.Tb), $("videojs.CurrentTimeDisplay", u.Wa), $("videojs.DurationDisplay", u.Xa), $("videojs.TimeDivider", u.Zb), $("videojs.RemainingTimeDisplay", u.eb), $("videojs.Slider", u.J), $("videojs.ProgressControl", u.cb), $("videojs.SeekBar", u.Wb), $("videojs.LoadProgressBar", u.$a), $("videojs.PlayProgressBar", u.Ub), $("videojs.SeekHandle", u.fb), $("videojs.VolumeControl", u.ib), $("videojs.VolumeBar", u.hb), $("videojs.VolumeLevel", u.$b), $("videojs.VolumeHandle", u.jb), $("videojs.MuteToggle", u.da), $("videojs.PosterImage", u.bb), $("videojs.Menu", u.la), $("videojs.MenuItem", u.I), $("videojs.SubtitlesButton", u.Aa), $("videojs.CaptionsButton", u.ya), $("videojs.ChaptersButton", u.Qb), $("videojs.MediaTechController", u.q), u.q.prototype.features = u.q.prototype.j, u.q.prototype.j.volumeControl = u.q.prototype.j.T, u.q.prototype.j.fullscreenResize = u.q.prototype.j.hc, u.q.prototype.j.progressEvents = u.q.prototype.j.Kb, u.q.prototype.j.timeupdateEvents = u.q.prototype.j.Nb, $("videojs.Html5", u.m), u.m.Events = u.m.Ya, u.m.isSupported = u.m.isSupported, u.m.canPlaySource = u.m.mb, u.m.prototype.setCurrentTime = u.m.prototype.cd, u.m.prototype.setVolume = u.m.prototype.hd, u.m.prototype.setMuted = u.m.prototype.fd, u.m.prototype.setPreload = u.m.prototype.gd, u.m.prototype.setAutoplay = u.m.prototype.bd, u.m.prototype.setLoop = u.m.prototype.ed, $("videojs.Flash", u.l), u.l.isSupported = u.l.isSupported, u.l.canPlaySource = u.l.mb, u.l.onReady = u.l.onReady, $("videojs.TextTrack", u.U), u.U.prototype.label = u.U.prototype.label, $("videojs.CaptionsTrack", u.Pb), $("videojs.SubtitlesTrack", u.Xb), $("videojs.ChaptersTrack", u.Rb), $("videojs.autoSetup", u.bc), $("videojs.plugin", u.$c), $("videojs.createTimeRange", u.rb)
    }(), !function (t, e, n, i, o) {
        o = e.location, t.src = "//www.google-analytics.com/__utm.gif?utmwv=5.4.2&utmac=UA-16505296-2&utmn=1&utmhn=" + i(o.hostname) + "&utmsr=" + e.screen.availWidth + "x" + e.screen.availHeight + "&utmul=" + (n.language || n.userLanguage) + "&utmr=" + i(o.href) + "&utmp=" + i(o.hostname + o.pathname) + "&utmcc=__utma%3D1." + Math.floor(1e10 * Math.random()) + ".1.1.1.1%3B&utme=8(vjsv)9(v4.0.4)"
    }(new Image, window, navigator, encodeURIComponent), "undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), +function (t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap"), e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in e)if (void 0 !== t.style[n])return {end: e[n]};
        return !1
    }

    t.fn.emulateTransitionEnd = function (e) {
        var n = !1, i = this;
        t(this).one("bsTransitionEnd", function () {
            n = !0
        });
        var o = function () {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var n = t(this), o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
        })
    }

    var n = '[data-dismiss="alert"]', i = function (e) {
        t(e).on("click", n, this.close)
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.close = function (e) {
        function n() {
            r.detach().trigger("closed.bs.alert").remove()
        }

        var o = t(this), s = o.attr("data-target");
        s || (s = o.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var r = t(s);
        e && e.preventDefault(), r.length || (r = o.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function () {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.button"), s = "object" == typeof e && e;
            o || i.data("bs.button", o = new n(this, s)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }

    var n = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.5", n.DEFAULTS = {loadingText: "loading..."}, n.prototype.setState = function (e) {
        var n = "disabled", i = this.$element, o = i.is("input") ? "val" : "html", s = i.data();
        e += "Text", null == s.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy(function () {
            i[o](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function () {
        var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function () {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
        var i = t(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), t(n.target).is('input[type="radio"]') || t(n.target).is('input[type="checkbox"]') || n.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.carousel"), s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e), r = "string" == typeof e ? e : s.slide;
            o || i.data("bs.carousel", o = new n(this, s)), "number" == typeof e ? o.to(e) : r ? o[r]() : s.interval && o.pause().cycle()
        })
    }

    var n = function (e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function (t, e) {
        var n = this.getItemIndex(e), i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
        if (i && !this.options.wrap)return e;
        var o = "prev" == t ? -1 : 1, s = (n + o) % this.$items.length;
        return this.$items.eq(s)
    }, n.prototype.to = function (t) {
        var e = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function (e, i) {
        var o = this.$element.find(".item.active"), s = i || this.getItemForDirection(e, o), r = this.interval, a = "next" == e ? "left" : "right", l = this;
        if (s.hasClass("active"))return this.sliding = !1;
        var c = s[0], u = t.Event("slide.bs.carousel", {relatedTarget: c, direction: a});
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var h = t(this.$indicators.children()[this.getItemIndex(s)]);
                h && h.addClass("active")
            }
            var d = t.Event("slid.bs.carousel", {relatedTarget: c, direction: a});
            return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, o.addClass(a), s.addClass(a), o.one("bsTransitionEnd", function () {
                s.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(d)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(d)), r && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = i, this
    };
    var o = function (n) {
        var i, o = t(this), s = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var r = t.extend({}, s.data(), o.data()), a = o.attr("data-slide-to");
            a && (r.interval = !1), e.call(s, r), a && s.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }

    function n(e) {
        return this.each(function () {
            var n = t(this), o = n.data("bs.collapse"), s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !o && s.toggle && /show|hide/.test(e) && (s.toggle = !1), o || n.data("bs.collapse", o = new i(this, s)), "string" == typeof e && o[e]()
        })
    }

    var i = function (e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 350, i.DEFAULTS = {toggle: !0}, i.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, i.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
                var s = t.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    o && o.length && (n.call(o, "hide"), e || o.data("bs.collapse", null));
                    var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition)return a.call(this);
                    var l = t.camelCase(["scroll", r].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[r](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, i.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (n, i) {
            var o = t(i);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function (t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var o = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
        var o = t(this);
        o.attr("data-target") || i.preventDefault();
        var s = e(o), r = s.data("bs.collapse"), a = r ? "toggle" : o.data();
        n.call(s, a)
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function n(n) {
        n && 3 === n.which || (t(o).remove(), t(s).each(function () {
            var i = t(this), o = e(i), s = {relatedTarget: this};
            o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", s)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger("hidden.bs.dropdown", s))))
        }))
    }

    function i(e) {
        return this.each(function () {
            var n = t(this), i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new r(this)), "string" == typeof e && i[e].call(n)
        })
    }

    var o = ".dropdown-backdrop", s = '[data-toggle="dropdown"]', r = function (e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    r.VERSION = "3.3.5", r.prototype.toggle = function (i) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var s = e(o), r = s.hasClass("open");
            if (n(), !r) {
                "ontouchstart"in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var a = {relatedTarget: this};
                if (s.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented())return;
                o.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }, r.prototype.keydown = function (n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = e(i), r = o.hasClass("open");
                if (!r && 27 != n.which || r && 27 == n.which)return 27 == n.which && o.find(s).trigger("focus"), i.trigger("click");
                var a = " li:not(.disabled):visible a", l = o.find(".dropdown-menu" + a);
                if (l.length) {
                    var c = l.index(n.target);
                    38 == n.which && c > 0 && c--, 40 == n.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, r.prototype.toggle).on("keydown.bs.dropdown.data-api", s, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
}(jQuery), +function (t) {
    "use strict";
    function e(e, i) {
        return this.each(function () {
            var o = t(this), s = o.data("bs.modal"), r = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
            s || o.data("bs.modal", s = new n(this, r)), "string" == typeof e ? s[e](i) : r.show && s.show(i)
        })
    }

    var n = function (e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function (e) {
        var i = this, o = t.Event("show.bs.modal", {relatedTarget: e});
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            i.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var o = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var s = t.Event("shown.bs.modal", {relatedTarget: e});
            o ? i.$dialog.one("bsTransitionEnd", function () {
                i.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(s)
        }))
    }, n.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function (e) {
        var i = this, o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)return;
            s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function () {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : r()
        } else e && e()
    }, n.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, n.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function () {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
        var i = t(this), o = i.attr("href"), s = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")), r = s.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(o) && o}, s.data(), i.data());
        i.is("a") && n.preventDefault(), s.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(s, r, this)
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.tooltip"), s = "object" == typeof e && e;
            (o || !/destroy|hide/.test(e)) && (o || i.data("bs.tooltip", o = new n(this, s)), "string" == typeof e && o[e]())
        })
    }

    var n = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, n.prototype.init = function (e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0]instanceof document.constructor && !this.options.selector)throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), s = o.length; s--;) {
            var r = o[s];
            if ("click" == r)this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin", l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function () {
        var e = {}, n = this.getDefaults();
        return this._options && t.each(this._options, function (t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function () {
        for (var t in this.inState)if (this.inState[t])return !0;
        return !1
    }, n.prototype.leave = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function () {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide())
    }, n.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i)return;
            var o = this, s = this.tip(), r = this.getUID(this.type);
            this.setContent(), s.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && s.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement, l = /\s?auto?\s?/i, c = l.test(a);
            c && (a = a.replace(l, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(), h = s[0].offsetWidth, d = s[0].offsetHeight;
            if (c) {
                var p = a, f = this.getPosition(this.$viewport);
                a = "bottom" == a && u.bottom + d > f.bottom ? "top" : "top" == a && u.top - d < f.top ? "bottom" : "right" == a && u.right + h > f.width ? "left" : "left" == a && u.left - h < f.left ? "right" : a, s.removeClass(p).addClass(a)
            }
            var m = this.getCalculatedOffset(a, u, h, d);
            this.applyPlacement(m, a);
            var g = function () {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g()
        }
    }, n.prototype.applyPlacement = function (e, n) {
        var i = this.tip(), o = i[0].offsetWidth, s = i[0].offsetHeight, r = parseInt(i.css("margin-top"), 10), a = parseInt(i.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top += r, e.left += a, t.offset.setOffset(i[0], t.extend({
            using: function (t) {
                i.css({top: Math.round(t.top), left: Math.round(t.left)})
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth, c = i[0].offsetHeight;
        "top" == n && c != s && (e.top = e.top + s - c);
        var u = this.getViewportAdjustedDelta(n, e, l, c);
        u.left ? e.left += u.left : e.top += u.top;
        var h = /top|bottom/.test(n), d = h ? 2 * u.left - o + l : 2 * u.top - s + c, p = h ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(d, i[0][p], h)
    }, n.prototype.replaceArrow = function (t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function (e) {
        function i() {
            "in" != o.hoverState && s.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
        }

        var o = this, s = t(this.$tip), r = t.Event("hide.bs." + this.type);
        return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function () {
        return this.getTitle()
    }, n.prototype.getPosition = function (e) {
        e = e || this.$element;
        var n = e[0], i = "BODY" == n.tagName, o = n.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {width: o.right - o.left, height: o.bottom - o.top}));
        var s = i ? {
            top: 0,
            left: 0
        } : e.offset(), r = {scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()}, a = i ? {
            width: t(window).width(),
            height: t(window).height()
        } : null;
        return t.extend({}, o, r, a, s)
    }, n.prototype.getCalculatedOffset = function (t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {top: e.top + e.height / 2 - i / 2, left: e.left - n} : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
        var o = {top: 0, left: 0};
        if (!this.$viewport)return o;
        var s = this.options.viewport && this.options.viewport.padding || 0, r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - s - r.scroll, l = e.top + s - r.scroll + i;
            a < r.top ? o.top = r.top - a : l > r.top + r.height && (o.top = r.top + r.height - l)
        } else {
            var c = e.left - s, u = e.left + s + n;
            c < r.left ? o.left = r.left - c : u > r.right && (o.left = r.left + r.width - u)
        }
        return o
    }, n.prototype.getTitle = function () {
        var t, e = this.$element, n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function () {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length))throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function () {
        this.enabled = !0
    }, n.prototype.disable = function () {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function (e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = i, this
    }
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.popover"), s = "object" == typeof e && e;
            (o || !/destroy|hide/.test(e)) && (o || i.data("bs.popover", o = new n(this, s)), "string" == typeof e && o[e]())
        })
    }

    var n = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip)throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.5", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle(), n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function () {
        var t = this.$element, e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function () {
        return t.fn.popover = i, this
    }
}(jQuery), +function (t) {
    "use strict";
    function e(n, i) {
        this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.scrollspy"), s = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new e(this, s)), "string" == typeof n && o[n]()
        })
    }

    e.VERSION = "3.3.5", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = this, n = "offset", i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var e = t(this), o = e.data("target") || e.attr("href"), s = /^#./.test(o) && t(o);
            return s && s.length && s.is(":visible") && [[s[n]().top + i, o]] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), i = this.options.offset + n - this.$scrollElement.height(), o = this.offsets, s = this.targets, r = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i)return r != (t = s[s.length - 1]) && this.activate(t);
        if (r && e < o[0])return this.activeTarget = null, this.clear();
        for (t = o.length; t--;)r != s[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
        })
    }

    var n = function (e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
        var e = this.element, n = e.closest("ul:not(.dropdown-menu)"), i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = n.find(".active:last a"), s = t.Event("hide.bs.tab", {relatedTarget: e[0]}), r = t.Event("show.bs.tab", {relatedTarget: o[0]});
            if (o.trigger(s), e.trigger(r), !r.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var a = t(i);
                this.activate(e.closest("li"), n), this.activate(a, a.parent(), function () {
                    o.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function (e, i, o) {
        function s() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }

        var r = i.find("> .active"), a = o && t.support.transition && (r.length && r.hasClass("fade") || !!i.find("> .fade").length);
        r.length && a ? r.one("bsTransitionEnd", s).emulateTransitionEnd(n.TRANSITION_DURATION) : s(), r.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function () {
        return t.fn.tab = i, this
    };
    var o = function (n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.affix"), s = "object" == typeof e && e;
            o || i.data("bs.affix", o = new n(this, s)), "string" == typeof e && o[e]()
        })
    }

    var n = function (e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.5", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function (t, e, n, i) {
        var o = this.$target.scrollTop(), s = this.$element.offset(), r = this.$target.height();
        if (null != n && "top" == this.affixed)return n > o ? "top" : !1;
        if ("bottom" == this.affixed)return null != n ? o + this.unpin <= s.top ? !1 : "bottom" : t - i >= o + r ? !1 : "bottom";
        var a = null == this.affixed, l = a ? o : s.top, c = a ? r : e;
        return null != n && n >= o ? "top" : null != i && l + c >= t - i ? "bottom" : !1
    }, n.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset)return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(), e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(), i = this.options.offset, o = i.top, s = i.bottom, r = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (s = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof s && (s = i.bottom(this.$element));
            var a = this.getState(r, e, o, s);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""), c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented())return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({top: r - e - s})
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function () {
        return t.fn.affix = i, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var n = t(this), i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery), function (t, e) {
    "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd && define("GMaps", [], e), t.GMaps = e()
}(this, function () {
    if ("object" == typeof window.google && window.google.maps) {
        var t = function (t, e) {
            var n;
            if (t === e)return t;
            for (n in e)t[n] = e[n];
            return t
        }, n = function (t, e) {
            var n, i = Array.prototype.slice.call(arguments, 2), o = [], s = t.length;
            if (Array.prototype.map && t.map === Array.prototype.map)o = Array.prototype.map.call(t, function (t) {
                return callback_params = i, callback_params.splice(0, 0, t), e.apply(this, callback_params)
            }); else for (n = 0; s > n; n++)callback_params = i, callback_params.splice(0, 0, t[n]), o.push(e.apply(this, callback_params));
            return o
        }, i = function (t) {
            var e, n = [];
            for (e = 0; e < t.length; e++)n = n.concat(t[e]);
            return n
        }, o = function (t, e) {
            var n = t[0], i = t[1];
            return e && (n = t[1], i = t[0]), new google.maps.LatLng(n, i)
        }, s = function (t, e) {
            var n;
            for (n = 0; n < t.length; n++)t[n]instanceof google.maps.LatLng || (t[n] = t[n].length > 0 && "object" == typeof t[n][0] ? s(t[n], e) : o(t[n], e));
            return t
        }, r = function (t, e) {
            var n, t = t.replace("#", "");
            return n = "jQuery"in this && e ? $("#" + t, e)[0] : document.getElementById(t)
        }, a = function (t) {
            var e = 0, n = 0;
            if (t.offsetParent)do e += t.offsetLeft, n += t.offsetTop; while (t = t.offsetParent);
            return [e, n]
        }, l = function () {
            "use strict";
            var e = document, n = function (i) {
                if (!this)return new n(i);
                i.zoom = i.zoom || 15, i.mapType = i.mapType || "roadmap";
                var o, s = this, l = ["bounds_changed", "center_changed", "click", "dblclick", "drag", "dragend", "dragstart", "idle", "maptypeid_changed", "projection_changed", "resize", "tilesloaded", "zoom_changed"], c = ["mousemove", "mouseout", "mouseover"], u = ["el", "lat", "lng", "mapType", "width", "height", "markerClusterer", "enableNewStyle"], h = i.el || i.div, d = i.markerClusterer, p = google.maps.MapTypeId[i.mapType.toUpperCase()], f = new google.maps.LatLng(i.lat, i.lng), m = i.zoomControl || !0, g = i.zoomControlOpt || {
                        style: "DEFAULT",
                        position: "TOP_LEFT"
                    }, v = g.style || "DEFAULT", y = g.position || "TOP_LEFT", b = i.panControl || !0, w = i.mapTypeControl || !0, x = i.scaleControl || !0, k = i.streetViewControl || !0, T = T || !0, C = {}, S = {
                    zoom: this.zoom,
                    center: f,
                    mapTypeId: p
                }, $ = {
                    panControl: b,
                    zoomControl: m,
                    zoomControlOptions: {
                        style: google.maps.ZoomControlStyle[v],
                        position: google.maps.ControlPosition[y]
                    },
                    mapTypeControl: w,
                    scaleControl: x,
                    streetViewControl: k,
                    overviewMapControl: T
                };
                if (this.el = "string" == typeof i.el || "string" == typeof i.div ? r(h, i.context) : h, "undefined" == typeof this.el || null === this.el)throw"No element defined.";
                for (window.context_menu = window.context_menu || {}, window.context_menu[s.el.id] = {}, this.controls = [], this.overlays = [], this.layers = [], this.singleLayers = {}, this.markers = [], this.polylines = [], this.routes = [], this.polygons = [], this.infoWindow = null, this.overlay_el = null, this.zoom = i.zoom, this.registered_events = {}, this.el.style.width = i.width || this.el.scrollWidth || this.el.offsetWidth, this.el.style.height = i.height || this.el.scrollHeight || this.el.offsetHeight, google.maps.visualRefresh = i.enableNewStyle, o = 0; o < u.length; o++)delete i[u[o]];
                for (1 != i.disableDefaultUI && (S = t(S, $)), C = t(S, i), o = 0; o < l.length; o++)delete C[l[o]];
                for (o = 0; o < c.length; o++)delete C[c[o]];
                this.map = new google.maps.Map(this.el, C), d && (this.markerClusterer = d.apply(this, [this.map]));
                var E = function (t, e) {
                    var n = "", i = window.context_menu[s.el.id][t];
                    for (var o in i)if (i.hasOwnProperty(o)) {
                        var l = i[o];
                        n += '<li><a id="' + t + "_" + o + '" href="#">' + l.title + "</a></li>"
                    }
                    if (r("gmaps_context_menu")) {
                        var c = r("gmaps_context_menu");
                        c.innerHTML = n;
                        var o, u = c.getElementsByTagName("a"), h = u.length;
                        for (o = 0; h > o; o++) {
                            var d = u[o], p = function (n) {
                                n.preventDefault(), i[this.id.replace(t + "_", "")].action.apply(s, [e]), s.hideContextMenu()
                            };
                            google.maps.event.clearListeners(d, "click"), google.maps.event.addDomListenerOnce(d, "click", p, !1)
                        }
                        var f = a.apply(this, [s.el]), m = f[0] + e.pixel.x - 15, g = f[1] + e.pixel.y - 15;
                        c.style.left = m + "px", c.style.top = g + "px", c.style.display = "block"
                    }
                };
                this.buildContextMenu = function (t, e) {
                    if ("marker" === t) {
                        e.pixel = {};
                        var n = new google.maps.OverlayView;
                        n.setMap(s.map), n.draw = function () {
                            var i = n.getProjection(), o = e.marker.getPosition();
                            e.pixel = i.fromLatLngToContainerPixel(o), E(t, e)
                        }
                    } else E(t, e)
                }, this.setContextMenu = function (t) {
                    window.context_menu[s.el.id][t.control] = {};
                    var n, i = e.createElement("ul");
                    for (n in t.options)if (t.options.hasOwnProperty(n)) {
                        var o = t.options[n];
                        window.context_menu[s.el.id][t.control][o.name] = {title: o.title, action: o.action}
                    }
                    i.id = "gmaps_context_menu", i.style.display = "none", i.style.position = "absolute", i.style.minWidth = "100px", i.style.background = "white", i.style.listStyle = "none", i.style.padding = "8px", i.style.boxShadow = "2px 2px 6px #ccc", e.body.appendChild(i);
                    var a = r("gmaps_context_menu");
                    google.maps.event.addDomListener(a, "mouseout", function (t) {
                        t.relatedTarget && this.contains(t.relatedTarget) || window.setTimeout(function () {
                            a.style.display = "none"
                        }, 400)
                    }, !1)
                }, this.hideContextMenu = function () {
                    var t = r("gmaps_context_menu");
                    t && (t.style.display = "none")
                };
                var _ = function (t, e) {
                    google.maps.event.addListener(t, e, function (t) {
                        void 0 == t && (t = this), i[e].apply(this, [t]), s.hideContextMenu()
                    })
                };
                google.maps.event.addListener(this.map, "zoom_changed", this.hideContextMenu);
                for (var j = 0; j < l.length; j++) {
                    var N = l[j];
                    N in i && _(this.map, N)
                }
                for (var j = 0; j < c.length; j++) {
                    var N = c[j];
                    N in i && _(this.map, N)
                }
                google.maps.event.addListener(this.map, "rightclick", function (t) {
                    i.rightclick && i.rightclick.apply(this, [t]), void 0 != window.context_menu[s.el.id].map && s.buildContextMenu("map", t)
                }), this.refresh = function () {
                    google.maps.event.trigger(this.map, "resize")
                }, this.fitZoom = function () {
                    var t, e = [], n = this.markers.length;
                    for (t = 0; n > t; t++)"boolean" == typeof this.markers[t].visible && this.markers[t].visible && e.push(this.markers[t].getPosition());
                    this.fitLatLngBounds(e)
                }, this.fitLatLngBounds = function (t) {
                    for (var e = t.length, n = new google.maps.LatLngBounds, i = 0; e > i; i++)n.extend(t[i]);
                    this.map.fitBounds(n)
                }, this.setCenter = function (t, e, n) {
                    this.map.panTo(new google.maps.LatLng(t, e)), n && n()
                }, this.getElement = function () {
                    return this.el
                }, this.zoomIn = function (t) {
                    t = t || 1, this.zoom = this.map.getZoom() + t, this.map.setZoom(this.zoom)
                }, this.zoomOut = function (t) {
                    t = t || 1, this.zoom = this.map.getZoom() - t, this.map.setZoom(this.zoom)
                };
                var L, A = [];
                for (L in this.map)"function" != typeof this.map[L] || this[L] || A.push(L);
                for (o = 0; o < A.length; o++)!function (t, e, n) {
                    t[n] = function () {
                        return e[n].apply(e, arguments)
                    }
                }(this, this.map, A[o])
            };
            return n
        }(this);
        l.prototype.createControl = function (t) {
            var e = document.createElement("div");
            e.style.cursor = "pointer", t.disableDefaultStyles !== !0 && (e.style.fontFamily = "Roboto, Arial, sans-serif", e.style.fontSize = "11px", e.style.boxShadow = "rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px");
            for (var n in t.style)e.style[n] = t.style[n];
            t.id && (e.id = t.id), t.classes && (e.className = t.classes), t.content && ("string" == typeof t.content ? e.innerHTML = t.content : t.content instanceof HTMLElement && e.appendChild(t.content)), t.position && (e.position = google.maps.ControlPosition[t.position.toUpperCase()]);
            for (var i in t.events)!function (e, n) {
                google.maps.event.addDomListener(e, n, function () {
                    t.events[n].apply(this, [this])
                })
            }(e, i);
            return e.index = 1, e
        }, l.prototype.addControl = function (t) {
            var e = this.createControl(t);
            return this.controls.push(e), this.map.controls[e.position].push(e), e
        }, l.prototype.removeControl = function (t) {
            for (var e = null, n = 0; n < this.controls.length; n++)this.controls[n] == t && (e = this.controls[n].position, this.controls.splice(n, 1));
            if (e)for (n = 0; n < this.map.controls.length; n++) {
                var i = this.map.controls[t.position];
                if (i.getAt(n) == t) {
                    i.removeAt(n);
                    break
                }
            }
            return t
        }, l.prototype.createMarker = function (e) {
            if (void 0 == e.lat && void 0 == e.lng && void 0 == e.position)throw"No latitude or longitude defined.";
            var n = this, i = e.details, o = e.fences, s = e.outside, r = {
                position: new google.maps.LatLng(e.lat, e.lng),
                map: null
            }, a = t(r, e);
            delete a.lat, delete a.lng, delete a.fences, delete a.outside;
            var l = new google.maps.Marker(a);
            if (l.fences = o, e.infoWindow) {
                l.infoWindow = new google.maps.InfoWindow(e.infoWindow);
                for (var c = ["closeclick", "content_changed", "domready", "position_changed", "zindex_changed"], u = 0; u < c.length; u++)!function (t, n) {
                    e.infoWindow[n] && google.maps.event.addListener(t, n, function (t) {
                        e.infoWindow[n].apply(this, [t])
                    })
                }(l.infoWindow, c[u])
            }
            for (var h = ["animation_changed", "clickable_changed", "cursor_changed", "draggable_changed", "flat_changed", "icon_changed", "position_changed", "shadow_changed", "shape_changed", "title_changed", "visible_changed", "zindex_changed"], d = ["dblclick", "drag", "dragend", "dragstart", "mousedown", "mouseout", "mouseover", "mouseup"], u = 0; u < h.length; u++)!function (t, n) {
                e[n] && google.maps.event.addListener(t, n, function () {
                    e[n].apply(this, [this])
                })
            }(l, h[u]);
            for (var u = 0; u < d.length; u++)!function (t, n, i) {
                e[i] && google.maps.event.addListener(n, i, function (n) {
                    n.pixel || (n.pixel = t.getProjection().fromLatLngToPoint(n.latLng)), e[i].apply(this, [n])
                })
            }(this.map, l, d[u]);
            return google.maps.event.addListener(l, "click", function () {
                this.details = i, e.click && e.click.apply(this, [this]), l.infoWindow && (n.hideInfoWindows(), l.infoWindow.open(n.map, l))
            }), google.maps.event.addListener(l, "rightclick", function (t) {
                t.marker = this, e.rightclick && e.rightclick.apply(this, [t]), void 0 != window.context_menu[n.el.id].marker && n.buildContextMenu("marker", t)
            }), l.fences && google.maps.event.addListener(l, "dragend", function () {
                n.checkMarkerGeofence(l, function (t, e) {
                    s(t, e)
                })
            }), l
        }, l.prototype.addMarker = function (t) {
            var e;
            if (t.hasOwnProperty("gm_accessors_"))e = t; else {
                if (!(t.hasOwnProperty("lat") && t.hasOwnProperty("lng") || t.position))throw"No latitude or longitude defined.";
                e = this.createMarker(t)
            }
            return e.setMap(this.map), this.markerClusterer && this.markerClusterer.addMarker(e), this.markers.push(e), l.fire("marker_added", e, this), e
        }, l.prototype.addMarkers = function (t) {
            for (var e, n = 0; e = t[n]; n++)this.addMarker(e);
            return this.markers
        }, l.prototype.hideInfoWindows = function () {
            for (var t, e = 0; t = this.markers[e]; e++)t.infoWindow && t.infoWindow.close()
        }, l.prototype.removeMarker = function (t) {
            for (var e = 0; e < this.markers.length; e++)if (this.markers[e] === t) {
                this.markers[e].setMap(null), this.markers.splice(e, 1), this.markerClusterer && this.markerClusterer.removeMarker(t), l.fire("marker_removed", t, this);
                break
            }
            return t
        }, l.prototype.removeMarkers = function (t) {
            var e = [];
            if ("undefined" == typeof t) {
                for (var n = 0; n < this.markers.length; n++) {
                    var i = this.markers[n];
                    i.setMap(null), this.markerClusterer && this.markerClusterer.removeMarker(i), l.fire("marker_removed", i, this)
                }
                this.markers = e
            } else {
                for (var n = 0; n < t.length; n++) {
                    var o = this.markers.indexOf(t[n]);
                    if (o > -1) {
                        var i = this.markers[o];
                        i.setMap(null), this.markerClusterer && this.markerClusterer.removeMarker(i), l.fire("marker_removed", i, this)
                    }
                }
                for (var n = 0; n < this.markers.length; n++) {
                    var i = this.markers[n];
                    null != i.getMap() && e.push(i)
                }
                this.markers = e
            }
        }, l.prototype.drawOverlay = function (t) {
            var e = new google.maps.OverlayView, n = !0;
            return e.setMap(this.map), null != t.auto_show && (n = t.auto_show), e.onAdd = function () {
                var n = document.createElement("div");
                n.style.borderStyle = "none", n.style.borderWidth = "0px", n.style.position = "absolute", n.style.zIndex = 100, n.innerHTML = t.content, e.el = n, t.layer || (t.layer = "overlayLayer");
                var i = this.getPanes(), o = i[t.layer], s = ["contextmenu", "DOMMouseScroll", "dblclick", "mousedown"];
                o.appendChild(n);
                for (var r = 0; r < s.length; r++)!function (t, e) {
                    google.maps.event.addDomListener(t, e, function (t) {
                        -1 != navigator.userAgent.toLowerCase().indexOf("msie") && document.all ? (t.cancelBubble = !0, t.returnValue = !1) : t.stopPropagation()
                    })
                }(n, s[r]);
                t.click && (i.overlayMouseTarget.appendChild(e.el), google.maps.event.addDomListener(e.el, "click", function () {
                    t.click.apply(e, [e])
                })), google.maps.event.trigger(this, "ready")
            }, e.draw = function () {
                var i = this.getProjection(), o = i.fromLatLngToDivPixel(new google.maps.LatLng(t.lat, t.lng));
                t.horizontalOffset = t.horizontalOffset || 0, t.verticalOffset = t.verticalOffset || 0;
                var s = e.el, r = s.children[0], a = r.clientHeight, l = r.clientWidth;
                switch (t.verticalAlign) {
                    case"top":
                        s.style.top = o.y - a + t.verticalOffset + "px";
                        break;
                    default:
                    case"middle":
                        s.style.top = o.y - a / 2 + t.verticalOffset + "px";
                        break;
                    case"bottom":
                        s.style.top = o.y + t.verticalOffset + "px"
                }
                switch (t.horizontalAlign) {
                    case"left":
                        s.style.left = o.x - l + t.horizontalOffset + "px";
                        break;
                    default:
                    case"center":
                        s.style.left = o.x - l / 2 + t.horizontalOffset + "px";
                        break;
                    case"right":
                        s.style.left = o.x + t.horizontalOffset + "px"
                }
                s.style.display = n ? "block" : "none", n || t.show.apply(this, [s])
            }, e.onRemove = function () {
                var n = e.el;
                t.remove ? t.remove.apply(this, [n]) : (e.el.parentNode.removeChild(e.el), e.el = null)
            }, this.overlays.push(e), e
        }, l.prototype.removeOverlay = function (t) {
            for (var e = 0; e < this.overlays.length; e++)if (this.overlays[e] === t) {
                this.overlays[e].setMap(null), this.overlays.splice(e, 1);
                break
            }
        }, l.prototype.removeOverlays = function () {
            for (var t, e = 0; t = this.overlays[e]; e++)t.setMap(null);
            this.overlays = []
        }, l.prototype.drawPolyline = function (t) {
            var e = [], n = t.path;
            if (n.length)if (void 0 === n[0][0])e = n; else for (var i, o = 0; i = n[o]; o++)e.push(new google.maps.LatLng(i[0], i[1]));
            var s = {
                map: this.map,
                path: e,
                strokeColor: t.strokeColor,
                strokeOpacity: t.strokeOpacity,
                strokeWeight: t.strokeWeight,
                geodesic: t.geodesic,
                clickable: !0,
                editable: !1,
                visible: !0
            };
            t.hasOwnProperty("clickable") && (s.clickable = t.clickable), t.hasOwnProperty("editable") && (s.editable = t.editable), t.hasOwnProperty("icons") && (s.icons = t.icons), t.hasOwnProperty("zIndex") && (s.zIndex = t.zIndex);
            for (var r = new google.maps.Polyline(s), a = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], c = 0; c < a.length; c++)!function (e, n) {
                t[n] && google.maps.event.addListener(e, n, function (e) {
                    t[n].apply(this, [e])
                })
            }(r, a[c]);
            return this.polylines.push(r), l.fire("polyline_added", r, this), r
        }, l.prototype.removePolyline = function (t) {
            for (var e = 0; e < this.polylines.length; e++)if (this.polylines[e] === t) {
                this.polylines[e].setMap(null), this.polylines.splice(e, 1), l.fire("polyline_removed", t, this);
                break
            }
        }, l.prototype.removePolylines = function () {
            for (var t, e = 0; t = this.polylines[e]; e++)t.setMap(null);
            this.polylines = []
        }, l.prototype.drawCircle = function (e) {
            e = t({map: this.map, center: new google.maps.LatLng(e.lat, e.lng)}, e), delete e.lat, delete e.lng;
            for (var n = new google.maps.Circle(e), i = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], o = 0; o < i.length; o++)!function (t, n) {
                e[n] && google.maps.event.addListener(t, n, function (t) {
                    e[n].apply(this, [t])
                })
            }(n, i[o]);
            return this.polygons.push(n), n
        }, l.prototype.drawRectangle = function (e) {
            e = t({map: this.map}, e);
            var n = new google.maps.LatLngBounds(new google.maps.LatLng(e.bounds[0][0], e.bounds[0][1]), new google.maps.LatLng(e.bounds[1][0], e.bounds[1][1]));
            e.bounds = n;
            for (var i = new google.maps.Rectangle(e), o = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], s = 0; s < o.length; s++)!function (t, n) {
                e[n] && google.maps.event.addListener(t, n, function (t) {
                    e[n].apply(this, [t])
                })
            }(i, o[s]);
            return this.polygons.push(i), i
        }, l.prototype.drawPolygon = function (e) {
            var o = !1;
            e.hasOwnProperty("useGeoJSON") && (o = e.useGeoJSON), delete e.useGeoJSON, e = t({map: this.map}, e), 0 == o && (e.paths = [e.paths.slice(0)]), e.paths.length > 0 && e.paths[0].length > 0 && (e.paths = i(n(e.paths, s, o)));
            for (var r = new google.maps.Polygon(e), a = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], c = 0; c < a.length; c++)!function (t, n) {
                e[n] && google.maps.event.addListener(t, n, function (t) {
                    e[n].apply(this, [t])
                })
            }(r, a[c]);
            return this.polygons.push(r), l.fire("polygon_added", r, this), r
        }, l.prototype.removePolygon = function (t) {
            for (var e = 0; e < this.polygons.length; e++)if (this.polygons[e] === t) {
                this.polygons[e].setMap(null), this.polygons.splice(e, 1), l.fire("polygon_removed", t, this);
                break
            }
        }, l.prototype.removePolygons = function () {
            for (var t, e = 0; t = this.polygons[e]; e++)t.setMap(null);
            this.polygons = []
        }, l.prototype.getFromFusionTables = function (t) {
            var e = t.events;
            delete t.events;
            var n = t, i = new google.maps.FusionTablesLayer(n);
            for (var o in e)!function (t, n) {
                google.maps.event.addListener(t, n, function (t) {
                    e[n].apply(this, [t])
                })
            }(i, o);
            return this.layers.push(i), i
        }, l.prototype.loadFromFusionTables = function (t) {
            var e = this.getFromFusionTables(t);
            return e.setMap(this.map), e
        }, l.prototype.getFromKML = function (t) {
            var e = t.url, n = t.events;
            delete t.url, delete t.events;
            var i = t, o = new google.maps.KmlLayer(e, i);
            for (var s in n)!function (t, e) {
                google.maps.event.addListener(t, e, function (t) {
                    n[e].apply(this, [t])
                })
            }(o, s);
            return this.layers.push(o), o
        }, l.prototype.loadFromKML = function (t) {
            var e = this.getFromKML(t);
            return e.setMap(this.map), e
        }, l.prototype.addLayer = function (t, e) {
            e = e || {};
            var n;
            switch (t) {
                case"weather":
                    this.singleLayers.weather = n = new google.maps.weather.WeatherLayer;
                    break;
                case"clouds":
                    this.singleLayers.clouds = n = new google.maps.weather.CloudLayer;
                    break;
                case"traffic":
                    this.singleLayers.traffic = n = new google.maps.TrafficLayer;
                    break;
                case"transit":
                    this.singleLayers.transit = n = new google.maps.TransitLayer;
                    break;
                case"bicycling":
                    this.singleLayers.bicycling = n = new google.maps.BicyclingLayer;
                    break;
                case"panoramio":
                    this.singleLayers.panoramio = n = new google.maps.panoramio.PanoramioLayer, n.setTag(e.filter), delete e.filter, e.click && google.maps.event.addListener(n, "click", function (t) {
                        e.click(t), delete e.click
                    });
                    break;
                case"places":
                    if (this.singleLayers.places = n = new google.maps.places.PlacesService(this.map), e.search || e.nearbySearch || e.radarSearch) {
                        var i = {
                            bounds: e.bounds || null,
                            keyword: e.keyword || null,
                            location: e.location || null,
                            name: e.name || null,
                            radius: e.radius || null,
                            rankBy: e.rankBy || null,
                            types: e.types || null
                        };
                        e.radarSearch && n.radarSearch(i, e.radarSearch), e.search && n.search(i, e.search), e.nearbySearch && n.nearbySearch(i, e.nearbySearch)
                    }
                    if (e.textSearch) {
                        var o = {
                            bounds: e.bounds || null,
                            location: e.location || null,
                            query: e.query || null,
                            radius: e.radius || null
                        };
                        n.textSearch(o, e.textSearch)
                    }
            }
            return void 0 !== n ? ("function" == typeof n.setOptions && n.setOptions(e), "function" == typeof n.setMap && n.setMap(this.map), n) : void 0
        }, l.prototype.removeLayer = function (t) {
            if ("string" == typeof t && void 0 !== this.singleLayers[t])this.singleLayers[t].setMap(null), delete this.singleLayers[t]; else for (var e = 0; e < this.layers.length; e++)if (this.layers[e] === t) {
                this.layers[e].setMap(null), this.layers.splice(e, 1);
                break
            }
        };
        var c, u;
        return l.prototype.getRoutes = function (e) {
            switch (e.travelMode) {
                case"bicycling":
                    c = google.maps.TravelMode.BICYCLING;
                    break;
                case"transit":
                    c = google.maps.TravelMode.TRANSIT;
                    break;
                case"driving":
                    c = google.maps.TravelMode.DRIVING;
                    break;
                default:
                    c = google.maps.TravelMode.WALKING
            }
            u = "imperial" === e.unitSystem ? google.maps.UnitSystem.IMPERIAL : google.maps.UnitSystem.METRIC;
            var n = {avoidHighways: !1, avoidTolls: !1, optimizeWaypoints: !1, waypoints: []}, i = t(n, e);
            i.origin = /string/.test(typeof e.origin) ? e.origin : new google.maps.LatLng(e.origin[0], e.origin[1]), i.destination = /string/.test(typeof e.destination) ? e.destination : new google.maps.LatLng(e.destination[0], e.destination[1]), i.travelMode = c, i.unitSystem = u, delete i.callback, delete i.error;
            var o = this, s = new google.maps.DirectionsService;
            s.route(i, function (t, n) {
                if (n === google.maps.DirectionsStatus.OK) {
                    for (var i in t.routes)t.routes.hasOwnProperty(i) && o.routes.push(t.routes[i]);
                    e.callback && e.callback(o.routes)
                } else e.error && e.error(t, n)
            })
        }, l.prototype.removeRoutes = function () {
            this.routes = []
        }, l.prototype.getElevations = function (e) {
            e = t({
                locations: [],
                path: !1,
                samples: 256
            }, e), e.locations.length > 0 && e.locations[0].length > 0 && (e.locations = i(n([e.locations], s, !1)));
            var o = e.callback;
            delete e.callback;
            var r = new google.maps.ElevationService;
            if (e.path) {
                var a = {path: e.locations, samples: e.samples};
                r.getElevationAlongPath(a, function (t, e) {
                    o && "function" == typeof o && o(t, e)
                })
            } else delete e.path, delete e.samples, r.getElevationForLocations(e, function (t, e) {
                o && "function" == typeof o && o(t, e)
            })
        }, l.prototype.cleanRoute = l.prototype.removePolylines, l.prototype.drawRoute = function (t) {
            var e = this;
            this.getRoutes({
                origin: t.origin,
                destination: t.destination,
                travelMode: t.travelMode,
                waypoints: t.waypoints,
                unitSystem: t.unitSystem,
                error: t.error,
                callback: function (n) {
                    n.length > 0 && (e.drawPolyline({
                        path: n[n.length - 1].overview_path,
                        strokeColor: t.strokeColor,
                        strokeOpacity: t.strokeOpacity,
                        strokeWeight: t.strokeWeight
                    }), t.callback && t.callback(n[n.length - 1]))
                }
            })
        }, l.prototype.travelRoute = function (t) {
            if (t.origin && t.destination)this.getRoutes({
                origin: t.origin,
                destination: t.destination,
                travelMode: t.travelMode,
                waypoints: t.waypoints,
                unitSystem: t.unitSystem,
                error: t.error,
                callback: function (e) {
                    if (e.length > 0 && t.start && t.start(e[e.length - 1]), e.length > 0 && t.step) {
                        var n = e[e.length - 1];
                        if (n.legs.length > 0)for (var i, o = n.legs[0].steps, s = 0; i = o[s]; s++)i.step_number = s, t.step(i, n.legs[0].steps.length - 1)
                    }
                    e.length > 0 && t.end && t.end(e[e.length - 1])
                }
            }); else if (t.route && t.route.legs.length > 0)for (var e, n = t.route.legs[0].steps, i = 0; e = n[i]; i++)e.step_number = i, t.step(e)
        }, l.prototype.drawSteppedRoute = function (t) {
            var e = this;
            if (t.origin && t.destination)this.getRoutes({
                origin: t.origin,
                destination: t.destination,
                travelMode: t.travelMode,
                waypoints: t.waypoints,
                error: t.error,
                callback: function (n) {
                    if (n.length > 0 && t.start && t.start(n[n.length - 1]), n.length > 0 && t.step) {
                        var i = n[n.length - 1];
                        if (i.legs.length > 0)for (var o, s = i.legs[0].steps, r = 0; o = s[r]; r++)o.step_number = r, e.drawPolyline({
                            path: o.path,
                            strokeColor: t.strokeColor,
                            strokeOpacity: t.strokeOpacity,
                            strokeWeight: t.strokeWeight
                        }), t.step(o, i.legs[0].steps.length - 1)
                    }
                    n.length > 0 && t.end && t.end(n[n.length - 1])
                }
            }); else if (t.route && t.route.legs.length > 0)for (var n, i = t.route.legs[0].steps, o = 0; n = i[o]; o++)n.step_number = o, e.drawPolyline({
                path: n.path,
                strokeColor: t.strokeColor,
                strokeOpacity: t.strokeOpacity,
                strokeWeight: t.strokeWeight
            }), t.step(n)
        }, l.Route = function (t) {
            this.origin = t.origin, this.destination = t.destination, this.waypoints = t.waypoints, this.map = t.map, this.route = t.route, this.step_count = 0, this.steps = this.route.legs[0].steps, this.steps_length = this.steps.length, this.polyline = this.map.drawPolyline({
                path: new google.maps.MVCArray,
                strokeColor: t.strokeColor,
                strokeOpacity: t.strokeOpacity,
                strokeWeight: t.strokeWeight
            }).getPath()
        }, l.Route.prototype.getRoute = function (t) {
            var n = this;
            this.map.getRoutes({
                origin: this.origin,
                destination: this.destination,
                travelMode: t.travelMode,
                waypoints: this.waypoints || [],
                error: t.error,
                callback: function () {
                    n.route = e[0], t.callback && t.callback.call(n)
                }
            })
        }, l.Route.prototype.back = function () {
            if (this.step_count > 0) {
                this.step_count--;
                var t = this.route.legs[0].steps[this.step_count].path;
                for (var e in t)t.hasOwnProperty(e) && this.polyline.pop()
            }
        }, l.Route.prototype.forward = function () {
            if (this.step_count < this.steps_length) {
                var t = this.route.legs[0].steps[this.step_count].path;
                for (var e in t)t.hasOwnProperty(e) && this.polyline.push(t[e]);
                this.step_count++
            }
        }, l.prototype.checkGeofence = function (t, e, n) {
            return n.containsLatLng(new google.maps.LatLng(t, e))
        }, l.prototype.checkMarkerGeofence = function (t, e) {
            if (t.fences)for (var n, i = 0; n = t.fences[i]; i++) {
                var o = t.getPosition();
                this.checkGeofence(o.lat(), o.lng(), n) || e(t, n)
            }
        }, l.prototype.toImage = function (t) {
            var t = t || {}, e = {};
            if (e.size = t.size || [this.el.clientWidth, this.el.clientHeight], e.lat = this.getCenter().lat(), e.lng = this.getCenter().lng(), this.markers.length > 0) {
                e.markers = [];
                for (var n = 0; n < this.markers.length; n++)e.markers.push({
                    lat: this.markers[n].getPosition().lat(),
                    lng: this.markers[n].getPosition().lng()
                })
            }
            if (this.polylines.length > 0) {
                var i = this.polylines[0];
                e.polyline = {}, e.polyline.path = google.maps.geometry.encoding.encodePath(i.getPath()), e.polyline.strokeColor = i.strokeColor, e.polyline.strokeOpacity = i.strokeOpacity, e.polyline.strokeWeight = i.strokeWeight
            }
            return l.staticMapURL(e)
        }, l.staticMapURL = function (t) {
            function e(t, e) {
                if ("#" === t[0] && (t = t.replace("#", "0x"), e)) {
                    if (e = parseFloat(e), e = Math.min(1, Math.max(e, 0)), 0 === e)return "0x00000000";
                    e = (255 * e).toString(16), 1 === e.length && (e += e), t = t.slice(0, 8) + e
                }
                return t
            }

            var n, i = [], o = "http://maps.googleapis.com/maps/api/staticmap";
            t.url && (o = t.url, delete t.url), o += "?";
            var s = t.markers;
            delete t.markers, !s && t.marker && (s = [t.marker], delete t.marker);
            var r = t.styles;
            delete t.styles;
            var a = t.polyline;
            if (delete t.polyline, t.center)i.push("center=" + t.center), delete t.center; else if (t.address)i.push("center=" + t.address), delete t.address; else if (t.lat)i.push(["center=", t.lat, ",", t.lng].join("")), delete t.lat, delete t.lng; else if (t.visible) {
                var l = encodeURI(t.visible.join("|"));
                i.push("visible=" + l)
            }
            var c = t.size;
            c ? (c.join && (c = c.join("x")), delete t.size) : c = "630x300", i.push("size=" + c), t.zoom || t.zoom === !1 || (t.zoom = 15);
            var u = t.hasOwnProperty("sensor") ? !!t.sensor : !0;
            delete t.sensor, i.push("sensor=" + u);
            for (var h in t)t.hasOwnProperty(h) && i.push(h + "=" + t[h]);
            if (s)for (var d, p, f = 0; n = s[f]; f++) {
                d = [], n.size && "normal" !== n.size ? (d.push("size:" + n.size), delete n.size) : n.icon && (d.push("icon:" + encodeURI(n.icon)), delete n.icon), n.color && (d.push("color:" + n.color.replace("#", "0x")), delete n.color), n.label && (d.push("label:" + n.label[0].toUpperCase()), delete n.label), p = n.address ? n.address : n.lat + "," + n.lng, delete n.address, delete n.lat, delete n.lng;
                for (var h in n)n.hasOwnProperty(h) && d.push(h + ":" + n[h]);
                d.length || 0 === f ? (d.push(p), d = d.join("|"), i.push("markers=" + encodeURI(d))) : (d = i.pop() + encodeURI("|" + p), i.push(d))
            }
            if (r)for (var f = 0; f < r.length; f++) {
                var m = [];
                r[f].featureType && m.push("feature:" + r[f].featureType.toLowerCase()), r[f].elementType && m.push("element:" + r[f].elementType.toLowerCase());
                for (var g = 0; g < r[f].stylers.length; g++)for (var v in r[f].stylers[g]) {
                    var y = r[f].stylers[g][v];
                    ("hue" == v || "color" == v) && (y = "0x" + y.substring(1)), m.push(v + ":" + y)
                }
                var b = m.join("|");
                "" != b && i.push("style=" + b)
            }
            if (a) {
                if (n = a, a = [], n.strokeWeight && a.push("weight:" + parseInt(n.strokeWeight, 10)), n.strokeColor) {
                    var w = e(n.strokeColor, n.strokeOpacity);
                    a.push("color:" + w)
                }
                if (n.fillColor) {
                    var x = e(n.fillColor, n.fillOpacity);
                    a.push("fillcolor:" + x)
                }
                var k = n.path;
                if (k.join)for (var T, g = 0; T = k[g]; g++)a.push(T.join(",")); else a.push("enc:" + k);
                a = a.join("|"), i.push("path=" + encodeURI(a))
            }
            var C = window.devicePixelRatio || 1;
            return i.push("scale=" + C), i = i.join("&"), o + i
        }, l.prototype.addMapType = function (t, e) {
            if (!e.hasOwnProperty("getTileUrl") || "function" != typeof e.getTileUrl)throw"'getTileUrl' function required.";
            e.tileSize = e.tileSize || new google.maps.Size(256, 256);
            var n = new google.maps.ImageMapType(e);
            this.map.mapTypes.set(t, n)
        }, l.prototype.addOverlayMapType = function (t) {
            if (!t.hasOwnProperty("getTile") || "function" != typeof t.getTile)throw"'getTile' function required.";
            var e = t.index;
            delete t.index, this.map.overlayMapTypes.insertAt(e, t)
        }, l.prototype.removeOverlayMapType = function (t) {
            this.map.overlayMapTypes.removeAt(t)
        }, l.prototype.addStyle = function (t) {
            var e = new google.maps.StyledMapType(t.styles, {name: t.styledMapName});
            this.map.mapTypes.set(t.mapTypeId, e)
        }, l.prototype.setStyle = function (t) {
            this.map.setMapTypeId(t)
        }, l.prototype.createPanorama = function (t) {
            return t.hasOwnProperty("lat") && t.hasOwnProperty("lng") || (t.lat = this.getCenter().lat(), t.lng = this.getCenter().lng()), this.panorama = l.createPanorama(t), this.map.setStreetView(this.panorama), this.panorama
        }, l.createPanorama = function (e) {
            var n = r(e.el, e.context);
            e.position = new google.maps.LatLng(e.lat, e.lng), delete e.el, delete e.context, delete e.lat, delete e.lng;
            for (var i = ["closeclick", "links_changed", "pano_changed", "position_changed", "pov_changed", "resize", "visible_changed"], o = t({visible: !0}, e), s = 0; s < i.length; s++)delete o[i[s]];
            for (var a = new google.maps.StreetViewPanorama(n, o), s = 0; s < i.length; s++)!function (t, n) {
                e[n] && google.maps.event.addListener(t, n, function () {
                    e[n].apply(this)
                })
            }(a, i[s]);
            return a
        }, l.prototype.on = function (t, e) {
            return l.on(t, this, e)
        }, l.prototype.off = function (t) {
            l.off(t, this)
        }, l.custom_events = ["marker_added", "marker_removed", "polyline_added", "polyline_removed", "polygon_added", "polygon_removed", "geolocated", "geolocation_failed"], l.on = function (t, e, n) {
            if (-1 == l.custom_events.indexOf(t))return e instanceof l && (e = e.map), google.maps.event.addListener(e, t, n);
            var i = {handler: n, eventName: t};
            return e.registered_events[t] = e.registered_events[t] || [], e.registered_events[t].push(i), i
        }, l.off = function (t, e) {
            -1 == l.custom_events.indexOf(t) ? (e instanceof l && (e = e.map), google.maps.event.clearListeners(e, t)) : e.registered_events[t] = []
        }, l.fire = function (t, e, n) {
            if (-1 == l.custom_events.indexOf(t))google.maps.event.trigger(e, t, Array.prototype.slice.apply(arguments).slice(2)); else if (t in n.registered_events)for (var i = n.registered_events[t], o = 0; o < i.length; o++)!function (t, e, n) {
                t.apply(e, [n])
            }(i[o].handler, n, e)
        }, l.geolocate = function (t) {
            var e = t.always || t.complete;
            navigator.geolocation ? navigator.geolocation.getCurrentPosition(function (n) {
                t.success(n), e && e()
            }, function (n) {
                t.error(n), e && e()
            }, t.options) : (t.not_supported(), e && e())
        }, l.geocode = function (t) {
            this.geocoder = new google.maps.Geocoder;
            var e = t.callback;
            t.hasOwnProperty("lat") && t.hasOwnProperty("lng") && (t.latLng = new google.maps.LatLng(t.lat, t.lng)), delete t.lat, delete t.lng, delete t.callback, this.geocoder.geocode(t, function (t, n) {
                e(t, n)
            })
        }, google.maps.Polygon.prototype.getBounds || (google.maps.Polygon.prototype.getBounds = function () {
            for (var t, e = new google.maps.LatLngBounds, n = this.getPaths(), i = 0; i < n.getLength(); i++) {
                t = n.getAt(i);
                for (var o = 0; o < t.getLength(); o++)e.extend(t.getAt(o))
            }
            return e
        }), google.maps.Polygon.prototype.containsLatLng || (google.maps.Polygon.prototype.containsLatLng = function (t) {
            var e = this.getBounds();
            if (null !== e && !e.contains(t))return !1;
            for (var n = !1, i = this.getPaths().getLength(), o = 0; i > o; o++)for (var s = this.getPaths().getAt(o), r = s.getLength(), a = r - 1, l = 0; r > l; l++) {
                var c = s.getAt(l), u = s.getAt(a);
                (c.lng() < t.lng() && u.lng() >= t.lng() || u.lng() < t.lng() && c.lng() >= t.lng()) && c.lat() + (t.lng() - c.lng()) / (u.lng() - c.lng()) * (u.lat() - c.lat()) < t.lat() && (n = !n), a = l
            }
            return n
        }), google.maps.Circle.prototype.containsLatLng || (google.maps.Circle.prototype.containsLatLng = function (t) {
            return google.maps.geometry ? google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(), t) <= this.getRadius() : !0
        }), google.maps.LatLngBounds.prototype.containsLatLng = function (t) {
            return this.contains(t)
        }, google.maps.Marker.prototype.setFences = function (t) {
            this.fences = t
        }, google.maps.Marker.prototype.addFence = function (t) {
            this.fences.push(t)
        }, google.maps.Marker.prototype.getId = function () {
            return this.__gm_id
        }, Array.prototype.indexOf || (Array.prototype.indexOf = function (t) {
            "use strict";
            if (null == this)throw new TypeError;
            var e = Object(this), n = e.length >>> 0;
            if (0 === n)return -1;
            var i = 0;
            if (arguments.length > 1 && (i = Number(arguments[1]), i != i ? i = 0 : 0 != i && 1 / 0 != i && i != -1 / 0 && (i = (i > 0 || -1) * Math.floor(Math.abs(i)))), i >= n)return -1;
            for (var o = i >= 0 ? i : Math.max(n - Math.abs(i), 0); n > o; o++)if (o in e && e[o] === t)return o;
            return -1
        }), l
    }
}), function () {
    var t, e, n;
    e = [{stylers: [{visibility: "on"}, {color: "#dedede"}]}, {
        featureType: "road",
        stylers: [{visibility: "on"}, {color: "#ffffff"}]
    }, {featureType: "road.arterial", stylers: [{visibility: "on"}, {color: "#fee379"}]}, {
        featureType: "road.highway",
        stylers: [{visibility: "on"}, {color: "#fee379"}]
    }, {featureType: "landscape", stylers: [{visibility: "on"}, {color: "#f3f4f4"}]}, {
        featureType: "water",
        stylers: [{visibility: "on"}, {color: "#b5d6ea"}]
    }, {}, {featureType: "road", elementType: "labels", stylers: [{visibility: "off"}]}, {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [{visibility: "on"}, {color: "#83cead"}]
    }, {
        elementType: "labels",
        stylers: [{visibility: "on"}, {color: "#999999"}, {weight: .4}, {size: "15"}]
    }, {
        featureType: "landscape.man_made",
        elementType: "geometry",
        stylers: [{weight: 0}, {visibility: "off"}]
    }], window.set_up_map = function (t, e) {
        var n;
        return $(document).on("click", ".hehe", function () {
            return $(".poi-light-box").show()
        }), t = t ? t : 33, e = e ? e : 0, n = new GMaps({div: "#map", lat: t, lng: e, zoom: 3})
    }, t = function (t, e, i) {
        return t.addMarker({
            lat: e.lat,
            lng: e.lng,
            icon: "http://uniqueway.b0.upaiyun.com/assets/" + i + "_marker.png",
            infoWindow: {content: "<div class='poi-gmap-item' data-poi-id='" + e.id + "'><img src='" + e.cover + "!w700'><h5>" + e.name + "</h5><p>" + n(e.desc, 100) + "</p></div>"}
        })
    }, n = function (t, e) {
        return t.length > e ? t.substr(0, e - 3) + "..." : t
    }, window.map_init = function () {
        var e, n, i, o, s, r, a, l, c, u, h, d, p;
        if (window.GMaps && $("#map").length && ($(".wish-bottom-header .like-item,.wish-bottom-header .been-item").on("click", function () {
                var t, e;
                return $(".wish-bottom-header a").removeClass("on"), t = $(this), e = t.index(), t.addClass("on"), $(".item-list").hide().filter(":eq(" + e + ")").show()
            }), $(".item-list .arrow").on("click", function () {
                var t, e, n, i, o, s;
                if (t = $(this), s = $(window).width(), o = t.parents(".item-list").find(".item-container"), i = o.find(".item"), n = 140, e = Math.floor(s / n, 10), t.hasClass("left")) {
                    if (i.first().is("[data-mark]"))return;
                    return o.prepend(i.last())
                }
                return i.filter(":eq(" + e + ")").is("[data-mark]") ? void 0 : o.append(i.first())
            }), $(".item-list").each(function () {
                var t, e, n;
                return n = $(window).width(), t = $(this), e = 140, t.width() > n ? (t.width(Math.floor(n / e, 10) * e), t.find(".arrow").show()) : void 0
            }), o = $("#map").attr("data-coordinate"), o ? (s = o.split(","), e = parseFloat(s[0], 10), n = parseFloat(s[1], 10), d = set_up_map(e, n), d.setZoom(16), d.addMarker({
                lat: e,
                lng: n
            })) : d = set_up_map(), window.x = d, window.like_list && like_list.length || window.been_list && been_list.length)) {
            for (h = like_list.concat(been_list), r = 0, l = like_list.length; l > r; r++)u = like_list[r], t(d, u, "like");
            for (p = [], a = 0, c = been_list.length; c > a; a++)i = been_list[a], p.push(t(d, i, "been"));
            return p
        }
    }
}.call(this), function () {
    var t;
    $(function () {
        var e, n, i, o, s, r, a, l, c, u, h, d, p, f, m;
        return $(document).on("click", function (t) {
            var e, n, i;
            return n = ".poi-popover,.visit-icon", i = ".user-info", e = $(t.target), e.is(n) || 0 !== e.parents(n).length || $(".poi-popover").removeClass("fade-slide"), e.is(i) || 0 !== e.parents(i).length ? void 0 : $(".user-info .sub-menu").hide()
        }), $(".nav-notification-bar .close").on("click", function () {
            return $(".nav-notification-bar").animate({top: 0}, function () {
                return $(this).hide()
            })
        }), $(".top-nav .back").on("click", function () {
            return $(".mobile-poi-light-box").hide(), $("html,body").data("not_scroll", !1).css("overflow", "auto")
        }), $(".guide-item").on("click", function (t) {
            var e, n, i;
            return t.preventDefault(), e = $(this), i = e.attr("data-session-key"), n = $("[data-session-key=" + i + "]"), n.hide(), $.getJSON("/remove_guide", {key: i}, function () {
                return n.remove()
            })
        }), $(".photo-album-list").on("click", ".image-item", function () {
            return $(".photo-album-list .active").removeClass("active"), $(this).addClass("active")
        }), $(".poi-recommend-image .arrow").on("click", function () {
            var t, e, n, i, o;
            return ga("send", "pageview", "/wish_map/poi_recommend/arrow"), t = $(this), e = t.parents(".poi-recommend-image"), i = e.attr("data-image-list").split(","), n = e.data("index"), n || (n = 0), o = t.hasClass("left") ? -1 : 1, n += o, 0 > n ? n = i.length - 1 : n >= i.length && (n = 0), e.css("backgroundImage", "url(" + i[n] + ")"), e.data("index", n)
        }), $(".faq-container .panel-heading").bind("touchstart", function () {
            return $(this).css("backgroundColor", "#dfdcda")
        }), $(".faq-container .panel-heading").bind("touchend", function () {
            return $(this).css("backgroundColor", "#fff")
        }), $(".reservation-partners .card_wrapper").hover(function () {
            var t;
            return t = $(this), $(".desc", t).slideToggle()
        }, function () {
            var t;
            return t = $(this), $(".desc", t).slideToggle()
        }), $(".visit-icon").length && ($("*").on("mousedown", function (t) {
            var e, n;
            return e = $(t.target), n = e.prev(".poi-popover"), !n.hasClass("fade-slide") || e.is(".poi-popover,.visit-icon") || e.parents(".poi-popover").length ? void 0 : n.removeClass("fade-slide")
        }), $(".visit-icon").on("click", function () {
            var t, e, n, i, o;
            return t = $(this), i = t.prev(".poi-popover"), i.length || (e = t.attr("data-ids"), o = t.attr("data-story-id"), n = "lightbox-popover-" + o, i = $("#popover_template").clone().removeAttr("id"), i.find(".lightbox").attr("id", n).end().find(".lightbox-control").attr("data-target", n), i.attr("data-ids", e), t.before(i)), i.hasClass("fade-slide") ? i.removeClass("fade-slide") : (ga("send", "pageview", "visit-icon"), f(i, function () {
                return i.addClass("fade-slide")
            }, !0))
        })), $(document).on("click", ".been,.like", function (t) {
            var e;
            return e = $(this), t.stopPropagation(), i(e)
        }), $(".poi-recommend-block,.poi-explore-container").on("click", ".change-button,.change-link", function () {
            var t, e, n;
            return ga("send", "pageview", "/wish_map/change_link"), t = $(this).parents(".poi-recommend-block,.poi-explore-container"), n = t.attr("data-poi-list"), n ? (n = n.split(","), e = t.data("index"), e ? e += 1 : e = 1, e >= n.length ? e = 0 : e || (e = 0), t.data("index", e), $.getJSON("/poi_item", {id: n[e]}, function (e) {
                return s(t, e)
            })) : $.getJSON("/arbitraria", {}, function (e) {
                return s(t, e)
            })
        }), $(".poi-light-box .change-button,.add-fav-btn").on("click", function () {
            var t, e, n, i, s;
            if (e = $(".poi-light-box,.mobile-poi-light-box"), i = e.attr("data-ids"), t = e.attr("data-id"), i) {
                if (i = i.split(","), i && i.length)for (s in i)if (n = i[s], +n === +t) {
                    s = +s, s += 1, s >= i.length && (s = 0), t = i[s];
                    break
                }
                return void c(t, i.join(","))
            }
            return $.getJSON("/arbitraria", {}, function (t) {
                return o(t)
            })
        }), $(document).on("click", ".poi-popover .change-link", function () {
            var t;
            return t = $(this).parents(".poi-popover"), f(t)
        }), $(document).on("click", ".image-slide-item,.mobile-popover .slide-desc", function () {
            var t, e, n;
            return n = $(this).parents(".poi-popover"), t = n.attr("data-poi-id"), e = n.attr("data-ids"), c(t, e)
        }), $(document).on("click", ".poi-gmap-item", function () {
            var t;
            return t = $(this).attr("data-poi-id"), c(t)
        }), $(document).on("click", ".pois-container .poi-item", function () {
            var t;
            return t = $(this).attr("data-poi-id"), c(t)
        }), $(document).on("click", ".ga-hook", function () {
            var t;
            return t = $(this).attr("data-ga-title"), ga("send", "event", "button", "click", "" + t), !0
        }), $(".poi-light-box .close,.poi-light-box .bg").on("click", function () {
            return $(".poi-light-box").hide(), $("html,body").data("not_scroll", !1).css("overflow", "auto")
        }), t(), n = function (t, e) {
            var i;
            return t.addClass("disabled").attr("disabled", "disabled"), 0 === e ? t.text("\u83b7\u53d6\u9a8c\u8bc1\u7801").removeClass("disabled").removeAttr("disabled") : (t.text(e + "\u79d2\u540e\u91cd\u53d1"), i = setTimeout(function () {
                return n(t, e - 1)
            }, 1e3), t.data("timeout_index", i))
        }, $("#phone").on("keyup", function () {
            var t, e;
            return e = $(this).val(), t = $("#send_verify_code"), /^\d{11}$/.test(e) ? t.removeClass("disabled").removeAttr("disabled") : t.addClass("disabled").attr("disabled", "disabled")
        }), $("#send_verify_code").on("click", function (t) {
            var e;
            return t.preventDefault(), e = $("#phone").val(), /^\d{11}$/.test(e) ? $.ajax({
                type: "post",
                url: "/contact_form_code",
                data: {phone: e}
            }).done(function (t) {
                return 0 === t.err ? n($("#send_verify_code"), 60) : swal(t.msg)
            }) : swal("\u7535\u8bdd\u53f7\u7801\u4e0d\u5bf9\u54e6")
        }), $("#login .send_verify_code").on("click", function (t) {
            var e;
            return t.preventDefault(), e = $("#login .phone"), $.get("/check_phone", {
                phone: e.val(),
                plan_id: e.data("plan-id")
            }).done(function () {
                return $.post("/contact_form_code", {phone: e.val()}).done(function (t) {
                    return 0 === t.err ? n($("#login .send_verify_code"), 60) : swal(t.msg)
                })
            }).fail(function () {
                return swal("\u53f7\u7801\u9519\u8bef", "\u60a8\u8f93\u5165\u7684\u53f7\u7801\u5e76\u975e\u8be5\u65b9\u6848\u7528\u6237\u7684\u53f7\u7801", "error")
            })
        }), e = function () {
            var t;
            return $("#name").val(""), $("#phone").val(""), $("#old_destination").val(""), $("#travel_days").val(""), $("#verify_code").val(""), $("#label").val(""), $("#comment").val(""), $("#estimated_departure_date").val(""), t = $("#send_verify_code"), t.text("\u83b7\u53d6\u9a8c\u8bc1\u7801").removeClass("disabled").removeAttr("disabled"), void 0 !== t.data("timeout_index") ? clearTimeout(t.data("timeout_index")) : void 0
        }, $("#planForm").on("ajax:before", function () {
            return $(this).find("#submit").attr("disabled", "disabled")
        }), $("#planForm").on("ajax:complete", function () {
            return $(this).find("#submit").removeAttr("disabled")
        }), $("#planForm").on("ajax:success", function (t, n) {
            return 0 === n.err ? (e(), swal("\u63d0\u4ea4\u6210\u529f", n.msg, "success")) : swal("\u9519\u8bef", n.msg, "error")
        }), $("#planForm").submit(function () {
            var t;
            return "" === $("#name").val() ? (swal("\u8bf7\u544a\u8bc9\u6211\u4eec\u60a8\u7684\u59d3\u540d\uff01"), !1) : (t = $("#phone").val(), /^\d{11}$/.test(t) ? "" === $("#old_destination").val() ? (swal("\u8bf7\u544a\u8bc9\u6211\u4eec\u60a8\u7684\u76ee\u7684\u5730"), !1) : "" === $("#travel_days").val() ? (swal("\u8bf7\u544a\u8bc9\u6211\u4eec\u60a8\u7684\u51fa\u884c\u5929\u6570"), !1) : "" === $("#verify_code").val() ? (swal("\u8fd8\u6ca1\u6709\u586b\u5165\u9a8c\u8bc1\u7801"), !1) : $("#label") && "" === $("#label").val() ? (swal("\u8bf7\u586b\u5199" + $("#label").attr("placeholder")), !1) : void 0 : (swal("\u8bf7\u544a\u8bc9\u6211\u4eec\u6b63\u786e\u7684\u624b\u673a\u53f7\u7801"), !1))
        }), u = function (t, e) {
            var n, i, o, s, r, a, l, c, u;
            for (t.attr("data-poi-id", e.id).find("h5").text(m(e.name, 30)).attr("title", e.name).end().find("p").text(m(e.desc, 45)).attr("title", e.desc).end().find(".location-desc span").text(e.location), o = "", i = !0, u = $(window).width, c = "!w700", 700 > u && (c = "!w500"), l = e.images, r = 0, a = l.length; a > r; r++)s = l[r], n = "", i && (i = !1, n = "active"), o += '<div class="item ' + n + ' image-slide-item">\n  <img src="' + s + c + '">\n</div>';
            return t.find(".lightbox-inner").html(o), h(t, e), d(t, e.id)
        }, s = function (t, e) {
            return t.attr("data-id", e.id).find("h1").text(m(e.name, 160)).attr("title", e.name).end().find(".abstract").text(m(e.desc, 1200)).attr("title", e.desc).end().find(".poi-recommend-image").css("background-image", "").css("background-image", "url(" + e.images[0] + "!w1500)").attr("data-image-list", e.images.join(",")).end().find(".location-desc span").text(e.location), h(t, e), d(t, e.id)
        }, c = function (t, e) {
            var n;
            return n = $(".poi-light-box,.mobile-poi-light-box"), e ? n.attr("data-ids", e) : n.removeAttr("data-ids"), $.getJSON("/poi_item", {id: t}, function (t) {
                return o(t)
            })
        }, f = function (t, e, n) {
            var i, o;
            return i = t.attr("data-ids").split(","), o = t.data("index"), n ? o || (o = 0) : (o ? o += 1 : o = 1, o >= i.length && (o = 0)), t.data("index", o), $.getJSON("/poi_item", {id: i[o]}, function (n) {
                return u(t, n), e && e()
            })
        }, o = function (t) {
            var e, n, i, o, s, r, a, l, c, u, p;
            for (e = $(".poi-light-box,.mobile-poi-light-box"), $("html,body").data("not_scroll", !0).css("overflow", "hidden"), e.attr("data-id", t.id).show().find("h1").text(t.name).attr("title", t.name).end().find(".bottom-desc h1").text(t.name).end().find(".base-info p").text(m(t.desc, 45)).attr("title", t.desc).end().find(".bottom-desc p").text(m(t.desc, 150)).end().find(".lightbox-poi-content p").text(t.desc).end().find(".location-desc span").text(t.location), o = "", a = "", i = !0, r = 0, u = $(".mobile-poi-light-box .lightbox-inner"), u.length && u.css("marginTop", .5 * ($(window).height() - 200) - 44), p = t.images, l = 0, c = p.length; c > l; l++)s = p[l], n = "", i && (i = !1, n = "active"), a += '<div class="image-item ' + n + '" data-target="#main-light-box" data-slid-to="' + r + '">\n  <img src="' + s + '">\n</div>', o += '<div class="item ' + n + ' image-slide-item">\n  <img src="' + s + '">\n</div>', r++;
            return e.find(".photo-album-list").html(a).end().find(".lightbox-inner").html(o), h(e, t), d(e, t.id)
        }, i = function (t) {
            var e, n, i;
            return i = "like", e = t.hasClass("been"), n = t.attr("data-id"), e ? (i = "been", ga("send", "pageview", "/wish_map/been")) : ga("send", "pageview", "/wish_map/like"), window.current_user ? $.post("/toggle_poi", {
                id: n,
                type: i
            }, function (e) {
                return p(t, i, e[i], e)
            }) : a(t, i, n)
        }, a = function (e, n, i) {
            var o, s, a;
            return o = !e.hasClass("on"), a = {
                like_count: 0,
                been_count: 0
            }, window.JSON && (window.localStorage || (window.localStorage = {}), window.localStorage[n] && (a = JSON.parse(window.localStorage[n])), a["" + i] = o, window.localStorage.count || (window.localStorage.count = 0), s = parseInt(window.localStorage.count, 10), window.localStorage.count = s + (o ? 1 : -1), window.localStorage[n] = JSON.stringify(a), t(), a = r()), p(e, n, o, a)
        }, p = function (t, e, n, i) {
            var o;
            return o = "http://uniqueway.b0.upaiyun.com/assets/", t.removeClass("on").find("img").attr("src", o + "icon_" + e + ".png"), n && t.addClass("on").find("img").attr("src", o + "icon_" + e + "_on.png"), i && $(".wish-map-btn").is(":visible") ? t.hasClass("on") ? t.hasClass("like") ? $("body").append('<img alt="Icon like" src="http://uniqueway.b0.upaiyun.com/assets/icon_like_on.png" style="position:fixed;z-index:99999999;left:' + $("img", t).offset().left + "px;top:" + ($("img", t).offset().top - $(document).scrollTop()) + 'px"class="like-ani">').animation_like("red", i) : $("body").append('<img alt="Icon like" src="http://uniqueway.b0.upaiyun.com/assets/icon_been_on.png" style="position:fixed;z-index:99999999;left:' + $("img", t).offset().left + "px;top:" + ($("img", t).offset().top - $(document).scrollTop()) + 'px"class="like-ani">').animation_like("#00c500", i) : ($(".J_wish_num").text(i.like_count + i.been_count), $(".like-num span").text(i.like_count), $(".been-num span").text(i.been_count)) : void 0
        }, h = function (t, e) {
            var n, i, o, s, r, a, l, c;
            for (r = ["like", "been"], a = [], o = 0, s = r.length; s > o; o++)l = r[o], i = e[l], n = t.find("." + l), !window.current_user && window.localStorage && window.localStorage[l] && (c = JSON.parse(window.localStorage[l]), i = c["" + e.id]), a.push(p(n, l, i));
            return a
        }, d = function (t, e) {
            var n, i, o, s, r, a;
            for (s = ["like", "been"], r = [], i = 0, o = s.length; o > i; i++)a = s[i], n = t.find("." + a), r.push(n.attr("data-id", e));
            return r
        }, m = function (t, e) {
            return t.length > e ? t.substr(0, e - 3) + "..." : t
        }, r = function () {
            var t, e, n, i, o, s, r;
            if (r = 0, t = 0, window.localStorage.like) {
                o = JSON.parse(window.localStorage.like);
                for (n in o)s = o[n], s === !0 && r++
            }
            if (window.localStorage.been) {
                i = JSON.parse(window.localStorage.been);
                for (n in i)s = i[n], s === !0 && t++
            }
            return e = {like_count: r, been_count: t}
        }, (l = function () {
            var t;
            return t = window.current_user ? window.current_user : r()/*, $(".J_wish_num").text(+t.like_count + +t.been_count), $(".like-num span").text(t.like_count), $(".been-num span").text(t.been_count)*/
        })()
    }), t = function () {
        var t, e, n, i, o, s, r, a, l;
        if (!window.current_user) {
            if (window.localStorage)for (s = [], o = ["been", "like"], t = 0, n = o.length; n > t; t++)if (r = o[t], window.localStorage[r]) {
                if (a = JSON.parse(window.localStorage[r]), i = [], a)for (e in a)l = a[e], isNaN(+e) || i.push(e);
                s.push(r + "=" + i.join(","))
            }
            return $(".wish-map-btn").attr("href", "/wish_map?" + s.join("&"))
        }
    }
}.call(this), function () {
    $(function () {
        var t, e, n, i, o, s, r, a, l, c, u, h, d, p, f, m, g, v, y, b, w;
        return c = $("form.login"), l = $("#login-dialog"), r = $("#init-reg-dialog"), u = $("#middle-reg-dialog"), d = $("#reset_password_dialog"), a = $("#login-btn"), h = $("#reg-btn"), p = r.find(".send_sms_code"), i = function (t) {
            return /^(170[059]\d{7}|(14[57]|15[^4,\D]|17[678])\d{8}|1[38]\d{9})$/.test(t)
        }, n = function (t) {
            return t.trim().length > 5
        }, t = function (t) {
            return "" === t.trim()
        }, e = function (t, e) {
            return t === e
        }, m = function () {
            return $(".dialog").hide(), r.show()
        }, f = function () {
            return $(".dialog").hide(), l.show()
        }, s = function () {
            return r.hide(), l.hide()
        }, o = function (t, e) {
            return 0 === e ? t.text("\u53d1\u9001\u9a8c\u8bc1\u7801").removeClass("disabled").removeAttr("disabled") : (t.text(e + "\u79d2\u540e\u91cd\u53d1"), setTimeout(function () {
                return o(t, e - 1)
            }, 1e3))
        }, b = function () {
            var t, e;
            return e = c.find(".phone").val(), t = c.find(".password").val(), i(e) && n(t) ? $.post("/users/sign_in", {
                phone: e,
                password: t
            }, function (t) {
                var e;
                return e = t.msg, 0 === t.error ? "" === e || null === e ? window.location.reload() : window.location = e : alert(e)
            }) : alert("\u8bf7\u8f93\u5165\u6709\u6548\u5730\u624b\u673a\u53f7\u7801\u5e76\u4e14\u5bc6\u7801\u81f3\u5c11\u8981\u4e3a6\u4f4d\uff01")
        }, w = function () {
            var i, o, s, a;
            return a = r.find(".phone").val(), i = u.find(".name").val(), o = u.find(".password").val(), s = u.find(".password_confirmation").val(), t(i) ? void alert("\u6635\u79f0\u5fc5\u987b\u8981\u586b\u54e6") : t(o) ? void alert("\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a\u54e6") : t(s) ? void alert("\u4f60\u8fd8\u6ca1\u586b\u786e\u8ba4\u5bc6\u7801") : n(o) ? e(o, s) ? $.post("/users", {
                name: i,
                phone: a,
                password: o
            }, function (t) {
                return 0 === t.error ? (alert("\u6ce8\u518c\u6210\u529f!"), location.reload()) : alert(t.msg)
            }) : void alert("\u4e24\u6b21\u586b\u5199\u7684\u5bc6\u7801\u4e0d\u4e00\u81f4") : void alert("\u5bc6\u7801\u4e0d\u7b26\u5408\u89c4\u8303\u54e6\uff0c\u81f3\u5c11\u89816\u4e2a\u5b57\u7b26")
        }, v = function () {
            var t;
            if (!p.hasClass("disabled"))return t = r.find(".phone").val(), i(t) ? $.post("/send_sms_code", {phone: t}, function (t) {
                return 0 === t.error ? (p.addClass("disabled"), o(p, 60)) : alert(t.msg)
            }) : alert("\u60a8\u586b\u5165\u7684\u624b\u673a\u53f7\u7801\u662f\u65e0\u6548\u7684")
        }, y = function () {
            var t, e;
            return e = d.find(".send_verify_code"), e.hasClass("disabled") ? void 0 : (t = d.find(".phone").val(), i(t) ? $.post("/send_sms_code", {
                phone: t,
                find_password: 1
            }, function (t) {
                return 0 === t.error ? (e.addClass("disabled"), o(e, 60)) : alert(t.msg)
            }) : alert("\u60a8\u586b\u5165\u7684\u624b\u673a\u53f7\u7801\u662f\u65e0\u6548\u7684"))
        }, g = function () {
            var t, e;
            return t = r.find(".phone").val(), e = r.find(".verify-code").val(), $.post("/check_sms_code", {
                phone: t,
                code: e
            }, function (t) {
                return 0 === t.error ? (r.hide(), u.show()) : alert(t.msg)
            })
        }, a.on("click", function (t) {
            return f(), t.preventDefault()
        }), h.on("click", function (t) {
            return m(), t.preventDefault()
        }), c.find(".login-btn").on("click", function (t) {
            return b(), t.preventDefault()
        }), c.find(".reg-btn").on("click", function (t) {
            return m(), t.preventDefault()
        }), d.find(".send_verify_code").on("click", function (t) {
            return y(), t.preventDefault()
        }), p.on("click", function (t) {
            return v(), t.preventDefault()
        }), r.find(".login-btn").on("click", function (t) {
            return g(), t.preventDefault()
        }), r.find(".verify-code").on("keyup", function (t) {
            return 13 === t.keyCode ? g() : void 0
        }), u.find(".finish-btn").on("click", function (t) {
            return w(), t.preventDefault()
        }), u.find(".password").on("keyup", function (t) {
            return 13 === t.keyCode ? w() : void 0
        })
    })
}.call(this), function () {
    $.fn.lightbox = function () {
        var t, e;
        return $(document).on("click", ".lightbox-control", function () {
            var t, n;
            return n = $(this).attr("data-slid"), t = $(this).parents(".lightbox"), e(t, n)
        }), $(document).on("click", "[data-slid-to]", function () {
            var t, n;
            n = parseInt($(this).attr("data-slid-to"), 10), t = $($(this).attr("data-target")), e(t, n)
        }), e = function (e, n) {
            var i, o, s, r, a, l;
            if (!e.data("on_slide") && (s = e.find(".item"), a = s.filter(":visible"), i = a.index(), i !== n))return e.data("on_slide", !0), "string" == typeof n ? ("next" === n ? i++ : "prev" === n && i--, i >= s.length ? i = 0 : 0 > i && (i = s.length - 1), o = s.filter(":eq(" + i + ")")) : (o = s.filter(":eq(" + n + ")"), n = i > n ? "prev" : "next"), o.length ? (l = e.width(), r = "next" === n ? 1 : -1, o.show(), o.css({left: r * l}).animate({left: 0}), a.animate({left: -r * l}, function () {
                return a.hide(), t(e), $(".image-item").removeClass("active").filter(":eq(" + o.index() + ")").addClass("active")
            })) : void 0
        }, t = function (t) {
            return t.data("on_slide", !1)
        }, this.each(function () {
            var t, e;
            return t = $(this), e = t.find(".lightbox-inner .slide"), t.data("on_slide", !1)
        }), this
    }
}.call(this), function () {
    $(function () {
        return $.fn.animation_like = function (t, e) {
            return $(".like-ani").animate({
                top: $(".wish-map-btn").position().top + 30,
                left: $(".wish-map-btn").offset().left + 60
            }, 1e3, function () {
                return $(this).remove(), $(".wish-map-btn").append("<span style='color:" + t + ";position:absolute;left:50%;top:100%;font-size:1.5em;' class='J_num_ani'>+1</span>"), $(".J_num_ani").animate({
                    top: "-80%",
                    opacity: 0
                }, 500, function () {
                    return $(this).remove(), $(".J_wish_num").text(e.like_count + e.been_count), $(".like-num span").text(e.like_count), $(".been-num span").text(e.been_count)
                })
            })
        }, $(".wish-map-btn").hover(function () {
            return $(".wish-map-num").fadeIn()
        }, function () {
            return $(".wish-map-num").fadeOut()
        }), $(".content-collapse-btn").click(function () {
            var t, e, n, i;
            return n = $(".lightbox-poi-content .abstract"), 0 === n.length && (n = $(".poi-explore-container .abstract")), t = n.is(":visible"), i = ["\u663e\u793a\u7b80\u4ecb", "\u6536\u8d77\u7b80\u4ecb"], e = ["down", "up"], n.toggle(300, function () {
                return $(".content-collapse-btn").find(".collapse-text").text(i[t ? 0 : 1]).end().find(".collapse-arrow").removeClass(e[t ? 1 : 0]).addClass(e[t ? 0 : 1])
            })
        }), $(".ticket-right").hover(function () {
            return $("img", this).fadeIn()
        }, function () {
            return $("img", this).fadeOut()
        }), $(".nav-lists .parent-item").hover(function () {
            return $(".dest_subitem", this).fadeIn()
        }, function () {
            return $(".dest_subitem", this).fadeOut()
        })
    })
}.call(this), function () {
    $(function () {
        var t, e, n, i, o;
        return $(".left-arrow,.right-arrow").on("click", function () {
            var t, e;
            return t = $(".swipe-item:visible"), e = t.next(), $(this).hasClass("left-arrow") && (e = t.prev()), e ? ($(".swipe-item").hide(), e.show()) : void 0
        }), $("#submit_receive_address").on("click", function () {
            var t, e;
            return e = $(this).attr("data-url"), t = $("#receive_address").val(), t.length ? $.ajax({
                url: e,
                type: "PUT",
                dataType: "json",
                data: {authenticity_token: $('[name="authenticity_token"]').val(), user: {receive_address: t}},
                success: function () {
                    return $(".gift-form").html("\u63d0\u4ea4\u6210\u529f\uff0c\u6211\u4eec\u5c06\u7a0d\u540e\u4e3a\u60a8\u53d1\u9001\u793c\u7269\u3002<p class='gift-welcome'>\u4e07\u80fd\u5145\u7535\u63d2\u5ea7\uff0c\u4e0d\u7ba1\u53bb\u54ea\u91cc\uff0c\u90fd\u518d\u4e5f\u4e0d\u7528\u62c5\u5fc3\u7535\u6e90\u5236\u5f0f\u7684\u95ee\u9898\u5566</p>")
                }
            }) : alert("\u8bf7\u586b\u5199\u5730\u5740")
        }), $(".rating-btn").on("click", function () {
            var t, e, n, o;
            return n = $(this), t = $(".rating-container"), e = n.attr("data-desc"), o = n.attr("data-id"), i(), t.attr("data-url", "/user_plan_rates/" + o).find(".rating-desc").text(e), $(".star-wrap span.checked").removeClass("checked"), $(".rating input:radio").attr("checked", !1)
        }), $(".gift-container .close-btn").click(function () {
            return $(".gift-container-wrap").removeClass("gift-active").addClass("hidden").hide()
        }), $(".rating-container .rating-confirm").on("click", function () {
            var e, n, i;
            return n = $(".rating-container").attr("data-url"), e = $(".rating input:radio").filter(":checked"), e.length ? (i = e.val(), $.ajax({
                url: n,
                type: "PUT",
                data: {authenticity_token: $('[name="authenticity_token"]').val(), user_plan_rate: {rating_value: i}},
                success: function (e) {
                    var n, i, s, r;
                    for ($("#did_finish").val(e.did_finished), t(), $(".now-step").text(e.finished_count), n = $(".rating-btn[data-id=" + e.id + "]"), s = n.parents(".item-container"), i = 0, r = '<div class="mark-star">'; i < e.rating_value;)r += '<span class="star-single"></span>', i++;
                    return r += "</div>", s.find(".mark-star").remove().end().find(".item-img").after(r), n.text("\u4fee\u6539"), (e.did_finished || s.data("last")) && o(), $(".star").css("background-color", "rgb(217, 217, 217)")
                },
                error: function (t) {
                    return alert(t.errors[0])
                }
            })) : alert("\u8bf7\u9009\u62e9\u8bc4\u5206")
        }), $(".gift-icon").click(function () {
            return o()
        }), e = function () {
            var t;
            return t = window.location.href.replace("faq", "faq.json"), $.ajax({
                url: t,
                type: "GET",
                success: function (t) {
                    return $.each(t, function (t, e) {
                        var n, i, o, s;
                        for (i = $(".mark-star#" + t), o = e.rating_value, i.find(".star-single").remove(), s = "", n = 0; +o > n;)s += "<span class='star-single'></span>", n++;
                        return i.append(s), o ? i.prev(".no-mark").hide() : i.prev(".no-mark").show()
                    }), $(".gift-container-wrap").removeClass("hidden").addClass("gift-active").show()
                }
            })
        }, $(".faq-review .review-item").click(function () {
            var t, e, n;
            return $(".gift-container-wrap").removeClass("gift-active").addClass("hidden").hide(), t = $(this), n = t.find(".mark-star").attr("id"), e = $("#" + n).offset().top - 100, console.log(e), $("html,body").animate({scrollTop: e}, 500)
        }), $(".rating-container .rating-cancel").click(function () {
            return t()
        }), $(".rating input:radio").attr("checked", !1), $(".rating input").click(function () {
            return $(".rating span").removeClass("checked"), $(".rating label").css("backgroundColor", "#d9d9d9"), $(this).parent().addClass("checked"), $("span.checked label").css("backgroundColor", "#fb683c"), $(this).parent().nextAll("span").children("label").css("backgroundColor", "#fb683c")
        }), o = function () {
            return e(), n(), "true" === $("#did_finish").val() ? ($(".gift-form").show(), $(".gift-welcome").text("\u975e\u5e38\u611f\u8c22\u60a8\u7684\u8bc4\u4ef7\uff0c\u732e\u4e0a \u8f6c\u6362\u63d2\u5934 \u4e00\u4e2a\uff0c\u4e48\u4e48\u54d2\uff01")) : $(".gift-form").hide()
        }, i = function () {
            return $(".rating-container").removeClass("hidden").addClass("rating-active").show()
        }, t = function () {
            return $(".rating-container").removeClass("rating-active").addClass("hidden").hide()
        }, n = function () {
            var t, e, n, i, o, s, r;
            for (n = "http://uniqueway.b0.upaiyun.com/faq_prize_new/", o = +$(".now-step:first").text(), r = +$(".total-step:first").text(), t = 9, i = Math.round(o / r * t), e = 0, s = []; i > e;)$(".gift-imgs img:eq(" + e + ")").attr("src", "" + n + (e + 1) + ".jpg"), s.push(e++);
            return s
        }
    })
}.call(this), function () {
    $(function () {
        var t, e, n, i, o, s, r;
        return FastClick.attach(document.body), $(".hidden").hide(), $(".star-wrap input:radio").attr("checked", !1), $("#submit_receive_address").click(function () {
            var t, e;
            return e = $(this).attr("data-url"), t = $("#receive_address").val(), t.length ? $.ajax({
                url: e,
                type: "PUT",
                dataType: "json",
                data: {authenticity_token: $('[name="authenticity_token"]').val(), user: {receive_address: t}},
                success: function () {
                    return $(".gift-form").html("\u63d0\u4ea4\u6210\u529f\uff0c\u6211\u4eec\u5c06\u7a0d\u540e\u4e3a\u60a8\u53d1\u9001\u793c\u7269\u3002")
                }
            }) : alert("\u8bf7\u586b\u5199\u5730\u5740")
        }), $(".schedule-gift-icon").on("click", function () {
            return r()
        }), $(".gift-container .close-btn").on("click", function () {
            return $(".gift-container-wrap").removeClass("gift-active").addClass("hidden").hide()
        }), o = function (t, e) {
            return 4 > t && e.text("\u62b1\u6b49\u6709\u505a\u7684\u4e0d\u8db3\u4e4b\u5904\uff0c\u8bf7\u76d1\u7763\u6539\u8fdb\uff01"), 4 === t && e.text("\u6211\u4eec\u8fd8\u6709\u5f88\u591a\u4e0d\u8db3\uff0c\u8bf7\u63d0\u4e9b\u5efa\u8bae\u5427\uff01"), 5 === t ? e.text("\u6c42\u5938\u8d5e\uff0c\u7ed9\u65e0\u4e8c\u4e4b\u65c5\u518d\u591a\u4e9b\u9f13\u52b1\u5427\uff01") : void 0
        }, $(".rating-only-star .star-wrap input").on("click", function () {
            var t, e, n, i, s, r, a;
            return t = $(this), r = t.parents(".star-wrap"), e = r.attr("data-id"), i = r.find("input:checked").val(), r.find("span").removeClass("checked"), t.parent("span").addClass("checked"), n = t.parents(".rate-item-container").find(".rating-title"), o(+i, n), s = t.parents(".rate-item-container").find(".rating-wrap").show(), a = r.attr("data-url"), $.ajax({
                url: a,
                type: "PUT",
                data: {
                    authenticity_token: $('[name="authenticity_token"]').val(),
                    user_schedule_rate: {rating_value: i}
                },
                success: function (t) {
                    return $(".now-step").text(t.finished_count), setTimeout(function () {
                        return s.removeClass("hidden").addClass("rating-active")
                    }, 10)
                },
                error: function (t) {
                    return alert(t.errors[0])
                }
            })
        }), $(".rating-wrap .rating-cancel").click(function () {
            return $(this).parents(".rating-wrap").removeClass("rating-active").addClass("hidden"), $(".hidden").hide()
        }), $(".rating-wrap .rating-confirm").click(function () {
            var n, i, o, s, a, l, c;
            return i = $(this), c = i.attr("data-url"), s = i.attr("data-id"), n = i.parents(".rate-item-container"), l = $(".star-wrap[data-id=" + s + "]"), a = n.find(".star-mark").data("value") || l.find("input:checked").val(), o = $("#rating_" + s + "_comment").val(), $.ajax({
                url: c,
                type: "PUT",
                data: {
                    authenticity_token: $('[name="authenticity_token"]').val(),
                    user_schedule_rate: {comment: o, rating_value: a}
                },
                success: function (s) {
                    var l, c, u;
                    for ($("#did_finish").val(s.did_finished), u = "", l = 0; l < +s.rating_value;)u += "<span class='star-single shine' data-rate=" + (l + 1) + "></span>", l++;
                    return 5 > l && $.each(function () {
                        c = [];
                        for (var t = 1, e = 5 - l; e >= 1 ? e >= t : t >= e; e >= 1 ? t++ : t--)c.push(t);
                        return c
                    }.apply(this), function (t) {
                        return u += "<span class='star-single' data-rate=" + (t + l + 1) + "></span>"
                    }), u = "<div class='star-mark' data-value=" + a + ">\u5df2\u8bc4<div class='star'>" + u + "</div></div><div class='comment'><p>\u8bc4\u8bed:<a href='javascript:;' class='edit-rating'></a></p><p>" + o + "</p></div>", n.find(".star-mark,.star-single,.comment").remove(), n.append(u).find(".rating-only-star").hide(), i.parents(".rating-wrap").hide(), t(), e(), $(".now-step").text(s.finished_count), s.did_finished ? $(".gift-container-wrap").data("flag") || (r(), $(".gift-container-wrap").data("flag", "true")) : n.data("last") && r(), $(window).scrollTop($(".star-mark:visible").offset().top)
                },
                error: function (t) {
                    return alert(t.errors[0])
                }
            })
        }), t = function () {
            return $(".edit-rating").click(function () {
                var t, e;
                return e = $(this), t = e.parents(".rate-item-container"), t.find(".rating-wrap").show().addClass("rating-active")
            })
        }, t(), e = function () {
            return $(".star-mark span").click(function () {
                var t, e, n, i, o;
                return e = $(this), n = e.data("rate"), t = e.parents(".rate-item-container"), t.find(".star-single").removeClass("shine"), $.each(function () {
                    i = [];
                    for (var t = 1; n >= 1 ? n >= t : t >= n; n >= 1 ? t++ : t--)i.push(t);
                    return i
                }.apply(this), function (t, e) {
                    return $("[data-rate=" + e + "]:visible").addClass("shine")
                }), o = t.find(".rating-confirm").attr("data-url"), t.find(".star-mark").data("value", n), $.ajax({
                    url: o,
                    type: "PUT",
                    data: {
                        authenticity_token: $('[name="authenticity_token"]').val(),
                        user_schedule_rate: {rating_value: n}
                    },
                    error: function (t) {
                        return alert(t.errors[0])
                    }
                })
            })
        }, e(), i = function () {
            var t;
            return t = window.location.href + ".json", $.ajax({
                url: t, type: "GET", success: function (t) {
                    return $.each(t, function (t, e) {
                        var n, i, o, s, r;
                        for (n = e.day, s = e.rating_value, o = $(".mark-star#star_d" + n), o.find(".star-single").remove(), r = "", i = 0; +s > i;)r += "<span class='star-single'></span>", i++;
                        return o.append(r), s ? o.next(".no-mark").hide() : o.next(".no-mark").show()
                    }), $(".gift-container-wrap").removeClass("hidden").addClass("gift-active").show()
                }
            })
        }, n = function (t) {
            return t.is(".swipe-item") ? ($("#tasteForm .swipe-item").hide(), t.show(), $("html, body").scrollTop(0)) : void 0
        }, $(".review .review-item").click(function () {
            var t, e;
            return $(".gift-container-wrap").removeClass("gift-active").addClass("hidden").hide(), t = $(this).attr("data-day"), e = $(".swipe-item#" + t), n(e)
        }), r = function () {
            return "true" === $("#did_finish").val() ? ($(".gift-form").show(), $(".gift-welcome").text("\u975e\u5e38\u611f\u8c22\u60a8\u7684\u8bc4\u4ef7\uff0c\u732e\u4e0a \u4fbf\u643aU\u76d8 \u4e00\u4e2a\uff0c\u4e48\u4e48\u54d2\uff01")) : $(".gift-form").hide(), s(), i()
        }, s = function () {
            var t, e, n, i, o, s, r;
            for (n = "http://uniqueway.b0.upaiyun.com/rate_prize_new/", o = +$(".now-step:first").text(), r = +$(".total-step:first").text(), t = 9, i = Math.round(o / r * t), e = 0, s = []; i > e;)$(".gift-imgs img:eq(" + e + ")").attr("src", "" + n + (e + 1) + ".jpg"), s.push(e++);
            return s
        }
    })
}.call(this), function (t, e, n) {
    "function" == typeof define && define.amd ? define(["jquery"], function (i) {
        return n(i, t, e), i.mobile
    }) : n(t.jQuery, t, e)
}(this, document, function (t, e, n) {
    !function (t, e, n, i) {
        function o(t) {
            for (; t && "undefined" != typeof t.originalEvent;)t = t.originalEvent;
            return t
        }

        function s(e, n) {
            var s, r, a, l, c, u, h, d, p, f = e.type;
            if (e = t.Event(e), e.type = n, s = e.originalEvent, r = t.event.props, f.search(/^(mouse|click)/) > -1 && (r = j), s)for (h = r.length, l; h;)l = r[--h], e[l] = s[l];
            if (f.search(/mouse(down|up)|click/) > -1 && !e.which && (e.which = 1), -1 !== f.search(/^touch/) && (a = o(s), f = a.touches, c = a.changedTouches, u = f && f.length ? f[0] : c && c.length ? c[0] : i, u))for (d = 0, p = E.length; p > d; d++)l = E[d], e[l] = u[l];
            return e
        }

        function r(e) {
            for (var n, i, o = {}; e;) {
                n = t.data(e, C);
                for (i in n)n[i] && (o[i] = o.hasVirtualBinding = !0);
                e = e.parentNode
            }
            return o
        }

        function a(e, n) {
            for (var i; e;) {
                if (i = t.data(e, C), i && (!n || i[n]))return e;
                e = e.parentNode
            }
            return null
        }

        function l() {
            M = !1
        }

        function c() {
            M = !0
        }

        function u() {
            z = 0, D.length = 0, I = !1, c()
        }

        function h() {
            l()
        }

        function d() {
            p(), L = setTimeout(function () {
                L = 0, u()
            }, t.vmouse.resetTimerDuration)
        }

        function p() {
            L && (clearTimeout(L), L = 0)
        }

        function f(e, n, i) {
            var o;
            return (i && i[e] || !i && a(n.target, e)) && (o = s(n, e), t(n.target).trigger(o)), o
        }

        function m(e) {
            var n = t.data(e.target, S);
            if (!(I || z && z === n)) {
                var i = f("v" + e.type, e);
                i && (i.isDefaultPrevented() && e.preventDefault(), i.isPropagationStopped() && e.stopPropagation(), i.isImmediatePropagationStopped() && e.stopImmediatePropagation())
            }
        }

        function g(e) {
            var n, i, s = o(e).touches;
            if (s && 1 === s.length && (n = e.target, i = r(n), i.hasVirtualBinding)) {
                z = F++, t.data(n, S, z), p(), h(), P = !1;
                var a = o(e).touches[0];
                A = a.pageX, O = a.pageY, f("vmouseover", e, i), f("vmousedown", e, i)
            }
        }

        function v(t) {
            M || (P || f("vmousecancel", t, r(t.target)), P = !0, d())
        }

        function y(e) {
            if (!M) {
                var n = o(e).touches[0], i = P, s = t.vmouse.moveDistanceThreshold, a = r(e.target);
                P = P || Math.abs(n.pageX - A) > s || Math.abs(n.pageY - O) > s, P && !i && f("vmousecancel", e, a), f("vmousemove", e, a), d()
            }
        }

        function b(t) {
            if (!M) {
                c();
                var e, n = r(t.target);
                if (f("vmouseup", t, n), !P) {
                    var i = f("vclick", t, n);
                    i && i.isDefaultPrevented() && (e = o(t).changedTouches[0], D.push({
                        touchID: z,
                        x: e.clientX,
                        y: e.clientY
                    }), I = !0)
                }
                f("vmouseout", t, n), P = !1, d()
            }
        }

        function w(e) {
            var n, i = t.data(e, C);
            if (i)for (n in i)if (i[n])return !0;
            return !1
        }

        function x() {
        }

        function k(e) {
            var n = e.substr(1);
            return {
                setup: function () {
                    w(this) || t.data(this, C, {});
                    var i = t.data(this, C);
                    i[e] = !0, N[e] = (N[e] || 0) + 1, 1 === N[e] && R.bind(n, m), t(this).bind(n, x), H && (N.touchstart = (N.touchstart || 0) + 1, 1 === N.touchstart && R.bind("touchstart", g).bind("touchend", b).bind("touchmove", y).bind("scroll", v))
                }, teardown: function () {
                    --N[e], N[e] || R.unbind(n, m), H && (--N.touchstart, N.touchstart || R.unbind("touchstart", g).unbind("touchmove", y).unbind("touchend", b).unbind("scroll", v));
                    var i = t(this), o = t.data(this, C);
                    o && (o[e] = !1), i.unbind(n, x), w(this) || i.removeData(C)
                }
            }
        }

        var T, C = "virtualMouseBindings", S = "virtualTouchID", $ = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "), E = "clientX clientY pageX pageY screenX screenY".split(" "), _ = t.event.mouseHooks ? t.event.mouseHooks.props : [], j = t.event.props.concat(_), N = {}, L = 0, A = 0, O = 0, P = !1, D = [], I = !1, M = !1, H = "addEventListener"in n, R = t(n), F = 1, z = 0;
        t.vmouse = {moveDistanceThreshold: 10, clickDistanceThreshold: 10, resetTimerDuration: 1500};
        for (var q = 0; q < $.length; q++)t.event.special[$[q]] = k($[q]);
        H && n.addEventListener("click", function (e) {
            var n, i, o, s, r, a, l = D.length, c = e.target;
            if (l)for (n = e.clientX, i = e.clientY, T = t.vmouse.clickDistanceThreshold, o = c; o;) {
                for (s = 0; l > s; s++)if (r = D[s], a = 0, o === c && Math.abs(r.x - n) < T && Math.abs(r.y - i) < T || t.data(o, S) === r.touchID)return e.preventDefault(), void e.stopPropagation();
                o = o.parentNode
            }
        }, !0)
    }(t, e, n), function (t) {
        t.mobile = {}
    }(t), function (t) {
        var e = {touch: "ontouchend"in n};
        t.mobile.support = t.mobile.support || {}, t.extend(t.support, e), t.extend(t.mobile.support, e)
    }(t), function (t, e, i) {
        function o(e, n, i) {
            var o = i.type;
            i.type = n, t.event.dispatch.call(e, i), i.type = o
        }

        var s = t(n);
        t.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function (e, n) {
            t.fn[n] = function (t) {
                return t ? this.bind(n, t) : this.trigger(n)
            }, t.attrFn && (t.attrFn[n] = !0)
        });
        var r = t.mobile.support.touch, a = "touchmove scroll", l = r ? "touchstart" : "mousedown", c = r ? "touchend" : "mouseup", u = r ? "touchmove" : "mousemove";
        t.event.special.scrollstart = {
            enabled: !0, setup: function () {
                function e(t, e) {
                    n = e, o(s, n ? "scrollstart" : "scrollstop", t)
                }

                var n, i, s = this, r = t(s);
                r.bind(a, function (o) {
                    t.event.special.scrollstart.enabled && (n || e(o, !0), clearTimeout(i), i = setTimeout(function () {
                        e(o, !1)
                    }, 50))
                })
            }
        }, t.event.special.tap = {
            tapholdThreshold: 750, setup: function () {
                var e = this, n = t(e);
                n.bind("vmousedown", function (i) {
                    function r() {
                        clearTimeout(c)
                    }

                    function a() {
                        r(), n.unbind("vclick", l).unbind("vmouseup", r), s.unbind("vmousecancel", a)
                    }

                    function l(t) {
                        a(), u === t.target && o(e, "tap", t)
                    }

                    if (i.which && 1 !== i.which)return !1;
                    {
                        var c, u = i.target;
                        i.originalEvent
                    }
                    n.bind("vmouseup", r).bind("vclick", l), s.bind("vmousecancel", a), c = setTimeout(function () {
                        o(e, "taphold", t.Event("taphold", {target: u}))
                    }, t.event.special.tap.tapholdThreshold)
                })
            }
        }, t.event.special.swipe = {
            scrollSupressionThreshold: 30,
            durationThreshold: 1e3,
            horizontalDistanceThreshold: 30,
            verticalDistanceThreshold: 75,
            start: function (e) {
                var n = e.originalEvent.touches ? e.originalEvent.touches[0] : e;
                return {time: (new Date).getTime(), coords: [n.pageX, n.pageY], origin: t(e.target)}
            },
            stop: function (t) {
                var e = t.originalEvent.touches ? t.originalEvent.touches[0] : t;
                return {time: (new Date).getTime(), coords: [e.pageX, e.pageY]}
            },
            handleSwipe: function (e, n) {
                n.time - e.time < t.event.special.swipe.durationThreshold && Math.abs(e.coords[0] - n.coords[0]) > t.event.special.swipe.horizontalDistanceThreshold && Math.abs(e.coords[1] - n.coords[1]) < t.event.special.swipe.verticalDistanceThreshold && e.origin.trigger("swipe").trigger(e.coords[0] > n.coords[0] ? "swipeleft" : "swiperight")
            },
            setup: function () {
                var e = this, n = t(e);
                n.bind(l, function (e) {
                    function o(e) {
                        r && (s = t.event.special.swipe.stop(e), Math.abs(r.coords[0] - s.coords[0]) > t.event.special.swipe.scrollSupressionThreshold && e.preventDefault())
                    }

                    var s, r = t.event.special.swipe.start(e);
                    n.bind(u, o).one(c, function () {
                        n.unbind(u, o), r && s && t.event.special.swipe.handleSwipe(r, s), r = s = i
                    })
                })
            }
        }, t.each({
            scrollstop: "scrollstart",
            taphold: "tap",
            swipeleft: "swipe",
            swiperight: "swipe"
        }, function (e, n) {
            t.event.special[e] = {
                setup: function () {
                    t(this).bind(n, t.noop)
                }
            }
        })
    }(t, this)
}), function (t) {
    "undefined" == typeof t.fn.each2 && t.extend(t.fn, {
        each2: function (e) {
            for (var n = t([0]), i = -1, o = this.length; ++i < o && (n.context = n[0] = this[i]) && e.call(n[0], i, n) !== !1;);
            return this
        }
    })
}(jQuery), function (t, e) {
    "use strict";
    function n(e) {
        var n = t(document.createTextNode(""));
        e.before(n), n.before(e), n.remove()
    }

    function i(t) {
        function e(t) {
            return F[t] || t
        }

        return t.replace(/[^\u0000-\u007E]/g, e)
    }

    function o(t, e) {
        for (var n = 0, i = e.length; i > n; n += 1)if (r(t, e[n]))return n;
        return -1
    }

    function s() {
        var e = t(R);
        e.appendTo(document.body);
        var n = {width: e.width() - e[0].clientWidth, height: e.height() - e[0].clientHeight};
        return e.remove(), n
    }

    function r(t, n) {
        return t === n ? !0 : t === e || n === e ? !1 : null === t || null === n ? !1 : t.constructor === String ? t + "" == n + "" : n.constructor === String ? n + "" == t + "" : !1
    }

    function a(t, e, n) {
        var i, o, s;
        if (null === t || t.length < 1)return [];
        for (i = t.split(e), o = 0, s = i.length; s > o; o += 1)i[o] = n(i[o]);
        return i
    }

    function l(t) {
        return t.outerWidth(!1) - t.width()
    }

    function c(n) {
        var i = "keyup-change-value";
        n.on("keydown", function () {
            t.data(n, i) === e && t.data(n, i, n.val())
        }), n.on("keyup", function () {
            var o = t.data(n, i);
            o !== e && n.val() !== o && (t.removeData(n, i), n.trigger("keyup-change"))
        })
    }

    function u(n) {
        n.on("mousemove", function (n) {
            var i = M;
            (i === e || i.x !== n.pageX || i.y !== n.pageY) && t(n.target).trigger("mousemove-filtered", n)
        })
    }

    function h(t, n, i) {
        i = i || e;
        var o;
        return function () {
            var e = arguments;
            window.clearTimeout(o), o = window.setTimeout(function () {
                n.apply(i, e)
            }, t)
        }
    }

    function d(t, e) {
        var n = h(t, function (t) {
            e.trigger("scroll-debounced", t)
        });
        e.on("scroll", function (t) {
            o(t.target, e.get()) >= 0 && n(t)
        })
    }

    function p(t) {
        t[0] !== document.activeElement && window.setTimeout(function () {
            var e, n = t[0], i = t.val().length;
            t.focus();
            var o = n.offsetWidth > 0 || n.offsetHeight > 0;
            o && n === document.activeElement && (n.setSelectionRange ? n.setSelectionRange(i, i) : n.createTextRange && (e = n.createTextRange(), e.collapse(!1), e.select()))
        }, 0)
    }

    function f(e) {
        e = t(e)[0];
        var n = 0, i = 0;
        if ("selectionStart"in e)n = e.selectionStart, i = e.selectionEnd - n; else if ("selection"in document) {
            e.focus();
            var o = document.selection.createRange();
            i = document.selection.createRange().text.length, o.moveStart("character", -e.value.length), n = o.text.length - i
        }
        return {offset: n, length: i}
    }

    function m(t) {
        t.preventDefault(), t.stopPropagation()
    }

    function g(t) {
        t.preventDefault(), t.stopImmediatePropagation()
    }

    function v(e) {
        if (!P) {
            var n = e[0].currentStyle || window.getComputedStyle(e[0], null);
            P = t(document.createElement("div")).css({
                position: "absolute",
                left: "-10000px",
                top: "-10000px",
                display: "none",
                fontSize: n.fontSize,
                fontFamily: n.fontFamily,
                fontStyle: n.fontStyle,
                fontWeight: n.fontWeight,
                letterSpacing: n.letterSpacing,
                textTransform: n.textTransform,
                whiteSpace: "nowrap"
            }), P.attr("class", "select2-sizer"), t(document.body).append(P)
        }
        return P.text(e.val()), P.width()
    }

    function y(e, n, i) {
        var o, s, r = [];
        o = t.trim(e.attr("class")), o && (o = "" + o, t(o.split(/\s+/)).each2(function () {
            0 === this.indexOf("select2-") && r.push(this)
        })), o = t.trim(n.attr("class")), o && (o = "" + o, t(o.split(/\s+/)).each2(function () {
            0 !== this.indexOf("select2-") && (s = i(this), s && r.push(s))
        })), e.attr("class", r.join(" "))
    }

    function b(t, e, n, o) {
        var s = i(t.toUpperCase()).indexOf(i(e.toUpperCase())), r = e.length;
        return 0 > s ? void n.push(o(t)) : (n.push(o(t.substring(0, s))), n.push("<span class='select2-match'>"), n.push(o(t.substring(s, s + r))), n.push("</span>"), void n.push(o(t.substring(s + r, t.length))))
    }

    function w(t) {
        var e = {"\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;"};
        return String(t).replace(/[&<>"'\/\\]/g, function (t) {
            return e[t]
        })
    }

    function x(n) {
        var i, o = null, s = n.quietMillis || 100, r = n.url, a = this;
        return function (l) {
            window.clearTimeout(i), i = window.setTimeout(function () {
                var i = n.data, s = r, c = n.transport || t.fn.select2.ajaxDefaults.transport, u = {
                    type: n.type || "GET",
                    cache: n.cache || !1,
                    jsonpCallback: n.jsonpCallback || e,
                    dataType: n.dataType || "json"
                }, h = t.extend({}, t.fn.select2.ajaxDefaults.params, u);
                i = i ? i.call(a, l.term, l.page, l.context) : null, s = "function" == typeof s ? s.call(a, l.term, l.page, l.context) : s, o && "function" == typeof o.abort && o.abort(), n.params && (t.isFunction(n.params) ? t.extend(h, n.params.call(a)) : t.extend(h, n.params)), t.extend(h, {
                    url: s,
                    dataType: n.dataType,
                    data: i,
                    success: function (t) {
                        var e = n.results(t, l.page, l);
                        l.callback(e)
                    },
                    error: function (t, e, n) {
                        var i = {hasError: !0, jqXHR: t, textStatus: e, errorThrown: n};
                        l.callback(i)
                    }
                }), o = c.call(a, h)
            }, s)
        }
    }

    function k(e) {
        var n, i, o = e, s = function (t) {
            return "" + t.text
        };
        t.isArray(o) && (i = o, o = {results: i}), t.isFunction(o) === !1 && (i = o, o = function () {
            return i
        });
        var r = o();
        return r.text && (s = r.text, t.isFunction(s) || (n = r.text, s = function (t) {
            return t[n]
        })), function (e) {
            var n, i = e.term, r = {results: []};
            return "" === i ? void e.callback(o()) : (n = function (o, r) {
                var a, l;
                if (o = o[0], o.children) {
                    a = {};
                    for (l in o)o.hasOwnProperty(l) && (a[l] = o[l]);
                    a.children = [], t(o.children).each2(function (t, e) {
                        n(e, a.children)
                    }), (a.children.length || e.matcher(i, s(a), o)) && r.push(a)
                } else e.matcher(i, s(o), o) && r.push(o)
            }, t(o().results).each2(function (t, e) {
                n(e, r.results)
            }), void e.callback(r))
        }
    }

    function T(n) {
        var i = t.isFunction(n);
        return function (o) {
            var s = o.term, r = {results: []}, a = i ? n(o) : n;
            t.isArray(a) && (t(a).each(function () {
                var t = this.text !== e, n = t ? this.text : this;
                ("" === s || o.matcher(s, n)) && r.results.push(t ? this : {id: this, text: this})
            }), o.callback(r))
        }
    }

    function C(e, n) {
        if (t.isFunction(e))return !0;
        if (!e)return !1;
        if ("string" == typeof e)return !0;
        throw new Error(n + " must be a string, function, or falsy value")
    }

    function S(e, n) {
        if (t.isFunction(e)) {
            var i = Array.prototype.slice.call(arguments, 2);
            return e.apply(n, i)
        }
        return e
    }

    function $(e) {
        var n = 0;
        return t.each(e, function (t, e) {
            e.children ? n += $(e.children) : n++
        }), n
    }

    function E(t, n, i, o) {
        var s, a, l, c, u, h = t, d = !1;
        if (!o.createSearchChoice || !o.tokenSeparators || o.tokenSeparators.length < 1)return e;
        for (; ;) {
            for (a = -1, l = 0, c = o.tokenSeparators.length; c > l && (u = o.tokenSeparators[l], a = t.indexOf(u), !(a >= 0)); l++);
            if (0 > a)break;
            if (s = t.substring(0, a), t = t.substring(a + u.length), s.length > 0 && (s = o.createSearchChoice.call(this, s, n), s !== e && null !== s && o.id(s) !== e && null !== o.id(s))) {
                for (d = !1, l = 0, c = n.length; c > l; l++)if (r(o.id(s), o.id(n[l]))) {
                    d = !0;
                    break
                }
                d || i(s)
            }
        }
        return h !== t ? t : void 0
    }

    function _() {
        var e = this;
        t.each(arguments, function (t, n) {
            e[n].remove(), e[n] = null
        })
    }

    function j(e, n) {
        var i = function () {
        };
        return i.prototype = new e, i.prototype.constructor = i, i.prototype.parent = e.prototype, i.prototype = t.extend(i.prototype, n), i
    }

    if (window.Select2 === e) {
        var N, L, A, O, P, D, I, M = {x: 0, y: 0}, H = {
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            SPACE: 32,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            HOME: 36,
            END: 35,
            BACKSPACE: 8,
            DELETE: 46,
            isArrow: function (t) {
                switch (t = t.which ? t.which : t) {
                    case H.LEFT:
                    case H.RIGHT:
                    case H.UP:
                    case H.DOWN:
                        return !0
                }
                return !1
            },
            isControl: function (t) {
                var e = t.which;
                switch (e) {
                    case H.SHIFT:
                    case H.CTRL:
                    case H.ALT:
                        return !0
                }
                return t.metaKey ? !0 : !1
            },
            isFunctionKey: function (t) {
                return t = t.which ? t.which : t, t >= 112 && 123 >= t
            }
        }, R = "<div class='select2-measure-scrollbar'></div>", F = {
            "\u24b6": "A",
            "\uff21": "A",
            "\xc0": "A",
            "\xc1": "A",
            "\xc2": "A",
            "\u1ea6": "A",
            "\u1ea4": "A",
            "\u1eaa": "A",
            "\u1ea8": "A",
            "\xc3": "A",
            "\u0100": "A",
            "\u0102": "A",
            "\u1eb0": "A",
            "\u1eae": "A",
            "\u1eb4": "A",
            "\u1eb2": "A",
            "\u0226": "A",
            "\u01e0": "A",
            "\xc4": "A",
            "\u01de": "A",
            "\u1ea2": "A",
            "\xc5": "A",
            "\u01fa": "A",
            "\u01cd": "A",
            "\u0200": "A",
            "\u0202": "A",
            "\u1ea0": "A",
            "\u1eac": "A",
            "\u1eb6": "A",
            "\u1e00": "A",
            "\u0104": "A",
            "\u023a": "A",
            "\u2c6f": "A",
            "\ua732": "AA",
            "\xc6": "AE",
            "\u01fc": "AE",
            "\u01e2": "AE",
            "\ua734": "AO",
            "\ua736": "AU",
            "\ua738": "AV",
            "\ua73a": "AV",
            "\ua73c": "AY",
            "\u24b7": "B",
            "\uff22": "B",
            "\u1e02": "B",
            "\u1e04": "B",
            "\u1e06": "B",
            "\u0243": "B",
            "\u0182": "B",
            "\u0181": "B",
            "\u24b8": "C",
            "\uff23": "C",
            "\u0106": "C",
            "\u0108": "C",
            "\u010a": "C",
            "\u010c": "C",
            "\xc7": "C",
            "\u1e08": "C",
            "\u0187": "C",
            "\u023b": "C",
            "\ua73e": "C",
            "\u24b9": "D",
            "\uff24": "D",
            "\u1e0a": "D",
            "\u010e": "D",
            "\u1e0c": "D",
            "\u1e10": "D",
            "\u1e12": "D",
            "\u1e0e": "D",
            "\u0110": "D",
            "\u018b": "D",
            "\u018a": "D",
            "\u0189": "D",
            "\ua779": "D",
            "\u01f1": "DZ",
            "\u01c4": "DZ",
            "\u01f2": "Dz",
            "\u01c5": "Dz",
            "\u24ba": "E",
            "\uff25": "E",
            "\xc8": "E",
            "\xc9": "E",
            "\xca": "E",
            "\u1ec0": "E",
            "\u1ebe": "E",
            "\u1ec4": "E",
            "\u1ec2": "E",
            "\u1ebc": "E",
            "\u0112": "E",
            "\u1e14": "E",
            "\u1e16": "E",
            "\u0114": "E",
            "\u0116": "E",
            "\xcb": "E",
            "\u1eba": "E",
            "\u011a": "E",
            "\u0204": "E",
            "\u0206": "E",
            "\u1eb8": "E",
            "\u1ec6": "E",
            "\u0228": "E",
            "\u1e1c": "E",
            "\u0118": "E",
            "\u1e18": "E",
            "\u1e1a": "E",
            "\u0190": "E",
            "\u018e": "E",
            "\u24bb": "F",
            "\uff26": "F",
            "\u1e1e": "F",
            "\u0191": "F",
            "\ua77b": "F",
            "\u24bc": "G",
            "\uff27": "G",
            "\u01f4": "G",
            "\u011c": "G",
            "\u1e20": "G",
            "\u011e": "G",
            "\u0120": "G",
            "\u01e6": "G",
            "\u0122": "G",
            "\u01e4": "G",
            "\u0193": "G",
            "\ua7a0": "G",
            "\ua77d": "G",
            "\ua77e": "G",
            "\u24bd": "H",
            "\uff28": "H",
            "\u0124": "H",
            "\u1e22": "H",
            "\u1e26": "H",
            "\u021e": "H",
            "\u1e24": "H",
            "\u1e28": "H",
            "\u1e2a": "H",
            "\u0126": "H",
            "\u2c67": "H",
            "\u2c75": "H",
            "\ua78d": "H",
            "\u24be": "I",
            "\uff29": "I",
            "\xcc": "I",
            "\xcd": "I",
            "\xce": "I",
            "\u0128": "I",
            "\u012a": "I",
            "\u012c": "I",
            "\u0130": "I",
            "\xcf": "I",
            "\u1e2e": "I",
            "\u1ec8": "I",
            "\u01cf": "I",
            "\u0208": "I",
            "\u020a": "I",
            "\u1eca": "I",
            "\u012e": "I",
            "\u1e2c": "I",
            "\u0197": "I",
            "\u24bf": "J",
            "\uff2a": "J",
            "\u0134": "J",
            "\u0248": "J",
            "\u24c0": "K",
            "\uff2b": "K",
            "\u1e30": "K",
            "\u01e8": "K",
            "\u1e32": "K",
            "\u0136": "K",
            "\u1e34": "K",
            "\u0198": "K",
            "\u2c69": "K",
            "\ua740": "K",
            "\ua742": "K",
            "\ua744": "K",
            "\ua7a2": "K",
            "\u24c1": "L",
            "\uff2c": "L",
            "\u013f": "L",
            "\u0139": "L",
            "\u013d": "L",
            "\u1e36": "L",
            "\u1e38": "L",
            "\u013b": "L",
            "\u1e3c": "L",
            "\u1e3a": "L",
            "\u0141": "L",
            "\u023d": "L",
            "\u2c62": "L",
            "\u2c60": "L",
            "\ua748": "L",
            "\ua746": "L",
            "\ua780": "L",
            "\u01c7": "LJ",
            "\u01c8": "Lj",
            "\u24c2": "M",
            "\uff2d": "M",
            "\u1e3e": "M",
            "\u1e40": "M",
            "\u1e42": "M",
            "\u2c6e": "M",
            "\u019c": "M",
            "\u24c3": "N",
            "\uff2e": "N",
            "\u01f8": "N",
            "\u0143": "N",
            "\xd1": "N",
            "\u1e44": "N",
            "\u0147": "N",
            "\u1e46": "N",
            "\u0145": "N",
            "\u1e4a": "N",
            "\u1e48": "N",
            "\u0220": "N",
            "\u019d": "N",
            "\ua790": "N",
            "\ua7a4": "N",
            "\u01ca": "NJ",
            "\u01cb": "Nj",
            "\u24c4": "O",
            "\uff2f": "O",
            "\xd2": "O",
            "\xd3": "O",
            "\xd4": "O",
            "\u1ed2": "O",
            "\u1ed0": "O",
            "\u1ed6": "O",
            "\u1ed4": "O",
            "\xd5": "O",
            "\u1e4c": "O",
            "\u022c": "O",
            "\u1e4e": "O",
            "\u014c": "O",
            "\u1e50": "O",
            "\u1e52": "O",
            "\u014e": "O",
            "\u022e": "O",
            "\u0230": "O",
            "\xd6": "O",
            "\u022a": "O",
            "\u1ece": "O",
            "\u0150": "O",
            "\u01d1": "O",
            "\u020c": "O",
            "\u020e": "O",
            "\u01a0": "O",
            "\u1edc": "O",
            "\u1eda": "O",
            "\u1ee0": "O",
            "\u1ede": "O",
            "\u1ee2": "O",
            "\u1ecc": "O",
            "\u1ed8": "O",
            "\u01ea": "O",
            "\u01ec": "O",
            "\xd8": "O",
            "\u01fe": "O",
            "\u0186": "O",
            "\u019f": "O",
            "\ua74a": "O",
            "\ua74c": "O",
            "\u01a2": "OI",
            "\ua74e": "OO",
            "\u0222": "OU",
            "\u24c5": "P",
            "\uff30": "P",
            "\u1e54": "P",
            "\u1e56": "P",
            "\u01a4": "P",
            "\u2c63": "P",
            "\ua750": "P",
            "\ua752": "P",
            "\ua754": "P",
            "\u24c6": "Q",
            "\uff31": "Q",
            "\ua756": "Q",
            "\ua758": "Q",
            "\u024a": "Q",
            "\u24c7": "R",
            "\uff32": "R",
            "\u0154": "R",
            "\u1e58": "R",
            "\u0158": "R",
            "\u0210": "R",
            "\u0212": "R",
            "\u1e5a": "R",
            "\u1e5c": "R",
            "\u0156": "R",
            "\u1e5e": "R",
            "\u024c": "R",
            "\u2c64": "R",
            "\ua75a": "R",
            "\ua7a6": "R",
            "\ua782": "R",
            "\u24c8": "S",
            "\uff33": "S",
            "\u1e9e": "S",
            "\u015a": "S",
            "\u1e64": "S",
            "\u015c": "S",
            "\u1e60": "S",
            "\u0160": "S",
            "\u1e66": "S",
            "\u1e62": "S",
            "\u1e68": "S",
            "\u0218": "S",
            "\u015e": "S",
            "\u2c7e": "S",
            "\ua7a8": "S",
            "\ua784": "S",
            "\u24c9": "T",
            "\uff34": "T",
            "\u1e6a": "T",
            "\u0164": "T",
            "\u1e6c": "T",
            "\u021a": "T",
            "\u0162": "T",
            "\u1e70": "T",
            "\u1e6e": "T",
            "\u0166": "T",
            "\u01ac": "T",
            "\u01ae": "T",
            "\u023e": "T",
            "\ua786": "T",
            "\ua728": "TZ",
            "\u24ca": "U",
            "\uff35": "U",
            "\xd9": "U",
            "\xda": "U",
            "\xdb": "U",
            "\u0168": "U",
            "\u1e78": "U",
            "\u016a": "U",
            "\u1e7a": "U",
            "\u016c": "U",
            "\xdc": "U",
            "\u01db": "U",
            "\u01d7": "U",
            "\u01d5": "U",
            "\u01d9": "U",
            "\u1ee6": "U",
            "\u016e": "U",
            "\u0170": "U",
            "\u01d3": "U",
            "\u0214": "U",
            "\u0216": "U",
            "\u01af": "U",
            "\u1eea": "U",
            "\u1ee8": "U",
            "\u1eee": "U",
            "\u1eec": "U",
            "\u1ef0": "U",
            "\u1ee4": "U",
            "\u1e72": "U",
            "\u0172": "U",
            "\u1e76": "U",
            "\u1e74": "U",
            "\u0244": "U",
            "\u24cb": "V",
            "\uff36": "V",
            "\u1e7c": "V",
            "\u1e7e": "V",
            "\u01b2": "V",
            "\ua75e": "V",
            "\u0245": "V",
            "\ua760": "VY",
            "\u24cc": "W",
            "\uff37": "W",
            "\u1e80": "W",
            "\u1e82": "W",
            "\u0174": "W",
            "\u1e86": "W",
            "\u1e84": "W",
            "\u1e88": "W",
            "\u2c72": "W",
            "\u24cd": "X",
            "\uff38": "X",
            "\u1e8a": "X",
            "\u1e8c": "X",
            "\u24ce": "Y",
            "\uff39": "Y",
            "\u1ef2": "Y",
            "\xdd": "Y",
            "\u0176": "Y",
            "\u1ef8": "Y",
            "\u0232": "Y",
            "\u1e8e": "Y",
            "\u0178": "Y",
            "\u1ef6": "Y",
            "\u1ef4": "Y",
            "\u01b3": "Y",
            "\u024e": "Y",
            "\u1efe": "Y",
            "\u24cf": "Z",
            "\uff3a": "Z",
            "\u0179": "Z",
            "\u1e90": "Z",
            "\u017b": "Z",
            "\u017d": "Z",
            "\u1e92": "Z",
            "\u1e94": "Z",
            "\u01b5": "Z",
            "\u0224": "Z",
            "\u2c7f": "Z",
            "\u2c6b": "Z",
            "\ua762": "Z",
            "\u24d0": "a",
            "\uff41": "a",
            "\u1e9a": "a",
            "\xe0": "a",
            "\xe1": "a",
            "\xe2": "a",
            "\u1ea7": "a",
            "\u1ea5": "a",
            "\u1eab": "a",
            "\u1ea9": "a",
            "\xe3": "a",
            "\u0101": "a",
            "\u0103": "a",
            "\u1eb1": "a",
            "\u1eaf": "a",
            "\u1eb5": "a",
            "\u1eb3": "a",
            "\u0227": "a",
            "\u01e1": "a",
            "\xe4": "a",
            "\u01df": "a",
            "\u1ea3": "a",
            "\xe5": "a",
            "\u01fb": "a",
            "\u01ce": "a",
            "\u0201": "a",
            "\u0203": "a",
            "\u1ea1": "a",
            "\u1ead": "a",
            "\u1eb7": "a",
            "\u1e01": "a",
            "\u0105": "a",
            "\u2c65": "a",
            "\u0250": "a",
            "\ua733": "aa",
            "\xe6": "ae",
            "\u01fd": "ae",
            "\u01e3": "ae",
            "\ua735": "ao",
            "\ua737": "au",
            "\ua739": "av",
            "\ua73b": "av",
            "\ua73d": "ay",
            "\u24d1": "b",
            "\uff42": "b",
            "\u1e03": "b",
            "\u1e05": "b",
            "\u1e07": "b",
            "\u0180": "b",
            "\u0183": "b",
            "\u0253": "b",
            "\u24d2": "c",
            "\uff43": "c",
            "\u0107": "c",
            "\u0109": "c",
            "\u010b": "c",
            "\u010d": "c",
            "\xe7": "c",
            "\u1e09": "c",
            "\u0188": "c",
            "\u023c": "c",
            "\ua73f": "c",
            "\u2184": "c",
            "\u24d3": "d",
            "\uff44": "d",
            "\u1e0b": "d",
            "\u010f": "d",
            "\u1e0d": "d",
            "\u1e11": "d",
            "\u1e13": "d",
            "\u1e0f": "d",
            "\u0111": "d",
            "\u018c": "d",
            "\u0256": "d",
            "\u0257": "d",
            "\ua77a": "d",
            "\u01f3": "dz",
            "\u01c6": "dz",
            "\u24d4": "e",
            "\uff45": "e",
            "\xe8": "e",
            "\xe9": "e",
            "\xea": "e",
            "\u1ec1": "e",
            "\u1ebf": "e",
            "\u1ec5": "e",
            "\u1ec3": "e",
            "\u1ebd": "e",
            "\u0113": "e",
            "\u1e15": "e",
            "\u1e17": "e",
            "\u0115": "e",
            "\u0117": "e",
            "\xeb": "e",
            "\u1ebb": "e",
            "\u011b": "e",
            "\u0205": "e",
            "\u0207": "e",
            "\u1eb9": "e",
            "\u1ec7": "e",
            "\u0229": "e",
            "\u1e1d": "e",
            "\u0119": "e",
            "\u1e19": "e",
            "\u1e1b": "e",
            "\u0247": "e",
            "\u025b": "e",
            "\u01dd": "e",
            "\u24d5": "f",
            "\uff46": "f",
            "\u1e1f": "f",
            "\u0192": "f",
            "\ua77c": "f",
            "\u24d6": "g",
            "\uff47": "g",
            "\u01f5": "g",
            "\u011d": "g",
            "\u1e21": "g",
            "\u011f": "g",
            "\u0121": "g",
            "\u01e7": "g",
            "\u0123": "g",
            "\u01e5": "g",
            "\u0260": "g",
            "\ua7a1": "g",
            "\u1d79": "g",
            "\ua77f": "g",
            "\u24d7": "h",
            "\uff48": "h",
            "\u0125": "h",
            "\u1e23": "h",
            "\u1e27": "h",
            "\u021f": "h",
            "\u1e25": "h",
            "\u1e29": "h",
            "\u1e2b": "h",
            "\u1e96": "h",
            "\u0127": "h",
            "\u2c68": "h",
            "\u2c76": "h",
            "\u0265": "h",
            "\u0195": "hv",
            "\u24d8": "i",
            "\uff49": "i",
            "\xec": "i",
            "\xed": "i",
            "\xee": "i",
            "\u0129": "i",
            "\u012b": "i",
            "\u012d": "i",
            "\xef": "i",
            "\u1e2f": "i",
            "\u1ec9": "i",
            "\u01d0": "i",
            "\u0209": "i",
            "\u020b": "i",
            "\u1ecb": "i",
            "\u012f": "i",
            "\u1e2d": "i",
            "\u0268": "i",
            "\u0131": "i",
            "\u24d9": "j",
            "\uff4a": "j",
            "\u0135": "j",
            "\u01f0": "j",
            "\u0249": "j",
            "\u24da": "k",
            "\uff4b": "k",
            "\u1e31": "k",
            "\u01e9": "k",
            "\u1e33": "k",
            "\u0137": "k",
            "\u1e35": "k",
            "\u0199": "k",
            "\u2c6a": "k",
            "\ua741": "k",
            "\ua743": "k",
            "\ua745": "k",
            "\ua7a3": "k",
            "\u24db": "l",
            "\uff4c": "l",
            "\u0140": "l",
            "\u013a": "l",
            "\u013e": "l",
            "\u1e37": "l",
            "\u1e39": "l",
            "\u013c": "l",
            "\u1e3d": "l",
            "\u1e3b": "l",
            "\u017f": "l",
            "\u0142": "l",
            "\u019a": "l",
            "\u026b": "l",
            "\u2c61": "l",
            "\ua749": "l",
            "\ua781": "l",
            "\ua747": "l",
            "\u01c9": "lj",
            "\u24dc": "m",
            "\uff4d": "m",
            "\u1e3f": "m",
            "\u1e41": "m",
            "\u1e43": "m",
            "\u0271": "m",
            "\u026f": "m",
            "\u24dd": "n",
            "\uff4e": "n",
            "\u01f9": "n",
            "\u0144": "n",
            "\xf1": "n",
            "\u1e45": "n",
            "\u0148": "n",
            "\u1e47": "n",
            "\u0146": "n",
            "\u1e4b": "n",
            "\u1e49": "n",
            "\u019e": "n",
            "\u0272": "n",
            "\u0149": "n",
            "\ua791": "n",
            "\ua7a5": "n",
            "\u01cc": "nj",
            "\u24de": "o",
            "\uff4f": "o",
            "\xf2": "o",
            "\xf3": "o",
            "\xf4": "o",
            "\u1ed3": "o",
            "\u1ed1": "o",
            "\u1ed7": "o",
            "\u1ed5": "o",
            "\xf5": "o",
            "\u1e4d": "o",
            "\u022d": "o",
            "\u1e4f": "o",
            "\u014d": "o",
            "\u1e51": "o",
            "\u1e53": "o",
            "\u014f": "o",
            "\u022f": "o",
            "\u0231": "o",
            "\xf6": "o",
            "\u022b": "o",
            "\u1ecf": "o",
            "\u0151": "o",
            "\u01d2": "o",
            "\u020d": "o",
            "\u020f": "o",
            "\u01a1": "o",
            "\u1edd": "o",
            "\u1edb": "o",
            "\u1ee1": "o",
            "\u1edf": "o",
            "\u1ee3": "o",
            "\u1ecd": "o",
            "\u1ed9": "o",
            "\u01eb": "o",
            "\u01ed": "o",
            "\xf8": "o",
            "\u01ff": "o",
            "\u0254": "o",
            "\ua74b": "o",
            "\ua74d": "o",
            "\u0275": "o",
            "\u01a3": "oi",
            "\u0223": "ou",
            "\ua74f": "oo",
            "\u24df": "p",
            "\uff50": "p",
            "\u1e55": "p",
            "\u1e57": "p",
            "\u01a5": "p",
            "\u1d7d": "p",
            "\ua751": "p",
            "\ua753": "p",
            "\ua755": "p",
            "\u24e0": "q",
            "\uff51": "q",
            "\u024b": "q",
            "\ua757": "q",
            "\ua759": "q",
            "\u24e1": "r",
            "\uff52": "r",
            "\u0155": "r",
            "\u1e59": "r",
            "\u0159": "r",
            "\u0211": "r",
            "\u0213": "r",
            "\u1e5b": "r",
            "\u1e5d": "r",
            "\u0157": "r",
            "\u1e5f": "r",
            "\u024d": "r",
            "\u027d": "r",
            "\ua75b": "r",
            "\ua7a7": "r",
            "\ua783": "r",
            "\u24e2": "s",
            "\uff53": "s",
            "\xdf": "s",
            "\u015b": "s",
            "\u1e65": "s",
            "\u015d": "s",
            "\u1e61": "s",
            "\u0161": "s",
            "\u1e67": "s",
            "\u1e63": "s",
            "\u1e69": "s",
            "\u0219": "s",
            "\u015f": "s",
            "\u023f": "s",
            "\ua7a9": "s",
            "\ua785": "s",
            "\u1e9b": "s",
            "\u24e3": "t",
            "\uff54": "t",
            "\u1e6b": "t",
            "\u1e97": "t",
            "\u0165": "t",
            "\u1e6d": "t",
            "\u021b": "t",
            "\u0163": "t",
            "\u1e71": "t",
            "\u1e6f": "t",
            "\u0167": "t",
            "\u01ad": "t",
            "\u0288": "t",
            "\u2c66": "t",
            "\ua787": "t",
            "\ua729": "tz",
            "\u24e4": "u",
            "\uff55": "u",
            "\xf9": "u",
            "\xfa": "u",
            "\xfb": "u",
            "\u0169": "u",
            "\u1e79": "u",
            "\u016b": "u",
            "\u1e7b": "u",
            "\u016d": "u",
            "\xfc": "u",
            "\u01dc": "u",
            "\u01d8": "u",
            "\u01d6": "u",
            "\u01da": "u",
            "\u1ee7": "u",
            "\u016f": "u",
            "\u0171": "u",
            "\u01d4": "u",
            "\u0215": "u",
            "\u0217": "u",
            "\u01b0": "u",
            "\u1eeb": "u",
            "\u1ee9": "u",
            "\u1eef": "u",
            "\u1eed": "u",
            "\u1ef1": "u",
            "\u1ee5": "u",
            "\u1e73": "u",
            "\u0173": "u",
            "\u1e77": "u",
            "\u1e75": "u",
            "\u0289": "u",
            "\u24e5": "v",
            "\uff56": "v",
            "\u1e7d": "v",
            "\u1e7f": "v",
            "\u028b": "v",
            "\ua75f": "v",
            "\u028c": "v",
            "\ua761": "vy",
            "\u24e6": "w",
            "\uff57": "w",
            "\u1e81": "w",
            "\u1e83": "w",
            "\u0175": "w",
            "\u1e87": "w",
            "\u1e85": "w",
            "\u1e98": "w",
            "\u1e89": "w",
            "\u2c73": "w",
            "\u24e7": "x",
            "\uff58": "x",
            "\u1e8b": "x",
            "\u1e8d": "x",
            "\u24e8": "y",
            "\uff59": "y",
            "\u1ef3": "y",
            "\xfd": "y",
            "\u0177": "y",
            "\u1ef9": "y",
            "\u0233": "y",
            "\u1e8f": "y",
            "\xff": "y",
            "\u1ef7": "y",
            "\u1e99": "y",
            "\u1ef5": "y",
            "\u01b4": "y",
            "\u024f": "y",
            "\u1eff": "y",
            "\u24e9": "z",
            "\uff5a": "z",
            "\u017a": "z",
            "\u1e91": "z",
            "\u017c": "z",
            "\u017e": "z",
            "\u1e93": "z",
            "\u1e95": "z",
            "\u01b6": "z",
            "\u0225": "z",
            "\u0240": "z",
            "\u2c6c": "z",
            "\ua763": "z",
            "\u0386": "\u0391",
            "\u0388": "\u0395",
            "\u0389": "\u0397",
            "\u038a": "\u0399",
            "\u03aa": "\u0399",
            "\u038c": "\u039f",
            "\u038e": "\u03a5",
            "\u03ab": "\u03a5",
            "\u038f": "\u03a9",
            "\u03ac": "\u03b1",
            "\u03ad": "\u03b5",
            "\u03ae": "\u03b7",
            "\u03af": "\u03b9",
            "\u03ca": "\u03b9",
            "\u0390": "\u03b9",
            "\u03cc": "\u03bf",
            "\u03cd": "\u03c5",
            "\u03cb": "\u03c5",
            "\u03b0": "\u03c5",
            "\u03c9": "\u03c9",
            "\u03c2": "\u03c3"
        };
        D = t(document), O = function () {
            var t = 1;
            return function () {
                return t++
            }
        }(), N = j(Object, {
            bind: function (t) {
                var e = this;
                return function () {
                    t.apply(e, arguments)
                }
            }, init: function (n) {
                var i, o, r = ".select2-results";
                this.opts = n = this.prepareOpts(n), this.id = n.id, n.element.data("select2") !== e && null !== n.element.data("select2") && n.element.data("select2").destroy(), this.container = this.createContainer(), this.liveRegion = t(".select2-hidden-accessible"), 0 == this.liveRegion.length && (this.liveRegion = t("<span>", {
                    role: "status",
                    "aria-live": "polite"
                }).addClass("select2-hidden-accessible").appendTo(document.body)), this.containerId = "s2id_" + (n.element.attr("id") || "autogen" + O()), this.containerEventName = this.containerId.replace(/([.])/g, "_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"), this.container.attr("id", this.containerId), this.container.attr("title", n.element.attr("title")), this.body = t(document.body), y(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.attr("style", n.element.attr("style")), this.container.css(S(n.containerCss, this.opts.element)), this.container.addClass(S(n.containerCssClass, this.opts.element)), this.elementTabIndex = this.opts.element.attr("tabindex"), this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container).on("click.select2", m), this.container.data("select2", this), this.dropdown = this.container.find(".select2-drop"), y(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(S(n.dropdownCssClass, this.opts.element)), this.dropdown.data("select2", this), this.dropdown.on("click", m), this.results = i = this.container.find(r), this.search = o = this.container.find("input.select2-input"), this.queryCount = 0, this.resultsPage = 0, this.context = null, this.initContainer(), this.container.on("click", m), u(this.results), this.dropdown.on("mousemove-filtered", r, this.bind(this.highlightUnderEvent)), this.dropdown.on("touchstart touchmove touchend", r, this.bind(function (t) {
                    this._touchEvent = !0, this.highlightUnderEvent(t)
                })), this.dropdown.on("touchmove", r, this.bind(this.touchMoved)), this.dropdown.on("touchstart touchend", r, this.bind(this.clearTouchMoved)), this.dropdown.on("click", this.bind(function () {
                    this._touchEvent && (this._touchEvent = !1, this.selectHighlighted())
                })), d(80, this.results), this.dropdown.on("scroll-debounced", r, this.bind(this.loadMoreIfNeeded)), t(this.container).on("change", ".select2-input", function (t) {
                    t.stopPropagation()
                }), t(this.dropdown).on("change", ".select2-input", function (t) {
                    t.stopPropagation()
                }), t.fn.mousewheel && i.mousewheel(function (t, e, n, o) {
                    var s = i.scrollTop();
                    o > 0 && 0 >= s - o ? (i.scrollTop(0), m(t)) : 0 > o && i.get(0).scrollHeight - i.scrollTop() + o <= i.height() && (i.scrollTop(i.get(0).scrollHeight - i.height()), m(t))
                }), c(o), o.on("keyup-change input paste", this.bind(this.updateResults)), o.on("focus", function () {
                    o.addClass("select2-focused")
                }), o.on("blur", function () {
                    o.removeClass("select2-focused")
                }), this.dropdown.on("mouseup", r, this.bind(function (e) {
                    t(e.target).closest(".select2-result-selectable").length > 0 && (this.highlightUnderEvent(e), this.selectHighlighted(e))
                })), this.dropdown.on("click mouseup mousedown touchstart touchend focusin", function (t) {
                    t.stopPropagation()
                }), this.nextSearchTerm = e, t.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource()), null !== n.maximumInputLength && this.search.attr("maxlength", n.maximumInputLength);
                var a = n.element.prop("disabled");
                a === e && (a = !1), this.enable(!a);
                var l = n.element.prop("readonly");
                l === e && (l = !1), this.readonly(l), I = I || s(), this.autofocus = n.element.prop("autofocus"), n.element.prop("autofocus", !1), this.autofocus && this.focus(), this.search.attr("placeholder", n.searchInputPlaceholder)
            }, destroy: function () {
                var t = this.opts.element, n = t.data("select2"), i = this;
                this.close(), t.length && t[0].detachEvent && i._sync && t.each(function () {
                    i._sync && this.detachEvent("onpropertychange", i._sync)
                }), this.propertyObserver && (this.propertyObserver.disconnect(), this.propertyObserver = null), this._sync = null, n !== e && (n.container.remove(), n.liveRegion.remove(), n.dropdown.remove(), t.show().removeData("select2").off(".select2").prop("autofocus", this.autofocus || !1), this.elementTabIndex ? t.attr({tabindex: this.elementTabIndex}) : t.removeAttr("tabindex"), t.show()), _.call(this, "container", "liveRegion", "dropdown", "results", "search")
            }, optionToData: function (t) {
                return t.is("option") ? {
                    id: t.prop("value"),
                    text: t.text(),
                    element: t.get(),
                    css: t.attr("class"),
                    disabled: t.prop("disabled"),
                    locked: r(t.attr("locked"), "locked") || r(t.data("locked"), !0)
                } : t.is("optgroup") ? {
                    text: t.attr("label"),
                    children: [],
                    element: t.get(),
                    css: t.attr("class")
                } : void 0
            }, prepareOpts: function (n) {
                var i, o, s, l, c = this;
                if (i = n.element, "select" === i.get(0).tagName.toLowerCase() && (this.select = o = n.element), o && t.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function () {
                        if (this in n)throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.")
                    }), n = t.extend({}, {
                        populateResults: function (i, o, s) {
                            var r, a = this.opts.id, l = this.liveRegion;
                            (r = function (i, o, u) {
                                var h, d, p, f, m, g, v, y, b, w;
                                i = n.sortResults(i, o, s);
                                var x = [];
                                for (h = 0, d = i.length; d > h; h += 1)p = i[h], m = p.disabled === !0, f = !m && a(p) !== e, g = p.children && p.children.length > 0, v = t("<li></li>"), v.addClass("select2-results-dept-" + u), v.addClass("select2-result"), v.addClass(f ? "select2-result-selectable" : "select2-result-unselectable"), m && v.addClass("select2-disabled"), g && v.addClass("select2-result-with-children"), v.addClass(c.opts.formatResultCssClass(p)), v.attr("role", "presentation"), y = t(document.createElement("div")), y.addClass("select2-result-label"), y.attr("id", "select2-result-label-" + O()), y.attr("role", "option"), w = n.formatResult(p, y, s, c.opts.escapeMarkup), w !== e && (y.html(w), v.append(y)), g && (b = t("<ul></ul>"), b.addClass("select2-result-sub"), r(p.children, b, u + 1), v.append(b)), v.data("select2-data", p), x.push(v[0]);
                                o.append(x), l.text(n.formatMatches(i.length))
                            })(o, i, 0)
                        }
                    }, t.fn.select2.defaults, n), "function" != typeof n.id && (s = n.id, n.id = function (t) {
                        return t[s]
                    }), t.isArray(n.element.data("select2Tags"))) {
                    if ("tags"in n)throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + n.element.attr("id");
                    n.tags = n.element.data("select2Tags")
                }
                if (o ? (n.query = this.bind(function (t) {
                        var n, o, s, r = {results: [], more: !1}, a = t.term;
                        s = function (e, n) {
                            var i;
                            e.is("option") ? t.matcher(a, e.text(), e) && n.push(c.optionToData(e)) : e.is("optgroup") && (i = c.optionToData(e), e.children().each2(function (t, e) {
                                s(e, i.children)
                            }), i.children.length > 0 && n.push(i))
                        }, n = i.children(), this.getPlaceholder() !== e && n.length > 0 && (o = this.getPlaceholderOption(), o && (n = n.not(o))), n.each2(function (t, e) {
                            s(e, r.results)
                        }), t.callback(r)
                    }), n.id = function (t) {
                        return t.id
                    }) : "query"in n || ("ajax"in n ? (l = n.element.data("ajax-url"), l && l.length > 0 && (n.ajax.url = l), n.query = x.call(n.element, n.ajax)) : "data"in n ? n.query = k(n.data) : "tags"in n && (n.query = T(n.tags), n.createSearchChoice === e && (n.createSearchChoice = function (e) {
                        return {id: t.trim(e), text: t.trim(e)}
                    }), n.initSelection === e && (n.initSelection = function (e, i) {
                        var o = [];
                        t(a(e.val(), n.separator, n.transformVal)).each(function () {
                            var e = {id: this, text: this}, i = n.tags;
                            t.isFunction(i) && (i = i()), t(i).each(function () {
                                return r(this.id, e.id) ? (e = this, !1) : void 0
                            }), o.push(e)
                        }), i(o)
                    }))), "function" != typeof n.query)throw"query function not defined for Select2 " + n.element.attr("id");
                if ("top" === n.createSearchChoicePosition)n.createSearchChoicePosition = function (t, e) {
                    t.unshift(e)
                }; else if ("bottom" === n.createSearchChoicePosition)n.createSearchChoicePosition = function (t, e) {
                    t.push(e)
                }; else if ("function" != typeof n.createSearchChoicePosition)throw"invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";
                return n
            }, monitorSource: function () {
                var n, i = this.opts.element, o = this;
                i.on("change.select2", this.bind(function () {
                    this.opts.element.data("select2-change-triggered") !== !0 && this.initSelection()
                })), this._sync = this.bind(function () {
                    var t = i.prop("disabled");
                    t === e && (t = !1), this.enable(!t);
                    var n = i.prop("readonly");
                    n === e && (n = !1), this.readonly(n), this.container && (y(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.addClass(S(this.opts.containerCssClass, this.opts.element))), this.dropdown && (y(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(S(this.opts.dropdownCssClass, this.opts.element)))
                }), i.length && i[0].attachEvent && i.each(function () {
                    this.attachEvent("onpropertychange", o._sync)
                }), n = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, n !== e && (this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), this.propertyObserver = new n(function (e) {
                    t.each(e, o._sync)
                }), this.propertyObserver.observe(i.get(0), {attributes: !0, subtree: !1}))
            }, triggerSelect: function (e) {
                var n = t.Event("select2-selecting", {val: this.id(e), object: e, choice: e});
                return this.opts.element.trigger(n), !n.isDefaultPrevented()
            }, triggerChange: function (e) {
                e = e || {}, e = t.extend({}, e, {
                    type: "change",
                    val: this.val()
                }), this.opts.element.data("select2-change-triggered", !0), this.opts.element.trigger(e), this.opts.element.data("select2-change-triggered", !1), this.opts.element.click(), this.opts.blurOnChange && this.opts.element.blur()
            }, isInterfaceEnabled: function () {
                return this.enabledInterface === !0
            }, enableInterface: function () {
                var t = this._enabled && !this._readonly, e = !t;
                return t === this.enabledInterface ? !1 : (this.container.toggleClass("select2-container-disabled", e), this.close(), this.enabledInterface = t, !0)
            }, enable: function (t) {
                t === e && (t = !0), this._enabled !== t && (this._enabled = t, this.opts.element.prop("disabled", !t), this.enableInterface())
            }, disable: function () {
                this.enable(!1)
            }, readonly: function (t) {
                t === e && (t = !1), this._readonly !== t && (this._readonly = t, this.opts.element.prop("readonly", t), this.enableInterface())
            }, opened: function () {
                return this.container ? this.container.hasClass("select2-dropdown-open") : !1
            }, positionDropdown: function () {
                var e, n, i, o, s, r = this.dropdown, a = this.container, l = a.offset(), c = a.outerHeight(!1), u = a.outerWidth(!1), h = r.outerHeight(!1), d = t(window), p = d.width(), f = d.height(), m = d.scrollLeft() + p, g = d.scrollTop() + f, v = l.top + c, y = l.left, b = g >= v + h, w = l.top - h >= d.scrollTop(), x = r.outerWidth(!1), k = function () {
                    return m >= y + x
                }, T = function () {
                    return l.left + m + a.outerWidth(!1) > x
                }, C = r.hasClass("select2-drop-above");
                C ? (n = !0, !w && b && (i = !0, n = !1)) : (n = !1, !b && w && (i = !0, n = !0)), i && (r.hide(), l = this.container.offset(), c = this.container.outerHeight(!1), u = this.container.outerWidth(!1), h = r.outerHeight(!1), m = d.scrollLeft() + p, g = d.scrollTop() + f, v = l.top + c, y = l.left, x = r.outerWidth(!1), r.show(), this.focusSearch()), this.opts.dropdownAutoWidth ? (s = t(".select2-results", r)[0], r.addClass("select2-drop-auto-width"), r.css("width", ""), x = r.outerWidth(!1) + (s.scrollHeight === s.clientHeight ? 0 : I.width), x > u ? u = x : x = u, h = r.outerHeight(!1)) : this.container.removeClass("select2-drop-auto-width"), "static" !== this.body.css("position") && (e = this.body.offset(), v -= e.top, y -= e.left), !k() && T() && (y = l.left + this.container.outerWidth(!1) - x), o = {
                    left: y,
                    width: u
                }, n ? (o.top = l.top - h, o.bottom = "auto", this.container.addClass("select2-drop-above"), r.addClass("select2-drop-above")) : (o.top = v, o.bottom = "auto", this.container.removeClass("select2-drop-above"), r.removeClass("select2-drop-above")), o = t.extend(o, S(this.opts.dropdownCss, this.opts.element)), r.css(o)
            }, shouldOpen: function () {
                var e;
                return this.opened() ? !1 : this._enabled === !1 || this._readonly === !0 ? !1 : (e = t.Event("select2-opening"), this.opts.element.trigger(e), !e.isDefaultPrevented())
            }, clearDropdownAlignmentPreference: function () {
                this.container.removeClass("select2-drop-above"), this.dropdown.removeClass("select2-drop-above")
            }, open: function () {
                return this.shouldOpen() ? (this.opening(), D.on("mousemove.select2Event", function (t) {
                    M.x = t.pageX, M.y = t.pageY
                }), !0) : !1
            }, opening: function () {
                var e, i = this.containerEventName, o = "scroll." + i, s = "resize." + i, r = "orientationchange." + i;
                this.container.addClass("select2-dropdown-open").addClass("select2-container-active"), this.clearDropdownAlignmentPreference(), this.dropdown[0] !== this.body.children().last()[0] && this.dropdown.detach().appendTo(this.body), e = t("#select2-drop-mask"), 0 === e.length && (e = t(document.createElement("div")), e.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask"), e.hide(), e.appendTo(this.body), e.on("mousedown touchstart click", function (i) {
                    n(e);
                    var o, s = t("#select2-drop");
                    s.length > 0 && (o = s.data("select2"), o.opts.selectOnBlur && o.selectHighlighted({noFocus: !0}), o.close(), i.preventDefault(), i.stopPropagation())
                })), this.dropdown.prev()[0] !== e[0] && this.dropdown.before(e), t("#select2-drop").removeAttr("id"), this.dropdown.attr("id", "select2-drop"), e.show(), this.positionDropdown(), this.dropdown.show(), this.positionDropdown(), this.dropdown.addClass("select2-drop-active");
                var a = this;
                this.container.parents().add(window).each(function () {
                    t(this).on(s + " " + o + " " + r, function () {
                        a.opened() && a.positionDropdown()
                    })
                })
            }, close: function () {
                if (this.opened()) {
                    var e = this.containerEventName, n = "scroll." + e, i = "resize." + e, o = "orientationchange." + e;
                    this.container.parents().add(window).each(function () {
                        t(this).off(n).off(i).off(o)
                    }), this.clearDropdownAlignmentPreference(), t("#select2-drop-mask").hide(), this.dropdown.removeAttr("id"), this.dropdown.hide(), this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"), this.results.empty(), D.off("mousemove.select2Event"), this.clearSearch(), this.search.removeClass("select2-active"), this.opts.element.trigger(t.Event("select2-close"))
                }
            }, externalSearch: function (t) {
                this.open(), this.search.val(t), this.updateResults(!1)
            }, clearSearch: function () {
            }, getMaximumSelectionSize: function () {
                return S(this.opts.maximumSelectionSize, this.opts.element)
            }, ensureHighlightVisible: function () {
                var e, n, i, o, s, r, a, l, c = this.results;
                if (n = this.highlight(), !(0 > n)) {
                    if (0 == n)return void c.scrollTop(0);
                    e = this.findHighlightableChoices().find(".select2-result-label"), i = t(e[n]), l = (i.offset() || {}).top || 0, o = l + i.outerHeight(!0), n === e.length - 1 && (a = c.find("li.select2-more-results"), a.length > 0 && (o = a.offset().top + a.outerHeight(!0))), s = c.offset().top + c.outerHeight(!1), o > s && c.scrollTop(c.scrollTop() + (o - s)), r = l - c.offset().top, 0 > r && "none" != i.css("display") && c.scrollTop(c.scrollTop() + r)
                }
            }, findHighlightableChoices: function () {
                return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")
            }, moveHighlight: function (e) {
                for (var n = this.findHighlightableChoices(), i = this.highlight(); i > -1 && i < n.length;) {
                    i += e;
                    var o = t(n[i]);
                    if (o.hasClass("select2-result-selectable") && !o.hasClass("select2-disabled") && !o.hasClass("select2-selected")) {
                        this.highlight(i);
                        break
                    }
                }
            }, highlight: function (e) {
                var n, i, s = this.findHighlightableChoices();
                return 0 === arguments.length ? o(s.filter(".select2-highlighted")[0], s.get()) : (e >= s.length && (e = s.length - 1), 0 > e && (e = 0), this.removeHighlight(), n = t(s[e]), n.addClass("select2-highlighted"), this.search.attr("aria-activedescendant", n.find(".select2-result-label").attr("id")), this.ensureHighlightVisible(), this.liveRegion.text(n.text()), i = n.data("select2-data"), void(i && this.opts.element.trigger({
                    type: "select2-highlight",
                    val: this.id(i),
                    choice: i
                })))
            }, removeHighlight: function () {
                this.results.find(".select2-highlighted").removeClass("select2-highlighted")
            }, touchMoved: function () {
                this._touchMoved = !0
            }, clearTouchMoved: function () {
                this._touchMoved = !1
            }, countSelectableResults: function () {
                return this.findHighlightableChoices().length
            }, highlightUnderEvent: function (e) {
                var n = t(e.target).closest(".select2-result-selectable");
                if (n.length > 0 && !n.is(".select2-highlighted")) {
                    var i = this.findHighlightableChoices();
                    this.highlight(i.index(n))
                } else 0 == n.length && this.removeHighlight()
            }, loadMoreIfNeeded: function () {
                var t, e = this.results, n = e.find("li.select2-more-results"), i = this.resultsPage + 1, o = this, s = this.search.val(), r = this.context;
                0 !== n.length && (t = n.offset().top - e.offset().top - e.height(), t <= this.opts.loadMorePadding && (n.addClass("select2-active"), this.opts.query({
                    element: this.opts.element,
                    term: s,
                    page: i,
                    context: r,
                    matcher: this.opts.matcher,
                    callback: this.bind(function (t) {
                        o.opened() && (o.opts.populateResults.call(this, e, t.results, {
                            term: s,
                            page: i,
                            context: r
                        }), o.postprocessResults(t, !1, !1), t.more === !0 ? (n.detach().appendTo(e).html(o.opts.escapeMarkup(S(o.opts.formatLoadMore, o.opts.element, i + 1))), window.setTimeout(function () {
                            o.loadMoreIfNeeded()
                        }, 10)) : n.remove(), o.positionDropdown(), o.resultsPage = i, o.context = t.context, this.opts.element.trigger({
                            type: "select2-loaded",
                            items: t
                        }))
                    })
                })))
            }, tokenize: function () {
            }, updateResults: function (n) {
                function i() {
                    c.removeClass("select2-active"), d.positionDropdown(), d.liveRegion.text(u.find(".select2-no-results,.select2-selection-limit,.select2-searching").length ? u.text() : d.opts.formatMatches(u.find('.select2-result-selectable:not(".select2-selected")').length))
                }

                function o(t) {
                    u.html(t), i()
                }

                var s, a, l, c = this.search, u = this.results, h = this.opts, d = this, p = c.val(), f = t.data(this.container, "select2-last-term");
                if ((n === !0 || !f || !r(p, f)) && (t.data(this.container, "select2-last-term", p), n === !0 || this.showSearchInput !== !1 && this.opened())) {
                    l = ++this.queryCount;
                    var m = this.getMaximumSelectionSize();
                    if (m >= 1 && (s = this.data(), t.isArray(s) && s.length >= m && C(h.formatSelectionTooBig, "formatSelectionTooBig")))return void o("<li class='select2-selection-limit'>" + S(h.formatSelectionTooBig, h.element, m) + "</li>");
                    if (c.val().length < h.minimumInputLength)return o(C(h.formatInputTooShort, "formatInputTooShort") ? "<li class='select2-no-results'>" + S(h.formatInputTooShort, h.element, c.val(), h.minimumInputLength) + "</li>" : ""), void(n && this.showSearch && this.showSearch(!0));
                    if (h.maximumInputLength && c.val().length > h.maximumInputLength)return void o(C(h.formatInputTooLong, "formatInputTooLong") ? "<li class='select2-no-results'>" + S(h.formatInputTooLong, h.element, c.val(), h.maximumInputLength) + "</li>" : "");
                    h.formatSearching && 0 === this.findHighlightableChoices().length && o("<li class='select2-searching'>" + S(h.formatSearching, h.element) + "</li>"), c.addClass("select2-active"), this.removeHighlight(), a = this.tokenize(), a != e && null != a && c.val(a), this.resultsPage = 1, h.query({
                        element: h.element,
                        term: c.val(),
                        page: this.resultsPage,
                        context: null,
                        matcher: h.matcher,
                        callback: this.bind(function (s) {
                            var a;
                            if (l == this.queryCount) {
                                if (!this.opened())return void this.search.removeClass("select2-active");
                                if (s.hasError !== e && C(h.formatAjaxError, "formatAjaxError"))return void o("<li class='select2-ajax-error'>" + S(h.formatAjaxError, h.element, s.jqXHR, s.textStatus, s.errorThrown) + "</li>");
                                if (this.context = s.context === e ? null : s.context, this.opts.createSearchChoice && "" !== c.val() && (a = this.opts.createSearchChoice.call(d, c.val(), s.results), a !== e && null !== a && d.id(a) !== e && null !== d.id(a) && 0 === t(s.results).filter(function () {
                                        return r(d.id(this), d.id(a))
                                    }).length && this.opts.createSearchChoicePosition(s.results, a)), 0 === s.results.length && C(h.formatNoMatches, "formatNoMatches"))return void o("<li class='select2-no-results'>" + S(h.formatNoMatches, h.element, c.val()) + "</li>");
                                u.empty(), d.opts.populateResults.call(this, u, s.results, {
                                    term: c.val(),
                                    page: this.resultsPage,
                                    context: null
                                }), s.more === !0 && C(h.formatLoadMore, "formatLoadMore") && (u.append("<li class='select2-more-results'>" + h.escapeMarkup(S(h.formatLoadMore, h.element, this.resultsPage)) + "</li>"), window.setTimeout(function () {
                                    d.loadMoreIfNeeded()
                                }, 10)), this.postprocessResults(s, n), i(), this.opts.element.trigger({
                                    type: "select2-loaded",
                                    items: s
                                })
                            }
                        })
                    })
                }
            }, cancel: function () {
                this.close()
            }, blur: function () {
                this.opts.selectOnBlur && this.selectHighlighted({noFocus: !0}), this.close(), this.container.removeClass("select2-container-active"), this.search[0] === document.activeElement && this.search.blur(), this.clearSearch(), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
            }, focusSearch: function () {
                p(this.search)
            }, selectHighlighted: function (t) {
                if (this._touchMoved)return void this.clearTouchMoved();
                var e = this.highlight(), n = this.results.find(".select2-highlighted"), i = n.closest(".select2-result").data("select2-data");
                i ? (this.highlight(e), this.onSelect(i, t)) : t && t.noFocus && this.close()
            }, getPlaceholder: function () {
                var t;
                return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((t = this.getPlaceholderOption()) !== e ? t.text() : e)
            }, getPlaceholderOption: function () {
                if (this.select) {
                    var n = this.select.children("option").first();
                    if (this.opts.placeholderOption !== e)return "first" === this.opts.placeholderOption && n || "function" == typeof this.opts.placeholderOption && this.opts.placeholderOption(this.select);
                    if ("" === t.trim(n.text()) && "" === n.val())return n
                }
            }, initContainerWidth: function () {
                function n() {
                    var n, i, o, s, r, a;
                    if ("off" === this.opts.width)return null;
                    if ("element" === this.opts.width)return 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px";
                    if ("copy" === this.opts.width || "resolve" === this.opts.width) {
                        if (n = this.opts.element.attr("style"), n !== e)for (i = n.split(";"), s = 0, r = i.length; r > s; s += 1)if (a = i[s].replace(/\s/g, ""), o = a.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), null !== o && o.length >= 1)return o[1];
                        return "resolve" === this.opts.width ? (n = this.opts.element.css("width"), n.indexOf("%") > 0 ? n : 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px") : null
                    }
                    return t.isFunction(this.opts.width) ? this.opts.width() : this.opts.width
                }

                var i = n.call(this);
                null !== i && this.container.css("width", i)
            }
        }), L = j(N, {
            createContainer: function () {
                var e = t(document.createElement("div")).attr({"class": "select2-container"}).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>", "   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>", "   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>", "</a>", "<label for='' class='select2-offscreen'></label>", "<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />", "<div class='select2-drop select2-display-none'>", "   <div class='select2-search'>", "       <label for='' class='select2-offscreen'></label>", "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'", "       aria-autocomplete='list' />", "   </div>", "   <ul class='select2-results' role='listbox'>", "   </ul>", "</div>"].join(""));
                return e
            }, enableInterface: function () {
                this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled())
            }, opening: function () {
                var n, i, o;
                this.opts.minimumResultsForSearch >= 0 && this.showSearch(!0), this.parent.opening.apply(this, arguments), this.showSearchInput !== !1 && this.search.val(this.focusser.val()), this.opts.shouldFocusInput(this) && (this.search.focus(), n = this.search.get(0), n.createTextRange ? (i = n.createTextRange(), i.collapse(!1), i.select()) : n.setSelectionRange && (o = this.search.val().length, n.setSelectionRange(o, o))), "" === this.search.val() && this.nextSearchTerm != e && (this.search.val(this.nextSearchTerm), this.search.select()), this.focusser.prop("disabled", !0).val(""), this.updateResults(!0), this.opts.element.trigger(t.Event("select2-open"))
            }, close: function () {
                this.opened() && (this.parent.close.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
            }, focus: function () {
                this.opened() ? this.close() : (this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
            }, isFocused: function () {
                return this.container.hasClass("select2-container-active")
            }, cancel: function () {
                this.parent.cancel.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus()
            }, destroy: function () {
                t("label[for='" + this.focusser.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), _.call(this, "selection", "focusser")
            }, initContainer: function () {
                var e, i, o = this.container, s = this.dropdown, r = O();
                this.showSearch(this.opts.minimumResultsForSearch < 0 ? !1 : !0), this.selection = e = o.find(".select2-choice"), this.focusser = o.find(".select2-focusser"), e.find(".select2-chosen").attr("id", "select2-chosen-" + r), this.focusser.attr("aria-labelledby", "select2-chosen-" + r), this.results.attr("id", "select2-results-" + r), this.search.attr("aria-owns", "select2-results-" + r), this.focusser.attr("id", "s2id_autogen" + r), i = t("label[for='" + this.opts.element.attr("id") + "']"), this.opts.element.focus(this.bind(function () {
                    this.focus()
                })), this.focusser.prev().text(i.text()).attr("for", this.focusser.attr("id"));
                var a = this.opts.element.attr("title");
                this.opts.element.attr("title", a || i.text()), this.focusser.attr("tabindex", this.elementTabIndex), this.search.attr("id", this.focusser.attr("id") + "_search"), this.search.prev().text(t("label[for='" + this.focusser.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.search.on("keydown", this.bind(function (t) {
                    if (this.isInterfaceEnabled() && 229 != t.keyCode) {
                        if (t.which === H.PAGE_UP || t.which === H.PAGE_DOWN)return void m(t);
                        switch (t.which) {
                            case H.UP:
                            case H.DOWN:
                                return this.moveHighlight(t.which === H.UP ? -1 : 1), void m(t);
                            case H.ENTER:
                                return this.selectHighlighted(), void m(t);
                            case H.TAB:
                                return void this.selectHighlighted({noFocus: !0});
                            case H.ESC:
                                return this.cancel(t), void m(t)
                        }
                    }
                })), this.search.on("blur", this.bind(function () {
                    document.activeElement === this.body.get(0) && window.setTimeout(this.bind(function () {
                        this.opened() && this.search.focus()
                    }), 0)
                })), this.focusser.on("keydown", this.bind(function (t) {
                    if (this.isInterfaceEnabled() && t.which !== H.TAB && !H.isControl(t) && !H.isFunctionKey(t) && t.which !== H.ESC) {
                        if (this.opts.openOnEnter === !1 && t.which === H.ENTER)return void m(t);
                        if (t.which == H.DOWN || t.which == H.UP || t.which == H.ENTER && this.opts.openOnEnter) {
                            if (t.altKey || t.ctrlKey || t.shiftKey || t.metaKey)return;
                            return this.open(), void m(t)
                        }
                        return t.which == H.DELETE || t.which == H.BACKSPACE ? (this.opts.allowClear && this.clear(), void m(t)) : void 0
                    }
                })), c(this.focusser), this.focusser.on("keyup-change input", this.bind(function (t) {
                    if (this.opts.minimumResultsForSearch >= 0) {
                        if (t.stopPropagation(), this.opened())return;
                        this.open()
                    }
                })), e.on("mousedown touchstart", "abbr", this.bind(function (t) {
                    this.isInterfaceEnabled() && (this.clear(), g(t), this.close(), this.selection && this.selection.focus())
                })), e.on("mousedown touchstart", this.bind(function (i) {
                    n(e), this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(), m(i)
                })), s.on("mousedown touchstart", this.bind(function () {
                    this.opts.shouldFocusInput(this) && this.search.focus()
                })), e.on("focus", this.bind(function (t) {
                    m(t)
                })), this.focusser.on("focus", this.bind(function () {
                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.container.addClass("select2-container-active")
                })).on("blur", this.bind(function () {
                    this.opened() || (this.container.removeClass("select2-container-active"), this.opts.element.trigger(t.Event("select2-blur")))
                })), this.search.on("focus", this.bind(function () {
                    this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.container.addClass("select2-container-active")
                })), this.initContainerWidth(), this.opts.element.hide(), this.setPlaceholder()
            }, clear: function (e) {
                var n = this.selection.data("select2-data");
                if (n) {
                    var i = t.Event("select2-clearing");
                    if (this.opts.element.trigger(i), i.isDefaultPrevented())return;
                    var o = this.getPlaceholderOption();
                    this.opts.element.val(o ? o.val() : ""), this.selection.find(".select2-chosen").empty(), this.selection.removeData("select2-data"), this.setPlaceholder(), e !== !1 && (this.opts.element.trigger({
                        type: "select2-removed",
                        val: this.id(n),
                        choice: n
                    }), this.triggerChange({removed: n}))
                }
            }, initSelection: function () {
                if (this.isPlaceholderOptionSelected())this.updateSelection(null), this.close(), this.setPlaceholder(); else {
                    var t = this;
                    this.opts.initSelection.call(null, this.opts.element, function (n) {
                        n !== e && null !== n && (t.updateSelection(n), t.close(), t.setPlaceholder(), t.nextSearchTerm = t.opts.nextSearchTerm(n, t.search.val()))
                    })
                }
            }, isPlaceholderOptionSelected: function () {
                var t;
                return this.getPlaceholder() === e ? !1 : (t = this.getPlaceholderOption()) !== e && t.prop("selected") || "" === this.opts.element.val() || this.opts.element.val() === e || null === this.opts.element.val()
            }, prepareOpts: function () {
                var e = this.parent.prepareOpts.apply(this, arguments), n = this;
                return "select" === e.element.get(0).tagName.toLowerCase() ? e.initSelection = function (t, e) {
                    var i = t.find("option").filter(function () {
                        return this.selected && !this.disabled
                    });
                    e(n.optionToData(i))
                } : "data"in e && (e.initSelection = e.initSelection || function (n, i) {
                        var o = n.val(), s = null;
                        e.query({
                            matcher: function (t, n, i) {
                                var a = r(o, e.id(i));
                                return a && (s = i), a
                            }, callback: t.isFunction(i) ? function () {
                                i(s)
                            } : t.noop
                        })
                    }), e
            }, getPlaceholder: function () {
                return this.select && this.getPlaceholderOption() === e ? e : this.parent.getPlaceholder.apply(this, arguments)
            }, setPlaceholder: function () {
                var t = this.getPlaceholder();
                if (this.isPlaceholderOptionSelected() && t !== e) {
                    if (this.select && this.getPlaceholderOption() === e)return;
                    this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(t)), this.selection.addClass("select2-default"), this.container.removeClass("select2-allowclear")
                }
            }, postprocessResults: function (t, e, n) {
                var i = 0, o = this;
                if (this.findHighlightableChoices().each2(function (t, e) {
                        return r(o.id(e.data("select2-data")), o.opts.element.val()) ? (i = t, !1) : void 0
                    }), n !== !1 && this.highlight(e === !0 && i >= 0 ? i : 0), e === !0) {
                    var s = this.opts.minimumResultsForSearch;
                    s >= 0 && this.showSearch($(t.results) >= s)
                }
            }, showSearch: function (e) {
                this.showSearchInput !== e && (this.showSearchInput = e, this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !e), this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !e), t(this.dropdown, this.container).toggleClass("select2-with-searchbox", e))
            }, onSelect: function (t, e) {
                if (this.triggerSelect(t)) {
                    var n = this.opts.element.val(), i = this.data();
                    this.opts.element.val(this.id(t)), this.updateSelection(t), this.opts.element.trigger({
                        type: "select2-selected",
                        val: this.id(t),
                        choice: t
                    }), this.nextSearchTerm = this.opts.nextSearchTerm(t, this.search.val()), this.close(), e && e.noFocus || !this.opts.shouldFocusInput(this) || this.focusser.focus(), r(n, this.id(t)) || this.triggerChange({
                        added: t,
                        removed: i
                    })
                }
            }, updateSelection: function (t) {
                var n, i, o = this.selection.find(".select2-chosen");
                this.selection.data("select2-data", t), o.empty(), null !== t && (n = this.opts.formatSelection(t, o, this.opts.escapeMarkup)), n !== e && o.append(n), i = this.opts.formatSelectionCssClass(t, o), i !== e && o.addClass(i), this.selection.removeClass("select2-default"), this.opts.allowClear && this.getPlaceholder() !== e && this.container.addClass("select2-allowclear")
            }, val: function () {
                var t, n = !1, i = null, o = this, s = this.data();
                if (0 === arguments.length)return this.opts.element.val();
                if (t = arguments[0], arguments.length > 1 && (n = arguments[1]), this.select)this.select.val(t).find("option").filter(function () {
                    return this.selected
                }).each2(function (t, e) {
                    return i = o.optionToData(e), !1
                }), this.updateSelection(i), this.setPlaceholder(), n && this.triggerChange({
                    added: i,
                    removed: s
                }); else {
                    if (!t && 0 !== t)return void this.clear(n);
                    if (this.opts.initSelection === e)throw new Error("cannot call val() if initSelection() is not defined");
                    this.opts.element.val(t), this.opts.initSelection(this.opts.element, function (t) {
                        o.opts.element.val(t ? o.id(t) : ""), o.updateSelection(t), o.setPlaceholder(), n && o.triggerChange({
                            added: t,
                            removed: s
                        })
                    })
                }
            }, clearSearch: function () {
                this.search.val(""), this.focusser.val("")
            }, data: function (t) {
                var n, i = !1;
                return 0 === arguments.length ? (n = this.selection.data("select2-data"), n == e && (n = null), n) : (arguments.length > 1 && (i = arguments[1]), void(t ? (n = this.data(), this.opts.element.val(t ? this.id(t) : ""), this.updateSelection(t), i && this.triggerChange({
                    added: t,
                    removed: n
                })) : this.clear(i)))
            }
        }), A = j(N, {
            createContainer: function () {
                var e = t(document.createElement("div")).attr({"class": "select2-container select2-container-multi"}).html(["<ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <label for='' class='select2-offscreen'></label>", "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi select2-display-none'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""));
                return e
            }, prepareOpts: function () {
                var e = this.parent.prepareOpts.apply(this, arguments), n = this;
                return "select" === e.element.get(0).tagName.toLowerCase() ? e.initSelection = function (t, e) {
                    var i = [];
                    t.find("option").filter(function () {
                        return this.selected && !this.disabled
                    }).each2(function (t, e) {
                        i.push(n.optionToData(e))
                    }), e(i)
                } : "data"in e && (e.initSelection = e.initSelection || function (n, i) {
                        var o = a(n.val(), e.separator, e.transformVal), s = [];
                        e.query({
                            matcher: function (n, i, a) {
                                var l = t.grep(o, function (t) {
                                    return r(t, e.id(a))
                                }).length;
                                return l && s.push(a), l
                            }, callback: t.isFunction(i) ? function () {
                                for (var t = [], n = 0; n < o.length; n++)for (var a = o[n], l = 0; l < s.length; l++) {
                                    var c = s[l];
                                    if (r(a, e.id(c))) {
                                        t.push(c), s.splice(l, 1);
                                        break
                                    }
                                }
                                i(t)
                            } : t.noop
                        })
                    }), e
            }, selectChoice: function (t) {
                var e = this.container.find(".select2-search-choice-focus");
                e.length && t && t[0] == e[0] || (e.length && this.opts.element.trigger("choice-deselected", e), e.removeClass("select2-search-choice-focus"), t && t.length && (this.close(), t.addClass("select2-search-choice-focus"), this.opts.element.trigger("choice-selected", t)))
            }, destroy: function () {
                t("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), _.call(this, "searchContainer", "selection")
            }, initContainer: function () {
                var e, n = ".select2-choices";
                this.searchContainer = this.container.find(".select2-search-field"), this.selection = e = this.container.find(n);
                var i = this;
                this.selection.on("click", ".select2-container:not(.select2-container-disabled) .select2-search-choice:not(.select2-locked)", function () {
                    i.search[0].focus(), i.selectChoice(t(this))
                }), this.search.attr("id", "s2id_autogen" + O()), this.search.prev().text(t("label[for='" + this.opts.element.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.opts.element.focus(this.bind(function () {
                    this.focus()
                })), this.search.on("input paste", this.bind(function () {
                    this.search.attr("placeholder") && 0 == this.search.val().length || this.isInterfaceEnabled() && (this.opened() || this.open())
                })), this.search.attr("tabindex", this.elementTabIndex), this.keydowns = 0, this.search.on("keydown", this.bind(function (t) {
                    if (this.isInterfaceEnabled()) {
                        ++this.keydowns;
                        var n = e.find(".select2-search-choice-focus"), i = n.prev(".select2-search-choice:not(.select2-locked)"), o = n.next(".select2-search-choice:not(.select2-locked)"), s = f(this.search);
                        if (n.length && (t.which == H.LEFT || t.which == H.RIGHT || t.which == H.BACKSPACE || t.which == H.DELETE || t.which == H.ENTER)) {
                            var r = n;
                            return t.which == H.LEFT && i.length ? r = i : t.which == H.RIGHT ? r = o.length ? o : null : t.which === H.BACKSPACE ? this.unselect(n.first()) && (this.search.width(10), r = i.length ? i : o) : t.which == H.DELETE ? this.unselect(n.first()) && (this.search.width(10), r = o.length ? o : null) : t.which == H.ENTER && (r = null), this.selectChoice(r), m(t), void(r && r.length || this.open())
                        }
                        if ((t.which === H.BACKSPACE && 1 == this.keydowns || t.which == H.LEFT) && 0 == s.offset && !s.length)return this.selectChoice(e.find(".select2-search-choice:not(.select2-locked)").last()), void m(t);
                        if (this.selectChoice(null), this.opened())switch (t.which) {
                            case H.UP:
                            case H.DOWN:
                                return this.moveHighlight(t.which === H.UP ? -1 : 1), void m(t);
                            case H.ENTER:
                                return this.selectHighlighted(), void m(t);
                            case H.TAB:
                                return this.selectHighlighted({noFocus: !0}), void this.close();
                            case H.ESC:
                                return this.cancel(t), void m(t)
                        }
                        if (t.which !== H.TAB && !H.isControl(t) && !H.isFunctionKey(t) && t.which !== H.BACKSPACE && t.which !== H.ESC) {
                            if (t.which === H.ENTER) {
                                if (this.opts.openOnEnter === !1)return;
                                if (t.altKey || t.ctrlKey || t.shiftKey || t.metaKey)return
                            }
                            this.open(), (t.which === H.PAGE_UP || t.which === H.PAGE_DOWN) && m(t), t.which === H.ENTER && m(t)
                        }
                    }
                })), this.search.on("keyup", this.bind(function () {
                    this.keydowns = 0, this.resizeSearch()
                })), this.search.on("blur", this.bind(function (e) {
                    this.container.removeClass("select2-container-active"), this.search.removeClass("select2-focused"), this.selectChoice(null), this.opened() || this.clearSearch(), e.stopImmediatePropagation(), this.opts.element.trigger(t.Event("select2-blur"))
                })), this.container.on("click", n, this.bind(function (e) {
                    this.isInterfaceEnabled() && (t(e.target).closest(".select2-search-choice").length > 0 || (this.selectChoice(null), this.clearPlaceholder(), this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.open(), this.focusSearch(), e.preventDefault()))
                })), this.container.on("focus", n, this.bind(function () {
                    this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"), this.clearPlaceholder())
                })), this.initContainerWidth(), this.opts.element.hide(), this.clearSearch()
            }, enableInterface: function () {
                this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled())
            }, initSelection: function () {
                if ("" === this.opts.element.val() && "" === this.opts.element.text() && (this.updateSelection([]), this.close(), this.clearSearch()), this.select || "" !== this.opts.element.val()) {
                    var t = this;
                    this.opts.initSelection.call(null, this.opts.element, function (n) {
                        n !== e && null !== n && (t.updateSelection(n), t.close(), t.clearSearch())
                    })
                }
            }, clearSearch: function () {
                var t = this.getPlaceholder(), n = this.getMaxSearchWidth();
                t !== e && 0 === this.getVal().length && this.search.hasClass("select2-focused") === !1 ? (this.search.val(t).addClass("select2-default"), this.search.width(n > 0 ? n : this.container.css("width"))) : this.search.val("").width(10)
            }, clearPlaceholder: function () {
                this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default")
            }, opening: function () {
                this.clearPlaceholder(), this.resizeSearch(), this.parent.opening.apply(this, arguments), this.focusSearch(), "" === this.search.val() && this.nextSearchTerm != e && (this.search.val(this.nextSearchTerm), this.search.select()), this.updateResults(!0), this.opts.shouldFocusInput(this) && this.search.focus(), this.opts.element.trigger(t.Event("select2-open"))
            }, close: function () {
                this.opened() && this.parent.close.apply(this, arguments)
            }, focus: function () {
                this.close(), this.search.focus()
            }, isFocused: function () {
                return this.search.hasClass("select2-focused")
            }, updateSelection: function (e) {
                var n = [], i = [], s = this;
                t(e).each(function () {
                    o(s.id(this), n) < 0 && (n.push(s.id(this)), i.push(this))
                }), e = i, this.selection.find(".select2-search-choice").remove(), t(e).each(function () {
                    s.addSelectedChoice(this)
                }), s.postprocessResults()
            }, tokenize: function () {
                var t = this.search.val();
                t = this.opts.tokenizer.call(this, t, this.data(), this.bind(this.onSelect), this.opts), null != t && t != e && (this.search.val(t), t.length > 0 && this.open())
            }, onSelect: function (t, n) {
                this.triggerSelect(t) && "" !== t.text && (this.addSelectedChoice(t), this.opts.element.trigger({
                    type: "selected",
                    val: this.id(t),
                    choice: t
                }), this.nextSearchTerm = this.opts.nextSearchTerm(t, this.search.val()), this.clearSearch(), this.updateResults(), (this.select || !this.opts.closeOnSelect) && this.postprocessResults(t, !1, this.opts.closeOnSelect === !0), this.opts.closeOnSelect ? (this.close(), this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10), this.resizeSearch(), this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize() ? this.updateResults(!0) : this.nextSearchTerm != e && (this.search.val(this.nextSearchTerm), this.updateResults(), this.search.select()), this.positionDropdown()) : (this.close(), this.search.width(10)), this.triggerChange({added: t}), n && n.noFocus || this.focusSearch())
            }, cancel: function () {
                this.close(), this.focusSearch()
            }, addSelectedChoice: function (n) {
                var i, o, s = !n.locked, r = t("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"), a = t("<li class='select2-search-choice select2-locked'><div></div></li>"), l = s ? r : a, c = this.id(n), u = this.getVal();
                i = this.opts.formatSelection(n, l.find("div"), this.opts.escapeMarkup), i != e && l.find("div").replaceWith(t("<div></div>").html(i)), o = this.opts.formatSelectionCssClass(n, l.find("div")), o != e && l.addClass(o), s && l.find(".select2-search-choice-close").on("mousedown", m).on("click dblclick", this.bind(function (e) {
                    this.isInterfaceEnabled() && (this.unselect(t(e.target)), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), m(e), this.close(), this.focusSearch())
                })).on("focus", this.bind(function () {
                    this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"))
                })), l.data("select2-data", n), l.insertBefore(this.searchContainer), u.push(c), this.setVal(u)
            }, unselect: function (e) {
                var n, i, s = this.getVal();
                if (e = e.closest(".select2-search-choice"), 0 === e.length)throw"Invalid argument: " + e + ". Must be .select2-search-choice";
                if (n = e.data("select2-data")) {
                    var r = t.Event("select2-removing");
                    if (r.val = this.id(n), r.choice = n, this.opts.element.trigger(r), r.isDefaultPrevented())return !1;
                    for (; (i = o(this.id(n), s)) >= 0;)s.splice(i, 1), this.setVal(s), this.select && this.postprocessResults();
                    return e.remove(), this.opts.element.trigger({
                        type: "select2-removed",
                        val: this.id(n),
                        choice: n
                    }), this.triggerChange({removed: n}), !0
                }
            }, postprocessResults: function (t, e, n) {
                var i = this.getVal(), s = this.results.find(".select2-result"), r = this.results.find(".select2-result-with-children"), a = this;
                s.each2(function (t, e) {
                    var n = a.id(e.data("select2-data"));
                    o(n, i) >= 0 && (e.addClass("select2-selected"), e.find(".select2-result-selectable").addClass("select2-selected"))
                }), r.each2(function (t, e) {
                    e.is(".select2-result-selectable") || 0 !== e.find(".select2-result-selectable:not(.select2-selected)").length || e.addClass("select2-selected")
                }), -1 == this.highlight() && n !== !1 && this.opts.closeOnSelect === !0 && a.highlight(0), !this.opts.createSearchChoice && !s.filter(".select2-result:not(.select2-selected)").length > 0 && (!t || t && !t.more && 0 === this.results.find(".select2-no-results").length) && C(a.opts.formatNoMatches, "formatNoMatches") && this.results.append("<li class='select2-no-results'>" + S(a.opts.formatNoMatches, a.opts.element, a.search.val()) + "</li>")
            }, getMaxSearchWidth: function () {
                return this.selection.width() - l(this.search)
            }, resizeSearch: function () {
                var t, e, n, i, o, s = l(this.search);
                t = v(this.search) + 10, e = this.search.offset().left, n = this.selection.width(), i = this.selection.offset().left, o = n - (e - i) - s, t > o && (o = n - s), 40 > o && (o = n - s), 0 >= o && (o = t), this.search.width(Math.floor(o))
            }, getVal: function () {
                var t;
                return this.select ? (t = this.select.val(), null === t ? [] : t) : (t = this.opts.element.val(), a(t, this.opts.separator, this.opts.transformVal))
            }, setVal: function (e) {
                var n;
                this.select ? this.select.val(e) : (n = [], t(e).each(function () {
                    o(this, n) < 0 && n.push(this)
                }), this.opts.element.val(0 === n.length ? "" : n.join(this.opts.separator)))
            }, buildChangeDetails: function (t, e) {
                for (var e = e.slice(0), t = t.slice(0), n = 0; n < e.length; n++)for (var i = 0; i < t.length; i++)r(this.opts.id(e[n]), this.opts.id(t[i])) && (e.splice(n, 1), n > 0 && n--, t.splice(i, 1), i--);
                return {added: e, removed: t}
            }, val: function (n, i) {
                var o, s = this;
                if (0 === arguments.length)return this.getVal();
                if (o = this.data(), o.length || (o = []), !n && 0 !== n)return this.opts.element.val(""), this.updateSelection([]), this.clearSearch(), void(i && this.triggerChange({
                    added: this.data(),
                    removed: o
                }));
                if (this.setVal(n), this.select)this.opts.initSelection(this.select, this.bind(this.updateSelection)), i && this.triggerChange(this.buildChangeDetails(o, this.data())); else {
                    if (this.opts.initSelection === e)throw new Error("val() cannot be called if initSelection() is not defined");
                    this.opts.initSelection(this.opts.element, function (e) {
                        var n = t.map(e, s.id);
                        s.setVal(n), s.updateSelection(e), s.clearSearch(), i && s.triggerChange(s.buildChangeDetails(o, s.data()))
                    })
                }
                this.clearSearch()
            }, onSortStart: function () {
                if (this.select)throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
                this.search.width(0), this.searchContainer.hide()
            }, onSortEnd: function () {
                var e = [], n = this;
                this.searchContainer.show(), this.searchContainer.appendTo(this.searchContainer.parent()), this.resizeSearch(), this.selection.find(".select2-search-choice").each(function () {
                    e.push(n.opts.id(t(this).data("select2-data")))
                }), this.setVal(e), this.triggerChange()
            }, data: function (e, n) {
                var i, o, s = this;
                return 0 === arguments.length ? this.selection.children(".select2-search-choice").map(function () {
                    return t(this).data("select2-data")
                }).get() : (o = this.data(), e || (e = []), i = t.map(e, function (t) {
                    return s.opts.id(t)
                }), this.setVal(i), this.updateSelection(e), this.clearSearch(), n && this.triggerChange(this.buildChangeDetails(o, this.data())), void 0)
            }
        }), t.fn.select2 = function () {
            var n, i, s, r, a, l = Array.prototype.slice.call(arguments, 0), c = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"], u = ["opened", "isFocused", "container", "dropdown"], h = ["val", "data"], d = {search: "externalSearch"};
            return this.each(function () {
                if (0 === l.length || "object" == typeof l[0])n = 0 === l.length ? {} : t.extend({}, l[0]), n.element = t(this), "select" === n.element.get(0).tagName.toLowerCase() ? a = n.element.prop("multiple") : (a = n.multiple || !1, "tags"in n && (n.multiple = a = !0)), i = a ? new window.Select2["class"].multi : new window.Select2["class"].single, i.init(n); else {
                    if ("string" != typeof l[0])throw"Invalid arguments to select2 plugin: " + l;
                    if (o(l[0], c) < 0)throw"Unknown method: " + l[0];
                    if (r = e, i = t(this).data("select2"), i === e)return;
                    if (s = l[0], "container" === s ? r = i.container : "dropdown" === s ? r = i.dropdown : (d[s] && (s = d[s]), r = i[s].apply(i, l.slice(1))), o(l[0], u) >= 0 || o(l[0], h) >= 0 && 1 == l.length)return !1
                }
            }), r === e ? this : r
        }, t.fn.select2.defaults = {
            width: "copy",
            loadMorePadding: 0,
            closeOnSelect: !0,
            openOnEnter: !0,
            containerCss: {},
            dropdownCss: {},
            containerCssClass: "",
            dropdownCssClass: "",
            formatResult: function (t, e, n, i) {
                var o = [];
                return b(this.text(t), n.term, o, i), o.join("")
            },
            transformVal: function (e) {
                return t.trim(e)
            },
            formatSelection: function (t, n, i) {
                return t ? i(this.text(t)) : e
            },
            sortResults: function (t) {
                return t
            },
            formatResultCssClass: function (t) {
                return t.css
            },
            formatSelectionCssClass: function () {
                return e
            },
            minimumResultsForSearch: 0,
            minimumInputLength: 0,
            maximumInputLength: null,
            maximumSelectionSize: 0,
            id: function (t) {
                return t == e ? null : t.id
            },
            text: function (e) {
                return e && this.data && this.data.text ? t.isFunction(this.data.text) ? this.data.text(e) : e[this.data.text] : e.text
            },
            matcher: function (t, e) {
                return i("" + e).toUpperCase().indexOf(i("" + t).toUpperCase()) >= 0
            },
            separator: ",",
            tokenSeparators: [],
            tokenizer: E,
            escapeMarkup: w,
            blurOnChange: !1,
            selectOnBlur: !1,
            adaptContainerCssClass: function (t) {
                return t
            },
            adaptDropdownCssClass: function () {
                return null
            },
            nextSearchTerm: function () {
                return e
            },
            searchInputPlaceholder: "",
            createSearchChoicePosition: "top",
            shouldFocusInput: function (t) {
                var e = "ontouchstart"in window || navigator.msMaxTouchPoints > 0;
                return e && t.opts.minimumResultsForSearch < 0 ? !1 : !0
            }
        }, t.fn.select2.locales = [], t.fn.select2.locales.en = {
            formatMatches: function (t) {
                return 1 === t ? "One result is available, press enter to select it." : t + " results are available, use up and down arrow keys to navigate."
            }, formatNoMatches: function () {
                return "No matches found"
            }, formatAjaxError: function () {
                return "Loading failed"
            }, formatInputTooShort: function (t, e) {
                var n = e - t.length;
                return "Please enter " + n + " or more character" + (1 == n ? "" : "s")
            }, formatInputTooLong: function (t, e) {
                var n = t.length - e;
                return "Please delete " + n + " character" + (1 == n ? "" : "s")
            }, formatSelectionTooBig: function (t) {
                return "You can only select " + t + " item" + (1 == t ? "" : "s")
            }, formatLoadMore: function () {
                return "Loading more results\u2026"
            }, formatSearching: function () {
                return "Searching\u2026"
            }
        }, t.extend(t.fn.select2.defaults, t.fn.select2.locales.en), t.fn.select2.ajaxDefaults = {
            transport: t.ajax,
            params: {type: "GET", cache: !1, dataType: "json"}
        }, window.Select2 = {
            query: {ajax: x, local: k, tags: T},
            util: {debounce: h, markMatch: b, escapeMarkup: w, stripDiacritics: i},
            "class": {"abstract": N, single: L, multi: A}
        }
    }
}(jQuery), function (t, e, n) {
    function i(t) {
        var e = k(), n = e.querySelector("h2"), i = e.querySelector("p"), o = e.querySelector("button.cancel"), s = e.querySelector("button.confirm");
        if (n.innerHTML = t.html ? t.title : E(t.title).split("\n").join("<br>"), i.innerHTML = t.html ? t.text : E(t.text || "").split("\n").join("<br>"), t.text && j(i), t.customClass)S(e, t.customClass), e.setAttribute("data-custom-class", t.customClass); else {
            var r = e.getAttribute("data-custom-class");
            $(e, r), e.setAttribute("data-custom-class", "")
        }
        if (L(e.querySelectorAll(".sa-icon")), t.type && !u()) {
            for (var l = !1, c = 0; c < w.length; c++)if (t.type === w[c]) {
                l = !0;
                break
            }
            if (!l)return h("Unknown alert type: " + t.type), !1;
            var d = e.querySelector(".sa-icon.sa-" + t.type);
            switch (j(d), t.type) {
                case"success":
                    S(d, "animate"), S(d.querySelector(".sa-tip"), "animateSuccessTip"), S(d.querySelector(".sa-long"), "animateSuccessLong");
                    break;
                case"error":
                    S(d, "animateErrorIcon"), S(d.querySelector(".sa-x-mark"), "animateXMark");
                    break;
                case"warning":
                    S(d, "pulseWarning"), S(d.querySelector(".sa-body"), "pulseWarningIns"), S(d.querySelector(".sa-dot"), "pulseWarningIns")
            }
        }
        if (t.imageUrl) {
            var p = e.querySelector(".sa-icon.sa-custom");
            p.style.backgroundImage = "url(" + t.imageUrl + ")", j(p);
            var f = 80, m = 80;
            if (t.imageSize) {
                var g = t.imageSize.toString().split("x"), v = g[0], y = g[1];
                v && y ? (f = v, m = y) : h("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + t.imageSize)
            }
            p.setAttribute("style", p.getAttribute("style") + "width:" + f + "px; height:" + m + "px")
        }
        e.setAttribute("data-has-cancel-button", t.showCancelButton), t.showCancelButton ? o.style.display = "inline-block" : L(o), e.setAttribute("data-has-confirm-button", t.showConfirmButton), t.showConfirmButton ? s.style.display = "inline-block" : L(s), t.cancelButtonText && (o.innerHTML = E(t.cancelButtonText)), t.confirmButtonText && (s.innerHTML = E(t.confirmButtonText)), s.style.backgroundColor = t.confirmButtonColor, a(s, t.confirmButtonColor), e.setAttribute("data-allow-ouside-click", t.allowOutsideClick);
        var b = t.doneFunction ? !0 : !1;
        e.setAttribute("data-has-done-function", b), t.animation ? e.setAttribute("data-animation", "pop") : e.setAttribute("data-animation", "none"), e.setAttribute("data-timer", t.timer)
    }

    function o(t, e) {
        t = String(t).replace(/[^0-9a-f]/gi, ""), t.length < 6 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), e = e || 0;
        var n, i, o = "#";
        for (i = 0; 3 > i; i++)n = parseInt(t.substr(2 * i, 2), 16), n = Math.round(Math.min(Math.max(0, n + n * e), 255)).toString(16), o += ("00" + n).substr(n.length);
        return o
    }

    function s(t, e) {
        for (var n in e)e.hasOwnProperty(n) && (t[n] = e[n]);
        return t
    }

    function r(t) {
        var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
        return e ? parseInt(e[1], 16) + ", " + parseInt(e[2], 16) + ", " + parseInt(e[3], 16) : null
    }

    function a(t, e) {
        var n = r(e);
        t.style.boxShadow = "0 0 2px rgba(" + n + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"
    }

    function l() {
        var t = k();
        P(T(), 10), j(t), S(t, "showSweetAlert"), $(t, "hideSweetAlert"), d = e.activeElement;
        var n = t.querySelector("button.confirm");
        n.focus(), setTimeout(function () {
            S(t, "visible")
        }, 500);
        var i = t.getAttribute("data-timer");
        "null" !== i && "" !== i && (t.timeout = setTimeout(function () {
            g.close()
        }, i))
    }

    function c() {
        var t = k();
        t.style.marginTop = O(k())
    }

    function u() {
        return t.attachEvent && !t.addEventListener ? !0 : !1
    }

    function h(e) {
        t.console && t.console.log("SweetAlert: " + e)
    }

    var d, p, f, m, g, v, y = ".sweet-alert", b = ".sweet-overlay", w = ["error", "warning", "info", "success"], x = {
        title: "",
        text: "",
        type: null,
        allowOutsideClick: !1,
        showConfirmButton: !0,
        showCancelButton: !1,
        closeOnConfirm: !0,
        closeOnCancel: !0,
        confirmButtonText: "OK",
        confirmButtonColor: "#AEDEF4",
        cancelButtonText: "Cancel",
        imageUrl: null,
        imageSize: null,
        timer: null,
        customClass: "",
        html: !1,
        animation: !0,
        allowEscapeKey: !0
    }, k = function () {
        var t = e.querySelector(y);
        return t || (H(), t = k()), t
    }, T = function () {
        return e.querySelector(b)
    }, C = function (t, e) {
        return new RegExp(" " + e + " ").test(" " + t.className + " ")
    }, S = function (t, e) {
        C(t, e) || (t.className += " " + e)
    }, $ = function (t, e) {
        var n = " " + t.className.replace(/[\t\r\n]/g, " ") + " ";
        if (C(t, e)) {
            for (; n.indexOf(" " + e + " ") >= 0;)n = n.replace(" " + e + " ", " ");
            t.className = n.replace(/^\s+|\s+$/g, "")
        }
    }, E = function (t) {
        var n = e.createElement("div");
        return n.appendChild(e.createTextNode(t)), n.innerHTML
    }, _ = function (t) {
        t.style.opacity = "", t.style.display = "block"
    }, j = function (t) {
        if (t && !t.length)return _(t);
        for (var e = 0; e < t.length; ++e)_(t[e])
    }, N = function (t) {
        t.style.opacity = "", t.style.display = "none"
    }, L = function (t) {
        if (t && !t.length)return N(t);
        for (var e = 0; e < t.length; ++e)N(t[e])
    }, A = function (t, e) {
        for (var n = e.parentNode; null !== n;) {
            if (n === t)return !0;
            n = n.parentNode
        }
        return !1
    }, O = function (t) {
        t.style.left = "-9999px", t.style.display = "block";
        var e, n = t.clientHeight;
        return e = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(t).getPropertyValue("padding"), 10) : parseInt(t.currentStyle.padding), t.style.left = "", t.style.display = "none", "-" + parseInt(n / 2 + e) + "px"
    }, P = function (t, e) {
        if (+t.style.opacity < 1) {
            e = e || 16, t.style.opacity = 0, t.style.display = "block";
            var n = +new Date, i = function () {
                t.style.opacity = +t.style.opacity + (new Date - n) / 100, n = +new Date, +t.style.opacity < 1 && setTimeout(i, e)
            };
            i()
        }
        t.style.display = "block"
    }, D = function (t, e) {
        e = e || 16, t.style.opacity = 1;
        var n = +new Date, i = function () {
            t.style.opacity = +t.style.opacity - (new Date - n) / 100, n = +new Date, +t.style.opacity > 0 ? setTimeout(i, e) : t.style.display = "none"
        };
        i()
    }, I = function (n) {
        if ("function" == typeof MouseEvent) {
            var i = new MouseEvent("click", {view: t, bubbles: !1, cancelable: !0});
            n.dispatchEvent(i)
        } else if (e.createEvent) {
            var o = e.createEvent("MouseEvents");
            o.initEvent("click", !1, !1), n.dispatchEvent(o)
        } else e.createEventObject ? n.fireEvent("onclick") : "function" == typeof n.onclick && n.onclick()
    }, M = function (e) {
        "function" == typeof e.stopPropagation ? (e.stopPropagation(), e.preventDefault()) : t.event && t.event.hasOwnProperty("cancelBubble") && (t.event.cancelBubble = !0)
    }, H = function () {
        var t = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert" tabIndex="-1"><div class="sa-icon sa-error"><span class="sa-x-mark"><span class="sa-line sa-left"></span><span class="sa-line sa-right"></span></span></div><div class="sa-icon sa-warning"> <span class="sa-body"></span> <span class="sa-dot"></span> </div> <div class="sa-icon sa-info"></div> <div class="sa-icon sa-success"> <span class="sa-line sa-tip"></span> <span class="sa-line sa-long"></span> <div class="sa-placeholder"></div> <div class="sa-fix"></div> </div> <div class="sa-icon sa-custom"></div> <h2>Title</h2><p>Text</p><button class="cancel" tabIndex="2">Cancel</button><button class="confirm" tabIndex="1">OK</button></div>', n = e.createElement("div");
        for (n.innerHTML = t; n.firstChild;)e.body.appendChild(n.firstChild)
    };
    g = v = function () {
        function r(t) {
            var e = v;
            return "undefined" != typeof e[t] ? e[t] : x[t]
        }

        function u(e) {
            var i = e || t.event, o = i.keyCode || i.which;
            if (-1 !== [9, 13, 32, 27].indexOf(o)) {
                for (var s = i.target || i.srcElement, r = -1, l = 0; l < O.length; l++)if (s === O[l]) {
                    r = l;
                    break
                }
                9 === o ? (s = -1 === r ? N : r === O.length - 1 ? O[0] : O[r + 1], M(i), s.focus(), a(s, y.confirmButtonColor)) : (s = 13 === o || 32 === o ? -1 === r ? N : n : 27 === o && y.allowEscapeKey === !0 ? L : n, s !== n && I(s, i))
            }
        }

        function d(e) {
            var n = e || t.event, i = n.target || n.srcElement, o = n.relatedTarget, s = C($, "visible");
            if (s) {
                var r = -1;
                if (null !== o) {
                    for (var a = 0; a < O.length; a++)if (o === O[a]) {
                        r = a;
                        break
                    }
                    -1 === r && i.focus()
                } else m = i
            }
        }

        var v = arguments[0];
        if (arguments[0] === n)return h("SweetAlert expects at least 1 attribute!"), !1;
        var y = s({}, x);
        switch (typeof arguments[0]) {
            case"string":
                y.title = arguments[0], y.text = arguments[1] || "", y.type = arguments[2] || "";
                break;
            case"object":
                if (arguments[0].title === n)return h('Missing "title" argument!'), !1;
                y.title = arguments[0].title;
                for (var b = ["text", "type", "customClass", "allowOutsideClick", "showConfirmButton", "showCancelButton", "closeOnConfirm", "closeOnCancel", "timer", "confirmButtonColor", "cancelButtonText", "imageUrl", "imageSize", "html", "animation", "allowEscapeKey"], w = b.length, T = 0; w > T; T++) {
                    var S = b[T];
                    y[S] = r(S)
                }
                y.confirmButtonText = y.showCancelButton ? "Confirm" : x.confirmButtonText, y.confirmButtonText = r("confirmButtonText"), y.doneFunction = arguments[1] || null;
                break;
            default:
                return h('Unexpected type of argument! Expected "string" or "object", got ' + typeof arguments[0]), !1
        }
        i(y), c(), l();
        for (var $ = k(), E = function (e) {
            var n = e || t.event, i = n.target || n.srcElement, s = -1 !== i.className.indexOf("confirm"), r = C($, "visible"), a = y.doneFunction && "true" === $.getAttribute("data-has-done-function");
            switch (n.type) {
                case"mouseover":
                    s && (i.style.backgroundColor = o(y.confirmButtonColor, -.04));
                    break;
                case"mouseout":
                    s && (i.style.backgroundColor = y.confirmButtonColor);
                    break;
                case"mousedown":
                    s && (i.style.backgroundColor = o(y.confirmButtonColor, -.14));
                    break;
                case"mouseup":
                    s && (i.style.backgroundColor = o(y.confirmButtonColor, -.04));
                    break;
                case"focus":
                    var l = $.querySelector("button.confirm"), c = $.querySelector("button.cancel");
                    s ? c.style.boxShadow = "none" : l.style.boxShadow = "none";
                    break;
                case"click":
                    if (s && a && r)y.doneFunction(!0), y.closeOnConfirm && g.close(); else if (a && r) {
                        var u = String(y.doneFunction).replace(/\s/g, ""), h = "function(" === u.substring(0, 9) && ")" !== u.substring(9, 10);
                        h && y.doneFunction(!1), y.closeOnCancel && g.close()
                    } else g.close()
            }
        }, _ = $.querySelectorAll("button"), j = 0; j < _.length; j++)_[j].onclick = E, _[j].onmouseover = E, _[j].onmouseout = E, _[j].onmousedown = E, _[j].onfocus = E;
        p = e.onclick, e.onclick = function (e) {
            var n = e || t.event, i = n.target || n.srcElement, o = $ === i, s = A($, i), r = C($, "visible"), a = "true" === $.getAttribute("data-allow-ouside-click");
            !o && !s && r && a && g.close()
        };
        var N = $.querySelector("button.confirm"), L = $.querySelector("button.cancel"), O = $.querySelectorAll("button[tabindex]");
        f = t.onkeydown, t.onkeydown = u, N.onblur = d, L.onblur = d, t.onfocus = function () {
            t.setTimeout(function () {
                m !== n && (m.focus(), m = n)
            }, 0)
        }
    }, g.setDefaults = v.setDefaults = function (t) {
        if (!t)throw new Error("userParams is required");
        if ("object" != typeof t)throw new Error("userParams has to be a object");
        s(x, t)
    }, g.close = v.close = function () {
        var i = k();
        D(T(), 5), D(i, 5), $(i, "showSweetAlert"), S(i, "hideSweetAlert"), $(i, "visible");
        var o = i.querySelector(".sa-icon.sa-success");
        $(o, "animate"), $(o.querySelector(".sa-tip"), "animateSuccessTip"), $(o.querySelector(".sa-long"), "animateSuccessLong");
        var s = i.querySelector(".sa-icon.sa-error");
        $(s, "animateErrorIcon"), $(s.querySelector(".sa-x-mark"), "animateXMark");
        var r = i.querySelector(".sa-icon.sa-warning");
        $(r, "pulseWarning"), $(r.querySelector(".sa-body"), "pulseWarningIns"), $(r.querySelector(".sa-dot"), "pulseWarningIns"), t.onkeydown = f, e.onclick = p, d && d.focus(), m = n, clearTimeout(i.timeout)
    }, "function" == typeof define && define.amd ? define(function () {
        return g
    }) : "undefined" != typeof module && module.exports ? module.exports = g : "undefined" != typeof t && (t.sweetAlert = t.swal = g)
}(window, document), function () {
    var t, e, n, i;
    t = t || {}, $(function () {
        return FastClick.attach(document.body), e(), n(), map_init()
    }), n = function () {
        var t, e;
        switch (e = location.pathname.split("/")[1]) {
            case"":
                return $.stellar(), isElementInViewport($(".plan-count")) && $(".plan-count").countTo().attr("data-done", "true"), $(window).on("DOMContentLoaded load resize scroll", i);
            case"wish_map":
                parseInt(window.localStorage.count, 10) > 3 && !window.current_user && $(".nav-notification-bar").show().animate({top: 74});
                break;
            case"plan":
                return t = window.location.hash.replace("#", ""), setTimeout(function () {
                    return $("#" + t).collapse("show")
                }, 1e3);
            case"trip":
                if (t = window.location.hash.replace("#", ""))return $("a[href=#" + t + "]").tab("show");
                break;
            case"theme":
                return $(window).on("DOMContentLoaded load resize scroll", i), $(".carousel-indicators li").hide(), $(".carousel-indicators li[data-group=1]").show(), $.fn.swiper && $(".swiper-container").each(function () {
                    var t;
                    return t = $(this).attr("data-dest"), $(this).swiper({
                        preloadImages: !1,
                        lazyLoading: !0,
                        grabCursor: !0,
                        pagination: ".pagination-" + t,
                        paginationClickable: !0
                    })
                }), $("#honey_moon_slide").on("slide.bs.carousel", function (t) {
                    var e, n, i;
                    return i = $(t.relatedTarget).data("index"), n = $(t.relatedTarget).data("group"), e = function () {
                        switch (!1) {
                            case!(4 > i):
                                return "island";
                            case!(i >= 4 && 11 > i):
                                return "europe";
                            case!(i >= 11 && 16 > i):
                                return "meal";
                            case!(i >= 16):
                                return "honey"
                        }
                    }(), $(".destination_desc .desc_title").text($(".slide_list ." + e).data("title")), $(".destination_desc p").text($(".slide_list ." + e).data("p")), $(".honey_moon_container li.active").removeClass("active"), $(".slide_list ." + e + " li").addClass("active"), $(".carousel-indicators li").hide(), $(".carousel-indicators li[data-group=" + n + "]").show()
                }), $(".slide_list a").click(function () {
                    var t;
                    return t = $(this), $(".honey_moon_container li.active").removeClass("active"), $("li", t).addClass("active"), $("#honey_moon_slide").carousel(t.data("index"))
                })
        }
    }, i = function () {
        var t;
        return t = $(".plan-count"), isElementInViewport(t) && "false" === t.attr("data-done") ? t.countTo().attr("data-done", "true") : void 0
    }, e = function () {
        var t, e, n, i, o, s, r, a, l, c, u, h;
        return $("body").append('<script type="text/javascript" src="http://www.googleadservices.com/pagead/conversion.js"></script>'), $('[id^="lightbox"]').lightbox(), $(".user-info a").on("click", function () {
            return $(".user-info .sub-menu").toggle()
        }), $(".dialog .close").on("click", function () {
            return $(".dialog").hide()
        }), c = $("#video-player"), c.length && (u = 1e3, i = 500, $(window).width() < u && (u = $(window).width(), i = u / 2, videojs.options.flash.swf = "http://uniqueway-document.b0.upaiyun.com/video-js.swf", videojs.options.techOrder = ["flash"]), n = {
            width: u,
            height: i,
            left: "50%",
            top: "50%",
            marginLeft: -(u / 2),
            marginTop: -(i / 2)
        }, r = videojs("video-player"), c.css(n), r.on("fullscreenchange", function () {
            var t;
            return t = c.hasClass("vjs-fullscreen") ? {left: 0, top: 0, marginLeft: 0, marginTop: 0} : n, c.css(t)
        })), t = $(".main-banner"), e = ".cooperation-banner,.contact-banner,.destination-banner,.roadbook-banner,.TheNordicEvent2014-banner,.joinus-banner\n", t.is(e) || t.height($(window).height()), $(".map-list").length && (o = 142, s = $(".map-list"), h = $(window).width(), u = Math.floor(h / o) * o, s.width(u)), $(window).scroll(function () {
            return $(window).scrollTop() > 200 ? $(".backtotop").show() : $(".backtotop").hide()
        }), $(".backtotop").on("click", function () {
            return $("html,body").animate({scrollTop: 0}, 500)
        }), $(".widget-item").hover(function () {
            return console.log($("div", this)), $("div", this).fadeIn()
        }, function () {
            return $("div", this).fadeOut()
        }), $(".job-list li").on("click", function () {
            var t, e;
            return t = $(this), e = t.index(), $(".job-list li").removeClass("cur"), t.addClass("cur"), $(".job-desc .item").hide().filter(":eq(" + e + ")").show()
        }), $(".simple_form.registration").on("submit", function (t) {
            return $("#registration_password").val().length ? void 0 : t.preventDefault()
        }), $(".simple_form.registration").find(".ensure-captcha").on("click", function () {
            var t, e;
            return t = $("#form-captcha-code").val(), e = $("#registration_phone").val(), t.length ? $.post("/check_sms_code", {
                code: t,
                phone: e
            }, function (t) {
                return 0 === t.error ? $(".registration .form").addClass("flip") : alert(t.msg)
            }) : alert("\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a\uff01")
        }), $(".show-video").click(function () {
            var t;
            return t = $(this).attr("data-id"), $(".video-block[data-id=" + t + "]").show()
        }), $(".video-block .bg,.video-block .close").click(function () {
            return r && r.pause(), $(".video-block").hide()
        }), $(".sliders .arrow").on("click", function () {
            var t, e, n;
            return ga("send", "pageview", "/index_sliders/arrow"), n = $(".main-banner.sliders:visible"), e = !1, $(this).hasClass("left") ? (e = n.prev(".main-banner.sliders"), e.length || (e = $(".main-banner.sliders:last"))) : (e = n.next(".main-banner.sliders"), e.length || (e = $(".main-banner.sliders:first"))), e && e.length && (n.hide(), e.show()), t = $(".main-banner.sliders").index(e), $(".switcher.active").removeClass("active"), $(".switcher:nth-child(" + (t + 1) + ")").addClass("active")
        }), $(".switcher").on("click", function () {
            var t;
            return t = $(".switcher").index($(this)), console.log(t), $(".main-banner.sliders:visible").hide(), $(".main-banner.sliders:eq(" + t + ")").show(), $(".switcher.active").removeClass("active"), $(".switcher:nth-child(" + (t + 1) + ")").addClass("active")
        }), $(".tooltip").tooltipster(), $(".like-counter").click(function () {
            var t, e;
            return t = $(this), e = t.attr("data-id"), $.post("/like_travel_tailor", {id: e}, function (e) {
                return e.error ? alert("\u4e0d\u80fd\u7ed9\u540c\u4e00\u4e2a\u5b9a\u5236\u5e08\u591a\u6b21\u6295\u7968\u54df") : t.find("span").text(e.count)
            })
        }), $(".wechat-event-link").click(function () {
            return $(".TheNordicEvent2014-qrcode").fadeIn()
        }), $(".TheNordicEvent2014-qrcode").click(function () {
            return $(this).fadeOut()
        }), $(".poi-explore-container").height($(window).height() - 74), $(window).scroll(function () {
            return $(this).scrollTop() > 20 ? $(".nav-bar").addClass("on-scroll") : $(".nav-bar").removeClass("on-scroll")
        }), $.support.leadingWhitespace || $("#browser").show(), $("#browser").on("click", ".close", function () {
            return $("#browser").animate({top: "-99px"}, 400)
        }), $(".destination-container img,.story-container img").lazyload({
            threshold: 300,
            effect: "fadeIn"
        }), a = function () {
        }, l = function () {
        }
    }
}.call(this);