(window.webpackJsonp = window.webpackJsonp || []).push([
    [16], {
        700: function(t, e, n) {
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
                        this.trackPageView("Game - Waterfall Crossing")
                    },
                    methods: {}
                },
                o = n(36),
                component = Object(o.a)(r, (function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "waterfall-crossing"
                    }, [e("GameIntro", {
                        attrs: {
                            game: "waterfall-crossing",
                            title: this.t("gameName", "WaterfallGameName"),
                            description: this.t("gameWaterfallCrossing", "Intro")
                        }
                    })], 1)
                }), [], !1, null, "47975623", null);
            e.default = component.exports;
            installComponents(component, {
                GameIntro: n(563).default
            })
        }
    }
]);