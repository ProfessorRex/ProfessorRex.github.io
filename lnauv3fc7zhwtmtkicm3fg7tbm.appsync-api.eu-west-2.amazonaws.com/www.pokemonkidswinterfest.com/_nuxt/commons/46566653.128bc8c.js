(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        563: function(t, e, n) {
            "use strict";
            n.r(e);
            n(58), n(40), n(43);
            var r = n(14),
                o = n(42),
                c = (n(37), n(23), n(320), n(86), n(99), n(45)),
                l = n(583),
                m = n(98),
                d = n(175),
                h = n(111),
                v = n(651),
                f = n(655),
                k = n(654),
                y = n(649),
                P = n(647),
                C = n(656),
                w = n(18);

            function O(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }
            var _ = {
                    mixins: [m.a],
                    props: ["game", "title", "description"],
                    components: {
                        AchievementUpdate: l.default,
                        AwardGoodies: d.default,
                        Button: h.default,
                        Game: v.default,
                        GameFinalScore: f.default,
                        GameSelectPokemon: k.default,
                        GameTutorial: y.default,
                        Leaderboard: P.default,
                        PostGameScreen: C.default
                    },
                    data: function() {
                        return {
                            activateLeaderboard: !1,
                            activateTutorial: !1,
                            activateSelectPokemon: !1,
                            activateGame: !1,
                            activatePostGameScreen: !1,
                            activateGameFinalScore: !1,
                            activateAchievementsScreen: !1,
                            startAnimation: !1,
                            selectedPokemon: !1,
                            sendRazzberries: 0,
                            maxScores: {
                                "relay-ridge": {
                                    standard: 10,
                                    rare: 30,
                                    epic: 45
                                },
                                "snow-holes": {
                                    standard: 10,
                                    rare: 30,
                                    epic: 45
                                },
                                "waterfall-crossing": {
                                    standard: 10,
                                    rare: 30,
                                    epic: 45
                                },
                                "battle-dunk": {
                                    standard: 10,
                                    rare: 30,
                                    epic: 45
                                },
                                "pair-up": {
                                    standard: 10,
                                    rare: 20,
                                    epic: 30
                                }
                            },
                            returnedReward: !1,
                            didGetReward: !1,
                            weirdGermanSS: !1,
                            isDoubleRazzberries: !1,
                            isTripleRazzberries: !1
                        }
                    },
                    mounted: function() {
                        var t = this;
                        1 == this.week && (this.isDoubleRazzberries = !0), 4 == this.week && (this.isTripleRazzberries = !0), setTimeout((function() {
                            t.startAnimation = !0
                        }), 400), this.activatePostGameScreen = !1, -1 != this.title.indexOf("ß") && (this.weirdGermanSS = !0)
                    },
                    methods: {
                        showReward: function(data) {
                            data > 0 && (this.returnedReward = data, this.didGetReward = !0)
                        },
                        closeAwards: function(t) {
                            this.returnedReward = !1, this.didGetReward && (this.achievementProgressScreen(), this.didGetReward = !1)
                        },
                        backToGameZone: function() {
                            var t = this;
                            this.startAnimation = !1, this.playSound("transition"), this.playSound("gamezone-transition"), setTimeout((function() {
                                t.$router.push("/game-zone")
                            }), 300)
                        },
                        toggleLeaderboard: function(t) {
                            if (!this.guestMode)
                                if (t) this.activateLeaderboard = !0, this.activateGameFinalScore = !1;
                                else {
                                    var e = this;
                                    setTimeout((function() {
                                        e.activateLeaderboard = !1, e.startAnimation = !0
                                    }), 400)
                                }
                        },
                        toggleGameTutorial: function(t) {
                            if (t) this.activateTutorial = !0, this.activateGameFinalScore = !1;
                            else {
                                var e = this;
                                setTimeout((function() {
                                    e.activateTutorial = !1, e.startAnimation = !0
                                }), 400)
                            }
                        },
                        toggleSelectPokemonOrPlayGame: function(input) {
                            if (this.activateGameFinalScore = !1, this.activateTutorial = !1, "object" === Object(c.a)(input)) this.gamePlayStats[this.game].hasReadTutorial ? input.play && (this.selectedPokemon = parseInt(input.pokemon), this.$store.commit("setActiveMusic", !1), this.$store.commit("setMusicPlaying", ""), this.activateSelectPokemon = !1, this.activateGame = !0) : (this.activateSelectPokemon = !1, this.activateTutorial = !0, this.selectedPokemon = parseInt(input.pokemon), this.$store.commit("setActiveMusic", !1), this.$store.commit("setMusicPlaying", ""));
                            else if (!0 === input) {
                                var t = this;
                                this.startAnimation = !1, setTimeout((function() {
                                    ["pair-up", "scene-creator"].includes(t.game) ? t.gamePlayStats[t.game].hasReadTutorial ? (t.$store.commit("setActiveMusic", !1), t.$store.commit("setMusicPlaying", ""), t.activateGame = !0) : t.activateTutorial = !0 : t.gamePlayStats[t.game].hasReadTutorial ? t.activateSelectPokemon = !0 : t.activateTutorial = !0
                                }), 400)
                            } else {
                                var e = this;
                                setTimeout((function() {
                                    e.activateSelectPokemon = !1, e.startAnimation = !0
                                }), 400)
                            }
                        },
                        toggleClosePostGameScreen: function(t) {
                            var e = this;
                            if (this.$store.commit("setActiveMusic", "main-menu"), this.guestMode) setTimeout((function() {
                                e.activateGame = !1
                            }), 700), ["scene-creator"].includes(this.game) ? this.backToGameZone() : (this.sendRazzberries = t.detail.razzberries, this.activateGameFinalScore = !0);
                            else if ("object" === Object(c.a)(t))
                                if (t.detail.quitGame) this.backToGameZone();
                                else {
                                    this.trackEvent("".concat(this.game), "Game Complete", this.game), this.trackEvent("".concat(this.game), "Razz Berries Collected", t.detail.razzberries);
                                    var n = t.detail.razzberries;
                                    1 == this.week && (n = 2 * parseInt(t.detail.razzberries)), 4 == this.week && (n = 3 * parseInt(t.detail.razzberries));
                                    var r = t.detail.goldenRazzberries;
                                    t.detail.sceneCreatorSave;
                                    this.checkAchievements("razzberries", "opening-ceremony", n), this.checkAchievements("razzberries", "team-battles", n), this.checkAchievements("goldenRazzberries", "team-battles", r), this.checkMissions("collect300Razzberries", n), t.detail.electric && "pair-up" == this.game && this.checkMissions("pairUpMatchElectric", 1), t.detail.multiPokemon && "scene-creator" == this.game && this.checkMissions("sceneCreatorFireIceLeaf", 1), t.detail.sceneCreatorSave && "scene-creator" == this.game && this.$store.commit("setSceneCreatorSave", t.detail.sceneCreatorSave), t.detail.hazardHit && "snow-holes" == this.game && this.checkMissions("snowHoles20Butterfree", t.detail.hazardHit), t.detail.hazardConfuse && "snow-holes" == this.game && this.checkMissions("snowHolesConfused10", t.detail.hazardConfuse), t.detail.airDrop && "battle-dunk" == this.game && this.checkMissions("battleDunk50Airdrops", t.detail.airDrop), t.detail.bonusAttacks && "battle-dunk" == this.game && this.checkMissions("battleDunkBonusAttacks", t.detail.bonusAttacks), t.detail.checkpointSuper && "relay-ridge" == this.game && this.checkMissions("relayRidge10Checkpoints", 1), t.detail.heroPokemon && "scene-creator" == this.game && this.checkMissions("sceneCreatorHeroes", 1);
                                    for (var l = 0, m = Object.entries(t.detail); l < m.length; l++) {
                                        var d = Object(o.a)(m[l], 2),
                                            h = d[0],
                                            v = d[1];
                                        "razzberries" == h && (v = n), this.checkAchievements(h, this.game, v)
                                    }
                                    this.enableAPI && !this.guestMode && this.$store.dispatch("submitHighscore", {
                                        game: this.game,
                                        score: n,
                                        pokemon: this.usersCompanionPokemon.id
                                    }), ["scene-creator"].includes(this.game) ? (t.detail.teamFlag && this.checkAchievements("teamFlag", "team-battles", t.detail.teamFlag), t.detail.icePokemon && this.checkAchievements("icePokemon", "closing-ceremony", t.detail.icePokemon), setTimeout((function() {
                                        e.activateGame = !1
                                    }), 700), this.backToGameZone()) : (this.sendRazzberries = t.detail.razzberries, this.activatePostGameScreen = !0, setTimeout((function() {
                                        e.activateGame = !1
                                    }), 700))
                                }
                            else !0 === t ? (setTimeout((function() {
                                e.activateGame = !1
                            }), 700), this.activatePostGameScreen = !0) : (setTimeout((function() {
                                e.activateGame = !1
                            }), 700), this.didGetReward || this.achievementProgressScreen())
                        },
                        achievementProgressScreen: function() {
                            if (!this.guestMode) {
                                var t = this;
                                this.$store.dispatch("checkForChangedAchievementProgress", "game").then((function(e) {
                                    !1 !== e ? t.activateAchievementsScreen = !0 : (t.activateGameFinalScore = !0, t.playSound("transition"), t.$store.commit("setMusicEnabled", !0))
                                })), setTimeout((function() {}), 150), setTimeout((function() {
                                    t.activatePostGameScreen = !1
                                }), 400)
                            }
                        },
                        closeAchievementsScreen: function() {
                            this.activateAchievementsScreen = !1, this.activateGameFinalScore = !0, this.playSound("transition"), this.$store.commit("setMusicEnabled", !0)
                        }
                    },
                    computed: function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? O(Object(source), !0).forEach((function(e) {
                                Object(r.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : O(Object(source)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({}, Object(w.b)({
                        gamePlayStats: "gamePlayStats",
                        achievementProgress: "achievementProgress",
                        usersCompanionPokemon: "usersCompanionPokemon",
                        activeMusic: "activeMusic",
                        guestMode: "guestMode",
                        enableAPI: "enableAPI",
                        week: "week"
                    }))
                },
                z = (n(692), n(36)),
                component = Object(z.a)(_, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "game-intro",
                        class: t.game
                    }, [n("div", {
                        staticClass: "white-block",
                        class: {
                            active: 1 == t.startAnimation
                        }
                    }, [n("div", {
                        staticClass: "white-block-inner"
                    })]), t._v(" "), n("div", {
                        staticClass: "left-container",
                        class: {
                            active: 1 == t.startAnimation
                        }
                    }, [n("Button", {
                        attrs: {
                            smaller: !0,
                            flexwidth: !0
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.backToGameZone(e)
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: "/icons/icon-home.png"
                        }
                    })])], 1), t._v(" "), n("div", {
                        staticClass: "text-container",
                        class: {
                            active: 1 == t.startAnimation
                        }
                    }, [n("div", {
                        staticClass: "title",
                        class: {
                            "weird-german-non-caps": t.weirdGermanSS
                        }
                    }, [t._v("\n\t\t\t\t" + t._s(t.title) + "\n\t\t\t")]), t._v(" "), n("div", {
                        staticClass: "desc"
                    }, [t._v(t._s(t.description))]), t._v(" "), n("div", {
                        staticClass: "button-container"
                    }, ["scene-creator" != t.game && "pair-up" != t.game ? n("Button", {
                        staticClass: "a-button",
                        attrs: {
                            circle: !0,
                            color: "blue",
                            smaller: !0,
                            disabled: t.guestMode
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.toggleLeaderboard(!0)
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: "/icons/icon-leaderboard.png"
                        }
                    })]) : t._e(), t._v(" "), n("Button", {
                        staticClass: "a-button",
                        attrs: {
                            circle: !0
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.toggleSelectPokemonOrPlayGame(!0)
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: "/icons/icon-play.png"
                        }
                    })]), t._v(" "), n("Button", {
                        staticClass: "a-button",
                        attrs: {
                            circle: !0,
                            color: "blue",
                            smaller: !0
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.toggleGameTutorial(!0)
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: "/icons/icon-question.png"
                        }
                    })])], 1)]), t._v(" "), t.activateLeaderboard ? n("Leaderboard", {
                        staticClass: "high-layer",
                        attrs: {
                            game: t.game
                        },
                        on: {
                            close: function(e) {
                                return t.toggleLeaderboard(!1)
                            }
                        }
                    }) : t._e(), t._v(" "), t.activateTutorial ? n("GameTutorial", {
                        staticClass: "high-layer",
                        attrs: {
                            game: t.game,
                            selectedPokemon: t.selectedPokemon
                        },
                        on: {
                            close: function(e) {
                                return t.toggleGameTutorial(!1)
                            },
                            skipToGame: function(e) {
                                return t.toggleSelectPokemonOrPlayGame(!0)
                            }
                        }
                    }) : t._e(), t._v(" "), t.activateSelectPokemon ? n("GameSelectPokemon", {
                        staticClass: "high-layer",
                        attrs: {
                            game: t.game
                        },
                        on: {
                            close: t.toggleSelectPokemonOrPlayGame
                        }
                    }) : t._e(), t._v(" "), t.activateGame ? n("Game", {
                        staticClass: "high-layer",
                        attrs: {
                            game: t.game,
                            pokemon: t.selectedPokemon
                        },
                        on: {
                            close: function(e) {
                                return t.toggleSelectPokemonOrPlayGame(!1)
                            },
                            "game-end": t.toggleClosePostGameScreen
                        }
                    }) : t._e(), t._v(" "), t.activatePostGameScreen ? n("PostGameScreen", {
                        staticClass: "high-layer",
                        attrs: {
                            game: t.game,
                            maxscore: t.maxScores[t.game],
                            razzberries: t.sendRazzberries
                        },
                        on: {
                            close: function(e) {
                                return t.toggleClosePostGameScreen(!1)
                            },
                            rewards: t.showReward
                        }
                    }) : t._e(), t._v(" "), t.returnedReward ? n("AwardGoodies", {
                        attrs: {
                            data: {
                                type: "pouch",
                                pouch: t.returnedReward
                            }
                        },
                        on: {
                            claim: function(e) {
                                return t.closeAwards("pouch1")
                            }
                        }
                    }) : t._e(), t._v(" "), t.activateAchievementsScreen ? n("AchievementUpdate", {
                        attrs: {
                            achievementType: "game"
                        },
                        on: {
                            close: t.closeAchievementsScreen
                        }
                    }) : t._e(), t._v(" "), t.activateGameFinalScore ? n("GameFinalScore", {
                        staticClass: "high-layer",
                        attrs: {
                            game: t.game,
                            razzberries: t.sendRazzberries
                        },
                        on: {
                            toggleLeaderboard: function(e) {
                                return t.toggleLeaderboard(!0)
                            },
                            toggleSelectPokemonOrPlayGame: function(e) {
                                return t.toggleSelectPokemonOrPlayGame(!0)
                            },
                            toggleGameTutorial: function(e) {
                                return t.toggleGameTutorial(!0)
                            }
                        }
                    }) : t._e()], 1)
                }), [], !1, null, "c0d4400e", null);
            e.default = component.exports;
            installComponents(component, {
                Button: n(111).default,
                Leaderboard: n(647).default,
                GameTutorial: n(649).default,
                GameSelectPokemon: n(654).default,
                Game: n(651).default,
                PostGameScreen: n(656).default,
                AwardGoodies: n(175).default,
                AchievementUpdate: n(583).default,
                GameFinalScore: n(655).default
            })
        },
        569: function(t, e, n) {},
        570: function(t, e, n) {},
        575: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = {
                    data: function() {
                        return {
                            animate: !1
                        }
                    },
                    mounted: function() {
                        var t = this;
                        setTimeout((function() {
                            t.animate = !0
                        }), 20)
                    }
                },
                o = (n(598), n(36)),
                component = Object(o.a)(r, (function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "burst-animation"
                    }, [e("div", {
                        staticClass: "sprite",
                        class: {
                            animate: this.animate
                        }
                    })])
                }), [], !1, null, "6080a022", null);
            e.default = component.exports
        },
        583: function(t, e, n) {
            "use strict";
            n.r(e);
            n(58), n(40), n(43);
            var r = n(42),
                o = (n(37), n(23), n(320), n(14)),
                c = n(575),
                l = n(18);

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

            function d(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? m(Object(source), !0).forEach((function(e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : m(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var h = {
                    props: ["achievementType"],
                    components: {
                        Burst: c.default
                    },
                    data: function() {
                        return {
                            animate: !1,
                            medals: !0,
                            step: 0,
                            amount: 50,
                            target: 50,
                            title: "",
                            desc: "",
                            newDesc: "",
                            buttonEnabled: !0,
                            activateAchievementProgressDisplay: !1,
                            showCurrentDesc: !0,
                            showNewDesc: !1
                        }
                    },
                    beforeDestroy: function() {
                        this.$store.commit("updateShowNewAchievementProgress", !1)
                    },
                    mounted: function() {
                        var t = this;
                        setTimeout((function() {
                            t.animate = !0
                        }), 200), !1 === this.latestAchievement && this.$store.commit("updateHasNewAchievementProgress", !1), setTimeout((function() {
                            t.showNewAchievementProgress()
                        }), 500)
                    },
                    computed: d(d({}, Object(l.b)({
                        latestAchievement: "latestAchievement",
                        latestGameZoneAchievement: "latestGameZoneAchievement",
                        allAchievements: "allAchievements"
                    })), {}, {
                        percentage: function() {
                            var t = 0,
                                base = 0;
                            return 0 == this.step ? (t = 30, base = 0) : 1 == this.step ? (t = 25, base = 30) : 2 == this.step && (t = 45, base = 55), this.amount <= this.target ? t / 100 * (this.amount / this.target * 100) + base : t + base
                        }
                    }),
                    watch: {
                        percentage: function(t) {
                            100 == t && this.trackEvent("Achievement Won", "Achievement Won", this.title)
                        }
                    },
                    methods: {
                        close: function() {
                            this.$store.commit("updateHasNewAchievementProgress", !1), this.animate = !1;
                            var t = this;
                            setTimeout((function() {
                                t.$emit("close", !0)
                            }), 600)
                        },
                        showNewAchievementProgress: function() {
                            var t = this,
                                e = this;
                            this.activateAchievementProgressDisplay = !0;
                            var n = "",
                                o = "";
                            "game" == this.achievementType ? (n = this.latestAchievement, o = "gameName") : "game-zone" == this.achievementType && (n = this.latestGameZoneAchievement, o = "achievements");
                            for (var c = function() {
                                    var c = Object(r.a)(m[l], 2),
                                        i = c[0],
                                        d = c[1];
                                    if (i == n.id) {
                                        t.step = n.before.activeAchievement, t.title = t.t(o, d.transName), t.desc = t.t("achievements", d.achievements[n.before.activeAchievement].transDesc), t.target = d.achievements[n.before.activeAchievement].conditions.target, t.amount = n.before.subAchievements[n.before.activeAchievement].progress;
                                        var h = n.after.subAchievements[n.before.activeAchievement].progress;
                                        return h > t.target && (h = t.target), t.$gsap.timeline({
                                            repeat: 0,
                                            ease: t.$gsap.Linear.easeNone,
                                            onUpdate: t.pouchUnlocking
                                        }).to(t.$data, {
                                            duration: 1,
                                            delay: 1,
                                            amount: h
                                        }), setTimeout((function() {
                                            e.buttonEnabled = !0, d.achievements[n.after.activeAchievement].transDesc != d.achievements[n.before.activeAchievement].transDesc && (e.step = n.after.activeAchievement, e.newDesc = e.t("achievements", d.achievements[n.after.activeAchievement].transDesc), e.target = d.achievements[n.after.activeAchievement].conditions.target, e.amount = 0, e.showCurrentDesc = !1, setTimeout((function() {
                                                e.showNewDesc = !0
                                            }), 500))
                                        }), 4100), "break"
                                    }
                                }, l = 0, m = Object.entries(this.allAchievements); l < m.length; l++) {
                                if ("break" === c()) break
                            }
                        }
                    }
                },
                v = (n(599), n(36)),
                component = Object(v.a)(h, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "achievement-update",
                        class: {
                            active: t.animate
                        }
                    }, [n("div", {
                        staticClass: "background"
                    }), t._v(" "), n("div", {
                        staticClass: "achievement-row",
                        class: {
                            active: t.activateAchievementProgressDisplay, complete: 100 == t.percentage
                        }
                    }, [n("div", {
                        staticClass: "title-bar",
                        class: {
                            complete: 100 == t.percentage
                        }
                    }, [t._v("\n\t\t\t" + t._s(t.title) + "\n\n\t\t\t"), 100 == t.percentage ? n("div", {
                        staticClass: "completed"
                    }, [t._m(0)]) : t._e()]), t._v(" "), n("div", {
                        staticClass: "content-columns"
                    }, [n("div", {
                        staticClass: "achievement-info"
                    }, [n("div", {
                        staticClass: "description-cols"
                    }, [n("div", {
                        staticClass: "description"
                    }, [n("div", {
                        staticClass: "current-desc",
                        class: {
                            show: t.showCurrentDesc
                        }
                    }, [t._v("\n\t\t\t\t\t\t\t" + t._s(t.desc) + "\n\t\t\t\t\t\t")]), t._v(" "), n("div", {
                        staticClass: "new-desc",
                        class: {
                            show: t.showNewDesc
                        }
                    }, [t._v("\n\t\t\t\t\t\t\t" + t._s(t.newDesc) + "\n\t\t\t\t\t\t")])]), t._v(" "), n("div", {
                        staticClass: "progress-values"
                    }, [t._v("\n\t\t\t\t\t\t" + t._s(Math.round(t.amount)) + " / " + t._s(t.target) + "\n\t\t\t\t\t")])]), t._v(" "), n("div", {
                        staticClass: "progress-bar-track"
                    }, [n("div", {
                        staticClass: "progress-bar-contain"
                    }, [n("div", {
                        staticClass: "progress-bar",
                        style: {
                            width: t.percentage + "%"
                        }
                    })]), t._v(" "), t.medals ? n("div", {
                        staticClass: "medal bronze",
                        class: {
                            enabled: t.percentage >= 30
                        }
                    }, [n("div", {
                        staticClass: "the-medal"
                    }), t._v(" "), t.percentage >= 30 ? n("Burst", {
                        staticClass: "a-burst"
                    }) : t._e()], 1) : t._e(), t._v(" "), t.medals ? n("div", {
                        staticClass: "medal silver",
                        class: {
                            enabled: t.percentage >= 55
                        }
                    }, [n("div", {
                        staticClass: "the-medal"
                    }), t._v(" "), t.percentage >= 55 ? n("Burst", {
                        staticClass: "a-burst"
                    }) : t._e()], 1) : t._e(), t._v(" "), t.medals ? n("div", {
                        staticClass: "medal gold",
                        class: {
                            enabled: 100 == t.percentage
                        }
                    }, [n("div", {
                        staticClass: "the-medal"
                    }), t._v(" "), 100 == t.percentage ? n("Burst", {
                        staticClass: "a-burst"
                    }) : t._e()], 1) : t._e()])])])]), t._v(" "), n("div", {
                        staticClass: "button-container",
                        class: {
                            show: t.activateAchievementProgressDisplay
                        }
                    }, [n("Button", {
                        attrs: {
                            disabled: !t.buttonEnabled
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.close(e)
                            }
                        }
                    }, [t._v(t._s(t.t("misc", "Continue")))])], 1)])
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "text"
                    }, [e("img", {
                        attrs: {
                            src: "/icons/icon-tick.png"
                        }
                    })])
                }], !1, null, "6f5a4502", null);
            e.default = component.exports;
            installComponents(component, {
                Burst: n(575).default,
                Button: n(111).default
            })
        },
        598: function(t, e, n) {
            "use strict";
            var r = n(569);
            n.n(r).a
        },
        599: function(t, e, n) {
            "use strict";
            var r = n(570);
            n.n(r).a
        },
        623: function(t, e, n) {},
        624: function(t, e, n) {},
        625: function(t, e, n) {},
        626: function(t, e, n) {},
        627: function(t, e, n) {},
        628: function(t, e, n) {},
        629: function(t, e, n) {},
        647: function(t, e, n) {
            "use strict";
            n.r(e);
            n(58), n(40), n(37), n(23), n(43);
            var r = n(14),
                o = n(18),
                c = n(111),
                l = n(174);

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
            var d = {
                    transition: "overlay",
                    props: ["game"],
                    data: function() {
                        return {
                            initialShow: !1,
                            startAnimation: !1,
                            scores: [{
                                name: "notlive1",
                                pokemon: 7,
                                score: 12345,
                                team: "fire"
                            }, {
                                name: "notlive2",
                                pokemon: 5,
                                score: 10875,
                                team: "water"
                            }]
                        }
                    },
                    beforeMount: function() {
                        this.$store.dispatch("getAllLeaderboards", this.game)
                    },
                    mounted: function() {
                        var t = this;
                        setTimeout((function() {
                            t.initialShow = !0
                        }), 20), setTimeout((function() {
                            t.startAnimation = !0
                        }), 400), this.checkMissions("viewLeaderboardEachGame", 1, {
                            game: this.game
                        }), this.trackPageView("Leaderboard - ".concat(this.game))
                    },
                    components: {
                        Button: c.default,
                        FatText: l.default
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
                        pokemon: "pokemon",
                        liveHighscores: "liveHighscores",
                        lang: "lang"
                    })),
                    methods: {
                        close: function() {
                            var t = this;
                            this.initialShow = !1, this.startAnimation = !1, setTimeout((function() {
                                t.$emit("close", "close")
                            }), 400)
                        }
                    }
                },
                h = (n(690), n(36)),
                component = Object(h.a)(d, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "leaderboard",
                        class: {
                            active: 1 == t.initialShow
                        }
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
                    }, [t._v("\n\t\t\t" + t._s(t.t("misc", "HighscoresTop20")) + "\n\t\t")])]), t._v(" "), n("div", {
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
                                return t.close()
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: "/icons/icon-close.png"
                        }
                    })])], 1)]), t._v(" "), n("div", {
                        staticClass: "scoreboard-container",
                        class: {
                            active: 1 == t.startAnimation
                        }
                    }, [n("div", {
                        staticClass: "result-block"
                    }, [t.pokemon ? n("div", {
                        staticClass: "results-list"
                    }, [n("ul", t._l(t.liveHighscores[t.game], (function(e, r) {
                        return n("li", {
                            key: r
                        }, [n("div", {
                            staticClass: "inner"
                        }, [n("div", {
                            staticClass: "position"
                        }, [n("FatText", {
                            attrs: {
                                ordinal: !0,
                                text: r + 1
                            }
                        })], 1), t._v(" "), n("div", {
                            staticClass: "pokemon"
                        }, [n("div", {
                            staticClass: "box",
                            style: {
                                backgroundImage: "url(/pokemon/bg-types/bg-" + t.pokemon[e.pokemon - 1].type.split(",")[0] + ".jpg)"
                            }
                        }, [n("div", {
                            staticClass: "the-pokemon-outer"
                        }, [n("div", {
                            staticClass: "the-pokemon-inner",
                            style: {
                                backgroundImage: "url(/pokemon/leaderboard/" + t.pokemon[e.pokemon - 1].imageslug + ".png)"
                            }
                        })])])]), t._v(" "), n("div", {
                            staticClass: "username"
                        }, [t._v("\n\t\t\t\t\t\t\t\t" + t._s(e.user) + "\n\t\t\t\t\t\t\t")]), t._v(" "), n("div", {
                            staticClass: "razzberry"
                        }), t._v(" "), n("div", {
                            staticClass: "score"
                        }, [t._v("\n\t\t\t\t\t\t\t\t" + t._s(e.score.toLocaleString(t.lang)) + "\n\t\t\t\t\t\t\t")]), t._v(" "), n("div", {
                            staticClass: "flag",
                            class: e.team
                        })])])
                    })), 0)]) : t._e()])])])
                }), [], !1, null, "49e97815", null);
            e.default = component.exports;
            installComponents(component, {
                Button: n(111).default,
                FatText: n(174).default
            })
        },
        649: function(t, e, n) {
            "use strict";
            n.r(e);
            n(89), n(88), n(87), n(66), n(72), n(73), n(58), n(40), n(37), n(23), n(43), n(100), n(86), n(99);
            var r = n(14),
                o = n(98),
                c = n(18),
                l = n(111),
                m = n(174);

            function d(t, e) {
                var n;
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return h(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0,
                    l = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = n.next();
                        return c = t.done, t
                    },
                    e: function(t) {
                        l = !0, o = t
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function h(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }

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
            var f = {
                    mixins: [o.a],
                    transition: "overlay",
                    props: ["game", "selectedPokemon"],
                    data: function() {
                        return {
                            initialShow: !1,
                            startAnimation: !1,
                            caroText: null,
                            caroImage: null,
                            flickityOptions: {
                                prevNextButtons: !1,
                                pageDots: !1,
                                wrapAround: !1,
                                percentPosition: !1,
                                adaptiveHeight: !0
                            },
                            currentStep: 0,
                            device: !1
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.trackPageView("Game Tutorial - ".concat(this.game));
                        var e = this;
                        setTimeout((function() {
                            e.initialShow = !0
                        }), 20), setTimeout((function() {
                            e.startAnimation = !0
                        }), 400), setTimeout((function() {
                            e.$store.commit("updateGamePlayStat", {
                                game: e.game,
                                stat: "hasReadTutorial",
                                value: !0
                            })
                        }), 1e3), this.$nextTick((function() {
                            t.tutorials[t.game] && (e.caroText = t.$refs["flickity-text"], e.caroImage = t.$refs["flickity-image"], e.caroText.on("change", (function(t) {
                                e.currentStep = t, e.caroImage.select(t), e.playSound("swipe")
                            })), e.caroImage.on("change", (function(t) {
                                e.currentStep = t, e.caroText.select(t)
                            })))
                        })), this.$device.isMobileOrTablet ? this.device = "Mobile" : this.device = "Desktop"
                    },
                    components: {
                        Button: l.default,
                        FatText: m.default
                    },
                    computed: function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? v(Object(source), !0).forEach((function(e) {
                                Object(r.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : v(Object(source)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({}, Object(c.b)({
                        tutorials: "tutorials",
                        allPokemon: "pokemon"
                    })),
                    methods: {
                        checkForDynamic: function(t) {
                            if (t.includes("[")) {
                                var e, n = [],
                                    r = d(t.split(/(\[.+?\])/).filter(Boolean));
                                try {
                                    for (r.s(); !(e = r.n()).done;) {
                                        var text = e.value;
                                        if (text.includes("[")) switch (text) {
                                            case "[POKEMON]":
                                                !1 !== this.selectedPokemon ? n.push(this.pokeName(this.selectedPokemon)) : n.push(this.t("misc", "YourPokemon"))
                                        } else n.push(text)
                                    }
                                } catch (t) {
                                    r.e(t)
                                } finally {
                                    r.f()
                                }
                                t = n.join("")
                            }
                            return t
                        },
                        close: function() {
                            var t = this;
                            this.initialShow = !1, this.startAnimation = !1, setTimeout((function() {
                                t.$emit("close", "close")
                            }), 400)
                        },
                        next: function() {
                            this.caroText.next()
                        },
                        previous: function() {
                            this.caroText.previous()
                        },
                        selectSlide: function(t) {
                            this.caroText.select(t)
                        },
                        skipToGame: function() {
                            var t = this;
                            this.initialShow = !1, this.startAnimation = !1, setTimeout((function() {
                                t.$emit("skipToGame", !0)
                            }), 400)
                        }
                    }
                },
                k = (n(689), n(36)),
                component = Object(k.a)(f, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "game-tutorial",
                        class: {
                            active: 1 == t.initialShow
                        }
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
                    }, [t._v("\n\t\t\t\t" + t._s(t.t("misc", "HowToPlay")) + "\n\t\t\t")])]), t._v(" "), n("div", {
                        staticClass: "left-container",
                        class: {
                            active: 1 == t.startAnimation
                        }
                    }, [n("div", {
                        staticClass: "slide-images-container"
                    }, [n("div", {
                        staticClass: "slide-images-carousel"
                    }, [n("Flickity", {
                        ref: "flickity-image",
                        attrs: {
                            options: t.flickityOptions
                        }
                    }, t._l(t.tutorials[t.game], (function(e, i) {
                        return n("div", {
                            key: i,
                            staticClass: "carousel-image-element",
                            style: {
                                backgroundImage: "url(/tutorials/" + t.game + "/" + t.game + "-tut" + (i + 1) + ".jpg)"
                            }
                        })
                    })), 0)], 1)])]), t._v(" "), n("div", {
                        staticClass: "text-container",
                        class: {
                            active: 1 == t.startAnimation
                        }
                    }, [n("Button", {
                        staticClass: "close-btn",
                        attrs: {
                            color: "blue",
                            smaller: !0,
                            flexwidth: !0
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.close()
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: "/icons/icon-close.png"
                        }
                    })]), t._v(" "), t.tutorials[t.game] ? n("div", {
                        staticClass: "carousel-text"
                    }, [n("Flickity", {
                        ref: "flickity-text",
                        attrs: {
                            options: t.flickityOptions
                        }
                    }, t._l(t.tutorials[t.game], (function(e, i) {
                        return n("div", {
                            key: i,
                            staticClass: "carousel-element"
                        }, [n("div", {
                            staticClass: "title"
                        }, [t._v("\n\t\t\t\t\t\t\t" + t._s(t.t(t.gameSlugToTransName(t.game), e.title)) + "\n\t\t\t\t\t\t")]), t._v(" "), n("div", {
                            staticClass: "description"
                        }, [t._v("\n\t\t\t\t\t\t\t" + t._s(e.isDeviceSensitive ? t.checkForDynamic(t.t(t.gameSlugToTransName(t.game), e.description + t.device)) : t.checkForDynamic(t.t(t.gameSlugToTransName(t.game), e.description))) + "\n\t\t\t\t\t\t")])])
                    })), 0)], 1) : t._e(), t._v(" "), t.tutorials[t.game] ? n("div", {
                        staticClass: "carousel-controls"
                    }, [n("div", {
                        staticClass: "button-left caro-button",
                        on: {
                            click: t.previous
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "the-dots"
                    }, t._l(t.tutorials[t.game], (function(e, i) {
                        return n("div", {
                            key: i,
                            staticClass: "one-dot",
                            class: {
                                active: i == t.currentStep
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
                    })]) : t._e(), t._v(" "), n("Button", {
                        attrs: {
                            flexwidth: !0,
                            smaller: !0,
                            extrapadding: !0
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.skipToGame(e)
                            }
                        }
                    }, [t._v("\n\t\t\t\t" + t._s(t.t("misc", "Skip")) + "\n\t\t\t")])], 1)])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                Button: n(111).default
            })
        },
        651: function(t, e, n) {
            "use strict";
            n.r(e);
            n(58), n(40), n(37), n(23), n(43);
            var r = n(14),
                o = n(98),
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
            var m = {
                    mixins: [o.a],
                    props: ["game", "pokemon"],
                    data: function() {
                        return {
                            gameServer: "https://master.d2k49ynrr6clu0.amplifyapp.com",
                            initialShow: !1,
                            startAnimation: !1,
                            iframeAlive: !1,
                            iframeRef: null,
                            eventListen: null,
                            startSeconds: 0,
                            endSeconds: 0
                        }
                    },
                    created: function() {
                        this.iframeAlive = !0
                    },
                    beforeDestroy: function() {
                        this.iframeRef = null, delete this.iframeRef, this.eventListen = window.removeEventListener("gamedata", this.gameEvent), this.eventListen = null, delete this.eventListen, this.analyticsListen = window.removeEventListener("analyticsEvent", this.gameAnalytics), this.analyticsListen = null, delete this.analyticsListen, this.listen = window.removeEventListener("message", this.gameAnalytics), this.listen = null, delete this.listen, this.iframeAlive = !1, delete this.iframeAlive, this.startSeconds = 0, delete this.startSeconds, this.endSeconds = 0, delete this.endSeconds
                    },
                    destroyed: function() {},
                    mounted: function() {
                        var t = this;
                        this.$store.dispatch("getAllLeaderboards", this.game), this.$store.commit("setMusicEnabled", !1);
                        var e = new Date;
                        this.startSeconds = Math.round(e.getTime() / 1e3), e = null, this.iframeRef = this.$refs.iframe, setTimeout((function() {
                            t.initialShow = !0
                        }), 200), setTimeout((function() {
                            t.iframeRef.focus()
                        }), 400), this.eventListen = window.addEventListener("gamedata", this.gameEvent), this.analyticsListen = window.addEventListener("analyticsEvent", this.gameAnalytics), this.listen = window.addEventListener("message", (function(data) {
                            data.data.type && ("gamedata" == data.data.type && t.gameEvent(data.data), "analyticsEvent" == data.data.type && t.gameAnalytics(data.data))
                        })), this.trackEvent("".concat(this.game), "Game Opened", this.game), this.trackEvent("".concat(this.game), "Game Started", this.game), "scene-creator" != this.game && "pair-up" != this.game && this.trackEvent("".concat(this.game), "Choosen Pokemon", this.allPokemon[this.pokemon - 1].enname)
                    },
                    computed: function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? l(Object(source), !0).forEach((function(e) {
                                Object(r.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({}, Object(c.b)({
                        dev: "dev",
                        devProps: "devProps",
                        day: "day",
                        week: "week",
                        sceneCreatorSave: "sceneCreatorSave",
                        mute: "mute",
                        lang: "lang",
                        team: "team",
                        gamePlayStats: "gamePlayStats",
                        activeMusic: "activeMusic",
                        isMobileFullscreen: "isMobileFullscreen",
                        allPokemon: "pokemon"
                    })),
                    watch: {
                        isMobileFullscreen: function(t) {
                            !0 === t ? this.iframeRef.contentWindow.postMessage("resume", "*") : this.iframeRef.contentWindow.postMessage("pause", "*")
                        }
                    },
                    methods: {
                        gameAnalytics: function(data) {
                            data.eventAction && data.eventCategory && data.eventLabel && this.trackEvent(data.eventAction, data.eventCategory, data.eventLabel)
                        },
                        gameEvent: function(data) {
                            var t = this;
                            this.eventListen = null, setTimeout((function() {
                                t.initialShow = !1
                            }), 400), setTimeout((function() {}), 1e3), setTimeout((function() {}), 1600), this.checkAchievements("plays", this.game, 1), this.checkAchievements("uniquePlays", "opening-ceremony", 1, {
                                game: this.game
                            }), this.checkMissions("uniquePlays", 1, {
                                game: this.game
                            }), 104 == parseInt(this.pokemon) && "snow-holes" == this.game && this.checkMissions("snowHolesCubone", 1), 727 == parseInt(this.pokemon) && "waterfall-crossing" == this.game && this.checkMissions("waterfallCrossingIncineroar", 1), 831 == parseInt(this.pokemon) && "relay-ridge" == this.game && this.checkMissions("relayRidgeWooloo", 1), 816 == parseInt(this.pokemon) && "battle-dunk" == this.game && this.checkMissions("battleDunkSobble", 1), "scene-creator" == this.game && this.checkMissions("createScene", 1);
                            var e = this.gamePlayStats[this.game].timesPlayed + 1;
                            this.$store.commit("updateGamePlayStat", {
                                game: this.game,
                                stat: "timesPlayed",
                                value: e
                            });
                            var n = new Date;
                            this.endSeconds = Math.round(n.getTime() / 1e3), n = null, this.$store.commit("updateGamePlayStat", {
                                game: this.game,
                                stat: "elapsedTime",
                                value: this.gamePlayStats[this.game].elapsedTime + (this.endSeconds - this.startSeconds)
                            }), this.trackEvent("".concat(this.game), "Time Spent (seconds)", this.endSeconds - this.startSeconds), data.detail.razzberries > this.gamePlayStats[this.game].topScore && this.$store.commit("updateGamePlayStat", {
                                game: this.game,
                                stat: "topScore",
                                value: data.detail.razzberries
                            }), this.$emit("game-end", data)
                        }
                    }
                },
                d = (n(686), n(36)),
                component = Object(d.a)(m, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "the-game",
                        class: {
                            active: 1 == t.initialShow
                        }
                    }, [t.iframeAlive ? n("div", [t.dev && t.devProps.debugGameMode ? n("iframe", {
                        ref: "iframe",
                        staticClass: "the-iframe",
                        attrs: {
                            src: t.gameServer + "/test/" + t.game + ".html?pokemon=" + t.pokemon + "&goldenRazzberryActive=" + (2 == t.week) + "&game=" + t.game + "&day=" + t.day + "&week=" + t.week + "&lang=" + t.lang + "&mute=" + t.mute + "&team=" + t.team + "&sceneCreatorSave=" + ("scene-creator" == t.game ? t.sceneCreatorSave : "")
                        }
                    }) : n("iframe", {
                        ref: "iframe",
                        staticClass: "the-iframe",
                        attrs: {
                            src: t.gameServer + "/" + t.game + "/index.html?pokemon=" + t.pokemon + "&goldenRazzberryActive=" + (2 == t.week || 4 == t.week) + "&game=" + t.game + "&day=" + t.day + "&week=" + t.week + "&lang=" + t.lang + "&mute=" + t.mute + "&team=" + t.team + "&sceneCreatorSave=" + ("scene-creator" == t.game ? t.sceneCreatorSave : "")
                        }
                    })]) : t._e()])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        654: function(t, e, n) {
            "use strict";
            n.r(e);
            n(58), n(40), n(37), n(23), n(43), n(69);
            var r = n(8),
                o = n(14),
                c = n(98),
                l = n(18),
                m = n(111);

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
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var v = {
                    mixins: [c.a],
                    props: ["game"],
                    components: {
                        Button: m.default
                    },
                    data: function() {
                        return {
                            selectedPokemon: !1,
                            selectedPokemonData: !1,
                            startAnimation: !1,
                            pokemonAnimate: !1
                        }
                    },
                    mounted: function() {
                        var t = this;
                        setTimeout((function() {
                            t.startAnimation = !0
                        }), 400), this.preSelectPokemon(), this.trackPageView("Game Select Pokemon - ".concat(this.game))
                    },
                    computed: h(h({}, Object(l.b)({
                        pokemonOptions: "selectPokemonData",
                        thisWeek: "week",
                        allPokemon: "pokemon",
                        day: "day"
                    })), {}, {
                        mainPokemonImage: function() {
                            var t = encodeURIComponent(this.selectedPokemonData.imageslug);
                            return "849_Toxtricity(Low_Key_Form)_CA-1" == t && "waterfall-crossing" == this.game && (t = "849_Toxtricity(Low_Key_Form)_CA-2"), {
                                backgroundImage: "url('/badges/large/".concat(t, ".png')")
                            }
                        },
                        week: function() {
                            return this.day < 3 ? 0 : this.thisWeek
                        }
                    }),
                    methods: {
                        preSelectPokemon: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function e() {
                                var i;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            i = 0;
                                        case 1:
                                            if (!(i < t.pokemonOptions[t.game].length)) {
                                                e.next = 9;
                                                break
                                            }
                                            if (!(t.pokemonOptions[t.game][i].weekUnlocked <= t.week)) {
                                                e.next = 6;
                                                break
                                            }
                                            return t.selectedPokemon = i, t.selectedPokemonData = t.retrievePokemon(t.pokemonOptions[t.game][i].pokemonID), e.abrupt("break", 9);
                                        case 6:
                                            i++, e.next = 1;
                                            break;
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        retrievePokemon: function(t) {
                            for (var e = !1, p = 0; p < this.allPokemon.length; p++)
                                if (this.allPokemon[p].id == t) {
                                    e = p;
                                    break
                                }
                            return this.allPokemon[e]
                        },
                        selectPokemon: function(t, e) {
                            var n = this;
                            this.selectedPokemon = t, this.pokemonAnimate = !0, this.playSound("change-pokemon"), this.playSound("swipe"), setTimeout((function() {
                                n.playSound("swipe")
                            }), 800), setTimeout((function() {
                                n.selectedPokemonData = n.retrievePokemon(e), n.pokemonAnimate = !1
                            }), 700)
                        },
                        play: function() {
                            var t = this;
                            this.initialShow = !1, this.startAnimation = !1, "battle-dunk" == this.game && this.checkAchievements("uniquePokemonPlayed", this.game, 1, {
                                pokemon: this.selectedPokemonData.id
                            }), setTimeout((function() {
                                t.$emit("close", {
                                    play: !0,
                                    pokemon: t.selectedPokemonData.id
                                })
                            }), 400)
                        }
                    }
                },
                f = (n(688), n(36)),
                component = Object(f.a)(v, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "game-select-pokemon",
                        class: [t.game, {
                            active: t.startAnimation
                        }]
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
                    }, [t._v("\n\t\t\t\t" + t._s(t.t("misc", "SelectAPokemon")) + "\n\t\t\t")])]), t._v(" "), n("div", {
                        staticClass: "left-container",
                        class: {
                            active: 1 == t.startAnimation
                        }
                    }, [t.pokemonOptions[t.game] ? n("div", {
                        staticClass: "select-pokemon-grid"
                    }, t._l(t.pokemonOptions[t.game], (function(e, i) {
                        return n("div", {
                            key: i,
                            staticClass: "single-pokemon",
                            style: {
                                backgroundImage: "url(/pokemon/character-select/" + t.game + "/" + e.imageSlug + (e.weekUnlocked > t.week ? "_locked" : "") + (i == t.selectedPokemon ? "_selected" : "") + ".png)",
                                zIndex: t.pokemonOptions[t.game].length - i
                            }
                        }, [e.weekUnlocked <= t.week ? n("div", {
                            staticClass: "hit-box",
                            on: {
                                click: function(n) {
                                    return t.selectPokemon(i, e.pokemonID)
                                }
                            }
                        }) : t._e()])
                    })), 0) : t._e()]), t._v(" "), n("div", {
                        staticClass: "selected-pokemon-container",
                        class: {
                            active: 1 == t.startAnimation
                        }
                    }, [n("div", {
                        staticClass: "selected-pokemon",
                        class: {
                            "slide-out": t.pokemonAnimate
                        },
                        style: t.mainPokemonImage
                    }), t._v(" "), n("div", {
                        staticClass: "button-container"
                    }, [n("Button", {
                        nativeOn: {
                            click: function(e) {
                                return t.play(e)
                            }
                        }
                    }, [t._v("\n\t\t\t\t\t" + t._s(t.t("misc", "Play")) + "\n\t\t\t\t")])], 1)])])
                }), [], !1, null, "640cc8cb", null);
            e.default = component.exports;
            installComponents(component, {
                Button: n(111).default
            })
        },
        655: function(t, e, n) {
            "use strict";
            n.r(e);
            n(58), n(40), n(37), n(23), n(43);
            var r = n(14),
                o = n(18),
                c = n(111),
                l = n(586);

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
            var d = {
                    props: ["game", "razzberries"],
                    components: {
                        Button: c.default,
                        MainMenuItem: l.default
                    },
                    data: function() {
                        return {
                            startAnimation: !1,
                            actualRazzberries: 0
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.actualRazzberries = parseInt(this.razzberries), 1 == this.week && (this.actualRazzberries = 2 * parseInt(this.razzberries)), 4 == this.week && (this.actualRazzberries = 3 * parseInt(this.razzberries)), setTimeout((function() {
                            t.startAnimation = !0
                        }), 100)
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
                        alerts: "alerts",
                        guestMode: "guestMode",
                        lang: "lang",
                        week: "week"
                    })),
                    methods: {
                        backToGameZone: function() {
                            var t = this;
                            this.startAnimation = !1, setTimeout((function() {
                                t.$router.push("/game-zone")
                            }), 300)
                        },
                        gotoBadges: function() {
                            var t = this;
                            this.startAnimation = !1, setTimeout((function() {
                                t.$router.push("/badges")
                            }), 400)
                        },
                        gotoTeamRaces: function() {
                            if (!this.guestMode) {
                                var t = this;
                                this.startAnimation = !1, setTimeout((function() {
                                    t.$router.push("/team-race")
                                }), 400)
                            }
                        },
                        toggleLeaderboard: function() {
                            if (!this.guestMode) {
                                var t = this;
                                this.startAnimation = !1, setTimeout((function() {
                                    t.$emit("toggleLeaderboard", !0)
                                }), 400)
                            }
                        },
                        toggleSelectPokemonOrPlayGame: function() {
                            var t = this;
                            this.startAnimation = !1, setTimeout((function() {
                                t.$emit("toggleSelectPokemonOrPlayGame", !0)
                            }), 400)
                        },
                        toggleGameTutorial: function() {
                            var t = this;
                            this.startAnimation = !1, setTimeout((function() {
                                t.$emit("toggleGameTutorial", !0)
                            }), 400)
                        }
                    }
                },
                h = (n(687), n(36)),
                component = Object(h.a)(d, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "game-final-score",
                        class: {
                            active: 1 == t.startAnimation
                        }
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
                    }, [t._v("\n\t\t\t\t" + t._s(t.t("misc", "FinalScore")) + "\n\t\t\t")])]), t._v(" "), n("div", {
                        staticClass: "main-container",
                        class: {
                            active: 1 == t.startAnimation
                        }
                    }, [n("Button", {
                        staticClass: "back-btn",
                        attrs: {
                            smaller: !0,
                            flexwidth: !0
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.backToGameZone(e)
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: "/icons/icon-home.png"
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "final-score-info-box"
                    }, [n("div", {
                        staticClass: "title"
                    }, [t._v("\n\t\t\t\t\t" + t._s(t.t("misc", "YouveCollected")) + "\n\t\t\t\t")]), t._v(" "), n("div", {
                        staticClass: "score"
                    }, [n("div", {
                        staticClass: "razzberry"
                    }), t._v(" "), n("div", {
                        staticClass: "the-score"
                    }, [t._v("\n\t\t\t\t\t\t" + t._s(t.actualRazzberries.toLocaleString(t.lang)) + "\n\t\t\t\t\t")])]), t._v(" "), n("div", {
                        staticClass: "button-container"
                    }, ["scene-creator" != t.game && "pair-up" != t.game ? n("Button", {
                        staticClass: "a-button",
                        attrs: {
                            circle: !0,
                            color: "blue",
                            smaller: !0,
                            disabled: t.guestMode
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.toggleLeaderboard(!0)
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: "/icons/icon-leaderboard.png"
                        }
                    })]) : t._e(), t._v(" "), n("Button", {
                        staticClass: "a-button",
                        attrs: {
                            circle: !0
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.toggleSelectPokemonOrPlayGame(!0)
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: "/icons/icon-play.png"
                        }
                    })]), t._v(" "), n("Button", {
                        staticClass: "a-button",
                        attrs: {
                            circle: !0,
                            color: "blue",
                            smaller: !0
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.toggleGameTutorial(!0)
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: "/icons/icon-question.png"
                        }
                    })])], 1)]), t._v(" "), n("MainMenuItem", {
                        class: {
                            active: 1 == t.startAnimation
                        },
                        staticStyle: {
                            "--num-index": "2"
                        },
                        attrs: {
                            type: "badges",
                            "new-alert": t.alerts.badgesPage
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
                            type: "team",
                            "new-alert": t.alerts.teamRaces,
                            disable: t.guestMode
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.gotoTeamRaces(e)
                            }
                        }
                    })], 1)])
                }), [], !1, null, "7137c440", null);
            e.default = component.exports;
            installComponents(component, {
                Button: n(111).default,
                MainMenuItem: n(586).default
            })
        },
        656: function(t, e, n) {
            "use strict";
            n.r(e);
            n(58), n(40), n(37), n(23), n(43);
            var r = n(14),
                o = n(98),
                c = n(575),
                l = n(111),
                m = n(174),
                d = n(18);

            function h(object, t) {
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
                    mixins: [o.a],
                    props: ["razzberries", "game", "maxscore"],
                    components: {
                        Burst: c.default,
                        Button: l.default,
                        FatText: m.default
                    },
                    data: function() {
                        return {
                            animate: !1,
                            landPouch: !1,
                            razzberryCount: 0,
                            rollingRazzberryCount: 0,
                            countOptions: {
                                useEasing: !0,
                                useGrouping: !0,
                                separator: ",",
                                duration: 7
                            },
                            prevRazz: 0,
                            maxRazzberries: 500,
                            buttonEnabled: !1,
                            rollingPercentage: 0,
                            startPouchPulse1: !1,
                            startPouchPulse2: !1,
                            startPouchPulse3: !1,
                            unlockedPouch: {
                                pouch1: !1,
                                pouch2: !1,
                                pouch3: !1
                            },
                            hasFired1: !1,
                            hasFired2: !1,
                            hasFired3: !1,
                            pouchPercentages: {
                                pouch1: !1,
                                pouch2: !1,
                                pouch3: !1
                            },
                            isDoubleRazzberries: !1,
                            isTripleRazzberries: !1,
                            showMultiplier: !1,
                            multiplierAmount: ""
                        }
                    },
                    mounted: function() {
                        this.$store.commit("setMusicEnabled", !0), this.$store.commit("setMusicPlaying", ""), this.$store.commit("setActiveMusic", "main-menu");
                        var t = this;
                        1 == this.week && (this.isDoubleRazzberries = !0), 4 == this.week && (this.isTripleRazzberries = !0), this.maxRazzberries = this.maxscore.epic, this.pouchPercentages.pouch1 = Math.round(this.maxscore.standard / this.maxscore.epic * 100), this.pouchPercentages.pouch2 = Math.round(this.maxscore.rare / this.maxscore.epic * 100), this.pouchPercentages.pouch3 = 100, this.$store.commit("updateGamePlayStat", {
                            game: this.game,
                            stat: "hasPlayed",
                            value: !0
                        }), setTimeout((function() {
                            t.animate = !0
                        }), 200), setTimeout((function() {
                            t.landPouch = !0
                        }), 500), setTimeout((function() {
                            t.landPouch = !0, t.razzberryCount = t.razzberries, t.$gsap.timeline({
                                repeat: 0,
                                ease: t.$gsap.Linear.easeInOut(2),
                                onUpdate: t.pouchUnlocking
                            }).to(t.$data, {
                                duration: 4,
                                delay: 0,
                                rollingPercentage: t.percentage
                            }), t.$gsap.timeline({
                                repeat: 0,
                                ease: t.$gsap.Linear.easeInOut(2),
                                onUpdate: t.pouchUnlocking
                            }).to(t.$data, {
                                duration: 4,
                                delay: 0,
                                rollingRazzberryCount: t.razzberries
                            })
                        }), 2e3), this.isDoubleRazzberries || this.isTripleRazzberries ? setTimeout((function() {
                            t.showMultiplier = !0;
                            var e = 0;
                            t.isDoubleRazzberries && (t.multiplierAmount = "x2", e = 2 * parseInt(t.razzberries), t.razzberryCount = e), t.isTripleRazzberries && (t.multiplierAmount = "x3", e = 3 * parseInt(t.razzberries), t.razzberryCount = e), t.$store.commit("addRazzberries", parseInt(e)), t.$gsap.timeline({
                                repeat: 0,
                                ease: t.$gsap.Linear.easeInOut(2),
                                onUpdate: t.pouchUnlocking
                            }).to(t.$data, {
                                duration: 2,
                                delay: 0,
                                rollingPercentage: t.percentage
                            }), t.$gsap.timeline({
                                repeat: 0,
                                ease: t.$gsap.Linear.easeInOut(2),
                                onUpdate: t.pouchUnlocking,
                                onComplete: function() {
                                    t.buttonEnabled = !0
                                }
                            }).to(t.$data, {
                                duration: 2,
                                delay: 0,
                                rollingRazzberryCount: e
                            })
                        }), 6e3) : (setTimeout((function() {
                            t.buttonEnabled = !0
                        }), 6e3), this.$store.commit("addRazzberries", this.razzberries))
                    },
                    computed: function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? h(Object(source), !0).forEach((function(e) {
                                Object(r.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({
                        percentage: function() {
                            return this.razzberryCount / this.maxRazzberries * 100
                        }
                    }, Object(d.b)({
                        lang: "lang",
                        week: "week"
                    })),
                    methods: {
                        giveReward: function() {
                            var t = this;
                            this.$emit("rewards", this.unlockedPouch), this.playSound("transition"), setTimeout((function() {
                                t.animate = !1, t.$emit("close", "done with post screen")
                            }), 400)
                        },
                        pouchUnlocking: function() {
                            this.razzberries > 0 && Math.round(this.rollingRazzberryCount) > this.prevRazz && (this.playSound("razztick"), this.prevRazz = Math.round(this.rollingRazzberryCount)), this.rollingRazzberryCount >= this.maxscore.standard && !this.hasFired1 && (this.hasFired1 = !0, this.unlockedPouch = 1, this.startPouchPulse1 = !0, this.playSound("pouch-unlock1")), this.rollingRazzberryCount >= this.maxscore.rare && !this.hasFired2 && (this.hasFired2 = !0, this.unlockedPouch = 2, this.startPouchPulse2 = !0, this.playSound("pouch-unlock2")), this.rollingRazzberryCount >= this.maxscore.epic && !this.hasFired3 && (this.hasFired3 = !0, this.unlockedPouch = 3, this.startPouchPulse3 = !0, this.playSound("pouch-unlock3"))
                        }
                    }
                },
                f = (n(691), n(36)),
                component = Object(f.a)(v, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "post-game-screen",
                        class: {
                            active: t.animate
                        }
                    }, [n("div", {
                        staticClass: "background"
                    }), t._v(" "), n("div", {
                        staticClass: "post-game-container"
                    }, [n("div", {
                        staticClass: "pouch-outer-container"
                    }, [n("div", {
                        staticClass: "pouch-inner-container",
                        class: {
                            "land-pouch": t.landPouch
                        }
                    }, [n("div", {
                        staticClass: "pouch",
                        class: {
                            "pouch1 disabled": !1 === t.rollingPercentage, "pouch1 disabled": t.rollingRazzberryCount < t.maxscore.standard, pouch1: t.rollingRazzberryCount >= t.maxscore.standard, pouch2: t.rollingRazzberryCount >= t.maxscore.rare, pouch3: t.rollingRazzberryCount >= t.maxscore.epic
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "pouch-shadow",
                        class: {
                            "land-pouch": t.landPouch
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "front-pulse-ring",
                        class: {
                            "start-pouch-pulse": t.startPouchPulse1
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "embers",
                        class: {
                            "start-pouch-pulse": t.startPouchPulse1
                        }
                    }, t._l(8, (function(i) {
                        return n("div", {
                            key: i,
                            staticClass: "an-ember ember1",
                            class: "ember" + (i + 1)
                        })
                    })), 0), t._v(" "), n("div", {
                        staticClass: "front-pulse-ring",
                        class: {
                            "start-pouch-pulse": t.startPouchPulse2
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "embers",
                        class: {
                            "start-pouch-pulse": t.startPouchPulse2
                        }
                    }, t._l(8, (function(i) {
                        return n("div", {
                            key: i,
                            staticClass: "an-ember ember1",
                            class: "ember" + (i + 1)
                        })
                    })), 0), t._v(" "), n("div", {
                        staticClass: "front-pulse-ring",
                        class: {
                            "start-pouch-pulse": t.startPouchPulse3
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "embers",
                        class: {
                            "start-pouch-pulse": t.startPouchPulse3
                        }
                    }, t._l(8, (function(i) {
                        return n("div", {
                            key: i,
                            staticClass: "an-ember ember1",
                            class: "ember" + (i + 1)
                        })
                    })), 0)])]), t._v(" "), n("div", {
                        staticClass: "progress-bar-track",
                        class: {
                            active: t.animate
                        }
                    }, [n("div", {
                        staticClass: "progress-bar-contain"
                    }, [n("div", {
                        staticClass: "progress-bar",
                        style: {
                            width: t.rollingPercentage + "%"
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "medal bronze",
                        class: {
                            enabled: t.rollingRazzberryCount >= t.maxscore.standard
                        },
                        style: {
                            left: "calc(" + t.pouchPercentages.pouch1 + "% - 2.5vw)"
                        }
                    }, [n("div", {
                        staticClass: "the-medal"
                    }), t._v(" "), t.rollingRazzberryCount >= t.maxscore.standard ? n("Burst", {
                        staticClass: "a-burst"
                    }) : t._e(), t._v(" "), n("div", {
                        staticClass: "amount-required"
                    }, [t._v("\n\t\t\t\t\t\t" + t._s(t.maxscore.standard) + "\n\t\t\t\t\t")])], 1), t._v(" "), n("div", {
                        staticClass: "medal silver",
                        class: {
                            enabled: t.rollingRazzberryCount >= t.maxscore.rare
                        },
                        style: {
                            left: "calc(" + t.pouchPercentages.pouch2 + "% - 2.5vw)"
                        }
                    }, [n("div", {
                        staticClass: "the-medal"
                    }), t._v(" "), t.rollingRazzberryCount >= t.maxscore.rare ? n("Burst", {
                        staticClass: "a-burst"
                    }) : t._e(), t._v(" "), n("div", {
                        staticClass: "amount-required"
                    }, [t._v("\n\t\t\t\t\t\t" + t._s(t.maxscore.rare) + "\n\t\t\t\t\t")])], 1), t._v(" "), n("div", {
                        staticClass: "medal gold",
                        class: {
                            enabled: t.rollingRazzberryCount >= t.maxscore.epic
                        }
                    }, [n("div", {
                        staticClass: "the-medal"
                    }), t._v(" "), t.rollingRazzberryCount >= t.maxscore.epic ? n("Burst", {
                        staticClass: "a-burst"
                    }) : t._e(), t._v(" "), n("div", {
                        staticClass: "amount-required"
                    }, [t._v("\n\t\t\t\t\t\t" + t._s(t.maxscore.epic) + "\n\t\t\t\t\t")])], 1)]), t._v(" "), n("div", {
                        staticClass: "razzberries-container",
                        class: {
                            active: t.animate
                        }
                    }, [n("div", {
                        staticClass: "razzberry"
                    }), t._v(" "), n("div", {
                        staticClass: "count"
                    }, [t._v("\n\t\t\t\t\t" + t._s(Math.round(t.rollingRazzberryCount).toLocaleString(t.lang)) + "\n\t\t\t\t")]), t._v(" "), t.showMultiplier ? n("FatText", {
                        staticClass: "multiplier-razzberries",
                        attrs: {
                            text: t.multiplierAmount
                        }
                    }) : t._e()], 1), t._v(" "), n("div", {
                        staticClass: "button-container",
                        class: {
                            active: t.animate
                        }
                    }, [n("Button", {
                        attrs: {
                            disabled: !t.buttonEnabled
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.giveReward(e)
                            }
                        }
                    }, [t._v(t._s(t.t("misc", "Continue")))])], 1)])])
                }), [], !1, null, "9010b496", null);
            e.default = component.exports;
            installComponents(component, {
                Burst: n(575).default,
                FatText: n(174).default,
                Button: n(111).default
            })
        },
        686: function(t, e, n) {
            "use strict";
            var r = n(623);
            n.n(r).a
        },
        687: function(t, e, n) {
            "use strict";
            var r = n(624);
            n.n(r).a
        },
        688: function(t, e, n) {
            "use strict";
            var r = n(625);
            n.n(r).a
        },
        689: function(t, e, n) {
            "use strict";
            var r = n(626);
            n.n(r).a
        },
        690: function(t, e, n) {
            "use strict";
            var r = n(627);
            n.n(r).a
        },
        691: function(t, e, n) {
            "use strict";
            var r = n(628);
            n.n(r).a
        },
        692: function(t, e, n) {
            "use strict";
            var r = n(629);
            n.n(r).a
        }
    }
]);