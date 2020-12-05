(window.webpackJsonp = window.webpackJsonp || []).push([
    [9], {
        561: function(t, e, n) {},
        562: function(t, e, n) {
            "use strict";
            n.r(e);
            var o = {
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
                r = (n(565), n(36)),
                component = Object(r.a)(o, (function() {
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
        564: function(t, e, n) {},
        565: function(t, e, n) {
            "use strict";
            var o = n(561);
            n.n(o).a
        },
        567: function(t, e, n) {
            "use strict";
            n.r(e);
            var o = {
                    props: ["number", "shadow", "bigger", "noanimation", "tick"]
                },
                r = (n(578), n(36)),
                component = Object(r.a)(o, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "alert-circle",
                        class: {
                            shadow: t.shadow, bigger: t.bigger, "is-number": t.number, "is-tick": t.tick, "no-animation": t.noanimation
                        }
                    }, [n("div", {
                        staticClass: "inner"
                    }, [t.number ? t._e() : n("div", {
                        staticClass: "icon"
                    }, [t.tick ? t._e() : n("img", {
                        attrs: {
                            src: "/icons/exclamation-mark.png"
                        }
                    }), t._v(" "), t.tick ? n("img", {
                        attrs: {
                            src: "/icons/icon-tick.png"
                        }
                    }) : t._e()]), t._v(" "), t.number ? n("div", {
                        staticClass: "number"
                    }, [t._v("\n\t\t\t" + t._s(t.number) + "\n\t\t")]) : t._e()])])
                }), [], !1, null, "1572b586", null);
            e.default = component.exports
        },
        578: function(t, e, n) {
            "use strict";
            var o = n(564);
            n.n(o).a
        },
        597: function(t, e, n) {},
        666: function(t, e, n) {
            "use strict";
            var o = n(597);
            n.n(o).a
        },
        706: function(t, e, n) {
            "use strict";
            n.r(e);
            n(58), n(40), n(37), n(23), n(43);
            var o = n(14),
                r = n(567),
                c = n(98),
                l = n(175),
                d = n(111),
                h = n(174),
                m = n(562),
                v = n(18);

            function w(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }
            var y = {
                    mixins: [c.a],
                    components: {
                        AlertCircle: r.default,
                        AwardGoodies: l.default,
                        Button: d.default,
                        FatText: h.default,
                        TutorialBubble: m.default
                    },
                    data: function() {
                        return {
                            startAnimation: !1,
                            preventRespin: !1,
                            spin: !1,
                            showAward: !1,
                            wheelSegments: [{
                                amount: !1,
                                image: "/icons/pouch3-small.png",
                                type: "pouch",
                                pouch: 3
                            }, {
                                amount: !1,
                                image: "/icons/pouch3-small.png",
                                type: "pouch",
                                pouch: 3
                            }, {
                                amount: !1,
                                image: "/icons/pouch4-small.png",
                                type: "pouch",
                                pouch: 4
                            }, {
                                amount: !1,
                                image: "/icons/pouch4-small.png",
                                type: "pouch",
                                pouch: 4
                            }, {
                                amount: !1,
                                image: "/icons/pouch4-small.png",
                                type: "pouch",
                                pouch: 4
                            }, {
                                amount: !1,
                                image: "/icons/pouch4-small.png",
                                type: "pouch",
                                pouch: 4
                            }, {
                                amount: !1,
                                image: "/icons/pouch4-small.png",
                                type: "pouch",
                                pouch: 4
                            }, {
                                amount: !1,
                                image: "/icons/pouch4-small.png",
                                type: "pouch",
                                pouch: 4
                            }, {
                                amount: 20,
                                image: "/icons/golden-razzberry.png",
                                type: "golden-razzberries",
                                pouch: null
                            }, {
                                amount: 20,
                                image: "/icons/golden-razzberry.png",
                                type: "golden-razzberries",
                                pouch: null
                            }, {
                                amount: 3,
                                image: "/icons/extra-spins.png",
                                type: "extra-spins",
                                pouch: null
                            }, {
                                amount: 3,
                                image: "/icons/extra-spins.png",
                                type: "extra-spins",
                                pouch: null
                            }],
                            winningSegment: {
                                amount: !1,
                                image: "/icons/pouch-small.png",
                                type: "pouch",
                                pouch: 1
                            },
                            tutorial: {},
                            enableTutorial: !1,
                            chainReward: !1
                        }
                    },
                    beforeMount: function() {
                        this.tutorial = {
                            title: this.t("dailyRewards", "DailyRewardsTutorialTitle"),
                            text: this.t("dailyRewards", "DailyRewardsTutorialDesc"),
                            top: 60,
                            left: 29,
                            arrowside: "none",
                            hidebutton: !1
                        }, 3 == this.week && (this.wheelSegments = [{
                            amount: !1,
                            image: "/icons/pouch4-small.png",
                            type: "pouch",
                            pouch: 4
                        }, {
                            amount: 3,
                            image: "/icons/pouch3-small.png",
                            type: "pouch",
                            pouch: 3
                        }, {
                            amount: 5,
                            image: "/icons/pouch2-small.png",
                            type: "pouch",
                            pouch: 2
                        }, {
                            amount: !1,
                            image: "/icons/pouch1-small.png",
                            type: "pouch",
                            pouch: 1
                        }, {
                            amount: !1,
                            image: "/icons/pouch1-small.png",
                            type: "pouch",
                            pouch: 1
                        }, {
                            amount: !1,
                            image: "/icons/pouch1-small.png",
                            type: "pouch",
                            pouch: 1
                        }, {
                            amount: 50,
                            image: "/icons/golden-razzberry.png",
                            type: "golden-razzberries",
                            pouch: null
                        }, {
                            amount: 50,
                            image: "/icons/golden-razzberry.png",
                            type: "golden-razzberries",
                            pouch: null
                        }, {
                            amount: 250,
                            image: "/icons/razzberry.png",
                            type: "razzberries",
                            pouch: null
                        }, {
                            amount: 250,
                            image: "/icons/razzberry.png",
                            type: "razzberries",
                            pouch: null
                        }, {
                            amount: 250,
                            image: "/icons/razzberry.png",
                            type: "razzberries",
                            pouch: null
                        }, {
                            amount: 3,
                            image: "/icons/extra-spins.png",
                            type: "extra-spins",
                            pouch: null
                        }])
                    },
                    mounted: function() {
                        var t = this;
                        this.trackPageView("Daily Rewards"), setTimeout((function() {
                            t.startAnimation = !0
                        }), 400), this.wheelSegments = this.shuffleWheelSegments(), this.triggerTutorial()
                    },
                    computed: function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? w(Object(source), !0).forEach((function(e) {
                                Object(o.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : w(Object(source)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({}, Object(v.b)({
                        freeSpins: "spinsRemaining",
                        dayChained: "consecutiveDaysVisited",
                        firstTime: "firstTime",
                        hasClaimedDailyRewardsDay7Pouch: "hasClaimedDailyRewardsDay7Pouch",
                        week: "week"
                    })),
                    methods: {
                        triggerTutorial: function() {
                            var t = this;
                            setTimeout((function() {
                                t.firstTime.rewards && (t.enableTutorial = !0)
                            }), 2e3)
                        },
                        closeTutorial: function() {
                            this.enableTutorial = !1, this.$store.commit("setFirstTime", {
                                page: "rewards",
                                value: !1
                            })
                        },
                        shuffleWheelSegments: function() {
                            for (var t = this.wheelSegments, i = t.length - 1; i > 0; i--) {
                                var e = Math.floor(Math.random() * (i + 1)),
                                    n = [t[e], t[i]];
                                t[i] = n[0], t[e] = n[1]
                            }
                            return t
                        },
                        backToMenu: function() {
                            var t = this;
                            this.startAnimation = !1, this.playSound("transition"), setTimeout((function() {
                                t.$router.push("/main-menu")
                            }), 300)
                        },
                        youSpinMeRightRoundBabyRightRoundLikeARecordBabyRightRoundRoundRound: function() {
                            this.trackEvent("Daily Rewards", "Wheel Spun", "Wheel Spun");
                            var t = this;
                            if (!this.preventRespin && this.freeSpins > 0) {
                                var e = Math.floor(Math.random() * Math.floor(11));
                                this.preventRespin = !0, this.spin = !0, this.$store.commit("consumeSpin"), this.playSound("swipe"), setTimeout((function() {
                                    t.playSound("wheelspin")
                                }), 400), this.$gsap.timeline({
                                    repeat: 0,
                                    ease: this.$gsap.Linear.easeInOut(2)
                                }).to(this.$refs.wheel, {
                                    duration: 3,
                                    delay: 1,
                                    rotation: -30 * e
                                }), setTimeout((function() {
                                    t.spin = !1, t.winningSegment = t.wheelSegments[e], "pouch" == t.winningSegment.type && !1 !== t.winningSegment.amount ? t.chainReward = t.winningSegment.amount : t.preventRespin = !1;
                                    var n = "";
                                    if ("pouch" == t.winningSegment.type) {
                                        var o;
                                        switch (t.winningSegment.pouch) {
                                            case 1:
                                                o = "Common Pouch";
                                                break;
                                            case 2:
                                                o = "Rare Pouch";
                                                break;
                                            case 3:
                                                o = "Epic Pouch";
                                                break;
                                            case 4:
                                                o = "Legendary Pouch"
                                        }
                                        n = t.winningSegment.amount ? "".concat(t.winningSegment.amount, " x ").concat(o) : "".concat(o)
                                    } else n = "".concat(t.winningSegment.amount, " x ").concat(t.winningSegment.type);
                                    t.trackEvent("Daily Rewards", "Prize", n), t.showAward = !0
                                }), 7500)
                            }
                        },
                        closeAwards: function() {
                            var t = this;
                            this.showAward = !1, !1 !== this.chainReward && this.chainReward > 1 ? (this.preventRespin = !0, this.chainReward--, setTimeout((function() {
                                t.showAward = !0
                            }), 100)) : (this.chainReward = !1, this.preventRespin = !1)
                        },
                        awardBonusPouch: function() {
                            this.winningSegment = {
                                amount: !1,
                                image: "/icons/pouch3-small.png",
                                type: "pouch",
                                pouch: 3
                            }, this.showAward = !0, this.$store.commit("setHasClaimedDailyRewardsDay7Pouch", !0)
                        }
                    }
                },
                f = (n(666), n(36)),
                component = Object(f.a)(y, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "daily-rewards letterbox"
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
                        staticClass: "spin-wheel-container",
                        class: {
                            show: 1 == t.startAnimation, faded: t.enableTutorial
                        }
                    }, [n("div", {
                        ref: "wheel",
                        staticClass: "wheel-container"
                    }, [n("div", {
                        staticClass: "the-wheel",
                        class: {
                            spin: t.spin
                        }
                    }, t._l(t.wheelSegments, (function(e, i) {
                        return n("div", {
                            key: i,
                            staticClass: "segment",
                            style: {
                                transform: "rotate(" + 30 * i + "deg)"
                            }
                        }, [e.image ? n("img", {
                            staticClass: "segment-image",
                            attrs: {
                                src: e.image
                            }
                        }) : t._e(), t._v(" "), !1 !== e.amount ? n("FatText", {
                            staticClass: "segment-text",
                            attrs: {
                                text: "x" + e.amount,
                                large: !0
                            }
                        }) : t._e()], 1)
                    })), 0)]), t._v(" "), n("div", {
                        staticClass: "wheel-overlay"
                    }), t._v(" "), n("div", {
                        staticClass: "pointer"
                    })]), t._v(" "), n("div", {
                        staticClass: "title-bar",
                        class: {
                            active: 1 == t.startAnimation
                        }
                    }, [n("div", {
                        staticClass: "the-bar"
                    }), t._v(" "), n("div", {
                        staticClass: "title-text"
                    }, [t._v("\n\t\t\t\t" + t._s(t.t("dailyRewards", "PageTitle")) + "\n\t\t\t")])]), t._v(" "), n("div", {
                        staticClass: "content-container",
                        class: {
                            faded: t.enableTutorial
                        }
                    }, [n("div", {
                        staticClass: "daily-rewards-left",
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
                    })])], 1)]), t._v(" "), n("div", {
                        staticClass: "daily-rewards-right",
                        class: {
                            active: 1 == t.startAnimation
                        }
                    }, [n("div", {
                        staticClass: "spin-control-box"
                    }, [n("div", {
                        staticClass: "spin-control-top"
                    }, [n("p", [t._v(t._s(t.t("dailyRewards", "Description")))]), t._v(" "), n("div", {
                        staticClass: "button-container"
                    }, [n("Button", {
                        attrs: {
                            fullwidth: !0,
                            disabled: 0 === t.freeSpins || t.preventRespin
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.youSpinMeRightRoundBabyRightRoundLikeARecordBabyRightRoundRoundRound(e)
                            }
                        }
                    }, [t._v("\n\t\t\t\t\t\t\t\t" + t._s(t.t("dailyRewards", "ButtonSpin")) + "\n\t\t\t\t\t\t\t")]), t._v(" "), t.freeSpins > 0 ? n("AlertCircle", {
                        staticClass: "free-spins-alert",
                        attrs: {
                            number: t.freeSpins,
                            shadow: !0,
                            bigger: !0
                        }
                    }) : t._e()], 1)]), t._v(" "), n("div", {
                        staticClass: "spin-control-bottom"
                    }, [n("div", {
                        staticClass: "small-days-block"
                    }, t._l(6, (function(i) {
                        return n("div", {
                            key: i,
                            staticClass: "day-block",
                            class: {
                                completed: i <= t.dayChained
                            }
                        }, [n("div", {
                            staticClass: "day-title-bar"
                        }, [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(t.t("misc", "Day")) + " " + t._s(i) + "\n\t\t\t\t\t\t\t\t")]), t._v(" "), n("div", {
                            staticClass: "day-block-inner"
                        }, [n("FatText", {
                            attrs: {
                                text: "+" + i,
                                small: !0
                            }
                        })], 1), t._v(" "), i <= t.dayChained ? n("AlertCircle", {
                            staticClass: "day-complete",
                            attrs: {
                                shadow: !0,
                                tick: !0,
                                noanimation: !0
                            }
                        }) : t._e()], 1)
                    })), 0), t._v(" "), n("div", {
                        staticClass: "large-day-block"
                    }, [n("div", {
                        staticClass: "day-block day7",
                        class: {
                            completed: 7 <= t.dayChained, claimed: t.hasClaimedDailyRewardsDay7Pouch
                        }
                    }, [n("div", {
                        staticClass: "day-title-bar"
                    }, [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(t.t("misc", "Day")) + " 7\n\t\t\t\t\t\t\t\t")]), t._v(" "), n("div", {
                        staticClass: "day-block-inner"
                    }, [n("div", {
                        staticClass: "pouch-block"
                    }, [n("img", {
                        attrs: {
                            src: "/icons/pouch-small.png"
                        }
                    }), t._v(" "), 7 <= t.dayChained && !t.hasClaimedDailyRewardsDay7Pouch ? n("Button", {
                        attrs: {
                            smaller: !0,
                            flexwidth: !0
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.awardBonusPouch(e)
                            }
                        }
                    }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t" + t._s(t.t("misc", "Claim")) + "\n\t\t\t\t\t\t\t\t\t\t")]) : t._e()], 1)]), t._v(" "), 7 <= t.dayChained ? n("AlertCircle", {
                        staticClass: "day-complete",
                        attrs: {
                            shadow: !0,
                            tick: !0,
                            noanimation: !0
                        }
                    }) : t._e()], 1)])]), t._v(" "), n("div", {
                        staticClass: "spin-control-footer"
                    }, [t._v("\n\t\t\t\t\t\t" + t._s(t.t("dailyRewards", "CTA")) + "\n\t\t\t\t\t")])])])])]), t._v(" "), t.enableTutorial ? n("div", {
                        staticClass: "tutorials"
                    }, [n("TutorialBubble", {
                        attrs: {
                            title: this.t("dailyRewards", "DailyRewardsTutorialTitle"),
                            text: this.t("dailyRewards", "DailyRewardsTutorialDesc"),
                            top: t.tutorial.top,
                            left: t.tutorial.left,
                            arrowside: t.tutorial.arrowside,
                            hidebutton: t.tutorial.hidebutton
                        },
                        on: {
                            action: t.closeTutorial
                        }
                    })], 1) : t._e(), t._v(" "), t.showAward ? n("AwardGoodies", {
                        attrs: {
                            data: t.winningSegment
                        },
                        on: {
                            claim: function(e) {
                                return t.closeAwards()
                            }
                        }
                    }) : t._e()], 1)
                }), [], !1, null, "3ca60004", null);
            e.default = component.exports;
            installComponents(component, {
                FatText: n(174).default,
                Button: n(111).default,
                AlertCircle: n(567).default,
                TutorialBubble: n(562).default,
                AwardGoodies: n(175).default
            })
        }
    }
]);