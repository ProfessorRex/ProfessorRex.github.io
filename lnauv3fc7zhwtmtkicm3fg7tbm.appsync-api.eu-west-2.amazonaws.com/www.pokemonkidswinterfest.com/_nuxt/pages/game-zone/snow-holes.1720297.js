(window.webpackJsonp = window.webpackJsonp || []).push([
    [15], {
        701: function(t, e, n) {
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
                        this.trackPageView("Game - Snow Holes")
                    },
                    methods: {}
                },
                l = n(36),
                component = Object(l.a)(o, (function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "snow-holes"
                    }, [e("GameIntro", {
                        attrs: {
                            game: "snow-holes",
                            title: this.t("gameName", "SnowHoleGameName"),
                            description: this.t("gameSnowHoles", "Intro")
                        }
                    })], 1)
                }), [], !1, null, "e10fe894", null);
            e.default = component.exports;
            installComponents(component, {
                GameIntro: n(563).default
            })
        }
    }
]);