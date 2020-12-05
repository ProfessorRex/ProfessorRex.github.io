(window.webpackJsonp = window.webpackJsonp || []).push([
    [22], {
        561: function(t, e, n) {},
        562: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = {
                    components: {
                        Button: n(111).default
                    },
                    props: ["title", "text", "top", "left", "arrowside", "hidebutton"],
                    data: function() {
                        return {
                            animate: !1
                        }
                    },
                    mounted: function() {
                        var t = this;
                        setTimeout((function() {
                            t.animate = !0
                        }), 40)
                    }
                },
                o = (n(565), n(36)),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "tutorial-bubble-container",
                        class: {
                            animate: t.animate
                        }
                    }, [n("div", {
                        staticClass: "tutorial-bubble",
                        class: t.arrowside,
                        style: {
                            top: t.top + "vh",
                            left: t.left + "vw"
                        }
                    }, [n("div", {
                        staticClass: "title"
                    }, [t._v("\n\t\t\t" + t._s(t.title) + "\n\t\t")]), t._v(" "), n("div", {
                        staticClass: "text",
                        domProps: {
                            innerHTML: t._s(t.text)
                        }
                    }), t._v(" "), t.hidebutton ? t._e() : n("div", {
                        staticClass: "button-container"
                    }, [n("Button", {
                        nativeOn: {
                            click: function(e) {
                                return t.$emit("action")
                            }
                        }
                    }, [t._v("\n\t\t\t\t" + t._s(t.t("misc", "Continue")) + "\n\t\t\t")])], 1)])])
                }), [], !1, null, "7b8710f2", null);
            e.default = component.exports;
            installComponents(component, {
                Button: n(111).default
            })
        },
        565: function(t, e, n) {
            "use strict";
            var r = n(561);
            n.n(r).a
        },
        566: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = {
                    props: ["value", "placeholder", "error", "disable"]
                },
                o = (n(610), n(36)),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "input-text"
                    }, [n("input", {
                        class: {
                            error: t.error
                        },
                        attrs: {
                            type: "text",
                            placeholder: t.placeholder,
                            disabled: t.disable,
                            maxlength: "8"
                        },
                        domProps: {
                            value: t.value
                        },
                        on: {
                            input: function(e) {
                                return t.$emit("input", e.target.value)
                            }
                        }
                    }), t._v(" "), t.error ? n("div", {
                        staticClass: "form-error"
                    }, [t._v("\n\t\t" + t._s(t.error) + "\n\t")]) : t._e()])
                }), [], !1, null, "221a7728", null);
            e.default = component.exports
        },
        568: function(t, e, n) {},
        574: function(t, e, n) {},
        576: function(t, e, n) {
            t.exports = function(t) {
                "use strict";
                var e = function(t) {
                        return Object.prototype.toString.call(t) === "[object ".concat("Function", "]")
                    },
                    i = {
                        __countup__: t.CountUp,
                        name: "VueCountUp",
                        props: {
                            delay: {
                                type: Number,
                                required: !1,
                                default: 0
                            },
                            endVal: {
                                type: Number,
                                required: !0
                            },
                            options: {
                                type: Object,
                                required: !1
                            }
                        },
                        data: function() {
                            return {
                                instance: null
                            }
                        },
                        watch: {
                            endVal: {
                                handler: function(t) {
                                    this.instance && e(this.instance.update) && this.instance.update(t)
                                },
                                deep: !1
                            }
                        },
                        methods: {
                            create: function() {
                                var e = this;
                                if (!e.instance) {
                                    var n = e.$el,
                                        i = new t.CountUp(n, e.endVal, e.options);
                                    i.error || (e.instance = i, e.delay < 0 ? e.$emit("ready", i, t.CountUp) : setTimeout((function() {
                                        return i.start((function() {
                                            return e.$emit("ready", i, t.CountUp)
                                        }))
                                    }), e.delay))
                                }
                            },
                            destroy: function() {
                                this.instance = null
                            },
                            printValue: function(t) {
                                if (this.instance && e(this.instance.printValue)) return this.instance.printValue(t)
                            },
                            start: function(t) {
                                if (this.instance && e(this.instance.start)) return this.instance.start(t)
                            },
                            pauseResume: function() {
                                if (this.instance && e(this.instance.pauseResume)) return this.instance.pauseResume()
                            },
                            reset: function() {
                                if (this.instance && e(this.instance.reset)) return this.instance.reset()
                            },
                            update: function(t) {
                                if (this.instance && e(this.instance.update)) return this.instance.update(t)
                            }
                        },
                        mounted: function() {
                            this.create()
                        },
                        beforeDestroy: function() {
                            this.destroy()
                        }
                    };
                return function(t, e) {
                        void 0 === e && (e = {}), e.insertAt
                    }(),
                    function(t, e, n, i, s, r, o, a, u, l) {
                        "boolean" != typeof o && (o, o = !1);
                        var c, d = "function" == typeof n ? n.options : n;
                        if (t && t.render && (d.render = t.render, d.staticRenderFns = t.staticRenderFns, d._compiled = !0), d._scopeId = i, c)
                            if (d.functional) {
                                var p = d.render;
                                d.render = function(t, e) {
                                    return c.call(e), p(t, e)
                                }
                            } else {
                                var m = d.beforeCreate;
                                d.beforeCreate = m ? [].concat(m, c) : [c]
                            }
                        return n
                    }({
                        render: function() {
                            var t = this.$createElement;
                            return (this._self._c || t)("span")
                        },
                        staticRenderFns: []
                    }, 0, i, "data-v-0abbdf5a", 0, 0, void 0)
            }(n(579))
        },
        579: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "CountUp", (function() {
                return o
            }));
            var r = function() {
                    return (r = Object.assign || function(t) {
                        for (var i, a = 1, s = arguments.length; a < s; a++)
                            for (var e in i = arguments[a]) Object.prototype.hasOwnProperty.call(i, e) && (t[e] = i[e]);
                        return t
                    }).apply(this, arguments)
                },
                o = function() {
                    function t(t, i, a) {
                        var s = this;
                        this.target = t, this.endVal = i, this.options = a, this.version = "2.0.7", this.defaults = {
                            startVal: 0,
                            decimalPlaces: 0,
                            duration: 2,
                            useEasing: !0,
                            useGrouping: !0,
                            smartEasingThreshold: 999,
                            smartEasingAmount: 333,
                            separator: ",",
                            decimal: ".",
                            prefix: "",
                            suffix: ""
                        }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = "", this.startVal = 0, this.paused = !0, this.count = function(t) {
                            s.startTime || (s.startTime = t);
                            var i = t - s.startTime;
                            s.remaining = s.duration - i, s.useEasing ? s.countDown ? s.frameVal = s.startVal - s.easingFn(i, 0, s.startVal - s.endVal, s.duration) : s.frameVal = s.easingFn(i, s.startVal, s.endVal - s.startVal, s.duration) : s.countDown ? s.frameVal = s.startVal - (s.startVal - s.endVal) * (i / s.duration) : s.frameVal = s.startVal + (s.endVal - s.startVal) * (i / s.duration), s.countDown ? s.frameVal = s.frameVal < s.endVal ? s.endVal : s.frameVal : s.frameVal = s.frameVal > s.endVal ? s.endVal : s.frameVal, s.frameVal = Number(s.frameVal.toFixed(s.options.decimalPlaces)), s.printValue(s.frameVal), i < s.duration ? s.rAF = requestAnimationFrame(s.count) : null !== s.finalEndVal ? s.update(s.finalEndVal) : s.callback && s.callback()
                        }, this.formatNumber = function(t) {
                            var i, a, e, n, r, o = t < 0 ? "-" : "";
                            if (i = Math.abs(t).toFixed(s.options.decimalPlaces), e = (a = (i += "").split("."))[0], n = a.length > 1 ? s.options.decimal + a[1] : "", s.options.useGrouping) {
                                r = "";
                                for (var l = 0, c = e.length; l < c; ++l) 0 !== l && l % 3 == 0 && (r = s.options.separator + r), r = e[c - l - 1] + r;
                                e = r
                            }
                            return s.options.numerals && s.options.numerals.length && (e = e.replace(/[0-9]/g, (function(t) {
                                return s.options.numerals[+t]
                            })), n = n.replace(/[0-9]/g, (function(t) {
                                return s.options.numerals[+t]
                            }))), o + s.options.prefix + e + n + s.options.suffix
                        }, this.easeOutExpo = function(t, i, a, s) {
                            return a * (1 - Math.pow(2, -10 * t / s)) * 1024 / 1023 + i
                        }, this.options = r(r({}, this.defaults), a), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(i), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = !1), this.el = "string" == typeof t ? document.getElementById(t) : t, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined"
                    }
                    return t.prototype.determineDirectionAndSmartEasing = function() {
                        var t = this.finalEndVal ? this.finalEndVal : this.endVal;
                        this.countDown = this.startVal > t;
                        var i = t - this.startVal;
                        if (Math.abs(i) > this.options.smartEasingThreshold) {
                            this.finalEndVal = t;
                            var a = this.countDown ? 1 : -1;
                            this.endVal = t + a * this.options.smartEasingAmount, this.duration = this.duration / 2
                        } else this.endVal = t, this.finalEndVal = null;
                        this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing
                    }, t.prototype.start = function(t) {
                        this.error || (this.callback = t, this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal))
                    }, t.prototype.pauseResume = function() {
                        this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused
                    }, t.prototype.reset = function() {
                        cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal)
                    }, t.prototype.update = function(t) {
                        cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t), this.endVal !== this.frameVal && (this.startVal = this.frameVal, this.finalEndVal || this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count))
                    }, t.prototype.printValue = function(t) {
                        var i = this.formattingFn(t);
                        "INPUT" === this.el.tagName ? this.el.value = i : "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = i : this.el.innerHTML = i
                    }, t.prototype.ensureNumber = function(t) {
                        return "number" == typeof t && !isNaN(t)
                    }, t.prototype.validateValue = function(t) {
                        var i = Number(t);
                        return this.ensureNumber(i) ? i : (this.error = "[CountUp] invalid start or end value: " + t, null)
                    }, t.prototype.resetDuration = function() {
                        this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration
                    }, t
                }()
        },
        584: function(t, e, n) {
            "use strict";
            n.r(e);
            n(58), n(40), n(37), n(23), n(43);
            var r = n(14),
                o = n(18),
                l = n(111),
                c = n(576),
                d = n.n(c);

            function m(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }
            var h = {
                    props: ["showbutton"],
                    components: {
                        Button: l.default,
                        ICountUp: d.a
                    },
                    data: function() {
                        return {
                            donutDashOffset: 270.5,
                            donutPercentage: 0,
                            countOptions: {
                                useEasing: !0,
                                useGrouping: !0,
                                separator: ",",
                                duration: 1
                            }
                        }
                    },
                    mounted: function() {
                        var t = this,
                            e = this;
                        this.donutPercentage = 270.5 - 2.705 * this.collectedBadgePercent, this.guestMode || this.$nextTick((function() {
                            t.$gsap.timeline({
                                repeat: 0,
                                ease: t.$gsap.Linear.easeInOut(2)
                            }).to(t.$data, {
                                duration: 1,
                                delay: 1,
                                donutDashOffset: t.$data.donutPercentage
                            })
                        })), setTimeout((function() {
                            e.startAnimation = !0
                        }), 400)
                    },
                    methods: {
                        gotoBadges: function() {
                            var t = this;
                            this.startAnimation = !1, setTimeout((function() {
                                t.$router.push("/badges")
                            }), 400)
                        }
                    },
                    computed: function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? m(Object(source), !0).forEach((function(e) {
                                Object(r.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : m(Object(source)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({}, Object(o.b)({
                        collectedBadges: "collectedBadges",
                        totalBadges: "totalBadges",
                        collectedBadgePercent: "collectedBadgePercent",
                        guestMode: "guestMode"
                    }))
                },
                f = (n(590), n(36)),
                component = Object(f.a)(h, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "donut-container"
                    }, [n("svg", {
                        staticClass: "donut-progress",
                        attrs: {
                            viewBox: "0 0 100 100",
                            preserveAspectRatio: "xMidYMin slice"
                        }
                    }, [n("circle", {
                        attrs: {
                            cx: "50",
                            cy: "50",
                            r: "43",
                            fill: "#064D81",
                            "fill-opacity": "0.6"
                        }
                    }), t._v(" "), n("circle", {
                        attrs: {
                            cx: "50",
                            cy: "50",
                            r: "43",
                            fill: "transparent",
                            "stroke-width": "7",
                            stroke: "#393939"
                        }
                    }), t._v(" "), n("circle", {
                        staticClass: "progress",
                        attrs: {
                            cx: "50",
                            cy: "50",
                            r: "43",
                            fill: "transparent",
                            "stroke-width": "8",
                            stroke: "#FAD409",
                            "stroke-dasharray": "270.5",
                            "stroke-dashoffset": t.donutDashOffset
                        }
                    }), t._v(" "), n("circle", {
                        attrs: {
                            cx: "50",
                            cy: "50",
                            r: "39.5",
                            fill: "transparent",
                            "stroke-width": "1",
                            stroke: "#fff"
                        }
                    }), t._v(" "), n("circle", {
                        attrs: {
                            cx: "50",
                            cy: "50",
                            r: "47",
                            fill: "transparent",
                            "stroke-width": "1",
                            stroke: "#fff"
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "text-overlay"
                    }, [n("div", {
                        staticClass: "inner"
                    }, [n("div", {
                        staticClass: "label"
                    }, [t._v(t._s(t.t("misc", "YouveCollected")))]), t._v(" "), n("div", {
                        staticClass: "percentage"
                    }, [t.guestMode ? t._e() : n("ICountUp", {
                        attrs: {
                            delay: 800,
                            endVal: t.collectedBadgePercent,
                            options: t.countOptions
                        }
                    }), t._v(" "), t.guestMode ? n("span", [t._v("0")]) : t._e(), t._v("%\n\t\t\t")], 1), t._v(" "), n("div", {
                        staticClass: "total"
                    }, [t.guestMode ? t._e() : n("ICountUp", {
                        attrs: {
                            delay: 800,
                            endVal: t.collectedBadges,
                            options: t.countOptions
                        }
                    }), t._v(" "), t.guestMode ? n("span", [t._v("0")]) : t._e(), t._v("\n\t\t\t\t / " + t._s(t.totalBadges) + "\n\t\t\t")], 1), t._v(" "), t.showbutton ? n("div", {
                        staticClass: "btn-container"
                    }, [n("Button", {
                        staticClass: "btn-view",
                        attrs: {
                            smaller: !0,
                            extrapadding: !0,
                            flexwidth: !0
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.gotoBadges(e)
                            }
                        }
                    }, [t._v("\n\t\t\t\t\t" + t._s(t.t("misc", "View")) + "\n\t\t\t\t")])], 1) : t._e()])])])
                }), [], !1, null, "38509182", null);
            e.default = component.exports;
            installComponents(component, {
                Button: n(111).default
            })
        },
        590: function(t, e, n) {
            "use strict";
            var r = n(568);
            n.n(r).a
        },
        610: function(t, e, n) {
            "use strict";
            var r = n(574);
            n.n(r).a
        },
        621: function(t, e, n) {},
        622: function(t, e, n) {},
        653: function(t, e, n) {
            "use strict";
            n.r(e);
            n(58), n(40), n(37), n(23), n(43), n(69);
            var r = n(8),
                o = (n(86), n(99), n(14)),
                l = n(98),
                c = n(111),
                d = n(566),
                m = n(632),
                h = n(18);

            function f(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function v(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? f(Object(source), !0).forEach((function(e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : f(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var _ = {
                    mixins: [l.a],
                    components: {
                        InputText: d.default,
                        Button: c.default
                    },
                    data: function() {
                        return {
                            animate: !1,
                            disableSubmit: !0,
                            newNickname: "",
                            error: !1,
                            disableNameInput: !1
                        }
                    },
                    mounted: function() {
                        var t = this;
                        setTimeout((function() {
                            t.animate = !0
                        }), 50)
                    },
                    computed: v(v({}, Object(h.b)({
                        trainerID: "trainerID",
                        enableAPI: "enableAPI",
                        guestMode: "guestMode"
                    })), {}, {
                        nickname: {
                            set: function(t) {
                                this.newNickname = t
                            },
                            get: function() {
                                return this.trainerID
                            }
                        }
                    }),
                    methods: {
                        goBack: function() {
                            var t = this;
                            this.animate = !1, setTimeout((function() {
                                t.$emit("close", !0)
                            }), 500)
                        },
                        filterSwearing: function(t) {
                            var e = t.toLowerCase();
                            return !(m.filter((function(t) {
                                return e.includes(t)
                            })).length > 0) || (this.error = "NickNameNotAllowed", this.playSound("error"), !1)
                        },
                        saveNickname: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function e() {
                                var n;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!t.filterSwearing(t.newNickname)) {
                                                e.next = 9;
                                                break
                                            }
                                            if (!t.enableAPI || t.guestMode) {
                                                e.next = 8;
                                                break
                                            }
                                            return t.disableNameInput = !0, n = t, e.next = 6, t.$store.dispatch("editUser", {
                                                name: t.newNickname.toLowerCase(),
                                                team: t.userTeam
                                            }).then((function(t) {
                                                "error" == t.status ? ("user exists" == t.result ? (n.error = "NickNameUsed", n.playSound("error")) : (n.error = "ErrorGeneric", n.playSound("error")), n.disableNameInput = !1) : (n.trackEvent("Trainer Name Changed", "Trainer Name Changed", "Trainer Name Changed"), n.$store.commit("setTrainerID", n.newNickname.toLowerCase()), n.goBack())
                                            }));
                                        case 6:
                                            e.next = 9;
                                            break;
                                        case 8:
                                            alert("DEV: API mode is off, nothing will goto database.");
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        }
                    },
                    watch: {
                        newNickname: function() {
                            this.newNickname.length > 2 && this.newNickname != this.trainerID ? this.disableSubmit = !1 : this.disableSubmit = !0
                        }
                    }
                },
                y = (n(684), n(36)),
                component = Object(y.a)(_, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "edit-nickname",
                        class: {
                            active: t.animate
                        }
                    }, [n("div", {
                        staticClass: "blue-cover"
                    }), t._v(" "), n("div", {
                        staticClass: "white-block"
                    }, [n("div", {
                        staticClass: "white-block-inner"
                    }, [n("div", {
                        staticClass: "panel",
                        class: {
                            active: t.animate
                        }
                    }, [n("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.t("onboarding", "TitleEnterNickname")))]), t._v(" "), n("div", {
                        staticClass: "desc"
                    }, [t._v(t._s(t.t("onboarding", "DescEnterNickname")))]), t._v(" "), n("form", {
                        on: {
                            submit: function(e) {
                                return e.preventDefault(), t.saveNickname(e)
                            }
                        }
                    }, [n("div", {
                        staticClass: "text-field"
                    }, [n("InputText", {
                        attrs: {
                            placeholder: "Your nickname...",
                            disabled: t.disableNameInput
                        },
                        model: {
                            value: t.nickname,
                            callback: function(e) {
                                t.nickname = e
                            },
                            expression: "nickname"
                        }
                    })], 1), t._v(" "), t.error ? n("div", {
                        staticClass: "form-error"
                    }, [t._v("\n\t\t\t\t\t\t" + t._s(t.t("onboarding", t.error)) + "\n\t\t\t\t\t")]) : t._e(), t._v(" "), t.error.nameTaken ? n("div", {
                        staticClass: "form-error"
                    }, [t._v("\n\t\t\t\t\t\t" + t._s(t.t("onboarding", "NickNameUsed")) + "\n\t\t\t\t\t")]) : t._e(), t._v(" "), t.error.notAllowed ? n("div", {
                        staticClass: "form-error"
                    }, [t._v("\n\t\t\t\t\t\t" + t._s(t.t("onboarding", "NickNameNotAllowed")) + "\n\t\t\t\t\t")]) : t._e(), t._v(" "), n("div", {
                        staticClass: "save-button"
                    }, [n("Button", {
                        attrs: {
                            disabled: t.disableSubmit
                        }
                    }, [t._v(t._s(t.t("misc", "SaveChanges")))])], 1)]), t._v(" "), n("div", {
                        staticClass: "close-button"
                    }, [n("Button", {
                        attrs: {
                            color: "blue",
                            smaller: !0,
                            flexwidth: !0
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.goBack(e)
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: "/icons/icon-close.png"
                        }
                    })])], 1)])])])])
                }), [], !1, null, "547b2ef7", null);
            e.default = component.exports;
            installComponents(component, {
                InputText: n(566).default,
                Button: n(111).default
            })
        },
        684: function(t, e, n) {
            "use strict";
            var r = n(621);
            n.n(r).a
        },
        685: function(t, e, n) {
            "use strict";
            var r = n(622);
            n.n(r).a
        },
        713: function(t, e, n) {
            "use strict";
            n.r(e);
            n(58), n(40), n(37), n(23), n(43), n(324), n(100);
            var r = n(45),
                o = n(14),
                l = n(98),
                c = n(18),
                d = n(584),
                m = n(576),
                h = n.n(m),
                f = n(111),
                v = n(653),
                _ = n(562);

            function y(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function C(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? y(Object(source), !0).forEach((function(e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : y(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var k = {
                    mixins: [l.a],
                    components: {
                        DonutBadgesTotal: d.default,
                        ICountUp: h.a,
                        Button: f.default,
                        EditNickname: v.default,
                        TutorialBubble: _.default
                    },
                    data: function() {
                        return {
                            startAnimation: !1,
                            showEditNickname: !1,
                            countOptions: {
                                useEasing: !0,
                                useGrouping: !0,
                                separator: ",",
                                duration: 1
                            },
                            flickityOptions: {
                                prevNextButtons: !1,
                                pageDots: !1,
                                wrapAround: !1,
                                percentPosition: !1,
                                adaptiveHeight: !0
                            },
                            statsCarousel: !1,
                            currentCaroSlide: 0,
                            gameStats: [],
                            tutorial: {},
                            enableTutorial: !1
                        }
                    },
                    beforeMount: function() {
                        this.gameStats = [{
                            gameTitle: this.t("gameName", "WaterfallGameName"),
                            game: "waterfall-crossing",
                            totalPlays: this.gamePlayStats["waterfall-crossing"].timesPlayed,
                            timePlayed: this.gamePlayStats["waterfall-crossing"].elapsedTime,
                            bestScore: this.gamePlayStats["waterfall-crossing"].topScore
                        }, {
                            gameTitle: this.t("gameName", "SnowHoleGameName"),
                            game: "snow-holes",
                            totalPlays: this.gamePlayStats["snow-holes"].timesPlayed,
                            timePlayed: this.gamePlayStats["snow-holes"].elapsedTime,
                            bestScore: this.gamePlayStats["snow-holes"].topScore
                        }, {
                            gameTitle: this.t("gameName", "BattleDunkGameName"),
                            game: "battle-dunk",
                            totalPlays: this.gamePlayStats["battle-dunk"].timesPlayed,
                            timePlayed: this.gamePlayStats["battle-dunk"].elapsedTime,
                            bestScore: this.gamePlayStats["battle-dunk"].topScore
                        }, {
                            gameTitle: this.t("gameName", "RelayGameName"),
                            game: "relay-ridge",
                            totalPlays: this.gamePlayStats["relay-ridge"].timesPlayed,
                            timePlayed: this.gamePlayStats["relay-ridge"].elapsedTime,
                            bestScore: this.gamePlayStats["relay-ridge"].topScore
                        }, {
                            gameTitle: this.t("gameName", "PairGameName"),
                            game: "pair-up",
                            totalPlays: this.gamePlayStats["pair-up"].timesPlayed,
                            timePlayed: this.gamePlayStats["pair-up"].elapsedTime,
                            bestScore: this.gamePlayStats["pair-up"].topScore
                        }], this.tutorial = {
                            title: this.t("trainerZone", "TrainerZoneTutorialTitle"),
                            text: this.t("trainerZone", "TrainerZoneTutorialDesc"),
                            top: 60,
                            left: 29,
                            arrowside: "none",
                            hidebutton: !1
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.trackPageView("Trainer Zone"), setTimeout((function() {
                            t.startAnimation = !0
                        }), 400), this.dev && setTimeout((function() {
                            t.usersCompanionPokemon || (console.log("AUTO SET COMPANION - DEV PURPOSES"), t.$store.commit("setUsersCompanionPokemon", 25))
                        }), 500), this.$nextTick((function() {
                            t.statsCarousel = t.$refs["stats-carousel"], t.statsCarousel.on("change", (function(e) {
                                t.currentCaroSlide = e
                            }))
                        })), this.triggerTutorial()
                    },
                    computed: C(C({}, Object(c.b)({
                        usersCompanionPokemon: "usersCompanionPokemon",
                        trainerID: "trainerID",
                        razzberries: "razzberries",
                        team: "team",
                        dev: "dev",
                        gamePlayStats: "gamePlayStats",
                        guestMode: "guestMode",
                        firstTime: "firstTime",
                        lang: "lang",
                        week: "week"
                    })), {}, {
                        pokemon: function() {
                            return "object" === Object(r.a)(this.usersCompanionPokemon) && {
                                background: "/pokemon/bg-types/bg-".concat(this.usersCompanionPokemon.type.split(",")[0], ".jpg"),
                                image: "/badges/large/".concat(this.usersCompanionPokemon.imageslug, ".png")
                            }
                        }
                    }),
                    methods: {
                        triggerTutorial: function() {
                            var t = this;
                            setTimeout((function() {
                                t.firstTime.trainer && (t.enableTutorial = !0)
                            }), 2e3)
                        },
                        closeTutorial: function() {
                            this.enableTutorial = !1, this.$store.commit("setFirstTime", {
                                page: "trainer",
                                value: !1
                            })
                        },
                        gotoBadges: function() {
                            var t = this;
                            this.startAnimation = !1, setTimeout((function() {
                                t.$router.push("/badges")
                            }), 400)
                        },
                        backToMenu: function() {
                            var t = this;
                            this.startAnimation = !1, this.playSound("transition"), setTimeout((function() {
                                t.$router.push("/main-menu")
                            }), 300)
                        },
                        next: function() {
                            this.statsCarousel.next()
                        },
                        previous: function() {
                            this.statsCarousel.previous()
                        },
                        selectSlide: function(t) {
                            this.statsCarousel.select(t)
                        },
                        secondsToUnit: function(t, output) {
                            t = Number(t);
                            var e = Math.floor(t / 3600),
                                n = Math.floor(t % 3600 / 60);
                            Math.floor(t % 3600 % 60);
                            return "hours" == output ? e : "minutes" == output && n
                        },
                        openEditNickname: function() {
                            this.guestMode || (this.showEditNickname = !0)
                        },
                        closeEditNickname: function() {
                            this.showEditNickname = !1
                        }
                    }
                },
                w = (n(685), n(36)),
                component = Object(w.a)(k, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "trainer-zone letterbox"
                    }, [n("div", {
                        staticClass: "letterbox-container"
                    }, [n("div", {
                        staticClass: "white-block",
                        class: {
                            active: 1 == t.startAnimation
                        }
                    }, [n("div", {
                        staticClass: "white-block-inner"
                    })]), t._v(" "), n("div", {
                        staticClass: "title-bar",
                        class: {
                            active: 1 == t.startAnimation
                        }
                    }, [n("div", {
                        staticClass: "the-bar"
                    }), t._v(" "), n("div", {
                        staticClass: "title-text"
                    }, [t._v("\n\t\t\t\t" + t._s(t.t("trainerZone", "PageTitle")) + "\n\t\t\t")])]), t._v(" "), n("div", {
                        staticClass: "content-container",
                        class: {
                            faded: t.enableTutorial
                        }
                    }, [n("div", {
                        staticClass: "trainer-zone-left",
                        class: {
                            active: 1 == t.startAnimation
                        }
                    }, [n("div", {
                        staticClass: "button-container"
                    }, [n("Button", {
                        attrs: {
                            smaller: !0,
                            flexwidth: !0
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.backToMenu(e)
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: "/icons/icon-arrow-back.png"
                        }
                    })])], 1), t._v(" "), n("div", {
                        staticClass: "trainer-circles"
                    }, [n("div", {
                        staticClass: "trainer-pokemon"
                    }, ["object" == typeof this.usersCompanionPokemon ? n("div", {
                        staticClass: "pokemon-background-circle"
                    }, [n("div", {
                        staticClass: "inner-circle",
                        style: {
                            backgroundImage: "url(" + t.pokemon.background + ")"
                        }
                    }, [n("div", {
                        staticClass: "pokemon"
                    }, [n("img", {
                        attrs: {
                            src: t.pokemon.image
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "btn-container"
                    }, [t.week < 6 ? n("Button", {
                        staticClass: "btn-view",
                        attrs: {
                            smaller: !0,
                            extrapadding: !0,
                            flexwidth: !0
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.gotoBadges(e)
                            }
                        }
                    }, [t._v("\n\t\t\t\t\t\t\t\t" + t._s(t.t("misc", "Edit")) + "\n\t\t\t\t\t\t\t")]) : t._e()], 1)])]) : t._e()]), t._v(" "), t.guestMode ? t._e() : n("div", {
                        staticClass: "trainer-badges"
                    }, [n("DonutBadgesTotal", {
                        staticClass: "donut-container",
                        attrs: {
                            showbutton: !0
                        }
                    })], 1)]), t._v(" "), n("div", {
                        staticClass: "trainer-stats-box"
                    }, [n("div", {
                        staticClass: "trainer-stats-top-row"
                    }, [n("div", {
                        staticClass: "trainer-name-contain"
                    }, [n("h4", [t._v(t._s(t.t("trainerZone", "LabelTrainerID")))]), t._v(" "), n("h3", [t._v(t._s(t.guestMode ? t.t("misc", "Guest") : t.trainerID))])]), t._v(" "), t.week < 6 ? n("Button", {
                        attrs: {
                            smaller: !0,
                            flexwidth: !0,
                            disabled: t.guestMode
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.openEditNickname(e)
                            }
                        }
                    }, [t._v("\n\t\t\t\t\t\t\t" + t._s(t.t("misc", "Edit")) + "\n\t\t\t\t\t\t")]) : t._e()], 1), t._v(" "), n("div", {
                        staticClass: "trainer-stats-bottom-row"
                    }, [n("div", {
                        staticClass: "column"
                    }, [t.guestMode ? n("img", {
                        class: {
                            "guest-mode": t.guestMode
                        },
                        attrs: {
                            src: "/flags/guest_flag_scaled.png"
                        }
                    }) : t._e(), t._v(" "), t.guestMode ? t._e() : n("img", {
                        class: {
                            "guest-mode": t.guestMode
                        },
                        attrs: {
                            src: "/flags/flag-" + t.team + "-no-pole.png"
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "text"
                    }, [n("h4", [t._v(t._s(t.t("misc", "Team")))]), t._v(" "), n("h3", [t._v(t._s(t.guestMode ? "-" : t.t("misc", "Team" + (t.team.charAt(0).toUpperCase() + t.team.slice(1)))))])])]), t._v(" "), n("div", {
                        staticClass: "column"
                    }, [n("img", {
                        attrs: {
                            src: "/icons/razzberry.png"
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "text"
                    }, [t.guestMode ? t._e() : n("ICountUp", {
                        staticClass: "razzberry-text",
                        attrs: {
                            delay: 1e3,
                            endVal: t.razzberries,
                            options: t.countOptions
                        }
                    }), t._v(" "), t.guestMode ? n("span", {
                        staticClass: "razzberry-text guest-mode"
                    }, [t._v("-")]) : t._e()], 1)])])])]), t._v(" "), n("div", {
                        staticClass: "trainer-zone-right",
                        class: {
                            active: 1 == t.startAnimation
                        }
                    }, [n("div", {
                        staticClass: "game-stats-box"
                    }, [n("div", {
                        staticClass: "carousel-player-stats",
                        class: {
                            "guest-mode": t.guestMode
                        }
                    }, [n("Flickity", {
                        ref: "stats-carousel",
                        attrs: {
                            options: t.flickityOptions
                        }
                    }, t._l(t.gameStats, (function(e, i) {
                        return n("div", {
                            key: i,
                            staticClass: "carousel-element"
                        }, [n("div", {
                            staticClass: "game-image-panel"
                        }, [n("div", {
                            staticClass: "game-image",
                            style: {
                                backgroundImage: "url(/bg/bg-trainer-zone-" + e.game + ".jpg)"
                            }
                        }), t._v(" "), n("div", {
                            staticClass: "game-name",
                            class: {
                                "weird-german-non-caps": "de" == t.lang && "relay-ridge" == e.game
                            },
                            domProps: {
                                innerHTML: t._s(e.gameTitle)
                            }
                        })]), t._v(" "), n("div", {
                            staticClass: "game-stats"
                        }, [n("div", {
                            staticClass: "game-stat-third"
                        }, [n("div", {
                            staticClass: "title",
                            domProps: {
                                innerHTML: t._s(t.t("trainerZone", "LabelTotalPlays"))
                            }
                        }), t._v(" "), n("div", {
                            staticClass: "stat"
                        }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t" + t._s(t.guestMode ? "-" : e.totalPlays) + "\n\t\t\t\t\t\t\t\t\t\t")])]), t._v(" "), n("div", {
                            staticClass: "game-stat-third"
                        }, [n("div", {
                            staticClass: "title"
                        }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t" + t._s(t.t("trainerZone", "LabelTimePlayed")) + "\n\t\t\t\t\t\t\t\t\t\t")]), t._v(" "), n("div", {
                            staticClass: "stat"
                        }, [t.secondsToUnit(e.timePlayed, "hours") > 0 ? n("div", {
                            staticClass: "hours"
                        }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + t._s(t.guestMode ? "-" : t.secondsToUnit(e.timePlayed, "hours")) + "\n\t\t\t\t\t\t\t\t\t\t\t\t"), n("small", [t._v(t._s(t.t("misc", "TimeUnitHour")))])]) : t._e(), t._v(" "), n("div", {
                            staticClass: "minutes"
                        }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" + t._s(t.guestMode ? "-" : t.secondsToUnit(e.timePlayed, "minutes")) + "\n\t\t\t\t\t\t\t\t\t\t\t\t"), n("small", [t._v(t._s(t.t("misc", "TimeUnitMins")))])])])]), t._v(" "), n("div", {
                            staticClass: "game-stat-third"
                        }, [n("div", {
                            staticClass: "title"
                        }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t" + t._s(t.t("trainerZone", "LabelBestScore")) + "\n\t\t\t\t\t\t\t\t\t\t")]), t._v(" "), n("div", {
                            staticClass: "stat"
                        }, [n("div", {
                            staticClass: "razzberry"
                        }), t._v("\n\t\t\t\t\t\t\t\t\t\t\t" + t._s(t.guestMode ? "-" : e.bestScore) + "\n\t\t\t\t\t\t\t\t\t\t")])])])])
                    })), 0)], 1), t._v(" "), n("div", {
                        staticClass: "carousel-controls",
                        class: {
                            "guest-mode": t.guestMode
                        }
                    }, [n("div", {
                        staticClass: "button-left caro-button",
                        on: {
                            click: t.previous
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "the-dots"
                    }, t._l(t.gameStats, (function(e, i) {
                        return n("div", {
                            key: i,
                            staticClass: "one-dot",
                            class: {
                                active: i == t.currentCaroSlide
                            },
                            on: {
                                click: function(e) {
                                    return t.selectSlide(i)
                                }
                            }
                        })
                    })), 0), t._v(" "), n("div", {
                        staticClass: "button-right caro-button",
                        on: {
                            click: t.next
                        }
                    })])]), t._v(" "), t.guestMode ? n("div", {
                        staticClass: "not-available-guest-mode"
                    }, [t._v("\n\t\t\t\t\t" + t._s(t.t("misc", "NotAvailableGuestMode")) + "\n\t\t\t\t")]) : t._e()])])]), t._v(" "), t.enableTutorial ? n("div", {
                        staticClass: "tutorials"
                    }, [n("TutorialBubble", {
                        attrs: {
                            title: this.t("trainerZone", "TrainerZoneTutorialTitle"),
                            text: this.t("trainerZone", "TrainerZoneTutorialDesc"),
                            top: t.tutorial.top,
                            left: t.tutorial.left,
                            arrowside: t.tutorial.arrowside,
                            hidebutton: t.tutorial.hidebutton
                        },
                        on: {
                            action: t.closeTutorial
                        }
                    })], 1) : t._e(), t._v(" "), t.showEditNickname ? n("EditNickname", {
                        on: {
                            close: t.closeEditNickname
                        }
                    }) : t._e()], 1)
                }), [], !1, null, "2eb065e8", null);
            e.default = component.exports;
            installComponents(component, {
                Button: n(111).default,
                DonutBadgesTotal: n(584).default,
                TutorialBubble: n(562).default,
                EditNickname: n(653).default
            })
        }
    }
]);