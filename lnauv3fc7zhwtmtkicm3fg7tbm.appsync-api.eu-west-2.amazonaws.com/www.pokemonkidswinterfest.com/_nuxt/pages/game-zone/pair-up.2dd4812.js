(window.webpackJsonp = window.webpackJsonp || []).push([
    [12], {
        708: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = {
                    transition: "overlay",
                    components: {
                        GameIntro: n(563).default
                    },
                    data: function() {
                        return {}
                    },
                    mounted: function() {
                        this.trackPageView("Game - Pair Up")
                    },
                    methods: {}
                },
                o = n(36),
                component = Object(o.a)(r, (function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "pair-up"
                    }, [e("GameIntro", {
                        attrs: {
                            game: "pair-up",
                            title: this.t("gameName", "PairGameName"),
                            description: this.t("gamePairUp", "Intro")
                        }
                    })], 1)
                }), [], !1, null, "363062cd", null);
            e.default = component.exports;
            installComponents(component, {
                GameIntro: n(563).default
            })
        }
    }
]);