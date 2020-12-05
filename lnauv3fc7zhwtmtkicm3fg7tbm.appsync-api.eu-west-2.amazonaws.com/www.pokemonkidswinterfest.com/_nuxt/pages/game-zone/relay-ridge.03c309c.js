(window.webpackJsonp = window.webpackJsonp || []).push([
    [13], {
        703: function(e, t, n) {
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
                        this.trackPageView("Game - Relay Ridge")
                    },
                    methods: {}
                },
                o = n(36),
                component = Object(o.a)(r, (function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        staticClass: "relay-ridge"
                    }, [t("GameIntro", {
                        attrs: {
                            game: "relay-ridge",
                            title: this.t("gameName", "RelayGameName"),
                            description: this.t("gameRelayRidge", "Intro")
                        }
                    })], 1)
                }), [], !1, null, "6dafffbc", null);
            t.default = component.exports;
            installComponents(component, {
                GameIntro: n(563).default
            })
        }
    }
]);