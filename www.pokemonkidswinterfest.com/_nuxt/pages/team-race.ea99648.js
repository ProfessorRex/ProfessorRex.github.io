(window.webpackJsonp = window.webpackJsonp || []).push([
    [20], {
        561: function(t, e, r) {},
        562: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = {
                    components: {
                        Button: r(111).default
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
                o = (r(565), r(36)),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "tutorial-bubble-container",
                        class: {
                            animate: t.animate
                        }
                    }, [r("div", {
                        staticClass: "tutorial-bubble",
                        class: t.arrowside,
                        style: {
                            top: t.top + "vh",
                            left: t.left + "vw"
                        }
                    }, [r("div", {
                        staticClass: "title"
                    }, [t._v("\n\t\t\t" + t._s(t.title) + "\n\t\t")]), t._v(" "), r("div", {
                        staticClass: "text",
                        domProps: {
                            innerHTML: t._s(t.text)
                        }
                    }), t._v(" "), t.hidebutton ? t._e() : r("div", {
                        staticClass: "button-container"
                    }, [r("Button", {
                        nativeOn: {
                            click: function(e) {
                                return t.$emit("action")
                            }
                        }
                    }, [t._v("\n\t\t\t\t" + t._s(t.t("misc", "Continue")) + "\n\t\t\t")])], 1)])])
                }), [], !1, null, "7b8710f2", null);
            e.default = component.exports;
            installComponents(component, {
                Button: r(111).default
            })
        },
        565: function(t, e, r) {
            "use strict";
            var n = r(561);
            r.n(n).a
        },
        573: function(t, e, r) {},
        580: function(t, e, r) {
            "use strict";
            r.r(e);
            r(58), r(40), r(37), r(23), r(43);
            var n = r(14),
                o = r(18);

            function c(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }
            var l = {
                    props: ["daily"],
                    computed: function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? c(Object(source), !0).forEach((function(e) {
                                Object(n.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({}, Object(o.b)({
                        timeToEndOfCampaign: "timeToEndOfCampaign",
                        timeToEndOfDay: "timeToEndOfDay",
                        timeToEndOfWeek: "timeToEndOfWeek",
                        week: "week"
                    }))
                },
                m = (r(605), r(36)),
                component = Object(m.a)(l, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return t.week < 6 ? r("div", {
                        staticClass: "time-bar"
                    }, [r("div", {
                        staticClass: "the-bar"
                    }), t._v(" "), t.daily ? r("div", {
                        staticClass: "time-text"
                    }, [t._v("\n\t\t" + t._s(t.t("misc", "TimeLeft")) + "  \n\t\t" + t._s(t.timeToEndOfDay.hours)), r("small", [t._v(t._s(t.t("misc", "TimeUnitH")))]), t._v(" \n\t\t" + t._s(t.timeToEndOfDay.minutes)), r("small", [t._v(t._s(t.t("misc", "TimeUnitM")))])]) : t._e(), t._v(" "), t.daily ? t._e() : r("div", {
                        staticClass: "time-text"
                    }, [t._v("\n\t\t" + t._s(t.t("misc", "TimeLeft")) + "  \n\t\t" + t._s(t.timeToEndOfCampaign.days)), r("small", [t._v(t._s(t.t("misc", "TimeUnitD")))]), t._v(" \n\t\t" + t._s(t.timeToEndOfCampaign.hours)), r("small", [t._v(t._s(t.t("misc", "TimeUnitH")))])])]) : t._e()
                }), [], !1, null, "e818355e", null);
            e.default = component.exports
        },
        605: function(t, e, r) {
            "use strict";
            var n = r(573);
            r.n(n).a
        },
        617: function(t, e, r) {},
        618: function(t, e, r) {},
        619: function(t, e, r) {},
        634: function(t, e, r) {
            "use strict";
            r.r(e);
            r(58), r(40), r(37), r(23), r(43), r(100);
            var n = r(14),
                o = r(98),
                c = r(18),
                l = r(652);

            function m(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }

            function f(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? m(Object(source), !0).forEach((function(e) {
                        Object(n.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : m(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var v = {
                    mixins: [o.a],
                    data: function() {
                        return {
                            startAnimation: !1,
                            startPos: 5,
                            endPos: 950,
                            checkpoints: {
                                end: 3e6
                            },
                            randomTrees: [],
                            activeTargetOverride: !1
                        }
                    },
                    components: {
                        TeamRaceFlag: l.default
                    },
                    beforeMount: function() {
                        console.log("teamPositions", this.teamPositions)
                    },
                    mounted: function() {
                        var t = this;
                        setTimeout((function() {
                            t.startAnimation = !0
                        }), 400), this.generateTrees()
                    },
                    computed: f(f({}, Object(c.b)({
                        usersTeam: "team",
                        teamPositions: "teamPositions",
                        lang: "lang",
                        prizes: "teamPrizeLevels"
                    })), {}, {
                        activeTarget: function() {
                            return this.activeTargetOverride ? this.activeTargetOverride : Math.max.apply(null, this.teamPositions[this.usersTeam])
                        },
                        preProsTeamScoreFire: function() {
                            return null != this.teamPositions.fire ? Math.max.apply(null, this.teamPositions.fire).toLocaleString(this.lang) : 0
                        },
                        preProsTeamScoreElectric: function() {
                            return null != this.teamPositions.electric ? Math.max.apply(null, this.teamPositions.electric).toLocaleString(this.lang) : 0
                        },
                        preProsTeamScoreGrass: function() {
                            return null != this.teamPositions.grass ? Math.max.apply(null, this.teamPositions.grass).toLocaleString(this.lang) : 0
                        },
                        preProsTeamScoreWater: function() {
                            return null != this.teamPositions.water ? Math.max.apply(null, this.teamPositions.water).toLocaleString(this.lang) : 0
                        }
                    }),
                    methods: {
                        generateTrees: function() {
                            for (var t = 0, e = [], p = 0; p < this.prizes.length; p++) e.push(parseFloat(this.calculatePouchPosition(1.3 * this.prizes[p].score, !1).left.split("vw")[0]));
                            for (; 1.33 * this.endPos > t;) {
                                for (var r = Math.floor(34 * Math.random()) + 6, n = Math.floor(3 * Math.random()), i = 0; i < e.length; i++) {
                                    var o = e[i] + 15,
                                        c = e[i] + 40;
                                    t + r > o && t + r < c && (t = c)
                                }
                                t += r, this.randomTrees.push({
                                    size: n + 1,
                                    left: t + "vw"
                                })
                            }
                        },
                        moveTo: function(t) {
                            var e = this.positionElement("score", this.activeTarget, !1);
                            if (e >= this.endPos - 50 ? e = this.endPos - 50 : e -= 20, e < 0 && (e = 0), this.startAnimation) return {
                                left: "".concat(-1 * parseInt(e * t), "vw"),
                                transition: "all 3000ms"
                            }
                        },
                        navigate: function(t) {
                            var e = [];
                            for (var r in this.teamPositions) e.push([r, Math.max.apply(null, this.teamPositions[r])]);
                            for (var n in this.prizes) e.push([this.prizes[n].prize, this.prizes[n].score - 160]);
                            e.sort((function(a, b) {
                                return b[1] - a[1]
                            }));
                            for (var o = null, i = 0; i < e.length; i++)
                                if (e[i][1] == this.activeTarget) {
                                    o = i;
                                    break
                                }
                            var c = o;
                            "left" == t ? o < e.length - 1 && (this.playSound("swipe"), c = o + 1) : "right" == t && o > 0 && (this.playSound("swipe"), c = o - 1), this.activeTargetOverride = e[c][1]
                        },
                        positionElement: function(t, e, r) {
                            var n = this.endPos;
                            switch (t) {
                                case "track":
                                    return e / 100 * (n - 50);
                                case "score":
                                    var o = e / this.checkpoints.end * (n - 20);
                                    return e > this.checkpoints.end && !r && (o = n - 20), o
                            }
                        },
                        calculateTeamPosition: function(t) {
                            var e = this.positionElement("score", Math.max.apply(null, this.teamPositions[t]), !1),
                                r = 0;
                            switch (t) {
                                case "fire":
                                    r = 11.1;
                                    break;
                                case "grass":
                                    r = 7.4;
                                    break;
                                case "electric":
                                    r = 3.7;
                                    break;
                                case "water":
                                    r = 0
                            }
                            return {
                                left: e + this.startPos + r + "vw"
                            }
                        },
                        calculatePouchPosition: function(t, e) {
                            var r = this.positionElement("score", t, !0);
                            return e ? {
                                left: r + 20 + "vw"
                            } : {
                                left: r - 35 + "vw"
                            }
                        },
                        calculateLeaderboardPosition: function(t) {
                            var e = [];
                            for (var r in this.teamPositions) e.push([r, Math.max.apply(null, this.teamPositions[r])]);
                            e.sort((function(a, b) {
                                return b[1] - a[1]
                            }));
                            for (var n = null, o = 1, i = 0; i < e.length; i++) {
                                if (e[i][0] == t) {
                                    n = o;
                                    break
                                }
                                o++
                            }
                            return n
                        }
                    }
                },
                d = (r(681), r(36)),
                component = Object(d.a)(v, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "team-race-graphic"
                    }, [r("svg", [r("filter", {
                        attrs: {
                            id: "turbulence",
                            x: "0",
                            y: "0",
                            width: "100%",
                            height: "100%"
                        }
                    }, [r("feTurbulence", {
                        attrs: {
                            id: "sea-filter",
                            numOctaves: "3",
                            seed: "2",
                            baseFrequency: "0.02 0.05"
                        }
                    }), t._v(" "), r("feDisplacementMap", {
                        attrs: {
                            scale: "20",
                            in: "SourceGraphic"
                        }
                    }), t._v(" "), r("animate", {
                        attrs: {
                            "xlink:href": "#sea-filter",
                            attributeName: "baseFrequency",
                            dur: "60s",
                            keyTimes: "0;0.5;1",
                            values: "0.02 0.06;0.04 0.08;0.02 0.06",
                            repeatCount: "indefinite"
                        }
                    })], 1)]), t._v(" "), r("div", {
                        staticClass: "background"
                    }), t._v(" "), r("div", {
                        staticClass: "inner-track",
                        class: {
                            "first-position": t.startAnimation
                        },
                        style: t.moveTo(1)
                    }, [r("div", {
                        staticClass: "top-path"
                    }), t._v(" "), r("div", {
                        staticClass: "lanes"
                    }, [r("div", {
                        staticClass: "divider-lane lane1"
                    }), t._v(" "), r("div", {
                        staticClass: "divider-lane lane2"
                    }), t._v(" "), r("div", {
                        staticClass: "divider-lane lane3"
                    }), t._v(" "), r("div", {
                        staticClass: "start-line"
                    }), t._v(" "), r("div", {
                        staticClass: "finish-line"
                    }), t._v(" "), t._l(t.prizes, (function(e, i) {
                        return r("div", {
                            key: i,
                            staticClass: "prize-line",
                            style: t.calculatePouchPosition(e.score, !0)
                        })
                    })), t._v(" "), r("TeamRaceFlag", {
                        staticClass: "team-race-flag team-fire",
                        style: t.calculateTeamPosition("fire"),
                        attrs: {
                            team: "fire",
                            score: t.preProsTeamScoreFire,
                            position: t.calculateLeaderboardPosition("fire")
                        }
                    }), t._v(" "), r("TeamRaceFlag", {
                        staticClass: "team-race-flag team-grass",
                        style: t.calculateTeamPosition("grass"),
                        attrs: {
                            team: "grass",
                            score: t.preProsTeamScoreGrass,
                            position: t.calculateLeaderboardPosition("grass")
                        }
                    }), t._v(" "), r("TeamRaceFlag", {
                        staticClass: "team-race-flag team-electric",
                        style: t.calculateTeamPosition("electric"),
                        attrs: {
                            team: "electric",
                            score: t.preProsTeamScoreElectric,
                            position: t.calculateLeaderboardPosition("electric")
                        }
                    }), t._v(" "), r("TeamRaceFlag", {
                        staticClass: "team-race-flag team-water",
                        style: t.calculateTeamPosition("water"),
                        attrs: {
                            team: "water",
                            score: t.preProsTeamScoreWater,
                            position: t.calculateLeaderboardPosition("water")
                        }
                    })], 2), t._v(" "), r("div", {
                        staticClass: "bottom-path"
                    }), t._v(" "), t._l(t.prizes, (function(e, i) {
                        return r("div", {
                            key: i,
                            staticClass: "prize-bag-track",
                            style: t.calculatePouchPosition(e.score, !1)
                        }, [r("div", {
                            staticClass: "prize"
                        }, [r("div", {
                            staticClass: "pouch",
                            class: e.prize
                        }), t._v(" "), r("div", {
                            staticClass: "score-label"
                        }, [r("div", {
                            staticClass: "razzberry"
                        }), t._v(" "), r("div", {
                            staticClass: "score"
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e.score.toLocaleString(t.lang)) + "\n\t\t\t\t\t")])])])])
                    })), t._v(" "), r("div", {
                        staticClass: "foreground-trees",
                        style: t.moveTo(.3)
                    }, t._l(t.randomTrees, (function(t, i) {
                        return r("div", {
                            key: i,
                            staticClass: "tree",
                            class: "size" + t.size,
                            style: {
                                left: t.left
                            }
                        })
                    })), 0)], 2), t._v(" "), r("div", {
                        staticClass: "ui-overlay",
                        class: {
                            show: t.startAnimation
                        }
                    }, [r("div", {
                        staticClass: "dir-button button-left",
                        on: {
                            click: function(e) {
                                return t.navigate("left")
                            }
                        }
                    }), t._v(" "), r("div", {
                        staticClass: "dir-button button-right",
                        on: {
                            click: function(e) {
                                return t.navigate("right")
                            }
                        }
                    })])])
                }), [], !1, null, "726cc542", null);
            e.default = component.exports;
            installComponents(component, {
                TeamRaceFlag: r(652).default
            })
        },
        652: function(t, e, r) {
            "use strict";
            r.r(e);
            r(58), r(40), r(37), r(23), r(43);
            var n = r(14),
                o = (r(174), r(18));

            function c(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }

            function l(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? c(Object(source), !0).forEach((function(e) {
                        Object(n.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var m = {
                    props: ["team", "score", "position"],
                    data: function() {
                        return {
                            randomAnimationOffset: 0
                        }
                    },
                    mounted: function() {},
                    computed: l(l({}, Object(o.b)({
                        lang: "lang"
                    })), {}, {
                        randomAniOffset: function() {
                            var t = Math.floor(5e3 * Math.random());
                            return {
                                animationDelay: "-".concat(t, "ms")
                            }
                        }
                    }),
                    methods: {}
                },
                f = (r(680), r(36)),
                component = Object(f.a)(m, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "team-race-flag"
                    }, [r("div", {
                        staticClass: "flag-main",
                        style: t.randomAniOffset
                    }, [r("div", {
                        staticClass: "flag-base"
                    }), t._v(" "), r("div", {
                        staticClass: "the-flag",
                        class: t.team,
                        style: t.randomAniOffset
                    }), t._v(" "), r("div", {
                        staticClass: "position"
                    }, [r("FatText", {
                        attrs: {
                            text: t.position,
                            small: !0,
                            ordinal: !0
                        }
                    })], 1), t._v(" "), r("div", {
                        staticClass: "score-flag-pole"
                    }, [r("div", {
                        staticClass: "score-flag"
                    }, [r("div", {
                        staticClass: "score-flag-inner"
                    }, [r("div", {
                        staticClass: "razzberry"
                    }), t._v(" "), r("div", {
                        staticClass: "score"
                    }, [t._v("\n\t\t\t\t\t\t" + t._s(t.score) + "\n\t\t\t\t\t")])])])])])])
                }), [], !1, null, "14951eb0", null);
            e.default = component.exports;
            installComponents(component, {
                FatText: r(174).default
            })
        },
        680: function(t, e, r) {
            "use strict";
            var n = r(617);
            r.n(n).a
        },
        681: function(t, e, r) {
            "use strict";
            var n = r(618);
            r.n(n).a
        },
        682: function(t, e, r) {
            "use strict";
            var n = r(619);
            r.n(n).a
        },
        711: function(t, e, r) {
            "use strict";
            r.r(e);
            r(58), r(40), r(37), r(23), r(43);
            var n = r(14),
                o = r(98),
                c = r(111),
                l = r(580),
                m = r(634),
                f = r(562),
                v = r(18);

            function d(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }
            var h = {
                    mixins: [o.a],
                    transition: "overlay",
                    data: function() {
                        return {
                            startAnimation: !1,
                            pokemon: [],
                            thisPokemon: {
                                id: "",
                                enname: "",
                                imageslug: "",
                                type: ""
                            },
                            tutorial: {},
                            enableTutorial: !1
                        }
                    },
                    components: {
                        Button: c.default,
                        TimeLeftBar: l.default,
                        TeamRace: m.default,
                        TutorialBubble: f.default
                    },
                    methods: {
                        backToMenu: function() {
                            var t = this;
                            this.startAnimation = !1, this.playSound("transition"), setTimeout((function() {
                                t.$router.push("/main-menu")
                            }), 300)
                        },
                        routeTo: function(t) {
                            this.playSound("transition"), this.$router.push("/" + t)
                        },
                        triggerTutorial: function() {
                            var t = this;
                            setTimeout((function() {
                                t.firstTime.teamRaces && (t.enableTutorial = !0)
                            }), 2e3)
                        },
                        closeTutorial: function() {
                            this.enableTutorial = !1, this.$store.commit("setFirstTime", {
                                page: "teamRaces",
                                value: !1
                            })
                        }
                    },
                    computed: function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? d(Object(source), !0).forEach((function(e) {
                                Object(n.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({}, Object(v.b)({
                        day: "day",
                        firstTime: "firstTime",
                        enableAPI: "enableAPI",
                        guestMode: "guestMode"
                    })),
                    beforeMount: function() {
                        this.tutorial = {
                            title: this.t("teamRaces", "TeamRacesTutorialTitle"),
                            text: this.t("teamRaces", "TeamRacesTutorialDesc"),
                            top: 60,
                            left: 29,
                            arrowside: "none",
                            hidebutton: !1
                        }, this.enableAPI && !this.guestMode && this.$store.dispatch("getAllTeamRaceData")
                    },
                    mounted: function() {
                        var t = this;
                        this.trackPageView("Team Races"), this.$store.commit("setActiveMusic", "teamrace"), this.triggerTutorial(), setTimeout((function() {
                            t.startAnimation = !0
                        }), 400)
                    }
                },
                O = (r(682), r(36)),
                component = Object(O.a)(h, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "team-race"
                    }, [r("div", {
                        staticClass: "team-race-inner",
                        class: {
                            faded: t.enableTutorial
                        }
                    }, [r("TeamRace")], 1), t._v(" "), r("div", {
                        staticClass: "title-bar",
                        class: {
                            active: 1 == t.startAnimation
                        }
                    }, [r("div", {
                        staticClass: "the-bar"
                    }), t._v(" "), r("div", {
                        staticClass: "title-text"
                    }, [t._v("\n\t\t\t" + t._s(t.t("teamRaces", "PageTitle")) + " "), r("em", [t._v(t._s(t.t("misc", "Day")) + " " + t._s(t.day))])])]), t._v(" "), r("TimeLeftBar", {
                        staticClass: "time-left",
                        class: {
                            active: 1 == t.startAnimation
                        },
                        attrs: {
                            daily: !0
                        }
                    }), t._v(" "), r("div", {
                        staticClass: "content-container"
                    }, [r("div", {
                        staticClass: "left-panel-container",
                        class: {
                            active: 1 == t.startAnimation
                        }
                    }, [r("div", {
                        staticClass: "button-container"
                    }, [r("Button", {
                        attrs: {
                            smaller: !0,
                            flexwidth: !0
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.backToMenu(e)
                            }
                        }
                    }, [r("img", {
                        attrs: {
                            src: "/icons/icon-arrow-back.png"
                        }
                    })])], 1)]), t._v(" "), r("div", {
                        staticClass: "right-panel-container",
                        class: {
                            active: 1 == t.startAnimation
                        }
                    }, [r("Button", {
                        attrs: {
                            color: "blue",
                            smaller: !0,
                            flexwidth: !0,
                            extrapadding: !0
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.routeTo("team-race-results")
                            }
                        }
                    }, [t._v("\n\t\t\t\t" + t._s(t.t("teamRaces", "ButtonViewResults")) + "\n\t\t\t")])], 1)]), t._v(" "), t.enableTutorial ? r("div", {
                        staticClass: "tutorials"
                    }, [r("TutorialBubble", {
                        attrs: {
                            title: this.t("teamRaces", "TeamRacesTutorialTitle"),
                            text: this.t("teamRaces", "TeamRacesTutorialDesc"),
                            top: t.tutorial.top,
                            left: t.tutorial.left,
                            arrowside: t.tutorial.arrowside,
                            hidebutton: t.tutorial.hidebutton
                        },
                        on: {
                            action: t.closeTutorial
                        }
                    })], 1) : t._e()], 1)
                }), [], !1, null, "5078aec4", null);
            e.default = component.exports;
            installComponents(component, {
                TeamRace: r(634).default,
                TimeLeftBar: r(580).default,
                Button: r(111).default,
                TutorialBubble: r(562).default
            })
        }
    }
]);