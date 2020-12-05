(window.webpackJsonp = window.webpackJsonp || []).push([
    [10], {
        714: function(t, e, n) {
            "use strict";
            n.r(e);
            var o = {
                    transition: "overlay",
                    components: {
                        GameIntro: n(563).default
                    },
                    data: function() {
                        return {}
                    },
                    mounted: function() {
                        this.trackPageView("Game - Battle Dunk")
                    },
                    methods: {}
                },
                l = n(36),
                component = Object(l.a)(o, (function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "battle-dunk"
                    }, [e("GameIntro", {
                        attrs: {
                            game: "battle-dunk",
                            title: this.t("gameName", "BattleDunkGameName"),
                            description: this.t("gameBattleDunk", "Intro")
                        }
                    })], 1)
                }), [], !1, null, "5bbf7daa", null);
            e.default = component.exports;
            installComponents(component, {
                GameIntro: n(563).default
            })
        }
    }
]);