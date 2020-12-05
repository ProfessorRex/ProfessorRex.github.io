(window.webpackJsonp = window.webpackJsonp || []).push([
    [18], {
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
        565: function(t, e, n) {
            "use strict";
            var o = n(561);
            n.n(o).a
        },
        571: function(t, e, n) {},
        572: function(t, e, n) {},
        581: function(t, e, n) {
            "use strict";
            n.r(e);
            n(58), n(40), n(37), n(23), n(43);
            var o = n(14),
                r = n(111),
                c = n(18);

            function l(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function d(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? l(Object(source), !0).forEach((function(e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var m = {
                    components: {
                        Button: r.default
                    },
                    data: function() {
                        return {
                            startAnimation: !1,
                            events: ["opening-ceremony", "team-battles", "lucky-event", "closing-ceremony"],
                            activeEvent: 0,
                            eventsData: {
                                "opening-ceremony": {
                                    title: "EventOpeningCeremonyTitle",
                                    desc: "EventOpeningCeremonyDesc",
                                    items: [{
                                        desc: "EventOpeningCeremonyItem1",
                                        image: "reward1_doubleSpins.png"
                                    }, {
                                        desc: "EventOpeningCeremonyItem2",
                                        image: "reward2_doubleRazzBerries.png"
                                    }, {
                                        desc: "EventOpeningCeremonyItem3",
                                        image: "reward3_bonusLegendaryPouch.png"
                                    }],
                                    hasFeaturedImage: !0
                                },
                                "team-battles": {
                                    title: "EventTeamBattleTitle",
                                    desc: "EventTeamBattleDesc",
                                    items: [{
                                        desc: "EventTeamBattleItem1",
                                        image: "reward1_goldenRazzBerries.png"
                                    }],
                                    hasFeaturedImage: !1
                                },
                                "lucky-event": {
                                    title: "EventLuckyEventTitle",
                                    desc: "EventLuckyEventDesc",
                                    items: [{
                                        desc: "EventLuckyEventItem1",
                                        image: "reward1_rareRewards.png"
                                    }, {
                                        desc: "EventLuckyEventItem2",
                                        image: "reward2_pouchSpin.png"
                                    }, {
                                        desc: "EventLuckyEventItem3",
                                        image: "reward3_extraSpin.png"
                                    }],
                                    hasFeaturedImage: !0
                                },
                                "closing-ceremony": {
                                    title: "EventClosingCeremonyTitle",
                                    desc: "EventClosingCeremonyDesc",
                                    items: [{
                                        desc: "EventClosingCeremonyItem1",
                                        image: "reward1_tripleRazzBerries.png"
                                    }, {
                                        desc: "EventClosingCeremonyItem2",
                                        image: "reward2_triplePouches.png"
                                    }, {
                                        desc: "EventClosingCeremonyItem3",
                                        image: "reward3_goldenRazzBerries.png"
                                    }, {
                                        desc: "EventClosingCeremonyItem4",
                                        image: "reward4_mythical.png"
                                    }, {
                                        desc: "EventClosingCeremonyItem5",
                                        image: "reward5_bonusLegendaryPouch.png"
                                    }],
                                    hasFeaturedImage: !0
                                }
                            }
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.activeEvent = this.alteredWeek - 1, setTimeout((function() {
                            t.startAnimation = !0
                        }), 100)
                    },
                    computed: d(d({}, Object(c.b)({
                        timeToEndOfCampaign: "timeToEndOfCampaign",
                        timeToEndOfDay: "timeToEndOfDay",
                        timeToEndOfWeek: "timeToEndOfWeek",
                        week: "week"
                    })), {}, {
                        alteredWeek: function() {
                            return 5 == this.week ? 4 : this.week
                        }
                    }),
                    methods: {
                        goBack: function() {
                            var t = this;
                            this.startAnimation = !1, setTimeout((function() {
                                t.$emit("close", !0)
                            }), 400)
                        }
                    }
                },
                v = (n(602), n(36)),
                component = Object(v.a)(m, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "event-screen",
                        class: {
                            active: t.startAnimation
                        }
                    }, [n("div", {
                        staticClass: "background"
                    }), t._v(" "), n("div", {
                        staticClass: "title-bar",
                        class: {
                            active: t.startAnimation
                        }
                    }, [n("div", {
                        staticClass: "the-bar"
                    }), t._v(" "), n("div", {
                        staticClass: "title-text"
                    }, [t._v("\n\t\t\t" + t._s(t.t("misc", t.eventsData[t.events[t.activeEvent]].title)) + "\n\t\t")])]), t._v(" "), n("div", {
                        staticClass: "content-container"
                    }, [n("div", {
                        staticClass: "panel-container",
                        class: {
                            active: t.startAnimation
                        }
                    }, [n("div", {
                        staticClass: "close-btn-contain"
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
                    })])], 1), t._v(" "), n("div", {
                        staticClass: "left info-panel"
                    }, [n("div", {
                        staticClass: "large-image-container",
                        style: {
                            backgroundImage: "url(/events/" + t.events[t.activeEvent] + "-bg.jpg)"
                        }
                    }, [t.eventsData[t.events[t.activeEvent]].hasFeaturedImage ? n("div", {
                        staticClass: "floating-image",
                        style: {
                            backgroundImage: "url(/events/" + t.events[t.activeEvent] + "-feature.png)"
                        }
                    }) : t._e(), t._v(" "), n("div", {
                        staticClass: "inner"
                    }, [n("div", {
                        staticClass: "time-bar",
                        class: {
                            active: t.startAnimation
                        }
                    }, [n("div", {
                        staticClass: "the-bar"
                    }), t._v(" "), n("div", {
                        staticClass: "time-text"
                    }, [n("div", {
                        staticClass: "the-clock"
                    }), t._v("\n\t\t\t\t\t\t\t\t" + t._s(t.timeToEndOfWeek.days)), n("small", [t._v(t._s(t.t("misc", "TimeUnitD")))]), t._v(" \n\t\t\t\t\t\t\t\t" + t._s(t.timeToEndOfWeek.hours)), n("small", [t._v(t._s(t.t("misc", "TimeUnitH")))])])])])]), t._v(" "), n("div", {
                        staticClass: "description-text"
                    }, [t._v("\n\t\t\t\t\t" + t._s(t.t("misc", t.eventsData[t.events[t.activeEvent]].desc)) + "\n\t\t\t\t")])]), t._v(" "), n("div", {
                        staticClass: "right info-panel"
                    }, [n("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.t("misc", "EventRewards")))]), t._v(" "), n("div", {
                        staticClass: "rows-contain"
                    }, t._l(t.eventsData[t.events[t.activeEvent]].items, (function(e, i) {
                        return n("div", {
                            key: i,
                            staticClass: "row"
                        }, [n("div", {
                            staticClass: "thumbnail"
                        }, [n("div", {
                            staticClass: "the-image",
                            style: {
                                backgroundImage: "url(/events/" + e.image + ")"
                            }
                        })]), t._v(" "), n("div", {
                            staticClass: "text"
                        }, [t._v("\n\t\t\t\t\t\t\t" + t._s(t.t("misc", e.desc)) + "\n\t\t\t\t\t\t")])])
                    })), 0)])])])])
                }), [], !1, null, "42ff3cc4", null);
            e.default = component.exports;
            installComponents(component, {
                Button: n(111).default
            })
        },
        582: function(t, e, n) {
            "use strict";
            n.r(e);
            var o = {
                    props: ["disabled", "top", "bottom"]
                },
                r = (n(600), n(36)),
                component = Object(r.a)(o, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("button", {
                        staticClass: "button",
                        class: {
                            disabled: 1 == t.disabled, top: 1 == t.top, bottom: 1 == t.bottom
                        },
                        attrs: {
                            disabled: t.disabled
                        }
                    }, [n("div", {
                        staticClass: "inner"
                    }, [n("div", {
                        staticClass: "shine"
                    }), t._v(" "), n("div", {
                        staticClass: "spot1"
                    }), t._v(" "), n("div", {
                        staticClass: "spot2"
                    }), t._v(" "), n("div", {
                        staticClass: "spot3"
                    }), t._v(" "), n("div", {
                        staticClass: "text"
                    }, [t._t("default")], 2)])])
                }), [], !1, null, "10b0c47c", null);
            e.default = component.exports;
            installComponents(component, {
                Button: n(111).default
            })
        },
        600: function(t, e, n) {
            "use strict";
            var o = n(571);
            n.n(o).a
        },
        602: function(t, e, n) {
            "use strict";
            var o = n(572);
            n.n(o).a
        },
        613: function(t, e, n) {},
        615: function(t, e, n) {},
        635: function(t, e, n) {
            "use strict";
            n.r(e);
            n(58), n(40), n(37), n(23), n(43), n(86), n(99);
            var o = n(14),
                r = n(18),
                c = n(175),
                l = n(111),
                d = n(566);

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
            var v = {
                    components: {
                        AwardGoodies: c.default,
                        Button: l.default,
                        InputText: d.default
                    },
                    data: function() {
                        return {
                            animate: !1,
                            showAwardGoodies: !1,
                            disableSubmit: !0,
                            theCode: "",
                            activeCodes: ["mewtwo", "rayquaza", "lugia"],
                            error: !1,
                            thisPokemon: !1
                        }
                    },
                    mounted: function() {
                        var t = this;
                        setTimeout((function() {
                            t.animate = !0
                        }), 50)
                    },
                    computed: function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? m(Object(source), !0).forEach((function(e) {
                                Object(o.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : m(Object(source)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({}, Object(r.b)({
                        codesRedeemed: "codesRedeemed",
                        pokemon: "pokemon"
                    })),
                    methods: {
                        goBack: function() {
                            var t = this;
                            this.animate = !1, setTimeout((function() {
                                t.$emit("close", !0)
                            }), 500)
                        },
                        redeemCode: function() {
                            var t;
                            if (this.activeCodes.includes(this.theCode.toLowerCase().trim()))
                                if (this.codesRedeemed.includes(this.theCode.toLowerCase().trim())) this.error = "ErrorAlreadyClaimed";
                                else switch (this.theCode.toLowerCase().trim()) {
                                    case "mewtwo":
                                        t = 150, this.thisPokemon = this.pokemon[t - 1], this.showAwardGoodies = !0, this.$store.commit("updateCodesRedeemed", this.theCode.toLowerCase().trim());
                                        break;
                                    case "rayquaza":
                                        t = 384, this.thisPokemon = this.pokemon[t - 1], this.showAwardGoodies = !0, this.$store.commit("updateCodesRedeemed", this.theCode.toLowerCase().trim());
                                        break;
                                    case "lugia":
                                        t = 249, this.thisPokemon = this.pokemon[t - 1], this.showAwardGoodies = !0, this.$store.commit("updateCodesRedeemed", this.theCode.toLowerCase().trim())
                                } else this.error = "ErrorRedeem"
                        }
                    },
                    watch: {
                        theCode: function() {
                            this.error = !1, this.theCode.length > 4 ? this.disableSubmit = !1 : this.disableSubmit = !0
                        }
                    }
                },
                h = (n(676), n(36)),
                component = Object(h.a)(v, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "redeem-code",
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
                    }, [t._v(t._s(t.t("mainMenu", "LabelRedeem")))]), t._v(" "), n("div", {
                        staticClass: "desc"
                    }, [t._v(t._s(t.t("mainMenu", "InstructionRedeem")))]), t._v(" "), n("form", {
                        on: {
                            submit: function(e) {
                                return e.preventDefault(), t.redeemCode(e)
                            }
                        }
                    }, [n("div", {
                        staticClass: "text-field"
                    }, [n("InputText", {
                        attrs: {
                            placeholder: t.t("mainMenu", "LabelRedeem") + "..."
                        },
                        model: {
                            value: t.theCode,
                            callback: function(e) {
                                t.theCode = e
                            },
                            expression: "theCode"
                        }
                    })], 1), t._v(" "), t.error ? n("div", {
                        staticClass: "form-error"
                    }, [t._v("\n\t\t\t\t\t\t" + t._s(t.t("mainMenu", t.error)) + "\n\t\t\t\t\t")]) : t._e(), t._v(" "), n("div", {
                        staticClass: "save-button"
                    }, [n("Button", {
                        attrs: {
                            disabled: t.disableSubmit
                        }
                    }, [t._v(t._s(t.t("mainMenu", "ButtonRedeem")))])], 1)]), t._v(" "), n("div", {
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
                    })])], 1)])])]), t._v(" "), t.showAwardGoodies ? n("AwardGoodies", {
                        attrs: {
                            data: {
                                type: "pokemon",
                                pokemon: t.thisPokemon
                            }
                        },
                        on: {
                            claim: t.goBack
                        }
                    }) : t._e()], 1)
                }), [], !1, null, "55083528", null);
            e.default = component.exports;
            installComponents(component, {
                InputText: n(566).default,
                Button: n(111).default,
                AwardGoodies: n(175).default
            })
        },
        676: function(t, e, n) {
            "use strict";
            var o = n(613);
            n.n(o).a
        },
        678: function(t, e, n) {
            "use strict";
            var o = n(615);
            n.n(o).a
        },
        709: function(t, e, n) {
            "use strict";
            n.r(e);
            n(58), n(40), n(37), n(23), n(43);
            var o = n(14),
                r = n(98),
                c = (n(577), n(175)),
                l = n(111),
                d = n(582),
                m = (n(581), n(586)),
                v = n(635),
                h = n(585),
                f = n(562),
                C = n(18);

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
            var k = {
                    mixins: [r.a],
                    destroyed: function() {},
                    components: {
                        AwardGoodies: c.default,
                        Button: l.default,
                        ButtonSplit: d.default,
                        MainMenuItem: m.default,
                        RedeemCode: v.default,
                        SelectLang: h.default,
                        TutorialBubble: f.default
                    },
                    data: function() {
                        return {
                            startAnimation: !1,
                            activateLangSelect: !1,
                            activateEventScreen: !1,
                            activateFAQs: !1,
                            openWelcomePouch: !1,
                            showRedeemCode: !1,
                            tutorialStep: 1,
                            enableTutorial: !1,
                            tutorials: {},
                            segments: {
                                trainer: {
                                    enableClick: !1,
                                    deactivated: !1
                                },
                                badge: {
                                    enableClick: !1,
                                    deactivated: !1
                                },
                                spins: {
                                    enableClick: !1,
                                    deactivated: !1
                                },
                                teamrace: {
                                    enableClick: !1,
                                    deactivated: !1
                                },
                                games: {
                                    enableClick: !1,
                                    deactivated: !1
                                }
                            }
                        }
                    },
                    beforeMount: function() {
                        this.enableAPI && !this.guestMode && this.$store.dispatch("getAllTeamRaceData")
                    },
                    mounted: function() {
                        var t = this;
                        this.trackPageView("Main Menu"), this.$store.commit("setActiveMusic", "main-menu"), this.tutorials = {
                            1: {
                                title: "Tutorial1Title",
                                text: "Tutorial1Text",
                                top: 40,
                                left: 30,
                                arrowside: "left",
                                hidebutton: !1
                            },
                            2: {
                                title: "Tutorial2Title",
                                text: "Tutorial2Text",
                                top: 40,
                                left: 50,
                                arrowside: "left",
                                hidebutton: !1
                            },
                            3: {
                                title: "Tutorial3Title",
                                text: "Tutorial3Text",
                                top: 40,
                                left: 7,
                                arrowside: "right",
                                hidebutton: !1
                            },
                            4: {
                                title: "Tutorial4Title",
                                text: "Tutorial4Text",
                                top: 40,
                                left: 28,
                                arrowside: "right",
                                hidebutton: !1
                            },
                            5: {
                                title: "Tutorial5Title",
                                text: "Tutorial5Text",
                                top: 60,
                                left: 29,
                                arrowside: "bottom",
                                hidebutton: !0
                            }
                        }, this.lastWeekVisisted < this.week && !this.guestMode && this.week < 6 ? setTimeout((function() {
                            t.activateEventScreen = !0
                        }), 1500) : this.initialSequence()
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
                    }({}, Object(C.b)({
                        usersCompanionPokemon: "usersCompanionPokemon",
                        team: "team",
                        firstTime: "firstTime",
                        receivedWelcomePouch: "receivedWelcomePouch",
                        dev: "dev",
                        alerts: "alerts",
                        mute: "mute",
                        guestMode: "guestMode",
                        lastWeekVisisted: "lastWeekVisisted",
                        week: "week",
                        enableAPI: "enableAPI",
                        userDayJoined: "userDayJoined"
                    })),
                    methods: {
                        triggerTutorial: function(t) {
                            var e = this;
                            (this.receivedWelcomePouch || this.guestMode) && (this.openWelcomePouch = !1, t && (this.startAnimation = !0), setTimeout((function() {
                                e.firstTime.mainMenu ? (e.segments.badge.deactivated = !0, e.segments.spins.deactivated = !0, e.segments.teamrace.deactivated = !0, e.segments.games.deactivated = !0, e.enableTutorial = !0) : (e.segments.trainer.enableClick = !0, e.segments.badge.enableClick = !0, e.segments.spins.enableClick = !0, e.segments.teamrace.enableClick = !0, e.segments.games.enableClick = !0)
                            }), 2e3))
                        },
                        closeEventScreen: function() {
                            this.initialSequence(), this.activateEventScreen = !1
                        },
                        initialSequence: function() {
                            var t = this;
                            this.triggerTutorial(!1);
                            var e = 400;
                            t.receivedWelcomePouch || t.guestMode || (e = 50), setTimeout((function() {
                                t.receivedWelcomePouch || t.guestMode ? t.startAnimation = !0 : (t.triggerWelcomePouch(), t.$store.commit("updateLastWeekVisisted"))
                            }), e)
                        },
                        triggerWelcomePouch: function() {
                            var t = this;
                            this.$store.commit("setReceivedWelcomePouch", !0), setTimeout((function() {
                                t.openWelcomePouch = !0
                            }), 1400)
                        },
                        gotoBadges: function() {
                            if (this.segments.badge.enableClick) {
                                var t = this;
                                this.startAnimation = !1, this.playSound("transition"), setTimeout((function() {
                                    t.$router.push("/badges")
                                }), 400)
                            }
                        },
                        gotoTrainerZone: function() {
                            if (this.segments.trainer.enableClick) {
                                var t = this;
                                this.startAnimation = !1, this.playSound("transition"), setTimeout((function() {
                                    t.$router.push("/trainer-zone")
                                }), 400)
                            }
                        },
                        gotoGames: function() {
                            if (this.segments.games.enableClick) {
                                var t = this;
                                this.startAnimation = !1, this.playSound("gamezone-transition"), setTimeout((function() {
                                    t.$router.push("/game-zone")
                                }), 300), this.enableTutorial = !1
                            }
                        },
                        gotoDailyRewards: function() {
                            if (this.segments.spins.enableClick && !this.guestMode && this.week <= 5) {
                                var t = this;
                                this.startAnimation = !1, this.playSound("transition"), setTimeout((function() {
                                    t.$router.push("/daily-rewards")
                                }), 400)
                            }
                        },
                        gotoTeamRaces: function() {
                            if (this.segments.teamrace.enableClick && !this.guestMode && this.week <= 5) {
                                var t = this;
                                this.startAnimation = !1, this.playSound("transition"), setTimeout((function() {
                                    t.$router.push("/team-race")
                                }), 400)
                            }
                        },
                        nextTutorialStep: function() {
                            switch (this.tutorialStep++, this.segments.trainer.deactivated = !0, this.segments.badge.deactivated = !0, this.segments.spins.deactivated = !0, this.segments.teamrace.deactivated = !0, this.segments.games.deactivated = !0, this.tutorialStep) {
                                case 1:
                                    this.segments.trainer.deactivated = !1;
                                    break;
                                case 2:
                                    this.segments.badge.deactivated = !1;
                                    break;
                                case 3:
                                    this.segments.spins.deactivated = !1;
                                    break;
                                case 4:
                                    this.segments.teamrace.deactivated = !1;
                                    break;
                                case 5:
                                    this.segments.games.deactivated = !1, this.segments.games.enableClick = !0, this.$store.commit("setFirstTime", {
                                        page: "mainMenu",
                                        value: !1
                                    })
                            }
                        },
                        openRedeem: function() {
                            this.showRedeemCode = !0
                        },
                        closeRedeem: function() {
                            this.showRedeemCode = !1
                        }
                    }
                },
                _ = (n(678), n(36)),
                component = Object(_.a)(k, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "main-menu letterbox"
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
                    }, [t._v("\n\t\t\t\t" + t._s(t.t("mainMenu", "PageTitle")) + "\n\t\t\t")])]), t._v(" "), n("div", {
                        staticClass: "other-buttons-container",
                        class: {
                            active: 1 == t.startAnimation
                        }
                    }, [t.week < 6 ? n("div", {
                        staticClass: "btn-container"
                    }, [n("Button", {
                        staticClass: "redeem-button",
                        attrs: {
                            color: "blue",
                            smaller: !0,
                            flexwidth: !0,
                            extrapadding: !0
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.openRedeem(e)
                            }
                        }
                    }, [t._v("\n\t\t\t\t\t" + t._s(t.t("mainMenu", "LabelRedeem")) + "\n\t\t\t\t")])], 1) : t._e(), t._v(" "), n("div", {
                        staticClass: "btn-container"
                    }, [n("Button", {
                        staticClass: "faq-button",
                        attrs: {
                            disabled: !1,
                            color: "blue",
                            smaller: !0,
                            flexwidth: !0
                        },
                        nativeOn: {
                            click: function(e) {
                                t.activateFAQs = !t.activateFAQs
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: "/icons/icon-info.png"
                        }
                    })])], 1), t._v(" "), n("div", {
                        staticClass: "btn-container"
                    }, [n("Button", {
                        staticClass: "lang-button",
                        attrs: {
                            disabled: !1,
                            color: "blue",
                            smaller: !0,
                            flexwidth: !0
                        },
                        nativeOn: {
                            click: function(e) {
                                t.activateLangSelect = !t.activateLangSelect
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: "/icons/icon-lang.png"
                        }
                    })])], 1), t._v(" "), n("div", {
                        staticClass: "btn-container"
                    }, [n("Button", {
                        staticClass: "mute-button",
                        attrs: {
                            color: "blue",
                            smaller: !0,
                            flexwidth: !0
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.$store.commit("setMute")
                            }
                        }
                    }, [t.mute ? n("img", {
                        attrs: {
                            src: "/icons/icon-sound-mute.png"
                        }
                    }) : n("img", {
                        attrs: {
                            src: "/icons/icon-sound.png"
                        }
                    })])], 1)]), t._v(" "), n("div", {
                        staticClass: "menu-items",
                        class: {
                            active: 1 == t.startAnimation
                        }
                    }, [n("MainMenuItem", {
                        class: {
                            active: 1 == t.startAnimation
                        },
                        staticStyle: {
                            "--num-index": "1"
                        },
                        attrs: {
                            timeDelay: 1,
                            animate: t.startAnimation,
                            background: "/pokemon/bg-types/bg-" + ("object" == typeof t.usersCompanionPokemon ? t.usersCompanionPokemon.type.split(",")[0] : "fire") + ".jpg",
                            type: "trainer",
                            pokemon: "object" == typeof t.usersCompanionPokemon && t.usersCompanionPokemon.imageslug,
                            hidebutton: !t.segments.trainer.enableClick,
                            deactivated: t.segments.trainer.deactivated,
                            nodelay: t.enableTutorial
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.gotoTrainerZone(e)
                            }
                        }
                    }), t._v(" "), n("MainMenuItem", {
                        class: {
                            active: 1 == t.startAnimation
                        },
                        staticStyle: {
                            "--num-index": "2"
                        },
                        attrs: {
                            timeDelay: 2,
                            animate: t.startAnimation,
                            type: "badges",
                            "new-alert": t.alerts.badgesPage,
                            hidebutton: !t.segments.badge.enableClick,
                            deactivated: t.segments.badge.deactivated,
                            nodelay: t.enableTutorial
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.gotoBadges(e)
                            }
                        }
                    }), t._v(" "), n("MainMenuItem", {
                        class: {
                            active: 1 == t.startAnimation
                        },
                        staticStyle: {
                            "--num-index": "3"
                        },
                        attrs: {
                            timeDelay: 3,
                            animate: t.startAnimation,
                            type: "rewards",
                            "new-alert": t.alerts.dailyRewards,
                            hidebutton: !t.segments.spins.enableClick || t.week > 5,
                            deactivated: t.segments.spins.deactivated || t.week > 5,
                            nodelay: t.enableTutorial,
                            disable: t.guestMode || t.week > 5
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.gotoDailyRewards(e)
                            }
                        }
                    }), t._v(" "), n("MainMenuItem", {
                        class: {
                            active: 1 == t.startAnimation
                        },
                        staticStyle: {
                            "--num-index": "4"
                        },
                        attrs: {
                            timeDelay: 4,
                            animate: t.startAnimation,
                            type: "team",
                            "new-alert": t.alerts.teamRaces,
                            hidebutton: !t.segments.teamrace.enableClick || t.week > 5,
                            deactivated: t.segments.teamrace.deactivated || t.week > 5,
                            nodelay: t.enableTutorial,
                            disable: t.guestMode || t.week > 5
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.gotoTeamRaces(e)
                            }
                        }
                    })], 1), t._v(" "), n("div", {
                        staticClass: "game-button",
                        class: {
                            active: 1 == t.startAnimation, deactivated: t.segments.games.deactivated
                        }
                    }, [n("ButtonSplit", {
                        attrs: {
                            top: !0
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.gotoGames()
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: "/icons/icon-games.png"
                        }
                    }), t._v("\n\t\t\t\t" + t._s(t.t("mainMenu", "ButtonGames")) + "\n\t\t\t")])], 1)]), t._v(" "), t.openWelcomePouch ? n("AwardGoodies", {
                        attrs: {
                            data: {
                                type: "pouch",
                                pouch: 3
                            }
                        },
                        on: {
                            claim: function(e) {
                                return t.triggerTutorial(!0)
                            }
                        }
                    }) : t._e(), t._v(" "), t._l(t.tutorials, (function(e, i) {
                        return n("div", {
                            key: i,
                            staticClass: "tutorials"
                        }, [t.tutorialStep == i && t.enableTutorial ? n("TutorialBubble", {
                            attrs: {
                                title: t.t("mainMenu", e.title),
                                text: t.t("mainMenu", e.text),
                                top: e.top,
                                left: e.left,
                                arrowside: e.arrowside,
                                hidebutton: e.hidebutton
                            },
                            on: {
                                action: t.nextTutorialStep
                            }
                        }) : t._e()], 1)
                    })), t._v(" "), t.showRedeemCode ? n("RedeemCode", {
                        on: {
                            close: t.closeRedeem
                        }
                    }) : t._e(), t._v(" "), t.activateEventScreen ? n("EventScreen", {
                        on: {
                            close: t.closeEventScreen
                        }
                    }) : t._e(), t._v(" "), t.activateLangSelect ? n("SelectLang", {
                        on: {
                            close: function(e) {
                                t.activateLangSelect = !1
                            }
                        }
                    }) : t._e(), t._v(" "), t.activateFAQs ? n("Article", {
                        attrs: {
                            content: "faqs"
                        },
                        on: {
                            close: function(e) {
                                t.activateFAQs = !t.activateFAQs
                            }
                        }
                    }) : t._e()], 2)
                }), [], !1, null, "6483eb24", null);
            e.default = component.exports;
            installComponents(component, {
                Button: n(111).default,
                MainMenuItem: n(586).default,
                ButtonSplit: n(582).default,
                AwardGoodies: n(175).default,
                TutorialBubble: n(562).default,
                RedeemCode: n(635).default,
                EventScreen: n(581).default,
                SelectLang: n(585).default,
                Article: n(577).default
            })
        }
    }
]);