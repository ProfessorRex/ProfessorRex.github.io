(window.webpackJsonp = window.webpackJsonp || []).push([
    [17], {
        630: function(t, e, o) {},
        631: function(t, e, o) {},
        646: function(t, e, o) {
            "use strict";
            o.r(e);
            o(58), o(40), o(37), o(23), o(43), o(69);
            var n = o(8),
                c = (o(86), o(99), o(14)),
                r = o(577),
                l = o(98),
                v = o(111),
                d = o(566),
                m = o(632),
                _ = o(18);

            function k(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(object);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, o)
                }
                return e
            }
            var h = {
                    mixins: [l.a],
                    data: function() {
                        return {
                            nickname: "",
                            nicknameError: !1,
                            showTerms: !1,
                            showCookiesPolicy: !1,
                            showPrivacyPolicy: !1,
                            showProgress: !1,
                            step1Disabled: !0,
                            step3Disabled: !0,
                            stepParentalVerificationActive: !0,
                            stepCookiesActive: !1,
                            stepNoCookies: !1,
                            step1Active: !1,
                            step2Active: !1,
                            step3Active: !1,
                            step4Active: !1,
                            step1Complete: !1,
                            step2Complete: !1,
                            step3Complete: !1,
                            flickityOptions: {
                                initialIndex: 5,
                                prevNextButtons: !1,
                                pageDots: !1,
                                wrapAround: !1,
                                percentPosition: !1,
                                adaptiveHeight: !1
                            },
                            showParentalVerifcation: !0,
                            answersWrong: !1,
                            parentalVerification: {
                                question: "",
                                answers: [{
                                    answer: "",
                                    correct: !1
                                }, {
                                    answer: "",
                                    correct: !1
                                }, {
                                    answer: "",
                                    correct: !1
                                }]
                            },
                            cookieAccepted: !1,
                            termsAccepted: !1,
                            companionSlider: null,
                            localSelectedCompanion: !1,
                            selectedCompanionPokemonID: !1,
                            companions: [{
                                name: "charizard",
                                number: 6
                            }, {
                                name: "eevee",
                                number: 133
                            }, {
                                name: "greninja",
                                number: 658
                            }, {
                                name: "grookey",
                                number: 810
                            }, {
                                name: "jigglypuff",
                                number: 39
                            }, {
                                name: "pikachu",
                                number: 25
                            }, {
                                name: "scorbunny",
                                number: 813
                            }, {
                                name: "sobble",
                                number: 816
                            }, {
                                name: "wooloo",
                                number: 831
                            }, {
                                name: "yamper",
                                number: 835
                            }],
                            userTeam: "fire",
                            disableNameInput: !1
                        }
                    },
                    props: ["active"],
                    components: {
                        Article: r.default,
                        Button: v.default,
                        InputText: d.default
                    },
                    mounted: function() {
                        var t = this,
                            e = this;
                        this.newParentalQuestion(), this.changeCompanion(5), this.playSound("transition"), this.$store.commit("setActiveMusic", "main-menu"), this.$nextTick((function() {
                            e.companionSlider = t.$refs["companion-slider"], e.companionSlider.on("change", (function(t) {
                                e.changeCompanion(t), e.playSound("swipe")
                            }))
                        }));
                        var o = Math.floor(4 * Math.random());
                        this.userTeam = ["fire", "water", "electric", "grass"][o], console.log("random team", this.userTeam)
                    },
                    computed: function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? k(Object(source), !0).forEach((function(e) {
                                Object(c.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : k(Object(source)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({}, Object(_.b)({
                        lang: "lang",
                        enableAPI: "enableAPI",
                        guestMode: "guestMode",
                        allPokemon: "pokemon"
                    })),
                    methods: {
                        filterSwearing: function(t) {
                            var e = t.toLowerCase();
                            return !(m.filter((function(t) {
                                return e.includes(t)
                            })).length > 0) || (this.nicknameError = this.t("onboarding", "NickNameNotAllowed"), this.playSound("error"), this.trackEvent("Swearing", "Onboarding", "User used a swear word in username input"), !1)
                        },
                        submitNickname: function() {
                            var t = this;
                            return Object(n.a)(regeneratorRuntime.mark((function e() {
                                var o;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!t.filterSwearing(t.nickname)) {
                                                e.next = 14;
                                                break
                                            }
                                            if (!t.enableAPI || t.guestMode) {
                                                e.next = 8;
                                                break
                                            }
                                            return t.disableNameInput = !0, o = t, e.next = 6, t.$store.dispatch("createUser", {
                                                name: t.nickname.toLowerCase(),
                                                team: t.userTeam
                                            }).then((function(t) {
                                                "error" == t.status ? ("user exists" == t.result ? (o.nicknameError = o.t("onboarding", "NickNameUsed"), o.playSound("error")) : (o.nicknameError = o.t("mainMenu", "ErrorGeneric"), o.playSound("error")), o.disableNameInput = !1) : (o.step1Active = !1, o.step1Complete = !0, o.step2Active = !0, o.$store.commit("setTrainerID", o.nickname.toLowerCase()), o.$store.commit("setGuestMode", !1))
                                            }));
                                        case 6:
                                            e.next = 14;
                                            break;
                                        case 8:
                                            alert("DEV: API mode is off, nothing will goto database."), t.step1Active = !1, t.step1Complete = !0, t.step2Active = !0, t.$store.commit("setTrainerID", t.nickname.toLowerCase()), t.$store.commit("setGuestMode", !1);
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        selectPokemon: function() {
                            this.playSound("change-pokemon"), this.step2Active = !1, this.step2Complete = !0, this.step3Active = !0;
                            var t = this;
                            setTimeout((function() {
                                t.step3Active = !0, t.step3Complete = !0, t.step3Disabled = !1
                            }), 1e3)
                        },
                        next: function() {
                            this.companionSlider.next()
                        },
                        previous: function() {
                            this.companionSlider.previous()
                        },
                        finalStep: function() {
                            this.step3Active = !1, this.step4Active = !0, this.showProgress = !1, this.$store.commit("setUsersCompanionPokemon", this.selectedCompanionPokemonID), this.trackEvent("Starting Pokemon", "Starting Pokémon Selected", this.allPokemon[this.selectedCompanionPokemonID - 1].enname), this.$store.commit("setTeam", this.userTeam), this.trackEvent("Team", "Team Added To", this.userTeam)
                        },
                        letsGo: function() {
                            this.playSound("transition"), this.$router.push("/main-menu")
                        },
                        newParentalQuestion: function() {
                            var t = [3, 9],
                                e = [11, 19],
                                o = Math.floor(Math.random() * (t[1] - t[0])) + t[0],
                                n = Math.floor(Math.random() * (e[1] - e[0])) + e[0],
                                c = Math.floor(-3 * Math.random()) + 4;
                            this.parentalVerification.question = "".concat(o, " x ").concat(n, " = ?");
                            var r = (c + o) * n,
                                l = o * (c + n),
                                v = o * n;
                            this.parentalVerification.answers = [], this.parentalVerification.answers.push({
                                answer: v,
                                correct: !0
                            }), this.parentalVerification.answers.push({
                                answer: r,
                                correct: !1
                            }), this.parentalVerification.answers.push({
                                answer: l,
                                correct: !1
                            }), this.parentalVerification.answers.sort((function() {
                                return Math.random() - .5
                            }))
                        },
                        answerParentQuestions: function(t) {
                            var e = this;
                            t ? (this.stepParentalVerificationActive = !1, this.stepCookiesActive = !0, this.playSound("change-pokemon")) : (this.playSound("error"), this.answersWrong = !0, this.showParentalVerifcation = !1, setTimeout((function() {
                                e.newParentalQuestion(), e.answersWrong = !1, e.showParentalVerifcation = !0
                            }), 300))
                        },
                        acceptTerms: function() {
                            this.stepCookiesActive = !1, this.cookieAccepted ? (this.showProgress = !0, this.step1Active = !0, this.step1Complete = !1) : this.stepNoCookies = !0, this.$store.commit("setAcceptsCookies", this.cookieAccepted)
                        },
                        backToTerms: function() {
                            this.stepNoCookies = !1, this.stepCookiesActive = !0
                        },
                        enterNoCookieMode: function() {
                            this.$store.commit("setTrainerID", this.t("misc", "Guest")), this.$store.commit("setUsersCompanionPokemon", 6), this.$store.commit("setGuestMode", !0), this.letsGo()
                        },
                        changeCompanion: function(t) {
                            this.localSelectedCompanion = this.companions[t], this.selectedCompanionPokemonID = this.companions[t].number
                        },
                        openTerms: function() {
                            this.showTerms = !0
                        },
                        openCookiesPolicy: function() {
                            this.showCookiesPolicy = !0
                        },
                        openPrivacyPolicy: function() {
                            this.showPrivacyPolicy = !0
                        },
                        closeArticle: function() {
                            this.showTerms = !1, this.showCookiesPolicy = !1, this.showPrivacyPolicy = !1
                        }
                    },
                    watch: {
                        nickname: function() {
                            this.nickname.length > 2 ? this.step1Disabled = !1 : this.step1Disabled = !0, this.nicknameError = !1
                        }
                    }
                },
                f = (o(693), o(36)),
                component = Object(f.a)(h, (function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "onboarding",
                        class: {
                            active: 1 == t.active
                        }
                    }, [o("div", {
                        staticClass: "blue-cover"
                    }), t._v(" "), o("div", {
                        staticClass: "white-block"
                    }, [o("div", {
                        staticClass: "white-block-inner"
                    }, [o("div", {
                        staticClass: "progress-bar",
                        class: {
                            active: 1 == t.showProgress
                        }
                    }, [o("div", {
                        staticClass: "number",
                        class: {
                            active: 1 == t.step1Active, complete: 1 == t.step1Complete
                        },
                        staticStyle: {
                            "--num-index": "1"
                        }
                    }, [t._m(0)]), t._v(" "), o("div", {
                        staticClass: "bar",
                        class: {
                            active: 1 == t.step1Complete
                        }
                    }), t._v(" "), o("div", {
                        staticClass: "number",
                        class: {
                            active: 1 == t.step2Active, complete: 1 == t.step2Complete
                        },
                        staticStyle: {
                            "--num-index": "2"
                        }
                    }, [t._m(1)]), t._v(" "), o("div", {
                        staticClass: "bar",
                        class: {
                            active: 1 == t.step2Complete
                        }
                    }), t._v(" "), o("div", {
                        staticClass: "number",
                        class: {
                            active: 1 == t.step3Active, complete: 1 == t.step3Complete
                        },
                        staticStyle: {
                            "--num-index": "3"
                        }
                    }, [t._m(2)])]), t._v(" "), o("div", {
                        staticClass: "slides",
                        class: {
                            taller: 1 == t.showProgress
                        }
                    }, [o("div", {
                        staticClass: "a-step step-parent-verification",
                        class: {
                            active: 1 == t.stepParentalVerificationActive
                        }
                    }, [o("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.t("onboarding", "TitleParentalVerification")))]), t._v(" "), o("div", {
                        staticClass: "desc",
                        domProps: {
                            innerHTML: t._s(t.t("onboarding", "DescParentalVerification"))
                        }
                    }), t._v(" "), o("div", {
                        staticClass: "the-question",
                        class: {
                            show: t.showParentalVerifcation
                        }
                    }, [t._v("\n\t\t\t\t\t\t\t" + t._s(t.parentalVerification.question) + "\n\t\t\t\t\t\t")]), t._v(" "), o("div", {
                        staticClass: "answers",
                        class: {
                            show: t.showParentalVerifcation
                        }
                    }, t._l(t.parentalVerification.answers, (function(e, i) {
                        return o("div", {
                            key: i,
                            staticClass: "answer-badge",
                            class: {
                                wrong: t.answersWrong
                            },
                            on: {
                                click: function(o) {
                                    return t.answerParentQuestions(e.correct)
                                }
                            }
                        }, [t._v("\n\t\t\t\t\t\t\t\t" + t._s(e.answer) + "\n\t\t\t\t\t\t\t")])
                    })), 0)]), t._v(" "), o("div", {
                        staticClass: "a-step step-cookies",
                        class: {
                            active: 1 == t.stepCookiesActive
                        }
                    }, [o("div", {
                        staticClass: "desc no-bot-pad"
                    }, [o("p", [t._v("\n\t\t\t\t\t\t\t\t" + t._s(t.t("onboarding", "CookiePolicyPara1")) + "\n\t\t\t\t\t\t\t")]), t._v(" "), "en" == t.lang ? o("p", [t._v("\n\t\t\t\t\t\t\t\tPlease read our "), o("a", {
                        on: {
                            click: t.openCookiesPolicy
                        }
                    }, [t._v("Cookie Policy")]), t._v(" to understand how we use cookies and how you can control your cookie settings in your browser. You can still use the website without accepting our cookies but you will have a very limited experience.\n\t\t\t\t\t\t\t")]) : t._e(), t._v(" "), "fr" == t.lang ? o("p", [t._v("\n\t\t\t\t\t\t\t\tVeuillez lire attentivement notre "), o("a", {
                        on: {
                            click: t.openCookiesPolicy
                        }
                    }, [t._v("politique relative aux cookies")]), t._v(" afin de comprendre leur utilisation et d'apprendre comment vous pouvez paramétrer ce réglage dans votre navigateur. Il est possible d'accéder au site après avoir refusé les cookies, mais votre expérience de jeu sera limitée.\n\t\t\t\t\t\t\t")]) : t._e(), t._v(" "), "de" == t.lang ? o("p", [t._v("\n\t\t\t\t\t\t\t\tBitte lesen Sie unsere "), o("a", {
                        on: {
                            click: t.openCookiesPolicy
                        }
                    }, [t._v("Cookie-Richtlinie")]), t._v(", um nachzuvollziehen, wie wir Cookies verwenden und wie Sie Ihre Cookie-Einstellungen in Ihrem Browser kontrollieren können. Sie können die Website auch nutzen, ohne unsere Cookies zu akzeptieren, was jedoch zu einem deutlich eingeschränkten Erlebnis führt.\n\t\t\t\t\t\t\t")]) : t._e(), t._v(" "), "it" == t.lang ? o("p", [t._v("\n\t\t\t\t\t\t\t\tConsulta "), o("a", {
                        on: {
                            click: t.openCookiesPolicy
                        }
                    }, [t._v("l'Informativa sui cookie")]), t._v(" per ulteriori informazioni sull'utilizzo dei cookie da parte nostra e su come gestirli nel tuo browser. Puoi utilizzare il sito anche se non accetti i cookie, ma la tua esperienza risulterà molto limitata.\n\t\t\t\t\t\t\t")]) : t._e(), t._v(" "), "es" == t.lang ? o("p", [t._v("\n\t\t\t\t\t\t\t\tTe recomendamos que leas la "), o("a", {
                        on: {
                            click: t.openCookiesPolicy
                        }
                    }, [t._v("política de cookies")]), t._v(" para entender cómo las utilizamos y cómo puedes modificar los ajustes de cookies en tu navegador. Se puede seguir utilizando la página aunque se rechacen las cookies, pero la experiencia será muy limitada.\n\t\t\t\t\t\t\t")]) : t._e(), t._v(" "), "latam" == t.lang ? o("p", [t._v("\n\t\t\t\t\t\t\t\tLee nuestra "), o("a", {
                        on: {
                            click: t.openCookiesPolicy
                        }
                    }, [t._v("Política de cookies")]), t._v(" para entender cómo las utilizamos y cómo puedes modificar la configuración de las mismas en tu navegador. Puedes seguir usando la página sin aceptar nuestras cookies, pero la experiencia será muy limitada.\n\t\t\t\t\t\t\t")]) : t._e(), t._v(" "), "br" == t.lang ? o("p", [t._v("\n\t\t\t\t\t\t\t\tPor favor, leia nossa "), o("a", {
                        on: {
                            click: t.openCookiesPolicy
                        }
                    }, [t._v("Política de Uso de Cookies")]), t._v(" para entender como usamos cookies e como você pode controlar as configurações de cookies no seu navegador. Você ainda pode utilizar o site sem aceitar nossos cookies, mas sua experiência será bastante limitada.\n\t\t\t\t\t\t\t")]) : t._e()]), t._v(" "), o("div", {
                        staticClass: "tick-bar"
                    }, [o("div", {
                        staticClass: "tick"
                    }, [o("label", [o("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.cookieAccepted,
                            expression: "cookieAccepted"
                        }],
                        attrs: {
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(t.cookieAccepted) ? t._i(t.cookieAccepted, null) > -1 : t.cookieAccepted
                        },
                        on: {
                            change: function(e) {
                                var o = t.cookieAccepted,
                                    n = e.target,
                                    c = !!n.checked;
                                if (Array.isArray(o)) {
                                    var r = t._i(o, null);
                                    n.checked ? r < 0 && (t.cookieAccepted = o.concat([null])) : r > -1 && (t.cookieAccepted = o.slice(0, r).concat(o.slice(r + 1)))
                                } else t.cookieAccepted = c
                            }
                        }
                    }), t._v(" "), o("div", {
                        staticClass: "checkmark"
                    })])]), t._v(" "), o("div", {
                        staticClass: "text"
                    }, [t._v("\n\t\t\t\t\t\t\t\t" + t._s(t.t("onboarding", "CookiePolicyParaAgree1")) + "\n\t\t\t\t\t\t\t")])]), t._v(" "), o("div", {
                        staticClass: "desc no-bot-pad"
                    }, ["en" == t.lang ? o("p", [o("strong", [t._v("Note: Deleting your cookies will remove all your current game progress. Read our "), o("a", {
                        on: {
                            click: t.openCookiesPolicy
                        }
                    }, [t._v("Cookie Policy")]), t._v("  here to learn more about our use of cookies, your choices, and how to change your browser settings.")])]) : t._e(), t._v(" "), "fr" == t.lang ? o("p", [o("strong", [t._v("Remarque : la suppression des cookies effacera votre progression actuelle. Consultez ici notre "), o("a", {
                        on: {
                            click: t.openCookiesPolicy
                        }
                    }, [t._v("politique relative aux cookies")]), t._v(" pour en savoir plus sur l'utilisation des cookies, vos options, et la manière de changer les paramètres de votre navigateur.")])]) : t._e(), t._v(" "), "de" == t.lang ? o("p", [o("strong", [t._v("Hinweis: Das Entfernen der Cookies löscht Ihren gesamten derzeitigen Spielfortschritt. Bitte lesen Sie hier unsere "), o("a", {
                        on: {
                            click: t.openCookiesPolicy
                        }
                    }, [t._v("Cookie-Richtlinie")]), t._v(", um mehr über unsere Verwendung von Cookies, Ihre Optionen und die Änderung Ihrer Browsereinstellungen zu erfahren.")])]) : t._e(), t._v(" "), "it" == t.lang ? o("p", [o("strong", [t._v("Nota: la cancellazione dei cookie comporterà l'eliminazione di tutti i tuoi attuali progressi di gioco. Leggi "), o("a", {
                        on: {
                            click: t.openCookiesPolicy
                        }
                    }, [t._v("l'Informativa sui cookie")]), t._v(" qui per ulteriori informazioni su come utilizziamo i cookie, sulle opzioni a tua disposizione e su come modificare le impostazioni del tuo browser.")])]) : t._e(), t._v(" "), "es" == t.lang ? o("p", [o("strong", [t._v("Importante: Si borras las cookies, se perderá tu progreso en el juego. Consulta aquí nuestra "), o("a", {
                        on: {
                            click: t.openCookiesPolicy
                        }
                    }, [t._v("política de cookies")]), t._v(" para enterarte de cómo usamos las cookies, tus opciones y cómo modificar los ajustes de tu navegador.")])]) : t._e(), t._v(" "), "latam" == t.lang ? o("p", [o("strong", [t._v("Aviso: Si borras las cookies, se perderá tu progreso en el juego. Lee nuestra "), o("a", {
                        on: {
                            click: t.openCookiesPolicy
                        }
                    }, [t._v("Política de cookies")]), t._v(" aquí para obtener más información sobre cómo las utilizamos, tus opciones y cómo modificar la configuración de tu navegador.")])]) : t._e(), t._v(" "), "br" == t.lang ? o("p", [o("strong", [t._v("Nota: deletar seus cookies removerá todo o seu progresso de jogo atual. Leia nossa "), o("a", {
                        on: {
                            click: t.openCookiesPolicy
                        }
                    }, [t._v("Política de Uso de Cookies")]), t._v(" aqui para mais informações sobre nosso uso de cookies, suas opções e como alterar as configurações do seu navegador.")])]) : t._e(), t._v(" "), "en" == t.lang ? o("p", [t._v("\n\t\t\t\t\t\t\t\tYour privacy is important to us. For more information about the data we collect and how we use this data, please read our "), o("a", {
                        on: {
                            click: t.openPrivacyPolicy
                        }
                    }, [t._v("Privacy Policy")]), t._v(".\n\t\t\t\t\t\t\t")]) : t._e(), t._v(" "), "fr" == t.lang ? o("p", [t._v("\n\t\t\t\t\t\t\t\tVotre confidentialité est essentielle pour nous. Veuillez consulter notre "), o("a", {
                        on: {
                            click: t.openPrivacyPolicy
                        }
                    }, [t._v("politique de confidentialité")]), t._v(" pour plus d'informations sur les données que nous collectons et la façon dont elles sont utilisées.\n\t\t\t\t\t\t\t")]) : t._e(), t._v(" "), "de" == t.lang ? o("p", [t._v("\n\t\t\t\t\t\t\t\tDer Schutz Ihrer Daten ist uns wichtig. Für mehr Informationen zu den von uns gesammelten Daten und wie wir diese verwenden, lesen Sie bitte unsere "), o("a", {
                        on: {
                            click: t.openPrivacyPolicy
                        }
                    }, [t._v("Datenschutzrichtlinie")]), t._v(".\n\t\t\t\t\t\t\t")]) : t._e(), t._v(" "), "it" == t.lang ? o("p", [t._v("\n\t\t\t\t\t\t\t\tRispettiamo la privacy dei nostri utenti. Per ulteriori informazioni sui dati che raccogliamo e sul modo in cui vengono utilizzati, leggi la nostra "), o("a", {
                        on: {
                            click: t.openPrivacyPolicy
                        }
                    }, [t._v("Informativa sulla privacy")]), t._v(".\n\t\t\t\t\t\t\t")]) : t._e(), t._v(" "), "es" == t.lang ? o("p", [t._v("\n\t\t\t\t\t\t\t\tTu privacidad nos importa mucho. Si quieres más detalles sobre qué datos recopilamos y cómo los utilizamos, puedes leer nuestro "), o("a", {
                        on: {
                            click: t.openPrivacyPolicy
                        }
                    }, [t._v("aviso de privacidad")]), t._v(".\n\t\t\t\t\t\t\t")]) : t._e(), t._v(" "), "latam" == t.lang ? o("p", [t._v("\n\t\t\t\t\t\t\t\tTu privacidad es importante para nosotros. Para obtener más información sobre los datos que recopilamos y cómo los utilizamos, lee nuestra  "), o("a", {
                        on: {
                            click: t.openPrivacyPolicy
                        }
                    }, [t._v("Política de privacidad")]), t._v(".\n\t\t\t\t\t\t\t")]) : t._e(), t._v(" "), "br" == t.lang ? o("p", [t._v("\n\t\t\t\t\t\t\t\tSua privacidade é importante para nós. Para mais informações sobre os dados que coletamos e como utilizamos tais dados, leia nossa "), o("a", {
                        on: {
                            click: t.openPrivacyPolicy
                        }
                    }, [t._v("Política de Privacidade")]), t._v(".\n\t\t\t\t\t\t\t")]) : t._e()]), t._v(" "), o("div", {
                        staticClass: "tick-bar"
                    }, [o("div", {
                        staticClass: "tick"
                    }, [o("label", [o("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.termsAccepted,
                            expression: "termsAccepted"
                        }],
                        attrs: {
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(t.termsAccepted) ? t._i(t.termsAccepted, null) > -1 : t.termsAccepted
                        },
                        on: {
                            change: function(e) {
                                var o = t.termsAccepted,
                                    n = e.target,
                                    c = !!n.checked;
                                if (Array.isArray(o)) {
                                    var r = t._i(o, null);
                                    n.checked ? r < 0 && (t.termsAccepted = o.concat([null])) : r > -1 && (t.termsAccepted = o.slice(0, r).concat(o.slice(r + 1)))
                                } else t.termsAccepted = c
                            }
                        }
                    }), t._v(" "), o("div", {
                        staticClass: "checkmark"
                    })])]), t._v(" "), "en" == t.lang ? o("div", {
                        staticClass: "text"
                    }, [t._v("\n\t\t\t\t\t\t\t\tI agree to the Pokémon: Kids Winter Fest "), o("a", {
                        on: {
                            click: t.openTerms
                        }
                    }, [t._v("Terms of Use")]), t._v(" and "), o("a", {
                        on: {
                            click: t.openPrivacyPolicy
                        }
                    }, [t._v("Privacy Policy")])]) : t._e(), t._v(" "), "fr" == t.lang ? o("div", {
                        staticClass: "text"
                    }, [t._v("\n\t\t\t\t\t\t\t\tJ'accepte les "), o("a", {
                        on: {
                            click: t.openTerms
                        }
                    }, [t._v("conditions d'utilisation")]), t._v(" et la "), o("a", {
                        on: {
                            click: t.openPrivacyPolicy
                        }
                    }, [t._v("politique de confidentialité")]), t._v(" de l'évènement « Pokémon Kids : Festival hivernal ».\n\t\t\t\t\t\t\t")]) : t._e(), t._v(" "), "de" == t.lang ? o("div", {
                        staticClass: "text"
                    }, [t._v("\n\t\t\t\t\t\t\t\tIch stimme den "), o("a", {
                        on: {
                            click: t.openTerms
                        }
                    }, [t._v("Nutzungsbedingungen")]), t._v(" und der "), o("a", {
                        on: {
                            click: t.openPrivacyPolicy
                        }
                    }, [t._v("Datenschutzrichtlinie")]), t._v(" von Pokémon Kids: Winterfest zu.\n\t\t\t\t\t\t\t")]) : t._e(), t._v(" "), "it" == t.lang ? o("div", {
                        staticClass: "text"
                    }, [t._v("\n\t\t\t\t\t\t\t\tAccetto i "), o("a", {
                        on: {
                            click: t.openTerms
                        }
                    }, [t._v("Termini di utilizzo")]), t._v(" e l'"), o("a", {
                        on: {
                            click: t.openPrivacyPolicy
                        }
                    }, [t._v("Informativa sulla privacy")]), t._v(" di Pokémon Kids: Festa d'inverno\n\t\t\t\t\t\t\t")]) : t._e(), t._v(" "), "es" == t.lang ? o("div", {
                        staticClass: "text"
                    }, [t._v("\n\t\t\t\t\t\t\t\tAceptar las "), o("a", {
                        on: {
                            click: t.openTerms
                        }
                    }, [t._v("condiciones de uso")]), t._v(" y la "), o("a", {
                        on: {
                            click: t.openPrivacyPolicy
                        }
                    }, [t._v("política de privacidad")]), t._v(" de Pokémon Kids: Festival Invernal\n\t\t\t\t\t\t\t")]) : t._e(), t._v(" "), "latam" == t.lang ? o("div", {
                        staticClass: "text"
                    }, [t._v("\n\t\t\t\t\t\t\t\tAceptar las "), o("a", {
                        on: {
                            click: t.openTerms
                        }
                    }, [t._v("Condiciones de uso")]), t._v(" y el "), o("a", {
                        on: {
                            click: t.openPrivacyPolicy
                        }
                    }, [t._v("Aviso de privacidad")]), t._v(" de Pokémon Kids: Festival de Invierno.\n\t\t\t\t\t\t\t")]) : t._e(), t._v(" "), "br" == t.lang ? o("div", {
                        staticClass: "text"
                    }, [t._v("\n\t\t\t\t\t\t\t\tEu concordo com os "), o("a", {
                        on: {
                            click: t.openTerms
                        }
                    }, [t._v("Termos de Uso")]), t._v(" e "), o("a", {
                        on: {
                            click: t.openPrivacyPolicy
                        }
                    }, [t._v("Política de Privacidade")]), t._v(" do Pokémon Kids: Festival de Inverno\n\t\t\t\t\t\t\t")]) : t._e()]), t._v(" "), o("div", {
                        staticClass: "step-cookies-button"
                    }, [o("Button", {
                        attrs: {
                            disabled: !t.termsAccepted
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.acceptTerms(e)
                            }
                        }
                    }, [t._v(t._s(t.t("misc", "Continue")))])], 1)]), t._v(" "), o("div", {
                        staticClass: "a-step no-cookies",
                        class: {
                            active: 1 == t.stepNoCookies
                        }
                    }, [t._m(3), t._v(" "), o("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.t("onboarding", "CookiesNotAllowed")))]), t._v(" "), o("div", {
                        staticClass: "desc no-bot-pad"
                    }, [o("p", [t._v("\n\t\t\t\t\t\t\t\t" + t._s(t.t("onboarding", "NoCookiesPara1")) + "\n\t\t\t\t\t\t\t")]), t._v(" "), o("p", [t._v("\n\t\t\t\t\t\t\t\t" + t._s(t.t("onboarding", "NoCookiesPara2")) + "\n\t\t\t\t\t\t\t")])]), t._v(" "), o("div", {
                        staticClass: "step-no-cookies-buttons"
                    }, [o("Button", {
                        attrs: {
                            mediumpadding: !0
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.backToTerms(e)
                            }
                        }
                    }, [t._v(t._s(t.t("misc", "Back")))]), t._v(" "), o("Button", {
                        attrs: {
                            mediumpadding: !0
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.enterNoCookieMode(e)
                            }
                        }
                    }, [t._v(t._s(t.t("misc", "Continue")))])], 1)]), t._v(" "), o("div", {
                        staticClass: "a-step step1",
                        class: {
                            active: 1 == t.step1Active
                        }
                    }, [o("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.t("onboarding", "TitleEnterNickname")))]), t._v(" "), o("div", {
                        staticClass: "desc",
                        domProps: {
                            innerHTML: t._s(t.t("onboarding", "DescEnterNickname"))
                        }
                    }), t._v(" "), o("form", {
                        on: {
                            submit: function(e) {
                                return e.preventDefault(), t.submitNickname(e)
                            }
                        }
                    }, [o("div", {
                        staticClass: "text-field"
                    }, [o("InputText", {
                        attrs: {
                            placeholder: t.t("onboarding", "PlaceholderEnterNickname"),
                            error: t.nicknameError,
                            disable: t.disableNameInput
                        },
                        model: {
                            value: t.nickname,
                            callback: function(e) {
                                t.nickname = e
                            },
                            expression: "nickname"
                        }
                    })], 1), t._v(" "), o("div", {
                        staticClass: "step1-button"
                    }, [o("Button", {
                        attrs: {
                            disabled: t.step1Disabled
                        }
                    }, [t._v(t._s(t.t("misc", "Submit")))])], 1)])]), t._v(" "), o("div", {
                        staticClass: "a-step step2",
                        class: {
                            active: 1 == t.step2Active
                        }
                    }, [o("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.t("onboarding", "TitleSelectCompanion")))]), t._v(" "), o("div", {
                        staticClass: "desc",
                        domProps: {
                            innerHTML: t._s(t.t("onboarding", "DescSelectCompanion"))
                        }
                    }), t._v(" "), o("div", {
                        staticClass: "companion-selection"
                    }, [o("Flickity", {
                        ref: "companion-slider",
                        attrs: {
                            options: t.flickityOptions
                        }
                    }, t._l(t.companions, (function(t, i) {
                        return o("div", {
                            key: i,
                            staticClass: "pokemon-selection"
                        }, [o("img", {
                            attrs: {
                                src: "/pokemon/companions/companion_" + t.name + ".png"
                            }
                        })])
                    })), 0), t._v(" "), o("div", {
                        staticClass: "button-left caro-button",
                        on: {
                            click: t.previous
                        }
                    }), t._v(" "), o("div", {
                        staticClass: "button-right caro-button",
                        on: {
                            click: t.next
                        }
                    })], 1), t._v(" "), o("div", {
                        staticClass: "step2-button"
                    }, [o("Button", {
                        nativeOn: {
                            click: function(e) {
                                return t.selectPokemon(e)
                            }
                        }
                    }, [t._v(t._s(t.t("misc", "Select")))])], 1)]), t._v(" "), o("div", {
                        staticClass: "a-step step3",
                        class: {
                            active: 1 == t.step3Active
                        }
                    }, [o("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.t("onboarding", "TitleYourTeam")))]), t._v(" "), t.step3Complete ? t._e() : o("div", {
                        staticClass: "desc"
                    }, [t._v(t._s(t.t("onboarding", "Desc1YourTeam")))]), t._v(" "), t.step3Complete ? o("div", {
                        staticClass: "desc"
                    }, [t.userTeam ? o("span", [t._v(t._s(t.t("onboarding", "Desc2YourTeam" + (t.userTeam.charAt(0).toUpperCase() + t.userTeam.slice(1)))))]) : t._e()]) : t._e(), t._v(" "), o("div", {
                        staticClass: "trainer-team",
                        class: {
                            active: 1 == t.step3Complete
                        }
                    }, [t.userTeam ? o("img", {
                        attrs: {
                            src: "/flags/flag-" + t.userTeam + ".png"
                        }
                    }) : t._e()]), t._v(" "), o("div", {
                        staticClass: "step3-button"
                    }, [o("Button", {
                        attrs: {
                            disabled: t.step3Disabled
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.finalStep(e)
                            }
                        }
                    }, [t._v(t._s(t.t("misc", "Continue")))])], 1)]), t._v(" "), o("div", {
                        staticClass: "a-step step4",
                        class: {
                            active: 1 == t.step4Active
                        }
                    }, [o("div", {
                        staticClass: "big-title"
                    }, [t._v(t._s(t.t("misc", "Welcome")) + ","), o("br"), t._v(t._s(t.nickname))]), t._v(" "), t.localSelectedCompanion ? o("div", {
                        staticClass: "user-avatar"
                    }, [o("img", {
                        attrs: {
                            src: "/pokemon/companions/companion_" + t.localSelectedCompanion.name + "2.png"
                        }
                    })]) : t._e(), t._v(" "), o("div", {
                        staticClass: "smaller-trainer-team"
                    }, [t.userTeam ? o("img", {
                        attrs: {
                            src: "/flags/flag-" + t.userTeam + ".png"
                        }
                    }) : t._e()]), t._v(" "), o("div", {
                        staticClass: "step4-button"
                    }, [o("Button", {
                        nativeOn: {
                            click: function(e) {
                                return t.letsGo(e)
                            }
                        }
                    }, [t._v(t._s(t.t("misc", "LetsGo")))])], 1)])])])]), t._v(" "), t.showTerms ? o("Article", {
                        attrs: {
                            content: "terms"
                        },
                        on: {
                            close: t.closeArticle
                        }
                    }) : t._e(), t._v(" "), t.showCookiesPolicy ? o("Article", {
                        attrs: {
                            content: "cookies"
                        },
                        on: {
                            close: t.closeArticle
                        }
                    }) : t._e(), t._v(" "), t.showPrivacyPolicy ? o("Article", {
                        attrs: {
                            content: "privacy"
                        },
                        on: {
                            close: t.closeArticle
                        }
                    }) : t._e()], 1)
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "inner"
                    }, [e("div", {
                        staticClass: "num"
                    }, [this._v("1")]), this._v(" "), e("div", {
                        staticClass: "tick"
                    }, [e("img", {
                        attrs: {
                            src: "/icons/icon-tick1.svg"
                        }
                    })])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "inner"
                    }, [e("div", {
                        staticClass: "num"
                    }, [this._v("2")]), this._v(" "), e("div", {
                        staticClass: "tick"
                    }, [e("img", {
                        attrs: {
                            src: "/icons/icon-tick1.svg"
                        }
                    })])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "inner"
                    }, [e("div", {
                        staticClass: "num"
                    }, [this._v("3")]), this._v(" "), e("div", {
                        staticClass: "tick"
                    }, [e("img", {
                        attrs: {
                            src: "/icons/icon-tick1.svg"
                        }
                    })])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "alert-badge"
                    }, [e("img", {
                        attrs: {
                            src: "/icons/alert.png"
                        }
                    })])
                }], !1, null, "6e8cf984", null);
            e.default = component.exports;
            installComponents(component, {
                Button: o(111).default,
                InputText: o(566).default,
                Article: o(577).default
            })
        },
        693: function(t, e, o) {
            "use strict";
            var n = o(630);
            o.n(n).a
        },
        694: function(t, e, o) {
            "use strict";
            var n = o(631);
            o.n(n).a
        },
        699: function(t, e, o) {
            "use strict";
            o.r(e);
            o(58), o(40), o(37), o(23), o(43);
            var n = o(14),
                c = o(577),
                r = o(111),
                l = o(646),
                v = o(585),
                d = o(18);

            function m(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(object);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, o)
                }
                return e
            }
            var _ = {
                    transition: "overlay",
                    components: {
                        Article: c.default,
                        Button: r.default,
                        Onboarding: l.default,
                        SelectLang: v.default
                    },
                    data: function() {
                        return {
                            activateLangSelect: !0,
                            activateOnboarding: !1,
                            startAnimation: !1,
                            showTerms: !1,
                            showCookiesPolicy: !1,
                            showPrivacyPolicy: !1
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.$store.commit("setActiveMusic", "main-menu"), setTimeout((function() {
                            t.startAnimation = !0
                        }), 400)
                    },
                    computed: function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? m(Object(source), !0).forEach((function(e) {
                                Object(n.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : m(Object(source)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({}, Object(d.b)({
                        lang: "lang",
                        acceptsCookies: "acceptsCookies"
                    })),
                    methods: {
                        startOnboarding: function() {
                            this.startAnimation = !1, this.activateOnboarding = !0
                        },
                        openTerms: function() {
                            this.showTerms = !0
                        },
                        openCookiesPolicy: function() {
                            this.showCookiesPolicy = !0
                        },
                        openPrivacyPolicy: function() {
                            this.showPrivacyPolicy = !0
                        },
                        closeArticle: function() {
                            this.showTerms = !1, this.showCookiesPolicy = !1, this.showPrivacyPolicy = !1
                        }
                    },
                    watch: {
                        acceptsCookies: function(t) {
                            t && this.trackPageView("Onboarding")
                        }
                    }
                },
                k = (o(694), o(36)),
                component = Object(k.a)(_, (function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "intro"
                    }, [o("div", {
                        staticClass: "white-block",
                        class: {
                            active: 1 == t.startAnimation
                        }
                    }, [o("div", {
                        staticClass: "white-block-inner"
                    })]), t._v(" "), o("div", {
                        staticClass: "logo-container",
                        class: {
                            active: 1 == t.startAnimation
                        }
                    }, [o("img", {
                        attrs: {
                            src: "/icons/logo-pokemon-kids-winterfest-" + t.lang + ".png"
                        }
                    })]), t._v(" "), o("div", {
                        staticClass: "text-container",
                        class: {
                            active: 1 == t.startAnimation
                        }
                    }, [o("div", {
                        staticClass: "lang-button"
                    }, [o("Button", {
                        attrs: {
                            disabled: !1,
                            color: "blue",
                            smaller: !0
                        },
                        nativeOn: {
                            click: function(e) {
                                t.activateLangSelect = !t.activateLangSelect
                            }
                        }
                    }, [o("img", {
                        attrs: {
                            src: "/icons/icon-lang.png"
                        }
                    })])], 1), t._v(" "), o("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.t("onboarding", "TitleIntro")))]), t._v(" "), o("div", {
                        staticClass: "desc"
                    }, [t._v(t._s(t.t("onboarding", "DescIntro")))]), t._v(" "), o("Button", {
                        attrs: {
                            disabled: !1
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.startOnboarding(e)
                            }
                        }
                    }, [t._v(t._s(t.t("onboarding", "ButtonStart")))])], 1), t._v(" "), o("div", {
                        staticClass: "info-bar",
                        class: {
                            active: 1 == t.startAnimation
                        }
                    }, [o("p", [t._v("\n        " + t._s(t.t("misc", "Copyright")) + "\n      ")]), t._v(" "), o("ul", [o("li", [o("a", {
                        on: {
                            click: t.openPrivacyPolicy
                        }
                    }, [t._v(t._s(t.t("onboarding", "PrivacyPolicy")))])]), t._v(" "), o("li", [o("a", {
                        on: {
                            click: t.openCookiesPolicy
                        }
                    }, [t._v(t._s(t.t("onboarding", "CookiePolicy")))])]), t._v(" "), o("li", [o("a", {
                        on: {
                            click: t.openTerms
                        }
                    }, [t._v(t._s(t.t("onboarding", "TermsOfUse")))])])])]), t._v(" "), o("Onboarding", {
                        attrs: {
                            active: t.activateOnboarding
                        }
                    }), t._v(" "), t.showTerms ? o("Article", {
                        attrs: {
                            content: "terms"
                        },
                        on: {
                            close: t.closeArticle
                        }
                    }) : t._e(), t._v(" "), t.showCookiesPolicy ? o("Article", {
                        attrs: {
                            content: "cookies"
                        },
                        on: {
                            close: t.closeArticle
                        }
                    }) : t._e(), t._v(" "), t.showPrivacyPolicy ? o("Article", {
                        attrs: {
                            content: "privacy"
                        },
                        on: {
                            close: t.closeArticle
                        }
                    }) : t._e(), t._v(" "), t.activateLangSelect ? o("SelectLang", {
                        on: {
                            close: function(e) {
                                t.activateLangSelect = !1
                            }
                        }
                    }) : t._e()], 1)
                }), [], !1, null, "74084936", null);
            e.default = component.exports;
            installComponents(component, {
                Button: o(111).default,
                Onboarding: o(646).default,
                Article: o(577).default,
                SelectLang: o(585).default
            })
        }
    }
]);