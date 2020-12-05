(window.webpackJsonp = window.webpackJsonp || []).push([
    [14], {
        702: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = {
                    transition: "overlay",
                    components: {
                        GameIntro: n(563).default
                    },
                    data: function() {
                        return {}
                    },
                    mounted: function() {
                        this.trackPageView("Game - Scene Creator")
                    },
                    methods: {}
                },
                o = n(36),
                component = Object(o.a)(r, (function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        staticClass: "scene-creator"
                    }, [t("GameIntro", {
                        attrs: {
                            game: "scene-creator",
                            title: this.t("gameName", "SceneCreatorName"),
                            description: this.t("gameSceneCreator", "Intro")
                        }
                    })], 1)
                }), [], !1, null, "861a67fa", null);
            t.default = component.exports;
            installComponents(component, {
                GameIntro: n(563).default
            })
        }
    }
]);