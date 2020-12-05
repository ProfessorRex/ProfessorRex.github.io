(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        564: function(t, e, n) {},
        567: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = {
                    props: ["number", "shadow", "bigger", "noanimation", "tick"]
                },
                l = (n(578), n(36)),
                component = Object(l.a)(r, (function() {
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
            var r = n(564);
            n.n(r).a
        },
        586: function(t, e, n) {
            "use strict";
            n.r(e);
            n(58), n(40), n(37), n(23), n(43);
            var r = n(14),
                l = n(98),
                c = n(18),
                d = (n(111), n(567)),
                o = n(174);

            function v(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function m(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? v(Object(source), !0).forEach((function(e) {
                        Object(r.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : v(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var _ = {
                    mixins: [l.a],
                    data: function() {
                        return {
                            currentSpins: 0,
                            teamPosition: 2,
                            currentBadgePercentage: 0,
                            localRazzberries: 0,
                            localCollectedBadges: 0,
                            hasAnimatedIn: !1,
                            theTeam: "fire"
                        }
                    },
                    props: ["type", "background", "pokemon", "newAlert", "deactivated", "hidebutton", "nodelay", "timeDelay", "animate", "disable"],
                    components: {
                        AlertCircle: d.default,
                        FatText: o.default
                    },
                    watch: {
                        animate: function(t) {
                            if (1 == t && !1 === this.hasAnimatedIn) {
                                this.hasAnimatedIn = !0;
                                var e = this;
                                setTimeout((function() {
                                    e.playSound("swipe")
                                }), 200 * (this.timeDelay + 1) + 100)
                            }
                        }
                    },
                    mounted: function() {
                        this.guestMode || (this.theTeam = this.team), this.spinsRemaining > 0 && !this.guestMode && this.countUpSpins(), this.collectedBadgePercent > 0 && !this.guestMode && this.countUpBadgePercentage(), this.razzberries > 0 && this.countUpRazzberries(), this.teamRazzberries > 0 && !this.guestMode && this.countUpTeamRazzberries(), this.collectedBadges > 0 && !this.guestMode && this.countUpCollectedBadges()
                    },
                    methods: {
                        countUpSpins: function() {
                            this.$gsap.timeline({
                                repeat: 0,
                                ease: this.$gsap.Linear.easeInOut(2)
                            }).to(this.$data, {
                                duration: 1,
                                delay: 1.5,
                                currentSpins: this.spinsRemaining
                            })
                        },
                        countUpBadgePercentage: function() {
                            this.$gsap.timeline({
                                repeat: 0,
                                ease: this.$gsap.Linear.easeInOut(2)
                            }).to(this.$data, {
                                duration: 1,
                                delay: 1.5,
                                currentBadgePercentage: this.collectedBadgePercent
                            })
                        },
                        countUpRazzberries: function() {
                            this.$gsap.timeline({
                                repeat: 0,
                                ease: this.$gsap.Linear.easeInOut(2)
                            }).to(this.$data, {
                                duration: 1,
                                delay: 1.5,
                                localRazzberries: this.razzberries
                            })
                        },
                        countUpTeamRazzberries: function() {
                            this.$gsap.timeline({
                                repeat: 0,
                                ease: this.$gsap.Linear.easeInOut(2)
                            }).to(this.$data, {
                                duration: 1,
                                delay: 1.5,
                                localTeamRazzberries: this.teamRazzberries
                            })
                        },
                        countUpCollectedBadges: function() {
                            this.$gsap.timeline({
                                repeat: 0,
                                ease: this.$gsap.Linear.easeInOut(2)
                            }).to(this.$data, {
                                duration: 1,
                                delay: 1.5,
                                localCollectedBadges: this.collectedBadges
                            })
                        },
                        calculateLeaderboardPosition: function(t) {
                            if (this.guestMode) return 1;
                            var e = [];
                            for (var n in this.teamPositions) e.push([n, Math.max.apply(null, this.teamPositions[n])]);
                            e.sort((function(a, b) {
                                return b[1] - a[1]
                            }));
                            for (var r = null, l = 1, i = 0; i < e.length; i++) {
                                if (e[i][0] == t) {
                                    r = l;
                                    break
                                }
                                l++
                            }
                            return r
                        }
                    },
                    computed: m(m({}, Object(c.b)({
                        trainerID: "trainerID",
                        razzberries: "razzberries",
                        teamRazzberries: "teamRazzberries",
                        team: "team",
                        collectedBadges: "collectedBadges",
                        totalBadges: "totalBadges",
                        collectedBadgePercent: "collectedBadgePercent",
                        day: "day",
                        spinsRemaining: "spinsRemaining",
                        consecutiveDaysVisited: "consecutiveDaysVisited",
                        guestMode: "guestMode",
                        teamPositions: "teamPositions",
                        lang: "lang"
                    })), {}, {
                        localTeamRazzberries: function() {
                            return Math.max.apply(null, this.teamPositions[this.theTeam])
                        }
                    })
                },
                h = (n(675), n(36)),
                component = Object(h.a)(_, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "menu-item",
                        class: {
                            deactivated: t.deactivated, nodelay: t.nodelay, disable: t.disable
                        }
                    }, ["trainer" == t.type ? n("div", {
                        staticClass: "window-background",
                        style: {
                            backgroundImage: "url(" + t.background + ")"
                        }
                    }) : t._e(), t._v(" "), "badges" == t.type ? n("div", {
                        staticClass: "window-background",
                        style: {
                            backgroundImage: "url(/mainmenu/bg-badges.jpg)"
                        }
                    }) : t._e(), t._v(" "), "rewards" == t.type ? n("div", {
                        staticClass: "window-background",
                        style: {
                            backgroundImage: "url(/mainmenu/bg-rewards.jpg)"
                        }
                    }) : t._e(), t._v(" "), "team" == t.type ? n("div", {
                        staticClass: "window-background",
                        style: {
                            backgroundImage: "url(/mainmenu/bg-team.jpg)"
                        }
                    }) : t._e(), t._v(" "), n("div", {
                        staticClass: "main-shape"
                    }, ["trainer" == t.type ? n("div", {
                        staticClass: "lower-container"
                    }, [n("div", {
                        staticClass: "title"
                    }, [t._v("\n\t\t\t\t" + t._s(t.t("mainMenu", "TitleTrainerID")) + "\n\t\t\t")]), t._v(" "), n("div", {
                        staticClass: "user-data-container"
                    }, [n("div", {
                        staticClass: "user-data-pill"
                    }, [n("div", {
                        staticClass: "text-normal"
                    }, [t._v(t._s(t.guestMode ? t.t("misc", "Guest") : t.trainerID))])])]), t._v(" "), n("div", {
                        staticClass: "user-data-container"
                    }, [n("div", {
                        staticClass: "user-data-pill two-thirds"
                    }, [n("div", {
                        staticClass: "razzberry"
                    }), t._v(" "), n("div", {
                        staticClass: "text-small"
                    }, [t._v("\n\t\t\t\t\t\t" + t._s(t.guestMode ? "-" : Math.round(t.localRazzberries).toLocaleString(t.lang)) + "\n\t\t\t\t\t")])]), t._v(" "), n("div", {
                        staticClass: "user-data-pill circle"
                    }, [t.guestMode ? t._e() : n("div", {
                        staticClass: "small-team-badge",
                        class: {
                            "guest-mode": t.guestMode
                        },
                        style: {
                            backgroundImage: "url(/flags/flag-" + t.theTeam + "-no-pole.png)"
                        }
                    }), t._v(" "), t.guestMode ? n("div", {
                        staticClass: "small-team-badge",
                        class: {
                            "guest-mode": t.guestMode
                        },
                        style: {
                            backgroundImage: "url(/flags/guest_flag_scaled.png)"
                        }
                    }) : t._e()])])]) : t._e(), t._v(" "), "badges" == t.type ? n("div", {
                        staticClass: "lower-container"
                    }, [n("div", {
                        staticClass: "title"
                    }, [t._v("\n\t\t\t\t" + t._s(t.t("mainMenu", "TitleBadgeProgress")) + "\n\t\t\t")]), t._v(" "), n("div", {
                        staticClass: "user-data-container"
                    }, [n("div", {
                        staticClass: "user-data-pill"
                    }, [n("div", {
                        staticClass: "text-feature"
                    }, [t.guestMode ? t._e() : n("FatText", {
                        attrs: {
                            text: t.currentBadgePercentage.toString(),
                            percent: !0
                        }
                    }), t._v(" "), t.guestMode ? n("FatText", {
                        attrs: {
                            text: "0",
                            percent: !0
                        }
                    }) : t._e()], 1)])]), t._v(" "), n("div", {
                        staticClass: "user-data-container"
                    }, [n("div", {
                        staticClass: "user-data-pill"
                    }, [n("div", {
                        staticClass: "text-small"
                    }, [t._v("\n\t\t\t\t\t\t" + t._s(t.guestMode ? 0 : Math.round(t.localCollectedBadges)) + "\n\t\t\t\t\t\t / " + t._s(t.totalBadges) + "\n\t\t\t\t\t")])])])]) : t._e(), t._v(" "), "rewards" == t.type ? n("div", {
                        staticClass: "lower-container"
                    }, [n("div", {
                        staticClass: "title"
                    }, [t._v("\n\t\t\t\t" + t._s(t.t("mainMenu", "TitleSpinsLeft")) + "\n\t\t\t")]), t._v(" "), n("div", {
                        staticClass: "user-data-container",
                        style: {
                            opacity: t.disable ? 0 : 1
                        }
                    }, [n("div", {
                        staticClass: "user-data-pill"
                    }, [n("div", {
                        staticClass: "text-feature"
                    }, [n("FatText", {
                        attrs: {
                            text: t.currentSpins.toString(),
                            max10: !0
                        }
                    })], 1)])]), t._v(" "), t.disable ? n("div", {
                        staticClass: "user-data-container"
                    }, [n("div", {
                        staticClass: "user-data-pill guest-mode-notice"
                    }, [t._v("\n\t\t\t\t\t" + t._s(t.t("misc", "NotAvailableGuestMode")) + "\n\t\t\t\t")])]) : n("div", {
                        staticClass: "user-data-container"
                    }, [n("div", {
                        staticClass: "user-data-pill"
                    }, [n("div", {
                        staticClass: "spins-left"
                    }, t._l(6, (function(i) {
                        return n("div", {
                            key: i,
                            staticClass: "spin-left-day",
                            class: {
                                passed: i <= t.consecutiveDaysVisited
                            }
                        }, [t._v("\n\t\t\t\t\t\t\t" + t._s(i) + "\n\t\t\t\t\t\t\t"), n("div", {
                            staticClass: "tick-circle"
                        })])
                    })), 0), t._v(" "), n("div", {
                        staticClass: "pouch-small",
                        class: {
                            locked: t.consecutiveDaysVisited < 6
                        }
                    })])])]) : t._e(), t._v(" "), "team" == t.type ? n("div", {
                        staticClass: "lower-container"
                    }, [n("div", {
                        staticClass: "title"
                    }, [t._v("\n\t\t\t\t" + t._s(t.t("mainMenu", "TitleTeamPosition")) + "\n\t\t\t")]), t._v(" "), n("div", {
                        staticClass: "user-data-container",
                        style: {
                            opacity: t.disable ? 0 : 1
                        }
                    }, [n("div", {
                        staticClass: "user-data-pill"
                    }, [n("div", {
                        staticClass: "text-feature support-sup"
                    }, [n("FatText", {
                        attrs: {
                            text: t.calculateLeaderboardPosition(t.theTeam),
                            ordinal: !0
                        }
                    })], 1)])]), t._v(" "), t.disable ? n("div", {
                        staticClass: "user-data-container"
                    }, [n("div", {
                        staticClass: "user-data-pill guest-mode-notice"
                    }, [t._v("\n\t\t\t\t\t" + t._s(t.t("misc", "NotAvailableGuestMode")) + "\n\t\t\t\t")])]) : n("div", {
                        staticClass: "user-data-container"
                    }, [n("div", {
                        staticClass: "user-data-pill"
                    }, [n("div", {
                        staticClass: "razzberry"
                    }), t._v(" "), n("div", {
                        staticClass: "text-small"
                    }, [t._v("\n\t\t\t\t\t\t" + t._s(Math.round(t.localTeamRazzberries).toLocaleString(t.lang)) + "\n\t\t\t\t\t")])])])]) : t._e()]), t._v(" "), n("div", {
                        staticClass: "window-foreground"
                    }, ["trainer" == t.type ? n("div", {
                        staticClass: "window-content"
                    }, [t.pokemon ? n("div", {
                        staticClass: "pokemon"
                    }, [n("img", {
                        attrs: {
                            src: "/pokemon/mainmenu/" + t.pokemon + ".png"
                        }
                    })]) : t._e()]) : t._e(), t._v(" "), "badges" == t.type ? n("div", {
                        staticClass: "window-content"
                    }, [t._m(0), t._v(" "), t._m(1), t._v(" "), t._m(2)]) : t._e(), t._v(" "), "rewards" == t.type ? n("div", {
                        staticClass: "window-content"
                    }, [t._m(3)]) : t._e(), t._v(" "), "team" == t.type ? n("div", {
                        staticClass: "window-content"
                    }, [n("div", {
                        staticClass: "team-flag"
                    }, [t.guestMode ? t._e() : n("img", {
                        attrs: {
                            src: "/flags/flag-" + t.theTeam + ".png"
                        }
                    }), t._v(" "), t.guestMode ? n("img", {
                        attrs: {
                            src: "/flags/guest_flag_scaled.png"
                        }
                    }) : t._e()])]) : t._e()]), t._v(" "), "team" == t.type ? n("div", {
                        staticClass: "day-countdown"
                    }, [n("div", {
                        staticClass: "inner"
                    }, [n("div", {
                        staticClass: "day-title"
                    }, [t._v("\n\t\t\t\t" + t._s(t.t("misc", "Day")) + "\n\t\t\t")]), t._v(" "), n("div", {
                        staticClass: "day"
                    }, [t._v(t._s(t.day))])])]) : t._e(), t._v(" "), t.newAlert && !t.guestMode ? n("AlertCircle", {
                        staticClass: "new-alert"
                    }) : t._e(), t._v(" "), t.hidebutton ? t._e() : n("div", {
                        staticClass: "button-container"
                    }, ["trainer" != t.type || t.disable ? t._e() : n("Button", {
                        attrs: {
                            smaller: !0
                        }
                    }, [t._v("\n\t\t\t" + t._s(t.t("mainMenu", "ButtonTrainerZone")) + "\n\t\t")]), t._v(" "), "badges" != t.type || t.disable ? t._e() : n("Button", {
                        attrs: {
                            smaller: !0
                        }
                    }, [t._v("\n\t\t\t" + t._s(t.t("mainMenu", "ButtonBadges")) + "\n\t\t")]), t._v(" "), "rewards" != t.type || t.disable ? t._e() : n("Button", {
                        attrs: {
                            smaller: !0
                        }
                    }, [t._v("\n\t\t\t" + t._s(t.t("mainMenu", "ButtonRewards")) + "\n\t\t")]), t._v(" "), "team" != t.type || t.disable ? t._e() : n("Button", {
                        attrs: {
                            smaller: !0
                        }
                    }, [t._v("\n\t\t\t" + t._s(t.t("mainMenu", "ButtonTeamRaces")) + "\n\t\t")])], 1)], 1)
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "a-badge badge1"
                    }, [e("img", {
                        attrs: {
                            src: "/mainmenu/badge01.png"
                        }
                    })])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "a-badge badge2"
                    }, [e("img", {
                        attrs: {
                            src: "/mainmenu/badge02.png"
                        }
                    })])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "a-badge badge3"
                    }, [e("img", {
                        attrs: {
                            src: "/mainmenu/badge03.png"
                        }
                    })])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "spin-wheel"
                    }, [e("img", {
                        attrs: {
                            src: "/icons/extra-spins.png"
                        }
                    })])
                }], !1, null, "df7b8618", null);
            e.default = component.exports;
            installComponents(component, {
                FatText: n(174).default,
                AlertCircle: n(567).default,
                Button: n(111).default
            })
        },
        612: function(t, e, n) {},
        675: function(t, e, n) {
            "use strict";
            var r = n(612);
            n.n(r).a
        }
    }
]);