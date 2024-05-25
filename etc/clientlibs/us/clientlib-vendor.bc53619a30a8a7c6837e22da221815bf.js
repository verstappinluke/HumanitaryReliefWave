/*
 MIT

 Lodash <https://lodash.com/>
 Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 Released under MIT license <https://lodash.com/license>
 Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license  fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license  JavaScript Cookie v2.1.4
  https://github.com/js-cookie/js-cookie

  Copyright 2006, 2015 Klaus Hartl & Fagner Brack
  Released under the MIT license
*/
'use strict';
! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "2.2.4",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this,
                arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null !=
                (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isPlainObject: function(a) {
            var b;
            if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (b in a);
            return void 0 === b || k.call(a, b)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a),
                a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a))
                for (c = a.length; c > d; d++) {
                    if (b.call(a[d], d, a[d]) === !1) break
                } else
                    for (d in a)
                        if (b.call(a[d], d, a[d]) === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a,
            b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : h.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0,
                h = [];
            if (s(a))
                for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
            else
                for (g in a) e = b(a[g], g, c), null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function() {
                return a.apply(b || this, d.concat(e.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        },
        now: Date.now,
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?\x3d)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([\x3e+~]|" + L + ")" + L + "*"),
            T = new RegExp("\x3d" + L + "*([^\\]'\"]*?)" + L +
                "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[\x3e+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?\x3d[^-]|$)",
                    "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            da = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a,
                    b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1])
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else {
                            if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                        }
                else {
                    if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((f =
                            o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$\x26"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id\x3d'" + k + "']";
                        while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d
                    } catch (y) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(Q,
                "$1"), b, d, e)
        }

        function ga() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ha(a) {
            return a[u] = !0, a
        }

        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ja(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ka(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c =
                    c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function na(a) {
            return ha(function(b) {
                return b = +b, ha(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {}, f = fa.isXML = function(a) {
            var b =
                a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                    return a.className = "i", !a.getAttribute("className")
                }), c.getElementsByTagName = ia(function(a) {
                    return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
                }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                    return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
                }), c.getById ? (d.find.ID = function(a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                        var c = b.getElementById(a);
                        return c ? [c] : []
                    }
                }, d.filter.ID = function(a) {
                    var b = a.replace(ba, ca);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete d.find.ID, d.filter.ID = function(a) {
                    var b = a.replace(ba, ca);
                    return function(a) {
                        var c =
                            "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
                } : function(a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        while (c = f[e++]) 1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                    return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) :
                        void 0
                }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                    o.appendChild(a).innerHTML = "\x3ca id\x3d'" + u + "'\x3e\x3c/a\x3e\x3cselect id\x3d'" + u + "-\r\\' msallowcapture\x3d''\x3e\x3coption selected\x3d''\x3e\x3c/option\x3e\x3c/select\x3e", a.querySelectorAll("[msallowcapture^\x3d'']").length && q.push("[*^$]\x3d" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~\x3d" + u + "-]").length || q.push("~\x3d"), a.querySelectorAll(":checked").length ||
                        q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
                }), ia(function(a) {
                    var b = n.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name\x3dd]").length && q.push("name" + L + "*[*^$|!~]?\x3d"), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
                })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) &&
                ia(function(a) {
                    c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!\x3d'']:x"), r.push("!\x3d", O)
                }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function(a, b) {
                    if (b)
                        while (b = b.parentNode)
                            if (b === a) return !0;
                    return !1
                }, B = b ? function(a,
                    b) {
                    if (a === b) return l = !0, 0;
                    var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
                } : function(a, b) {
                    if (a === b) return l = !0, 0;
                    var c, d = 0,
                        e = a.parentNode,
                        f = b.parentNode,
                        g = [a],
                        h = [b];
                    if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                    if (e === f) return ka(a,
                        b);
                    c = a;
                    while (c = c.parentNode) g.unshift(c);
                    c = b;
                    while (c = c.parentNode) h.unshift(c);
                    while (g[d] === h[d]) d++;
                    return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
                }, n) : n
        }, fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }, fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "\x3d'$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return fa(b, n, null, [a]).length >
                0
        }, fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, fa.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable &&
                a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fa.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f)
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else {
                    if (3 === f || 4 === f) return a.nodeValue
                }
            else
                while (b = a[d++]) c += e(b);
            return c
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                "\x3e": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~\x3d" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null :
                        (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute &&
                            a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!\x3d" === b : b ? (e += "", "\x3d" === b ? e === c : "!\x3d" === b ? e !== c : "^\x3d" === b ? c && 0 === e.indexOf(c) : "*\x3d" === b ? c && e.indexOf(c) > -1 : "$\x3d" === b ? c && e.slice(-c.length) === c : "~\x3d" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|\x3d" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                            return !!a.parentNode
                        } :
                        function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h,
                                t = !1;
                            if (q) {
                                if (f) {
                                    while (p) {
                                        m = b;
                                        while (m = m[p])
                                            if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                    while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                        if (1 === m.nodeType && ++t && m === b) {
                                            k[a] = [w, n, t];
                                            break
                                        }
                                } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                    while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                        if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                                return t -= e, t === d || t % d === 0 && t / d >= 0
                            }
                        }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ?
                        ha(function(a, c) {
                            var d, f = e(a, b),
                                g = f.length;
                            while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                        }) : function(a) {
                            return e(a, 0, c)
                        }) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                        function(b) {
                            return (b.textContent ||
                                b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus ||
                        n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c +=
                        2) a.push(c);
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = la(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = ma(b);

        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c &&
                    !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                        value: c,
                        type: e[0].replace(Q, " ")
                    }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        };

        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b,
                c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g)
                    while (b = b[d]) {
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                    } else
                        while (b = b[d])
                            if (1 === b.nodeType || e) {
                                if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                                if (i[d] = k, k[2] = a(b, c, g)) return !0
                            }
            }
        }

        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fa(a, b[d],
                c);
            return c
        }

        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ua(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l =
                                r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                    return a === b
                }, h, !0), l = ra(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                else {
                    if (c =
                        d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            return sa(m)
        }

        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e &&
                            l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector =
                    a
            }
            return f
        }, i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) &&
                            oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ia(function(a) {
            return a.innerHTML = "\x3ca href\x3d'#'\x3e\x3c/a\x3e", "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b,
                "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ia(function(a) {
            return a.innerHTML = "\x3cinput/\x3e", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fa
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] =
        n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        v = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d,
                a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return h.call(b, a) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b =
                    0; c > b; b++)
                    if (n.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || A, "string" == typeof a) {
                if (e =
                    "\x3c" === a[0] && "\x3e" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                        for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this
            }
            return a.nodeType ? (this.context =
                this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.fn.extend({
        has: function(a) {
            var b = n(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" !=
                    typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null ==
                a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function F(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b,
            c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var G = /\S+/g;

    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        n.each(b, function(b, c) {
                            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length &&
                                "string" !== n.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = g = [], c || (f = c = ""), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c),
                        b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g =
                                    n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments),
                        this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f ||
                g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });

    function J() {
        d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready()
    }
    n.ready.promise = function(b) {
        return I ||
            (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b)
    }, n.ready.promise();
    var K = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) K(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(n(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h],
                    h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        L = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };

    function M() {
        this.expando = n.expando + M.uid++
    }
    M.uid = 1, M.prototype = {
        register: function(a, b) {
            var c = b || {};
            return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0
            }), a[this.expando]
        },
        cache: function(a) {
            if (!L(a)) return {};
            var b = a[this.expando];
            return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[b] = c;
            else
                for (d in b) e[d] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b) this.register(a);
                else {
                    n.isArray(b) ?
                        d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;
                    while (c--) delete f[d[c]]
                }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !n.isEmptyObject(b)
        }
    };
    var N = new M,
        O = new M,
        P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Q = /[A-Z]/g;

    function R(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Q, "-$\x26").toLowerCase(), c = a.getAttribute(d),
                "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                O.set(a, b, c)
            } else c = void 0;
        return c
    }
    n.extend({
        hasData: function(a) {
            return O.hasData(a) || N.hasData(a)
        },
        data: function(a, b, c) {
            return O.access(a, b, c)
        },
        removeData: function(a, b) {
            O.remove(a, b)
        },
        _data: function(a, b, c) {
            return N.access(a, b, c)
        },
        _removeData: function(a, b) {
            N.remove(a, b)
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = O.get(f),
                        1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));
                    N.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                O.set(this, a)
            }) : K(this, function(b) {
                var c, d;
                if (f && void 0 === b) {
                    if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$\x26").toLowerCase()), void 0 !== c) return c;
                    if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;
                    if (c = R(f, d, void 0), void 0 !== c) return c
                } else d = n.camelCase(a), this.each(function() {
                    var c =
                        O.get(this, d);
                    O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                O.remove(this, a)
            })
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() {
                    n.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(),
                d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return N.get(a, c) || N.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    N.remove(a, [b + "queue", c])
                })
            })
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this,
                    a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = new RegExp("^(?:([+-])\x3d|)(" + S + ")([a-z%]*)$", "i"),
        U = ["Top", "Right",
            "Bottom", "Left"
        ],
        V = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        };

    function W(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return n.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var X =
        /^(?:checkbox|radio)$/i,
        Y = /<([\w:-]+)/,
        Z = /^$|\/(?:java|ecma)script/i,
        $ = {
            option: [1, "\x3cselect multiple\x3d'multiple'\x3e", "\x3c/select\x3e"],
            thead: [1, "\x3ctable\x3e", "\x3c/table\x3e"],
            col: [2, "\x3ctable\x3e\x3ccolgroup\x3e", "\x3c/colgroup\x3e\x3c/table\x3e"],
            tr: [2, "\x3ctable\x3e\x3ctbody\x3e", "\x3c/tbody\x3e\x3c/table\x3e"],
            td: [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"],
            _default: [0, "", ""]
        };
    $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th =
        $.td;

    function _(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function aa(a, b) {
        for (var c = 0, d = a.length; d > c; c++) N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"))
    }
    var ba = /<|&#?\w+;/;

    function ca(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++)
            if (f = a[o], f || 0 === f)
                if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);
                else if (ba.test(f)) {
            g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];
            while (k--) g = g.lastChild;
            n.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
        } else m.push(b.createTextNode(f));
        l.textContent = "", o = 0;
        while (f = m[o++])
            if (d && n.inArray(f, d) > -1) e && e.push(f);
            else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) {
            k = 0;
            while (f = g[k++]) Z.test(f.type || "") && c.push(f)
        }
        return l
    }! function() {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "\x3ctextarea\x3ex\x3c/textarea\x3e", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var da = /^key/,
        ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        fa = /^([^.]*)(?:\.(.+)|)/;

    function ga() {
        return !0
    }

    function ha() {
        return !1
    }

    function ia() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function ja(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) ja(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                    return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(G) || [""], j = b.length;
                while (j--) h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a);
            if (r && (i = r.events)) {
                b =
                    (b || "").match(G) || [""], j = b.length;
                while (j--)
                    if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a,
                            p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                    } else
                        for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && N.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (N.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g =
                            f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i !== this; i = i.parentNode ||
                    this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e &&
                    e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) c = e[b], a[c] = g[c];
            return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !==
                        ia() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ia() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener &&
            a.removeEventListener(b, c)
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: ha,
        isPropagationStopped: ha,
        isImmediatePropagationStopped: ha,
        isSimulated: !1,
        preventDefault: function() {
            var a =
                this.originalEvent;
            this.isDefaultPrevented = ga, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ga, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ga, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a,
        b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d) {
            return ja(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return ja(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        }
    });
    var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        la = /<script|<style|<link/i,
        ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
        na = /^true\/(.*)/,
        oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function pa(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] ||
            a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function qa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function ra(a) {
        var b = na.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function sa(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
            }
            O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i))
        }
    }

    function ta(a, b) {
        var c =
            b.nodeName.toLowerCase();
        "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function ua(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d)
        });
        if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
            for (h = n.map(_(e, "script"), qa),
                i = h.length; o > m; m++) j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
            if (i)
                for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")))
        }
        return a
    }

    function va(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(ka, "\x3c$1\x3e\x3c/$2\x3e")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = n.contains(a.ownerDocument, a);
            if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) ta(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) sa(f[d], g[d]);
                else sa(a, h);
            return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, d, e = n.event.special,
                    f = 0; void 0 !== (c = a[f]); f++)
                if (L(c)) {
                    if (b = c[N.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                        c[N.expando] = void 0
                    }
                    c[O.expando] && (c[O.expando] = void 0)
                }
        }
    }), n.fn.extend({
        domManip: ua,
        detach: function(a) {
            return va(this, a, !0)
        },
        remove: function(a) {
            return va(this, a)
        },
        text: function(a) {
            return K(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return ua(this, arguments, function(a) {
                this.parentNode &&
                    this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return K(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return ua(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), f = e.length -
                    1, h = 0; f >= h; h++) c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var wa, xa = {
        HTML: "block",
        BODY: "block"
    };

    function ya(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function za(a) {
        var b = d,
            c = xa[a];
        return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("\x3ciframe frameborder\x3d'0' width\x3d'0' height\x3d'0'/\x3e")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c
    }
    var Aa =
        /^margin/,
        Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ca = function(b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        },
        Da = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        Ea = d.documentElement;
    ! function() {
        var b, c, e, f, g = d.createElement("div"),
            h = d.createElement("div");
        if (h.style) {
            h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" ===
                h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);

            function i() {
                h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);
                var d = a.getComputedStyle(h);
                b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight,
                    Ea.removeChild(g)
            }
            n.extend(l, {
                pixelPosition: function() {
                    return i(), b
                },
                boxSizingReliable: function() {
                    return null == c && i(), c
                },
                pixelMarginRight: function() {
                    return null == c && i(), e
                },
                reliableMarginLeft: function() {
                    return null == c && i(), f
                },
                reliableMarginRight: function() {
                    var b, c = h.appendChild(d.createElement("div"));
                    return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g),
                        b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b
                }
            })
        }
    }();

    function Fa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g
    }

    function Ga(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get :
                    (this.get = b).apply(this, arguments)
            }
        }
    }
    var Ha = /^(none|table(?!-c[ea]).+)/,
        Ia = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ja = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ka = ["Webkit", "O", "Moz", "ms"],
        La = d.createElement("div").style;

    function Ma(a) {
        if (a in La) return a;
        var b = a[0].toUpperCase() + a.slice(1),
            c = Ka.length;
        while (c--)
            if (a = Ka[c] + b, a in La) return a
    }

    function Na(a, b, c) {
        var d = T.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function Oa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 :
                "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g
    }

    function Pa(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ca(a),
            g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Fa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ba.test(e)) return e;
            d = g && (l.boxSizingReliable() ||
                e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Qa(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] ||
            "" : "none"));
        return a
    }
    n.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = Fa(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
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
            cssProps: {
                "float": "cssFloat"
            },
            style: function(a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = n.camelCase(b),
                        i = a.style;
                    return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] ||
                        n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
                }
            },
            css: function(a, b, c, d) {
                var e, f, g, h = n.camelCase(b);
                return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
            }
        }), n.each(["height", "width"], function(a, b) {
            n.cssHooks[b] = {
                get: function(a, c, d) {
                    return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function() {
                        return Pa(a, b, d)
                    }) : Pa(a, b, d) : void 0
                },
                set: function(a, c, d) {
                    var e, f = d && Ca(a),
                        g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
                    return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g)
                }
            }
        }), n.cssHooks.marginLeft =
        Ga(l.reliableMarginLeft, function(a, b) {
            return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {
                marginLeft: 0
            }, function() {
                return a.getBoundingClientRect().left
            })) + "px" : void 0
        }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function(a, b) {
            return b ? Da(a, {
                display: "inline-block"
            }, Fa, [a, "marginRight"]) : void 0
        }), n.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            n.cssHooks[a + b] = {
                expand: function(c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] ||
                        f[d - 2] || f[0];
                    return e
                }
            }, Aa.test(a) || (n.cssHooks[a + b].set = Na)
        }), n.fn.extend({
            css: function(a, b) {
                return K(this, function(a, b, c) {
                    var d, e, f = {},
                        g = 0;
                    if (n.isArray(b)) {
                        for (d = Ca(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                        return f
                    }
                    return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
                }, a, b, arguments.length > 1)
            },
            show: function() {
                return Qa(this, !0)
            },
            hide: function() {
                return Qa(this)
            },
            toggle: function(a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                    V(this) ? n(this).show() : n(this).hide()
                })
            }
        });

    function Ra(a,
        b, c, d, e) {
        return new Ra.prototype.init(a, b, c, d, e)
    }
    n.Tween = Ra, Ra.prototype = {
        constructor: Ra,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Ra.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ra.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Ra.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration *
                a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this
        }
    }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType ||
                    null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, n.fx = Ra.prototype.init, n.fx.step = {};
    var Sa, Ta, Ua = /^(?:toggle|show|hide)$/,
        Va = /queueHooks$/;

    function Wa() {
        return a.setTimeout(function() {
                Sa = void 0
            }), Sa =
            n.now()
    }

    function Xa(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = U[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ya(a, b, c) {
        for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function Za(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            o = a.style,
            p = a.nodeType && V(a),
            q = N.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
                h.unqueued || i()
            }), h.unqueued++,
            l.always(function() {
                l.always(function() {
                    h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
                })
            })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], Ua.exec(e)) {
                if (delete b[d],
                    f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);
        else {
            q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
                n(a).hide()
            }), l.done(function() {
                var b;
                N.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b])
            });
            for (d in m) g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" ===
                d ? 1 : 0))
        }
    }

    function $a(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function _a(a, b, c) {
        var d, e, f = 0,
            g = _a.prefilters.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {},
                    easing: n.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Sa || Wa(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for ($a(k, j.opts.specialEasing); g > f; f++)
            if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(_a, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return W(c.elem, a, T.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b)
            },
            prefilters: [Za],
            prefilter: function(a, b) {
                b ? _a.prefilters.unshift(a) : _a.prefilters.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) &&
                    b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(V).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b =
                            _a(this, n.extend({}, a), f);
                        (e || N.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = N.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !==
                        a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = N.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c =
                n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: Xa("show"),
            slideUp: Xa("hide"),
            slideToggle: Xa("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = 0,
                c = n.timers;
            for (Sa = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || n.fx.stop(), Sa = void 0
        },
        n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            a.clearInterval(Ta), Ta = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(b, c) {
            return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value
        }();
    var ab, bb = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return K(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) :
                (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(G);
            if (f &&
                1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }
    }), ab = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = bb[b] || n.find.attr;
        bb[b] = function(a, b, d) {
            var e, f;
            return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e
        }
    });
    var cb = /^(?:input|select|textarea|button)$/i,
        db = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return K(this, n.prop, a,
                b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var eb = /[\t\r\n\f]/g;

    function fb(a) {
        return a.getAttribute &&
            a.getAttribute("class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, fb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this,
                    b, fb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this,
                    c, fb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(G) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var gb = /\r/g,
        hb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !==
                    (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(hb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode,
                                "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var ib = /^(?:focusinfocus|focusoutblur)$/;
    n.extend(n.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result =
                    void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
                if (!f && !o.noBubble && !n.isWindow(e)) {
                    for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode) p.push(h), i = h;
                    i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = p[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result =
                    m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b)
        }
    }), n.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a,
            b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), l.focusin = "onfocusin" in a, l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = N.access(d, b);
                e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = N.access(d, b) - 1;
                e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b))
            }
        }
    });
    var jb = a.location,
        kb = n.now(),
        lb = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, n.parseXML = function(b) {
        var c;
        if (!b || "string" !=
            typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var mb = /#.*$/,
        nb = /([?&])_=[^&]*/,
        ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        qb = /^(?:GET|HEAD)$/,
        rb = /^\/\//,
        sb = {},
        tb = {},
        ub = "*/".concat("*"),
        vb = d.createElement("a");
    vb.href = jb.href;

    function wb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function xb(a, b, c, d) {
        var e = {},
            f = a === tb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function yb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0,
            a, d), a
    }

    function zb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Ab(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] &&
                (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: jb.href,
                type: "GET",
                isLocal: pb.test(jb.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset\x3dUTF-8",
                accepts: {
                    "*": ub,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": n.parseJSON,
                    "text xml": n.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(a, b) {
                return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a)
            },
            ajaxPrefilter: wb(sb),
            ajaxTransport: wb(tb),
            ajax: function(b, c) {
                "object" == typeof b && (c = b, b = void 0), c = c || {};
                var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c),
                    o = m.context || m,
                    p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
                    q = n.Deferred(),
                    r = n.Callbacks("once memory"),
                    s = m.statusCode || {},
                    t = {},
                    u = {},
                    v = 0,
                    w = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === v) {
                                if (!h) {
                                    h = {};
                                    while (b = ob.exec(g)) h[b[1].toLowerCase()] =
                                        b[2]
                                }
                                b = h[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function() {
                            return 2 === v ? g : null
                        },
                        setRequestHeader: function(a, b) {
                            var c = a.toLowerCase();
                            return v || (a = u[c] = u[c] || a, t[a] = b), this
                        },
                        overrideMimeType: function(a) {
                            return v || (m.mimeType = a), this
                        },
                        statusCode: function(a) {
                            var b;
                            if (a)
                                if (2 > v)
                                    for (b in a) s[b] = [s[b], a[b]];
                                else x.always(a[x.status]);
                            return this
                        },
                        abort: function(a) {
                            var b = a || w;
                            return e && e.abort(b), z(0, b), this
                        }
                    };
                if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b ||
                        m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
                    j = d.createElement("a");
                    try {
                        j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host
                    } catch (y) {
                        m.crossDomain = !0
                    }
                }
                if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), xb(sb, m, c, x), 2 === v) return x;
                k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"),
                    m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "\x26" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_\x3d" + kb++) : f + (lb.test(f) ? "\x26" : "?") + "_\x3d" + kb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType),
                    x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q\x3d0.01" : "") : m.accepts["*"]);
                for (l in m.headers) x.setRequestHeader(l, m.headers[l]);
                if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();
                w = "abort";
                for (l in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[l](m[l]);
                if (e = xb(tb, m, c, x)) {
                    if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;
                    m.async && m.timeout > 0 && (i = a.setTimeout(function() {
                        x.abort("timeout")
                    }, m.timeout));
                    try {
                        v = 1, e.send(t, z)
                    } catch (y) {
                        if (!(2 > v)) throw y;
                        z(-1, y)
                    }
                } else z(-1, "No Transport");

                function z(b, c, d, h) {
                    var j, l, t, u, w, y = c;
                    2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 >
                        b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")))
                }
                return x
            },
            getJSON: function(a, b, c) {
                return n.get(a, b, c, "json")
            },
            getScript: function(a, b) {
                return n.get(a, void 0, b, "script")
            }
        }), n.each(["get", "post"], function(a, b) {
            n[b] = function(a, c, d, e) {
                return n.isFunction(c) && (e = e || d, d = c, c = void 0),
                    n.ajax(n.extend({
                        url: a,
                        type: b,
                        dataType: e,
                        data: c,
                        success: d
                    }, n.isPlainObject(a) && a))
            }
        }), n._evalUrl = function(a) {
            return n.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, n.fn.extend({
            wrapAll: function(a) {
                var b;
                return n.isFunction(a) ? this.each(function(b) {
                    n(this).wrapAll(a.call(this, b))
                }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                        var a = this;
                        while (a.firstElementChild) a = a.firstElementChild;
                        return a
                    }).append(this)),
                    this)
            },
            wrapInner: function(a) {
                return n.isFunction(a) ? this.each(function(b) {
                    n(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = n(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = n.isFunction(a);
                return this.each(function(c) {
                    n(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
                }).end()
            }
        }), n.expr.filters.hidden = function(a) {
            return !n.expr.filters.visible(a)
        }, n.expr.filters.visible =
        function(a) {
            return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
        };
    var Bb = /%20/g,
        Cb = /\[\]$/,
        Db = /\r?\n/g,
        Eb = /^(?:submit|button|image|reset|file)$/i,
        Fb = /^(?:input|select|textarea|keygen)/i;

    function Gb(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) Gb(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null ==
                    b ? "" : b, d[d.length] = encodeURIComponent(a) + "\x3d" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Gb(c, a[c], b, e);
        return d.join("\x26").replace(Bb, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a =
                    this.type;
                return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Db, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Db, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    };
    var Hb = {
            0: 200,
            1223: 204
        },
        Ib = n.ajaxSettings.xhr();
    l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function(b) {
        var c,
            d;
        return l.cors || Ib && !b.crossDomain ? {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ?
                            f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                                binary: h.response
                            } : {
                                text: h.responseText
                            }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c) throw i;
                }
            },
            abort: function() {
                c && c()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = n("\x3cscript\x3e").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                    }), d.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Jb = [],
        Kb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Jb.pop() || n.expando + "_" + kb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Kb, "$1" +
            e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "\x26" : "?") + b.jsonp + "\x3d" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var Lb = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Lb) return Lb.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("\x3cdiv\x3e").append(n.parseHTML(a)).find(d) :
                a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };

    function Mb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    n.offset = {
            setOffset: function(a, b, c) {
                var d, e, f, g, h, i, j, k = n.css(a, "position"),
                    l = n(a),
                    m = {};
                "static" ===
                k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
            }
        }, n.fn.extend({
            offset: function(a) {
                if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                    n.offset.setOffset(this, a,
                        b)
                });
                var b, c, d = this[0],
                    e = {
                        top: 0,
                        left: 0
                    },
                    f = d && d.ownerDocument;
                if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Mb(f), {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e
            },
            position: function() {
                if (this[0]) {
                    var a, b, c = this[0],
                        d = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                        top: b.top - d.top - n.css(c, "marginTop", !0),
                        left: b.left - d.left - n.css(c, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var a = this.offsetParent;
                    while (a && "static" === n.css(a, "position")) a = a.offsetParent;
                    return a || Ea
                })
            }
        }), n.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(a, b) {
            var c = "pageYOffset" === b;
            n.fn[a] = function(d) {
                return K(this, function(a, d, e) {
                    var f = Mb(a);
                    return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
                }, a, d, arguments.length)
            }
        }),
        n.each(["top", "left"], function(a, b) {
            n.cssHooks[b] = Ga(l.pixelPosition, function(a, c) {
                return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0
            })
        }), n.each({
            Height: "height",
            Width: "width"
        }, function(a, b) {
            n.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function(c, d) {
                n.fn[d] = function(d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d),
                        g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return K(this, function(b, c, d) {
                        var e;
                        return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                            Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                    }, b, f ? d : void 0, f, null)
                }
            })
        }), n.fn.extend({
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            },
            size: function() {
                return this.length
            }
        }), n.fn.andSelf = n.fn.addBack, "function" == typeof define &&
        define.amd && define("jquery", [], function() {
            return n
        });
    var Nb = a.jQuery,
        Ob = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n
    }, b || (a.jQuery = a.$ = n), n
});
(function(r, G, f, v) {
    var J = f("html"),
        n = f(r),
        p = f(G),
        b = f.fancybox = function() {
            b.open.apply(this, arguments)
        },
        I = navigator.userAgent.match(/msie/i),
        B = null,
        s = G.createTouch !== v,
        t = function(a) {
            return a && a.hasOwnProperty && a instanceof f
        },
        q = function(a) {
            return a && "string" === f.type(a)
        },
        E = function(a) {
            return q(a) && 0 < a.indexOf("%")
        },
        l = function(a, d) {
            var e = parseInt(a, 10) || 0;
            d && E(a) && (e *= b.getViewport()[d] / 100);
            return Math.ceil(e)
        },
        w = function(a, b) {
            return l(a, b) + "px"
        };
    f.extend(b, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !s,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: .5,
            leftRatio: .5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3E3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "auto",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '\x3cdiv class\x3d"fancybox-wrap" tabIndex\x3d"-1"\x3e\x3cdiv class\x3d"fancybox-skin"\x3e\x3cdiv class\x3d"fancybox-outer"\x3e\x3cdiv class\x3d"fancybox-inner"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
                image: '\x3cimg class\x3d"fancybox-image" src\x3d"{href}" alt\x3d"" /\x3e',
                iframe: '\x3ciframe id\x3d"fancybox-frame{rnd}" name\x3d"fancybox-frame{rnd}" class\x3d"fancybox-iframe" frameborder\x3d"0" vspace\x3d"0" hspace\x3d"0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (I ? ' allowtransparency\x3d"true"' : "") + "\x3e\x3c/iframe\x3e",
                error: '\x3cp class\x3d"fancybox-error"\x3eThe requested content cannot be loaded.\x3cbr/\x3ePlease try again later.\x3c/p\x3e',
                closeBtn: '\x3ca title\x3d"Close" class\x3d"fancybox-item fancybox-close" href\x3d"javascript:;"\x3e\x3c/a\x3e',
                next: '\x3ca title\x3d"Next" class\x3d"fancybox-nav fancybox-next" href\x3d"javascript:;"\x3e\x3cspan\x3e\x3c/span\x3e\x3c/a\x3e',
                prev: '\x3ca title\x3d"Previous" class\x3d"fancybox-nav fancybox-prev" href\x3d"javascript:;"\x3e\x3cspan\x3e\x3c/span\x3e\x3c/a\x3e'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: !0,
                title: !0
            },
            onCancel: f.noop,
            beforeLoad: f.noop,
            afterLoad: f.noop,
            beforeShow: f.noop,
            afterShow: f.noop,
            beforeChange: f.noop,
            beforeClose: f.noop,
            afterClose: f.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(a, d) {
            if (a && (f.isPlainObject(d) ||
                    (d = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = t(a) ? f(a).get() : [a]), f.each(a, function(e, c) {
                var k = {},
                    g, h, j, m, l;
                "object" === f.type(c) && (c.nodeType && (c = f(c)), t(c) ? (k = {
                    href: c.data("fancybox-href") || c.attr("href"),
                    title: c.data("fancybox-title") || c.attr("title"),
                    isDom: !0,
                    element: c
                }, f.metadata && f.extend(!0, k, c.metadata())) : k = c);
                g = d.href || k.href || (q(c) ? c : null);
                h = d.title !== v ? d.title : k.title || "";
                m = (j = d.content || k.content) ? "html" : d.type || k.type;
                !m && k.isDom && (m = c.data("fancybox-type"), m || (m = (m = c.prop("class").match(/fancybox\.(\w+)/)) ?
                    m[1] : null));
                q(g) && (m || (b.isImage(g) ? m = "image" : b.isSWF(g) ? m = "swf" : "#" === g.charAt(0) ? m = "inline" : q(c) && (m = "html", j = c)), "ajax" === m && (l = g.split(/\s+/, 2), g = l.shift(), l = l.shift()));
                j || ("inline" === m ? g ? j = f(q(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : k.isDom && (j = c) : "html" === m ? j = g : !m && (!g && k.isDom) && (m = "inline", j = c));
                f.extend(k, {
                    href: g,
                    type: m,
                    content: j,
                    title: h,
                    selector: l
                });
                a[e] = k
            }), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== v && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index)
        },
        cancel: function() {
            var a = b.coming;
            a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current || b._afterZoomOut(a))
        },
        close: function(a) {
            b.cancel();
            !1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()) : (b.isOpen = b.isOpened = !1,
                b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]())))
        },
        play: function(a) {
            var d = function() {
                    clearTimeout(b.player.timer)
                },
                e = function() {
                    d();
                    b.current && b.player.isActive && (b.player.timer = setTimeout(b.next, b.current.playSpeed))
                },
                c = function() {
                    d();
                    p.unbind(".player");
                    b.player.isActive = !1;
                    b.trigger("onPlayEnd")
                };
            if (!0 === a || !b.player.isActive && !1 !== a) {
                if (b.current && (b.current.loop || b.current.index < b.group.length -
                        1)) b.player.isActive = !0, p.bind({
                    "onCancel.player beforeClose.player": c,
                    "onUpdate.player": e,
                    "beforeLoad.player": d
                }), e(), b.trigger("onPlayStart")
            } else c()
        },
        next: function(a) {
            var d = b.current;
            d && (q(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"))
        },
        prev: function(a) {
            var d = b.current;
            d && (q(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"))
        },
        jumpto: function(a, d, e) {
            var c = b.current;
            c && (a = l(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a %
                c.group.length), a %= c.group.length), c.group[a] !== v && (b.cancel(), b._start(a)))
        },
        reposition: function(a, d) {
            var e = b.current,
                c = e ? e.wrap : null,
                k;
            c && (k = b._getPosition(d), a && "scroll" === a.type ? (delete k.position, c.stop(!0, !0).animate(k, 200)) : (c.css(k), e.pos = f.extend({}, e.dim, k)))
        },
        update: function(a) {
            var d = a && a.type,
                e = !d || "orientationchange" === d;
            e && (clearTimeout(B), B = null);
            b.isOpen && !B && (B = setTimeout(function() {
                var c = b.current;
                c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d &&
                    c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), B = null)
            }, e && !s ? 0 : 300))
        },
        toggle: function(a) {
            b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, s && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")), b.update())
        },
        hideLoading: function() {
            p.unbind(".loading");
            f("#fancybox-loading").remove()
        },
        showLoading: function() {
            var a, d;
            b.hideLoading();
            a = f('\x3cdiv id\x3d"fancybox-loading"\x3e\x3cdiv\x3e\x3c/div\x3e\x3c/div\x3e').click(b.cancel).appendTo("body");
            p.bind("keydown.loading", function(a) {
                if (27 === (a.which || a.keyCode)) a.preventDefault(), b.cancel()
            });
            b.defaults.fixed || (d = b.getViewport(), a.css({
                position: "absolute",
                top: .5 * d.h + d.y,
                left: .5 * d.w + d.x
            }))
        },
        getViewport: function() {
            var a = b.current && b.current.locked || !1,
                d = {
                    x: n.scrollLeft(),
                    y: n.scrollTop()
                };
            a ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = s && r.innerWidth ? r.innerWidth : n.width(), d.h = s && r.innerHeight ? r.innerHeight : n.height());
            return d
        },
        unbindEvents: function() {
            b.wrap && t(b.wrap) && b.wrap.unbind(".fb");
            p.unbind(".fb");
            n.unbind(".fb")
        },
        bindEvents: function() {
            var a = b.current,
                d;
            a && (n.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && p.bind("keydown.fb", function(e) {
                var c = e.which || e.keyCode,
                    k = e.target || e.srcElement;
                if (27 === c && b.coming) return !1;
                !e.ctrlKey && (!e.altKey && !e.shiftKey && !e.metaKey && (!k || !k.type && !f(k).is("[contenteditable]"))) && f.each(d, function(d, k) {
                    if (1 < a.group.length && k[c] !== v) return b[d](k[c]), e.preventDefault(), !1;
                    if (-1 < f.inArray(c,
                            k)) return b[d](), e.preventDefault(), !1
                })
            }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function(d, c, k, g) {
                for (var h = f(d.target || null), j = !1; h.length && !j && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap");) j = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();
                if (0 !== c && !j && 1 < b.group.length && !a.canShrink) {
                    if (0 < g || 0 < k) b.prev(0 < g ? "down" : "left");
                    else if (0 >
                        g || 0 > k) b.next(0 > g ? "up" : "right");
                    d.preventDefault()
                }
            }))
        },
        trigger: function(a, d) {
            var e, c = d || b.coming || b.current;
            if (c) {
                f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
                if (!1 === e) return !1;
                c.helpers && f.each(c.helpers, function(d, e) {
                    if (e && b.helpers[d] && f.isFunction(b.helpers[d][a])) b.helpers[d][a](f.extend(!0, {}, b.helpers[d].defaults, e), c)
                });
                p.trigger(a)
            }
        },
        isImage: function(a) {
            return q(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function(a) {
            return q(a) &&
                a.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function(a) {
            var d = {},
                e, c;
            a = l(a);
            e = b.group[a] || null;
            if (!e) return !1;
            d = f.extend(!0, {}, b.opts, e);
            e = d.margin;
            c = d.padding;
            "number" === f.type(e) && (d.margin = [e, e, e, e]);
            "number" === f.type(c) && (d.padding = [c, c, c, c]);
            d.modal && f.extend(!0, d, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: {
                    overlay: {
                        closeClick: !1
                    }
                }
            });
            d.autoSize && (d.autoWidth = d.autoHeight = !0);
            "auto" === d.width && (d.autoWidth = !0);
            "auto" === d.height && (d.autoHeight = !0);
            d.group = b.group;
            d.index = a;
            b.coming = d;
            if (!1 === b.trigger("beforeLoad")) b.coming = null;
            else {
                c = d.type;
                e = d.href;
                if (!c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;
                b.isActive = !0;
                if ("image" === c || "swf" === c) d.autoHeight = d.autoWidth = !1, d.scrolling = "visible";
                "image" === c && (d.aspectRatio = !0);
                "iframe" === c && s && (d.scrolling = "scroll");
                d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
                f.extend(d, {
                    skin: f(".fancybox-skin", d.wrap),
                    outer: f(".fancybox-outer", d.wrap),
                    inner: f(".fancybox-inner", d.wrap)
                });
                f.each(["Top", "Right", "Bottom", "Left"], function(a, b) {
                    d.skin.css("padding" + b, w(d.padding[a]))
                });
                b.trigger("onReady");
                if ("inline" === c || "html" === c) {
                    if (!d.content || !d.content.length) return b._error("content")
                } else if (!e) return b._error("href");
                "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad()
            }
        },
        _error: function(a) {
            f.extend(b.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: a,
                content: b.coming.tpl.error
            });
            b._afterLoad()
        },
        _loadImage: function() {
            var a = b.imgPreload = new Image;
            a.onload = function() {
                this.onload = this.onerror = null;
                b.coming.width = this.width / b.opts.pixelRatio;
                b.coming.height = this.height / b.opts.pixelRatio;
                b._afterLoad()
            };
            a.onerror = function() {
                this.onload = this.onerror = null;
                b._error("image")
            };
            a.src = b.coming.href;
            !0 !== a.complete && b.showLoading()
        },
        _loadAjax: function() {
            var a = b.coming;
            b.showLoading();
            b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
                url: a.href,
                error: function(a, e) {
                    b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading()
                },
                success: function(d, e) {
                    "success" === e && (a.content = d, b._afterLoad())
                }
            }))
        },
        _loadIframe: function() {
            var a = b.coming,
                d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", s ? "auto" : a.iframe.scrolling).attr("src", a.href);
            f(a.wrap).bind("onReset", function() {
                try {
                    f(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (a) {}
            });
            a.iframe.preload &&
                (b.showLoading(), d.one("load", function() {
                    f(this).data("ready", 1);
                    s || f(this).bind("load.fb", b.update);
                    f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                    b._afterLoad()
                }));
            a.content = d.appendTo(a.inner);
            a.iframe.preload || b._afterLoad()
        },
        _preloadImages: function() {
            var a = b.group,
                d = b.current,
                e = a.length,
                c = d.preload ? Math.min(d.preload, e - 1) : 0,
                f, g;
            for (g = 1; g <= c; g += 1) f = a[(d.index + g) % e], "image" === f.type && f.href && ((new Image).src = f.href)
        },
        _afterLoad: function() {
            var a = b.coming,
                d = b.current,
                e, c, k, g, h;
            b.hideLoading();
            if (a && !1 !== b.isActive)
                if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null;
                else {
                    d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
                    b.unbindEvents();
                    e = a.content;
                    c = a.type;
                    k = a.scrolling;
                    f.extend(b, {
                        wrap: a.wrap,
                        skin: a.skin,
                        outer: a.outer,
                        inner: a.inner,
                        current: a,
                        previous: d
                    });
                    g = a.href;
                    switch (c) {
                        case "inline":
                        case "ajax":
                        case "html":
                            a.selector ? e = f("\x3cdiv\x3e").html(e).find(a.selector) :
                                t(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('\x3cdiv class\x3d"fancybox-placeholder"\x3e\x3c/div\x3e').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function() {
                                    f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                                }));
                            break;
                        case "image":
                            e = a.tpl.image.replace("{href}", g);
                            break;
                        case "swf":
                            e = '\x3cobject id\x3d"fancybox-swf" classid\x3d"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width\x3d"100%" height\x3d"100%"\x3e\x3cparam name\x3d"movie" value\x3d"' +
                                g + '"\x3e\x3c/param\x3e', h = "", f.each(a.swf, function(a, b) {
                                    e += '\x3cparam name\x3d"' + a + '" value\x3d"' + b + '"\x3e\x3c/param\x3e';
                                    h += " " + a + '\x3d"' + b + '"'
                                }), e += '\x3cembed src\x3d"' + g + '" type\x3d"application/x-shockwave-flash" width\x3d"100%" height\x3d"100%"' + h + "\x3e\x3c/embed\x3e\x3c/object\x3e"
                    }(!t(e) || !e.parent().is(a.inner)) && a.inner.append(e);
                    b.trigger("beforeShow");
                    a.inner.css("overflow", "yes" === k ? "scroll" : "no" === k ? "hidden" : k);
                    b._setDimension();
                    b.reposition();
                    b.isOpen = !1;
                    b.coming = null;
                    b.bindEvents();
                    if (b.isOpened) {
                        if (d.prevMethod) b.transitions[d.prevMethod]()
                    } else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
                    b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
                    b._preloadImages()
                }
        },
        _setDimension: function() {
            var a = b.getViewport(),
                d = 0,
                e = !1,
                c = !1,
                e = b.wrap,
                k = b.skin,
                g = b.inner,
                h = b.current,
                c = h.width,
                j = h.height,
                m = h.minWidth,
                u = h.minHeight,
                n = h.maxWidth,
                p = h.maxHeight,
                s = h.scrolling,
                q = h.scrollOutside ? h.scrollbarWidth : 0,
                x = h.margin,
                y = l(x[1] + x[3]),
                r = l(x[0] + x[2]),
                v, z, t, C, A, F, B, D, H;
            e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
            x = l(k.outerWidth(!0) - k.width());
            v = l(k.outerHeight(!0) - k.height());
            z = y + x;
            t = r + v;
            C = E(c) ? (a.w - z) * l(c) / 100 : c;
            A = E(j) ? (a.h - t) * l(j) / 100 : j;
            if ("iframe" === h.type) {
                if (H = h.content, h.autoHeight && 1 === H.data("ready")) try {
                    H[0].contentWindow.document.location && (g.width(C).height(9999), F = H.contents().find("body"), q && F.css("overflow-x", "hidden"), A = F.outerHeight(!0))
                } catch (G) {}
            } else if (h.autoWidth || h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(C), h.autoHeight || g.height(A), h.autoWidth && (C = g.width()), h.autoHeight &&
                (A = g.height()), g.removeClass("fancybox-tmp");
            c = l(C);
            j = l(A);
            D = C / A;
            m = l(E(m) ? l(m, "w") - z : m);
            n = l(E(n) ? l(n, "w") - z : n);
            u = l(E(u) ? l(u, "h") - t : u);
            p = l(E(p) ? l(p, "h") - t : p);
            F = n;
            B = p;
            h.fitToView && (n = Math.min(a.w - z, n), p = Math.min(a.h - t, p));
            z = a.w - y;
            r = a.h - r;
            h.aspectRatio ? (c > n && (c = n, j = l(c / D)), j > p && (j = p, c = l(j * D)), c < m && (c = m, j = l(c / D)), j < u && (j = u, c = l(j * D))) : (c = Math.max(m, Math.min(c, n)), h.autoHeight && "iframe" !== h.type && (g.width(c), j = g.height()), j = Math.max(u, Math.min(j, p)));
            if (h.fitToView)
                if (g.width(c).height(j), e.width(c + x),
                    a = e.width(), y = e.height(), h.aspectRatio)
                    for (;
                        (a > z || y > r) && (c > m && j > u) && !(19 < d++);) j = Math.max(u, Math.min(p, j - 10)), c = l(j * D), c < m && (c = m, j = l(c / D)), c > n && (c = n, j = l(c / D)), g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height();
                else c = Math.max(m, Math.min(c, c - (a - z))), j = Math.max(u, Math.min(j, j - (y - r)));
            q && ("auto" === s && j < A && c + x + q < z) && (c += q);
            g.width(c).height(j);
            e.width(c + x);
            a = e.width();
            y = e.height();
            e = (a > z || y > r) && c > m && j > u;
            c = h.aspectRatio ? c < F && j < B && c < C && j < A : (c < F || j < B) && (c < C || j < A);
            f.extend(h, {
                dim: {
                    width: w(a),
                    height: w(y)
                },
                origWidth: C,
                origHeight: A,
                canShrink: e,
                canExpand: c,
                wPadding: x,
                hPadding: v,
                wrapSpace: y - k.outerHeight(!0),
                skinSpace: k.height() - j
            });
            !H && (h.autoHeight && j > u && j < p && !c) && g.height("auto")
        },
        _getPosition: function(a) {
            var d = b.current,
                e = b.getViewport(),
                c = d.margin,
                f = b.wrap.width() + c[1] + c[3],
                g = b.wrap.height() + c[0] + c[2],
                c = {
                    position: "absolute",
                    top: c[0],
                    left: c[3]
                };
            d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);
            c.top = w(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
            c.left = w(Math.max(c.left,
                c.left + (e.w - f) * d.leftRatio));
            return c
        },
        _afterZoomIn: function() {
            var a = b.current;
            a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function(d) {
                    !f(d.target).is("a") && !f(d.target).parent().is("a") && (d.preventDefault(), b[a.closeClick ? "close" : "next"]())
                }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function(a) {
                    a.preventDefault();
                    b.close()
                }), a.arrows &&
                1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play()))
        },
        _afterZoomOut: function(a) {
            a = a || b.current;
            f(".fancybox-wrap").trigger("onReset").remove();
            f.extend(b, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });
            b.trigger("afterClose", a)
        }
    });
    b.transitions = {
        getOrigPosition: function() {
            var a = b.current,
                d = a.element,
                e = a.orig,
                c = {},
                f = 50,
                g = 50,
                h = a.hPadding,
                j = a.wPadding,
                m = b.getViewport();
            !e && (a.isDom && d.is(":visible")) && (e = d.find("img:first"), e.length || (e = d));
            t(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) : (c.top = m.y + (m.h - g) * a.topRatio, c.left = m.x + (m.w - f) * a.leftRatio);
            if ("fixed" === b.wrap.css("position") || a.locked) c.top -= m.y, c.left -= m.x;
            return c = {
                top: w(c.top - h * a.topRatio),
                left: w(c.left - j * a.leftRatio),
                width: w(f + j),
                height: w(g + h)
            }
        },
        step: function(a, d) {
            var e, c, f = d.prop;
            c = b.current;
            var g = c.wrapSpace,
                h = c.skinSpace;
            if ("width" === f || "height" === f) e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](l("width" === f ? c : c - g * e)), b.inner[f](l("width" === f ? c : c - g * e - h * e))
        },
        zoomIn: function() {
            var a = b.current,
                d = a.pos,
                e = a.openEffect,
                c = "elastic" === e,
                k = f.extend({
                    opacity: 1
                }, d);
            delete k.position;
            c ? (d =
                this.getOrigPosition(), a.openOpacity && (d.opacity = .1)) : "fade" === e && (d.opacity = .1);
            b.wrap.css(d).animate(k, {
                duration: "none" === e ? 0 : a.openSpeed,
                easing: a.openEasing,
                step: c ? this.step : null,
                complete: b._afterZoomIn
            })
        },
        zoomOut: function() {
            var a = b.current,
                d = a.closeEffect,
                e = "elastic" === d,
                c = {
                    opacity: .1
                };
            e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = .1));
            b.wrap.animate(c, {
                duration: "none" === d ? 0 : a.closeSpeed,
                easing: a.closeEasing,
                step: e ? this.step : null,
                complete: b._afterZoomOut
            })
        },
        changeIn: function() {
            var a =
                b.current,
                d = a.nextEffect,
                e = a.pos,
                c = {
                    opacity: 1
                },
                f = b.direction,
                g;
            e.opacity = .1;
            "elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = w(l(e[g]) - 200), c[g] = "+\x3d200px") : (e[g] = w(l(e[g]) + 200), c[g] = "-\x3d200px"));
            "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, {
                duration: a.nextSpeed,
                easing: a.nextEasing,
                complete: b._afterZoomIn
            })
        },
        changeOut: function() {
            var a = b.previous,
                d = a.prevEffect,
                e = {
                    opacity: .1
                },
                c = b.direction;
            "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" ===
                c ? "-" : "+") + "\x3d200px");
            a.wrap.animate(e, {
                duration: "none" === d ? 0 : a.prevSpeed,
                easing: a.prevEasing,
                complete: function() {
                    f(this).trigger("onReset").remove()
                }
            })
        }
    };
    b.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !s,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        el: f("html"),
        create: function(a) {
            a = f.extend({}, this.defaults, a);
            this.overlay && this.close();
            this.overlay = f('\x3cdiv class\x3d"fancybox-overlay"\x3e\x3c/div\x3e').appendTo(b.coming ? b.coming.parent : a.parent);
            this.fixed = !1;
            a.fixed &&
                b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function(a) {
            var d = this;
            a = f.extend({}, this.defaults, a);
            this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
            this.fixed || (n.bind("resize.overlay", f.proxy(this.update, this)), this.update());
            a.closeClick && this.overlay.bind("click.overlay", function(a) {
                if (f(a.target).hasClass("fancybox-overlay")) return b.isActive ? b.close() : d.close(), !1
            });
            this.overlay.css(a.css).show()
        },
        close: function() {
            var a,
                b;
            n.unbind("resize.overlay");
            this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), a = n.scrollTop(), b = n.scrollLeft(), this.el.removeClass("fancybox-lock"), n.scrollTop(a).scrollLeft(b));
            f(".fancybox-overlay").remove().hide();
            f.extend(this, {
                overlay: null,
                fixed: !1
            })
        },
        update: function() {
            var a = "100%",
                b;
            this.overlay.width(a).height("100%");
            I ? (b = Math.max(G.documentElement.offsetWidth, G.body.offsetWidth), p.width() > b && (a = p.width())) : p.width() > n.width() && (a = p.width());
            this.overlay.width(a).height(p.height())
        },
        onReady: function(a, b) {
            var e = this.overlay;
            f(".fancybox-overlay").stop(!0, !0);
            e || this.create(a);
            a.locked && (this.fixed && b.fixed) && (e || (this.margin = p.height() > n.height() ? f("html").css("margin-right").replace("px", "") : !1), b.locked = this.overlay.append(b.wrap), b.fixed = !1);
            !0 === a.showEarly && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function(a, b) {
            var e, c;
            b.locked && (!1 !== this.margin && (f("*").filter(function() {
                    return "fixed" === f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap")
                }).addClass("fancybox-margin"),
                this.el.addClass("fancybox-margin")), e = n.scrollTop(), c = n.scrollLeft(), this.el.addClass("fancybox-lock"), n.scrollTop(e).scrollLeft(c));
            this.open(a)
        },
        onUpdate: function() {
            this.fixed || this.update()
        },
        afterClose: function(a) {
            this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this))
        }
    };
    b.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function(a) {
            var d = b.current,
                e = d.title,
                c = a.type;
            f.isFunction(e) && (e = e.call(d.element, d));
            if (q(e) && "" !== f.trim(e)) {
                d = f('\x3cdiv class\x3d"fancybox-title fancybox-title-' +
                    c + '-wrap"\x3e' + e + "\x3c/div\x3e");
                switch (c) {
                    case "inside":
                        c = b.skin;
                        break;
                    case "outside":
                        c = b.wrap;
                        break;
                    case "over":
                        c = b.inner;
                        break;
                    default:
                        c = b.skin, d.appendTo("body"), I && d.width(d.width()), d.wrapInner('\x3cspan class\x3d"child"\x3e\x3c/span\x3e'), b.current.margin[2] += Math.abs(l(d.css("margin-bottom")))
                }
                d["top" === a.position ? "prependTo" : "appendTo"](c)
            }
        }
    };
    f.fn.fancybox = function(a) {
        var d, e = f(this),
            c = this.selector || "",
            k = function(g) {
                var h = f(this).blur(),
                    j = d,
                    k, l;
                !g.ctrlKey && (!g.altKey && !g.shiftKey && !g.metaKey) &&
                    !h.is(".fancybox-wrap") && (k = a.groupAttr || "data-fancybox-group", l = h.attr(k), l || (k = "rel", l = h.get(0)[k]), l && ("" !== l && "nofollow" !== l) && (h = c.length ? f(c) : e, h = h.filter("[" + k + '\x3d"' + l + '"]'), j = h.index(this)), a.index = j, !1 !== b.open(h, a) && g.preventDefault())
            };
        a = a || {};
        d = a.index || 0;
        !c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", k) : p.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k);
        this.filter("[data-fancybox-start\x3d1]").trigger("click");
        return this
    };
    p.ready(function() {
        var a, d;
        f.scrollbarWidth === v && (f.scrollbarWidth = function() {
            var a = f('\x3cdiv style\x3d"width:50px;height:50px;overflow:auto"\x3e\x3cdiv/\x3e\x3c/div\x3e').appendTo("body"),
                b = a.children(),
                b = b.innerWidth() - b.height(99).innerWidth();
            a.remove();
            return b
        });
        if (f.support.fixedPosition === v) {
            a = f.support;
            d = f('\x3cdiv style\x3d"position:fixed;top:20px;"\x3e\x3c/div\x3e').appendTo("body");
            var e = 20 === d[0].offsetTop || 15 === d[0].offsetTop;
            d.remove();
            a.fixedPosition = e
        }
        f.extend(b.defaults, {
            scrollbarWidth: f.scrollbarWidth(),
            fixed: f.support.fixedPosition,
            parent: f("body")
        });
        a = f(r).width();
        J.addClass("fancybox-lock-test");
        d = f(r).width();
        J.removeClass("fancybox-lock-test");
        f("\x3cstyle type\x3d'text/css'\x3e.fancybox-margin{margin-right:" + (d - a) + "px;}\x3c/style\x3e").appendTo("head")
    })
})(window, document, jQuery);
! function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof module && module.exports ? module.exports = b(require("jquery")) : b(a.jQuery)
}(this, function(a) {
    ! function(a, b) {
        function c(a, b) {
            this.$form = a, this.$input = b, this.reset(), b.on("change paste", this.reset.bind(this))
        }
        var d = function() {
                return !1
            },
            e = {
                numHalted: 0,
                haltValidation: function(b) {
                    this.numHalted++, a.formUtils.haltValidation = !0, b.unbind("submit", d).bind("submit", d).find('*[type\x3d"submit"]').addClass("disabled").attr("disabled",
                        "disabled")
                },
                unHaltValidation: function(b) {
                    this.numHalted--, 0 === this.numHalted && (a.formUtils.haltValidation = !1, b.unbind("submit", d).find('*[type\x3d"submit"]').removeClass("disabled").removeAttr("disabled", "disabled"))
                }
            };
        c.prototype.reset = function() {
            this.haltedFormValidation = !1, this.hasRun = !1, this.isRunning = !1, this.result = b
        }, c.prototype.run = function(a, b) {
            return "keyup" === a ? null : this.isRunning ? (this.haltedFormValidation || "submit" !== a || (e.haltValidation(), this.haltedFormValidation = !0), null) : this.hasRun ?
                this.result : ("submit" === a && (e.haltValidation(this.$form), this.haltedFormValidation = !0), this.isRunning = !0, this.$input.attr("disabled", "disabled").addClass("async-validation"), this.$form.addClass("async-validation"), b(function(a) {
                    this.done(a)
                }.bind(this)), null)
        }, c.prototype.done = function(a) {
            this.result = a, this.hasRun = !0, this.isRunning = !1, this.$input.removeAttr("disabled").removeClass("async-validation"), this.$form.removeClass("async-validation"), this.haltedFormValidation ? (e.unHaltValidation(this.$form),
                this.$form.trigger("submit")) : this.$input.trigger("validation.revalidate")
        }, a.formUtils = a.extend(a.formUtils || {}, {
            asyncValidation: function(a, b, d) {
                var e, f = b.get(0);
                return f.asyncValidators || (f.asyncValidators = {}), f.asyncValidators[a] ? e = f.asyncValidators[a] : (e = new c(d, b), f.asyncValidators[a] = e), e
            }
        })
    }(a),
    function(a, b) {
        function c(b) {
            b && "custom" === b.errorMessagePosition && "function" == typeof b.errorMessageCustom && (a.formUtils.warn("Use of deprecated function errorMessageCustom, use config.submitErrorMessageCallback instead"),
                b.submitErrorMessageCallback = function(a, c) {
                    b.errorMessageCustom(a, b.language.errorTitle, c, b)
                })
        }

        function d(b) {
            if (b.errorMessagePosition && "object" == typeof b.errorMessagePosition) {
                a.formUtils.warn("Deprecated use of config parameter errorMessagePosition, use config.submitErrorMessageCallback instead");
                var c = b.errorMessagePosition;
                b.errorMessagePosition = "top", b.submitErrorMessageCallback = function() {
                    return c
                }
            }
        }

        function e(b) {
            var c = b.find("[data-validation-if-checked]");
            c.length && a.formUtils.warn('Detected use of attribute "data-validation-if-checked" which is deprecated. Use "data-validation-depends-on" provided by module "logic"'),
                c.on("beforeValidation", function() {
                    var c = a(this),
                        d = c.valAttr("if-checked"),
                        e = a('input[name\x3d"' + d + '"]', b),
                        f = e.is(":checked"),
                        g = (a.formUtils.getValue(e) || "").toString(),
                        h = c.valAttr("if-checked-value");
                    (!f || h && h !== g) && c.valAttr("skipped", !0)
                })
        }

        function f(b) {
            var c = {
                se: "sv",
                cz: "cs",
                dk: "da"
            };
            if (b.lang in c) {
                var d = c[b.lang];
                a.formUtils.warn('Deprecated use of lang code "' + b.lang + '" use "' + d + '" instead'), b.lang = d
            }
        }
        a.fn.validateForm = function(b, c) {
            return a.formUtils.warn("Use of deprecated function $.validateForm, use $.isValid instead"),
                this.isValid(b, c, !0)
        }, a(window).on("formValidationPluginInit", function(a, b) {
            f(b), c(b), d(b)
        }).on("validatorsLoaded formValidationSetup", function(b, c) {
            c || (c = a("form")), e(c)
        })
    }(a),
    function(a) {
        var b = {
            resolveErrorMessage: function(a, b, c, d, e) {
                var f = d.validationErrorMsgAttribute + "-" + c.replace("validate_", ""),
                    g = a.attr(f);
                return g || (g = a.attr(d.validationErrorMsgAttribute), g || (g = "function" != typeof b.errorMessageKey ? e[b.errorMessageKey] : e[b.errorMessageKey(d)], g || (g = b.errorMessage))), g
            },
            getParentContainer: function(b) {
                if (b.valAttr("error-msg-container")) return a(b.valAttr("error-msg-container"));
                var c = b.parent();
                if (!c.hasClass("form-group") && !c.closest("form").hasClass("form-horizontal")) {
                    var d = c.closest(".form-group");
                    if (d.length) return d.eq(0)
                }
                return c
            },
            applyInputErrorStyling: function(a, b) {
                a.addClass(b.errorElementClass).removeClass(b.successElementClass), this.getParentContainer(a).addClass(b.inputParentClassOnError).removeClass(b.inputParentClassOnSuccess), "" !== b.borderColorOnError && a.css("border-color", b.borderColorOnError)
            },
            applyInputSuccessStyling: function(a, b) {
                a.addClass("valid"),
                    this.getParentContainer(a).addClass(b.inputParentClassOnSuccess)
            },
            removeInputStylingAndMessage: function(a, c) {
                a.removeClass(c.successElementClass).removeClass(c.errorElementClass).css("border-color", "");
                var d = b.getParentContainer(a);
                if (d.removeClass(c.inputParentClassOnError).removeClass(c.inputParentClassOnSuccess), "function" == typeof c.inlineErrorMessageCallback) {
                    var e = c.inlineErrorMessageCallback(a, !1, c);
                    e && e.html("")
                } else d.find("." + c.errorMessageClass).remove()
            },
            removeAllMessagesAndStyling: function(c,
                d) {
                if ("function" == typeof d.submitErrorMessageCallback) {
                    var e = d.submitErrorMessageCallback(c, !1, d);
                    e && e.html("")
                } else c.find("." + d.errorMessageClass + ".alert").remove();
                c.find("." + d.errorElementClass + ",." + d.successElementClass).each(function() {
                    b.removeInputStylingAndMessage(a(this), d)
                })
            },
            setInlineMessage: function(b, c, d) {
                this.applyInputErrorStyling(b, d);
                var e, f = document.getElementById(b.attr("name") + "_err_msg"),
                    g = !1,
                    h = function(d) {
                        a.formUtils.$win.trigger("validationErrorDisplay", [b, d]), d.html(c)
                    },
                    i =
                    function() {
                        var f = !1;
                        g.find("." + d.errorMessageClass).each(function() {
                            if (this.inputReferer === b[0]) return f = a(this), !1
                        }), f ? c ? h(f) : f.remove() : "" !== c && (e = a('\x3cdiv class\x3d"' + d.errorMessageClass + ' alert"\x3e\x3c/div\x3e'), h(e), e[0].inputReferer = b[0], g.prepend(e))
                    };
                if (f) a.formUtils.warn("Using deprecated element reference " + f.id), g = a(f), i();
                else if ("function" == typeof d.inlineErrorMessageCallback) {
                    if (g = d.inlineErrorMessageCallback(b, c, d), !g) return;
                    i()
                } else {
                    var j = this.getParentContainer(b);
                    e = j.find("." +
                        d.errorMessageClass + ".help-block"), 0 === e.length && (e = a("\x3cspan\x3e\x3c/span\x3e").addClass("help-block").addClass(d.errorMessageClass), e.appendTo(j)), h(e)
                }
            },
            setMessageInTopOfForm: function(b, c, d, e) {
                var f = '\x3cdiv class\x3d"{errorMessageClass} alert alert-danger"\x3e\x3cstrong\x3e{errorTitle}\x3c/strong\x3e\x3cul\x3e{fields}\x3c/ul\x3e\x3c/div\x3e',
                    g = !1;
                if ("function" != typeof d.submitErrorMessageCallback || (g = d.submitErrorMessageCallback(b, c, d))) {
                    var h = {
                        errorTitle: e.errorTitle,
                        fields: "",
                        errorMessageClass: d.errorMessageClass
                    };
                    a.each(c, function(a, b) {
                        h.fields += "\x3cli\x3e" + b + "\x3c/li\x3e"
                    }), a.each(h, function(a, b) {
                        f = f.replace("{" + a + "}", b)
                    }), g ? g.html(f) : b.children().eq(0).before(a(f))
                }
            }
        };
        a.formUtils = a.extend(a.formUtils || {}, {
            dialogs: b
        })
    }(a),
    function(a, b, c) {
        var d = 0;
        a.fn.validateOnBlur = function(b, c) {
                var d = this,
                    e = this.find("*[data-validation]");
                return e.each(function() {
                    var e = a(this);
                    if (e.is("[type\x3dradio]")) {
                        var f = d.find('[type\x3dradio][name\x3d"' + e.attr("name") + '"]');
                        f.bind("blur.validation", function() {
                            e.validateInputOnBlur(b,
                                c, !0, "blur")
                        }), c.validateCheckboxRadioOnClick && f.bind("click.validation", function() {
                            e.validateInputOnBlur(b, c, !0, "click")
                        })
                    }
                }), e.bind("blur.validation", function() {
                    a(this).validateInputOnBlur(b, c, !0, "blur")
                }), c.validateCheckboxRadioOnClick && this.find("input[type\x3dcheckbox][data-validation],input[type\x3dradio][data-validation]").bind("click.validation", function() {
                    a(this).validateInputOnBlur(b, c, !0, "click")
                }), this
            }, a.fn.validateOnEvent = function(b, c) {
                var d = "FORM" === this[0].nodeName ? this.find("*[data-validation-event]") :
                    this;
                return d.each(function() {
                    var d = a(this),
                        e = d.valAttr("event");
                    e && d.unbind(e + ".validation").bind(e + ".validation", function(d) {
                        9 !== (d || {}).keyCode && a(this).validateInputOnBlur(b, c, !0, e)
                    })
                }), this
            }, a.fn.showHelpOnFocus = function(b) {
                return b || (b = "data-validation-help"), this.find("textarea,input").each(function() {
                    var c = a(this),
                        e = "jquery_form_help_" + ++d,
                        f = c.attr(b);
                    c.removeClass("has-help-text").unbind("focus.help").unbind("blur.help"), f && c.addClass("has-help-txt").bind("focus.help", function() {
                        var b = c.parent().find("." +
                            e);
                        0 === b.length && (b = a("\x3cspan /\x3e").addClass(e).addClass("help").addClass("help-block").text(f).hide(), c.after(b)), b.fadeIn()
                    }).bind("blur.help", function() {
                        a(this).parent().find("." + e).fadeOut("slow")
                    })
                }), this
            }, a.fn.validate = function(b, c, d) {
                var e = a.extend({}, a.formUtils.LANG, d || {});
                this.each(function() {
                    var d = a(this),
                        f = d.closest("form").get(0) || {},
                        g = f.validationConfig || {};
                    d.one("validation", function(a, c) {
                        "function" == typeof b && b(c, this, a)
                    }), d.validateInputOnBlur(e, a.extend({}, g, c || {}), !0)
                })
            }, a.fn.willPostponeValidation =
            function() {
                return (this.valAttr("suggestion-nr") || this.valAttr("postpone") || this.hasClass("hasDatepicker")) && !b.postponedValidation
            }, a.fn.validateInputOnBlur = function(c, d, e, f) {
                if (a.formUtils.eventType = f, this.willPostponeValidation()) {
                    var g = this,
                        h = this.valAttr("postpone") || 200;
                    return b.postponedValidation = function() {
                        g.validateInputOnBlur(c, d, e, f), b.postponedValidation = !1
                    }, setTimeout(function() {
                        b.postponedValidation && b.postponedValidation()
                    }, h), this
                }
                c = a.extend({}, a.formUtils.LANG, c || {}), a.formUtils.dialogs.removeInputStylingAndMessage(this,
                    d);
                var i = this,
                    j = i.closest("form"),
                    k = a.formUtils.validateInput(i, c, d, j, f),
                    l = function() {
                        i.validateInputOnBlur(c, d, !1, "blur.revalidated")
                    };
                return "blur" === f && i.unbind("validation.revalidate", l).one("validation.revalidate", l), e && i.removeKeyUpValidation(), k.shouldChangeDisplay && (k.isValid ? a.formUtils.dialogs.applyInputSuccessStyling(i, d) : a.formUtils.dialogs.setInlineMessage(i, k.errorMsg, d)), !k.isValid && e && i.validateOnKeyUp(c, d), this
            }, a.fn.validateOnKeyUp = function(b, c) {
                return this.each(function() {
                    var d =
                        a(this);
                    d.valAttr("has-keyup-event") || d.valAttr("has-keyup-event", "true").bind("keyup.validation", function(a) {
                        9 !== a.keyCode && d.validateInputOnBlur(b, c, !1, "keyup")
                    })
                }), this
            }, a.fn.removeKeyUpValidation = function() {
                return this.each(function() {
                    a(this).valAttr("has-keyup-event", !1).unbind("keyup.validation")
                }), this
            }, a.fn.valAttr = function(a, b) {
                return b === c ? this.attr("data-validation-" + a) : b === !1 || null === b ? this.removeAttr("data-validation-" + a) : (a = a.length > 0 ? "-" + a : "", this.attr("data-validation" + a, b))
            }, a.fn.isValid =
            function(b, c, d) {
                if (a.formUtils.isLoadingModules) {
                    var e = this;
                    return setTimeout(function() {
                        e.isValid(b, c, d)
                    }, 200), null
                }
                c = a.extend({}, a.formUtils.defaultConfig(), c || {}), b = a.extend({}, a.formUtils.LANG, b || {}), d = d !== !1, a.formUtils.errorDisplayPreventedWhenHalted && (delete a.formUtils.errorDisplayPreventedWhenHalted, d = !1);
                var f = function(b, e) {
                        a.inArray(b, h) < 0 && h.push(b), i.push(e), e.valAttr("current-error", b), d && a.formUtils.dialogs.applyInputErrorStyling(e, c)
                    },
                    g = [],
                    h = [],
                    i = [],
                    j = this,
                    k = function(b, d) {
                        return "submit" ===
                            d || "button" === d || "reset" === d || a.inArray(b, c.ignore || []) > -1
                    };
                if (d && a.formUtils.dialogs.removeAllMessagesAndStyling(j, c), j.find("input,textarea,select").filter(':not([type\x3d"submit"],[type\x3d"button"])').each(function() {
                        var d = a(this),
                            e = d.attr("type"),
                            h = "radio" === e || "checkbox" === e,
                            i = d.attr("name");
                        if (!k(i, e) && (!h || a.inArray(i, g) < 0)) {
                            h && g.push(i);
                            var l = a.formUtils.validateInput(d, b, c, j, "submit");
                            l.isValid ? l.isValid && l.shouldChangeDisplay && (d.valAttr("current-error", !1), a.formUtils.dialogs.applyInputSuccessStyling(d,
                                c)) : f(l.errorMsg, d)
                        }
                    }), "function" == typeof c.onValidate) {
                    var l = c.onValidate(j);
                    a.isArray(l) ? a.each(l, function(a, b) {
                        f(b.message, b.element)
                    }) : l && l.element && l.message && f(l.message, l.element)
                }
                return a.formUtils.isValidatingEntireForm = !1, i.length > 0 && d && ("top" === c.errorMessagePosition ? a.formUtils.dialogs.setMessageInTopOfForm(j, h, c, b) : a.each(i, function(b, d) {
                        a.formUtils.dialogs.setInlineMessage(d, d.valAttr("current-error"), c)
                    }), c.scrollToTopOnError && a.formUtils.$win.scrollTop(j.offset().top - 20)), !d && a.formUtils.haltValidation &&
                    (a.formUtils.errorDisplayPreventedWhenHalted = !0), 0 === i.length && !a.formUtils.haltValidation
            }, a.fn.restrictLength = function(b) {
                return new a.formUtils.lengthRestriction(this, b), this
            }, a.fn.addSuggestions = function(b) {
                var c = !1;
                return this.find("input").each(function() {
                    var d = a(this);
                    c = a.split(d.attr("data-suggestions")), c.length > 0 && !d.hasClass("has-suggestions") && (a.formUtils.suggest(d, c, b), d.addClass("has-suggestions"))
                }), this
            }
    }(a, window),
    function(a) {
        a.formUtils = a.extend(a.formUtils || {}, {
            isLoadingModules: !1,
            loadedModules: {},
            loadModules: function(b, c, d) {
                if (a.formUtils.isLoadingModules) return void setTimeout(function() {
                    a.formUtils.loadModules(b, c, d)
                }, 10);
                var e = !1,
                    f = function(b, c) {
                        var f = a.split(b),
                            g = f.length,
                            h = function() {
                                g--, 0 === g && (a.formUtils.isLoadingModules = !1, d && e && "function" == typeof d && d())
                            };
                        g > 0 && (a.formUtils.isLoadingModules = !0);
                        var i = "?_\x3d" + (new Date).getTime(),
                            j = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0];
                        a.each(f, function(b, d) {
                            if (d = a.trim(d), 0 === d.length) h();
                            else {
                                var f = c + d + (".js" === d.slice(-3) ? "" : ".js"),
                                    g = document.createElement("SCRIPT");
                                f in a.formUtils.loadedModules ? h() : (a.formUtils.loadedModules[f] = 1, e = !0, "function" == typeof define && define.amd ? require([f + (".dev.js" === f.slice(-7) ? i : "")], h) : (g.type = "text/javascript", g.onload = h, g.src = f + (".dev.js" === f.slice(-7) ? i : ""), g.onerror = function() {
                                    a.formUtils.warn("Unable to load form validation module " + f)
                                }, g.onreadystatechange = function() {
                                    "complete" !== this.readyState && "loaded" !== this.readyState || (h(), this.onload =
                                        null, this.onreadystatechange = null)
                                }, j.appendChild(g)))
                            }
                        })
                    };
                if (c) f(b, c);
                else {
                    var g = function() {
                        var c = !1;
                        return a('script[src*\x3d"form-validator"]').each(function() {
                            var a = this.src.split("form-validator")[1].split("node_modules").length > 1;
                            if (!a) return c = this.src.substr(0, this.src.lastIndexOf("/")) + "/", "/" === c && (c = ""), !1
                        }), c !== !1 && (f(b, c), !0)
                    };
                    g() || a(g)
                }
            }
        })
    }(a),
    function(a) {
        a.split = function(b, c, d) {
            d = void 0 === d || d === !0;
            var e = "[,|" + (d ? "\\s" : "") + "-]\\s*",
                f = new RegExp(e, "g");
            if ("function" != typeof c) {
                if (!b) return [];
                var g = [];
                return a.each(b.split(c ? c : f), function(b, c) {
                    c = a.trim(c), c.length && g.push(c)
                }), g
            }
            b && a.each(b.split(f), function(b, d) {
                if (d = a.trim(d), d.length) return c(d, b)
            })
        }, a.validate = function(b) {
            var c = a.extend(a.formUtils.defaultConfig(), {
                form: "form",
                validateOnEvent: !1,
                validateOnBlur: !0,
                validateCheckboxRadioOnClick: !0,
                showHelpOnFocus: !0,
                addSuggestions: !0,
                modules: "",
                onModulesLoaded: null,
                language: !1,
                onSuccess: !1,
                onError: !1,
                onElementValidate: !1
            });
            if (b = a.extend(c, b || {}), a(window).trigger("formValidationPluginInit", [b]), b.lang && "en" !== b.lang) {
                var d = "lang/" + b.lang + ".js";
                b.modules += b.modules.length ? "," + d : d
            }
            a(b.form).each(function(c, d) {
                d.validationConfig = b;
                var e = a(d);
                e.trigger("formValidationSetup", [e, b]), e.find(".has-help-txt").unbind("focus.validation").unbind("blur.validation"), e.removeClass("has-validation-callback").unbind("submit.validation").unbind("reset.validation").find("input[data-validation],textarea[data-validation]").unbind("blur.validation"), e.bind("submit.validation", function(c) {
                    var d = a(this),
                        e =
                        function() {
                            return c.stopImmediatePropagation(), !1
                        };
                    if (a.formUtils.haltValidation) return e();
                    if (a.formUtils.isLoadingModules) return setTimeout(function() {
                        d.trigger("submit.validation")
                    }, 200), e();
                    var f = d.isValid(b.language, b);
                    if (a.formUtils.haltValidation) return e();
                    if (!f || "function" != typeof b.onSuccess) return f || "function" != typeof b.onError ? !!f || e() : (b.onError(d), e());
                    var g = b.onSuccess(d);
                    return g === !1 ? e() : void 0
                }).bind("reset.validation", function() {
                    a.formUtils.dialogs.removeAllMessagesAndStyling(e,
                        b)
                }).addClass("has-validation-callback"), b.showHelpOnFocus && e.showHelpOnFocus(), b.addSuggestions && e.addSuggestions(), b.validateOnBlur && (e.validateOnBlur(b.language, b), e.bind("html5ValidationAttrsFound", function() {
                    e.validateOnBlur(b.language, b)
                })), b.validateOnEvent && e.validateOnEvent(b.language, b)
            }), "" !== b.modules && a.formUtils.loadModules(b.modules, !1, function() {
                "function" == typeof b.onModulesLoaded && b.onModulesLoaded();
                var c = "string" == typeof b.form ? a(b.form) : b.form;
                a.formUtils.$win.trigger("validatorsLoaded", [c, b])
            })
        }
    }(a),
    function(a, b) {
        var c = a(b);
        a.formUtils = a.extend(a.formUtils || {}, {
            $win: c,
            defaultConfig: function() {
                return {
                    ignore: [],
                    errorElementClass: "error",
                    successElementClass: "valid",
                    borderColorOnError: "#b94a48",
                    errorMessageClass: "form-error",
                    validationRuleAttribute: "data-validation",
                    validationErrorMsgAttribute: "data-validation-error-msg",
                    errorMessagePosition: "inline",
                    errorMessageTemplate: {
                        container: '\x3cdiv class\x3d"{errorMessageClass} alert alert-danger"\x3e{messages}\x3c/div\x3e',
                        messages: "\x3cstrong\x3e{errorTitle}\x3c/strong\x3e\x3cul\x3e{fields}\x3c/ul\x3e",
                        field: "\x3cli\x3e{msg}\x3c/li\x3e"
                    },
                    scrollToTopOnError: !0,
                    dateFormat: "yyyy-mm-dd",
                    addValidClassOnAll: !1,
                    decimalSeparator: ".",
                    inputParentClassOnError: "has-error",
                    inputParentClassOnSuccess: "has-success",
                    validateHiddenInputs: !1,
                    inlineErrorMessageCallback: !1,
                    submitErrorMessageCallback: !1
                }
            },
            validators: {},
            _events: {
                load: [],
                valid: [],
                invalid: []
            },
            haltValidation: !1,
            addValidator: function(a) {
                var b = 0 === a.name.indexOf("validate_") ? a.name : "validate_" + a.name;
                void 0 === a.validateOnKeyUp && (a.validateOnKeyUp = !0), this.validators[b] =
                    a
            },
            warn: function(a) {
                "console" in b ? "function" == typeof b.console.warn ? b.console.warn(a) : "function" == typeof b.console.log && b.console.log(a) : alert(a)
            },
            getValue: function(a, b) {
                var c = b ? b.find(a) : a;
                if (c.length > 0) {
                    var d = c.eq(0).attr("type");
                    return "radio" === d || "checkbox" === d ? c.filter(":checked").val() || "" : c.val() || ""
                }
                return !1
            },
            validateInput: function(b, c, d, e, f) {
                d = d || a.formUtils.defaultConfig(), c = c || a.formUtils.LANG;
                var g = this.getValue(b);
                b.valAttr("skipped", !1).one("beforeValidation", function() {
                    (b.attr("disabled") ||
                        !b.is(":visible") && !d.validateHiddenInputs) && b.valAttr("skipped", 1)
                }).trigger("beforeValidation", [g, c, d]);
                var h = "true" === b.valAttr("optional"),
                    i = !g && h,
                    j = b.attr(d.validationRuleAttribute),
                    k = !0,
                    l = "",
                    m = {
                        isValid: !0,
                        shouldChangeDisplay: !0,
                        errorMsg: ""
                    };
                if (!j || i || b.valAttr("skipped")) return m.shouldChangeDisplay = d.addValidClassOnAll, m;
                var n = b.valAttr("ignore");
                return n && a.each(n.split(""), function(a, b) {
                    g = g.replace(new RegExp("\\" + b, "g"), "")
                }), a.split(j, function(h) {
                    0 !== h.indexOf("validate_") && (h = "validate_" +
                        h);
                    var i = a.formUtils.validators[h];
                    if (!i) throw new Error('Using undefined validator "' + h + '". Maybe you have forgotten to load the module that "' + h + '" belongs to?');
                    if ("validate_checkbox_group" === h && (b = e.find('[name\x3d"' + b.attr("name") + '"]:eq(0)')), ("keyup" !== f || i.validateOnKeyUp) && (k = i.validatorFunction(g, b, d, c, e, f)), !k) return d.validateOnBlur && b.validateOnKeyUp(c, d), l = a.formUtils.dialogs.resolveErrorMessage(b, i, h, d, c), !1
                }), k === !1 ? (b.trigger("validation", !1), m.errorMsg = l, m.isValid = !1, m.shouldChangeDisplay = !0) : null === k ? m.shouldChangeDisplay = !1 : (b.trigger("validation", !0), m.shouldChangeDisplay = !0), "function" == typeof d.onElementValidate && null !== l && d.onElementValidate(m.isValid, b, e, l), b.trigger("afterValidation", [m, f]), m
            },
            parseDate: function(b, c, d) {
                var e, f, g, h, i = c.replace(/[a-zA-Z]/gi, "").substring(0, 1),
                    j = "^",
                    k = c.split(i || null);
                if (a.each(k, function(a, b) {
                        j += (a > 0 ? "\\" + i : "") + "(\\d{" + b.length + "})"
                    }), j += "$", d) {
                    var l = [];
                    a.each(b.split(i), function(a, b) {
                        1 === b.length && (b = "0" + b), l.push(b)
                    }), b = l.join(i)
                }
                if (e = b.match(new RegExp(j)),
                    null === e) return !1;
                var m = function(b, c, d) {
                    for (var e = 0; e < c.length; e++)
                        if (c[e].substring(0, 1) === b) return a.formUtils.parseDateInt(d[e + 1]);
                    return -1
                };
                return g = m("m", k, e), f = m("d", k, e), h = m("y", k, e), !(2 === g && f > 28 && (h % 4 !== 0 || h % 100 === 0 && h % 400 !== 0) || 2 === g && f > 29 && (h % 4 === 0 || h % 100 !== 0 && h % 400 === 0) || g > 12 || 0 === g) && (!(this.isShortMonth(g) && f > 30 || !this.isShortMonth(g) && f > 31 || 0 === f) && [h, g, f])
            },
            parseDateInt: function(a) {
                return 0 === a.indexOf("0") && (a = a.replace("0", "")), parseInt(a, 10)
            },
            isShortMonth: function(a) {
                return a % 2 ===
                    0 && a < 7 || a % 2 !== 0 && a > 7
            },
            lengthRestriction: function(b, c) {
                var d = parseInt(c.text(), 10),
                    e = 0,
                    f = function() {
                        var a = b.val().length;
                        if (a > d) {
                            var f = b.scrollTop();
                            b.val(b.val().substring(0, d)), b.scrollTop(f)
                        }
                        e = d - a, e < 0 && (e = 0), c.text(e)
                    };
                a(b).bind("keydown keyup keypress focus blur", f).bind("cut paste", function() {
                    setTimeout(f, 100)
                }), a(document).bind("ready", f)
            },
            numericRangeCheck: function(b, c) {
                var d = a.split(c),
                    e = parseInt(c.substr(3), 10);
                return 1 === d.length && c.indexOf("min") === -1 && c.indexOf("max") === -1 && (d = [c, c]), 2 ===
                    d.length && (b < parseInt(d[0], 10) || b > parseInt(d[1], 10)) ? ["out", d[0], d[1]] : 0 === c.indexOf("min") && b < e ? ["min", e] : 0 === c.indexOf("max") && b > e ? ["max", e] : ["ok"]
            },
            _numSuggestionElements: 0,
            _selectedSuggestion: null,
            _previousTypedVal: null,
            suggest: function(b, d, e) {
                var f = {
                        css: {
                            maxHeight: "150px",
                            background: "#FFF",
                            lineHeight: "150%",
                            textDecoration: "underline",
                            overflowX: "hidden",
                            overflowY: "auto",
                            border: "#CCC solid 1px",
                            borderTop: "none",
                            cursor: "pointer"
                        },
                        activeSuggestionCSS: {
                            background: "#E9E9E9"
                        }
                    },
                    g = function(a, b) {
                        var c =
                            b.offset();
                        a.css({
                            width: b.outerWidth(),
                            left: c.left + "px",
                            top: c.top + b.outerHeight() + "px"
                        })
                    };
                e && a.extend(f, e), f.css.position = "absolute", f.css["z-index"] = 9999, b.attr("autocomplete", "off"), 0 === this._numSuggestionElements && c.bind("resize", function() {
                    a(".jquery-form-suggestions").each(function() {
                        var b = a(this),
                            c = b.attr("data-suggest-container");
                        g(b, a(".suggestions-" + c).eq(0))
                    })
                }), this._numSuggestionElements++;
                var h = function(b) {
                    var c = b.valAttr("suggestion-nr");
                    a.formUtils._selectedSuggestion = null, a.formUtils._previousTypedVal =
                        null, a(".jquery-form-suggestion-" + c).fadeOut("fast")
                };
                return b.data("suggestions", d).valAttr("suggestion-nr", this._numSuggestionElements).unbind("focus.suggest").bind("focus.suggest", function() {
                    a(this).trigger("keyup"), a.formUtils._selectedSuggestion = null
                }).unbind("keyup.suggest").bind("keyup.suggest", function() {
                    var c = a(this),
                        d = [],
                        e = a.trim(c.val()).toLocaleLowerCase();
                    if (e !== a.formUtils._previousTypedVal) {
                        a.formUtils._previousTypedVal = e;
                        var i = !1,
                            j = c.valAttr("suggestion-nr"),
                            k = a(".jquery-form-suggestion-" +
                                j);
                        if (k.scrollTop(0), "" !== e) {
                            var l = e.length > 2;
                            a.each(c.data("suggestions"), function(a, b) {
                                var c = b.toLocaleLowerCase();
                                return c === e ? (d.push("\x3cstrong\x3e" + b + "\x3c/strong\x3e"), i = !0, !1) : void((0 === c.indexOf(e) || l && c.indexOf(e) > -1) && d.push(b.replace(new RegExp(e, "gi"), "\x3cstrong\x3e$\x26\x3c/strong\x3e")))
                            })
                        }
                        i || 0 === d.length && k.length > 0 ? k.hide() : d.length > 0 && 0 === k.length ? (k = a("\x3cdiv\x3e\x3c/div\x3e").css(f.css).appendTo("body"), b.addClass("suggestions-" + j), k.attr("data-suggest-container", j).addClass("jquery-form-suggestions").addClass("jquery-form-suggestion-" +
                            j)) : d.length > 0 && !k.is(":visible") && k.show(), d.length > 0 && e.length !== d[0].length && (g(k, c), k.html(""), a.each(d, function(b, d) {
                            a("\x3cdiv\x3e\x3c/div\x3e").append(d).css({
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                padding: "5px"
                            }).addClass("form-suggest-element").appendTo(k).click(function() {
                                c.focus(), c.val(a(this).text()), c.trigger("change"), h(c)
                            })
                        }))
                    }
                }).unbind("keydown.validation").bind("keydown.validation", function(b) {
                    var c, d, e = b.keyCode ? b.keyCode : b.which,
                        g = a(this);
                    if (13 === e && null !==
                        a.formUtils._selectedSuggestion) {
                        if (c = g.valAttr("suggestion-nr"), d = a(".jquery-form-suggestion-" + c), d.length > 0) {
                            var i = d.find("div").eq(a.formUtils._selectedSuggestion).text();
                            g.val(i), g.trigger("change"), h(g), b.preventDefault()
                        }
                    } else {
                        c = g.valAttr("suggestion-nr"), d = a(".jquery-form-suggestion-" + c);
                        var j = d.children();
                        if (j.length > 0 && a.inArray(e, [38, 40]) > -1) {
                            38 === e ? (null === a.formUtils._selectedSuggestion ? a.formUtils._selectedSuggestion = j.length - 1 : a.formUtils._selectedSuggestion--, a.formUtils._selectedSuggestion <
                                0 && (a.formUtils._selectedSuggestion = j.length - 1)) : 40 === e && (null === a.formUtils._selectedSuggestion ? a.formUtils._selectedSuggestion = 0 : a.formUtils._selectedSuggestion++, a.formUtils._selectedSuggestion > j.length - 1 && (a.formUtils._selectedSuggestion = 0));
                            var k = d.innerHeight(),
                                l = d.scrollTop(),
                                m = d.children().eq(0).outerHeight(),
                                n = m * a.formUtils._selectedSuggestion;
                            return (n < l || n > l + k) && d.scrollTop(n), j.removeClass("active-suggestion").css("background", "none").eq(a.formUtils._selectedSuggestion).addClass("active-suggestion").css(f.activeSuggestionCSS),
                                b.preventDefault(), !1
                        }
                    }
                }).unbind("blur.suggest").bind("blur.suggest", function() {
                    h(a(this))
                }), b
            },
            LANG: {
                errorTitle: "Form submission failed!",
                requiredField: "This is a required field",
                requiredFields: "You have not answered all required fields",
                badTime: "You have not given a correct time",
                badEmail: "You have not given a correct e-mail address",
                badTelephone: "You have not given a correct phone number",
                badSecurityAnswer: "You have not given a correct answer to the security question",
                badDate: "You have not given a correct date",
                lengthBadStart: "The input value must be between ",
                lengthBadEnd: " characters",
                lengthTooLongStart: "The input value is longer than ",
                lengthTooShortStart: "The input value is shorter than ",
                notConfirmed: "Input values could not be confirmed",
                badDomain: "Incorrect domain value",
                badUrl: "The input value is not a correct URL",
                badCustomVal: "The input value is incorrect",
                andSpaces: " and spaces ",
                badInt: "The input value was not a correct number",
                badSecurityNumber: "Your social security number was incorrect",
                badUKVatAnswer: "Incorrect UK VAT Number",
                badUKNin: "Incorrect UK NIN",
                badUKUtr: "Incorrect UK UTR Number",
                badStrength: "The password isn't strong enough",
                badNumberOfSelectedOptionsStart: "You have to choose at least ",
                badNumberOfSelectedOptionsEnd: " answers",
                badAlphaNumeric: "The input value can only contain alphanumeric characters ",
                badAlphaNumericExtra: " and ",
                wrongFileSize: "The file you are trying to upload is too large (max %s)",
                wrongFileType: "Only files of type %s is allowed",
                groupCheckedRangeStart: "Please choose between ",
                groupCheckedTooFewStart: "Please choose at least ",
                groupCheckedTooManyStart: "Please choose a maximum of ",
                groupCheckedEnd: " item(s)",
                badCreditCard: "The credit card number is not correct",
                badCVV: "The CVV number was not correct",
                wrongFileDim: "Incorrect image dimensions,",
                imageTooTall: "the image can not be taller than",
                imageTooWide: "the image can not be wider than",
                imageTooSmall: "the image was too small",
                min: "min",
                max: "max",
                imageRatioNotAccepted: "Image ratio is not be accepted",
                badBrazilTelephoneAnswer: "The phone number entered is invalid",
                badBrazilCEPAnswer: "The CEP entered is invalid",
                badBrazilCPFAnswer: "The CPF entered is invalid",
                badPlPesel: "The PESEL entered is invalid",
                badPlNip: "The NIP entered is invalid",
                badPlRegon: "The REGON entered is invalid",
                badreCaptcha: "Please confirm that you are not a bot",
                passwordComplexityStart: "Password must contain at least ",
                passwordComplexitySeparator: ", ",
                passwordComplexityUppercaseInfo: " uppercase letter(s)",
                passwordComplexityLowercaseInfo: " lowercase letter(s)",
                passwordComplexitySpecialCharsInfo: " special character(s)",
                passwordComplexityNumericCharsInfo: " numeric character(s)",
                passwordComplexityEnd: "."
            }
        })
    }(a, window),
    function(a) {
        a.formUtils.addValidator({
                name: "email",
                validatorFunction: function(b) {
                    var c = b.toLowerCase().split("@"),
                        d = c[0],
                        e = c[1];
                    if (d && e) {
                        if (0 === d.indexOf('"')) {
                            var f = d.length;
                            if (d = d.replace(/"/g, ""), d.length !== f - 2) return !1
                        }
                        return a.formUtils.validators.validate_domain.validatorFunction(c[1]) && 0 !== d.indexOf(".") && "." !== d.substring(d.length - 1, d.length) && d.indexOf("..") === -1 && !/[^\w\+\.\-#\-_~!\$&'\(\)\*\+,;=:]/.test(d)
                    }
                    return !1
                },
                errorMessage: "",
                errorMessageKey: "badEmail"
            }),
            a.formUtils.addValidator({
                name: "domain",
                validatorFunction: function(a) {
                    return a.length > 0 && a.length <= 253 && !/[^a-zA-Z0-9]/.test(a.slice(-2)) && !/[^a-zA-Z0-9]/.test(a.substr(0, 1)) && !/[^a-zA-Z0-9\.\-]/.test(a) && 1 === a.split("..").length && a.split(".").length > 1
                },
                errorMessage: "",
                errorMessageKey: "badDomain"
            }), a.formUtils.addValidator({
                name: "required",
                validatorFunction: function(b, c, d, e, f) {
                    switch (c.attr("type")) {
                        case "checkbox":
                            return c.is(":checked");
                        case "radio":
                            return f.find('input[name\x3d"' + c.attr("name") +
                                '"]').filter(":checked").length > 0;
                        default:
                            return "" !== a.trim(b)
                    }
                },
                errorMessage: "",
                errorMessageKey: function(a) {
                    return "top" === a.errorMessagePosition || "function" == typeof a.errorMessagePosition ? "requiredFields" : "requiredField"
                }
            }), a.formUtils.addValidator({
                name: "length",
                validatorFunction: function(b, c, d, e) {
                    var f = c.valAttr("length"),
                        g = c.attr("type");
                    if (void 0 === f) return alert('Please add attribute "data-validation-length" to ' + c[0].nodeName + " named " + c.attr("name")), !0;
                    var h, i = "file" === g && void 0 !== c.get(0).files ?
                        c.get(0).files.length : b.length,
                        j = a.formUtils.numericRangeCheck(i, f);
                    switch (j[0]) {
                        case "out":
                            this.errorMessage = e.lengthBadStart + f + e.lengthBadEnd, h = !1;
                            break;
                        case "min":
                            this.errorMessage = e.lengthTooShortStart + j[1] + e.lengthBadEnd, h = !1;
                            break;
                        case "max":
                            this.errorMessage = e.lengthTooLongStart + j[1] + e.lengthBadEnd, h = !1;
                            break;
                        default:
                            h = !0
                    }
                    return h
                },
                errorMessage: "",
                errorMessageKey: ""
            }), a.formUtils.addValidator({
                name: "url",
                validatorFunction: function(b) {
                    var c = /^(https?|ftp):\/\/((((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|\[|\]|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
                    if (c.test(b)) {
                        var d = b.split("://")[1],
                            e = d.indexOf("/");
                        return e > -1 && (d = d.substr(0, e)), a.formUtils.validators.validate_domain.validatorFunction(d)
                    }
                    return !1
                },
                errorMessage: "",
                errorMessageKey: "badUrl"
            }), a.formUtils.addValidator({
                name: "number",
                validatorFunction: function(a, b, c) {
                    if ("" !== a) {
                        var d, e, f = b.valAttr("allowing") || "",
                            g = b.valAttr("decimal-separator") || c.decimalSeparator,
                            h = !1,
                            i = b.valAttr("step") || "",
                            j = !1,
                            k = b.attr("data-sanitize") || "",
                            l = k.match(/(^|[\s])numberFormat([\s]|$)/i);
                        if (l) {
                            if (!window.numeral) throw new ReferenceError("The data-sanitize value numberFormat cannot be used without the numeral library. Please see Data Validation in http://www.formvalidator.net for more information.");
                            a.length && (a = String(numeral().unformat(a)))
                        }
                        if (f.indexOf("number") === -1 && (f += ",number"), f.indexOf("negative") === -1 && 0 === a.indexOf("-")) return !1;
                        if (f.indexOf("range") > -1 && (d = parseFloat(f.substring(f.indexOf("[") + 1, f.indexOf(";"))), e = parseFloat(f.substring(f.indexOf(";") + 1, f.indexOf("]"))), h = !0), "" !== i && (j = !0), "," === g) {
                            if (a.indexOf(".") > -1) return !1;
                            a = a.replace(",", ".")
                        }
                        if ("" === a.replace(/[0-9-]/g, "") && (!h || a >= d && a <= e) && (!j || a % i === 0)) return !0;
                        if (f.indexOf("float") > -1 && null !== a.match(new RegExp("^([0-9-]+)\\.([0-9]+)$")) &&
                            (!h || a >= d && a <= e) && (!j || a % i === 0)) return !0
                    }
                    return !1
                },
                errorMessage: "",
                errorMessageKey: "badInt"
            }), a.formUtils.addValidator({
                name: "alphanumeric",
                validatorFunction: function(b, c, d, e) {
                    var f = "^([a-zA-Z0-9",
                        g = "]+)$",
                        h = c.valAttr("allowing"),
                        i = "";
                    if (h) {
                        i = f + h + g;
                        var j = h.replace(/\\/g, "");
                        j.indexOf(" ") > -1 && (j = j.replace(" ", ""), j += e.andSpaces || a.formUtils.LANG.andSpaces), this.errorMessage = e.badAlphaNumeric + e.badAlphaNumericExtra + j
                    } else i = f + g, this.errorMessage = e.badAlphaNumeric;
                    return (new RegExp(i)).test(b)
                },
                errorMessage: "",
                errorMessageKey: ""
            }), a.formUtils.addValidator({
                name: "custom",
                validatorFunction: function(a, b) {
                    var c = new RegExp(b.valAttr("regexp"));
                    return c.test(a)
                },
                errorMessage: "",
                errorMessageKey: "badCustomVal"
            }), a.formUtils.addValidator({
                name: "date",
                validatorFunction: function(b, c, d) {
                    var e = c.valAttr("format") || d.dateFormat || "yyyy-mm-dd",
                        f = "false" === c.valAttr("require-leading-zero");
                    return a.formUtils.parseDate(b, e, f) !== !1
                },
                errorMessage: "",
                errorMessageKey: "badDate"
            }), a.formUtils.addValidator({
                name: "checkbox_group",
                validatorFunction: function(b, c, d, e, f) {
                    var g = !0,
                        h = c.attr("name"),
                        i = a('input[type\x3dcheckbox][name^\x3d"' + h + '"]', f),
                        j = i.filter(":checked").length,
                        k = c.valAttr("qty");
                    if (void 0 === k) {
                        var l = c.get(0).nodeName;
                        alert('Attribute "data-validation-qty" is missing from ' + l + " named " + c.attr("name"))
                    }
                    var m = a.formUtils.numericRangeCheck(j, k);
                    switch (m[0]) {
                        case "out":
                            this.errorMessage = e.groupCheckedRangeStart + k + e.groupCheckedEnd, g = !1;
                            break;
                        case "min":
                            this.errorMessage = e.groupCheckedTooFewStart + m[1] + e.groupCheckedEnd,
                                g = !1;
                            break;
                        case "max":
                            this.errorMessage = e.groupCheckedTooManyStart + m[1] + e.groupCheckedEnd, g = !1;
                            break;
                        default:
                            g = !0
                    }
                    if (!g) {
                        var n = function() {
                            i.unbind("click", n), i.filter("*[data-validation]").validateInputOnBlur(e, d, !1, "blur")
                        };
                        i.bind("click", n)
                    }
                    return g
                }
            })
    }(a)
});
(function() {
    var undefined;
    var VERSION = "4.17.15";
    var LARGE_ARRAY_SIZE = 200;
    var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q\x3dponyfill.",
        FUNC_ERROR_TEXT = "Expected a function";
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var MAX_MEMOIZE_SIZE = 500;
    var PLACEHOLDER = "__lodash_placeholder__";
    var CLONE_DEEP_FLAG = 1,
        CLONE_FLAT_FLAG = 2,
        CLONE_SYMBOLS_FLAG = 4;
    var COMPARE_PARTIAL_FLAG = 1,
        COMPARE_UNORDERED_FLAG = 2;
    var WRAP_BIND_FLAG = 1,
        WRAP_BIND_KEY_FLAG = 2,
        WRAP_CURRY_BOUND_FLAG = 4,
        WRAP_CURRY_FLAG =
        8,
        WRAP_CURRY_RIGHT_FLAG = 16,
        WRAP_PARTIAL_FLAG = 32,
        WRAP_PARTIAL_RIGHT_FLAG = 64,
        WRAP_ARY_FLAG = 128,
        WRAP_REARG_FLAG = 256,
        WRAP_FLIP_FLAG = 512;
    var DEFAULT_TRUNC_LENGTH = 30,
        DEFAULT_TRUNC_OMISSION = "...";
    var HOT_COUNT = 800,
        HOT_SPAN = 16;
    var LAZY_FILTER_FLAG = 1,
        LAZY_MAP_FLAG = 2,
        LAZY_WHILE_FLAG = 3;
    var INFINITY = 1 / 0,
        MAX_SAFE_INTEGER = 9007199254740991,
        MAX_INTEGER = 1.7976931348623157E308,
        NAN = 0 / 0;
    var MAX_ARRAY_LENGTH = 4294967295,
        MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
        HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
    var wrapFlags = [
        ["ary",
            WRAP_ARY_FLAG
        ],
        ["bind", WRAP_BIND_FLAG],
        ["bindKey", WRAP_BIND_KEY_FLAG],
        ["curry", WRAP_CURRY_FLAG],
        ["curryRight", WRAP_CURRY_RIGHT_FLAG],
        ["flip", WRAP_FLIP_FLAG],
        ["partial", WRAP_PARTIAL_FLAG],
        ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
        ["rearg", WRAP_REARG_FLAG]
    ];
    var argsTag = "[object Arguments]",
        arrayTag = "[object Array]",
        asyncTag = "[object AsyncFunction]",
        boolTag = "[object Boolean]",
        dateTag = "[object Date]",
        domExcTag = "[object DOMException]",
        errorTag = "[object Error]",
        funcTag = "[object Function]",
        genTag = "[object GeneratorFunction]",
        mapTag = "[object Map]",
        numberTag = "[object Number]",
        nullTag = "[object Null]",
        objectTag = "[object Object]",
        promiseTag = "[object Promise]",
        proxyTag = "[object Proxy]",
        regexpTag = "[object RegExp]",
        setTag = "[object Set]",
        stringTag = "[object String]",
        symbolTag = "[object Symbol]",
        undefinedTag = "[object Undefined]",
        weakMapTag = "[object WeakMap]",
        weakSetTag = "[object WeakSet]";
    var arrayBufferTag = "[object ArrayBuffer]",
        dataViewTag = "[object DataView]",
        float32Tag = "[object Float32Array]",
        float64Tag = "[object Float64Array]",
        int8Tag = "[object Int8Array]",
        int16Tag = "[object Int16Array]",
        int32Tag = "[object Int32Array]",
        uint8Tag = "[object Uint8Array]",
        uint8ClampedTag = "[object Uint8ClampedArray]",
        uint16Tag = "[object Uint16Array]",
        uint32Tag = "[object Uint32Array]";
    var reEmptyStringLeading = /\b__p \+= '';/g,
        reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
        reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
    var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
        reUnescapedHtml = /[&<>"']/g,
        reHasEscapedHtml = RegExp(reEscapedHtml.source),
        reHasUnescapedHtml =
        RegExp(reUnescapedHtml.source);
    var reEscape = /<%-([\s\S]+?)%>/g,
        reEvaluate = /<%([\s\S]+?)%>/g,
        reInterpolate = /<%=([\s\S]+?)%>/g;
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        reIsPlainProp = /^\w*$/,
        rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
        reHasRegExpChar = RegExp(reRegExpChar.source);
    var reTrim = /^\s+|\s+$/g,
        reTrimStart = /^\s+/,
        reTrimEnd = /\s+$/;
    var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
        reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
        reSplitDetails = /,? & /;
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    var reEscapeChar = /\\(\\)?/g;
    var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    var reFlags = /\w*$/;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsOctal = /^0o[0-7]+$/i;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var reNoMatch = /($^)/;
    var reUnescapedString =
        /['\n\r\u2028\u2029\\]/g;
    var rsAstralRange = "\\ud800-\\udfff",
        rsComboMarksRange = "\\u0300-\\u036f",
        reComboHalfMarksRange = "\\ufe20-\\ufe2f",
        rsComboSymbolsRange = "\\u20d0-\\u20ff",
        rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
        rsDingbatRange = "\\u2700-\\u27bf",
        rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff",
        rsMathOpRange = "\\xac\\xb1\\xd7\\xf7",
        rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
        rsPunctuationRange = "\\u2000-\\u206f",
        rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde",
        rsVarRange = "\\ufe0e\\ufe0f",
        rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    var rsApos = "['\u2019]",
        rsAstral = "[" + rsAstralRange + "]",
        rsBreak = "[" + rsBreakRange + "]",
        rsCombo = "[" + rsComboRange + "]",
        rsDigits = "\\d+",
        rsDingbat = "[" + rsDingbatRange + "]",
        rsLower = "[" + rsLowerRange + "]",
        rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]",
        rsFitz = "\\ud83c[\\udffb-\\udfff]",
        rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")",
        rsNonAstral =
        "[^" + rsAstralRange + "]",
        rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        rsUpper = "[" + rsUpperRange + "]",
        rsZWJ = "\\u200d";
    var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")",
        rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")",
        rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?",
        rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?",
        reOptMod = rsModifier + "?",
        rsOptVar = "[" + rsVarRange + "]?",
        rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod +
        ")*",
        rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?\x3d\\b|[A-Z_])",
        rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?\x3d\\b|[a-z_])",
        rsSeq = rsOptVar + reOptMod + rsOptJoin,
        rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq,
        rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reApos = RegExp(rsApos, "g");
    var reComboMark = RegExp(rsCombo, "g");
    var reUnicode = RegExp(rsFitz + "(?\x3d" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    var reUnicodeWord = RegExp([rsUpper + "?" +
        rsLower + "+" + rsOptContrLower + "(?\x3d" + [rsBreak, rsUpper, "$"].join("|") + ")", rsMiscUpper + "+" + rsOptContrUpper + "(?\x3d" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")", rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower, rsUpper + "+" + rsOptContrUpper, rsOrdUpper, rsOrdLower, rsDigits, rsEmoji
    ].join("|"), "g");
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    var contextProps = ["Array", "Buffer", "DataView",
        "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"
    ];
    var templateCounter = -1;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] =
        typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] =
        cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    var deburredLetters = {
        "\u00c0": "A",
        "\u00c1": "A",
        "\u00c2": "A",
        "\u00c3": "A",
        "\u00c4": "A",
        "\u00c5": "A",
        "\u00e0": "a",
        "\u00e1": "a",
        "\u00e2": "a",
        "\u00e3": "a",
        "\u00e4": "a",
        "\u00e5": "a",
        "\u00c7": "C",
        "\u00e7": "c",
        "\u00d0": "D",
        "\u00f0": "d",
        "\u00c8": "E",
        "\u00c9": "E",
        "\u00ca": "E",
        "\u00cb": "E",
        "\u00e8": "e",
        "\u00e9": "e",
        "\u00ea": "e",
        "\u00eb": "e",
        "\u00cc": "I",
        "\u00cd": "I",
        "\u00ce": "I",
        "\u00cf": "I",
        "\u00ec": "i",
        "\u00ed": "i",
        "\u00ee": "i",
        "\u00ef": "i",
        "\u00d1": "N",
        "\u00f1": "n",
        "\u00d2": "O",
        "\u00d3": "O",
        "\u00d4": "O",
        "\u00d5": "O",
        "\u00d6": "O",
        "\u00d8": "O",
        "\u00f2": "o",
        "\u00f3": "o",
        "\u00f4": "o",
        "\u00f5": "o",
        "\u00f6": "o",
        "\u00f8": "o",
        "\u00d9": "U",
        "\u00da": "U",
        "\u00db": "U",
        "\u00dc": "U",
        "\u00f9": "u",
        "\u00fa": "u",
        "\u00fb": "u",
        "\u00fc": "u",
        "\u00dd": "Y",
        "\u00fd": "y",
        "\u00ff": "y",
        "\u00c6": "Ae",
        "\u00e6": "ae",
        "\u00de": "Th",
        "\u00fe": "th",
        "\u00df": "ss",
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010a": "C",
        "\u010c": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010b": "c",
        "\u010d": "c",
        "\u010e": "D",
        "\u0110": "D",
        "\u010f": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011a": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011b": "e",
        "\u011c": "G",
        "\u011e": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011d": "g",
        "\u011f": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012a": "I",
        "\u012c": "I",
        "\u012e": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012b": "i",
        "\u012d": "i",
        "\u012f": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013b": "L",
        "\u013d": "L",
        "\u013f": "L",
        "\u0141": "L",
        "\u013a": "l",
        "\u013c": "l",
        "\u013e": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014a": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014b": "n",
        "\u014c": "O",
        "\u014e": "O",
        "\u0150": "O",
        "\u014d": "o",
        "\u014f": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015a": "S",
        "\u015c": "S",
        "\u015e": "S",
        "\u0160": "S",
        "\u015b": "s",
        "\u015d": "s",
        "\u015f": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016a": "U",
        "\u016c": "U",
        "\u016e": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016b": "u",
        "\u016d": "u",
        "\u016f": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017b": "Z",
        "\u017d": "Z",
        "\u017a": "z",
        "\u017c": "z",
        "\u017e": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017f": "s"
    };
    var htmlEscapes = {
        "\x26": "\x26amp;",
        "\x3c": "\x26lt;",
        "\x3e": "\x26gt;",
        '"': "\x26quot;",
        "'": "\x26#39;"
    };
    var htmlUnescapes = {
        "\x26amp;": "\x26",
        "\x26lt;": "\x3c",
        "\x26gt;": "\x3e",
        "\x26quot;": '"',
        "\x26#39;": "'"
    };
    var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
    };
    var freeParseFloat = parseFloat,
        freeParseInt = parseInt;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" &&
        self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
        try {
            var types = freeModule && freeModule.require && freeModule.require("util").types;
            if (types) return types;
            return freeProcess &&
                freeProcess.binding && freeProcess.binding("util")
        } catch (e) {}
    }();
    var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
        nodeIsDate = nodeUtil && nodeUtil.isDate,
        nodeIsMap = nodeUtil && nodeUtil.isMap,
        nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
        nodeIsSet = nodeUtil && nodeUtil.isSet,
        nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

    function apply(func, thisArg, args) {
        switch (args.length) {
            case 0:
                return func.call(thisArg);
            case 1:
                return func.call(thisArg, args[0]);
            case 2:
                return func.call(thisArg, args[0], args[1]);
            case 3:
                return func.call(thisArg,
                    args[0], args[1], args[2])
        }
        return func.apply(thisArg, args)
    }

    function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1,
            length = array == null ? 0 : array.length;
        while (++index < length) {
            var value = array[index];
            setter(accumulator, value, iteratee(value), array)
        }
        return accumulator
    }

    function arrayEach(array, iteratee) {
        var index = -1,
            length = array == null ? 0 : array.length;
        while (++index < length)
            if (iteratee(array[index], index, array) === false) break;
        return array
    }

    function arrayEachRight(array, iteratee) {
        var length = array ==
            null ? 0 : array.length;
        while (length--)
            if (iteratee(array[length], length, array) === false) break;
        return array
    }

    function arrayEvery(array, predicate) {
        var index = -1,
            length = array == null ? 0 : array.length;
        while (++index < length)
            if (!predicate(array[index], index, array)) return false;
        return true
    }

    function arrayFilter(array, predicate) {
        var index = -1,
            length = array == null ? 0 : array.length,
            resIndex = 0,
            result = [];
        while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) result[resIndex++] = value
        }
        return result
    }

    function arrayIncludes(array,
        value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1
    }

    function arrayIncludesWith(array, value, comparator) {
        var index = -1,
            length = array == null ? 0 : array.length;
        while (++index < length)
            if (comparator(value, array[index])) return true;
        return false
    }

    function arrayMap(array, iteratee) {
        var index = -1,
            length = array == null ? 0 : array.length,
            result = Array(length);
        while (++index < length) result[index] = iteratee(array[index], index, array);
        return result
    }

    function arrayPush(array, values) {
        var index = -1,
            length = values.length,
            offset = array.length;
        while (++index < length) array[offset + index] = values[index];
        return array
    }

    function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1,
            length = array == null ? 0 : array.length;
        if (initAccum && length) accumulator = array[++index];
        while (++index < length) accumulator = iteratee(accumulator, array[index], index, array);
        return accumulator
    }

    function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) accumulator = array[--length];
        while (length--) accumulator = iteratee(accumulator, array[length], length, array);
        return accumulator
    }

    function arraySome(array, predicate) {
        var index = -1,
            length = array == null ? 0 : array.length;
        while (++index < length)
            if (predicate(array[index], index, array)) return true;
        return false
    }
    var asciiSize = baseProperty("length");

    function asciiToArray(string) {
        return string.split("")
    }

    function asciiWords(string) {
        return string.match(reAsciiWord) || []
    }

    function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection,
            function(value, key, collection) {
                if (predicate(value, key, collection)) {
                    result = key;
                    return false
                }
            });
        return result
    }

    function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length,
            index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length)
            if (predicate(array[index], index, array)) return index;
        return -1
    }

    function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex)
    }

    function baseIndexOfWith(array, value,
        fromIndex, comparator) {
        var index = fromIndex - 1,
            length = array.length;
        while (++index < length)
            if (comparator(array[index], value)) return index;
        return -1
    }

    function baseIsNaN(value) {
        return value !== value
    }

    function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN
    }

    function baseProperty(key) {
        return function(object) {
            return object == null ? undefined : object[key]
        }
    }

    function basePropertyOf(object) {
        return function(key) {
            return object == null ? undefined : object[key]
        }
    }

    function baseReduce(collection,
        iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection) {
            accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection)
        });
        return accumulator
    }

    function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) array[length] = array[length].value;
        return array
    }

    function baseSum(array, iteratee) {
        var result, index = -1,
            length = array.length;
        while (++index < length) {
            var current = iteratee(array[index]);
            if (current !== undefined) result =
                result === undefined ? current : result + current
        }
        return result
    }

    function baseTimes(n, iteratee) {
        var index = -1,
            result = Array(n);
        while (++index < n) result[index] = iteratee(index);
        return result
    }

    function baseToPairs(object, props) {
        return arrayMap(props, function(key) {
            return [key, object[key]]
        })
    }

    function baseUnary(func) {
        return function(value) {
            return func(value)
        }
    }

    function baseValues(object, props) {
        return arrayMap(props, function(key) {
            return object[key]
        })
    }

    function cacheHas(cache, key) {
        return cache.has(key)
    }

    function charsStartIndex(strSymbols,
        chrSymbols) {
        var index = -1,
            length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1);
        return index
    }

    function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1);
        return index
    }

    function countHolders(array, placeholder) {
        var length = array.length,
            result = 0;
        while (length--)
            if (array[length] === placeholder) ++result;
        return result
    }
    var deburrLetter = basePropertyOf(deburredLetters);
    var escapeHtmlChar = basePropertyOf(htmlEscapes);

    function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr]
    }

    function getValue(object, key) {
        return object == null ? undefined : object[key]
    }

    function hasUnicode(string) {
        return reHasUnicode.test(string)
    }

    function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string)
    }

    function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) result.push(data.value);
        return result
    }

    function mapToArray(map) {
        var index = -1,
            result = Array(map.size);
        map.forEach(function(value, key) {
            result[++index] = [key,
                value
            ]
        });
        return result
    }

    function overArg(func, transform) {
        return function(arg) {
            return func(transform(arg))
        }
    }

    function replaceHolders(array, placeholder) {
        var index = -1,
            length = array.length,
            resIndex = 0,
            result = [];
        while (++index < length) {
            var value = array[index];
            if (value === placeholder || value === PLACEHOLDER) {
                array[index] = PLACEHOLDER;
                result[resIndex++] = index
            }
        }
        return result
    }

    function setToArray(set) {
        var index = -1,
            result = Array(set.size);
        set.forEach(function(value) {
            result[++index] = value
        });
        return result
    }

    function setToPairs(set) {
        var index = -1,
            result = Array(set.size);
        set.forEach(function(value) {
            result[++index] = [value, value]
        });
        return result
    }

    function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1,
            length = array.length;
        while (++index < length)
            if (array[index] === value) return index;
        return -1
    }

    function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--)
            if (array[index] === value) return index;
        return index
    }

    function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string)
    }

    function stringToArray(string) {
        return hasUnicode(string) ?
            unicodeToArray(string) : asciiToArray(string)
    }
    var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

    function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) ++result;
        return result
    }

    function unicodeToArray(string) {
        return string.match(reUnicode) || []
    }

    function unicodeWords(string) {
        return string.match(reUnicodeWord) || []
    }
    var runInContext = function runInContext(context) {
        context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
        var Array = context.Array,
            Date = context.Date,
            Error = context.Error,
            Function = context.Function,
            Math = context.Math,
            Object = context.Object,
            RegExp = context.RegExp,
            String = context.String,
            TypeError = context.TypeError;
        var arrayProto = Array.prototype,
            funcProto = Function.prototype,
            objectProto = Object.prototype;
        var coreJsData = context["__core-js_shared__"];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = function() {
            var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO ||
                "");
            return uid ? "Symbol(src)_1." + uid : ""
        }();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object);
        var oldDash = root._;
        var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$\x26").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        var Buffer = moduleExports ? context.Buffer : undefined,
            Symbol = context.Symbol,
            Uint8Array = context.Uint8Array,
            allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
            getPrototype = overArg(Object.getPrototypeOf,
                Object),
            objectCreate = Object.create,
            propertyIsEnumerable = objectProto.propertyIsEnumerable,
            splice = arrayProto.splice,
            spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
            symIterator = Symbol ? Symbol.iterator : undefined,
            symToStringTag = Symbol ? Symbol.toStringTag : undefined;
        var defineProperty = function() {
            try {
                var func = getNative(Object, "defineProperty");
                func({}, "", {});
                return func
            } catch (e) {}
        }();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
            ctxNow = Date && Date.now !== root.Date.now &&
            Date.now,
            ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math.ceil,
            nativeFloor = Math.floor,
            nativeGetSymbols = Object.getOwnPropertySymbols,
            nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
            nativeIsFinite = context.isFinite,
            nativeJoin = arrayProto.join,
            nativeKeys = overArg(Object.keys, Object),
            nativeMax = Math.max,
            nativeMin = Math.min,
            nativeNow = Date.now,
            nativeParseInt = context.parseInt,
            nativeRandom = Math.random,
            nativeReverse = arrayProto.reverse;
        var DataView = getNative(context, "DataView"),
            Map = getNative(context, "Map"),
            Promise = getNative(context, "Promise"),
            Set = getNative(context, "Set"),
            WeakMap = getNative(context, "WeakMap"),
            nativeCreate = getNative(Object, "create");
        var metaMap = WeakMap && new WeakMap;
        var realNames = {};
        var dataViewCtorString = toSource(DataView),
            mapCtorString = toSource(Map),
            promiseCtorString = toSource(Promise),
            setCtorString = toSource(Set),
            weakMapCtorString = toSource(WeakMap);
        var symbolProto = Symbol ? Symbol.prototype : undefined,
            symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
            symbolToString =
            symbolProto ? symbolProto.toString : undefined;

        function lodash(value) {
            if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
                if (value instanceof LodashWrapper) return value;
                if (hasOwnProperty.call(value, "__wrapped__")) return wrapperClone(value)
            }
            return new LodashWrapper(value)
        }
        var baseCreate = function() {
            function object() {}
            return function(proto) {
                if (!isObject(proto)) return {};
                if (objectCreate) return objectCreate(proto);
                object.prototype = proto;
                var result = new object;
                object.prototype = undefined;
                return result
            }
        }();

        function baseLodash() {}

        function LodashWrapper(value, chainAll) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__chain__ = !!chainAll;
            this.__index__ = 0;
            this.__values__ = undefined
        }
        lodash.templateSettings = {
            "escape": reEscape,
            "evaluate": reEvaluate,
            "interpolate": reInterpolate,
            "variable": "",
            "imports": {
                "_": lodash
            }
        };
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;

        function LazyWrapper(value) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__dir__ = 1;
            this.__filtered__ = false;
            this.__iteratees__ = [];
            this.__takeCount__ = MAX_ARRAY_LENGTH;
            this.__views__ = []
        }

        function lazyClone() {
            var result = new LazyWrapper(this.__wrapped__);
            result.__actions__ = copyArray(this.__actions__);
            result.__dir__ = this.__dir__;
            result.__filtered__ = this.__filtered__;
            result.__iteratees__ = copyArray(this.__iteratees__);
            result.__takeCount__ = this.__takeCount__;
            result.__views__ = copyArray(this.__views__);
            return result
        }

        function lazyReverse() {
            if (this.__filtered__) {
                var result = new LazyWrapper(this);
                result.__dir__ = -1;
                result.__filtered__ = true
            } else {
                result = this.clone();
                result.__dir__ *= -1
            }
            return result
        }

        function lazyValue() {
            var array = this.__wrapped__.value(),
                dir = this.__dir__,
                isArr = isArray(array),
                isRight = dir < 0,
                arrLength = isArr ? array.length : 0,
                view = getView(0, arrLength, this.__views__),
                start = view.start,
                end = view.end,
                length = end - start,
                index = isRight ? end : start - 1,
                iteratees = this.__iteratees__,
                iterLength = iteratees.length,
                resIndex = 0,
                takeCount =
                nativeMin(length, this.__takeCount__);
            if (!isArr || !isRight && arrLength == length && takeCount == length) return baseWrapperValue(array, this.__actions__);
            var result = [];
            outer: while (length-- && resIndex < takeCount) {
                index += dir;
                var iterIndex = -1,
                    value = array[index];
                while (++iterIndex < iterLength) {
                    var data = iteratees[iterIndex],
                        iteratee = data.iteratee,
                        type = data.type,
                        computed = iteratee(value);
                    if (type == LAZY_MAP_FLAG) value = computed;
                    else if (!computed)
                        if (type == LAZY_FILTER_FLAG) continue outer;
                        else break outer
                }
                result[resIndex++] =
                    value
            }
            return result
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;

        function Hash(entries) {
            var index = -1,
                length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
                var entry = entries[index];
                this.set(entry[0], entry[1])
            }
        }

        function hashClear() {
            this.__data__ = nativeCreate ? nativeCreate(null) : {};
            this.size = 0
        }

        function hashDelete(key) {
            var result = this.has(key) && delete this.__data__[key];
            this.size -= result ? 1 : 0;
            return result
        }

        function hashGet(key) {
            var data =
                this.__data__;
            if (nativeCreate) {
                var result = data[key];
                return result === HASH_UNDEFINED ? undefined : result
            }
            return hasOwnProperty.call(data, key) ? data[key] : undefined
        }

        function hashHas(key) {
            var data = this.__data__;
            return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key)
        }

        function hashSet(key, value) {
            var data = this.__data__;
            this.size += this.has(key) ? 0 : 1;
            data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
            return this
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get =
            hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;

        function ListCache(entries) {
            var index = -1,
                length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
                var entry = entries[index];
                this.set(entry[0], entry[1])
            }
        }

        function listCacheClear() {
            this.__data__ = [];
            this.size = 0
        }

        function listCacheDelete(key) {
            var data = this.__data__,
                index = assocIndexOf(data, key);
            if (index < 0) return false;
            var lastIndex = data.length - 1;
            if (index == lastIndex) data.pop();
            else splice.call(data, index, 1);
            --this.size;
            return true
        }

        function listCacheGet(key) {
            var data = this.__data__,
                index = assocIndexOf(data, key);
            return index < 0 ? undefined : data[index][1]
        }

        function listCacheHas(key) {
            return assocIndexOf(this.__data__, key) > -1
        }

        function listCacheSet(key, value) {
            var data = this.__data__,
                index = assocIndexOf(data, key);
            if (index < 0) {
                ++this.size;
                data.push([key, value])
            } else data[index][1] = value;
            return this
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has =
            listCacheHas;
        ListCache.prototype.set = listCacheSet;

        function MapCache(entries) {
            var index = -1,
                length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
                var entry = entries[index];
                this.set(entry[0], entry[1])
            }
        }

        function mapCacheClear() {
            this.size = 0;
            this.__data__ = {
                "hash": new Hash,
                "map": new(Map || ListCache),
                "string": new Hash
            }
        }

        function mapCacheDelete(key) {
            var result = getMapData(this, key)["delete"](key);
            this.size -= result ? 1 : 0;
            return result
        }

        function mapCacheGet(key) {
            return getMapData(this, key).get(key)
        }

        function mapCacheHas(key) {
            return getMapData(this, key).has(key)
        }

        function mapCacheSet(key, value) {
            var data = getMapData(this, key),
                size = data.size;
            data.set(key, value);
            this.size += data.size == size ? 0 : 1;
            return this
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;

        function SetCache(values) {
            var index = -1,
                length = values == null ? 0 : values.length;
            this.__data__ = new MapCache;
            while (++index <
                length) this.add(values[index])
        }

        function setCacheAdd(value) {
            this.__data__.set(value, HASH_UNDEFINED);
            return this
        }

        function setCacheHas(value) {
            return this.__data__.has(value)
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;

        function Stack(entries) {
            var data = this.__data__ = new ListCache(entries);
            this.size = data.size
        }

        function stackClear() {
            this.__data__ = new ListCache;
            this.size = 0
        }

        function stackDelete(key) {
            var data = this.__data__,
                result = data["delete"](key);
            this.size =
                data.size;
            return result
        }

        function stackGet(key) {
            return this.__data__.get(key)
        }

        function stackHas(key) {
            return this.__data__.has(key)
        }

        function stackSet(key, value) {
            var data = this.__data__;
            if (data instanceof ListCache) {
                var pairs = data.__data__;
                if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
                    pairs.push([key, value]);
                    this.size = ++data.size;
                    return this
                }
                data = this.__data__ = new MapCache(pairs)
            }
            data.set(key, value);
            this.size = data.size;
            return this
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get =
            stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;

        function arrayLikeKeys(value, inherited) {
            var isArr = isArray(value),
                isArg = !isArr && isArguments(value),
                isBuff = !isArr && !isArg && isBuffer(value),
                isType = !isArr && !isArg && !isBuff && isTypedArray(value),
                skipIndexes = isArr || isArg || isBuff || isType,
                result = skipIndexes ? baseTimes(value.length, String) : [],
                length = result.length;
            for (var key in value)
                if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") ||
                        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) result.push(key);
            return result
        }

        function arraySample(array) {
            var length = array.length;
            return length ? array[baseRandom(0, length - 1)] : undefined
        }

        function arraySampleSize(array, n) {
            return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length))
        }

        function arrayShuffle(array) {
            return shuffleSelf(copyArray(array))
        }

        function assignMergeValue(object, key, value) {
            if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in
                    object)) baseAssignValue(object, key, value)
        }

        function assignValue(object, key, value) {
            var objValue = object[key];
            if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) baseAssignValue(object, key, value)
        }

        function assocIndexOf(array, key) {
            var length = array.length;
            while (length--)
                if (eq(array[length][0], key)) return length;
            return -1
        }

        function baseAggregator(collection, setter, iteratee, accumulator) {
            baseEach(collection, function(value, key, collection) {
                setter(accumulator, value, iteratee(value),
                    collection)
            });
            return accumulator
        }

        function baseAssign(object, source) {
            return object && copyObject(source, keys(source), object)
        }

        function baseAssignIn(object, source) {
            return object && copyObject(source, keysIn(source), object)
        }

        function baseAssignValue(object, key, value) {
            if (key == "__proto__" && defineProperty) defineProperty(object, key, {
                "configurable": true,
                "enumerable": true,
                "value": value,
                "writable": true
            });
            else object[key] = value
        }

        function baseAt(object, paths) {
            var index = -1,
                length = paths.length,
                result = Array(length),
                skip =
                object == null;
            while (++index < length) result[index] = skip ? undefined : get(object, paths[index]);
            return result
        }

        function baseClamp(number, lower, upper) {
            if (number === number) {
                if (upper !== undefined) number = number <= upper ? number : upper;
                if (lower !== undefined) number = number >= lower ? number : lower
            }
            return number
        }

        function baseClone(value, bitmask, customizer, key, object, stack) {
            var result, isDeep = bitmask & CLONE_DEEP_FLAG,
                isFlat = bitmask & CLONE_FLAT_FLAG,
                isFull = bitmask & CLONE_SYMBOLS_FLAG;
            if (customizer) result = object ? customizer(value, key,
                object, stack) : customizer(value);
            if (result !== undefined) return result;
            if (!isObject(value)) return value;
            var isArr = isArray(value);
            if (isArr) {
                result = initCloneArray(value);
                if (!isDeep) return copyArray(value, result)
            } else {
                var tag = getTag(value),
                    isFunc = tag == funcTag || tag == genTag;
                if (isBuffer(value)) return cloneBuffer(value, isDeep);
                if (tag == objectTag || tag == argsTag || isFunc && !object) {
                    result = isFlat || isFunc ? {} : initCloneObject(value);
                    if (!isDeep) return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value,
                        baseAssign(result, value))
                } else {
                    if (!cloneableTags[tag]) return object ? value : {};
                    result = initCloneByTag(value, tag, isDeep)
                }
            }
            stack || (stack = new Stack);
            var stacked = stack.get(value);
            if (stacked) return stacked;
            stack.set(value, result);
            if (isSet(value)) value.forEach(function(subValue) {
                result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack))
            });
            else if (isMap(value)) value.forEach(function(subValue, key) {
                result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack))
            });
            var keysFunc = isFull ? isFlat ?
                getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
            var props = isArr ? undefined : keysFunc(value);
            arrayEach(props || value, function(subValue, key) {
                if (props) {
                    key = subValue;
                    subValue = value[key]
                }
                assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack))
            });
            return result
        }

        function baseConforms(source) {
            var props = keys(source);
            return function(object) {
                return baseConformsTo(object, source, props)
            }
        }

        function baseConformsTo(object, source, props) {
            var length = props.length;
            if (object == null) return !length;
            object = Object(object);
            while (length--) {
                var key = props[length],
                    predicate = source[key],
                    value = object[key];
                if (value === undefined && !(key in object) || !predicate(value)) return false
            }
            return true
        }

        function baseDelay(func, wait, args) {
            if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
            return setTimeout(function() {
                func.apply(undefined, args)
            }, wait)
        }

        function baseDifference(array, values, iteratee, comparator) {
            var index = -1,
                includes = arrayIncludes,
                isCommon = true,
                length = array.length,
                result = [],
                valuesLength = values.length;
            if (!length) return result;
            if (iteratee) values = arrayMap(values, baseUnary(iteratee));
            if (comparator) {
                includes = arrayIncludesWith;
                isCommon = false
            } else if (values.length >= LARGE_ARRAY_SIZE) {
                includes = cacheHas;
                isCommon = false;
                values = new SetCache(values)
            }
            outer: while (++index < length) {
                var value = array[index],
                    computed = iteratee == null ? value : iteratee(value);
                value = comparator || value !== 0 ? value : 0;
                if (isCommon && computed === computed) {
                    var valuesIndex = valuesLength;
                    while (valuesIndex--)
                        if (values[valuesIndex] === computed) continue outer;
                    result.push(value)
                } else if (!includes(values,
                        computed, comparator)) result.push(value)
            }
            return result
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);

        function baseEvery(collection, predicate) {
            var result = true;
            baseEach(collection, function(value, index, collection) {
                result = !!predicate(value, index, collection);
                return result
            });
            return result
        }

        function baseExtremum(array, iteratee, comparator) {
            var index = -1,
                length = array.length;
            while (++index < length) {
                var value = array[index],
                    current = iteratee(value);
                if (current != null &&
                    (computed === undefined ? current === current && !isSymbol(current) : comparator(current, computed))) var computed = current,
                    result = value
            }
            return result
        }

        function baseFill(array, value, start, end) {
            var length = array.length;
            start = toInteger(start);
            if (start < 0) start = -start > length ? 0 : length + start;
            end = end === undefined || end > length ? length : toInteger(end);
            if (end < 0) end += length;
            end = start > end ? 0 : toLength(end);
            while (start < end) array[start++] = value;
            return array
        }

        function baseFilter(collection, predicate) {
            var result = [];
            baseEach(collection,
                function(value, index, collection) {
                    if (predicate(value, index, collection)) result.push(value)
                });
            return result
        }

        function baseFlatten(array, depth, predicate, isStrict, result) {
            var index = -1,
                length = array.length;
            predicate || (predicate = isFlattenable);
            result || (result = []);
            while (++index < length) {
                var value = array[index];
                if (depth > 0 && predicate(value))
                    if (depth > 1) baseFlatten(value, depth - 1, predicate, isStrict, result);
                    else arrayPush(result, value);
                else if (!isStrict) result[result.length] = value
            }
            return result
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);

        function baseForOwn(object, iteratee) {
            return object && baseFor(object, iteratee, keys)
        }

        function baseForOwnRight(object, iteratee) {
            return object && baseForRight(object, iteratee, keys)
        }

        function baseFunctions(object, props) {
            return arrayFilter(props, function(key) {
                return isFunction(object[key])
            })
        }

        function baseGet(object, path) {
            path = castPath(path, object);
            var index = 0,
                length = path.length;
            while (object != null && index < length) object = object[toKey(path[index++])];
            return index && index == length ?
                object : undefined
        }

        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
            var result = keysFunc(object);
            return isArray(object) ? result : arrayPush(result, symbolsFunc(object))
        }

        function baseGetTag(value) {
            if (value == null) return value === undefined ? undefinedTag : nullTag;
            return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value)
        }

        function baseGt(value, other) {
            return value > other
        }

        function baseHas(object, key) {
            return object != null && hasOwnProperty.call(object, key)
        }

        function baseHasIn(object,
            key) {
            return object != null && key in Object(object)
        }

        function baseInRange(number, start, end) {
            return number >= nativeMin(start, end) && number < nativeMax(start, end)
        }

        function baseIntersection(arrays, iteratee, comparator) {
            var includes = comparator ? arrayIncludesWith : arrayIncludes,
                length = arrays[0].length,
                othLength = arrays.length,
                othIndex = othLength,
                caches = Array(othLength),
                maxLength = Infinity,
                result = [];
            while (othIndex--) {
                var array = arrays[othIndex];
                if (othIndex && iteratee) array = arrayMap(array, baseUnary(iteratee));
                maxLength =
                    nativeMin(array.length, maxLength);
                caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined
            }
            array = arrays[0];
            var index = -1,
                seen = caches[0];
            outer: while (++index < length && result.length < maxLength) {
                var value = array[index],
                    computed = iteratee ? iteratee(value) : value;
                value = comparator || value !== 0 ? value : 0;
                if (!(seen ? cacheHas(seen, computed) : includes(result, computed, comparator))) {
                    othIndex = othLength;
                    while (--othIndex) {
                        var cache = caches[othIndex];
                        if (!(cache ? cacheHas(cache,
                                computed) : includes(arrays[othIndex], computed, comparator))) continue outer
                    }
                    if (seen) seen.push(computed);
                    result.push(value)
                }
            }
            return result
        }

        function baseInverter(object, setter, iteratee, accumulator) {
            baseForOwn(object, function(value, key, object) {
                setter(accumulator, iteratee(value), key, object)
            });
            return accumulator
        }

        function baseInvoke(object, path, args) {
            path = castPath(path, object);
            object = parent(object, path);
            var func = object == null ? object : object[toKey(last(path))];
            return func == null ? undefined : apply(func, object, args)
        }

        function baseIsArguments(value) {
            return isObjectLike(value) && baseGetTag(value) == argsTag
        }

        function baseIsArrayBuffer(value) {
            return isObjectLike(value) && baseGetTag(value) == arrayBufferTag
        }

        function baseIsDate(value) {
            return isObjectLike(value) && baseGetTag(value) == dateTag
        }

        function baseIsEqual(value, other, bitmask, customizer, stack) {
            if (value === other) return true;
            if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) return value !== value && other !== other;
            return baseIsEqualDeep(value, other, bitmask,
                customizer, baseIsEqual, stack)
        }

        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
            var objIsArr = isArray(object),
                othIsArr = isArray(other),
                objTag = objIsArr ? arrayTag : getTag(object),
                othTag = othIsArr ? arrayTag : getTag(other);
            objTag = objTag == argsTag ? objectTag : objTag;
            othTag = othTag == argsTag ? objectTag : othTag;
            var objIsObj = objTag == objectTag,
                othIsObj = othTag == objectTag,
                isSameTag = objTag == othTag;
            if (isSameTag && isBuffer(object)) {
                if (!isBuffer(other)) return false;
                objIsArr = true;
                objIsObj = false
            }
            if (isSameTag &&
                !objIsObj) {
                stack || (stack = new Stack);
                return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack)
            }
            if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
                var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"),
                    othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
                if (objIsWrapped || othIsWrapped) {
                    var objUnwrapped = objIsWrapped ? object.value() : object,
                        othUnwrapped = othIsWrapped ? other.value() : other;
                    stack ||
                        (stack = new Stack);
                    return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack)
                }
            }
            if (!isSameTag) return false;
            stack || (stack = new Stack);
            return equalObjects(object, other, bitmask, customizer, equalFunc, stack)
        }

        function baseIsMap(value) {
            return isObjectLike(value) && getTag(value) == mapTag
        }

        function baseIsMatch(object, source, matchData, customizer) {
            var index = matchData.length,
                length = index,
                noCustomizer = !customizer;
            if (object == null) return !length;
            object = Object(object);
            while (index--) {
                var data = matchData[index];
                if (noCustomizer &&
                    data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) return false
            }
            while (++index < length) {
                data = matchData[index];
                var key = data[0],
                    objValue = object[key],
                    srcValue = data[1];
                if (noCustomizer && data[2]) {
                    if (objValue === undefined && !(key in object)) return false
                } else {
                    var stack = new Stack;
                    if (customizer) var result = customizer(objValue, srcValue, key, object, source, stack);
                    if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) return false
                }
            }
            return true
        }

        function baseIsNative(value) {
            if (!isObject(value) ||
                isMasked(value)) return false;
            var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
            return pattern.test(toSource(value))
        }

        function baseIsRegExp(value) {
            return isObjectLike(value) && baseGetTag(value) == regexpTag
        }

        function baseIsSet(value) {
            return isObjectLike(value) && getTag(value) == setTag
        }

        function baseIsTypedArray(value) {
            return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)]
        }

        function baseIteratee(value) {
            if (typeof value == "function") return value;
            if (value == null) return identity;
            if (typeof value == "object") return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
            return property(value)
        }

        function baseKeys(object) {
            if (!isPrototype(object)) return nativeKeys(object);
            var result = [];
            for (var key in Object(object))
                if (hasOwnProperty.call(object, key) && key != "constructor") result.push(key);
            return result
        }

        function baseKeysIn(object) {
            if (!isObject(object)) return nativeKeysIn(object);
            var isProto = isPrototype(object),
                result = [];
            for (var key in object)
                if (!(key == "constructor" &&
                        (isProto || !hasOwnProperty.call(object, key)))) result.push(key);
            return result
        }

        function baseLt(value, other) {
            return value < other
        }

        function baseMap(collection, iteratee) {
            var index = -1,
                result = isArrayLike(collection) ? Array(collection.length) : [];
            baseEach(collection, function(value, key, collection) {
                result[++index] = iteratee(value, key, collection)
            });
            return result
        }

        function baseMatches(source) {
            var matchData = getMatchData(source);
            if (matchData.length == 1 && matchData[0][2]) return matchesStrictComparable(matchData[0][0], matchData[0][1]);
            return function(object) {
                return object === source || baseIsMatch(object, source, matchData)
            }
        }

        function baseMatchesProperty(path, srcValue) {
            if (isKey(path) && isStrictComparable(srcValue)) return matchesStrictComparable(toKey(path), srcValue);
            return function(object) {
                var objValue = get(object, path);
                return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG)
            }
        }

        function baseMerge(object, source, srcIndex, customizer, stack) {
            if (object === source) return;
            baseFor(source, function(srcValue, key) {
                stack || (stack = new Stack);
                if (isObject(srcValue)) baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
                else {
                    var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined;
                    if (newValue === undefined) newValue = srcValue;
                    assignMergeValue(object, key, newValue)
                }
            }, keysIn)
        }

        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
            var objValue = safeGet(object, key),
                srcValue = safeGet(source, key),
                stacked = stack.get(srcValue);
            if (stacked) {
                assignMergeValue(object, key, stacked);
                return
            }
            var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined;
            var isCommon = newValue === undefined;
            if (isCommon) {
                var isArr = isArray(srcValue),
                    isBuff = !isArr && isBuffer(srcValue),
                    isTyped = !isArr && !isBuff && isTypedArray(srcValue);
                newValue = srcValue;
                if (isArr || isBuff || isTyped)
                    if (isArray(objValue)) newValue = objValue;
                    else if (isArrayLikeObject(objValue)) newValue = copyArray(objValue);
                else if (isBuff) {
                    isCommon = false;
                    newValue = cloneBuffer(srcValue,
                        true)
                } else if (isTyped) {
                    isCommon = false;
                    newValue = cloneTypedArray(srcValue, true)
                } else newValue = [];
                else if (isPlainObject(srcValue) || isArguments(srcValue)) {
                    newValue = objValue;
                    if (isArguments(objValue)) newValue = toPlainObject(objValue);
                    else if (!isObject(objValue) || isFunction(objValue)) newValue = initCloneObject(srcValue)
                } else isCommon = false
            }
            if (isCommon) {
                stack.set(srcValue, newValue);
                mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
                stack["delete"](srcValue)
            }
            assignMergeValue(object, key, newValue)
        }

        function baseNth(array,
            n) {
            var length = array.length;
            if (!length) return;
            n += n < 0 ? length : 0;
            return isIndex(n, length) ? array[n] : undefined
        }

        function baseOrderBy(collection, iteratees, orders) {
            var index = -1;
            iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(getIteratee()));
            var result = baseMap(collection, function(value, key, collection) {
                var criteria = arrayMap(iteratees, function(iteratee) {
                    return iteratee(value)
                });
                return {
                    "criteria": criteria,
                    "index": ++index,
                    "value": value
                }
            });
            return baseSortBy(result, function(object, other) {
                return compareMultiple(object,
                    other, orders)
            })
        }

        function basePick(object, paths) {
            return basePickBy(object, paths, function(value, path) {
                return hasIn(object, path)
            })
        }

        function basePickBy(object, paths, predicate) {
            var index = -1,
                length = paths.length,
                result = {};
            while (++index < length) {
                var path = paths[index],
                    value = baseGet(object, path);
                if (predicate(value, path)) baseSet(result, castPath(path, object), value)
            }
            return result
        }

        function basePropertyDeep(path) {
            return function(object) {
                return baseGet(object, path)
            }
        }

        function basePullAll(array, values, iteratee, comparator) {
            var indexOf =
                comparator ? baseIndexOfWith : baseIndexOf,
                index = -1,
                length = values.length,
                seen = array;
            if (array === values) values = copyArray(values);
            if (iteratee) seen = arrayMap(array, baseUnary(iteratee));
            while (++index < length) {
                var fromIndex = 0,
                    value = values[index],
                    computed = iteratee ? iteratee(value) : value;
                while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
                    if (seen !== array) splice.call(seen, fromIndex, 1);
                    splice.call(array, fromIndex, 1)
                }
            }
            return array
        }

        function basePullAt(array, indexes) {
            var length = array ? indexes.length : 0,
                lastIndex =
                length - 1;
            while (length--) {
                var index = indexes[length];
                if (length == lastIndex || index !== previous) {
                    var previous = index;
                    if (isIndex(index)) splice.call(array, index, 1);
                    else baseUnset(array, index)
                }
            }
            return array
        }

        function baseRandom(lower, upper) {
            return lower + nativeFloor(nativeRandom() * (upper - lower + 1))
        }

        function baseRange(start, end, step, fromRight) {
            var index = -1,
                length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
                result = Array(length);
            while (length--) {
                result[fromRight ? length : ++index] = start;
                start += step
            }
            return result
        }

        function baseRepeat(string, n) {
            var result = "";
            if (!string || n < 1 || n > MAX_SAFE_INTEGER) return result;
            do {
                if (n % 2) result += string;
                n = nativeFloor(n / 2);
                if (n) string += string
            } while (n);
            return result
        }

        function baseRest(func, start) {
            return setToString(overRest(func, start, identity), func + "")
        }

        function baseSample(collection) {
            return arraySample(values(collection))
        }

        function baseSampleSize(collection, n) {
            var array = values(collection);
            return shuffleSelf(array, baseClamp(n, 0, array.length))
        }

        function baseSet(object, path, value, customizer) {
            if (!isObject(object)) return object;
            path = castPath(path, object);
            var index = -1,
                length = path.length,
                lastIndex = length - 1,
                nested = object;
            while (nested != null && ++index < length) {
                var key = toKey(path[index]),
                    newValue = value;
                if (index != lastIndex) {
                    var objValue = nested[key];
                    newValue = customizer ? customizer(objValue, key, nested) : undefined;
                    if (newValue === undefined) newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {}
                }
                assignValue(nested, key, newValue);
                nested = nested[key]
            }
            return object
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
            metaMap.set(func,
                data);
            return func
        };
        var baseSetToString = !defineProperty ? identity : function(func, string) {
            return defineProperty(func, "toString", {
                "configurable": true,
                "enumerable": false,
                "value": constant(string),
                "writable": true
            })
        };

        function baseShuffle(collection) {
            return shuffleSelf(values(collection))
        }

        function baseSlice(array, start, end) {
            var index = -1,
                length = array.length;
            if (start < 0) start = -start > length ? 0 : length + start;
            end = end > length ? length : end;
            if (end < 0) end += length;
            length = start > end ? 0 : end - start >>> 0;
            start >>>= 0;
            var result = Array(length);
            while (++index < length) result[index] = array[index + start];
            return result
        }

        function baseSome(collection, predicate) {
            var result;
            baseEach(collection, function(value, index, collection) {
                result = predicate(value, index, collection);
                return !result
            });
            return !!result
        }

        function baseSortedIndex(array, value, retHighest) {
            var low = 0,
                high = array == null ? low : array.length;
            if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
                while (low < high) {
                    var mid = low + high >>> 1,
                        computed = array[mid];
                    if (computed !== null && !isSymbol(computed) &&
                        (retHighest ? computed <= value : computed < value)) low = mid + 1;
                    else high = mid
                }
                return high
            }
            return baseSortedIndexBy(array, value, identity, retHighest)
        }

        function baseSortedIndexBy(array, value, iteratee, retHighest) {
            value = iteratee(value);
            var low = 0,
                high = array == null ? 0 : array.length,
                valIsNaN = value !== value,
                valIsNull = value === null,
                valIsSymbol = isSymbol(value),
                valIsUndefined = value === undefined;
            while (low < high) {
                var mid = nativeFloor((low + high) / 2),
                    computed = iteratee(array[mid]),
                    othIsDefined = computed !== undefined,
                    othIsNull = computed ===
                    null,
                    othIsReflexive = computed === computed,
                    othIsSymbol = isSymbol(computed);
                if (valIsNaN) var setLow = retHighest || othIsReflexive;
                else if (valIsUndefined) setLow = othIsReflexive && (retHighest || othIsDefined);
                else if (valIsNull) setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
                else if (valIsSymbol) setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
                else if (othIsNull || othIsSymbol) setLow = false;
                else setLow = retHighest ? computed <= value : computed < value;
                if (setLow) low = mid + 1;
                else high = mid
            }
            return nativeMin(high,
                MAX_ARRAY_INDEX)
        }

        function baseSortedUniq(array, iteratee) {
            var index = -1,
                length = array.length,
                resIndex = 0,
                result = [];
            while (++index < length) {
                var value = array[index],
                    computed = iteratee ? iteratee(value) : value;
                if (!index || !eq(computed, seen)) {
                    var seen = computed;
                    result[resIndex++] = value === 0 ? 0 : value
                }
            }
            return result
        }

        function baseToNumber(value) {
            if (typeof value == "number") return value;
            if (isSymbol(value)) return NAN;
            return +value
        }

        function baseToString(value) {
            if (typeof value == "string") return value;
            if (isArray(value)) return arrayMap(value,
                baseToString) + "";
            if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
            var result = value + "";
            return result == "0" && 1 / value == -INFINITY ? "-0" : result
        }

        function baseUniq(array, iteratee, comparator) {
            var index = -1,
                includes = arrayIncludes,
                length = array.length,
                isCommon = true,
                result = [],
                seen = result;
            if (comparator) {
                isCommon = false;
                includes = arrayIncludesWith
            } else if (length >= LARGE_ARRAY_SIZE) {
                var set = iteratee ? null : createSet(array);
                if (set) return setToArray(set);
                isCommon = false;
                includes = cacheHas;
                seen = new SetCache
            } else seen =
                iteratee ? [] : result;
            outer: while (++index < length) {
                var value = array[index],
                    computed = iteratee ? iteratee(value) : value;
                value = comparator || value !== 0 ? value : 0;
                if (isCommon && computed === computed) {
                    var seenIndex = seen.length;
                    while (seenIndex--)
                        if (seen[seenIndex] === computed) continue outer;
                    if (iteratee) seen.push(computed);
                    result.push(value)
                } else if (!includes(seen, computed, comparator)) {
                    if (seen !== result) seen.push(computed);
                    result.push(value)
                }
            }
            return result
        }

        function baseUnset(object, path) {
            path = castPath(path, object);
            object =
                parent(object, path);
            return object == null || delete object[toKey(last(path))]
        }

        function baseUpdate(object, path, updater, customizer) {
            return baseSet(object, path, updater(baseGet(object, path)), customizer)
        }

        function baseWhile(array, predicate, isDrop, fromRight) {
            var length = array.length,
                index = fromRight ? length : -1;
            while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array));
            return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length :
                index)
        }

        function baseWrapperValue(value, actions) {
            var result = value;
            if (result instanceof LazyWrapper) result = result.value();
            return arrayReduce(actions, function(result, action) {
                return action.func.apply(action.thisArg, arrayPush([result], action.args))
            }, result)
        }

        function baseXor(arrays, iteratee, comparator) {
            var length = arrays.length;
            if (length < 2) return length ? baseUniq(arrays[0]) : [];
            var index = -1,
                result = Array(length);
            while (++index < length) {
                var array = arrays[index],
                    othIndex = -1;
                while (++othIndex < length)
                    if (othIndex !=
                        index) result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator)
            }
            return baseUniq(baseFlatten(result, 1), iteratee, comparator)
        }

        function baseZipObject(props, values, assignFunc) {
            var index = -1,
                length = props.length,
                valsLength = values.length,
                result = {};
            while (++index < length) {
                var value = index < valsLength ? values[index] : undefined;
                assignFunc(result, props[index], value)
            }
            return result
        }

        function castArrayLikeObject(value) {
            return isArrayLikeObject(value) ? value : []
        }

        function castFunction(value) {
            return typeof value ==
                "function" ? value : identity
        }

        function castPath(value, object) {
            if (isArray(value)) return value;
            return isKey(value, object) ? [value] : stringToPath(toString(value))
        }
        var castRest = baseRest;

        function castSlice(array, start, end) {
            var length = array.length;
            end = end === undefined ? length : end;
            return !start && end >= length ? array : baseSlice(array, start, end)
        }
        var clearTimeout = ctxClearTimeout || function(id) {
            return root.clearTimeout(id)
        };

        function cloneBuffer(buffer, isDeep) {
            if (isDeep) return buffer.slice();
            var length = buffer.length,
                result =
                allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
            buffer.copy(result);
            return result
        }

        function cloneArrayBuffer(arrayBuffer) {
            var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
            (new Uint8Array(result)).set(new Uint8Array(arrayBuffer));
            return result
        }

        function cloneDataView(dataView, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
            return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength)
        }

        function cloneRegExp(regexp) {
            var result = new regexp.constructor(regexp.source,
                reFlags.exec(regexp));
            result.lastIndex = regexp.lastIndex;
            return result
        }

        function cloneSymbol(symbol) {
            return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {}
        }

        function cloneTypedArray(typedArray, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
            return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length)
        }

        function compareAscending(value, other) {
            if (value !== other) {
                var valIsDefined = value !== undefined,
                    valIsNull = value === null,
                    valIsReflexive = value === value,
                    valIsSymbol =
                    isSymbol(value);
                var othIsDefined = other !== undefined,
                    othIsNull = other === null,
                    othIsReflexive = other === other,
                    othIsSymbol = isSymbol(other);
                if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) return 1;
                if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined &&
                    valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) return -1
            }
            return 0
        }

        function compareMultiple(object, other, orders) {
            var index = -1,
                objCriteria = object.criteria,
                othCriteria = other.criteria,
                length = objCriteria.length,
                ordersLength = orders.length;
            while (++index < length) {
                var result = compareAscending(objCriteria[index], othCriteria[index]);
                if (result) {
                    if (index >= ordersLength) return result;
                    var order = orders[index];
                    return result * (order == "desc" ? -1 : 1)
                }
            }
            return object.index - other.index
        }

        function composeArgs(args,
            partials, holders, isCurried) {
            var argsIndex = -1,
                argsLength = args.length,
                holdersLength = holders.length,
                leftIndex = -1,
                leftLength = partials.length,
                rangeLength = nativeMax(argsLength - holdersLength, 0),
                result = Array(leftLength + rangeLength),
                isUncurried = !isCurried;
            while (++leftIndex < leftLength) result[leftIndex] = partials[leftIndex];
            while (++argsIndex < holdersLength)
                if (isUncurried || argsIndex < argsLength) result[holders[argsIndex]] = args[argsIndex];
            while (rangeLength--) result[leftIndex++] = args[argsIndex++];
            return result
        }

        function composeArgsRight(args,
            partials, holders, isCurried) {
            var argsIndex = -1,
                argsLength = args.length,
                holdersIndex = -1,
                holdersLength = holders.length,
                rightIndex = -1,
                rightLength = partials.length,
                rangeLength = nativeMax(argsLength - holdersLength, 0),
                result = Array(rangeLength + rightLength),
                isUncurried = !isCurried;
            while (++argsIndex < rangeLength) result[argsIndex] = args[argsIndex];
            var offset = argsIndex;
            while (++rightIndex < rightLength) result[offset + rightIndex] = partials[rightIndex];
            while (++holdersIndex < holdersLength)
                if (isUncurried || argsIndex < argsLength) result[offset +
                    holders[holdersIndex]] = args[argsIndex++];
            return result
        }

        function copyArray(source, array) {
            var index = -1,
                length = source.length;
            array || (array = Array(length));
            while (++index < length) array[index] = source[index];
            return array
        }

        function copyObject(source, props, object, customizer) {
            var isNew = !object;
            object || (object = {});
            var index = -1,
                length = props.length;
            while (++index < length) {
                var key = props[index];
                var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
                if (newValue === undefined) newValue = source[key];
                if (isNew) baseAssignValue(object, key, newValue);
                else assignValue(object, key, newValue)
            }
            return object
        }

        function copySymbols(source, object) {
            return copyObject(source, getSymbols(source), object)
        }

        function copySymbolsIn(source, object) {
            return copyObject(source, getSymbolsIn(source), object)
        }

        function createAggregator(setter, initializer) {
            return function(collection, iteratee) {
                var func = isArray(collection) ? arrayAggregator : baseAggregator,
                    accumulator = initializer ? initializer() : {};
                return func(collection, setter, getIteratee(iteratee,
                    2), accumulator)
            }
        }

        function createAssigner(assigner) {
            return baseRest(function(object, sources) {
                var index = -1,
                    length = sources.length,
                    customizer = length > 1 ? sources[length - 1] : undefined,
                    guard = length > 2 ? sources[2] : undefined;
                customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined;
                if (guard && isIterateeCall(sources[0], sources[1], guard)) {
                    customizer = length < 3 ? undefined : customizer;
                    length = 1
                }
                object = Object(object);
                while (++index < length) {
                    var source = sources[index];
                    if (source) assigner(object,
                        source, index, customizer)
                }
                return object
            })
        }

        function createBaseEach(eachFunc, fromRight) {
            return function(collection, iteratee) {
                if (collection == null) return collection;
                if (!isArrayLike(collection)) return eachFunc(collection, iteratee);
                var length = collection.length,
                    index = fromRight ? length : -1,
                    iterable = Object(collection);
                while (fromRight ? index-- : ++index < length)
                    if (iteratee(iterable[index], index, iterable) === false) break;
                return collection
            }
        }

        function createBaseFor(fromRight) {
            return function(object, iteratee, keysFunc) {
                var index = -1,
                    iterable = Object(object),
                    props = keysFunc(object),
                    length = props.length;
                while (length--) {
                    var key = props[fromRight ? length : ++index];
                    if (iteratee(iterable[key], key, iterable) === false) break
                }
                return object
            }
        }

        function createBind(func, bitmask, thisArg) {
            var isBind = bitmask & WRAP_BIND_FLAG,
                Ctor = createCtor(func);

            function wrapper() {
                var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
                return fn.apply(isBind ? thisArg : this, arguments)
            }
            return wrapper
        }

        function createCaseFirst(methodName) {
            return function(string) {
                string =
                    toString(string);
                var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;
                var chr = strSymbols ? strSymbols[0] : string.charAt(0);
                var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
                return chr[methodName]() + trailing
            }
        }

        function createCompounder(callback) {
            return function(string) {
                return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "")
            }
        }

        function createCtor(Ctor) {
            return function() {
                var args = arguments;
                switch (args.length) {
                    case 0:
                        return new Ctor;
                    case 1:
                        return new Ctor(args[0]);
                    case 2:
                        return new Ctor(args[0], args[1]);
                    case 3:
                        return new Ctor(args[0], args[1], args[2]);
                    case 4:
                        return new Ctor(args[0], args[1], args[2], args[3]);
                    case 5:
                        return new Ctor(args[0], args[1], args[2], args[3], args[4]);
                    case 6:
                        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
                    case 7:
                        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6])
                }
                var thisBinding = baseCreate(Ctor.prototype),
                    result = Ctor.apply(thisBinding, args);
                return isObject(result) ? result : thisBinding
            }
        }

        function createCurry(func,
            bitmask, arity) {
            var Ctor = createCtor(func);

            function wrapper() {
                var length = arguments.length,
                    args = Array(length),
                    index = length,
                    placeholder = getHolder(wrapper);
                while (index--) args[index] = arguments[index];
                var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
                length -= holders.length;
                if (length < arity) return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
                var fn = this && this !== root && this instanceof
                wrapper ? Ctor : func;
                return apply(fn, this, args)
            }
            return wrapper
        }

        function createFind(findIndexFunc) {
            return function(collection, predicate, fromIndex) {
                var iterable = Object(collection);
                if (!isArrayLike(collection)) {
                    var iteratee = getIteratee(predicate, 3);
                    collection = keys(collection);
                    predicate = function(key) {
                        return iteratee(iterable[key], key, iterable)
                    }
                }
                var index = findIndexFunc(collection, predicate, fromIndex);
                return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined
            }
        }

        function createFlow(fromRight) {
            return flatRest(function(funcs) {
                var length =
                    funcs.length,
                    index = length,
                    prereq = LodashWrapper.prototype.thru;
                if (fromRight) funcs.reverse();
                while (index--) {
                    var func = funcs[index];
                    if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
                    if (prereq && !wrapper && getFuncName(func) == "wrapper") var wrapper = new LodashWrapper([], true)
                }
                index = wrapper ? index : length;
                while (++index < length) {
                    func = funcs[index];
                    var funcName = getFuncName(func),
                        data = funcName == "wrapper" ? getData(func) : undefined;
                    if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG |
                            WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
                    else wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func)
                }
                return function() {
                    var args = arguments,
                        value = args[0];
                    if (wrapper && args.length == 1 && isArray(value)) return wrapper.plant(value).value();
                    var index = 0,
                        result = length ? funcs[index].apply(this, args) : value;
                    while (++index < length) result = funcs[index].call(this, result);
                    return result
                }
            })
        }

        function createHybrid(func, bitmask, thisArg,
            partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
            var isAry = bitmask & WRAP_ARY_FLAG,
                isBind = bitmask & WRAP_BIND_FLAG,
                isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
                isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
                isFlip = bitmask & WRAP_FLIP_FLAG,
                Ctor = isBindKey ? undefined : createCtor(func);

            function wrapper() {
                var length = arguments.length,
                    args = Array(length),
                    index = length;
                while (index--) args[index] = arguments[index];
                if (isCurried) var placeholder = getHolder(wrapper),
                    holdersCount = countHolders(args, placeholder);
                if (partials) args = composeArgs(args, partials, holders, isCurried);
                if (partialsRight) args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
                length -= holdersCount;
                if (isCurried && length < arity) {
                    var newHolders = replaceHolders(args, placeholder);
                    return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length)
                }
                var thisBinding = isBind ? thisArg : this,
                    fn = isBindKey ? thisBinding[func] : func;
                length = args.length;
                if (argPos) args = reorder(args, argPos);
                else if (isFlip && length >
                    1) args.reverse();
                if (isAry && ary < length) args.length = ary;
                if (this && this !== root && this instanceof wrapper) fn = Ctor || createCtor(fn);
                return fn.apply(thisBinding, args)
            }
            return wrapper
        }

        function createInverter(setter, toIteratee) {
            return function(object, iteratee) {
                return baseInverter(object, setter, toIteratee(iteratee), {})
            }
        }

        function createMathOperation(operator, defaultValue) {
            return function(value, other) {
                var result;
                if (value === undefined && other === undefined) return defaultValue;
                if (value !== undefined) result = value;
                if (other !==
                    undefined) {
                    if (result === undefined) return other;
                    if (typeof value == "string" || typeof other == "string") {
                        value = baseToString(value);
                        other = baseToString(other)
                    } else {
                        value = baseToNumber(value);
                        other = baseToNumber(other)
                    }
                    result = operator(value, other)
                }
                return result
            }
        }

        function createOver(arrayFunc) {
            return flatRest(function(iteratees) {
                iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
                return baseRest(function(args) {
                    var thisArg = this;
                    return arrayFunc(iteratees, function(iteratee) {
                        return apply(iteratee, thisArg, args)
                    })
                })
            })
        }

        function createPadding(length, chars) {
            chars = chars === undefined ? " " : baseToString(chars);
            var charsLength = chars.length;
            if (charsLength < 2) return charsLength ? baseRepeat(chars, length) : chars;
            var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
            return hasUnicode(chars) ? castSlice(stringToArray(result), 0, length).join("") : result.slice(0, length)
        }

        function createPartial(func, bitmask, thisArg, partials) {
            var isBind = bitmask & WRAP_BIND_FLAG,
                Ctor = createCtor(func);

            function wrapper() {
                var argsIndex = -1,
                    argsLength =
                    arguments.length,
                    leftIndex = -1,
                    leftLength = partials.length,
                    args = Array(leftLength + argsLength),
                    fn = this && this !== root && this instanceof wrapper ? Ctor : func;
                while (++leftIndex < leftLength) args[leftIndex] = partials[leftIndex];
                while (argsLength--) args[leftIndex++] = arguments[++argsIndex];
                return apply(fn, isBind ? thisArg : this, args)
            }
            return wrapper
        }

        function createRange(fromRight) {
            return function(start, end, step) {
                if (step && typeof step != "number" && isIterateeCall(start, end, step)) end = step = undefined;
                start = toFinite(start);
                if (end ===
                    undefined) {
                    end = start;
                    start = 0
                } else end = toFinite(end);
                step = step === undefined ? start < end ? 1 : -1 : toFinite(step);
                return baseRange(start, end, step, fromRight)
            }
        }

        function createRelationalOperation(operator) {
            return function(value, other) {
                if (!(typeof value == "string" && typeof other == "string")) {
                    value = toNumber(value);
                    other = toNumber(other)
                }
                return operator(value, other)
            }
        }

        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
            var isCurry = bitmask & WRAP_CURRY_FLAG,
                newHolders = isCurry ?
                holders : undefined,
                newHoldersRight = isCurry ? undefined : holders,
                newPartials = isCurry ? partials : undefined,
                newPartialsRight = isCurry ? undefined : partials;
            bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
            bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
            if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
            var newData = [func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity];
            var result = wrapFunc.apply(undefined, newData);
            if (isLaziable(func)) setData(result,
                newData);
            result.placeholder = placeholder;
            return setWrapToString(result, func, bitmask)
        }

        function createRound(methodName) {
            var func = Math[methodName];
            return function(number, precision) {
                number = toNumber(number);
                precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
                if (precision && nativeIsFinite(number)) {
                    var pair = (toString(number) + "e").split("e"),
                        value = func(pair[0] + "e" + (+pair[1] + precision));
                    pair = (toString(value) + "e").split("e");
                    return +(pair[0] + "e" + (+pair[1] - precision))
                }
                return func(number)
            }
        }
        var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function(values) {
            return new Set(values)
        };

        function createToPairs(keysFunc) {
            return function(object) {
                var tag = getTag(object);
                if (tag == mapTag) return mapToArray(object);
                if (tag == setTag) return setToPairs(object);
                return baseToPairs(object, keysFunc(object))
            }
        }

        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
            var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
            if (!isBindKey && typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
            var length =
                partials ? partials.length : 0;
            if (!length) {
                bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
                partials = holders = undefined
            }
            ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
            arity = arity === undefined ? arity : toInteger(arity);
            length -= holders ? holders.length : 0;
            if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
                var partialsRight = partials,
                    holdersRight = holders;
                partials = holders = undefined
            }
            var data = isBindKey ? undefined : getData(func);
            var newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];
            if (data) mergeData(newData, data);
            func = newData[0];
            bitmask = newData[1];
            thisArg = newData[2];
            partials = newData[3];
            holders = newData[4];
            arity = newData[9] = newData[9] === undefined ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
            if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
            if (!bitmask || bitmask == WRAP_BIND_FLAG) var result = createBind(func, bitmask, thisArg);
            else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) result = createCurry(func, bitmask,
                arity);
            else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) result = createPartial(func, bitmask, thisArg, partials);
            else result = createHybrid.apply(undefined, newData);
            var setter = data ? baseSetData : setData;
            return setWrapToString(setter(result, newData), func, bitmask)
        }

        function customDefaultsAssignIn(objValue, srcValue, key, object) {
            if (objValue === undefined || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) return srcValue;
            return objValue
        }

        function customDefaultsMerge(objValue,
            srcValue, key, object, source, stack) {
            if (isObject(objValue) && isObject(srcValue)) {
                stack.set(srcValue, objValue);
                baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
                stack["delete"](srcValue)
            }
            return objValue
        }

        function customOmitClone(value) {
            return isPlainObject(value) ? undefined : value
        }

        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
                arrLength = array.length,
                othLength = other.length;
            if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
            var stacked = stack.get(array);
            if (stacked && stack.get(other)) return stacked == other;
            var index = -1,
                result = true,
                seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache : undefined;
            stack.set(array, other);
            stack.set(other, array);
            while (++index < arrLength) {
                var arrValue = array[index],
                    othValue = other[index];
                if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
                if (compared !== undefined) {
                    if (compared) continue;
                    result = false;
                    break
                }
                if (seen) {
                    if (!arraySome(other,
                            function(othValue, othIndex) {
                                if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex)
                            })) {
                        result = false;
                        break
                    }
                } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                    result = false;
                    break
                }
            }
            stack["delete"](array);
            stack["delete"](other);
            return result
        }

        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
            switch (tag) {
                case dataViewTag:
                    if (object.byteLength != other.byteLength || object.byteOffset !=
                        other.byteOffset) return false;
                    object = object.buffer;
                    other = other.buffer;
                case arrayBufferTag:
                    if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) return false;
                    return true;
                case boolTag:
                case dateTag:
                case numberTag:
                    return eq(+object, +other);
                case errorTag:
                    return object.name == other.name && object.message == other.message;
                case regexpTag:
                case stringTag:
                    return object == other + "";
                case mapTag:
                    var convert = mapToArray;
                case setTag:
                    var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
                    convert ||
                        (convert = setToArray);
                    if (object.size != other.size && !isPartial) return false;
                    var stacked = stack.get(object);
                    if (stacked) return stacked == other;
                    bitmask |= COMPARE_UNORDERED_FLAG;
                    stack.set(object, other);
                    var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
                    stack["delete"](object);
                    return result;
                case symbolTag:
                    if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other)
            }
            return false
        }

        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
            var isPartial =
                bitmask & COMPARE_PARTIAL_FLAG,
                objProps = getAllKeys(object),
                objLength = objProps.length,
                othProps = getAllKeys(other),
                othLength = othProps.length;
            if (objLength != othLength && !isPartial) return false;
            var index = objLength;
            while (index--) {
                var key = objProps[index];
                if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) return false
            }
            var stacked = stack.get(object);
            if (stacked && stack.get(other)) return stacked == other;
            var result = true;
            stack.set(object, other);
            stack.set(other, object);
            var skipCtor = isPartial;
            while (++index < objLength) {
                key =
                    objProps[index];
                var objValue = object[key],
                    othValue = other[key];
                if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
                if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
                    result = false;
                    break
                }
                skipCtor || (skipCtor = key == "constructor")
            }
            if (result && !skipCtor) {
                var objCtor = object.constructor,
                    othCtor = other.constructor;
                if (objCtor != othCtor && ("constructor" in object && "constructor" in
                        other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) result = false
            }
            stack["delete"](object);
            stack["delete"](other);
            return result
        }

        function flatRest(func) {
            return setToString(overRest(func, undefined, flatten), func + "")
        }

        function getAllKeys(object) {
            return baseGetAllKeys(object, keys, getSymbols)
        }

        function getAllKeysIn(object) {
            return baseGetAllKeys(object, keysIn, getSymbolsIn)
        }
        var getData = !metaMap ? noop : function(func) {
            return metaMap.get(func)
        };

        function getFuncName(func) {
            var result = func.name + "",
                array = realNames[result],
                length = hasOwnProperty.call(realNames, result) ? array.length : 0;
            while (length--) {
                var data = array[length],
                    otherFunc = data.func;
                if (otherFunc == null || otherFunc == func) return data.name
            }
            return result
        }

        function getHolder(func) {
            var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
            return object.placeholder
        }

        function getIteratee() {
            var result = lodash.iteratee || iteratee;
            result = result === iteratee ? baseIteratee : result;
            return arguments.length ?
                result(arguments[0], arguments[1]) : result
        }

        function getMapData(map, key) {
            var data = map.__data__;
            return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map
        }

        function getMatchData(object) {
            var result = keys(object),
                length = result.length;
            while (length--) {
                var key = result[length],
                    value = object[key];
                result[length] = [key, value, isStrictComparable(value)]
            }
            return result
        }

        function getNative(object, key) {
            var value = getValue(object, key);
            return baseIsNative(value) ? value : undefined
        }

        function getRawTag(value) {
            var isOwn =
                hasOwnProperty.call(value, symToStringTag),
                tag = value[symToStringTag];
            try {
                value[symToStringTag] = undefined;
                var unmasked = true
            } catch (e) {}
            var result = nativeObjectToString.call(value);
            if (unmasked)
                if (isOwn) value[symToStringTag] = tag;
                else delete value[symToStringTag];
            return result
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
            if (object == null) return [];
            object = Object(object);
            return arrayFilter(nativeGetSymbols(object), function(symbol) {
                return propertyIsEnumerable.call(object, symbol)
            })
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
            var result = [];
            while (object) {
                arrayPush(result, getSymbols(object));
                object = getPrototype(object)
            }
            return result
        };
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set) != setTag || WeakMap && getTag(new WeakMap) != weakMapTag) getTag = function(value) {
            var result = baseGetTag(value),
                Ctor = result == objectTag ? value.constructor : undefined,
                ctorString =
                Ctor ? toSource(Ctor) : "";
            if (ctorString) switch (ctorString) {
                case dataViewCtorString:
                    return dataViewTag;
                case mapCtorString:
                    return mapTag;
                case promiseCtorString:
                    return promiseTag;
                case setCtorString:
                    return setTag;
                case weakMapCtorString:
                    return weakMapTag
            }
            return result
        };

        function getView(start, end, transforms) {
            var index = -1,
                length = transforms.length;
            while (++index < length) {
                var data = transforms[index],
                    size = data.size;
                switch (data.type) {
                    case "drop":
                        start += size;
                        break;
                    case "dropRight":
                        end -= size;
                        break;
                    case "take":
                        end = nativeMin(end,
                            start + size);
                        break;
                    case "takeRight":
                        start = nativeMax(start, end - size);
                        break
                }
            }
            return {
                "start": start,
                "end": end
            }
        }

        function getWrapDetails(source) {
            var match = source.match(reWrapDetails);
            return match ? match[1].split(reSplitDetails) : []
        }

        function hasPath(object, path, hasFunc) {
            path = castPath(path, object);
            var index = -1,
                length = path.length,
                result = false;
            while (++index < length) {
                var key = toKey(path[index]);
                if (!(result = object != null && hasFunc(object, key))) break;
                object = object[key]
            }
            if (result || ++index != length) return result;
            length =
                object == null ? 0 : object.length;
            return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object))
        }

        function initCloneArray(array) {
            var length = array.length,
                result = new array.constructor(length);
            if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
                result.index = array.index;
                result.input = array.input
            }
            return result
        }

        function initCloneObject(object) {
            return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {}
        }

        function initCloneByTag(object,
            tag, isDeep) {
            var Ctor = object.constructor;
            switch (tag) {
                case arrayBufferTag:
                    return cloneArrayBuffer(object);
                case boolTag:
                case dateTag:
                    return new Ctor(+object);
                case dataViewTag:
                    return cloneDataView(object, isDeep);
                case float32Tag:
                case float64Tag:
                case int8Tag:
                case int16Tag:
                case int32Tag:
                case uint8Tag:
                case uint8ClampedTag:
                case uint16Tag:
                case uint32Tag:
                    return cloneTypedArray(object, isDeep);
                case mapTag:
                    return new Ctor;
                case numberTag:
                case stringTag:
                    return new Ctor(object);
                case regexpTag:
                    return cloneRegExp(object);
                case setTag:
                    return new Ctor;
                case symbolTag:
                    return cloneSymbol(object)
            }
        }

        function insertWrapDetails(source, details) {
            var length = details.length;
            if (!length) return source;
            var lastIndex = length - 1;
            details[lastIndex] = (length > 1 ? "\x26 " : "") + details[lastIndex];
            details = details.join(length > 2 ? ", " : " ");
            return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n")
        }

        function isFlattenable(value) {
            return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol])
        }

        function isIndex(value,
            length) {
            var type = typeof value;
            length = length == null ? MAX_SAFE_INTEGER : length;
            return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length)
        }

        function isIterateeCall(value, index, object) {
            if (!isObject(object)) return false;
            var type = typeof index;
            if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) return eq(object[index], value);
            return false
        }

        function isKey(value, object) {
            if (isArray(value)) return false;
            var type = typeof value;
            if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) return true;
            return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object)
        }

        function isKeyable(value) {
            var type = typeof value;
            return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null
        }

        function isLaziable(func) {
            var funcName = getFuncName(func),
                other = lodash[funcName];
            if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) return false;
            if (func === other) return true;
            var data = getData(other);
            return !!data && func === data[0]
        }

        function isMasked(func) {
            return !!maskSrcKey && maskSrcKey in func
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;

        function isPrototype(value) {
            var Ctor = value && value.constructor,
                proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
            return value === proto
        }

        function isStrictComparable(value) {
            return value === value && !isObject(value)
        }

        function matchesStrictComparable(key, srcValue) {
            return function(object) {
                if (object == null) return false;
                return object[key] === srcValue && (srcValue !== undefined || key in Object(object))
            }
        }

        function memoizeCapped(func) {
            var result = memoize(func, function(key) {
                if (cache.size === MAX_MEMOIZE_SIZE) cache.clear();
                return key
            });
            var cache = result.cache;
            return result
        }

        function mergeData(data, source) {
            var bitmask = data[1],
                srcBitmask = source[1],
                newBitmask = bitmask | srcBitmask,
                isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
            var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG &&
                bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
            if (!(isCommon || isCombo)) return data;
            if (srcBitmask & WRAP_BIND_FLAG) {
                data[2] = source[2];
                newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG
            }
            var value = source[3];
            if (value) {
                var partials = data[3];
                data[3] = partials ? composeArgs(partials, value, source[4]) : value;
                data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4]
            }
            value = source[5];
            if (value) {
                partials =
                    data[5];
                data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
                data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6]
            }
            value = source[7];
            if (value) data[7] = value;
            if (srcBitmask & WRAP_ARY_FLAG) data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
            if (data[9] == null) data[9] = source[9];
            data[0] = source[0];
            data[1] = newBitmask;
            return data
        }

        function nativeKeysIn(object) {
            var result = [];
            if (object != null)
                for (var key in Object(object)) result.push(key);
            return result
        }

        function objectToString(value) {
            return nativeObjectToString.call(value)
        }

        function overRest(func, start, transform) {
            start = nativeMax(start === undefined ? func.length - 1 : start, 0);
            return function() {
                var args = arguments,
                    index = -1,
                    length = nativeMax(args.length - start, 0),
                    array = Array(length);
                while (++index < length) array[index] = args[start + index];
                index = -1;
                var otherArgs = Array(start + 1);
                while (++index < start) otherArgs[index] = args[index];
                otherArgs[start] = transform(array);
                return apply(func, this, otherArgs)
            }
        }

        function parent(object, path) {
            return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1))
        }

        function reorder(array, indexes) {
            var arrLength = array.length,
                length = nativeMin(indexes.length, arrLength),
                oldArray = copyArray(array);
            while (length--) {
                var index = indexes[length];
                array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined
            }
            return array
        }

        function safeGet(object, key) {
            if (key === "constructor" && typeof object[key] === "function") return;
            if (key == "__proto__") return;
            return object[key]
        }
        var setData = shortOut(baseSetData);
        var setTimeout = ctxSetTimeout || function(func, wait) {
            return root.setTimeout(func, wait)
        };
        var setToString = shortOut(baseSetToString);

        function setWrapToString(wrapper, reference, bitmask) {
            var source = reference + "";
            return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)))
        }

        function shortOut(func) {
            var count = 0,
                lastCalled = 0;
            return function() {
                var stamp = nativeNow(),
                    remaining = HOT_SPAN - (stamp - lastCalled);
                lastCalled = stamp;
                if (remaining > 0) {
                    if (++count >= HOT_COUNT) return arguments[0]
                } else count = 0;
                return func.apply(undefined, arguments)
            }
        }

        function shuffleSelf(array,
            size) {
            var index = -1,
                length = array.length,
                lastIndex = length - 1;
            size = size === undefined ? length : size;
            while (++index < size) {
                var rand = baseRandom(index, lastIndex),
                    value = array[rand];
                array[rand] = array[index];
                array[index] = value
            }
            array.length = size;
            return array
        }
        var stringToPath = memoizeCapped(function(string) {
            var result = [];
            if (string.charCodeAt(0) === 46) result.push("");
            string.replace(rePropName, function(match, number, quote, subString) {
                result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match)
            });
            return result
        });

        function toKey(value) {
            if (typeof value == "string" || isSymbol(value)) return value;
            var result = value + "";
            return result == "0" && 1 / value == -INFINITY ? "-0" : result
        }

        function toSource(func) {
            if (func != null) {
                try {
                    return funcToString.call(func)
                } catch (e) {}
                try {
                    return func + ""
                } catch (e) {}
            }
            return ""
        }

        function updateWrapDetails(details, bitmask) {
            arrayEach(wrapFlags, function(pair) {
                var value = "_." + pair[0];
                if (bitmask & pair[1] && !arrayIncludes(details, value)) details.push(value)
            });
            return details.sort()
        }

        function wrapperClone(wrapper) {
            if (wrapper instanceof LazyWrapper) return wrapper.clone();
            var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
            result.__actions__ = copyArray(wrapper.__actions__);
            result.__index__ = wrapper.__index__;
            result.__values__ = wrapper.__values__;
            return result
        }

        function chunk(array, size, guard) {
            if (guard ? isIterateeCall(array, size, guard) : size === undefined) size = 1;
            else size = nativeMax(toInteger(size), 0);
            var length = array == null ? 0 : array.length;
            if (!length || size < 1) return [];
            var index = 0,
                resIndex = 0,
                result = Array(nativeCeil(length / size));
            while (index < length) result[resIndex++] = baseSlice(array, index, index += size);
            return result
        }

        function compact(array) {
            var index = -1,
                length = array == null ? 0 : array.length,
                resIndex = 0,
                result = [];
            while (++index < length) {
                var value = array[index];
                if (value) result[resIndex++] = value
            }
            return result
        }

        function concat() {
            var length = arguments.length;
            if (!length) return [];
            var args = Array(length - 1),
                array = arguments[0],
                index = length;
            while (index--) args[index - 1] = arguments[index];
            return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args,
                1))
        }
        var difference = baseRest(function(array, values) {
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : []
        });
        var differenceBy = baseRest(function(array, values) {
            var iteratee = last(values);
            if (isArrayLikeObject(iteratee)) iteratee = undefined;
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2)) : []
        });
        var differenceWith = baseRest(function(array, values) {
            var comparator = last(values);
            if (isArrayLikeObject(comparator)) comparator =
                undefined;
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator) : []
        });

        function drop(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) return [];
            n = guard || n === undefined ? 1 : toInteger(n);
            return baseSlice(array, n < 0 ? 0 : n, length)
        }

        function dropRight(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) return [];
            n = guard || n === undefined ? 1 : toInteger(n);
            n = length - n;
            return baseSlice(array, 0, n < 0 ? 0 : n)
        }

        function dropRightWhile(array,
            predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : []
        }

        function dropWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : []
        }

        function fill(array, value, start, end) {
            var length = array == null ? 0 : array.length;
            if (!length) return [];
            if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
                start = 0;
                end = length
            }
            return baseFill(array, value, start, end)
        }

        function findIndex(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) return -1;
            var index = fromIndex == null ? 0 : toInteger(fromIndex);
            if (index < 0) index = nativeMax(length + index, 0);
            return baseFindIndex(array, getIteratee(predicate, 3), index)
        }

        function findLastIndex(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) return -1;
            var index = length - 1;
            if (fromIndex !== undefined) {
                index = toInteger(fromIndex);
                index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1)
            }
            return baseFindIndex(array, getIteratee(predicate, 3), index, true)
        }

        function flatten(array) {
            var length =
                array == null ? 0 : array.length;
            return length ? baseFlatten(array, 1) : []
        }

        function flattenDeep(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseFlatten(array, INFINITY) : []
        }

        function flattenDepth(array, depth) {
            var length = array == null ? 0 : array.length;
            if (!length) return [];
            depth = depth === undefined ? 1 : toInteger(depth);
            return baseFlatten(array, depth)
        }

        function fromPairs(pairs) {
            var index = -1,
                length = pairs == null ? 0 : pairs.length,
                result = {};
            while (++index < length) {
                var pair = pairs[index];
                result[pair[0]] = pair[1]
            }
            return result
        }

        function head(array) {
            return array && array.length ? array[0] : undefined
        }

        function indexOf(array, value, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) return -1;
            var index = fromIndex == null ? 0 : toInteger(fromIndex);
            if (index < 0) index = nativeMax(length + index, 0);
            return baseIndexOf(array, value, index)
        }

        function initial(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 0, -1) : []
        }
        var intersection = baseRest(function(arrays) {
            var mapped = arrayMap(arrays, castArrayLikeObject);
            return mapped.length &&
                mapped[0] === arrays[0] ? baseIntersection(mapped) : []
        });
        var intersectionBy = baseRest(function(arrays) {
            var iteratee = last(arrays),
                mapped = arrayMap(arrays, castArrayLikeObject);
            if (iteratee === last(mapped)) iteratee = undefined;
            else mapped.pop();
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee, 2)) : []
        });
        var intersectionWith = baseRest(function(arrays) {
            var comparator = last(arrays),
                mapped = arrayMap(arrays, castArrayLikeObject);
            comparator = typeof comparator == "function" ? comparator : undefined;
            if (comparator) mapped.pop();
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined, comparator) : []
        });

        function join(array, separator) {
            return array == null ? "" : nativeJoin.call(array, separator)
        }

        function last(array) {
            var length = array == null ? 0 : array.length;
            return length ? array[length - 1] : undefined
        }

        function lastIndexOf(array, value, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) return -1;
            var index = length;
            if (fromIndex !== undefined) {
                index = toInteger(fromIndex);
                index = index < 0 ? nativeMax(length +
                    index, 0) : nativeMin(index, length - 1)
            }
            return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true)
        }

        function nth(array, n) {
            return array && array.length ? baseNth(array, toInteger(n)) : undefined
        }
        var pull = baseRest(pullAll);

        function pullAll(array, values) {
            return array && array.length && values && values.length ? basePullAll(array, values) : array
        }

        function pullAllBy(array, values, iteratee) {
            return array && array.length && values && values.length ? basePullAll(array, values, getIteratee(iteratee, 2)) :
                array
        }

        function pullAllWith(array, values, comparator) {
            return array && array.length && values && values.length ? basePullAll(array, values, undefined, comparator) : array
        }
        var pullAt = flatRest(function(array, indexes) {
            var length = array == null ? 0 : array.length,
                result = baseAt(array, indexes);
            basePullAt(array, arrayMap(indexes, function(index) {
                return isIndex(index, length) ? +index : index
            }).sort(compareAscending));
            return result
        });

        function remove(array, predicate) {
            var result = [];
            if (!(array && array.length)) return result;
            var index = -1,
                indexes = [],
                length = array.length;
            predicate = getIteratee(predicate, 3);
            while (++index < length) {
                var value = array[index];
                if (predicate(value, index, array)) {
                    result.push(value);
                    indexes.push(index)
                }
            }
            basePullAt(array, indexes);
            return result
        }

        function reverse(array) {
            return array == null ? array : nativeReverse.call(array)
        }

        function slice(array, start, end) {
            var length = array == null ? 0 : array.length;
            if (!length) return [];
            if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
                start = 0;
                end = length
            } else {
                start = start == null ? 0 : toInteger(start);
                end = end === undefined ? length : toInteger(end)
            }
            return baseSlice(array, start, end)
        }

        function sortedIndex(array, value) {
            return baseSortedIndex(array, value)
        }

        function sortedIndexBy(array, value, iteratee) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee, 2))
        }

        function sortedIndexOf(array, value) {
            var length = array == null ? 0 : array.length;
            if (length) {
                var index = baseSortedIndex(array, value);
                if (index < length && eq(array[index], value)) return index
            }
            return -1
        }

        function sortedLastIndex(array, value) {
            return baseSortedIndex(array,
                value, true)
        }

        function sortedLastIndexBy(array, value, iteratee) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true)
        }

        function sortedLastIndexOf(array, value) {
            var length = array == null ? 0 : array.length;
            if (length) {
                var index = baseSortedIndex(array, value, true) - 1;
                if (eq(array[index], value)) return index
            }
            return -1
        }

        function sortedUniq(array) {
            return array && array.length ? baseSortedUniq(array) : []
        }

        function sortedUniqBy(array, iteratee) {
            return array && array.length ? baseSortedUniq(array, getIteratee(iteratee, 2)) : []
        }

        function tail(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 1, length) : []
        }

        function take(array, n, guard) {
            if (!(array && array.length)) return [];
            n = guard || n === undefined ? 1 : toInteger(n);
            return baseSlice(array, 0, n < 0 ? 0 : n)
        }

        function takeRight(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) return [];
            n = guard || n === undefined ? 1 : toInteger(n);
            n = length - n;
            return baseSlice(array, n < 0 ? 0 : n, length)
        }

        function takeRightWhile(array, predicate) {
            return array && array.length ? baseWhile(array,
                getIteratee(predicate, 3), false, true) : []
        }

        function takeWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : []
        }
        var union = baseRest(function(arrays) {
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true))
        });
        var unionBy = baseRest(function(arrays) {
            var iteratee = last(arrays);
            if (isArrayLikeObject(iteratee)) iteratee = undefined;
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
        });
        var unionWith = baseRest(function(arrays) {
            var comparator =
                last(arrays);
            comparator = typeof comparator == "function" ? comparator : undefined;
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator)
        });

        function uniq(array) {
            return array && array.length ? baseUniq(array) : []
        }

        function uniqBy(array, iteratee) {
            return array && array.length ? baseUniq(array, getIteratee(iteratee, 2)) : []
        }

        function uniqWith(array, comparator) {
            comparator = typeof comparator == "function" ? comparator : undefined;
            return array && array.length ? baseUniq(array, undefined, comparator) : []
        }

        function unzip(array) {
            if (!(array &&
                    array.length)) return [];
            var length = 0;
            array = arrayFilter(array, function(group) {
                if (isArrayLikeObject(group)) {
                    length = nativeMax(group.length, length);
                    return true
                }
            });
            return baseTimes(length, function(index) {
                return arrayMap(array, baseProperty(index))
            })
        }

        function unzipWith(array, iteratee) {
            if (!(array && array.length)) return [];
            var result = unzip(array);
            if (iteratee == null) return result;
            return arrayMap(result, function(group) {
                return apply(iteratee, undefined, group)
            })
        }
        var without = baseRest(function(array, values) {
            return isArrayLikeObject(array) ?
                baseDifference(array, values) : []
        });
        var xor = baseRest(function(arrays) {
            return baseXor(arrayFilter(arrays, isArrayLikeObject))
        });
        var xorBy = baseRest(function(arrays) {
            var iteratee = last(arrays);
            if (isArrayLikeObject(iteratee)) iteratee = undefined;
            return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2))
        });
        var xorWith = baseRest(function(arrays) {
            var comparator = last(arrays);
            comparator = typeof comparator == "function" ? comparator : undefined;
            return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined,
                comparator)
        });
        var zip = baseRest(unzip);

        function zipObject(props, values) {
            return baseZipObject(props || [], values || [], assignValue)
        }

        function zipObjectDeep(props, values) {
            return baseZipObject(props || [], values || [], baseSet)
        }
        var zipWith = baseRest(function(arrays) {
            var length = arrays.length,
                iteratee = length > 1 ? arrays[length - 1] : undefined;
            iteratee = typeof iteratee == "function" ? (arrays.pop(), iteratee) : undefined;
            return unzipWith(arrays, iteratee)
        });

        function chain(value) {
            var result = lodash(value);
            result.__chain__ = true;
            return result
        }

        function tap(value, interceptor) {
            interceptor(value);
            return value
        }

        function thru(value, interceptor) {
            return interceptor(value)
        }
        var wrapperAt = flatRest(function(paths) {
            var length = paths.length,
                start = length ? paths[0] : 0,
                value = this.__wrapped__,
                interceptor = function(object) {
                    return baseAt(object, paths)
                };
            if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) return this.thru(interceptor);
            value = value.slice(start, +start + (length ? 1 : 0));
            value.__actions__.push({
                "func": thru,
                "args": [interceptor],
                "thisArg": undefined
            });
            return (new LodashWrapper(value, this.__chain__)).thru(function(array) {
                if (length && !array.length) array.push(undefined);
                return array
            })
        });

        function wrapperChain() {
            return chain(this)
        }

        function wrapperCommit() {
            return new LodashWrapper(this.value(), this.__chain__)
        }

        function wrapperNext() {
            if (this.__values__ === undefined) this.__values__ = toArray(this.value());
            var done = this.__index__ >= this.__values__.length,
                value = done ? undefined : this.__values__[this.__index__++];
            return {
                "done": done,
                "value": value
            }
        }

        function wrapperToIterator() {
            return this
        }

        function wrapperPlant(value) {
            var result, parent = this;
            while (parent instanceof baseLodash) {
                var clone = wrapperClone(parent);
                clone.__index__ = 0;
                clone.__values__ = undefined;
                if (result) previous.__wrapped__ = clone;
                else result = clone;
                var previous = clone;
                parent = parent.__wrapped__
            }
            previous.__wrapped__ = value;
            return result
        }

        function wrapperReverse() {
            var value = this.__wrapped__;
            if (value instanceof LazyWrapper) {
                var wrapped = value;
                if (this.__actions__.length) wrapped = new LazyWrapper(this);
                wrapped = wrapped.reverse();
                wrapped.__actions__.push({
                    "func": thru,
                    "args": [reverse],
                    "thisArg": undefined
                });
                return new LodashWrapper(wrapped, this.__chain__)
            }
            return this.thru(reverse)
        }

        function wrapperValue() {
            return baseWrapperValue(this.__wrapped__, this.__actions__)
        }
        var countBy = createAggregator(function(result, value, key) {
            if (hasOwnProperty.call(result, key)) ++result[key];
            else baseAssignValue(result, key, 1)
        });

        function every(collection, predicate, guard) {
            var func = isArray(collection) ? arrayEvery : baseEvery;
            if (guard &&
                isIterateeCall(collection, predicate, guard)) predicate = undefined;
            return func(collection, getIteratee(predicate, 3))
        }

        function filter(collection, predicate) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            return func(collection, getIteratee(predicate, 3))
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);

        function flatMap(collection, iteratee) {
            return baseFlatten(map(collection, iteratee), 1)
        }

        function flatMapDeep(collection, iteratee) {
            return baseFlatten(map(collection, iteratee), INFINITY)
        }

        function flatMapDepth(collection, iteratee, depth) {
            depth = depth === undefined ? 1 : toInteger(depth);
            return baseFlatten(map(collection, iteratee), depth)
        }

        function forEach(collection, iteratee) {
            var func = isArray(collection) ? arrayEach : baseEach;
            return func(collection, getIteratee(iteratee, 3))
        }

        function forEachRight(collection, iteratee) {
            var func = isArray(collection) ? arrayEachRight : baseEachRight;
            return func(collection, getIteratee(iteratee, 3))
        }
        var groupBy = createAggregator(function(result, value, key) {
            if (hasOwnProperty.call(result,
                    key)) result[key].push(value);
            else baseAssignValue(result, key, [value])
        });

        function includes(collection, value, fromIndex, guard) {
            collection = isArrayLike(collection) ? collection : values(collection);
            fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
            var length = collection.length;
            if (fromIndex < 0) fromIndex = nativeMax(length + fromIndex, 0);
            return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1
        }
        var invokeMap = baseRest(function(collection,
            path, args) {
            var index = -1,
                isFunc = typeof path == "function",
                result = isArrayLike(collection) ? Array(collection.length) : [];
            baseEach(collection, function(value) {
                result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args)
            });
            return result
        });
        var keyBy = createAggregator(function(result, value, key) {
            baseAssignValue(result, key, value)
        });

        function map(collection, iteratee) {
            var func = isArray(collection) ? arrayMap : baseMap;
            return func(collection, getIteratee(iteratee, 3))
        }

        function orderBy(collection, iteratees, orders,
            guard) {
            if (collection == null) return [];
            if (!isArray(iteratees)) iteratees = iteratees == null ? [] : [iteratees];
            orders = guard ? undefined : orders;
            if (!isArray(orders)) orders = orders == null ? [] : [orders];
            return baseOrderBy(collection, iteratees, orders)
        }
        var partition = createAggregator(function(result, value, key) {
            result[key ? 0 : 1].push(value)
        }, function() {
            return [
                [],
                []
            ]
        });

        function reduce(collection, iteratee, accumulator) {
            var func = isArray(collection) ? arrayReduce : baseReduce,
                initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee,
                4), accumulator, initAccum, baseEach)
        }

        function reduceRight(collection, iteratee, accumulator) {
            var func = isArray(collection) ? arrayReduceRight : baseReduce,
                initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight)
        }

        function reject(collection, predicate) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            return func(collection, negate(getIteratee(predicate, 3)))
        }

        function sample(collection) {
            var func = isArray(collection) ? arraySample : baseSample;
            return func(collection)
        }

        function sampleSize(collection, n, guard) {
            if (guard ? isIterateeCall(collection, n, guard) : n === undefined) n = 1;
            else n = toInteger(n);
            var func = isArray(collection) ? arraySampleSize : baseSampleSize;
            return func(collection, n)
        }

        function shuffle(collection) {
            var func = isArray(collection) ? arrayShuffle : baseShuffle;
            return func(collection)
        }

        function size(collection) {
            if (collection == null) return 0;
            if (isArrayLike(collection)) return isString(collection) ? stringSize(collection) : collection.length;
            var tag = getTag(collection);
            if (tag ==
                mapTag || tag == setTag) return collection.size;
            return baseKeys(collection).length
        }

        function some(collection, predicate, guard) {
            var func = isArray(collection) ? arraySome : baseSome;
            if (guard && isIterateeCall(collection, predicate, guard)) predicate = undefined;
            return func(collection, getIteratee(predicate, 3))
        }
        var sortBy = baseRest(function(collection, iteratees) {
            if (collection == null) return [];
            var length = iteratees.length;
            if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) iteratees = [];
            else if (length > 2 && isIterateeCall(iteratees[0],
                    iteratees[1], iteratees[2])) iteratees = [iteratees[0]];
            return baseOrderBy(collection, baseFlatten(iteratees, 1), [])
        });
        var now = ctxNow || function() {
            return root.Date.now()
        };

        function after(n, func) {
            if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
            n = toInteger(n);
            return function() {
                if (--n < 1) return func.apply(this, arguments)
            }
        }

        function ary(func, n, guard) {
            n = guard ? undefined : n;
            n = func && n == null ? func.length : n;
            return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n)
        }

        function before(n,
            func) {
            var result;
            if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
            n = toInteger(n);
            return function() {
                if (--n > 0) result = func.apply(this, arguments);
                if (n <= 1) func = undefined;
                return result
            }
        }
        var bind = baseRest(function(func, thisArg, partials) {
            var bitmask = WRAP_BIND_FLAG;
            if (partials.length) {
                var holders = replaceHolders(partials, getHolder(bind));
                bitmask |= WRAP_PARTIAL_FLAG
            }
            return createWrap(func, bitmask, thisArg, partials, holders)
        });
        var bindKey = baseRest(function(object, key, partials) {
            var bitmask = WRAP_BIND_FLAG |
                WRAP_BIND_KEY_FLAG;
            if (partials.length) {
                var holders = replaceHolders(partials, getHolder(bindKey));
                bitmask |= WRAP_PARTIAL_FLAG
            }
            return createWrap(key, bitmask, object, partials, holders)
        });

        function curry(func, arity, guard) {
            arity = guard ? undefined : arity;
            var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
            result.placeholder = curry.placeholder;
            return result
        }

        function curryRight(func, arity, guard) {
            arity = guard ? undefined : arity;
            var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG,
                undefined, undefined, undefined, undefined, undefined, arity);
            result.placeholder = curryRight.placeholder;
            return result
        }

        function debounce(func, wait, options) {
            var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0,
                leading = false,
                maxing = false,
                trailing = true;
            if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
            wait = toNumber(wait) || 0;
            if (isObject(options)) {
                leading = !!options.leading;
                maxing = "maxWait" in options;
                maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
                trailing =
                    "trailing" in options ? !!options.trailing : trailing
            }

            function invokeFunc(time) {
                var args = lastArgs,
                    thisArg = lastThis;
                lastArgs = lastThis = undefined;
                lastInvokeTime = time;
                result = func.apply(thisArg, args);
                return result
            }

            function leadingEdge(time) {
                lastInvokeTime = time;
                timerId = setTimeout(timerExpired, wait);
                return leading ? invokeFunc(time) : result
            }

            function remainingWait(time) {
                var timeSinceLastCall = time - lastCallTime,
                    timeSinceLastInvoke = time - lastInvokeTime,
                    timeWaiting = wait - timeSinceLastCall;
                return maxing ? nativeMin(timeWaiting,
                    maxWait - timeSinceLastInvoke) : timeWaiting
            }

            function shouldInvoke(time) {
                var timeSinceLastCall = time - lastCallTime,
                    timeSinceLastInvoke = time - lastInvokeTime;
                return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait
            }

            function timerExpired() {
                var time = now();
                if (shouldInvoke(time)) return trailingEdge(time);
                timerId = setTimeout(timerExpired, remainingWait(time))
            }

            function trailingEdge(time) {
                timerId = undefined;
                if (trailing && lastArgs) return invokeFunc(time);
                lastArgs =
                    lastThis = undefined;
                return result
            }

            function cancel() {
                if (timerId !== undefined) clearTimeout(timerId);
                lastInvokeTime = 0;
                lastArgs = lastCallTime = lastThis = timerId = undefined
            }

            function flush() {
                return timerId === undefined ? result : trailingEdge(now())
            }

            function debounced() {
                var time = now(),
                    isInvoking = shouldInvoke(time);
                lastArgs = arguments;
                lastThis = this;
                lastCallTime = time;
                if (isInvoking) {
                    if (timerId === undefined) return leadingEdge(lastCallTime);
                    if (maxing) {
                        clearTimeout(timerId);
                        timerId = setTimeout(timerExpired, wait);
                        return invokeFunc(lastCallTime)
                    }
                }
                if (timerId ===
                    undefined) timerId = setTimeout(timerExpired, wait);
                return result
            }
            debounced.cancel = cancel;
            debounced.flush = flush;
            return debounced
        }
        var defer = baseRest(function(func, args) {
            return baseDelay(func, 1, args)
        });
        var delay = baseRest(function(func, wait, args) {
            return baseDelay(func, toNumber(wait) || 0, args)
        });

        function flip(func) {
            return createWrap(func, WRAP_FLIP_FLAG)
        }

        function memoize(func, resolver) {
            if (typeof func != "function" || resolver != null && typeof resolver != "function") throw new TypeError(FUNC_ERROR_TEXT);
            var memoized =
                function() {
                    var args = arguments,
                        key = resolver ? resolver.apply(this, args) : args[0],
                        cache = memoized.cache;
                    if (cache.has(key)) return cache.get(key);
                    var result = func.apply(this, args);
                    memoized.cache = cache.set(key, result) || cache;
                    return result
                };
            memoized.cache = new(memoize.Cache || MapCache);
            return memoized
        }
        memoize.Cache = MapCache;

        function negate(predicate) {
            if (typeof predicate != "function") throw new TypeError(FUNC_ERROR_TEXT);
            return function() {
                var args = arguments;
                switch (args.length) {
                    case 0:
                        return !predicate.call(this);
                    case 1:
                        return !predicate.call(this, args[0]);
                    case 2:
                        return !predicate.call(this, args[0], args[1]);
                    case 3:
                        return !predicate.call(this, args[0], args[1], args[2])
                }
                return !predicate.apply(this, args)
            }
        }

        function once(func) {
            return before(2, func)
        }
        var overArgs = castRest(function(func, transforms) {
            transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
            var funcsLength = transforms.length;
            return baseRest(function(args) {
                var index = -1,
                    length = nativeMin(args.length, funcsLength);
                while (++index < length) args[index] = transforms[index].call(this, args[index]);
                return apply(func, this, args)
            })
        });
        var partial = baseRest(function(func, partials) {
            var holders = replaceHolders(partials, getHolder(partial));
            return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders)
        });
        var partialRight = baseRest(function(func, partials) {
            var holders = replaceHolders(partials, getHolder(partialRight));
            return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials,
                holders)
        });
        var rearg = flatRest(function(func, indexes) {
            return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes)
        });

        function rest(func, start) {
            if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
            start = start === undefined ? start : toInteger(start);
            return baseRest(func, start)
        }

        function spread(func, start) {
            if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
            start = start == null ? 0 : nativeMax(toInteger(start), 0);
            return baseRest(function(args) {
                var array = args[start],
                    otherArgs =
                    castSlice(args, 0, start);
                if (array) arrayPush(otherArgs, array);
                return apply(func, this, otherArgs)
            })
        }

        function throttle(func, wait, options) {
            var leading = true,
                trailing = true;
            if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
            if (isObject(options)) {
                leading = "leading" in options ? !!options.leading : leading;
                trailing = "trailing" in options ? !!options.trailing : trailing
            }
            return debounce(func, wait, {
                "leading": leading,
                "maxWait": wait,
                "trailing": trailing
            })
        }

        function unary(func) {
            return ary(func, 1)
        }

        function wrap(value,
            wrapper) {
            return partial(castFunction(wrapper), value)
        }

        function castArray() {
            if (!arguments.length) return [];
            var value = arguments[0];
            return isArray(value) ? value : [value]
        }

        function clone(value) {
            return baseClone(value, CLONE_SYMBOLS_FLAG)
        }

        function cloneWith(value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined;
            return baseClone(value, CLONE_SYMBOLS_FLAG, customizer)
        }

        function cloneDeep(value) {
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG)
        }

        function cloneDeepWith(value, customizer) {
            customizer =
                typeof customizer == "function" ? customizer : undefined;
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer)
        }

        function conformsTo(object, source) {
            return source == null || baseConformsTo(object, source, keys(source))
        }

        function eq(value, other) {
            return value === other || value !== value && other !== other
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other) {
            return value >= other
        });
        var isArguments = baseIsArguments(function() {
            return arguments
        }()) ? baseIsArguments : function(value) {
            return isObjectLike(value) &&
                hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee")
        };
        var isArray = Array.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

        function isArrayLike(value) {
            return value != null && isLength(value.length) && !isFunction(value)
        }

        function isArrayLikeObject(value) {
            return isObjectLike(value) && isArrayLike(value)
        }

        function isBoolean(value) {
            return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag
        }
        var isBuffer = nativeIsBuffer ||
            stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

        function isElement(value) {
            return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value)
        }

        function isEmpty(value) {
            if (value == null) return true;
            if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) return !value.length;
            var tag = getTag(value);
            if (tag == mapTag || tag == setTag) return !value.size;
            if (isPrototype(value)) return !baseKeys(value).length;
            for (var key in value)
                if (hasOwnProperty.call(value, key)) return false;
            return true
        }

        function isEqual(value, other) {
            return baseIsEqual(value, other)
        }

        function isEqualWith(value, other, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined;
            var result = customizer ? customizer(value, other) : undefined;
            return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result
        }

        function isError(value) {
            if (!isObjectLike(value)) return false;
            var tag = baseGetTag(value);
            return tag == errorTag || tag == domExcTag ||
                typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value)
        }

        function isFinite(value) {
            return typeof value == "number" && nativeIsFinite(value)
        }

        function isFunction(value) {
            if (!isObject(value)) return false;
            var tag = baseGetTag(value);
            return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag
        }

        function isInteger(value) {
            return typeof value == "number" && value == toInteger(value)
        }

        function isLength(value) {
            return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER
        }

        function isObject(value) {
            var type =
                typeof value;
            return value != null && (type == "object" || type == "function")
        }

        function isObjectLike(value) {
            return value != null && typeof value == "object"
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

        function isMatch(object, source) {
            return object === source || baseIsMatch(object, source, getMatchData(source))
        }

        function isMatchWith(object, source, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined;
            return baseIsMatch(object, source, getMatchData(source), customizer)
        }

        function isNaN(value) {
            return isNumber(value) &&
                value != +value
        }

        function isNative(value) {
            if (isMaskable(value)) throw new Error(CORE_ERROR_TEXT);
            return baseIsNative(value)
        }

        function isNull(value) {
            return value === null
        }

        function isNil(value) {
            return value == null
        }

        function isNumber(value) {
            return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag
        }

        function isPlainObject(value) {
            if (!isObjectLike(value) || baseGetTag(value) != objectTag) return false;
            var proto = getPrototype(value);
            if (proto === null) return true;
            var Ctor = hasOwnProperty.call(proto, "constructor") &&
                proto.constructor;
            return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

        function isSafeInteger(value) {
            return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

        function isString(value) {
            return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag
        }

        function isSymbol(value) {
            return typeof value ==
                "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

        function isUndefined(value) {
            return value === undefined
        }

        function isWeakMap(value) {
            return isObjectLike(value) && getTag(value) == weakMapTag
        }

        function isWeakSet(value) {
            return isObjectLike(value) && baseGetTag(value) == weakSetTag
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other) {
            return value <= other
        });

        function toArray(value) {
            if (!value) return [];
            if (isArrayLike(value)) return isString(value) ? stringToArray(value) : copyArray(value);
            if (symIterator && value[symIterator]) return iteratorToArray(value[symIterator]());
            var tag = getTag(value),
                func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
            return func(value)
        }

        function toFinite(value) {
            if (!value) return value === 0 ? value : 0;
            value = toNumber(value);
            if (value === INFINITY || value === -INFINITY) {
                var sign = value < 0 ? -1 : 1;
                return sign * MAX_INTEGER
            }
            return value === value ? value : 0
        }

        function toInteger(value) {
            var result = toFinite(value),
                remainder = result % 1;
            return result === result ? remainder ? result - remainder : result : 0
        }

        function toLength(value) {
            return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0
        }

        function toNumber(value) {
            if (typeof value == "number") return value;
            if (isSymbol(value)) return NAN;
            if (isObject(value)) {
                var other = typeof value.valueOf == "function" ? value.valueOf() : value;
                value = isObject(other) ? other + "" : other
            }
            if (typeof value != "string") return value === 0 ? value : +value;
            value = value.replace(reTrim, "");
            var isBinary = reIsBinary.test(value);
            return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value
        }

        function toPlainObject(value) {
            return copyObject(value, keysIn(value))
        }

        function toSafeInteger(value) {
            return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0
        }

        function toString(value) {
            return value == null ? "" : baseToString(value)
        }
        var assign = createAssigner(function(object, source) {
            if (isPrototype(source) || isArrayLike(source)) {
                copyObject(source, keys(source),
                    object);
                return
            }
            for (var key in source)
                if (hasOwnProperty.call(source, key)) assignValue(object, key, source[key])
        });
        var assignIn = createAssigner(function(object, source) {
            copyObject(source, keysIn(source), object)
        });
        var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
            copyObject(source, keysIn(source), object, customizer)
        });
        var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
            copyObject(source, keys(source), object, customizer)
        });
        var at = flatRest(baseAt);

        function create(prototype,
            properties) {
            var result = baseCreate(prototype);
            return properties == null ? result : baseAssign(result, properties)
        }
        var defaults = baseRest(function(object, sources) {
            object = Object(object);
            var index = -1;
            var length = sources.length;
            var guard = length > 2 ? sources[2] : undefined;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) length = 1;
            while (++index < length) {
                var source = sources[index];
                var props = keysIn(source);
                var propsIndex = -1;
                var propsLength = props.length;
                while (++propsIndex < propsLength) {
                    var key = props[propsIndex];
                    var value =
                        object[key];
                    if (value === undefined || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) object[key] = source[key]
                }
            }
            return object
        });
        var defaultsDeep = baseRest(function(args) {
            args.push(undefined, customDefaultsMerge);
            return apply(mergeWith, undefined, args)
        });

        function findKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwn)
        }

        function findLastKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight)
        }

        function forIn(object, iteratee) {
            return object ==
                null ? object : baseFor(object, getIteratee(iteratee, 3), keysIn)
        }

        function forInRight(object, iteratee) {
            return object == null ? object : baseForRight(object, getIteratee(iteratee, 3), keysIn)
        }

        function forOwn(object, iteratee) {
            return object && baseForOwn(object, getIteratee(iteratee, 3))
        }

        function forOwnRight(object, iteratee) {
            return object && baseForOwnRight(object, getIteratee(iteratee, 3))
        }

        function functions(object) {
            return object == null ? [] : baseFunctions(object, keys(object))
        }

        function functionsIn(object) {
            return object == null ? [] : baseFunctions(object, keysIn(object))
        }

        function get(object, path, defaultValue) {
            var result = object == null ? undefined : baseGet(object, path);
            return result === undefined ? defaultValue : result
        }

        function has(object, path) {
            return object != null && hasPath(object, path, baseHas)
        }

        function hasIn(object, path) {
            return object != null && hasPath(object, path, baseHasIn)
        }
        var invert = createInverter(function(result, value, key) {
            if (value != null && typeof value.toString != "function") value = nativeObjectToString.call(value);
            result[value] = key
        }, constant(identity));
        var invertBy = createInverter(function(result, value, key) {
            if (value != null && typeof value.toString != "function") value = nativeObjectToString.call(value);
            if (hasOwnProperty.call(result, value)) result[value].push(key);
            else result[value] = [key]
        }, getIteratee);
        var invoke = baseRest(baseInvoke);

        function keys(object) {
            return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object)
        }

        function keysIn(object) {
            return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object)
        }

        function mapKeys(object, iteratee) {
            var result = {};
            iteratee = getIteratee(iteratee, 3);
            baseForOwn(object, function(value, key, object) {
                baseAssignValue(result, iteratee(value, key, object), value)
            });
            return result
        }

        function mapValues(object, iteratee) {
            var result = {};
            iteratee = getIteratee(iteratee, 3);
            baseForOwn(object, function(value, key, object) {
                baseAssignValue(result, key, iteratee(value, key, object))
            });
            return result
        }
        var merge = createAssigner(function(object, source, srcIndex) {
            baseMerge(object, source, srcIndex)
        });
        var mergeWith = createAssigner(function(object, source, srcIndex,
            customizer) {
            baseMerge(object, source, srcIndex, customizer)
        });
        var omit = flatRest(function(object, paths) {
            var result = {};
            if (object == null) return result;
            var isDeep = false;
            paths = arrayMap(paths, function(path) {
                path = castPath(path, object);
                isDeep || (isDeep = path.length > 1);
                return path
            });
            copyObject(object, getAllKeysIn(object), result);
            if (isDeep) result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
            var length = paths.length;
            while (length--) baseUnset(result, paths[length]);
            return result
        });

        function omitBy(object, predicate) {
            return pickBy(object, negate(getIteratee(predicate)))
        }
        var pick = flatRest(function(object, paths) {
            return object == null ? {} : basePick(object, paths)
        });

        function pickBy(object, predicate) {
            if (object == null) return {};
            var props = arrayMap(getAllKeysIn(object), function(prop) {
                return [prop]
            });
            predicate = getIteratee(predicate);
            return basePickBy(object, props, function(value, path) {
                return predicate(value, path[0])
            })
        }

        function result(object, path, defaultValue) {
            path = castPath(path, object);
            var index = -1,
                length = path.length;
            if (!length) {
                length = 1;
                object = undefined
            }
            while (++index < length) {
                var value = object == null ? undefined : object[toKey(path[index])];
                if (value === undefined) {
                    index = length;
                    value = defaultValue
                }
                object = isFunction(value) ? value.call(object) : value
            }
            return object
        }

        function set(object, path, value) {
            return object == null ? object : baseSet(object, path, value)
        }

        function setWith(object, path, value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined;
            return object == null ? object : baseSet(object, path,
                value, customizer)
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);

        function transform(object, iteratee, accumulator) {
            var isArr = isArray(object),
                isArrLike = isArr || isBuffer(object) || isTypedArray(object);
            iteratee = getIteratee(iteratee, 4);
            if (accumulator == null) {
                var Ctor = object && object.constructor;
                if (isArrLike) accumulator = isArr ? new Ctor : [];
                else if (isObject(object)) accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
                else accumulator = {}
            }(isArrLike ? arrayEach : baseForOwn)(object, function(value,
                index, object) {
                return iteratee(accumulator, value, index, object)
            });
            return accumulator
        }

        function unset(object, path) {
            return object == null ? true : baseUnset(object, path)
        }

        function update(object, path, updater) {
            return object == null ? object : baseUpdate(object, path, castFunction(updater))
        }

        function updateWith(object, path, updater, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined;
            return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer)
        }

        function values(object) {
            return object ==
                null ? [] : baseValues(object, keys(object))
        }

        function valuesIn(object) {
            return object == null ? [] : baseValues(object, keysIn(object))
        }

        function clamp(number, lower, upper) {
            if (upper === undefined) {
                upper = lower;
                lower = undefined
            }
            if (upper !== undefined) {
                upper = toNumber(upper);
                upper = upper === upper ? upper : 0
            }
            if (lower !== undefined) {
                lower = toNumber(lower);
                lower = lower === lower ? lower : 0
            }
            return baseClamp(toNumber(number), lower, upper)
        }

        function inRange(number, start, end) {
            start = toFinite(start);
            if (end === undefined) {
                end = start;
                start = 0
            } else end =
                toFinite(end);
            number = toNumber(number);
            return baseInRange(number, start, end)
        }

        function random(lower, upper, floating) {
            if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) upper = floating = undefined;
            if (floating === undefined)
                if (typeof upper == "boolean") {
                    floating = upper;
                    upper = undefined
                } else if (typeof lower == "boolean") {
                floating = lower;
                lower = undefined
            }
            if (lower === undefined && upper === undefined) {
                lower = 0;
                upper = 1
            } else {
                lower = toFinite(lower);
                if (upper === undefined) {
                    upper = lower;
                    lower = 0
                } else upper = toFinite(upper)
            }
            if (lower >
                upper) {
                var temp = lower;
                lower = upper;
                upper = temp
            }
            if (floating || lower % 1 || upper % 1) {
                var rand = nativeRandom();
                return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper)
            }
            return baseRandom(lower, upper)
        }
        var camelCase = createCompounder(function(result, word, index) {
            word = word.toLowerCase();
            return result + (index ? capitalize(word) : word)
        });

        function capitalize(string) {
            return upperFirst(toString(string).toLowerCase())
        }

        function deburr(string) {
            string = toString(string);
            return string && string.replace(reLatin,
                deburrLetter).replace(reComboMark, "")
        }

        function endsWith(string, target, position) {
            string = toString(string);
            target = baseToString(target);
            var length = string.length;
            position = position === undefined ? length : baseClamp(toInteger(position), 0, length);
            var end = position;
            position -= target.length;
            return position >= 0 && string.slice(position, end) == target
        }

        function escape(string) {
            string = toString(string);
            return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string
        }

        function escapeRegExp(string) {
            string =
                toString(string);
            return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$\x26") : string
        }
        var kebabCase = createCompounder(function(result, word, index) {
            return result + (index ? "-" : "") + word.toLowerCase()
        });
        var lowerCase = createCompounder(function(result, word, index) {
            return result + (index ? " " : "") + word.toLowerCase()
        });
        var lowerFirst = createCaseFirst("toLowerCase");

        function pad(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            if (!length ||
                strLength >= length) return string;
            var mid = (length - strLength) / 2;
            return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars)
        }

        function padEnd(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return length && strLength < length ? string + createPadding(length - strLength, chars) : string
        }

        function padStart(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return length &&
                strLength < length ? createPadding(length - strLength, chars) + string : string
        }

        function parseInt(string, radix, guard) {
            if (guard || radix == null) radix = 0;
            else if (radix) radix = +radix;
            return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0)
        }

        function repeat(string, n, guard) {
            if (guard ? isIterateeCall(string, n, guard) : n === undefined) n = 1;
            else n = toInteger(n);
            return baseRepeat(toString(string), n)
        }

        function replace() {
            var args = arguments,
                string = toString(args[0]);
            return args.length < 3 ? string : string.replace(args[1], args[2])
        }
        var snakeCase = createCompounder(function(result, word, index) {
            return result + (index ? "_" : "") + word.toLowerCase()
        });

        function split(string, separator, limit) {
            if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) separator = limit = undefined;
            limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
            if (!limit) return [];
            string = toString(string);
            if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
                separator = baseToString(separator);
                if (!separator && hasUnicode(string)) return castSlice(stringToArray(string),
                    0, limit)
            }
            return string.split(separator, limit)
        }
        var startCase = createCompounder(function(result, word, index) {
            return result + (index ? " " : "") + upperFirst(word)
        });

        function startsWith(string, target, position) {
            string = toString(string);
            position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
            target = baseToString(target);
            return string.slice(position, position + target.length) == target
        }

        function template(string, options, guard) {
            var settings = lodash.templateSettings;
            if (guard && isIterateeCall(string, options, guard)) options =
                undefined;
            string = toString(string);
            options = assignInWith({}, options, settings, customDefaultsAssignIn);
            var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
                importsKeys = keys(imports),
                importsValues = baseValues(imports, importsKeys);
            var isEscaping, isEvaluating, index = 0,
                interpolate = options.interpolate || reNoMatch,
                source = "__p +\x3d '";
            var reDelimiters = RegExp((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source +
                "|" + (options.evaluate || reNoMatch).source + "|$", "g");
            var sourceURL = "//# sourceURL\x3d" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/[\r\n]/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
            string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
                interpolateValue || (interpolateValue = esTemplateValue);
                source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
                if (escapeValue) {
                    isEscaping = true;
                    source += "' +\n__e(" + escapeValue + ") +\n'"
                }
                if (evaluateValue) {
                    isEvaluating = true;
                    source += "';\n" + evaluateValue + ";\n__p +\x3d '"
                }
                if (interpolateValue) source += "' +\n((__t \x3d (" + interpolateValue + ")) \x3d\x3d null ? '' : __t) +\n'";
                index = offset + match.length;
                return match
            });
            source += "';\n";
            var variable = hasOwnProperty.call(options, "variable") && options.variable;
            if (!variable) source = "with (obj) {\n" + source + "\n}\n";
            source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing,
                "$1;");
            source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj \x3d {});\n") + "var __t, __p \x3d ''" + (isEscaping ? ", __e \x3d _.escape" : "") + (isEvaluating ? ", __j \x3d Array.prototype.join;\n" + "function print() { __p +\x3d __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
            var result = attempt(function() {
                return Function(importsKeys, sourceURL + "return " + source).apply(undefined, importsValues)
            });
            result.source = source;
            if (isError(result)) throw result;
            return result
        }

        function toLower(value) {
            return toString(value).toLowerCase()
        }

        function toUpper(value) {
            return toString(value).toUpperCase()
        }

        function trim(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined)) return string.replace(reTrim, "");
            if (!string || !(chars = baseToString(chars))) return string;
            var strSymbols = stringToArray(string),
                chrSymbols = stringToArray(chars),
                start = charsStartIndex(strSymbols, chrSymbols),
                end = charsEndIndex(strSymbols, chrSymbols) + 1;
            return castSlice(strSymbols, start, end).join("")
        }

        function trimEnd(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined)) return string.replace(reTrimEnd, "");
            if (!string || !(chars = baseToString(chars))) return string;
            var strSymbols = stringToArray(string),
                end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
            return castSlice(strSymbols, 0, end).join("")
        }

        function trimStart(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined)) return string.replace(reTrimStart, "");
            if (!string || !(chars = baseToString(chars))) return string;
            var strSymbols = stringToArray(string),
                start = charsStartIndex(strSymbols,
                    stringToArray(chars));
            return castSlice(strSymbols, start).join("")
        }

        function truncate(string, options) {
            var length = DEFAULT_TRUNC_LENGTH,
                omission = DEFAULT_TRUNC_OMISSION;
            if (isObject(options)) {
                var separator = "separator" in options ? options.separator : separator;
                length = "length" in options ? toInteger(options.length) : length;
                omission = "omission" in options ? baseToString(options.omission) : omission
            }
            string = toString(string);
            var strLength = string.length;
            if (hasUnicode(string)) {
                var strSymbols = stringToArray(string);
                strLength =
                    strSymbols.length
            }
            if (length >= strLength) return string;
            var end = length - stringSize(omission);
            if (end < 1) return omission;
            var result = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
            if (separator === undefined) return result + omission;
            if (strSymbols) end += result.length - end;
            if (isRegExp(separator)) {
                if (string.slice(end).search(separator)) {
                    var match, substring = result;
                    if (!separator.global) separator = RegExp(separator.source, toString(reFlags.exec(separator)) + "g");
                    separator.lastIndex = 0;
                    while (match = separator.exec(substring)) var newEnd =
                        match.index;
                    result = result.slice(0, newEnd === undefined ? end : newEnd)
                }
            } else if (string.indexOf(baseToString(separator), end) != end) {
                var index = result.lastIndexOf(separator);
                if (index > -1) result = result.slice(0, index)
            }
            return result + omission
        }

        function unescape(string) {
            string = toString(string);
            return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string
        }
        var upperCase = createCompounder(function(result, word, index) {
            return result + (index ? " " : "") + word.toUpperCase()
        });
        var upperFirst =
            createCaseFirst("toUpperCase");

        function words(string, pattern, guard) {
            string = toString(string);
            pattern = guard ? undefined : pattern;
            if (pattern === undefined) return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
            return string.match(pattern) || []
        }
        var attempt = baseRest(function(func, args) {
            try {
                return apply(func, undefined, args)
            } catch (e) {
                return isError(e) ? e : new Error(e)
            }
        });
        var bindAll = flatRest(function(object, methodNames) {
            arrayEach(methodNames, function(key) {
                key = toKey(key);
                baseAssignValue(object, key,
                    bind(object[key], object))
            });
            return object
        });

        function cond(pairs) {
            var length = pairs == null ? 0 : pairs.length,
                toIteratee = getIteratee();
            pairs = !length ? [] : arrayMap(pairs, function(pair) {
                if (typeof pair[1] != "function") throw new TypeError(FUNC_ERROR_TEXT);
                return [toIteratee(pair[0]), pair[1]]
            });
            return baseRest(function(args) {
                var index = -1;
                while (++index < length) {
                    var pair = pairs[index];
                    if (apply(pair[0], this, args)) return apply(pair[1], this, args)
                }
            })
        }

        function conforms(source) {
            return baseConforms(baseClone(source, CLONE_DEEP_FLAG))
        }

        function constant(value) {
            return function() {
                return value
            }
        }

        function defaultTo(value, defaultValue) {
            return value == null || value !== value ? defaultValue : value
        }
        var flow = createFlow();
        var flowRight = createFlow(true);

        function identity(value) {
            return value
        }

        function iteratee(func) {
            return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG))
        }

        function matches(source) {
            return baseMatches(baseClone(source, CLONE_DEEP_FLAG))
        }

        function matchesProperty(path, srcValue) {
            return baseMatchesProperty(path, baseClone(srcValue,
                CLONE_DEEP_FLAG))
        }
        var method = baseRest(function(path, args) {
            return function(object) {
                return baseInvoke(object, path, args)
            }
        });
        var methodOf = baseRest(function(object, args) {
            return function(path) {
                return baseInvoke(object, path, args)
            }
        });

        function mixin(object, source, options) {
            var props = keys(source),
                methodNames = baseFunctions(source, props);
            if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
                options = source;
                source = object;
                object = this;
                methodNames = baseFunctions(source, keys(source))
            }
            var chain = !(isObject(options) && "chain" in options) || !!options.chain,
                isFunc = isFunction(object);
            arrayEach(methodNames, function(methodName) {
                var func = source[methodName];
                object[methodName] = func;
                if (isFunc) object.prototype[methodName] = function() {
                    var chainAll = this.__chain__;
                    if (chain || chainAll) {
                        var result = object(this.__wrapped__),
                            actions = result.__actions__ = copyArray(this.__actions__);
                        actions.push({
                            "func": func,
                            "args": arguments,
                            "thisArg": object
                        });
                        result.__chain__ = chainAll;
                        return result
                    }
                    return func.apply(object, arrayPush([this.value()],
                        arguments))
                }
            });
            return object
        }

        function noConflict() {
            if (root._ === this) root._ = oldDash;
            return this
        }

        function noop() {}

        function nthArg(n) {
            n = toInteger(n);
            return baseRest(function(args) {
                return baseNth(args, n)
            })
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);

        function property(path) {
            return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path)
        }

        function propertyOf(object) {
            return function(path) {
                return object == null ? undefined : baseGet(object, path)
            }
        }
        var range =
            createRange();
        var rangeRight = createRange(true);

        function stubArray() {
            return []
        }

        function stubFalse() {
            return false
        }

        function stubObject() {
            return {}
        }

        function stubString() {
            return ""
        }

        function stubTrue() {
            return true
        }

        function times(n, iteratee) {
            n = toInteger(n);
            if (n < 1 || n > MAX_SAFE_INTEGER) return [];
            var index = MAX_ARRAY_LENGTH,
                length = nativeMin(n, MAX_ARRAY_LENGTH);
            iteratee = getIteratee(iteratee);
            n -= MAX_ARRAY_LENGTH;
            var result = baseTimes(length, iteratee);
            while (++index < n) iteratee(index);
            return result
        }

        function toPath(value) {
            if (isArray(value)) return arrayMap(value,
                toKey);
            return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)))
        }

        function uniqueId(prefix) {
            var id = ++idCounter;
            return toString(prefix) + id
        }
        var add = createMathOperation(function(augend, addend) {
            return augend + addend
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
            return dividend / divisor
        }, 1);
        var floor = createRound("floor");

        function max(array) {
            return array && array.length ? baseExtremum(array, identity, baseGt) : undefined
        }

        function maxBy(array, iteratee) {
            return array &&
                array.length ? baseExtremum(array, getIteratee(iteratee, 2), baseGt) : undefined
        }

        function mean(array) {
            return baseMean(array, identity)
        }

        function meanBy(array, iteratee) {
            return baseMean(array, getIteratee(iteratee, 2))
        }

        function min(array) {
            return array && array.length ? baseExtremum(array, identity, baseLt) : undefined
        }

        function minBy(array, iteratee) {
            return array && array.length ? baseExtremum(array, getIteratee(iteratee, 2), baseLt) : undefined
        }
        var multiply = createMathOperation(function(multiplier, multiplicand) {
            return multiplier *
                multiplicand
        }, 1);
        var round = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
            return minuend - subtrahend
        }, 0);

        function sum(array) {
            return array && array.length ? baseSum(array, identity) : 0
        }

        function sumBy(array, iteratee) {
            return array && array.length ? baseSum(array, getIteratee(iteratee, 2)) : 0
        }
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith =
            differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pickBy = pickBy;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith =
            pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update;
        lodash.updateWith = updateWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        mixin(lodash, lodash);
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp =
            clamp;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.conformsTo = conformsTo;
        lodash.deburr = deburr;
        lodash.defaultTo = defaultTo;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor;
        lodash.forEach =
            forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isInteger = isInteger;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject =
            isObject;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max =
            max;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat =
            repeat;
        lodash.replace = replace;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext;
        lodash.sample = sample;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum =
            sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString;
        lodash.toUpper = toUpper;
        lodash.trim = trim;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase;
        lodash.upperFirst = upperFirst;
        lodash.each = forEach;
        lodash.eachRight =
            forEachRight;
        lodash.first = head;
        mixin(lodash, function() {
            var source = {};
            baseForOwn(lodash, function(func, methodName) {
                if (!hasOwnProperty.call(lodash.prototype, methodName)) source[methodName] = func
            });
            return source
        }(), {
            "chain": false
        });
        lodash.VERSION = VERSION;
        arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
            lodash[methodName].placeholder = lodash
        });
        arrayEach(["drop", "take"], function(methodName, index) {
            LazyWrapper.prototype[methodName] = function(n) {
                n = n === undefined ? 1 :
                    nativeMax(toInteger(n), 0);
                var result = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
                if (result.__filtered__) result.__takeCount__ = nativeMin(n, result.__takeCount__);
                else result.__views__.push({
                    "size": nativeMin(n, MAX_ARRAY_LENGTH),
                    "type": methodName + (result.__dir__ < 0 ? "Right" : "")
                });
                return result
            };
            LazyWrapper.prototype[methodName + "Right"] = function(n) {
                return this.reverse()[methodName](n).reverse()
            }
        });
        arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
            var type = index + 1,
                isFilter =
                type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
            LazyWrapper.prototype[methodName] = function(iteratee) {
                var result = this.clone();
                result.__iteratees__.push({
                    "iteratee": getIteratee(iteratee, 3),
                    "type": type
                });
                result.__filtered__ = result.__filtered__ || isFilter;
                return result
            }
        });
        arrayEach(["head", "last"], function(methodName, index) {
            var takeName = "take" + (index ? "Right" : "");
            LazyWrapper.prototype[methodName] = function() {
                return this[takeName](1).value()[0]
            }
        });
        arrayEach(["initial", "tail"], function(methodName, index) {
            var dropName =
                "drop" + (index ? "" : "Right");
            LazyWrapper.prototype[methodName] = function() {
                return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1)
            }
        });
        LazyWrapper.prototype.compact = function() {
            return this.filter(identity)
        };
        LazyWrapper.prototype.find = function(predicate) {
            return this.filter(predicate).head()
        };
        LazyWrapper.prototype.findLast = function(predicate) {
            return this.reverse().find(predicate)
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
            if (typeof path == "function") return new LazyWrapper(this);
            return this.map(function(value) {
                return baseInvoke(value, path, args)
            })
        });
        LazyWrapper.prototype.reject = function(predicate) {
            return this.filter(negate(getIteratee(predicate)))
        };
        LazyWrapper.prototype.slice = function(start, end) {
            start = toInteger(start);
            var result = this;
            if (result.__filtered__ && (start > 0 || end < 0)) return new LazyWrapper(result);
            if (start < 0) result = result.takeRight(-start);
            else if (start) result = result.drop(start);
            if (end !== undefined) {
                end = toInteger(end);
                result = end < 0 ? result.dropRight(-end) : result.take(end -
                    start)
            }
            return result
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
            return this.reverse().takeWhile(predicate).reverse()
        };
        LazyWrapper.prototype.toArray = function() {
            return this.take(MAX_ARRAY_LENGTH)
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
                isTaker = /^(?:head|last)$/.test(methodName),
                lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName],
                retUnwrapped = isTaker || /^find/.test(methodName);
            if (!lodashFunc) return;
            lodash.prototype[methodName] = function() {
                var value = this.__wrapped__,
                    args = isTaker ? [1] : arguments,
                    isLazy = value instanceof LazyWrapper,
                    iteratee = args[0],
                    useLazy = isLazy || isArray(value);
                var interceptor = function(value) {
                    var result = lodashFunc.apply(lodash, arrayPush([value], args));
                    return isTaker && chainAll ? result[0] : result
                };
                if (useLazy && checkIteratee && typeof iteratee == "function" && iteratee.length != 1) isLazy = useLazy = false;
                var chainAll = this.__chain__,
                    isHybrid = !!this.__actions__.length,
                    isUnwrapped =
                    retUnwrapped && !chainAll,
                    onlyLazy = isLazy && !isHybrid;
                if (!retUnwrapped && useLazy) {
                    value = onlyLazy ? value : new LazyWrapper(this);
                    var result = func.apply(value, args);
                    result.__actions__.push({
                        "func": thru,
                        "args": [interceptor],
                        "thisArg": undefined
                    });
                    return new LodashWrapper(result, chainAll)
                }
                if (isUnwrapped && onlyLazy) return func.apply(this, args);
                result = this.thru(interceptor);
                return isUnwrapped ? isTaker ? result.value()[0] : result.value() : result
            }
        });
        arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
            var func =
                arrayProto[methodName],
                chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru",
                retUnwrapped = /^(?:pop|shift)$/.test(methodName);
            lodash.prototype[methodName] = function() {
                var args = arguments;
                if (retUnwrapped && !this.__chain__) {
                    var value = this.value();
                    return func.apply(isArray(value) ? value : [], args)
                }
                return this[chainName](function(value) {
                    return func.apply(isArray(value) ? value : [], args)
                })
            }
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var lodashFunc = lodash[methodName];
            if (lodashFunc) {
                var key =
                    lodashFunc.name + "";
                if (!hasOwnProperty.call(realNames, key)) realNames[key] = [];
                realNames[key].push({
                    "name": methodName,
                    "func": lodashFunc
                })
            }
        });
        realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
            "name": "wrapper",
            "func": undefined
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant =
            wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        lodash.prototype.first = lodash.prototype.head;
        if (symIterator) lodash.prototype[symIterator] = wrapperToIterator;
        return lodash
    };
    var _ = runInContext();
    if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        root._ = _;
        define(function() {
            return _
        })
    } else if (freeModule) {
        (freeModule.exports = _)._ = _;
        freeExports._ = _
    } else root._ = _
}).call(this);
! function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof module && module.exports ? module.exports = b(require("jquery")) : b(a.jQuery)
}(this, function(a) {
    ! function(a) {
        var b = "placeholder" in document.createElement("INPUT"),
            c = "options" in document.createElement("DATALIST"),
            d = !1,
            e = function(e) {
                e.each(function() {
                    var e = a(this),
                        f = e.find("input,textarea,select"),
                        g = !1;
                    f.each(function() {
                        var b = [],
                            e = a(this),
                            f = e.attr("required"),
                            h = {};
                        switch (f && b.push("required"),
                            (e.attr("type") || "").toLowerCase()) {
                            case "time":
                                b.push("time"), a.formUtils.validators.validate_date || d || (d = !0, a.formUtils.loadModules("date"));
                                break;
                            case "url":
                                b.push("url");
                                break;
                            case "email":
                                b.push("email");
                                break;
                            case "date":
                                b.push("date");
                                break;
                            case "number":
                                b.push("number");
                                var i = e.attr("max"),
                                    j = e.attr("min"),
                                    k = e.attr("step");
                                j || i ? (j || (j = "0"), i || (i = "9007199254740992"), k || (k = "1"), h["data-validation-allowing"] = "range[" + j + ";" + i + "]", 0 !== j.indexOf("-") && 0 !== i.indexOf("-") || (h["data-validation-allowing"] +=
                                    ",negative"), (j.indexOf(".") > -1 || i.indexOf(".") > -1 || k.indexOf(".") > -1) && (h["data-validation-allowing"] += ",float")) : h["data-validation-allowing"] += ",float,negative"
                        }
                        if (e.attr("pattern") && (b.push("custom"), h["data-validation-regexp"] = e.attr("pattern")), e.attr("maxlength") && (b.push("length"), h["data-validation-length"] = "max" + e.attr("maxlength")), !c && e.attr("list")) {
                            var l = [],
                                m = a("#" + e.attr("list"));
                            if (m.find("option").each(function() {
                                    l.push(a(this).text())
                                }), 0 === l.length) {
                                var n = a.trim(a("#" + e.attr("list")).text()).split("\n");
                                a.each(n, function(b, c) {
                                    l.push(a.trim(c))
                                })
                            }
                            m.remove(), a.formUtils.suggest(e, l)
                        }
                        if (b.length) {
                            f || (h["data-validation-optional"] = "true"), g = !0;
                            var o = (e.attr("data-validation") || "") + " " + b.join(" ");
                            e.attr("data-validation", a.trim(o)), a.each(h, function(a, b) {
                                e.attr(a, b)
                            })
                        }
                    }), g && e.trigger("html5ValidationAttrsFound"), b || f.filter("input[placeholder]").each(function() {
                        this.__defaultValue = this.getAttribute("placeholder"), a(this).bind("focus", function() {
                            this.value === this.__defaultValue && (this.value = "", a(this).removeClass("showing-placeholder"))
                        }).bind("blur",
                            function() {
                                "" === a.trim(this.value) && (this.value = this.__defaultValue, a(this).addClass("showing-placeholder"))
                            })
                    })
                })
            };
        a.formUtils.$win.bind("validatorsLoaded formValidationSetup", function(b, c) {
            c || (c = a("form")), e(c)
        }), a.formUtils.setupValidationUsingHTML5Attr = e
    }(a, window)
});
! function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof module && module.exports ? module.exports = b(require("jquery")) : b(a.jQuery)
}(this, function(a) {
    ! function(a) {
        var b = function(b, c) {
                var d = function() {
                        var c = a(this),
                            d = c.valAttr("depends-on") || c.valAttr("if-checked");
                        if (d) {
                            var f = a.formUtils.getValue('[name\x3d"' + d + '"]', b),
                                g = a.split(c.valAttr("depends-on-value"), !1, !1),
                                h = !f || g.length && !e(f, g);
                            h && c.valAttr("skipped", "1")
                        }
                    },
                    e = function(b, c) {
                        var d = !1,
                            e =
                            b.toLocaleLowerCase();
                        return a.each(c, function(a, b) {
                            if (e === b.toLocaleLowerCase()) return d = !0, !1
                        }), d
                    },
                    f = function() {
                        var b = a(this),
                            d = this.$dependingInput,
                            e = a.formUtils.getValue(b),
                            f = b.valAttr("depending-value"),
                            g = !!a.formUtils.getValue(d),
                            h = !e || f && f !== e;
                        h && !g && a.formUtils.dialogs.removeInputStylingAndMessage(d, c)
                    };
                b.find("[data-validation-depends-on]").off("beforeValidation", d).on("beforeValidation", d).each(function() {
                    var c = a(this);
                    b.find('[name\x3d"' + c.valAttr("depends-on") + '"]').each(function() {
                        a(this).off("change",
                            f).on("change", f).valAttr("depending-value", c.valAttr("depends-on-value")), this.$dependingInput = c
                    })
                })
            },
            c = function(b, c) {
                var d = function() {
                        var c = a(this),
                            d = c.valAttr("optional-if-answered"),
                            e = !1,
                            f = !!a.formUtils.getValue(c);
                        f || (a.each(a.split(d), function(c, d) {
                            var f = b.find('[name\x3d"' + d + '"]');
                            if (e = !!a.formUtils.getValue(f)) return !1
                        }), e && c.valAttr("skipped", 1))
                    },
                    e = function() {
                        var d = a(this),
                            e = d.valAttr("optional-if-answered");
                        a.each(a.split(e), function(d, e) {
                            var f = b.find('[name\x3d"' + e + '"]'),
                                g = !!a.formUtils.getValue(f);
                            g || a.formUtils.dialogs.removeInputStylingAndMessage(f, c)
                        })
                    };
                b.find("[data-validation-optional-if-answered]").off("beforeValidation", d).on("beforeValidation", d).each(function() {
                    a(this).off("change", e).on("change", e)
                })
            };
        a.formUtils.$win.bind("validatorsLoaded formValidationSetup", function(d, e, f) {
            e || (e = a("form")), b(e, f), c(e, f)
        })
    }(a)
});
(function(b) {
    "function" === typeof define && define.amd ? define(["jquery"], b) : "object" === typeof exports ? module.exports = b(require("jquery")) : b(jQuery || Zepto)
})(function(b) {
    var y = function(a, e, d) {
        var c = {
            invalid: [],
            getCaret: function() {
                try {
                    var r, b = 0,
                        e = a.get(0),
                        d = document.selection,
                        f = e.selectionStart;
                    if (d && -1 === navigator.appVersion.indexOf("MSIE 10")) r = d.createRange(), r.moveStart("character", -c.val().length), b = r.text.length;
                    else if (f || "0" === f) b = f;
                    return b
                } catch (g) {}
            },
            setCaret: function(r) {
                try {
                    if (a.is(":focus")) {
                        var c,
                            b = a.get(0);
                        b.setSelectionRange ? (b.focus(), b.setSelectionRange(r, r)) : (c = b.createTextRange(), c.collapse(!0), c.moveEnd("character", r), c.moveStart("character", r), c.select())
                    }
                } catch (e) {}
            },
            events: function() {
                a.on("keydown.mask", function(c) {
                    a.data("mask-keycode", c.keyCode || c.which)
                }).on(b.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", c.behaviour).on("paste.mask drop.mask", function() {
                    setTimeout(function() {
                        a.keydown().keyup()
                    }, 100)
                }).on("change.mask", function() {
                    a.data("changed", !0)
                }).on("blur.mask", function() {
                    n ===
                        c.val() || a.data("changed") || a.trigger("change");
                    a.data("changed", !1)
                }).on("blur.mask", function() {
                    n = c.val()
                }).on("focus.mask", function(a) {
                    !0 === d.selectOnFocus && b(a.target).select()
                }).on("focusout.mask", function() {
                    d.clearIfNotMatch && !p.test(c.val()) && c.val("")
                })
            },
            getRegexMask: function() {
                for (var a = [], c, b, d, f, l = 0; l < e.length; l++)(c = g.translation[e.charAt(l)]) ? (b = c.pattern.toString().replace(/.{1}$|^.{1}/g, ""), d = c.optional, (c = c.recursive) ? (a.push(e.charAt(l)), f = {
                    digit: e.charAt(l),
                    pattern: b
                }) : a.push(d ||
                    c ? b + "?" : b)) : a.push(e.charAt(l).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$\x26"));
                a = a.join("");
                f && (a = a.replace(new RegExp("(" + f.digit + "(.*" + f.digit + ")?)"), "($1)?").replace(new RegExp(f.digit, "g"), f.pattern));
                return new RegExp(a)
            },
            destroyEvents: function() {
                a.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))
            },
            val: function(c) {
                var b = a.is("input") ? "val" : "text";
                if (0 < arguments.length) {
                    if (a[b]() !== c) a[b](c);
                    b = a
                } else b = a[b]();
                return b
            },
            getMCharsBeforeCount: function(a, c) {
                for (var b = 0, d =
                        0, f = e.length; d < f && d < a; d++) g.translation[e.charAt(d)] || (a = c ? a + 1 : a, b++);
                return b
            },
            caretPos: function(a, b, d, h) {
                return g.translation[e.charAt(Math.min(a - 1, e.length - 1))] ? Math.min(a + d - b - h, d) : c.caretPos(a + 1, b, d, h)
            },
            behaviour: function(d) {
                d = d || window.event;
                c.invalid = [];
                var e = a.data("mask-keycode");
                if (-1 === b.inArray(e, g.byPassKeys)) {
                    var m = c.getCaret(),
                        h = c.val().length,
                        f = c.getMasked(),
                        l = f.length,
                        k = c.getMCharsBeforeCount(l - 1) - c.getMCharsBeforeCount(h - 1),
                        n = m < h;
                    c.val(f);
                    n && (8 !== e && 46 !== e && (m = c.caretPos(m, h, l, k)),
                        c.setCaret(m));
                    return c.callbacks(d)
                }
            },
            getMasked: function(a, b) {
                var m = [],
                    h = void 0 === b ? c.val() : b + "",
                    f = 0,
                    l = e.length,
                    k = 0,
                    n = h.length,
                    q = 1,
                    p = "push",
                    u = -1,
                    t, w;
                d.reverse ? (p = "unshift", q = -1, t = 0, f = l - 1, k = n - 1, w = function() {
                    return -1 < f && -1 < k
                }) : (t = l - 1, w = function() {
                    return f < l && k < n
                });
                for (; w();) {
                    var x = e.charAt(f),
                        v = h.charAt(k),
                        s = g.translation[x];
                    if (s) v.match(s.pattern) ? (m[p](v), s.recursive && (-1 === u ? u = f : f === t && (f = u - q), t === u && (f -= q)), f += q) : s.optional ? (f += q, k -= q) : s.fallback ? (m[p](s.fallback), f += q, k -= q) : c.invalid.push({
                        p: k,
                        v: v,
                        e: s.pattern
                    }), k += q;
                    else {
                        if (!a) m[p](x);
                        v === x && (k += q);
                        f += q
                    }
                }
                h = e.charAt(t);
                l !== n + 1 || g.translation[h] || m.push(h);
                return m.join("")
            },
            callbacks: function(b) {
                var g = c.val(),
                    m = g !== n,
                    h = [g, b, a, d],
                    f = function(a, b, c) {
                        "function" === typeof d[a] && b && d[a].apply(this, c)
                    };
                f("onChange", !0 === m, h);
                f("onKeyPress", !0 === m, h);
                f("onComplete", g.length === e.length, h);
                f("onInvalid", 0 < c.invalid.length, [g, b, a, c.invalid, d])
            }
        };
        a = b(a);
        var g = this,
            n = c.val(),
            p;
        e = "function" === typeof e ? e(c.val(), void 0, a, d) : e;
        g.mask = e;
        g.options = d;
        g.remove =
            function() {
                var b = c.getCaret();
                c.destroyEvents();
                c.val(g.getCleanVal());
                c.setCaret(b - c.getMCharsBeforeCount(b));
                return a
            };
        g.getCleanVal = function() {
            return c.getMasked(!0)
        };
        g.getMaskedVal = function(a) {
            return c.getMasked(!1, a)
        };
        g.init = function(e) {
            e = e || !1;
            d = d || {};
            g.clearIfNotMatch = b.jMaskGlobals.clearIfNotMatch;
            g.byPassKeys = b.jMaskGlobals.byPassKeys;
            g.translation = b.extend({}, b.jMaskGlobals.translation, d.translation);
            g = b.extend(!0, {}, g, d);
            p = c.getRegexMask();
            !1 === e ? (d.placeholder && a.attr("placeholder", d.placeholder),
                a.data("mask") && a.attr("autocomplete", "off"), c.destroyEvents(), c.events(), e = c.getCaret(), c.val(c.getMasked()), c.setCaret(e + c.getMCharsBeforeCount(e, !0))) : (c.events(), c.val(c.getMasked()))
        };
        g.init(!a.is("input"))
    };
    b.maskWatchers = {};
    var A = function() {
            var a = b(this),
                e = {},
                d = a.attr("data-mask");
            a.attr("data-mask-reverse") && (e.reverse = !0);
            a.attr("data-mask-clearifnotmatch") && (e.clearIfNotMatch = !0);
            "true" === a.attr("data-mask-selectonfocus") && (e.selectOnFocus = !0);
            if (z(a, d, e)) return a.data("mask", new y(this,
                d, e))
        },
        z = function(a, e, d) {
            d = d || {};
            var c = b(a).data("mask"),
                g = JSON.stringify;
            a = b(a).val() || b(a).text();
            try {
                return "function" === typeof e && (e = e(a)), "object" !== typeof c || g(c.options) !== g(d) || c.mask !== e
            } catch (n) {}
        };
    b.fn.mask = function(a, e) {
        e = e || {};
        var d = this.selector,
            c = b.jMaskGlobals,
            g = c.watchInterval,
            c = e.watchInputs || c.watchInputs,
            n = function() {
                if (z(this, a, e)) return b(this).data("mask", new y(this, a, e))
            };
        b(this).each(n);
        d && "" !== d && c && (clearInterval(b.maskWatchers[d]), b.maskWatchers[d] = setInterval(function() {
                b(document).find(d).each(n)
            },
            g));
        return this
    };
    b.fn.masked = function(a) {
        return this.data("mask").getMaskedVal(a)
    };
    b.fn.unmask = function() {
        clearInterval(b.maskWatchers[this.selector]);
        delete b.maskWatchers[this.selector];
        return this.each(function() {
            var a = b(this).data("mask");
            a && a.remove().removeData("mask")
        })
    };
    b.fn.cleanVal = function() {
        return this.data("mask").getCleanVal()
    };
    b.applyDataMask = function(a) {
        a = a || b.jMaskGlobals.maskElements;
        (a instanceof b ? a : b(a)).filter(b.jMaskGlobals.dataMaskAttr).each(A)
    };
    var p = {
        maskElements: "input,td,span,div",
        dataMaskAttr: "*[data-mask]",
        dataMask: !0,
        watchInterval: 300,
        watchInputs: !0,
        useInput: function(a) {
            var b = document.createElement("div"),
                d;
            a = "on" + a;
            d = a in b;
            d || (b.setAttribute(a, "return;"), d = "function" === typeof b[a]);
            return d
        }("input"),
        watchDataMask: !1,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
            0: {
                pattern: /\d/
            },
            9: {
                pattern: /\d/,
                optional: !0
            },
            "#": {
                pattern: /\d/,
                recursive: !0
            },
            A: {
                pattern: /[a-zA-Z0-9]/
            },
            S: {
                pattern: /[a-zA-Z]/
            }
        }
    };
    b.jMaskGlobals = b.jMaskGlobals || {};
    p = b.jMaskGlobals = b.extend(!0, {}, p, b.jMaskGlobals);
    p.dataMask && b.applyDataMask();
    setInterval(function() {
        b.jMaskGlobals.watchDataMask && b.applyDataMask()
    }, p.watchInterval)
});
(function(factory) {
    var registeredInModuleLoader = false;
    if (typeof define === "function" && define.amd) {
        define(factory);
        registeredInModuleLoader = true
    }
    if (typeof exports === "object") {
        module.exports = factory();
        registeredInModuleLoader = true
    }
    if (!registeredInModuleLoader) {
        var OldCookies = window.Cookies;
        var api = window.Cookies = factory();
        api.noConflict = function() {
            window.Cookies = OldCookies;
            return api
        }
    }
})(function() {
    function extend() {
        var i = 0;
        var result = {};
        for (; i < arguments.length; i++) {
            var attributes = arguments[i];
            for (var key in attributes) result[key] =
                attributes[key]
        }
        return result
    }

    function init(converter) {
        function api(key, value, attributes) {
            var result;
            if (typeof document === "undefined") return;
            if (arguments.length > 1) {
                attributes = extend({
                    path: "/"
                }, api.defaults, attributes);
                if (typeof attributes.expires === "number") {
                    var expires = new Date;
                    expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864E5);
                    attributes.expires = expires
                }
                attributes.expires = attributes.expires ? attributes.expires.toUTCString() : "";
                try {
                    result = JSON.stringify(value);
                    if (/^[\{\[]/.test(result)) value =
                        result
                } catch (e) {}
                if (!converter.write) value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
                else value = converter.write(value, key);
                key = encodeURIComponent(String(key));
                key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
                key = key.replace(/[\(\)]/g, escape);
                var stringifiedAttributes = "";
                for (var attributeName in attributes) {
                    if (!attributes[attributeName]) continue;
                    stringifiedAttributes += "; " + attributeName;
                    if (attributes[attributeName] ===
                        true) continue;
                    stringifiedAttributes += "\x3d" + attributes[attributeName]
                }
                return document.cookie = key + "\x3d" + value + stringifiedAttributes
            }
            if (!key) result = {};
            var cookies = document.cookie ? document.cookie.split("; ") : [];
            var rdecode = /(%[0-9A-Z]{2})+/g;
            var i = 0;
            for (; i < cookies.length; i++) {
                var parts = cookies[i].split("\x3d");
                var cookie = parts.slice(1).join("\x3d");
                if (cookie.charAt(0) === '"') cookie = cookie.slice(1, -1);
                try {
                    var name = parts[0].replace(rdecode, decodeURIComponent);
                    cookie = converter.read ? converter.read(cookie,
                        name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);
                    if (this.json) try {
                        cookie = JSON.parse(cookie)
                    } catch (e) {}
                    if (key === name) {
                        result = cookie;
                        break
                    }
                    if (!key) result[name] = cookie
                } catch (e) {}
            }
            return result
        }
        api.set = api;
        api.get = function(key) {
            return api.call(api, key)
        };
        api.getJSON = function() {
            return api.apply({
                json: true
            }, [].slice.call(arguments))
        };
        api.defaults = {};
        api.remove = function(key, attributes) {
            api(key, "", extend(attributes, {
                expires: -1
            }))
        };
        api.withConverter = init;
        return api
    }
    return init(function() {})
});
window.$dnlJq = jQuery;
! function(e) {
    var t = function(t) {
            return t && e.inArray(t, ["es_US", "en_CA", "fr_CA", "en_GB", "en_AU"]) < 0 && (t = "en_US"), t
        },
        a = function(e) {
            return e && (e = t(e), luminateExtend.sessionVars.set("locale", e)), e
        },
        n = function(e, t) {
            return (e ? luminateExtend.global.path.secure + "S" : luminateExtend.global.path.nonsecure) + "PageServer" + (luminateExtend.global.routingId && "" !== luminateExtend.global.routingId ? ";" + luminateExtend.global.routingId : "") + "?pagename\x3dluminateExtend_server\x26pgwrap\x3dn" + (t ? "\x26" + t : "")
        },
        i = function(t, a) {
            if (t.responseFilter &&
                t.responseFilter.array && t.responseFilter.filter && luminateExtend.utils.stringToObj(t.responseFilter.array, a)) {
                var n, i, l = t.responseFilter.filter.split("\x3d\x3d")[0].split("!\x3d")[0].replace(/^\s+|\s+$/g, "");
                if (-1 !== t.responseFilter.filter.indexOf("!\x3d") ? (n = "nequal", i = t.responseFilter.filter.split("!\x3d")[1]) : -1 !== t.responseFilter.filter.indexOf("\x3d\x3d") && (n = "equal", i = t.responseFilter.filter.split("\x3d\x3d")[1]), n && i) {
                    i = i.replace(/^\s+|\s+$/g, "");
                    var o = [],
                        r = !1;
                    if (e.each(luminateExtend.utils.ensureArray(luminateExtend.utils.stringToObj(t.responseFilter.array,
                            a)), function() {
                            "nequal" === n && this[l] === i || "equal" === n && this[l] !== i ? r = !0 : o.push(this)
                        }), r) {
                        var s = t.responseFilter.array.split(".");
                        e.each(a, function(t, n) {
                            t === s[0] && e.each(n, function(n, i) {
                                n === s[1] && (2 === s.length ? a[t][n] = o : e.each(i, function(i, l) {
                                    i === s[2] && (3 === s.length ? a[t][n][i] = o : e.each(l, function(e) {
                                        e === s[3] && 4 === s.length && (a[t][n][i][e] = o)
                                    }))
                                }))
                            })
                        })
                    }
                }
            }
            var u = e.noop;
            t.callback && ("function" == typeof t.callback ? u = t.callback : t.callback.error && a.errorResponse ? u = t.callback.error : t.callback.success && !a.errorResponse &&
                (u = t.callback.success));
            var d = -1 !== t.data.indexOf("\x26method\x3dlogin") && -1 === t.data.indexOf("\x26method\x3dloginTest"),
                p = -1 !== t.data.indexOf("\x26method\x3dlogout");
            if (d || p) {
                var c = function() {
                        u(a)
                    },
                    m = {
                        callback: c,
                        useCache: !1,
                        useHTTPS: t.useHTTPS
                    };
                d && a.loginResponse && a.loginResponse.nonce && (m.nonce = "NONCE_TOKEN\x3d" + a.loginResponse.nonce), luminateExtend.api.getAuth(m)
            } else u(a)
        };
    window.luminateExtend = function(e) {
            luminateExtend.init(e || {})
        }, luminateExtend.library = {
            version: "1.7.1"
        }, luminateExtend.global = {
            update: function(t, n) {
                t && (t.length ? n && ("locale" === t && (n = a(n)), luminateExtend.global[t] = n) : (t.locale && (t.locale = a(t.locale)), luminateExtend.global = e.extend(luminateExtend.global, t)))
            }
        }, luminateExtend.init = function(a) {
            var n = e.extend({
                apiCommon: {},
                auth: {
                    type: "auth"
                },
                path: {}
            }, a || {});
            if (n.locale && (n.locale = t(n.locale)), n.supportsCORS = !1, window.XMLHttpRequest) {
                var i = new XMLHttpRequest;
                "withCredentials" in i && (n.supportsCORS = !0)
            }
            return luminateExtend.global = e.extend(luminateExtend.global, n), luminateExtend
        },
        luminateExtend.api = function(e) {
            luminateExtend.api.request(e || {})
        }, luminateExtend.api.bind = function(t) {
            return t = t || "form.luminateApi", e(t).length > 0 && e(t).each(function() {
                "form" === this.nodeName.toLowerCase() && e(this).bind("submit", function(t) {
                    t.cancelBubble = !0, t.returnValue = !1, t.stopPropagation && (t.stopPropagation(), t.preventDefault()), e(this).attr("id") || e(this).attr("id", "luminateApi-" + (new Date).getTime());
                    var a, n = e(this).attr("action"),
                        i = n.split("?"),
                        l = e(this).data("luminateapi"),
                        o = -1 !== i[0].indexOf("/site/") ?
                        i[0].split("/site/")[1] : i[0],
                        r = e(this).attr("enctype"),
                        s = i.length > 1 ? i[1] : "",
                        u = "#" + e(this).attr("id"),
                        d = !1,
                        p = !1;
                    l && (l.callback && (a = luminateExtend.utils.stringToObj(l.callback)), l.requiresAuth && "true" === l.requiresAuth && (d = !0), (0 === n.indexOf("https:") || "https:" === window.location.protocol && -1 === n.indexOf("http")) && (p = !0)), luminateExtend.api.request({
                        api: o,
                        callback: a,
                        contentType: r,
                        data: s,
                        form: u,
                        requiresAuth: d,
                        useHTTPS: p
                    })
                })
            }), luminateExtend
        }, luminateExtend.api.getAuth = function(t) {
            var a = e.extend({
                useCache: !0,
                useHTTPS: !1
            }, t || {});
            if (luminateExtend.api.getAuthLoad)
                if (luminateExtend.api.getAuthLoad = !1, a.useCache && luminateExtend.global.auth.type && luminateExtend.global.auth.token) luminateExtend.api.getAuthLoad = !0, a.callback && a.callback();
                else {
                    var i = function(e) {
                        luminateExtend.global.update(e), luminateExtend.api.getAuthLoad = !0, a.callback && a.callback()
                    };
                    e.ajax(luminateExtend.global.supportsCORS ? {
                        url: (a.useHTTPS ? luminateExtend.global.path.secure : luminateExtend.global.path.nonsecure) + "CRConsAPI",
                        data: "luminateExtend\x3d" +
                            luminateExtend.library.version + (a.nonce && "" !== a.nonce ? "\x26" + a.nonce : "") + "\x26api_key\x3d" + luminateExtend.global.apiKey + "\x26method\x3dgetLoginUrl\x26response_format\x3djson\x26v\x3d1.0",
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        success: function(e) {
                            var t = e.getLoginUrlResponse,
                                a = t.url,
                                n = t.routing_id,
                                l = t.JSESSIONID;
                            n || -1 === a.indexOf("CRConsAPI;jsessionid\x3d") || (n = a.split("CRConsAPI;jsessionid\x3d")[1].split("?")[0]), i({
                                auth: {
                                    type: "auth",
                                    token: t.token
                                },
                                routingId: n ? "jsessionid\x3d" + n : "",
                                sessionCookie: l ?
                                    "JSESSIONID\x3d" + l : ""
                            })
                        }
                    } : {
                        url: n(a.useHTTPS, "action\x3dgetAuth\x26callback\x3d?"),
                        dataType: "jsonp",
                        success: i
                    })
                }
            else {
                var l = function() {
                    luminateExtend.api.getAuth(a)
                };
                setTimeout(l, 1E3)
            }
        }, luminateExtend.api.getAuthLoad = !0;
    var l = function(t) {
        var a = e.extend({
                contentType: "application/x-www-form-urlencoded",
                data: "",
                requiresAuth: !1,
                useHashTransport: !1,
                useHTTPS: null
            }, t || {}),
            l = ["addressbook", "advocacy", "connect", "cons", "content", "datasync", "donation", "email", "group", "orgevent", "recurring", "survey", "teamraiser"];
        if (e.inArray(a.api.toLowerCase(), l) >= 0 && (a.api = "CR" + a.api.charAt(0).toUpperCase() + a.api.slice(1).toLowerCase() + "API", a.api = a.api.replace("Addressbook", "AddressBook").replace("Datasync", "DataSync").replace("Orgevent", "OrgEvent")), luminateExtend.global.path.nonsecure && luminateExtend.global.path.secure && luminateExtend.global.apiKey && a.api) {
            a.contentType = "multipart/form-data" === a.contentType.split(";")[0] ? "multipart/form-data" : "application/x-www-form-urlencoded", a.contentType += "; charset\x3dUTF-8", a.data =
                "luminateExtend\x3d" + luminateExtend.library.version + ("" === a.data ? "" : "\x26" + a.data), a.form && e(a.form).length > 0 && (a.data += "\x26" + e(a.form).eq(0).serialize()), -1 === a.data.indexOf("\x26api_key\x3d") && (a.data += "\x26api_key\x3d" + luminateExtend.global.apiKey), luminateExtend.global.apiCommon.centerId && -1 === a.data.indexOf("\x26center_id\x3d") && (a.data += "\x26center_id\x3d" + luminateExtend.global.apiCommon.centerId), luminateExtend.global.apiCommon.categoryId && -1 === a.data.indexOf("\x26list_category_id\x3d") &&
                (a.data += "\x26list_category_id\x3d" + luminateExtend.global.apiCommon.categoryId), -1 !== a.data.indexOf("\x26response_format\x3dxml") ? a.data = a.data.replace(/&response_format=xml/g, "\x26response_format\x3djson") : -1 === a.data.indexOf("\x26response_format\x3d") && (a.data += "\x26response_format\x3djson"), luminateExtend.global.apiCommon.source && -1 === a.data.indexOf("\x26source\x3d") && (a.data += "\x26source\x3d" + luminateExtend.global.apiCommon.source), luminateExtend.global.apiCommon.subSource && -1 === a.data.indexOf("\x26sub_source\x3d") &&
                (a.data += "\x26sub_source\x3d" + luminateExtend.global.apiCommon.subSource), -1 === a.data.indexOf("\x26suppress_response_codes\x3d") && (a.data += "\x26suppress_response_codes\x3dtrue"), luminateExtend.global.locale && -1 === a.data.indexOf("\x26s_locale\x3d") && (a.data += "\x26s_locale\x3d" + luminateExtend.global.locale), -1 === a.data.indexOf("\x26v\x3d") && (a.data += "\x26v\x3d1.0");
            var o = "http://",
                r = luminateExtend.global.path.nonsecure.split("http://")[1];
            a.useHTTPS = "CRDonationAPI" === a.api || "CRTeamraiserAPI" === a.api ||
                "CRConnectAPI" !== a.api && ("https:" === window.location.protocol && null == a.useHTTPS || 1 == a.useHTTPS) ? !0 : !1, a.useHTTPS && (o = "https://", r = luminateExtend.global.path.secure.split("https://")[1]), o += r + a.api;
            var s = !1,
                u = !1,
                d = !1;
            a.useHashTransport || (window.location.protocol === o.split("//")[0] && document.domain === r.split("/")[0] ? (s = !0, u = !0) : luminateExtend.global.supportsCORS ? u = !0 : "postMessage" in window && (d = !0));
            var p;
            p = u ? function() {
                luminateExtend.global.routingId && "" !== luminateExtend.global.routingId && (o += ";" + luminateExtend.global.routingId),
                    a.requiresAuth && -1 === a.data.indexOf("\x26" + luminateExtend.global.auth.type + "\x3d") && (a.data += "\x26" + luminateExtend.global.auth.type + "\x3d" + luminateExtend.global.auth.token), luminateExtend.global.sessionCookie && "" !== luminateExtend.global.sessionCookie && (a.data += "\x26" + luminateExtend.global.sessionCookie), a.data += "\x26ts\x3d" + (new Date).getTime(), e.ajax({
                        url: o,
                        data: a.data,
                        xhrFields: {
                            withCredentials: !0
                        },
                        contentType: a.contentType,
                        dataType: "json",
                        type: "POST",
                        success: function(e) {
                            i(a, e)
                        }
                    })
            } : d ? function() {
                var t =
                    (new Date).getTime(),
                    l = "luminateApiPostMessage" + t,
                    r = n(a.useHTTPS, "action\x3dpostMessage");
                luminateExtend.global.routingId && "" !== luminateExtend.global.routingId && (o += ";" + luminateExtend.global.routingId), a.requiresAuth && -1 === a.data.indexOf("\x26" + luminateExtend.global.auth.type + "\x3d") && (a.data += "\x26" + luminateExtend.global.auth.type + "\x3d" + luminateExtend.global.auth.token), luminateExtend.global.sessionCookie && "" !== luminateExtend.global.sessionCookie && (a.data += "\x26" + luminateExtend.global.sessionCookie),
                    a.data += "\x26ts\x3d" + t, luminateExtend.api.request.postMessageEventHandler || (luminateExtend.api.request.postMessageEventHandler = {}, luminateExtend.api.request.postMessageEventHandler.handler = function(t) {
                        if (-1 !== luminateExtend.global.path.nonsecure.indexOf(t.origin) || -1 !== luminateExtend.global.path.secure.indexOf(t.origin)) {
                            var a = e.parseJSON(t.data),
                                n = a.postMessageFrameId,
                                i = e.parseJSON(decodeURIComponent(a.response));
                            luminateExtend.api.request.postMessageEventHandler[n] && luminateExtend.api.request.postMessageEventHandler[n](n,
                                i)
                        }
                    }, "undefined" != typeof window.addEventListener ? window.addEventListener("message", luminateExtend.api.request.postMessageEventHandler.handler, !1) : "undefined" != typeof window.attachEvent && window.attachEvent("onmessage", luminateExtend.api.request.postMessageEventHandler.handler)), luminateExtend.api.request.postMessageEventHandler[l] = function(t, n) {
                        i(a, n), e("#" + t).remove(), delete luminateExtend.api.request.postMessageEventHandler[t]
                    }, e("body").append('\x3ciframe style\x3d"position: absolute; top: 0; left: -999em;" name\x3d"' +
                        l + '" id\x3d"' + l + '"\x3e\x3c/iframe\x3e'), e("#" + l).bind("load", function() {
                        var t = '{"postMessageFrameId": "' + e(this).attr("id") + '", "requestUrl": "' + o + '", "requestContentType": "' + a.contentType + '", "requestData": "' + a.data + '"}',
                            n = o.split("/site/")[0].split("/admin/")[0];
                        document.getElementById(e(this).attr("id")).contentWindow.postMessage(t, n)
                    }), e("#" + l).attr("src", r)
            } : function() {
                var t = (new Date).getTime(),
                    l = "luminateApiHashTransport" + t,
                    r = n(a.useHTTPS, "action\x3dhashTransport"),
                    s = window.location.protocol +
                    "//" + document.domain + "/luminateExtend_client.html";
                luminateExtend.global.routingId && "" !== luminateExtend.global.routingId && (o += ";" + luminateExtend.global.routingId), a.requiresAuth && -1 === a.data.indexOf("\x26" + luminateExtend.global.auth.type + "\x3d") && (a.data += "\x26" + luminateExtend.global.auth.type + "\x3d" + luminateExtend.global.auth.token), luminateExtend.global.sessionCookie && "" !== luminateExtend.global.sessionCookie && (a.data += "\x26" + luminateExtend.global.sessionCookie), a.data += "\x26ts\x3d" + t, r += "#\x26hashTransportClientUrl\x3d" +
                    encodeURIComponent(s) + "\x26hashTransportFrameId\x3d" + l + "\x26requestUrl\x3d" + encodeURIComponent(o) + "\x26requestContentType\x3d" + encodeURIComponent(a.contentType) + "\x26requestData\x3d" + encodeURIComponent(a.data), luminateExtend.api.request.hashTransportEventHandler || (luminateExtend.api.request.hashTransportEventHandler = {}, luminateExtend.api.request.hashTransportEventHandler.handler = function(e, t) {
                        luminateExtend.api.request.hashTransportEventHandler[e] && luminateExtend.api.request.hashTransportEventHandler[e](e,
                            t)
                    }), luminateExtend.api.request.hashTransportEventHandler[l] = function(t, n) {
                        i(a, n), e("#" + t).remove(), delete luminateExtend.api.request.hashTransportEventHandler[t]
                    }, e("body").append('\x3ciframe style\x3d"position: absolute; top: 0; left: -999em;" name\x3d"' + l + '" id\x3d"' + l + '" src\x3d"' + r + '"\x3e\x3c/iframe\x3e')
            }, a.requiresAuth || !u && !s && !luminateExtend.global.sessionCookie ? luminateExtend.api.getAuth({
                callback: p,
                useHTTPS: a.useHTTPS
            }) : p()
        }
    };
    luminateExtend.api.request = function(t) {
        if (e.isArray(t)) {
            t.reverse();
            var a = [];
            e.each(t, function(n) {
                var i = e.extend({
                    async: !0
                }, this);
                if (i.async || n === t.length - 1) a.push(i);
                else {
                    var o = t[n + 1];
                    if (o.callback && "function" != typeof o.callback) {
                        var r = o.callback.success || e.noop;
                        o.callback.success = function(e) {
                            r(e), l(i)
                        }
                    } else {
                        var o = t[n + 1],
                            s = o.callback || e.noop;
                        o.callback = {
                            success: function(e) {
                                s(e), l(i)
                            },
                            error: function(e) {
                                s(e)
                            }
                        }
                    }
                }
            }), a.reverse(), e.each(a, function() {
                l(this)
            })
        } else l(t)
    }, luminateExtend.sessionVars = {
        set: function(e, t, a) {
            var n = {};
            a && (n.callback = a), e && (n.data = "s_" + e + "\x3d" +
                (t || ""), luminateExtend.utils.ping(n))
        }
    }, luminateExtend.tags = function(e, t) {
        luminateExtend.tags.parse(e, t)
    }, luminateExtend.tags.parse = function(t, a) {
        luminateExtend.widgets ? luminateExtend.widgets(t, a) : (t = t && "all" !== t ? luminateExtend.utils.ensureArray(t) : ["cons"], a = a || "body", e.each(t, function(t, n) {
            if ("cons" === n) {
                var i = e(a).find(document.getElementsByTagName("luminate:cons"));
                if (i.length > 0) {
                    var l = function(t) {
                        i.each(function() {
                            t.getConsResponse ? e(this).replaceWith(luminateExtend.utils.stringToObj(e(this).attr("field"),
                                t.getConsResponse)) : e(this).remove()
                        })
                    };
                    luminateExtend.api.request({
                        api: "cons",
                        callback: l,
                        data: "method\x3dgetUser",
                        requiresAuth: !0
                    })
                }
            }
        }))
    }, luminateExtend.utils = {
        ensureArray: function(t) {
            return e.isArray(t) ? t : t ? [t] : []
        },
        stringToObj: function(e, t) {
            var a = t || window;
            if (e)
                for (var n = e.split("."), i = 0; i < n.length; i++) {
                    if (i < n.length - 1 && !a[n[i]]) return {};
                    a = a[n[i]]
                }
            return a
        },
        ping: function(t) {
            var a = e.extend({
                    data: null
                }, t || {}),
                n = "luminatePing" + (new Date).getTime();
            e("body").append('\x3cimg style\x3d"position: absolute; left: -999em; top: 0;" id\x3d"' +
                n + '" /\x3e'), e("#" + n).bind("load", function() {
                e(this).remove(), a.callback && a.callback()
            }), e("#" + n).attr("src", ("https:" === window.location.protocol ? luminateExtend.global.path.secure : luminateExtend.global.path.nonsecure) + "EstablishSession" + (luminateExtend.global.routingId && "" !== luminateExtend.global.routingId ? ";" + luminateExtend.global.routingId : "") + "?" + (null == a.data ? "" : a.data + "\x26") + "NEXTURL\x3d" + encodeURIComponent(("https:" === window.location.protocol ? luminateExtend.global.path.secure : luminateExtend.global.path.nonsecure) +
                "PixelServer"))
        },
        simpleDateFormat: function(a, n, i) {
            if (i = i || luminateExtend.global.locale, i = t(i), n = n || (e.inArray(i, ["en_CA", "fr_CA", "en_GB", "en_AU"]) >= 0 ? "d/M/yy" : "M/d/yy"), a = a || new Date, !(a instanceof Date)) {
                var l = a.split("T")[0].split("-"),
                    o = a.split("T").length > 1 ? a.split("T")[1].split(".")[0].split("Z")[0].split("-")[0].split(":") : ["00", "00", "00"];
                a = new Date(l[0], l[1] - 1, l[2], o[0], o[1], o[2])
            }
            var r = function(e) {
                    return e = "" + e, 0 === e.indexOf("0") && "0" !== e ? e.substring(1) : e
                },
                s = function(e) {
                    return e = Number(e),
                        isNaN(e) ? "00" : (10 > e ? "0" : "") + e
                },
                u = {
                    month: s(a.getMonth() + 1),
                    date: s(a.getDate()),
                    year: s(a.getFullYear()),
                    day: a.getDay(),
                    hour24: a.getHours(),
                    hour12: a.getHours(),
                    minutes: s(a.getMinutes()),
                    ampm: "AM"
                };
            u.hour24 > 11 && (u.ampm = "PM"), u.hour24 = s(u.hour24), 0 === u.hour12 && (u.hour12 = 12), u.hour12 > 12 && (u.hour12 = u.hour12 - 12), u.hour12 = s(u.hour12);
            var d, p = function(e) {
                var t = e.replace(/yy+(?=y)/g, "yy").replace(/MMM+(?=M)/g, "MMM").replace(/d+(?=d)/g, "d").replace(/EEE+(?=E)/g, "EEE").replace(/a+(?=a)/g, "").replace(/k+(?=k)/g,
                        "k").replace(/h+(?=h)/g, "h").replace(/m+(?=m)/g, "m"),
                    a = t.replace(/yyy/g, u.year).replace(/yy/g, u.year.substring(2)).replace(/y/g, u.year).replace(/dd/g, u.date).replace(/d/g, r(u.date)),
                    n = function(e, t, a) {
                        for (var n = 1; n < e.length; n++)
                            if (!isNaN(e[n].substring(0, 1))) {
                                var i = e[n].substring(0, 2);
                                e[n] = e[n].substring(2), isNaN(i.substring(1)) && (e[n] = i.substring(1) + e[n], i = i.substring(0, 1)), i = Number(i), i > 23 && (i = 23);
                                var l = "+" === a ? i : 0 - i;
                                "kk" === t || "k" === t ? (l = Number(u.hour24) + l, l > 24 ? l -= 24 : 0 > l && (l += 24)) : (l = Number(u.hour12) +
                                    l, l > 24 ? l -= 24 : 0 > l && (l += 24), l > 12 && (l -= 12)), l = "" + l, ("kk" === t || "hh" === t) && (l = s(l)), ("h" === t && 0 === l || "hh" === t && "00" === l) && (l = "12"), e[n] = l + e[n]
                            }
                        return e.join("")
                    }; - 1 !== a.indexOf("k+") && (a = n(a.split("kk+"), "kk", "+"), a = n(a.split("k+"), "k", "+")), -1 !== a.indexOf("k-") && (a = n(a.split("kk-"), "kk", "-"), a = n(a.split("k-"), "k", "-")), a = a.replace(/kk/g, u.hour24).replace(/k/g, r(u.hour24)), -1 !== a.indexOf("h+") && (a = n(a.split("hh+"), "hh", "+"), a = n(a.split("h+"), "h", "+")), -1 !== a.indexOf("h-") && (a = n(a.split("hh-"), "hh", "-"),
                    a = n(a.split("h-"), "h", "-")), a = a.replace(/hh/g, u.hour12 < 12 && u.hour12.indexOf && 0 !== u.hour12.indexOf("0") ? "0" + u.hour12 : u.hour12).replace(/h/g, r(u.hour12)), a = a.replace(/mm/g, u.minutes).replace(/m/g, r(u.minutes)), a = a.replace(/a/g, "A");
                var l = ["January", "February", "march", "april", "may", "June", "July", "august", "September", "October", "November", "December"];
                "es_US" === i && (l = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]), "fr_CA" === i && (l = ["janvier",
                    "f\x26#233;vrier", "mars", "avril", "mai", "juin", "juillet", "ao\x26#251;t", "septembre", "octobre", "novembre", "d\x26#233;cembre"
                ]), a = a.replace(/MMMM/g, l[Number(u.month) - 1]).replace(/MMM/g, l[Number(u.month) - 1].substring(0, 3)).replace(/MM/g, u.month).replace(/M/g, r(u.month)).replace(/march/g, "March").replace(/may/g, "May").replace(/Mayo/g, "mayo");
                var o = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                return "es_US" === i && (o = ["domingo", "lunes", "martes", "mi\x26eacute;rcoles", "jueves", "viernes",
                    "s\x26aacute;bado"
                ]), "fr_CA" === i && (o = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]), a = a.replace(/EEEE/g, o[u.day]).replace(/EEE/g, o[u.day].substring(0, 3)).replace(/EE/g, o[u.day].substring(0, 3)).replace(/E/g, o[u.day].substring(0, 3)), a = a.replace(/A/g, u.ampm).replace(/april/g, "April").replace(/august/g, "August")
            };
            if (-1 !== n.indexOf("'")) {
                var c = n.replace(/'+(?=')/g, "''").split("''");
                if (1 === c.length) {
                    c = n.split("'");
                    for (var m = 0; m < c.length; m++) m % 2 === 0 && (c[m] = p(c[m]));
                    return c.join("")
                }
                for (var m =
                        0; m < c.length; m++) {
                    for (var g = c[m].split("'"), h = 0; h < g.length; h++) h % 2 === 0 && (g[h] = p(g[h]));
                    c[m] = g.join("")
                }
                return c.join("'")
            }
            return d = p(n)
        }
    }
}("undefined" == typeof jQuery && "function" == typeof Zepto ? Zepto : jQuery);