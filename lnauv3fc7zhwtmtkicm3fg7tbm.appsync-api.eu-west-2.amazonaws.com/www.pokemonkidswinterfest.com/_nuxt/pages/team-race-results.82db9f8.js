(window.webpackJsonp = window.webpackJsonp || []).push([
    [21], {
        620: function(t, e, n) {},
        683: function(t, e, n) {
            "use strict";
            var c = n(620);
            n.n(c).a
        },
        712: function(t, e, n) {
            "use strict";
            n.r(e);
            n(58), n(40), n(37), n(23), n(43);
            var c = n(14),
                r = n(98),
                l = n(111),
                o = n(174),
                v = n(18);

            function d(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function h(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? d(Object(source), !0).forEach((function(e) {
                        Object(c.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var f = {
                    mixins: [r.a],
                    transition: "overlay",
                    beforeMount: function() {
                        this.enableAPI && !this.guestMode && this.$store.dispatch("getAllTeamRaceData")
                    },
                    data: function() {
                        return {
                            startAnimation: !1,
                            activeDay: 1,
                            dailyScores: [{
                                day: 1,
                                teams: {
                                    fire: 0,
                                    water: 0,
                                    grass: 0,
                                    electric: 0
                                }
                            }]
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.trackPageView("Team Race Results"), setTimeout((function() {
                            t.startAnimation = !0
                        }), 400), this.activeDay = this.day
                    },
                    components: {
                        Button: l.default,
                        FatText: o.default
                    },
                    computed: h(h({}, Object(v.b)({
                        allTeamRaceData: "allTeamRaceData",
                        day: "day",
                        enableAPI: "enableAPI",
                        guestMode: "guestMode",
                        lang: "lang"
                    })), {}, {
                        moveTrack: function() {
                            return {
                                right: 32 * (-1 * (this.theTeamRaceData.length - this.activeDay)) + "vw"
                            }
                        },
                        theTeamRaceData: function() {
                            return this.allTeamRaceData.slice(0, this.day)
                        }
                    }),
                    methods: {
                        goBack: function() {
                            var t = this;
                            this.startAnimation = !1, this.playSound("transition"), setTimeout((function() {
                                t.$router.go(-1)
                            }), 400)
                        },
                        calculateLeaderboardPosition: function(t) {
                            var e = [];
                            for (var n in t) "false" != n && e.push([n, t[n].score]);
                            return e.sort((function(a, b) {
                                return Math.max.apply(null, b[1]) - Math.max.apply(null, a[1])
                            })), e
                        },
                        navigate: function(t) {
                            this.playSound("swipe"), "left" == t ? this.activeDay > 1 && (this.activeDay = this.activeDay - 1) : "right" == t && this.activeDay < this.theTeamRaceData.length && (this.activeDay = this.activeDay + 1)
                        }
                    }
                },
                y = (n(683), n(36)),
                component = Object(y.a)(f, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "team-race-results"
                    }, [n("div", {
                        staticClass: "background"
                    }), t._v(" "), n("div", {
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
                    }, [t._v("\n\t\t\t" + t._s(t.t("teamRaces", "TitleResults")) + "\n\t\t")])]), t._v(" "), n("div", {
                        staticClass: "content-container"
                    }, [n("div", {
                        staticClass: "right-panel-container",
                        class: {
                            active: 1 == t.startAnimation
                        }
                    }, [n("Button", {
                        attrs: {
                            color: "blue",
                            smaller: !0,
                            flexwidth: !0
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.goBack()
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: "/icons/icon-close.png"
                        }
                    })])], 1)]), t._v(" "), n("div", {
                        staticClass: "race-results-container",
                        class: {
                            active: 1 == t.startAnimation
                        }
                    }, [n("div", {
                        staticClass: "race-results-track",
                        style: t.moveTrack
                    }, t._l(t.theTeamRaceData, (function(e, i) {
                        return n("div", {
                            key: i,
                            staticClass: "result-block",
                            class: {
                                opacity100: i == t.activeDay - 1, opacity75: i - 1 == t.activeDay - 1 || i + 1 == t.activeDay - 1
                            }
                        }, [n("div", {
                            staticClass: "result-title"
                        }, [t._v("\n\t\t\t\t\t" + t._s(t.t("misc", "Day")) + " " + t._s(parseInt(i) + 1) + "\n\t\t\t\t")]), t._v(" "), n("div", {
                            staticClass: "results-list"
                        }, [n("ul", t._l(t.calculateLeaderboardPosition(e), (function(e, c) {
                            return n("li", {
                                key: c
                            }, [n("div", {
                                staticClass: "inner"
                            }, [n("div", {
                                staticClass: "position"
                            }, [n("FatText", {
                                attrs: {
                                    ordinal: !0,
                                    text: c + 1
                                }
                            })], 1), t._v(" "), n("div", {
                                staticClass: "flag",
                                class: e[0]
                            }), t._v(" "), n("div", {
                                staticClass: "razzberry"
                            }), t._v(" "), n("div", {
                                staticClass: "score"
                            }, [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(Math.max.apply(null, e[1]).toLocaleString(t.lang)) + "\n\t\t\t\t\t\t\t\t")])])])
                        })), 0)])])
                    })), 0)]), t._v(" "), n("div", {
                        staticClass: "ui-overlay",
                        class: {
                            show: t.startAnimation
                        }
                    }, [n("div", {
                        staticClass: "dir-button button-left",
                        on: {
                            click: function(e) {
                                return t.navigate("left")
                            }
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "dir-button button-right",
                        on: {
                            click: function(e) {
                                return t.navigate("right")
                            }
                        }
                    })])])
                }), [], !1, null, "0dfc2907", null);
            e.default = component.exports;
            installComponents(component, {
                Button: n(111).default,
                FatText: n(174).default
            })
        }
    }
]);