(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        566: function(e, o, n) {
            "use strict";
            n.r(o);
            var t = {
                    props: ["value", "placeholder", "error", "disable"]
                },
                r = (n(610), n(36)),
                component = Object(r.a)(t, (function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("div", {
                        staticClass: "input-text"
                    }, [n("input", {
                        class: {
                            error: e.error
                        },
                        attrs: {
                            type: "text",
                            placeholder: e.placeholder,
                            disabled: e.disable,
                            maxlength: "8"
                        },
                        domProps: {
                            value: e.value
                        },
                        on: {
                            input: function(o) {
                                return e.$emit("input", o.target.value)
                            }
                        }
                    }), e._v(" "), e.error ? n("div", {
                        staticClass: "form-error"
                    }, [e._v("\n\t\t" + e._s(e.error) + "\n\t")]) : e._e()])
                }), [], !1, null, "221a7728", null);
            o.default = component.exports
        },
        574: function(e, o, n) {},
        577: function(e, o, n) {
            "use strict";
            n.r(o);
            n(58), n(40), n(37), n(23), n(43);
            var t = n(14),
                r = n(36),
                l = Object(r.a)({}, (function() {
                    var e = this.$createElement;
                    this._self._c;
                    return this._m(0)
                }), [function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("div", [n("p", [n("b", [e._v("O que são cookies?")])]), e._v(" "), n("p", [e._v("A Pokémon Company International usa cookies neste site para ajudar a criar essa experiência do usuário. Cookies são pequenos arquivos de texto que são armazenados no computador ou outro dispositivo por sites que você visita. Nosso site usa cookies para torná-lo mais fácil de usar, para auxiliar o fornecimento de informações e funcionalidades para você, assim como para nos fornecer informações sobre como o site é usado para que possamos ter certeza de que ele está o mais atualizado, adequado e sem erros possível. A seguir, você encontrará informações sobre como ativar ou desativar esses cookies. Atenção: a restrição ou o bloqueio de cookies do nosso site pode afetar a funcionalidade ou o desempenho do site ou impedir que você use alguns serviços fornecidos através do site.")]), e._v(" "), n("p", [e._v("Observe também que terceiros (incluindo, por exemplo, redes de publicidade e provedores de serviços externos como serviços de análise de site) também podem usar cookies, sobre os quais nós não temos controle, embora possamos receber serviços desses terceiros (incluindo, por exemplo, estatísticas do site). Esses cookies são provavelmente cookies de desempenho ou cookies de segmentação (conforme descrito abaixo).")]), e._v(" "), n("p", [n("b", [e._v("Cookies estritamente necessários")])]), e._v(" "), n("p", [e._v("Esses cookies são essenciais para o uso de recursos e serviços do site. Se o usuário bloquear esses cookies por meio do navegador, não podemos garantir o desempenho do site. Não é necessário exigir consentimento para esses cookies. Exemplos de como usamos esses cookies:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Lembrar que o usuário não está usando o site pela primeira vez")])])]), e._v(" "), n("p", [n("b", [e._v("Cookies funcionais")])]), e._v(" "), n("p", [e._v("Esses cookies nos permitem lembrar e armazenar o progresso do usuário, como seu apelido, progresso do jogo, emblemas coletados, etc. Eles podem ser ativados/desativados a qualquer momento pelo usuário, entretanto sua desativação significa que ao retornar ao site ou aplicativo da web todo o progresso do usuário será perdido. Exemplos de como usamos esses cookies:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Lembrar o progresso feito ao longo dos jogos e o que o usuário coletou durante a visita")])]), e._v(" "), n("li", [n("span", [e._v("Lembrar o apelido do usuário, equipe e emblemas coletados")])]), e._v(" "), n("li", [n("span", [e._v("Lembrar o idioma preferido dos usuários")])])]), e._v(" "), n("p", [n("b", [e._v("Desempenho e Estatísticas")])]), e._v(" "), n("p", [e._v("Esses cookies nos ajudam a entender como as pessoas usam o site. Eles coletam informações como quais páginas os visitantes de nosso site acessam com mais frequência, quais recursos eles usam e quais sites as pessoas visitaram antes de visitarem o nosso. Usamos essas informações para melhorar nosso site e fornecer uma melhor experiência ao usuário. Eles podem ser ativados/desativados a qualquer momento pelo usuário. Exemplos de como usamos esses cookies:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Acompanhar e fornecer estatísticas sobre como o site é usado e quanto tempo é gasto.")])]), e._v(" "), n("li", [n("span", [e._v("Ajudam-nos a melhorar o site medindo qualquer erro que possa ocorrer")])]), e._v(" "), n("li", [n("span", [e._v("Como os usuários chegaram ao nosso site.")])]), e._v(" "), n("li", [n("span", [e._v("Google Analytics (cookie de terceiros)")])])]), e._v(" "), n("p", [n("b", [e._v("Como gerencio meus cookies?")])]), e._v(" "), n("p", [e._v("Diferentes navegadores da web podem usar métodos diferentes para desativar e ativar cookies. Siga as instruções abaixo, diretamente dos fabricantes do navegador, para definir suas configurações. Observe que você pode alterar essas configurações a qualquer momento que desejar.")]), e._v(" "), n("p", [n("span", [n("a", {
                        attrs: {
                            href: "https://support.microsoft.com/help/17442/windows-internet-explorer-delete-manage-cookies",
                            target: "blank"
                        }
                    }, [e._v("Microsoft Internet Explorer (IE)")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        attrs: {
                            href: "https://support.google.com/chrome/answer/95647",
                            target: "blank"
                        }
                    }, [e._v("Google Chrome")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        attrs: {
                            href: "https://support.apple.com/guide/safari/sfri11471/mac",
                            target: "blank"
                        }
                    }, [e._v("Safari")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        attrs: {
                            href: "https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop",
                            target: "blank"
                        }
                    }, [e._v("Firefox")])])]), e._v(" "), n("p", [e._v("Se estiver satisfeito com as configurações de cookies do navegador, clique em aceitar os Termos e Condições e continue. Se você optar por não permitir cookies, terá permissão para usar o site em “modo visitante” limitado.")]), e._v(" "), n("p", [e._v("Os cookies criados pelo Pokémon Kids Winter Fest serão apagados automaticamente após um período de seis meses a partir da data de criação.")])])
                }], !1, null, null, null).exports,
                c = Object(r.a)({}, (function() {
                    var e = this.$createElement;
                    this._self._c;
                    return this._m(0)
                }), [function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("div", [n("p", [n("b", [e._v("Was sind Cookies?")])]), e._v(" "), n("p", [e._v("The Pokémon Company International verwendet auf dieser Website Cookies zur Gestaltung dieses Benutzererlebnisses. Cookies sind kleine Textdateien, die von Ihnen besuchte Webseiten auf Ihrem Computer oder sonstigen Gerät speichern. Unsere Webseite verwendet Cookies, um die Webseite benutzerfreundlicher zu machen, um Ihnen Informationen und Funktionen zu bieten und um uns Informationen darüber zu verschaffen, wie die Webseite genutzt wird, damit wir sicherstellen können, dass sie so aktuell, relevant und fehlerfrei wie möglich ist. Nachstehend finden Sie Informationen dazu, wie Sie diese Cookies ein- oder ausschalten können. Bitte beachten Sie, dass das Beschränken oder Blockieren von Cookies auf unserer Webseite die Funktionalität oder die Performance der Webseite beeinträchtigen oder Sie daran hindern kann, bestimmte über die Website angebotene Angebote zu nutzen.")]), e._v(" "), n("p", [e._v("Bitte beachten Sie zudem, dass Dritte (wie z. B. unter anderem Werbenetzwerke und Anbieter externer Leistungen wie Webseiten-Analysedienste) ebenfalls Cookies verwenden können, über die wir keine Kontrolle haben, obwohl wir eventuell Leistungen von diesen Dritten in Anspruch nehmen (wie z. B. Webseiten-Analyseleistungen). Diese Cookies sind wahrscheinlich Performance-Cookies oder Targeting-Cookies (wie nachstehend beschrieben).")]), e._v(" "), n("p", [n("b", [e._v("Technisch notwendige Cookies")])]), e._v(" "), n("p", [e._v("Diese Cookies sind für die Nutzung von Funktionen und Angeboten auf der Webseite unverzichtbar. Wenn ein Benutzer diese Cookies über den Browser blockiert, können wir nicht garantieren, wie sich die Webseite verhalten wird. Für diese Cookies muss keine Zustimmung eingeholt werden. Wir verwenden diese Cookies unter anderem zu folgendem Zweck:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Um zu speichern, dass der Benutzer die Webseite nicht zum ersten Mal besucht")])])]), e._v(" "), n("p", [n("b", [e._v("Funktionelle Cookies")])]), e._v(" "), n("p", [e._v("Mithilfe dieser Cookies können wir den Fortschritt des Benutzers sowie seinen Spitznamen, gesammelte Orden usw. speichern. Diese können vom Benutzer jederzeit aktiviert/deaktiviert werden; wenn sie deaktiviert werden, verliert der Benutzer bei der Rückkehr zur Webseite oder Web-App jedoch seinen gesamten Fortschritt. Wir verwenden diese Cookies unter anderem zu folgendem Zweck:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Um den Spielfortschritt und die von einem Benutzer während des Besuchs gesammelten Gegenstände zu speichern")])]), e._v(" "), n("li", [n("span", [e._v("Um den Spitznamen, das Team und die gesammelten Orden des Benutzers zu speichern")])]), e._v(" "), n("li", [n("span", [e._v("um die bevorzugte Sprache des Benutzers zu speichern")])])]), e._v(" "), n("p", [n("b", [e._v("Performance- und Analyse-Cookies")])]), e._v(" "), n("p", [e._v("Mithilfe dieser Cookies können wir ein Verständnis dafür entwickeln, wie die Webseite genutzt wird. Sie erfassen Informationen wie zum Beispiel welche Seiten unserer Webseite am häufigsten besucht werden, welche Funktionen genutzt werden und welche Webseiten vor dem Besuch unserer Webseite besucht wurden. Wir nutzen diese Informationen, um unsere Webseite zu verbessern und ein besseres Benutzererlebnis zu bieten. Diese Cookies können vom Benutzer jederzeit aktiviert/deaktiviert werden. Wir verwenden diese Cookies unter anderem zu folgendem Zweck:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Zur Beobachtung und Erstellung von Statistiken in Bezug auf die Nutzung der Webseite und die Besuchsdauer")])]), e._v(" "), n("li", [n("span", [e._v("Zur Verbesserung der Webseite durch Erfassung eventuell auftretender Fehler")])]), e._v(" "), n("li", [n("span", [e._v("Um zu verfolgen, wie Benutzer zu unserer Webseite gekommen sind")])]), e._v(" "), n("li", [n("span", [e._v("Google Analytics (Drittanbieter-Cookie)")])])]), e._v(" "), n("p", [n("b", [e._v("Wie kann ich meine Cookies verwalten?")])]), e._v(" "), n("p", [e._v("Verschiedene Web-Browser verwenden eventuell unterschiedliche Methoden zum Aktivieren und Deaktivieren von Cookies. Bitte befolgen Sie die nachstehenden Anweisungen der Browser-Hersteller, um Ihre Browser-Einstellungen anzupassen. Bitte beachten Sie, dass Sie diese Einstellungen jederzeit ändern können.")]), e._v(" "), n("p", [n("span", [n("a", {
                        attrs: {
                            href: "https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies",
                            target: "blank"
                        }
                    }, [e._v("Microsoft Internet Explorer (IE)")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        attrs: {
                            href: "https://support.google.com/chrome/answer/95647?hl=de",
                            target: "blank"
                        }
                    }, [e._v("Google Chrome")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        attrs: {
                            href: "https://support.apple.com/de-de/guide/safari/sfri11471/mac",
                            target: "blank"
                        }
                    }, [e._v("Safari")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        attrs: {
                            href: "https://support.mozilla.org/de/kb/protection-renforcee-contre-pistage-firefox-ordinateur?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US",
                            target: "blank"
                        }
                    }, [e._v("Firefox")])])]), e._v(" "), n("p", [e._v("Wenn Sie mit den Cookie-Einstellungen in Ihrem Browser zufrieden sind, klicken Sie bitte auf „Geschäftsbedingungen akzeptieren“ um fortzufahren. Wenn Sie keine Cookies zulassen, können Sie die Webseite nur in einem eingeschränkten „Gäste-Modus“ nutzen.")]), e._v(" "), n("p", [e._v("Von Pokémon Kids Winter Fest erstellte Cookies werden nach Ablauf von sechs Monaten ab ihrer ursprünglichen Erstellung automatisch gelöscht.")])])
                }], !1, null, null, null).exports,
                d = Object(r.a)({}, (function() {
                    var e = this.$createElement;
                    this._self._c;
                    return this._m(0)
                }), [function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("div", [n("p", [n("b", [e._v("What are cookies?")])]), e._v(" "), n("p", [e._v("The Pokémon Company International uses cookies on this website to help create this user experience. Cookies are small text files that are stored on your computer or other device by websites that you visit. Our website uses cookies in order to make the website easier to use, to support the provision of information and functionality to you, as well as to provide us with information about how the website is used so that we can make sure it is as up to date, relevant and error free as we can. Below you can find information on how you can turn these cookies on or off. Please note that restricting or blocking cookies on our website may impact the functionality or performance of the website or prevent you from using certain services provided through the website.")]), e._v(" "), n("p", [e._v("Also please note that third parties (including, for example, advertising networks and providers of external services like website analysis services) may also use cookies, over which we have no control, although we may receive services from these third parties (including, for example, website analytics). These cookies are likely to be performance cookies or targeting cookies (as described below).")]), e._v(" "), n("p", [n("b", [e._v("Strictly Necessary Cookies")])]), e._v(" "), n("p", [e._v("These cookies are essential for the use of features and services on the website. If a user blocks these cookies via the browser then we cannot guarantee how the website will perform. It is not necessary to require consent for these cookies. Examples of how we use these cookies include:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Remembering the user is not a first-time user to the website")])])]), e._v(" "), n("p", [n("b", [e._v("Functional Cookies")])]), e._v(" "), n("p", [e._v("These cookies allow us to remember and store the user’s progress, such as the user’s nickname, game progress, badges collected, et cetera. These can be enabled/disabled at any time by the user, however disabling these will mean that returning to the website or web app will lose all user progress. Examples of how we use these cookies include:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Remembering the progress made throughout the games and what a user has collected during this visit")])]), e._v(" "), n("li", [n("span", [e._v("Remembering the user’s nickname, team, and badges collected")])]), e._v(" "), n("li", [n("span", [e._v("Remembering the users preferred language")])])]), e._v(" "), n("p", [n("b", [e._v("Performance & Analytics")])]), e._v(" "), n("p", [e._v("These cookies help us understand how people use the website. They collect information such as which pages on our website visitors go to most often, which features they use, and which websites people have visited before they visit ours. We use this information to improve our website and provide a better user experience. These can be enabled/disabled at any time by the user. Examples of how we use these cookies include:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Monitoring and providing statistics on how the website is used and how much time is spent.")])]), e._v(" "), n("li", [n("span", [e._v("Help us improve the website by measuring any errors that may occur")])]), e._v(" "), n("li", [n("span", [e._v("How users have reached our website.")])]), e._v(" "), n("li", [n("span", [e._v("Google Analytics (Third Party Cookie)")])])]), e._v(" "), n("p", [n("b", [e._v("How do I manage my cookies?")])]), e._v(" "), n("p", [e._v("Different web browsers may use different methods for disabling and enabling cookies. Please follow the instructions below, from the web browser manufacturers directly, to configure your browser settings. Please note you can change these settings at any time you wish.")]), e._v(" "), n("p", [n("span", [n("a", {
                        attrs: {
                            href: "https://support.microsoft.com/help/17442/windows-internet-explorer-delete-manage-cookies",
                            target: "blank"
                        }
                    }, [e._v("Microsoft Internet Explorer (IE)")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        attrs: {
                            href: "https://support.google.com/chrome/answer/95647",
                            target: "blank"
                        }
                    }, [e._v("Google Chrome")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        attrs: {
                            href: "https://support.apple.com/guide/safari/sfri11471/mac",
                            target: "blank"
                        }
                    }, [e._v("Safari")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        attrs: {
                            href: "https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop",
                            target: "blank"
                        }
                    }, [e._v("Firefox")])])]), e._v(" "), n("p", [e._v("Once you’re happy with your cookie settings within your browser, please click accept the Terms and Conditions and continue. If you choose to not allow cookies you will be allowed to use the website in a limited “Guest Mode”.")]), e._v(" "), n("p", [e._v("Cookies created by Pokémon Kids Winter Fest will be automatically deleted after a period of six months from the date it was first created.")])])
                }], !1, null, null, null).exports,
                m = Object(r.a)({}, (function() {
                    var e = this.$createElement;
                    this._self._c;
                    return this._m(0)
                }), [function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("div", [n("p", [n("b", [e._v("¿Qué son las "), n("i", [e._v("cookies")]), e._v("?")])]), e._v(" "), n("p", [e._v("Pokémon Company International utiliza "), n("i", [e._v("cookies ")]), e._v("en este sitio web para ayudar a crear esta experiencia de usuario. Las "), n("i", [e._v("cookies ")]), e._v("son pequeños archivos de texto que los sitios web que visita guardan en su ordenador o en otro dispositivo. Nuestro sitio web utiliza "), n("i", [e._v("cookies ")]), e._v("para que resulte más fácil de utilizar, apoyar el suministro de información y funciones para al usuario y facilitarnos información sobre cómo se utiliza el sitio web y asegurarnos así de que está actualizado, es pertinente y no contiene errores en la medida de lo posible. A continuación encontrará información sobre cómo puede activar o desactivar estas "), n("i", [e._v("cookies")]), e._v(". Tenga en cuenta que restringir o bloquear las "), n("i", [e._v("cookies ")]), e._v("en nuestro sitio web puede afectar a la funcionalidad o el rendimiento de este o evitar que pueda utilizar determinados servicios prestados a través de él.")]), e._v(" "), n("p", [e._v("Tenga en cuenta asimismo que otros terceros (incluidos, por ejemplo, redes publicitarias o proveedores de servicios externos como, por ejemplo, servicios de análisis de sitios web) pueden utilizar también "), n("i", [e._v("cookies")]), e._v(", sobre las cuales no tenemos control alguno, aunque es posible que recibamos servicios de dichos terceros (incluido, por ejemplo, el análisis de sitios web). Probablemente estas "), n("i", [e._v("cookies ")]), e._v("serán de rendimiento o de publicidad selectiva (tal y como se explica a continuación).")]), e._v(" "), n("p", [n("b", [n("i", [e._v("Cookies ")]), e._v("estrictamente necesarias")])]), e._v(" "), n("p", [e._v("Estas "), n("i", [e._v("cookies ")]), e._v("son esenciales para el uso de las funciones y los servicios del sitio web. Si el usuario bloquea estas "), n("i", [e._v("cookies ")]), e._v("mediante el navegador, no podemos garantizar el funcionamiento del sitio web. Para estas "), n("i", [e._v("cookies ")]), e._v("no es necesario solicitar el consentimiento. Entre los ejemplos de cómo utilizamos estas "), n("i", [e._v("cookies ")]), e._v("se incluyen:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Recordar que no es la primera vez que un usuario visita el sitio web.")])])]), e._v(" "), n("p", [n("b", [n("i", [e._v("Cookies ")]), e._v("funcionales")])]), e._v(" "), n("p", [e._v("Estas "), n("i", [e._v("cookies ")]), e._v("nos permiten recordar y guardar el progreso del usuario como, por ejemplo, el alias del usuario, el progreso en un juego, las credenciales recopiladas, etc. El usuario puede habilitarlas/deshabilitarlas en cualquier momento; sin embargo, al deshabilitarlas, el progreso del usuario se perderá cuando vuelva al sitio web o la aplicación web. Entre los ejemplos de cómo utilizamos estas "), n("i", [e._v("cookies ")]), e._v("se incluyen:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Recordar el progreso alcanzado en un juego y qué ha recopilado el usuario durante esta visita.")])]), e._v(" "), n("li", [n("span", [e._v("Recordar el alias y el equipo del usuario y las credenciales recopiladas por este.")])]), e._v(" "), n("li", [n("span", [e._v("Recordar el idioma preferido del usuario.")])])]), e._v(" "), n("p", [n("b", [e._v("Rendimiento y análisis")])]), e._v(" "), n("p", [e._v("Estas "), n("i", [e._v("cookies ")]), e._v("nos ayudan a entender cómo utilizan las personas el sitio web. Recopilan información como, por ejemplo, a qué páginas se dirigen con mayor frecuencia los visitantes del sitio web, qué funciones utilizan y qué sitios web han visitado antes del nuestro. Utilizamos esta información para mejorar nuestro sitio web y ofrecer una experiencia de usuario mejorada. El usuario las puede habilitarlas/deshabilitarlas en cualquier momento. Entre los ejemplos de cómo utilizamos estas "), n("i", [e._v("cookies ")]), e._v("se incluyen:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Supervisar y facilitar estadísticas sobre cómo se utiliza el sitio web y cuánto tiempo se pasa visitándolo.")])]), e._v(" "), n("li", [n("span", [e._v("Ayudarnos a mejorar el sitio web evaluando cualquier error que pudiera producirse.")])]), e._v(" "), n("li", [n("span", [e._v("Cómo ha llegado el usuario a nuestro sitio web.")])]), e._v(" "), n("li", [n("span", [e._v("Google Analytics ("), n("i", [e._v("cookies ")]), e._v("de terceros)")])])]), e._v(" "), n("p", [n("b", [e._v("¿Cómo puedo gestionar las "), n("i", [e._v("cookies")]), e._v("?")])]), e._v(" "), n("p", [e._v("Los distintos navegadores web pueden utilizar diferentes métodos para deshabilitar y habilitar las "), n("i", [e._v("cookies")]), e._v(". Siga las instrucciones que se indican a continuación, directamente del fabricante, para configurar los ajustes del navegador web. Tenga en cuenta que puede modificar estos ajustes cuando desee.")]), e._v(" "), n("p", [n("span", [n("a", {
                        attrs: {
                            href: "https://support.microsoft.com/help/17442/windows-internet-explorer-delete-manage-cookies",
                            target: "blank"
                        }
                    }, [e._v("Microsoft Internet Explorer (IE)")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        attrs: {
                            href: "https://support.google.com/chrome/answer/95647",
                            target: "blank"
                        }
                    }, [e._v("Google Chrome")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        attrs: {
                            href: "https://support.apple.com/guide/safari/sfri11471/mac",
                            target: "blank"
                        }
                    }, [e._v("Safari")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        attrs: {
                            href: "https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop",
                            target: "blank"
                        }
                    }, [e._v("Firefox")])])]), e._v(" "), n("p", [e._v("Cuando esté conforme con la configuración de las "), n("i", [e._v("cookies ")]), e._v("del navegador, acepte los Términos y condiciones y continúe. Si opta por no permitir las "), n("i", [e._v("cookies")]), e._v(", se le permitirá utilizar el sitio web en un «Modo invitado» limitado.")]), e._v(" "), n("p", [e._v("Las "), n("i", [e._v("cookies ")]), e._v("creadas por Pokémon Kids Winter Fest se eliminarán automáticamente después de un periodo de seis meses desde su fecha de creación original.")])])
                }], !1, null, null, null).exports,
                v = Object(r.a)({}, (function() {
                    var e = this.$createElement;
                    this._self._c;
                    return this._m(0)
                }), [function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("div", [n("p", [n("b", [e._v("Que sont les cookies ?")])]), e._v(" "), n("p", [e._v("The Pokémon Company International utilise les cookies sur son site web pour aider à proposer cette expérience utilisateur. Les cookies sont de petits fichiers de texte stockés sur votre ordinateur ou autre appareil par les sites web que vous visitez. Notre site web utilise les cookies pour faciliter son utilisation, pour mieux vous transmettre des informations et fonctionnalités, et pour nous transmettre des informations sur son utilisation afin de nous assurer qu'il est aussi à jour, pertinent et dénué d'erreurs que possible. Vous trouverez ci-dessous des informations concernant l'autorisation et l'interdiction de ces cookies. Veuillez noter que la restriction ou l'interdiction des cookies sur notre site web peut avoir des conséquences sur les fonctionnalités ou les performances dudit site web, ou vous empêcher d'utiliser certains services proposés par ce site web.")]), e._v(" "), n("p", [e._v("Veuillez aussi noter que tout tiers (y compris, par exemple, les réseaux publicitaires et les fournisseurs de services externes tels que les services d'analyse de site web) peuvent également utiliser des cookies qui n'entrent pas dans le champ de notre contrôle, même si nous bénéficions de services de la part de ces tiers (y compris, par exemple, les statistiques concernant le site web). Ces cookies sont généralement des cookies de performance ou des cookies de ciblage (tels que décrits ci-dessous).")]), e._v(" "), n("p", [n("b", [e._v("Les cookies indispensables")])]), e._v(" "), n("p", [e._v("Ces cookies sont indispensables à l'utilisation des fonctions et des services du site web. Si un utilisateur bloque ces cookies depuis son navigateur, nous ne pourrons garantir les performances du site web. Ces cookies ne nécessitent pas le consentement de l'utilisateur. Exemples de cas dans lesquels nous utilisons ces cookies :")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Se souvenir que l'utilisateur ne visite pas le site web pour la première fois")])])]), e._v(" "), n("p", [n("b", [e._v("Cookies fonctionnels")])]), e._v(" "), n("p", [e._v("Ces cookies nous permettent de mémoriser et de stocker les progrès de l'utilisateur, comme son pseudonyme, sa progression dans le jeu, les badges qu'il a collectés, etc. Ils peuvent être autorisés et refusés à tout moment par l'utilisateur, mais leur interdiction engendrera la perte des données sur la progression de l'utilisateur, sur le site web ou l'appli. Exemples de cas dans lesquels nous utilisons ces cookies :")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Se souvenir de la progression réalisée au cours des parties et de ce que l'utilisateur a collecté pendant cette visite")])]), e._v(" "), n("li", [n("span", [e._v("Se souvenir du pseudonyme, de l'équipe et des badges de l'utilisateur")])]), e._v(" "), n("li", [n("span", [e._v("Se souvenir de la langue préférée de l'utilisateur")])])]), e._v(" "), n("p", [n("b", [e._v("Performances et statistiques")])]), e._v(" "), n("p", [e._v("Ces cookies nous aident à comprendre comment les gens utilisent le site web. Ils collectent des informations telles que les pages de notre site web que les visiteurs consultent le plus, les fonctionnalités qu'ils utilisent, et les sites web que les gens ont visitées avant de venir sur le nôtre. Nous utilisons ces informations pour améliorer notre site web ou proposer une meilleure expérience utilisateur. Ils peuvent être autorisés et refusés à tout moment par l'utilisateur. Exemples de cas dans lesquels nous utilisons ces cookies :")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Suivre et fournir des statistiques sur l'utilisation du site web et sur le temps que les visiteurs y passent.")])]), e._v(" "), n("li", [n("span", [e._v("Nous aider à améliorer le site web en mesurant toute erreur survenant")])]), e._v(" "), n("li", [n("span", [e._v("Savoir comment les utilisateurs sont arrivés sur notre site web.")])]), e._v(" "), n("li", [n("span", [e._v("Google Analytics (cookies tiers)")])])]), e._v(" "), n("p", [n("b", [e._v("Comment gérer mes cookies ?")])]), e._v(" "), n("p", [e._v("Les méthodes d'interdiction et d'autorisation des cookies peuvent varier selon les navigateurs. Veuillez suivre les instructions ci-dessous, provenant directement les distributeurs des navigateurs web, pour configurer les paramètres du votre navigateur. Veuillez noter que vous pouvez modifier ces paramètres à tout moment.")]), e._v(" "), n("p", [n("span", [n("a", {
                        attrs: {
                            href: "https://support.microsoft.com/help/17442/windows-internet-explorer-delete-manage-cookies",
                            target: "blank"
                        }
                    }, [e._v("Microsoft Internet Explorer (IE)")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        attrs: {
                            href: "https://support.google.com/chrome/answer/95647",
                            target: "blank"
                        }
                    }, [e._v("Google Chrome")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        attrs: {
                            href: "https://support.apple.com/guide/safari/sfri11471/mac",
                            target: "blank"
                        }
                    }, [e._v("Safari")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        attrs: {
                            href: "https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop",
                            target: "blank"
                        }
                    }, [e._v("Firefox")])])]), e._v(" "), n("p", [e._v("Lorsque vous avez paramétré vos cookies tels que vous le désiriez dans votre navigateur, veuillez cliquer sur « Accepter les conditions générales » pour continuer. Si vous choisissez de ne pas autoriser les cookies, vous pourrez utiliser le site web dans sa version limitée « Mode invité ».")]), e._v(" "), n("p", [e._v("Les cookies créés par Pokémon Kids Winter Fest seront automatiquement effacés au bout de six mois à compter de la date de leur création.")])])
                }], !1, null, null, null).exports,
                h = Object(r.a)({}, (function() {
                    var e = this.$createElement;
                    this._self._c;
                    return this._m(0)
                }), [function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("div", [n("p", [n("b", [e._v("Cosa sono i cookie?")])]), e._v(" "), n("p", [e._v("The Pokémon Company International utilizza i cookie su questo sito Web per contribuire alla creazione dell'esperienza di un determinato utente. I cookie sono piccoli file di testo memorizzati sul computer o altri dispositivi dell'utente dai siti Web visitati. Il sito Web della società utilizza i cookie per facilitarne l'utilizzo da parte degli utenti, per dare accesso più agevolmente a informazioni e funzionalità, nonché per fornire informazioni sulle modalità di utilizzo del sito Web in modo che The Pokémon Company International possa adoperarsi per rendere il sito Web quanto più possibile aggiornato, pertinente e privo di errori. A seguire sono illustrate in dettaglio le modalità di attivazione o disattivazione di questi cookie. Si tenga presente che limitare o bloccare i cookie sul sito Web potrebbe avere un impatto sulle funzionalità o le prestazioni del sito Web o potrebbe impedire all'utente di utilizzare determinati servizi forniti per il tramite del sito Web.")]), e._v(" "), n("p", [e._v("Si fa altresì presente che i cookie possono essere utilizzati anche da terzi (tra cui, ad esempio, reti pubblicitarie e fornitori di servizi esterni come i servizi di analisi del sito Web) ma senza alcun controllo da parte di The Pokémon Company International, anche laddove sia la società stessa ad avvalersi dei servizi forniti da detti terzi (tra cui, ad esempio, l'analisi del sito Web). I cookie utilizzati in questo sito Web potrebbero essere cookie di performance o cookie di targeting (descritti in dettaglio a seguire).")]), e._v(" "), n("p", [n("b", [e._v("Cookie strettamente necessari")])]), e._v(" "), n("p", [e._v("Questi cookie sono essenziali per l'utilizzo delle funzioni e dei servizi del sito Web. Il funzionamento del sito Web non sarà più garantito in caso di blocco di questi cookie tramite browser da parte dell'utente. Non è necessario richiedere il consenso per l'utilizzo di questi cookie. A seguire riportiamo alcuni esempi delle modalità di utilizzo di questi cookie:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Tenere traccia del fatto che l'utente ha già visitato in precedenza il sito Web")])])]), e._v(" "), n("p", [n("b", [e._v("Cookie funzionali")])]), e._v(" "), n("p", [e._v("Questi cookie, che permettono di ricordare e memorizzare l'avanzamento dell'utente, come il suo nickname, l'avanzamento nel gioco, i badge raccolti, ecc., possono essere attivati/disattivati in qualsiasi momento dall'utente; tuttavia la loro disattivazione implicherà per l'utente la perdita di tutti i dati di avanzamento nel gioco nel momento in cui l'utente dovesse tornare sul sito Web o sull'applicazione Web. A seguire riportiamo alcuni esempi delle modalità di utilizzo di questi cookie:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Salvare lo stato di avanzamento nei giochi e ciò che un utente ha raccolto durante questa visita")])]), e._v(" "), n("li", [n("span", [e._v("Salvare nickname, squadra e badge raccolti dall'utente")])]), e._v(" "), n("li", [n("span", [e._v("Salvare la preferenza linguistica degli utenti")])])]), e._v(" "), n("p", [n("b", [e._v("Performance e dati analitici")])]), e._v(" "), n("p", [e._v("Questi cookie ci aiutano a comprendere in che modo viene utilizzato il sito Web mediante la raccolta di informazioni, tra cui le pagine del sito Web visitate più spesso, le funzioni utilizzate dagli utenti e i siti Web visitati prima di accedere a questo sito Web. Tali informazioni sono utilizzate per migliorare il sito Web, oltre che l'esperienza dell'utente sullo stesso. Questi cookie possono essere attivati/disattivati in qualsiasi momento dall'utente. A seguire riportiamo alcuni esempi delle modalità di utilizzo di questi cookie:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Monitorare e fornire statistiche sull'utilizzo del sito Web e sul tempo di navigazione sul sito stesso.")])]), e._v(" "), n("li", [n("span", [e._v("Aiutare The Pokémon Company International a migliorare il sito Web valutando gli errori che possono verificarsi")])]), e._v(" "), n("li", [n("span", [e._v("Comprendere in che modo gli utenti hanno raggiunto il sito Web.")])]), e._v(" "), n("li", [n("span", [e._v("Google Analytics (Cookie di terze parti)")])])]), e._v(" "), n("p", [n("b", [e._v("Come gestire i propri cookie?")])]), e._v(" "), n("p", [e._v("A seconda del browser, i metodi per disattivare e attivare i cookie possono essere diversi.Si invita pertanto a seguire le istruzioni dei produttori dei browser riportate di seguito per configurare le impostazioni del browser; tali impostazioni possono comunque essere modificate in qualsiasi momento.")]), e._v(" "), n("p", [n("span", [n("a", {
                        attrs: {
                            href: "https://support.microsoft.com/help/17442/windows-internet-explorer-delete-manage-cookies",
                            target: "blank"
                        }
                    }, [e._v("Microsoft Internet Explorer (IE)")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        attrs: {
                            href: "https://support.google.com/chrome/answer/95647",
                            target: "blank"
                        }
                    }, [e._v("Google Chrome")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        attrs: {
                            href: "https://support.apple.com/guide/safari/sfri11471/mac",
                            target: "blank"
                        }
                    }, [e._v("Safari")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        attrs: {
                            href: "https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop",
                            target: "blank"
                        }
                    }, [e._v("Firefox")])])]), e._v(" "), n("p", [e._v('Una volta impostati i cookie del browser in base alle proprie preferenze, è necessario fare clic sul pulsante di accettazione di Termini e Condizioni e proseguire. La mancata accettazione dei cookie da parte dell\'utente comporterà la possibilità di utilizzare il sito Web solo in "modalità ospite".')]), e._v(" "), n("p", [e._v("I cookie creati da Pokémon Kids Winter Fest saranno automaticamente cancellati dopo sei mesi dalla data di creazione.")])])
                }], !1, null, null, null).exports,
                f = Object(r.a)({}, (function() {
                    var e = this.$createElement;
                    this._self._c;
                    return this._m(0)
                }), [function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("div", [n("p", [n("b", [e._v("¿Qué son las "), n("i", [e._v("cookies")]), e._v("?")])]), e._v(" "), n("p", [e._v("The Pokémon Company International utiliza "), n("i", [e._v("cookies ")]), e._v("en este sitio web para ayudar a crear esta experiencia de usuario. Las "), n("i", [e._v("cookies ")]), e._v("son pequeños archivos de texto que los sitios web que visita guardan en su computadora o en otro dispositivo. Nuestro sitio web utiliza "), n("i", [e._v("cookies ")]), e._v("para que resulte más fácil de utilizar, apoyar el suministro de información y funciones para el usuario y facilitarnos información sobre cómo se utiliza el sitio web y asegurarnos así de que está actualizado, es pertinente y no contiene errores en la medida de lo posible. A continuación encontrará información sobre cómo puede activar o desactivar estas "), n("i", [e._v("cookies")]), e._v(". Tenga en cuenta que restringir o bloquear las "), n("i", [e._v("cookies ")]), e._v("en nuestro sitio web puede afectar a la funcionalidad o el rendimiento de este o evitar que pueda utilizar determinados servicios prestados a través de él.")]), e._v(" "), n("p", [e._v("Tenga en cuenta asimismo que otros terceros (incluidos, por ejemplo, redes publicitarias o proveedores de servicios externos como, por ejemplo, servicios de análisis de sitios web) pueden utilizar también "), n("i", [e._v("cookies")]), e._v(", sobre las cuales no tenemos control alguno, aunque es posible que recibamos servicios de dichos terceros (incluido, por ejemplo, el análisis de sitios web). Probablemente estas "), n("i", [e._v("cookies ")]), e._v("serán de rendimiento o de publicidad selectiva (tal y como se explica a continuación).")]), e._v(" "), n("p", [n("b", [n("i", [e._v("Cookies ")]), e._v("estrictamente necesarias")])]), e._v(" "), n("p", [e._v("Estas "), n("i", [e._v("cookies ")]), e._v("son esenciales para el uso de las funciones y los servicios del sitio web. Si el usuario bloquea estas "), n("i", [e._v("cookies ")]), e._v("mediante el navegador, no podemos garantizar el funcionamiento del sitio web. Para estas "), n("i", [e._v("cookies ")]), e._v("no es necesario solicitar el consentimiento. Entre los ejemplos de cómo utilizamos estas "), n("i", [e._v("cookies ")]), e._v("se incluyen:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Recordar que no es la primera vez que un usuario visita el sitio web.")])])]), e._v(" "), n("p", [n("b", [n("i", [e._v("Cookies ")]), e._v("funcionales")])]), e._v(" "), n("p", [e._v("Estas "), n("i", [e._v("cookies ")]), e._v("nos permiten recordar y guardar el progreso del usuario como, por ejemplo, el alias del usuario, el progreso en un juego, las credenciales recopiladas, etc. El usuario puede habilitarlas/deshabilitarlas en cualquier momento; sin embargo, al deshabilitarlas, el progreso del usuario se perderá cuando vuelva al sitio web o la aplicación web. Entre los ejemplos de cómo utilizamos estas "), n("i", [e._v("cookies ")]), e._v("se incluyen:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Recordar el progreso alcanzado en un juego y qué ha recopilado el usuario durante esta visita.")])]), e._v(" "), n("li", [n("span", [e._v("Recordar el alias y el equipo del usuario y las credenciales recopiladas por este.")])]), e._v(" "), n("li", [n("span", [e._v("Recordar el idioma preferido del usuario.")])])]), e._v(" "), n("p", [n("b", [e._v("Rendimiento y análisis")])]), e._v(" "), n("p", [e._v("Estas "), n("i", [e._v("cookies ")]), e._v("nos ayudan a entender cómo utilizan las personas el sitio web. Recopilan información como, por ejemplo, a qué páginas se dirigen con mayor frecuencia los visitantes del sitio web, qué funciones utilizan y qué sitios web han visitado antes del nuestro. Utilizamos esta información para mejorar nuestro sitio web y ofrecer una experiencia de usuario mejorada. El usuario las puede habilitar/deshabilitar en cualquier momento. Entre los ejemplos de cómo utilizamos estas "), n("i", [e._v("cookies ")]), e._v("se incluyen:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Supervisar y facilitar estadísticas sobre cómo se utiliza el sitio web y cuánto tiempo se pasa visitándolo.")])]), e._v(" "), n("li", [n("span", [e._v("Ayudarnos a mejorar el sitio web evaluando cualquier error que pudiera producirse.")])]), e._v(" "), n("li", [n("span", [e._v("Cómo ha llegado el usuario a nuestro sitio web.")])]), e._v(" "), n("li", [n("span", [e._v("Google Analytics ("), n("i", [e._v("cookies ")]), e._v("de terceros)")])])]), e._v(" "), n("p", [n("b", [e._v("¿Cómo puedo gestionar las "), n("i", [e._v("cookies")]), e._v("?")])]), e._v(" "), n("p", [e._v("Los distintos navegadores web pueden utilizar diferentes métodos para deshabilitar y habilitar las "), n("i", [e._v("cookies")]), e._v(". Siga las instrucciones que se indican a continuación, directamente del fabricante, para configurar los ajustes del navegador web. Tenga en cuenta que puede modificar estos ajustes cuando desee.")]), e._v(" "), n("p", [n("span", [n("a", {
                        attrs: {
                            href: "https://support.microsoft.com/help/17442/windows-internet-explorer-delete-manage-cookies",
                            target: "blank"
                        }
                    }, [e._v("Microsoft Internet Explorer (IE)")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        attrs: {
                            href: "https://support.google.com/chrome/answer/95647",
                            target: "blank"
                        }
                    }, [e._v("Google Chrome")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        attrs: {
                            href: "https://support.apple.com/guide/safari/sfri11471/mac",
                            target: "blank"
                        }
                    }, [e._v("Safari")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        attrs: {
                            href: "https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop",
                            target: "blank"
                        }
                    }, [e._v("Firefox")])])]), e._v(" "), n("p", [e._v("Cuando esté conforme con la configuración de las "), n("i", [e._v("cookies ")]), e._v("del navegador, acepte los Términos y condiciones y continúe. Si opta por no permitir las "), n("i", [e._v("cookies")]), e._v(', se le permitirá utilizar el sitio web en un "Modo invitado" limitado.')]), e._v(" "), n("p", [e._v("Las "), n("i", [e._v("cookies ")]), e._v("creadas por Pokémon Kids Winter Fest se eliminarán automáticamente después de un periodo de seis meses desde su fecha de creación original.")])])
                }], !1, null, null, null).exports,
                _ = {
                    props: ["content"],
                    methods: {
                        scrollMeTo: function(e) {
                            var o = this.$refs[e].offsetTop;
                            document.getElementById("privacy").scrollTop = o
                        }
                    }
                },
                z = Object(r.a)(_, (function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("div", [n("p", [e._v("POLÍTICA DE PRIVACIDADE")]), e._v(" "), e._m(0), e._v(" "), e._m(1), e._v(" "), n("p", [e._v("Este aviso de privacidade se aplica a todas as informações coletadas por meio de nossos Serviços (que, conforme descrito acima, inclui nosso Site), bem como qualquer serviço, vendas, marketing ou eventos relacionados.")]), e._v(" "), n("p", [e._v("Leia este aviso de privacidade com atenção, pois ele o ajudará a entender o que fazemos com as informações que coletamos.")]), e._v(" "), n("p", [e._v("ÍNDICE")]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T1")
                            }
                        }
                    }, [e._v("1. QUE INFORMAÇÕES NÓS COLETAMOS?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T2")
                            }
                        }
                    }, [e._v("2. COMO NÓS USAMOS SUAS INFORMAÇÕES?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T3")
                            }
                        }
                    }, [e._v("3. SUAS INFORMAÇÕES SERÃO COMPARTILHADAS COM ALGUÉM?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T4")
                            }
                        }
                    }, [e._v("4. USAMOS COOKIES E OUTRAS TECNOLOGIAS DE RASTREAMENTO?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T5")
                            }
                        }
                    }, [e._v("5. SUAS INFORMAÇÕES SÃO TRANSFERIDAS INTERNACIONALMENTE?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T6")
                            }
                        }
                    }, [e._v("6. POR QUANTO TEMPO NÓS MANTEMOS SUAS INFORMAÇÕES?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T7")
                            }
                        }
                    }, [e._v("7. COMO MANTEMOS SUAS INFORMAÇÕES SEGURAS?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T8")
                            }
                        }
                    }, [e._v("8. QUAIS SÃO OS SEUS DIREITOS DE PRIVACIDADE?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T9")
                            }
                        }
                    }, [e._v("9. CONTROLES PARA RECURSOS DE NÃO RASTREAR")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T10")
                            }
                        }
                    }, [e._v("10. OS RESIDENTES DA CALIFÓRNIA TÊM DIREITOS DE PRIVACIDADE ESPECÍFICOS?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T11")
                            }
                        }
                    }, [e._v("11. FAZEMOS ATUALIZAÇÕES PARA ESTE AVISO?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T12")
                            }
                        }
                    }, [e._v("12. COMO VOCÊ PODE ENTRAR EM CONTATO CONOSCO SOBRE ESTE AVISO?")])])]), e._v(" "), n("p", {
                        ref: "T1"
                    }, [e._v("1. QUE INFORMAÇÕES NÓS COLETAMOS?")]), e._v(" "), n("p", [e._v("Informações coletadas automaticamente")]), e._v(" "), e._m(2), e._v(" "), e._m(3), e._v(" "), e._m(4), e._v(" "), e._m(5), e._v(" "), n("p", [e._v("As informações que coletamos incluem o seguinte:")]), e._v(" "), e._m(6), e._v(" "), n("p", {
                        ref: "T2"
                    }, [e._v("2. COMO NÓS USAMOS SUAS INFORMAÇÕES?")]), e._v(" "), e._m(7), e._v(" "), n("p", [e._v("Nós usamos as informações pessoais coletadas através de nosso site para diversos fins comerciais descritos abaixo. Processamos suas informações pessoais para esses fins com base em nossos interesses comerciais legítimos, a fim de celebrar ou executar um contrato com você, com o seu consentimento e/ou para o cumprimento de nossas obrigações legais. Indicamos os fundamentos de processamento específicos nos quais confiamos ao lado de cada propósito listado abaixo.")]), e._v(" "), e._m(8), e._v(" "), e._m(9), e._v(" "), n("p", [e._v("Aqui está a lista de dados que coletamos e seu uso:")]), e._v(" "), e._m(10), e._v(" "), n("p", {
                        ref: "T3"
                    }, [e._v("3. SUAS INFORMAÇÕES SERÃO COMPARTILHADAS COM ALGUÉM?")]), e._v(" "), e._m(11), e._v(" "), n("p", [e._v("Nós podemos processar ou compartilhar seus dados que mantemos de acordo com a seguinte base legal:")]), e._v(" "), e._m(12), e._v(" "), e._m(13), e._v(" "), n("p", [e._v("Mais especificamente, podemos precisar processar seus dados ou compartilhar suas informações pessoais nas seguintes situações:")]), e._v(" "), e._m(14), e._v(" "), n("p", {
                        ref: "T4"
                    }, [e._v("4. USAMOS COOKIES E OUTRAS TECNOLOGIAS DE RASTREAMENTO?")]), e._v(" "), e._m(15), e._v(" "), e._m(16), e._v(" "), n("p", {
                        ref: "T5"
                    }, [e._v("5. SUAS INFORMAÇÕES SÃO TRANSFERIDAS INTERNACIONALMENTE?")]), e._v(" "), e._m(17), e._v(" "), n("p", [e._v("Nossos servidores estão localizados na Europa. Se você estiver acessando nosso site de fora, esteja ciente de que suas informações podem ser transferidas, armazenadas e processadas por nós em nossas instalações e por terceiros com os quais possamos compartilhar suas informações pessoais (consulte “"), n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T3")
                            }
                        }
                    }, [n("span", [e._v("SUAS INFORMAÇÕES SERÃO COMPARTILHADAS COM ALGUÉM?")])]), e._v("” acima), na Europa e em outros países.")]), e._v(" "), n("p", [e._v("Se reside na Área Econômica Europeia, esses países podem não ter necessariamente leis de proteção de dados ou outras leis semelhantes tão abrangentes quanto as de seu país. Entretanto, nós tomaremos todas as medidas necessárias para proteger suas informações pessoais de acordo com este aviso de privacidade e a legislação aplicável.")]), e._v(" "), n("p", {
                        ref: "T6"
                    }, [e._v("6. POR QUANTO TEMPO NÓS MANTEMOS SUAS INFORMAÇÕES?")]), e._v(" "), e._m(18), e._v(" "), e._m(19), e._v(" "), n("p", [e._v("Quando não tivermos nenhuma necessidade comercial legítima em andamento de processar suas informações pessoais, excluiremos ou tornaremos essas informações anônimas ou, se isso não for possível (por exemplo, porque suas informações pessoais foram armazenadas em arquivos de backup), nós armazenaremos suas informações pessoais com segurança e as isolaremos de qualquer processamento posterior até que a exclusão seja possível.")]), e._v(" "), n("p", {
                        ref: "T7"
                    }, [e._v("7. COMO MANTEMOS SUAS INFORMAÇÕES SEGURAS?")]), e._v(" "), e._m(20), e._v(" "), n("p", [e._v("Implementamos medidas de segurança técnicas e organizacionais adequadas destinadas a proteger a segurança de qualquer informação pessoal que processamos. Entretanto, apesar de nossas defesas e esforços para proteger suas informações, nenhuma transmissão eletrônica pela Internet ou tecnologia de armazenamento de informações pode ser garantida como 100% segura, portanto, não podemos prometer ou garantir que hackers, criminosos cibernéticos ou terceiros não autorizados não serão capazes de violar nossa segurança e coletar, acessar, roubar ou modificar indevidamente suas informações. Embora façamos o melhor possível para proteger suas informações pessoais, a transmissão delas do nosso site e para ele é por sua conta e risco. Você deve acessar o site apenas em um ambiente seguro.")]), e._v(" "), n("p", {
                        ref: "T8"
                    }, [e._v("8. QUAIS SÃO OS SEUS DIREITOS DE PRIVACIDADE?")]), e._v(" "), e._m(21), e._v(" "), e._m(22), e._v(" "), n("p", [e._v("Os residentes da Área Econômica Europeia também têm os seguintes direitos:")]), e._v(" "), e._m(23), e._v(" "), e._m(24), e._v(" "), e._m(25), e._v(" "), n("p", [e._v("Informações da conta")]), e._v(" "), n("p", [e._v("Se, a qualquer momento, desejar revisar ou alterar as informações em sua conta ou encerrá-la, você pode fazer o seguinte:")]), e._v(" "), e._m(26), e._v(" "), n("p", [e._v("Mediante sua solicitação para encerrar sua conta, nós a desativaremos ou excluiremos bem como as informações de nossos bancos de dados ativos. Entretanto, nós podemos reter algumas informações em nossos arquivos para evitar fraudes, solucionar problemas, auxiliar em qualquer investigação, fazer cumprir nossos Termos e Condições e/ou cumprir os requisitos legais aplicáveis.")]), e._v(" "), e._m(27), e._v(" "), n("p", [e._v("Se decidir que não deseja aceitar cookies, você ainda pode acessar o site em “Modo Convidado” limitado, em que certas funcionalidades serão desabilitadas para garantir que você ainda tenha uma experiência agradável.")]), e._v(" "), n("p", {
                        ref: "T9"
                    }, [e._v("9. CONTROLES PARA RECURSOS DE NÃO RASTREAR")]), e._v(" "), n("p", [e._v("A maioria dos navegadores da Internet e alguns sistemas operacionais e aplicativos móveis incluem um recurso Do-Not-Track (“DNT”) ou configuração que você pode ativar para sinalizar sua preferência de privacidade de não ter dados sobre suas atividades de navegação on-line monitorados e coletados. Neste estágio, nenhum padrão de tecnologia uniforme para reconhecimento e implementação de sinais DNT foi finalizado. Como tal, atualmente não respondemos aos sinais do navegador DNT ou qualquer outro mecanismo que comunique automaticamente sua opção por não ser rastreado on-line. Se for adotado um padrão para rastreamento on-line que devemos seguir no futuro, nós o informaremos sobre essa prática em uma versão revisada deste aviso de privacidade.")]), e._v(" "), n("p", {
                        ref: "T10"
                    }, [e._v("10. OS RESIDENTES DA CALIFÓRNIA TÊM DIREITOS DE PRIVACIDADE ESPECÍFICOS?")]), e._v(" "), e._m(28), e._v(" "), n("p", [e._v("Nós não vendemos suas informações pessoais conforme definido pela CCPA e não o fizemos nos últimos 12 meses.")]), e._v(" "), n("p", [e._v("A seção 1798.83 do Código Civil da Califórnia, também conhecida como a lei “Shine The Light”, permite que nossos usuários residentes na Califórnia solicitem e obtenham de nós, uma vez por ano e gratuitamente, informações sobre categorias de informações pessoais (se houver) que nós divulgamos a terceiros para fins de marketing direto e os nomes e endereços de todos os terceiros com os quais compartilhamos informações pessoais no ano civil imediatamente anterior. Se você for residente da Califórnia e quiser fazer tal solicitação, envie sua solicitação por escrito para nós usando as informações de contato fornecidas abaixo.")]), e._v(" "), n("p", [e._v("Você tem o direito de não ser discriminado por exercer qualquer um desses direitos.")]), e._v(" "), n("p", [e._v("Se você for menor de 18 anos, residir na Califórnia e tiver uma conta registrada no site, terá o direito de solicitar a remoção de dados indesejados que postar publicamente no site. Para solicitar a remoção de tais dados, entre em contato conosco usando as informações de contato fornecidas abaixo e inclua o e-mail associado à sua conta e uma declaração de que você reside na Califórnia. Nós garantiremos que os dados não sejam exibidos publicamente no site, mas esteja ciente de que os dados podem não ser removidos de forma completa ou abrangente de todos os nossos sistemas (por exemplo, backups, etc.).")]), e._v(" "), n("p", {
                        ref: "T11"
                    }, [e._v("11. FAZEMOS ATUALIZAÇÕES PARA ESTE AVISO?")]), e._v(" "), e._m(29), e._v(" "), n("p", [e._v("Podemos atualizar este aviso de privacidade de tempos em tempos. A versão atualizada será indicada por uma data “Revisada” atualizada e a versão atualizada entrará em vigor assim que estiver acessível. Se fizermos alterações materiais a este aviso de privacidade, podemos notificá-lo publicando em destaque um aviso de tais alterações ou enviando-lhe uma notificação diretamente. Nós solicitamos que você reveja este aviso de privacidade frequentemente para ser informado sobre como estamos protegendo suas informações.")]), e._v(" "), n("p", {
                        ref: "T12"
                    }, [e._v("12. COMO VOCÊ PODE ENTRAR EM CONTATO CONOSCO SOBRE ESTE AVISO?")]), e._v(" "), e._m(30), e._v(" "), n("p", [e._v("COMO VOCÊ PODE REVER, ATUALIZAR OU EXCLUIR OS DADOS QUE COLETAMOS DE VOCÊ?")]), e._v(" "), e._m(31)])
                }), [function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Obrigado por escolher participar da nossa comunidade em The Pokémon Company International, Inc. (“Empresa”, “nós”, “nos” ou “nosso”). Temos o compromisso de proteger suas informações pessoais e seu direito à privacidade. Se você tiver alguma dúvida ou questionamento sobre este aviso de privacidade ou sobre nossas práticas com relação às suas informações pessoais, entre em contato conosco pelo e-mail "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [o("span", [this._v("support@pokemonkidswinterfest.com")])]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Quando você visita nosso site "), o("span", [this._v("www.pokemonkidsfestivalinverno.com.br")]), this._v(" (o “Site”) e, de maneira mais geral, usa qualquer um dos nossos serviços (os “Serviços”, que incluem o Site), nós agradecemos por você nos confiar suas informações pessoais. Nós levamos sua privacidade muito a sério. Neste aviso de privacidade, procuramos explicar a você da maneira mais clara possível quais informações coletamos, como as usamos e quais direitos você tem em relação a elas. Esperamos que você reserve um tempo para ler com atenção, pois é importante. Caso haja algum termo neste aviso de privacidade com o qual você não concorda, interrompa o uso de nossos Serviços imediatamente.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("Em resumo: Algumas informações - como seu endereço de protocolo de Internet (IP) e/ou navegador e características do dispositivo - são coletadas automaticamente quando você acessa nosso ")]), o("span", [o("i", [this._v("site")])]), o("i", [this._v(". Nós não coletamos e-mail ou outras informações pessoais além do seu apelido e progresso no jogo.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("b", [o("i", [this._v("O que são informações pessoais?")])]), o("br"), this._v("Dados pessoais são todos os tipos de informações que identificam direta ou indiretamente uma pessoa física que está viva. Isso significa que, por exemplo, nome, endereço e número de telefone e também dados de registro e dados criptografados e outros tipos de IDs eletrônicos (por exemplo, endereços IP) são dados pessoais no caso de poderem ser conectados a uma pessoa física que está viva.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Coletamos automaticamente certas informações quando você acessa, usa ou navega no "), o("span", [this._v("site")]), this._v(". Essas informações não revelam sua identidade (como seu nome ou informações de contato), mas podem incluir informações de uso e dispositivo, como endereço IP, navegador e características do dispositivo, sistema operacional, preferências de idioma, URLs de referência, nome do dispositivo, país, localização , informações sobre quem usa nosso "), o("span", [this._v("site")]), this._v(" e quando e outras informações técnicas. Essas informações são necessárias principalmente para manter a segurança e a operação de nosso "), o("span", [this._v("site")]), this._v(" e para fins analíticos internos e relatórios.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Como diversas empresas, nós também coletamos informações através de cookies e tecnologias semelhantes. Você pode saber mais sobre isso em nossa Política de Cookies: "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "http://www.pokemonkidswinterfest.com/cookies"
                        }
                    }, [o("span", [this._v("www.pokemonkidsfestivalinverno.com.br/cookies")])]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("ul", [o("li", [o("i", [this._v("Dados de registro e uso")]), this._v(": Os dados de registro e uso são informações relacionadas ao serviço, uso de diagnóstico e desempenho que nossos servidores coletam automaticamente quando você acessa ou usa nosso site e que colocamos em arquivos de registro. Dependendo de como você interage conosco, esses dados de registro podem incluir seu endereço IP, informações do dispositivo, tipo de navegador e configurações e informações sobre sua atividade no site (como carimbos de data/hora associados ao seu uso, páginas e arquivos visualizados, pesquisas e outras ações que você executa, como quais recursos você usa), informações de eventos do dispositivo (como atividade do sistema, relatórios de erros [às vezes chamados de “despejos de memória”] e configurações de hardware).")]), this._v(" "), o("li", [o("i", [this._v("Dados do dispositivo")]), this._v(":Nós coletamos dados do dispositivo, como informações sobre seu computador, telefone, tablet ou outro dispositivo que você usa para acessar o "), o("span", [this._v("site")]), this._v(". Dependendo do dispositivo usado, esses dados podem incluir informações como seu endereço IP (ou servidor proxy), números de identificação do aplicativo do dispositivo, localização, tipo de navegador, modelo de hardware, provedor de serviços de Internet e/ou operadora de celular e informações de configuração do sistema operacional.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("Em resumo")]), this._v(":"), o("i", [this._v(" Nós processamos suas informações para fins baseados em interesses comerciais legítimos, no cumprimento de nosso contrato com você, em conformidade com nossas obrigações legais e/ou com seu consentimento.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Usamos as informações que coletamos ou recebemos:"), o("span", [o("br")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("ul", [o("li", [this._v("Para gerenciar as contas de usuários. Nós podemos usar suas informações para fins de gerenciamento de nossa conta e mantê-la em funcionamento."), o("span", [o("br")])]), this._v(" "), o("li", [this._v("Para proteger nossos serviços. Nós podemos usar suas informações como parte de nossos esforços para manter nosso site seguro e protegido (por exemplo, para monitoramento e prevenção de fraudes).")]), this._v(" "), o("li", [this._v("Para fazer cumprir nossos termos, condições e políticas para fins comerciais, para cumprir os requisitos legais e regulamentares ou em relação ao nosso contrato.")]), this._v(" "), o("li", [this._v("Para atender às solicitações legais e prevenir danos. Se recebermos uma intimação ou outra solicitação legal, podemos precisar inspecionar os dados que possuímos para determinar como atendê-la.")])])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("table", {
                        attrs: {
                            cellspacing: "0",
                            cellpadding: "0"
                        }
                    }, [n("tbody", [n("tr", [n("td", [n("p", [e._v("Dados coletados")])]), e._v(" "), n("td", [n("p", [e._v("Uso")])])]), e._v(" "), n("tr", [n("td", [n("p", [e._v("Apelido")])]), e._v(" "), n("td", [n("p", [e._v("Usado em placares e perfil de treinador.")])])]), e._v(" "), n("tr", [n("td", [n("p", [e._v("Dados do jogo")])]), e._v(" "), n("td", [n("p", [e._v("Usado para garantir que o progresso do jogo seja salvo com sucesso para que você possa voltar e continuar do ponto em que saiu.")])])]), e._v(" "), n("tr", [n("td", [n("p", [e._v("Dados estatísticos")])]), e._v(" "), n("td", [n("p", [e._v("Usados para monitorar o desempenho do site para que possamos fazer qualquer ajuste para melhorar ainda mais sua experiência.")])])])])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("Em resumo: Nós apenas compartilhamos informações com o seu consentimento, para cumprir as leis, para lhe fornecer serviços, para proteger seus direitos ou para cumprir obrigações comerciais. Nós usaremos seus dados apenas internamente e nunca passaremos qualquer detalhe para terceiros.")])])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("ul", [n("li", [n("i", [e._v("Permissão")]), e._v(": Podemos processar seus dados se você nos der permissão específica para usar suas informações pessoais com uma finalidade específica.")]), e._v(" "), n("li", [n("span", [n("i", [e._v("Interesses legítimos")]), e._v(": Podemos processar seus dados quando for estritamente necessário para atingir nossos interesses comerciais legítimos. ")]), e._v("Nós podemos divulgar suas informações quando acreditarmos ser necessário investigar, prevenir ou tomar medidas em relação a possíveis violações de nossas políticas, suspeita de fraude, situações que envolvam ameaças potenciais à segurança de qualquer pessoa e atividades ilegais ou como evidência em litígio em que estejamos envolvidos.")]), e._v(" "), n("li", [n("i", [e._v("Cumprimento de um contrato")]), e._v(": Quando nós celebramos um contrato com você, podemos processar suas informações pessoais para cumprir os termos do nosso contrato.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("ul", [o("li", [o("i", [this._v("Fins comerciais")]), this._v(": Quando celebramos um contrato com fornecedores terceirizados, consultores e outros prestadores de serviços que trabalham para nós e precisam acessar suas informações pessoais para fazer esse trabalho, incluindo para fins comerciais que exigem acesso aos nossos sistemas que contêm informações pessoais (como fornecer armazenamento de dados em nuvem, manter a segurança de nossos sistemas e fornecer suporte ao cliente).")]), this._v(" "), o("li", [o("i", [this._v("Obrigações legais")]), this._v(": Nós podemos divulgar suas informações quando formos legalmente obrigados a fazê-lo, a fim de cumprir a lei aplicável, solicitações governamentais, um processo judicial, ordem judicial ou processo legal, como em resposta a uma ordem judicial ou uma intimação (incluindo em resposta às autoridades públicas para cumprir os requisitos de segurança nacional ou de aplicação da lei).")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("ul", [o("li", [o("i", [this._v("Transferências comerciais")]), this._v(": Nós podemos compartilhar ou transferir suas informações que estiverem relacionadas ou durante as negociações de, qualquer fusão, venda de ativos da empresa, financiamento ou aquisição do todo ou de parte de nosso negócio por outra empresa.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("Em resumo")]), this._v(":"), o("i", [this._v(" Podemos usar cookies e outras tecnologias de rastreamento para coletar e armazenar suas informações.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Podemos usar cookies e tecnologias de rastreamento semelhantes (como web beacons e pixels) para acessar ou armazenar informações. As informações específicas sobre como nós usamos essas tecnologias e como você pode recusar determinados cookies são definidas em nossa Política de Cookies: "), o("span", [this._v("www.pokemonkidsfestivalinverno.com.br/cookies")]), o("span", [this._v(".")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("Em resumo")]), this._v(":"), o("i", [this._v(" Nós podemos transferir, armazenar e processar suas informações em países diferentes do seu.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("Em resumo")]), this._v(":"), o("i", [this._v(" Nós mantemos suas informações pelo tempo necessário para cumprir os propósitos descritos neste aviso de privacidade, a menos que exigido de outra forma por lei.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Manteremos suas informações pessoais apenas durante o tempo necessário para os fins definidos neste aviso de privacidade, a menos que um período de retenção maior seja exigido ou permitido por lei (como impostos, contabilidade ou outros requisitos legais). Nenhum propósito neste aviso exigirá que mantenhamos suas informações pessoais por mais de "), o("span", [this._v("seis (6) meses após o início do período de inatividade da conta do usuário")]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("Em resumo")]), this._v(": "), o("i", [this._v("Nós temos como objetivo proteger suas informações pessoais por meio de um sistema de medidas de segurança organizacionais e técnicas.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("Em resumo")]), this._v(":"), o("i", [this._v(" Você pode revisar, alterar ou encerrar sua conta a qualquer momento. Você tem o “direito de ser esquecido” e pode anular seu consentimento para usar seus dados a qualquer momento.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Se você reside na Área Econômica Europeia e acredita que estamos processando ilegalmente suas informações pessoais, você também tem o direito de reclamar junto à autoridade supervisora de proteção de dados local. Você pode encontrar as informações de contato aqui: "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                        }
                    }, [o("span", [this._v("http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm")])]), o("span", [this._v(".")])])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("ul", [n("li", [e._v("O direito de ser informado sobre as maneiras como usamos suas informações.")]), e._v(" "), n("li", [e._v("O direito de solicitar à Pokémon acesso e retificação ou eliminação de informações pessoais e certos direitos de portabilidade de dados e o direito de dar instruções sobre o uso e divulgação de seus dados pessoais após sua morte.")]), e._v(" "), n("li", [e._v("O direito de se opor ao processamento de suas informações pessoais ou obter uma restrição de tal processamento em certas circunstâncias.")]), e._v(" "), n("li", [e._v("O direito de ter seus dados pessoais transferidos para outra organização, caso seja tecnicamente viável para a Pokémon fazê-lo.")]), e._v(" "), n("li", [e._v("Se o processamento de dados pessoais for baseado no seu consentimento, o direito de anular o consentimento a qualquer momento (sem afetar a legalidade do processamento antes de sua anulação).")]), e._v(" "), n("li", [e._v("Pode haver exceções a esses direitos em certas circunstâncias, e quando você não puder exercer um direito devido a uma exceção, nós forneceremos essa explicação.")]), e._v(" "), n("li", [e._v("O direito de apresentar sua reclamação a um regulador. Se você mora na Área Econômica Europeia (AEE) e acredita que não cumprimos as leis de proteção de dados, você pode reclamar com a autoridade local de proteção de dados; entretanto, agradeceríamos se você desse à Pokémon a oportunidade de tratar seus questionamentos diretamente, entrando em contato conosco.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Se você residir na Suíça, as informações de contato das autoridades de proteção de dados estão disponíveis aqui: "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "https://www.edoeb.admin.ch/edoeb/en/home.html"
                        }
                    }, [o("span", [this._v("https://www.edoeb.admin.ch/edoeb/en/home.html")])]), o("span", [this._v(".")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Caso você tenha alguma dúvida ou comentário sobre seus direitos de privacidade, envie-nos um e-mail para "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [o("span", [this._v("support@pokemonkidswinterfest.com")])]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("span", [o("span"), this._v("■")]), this._v("Entrar em contato conosco usando as informações de contato fornecidas.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("span", [this._v("Cookies e tecnologias similares:")]), this._v(" A maioria dos navegadores de Internet está configurada para aceitar cookies por padrão. Se preferir, geralmente você pode escolher configurar seu navegador para remover ou rejeitar cookies. Se você escolher remover ou rejeitar cookies, isso pode afetar certos recursos ou serviços de nosso site.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("Em resumo")]), this._v(":"), o("i", [this._v(" Sim, se você for residente da Califórnia, terá direitos específicos relacionados ao acesso às suas informações pessoais.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("Em resumo")]), this._v(":"), o("i", [this._v(" Sim, atualizaremos este aviso conforme necessário para ficar em conformidade com as leis relevantes.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Caso você tenha alguma dúvida ou comentário sobre este aviso, envie-nos um e-mail para "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [o("span", [this._v("support@pokemonkidswinterfest.com")])]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Com base nas leis aplicáveis de seu país, você pode ter o direito de solicitar acesso às informações pessoais que coletamos de você, alterar essas informações ou excluí-las em algumas circunstâncias. Para solicitar a revisão, atualização ou exclusão de suas informações pessoais, envie um formulário de solicitação por e-mail para "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [o("span", [this._v("support@pokemonkidswinterfest.com")])]), this._v(". Nós responderemos à sua solicitação em 30 dias.")])
                }], !1, null, null, null).exports,
                E = {
                    props: ["content"],
                    methods: {
                        scrollMeTo: function(e) {
                            var o = this.$refs[e].offsetTop;
                            document.getElementById("privacy").scrollTop = o
                        }
                    }
                },
                S = Object(r.a)(E, (function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("div", [n("p", [e._v("DATENSCHUTZERKLÄRUNG")]), e._v(" "), e._m(0), e._v(" "), e._m(1), e._v(" "), n("p", [e._v("Diese Datenschutzerklärung gilt für sämtliche Daten, die durch unsere Angebote (zu denen, wie oben angegeben, auch unsere Webseite zählt), sowie alle damit zusammenhängenden Angebote, Verkäufe, Marketingaktivitäten oder Events, erfasst werden.")]), e._v(" "), n("p", [e._v("Bitte lesen Sie diese Datenschutzerklärung sorgfältig, um zu verstehen, wie wir die erfassten Daten verwenden.")]), e._v(" "), n("p", [e._v("INHALTSVERZEICHNIS")]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T1")
                            }
                        }
                    }, [e._v("1. WELCHE DATEN ERFASSEN WIR?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T2")
                            }
                        }
                    }, [e._v("2. WIE VERWENDEN WIR IHRE DATEN?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T3")
                            }
                        }
                    }, [e._v("3. WERDEN IHRE DATEN MIT ANDEREN GETEILT?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T4")
                            }
                        }
                    }, [e._v("4. VERWENDEN WIR COOKIES UND SONSTIGE TRACKING-TECHNOLOGIEN?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T5")
                            }
                        }
                    }, [e._v("5. WERDEN IHRE DATEN INTERNATIONAL ÜBERTRAGEN?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T6")
                            }
                        }
                    }, [e._v("6. WIE LANGE BEWAHREN WIR IHRE DATEN AUF?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T7")
                            }
                        }
                    }, [e._v("7. WIE STELLEN WIR DIE SICHERHEIT IHRER DATEN SICHER?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T8")
                            }
                        }
                    }, [e._v("8. WELCHE DATENSCHUTZRECHTE HABEN SIE?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T9")
                            }
                        }
                    }, [e._v("9. EINSTELLUNGEN FÜR DO-NOT-TRACK-FUNKTIONEN")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T10")
                            }
                        }
                    }, [e._v("10. HABEN PERSONEN MIT WOHNSITZ IN KALIFORNIEN BESONDERE DATENSCHUTZRECHTE?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T12")
                            }
                        }
                    }, [e._v("11. NEHMEN WIR AKTUALISIERUNGEN DIESER ERKLÄRUNG VOR?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T13")
                            }
                        }
                    }, [e._v("12. KONTAKT")])])]), e._v(" "), n("p", {
                        ref: "T1"
                    }, [e._v("1. WELCHE DATEN ERFASSEN WIR?")]), e._v(" "), n("p", [e._v("Automatisch erfasste Daten")]), e._v(" "), e._m(2), e._v(" "), e._m(3), e._v(" "), e._m(4), e._v(" "), e._m(5), e._v(" "), n("p", [e._v("Wir erfassen unter anderem diese Daten:")]), e._v(" "), e._m(6), e._v(" "), n("p", {
                        ref: "T2"
                    }, [e._v("2. WIE VERWENDEN WIR IHRE DATEN?")]), e._v(" "), e._m(7), e._v(" "), n("p", [e._v("Wir nutzen über unsere Webseite erfasste personenbezogene Daten für verschiedene geschäftliche Zwecke, die nachfolgend beschrieben sind. Wir verarbeiten Ihre personenbezogenen Daten für diese Zwecke basierend auf unseren berechtigten Geschäftsinteressen, um einen Vertrag mit Ihnen abzuschließen oder zu erfüllen, mit Ihrer Zustimmung, oder zur Einhaltung unserer rechtlichen Pflichten. Wir geben den jeweiligen Grund der Verarbeitung neben den nachstehend aufgeführten Zwecken an.")]), e._v(" "), e._m(8), e._v(" "), e._m(9), e._v(" "), n("p", [e._v("Hier finden Sie eine Liste der erfassten Daten sowie deren Verwendung:")]), e._v(" "), e._m(10), e._v(" "), n("p", {
                        ref: "T3"
                    }, [e._v("3. WERDEN IHRE DATEN MIT ANDEREN GETEILT?")]), e._v(" "), e._m(11), e._v(" "), n("p", [e._v("Wir verarbeiten oder teilen die uns vorliegenden personenbezogenen Daten auf Basis folgender Rechtsgrundlagen:")]), e._v(" "), e._m(12), e._v(" "), e._m(13), e._v(" "), n("p", [e._v("Konkret heißt das, dass wir Ihre personenbezogenen Daten ggf. in den folgenden Fällen verarbeiten oder teilen:")]), e._v(" "), e._m(14), e._v(" "), n("p", {
                        ref: "T4"
                    }, [e._v("4. VERWENDEN WIR COOKIES UND SONSTIGE TRACKING-TECHNOLOGIEN?")]), e._v(" "), e._m(15), e._v(" "), e._m(16), e._v(" "), n("p", {
                        ref: "T5"
                    }, [e._v("5. WERDEN IHRE DATEN INTERNATIONAL ÜBERTRAGEN?")]), e._v(" "), e._m(17), e._v(" "), n("p", [e._v("Unsere Server befinden sich in Europa. Falls Sie unsere Webseite aus einem Land außerhalb Europas besuchen, beachten Sie bitte, dass Ihre Daten ggf. an uns übertragen und von uns, oder von den Dritten mit denen wir Ihre personenbezogenen Daten teilen, in und anderen Ländern aufbewahrt und verarbeitet werden (siehe „"), n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T3")
                            }
                        }
                    }, [n("span", [e._v("WERDEN IHRE DATEN MIT ANDEREN GETEILT?")])]), e._v("“ oben).")]), e._v(" "), n("p", [e._v("Falls Sie im europäischen Wirtschaftsraum ansässig sind, kann es sein, dass die Datenschutzbestimmungen oder ähnliche Gesetze in diesen Ländern in ihrem Umfang nicht denjenigen Ihres Landes entsprechen. Wir werden jedoch sämtliche notwendigen Maßnahmen ergreifen, um Ihre personenbezogenen Daten gemäß dieser Datenschutzerklärung und dem anzuwendenden Recht zu schützen.")]), e._v(" "), n("p", {
                        ref: "T6"
                    }, [e._v("6. WIE LANGE BEWAHREN WIR IHRE DATEN AUF?")]), e._v(" "), e._m(18), e._v(" "), e._m(19), e._v(" "), n("p", [e._v("Gibt es keinen andauernden, berechtigten geschäftlichen Grund Ihre personenbezogenen Daten zu verarbeiten, werden wir diese Daten löschen oder anonymisieren. Wo dies nicht möglich ist (weil Ihre personenbezogenen Daten zum Beispiel in Backup-Archiven gespeichert sind), werden wir Ihre personenbezogenen Daten so lange sicher aufbewahren und von der weiteren Verarbeitung ausschließen, bis eine Löschung möglich ist.")]), e._v(" "), n("p", {
                        ref: "T7"
                    }, [e._v("7. WIE STELLEN WIR DIE SICHERHEIT IHRER DATEN SICHER?")]), e._v(" "), e._m(20), e._v(" "), n("p", [e._v("Wir haben angebrachte organisatorische und technische Sicherheitsmaßnahmen ergriffen, um die von uns verarbeiteten personenbezogenen Daten zu schützen. Trotz dieser Sicherheitsmaßnahmen und unserer Bemühungen, Ihre Daten zu schützen, kann jedoch die Sicherheit einer elektronischen Übertragung über das Internet oder eine Datenspeichertechnologie nicht zu 100 % garantiert werden. Wir können daher nicht versprechen oder garantieren, dass Hacker, Internetkriminelle oder andere unbefugte Dritte unsere Sicherheitsmaßnahmen nicht überwinden und Ihre Daten unrechtmäßig erheben, einsehen, stehlen oder verändern werden. Auch wenn wir Ihre personenbezogenen Daten so gut es uns möglich ist schützen, findet die Übertragung personenbezogener Daten von und zu unserer Webseite auf eigene Gefahr statt. Sie sollten unsere Webseite nur in einer sicheren Umgebung besuchen.")]), e._v(" "), n("p", {
                        ref: "T8"
                    }, [e._v("8. WELCHE DATENSCHUTZRECHTE HABEN SIE?")]), e._v(" "), e._m(21), e._v(" "), e._m(22), e._v(" "), n("p", [e._v("Wenn Sie im europäischen Wirtschaftsraum ansässig sind, haben Sie zudem folgende Rechte:")]), e._v(" "), e._m(23), e._v(" "), e._m(24), e._v(" "), e._m(25), e._v(" "), n("p", [e._v("Kontoinformationen")]), e._v(" "), n("p", [e._v("Sie können die Informationen in Ihrem Konto jederzeit einsehen, verändern oder kündigen. Gehen Sie folgendermaßen vor:")]), e._v(" "), e._m(26), e._v(" "), n("p", [e._v("Sobald wir Ihren Antrag auf Kündigung des Kontos erhalten, werden wir Ihr Konto und Ihre Daten deaktivieren oder aus unseren aktiven Datenbanken löschen. Wir werden jedoch ggf. einige Daten aufbewahren, um Betrug zu verhindern, Probleme zu lösen, etwaige Ermittlungen zu unterstützen, unsere Geschäftsbedingungen durchzusetzen, und/oder einschlägige gesetzliche Bestimmungen einzuhalten.")]), e._v(" "), e._m(27), e._v(" "), n("p", [e._v("Wenn Sie keine Cookies zulassen, können Sie die Website weiterhin in einem eingeschränkten „Gäste-Modus“ nutzen, in dem bestimmte Funktionen deaktiviert sind, um Ihnen dennoch eine schöne Erfahrung zu bieten.")]), e._v(" "), n("p", {
                        ref: "T9"
                    }, [e._v("9. EINSTELLUNGEN FÜR DO-NOT-TRACK-FUNKTIONEN")]), e._v(" "), n("p", [e._v("Die meisten Internet-Browser und einige mobile Betriebssysteme und mobile Anwendungen haben eine Do-Not-Track-Funktion („DNT“) oder Einstellung, die Sie aktivieren können, um zu signalisieren, dass Sie es nicht wünschen, dass Daten über Ihre Onlineaktivitäten erfasst werden. Bislang gibt es keinen einheitlichen Technologiestandard für die Erkennung und Umsetzung von DNT-Signalen. Daher reagiert unsere Webseite derzeit nicht auf DNT-Signale Ihres Browsers oder auf andere Mechanismen, die automatisch eine DNT-Präferenz kommunizieren. Sollte ein Standard für ein Online-Tracking-System verabschiedet werden, den wir zukünftig einzuhalten haben, so werden wir Sie in einer überarbeiteten Version dieser Datenschutzerklärung darüber informieren.")]), e._v(" "), n("p", {
                        ref: "T10"
                    }, [e._v("10. HABEN PERSONEN MIT WOHNSITZ IN KALIFORNIEN BESONDERE DATENSCHUTZRECHTE?")]), e._v(" "), e._m(28), e._v(" "), n("p", [e._v("Wir verkaufen Ihre personenbezogenen Daten im Sinne des CCPA nicht weiter und haben es auch die letzten 12 Monate nicht getan.")]), e._v(" "), n("p", [e._v("Paragraf 1798.83 des California Civil Code, auch bekannt als „Shine The Light“-Gesetz, ermöglicht es Nutzern unserer Angebote mit Wohnsitz in Kalifornien, einmal pro Jahr kostenlose Auskunft über die Arten von personenbezogenen Daten (wo zutreffend) zu erhalten, die wir an Dritte für Zwecke der Direktwerbung weitergegeben haben, sowie Auskunft über die Namen und Adressen aller Dritten zu erhalten, mit denen wir Daten im unmittelbar vorausgehenden Kalenderjahr geteilt haben. Falls Sie Ihren Wohnsitz in Kalifornien haben und einen solchen Antrag stellen wollen, schicken Sie diesen bitte in schriftlicher Form an die unten angegebenen Kontaktdaten.")]), e._v(" "), n("p", [e._v("Sie haben das Recht, nicht aufgrund der Ausübung dieser Rechte diskriminiert zu werden.")]), e._v(" "), n("p", [e._v("Falls Sie unter 18 Jahre alt sind, Ihren Wohnsitz in Kalifornien haben und ein registriertes Konto auf unserer Webseite besitzen, haben Sie das Recht, die Entfernung von ungewollten Daten zu verlangen, die Sie öffentlich auf der Webseite posten. Bitte schicken Sie eine derartige Anfrage an die unten aufgeführten Kontaktdaten, mit Angabe der mit dem Konto verknüpften E-Mail-Adresse sowie einer Erklärung, dass Sie in Kalifornien wohnen. Wir werden sicherstellen, dass die Daten nicht öffentlich auf der Webseite angezeigt werden. Bitte beachten Sie jedoch, dass die Daten unter Umständen nicht umfassend und vollständig von allen Systemen gelöscht werden (z. B. Backups).")]), e._v(" "), n("p", {
                        ref: "T11"
                    }, [e._v("11. NEHMEN WIR AKTUALISIERUNGEN DIESER ERKLÄRUNG VOR?")]), e._v(" "), e._m(29), e._v(" "), n("p", [e._v("Wir können diese Datenschutzerklärung von Zeit zu Zeit anpassen. Die aktualisierte Version wird mit einem aktualisierten Datum („Überarbeitet“) markiert und wird wirksam, sobald darauf zugegriffen werden kann. Falls wir wesentliche Änderungen an dieser Datenschutzerklärung vornehmen, werden wir Sie ggf. mit einem deutlich sichtbaren Hinweis darauf hinweisen, oder Sie direkt per Benachrichtigung über die Änderungen informieren. Wir empfehlen Ihnen, diese Datenschutzerklärung regelmäßig durchzusehen, damit Sie immer wissen, wie wir Ihre Daten schützen.")]), e._v(" "), n("p", {
                        ref: "T12"
                    }, [e._v("12. KONTAKT")]), e._v(" "), e._m(30), e._v(" "), n("p", [e._v("WIE KÖNNEN SIE DIE ÜBER SIE ERHOBENEN DATEN EINSEHEN, AKTUALISIEREN ODER LÖSCHEN?")]), e._v(" "), e._m(31)])
                }), [function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Danke, dass Sie ein Teil der Gemeinschaft von The Pokémon Company International, Inc. („Gesellschaft“, „wir“, „uns“ oder „unser(e)“) sind. Wir verpflichten uns, Ihre personenbezogenen Daten und Ihr Recht auf Privatsphäre zu schützen. Falls Sie Fragen oder Bedenken im Zusammenhang mit dieser Datenschutzerklärung oder unserer Vorgehensweise bezüglich Ihrer personenbezogenen Daten haben, kontaktieren Sie uns bitte unter "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [o("span", [this._v("support@pokemonkidswinterfest.com")])]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Wir wissen zu schätzen, dass Sie uns beim Besuch unserer Webseite "), o("span", [this._v("www.pokemonkidswinterfest.de")]), this._v(" (die „Webseite“), und allgemein bei der Verwendung unserer Angebote (die „Angebote“, zu denen die Webseite zählt), mit Ihren personenbezogenen Daten vertrauen. Wir nehmen den Schutz Ihrer Daten sehr ernst. In dieser Datenschutzerklärung wollen wir so verständlich wie möglich darstellen, welche Daten wir erfassen, wie wir sie verwenden und welche Rechte Sie in dieser Hinsicht haben. Diese Hinweise sind wichtig, daher hoffen wir, dass Sie sich die Zeit nehmen sie sorgfältig zu lesen. Sollten Sie mit einer oder mehrerer Bestimmungen in dieser Datenschutzerklärung nicht einverstanden sein, so bitten wir Sie, die Nutzung unserer Angebote unverzüglich einzustellen.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("Kurz gesagt: Einige Daten, beispielsweise Ihre IP-Adresse und/oder Merkmale Ihres Browsers oder Geräts, werden automatisch erfasst, wenn Sie unsere ")]), o("span", [o("i", [this._v("Webseite")])]), o("i", [this._v(" besuchen. Abgesehen von dem von Ihnen gewählten Spitznamen und Ihrem Spielfortschritt, erfassen wir keine personenbezogene Daten oder E-Mail-Adressen.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("b", [o("i", [this._v("Was sind personenbezogene Daten?")])]), o("br"), this._v("Personenbezogene Daten sind sämtliche Informationen, die auf direktem oder indirektem Weg eine lebende natürliche Person identifizieren. Dazu gehören zum Beispiel Name, Anschrift und Telefonnummer, aber auch Protokolldaten, verschlüsselte Daten und andere Arten elektronischer Identifikationsmöglichkeiten (z. B. IP-Adressen) sind personenbezogene Daten, falls sie einer lebenden natürlichen Person zugeordnet werden können.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Wenn Sie unsere "), o("span", [this._v("Webseite")]), this._v(" besuchen, nutzen oder in ihr navigieren, erfassen wir bestimmte Daten automatisch. Diese Daten geben nicht Ihre konkrete Identität preis (z. B. Ihren Namen oder Kontaktinformationen), können jedoch Geräte- oder Nutzungsinformationen enthalten, beispielsweise IP-Adresse, Browser- und Gerätemerkmale, Betriebssystem, bevorzugte Spracheinstellungen, verweisende URL, Gerätename, Land, Standort, Informationen wie und wann Sie unsere "), o("span", [this._v("Webseite")]), this._v(" nutzen, und weitere technische Daten. Diese Daten benötigen wir hauptsächlich, um die Sicherheit und Funktionsfähigkeit unserer "), o("span", [this._v("Webseite")]), this._v(" sicherzustellen, sowie für interne Analyse- und Reportingzwecke.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Wie viele andere Unternehmen, erheben wir Daten auch mithilfe von Cookies und ähnlichen Technologien. Weitere Hinweise dazu entnehmen Sie bitte unserer Cookie-Richtlinie: "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "http://www.pokemonkidswinterfest.com/cookies"
                        }
                    }, [o("span", [this._v("www.pokemonkidswinterfest.de/cookies")])]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("ul", [o("li", [o("i", [this._v("Protokoll- und Nutzungsdaten")]), this._v(": Protokoll- und Nutzungsdaten sind angebotsbezogene, diagnostische und leistungsbezogene Daten, die unsere Server automatisch erfassen, wenn Sie auf unsere Webseite zugreifen oder sie nutzen. Diese Daten werden als Log-Dateien gespeichert. Abhängig davon, wie Sie mit uns interagieren, können zu diesen Protokolldaten Ihre IP-Adresse, Gerätedaten, Browsertyp, und Einstellungen und Informationen zu Ihrer Aktivität auf der Webseite (z. B. Datum/Zeitstempel zu Nutzung, angesehenen Seiten und Dateien, Suchen, und anderen Aktionen, beispielsweise genutzte Funktionen) sowie Geräte-Ereignisdaten (z. B. Systemaktivität, Fehlerberichte [auch „Crash Dump“ genannt] und Hardware-Einstellungen) zählen.")]), this._v(" "), o("li", [o("i", [this._v("Gerätedaten")]), this._v(":Wir erfassen Gerätedaten, beispielsweise Daten zu Ihrem Computer, Mobiltelefon, Tablet oder anderem Gerät mit dem Sie auf die "), o("span", [this._v("Webseite")]), this._v(" zugreifen. Abhängig vom genutzten Gerät können zu diesen Gerätedaten Informationen wie die IP-Adresse (oder der Proxy-Server), Anwendungskennnummern des Geräts, Standort, Browsertyp, Hardwaremodell, Internet-Anbieter und/oder Mobilfunkanbieter, und Information zur Konfiguration des Betriebssystems zählen.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("Kurz gesagt")]), this._v(":"), o("i", [this._v(" Wir verarbeiten Ihre Daten für Zwecke basierend auf unseren berechtigten Geschäftsinteressen, zur Erfüllung unseres Vertrags mit Ihnen, zur Einhaltung unserer rechtlichen Pflichten und/oder ausgehend von Ihrer Zustimmung zu dieser Verarbeitung.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Die erfassten oder erhaltenen Daten nutzen wir:"), o("span", [o("br")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("ul", [o("li", [this._v("Zur Verwaltung von Benutzerkonten. Wir nutzen Ihre Daten, um Ihr Konto zu verwalten und seine Funktionsfähigkeit zu gewährleisten."), o("span", [o("br")])]), this._v(" "), o("li", [this._v("Zum Schutz unserer Angebote. Wir nutzen Ihre Daten als Teil unserer Bemühungen, unsere Webseite zu schützen (z. B. zur Bekämpfung von und Schutz vor Betrug).")]), this._v(" "), o("li", [this._v("Wir nutzen Ihre Daten, um unsere Bedingungen und Richtlinien für Geschäftszwecke durchzusetzen, um gesetzliche und aufsichtsrechtliche Anforderungen zu erfüllen, oder in Verbindung mit unserem Vertrag.")]), this._v(" "), o("li", [this._v("Wir nutzen Ihre Daten, um auf gerichtliche Anfragen zu antworten und Schaden zu verhindern. Sollten wir eine Vorladung oder andere gerichtliche Anfrage erhalten, so müssen wir möglicherweise die vorliegenden Daten überprüfen, um angemessen zu reagieren.")])])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("table", {
                        attrs: {
                            cellspacing: "0",
                            cellpadding: "0"
                        }
                    }, [n("tbody", [n("tr", [n("td", [n("p", [e._v("Erfasste Daten")])]), e._v(" "), n("td", [n("p", [e._v("Verwendung")])])]), e._v(" "), n("tr", [n("td", [n("p", [e._v("Spitzname")])]), e._v(" "), n("td", [n("p", [e._v("Wird verwendet für Bestenlisten und Trainerprofil.")])])]), e._v(" "), n("tr", [n("td", [n("p", [e._v("Spieldaten")])]), e._v(" "), n("td", [n("p", [e._v("Werden verwendet, damit Ihr Spielfortschritt erfolgreich gespeichert wird und Sie jederzeit dort weitermachen können, wo Sie aufgehört haben.")])])]), e._v(" "), n("tr", [n("td", [n("p", [e._v("Analysedaten")])]), e._v(" "), n("td", [n("p", [e._v("Werden verwendet, um die Leistung der Webseite zu überwachen und weiter zu verbessern.")])])])])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("Kurz gesagt: Wir teilen Daten ausschließlich mit Ihrer Einwilligung, um Gesetze einzuhalten, um Ihnen Angebote bereitzustellen, um Ihre Rechte zu schützen, oder um geschäftlichen Verpflichtungen nachzukommen. Ihre Daten werden ausschließlich intern verwendet und Details niemals an Dritte weitergegeben.")])])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("ul", [n("li", [n("i", [e._v("Einwilligung")]), e._v(": Wir verarbeiten Ihre Daten, wenn Sie dieser Verarbeitung zu einem bestimmten Zweck explizit zustimmen.")]), e._v(" "), n("li", [n("span", [n("i", [e._v("Berechtigte Interessen")]), e._v(": Wir verarbeiten Ihre Daten, soweit dies vernünftigerweise notwendig ist um unseren berechtigten Geschäftsinteressen nachzukommen. ")]), e._v("Wir teilen Ihre Daten, insofern wir dies für notwendig halten, um einen möglichen Verstoß gegen unsere Richtlinien, einen Betrugsverdacht, Situationen potentieller Bedrohung für die Sicherheit einer Person, sowie illegale Aktivitäten zu untersuchen, zu verhindern oder dagegen vorzugehen. Weiterhin verwenden wir Ihre Daten ggf. in einem Rechtsstreit in den wir verwickelt sind.")]), e._v(" "), n("li", [n("i", [e._v("Erfüllung eines Vertrags")]), e._v(": Falls wir einen Vertrag mit Ihnen abgeschlossen haben, verwenden wir Ihre personenbezogenen Daten, um diesen Vertrag zu erfüllen.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("ul", [o("li", [o("i", [this._v("Geschäftliche Zwecke")]), this._v(": Falls wir einen Vertrag mit dritten Verkäufern, Beratern und anderen Dienstleistern geschlossen haben, die für uns arbeiten und auf Ihre personenbezogenen Daten zugreifen müssen, um diese Arbeit auszuführen. Dazu zählen auch Geschäftszwecke, die Zugang zu unseren Systemen erfordern, auf denen personenbezogene Daten gespeichert sind (z. B. zur Bereitstellung eines Cloud-Speichers, zur Gewährleistung der Sicherheit unserer Systeme, und zur Bereitstellung eines Kundendienstes).")]), this._v(" "), o("li", [o("i", [this._v("Rechtliche Verpflichtungen")]), this._v(": Wir geben Ihre Daten weiter insofern wir rechtlich dazu verpflichtet sind oder dies zur Einhaltung eines geltenden Gesetzes, einer behördlichen Anfrage, eines Gerichtsverfahrens, oder einer gerichtlichen Anordnung oder Vorladung (einschließlich Anfragen einer Behörde zu Belangen der nationalen Sicherheit oder der Strafverfolgung) notwendig ist.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("ul", [o("li", [o("i", [this._v("Transfergeschäfte")]), this._v(": Wir teilen oder übermitteln Ihre Daten ggf. im Zusammenhang mit oder während den Verhandlungen zu einer Firmenfusion, dem Verkauf von Geschäftsvermögen, Finanzierungen, oder dem teilweisen oder gänzlichen Erwerb unserer Gesellschaft durch ein anderes Unternehmen.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("Kurz gesagt")]), this._v(":"), o("i", [this._v(" Wir verwenden Cookies und sonstige Tracking-Technologien, um Ihre Daten zu erfassen und zu speichern.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Wir verwenden Cookies und ähnliche Tracking-Technologien (wie Web-Beacons oder Zählpixel) um auf Daten zuzugreifen und sie zu speichern. Genaue Informationen darüber, wie wir solche Technologien nutzen und wie Sie der Verwendung von bestimmten Cookies widersprechen können, finden Sie in unserer Cookie-Richtlinie: "), o("span", [this._v("www.pokemonkidswinterfest.de/cookies")]), o("span", [this._v(".")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("Kurz gesagt")]), this._v(":"), o("i", [this._v(" Wir übermitteln, speichern oder verarbeiten Ihre Daten ggf. in anderen Ländern als dem Ihres Wohnorts.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("Kurz gesagt")]), this._v(":"), o("i", [this._v(" Wir bewahren Ihre Daten so lange auf, wie sie für die Erfüllung der in dieser Datenschutzerklärung angeführten Zwecke erforderlich sind, soweit keine abweichenden Bestimmungen gesetzlich vorgeschrieben sind.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Wir bewahren Ihre personenbezogenen Daten nur so lange auf, wie dies für die in dieser Datenschutzerklärung aufgeführten Zwecke notwendig ist und falls nicht eine längere Aufbewahrungsfrist gesetzlich gefordert oder erlaubt ist (z. B. für Buchhaltung, steuerrechtliche Belange oder andere gesetzliche Anforderungen). Kein Verwendungszweck in dieser Richtlinie erfordert es, Ihre personenbezogenen Daten länger als "), o("span", [this._v("sechs (6) Monate nach dem Zeitpunkt, an dem Sie Ihr Benutzerkonto zuletzt genutzt haben, aufzubewahren")]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("Kurz gesagt")]), this._v(": "), o("i", [this._v("Unser Ziel ist es, Ihre personenbezogenen Daten mit einem System aus organisatorischen und technischen Sicherheitsmaßnahmen zu schützen.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("Kurz gesagt")]), this._v(":"), o("i", [this._v(" Sie können Ihr Konto jederzeit einsehen, verändern oder kündigen. Sie haben ein „Recht auf Vergessenwerden“ und können Ihre Einwilligung zu der Nutzung Ihrer Daten jederzeit widerrufen.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Wenn Sie im europäischen Wirtschaftsraum ansässig sind und denken, dass wir Ihre personenbezogenen Daten unrechtmäßig verarbeiten, dann haben Sie das Recht Beschwerde bei Ihrer Aufsichtsbehörde für Datenschutz einzulegen. Die entsprechenden Kontaktinformationen finden Sie hier: "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                        }
                    }, [o("span", [this._v("http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm")])]), o("span", [this._v(".")])])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("ul", [n("li", [e._v("Sie haben das Recht, darüber informiert zu werden, wie wir Ihre Daten verwenden.")]), e._v(" "), n("li", [e._v("Sie haben das Recht, von Pokémon den Zugriff zu und die Berichtigung oder Löschung von personenbezogenen Daten zu verlangen. Sie haben außerdem ein Recht auf Datenübertragbarkeit und das Recht, Anweisungen zu der Verwendung und Bekanntgabe Ihrer personenbezogene Daten nach Ihrem Tod zu geben.")]), e._v(" "), n("li", [e._v("Sie haben ferner ein Widerspruchsrecht, können also der Verarbeitung Ihrer personenbezogenen Daten widersprechen oder unter bestimmten Umständen die Einschränkung dieser Verarbeitung verlangen.")]), e._v(" "), n("li", [e._v("Sie haben das Recht, Ihre personenbezogene Daten an eine andere Organisation übertragen zu lassen, sofern dies Pokémon technisch möglich ist.")]), e._v(" "), n("li", [e._v("Falls die Verarbeitung Ihrer personenbezogenen Daten auf Ihrer Zustimmung beruht, haben Sie das Recht zum jederzeitigen Widerruf einer Einwilligung (wovon die Rechtmäßigkeit der Verarbeitung bis zum Widerruf unberührt bleibt).")]), e._v(" "), n("li", [e._v("Es kann unter Umständen Ausnahmen zu diesen Rechten geben. Falls Sie aufgrund einer Ausnahme nicht von einem Recht Gebrauch machen können, werden wir eine entsprechende Erklärung liefern.")]), e._v(" "), n("li", [e._v("Sie haben ein Recht auf Beschwerde bei einer Aufsichtsbehörde. Wenn Sie im europäischen Wirtschaftsraum (EWR) ansässig sind und denken, dass wir Datenschutzrechte nicht eingehalten haben, können Sie sich bei Ihrer Aufsichtsbehörde für Datenschutz beschweren. Wir würden Sie jedoch bitten Pokémon direkt zu kontaktieren und uns die Möglichkeit zu geben, auf Ihre Bedenken einzugehen.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Wenn Sie in der Schweiz wohnen, finden Sie die Kontaktinformationen für Ihre Aufsichtsbehörde hier: "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "https://www.edoeb.admin.ch/edoeb/en/home.html"
                        }
                    }, [o("span", [this._v("https://www.edoeb.admin.ch/edoeb/de/home.html")])]), o("span", [this._v(".")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Falls Sie Fragen oder Kommentare zu Ihren Datenschutzrechten haben, schicken Sie uns eine E-Mail an "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [o("span", [this._v("support@pokemonkidswinterfest.com")])]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("span", [o("span"), this._v("■")]), this._v("Nutzen Sie die angegebenen Kontaktdaten, um uns zu kontaktieren.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("span", [this._v("Cookies und ähnliche Technologien:")]), this._v(" Die meisten Internet-Browser sind so eingestellt, dass Cookies automatisch akzeptiert werden. Sollten Sie dies nicht wünschen, können Sie Ihren Browser so einstellen, dass Cookies entfernt und nicht akzeptiert werden. Wenn Sie sich dafür entscheiden, Cookies zu entfernen oder nicht zu akzeptieren, kann dies gewisse Funktionen oder Leistungen unserer Webseite beeinflussen.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("Kurz gesagt")]), this._v(":"), o("i", [this._v(" Ja, wenn Sie Ihren Wohnsitz in Kalifornien haben, erhalten Sie spezielle Rechte die den Zugriff auf Ihre personenbezogenen Daten betreffen.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("Kurz gesagt")]), this._v(":"), o("i", [this._v(" Ja, wir werden diese Hinweise soweit nötig anpassen, um auch weiterhin relevante Gesetze einzuhalten.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Falls Sie Fragen oder Kommentare zu dieser Datenschutzerklärung haben, schicken Sie uns eine E-Mail an "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [o("span", [this._v("support@pokemonkidswinterfest.com")])]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("In Abhängigkeit des anzuwendenden Rechts Ihres Landes, haben Sie unter Umständen das Recht, die über Sie erhobenen Daten einzusehen, diese zu ändern, oder sie zu löschen. Bitte stellen Sie einen Antrag per E-Mail an "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [o("span", [this._v("support@pokemonkidswinterfest.com")])]), this._v(", um Ihre personenbezogenen Daten einzusehen, zu aktualisieren oder zu löschen. Wir werden innerhalb von 30 Tagen auf Ihren Antrag reagieren.")])
                }], !1, null, null, null).exports,
                w = {
                    props: ["content"],
                    methods: {
                        scrollMeTo: function(e) {
                            var o = this.$refs[e].offsetTop;
                            document.getElementById("privacy").scrollTop = o
                        }
                    }
                },
                k = Object(r.a)(w, (function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("div", [n("p", [e._v("PRIVACY POLICY")]), e._v(" "), e._m(0), e._v(" "), e._m(1), e._v(" "), n("p", [e._v("This privacy notice applies to all information collected through our Services (which, as described above, includes our Website), as well as any related services, sales, marketing, or events.")]), e._v(" "), n("p", [e._v("Please read this privacy notice carefully as it will help you understand what we do with the information that we collect.")]), e._v(" "), n("p", [e._v("TABLE OF CONTENTS")]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T1")
                            }
                        }
                    }, [e._v("1. WHAT INFORMATION DO WE COLLECT?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T2")
                            }
                        }
                    }, [e._v("2. HOW DO WE USE YOUR INFORMATION?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T3")
                            }
                        }
                    }, [e._v("3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T4")
                            }
                        }
                    }, [e._v("4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T5")
                            }
                        }
                    }, [e._v("5. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T6")
                            }
                        }
                    }, [e._v("6. HOW LONG DO WE KEEP YOUR INFORMATION?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T7")
                            }
                        }
                    }, [e._v("7. HOW DO WE KEEP YOUR INFORMATION SAFE?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T8")
                            }
                        }
                    }, [e._v("8. WHAT ARE YOUR PRIVACY RIGHTS?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T9")
                            }
                        }
                    }, [e._v("9. CONTROLS FOR DO-NOT-TRACK FEATURES")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T10")
                            }
                        }
                    }, [e._v("10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T11")
                            }
                        }
                    }, [e._v("11. DO WE MAKE UPDATES TO THIS NOTICE?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T12")
                            }
                        }
                    }, [e._v("12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?")])])]), e._v(" "), n("p", {
                        ref: "T1"
                    }, [e._v("1. WHAT INFORMATION DO WE COLLECT?")]), e._v(" "), n("p", [e._v("Information automatically collected")]), e._v(" "), e._m(2), e._v(" "), e._m(3), e._v(" "), e._m(4), e._v(" "), e._m(5), e._v(" "), n("p", [e._v("The information we collect includes the following:")]), e._v(" "), e._m(6), e._v(" "), n("p", {
                        ref: "T2"
                    }, [e._v("2. HOW DO WE USE YOUR INFORMATION?")]), e._v(" "), e._m(7), e._v(" "), n("p", [e._v("We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.")]), e._v(" "), e._m(8), e._v(" "), e._m(9), e._v(" "), n("p", [e._v("Here is the list of data we collect and its usage:")]), e._v(" "), e._m(10), e._v(" "), n("p", {
                        ref: "T3"
                    }, [e._v("3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?")]), e._v(" "), e._m(11), e._v(" "), n("p", [e._v("We may process or share your data that we hold based on the following legal basis:")]), e._v(" "), e._m(12), e._v(" "), e._m(13), e._v(" "), n("p", [e._v("More specifically, we may need to process your data or share your personal information in the following situations:")]), e._v(" "), e._m(14), e._v(" "), n("p", {
                        ref: "T4"
                    }, [e._v("4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?")]), e._v(" "), e._m(15), e._v(" "), e._m(16), e._v(" "), n("p", {
                        ref: "T5"
                    }, [e._v("5. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?")]), e._v(" "), e._m(17), e._v(" "), n("p", [e._v("Our servers are located in Europe. If you are accessing our Website from outside, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal information (see “"), n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T3")
                            }
                        }
                    }, [n("span", [e._v("WILL YOUR INFORMATION BE SHARED WITH ANYONE?")])]), e._v("” above), in and other countries.")]), e._v(" "), n("p", [e._v("If you are a resident of the European Economic Area, then these countries may not necessarily have data-protection laws or other similar laws as comprehensive as those in your country. We will however take all necessary measures to protect your personal information in accordance with this privacy notice and applicable law.")]), e._v(" "), n("p", {
                        ref: "T6"
                    }, [e._v("6. HOW LONG DO WE KEEP YOUR INFORMATION?")]), e._v(" "), e._m(18), e._v(" "), e._m(19), e._v(" "), n("p", [e._v("When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.")]), e._v(" "), n("p", {
                        ref: "T7"
                    }, [e._v("7. HOW DO WE KEEP YOUR INFORMATION SAFE?")]), e._v(" "), e._m(20), e._v(" "), n("p", [e._v("We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the internet or information-storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Website is at your own risk. You should access the Website only within a secure environment.")]), e._v(" "), n("p", {
                        ref: "T8"
                    }, [e._v("8. WHAT ARE YOUR PRIVACY RIGHTS?")]), e._v(" "), e._m(21), e._v(" "), e._m(22), e._v(" "), n("p", [e._v("For European Economic Area residents, you also have the following rights:")]), e._v(" "), e._m(23), e._v(" "), e._m(24), e._v(" "), e._m(25), e._v(" "), n("p", [e._v("Account Information")]), e._v(" "), n("p", [e._v("If you would at any time like to review or change the information in your account or terminate your account, you can do the following:")]), e._v(" "), e._m(26), e._v(" "), n("p", [e._v("Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms and Conditions, and/or comply with applicable legal requirements.")]), e._v(" "), e._m(27), e._v(" "), n("p", [e._v("If you decide you do not want to accept cookies, then you can still access the Website in a limited “Guest Mode”, where certain functionality will be disabled to ensure you still have an enjoyable experience.")]), e._v(" "), n("p", {
                        ref: "T9"
                    }, [e._v("9. CONTROLS FOR DO-NOT-TRACK FEATURES")]), e._v(" "), n("p", [e._v("Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.")]), e._v(" "), n("p", {
                        ref: "T10"
                    }, [e._v("10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?")]), e._v(" "), e._m(28), e._v(" "), n("p", [e._v("We do not sell your personal information as defined by the CCPA and have not done so in the past 12 months.")]), e._v(" "), n("p", [e._v("California Civil Code Section 1798.83, also known as the “Shine The Light” law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.")]), e._v(" "), n("p", [e._v("You have a right not to be discriminated against for exercising any of these rights.")]), e._v(" "), n("p", [e._v("If you are under 18 years of age, reside in California, and have a registered account with the Website, you have the right to request removal of unwanted data that you publicly post on the Website. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Website, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g. backups, etc.).")]), e._v(" "), n("p", {
                        ref: "T11"
                    }, [e._v("11. DO WE MAKE UPDATES TO THIS NOTICE?")]), e._v(" "), e._m(29), e._v(" "), n("p", [e._v("We may update this privacy notice from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.")]), e._v(" "), n("p", {
                        ref: "T12"
                    }, [e._v("12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?")]), e._v(" "), e._m(30), e._v(" "), n("p", [e._v("HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?")]), e._v(" "), e._m(31)])
                }), [function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Thank you for choosing to be part of our community at The Pokémon Company International, Inc. (“Company”, “we”, “us”, or “our”). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [o("span", [this._v("support@pokemonkidswinterfest.com")])]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("When you visit our website "), o("span", [this._v("www.pokemonkidswinterfest.com")]), this._v(" (the “Website”), and more generally, use any of our services (the “Services”, which include the Website), we appreciate that you are trusting us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("In Short: Some information—such as your internet protocol (IP) address and/or browser and device characteristics—is collected automatically when you visit our ")]), o("span", [o("i", [this._v("Website")])]), o("i", [this._v(". We do not collect email addresses or other personal information other than your chosen Nickname and game progress.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("b", [o("i", [this._v("What Is Personal Information?")])]), o("i", [o("br")]), this._v("Personal data is all kind of information directly or indirectly identifying a physical person being alive. This means that, for example, name, address and phone number but also log data and encrypted data and other types of electronic IDs (e.g. IP addresses) are personal data in the event they can be connected to a physical person being alive.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("We automatically collect certain information when you visit, use, or navigate the "), o("span", [this._v("Website")]), this._v(". This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about who and when you use our "), o("span", [this._v("Website,")]), this._v(" and other technical information. This information is primarily needed to maintain the security and operation of our "), o("span", [this._v("Website")]), this._v(" and for our internal analytics and reporting purposes.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Like many businesses, we also collect information through cookies and similar technologies. You can find out more about this in our Cookie Policy: "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "http://www.pokemonkidswinterfest.com/cookies"
                        }
                    }, [o("span", [this._v("www.pokemonkidswinterfest.com/cookies")])]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("ul", [o("li", [o("i", [this._v("Log and Usage Data")]), this._v(": Log and usage data is service-related, diagnostic-usage and performance information that our servers automatically collect when you access or use our Website and that we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Website (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take, such as which features you use), device event information (such as system activity, error reports [sometimes called “crash dumps”] and hardware settings).")]), this._v(" "), o("li", [o("i", [this._v("Device Data")]), this._v(":We collect device data, such as information about your computer, phone, tablet, or other device you use to access the "), o("span", [this._v("Website")]), this._v(". Depending on the device used, this device data may include information such as your IP address (or proxy server), device application identification numbers, location, browser type, hardware model, internet service provider and/or mobile carrier, and operating system configuration information.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("In Short")]), this._v(":"), o("i", [this._v(" We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("We use the information we collect or receive:"), o("span", [o("br")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("ul", [o("li", [this._v("To manage user accounts. We may use your information for the purposes of managing our account and keeping it in working order."), o("span", [o("br")])]), this._v(" "), o("li", [this._v("To protect our Services. We may use your information as part of our efforts to keep our Website safe and secure (for example, for fraud monitoring and prevention).")]), this._v(" "), o("li", [this._v("To enforce our terms, conditions, and policies for business purposes, to comply with legal and regulatory requirements, or in connection with our contract.")]), this._v(" "), o("li", [this._v("To respond to legal requests and prevent harm. If we receive a subpoena or other legal request, we may need to inspect the data we hold to determine how to respond.")])])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("table", {
                        attrs: {
                            cellspacing: "0",
                            cellpadding: "0"
                        }
                    }, [n("tbody", [n("tr", [n("td", [n("p", [e._v("Data Collected")])]), e._v(" "), n("td", [n("p", [e._v("Usage")])])]), e._v(" "), n("tr", [n("td", [n("p", [e._v("Nickname")])]), e._v(" "), n("td", [n("p", [e._v("Used in leaderboards and Trainer profile.")])])]), e._v(" "), n("tr", [n("td", [n("p", [e._v("Game Data")])]), e._v(" "), n("td", [n("p", [e._v("Used to ensure your game progress is successfully saved so you can return and carry on where you last left.")])])]), e._v(" "), n("tr", [n("td", [n("p", [e._v("Analytics Data")])]), e._v(" "), n("td", [n("p", [e._v("Used to monitor the Website’s performance so we can make any adjustments to further improve your experience.")])])])])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("In Short: We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We will only use your data internally and will never pass any details to third parties.")])])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("ul", [n("li", [n("i", [e._v("Consent")]), e._v(": We may process your data if you have given us specific consent to use your personal information in a specific purpose.")]), e._v(" "), n("li", [n("span", [n("i", [e._v("Legitimate Interests")]), e._v(": We may process your data when it is reasonably necessary to achieve our legitimate business interests. ")]), e._v("We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.")]), e._v(" "), n("li", [n("i", [e._v("Performance of a Contract")]), e._v(": Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("ul", [o("li", [o("i", [this._v("Business Purposes")]), this._v(": Where we have entered into a contract with third-party vendors, consultants, and other service providers who work for us and need to access your personal information to do that work, including for business purposes that require access to our systems that hold personal information (such as supplying cloud data storage, maintaining the security of our systems, and providing customer support).")]), this._v(" "), o("li", [o("i", [this._v("Legal Obligations")]), this._v(": We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("ul", [o("li", [o("i", [this._v("Business Transfers")]), this._v(": We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("In Short")]), this._v(":"), o("i", [this._v(" We may use cookies and other tracking technologies to collect and store your information.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy: "), o("span", [this._v("www.pokemonkidswinterfest.com/cookies")]), o("span", [this._v(".")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("In Short")]), this._v(":"), o("i", [this._v(" We may transfer, store, and process your information in countries other than your own.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("In Short")]), this._v(":"), o("i", [this._v(" We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than "), o("span", [this._v("six (6) months past the start of idle period of the user’s account")]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("In Short")]), this._v(": "), o("i", [this._v("We aim to protect your personal information through a system of organizational and technical security measures.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("In Short")]), this._v(":"), o("i", [this._v(" You may review, change, or terminate your account at any time. You have the “right to be forgotten” and can remove your consent to use your data at any time.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("If you are resident of the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data-protection supervisory authority. You can find their contact details here: "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                        }
                    }, [o("span", [this._v("http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm")])]), o("span", [this._v(".")])])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("ul", [n("li", [e._v("A right to be informed of the ways in which we use your information.")]), e._v(" "), n("li", [e._v("A right to request from Pokémon access to and rectification or erasure of personal information, and certain rights to data portability, and the right to give instructions concerning the use and disclosure of your personal data after your death.")]), e._v(" "), n("li", [e._v("A right to object to the processing of your personal information or obtain a restriction of such processing under certain circumstances.")]), e._v(" "), n("li", [e._v("A right to have your personal data transferred to another organization should it be technically feasible for Pokémon to do so.")]), e._v(" "), n("li", [e._v("If the processing of personal data is based on your consent, a right to withdraw consent at any time (without affecting the lawfulness of processing before its withdrawal).")]), e._v(" "), n("li", [e._v("There may be exceptions to these rights in certain circumstances, and where you cannot exercise a right due to an exception, we will provide that explanation.")]), e._v(" "), n("li", [e._v("A right to bring your complaint to a regulator. If you are based in the European Economic Area (EEA) and believe that we have not complied with data protection laws, you can complain to the local data-protection authority; however, we would appreciate it if you would give Pokémon the chance to deal with your concerns directly by contacting us.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("If you are resident of Switzerland, the contact details for the data-protection authorities are available here: "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "https://www.edoeb.admin.ch/edoeb/en/home.html"
                        }
                    }, [o("span", [this._v("https://www.edoeb.admin.ch/edoeb/en/home.html")])]), o("span", [this._v(".")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("If you have questions or comments about your privacy rights, you may email us at "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [o("span", [this._v("support@pokemonkidswinterfest.com")])]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("span", [o("span"), this._v("■")]), this._v("Contact us using the contact information provided.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("span", [this._v("Cookies and similar technologies:")]), this._v(" Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Website.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("In Short")]), this._v(":"), o("i", [this._v(" Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("In Short")]), this._v(":"), o("i", [this._v(" Yes, we will update this notice as necessary to stay compliant with relevant laws.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("If you have questions or comments about this notice, you may email us at "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [o("span", [this._v("support@pokemonkidswinterfest.com")])]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please submit a request form by emailing "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [o("span", [this._v("support@pokemonkidswinterfest.com")])]), this._v(". We will respond to your request within 30 days.")])
                }], !1, null, null, null).exports,
                y = {
                    props: ["content"],
                    methods: {
                        scrollMeTo: function(e) {
                            var o = this.$refs[e].offsetTop;
                            document.getElementById("privacy").scrollTop = o
                        }
                    }
                },
                I = Object(r.a)(y, (function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("div", [n("p", [e._v("POLÍTICA DE PRIVACIDAD")]), e._v(" "), e._m(0), e._v(" "), e._m(1), e._v(" "), e._m(2), e._v(" "), n("p", [e._v("Por favor, lea atentamente este aviso de privacidad, ya que le ayudará a entender lo que hacemos con la información que recopilamos.")]), e._v(" "), n("p", [e._v("ÍNDICE")]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T1")
                            }
                        }
                    }, [e._v("1. ¿QUÉ INFORMACIÓN RECOPILAMOS?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T2")
                            }
                        }
                    }, [e._v("2. ¿CÓMO UTILIZAMOS SU INFORMACIÓN?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T3")
                            }
                        }
                    }, [e._v("3. ¿COMPARTIREMOS CON ALGUIEN SU INFORMACIÓN?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T4")
                            }
                        }
                    }, [e._v("4. ¿UTILIZAMOS "), n("i", [e._v("COOKIES ")]), e._v("Y OTRAS TECNOLOGÍAS DE SEGUIMIENTO?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T5")
                            }
                        }
                    }, [e._v("5. ¿SE TRANSFIERE SU INFORMACIÓN A ESCALA INTERNACIONAL?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T6")
                            }
                        }
                    }, [e._v("6. ¿DURANTE CUÁNTO TIEMPO GUARDAMOS SU INFORMACIÓN?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T7")
                            }
                        }
                    }, [e._v("7. ¿CÓMO MANTENEMOS LA SEGURIDAD DE SU INFORMACIÓN?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T8")
                            }
                        }
                    }, [e._v("8. ¿CUÁLES SON SUS DERECHOS DE PRIVACIDAD?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T9")
                            }
                        }
                    }, [e._v("9. CONTROL DE LAS FUNCIONES «DO NOT TRACK»")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T10")
                            }
                        }
                    }, [e._v("10. ¿DISFRUTAN LOS RESIDENTES DEL ESTADO DE CALIFORNIA DE UNOS DERECHOS DE PRIVACIDAD ESPECÍFICOS?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T11")
                            }
                        }
                    }, [e._v("11. ¿REALIZAMOS ACTUALIZACIONES DE ESTE AVISO?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T12")
                            }
                        }
                    }, [e._v("12. ¿CÓMO PUEDE PONERSE EN CONTACTO CON NOSOTROS A PROPÓSITO DE ESTE AVISO?")])])]), e._v(" "), n("p", {
                        ref: "T1"
                    }, [e._v("1. ¿QUÉ INFORMACIÓN RECOPILAMOS?")]), e._v(" "), n("p", [e._v("Información recopilada automáticamente")]), e._v(" "), e._m(3), e._v(" "), e._m(4), e._v(" "), e._m(5), e._v(" "), e._m(6), e._v(" "), n("p", [e._v("Entre la información que recopilamos se incluye la siguiente:")]), e._v(" "), e._m(7), e._v(" "), n("p", {
                        ref: "T2"
                    }, [e._v("2. ¿CÓMO UTILIZAMOS SU INFORMACIÓN?")]), e._v(" "), e._m(8), e._v(" "), n("p", [e._v("Utilizamos la información personal recopilada a través de nuestro Sitio web para diferentes fines comerciales que se describen a continuación. Procesamos su información personal para estos fines basándonos en nuestros intereses comerciales legítimos, con el fin de suscribir o cumplir un contrato con usted, con su consentimiento o para el cumplimiento de nuestras obligaciones legales. Indicamos los motivos de procesamiento específicos en los que nos basamos junto a cada uno de los fines enumerados a continuación.")]), e._v(" "), e._m(9), e._v(" "), e._m(10), e._v(" "), n("p", [e._v("Estos son los datos que recopilamos y su uso:")]), e._v(" "), e._m(11), e._v(" "), n("p", {
                        ref: "T3"
                    }, [e._v("3. ¿COMPARTIREMOS CON ALGUIEN SU INFORMACIÓN?")]), e._v(" "), e._m(12), e._v(" "), n("p", [e._v("Puede que procesemos o compartamos los datos de que disponemos basándonos en el fundamento legal siguiente:")]), e._v(" "), e._m(13), e._v(" "), e._m(14), e._v(" "), n("p", [e._v("Más concretamente, puede que necesitemos procesar sus datos o compartir su información personal en las siguientes situaciones:")]), e._v(" "), e._m(15), e._v(" "), n("p", {
                        ref: "T4"
                    }, [e._v("4. ¿UTILIZAMOS "), n("i", [e._v("COOKIES ")]), e._v("Y OTRAS TECNOLOGÍAS DE SEGUIMIENTO?")]), e._v(" "), e._m(16), e._v(" "), e._m(17), e._v(" "), n("p", {
                        ref: "T5"
                    }, [e._v("5. ¿SE TRANSFIERE SU INFORMACIÓN A ESCALA INTERNACIONAL?")]), e._v(" "), e._m(18), e._v(" "), n("p", [e._v("Nuestros servidores están ubicados en Europa. Si accede a nuestro Sitio web desde el exterior, tenga en cuenta que su información puede ser transferida, guardada y procesada por nosotros en nuestras instalaciones y por aquellos terceros con los que podamos compartir su información personal (véase el apartado «"), n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T3")
                            }
                        }
                    }, [n("span", [e._v("¿COMPARTIREMOS CON ALGUIEN SU INFORMACIÓN?")])]), e._v("» anterior) en y en otros países.")]), e._v(" "), n("p", [e._v("Si es residente del Espacio Económico Europeo, es posible que estos países no cuenten necesariamente con leyes de protección de datos u otras leyes similares tan completas como las de su país. Adoptaremos, no obstante, todas las medidas necesarias para proteger su información personal de acuerdo con este aviso de privacidad y con la legislación aplicable.")]), e._v(" "), n("p", {
                        ref: "T6"
                    }, [e._v("6. ¿DURANTE CUÁNTO TIEMPO GUARDAMOS SU INFORMACIÓN?")]), e._v(" "), e._m(19), e._v(" "), e._m(20), e._v(" "), n("p", [e._v("Cuando no tengamos ninguna necesidad comercial legítima actual de procesar su información personal, eliminaremos o anonimizaremos dicha información o, si no es posible hacerlo (por ejemplo, porque su información personal se ha guardado en archivos de copia de seguridad), guardaremos de forma segura su información personal y la aislaremos de cualquier procesamiento posterior hasta que sea posible su eliminación.")]), e._v(" "), n("p", {
                        ref: "T7"
                    }, [e._v("7. ¿CÓMO MANTENEMOS LA SEGURIDAD DE SU INFORMACIÓN?")]), e._v(" "), e._m(21), e._v(" "), e._m(22), e._v(" "), n("p", {
                        ref: "T8"
                    }, [e._v("8. ¿CUÁLES SON SUS DERECHOS DE PRIVACIDAD?")]), e._v(" "), e._m(23), e._v(" "), e._m(24), e._v(" "), n("p", [e._v("Los residentes del Espacio Económico Europeo tienen también los siguientes derechos:")]), e._v(" "), e._m(25), e._v(" "), e._m(26), e._v(" "), e._m(27), e._v(" "), n("p", [e._v("Información de la cuenta")]), e._v(" "), n("p", [e._v("Si en cualquier momento desea revisar o modificar la información de su cuenta o cancelar su cuenta, puede hacer lo siguiente:")]), e._v(" "), e._m(28), e._v(" "), n("p", [e._v("Tras solicitar la cancelación de su cuenta, desactivaremos o eliminaremos su cuenta y la información de nuestras bases de datos activas. Sin embargo, puede que conservemos cierta información en nuestros archivos para evitar fraudes, solucionar problemas, ayudar en cualquier investigación, hacer cumplir nuestros Términos y condiciones o cumplir con los requisitos legales aplicables.")]), e._v(" "), e._m(29), e._v(" "), e._m(30), e._v(" "), n("p", {
                        ref: "T9"
                    }, [e._v("9. CONTROL DE LAS FUNCIONES «DO NOT TRACK»")]), e._v(" "), n("p", [e._v("La mayoría de los navegadores web y algunos sistemas operativos y aplicaciones móviles incluyen una función de no seguimiento (Do Not Track o «DNT») o una configuración que puede activar para indicar su preferencia de privacidad de que no se supervisen ni se recopilen datos sobre sus actividades de navegación en línea. Por el momento, no se ha ultimado ninguna norma tecnológica uniforme para el reconocimiento y la aplicación de señales DNT. Por tanto, actualmente no respondemos a señales del navegador DNT o a cualquier otro mecanismo que comunique automáticamente su elección de que no se realice un seguimiento en línea. Si se adopta una norma para el seguimiento en línea que debamos seguir en el futuro, le informaremos sobre dicha práctica en una versión revisada de este aviso de privacidad.")]), e._v(" "), n("p", {
                        ref: "T10"
                    }, [e._v("10. ¿DISFRUTAN LOS RESIDENTES DEL ESTADO DE CALIFORNIA DE UNOS DERECHOS DE PRIVACIDAD ESPECÍFICOS?")]), e._v(" "), e._m(31), e._v(" "), n("p", [e._v("No vendemos su información personal según la definición de la CCPA y no lo hemos hecho en los últimos 12 meses.")]), e._v(" "), e._m(32), e._v(" "), n("p", [e._v("Tiene derecho a no ser discriminado por ejercer cualquiera de estos derechos.")]), e._v(" "), n("p", [e._v("Si es usted menor de 18 años, reside en California y tiene una cuenta registrada en el Sitio web, tiene derecho a solicitar la eliminación de los datos no deseados que publique en el Sitio web. Para solicitar la eliminación de dichos datos, póngase en contacto con nosotros utilizando la información de contacto indicada a continuación e incluya la dirección de correo electrónico asociada a su cuenta, así como una declaración de que reside en California. Nos aseguraremos de que los datos no se muestren públicamente en el Sitio web, pero tenga en cuenta que los datos no se pueden eliminar íntegramente o en su totalidad de todos nuestros sistemas (p. ej., copias de seguridad, etc.).")]), e._v(" "), n("p", {
                        ref: "T11"
                    }, [e._v("11. ¿REALIZAMOS ACTUALIZACIONES DE ESTE AVISO?")]), e._v(" "), e._m(33), e._v(" "), n("p", [e._v("Puede que actualicemos este aviso de privacidad cada cierto tiempo. La versión actualizada se indicará con una fecha «Revisada» actualizada y la versión actualizada entrará en vigor en cuanto esté accesible. Si realizamos cambios sustanciales en este aviso de privacidad, podemos notificárselo ya sea incluyendo un aviso de dichos cambios en un lugar destacado o enviándole directamente una notificación. Le animamos a revisar cada cierto tiempo este aviso de privacidad para estar informado de cómo estamos protegiendo su información.")]), e._v(" "), n("p", {
                        ref: "T12"
                    }, [e._v("12. ¿CÓMO PUEDE PONERSE EN CONTACTO CON NOSOTROS A PROPÓSITO DE ESTE AVISO?")]), e._v(" "), e._m(34), e._v(" "), n("p", [e._v("¿CÓMO PUEDE REVISAR, ACTUALIZAR O ELIMINAR LOS DATOS QUE RECOPILAMOS SOBRE USTED?")]), e._v(" "), e._m(35)])
                }), [function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Gracias por formar parte de la comunidad de The Pokémon Company International, Inc. («Empresa», «nosotros», «nos» o «nuestro/a»). Nos comprometemos a proteger su información personal y su derecho a la privacidad. Si tiene alguna pregunta o problema relacionados con este aviso de privacidad, o con nuestras prácticas respecto de su información personal, póngase en contacto con nosotros en "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [o("span", [this._v("support@pokemonkidswinterfest.com")])]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Al visitar nuestro sitio web "), o("span", [this._v("www.pokemonkidswinterfest.com")]), this._v(" (el «Sitio web») y, con carácter más general, al utilizar cualquiera de nuestros servicios (los «Servicios», que incluyen el Sitio web), le agradecemos que nos confíe su información personal. Nos tomamos su privacidad muy en serio. En este aviso de privacidad tratamos de explicarle de la manera más clara posible qué información recopilamos, cómo la utilizamos y qué derechos tiene en relación con ella. Esperamos que lo lea atentamente, ya que es importante. Si hay algún término en este aviso de privacidad con el que no esté de acuerdo, por favor deje de utilizar nuestros Servicios inmediatamente.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Este aviso de privacidad es aplicable a toda la información recopilada a través de nuestros Servicios (que, como se ha indicado anteriormente, incluye nuestro Sitio web), así como cualquier servicio, venta, acción de "), o("i", [this._v("marketing ")]), this._v("o evento relacionados.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En resumen: Cierta información —como su dirección IP o las características de su navegador y dispositivo— se recopila automáticamente cuando visita nuestro ")]), o("span", [o("i", [this._v("Sitio web")])]), o("i", [this._v(". No recopilamos direcciones de correo electrónico u otra información personal que no sea el alias elegido y el progreso del juego.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("b", [o("i", [this._v("¿Qué es información personal?")])]), o("br"), this._v("Los datos personales son todo tipo de información que identifique directa o indirectamente a una persona física que esté viva. Esto significa que, por ejemplo, el nombre, la dirección y el número de teléfono, pero también los datos de registro y los datos cifrados y otros tipos de identificadores electrónicos (p. ej., direcciones IP) son datos personales si están vinculados a una persona física que esté viva.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Recopilamos automáticamente cierta información cuando visita, utiliza o navega por el "), o("span", [this._v("Sitio web")]), this._v(". Esta información no revela su identidad específica (como su nombre o información de contacto), pero puede incluir información del dispositivo y de uso, como su dirección IP, las características del navegador y del dispositivo, el sistema operativo, las preferencias de idioma, la URL de referencia, el nombre del dispositivo, el país, la ubicación, la información sobre quién y cuándo utiliza nuestro "), o("span", [this._v("Sitio web,")]), this._v(" así como otra información técnica. Esta información se necesita principalmente para mantener la seguridad y el funcionamiento de nuestro "), o("span", [this._v("Sitio web")]), this._v(" y para fines internos de análisis y elaboración de informes.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Como muchas empresas, también recopilamos información a través de "), o("i", [this._v("cookies ")]), this._v("y tecnologías similares. Encontrará más información al respecto en nuestra Política de "), o("i", [this._v("cookies")]), this._v(": "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "http://www.pokemonkidswinterfest.com/cookies"
                        }
                    }, [o("span", [this._v("www.pokemonkidswinterfest.com/cookies")])]), this._v(".")])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("ul", [n("li", [n("i", [e._v("Datos de registro y de uso")]), e._v(": los datos de registro y de uso son información relacionada con el servicio, el diagnóstico de uso y el rendimiento que nuestros servidores recopilan automáticamente cuando accede o utiliza nuestro Sitio web y que almacenamos en archivos de registro. Dependiendo de cómo interactúe con nosotros, estos datos de registro pueden incluir su dirección IP, información del dispositivo, tipo de navegador y ajustes e información sobre su actividad en el Sitio web (como las marcas de fecha/hora asociadas a su uso, páginas y archivos vistos, búsquedas y otras acciones que realice como, por ejemplo, las funciones que utilice), información sobre eventos del dispositivo (p. ej., actividad del sistema, informes de errores [denominados en ocasiones "), n("i", [e._v("«crash dumps»")]), e._v("] y configuración del "), n("i", [e._v("hardware")]), e._v(").")]), e._v(" "), n("li", [n("i", [e._v("Datos del dispositivo")]), e._v(":Recopilamos datos del dispositivo, como información sobre su ordenador, teléfono, tableta u otro dispositivo que utilice para acceder al "), n("span", [e._v("Sitio web")]), e._v(". Dependiendo del dispositivo utilizado, estos datos del dispositivo pueden incluir información como su dirección IP (o servidor proxy), los números de identificación de la aplicación del dispositivo, la ubicación, el tipo de navegador, el modelo de "), n("i", [e._v("hardware")]), e._v(", el proveedor de servicios de internet o la compañía de telefonía móvil, además de información sobre la configuración del sistema operativo.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En resumen")]), this._v(":"), o("i", [this._v(" Procesamos su información con fines basados en intereses comerciales legítimos, el cumplimiento de nuestro contrato con usted, el cumplimiento de nuestras obligaciones legales o porque contamos con su consentimiento.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Utilizamos la información que recopilamos o recibimos:"), o("span", [o("br")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("ul", [o("li", [this._v("Para gestionar cuentas de usuario. Puede que utilicemos su información para gestionar nuestra cuenta y mantenerla operativa."), o("span", [o("br")])]), this._v(" "), o("li", [this._v("Para proteger nuestros Servicios. Puede que utilicemos su información como parte de nuestros esfuerzos por mantener nuestro Sitio web seguro y protegido (por ejemplo, para vigilar y evitar que se cometan fraudes).")]), this._v(" "), o("li", [this._v("Para hacer cumplir nuestros términos, condiciones y políticas con fines comerciales, para cumplir con los requisitos legales y reglamentarios o en relación con nuestro contrato.")]), this._v(" "), o("li", [this._v("Para responder a solicitudes legales y evitar daños. Si recibimos una citación u otra solicitud legal, es posible que tengamos que inspeccionar los datos de que disponemos para determinar cómo responder.")])])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("table", {
                        attrs: {
                            cellspacing: "0",
                            cellpadding: "0"
                        }
                    }, [n("tbody", [n("tr", [n("td", [n("p", [e._v("Datos recopilados")])]), e._v(" "), n("td", [n("p", [e._v("Uso")])])]), e._v(" "), n("tr", [n("td", [n("p", [e._v("Alias")])]), e._v(" "), n("td", [n("p", [e._v("Se utiliza en tablas de clasificación en el perfil «Entrenador».")])])]), e._v(" "), n("tr", [n("td", [n("p", [e._v("Datos del juego")])]), e._v(" "), n("td", [n("p", [e._v("Se utilizan para garantizar que el progreso del juego se guarda correctamente para que pueda volver y continuar donde se quedó.")])])]), e._v(" "), n("tr", [n("td", [n("p", [e._v("Datos de análisis")])]), e._v(" "), n("td", [n("p", [e._v("Se utilizan para supervisar el rendimiento del Sitio web y poder realizar ajustes con vistas a mejorar su experiencia.")])])])])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En resumen: solo compartimos información con su consentimiento, para cumplir con las leyes, para prestarle servicios, para proteger sus derechos o para cumplir con obligaciones comerciales. Solo utilizaremos sus datos internamente y no los transferiremos a terceros en ningún caso.")])])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("ul", [n("li", [n("i", [e._v("Consentimiento")]), e._v(": puede que procesemos sus datos si nos ha dado su consentimiento específico para utilizar su información personal con un fin específico.")]), e._v(" "), n("li", [n("span", [n("i", [e._v("Intereses legítimos")]), e._v(": puede que procesemos sus datos cuando sea razonablemente necesario para lograr nuestros intereses comerciales legítimos. ")]), e._v("Puede que revelemos su información cuando creamos que es necesario para investigar, prevenir o tomar medidas con respecto a posibles incumplimientos de nuestras políticas, sospechas de fraude, situaciones que impliquen posibles amenazas a la seguridad de cualquier persona y actividades ilegales, o como prueba en un litigio en el que estemos implicados.")]), e._v(" "), n("li", [n("i", [e._v("Cumplimiento de un contrato")]), e._v(": cuando hayamos suscrito un contrato con usted, puede que procesemos su información personal para cumplir con los términos de nuestro contrato.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("ul", [o("li", [o("i", [this._v("Fines comerciales")]), this._v(": cuando hayamos suscrito un contrato con terceros proveedores, consultores y otros proveedores de servicios que trabajen para nosotros y necesitemos acceder a su información personal para realizar ese trabajo, incluso para fines comerciales que requieran el acceso a nuestros sistemas que contienen información personal (como el suministro de almacenamiento de datos en la nube, el mantenimiento de la seguridad de nuestros sistemas y el servicio de atención al cliente).")]), this._v(" "), o("li", [o("i", [this._v("Obligaciones legales")]), this._v(": puede que divulguemos su información cuando estemos legalmente obligados a hacerlo para cumplir con la ley aplicable, una solicitud gubernamental, un procedimiento judicial, una orden judicial o un proceso legal como, por ejemplo, en respuesta a una orden judicial o una citación (incluso en respuesta a las autoridades públicas para cumplir con los requisitos de seguridad nacional o de aplicación de la ley).")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("ul", [o("li", [o("i", [this._v("Transferencias comerciales")]), this._v(": puede que compartamos o transfiramos su información en relación con, o durante las negociaciones de cualquier fusión, venta de activos de la empresa, financiación o adquisición de la totalidad o una parte de nuestro negocio a otra empresa.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En resumen")]), this._v(":"), o("i", [this._v(" puede que utilicemos cookies y otras tecnologías de seguimiento para recopilar y almacenar su información.")])])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("p", [e._v("Puede que utilicemos "), n("i", [e._v("cookies ")]), e._v("y tecnologías de seguimiento similares (como balizas web y píxeles) para acceder a información o guardarla. La información específica sobre cómo usamos esas tecnologías y cómo puede rechazar ciertas "), n("i", [e._v("cookies ")]), e._v("se establece en nuestra Política de "), n("i", [e._v("cookies")]), e._v(": "), n("span", [e._v("www.pokemonkidswinterfest.com/cookies")]), n("span", [e._v(".")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En resumen")]), this._v(":"), o("i", [this._v(" puede que transfiramos, guardemos y procesemos su información en otros países además del suyo.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En resumen")]), this._v(":"), o("i", [this._v(" conservamos su información el tiempo que sea necesario para cumplir con los fines descritos en este aviso de privacidad, a menos que la ley estipule lo contrario.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Solo conservaremos su información personal durante el tiempo que sea necesario para los fines establecidos en este aviso de privacidad, a menos que la ley exija o permita un período de conservación más largo (debido, por ejemplo, a requisitos fiscales, contables o de otro tipo). Ningún fin recogido en este aviso requerirá que mantengamos su información personal durante más de "), o("span", [this._v("seis (6) meses después del comienzo del período de inactividad de la cuenta del usuario")]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En resumen")]), this._v(": "), o("i", [this._v("nuestro objetivo es proteger su información personal mediante un sistema de medidas de seguridad organizativas y técnicas.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Hemos puesto en práctica medidas de seguridad técnicas y organizativas adecuadas para proteger la seguridad de cualquier información personal que procesemos. Sin embargo, a pesar de nuestras precauciones y esfuerzos para proteger su información, ninguna transmisión electrónica a través de internet o de una tecnología de almacenamiento de información puede garantizarse que sea 100 % segura, por lo que no podemos prometer o garantizar que "), o("i", [this._v("hackers")]), this._v(", ciberdelincuentes u otros terceros no autorizados no puedan burlar nuestros sistemas de seguridad y recopilar, acceder, robar o modificar su información de forma inadecuada. Aunque haremos todo lo posible para proteger su información personal, la transmisión de información personal hacia y desde nuestro Sitio web será bajo su propia responsabilidad. Deberá acceder al Sitio web únicamente dentro de un entorno seguro.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En resumen")]), this._v(":"), o("i", [this._v(" puede revisar, modificar o cancelar su cuenta en cualquier momento. Tiene «derecho al olvido» y, en cualquier momento, puede retirar su consentimiento para que utilicemos sus datos.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Si es residente del Espacio Económico Europeo y cree que estamos procesando ilegalmente su información personal, tiene derecho también a reclamar a la autoridad supervisora local de protección de datos. Encontrará la información de contacto de dicha autoridad en: "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                        }
                    }, [o("span", [this._v("http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm")])]), o("span", [this._v(".")])])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("ul", [n("li", [e._v("El derecho a ser informado de las formas en que utilizamos su información.")]), e._v(" "), n("li", [e._v("El derecho a solicitar a Pokémon el acceso y la rectificación o eliminación de información personal, así como ciertos derechos de portabilidad de datos, y el derecho a dar instrucciones relativas al uso y la divulgación de sus datos personales tras su fallecimiento.")]), e._v(" "), n("li", [e._v("El derecho de oponerse al procesamiento de su información personal o de obtener una limitación de dicho procesamiento en determinadas circunstancias.")]), e._v(" "), n("li", [e._v("El derecho a que sus datos personales se transfieran a otra organización si para Pokémon resulta técnicamente posible hacerlo.")]), e._v(" "), n("li", [e._v("Si el tratamiento de los datos personales se basa en su consentimiento, el derecho a revocar el consentimiento en cualquier momento (sin que esto afecte a la legalidad del tratamiento antes de su revocación).")]), e._v(" "), n("li", [e._v("En determinadas circunstancias puede que haya excepciones a estos derechos y, si no puede ejercer un derecho debido a una excepción, le ofreceremos una explicación al respecto.")]), e._v(" "), n("li", [e._v("El derecho a presentar su reclamación a un organismo regulador. Si reside en el Espacio Económico Europeo (EEE) y cree que no hemos cumplido con las leyes de protección de datos, puede quejarse a la autoridad local de protección de datos; sin embargo, le agradeceríamos que le diera la oportunidad a Pokémon de tratar el asunto poniéndose en contacto directamente con nosotros.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Si reside en Suiza, la información de contacto de las autoridades de protección de datos está disponible en: "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "https://www.edoeb.admin.ch/edoeb/en/home.html"
                        }
                    }, [o("span", [this._v("https://www.edoeb.admin.ch/edoeb/en/home.html")])]), o("span", [this._v(".")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Si tiene alguna pregunta o comentario sobre sus derechos en materia de privacidad, puede enviarnos un correo electrónico a "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [o("span", [this._v("support@pokemonkidswinterfest.com")])]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("span", [o("span"), this._v("■")]), this._v("Póngase en contacto con nosotros utilizando la información de contacto facilitada.")])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("p", [n("span", [n("i", [e._v("Cookies ")]), e._v("y tecnologías similares:")]), e._v(" La mayoría de navegadores están configurados para aceptar por defecto las "), n("i", [e._v("cookies")]), e._v(". Si lo prefiere, puede configurar su navegador para que elimine las "), n("i", [e._v("cookies ")]), e._v("y las rechace. Si opta por eliminar o rechazar las "), n("i", [e._v("cookies")]), e._v(", determinadas funciones o servicios de nuestro Sitio web podrían verse afectados.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Si decide no aceptar las "), o("i", [this._v("cookies")]), this._v(", puede acceder al Sitio web en un «Modo invitado» limitado, en el que se desactivarán ciertas funciones para asegurar que siga disfrutando de la experiencia.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En resumen")]), this._v(":"), o("i", [this._v(" sí, si reside en California, disfrutará de derechos específicos en lo que respecta al acceso a su información personal.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("La sección 1798.83 del Código Civil de California, conocida también como la ley "), o("i", [this._v("«Shine The Light»")]), this._v(", permite a nuestros usuarios residentes en California solicitar y obtener de nuestra parte, una vez al año y de forma gratuita, información sobre las categorías de información personal (si las hubiera) que divulgamos a terceros con fines de comercialización directa, así como los nombres y direcciones de todos los terceros con los que compartimos información personal en el año natural inmediatamente anterior. Si reside en California y desea realizar dicha solicitud, puede enviárnosla por escrito utilizando la información de contacto indicada a continuación.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En resumen")]), this._v(":"), o("i", [this._v(" sí, actualizaremos este aviso según sea necesario para cumplir con las leyes pertinentes.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Si tiene alguna pregunta o comentario sobre este aviso, puede enviarnos un correo electrónico a "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [o("span", [this._v("support@pokemonkidswinterfest.com")])]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("De acuerdo con las leyes aplicables de su país, puede que tenga derecho a solicitar acceso a la información personal que obtenemos de usted, modificar esa información o eliminarla en determinadas circunstancias. Para solicitar la revisión, actualización o eliminación de su información personal, envíenos un formulario de solicitud por correo electrónico a "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [o("span", [this._v("support@pokemonkidswinterfest.com")])]), this._v(". Responderemos a su solicitud en un plazo de 30 días.")])
                }], !1, null, null, null).exports,
                T = {
                    props: ["content"],
                    methods: {
                        scrollMeTo: function(e) {
                            var o = this.$refs[e].offsetTop;
                            document.getElementById("privacy").scrollTop = o
                        }
                    }
                },
                A = Object(r.a)(T, (function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("div", [n("p", [e._v("POLITIQUE DE CONFIDENTIALITÉ")]), e._v(" "), e._m(0), e._v(" "), e._m(1), e._v(" "), n("p", [e._v("La présente déclaration de confidentialité s'applique à toutes les informations collectées par nos Services (qui, comme indiqué ci-dessus, comprennent notre Site web), ainsi que tout service, vente, outil marketing ou événement connexe.")]), e._v(" "), n("p", [e._v("Veuillez lire attentivement la présente déclaration de confidentialité. Cela pourra vous aider à comprendre ce que nous faisons des informations que nous collectons.")]), e._v(" "), n("p", [e._v("SOMMAIRE")]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T1")
                            }
                        }
                    }, [e._v("1. QUELLES INFORMATIONS COLLECTONS-NOUS ?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T2")
                            }
                        }
                    }, [e._v("2. COMMENT UTILISONS-NOUS VOS INFORMATIONS ?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T3")
                            }
                        }
                    }, [e._v("3. VOS INFORMATIONS SERONT-ELLES COMMUNIQUÉES À DES TIERS ?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T4")
                            }
                        }
                    }, [e._v("4. UTILISONS-NOUS DES COOKIES ET AUTRES TECHNOLOGIES DE TRACKING ?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T5")
                            }
                        }
                    }, [e._v("5. VOS INFORMATIONS SONT-ELLES TRANSMISES À L'ÉCHELLE INTERNATIONALE ?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T6")
                            }
                        }
                    }, [e._v("6. PENDANT COMBIEN DE TEMPS CONSERVONS-NOUS VOS INFORMATIONS ?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T7")
                            }
                        }
                    }, [e._v("7. COMMENT PROTÉGEONS-NOUS VOS INFORMATIONS ?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T8")
                            }
                        }
                    }, [e._v("8. QUELS SONT VOS DROIT EN MATIÈRE DE CONFIDENTIALITÉ ?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T9")
                            }
                        }
                    }, [e._v("9. CONTRÔLE DES FONCTIONS DO-NOT-TRACK")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T10")
                            }
                        }
                    }, [e._v("10. LES RÉSIDENTS DE CALIFORNIE ONT-ILS DES DROITS SPÉCIFIQUES EN MATIÈRE DE CONFIDENTIALITÉ ?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T11")
                            }
                        }
                    }, [e._v("11. METTONS-NOUS À JOUR LA PRÉSENTE DÉCLARATION ?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T12")
                            }
                        }
                    }, [e._v("12. COMMENT NOUS CONTACTER AU SUJET DE LA PRÉSENTE DÉCLARATION ?")])])]), e._v(" "), n("p", {
                        ref: "T1"
                    }, [e._v("1. QUELLES INFORMATIONS COLLECTONS-NOUS ?")]), e._v(" "), n("p", [e._v("Informations collectées automatiquement")]), e._v(" "), e._m(2), e._v(" "), e._m(3), e._v(" "), e._m(4), e._v(" "), e._m(5), e._v(" "), n("p", [e._v("Les informations que nous collectons comprennent :")]), e._v(" "), e._m(6), e._v(" "), n("p", {
                        ref: "T2"
                    }, [e._v("2. COMMENT UTILISONS-NOUS VOS INFORMATIONS ?")]), e._v(" "), e._m(7), e._v(" "), n("p", [e._v("Nous utilisons les informations personnelles collectées via notre Site web pour divers usages décrits ci-dessous. Nous traitons vos informations à ces fins liées à nos intérêts commerciaux légitimes, pour la signature ou l'exécution d'un contrat avec vous, avec votre consentement, et/ou pour respecter nos obligations légales. Nous indiquons le cadre spécifique du traitement des données à côté de chaque objectif listé ci-dessous.")]), e._v(" "), e._m(8), e._v(" "), e._m(9), e._v(" "), n("p", [e._v("Voici la liste des données que nous collectons et leur utilisation :")]), e._v(" "), e._m(10), e._v(" "), n("p", {
                        ref: "T3"
                    }, [e._v("3. VOS INFORMATIONS SERONT-ELLES COMMUNIQUÉES À DES TIERS ?")]), e._v(" "), e._m(11), e._v(" "), n("p", [e._v("Nous pouvons être amenés à traiter ou partager vos données en notre possession dans le cadre légal suivant :")]), e._v(" "), e._m(12), e._v(" "), e._m(13), e._v(" "), n("p", [e._v("Plus spécifiquement, nous pouvons être amenés à traiter vos données ou à partager vos informations personnelles dans les situations suivantes :")]), e._v(" "), e._m(14), e._v(" "), n("p", {
                        ref: "T4"
                    }, [e._v("4. UTILISONS-NOUS DES COOKIES ET AUTRES TECHNOLOGIES DE TRACKING ?")]), e._v(" "), e._m(15), e._v(" "), e._m(16), e._v(" "), n("p", {
                        ref: "T5"
                    }, [e._v("5. VOS INFORMATIONS SONT-ELLES TRANSMISES À L'ÉCHELLE INTERNATIONALE ?")]), e._v(" "), e._m(17), e._v(" "), n("p", [e._v("Nos serveurs se situent en Europe. Si vous accédez à notre Site web depuis un pays non-européen, veuillez noter que vos informations peuvent être transférées, stockées ou traitées par nos soins dans nos locaux et par les tiers avec lesquels nous pouvons être amenés à partager vos informations personnelles (voir « "), n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T3")
                            }
                        }
                    }, [n("span", [e._v("VOS INFORMATIONS SERONT-ELLES PARTAGÉES AVEC DES TIERS ?")])]), e._v(" » ci-dessus), dans et d'autres pays.")]), e._v(" "), n("p", [e._v("Si vous résidez dans l'Espace économique européen, ces pays ne disposent peut-être pas de lois sur la protection des données ou autres lois similaires aussi complètes que celles de votre pays. Toutefois, nous prendrons toutes les mesures nécessaires pour protéger vos informations personnelles conformément à la présente déclaration de confidentialité et à la loi en vigueur.")]), e._v(" "), n("p", {
                        ref: "T6"
                    }, [e._v("6. PENDANT COMBIEN DE TEMPS CONSERVONS-NOUS VOS INFORMATIONS ?")]), e._v(" "), e._m(18), e._v(" "), e._m(19), e._v(" "), n("p", [e._v("Quand aucune activité commerciale légitime en cours ne nécessite le traitement de vos informations personnelles, soit nous les effacerons, soit nous les rendrons anonymes, soit, si cela n'est pas possible (par exemple, parce que vos informations personnelles ont été archivées), nous stockerons vos informations personnelles de façon sûre et les isolerons de tout traitement ultérieur jusqu'à ce que leur suppressions soit possible.")]), e._v(" "), n("p", {
                        ref: "T7"
                    }, [e._v("7. COMMENT PROTÉGEONS-NOUS VOS INFORMATIONS ?")]), e._v(" "), e._m(20), e._v(" "), n("p", [e._v("Nous avons mis en place des mesures de sécurité techniques et organisationnelles pour protéger la sécurité de toutes les informations personnelles que nous traitons. Toutefois, malgré nos protections et nos efforts pour sécurisés vos informations, nous ne pouvons garantir que les transmissions électroniques par internet ou les technologies de stockage d'informations soient sécurisées à 100 %. Par conséquent, nous ne pouvons pas promettre ou garantir qu'aucun hacker, cybercriminel ou autre tiers non-autorisé ne sera capable de contourner notre dispositif de sécurité et de collecter abusivement, consulter, voler ou modifier vos informations. Bien que nous mettions tout en œuvre pour protéger vos informations personnelles, la transmission d'informations personnelles à et depuis notre Site web est effectuée à vos propres risques. Nous vous recommandons de vous connecter au Site web uniquement dans un cadre sécurisé.")]), e._v(" "), n("p", {
                        ref: "T8"
                    }, [e._v("8. QUELS SONT VOS DROIT EN MATIÈRE DE CONFIDENTIALITÉ ?")]), e._v(" "), e._m(21), e._v(" "), e._m(22), e._v(" "), n("p", [e._v("Les résidents de l'Espace économique européen disposent aussi des droits suivants :")]), e._v(" "), e._m(23), e._v(" "), e._m(24), e._v(" "), e._m(25), e._v(" "), n("p", [e._v("Informations sur le compte")]), e._v(" "), n("p", [e._v("Si vous souhaitez, à tout moment, revoir ou modifier les informations présentes sur votre compte ou clore celui-ci, vous pouvez procéder de la façon suivante :")]), e._v(" "), e._m(26), e._v(" "), n("p", [e._v("Suite à votre demande de clôture de votre compte, nous désactiverons ou effacerons votre compte et vos informations de notre base de données active. Toutefois, nous pouvons conserver certaines informations dans nos fichiers pour prévenir les fraudes, régler des problèmes, aider dans des enquêtes, faire respecter nos conditions générales, et/ou appliquer la loi en vigueur.")]), e._v(" "), e._m(27), e._v(" "), n("p", [e._v("Si vous décidez que vous ne voulez pas accepter les cookies, vous pourrez toujours accéder au Site web dans une version limitée, le « Mode invité », où certaines fonctionnalités seront désactivées pour vous garantir de pouvoir profiter agréablement de votre visite sur le Site web.")]), e._v(" "), n("p", {
                        ref: "T9"
                    }, [e._v("9. CONTRÔLE DES FONCTIONS DO-NOT-TRACK")]), e._v(" "), n("p", [e._v("La plupart des navigateurs et certains systèmes d'exploitation mobiles et applications mobiles comprennent une fonctionnalité ou un paramètre Do-Not-Track (« DNT ») que vous pouvez activer pour signaler vos préférences de confidentialité afin qu'aucune donnée concernant votre navigation ne soit suivie et collectée. À ce jour, aucune norme uniformisée sur la technologie pour la reconnaissance et l'installation de signaux DNT n'a été finalisée. Ainsi, nous ne répondons actuellement pas aux signaux DNT des navigateurs ou aux autres mécanismes qui communiquent automatiquement votre choix de ne pas faire l'objet de tracking en ligne. Si une norme pour le tracking en ligne est adoptée et que nous sommes tenus de nous y conformer à l'avenir, nous vous en informerons dans une version révisée de la présente déclaration.")]), e._v(" "), n("p", {
                        ref: "T10"
                    }, [e._v("10. LES RÉSIDENTS DE CALIFORNIE ONT-ILS DES DROITS SPÉCIFIQUES EN MATIÈRE DE CONFIDENTIALITÉ ?")]), e._v(" "), e._m(28), e._v(" "), n("p", [e._v("Nous ne vendons pas vos informations personnelles, conformément au CCPA, et nous ne l'avons pas fait au cours des 12 derniers mois.")]), e._v(" "), n("p", [e._v("Code civil californien, Section 1798.83, aussi connue sous le nom de loi « pour faire la lumière » (« Shine The Light ») permet à nos utilisateurs résidant en Californie d'obtenir, sur demande auprès de nous, une fois par an et gratuitement, des informations à propos des catégories d'informations personnelles (le cas échéant) que nous divulguons à des tiers à des fins commerciales, et les noms et adresses de tous les tiers avec lesquels nous avons partagé des informations personnelles au cours de la dernière année écoulée. Si vous résidez en Californie et que vous souhaitez faire cette demande, veuillez nous la soumettre par écrit aux coordonnées fournies ci-dessous.")]), e._v(" "), n("p", [e._v("Vous avez le droit fondamental de ne pas subir de discrimination en conséquence de l'exercice de ces droits.")]), e._v(" "), n("p", [e._v("Si vous avez moins de 18 ans, que vous résidez en Californie et que vous avez enregistré un compte avec le Site web, vous avez le droit de demander le retrait des données indésirables que vous avez publiées sur le Site web. Pour demander le retrait de ces données, veuillez nous contacter aux coordonnées fournies ci-dessous, et inclure l'adresse e-mail associée à votre compte ainsi qu'un justificatif de domicile en Californie. Nous nous assurerons que les données ne sont pas publiées sur le Site web, mais veuillez noter que les données peuvent ne pas être intégralement retirées de tous nos systèmes (ex. : sauvegardes, etc.).")]), e._v(" "), n("p", {
                        ref: "T11"
                    }, [e._v("11. METTONS-NOUS À JOUR LA PRÉSENTE DÉCLARATION ?")]), e._v(" "), e._m(29), e._v(" "), n("p", [e._v("Nous pouvons mettre à jour cette déclaration de confidentialité de temps en temps. La version mise à jour sera indiquée par une date de « révision » mise à jour, et la nouvelle version sera effective dès qu'elle sera accessible. Si nous effectuons des changements documentaires sur cette déclaration de confidentialité, nous pourrons vous en informer par un préavis ou directement en vous envoyant une notification. Nous vous invitons à revoir régulièrement la présente déclaration de confidentialité pour vous tenir informé de la façon dont nous protégeons vos informations.")]), e._v(" "), n("p", {
                        ref: "T12"
                    }, [e._v("12. COMMENT NOUS CONTACTER AU SUJET DE LA PRÉSENTE DÉCLARATION ?")]), e._v(" "), e._m(30), e._v(" "), n("p", [e._v("COMMENT POUVEZ-VOUS RÉVISER, METTRE À JOUR OU EFFACER LES DONNÉES QUE NOUS COLLECTONS AUPRÈS DE VOUS ?")]), e._v(" "), e._m(31)])
                }), [function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Merci d'avoir choisi de rejoindre la communauté de The Pokémon Company International, Inc. (« Société », « nous », « notre » ou « nôtre »). Nous nous engageons à protéger vos informations personnelles ainsi que votre droit à la vie privée. Pour toute question ou toute inquiétude concernant la déclaration de confidentialité ou notre utilisation de vos informations personnelles, veuillez nous contacter sur "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [o("span", [this._v("support@pokemonkidswinterfest.com")])]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Lorsque vous visitez notre site web "), o("span", [this._v("www.pokemonkidswinterfest.com")]), this._v(" (le « Site web ») et, de manière générale, lorsque vous utilisez l'un de nos services (les « Services », qui comprennent le Site web), nous vous savons gré de nous confier vos informations personnelles. Nous respectons votre vie privée. Dans la présente déclaration de confidentialité, nous essayons de vous expliquer le plus clairement possible quelles informations nous collectons, comment nous les utilisons et quels sont vos droits en la matière. Nous espérons que vous prendrez le temps de la lire attentivement, car les informations qu'elle contient sont importantes. Si vous n'êtes pas d'accord avec une ou plusieurs conditions de la présente déclaration de confidentialité, veuillez cesser toute utilisation de nos Services immédiatement.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En bref : Certaines informations – telles que votre adresse de protocole internet (IP) et/ou les caractéristiques de votre navigateur et de votre appareil – sont collectées automatiquement quand vous visitez notre ")]), o("span", [o("i", [this._v("Site Internet")])]), o("i", [this._v(". Nous ne collectons pas d'adresses e-mail ou d'autres informations personnelles autres que le Pseudonyme que vous avez choisi et votre progression au jeu.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("b", [o("i", [this._v("Que sont les informations personnelles ?")])]), o("br"), this._v("Les données personnelles englobent toutes les informations permettant, directement ou indirectement, d'identifier une personne physique. Cela signifie que, par exemple, le nom, l'adresse et le numéro de téléphone, mais aussi les informations de connexion et les données encodées et autres identifiants électroniques (ex. : adresse IP) constituent des données personnelles puisqu'elles peuvent être associées à une personne physique.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Nous collectons automatiquement certaines informations lorsque vous consultez, utilisez ou parcourez le "), o("span", [this._v("Site web")]), this._v(". Ces informations ne révèlent pas spécifiquement votre vraie identité (comme votre nom ou vos coordonnées), mais peuvent comprendre des informations sur votre appareil et votre utilisation, comme votre adresse IP, les caractéristiques de votre navigateur et de votre appareil, votre système d'exploitation, vos préférences linguistiques, vos URL de référence, le nom de votre appareil, votre pays, votre situation géographique, des informations sur qui et quand utilise notre "), o("span", [this._v("Site web,")]), this._v(" et autres informations techniques. Ces informations sont principalement nécessaires pour garantir la sécurité et le fonctionnement de notre "), o("span", [this._v("Site web")]), this._v(" et pour nos statistiques suivis internes.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Comme de nombreuses entreprises, nous collectons aussi des informations via les cookies et des technologies similaires. Pour en savoir plus à ce sujet, consultez notre Politique sur les cookies : "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "http://www.pokemonkidswinterfest.com/cookies"
                        }
                    }, [o("span", [this._v("www.pokemonkidswinterfest.com/cookies")])]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("ul", [o("li", [o("i", [this._v("Informations de connexion et d'utilisation")]), this._v(" : Les informations de connexion et d'utilisation sont celles que nos serveurs recueillent automatiquement à propos des services, des performances et pour les diagnostics, dès que vous consultez ou utilisez notre Site web, et que nous sauvegardons dans les fichiers de connexion. En fonction de la façon dont vous interagissez avec nous, ces informations de connexion peuvent comprendre votre adresse IP, des informations sur votre appareil, le type de navigateur et les paramètres et informations concernant votre activité sur le Site web (comme les date et heure associées à votre utilisation, les pages et fichiers que vous avez visionnés, vos recherches et autres actions, telles que les fonctionnalités que vous utilisez), les informations concernant votre appareil (comme l'activité du système, les rapports d'erreur [parfois appelés « crash dumps »] et les paramètres matériels).")]), this._v(" "), o("li", [o("i", [this._v("Informations sur l'appareil")]), this._v(" :Nous collectons des données sur l'appareil, comme les informations à propos de votre ordinateur, téléphone, tablette ou autre appareil que vous utilisez pour accéder au "), o("span", [this._v("Site web")]), this._v(". En fonction de l'appareil utilisé, ces données peuvent comprendre les informations comme l'adresse IP (ou serveur proxy), les numéros d'identification de l'appareil, la géolocalisation, le type de navigateur, le modèle du matériel, le fournisseur d'accès à internet et/ou l'opérateur téléphonique, et les informations de configuration du système d'exploitation.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En bref ")]), this._v(":"), o("i", [this._v(" Nous traitons vos informations à des fins basées sur des intérêts commerciaux légitimes, sur l'exécution de notre contrat avec vous, sur le respect de nos obligations légales, et/ou sur votre consentement.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Nous utilisons les données que nous collectons ou recevons :"), o("span", [o("br")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("ul", [o("li", [this._v("Pour gérer les comptes des utilisateurs. Nous pouvons être amenés à utiliser vos informations dans le but de gérer notre compte et de le maintenir en état de marche."), o("span", [o("br")])]), this._v(" "), o("li", [this._v("Pour protéger nos Services. Nous pouvons être amenés à utiliser vos informations dans le cadre du maintien de la sécurité de notre Site web (par exemple, pour surveiller et prévenir les fraudes).")]), this._v(" "), o("li", [this._v("Pour renforcer nos conditions générales et politiques à de fins commerciales, pour nous conformer aux exigences légales et réglementaires, ou dans le cadre de notre contrat.")]), this._v(" "), o("li", [this._v("Pour répondre à des exigences légales et prévenir les préjudices. Si nous recevons une assignation à comparaître ou toute autre demande légale, nous pouvons être amenés à inspecter les données que nous possédons pour déterminer la forme de notre réponse.")])])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("table", {
                        attrs: {
                            cellspacing: "0",
                            cellpadding: "0"
                        }
                    }, [n("tbody", [n("tr", [n("td", [n("p", [e._v("Données collectées")])]), e._v(" "), n("td", [n("p", [e._v("Utilisation")])])]), e._v(" "), n("tr", [n("td", [n("p", [e._v("Pseudonyme")])]), e._v(" "), n("td", [n("p", [e._v("Utilisé dans les classements et les profils d'Entraîneurs.")])])]), e._v(" "), n("tr", [n("td", [n("p", [e._v("Données de jeu")])]), e._v(" "), n("td", [n("p", [e._v("Utilisées pour permettre la sauvegarde de votre progression afin que vous puissiez reprendre le jeu là où vous l'avez laissé.")])])]), e._v(" "), n("tr", [n("td", [n("p", [e._v("Données statistiques")])]), e._v(" "), n("td", [n("p", [e._v("Utilisées pour suivre les performances du Site web afin d'apporter les modifications nécessaires pour améliorer encore votre expérience.")])])])])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En bref : Nous ne communiquons des informations qu'avec votre consentement, pour nous conformer à la loi, pour vous fournir des services, pour protéger vos droits ou pour répondre à des obligations commerciales. Nous n'utiliserons vos données qu'en interne et ne communiquerons jamais vos informations à des tiers.")])])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("ul", [n("li", [n("i", [e._v("Consentement")]), e._v(" : Nous pouvons être amenés à traiter vos données si vous nous avez expressément autorisés à utiliser vos informations personnelles à des fins particulières.")]), e._v(" "), n("li", [n("span", [n("i", [e._v("Intérêts légitimes")]), e._v(" : Nous pouvons être amenés à traiter vos données en cas de nécessité raisonnable dans le cadre de nos intérêts commerciaux légitimes. ")]), e._v("Nous pouvons être amenés à divulguer vos informations si nous estimons que cela s'avère nécessaire pour enquêter, prévenir ou prendre des mesures dans l'éventualité de violations de nos politiques, soupçons de fraude, situations impliquant des menaces potentielles pour la sécurité des personnes et des activités illégales, ou comme preuves dans le cadre de litige impliquant notre Société.")]), e._v(" "), n("li", [n("i", [e._v("Exécution d'un contrat")]), e._v(" : Si nous avons signé un contrat avec vous, nous pouvons être amenés à traiter vos informations personnelles pour respecter les termes de notre contrat.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("ul", [o("li", [o("i", [this._v("Fins commerciales")]), this._v(" : Nous avons signé un contrat avec des vendeurs, consultants et autres fournisseurs de services tiers qui travaillent pour nous et requièrent l'accès à vos informations personnelles pour effectuer leur travail, y compris à des fins commerciales nécessitant l'accès à nos systèmes contenant des informations personnelles (telles que la fourniture de stockage de données sur le cloud, le maintien de la sécurité de nos systèmes, et l'offre d'un service client).")]), this._v(" "), o("li", [o("i", [this._v("Obligations légales")]), this._v(" : Nous pouvons être amenés à divulguer vos informations si la loi nous y oblige pour appliquer la loi en vigueur, répondre à des demandes gouvernementales, dans le cadre d'actions en justice, sur ordre d'un tribunal ou dans le cadre de procédures judiciaires, comme répondre à un ordre du tribunal ou à une assignation en justice (y compris en réponse à l'autorité publique à des fins de sécurité nationale ou pour respecter de la loi).")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("ul", [o("li", [o("i", [this._v("Transfert d'activités")]), this._v(" : Nous pouvons être amenés à partager ou transférer vos informations dans le cadre de négociations pour une fusion, la vente de biens sociaux, un financement ou l’acquisition en tout ou partie de notre entreprise par une autre société.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En bref ")]), this._v(":"), o("i", [this._v(" Nous pouvons être amenés à utiliser des cookies et autres technologies de tracking pour collecter et stocker vos informations.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Nous pouvons être amenés à utiliser des cookies et des technologies de tracking similaires (comme des balises web et des pixels) pour accéder ou stocker vos données. Pour plus d'informations sur notre utilisation de ces technologies et sur vos moyens de refuser certains cookies, veuillez consulter notre Politique sur les cookies : "), o("span", [this._v("www.pokemonkidswinterfest.com/cookies")]), o("span", [this._v(".")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En bref ")]), this._v(":"), o("i", [this._v(" Nous pouvons être amenés à transférer, stocker ou traiter vos informations dans d'autres pays que celui où vous résidez.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En bref ")]), this._v(":"), o("i", [this._v(" Nous conservons vos informations aussi longtemps que cela nous est nécessaire pour atteindre les objectifs mis en évidence dans la présente déclaration de confidentialité, sauf dispositions légale contraire.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Nous ne conserverons vos informations personnelles que le temps nécessaire pour atteindre les objectifs définis dans la présente déclaration de confidentialité, sauf si une plus longue période de conservation est requise ou permise par la loi (comme les impôts, la comptabilité ou autres exigences légales). Aucun objectif mentionné dans la présente déclaration ne nécessitera que nous gardions vos informations personnelles au-delà de "), o("span", [this._v("six (6) mois à compter du début de la période de l'inactivité sur le compte de l'utilisateur")]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En bref")]), this._v(" : "), o("i", [this._v("Nous cherchons à protéger vos informations personnelles grâce à plusieurs mesures de sécurité organisationnelles et techniques.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En bref ")]), this._v(":"), o("i", [this._v(" Vous pouvez relire, modifier ou clore votre compte à tout moment. Vous disposez du « droit à l'oubli » et pouvez retirer votre consentement pour l'utilisation de vos données à tout moment.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Si vous résidez dans l'Espace économique européen et que vous pensez que nous traitons vos informations personnelles illégalement, vous disposez aussi du droit de porter plainte auprès des autorités locales compétentes en matière de protection des données. Vous trouverez leurs coordonnées ici : "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                        }
                    }, [o("span", [this._v("http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm")])]), o("span", [this._v(".")])])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("ul", [n("li", [e._v("Le droit d'être informé sur la façon dont nous utilisons vos informations.")]), e._v(" "), n("li", [e._v("Le droit de demander à Pokémon l'accès et la rectification ou la suppression d'informations personnelles, certains droits à la portabilité des données, et le droit de donner des instructions concernant l'utilisation et la divulgation de vos données personnelles après votre décès.")]), e._v(" "), n("li", [e._v("Le droit de vous opposer au traitement de vos informations personnelles ou d'obtenir la restriction de ce traitement dans certaines circonstances.")]), e._v(" "), n("li", [e._v("Le droit d'accéder à vos données personnelles transférées à une autre organisation, si cela s'avère techniquement possible pour Pokémon.")]), e._v(" "), n("li", [e._v("Si le traitement des données personnelles se fait avec votre consentement, vous avez le droit de retirer votre consentement à tout moment (sans conséquences sur la légalité du traitement avant ce retrait).")]), e._v(" "), n("li", [e._v("Ces droits peuvent présenter des exceptions dans certaines circonstances et, si vous ne pouvez pas exercer un droit en raison d'une exception, nous vous fournirons cette explication.")]), e._v(" "), n("li", [e._v("Le droit de porter plainte auprès d'un régulateur. Si vous vous trouvez au sein de l'Espace économique européen (EEE) et pensez que nous ne nous sommes pas conformés aux lois sur la protection des données, vous pouvez déposer une plainte auprès des autorités locales compétentes en matière de protection des données ; toutefois, nous vous saurions gré de permettre à Pokémon de traiter directement votre problème en nous contactant.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Si vous résidez en Suisse, les coordonnées des autorités compétentes en matière de protection des données sont disponibles ici : "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "https://www.edoeb.admin.ch/edoeb/en/home.html"
                        }
                    }, [o("span", [this._v("https://www.edoeb.admin.ch/edoeb/en/home.html")])]), o("span", [this._v(".")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Pour toute question ou commentaire à propos du droit à la vie privée, vous pouvez nous envoyer un e-mail à "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [o("span", [this._v("support@pokemonkidswinterfest.com")])]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("span", [o("span"), this._v("■")]), this._v("Contactez-nous aux coordonnées fournies.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("span", [this._v("Cookies et des technologies similaires :")]), this._v(" La plupart des navigateurs web sont paramétrés pour accepter les cookies par défaut. Si vous préférez, vous pouvez généralement choisir de paramétrer votre navigateur pour retirer et rejeter les cookies. Si vous choisissez de retirer ou rejeter les cookies, cela peut nuire à certaines fonctionnalités ou services de notre Site web.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En bref ")]), this._v(":"), o("i", [this._v(" Oui, si vous résidez en Californie, vous bénéficiez de droits spécifiques en matière d'accès à vos données personnelles.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En bref ")]), this._v(":"), o("i", [this._v(" Oui, nous mettrons cette déclaration à jour dès que cela sera nécessaire pour rester en conformité avec les lois en vigueur.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Pour toute question ou commentaire à propos de la présente déclaration, vous pouvez nous envoyer un e-mail à "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [o("span", [this._v("support@pokemonkidswinterfest.com")])]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("En fonction des lois en vigueur dans votre pays, vous pouvez avoir le droit de demander accès aux informations personnelles que nous collectons auprès de vous, de modifier ces informations ou de les effacer dans certaines circonstances. Pour demander à réviser, mettre à jour ou effacer vos informations personnelles, veuillez envoyer un formulaire de demande par e-mail à "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [o("span", [this._v("support@pokemonkidswinterfest.com")])]), this._v(". Nous répondrons à votre demande dans un délai de 30 jours.")])
                }], !1, null, null, null).exports,
                C = {
                    props: ["content"],
                    methods: {
                        scrollMeTo: function(e) {
                            var o = this.$refs[e].offsetTop;
                            document.getElementById("privacy").scrollTop = o
                        }
                    }
                },
                N = Object(r.a)(C, (function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("div", [n("p", [e._v("INFORMATIVA SULLA RISERVATEZZA")]), e._v(" "), e._m(0), e._v(" "), e._m(1), e._v(" "), n("p", [e._v("La presente informativa sulla riservatezza si applica a tutte le informazioni raccolte attraverso i Servizi (che, come descritto in precedenza, includono il Sito Web) della Società, nonché a tutti i servizi, le vendite, il marketing o gli eventi correlati.")]), e._v(" "), n("p", [e._v("Si invita a leggere attentamente la presente informativa sulla riservatezza per avere delucidazioni sul trattamento delle informazioni raccolte.")]), e._v(" "), n("p", [e._v("INDICE")]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T1")
                            }
                        }
                    }, [e._v("1. QUALI INFORMAZIONI VENGONO RACCOLTE?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T2")
                            }
                        }
                    }, [e._v("2. COME VENGONO UTILIZZATE LE INFORMAZIONI RACCOLTE?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T3")
                            }
                        }
                    }, [e._v("3. LE INFORMAZIONI DELL'UTENTE SARANNO CONDIVISE CON QUALCUNO?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T4")
                            }
                        }
                    }, [e._v("4. LA SOCIETÀ UTILIZZA COOKIE E ALTRE TECNOLOGIE DI TRACCIAMENTO?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T5")
                            }
                        }
                    }, [e._v("5. LE INFORMAZIONI RACCOLTE VENGONO TRASFERITE AL DI FUORI DEL PAESE?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T6")
                            }
                        }
                    }, [e._v("6. PER QUANTO TEMPO LE INFORMAZIONI RACCOLTE VENGONO CONSERVATE?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T7")
                            }
                        }
                    }, [e._v("7. IN CHE MODO VIENE GARANTITA LA SICUREZZA DELLE INFORMAZIONI RACCOLTE?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T8")
                            }
                        }
                    }, [e._v("8. QUALI SONO I DIRITTI ALLA RISERVATEZZA DELL'UTENTE?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T9")
                            }
                        }
                    }, [e._v("9. CONTROLLI PER LE FUNZIONALITÀ DO-NOT-TRACK ")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T10")
                            }
                        }
                    }, [e._v("10. I RESIDENTI IN CALIFORNIA GODONO DI PARTICOLARI DIRITTI ALLA RISERVATEZZA?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T11")
                            }
                        }
                    }, [e._v("11. LA PRESENTE INFORMATIVA È SOGGETTA AD AGGIORNAMENTI?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T12")
                            }
                        }
                    }, [e._v("12. IN CHE MODO È POSSIBILE CONTATTARE LA SOCIETÀ IN MERITO ALLA PRESENTE INFORMATIVA?")])])]), e._v(" "), n("p", {
                        ref: "T1"
                    }, [e._v("1. QUALI INFORMAZIONI VENGONO RACCOLTE?")]), e._v(" "), n("p", [e._v("Informazioni raccolte automaticamente")]), e._v(" "), e._m(2), e._v(" "), e._m(3), e._v(" "), e._m(4), e._v(" "), e._m(5), e._v(" "), n("p", [e._v("Le informazioni raccolte includono quanto segue:")]), e._v(" "), e._m(6), e._v(" "), n("p", {
                        ref: "T2"
                    }, [e._v("2. COME VENGONO UTILIZZATE LE INFORMAZIONI RACCOLTE?")]), e._v(" "), e._m(7), e._v(" "), n("p", [e._v("Le informazioni personali raccolte mediante il Sito Web sono utilizzate per una serie di finalità aziendali descritte a seguire. La Società tratta le informazioni personali per questi scopi in base ai propri legittimi interessi commerciali, al fine di stipulare o dare esecuzione a un contratto con l'utente, con il consenso dell'utente e/o per il rispetto di obblighi di legge della Società. La Società specifica i motivi del trattamento addotti accanto a ciascuna delle finalità elencate di seguito.")]), e._v(" "), e._m(8), e._v(" "), e._m(9), e._v(" "), n("p", [e._v("A seguire sono elencati i dati raccolti insieme al relativo utilizzo:")]), e._v(" "), e._m(10), e._v(" "), n("p", {
                        ref: "T3"
                    }, [e._v("3. LE INFORMAZIONI DELL'UTENTE SARANNO CONDIVISE CON QUALCUNO?")]), e._v(" "), e._m(11), e._v(" "), n("p", [e._v("Il trattamento o la condivisione dei dati dell'utente in possesso della Società è possibile in presenza delle seguenti basi giuridiche:")]), e._v(" "), e._m(12), e._v(" "), e._m(13), e._v(" "), n("p", [e._v("Più specificamente, i dati dell'utente possono essere trattati ovvero le informazioni personali dell'utente possono essere condivise nelle seguenti situazioni:")]), e._v(" "), e._m(14), e._v(" "), n("p", {
                        ref: "T4"
                    }, [e._v("4. LA SOCIETÀ UTILIZZA COOKIE E ALTRE TECNOLOGIE DI TRACCIAMENTO?")]), e._v(" "), e._m(15), e._v(" "), e._m(16), e._v(" "), n("p", {
                        ref: "T5"
                    }, [e._v("5. LE INFORMAZIONI RACCOLTE VENGONO TRASFERITE AL DI FUORI DEL PAESE?")]), e._v(" "), e._m(17), e._v(" "), n("p", [e._v("I server della Società si trovano in Europa. Si tenga conto che, in caso di accesso al Sito Web dall'esterno, le informazioni dell'utente possono essere trasferite, memorizzate e trattate dalla Società nelle proprie strutture e da terzi a cui la Società ha condiviso le informazioni personali (cfr. supra "), n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T3")
                            }
                        }
                    }, [n("span", [e._v("LE INFORMAZIONI DELL'UTENTE SARANNO CONDIVISE CON QUALCUNO?")])]), e._v("”), in e in altri Paesi.")]), e._v(" "), n("p", [e._v("Si segnala ai residenti nello Spazio Economico Europeo che questi Paesi potrebbero anche non avere leggi in materia di protezione dei dati o altre leggi simili altrettanto articolate quanto quelle del Paese dell'utente. Tuttavia, la Società adotterà tutte le misure necessarie per proteggere le informazioni personali dell'utente in base alla presente informativa sulla riservatezza e ai sensi della legge applicabile.")]), e._v(" "), n("p", {
                        ref: "T6"
                    }, [e._v("6. PER QUANTO TEMPO LE INFORMAZIONI RACCOLTE VENGONO CONSERVATE?")]), e._v(" "), e._m(18), e._v(" "), e._m(19), e._v(" "), n("p", [e._v("Venuta meno qualsiasi necessità commerciale legittima di trattare le informazioni personali dell'utente, la Società cancellerà o renderà anonime tali informazioni ovvero, ove ciò non sia possibile (ad esempio, perché le informazioni personali dell'utente sono state memorizzate in archivi di backup), le informazioni personali dell'utente saranno memorizzate in modo sicuro e isolate da qualsiasi ulteriore trattamento fino a cancellazione avvenuta.")]), e._v(" "), n("p", {
                        ref: "T7"
                    }, [e._v("7. IN CHE MODO VIENE GARANTITA LA SICUREZZA DELLE INFORMAZIONI RACCOLTE?")]), e._v(" "), e._m(20), e._v(" "), n("p", [e._v("La Società ha adottato una serie di misure di sicurezza tecniche e organizzative adeguate per garantire la sicurezza di qualsiasi informazione personale trattata. Tuttavia, a dispetto delle misure di sicurezza e delle iniziative adottate per proteggere tali informazioni, nessuna trasmissione elettronica su Internet o tecnologia di archiviazione delle informazioni può essere garantita al 100%; pertanto, la Società non può promettere o garantire che gli hacker, i criminali informatici o altri terzi non autorizzati non riescano a violare i sistemi e a raccogliere, accedere, rubare o modificare le informazioni dell'utente in modo improprio. Nonostante gli sforzi profusi per proteggere le informazioni personali dell'utente, la trasmissione di informazioni personali da e verso il Sito Web è a rischio e pericolo dell'utente. L'accesso al Sito Web deve avvenire solo in un ambiente sicuro.")]), e._v(" "), n("p", {
                        ref: "T8"
                    }, [e._v("8. QUALI SONO I DIRITTI ALLA RISERVATEZZA DELL'UTENTE?")]), e._v(" "), e._m(21), e._v(" "), e._m(22), e._v(" "), n("p", [e._v("I residenti nello Spazio Economico Europeo godono altresì dei seguenti diritti:")]), e._v(" "), e._m(23), e._v(" "), e._m(24), e._v(" "), e._m(25), e._v(" "), n("p", [e._v("Informazioni sull'account")]), e._v(" "), n("p", [e._v("Laddove in qualsiasi momento si intenda esaminare o modificare le informazioni dell'account o chiudere l'account stesso, la procedura è illustrata a seguire:")]), e._v(" "), e._m(26), e._v(" "), n("p", [e._v("Dietro richiesta di chiusura dell'account, la Società disattiverà o cancellerà l'account e le relative informazioni dai database attivi della Società. Tuttavia, la Società potrebbe conservare alcune informazioni negli archivi al fine di evitare truffe, risolvere problemi, fornire assistenza in caso di accertamenti, far rispettare i Termini e Condizioni della Società e/o rispettare gli obblighi di legge vigenti.")]), e._v(" "), e._m(27), e._v(" "), n("p", [e._v("In caso di mancata accettazione dei cookie, l'utente potrà utilizzare comunque il sito Web in \"modalità ospite\", ovvero con alcune funzionalità disabilitate per garantire comunque un'esperienza di navigazione piacevole.")]), e._v(" "), n("p", {
                        ref: "T9"
                    }, [e._v("9. CONTROLLI PER LE FUNZIONALITÀ DO-NOT-TRACK")]), e._v(" "), n("p", [e._v("La maggior parte dei browser e alcuni sistemi operativi mobili e applicazioni mobili includono un'impostazione o funzionalità Do-Not-Track (\"DNT\") che può essere attivata per segnalare la propria preferenza in merito alla riservatezza in modo che i dati sulle attività di navigazione online non siano monitorati e raccolti. In questa fase non è stato finalizzato alcuno standard tecnologico uniforme per il riconoscimento e l'implementazione dei segnali DNT. Per questo motivo, attualmente la Società non risponde a segnali DNT del browser o a qualsiasi altro meccanismo che comunichi automaticamente la scelta di non essere monitorati online. Laddove in futuro venisse adottato uno standard per il tracciamento online, la Società informerà gli utenti mediante distribuzione di una versione rivista della presente informativa sulla riservatezza.")]), e._v(" "), n("p", {
                        ref: "T10"
                    }, [e._v("10. I RESIDENTI IN CALIFORNIA GODONO DI PARTICOLARI DIRITTI ALLA RISERVATEZZA?")]), e._v(" "), e._m(28), e._v(" "), n("p", [e._v("La Società non vende informazioni personali come definite dal CCPA né ciò è accaduto negli ultimi 12 mesi.")]), e._v(" "), n("p", [e._v("La sezione 1798.83 del Codice Civile della California, nota anche come legge \"Shine The Light\", consente agli utenti residenti in California di richiedere e ottenere, una volta all'anno e a titolo gratuito, informazioni sulle categorie di informazioni personali (se presenti) divulgate a terzi per scopi di marketing diretto, unitamente a nomi e indirizzi di tutte le terze parti con cui sono state condivise informazioni personali nell'anno solare immediatamente precedente. I residenti in California che intendono avvalersi di questa possibilità possono presentare tale richiesta per iscritto utilizzando le informazioni di contatto fornite a seguire.")]), e._v(" "), n("p", [e._v("L'utente ha il diritto di non essere discriminato per aver esercitato uno qualsiasi di questi diritti.")]), e._v(" "), n("p", [e._v("I minorenni residenti in California dotati di un account registrato presso il Sito Web hanno il diritto di richiedere la rimozione dei dati indesiderati pubblicati sull'area pubblica del Sito Web. Per richiedere la rimozione di tali dati, si invita a contattare la Società utilizzando le informazioni di contatto riportate a seguire, fornendo altresì l'indirizzo e-mail associato all'account e un'attestazione della propria residenza in California. Pur garantendo che i dati non siano più visibili pubblicamente sul Sito Web, l'utente deve essere consapevole del fatto che i dati potrebbero non essere completamente o totalmente rimossi da tutti i sistemi della Società (ad esempio, backup, ecc.).")]), e._v(" "), n("p", {
                        ref: "T11"
                    }, [e._v("11. LA PRESENTE INFORMATIVA È SOGGETTA AD AGGIORNAMENTI?")]), e._v(" "), e._m(29), e._v(" "), n("p", [e._v("L'informativa è soggetta a modifiche periodiche. La versione aggiornata sarà contrassegnata dalla presenza di una data di aggiornamento \"Revised\" e la versione aggiornata sarà efficace non appena accessibile. In caso di modifiche sostanziali apportate alla presente informativa sulla riservatezza, la Società potrebbe decidere di darne notizia pubblicando un avviso in evidenza o inviando direttamente una notifica agli utenti. Si consiglia di consultare frequentemente la presente informativa sulla riservatezza per essere informati sulle modalità di protezione delle informazioni dell'utente.")]), e._v(" "), n("p", {
                        ref: "T12"
                    }, [e._v("12. IN CHE MODO È POSSIBILE CONTATTARE LA SOCIETÀ IN MERITO ALLA PRESENTE INFORMATIVA?")]), e._v(" "), e._m(30), e._v(" "), n("p", [e._v("COME È POSSIBILE ESAMINARE, AGGIORNARE O CANCELLARE I DATI RACCOLTI DALL'UTENTE?")]), e._v(" "), e._m(31)])
                }), [function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Grazie per aver scelto di entrare a far parte della community di The Pokémon Company International, Inc. (“Società”). La Società si impegna a proteggere le informazioni personali e il diritto alla riservatezza dei membri della propria community. Per eventuali domande o dubbi in merito alla presente informativa sulla riservatezza o alle pratiche adottate dalla Società in relazione alle informazioni personali, si invita a fare riferimento a "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [o("span", [this._v("support@pokemonkidswinterfest.com")])]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("The Pokémon Company International, Inc. apprezza il fatto che, visitando il sito Web "), o("span", [this._v("www.pokemonkidswinterfest.com")]), this._v(" (il “Sito Web”) e, più in generale, utilizzando i servizi della Società (i “Servizi” che includono il Sito Web), gli utenti affidino le proprie informazioni personali alla Società stessa. La riservatezza delle informazioni degli utenti è trattata con serietà dalla Società. La presente informativa sulla riservatezza è stata redatta per cercare di spiegare nella maniera più chiara possibile agli utenti la tipologia di informazioni raccolte, le relative modalità di utilizzo e i diritti dell'utente in relazione a tali informazioni. Data l'importanza di questo documento, l'utente dovrebbe dedicare il tempo necessario a una lettura attenta dell'informativa. In caso di mancato consenso su uno qualsiasi dei termini della presente informativa sulla riservatezza, si invita a interrompere immediatamente l'utilizzo dei Servizi della Società.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("In sintesi: Alcune informazioni – come l'indirizzo del protocollo internet (IP) e/o le caratteristiche del browser e del dispositivo dell'utente – vengono raccolte automaticamente al momento dell'accesso al ")]), o("span", [o("i", [this._v("Sito Web")])]), o("i", [this._v(". La Società non raccoglie indirizzi e-mail o altre informazioni personali fatto salvo per il Nickname scelto dall'utente e l'avanzamento nel gioco.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("b", [o("i", [this._v("Cosa si intende per informazioni personali?")])]), o("br"), this._v("I dati personali sono tutti i tipi di informazioni che identificano direttamente o indirettamente una persona fisica in vita. Di conseguenza, nome, indirizzo e numero di telefono, ma anche dati di log e dati criptati e altri tipi di identificativi elettronici (ad esempio gli indirizzi IP), sono tutti esempi di dati personali nel caso in cui possano essere collegati a una persona fisica in vita.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("La Società raccoglie automaticamente alcune informazioni in fase di accesso, utilizzo o navigazione del "), o("span", [this._v("Sito Web")]), this._v(". Tali informazioni non rivelano l'identità specifica dell'utente (come il nome o le informazioni di contatto) ma possono includere informazioni sul dispositivo e sull'utilizzo, come l'indirizzo IP, le caratteristiche del browser e del dispositivo, il sistema operativo, le preferenze linguistiche, gli URL di riferimento, il nome del dispositivo, il Paese, la posizione, informazioni sull'utente e le tempistiche di utilizzo del "), o("span", [this._v("Sito Web")]), this._v(" e altre informazioni tecniche. Queste informazioni sono necessarie principalmente per garantire la sicurezza e il funzionamento del "), o("span", [this._v("Sito Web")]), this._v(" e per finalità di reporting e analisi interne.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Come molte aziende, la Società raccoglie informazioni anche attraverso cookie e tecnologie simili. Per ulteriori informazioni in merito, si rimanda all'Informativa sui cookie della Società: "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "http://www.pokemonkidswinterfest.com/cookies"
                        }
                    }, [o("span", [this._v("www.pokemonkidswinterfest.com/cookies")])]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("ul", [o("li", [o("i", [this._v("Dati di utilizzo e log")]), this._v(": Dati di utilizzo e log sono informazioni relative ai servizi, all'uso a fini diagnostici e alle prestazioni che sono raccolte automaticamente dai server quando si accede o utilizza il Sito web e che sono memorizzate nei file di log. A seconda delle modalità di interazione con la Società, questi dati di log possono includere indirizzo IP, informazioni sul dispositivo, tipo di browser e impostazioni, e informazioni sull'attività dell'utente sul Sito Web (come la data e l'ora associate all'utilizzo, le pagine e i file visualizzati, le ricerche e altre azioni intraprese, come ad esempio le funzioni utilizzate), informazioni sugli eventi del dispositivo (come l'attività di sistema, i rapporti di errore [a volte noti come \"crash dump\"] e le impostazioni hardware).")]), this._v(" "), o("li", [o("i", [this._v("Dati del dispositivo")]), this._v(":La Società raccoglie i dati del dispositivo, come le informazioni relative a computer, telefono, tablet o altri dispositivi utilizzati per accedere al "), o("span", [this._v("Sito Web")]), this._v(". A seconda del dispositivo utilizzato, questi dati del dispositivo possono includere informazioni quali l'indirizzo IP (o il server proxy), i numeri identificativi dell'applicazione del dispositivo, la posizione, il tipo di browser, il modello di hardware, il provider di servizi Internet e/o il gestore di telefonia mobile e le informazioni sulla configurazione del sistema operativo.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("In sintesi")]), this._v(":"), o("i", [this._v(" La Società tratta le informazioni per scopi basati su legittimi interessi commerciali, sull'adempimento del contratto con l'utente, sul rispetto di obblighi di legge della Società e/o sul consenso dell'utente.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Le informazioni raccolte o ricevute sono utilizzate al fine di:"), o("span", [o("br")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("ul", [o("li", [this._v("Gestire gli account utente. Le informazioni dell'utente possono essere utilizzate per la gestione dell'account e per tenerlo in ordine."), o("span", [o("br")])]), this._v(" "), o("li", [this._v("Proteggere i Servizi. Le informazioni dell'utente possono essere utilizzate nell'ambito delle misure adottate dalla Società per garantire la sicurezza e protezione del Sito Web (per esempio, per il monitoraggio e la prevenzione delle truffe).")]), this._v(" "), o("li", [this._v("Far rispettare termini, condizioni e politiche per finalità aziendali, per rispettare obblighi di legge e normativi o in relazione al contratto della Società.")]), this._v(" "), o("li", [this._v("Dar seguito a richieste di natura legale ed evitare danni. In caso riceva una citazione in giudizio o altra richiesta di natura legale, la Società potrebbe avere bisogno di verificare i dati in suo possesso prima di dare una risposta.")])])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("table", {
                        attrs: {
                            cellspacing: "0",
                            cellpadding: "0"
                        }
                    }, [n("tbody", [n("tr", [n("td", [n("p", [e._v("Dati raccolti")])]), e._v(" "), n("td", [n("p", [e._v("Utilizzo")])])]), e._v(" "), n("tr", [n("td", [n("p", [e._v("Nickname")])]), e._v(" "), n("td", [n("p", [e._v("Utilizzato nelle classifiche e nel profilo Trainer.")])])]), e._v(" "), n("tr", [n("td", [n("p", [e._v("Dati di gioco")])]), e._v(" "), n("td", [n("p", [e._v("Utilizzati per garantire che l'avanzamento nel gioco sia salvato correttamente in modo da poter tornare e proseguire dal punto in cui l'utente era rimasto.")])])]), e._v(" "), n("tr", [n("td", [n("p", [e._v("Dati analitici")])]), e._v(" "), n("td", [n("p", [e._v("Utilizzati per monitorare le prestazioni del Sito Web in modo da poter apportare eventuali modifiche per migliorare ulteriormente l'esperienza dell'utente.")])])])])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("In sintesi: La Società condivide le informazioni solo con il consenso dell'utente al fine di rispettare la normativa vigente, fornire i servizi, proteggere i diritti dell'utente o adempiere ad obblighi commerciali. I dati dell'utente saranno detenuti esclusivamente ad uso interno e non saranno in nessun caso trasmessi a terzi.")])])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("ul", [n("li", [n("i", [e._v("Consenso")]), e._v(": I dati dell'utente possono essere trattati laddove sia stato fornito il consenso specifico all'utilizzo dei dati personali dell'utente per uno scopo specifico.")]), e._v(" "), n("li", [n("span", [n("i", [e._v("Legittimi interessi")]), e._v(": I dati dell'utente possono essere trattati laddove sia ragionevolmente necessario per tutelare i legittimi interessi commerciali. ")]), e._v("Le informazioni relative all'utente possono essere divulgate laddove ritenuto necessario per accertare, prevenire o agire in merito a potenziali violazioni delle politiche della Società, sospette truffe, situazioni che comportano potenziali minacce alla sicurezza di qualsivoglia persona e attività illegali, o come prova in un contenzioso in cui la Società sia parte.")]), e._v(" "), n("li", [n("i", [e._v("Esecuzione di un contratto")]), e._v(":Laddove sia stato stipulato un contratto con l'utente, le informazioni personali dell'utente possono essere trattate per adempiere ai termini di tale contratto.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("ul", [o("li", [o("i", [this._v("Finalità aziendali")]), this._v(": Laddove sia stato stipulato un contratto con fornitori terzi, consulenti e altri fornitori di servizi che lavorano per la Società e che hanno bisogno di accedere alle informazioni personali dell'utente per svolgere tale lavoro, anche per finalità aziendali che richiedono l'accesso ai sistemi in cui sono detenute le informazioni personali (come fornire cloud data storage, garantire la sicurezza dei sistemi e fornire assistenza ai clienti).")]), this._v(" "), o("li", [o("i", [this._v("Obblighi di legge")]), this._v(":Le informazioni dell'utente possono essere divulgate laddove la Società sia legalmente obbligata in tal senso in ottemperanza a legge applicabile, richieste delle autorità, in virtù di un procedimento giudiziario, un provvedimento del giudice o un processo, come ad esempio in risposta a un provvedimento del giudice o a un citazione in giudizio (anche in risposta a enti pubblici per soddisfare esigenze di sicurezza nazionale o amministrazione della giustizia).")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("ul", [o("li", [o("i", [this._v("Trasferimenti di imprese")]), this._v(": Le informazioni dell'utente possono essere condivise o trasferite in relazione a qualsiasi fusione, vendita di asset aziendali, finanziamento o acquisizione dell'attività, o di una sua parte, di un'altra società ovvero durante le trattative per qualsiasi fusione, vendita di asset aziendali, finanziamento o acquisizione dell'attività, o di una sua parte, di un'altra società.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("In sintesi")]), this._v(":"), o("i", [this._v(" La Società può utilizzare cookie e altre tecnologie di tracciamento per raccogliere e memorizzare le informazioni dell'utente.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("La Società può utilizzare cookie e tecnologie di tracciamento simili (come web beacon e pixel) per accedere alle informazioni dell'utente e memorizzarle. Per informazioni specifiche sulle modalità di utilizzo di tali tecnologie e sulle modalità di rifiutare determinati cookie si rimanda all'Informativa sui cookie della Società: "), o("span", [this._v("www.pokemonkidswinterfest.com/cookies")]), o("span", [this._v(".")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("In sintesi")]), this._v(":"), o("i", [this._v(" Le informazioni dell'utente possono essere trasferite, memorizzate e trattate in Paesi diversi da quello dell'utente.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("In sintesi")]), this._v(":"), o("i", [this._v(" La Società conserva le informazioni dell'utente per il tempo necessario a soddisfare le finalità indicate nella presente informativa sulla riservatezza, ove non diversamente disposto dalla legge.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("La Società conserverà le informazioni personali dell'utente solo per il tempo necessario a soddisfare le finalità indicate nella presente informativa sulla riservatezza, a meno che per legge non sia richiesto o consentito un periodo di conservazione più lungo (ad esempio, per obblighi fiscali, contabili o legali di altra natura). Nessuna finalità della presente informativa consentirà la conservazione delle informazioni personali dell'utente per un periodo superiore "), o("span", [this._v("a sei (6) mesi dall'inizio del periodo di inattività dell'account dell'utente")]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("In sintesi:")]), this._v(": "), o("i", [this._v("L'obiettivo della Società è proteggere le informazioni personali dell'utente attraverso un sistema di misure di sicurezza organizzative e tecniche.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("In sintesi")]), this._v(":"), o("i", [this._v(" L'utente può esaminare, modificare o chiudere il proprio account in qualsiasi momento. L'utente ha il \"diritto all'oblio\" e ha facoltà di revocare il consenso all'utilizzo dei propri dati in qualsiasi momento.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Si segnala ai residenti nello Spazio Economico Europeo che, laddove temano un trattamento illecito delle proprie informazioni personali, hanno facoltà di presentare un reclamo all'autorità di controllo locale per la protezione dei dati. I riferimenti sono reperibili al seguente link: "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                        }
                    }, [o("span", [this._v("http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm")])]), o("span", [this._v(".")])])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("ul", [n("li", [e._v("Il diritto di essere informati sulle modalità di utilizzo delle informazioni.")]), e._v(" "), n("li", [e._v("Il diritto di richiedere a Pokémon l'accesso e la rettifica o la cancellazione delle informazioni personali, e alcuni diritti alla portabilità dei dati, e il diritto di dare istruzioni sull'uso e la divulgazione dei propri dati personali dopo la morte.")]), e._v(" "), n("li", [e._v("Il diritto di opporsi al trattamento delle informazioni personali o di ottenere una limitazione di tale trattamento in determinate circostanze.")]), e._v(" "), n("li", [e._v("Il diritto di far trasferire i dati personali a un'altra organizzazione qualora tecnicamente fattibile per Pokémon.")]), e._v(" "), n("li", [e._v("Laddove il trattamento dei dati personali si basi sul consenso prestato, il diritto a revocare il consenso in qualsiasi momento (senza pregiudicare la liceità del trattamento effettuato prima della revoca).")]), e._v(" "), n("li", [e._v("Dato che in alcune circostanze questi diritti possono essere soggetti a eccezioni, nel caso in cui non sia possibile esercitare un diritto a causa di un'eccezione, la Società fornirà una giustificazione all'utente.")]), e._v(" "), n("li", [e._v("Il diritto di presentare un reclamo a un'autorità di regolamentazione. Si segnala a chi ha sede nello Spazio Economico Europeo che, laddove ritenga che la Società non abbia rispettato le leggi sulla protezione dei dati, l'utente ha facoltà di presentare un reclamo all'autorità di controllo locale per la protezione dei dati;tuttavia, Pokémon gradirebbe e si rende disponibile, previo contatto, ad affrontare direttamente con l'utente eventuali dubbi.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Per i residenti in Svizzera, i dati di contatto delle autorità di controllo per la protezione dei dati sono disponibili qui: "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "https://www.edoeb.admin.ch/edoeb/en/home.html"
                        }
                    }, [o("span", [this._v("https://www.edoeb.admin.ch/edoeb/en/home.html")])]), o("span", [this._v(".")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Per eventuali domande o commenti sui diritti alla riservatezza dell'utente, è possibile contattare via e-mail la Società a "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [o("span", [this._v("support@pokemonkidswinterfest.com")])]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("span", [o("span"), this._v("■")]), this._v("Contattare la Società utilizzando le informazioni di contatto trasmesse.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("span", [this._v("Cookie e tecnologie simili:")]), this._v(" La maggior parte dei browser è impostata per accettare i cookie per impostazione predefinita. Diversamente è in genere possibile scegliere di impostare il proprio browser in modo da cancellare i cookie e bloccare i cookie. La scelta di rimuovere i cookie o di bloccarli potrebbe influire su alcune caratteristiche o servizi del Sito Web.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("In sintesi")]), this._v(":"), o("i", [this._v(" Sì i residenti in California godono di diritti specifici per quanto riguarda l'accesso alle informazioni personali.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("In sintesi")]), this._v(":"), o("i", [this._v(" breve: Sì, quest'informativa sarà modificata per quanto necessario a rispettare le leggi in materia.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Per eventuali domande o commenti in merito alla presente informativa è possibile contattare via e-mail la Società a "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [o("span", [this._v("support@pokemonkidswinterfest.com")])]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("In base alle leggi vigenti nel Paese dell'utente, l'utente può avere il diritto di richiedere l'accesso alle informazioni personali raccolte che lo riguardano, di modificare tali informazioni o di cancellarle in alcune circostanze. Per richiedere di esaminare, aggiornare o cancellare le informazioni personali dell'utente, è necessario inviare una richiesta via e-mail all'indirizzo "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [o("span", [this._v("support@pokemonkidswinterfest.com")])]), this._v(". La Società risponderà entro 30 giorni alla richiesta.")])
                }], !1, null, null, null).exports,
                O = {
                    props: ["content"],
                    methods: {
                        scrollMeTo: function(e) {
                            var o = this.$refs[e].offsetTop;
                            document.getElementById("privacy").scrollTop = o
                        }
                    }
                },
                L = Object(r.a)(O, (function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("div", [n("p", [e._v("POLÍTICA DE PRIVACIDAD")]), e._v(" "), e._m(0), e._v(" "), e._m(1), e._v(" "), e._m(2), e._v(" "), n("p", [e._v("Por favor, lea atentamente este aviso de privacidad, ya que le ayudará a entender lo que hacemos con la información que recopilamos.")]), e._v(" "), n("p", [e._v("ÍNDICE")]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T1")
                            }
                        }
                    }, [e._v("1. ¿QUÉ INFORMACIÓN RECOPILAMOS?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T2")
                            }
                        }
                    }, [e._v("2. ¿CÓMO UTILIZAMOS SU INFORMACIÓN?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T3")
                            }
                        }
                    }, [e._v("3. ¿COMPARTIREMOS CON ALGUIEN SU INFORMACIÓN?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T4")
                            }
                        }
                    }, [e._v("4. ¿UTILIZAMOS "), n("i", [e._v("COOKIES ")]), e._v("Y OTRAS TECNOLOGÍAS DE SEGUIMIENTO?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T5")
                            }
                        }
                    }, [e._v("5. ¿SE TRANSFIERE SU INFORMACIÓN A ESCALA INTERNACIONAL?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T6")
                            }
                        }
                    }, [e._v("6. ¿DURANTE CUÁNTO TIEMPO GUARDAMOS SU INFORMACIÓN?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T7")
                            }
                        }
                    }, [e._v("7. ¿CÓMO MANTENEMOS LA SEGURIDAD DE SU INFORMACIÓN?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T8")
                            }
                        }
                    }, [e._v("8. ¿CUÁLES SON SUS DERECHOS DE PRIVACIDAD?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T9")
                            }
                        }
                    }, [e._v('9. CONTROL DE LAS FUNCIONES "DO NOT TRACK"')])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T10")
                            }
                        }
                    }, [e._v("10. ¿DISFRUTAN LOS RESIDENTES DEL ESTADO DE CALIFORNIA DE UNOS DERECHOS DE PRIVACIDAD ESPECÍFICOS?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T11")
                            }
                        }
                    }, [e._v("11. ¿REALIZAMOS ACTUALIZACIONES DE ESTE AVISO?")])])]), e._v(" "), n("p", [n("span", [n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T12")
                            }
                        }
                    }, [e._v("12. ¿CÓMO PUEDE PONERSE EN CONTACTO CON NOSOTROS A PROPÓSITO DE ESTE AVISO?")])])]), e._v(" "), n("p", {
                        ref: "T1"
                    }, [e._v("1. ¿QUÉ INFORMACIÓN RECOPILAMOS?")]), e._v(" "), n("p", [e._v("Información recopilada automáticamente")]), e._v(" "), e._m(3), e._v(" "), e._m(4), e._v(" "), e._m(5), e._v(" "), e._m(6), e._v(" "), n("p", [e._v("Entre la información que recopilamos se incluye la siguiente:")]), e._v(" "), e._m(7), e._v(" "), n("p", {
                        ref: "T2"
                    }, [e._v("2. ¿CÓMO UTILIZAMOS SU INFORMACIÓN?")]), e._v(" "), e._m(8), e._v(" "), n("p", [e._v("Utilizamos la información personal recopilada a través de nuestro Sitio web para diferentes fines comerciales que se describen a continuación. Procesamos su información personal para estos fines basándonos en nuestros intereses comerciales legítimos, con el fin de suscribir o cumplir un contrato con usted, con su consentimiento o para el cumplimiento de nuestras obligaciones legales. Indicamos los motivos de procesamiento específicos en los que nos basamos junto a cada uno de los fines enumerados a continuación.")]), e._v(" "), e._m(9), e._v(" "), e._m(10), e._v(" "), n("p", [e._v("Estos son los datos que recopilamos y su uso:")]), e._v(" "), e._m(11), e._v(" "), n("p", {
                        ref: "T3"
                    }, [e._v("3. ¿COMPARTIREMOS CON ALGUIEN SU INFORMACIÓN?")]), e._v(" "), e._m(12), e._v(" "), n("p", [e._v("Puede que procesemos o compartamos los datos de que disponemos basándonos en el fundamento legal siguiente:")]), e._v(" "), e._m(13), e._v(" "), e._m(14), e._v(" "), n("p", [e._v("Más concretamente, puede que necesitemos procesar sus datos o compartir su información personal en las siguientes situaciones:")]), e._v(" "), e._m(15), e._v(" "), n("p", {
                        ref: "T4"
                    }, [e._v("4. ¿UTILIZAMOS "), n("i", [e._v("COOKIES ")]), e._v("Y OTRAS TECNOLOGÍAS DE SEGUIMIENTO?")]), e._v(" "), e._m(16), e._v(" "), e._m(17), e._v(" "), n("p", {
                        ref: "T5"
                    }, [e._v("5. ¿SE TRANSFIERE SU INFORMACIÓN A ESCALA INTERNACIONAL?")]), e._v(" "), e._m(18), e._v(" "), n("p", [e._v('Nuestros servidores están ubicados en Europa. Si accede a nuestro Sitio web desde el exterior, tenga en cuenta que su información puede ser transferida, guardada y procesada por nosotros en nuestras instalaciones y por aquellos terceros con los que podamos compartir su información personal (véase el apartado "'), n("a", {
                        on: {
                            click: function(o) {
                                return o.preventDefault(), e.scrollMeTo("T3")
                            }
                        }
                    }, [n("span", [e._v("¿COMPARTIREMOS CON ALGUIEN SU INFORMACIÓN?")])]), e._v('" anterior) en y en otros países.')]), e._v(" "), n("p", [e._v("Si es residente del Espacio Económico Europeo, es posible que estos países no cuenten necesariamente con leyes de protección de datos u otras leyes similares tan completas como las de su país. Adoptaremos, no obstante, todas las medidas necesarias para proteger su información personal de acuerdo con este aviso de privacidad y con la legislación aplicable.")]), e._v(" "), n("p", {
                        ref: "T6"
                    }, [e._v("6. ¿DURANTE CUÁNTO TIEMPO GUARDAMOS SU INFORMACIÓN?")]), e._v(" "), e._m(19), e._v(" "), e._m(20), e._v(" "), n("p", [e._v("Cuando no tengamos ninguna necesidad comercial legítima actual de procesar su información personal, eliminaremos o anonimizaremos dicha información o, si no es posible hacerlo (por ejemplo, porque su información personal se ha guardado en archivos de copia de seguridad), guardaremos de forma segura su información personal y la aislaremos de cualquier procesamiento posterior hasta que sea posible su eliminación.")]), e._v(" "), n("p", {
                        ref: "T7"
                    }, [e._v("7. ¿CÓMO MANTENEMOS LA SEGURIDAD DE SU INFORMACIÓN?")]), e._v(" "), e._m(21), e._v(" "), e._m(22), e._v(" "), n("p", {
                        ref: "T8"
                    }, [e._v("8. ¿CUÁLES SON SUS DERECHOS DE PRIVACIDAD?")]), e._v(" "), e._m(23), e._v(" "), e._m(24), e._v(" "), n("p", [e._v("Los residentes del Espacio Económico Europeo tienen también los siguientes derechos:")]), e._v(" "), e._m(25), e._v(" "), e._m(26), e._v(" "), e._m(27), e._v(" "), n("p", [e._v("Información de la cuenta")]), e._v(" "), n("p", [e._v("Si en cualquier momento desea revisar o modificar la información de su cuenta o cancelar su cuenta, puede hacer lo siguiente:")]), e._v(" "), e._m(28), e._v(" "), n("p", [e._v("Tras solicitar la cancelación de su cuenta, desactivaremos o eliminaremos su cuenta y la información de nuestras bases de datos activas. Sin embargo, puede que conservemos cierta información en nuestros archivos para evitar fraudes, solucionar problemas, ayudar en cualquier investigación, hacer cumplir nuestros Términos y condiciones o cumplir con los requisitos legales aplicables.")]), e._v(" "), e._m(29), e._v(" "), e._m(30), e._v(" "), n("p", {
                        ref: "T9"
                    }, [e._v('9. CONTROL DE LAS FUNCIONES "DO NOT TRACK"')]), e._v(" "), n("p", [e._v('La mayoría de los navegadores web y algunos sistemas operativos y aplicaciones móviles incluyen una función de no seguimiento (Do Not Track o "DNT") o una configuración que puede activar para indicar su preferencia de privacidad de que no se supervisen ni se recopilen datos sobre sus actividades de navegación en línea. Por el momento, no se ha ultimado ninguna norma tecnológica uniforme para el reconocimiento y la aplicación de señales DNT. Por tanto, actualmente no respondemos a señales del navegador DNT o a cualquier otro mecanismo que comunique automáticamente su elección de que no se realice un seguimiento en línea. Si se adopta una norma para el seguimiento en línea que debamos seguir en el futuro, le informaremos sobre dicha práctica en una versión revisada de este aviso de privacidad.')]), e._v(" "), n("p", {
                        ref: "T10"
                    }, [e._v("10. ¿DISFRUTAN LOS RESIDENTES DEL ESTADO DE CALIFORNIA DE UNOS DERECHOS DE PRIVACIDAD ESPECÍFICOS?")]), e._v(" "), e._m(31), e._v(" "), n("p", [e._v("No vendemos su información personal según la definición de la CCPA y no lo hemos hecho en los últimos 12 meses.")]), e._v(" "), e._m(32), e._v(" "), n("p", [e._v("Tiene derecho a no ser discriminado por ejercer cualquiera de estos derechos.")]), e._v(" "), n("p", [e._v("Si es usted menor de 18 años, reside en California y tiene una cuenta registrada en el Sitio web, tiene derecho a solicitar la eliminación de los datos no deseados que publique en el Sitio web. Para solicitar la eliminación de dichos datos, póngase en contacto con nosotros utilizando la información de contacto indicada a continuación e incluya la dirección de correo electrónico asociada a su cuenta, así como una declaración de que reside en California. Nos aseguraremos de que los datos no se muestren públicamente en el Sitio web, pero tenga en cuenta que los datos no se pueden eliminar íntegramente o en su totalidad de todos nuestros sistemas (p. ej., copias de seguridad, etc.).")]), e._v(" "), n("p", {
                        ref: "T11"
                    }, [e._v("11. ¿REALIZAMOS ACTUALIZACIONES DE ESTE AVISO?")]), e._v(" "), e._m(33), e._v(" "), n("p", [e._v('Puede que actualicemos este aviso de privacidad cada cierto tiempo. La versión actualizada se indicará con una fecha "Revisada" actualizada y la versión actualizada entrará en vigor en cuanto esté accesible. Si realizamos cambios sustanciales en este aviso de privacidad, podemos notificárselo ya sea incluyendo un aviso de dichos cambios en un lugar destacado o enviándole directamente una notificación. Le animamos a revisar cada cierto tiempo este aviso de privacidad para estar informado de cómo estamos protegiendo su información.')]), e._v(" "), n("p", {
                        ref: "T12"
                    }, [e._v("12. ¿CÓMO PUEDE PONERSE EN CONTACTO CON NOSOTROS A PROPÓSITO DE ESTE AVISO?")]), e._v(" "), e._m(34), e._v(" "), n("p", [e._v("¿CÓMO PUEDE REVISAR, ACTUALIZAR O ELIMINAR LOS DATOS QUE RECOPILAMOS SOBRE USTED?")]), e._v(" "), e._m(35)])
                }), [function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v('Gracias por formar parte de la comunidad de The Pokémon Company International, Inc. ("Empresa", "nosotros", "nos" o "nuestro/a"). Nos comprometemos a proteger su información personal y su derecho a la privacidad. Si tiene alguna pregunta o problema relacionados con este aviso de privacidad, o con nuestras prácticas respecto de su información personal, póngase en contacto con nosotros en '), o("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [o("span", [this._v("support@pokemonkidswinterfest.com")])]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Al visitar nuestro sitio web "), o("span", [this._v("www.pokemonkidswinterfest.com")]), this._v(' (el "Sitio web") y, con carácter más general, al utilizar cualquiera de nuestros servicios (los "Servicios", que incluyen el Sitio web), le agradecemos que nos confíe su información personal. Nos tomamos su privacidad muy en serio. En este aviso de privacidad tratamos de explicarle de la manera más clara posible qué información recopilamos, cómo la utilizamos y qué derechos tiene en relación con ella. Esperamos que lo lea atentamente, ya que es importante. Si hay algún término en este aviso de privacidad con el que no esté de acuerdo, por favor deje de utilizar nuestros Servicios inmediatamente.')])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Este aviso de privacidad es aplicable a toda la información recopilada a través de nuestros Servicios (que, como se ha indicado anteriormente, incluye nuestro Sitio web), así como cualquier servicio, venta, acción de "), o("i", [this._v("marketing ")]), this._v("o evento relacionados.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En resumen: Cierta información —como su dirección IP o las características de su navegador y dispositivo— se recopila automáticamente cuando visita nuestro ")]), o("span", [o("i", [this._v("Sitio web")])]), o("i", [this._v(". No recopilamos direcciones de correo electrónico u otra información personal que no sea el alias elegido y el progreso del juego.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("b", [o("i", [this._v("¿Qué es información personal?")])]), o("br"), this._v("Los datos personales son todo tipo de información que identifique directa o indirectamente a una persona física que esté viva. Esto significa que, por ejemplo, el nombre, la dirección y el número de teléfono, pero también los datos de registro y los datos cifrados y otros tipos de identificadores electrónicos (p. ej., direcciones IP) son datos personales si están vinculados a una persona física que esté viva.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Recopilamos automáticamente cierta información cuando visita, utiliza o navega por el "), o("span", [this._v("Sitio web")]), this._v(". Esta información no revela su identidad específica (como su nombre o información de contacto), pero puede incluir información del dispositivo y de uso, como su dirección IP, las características del navegador y del dispositivo, el sistema operativo, las preferencias de idioma, la URL de referencia, el nombre del dispositivo, el país, la ubicación, la información sobre quién y cuándo utiliza nuestro "), o("span", [this._v("Sitio web,")]), this._v(" así como otra información técnica. Esta información se necesita principalmente para mantener la seguridad y el funcionamiento de nuestro "), o("span", [this._v("Sitio web")]), this._v(" y para fines internos de análisis y elaboración de informes.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Como muchas empresas, también recopilamos información a través de "), o("i", [this._v("cookies ")]), this._v("y tecnologías similares. Encontrará más información al respecto en nuestra Política de "), o("i", [this._v("cookies")]), this._v(": "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "http://www.pokemonkidswinterfest.com/cookies"
                        }
                    }, [o("span", [this._v("www.pokemonkidswinterfest.com/cookies")])]), this._v(".")])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("ul", [n("li", [n("i", [e._v("Datos de registro y de uso")]), e._v(": los datos de registro y de uso son información relacionada con el servicio, el diagnóstico de uso y el rendimiento que nuestros servidores recopilan automáticamente cuando accede o utiliza nuestro Sitio web y que almacenamos en archivos de registro. Dependiendo de cómo interactúe con nosotros, estos datos de registro pueden incluir su dirección IP, información del dispositivo, tipo de navegador y ajustes e información sobre su actividad en el Sitio web (como las marcas de fecha/hora asociadas a su uso, páginas y archivos vistos, búsquedas y otras acciones que realice como, por ejemplo, las funciones que utilice), información sobre eventos del dispositivo (p. ej., actividad del sistema, informes de errores [denominados en ocasiones "), n("i", [e._v('"crash dumps"')]), e._v("] y configuración del "), n("i", [e._v("hardware")]), e._v(").")]), e._v(" "), n("li", [n("i", [e._v("Datos del dispositivo")]), e._v(":Recopilamos datos del dispositivo, como información sobre su computadora, teléfono, tableta u otro dispositivo que utilice para acceder al "), n("span", [e._v("Sitio web")]), e._v(". Dependiendo del dispositivo utilizado, estos datos del dispositivo pueden incluir información como su dirección IP (o servidor proxy), los números de identificación de la aplicación del dispositivo, la ubicación, el tipo de navegador, el modelo de "), n("i", [e._v("hardware")]), e._v(", el proveedor de servicios de internet o la compañía de telefonía móvil, además de información sobre la configuración del sistema operativo.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En resumen")]), this._v(":"), o("i", [this._v(" Procesamos su información con fines basados en intereses comerciales legítimos, el cumplimiento de nuestro contrato con usted, el cumplimiento de nuestras obligaciones legales o porque contamos con su consentimiento.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Utilizamos la información que recopilamos o recibimos:"), o("span", [o("br")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("ul", [o("li", [this._v("Para gestionar cuentas de usuario. Puede que utilicemos su información para gestionar nuestra cuenta y mantenerla operativa."), o("span", [o("br")])]), this._v(" "), o("li", [this._v("Para proteger nuestros Servicios. Puede que utilicemos su información como parte de nuestros esfuerzos por mantener nuestro Sitio web seguro y protegido (por ejemplo, para vigilar y evitar que se cometan fraudes).")]), this._v(" "), o("li", [this._v("Para hacer cumplir nuestros términos, condiciones y políticas con fines comerciales, para cumplir con los requisitos legales y reglamentarios o en relación con nuestro contrato.")]), this._v(" "), o("li", [this._v("Para responder a solicitudes legales y evitar daños. Si recibimos una citación u otra solicitud legal, es posible que tengamos que inspeccionar los datos de que disponemos para determinar cómo responder.")])])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("table", {
                        attrs: {
                            cellspacing: "0",
                            cellpadding: "0"
                        }
                    }, [n("tbody", [n("tr", [n("td", [n("p", [e._v("Datos recopilados")])]), e._v(" "), n("td", [n("p", [e._v("Uso")])])]), e._v(" "), n("tr", [n("td", [n("p", [e._v("Alias")])]), e._v(" "), n("td", [n("p", [e._v('Se utiliza en tablas de clasificación en el perfil "Entrenador".')])])]), e._v(" "), n("tr", [n("td", [n("p", [e._v("Datos del juego")])]), e._v(" "), n("td", [n("p", [e._v("Se utilizan para garantizar que el progreso del juego se guarda correctamente para que pueda volver y continuar donde se quedó.")])])]), e._v(" "), n("tr", [n("td", [n("p", [e._v("Datos de análisis")])]), e._v(" "), n("td", [n("p", [e._v("Se utilizan para supervisar el rendimiento del Sitio web y poder realizar ajustes con vistas a mejorar su experiencia.")])])])])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En resumen: solo compartimos información con su consentimiento, para cumplir con las leyes, para prestarle servicios, para proteger sus derechos o para cumplir con obligaciones comerciales. Solo utilizaremos sus datos internamente y no los transferiremos a terceros en ningún caso.")])])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("ul", [n("li", [n("i", [e._v("Consentimiento")]), e._v(": puede que procesemos sus datos si nos ha dado su consentimiento específico para utilizar su información personal con un fin específico.")]), e._v(" "), n("li", [n("span", [n("i", [e._v("Intereses legítimos")]), e._v(": puede que procesemos sus datos cuando sea razonablemente necesario para lograr nuestros intereses comerciales legítimos. ")]), e._v("Puede que revelemos su información cuando creamos que es necesario para investigar, prevenir o tomar medidas con respecto a posibles incumplimientos de nuestras políticas, sospechas de fraude, situaciones que impliquen posibles amenazas a la seguridad de cualquier persona y actividades ilegales, o como prueba en un litigio en el que estemos implicados.")]), e._v(" "), n("li", [n("i", [e._v("Cumplimiento de un contrato")]), e._v(": cuando hayamos suscrito un contrato con usted, puede que procesemos su información personal para cumplir con los términos de nuestro contrato.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("ul", [o("li", [o("i", [this._v("Fines comerciales")]), this._v(": cuando hayamos suscrito un contrato con terceros proveedores, consultores y otros proveedores de servicios que trabajen para nosotros y necesitemos acceder a su información personal para realizar ese trabajo, incluso para fines comerciales que requieran el acceso a nuestros sistemas que contienen información personal (como el suministro de almacenamiento de datos en la nube, el mantenimiento de la seguridad de nuestros sistemas y el servicio de atención al cliente).")]), this._v(" "), o("li", [o("i", [this._v("Obligaciones legales")]), this._v(": puede que divulguemos su información cuando estemos legalmente obligados a hacerlo para cumplir con la ley aplicable, una solicitud gubernamental, un procedimiento judicial, una orden judicial o un proceso legal como, por ejemplo, en respuesta a una orden judicial o una citación (incluso en respuesta a las autoridades públicas para cumplir con los requisitos de seguridad nacional o de aplicación de la ley).")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("ul", [o("li", [o("i", [this._v("Transferencias comerciales")]), this._v(": puede que compartamos o transfiramos su información en relación con, o durante las negociaciones de cualquier fusión, venta de activos de la empresa, financiación o adquisición de la totalidad o una parte de nuestro negocio a otra empresa.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En resumen")]), this._v(":"), o("i", [this._v(" puede que utilicemos cookies y otras tecnologías de seguimiento para recopilar y almacenar su información.")])])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("p", [e._v("Puede que utilicemos "), n("i", [e._v("cookies ")]), e._v("y tecnologías de seguimiento similares (como balizas web y pixeles) para acceder a información o guardarla. La información específica sobre cómo usamos esas tecnologías y cómo puede rechazar ciertas "), n("i", [e._v("cookies ")]), e._v("se establece en nuestra Política de "), n("i", [e._v("cookies")]), e._v(": "), n("span", [e._v("www.pokemonkidswinterfest.com/cookies")]), n("span", [e._v(".")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En resumen")]), this._v(":"), o("i", [this._v(" puede que transfiramos, guardemos y procesemos su información en otros países además del suyo.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En resumen")]), this._v(":"), o("i", [this._v(" conservamos su información el tiempo que sea necesario para cumplir con los fines descritos en este aviso de privacidad, a menos que la ley estipule lo contrario.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Solo conservaremos su información personal durante el tiempo que sea necesario para los fines establecidos en este aviso de privacidad, a menos que la ley exija o permita un período de conservación más largo (debido, por ejemplo, a requisitos fiscales, contables o de otro tipo). Ningún fin recogido en este aviso requerirá que mantengamos su información personal durante más de "), o("span", [this._v("seis (6) meses después del comienzo del período de inactividad de la cuenta del usuario")]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En resumen")]), this._v(": "), o("i", [this._v("nuestro objetivo es proteger su información personal mediante un sistema de medidas de seguridad organizativas y técnicas.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Hemos puesto en práctica medidas de seguridad técnicas y organizativas adecuadas para proteger la seguridad de cualquier información personal que procesemos. Sin embargo, a pesar de nuestras precauciones y esfuerzos para proteger su información, ninguna transmisión electrónica a través de internet o de una tecnología de almacenamiento de información puede garantizarse que sea 100 % segura, por lo que no podemos prometer o garantizar que "), o("i", [this._v("hackers")]), this._v(", ciberdelincuentes u otros terceros no autorizados no puedan burlar nuestros sistemas de seguridad y recopilar, acceder, robar o modificar su información de forma inadecuada. Aunque haremos todo lo posible para proteger su información personal, la transmisión de información personal hacia y desde nuestro Sitio web será bajo su propia responsabilidad. Deberá acceder al Sitio web únicamente dentro de un entorno seguro.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En resumen")]), this._v(":"), o("i", [this._v(' puede revisar, modificar o cancelar su cuenta en cualquier momento. Tiene "derecho al olvido" y, en cualquier momento, puede retirar su consentimiento para que utilicemos sus datos.')])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Si es residente del Espacio Económico Europeo y cree que estamos procesando ilegalmente su información personal, tiene derecho también a reclamar a la autoridad supervisora local de protección de datos. Encontrará la información de contacto de dicha autoridad en: "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                        }
                    }, [o("span", [this._v("http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm")])]), o("span", [this._v(".")])])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("ul", [n("li", [e._v("El derecho a ser informado de las formas en que utilizamos su información.")]), e._v(" "), n("li", [e._v("El derecho a solicitar a Pokémon el acceso y la rectificación o eliminación de información personal, así como ciertos derechos de portabilidad de datos, y el derecho a dar instrucciones relativas al uso y la divulgación de sus datos personales tras su fallecimiento.")]), e._v(" "), n("li", [e._v("El derecho de oponerse al procesamiento de su información personal o de obtener una limitación de dicho procesamiento en determinadas circunstancias.")]), e._v(" "), n("li", [e._v("El derecho a que sus datos personales se transfieran a otra organización si para Pokémon resulta técnicamente posible hacerlo.")]), e._v(" "), n("li", [e._v("Si el tratamiento de los datos personales se basa en su consentimiento, el derecho a revocar el consentimiento en cualquier momento (sin que esto afecte a la legalidad del tratamiento antes de su revocación).")]), e._v(" "), n("li", [e._v("En determinadas circunstancias puede que haya excepciones a estos derechos y, si no puede ejercer un derecho debido a una excepción, le ofreceremos una explicación al respecto.")]), e._v(" "), n("li", [e._v("El derecho a presentar su reclamación a un organismo regulador. Si reside en el Espacio Económico Europeo (EEE) y cree que no hemos cumplido con las leyes de protección de datos, puede quejarse con la autoridad local de protección de datos; sin embargo, le agradeceríamos que le diera la oportunidad a Pokémon de tratar el asunto poniéndose en contacto directamente con nosotros.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Si reside en Suiza, la información de contacto de las autoridades de protección de datos está disponible en: "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "https://www.edoeb.admin.ch/edoeb/en/home.html"
                        }
                    }, [o("span", [this._v("https://www.edoeb.admin.ch/edoeb/en/home.html")])]), o("span", [this._v(".")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Si tiene alguna pregunta o comentario sobre sus derechos en materia de privacidad, puede enviarnos un correo electrónico a "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [o("span", [this._v("support@pokemonkidswinterfest.com")])]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("span", [o("span"), this._v("■")]), this._v("Póngase en contacto con nosotros utilizando la información de contacto facilitada.")])
                }, function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("p", [n("span", [n("i", [e._v("Cookies ")]), e._v("y tecnologías similares:")]), e._v(" La mayoría de los navegadores están configurados para aceptar por defecto las "), n("i", [e._v("cookies")]), e._v(". Si lo prefiere, puede configurar su navegador para que elimine las "), n("i", [e._v("cookies ")]), e._v("y las rechace. Si opta por eliminar o rechazar las "), n("i", [e._v("cookies")]), e._v(", determinadas funciones o servicios de nuestro Sitio web podrían verse afectados.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Si decide no aceptar las "), o("i", [this._v("cookies")]), this._v(', puede acceder al Sitio web en un "Modo invitado" limitado, en el que se desactivarán ciertas funciones para asegurar que siga disfrutando de la experiencia.')])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En resumen")]), this._v(":"), o("i", [this._v(" sí, si reside en California, disfrutará de derechos específicos en lo que respecta al acceso a su información personal.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("La sección 1798.83 del Código Civil de California, conocida también como la ley "), o("i", [this._v('"Shine The Light"')]), this._v(", permite a nuestros usuarios residentes en California solicitar y obtener de nuestra parte, una vez al año y de forma gratuita, información sobre las categorías de información personal (si las hubiera) que divulgamos a terceros con fines de comercialización directa, así como los nombres y direcciones de todos los terceros con los que compartimos información personal en el año natural inmediatamente anterior. Si reside en California y desea realizar dicha solicitud, puede enviárnosla por escrito utilizando la información de contacto indicada a continuación.")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [o("i", [this._v("En resumen")]), this._v(":"), o("i", [this._v(" sí, actualizaremos este aviso según sea necesario para cumplir con las leyes pertinentes.")])])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("Si tiene alguna pregunta o comentario sobre este aviso, puede enviarnos un correo electrónico a "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [o("span", [this._v("support@pokemonkidswinterfest.com")])]), this._v(".")])
                }, function() {
                    var e = this.$createElement,
                        o = this._self._c || e;
                    return o("p", [this._v("De acuerdo con las leyes aplicables de su país, puede que tenga derecho a solicitar acceso a la información personal que obtenemos de usted, modificar esa información o eliminarla en determinadas circunstancias. Para solicitar la revisión, actualización o eliminación de su información personal, envíenos un formulario de solicitud por correo electrónico a "), o("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [o("span", [this._v("support@pokemonkidswinterfest.com")])]), this._v(". Responderemos a su solicitud en un plazo de 30 días.")])
                }], !1, null, null, null).exports,
                P = Object(r.a)({}, (function() {
                    var e = this.$createElement;
                    this._self._c;
                    return this._m(0)
                }), [function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("div", [n("p", [n("b", [e._v("Termos e Condições")])]), e._v(" "), n("p", [e._v("Leia estes termos e condições cuidadosamente antes de usar nosso serviço.")]), e._v(" "), n("p", [n("b", [e._v("Interpretação e Definições")])]), e._v(" "), n("p", [n("b", [e._v("Interpretação")])]), e._v(" "), n("p", [e._v("As palavras cuja letra inicial é maiúscula têm significados definidos nas seguintes condições. As seguintes definições devem ter o mesmo significado, independentemente de aparecerem no singular ou no plural.")]), e._v(" "), n("p", [n("b", [e._v("Definições")])]), e._v(" "), n("p", [e._v("Para efeitos destes Termos e Condições:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v('Afiliada significa uma entidade que controla, é controlada por ou está sob o controle comum de uma parte, onde "controle" significa propriedade de 50% ou mais das ações, participação acionária ou outros títulos com direito a voto para eleição de diretores ou outras autoridades administrativas.')])]), e._v(" "), n("li", [n("span", [e._v("País se refere a: (1) Reino Unido para cidadãos do Reino Unido, Alemanha, Itália e Espanha, (2) França para cidadãos da França e (3) Estado de Washington para cidadãos dos Estados Unidos da América, México, Chile, Colômbia, Peru, Argentina, Panamá, Costa Rica, Guatemala, Honduras, Bolívia, Uruguai, Paraguai, Guatemala, El Salvador, República Dominicana e Brasil.")])]), e._v(" "), n("li", [n("span", [e._v('Empresa (chamada de "a Empresa", "Nós", "Nos" ou "Nosso" neste Contrato) refere-se a The Pokémon Company International, Inc., TPCi London, 3rd Floor Building 10, Chiswick Park, 566 Chiswick High Road, Londres, W4 5XS Reino Unido.')])]), e._v(" "), n("li", [n("span", [e._v("Dispositivo significa qualquer dispositivo que possa acessar o Serviço, como um computador, um telefone celular ou um tablet digital.")])]), e._v(" "), n("li", [n("span", [e._v("Serviço refere-se ao site.")])]), e._v(" "), n("li", [n("span", [e._v("Termos e Condições (também chamados de “Termos”) significam estes Termos e Condições que constituem o contrato completo entre Você e a Empresa em relação ao uso do Serviço. Este contrato de Termos e Condições foi criado com a ajuda do "), n("a", {
                        attrs: {
                            target: "blank",
                            href: "https://www.termsfeed.com/terms-conditions-generator/"
                        }
                    }, [e._v("Gerador de Termos e Condições")]), e._v(".")])]), e._v(" "), n("li", [n("span", [e._v("Serviço de mídia social de terceiros significa qualquer serviço ou conteúdo (incluindo dados, informações, produtos ou serviços) fornecido por um terceiro que pode ser exibido, incluído ou disponibilizado pelo Serviço.")])]), e._v(" "), n("li", [n("span", [e._v("Site refere-se ao www.pokemonkidsfestivalinverno.com.br, acessível do Pokémon Kids Winter Fest.")])]), e._v(" "), n("li", [n("span", [e._v("Você significa o indivíduo que acessa ou usa o Serviço, ou a empresa ou outra pessoa jurídica em nome da qual tal indivíduo está acessando ou usando o Serviço, conforme aplicável.")])])]), e._v(" "), n("p", [n("b", [e._v("Direitos de Propriedade intelectual")])]), e._v(" "), n("p", [e._v('Salvo indicação em contrário, o Site é nossa propriedade e todos os códigos-fonte, bancos de dados, funcionalidade, software, designs de site, áudio, vídeo, texto, fotografias e gráficos do Site (coletivamente, o "Conteúdo") e as marcas registradas, marcas de serviço e logotipos nele contidos (as "Marcas") são de propriedade ou controlados por nós ou licenciados para nós e são protegidos por direitos autorais e leis de marcas registradas e vários outros direitos de propriedade intelectual e leis de concorrência desleal dos Estados Unidos, jurisdições estrangeiras e convenções internacionais.')]), e._v(" "), n("p", [e._v('O Conteúdo e as Marcas são fornecidos no Site "COMO ESTÃO" apenas para sua informação e uso pessoal. Exceto conforme expressamente previsto nestes Termos e Condições, nenhuma parte do Site e nenhum Conteúdo ou Marcas podem ser copiados, reproduzidos, agregados, republicados, carregados, postados, exibidos publicamente, codificados, traduzidos, transmitidos, distribuídos, vendidos, licenciados ou de outra forma explorados para quaisquer fins comerciais, sem a nossa autorização expressa prévia por escrito.')]), e._v(" "), n("p", [e._v("Desde que você seja elegível para usar o Site, você recebe uma licença limitada para acessar e usar o Site e para baixar ou imprimir uma cópia de qualquer parte do Conteúdo ao qual você obteve acesso adequado, exclusivamente para fins pessoais, não para uso comercial. Nós nos reservamos todos os direitos não expressamente concedidos a você no e para o Site, o Conteúdo e as Marcas.")]), e._v(" "), n("p", [n("b", [e._v("Reconhecimento")])]), e._v(" "), n("p", [e._v("Estes são os Termos e Condições que regem o uso deste Serviço e o contrato celebrado entre Você e a Empresa. Estes Termos e Condições estabelecem os direitos e obrigações de todos os usuários em relação ao uso do Serviço.")]), e._v(" "), n("p", [e._v("Seu acesso e uso do Serviço estão condicionados à Sua aceitação e cumprimento destes Termos e Condições. Estes Termos e Condições se aplicam a todos os visitantes, usuários e outras pessoas que acessam ou usam o Serviço.")]), e._v(" "), n("p", [e._v("Ao acessar ou usar o Serviço você concorda em obedecer a estes Termos e Condições. Se você discordar de qualquer parte destes Termos e Condições, você não poderá acessar o Serviço.")]), e._v(" "), n("p", [e._v("Todos os usuários menores na jurisdição em que residem (geralmente menores de 18 anos) devem ter a permissão e ser supervisionados diretamente por seus pais ou responsáveis para usar o Site. Se você for menor de idade, deve pedir aos seus pais ou responsáveis que leiam e concordem com estes Termos e Condições antes de usar o Site.")]), e._v(" "), n("p", [e._v("Seu acesso e uso do Serviço também estão condicionados à sua aceitação e cumprimento da Política de Privacidade da Empresa. Nossa Política de Privacidade descreve nossas políticas e procedimentos sobre a coleta, uso e divulgação de Suas informações pessoais quando Você usa o Aplicativo ou o Site e informa sobre Seus direitos de privacidade e como a lei o protege. Leia nossa"), n("span", [e._v(" Política de Privacidade")]), e._v(" e "), n("span", [e._v("Política de Cookies")]), e._v(" cuidadosamente antes de usar nosso serviço.")]), e._v(" "), n("p", [n("b", [e._v("Links para outros sites")])]), e._v(" "), n("p", [e._v("Nosso serviço pode conter links para sites ou serviços de terceiros que não são de propriedade ou controlados pela empresa.")]), e._v(" "), n("p", [e._v("A Empresa não tem controle e não assume responsabilidade pelo conteúdo, políticas de privacidade ou práticas de qualquer site ou serviço de terceiros. Você também reconhece e concorda que a Empresa não será responsável ou responsabilizada, direta ou indiretamente, por qualquer dano ou perda causado ou alegadamente causado por ou em conexão com o uso ou dependência de qualquer conteúdo, bens ou serviços disponíveis em ou por meio de tais sites ou serviços.")]), e._v(" "), n("p", [e._v("Aconselhamos enfaticamente que você leia os termos e condições e as políticas de privacidade de qualquer site ou serviço de terceiro que acesse.")]), e._v(" "), n("p", [n("b", [e._v("Encerramento")])]), e._v(" "), n("p", [e._v("Podemos encerrar ou suspender o seu acesso imediatamente, sem aviso prévio ou responsabilidade, por qualquer motivo, incluindo, sem limitação, se você violar estes Termos e Condições.")]), e._v(" "), n("p", [e._v("Após o encerramento, seu direito de usar o Serviço cessará imediatamente.")]), e._v(" "), n("p", [n("b", [e._v("Limitação de Responsabilidade")])]), e._v(" "), n("p", [e._v("Exceto em relação aos residentes da França (conforme estabelecido abaixo), não obstante quaisquer danos em que Você possa incorrer, toda a responsabilidade da Empresa e de qualquer um de seus fornecedores sob qualquer disposição destes Termos e Seu recurso exclusivo para todos os anteriores será limitado ao valor efetivamente pago por Você por meio do Serviço ou $100 USD se Você não tiver comprado nada por meio do Serviço.")]), e._v(" "), n("p", [e._v("Até a extensão máxima permitida pela lei aplicável, em nenhum caso a Empresa ou seus fornecedores serão responsáveis por quaisquer danos especiais, incidentais, indiretos ou consequenciais (incluindo, mas não se limitando a, danos por perda de lucros, perda de dados ou outras informações, pela interrupção de negócios, por danos pessoais, perda de privacidade decorrente ou de alguma forma relacionada ao uso ou incapacidade de usar o Serviço, software de terceiros e/ou hardware de terceiros usado com o Serviço, ou caso contrário, em conexão com qualquer disposição destes Termos), mesmo se a Empresa ou qualquer fornecedor tiver sido avisado da possibilidade de tais danos e mesmo que a solução falhe em seu propósito essencial.")]), e._v(" "), n("p", [e._v("Alguns estados e territórios não permitem a exclusão de garantias implícitas ou limitação de responsabilidade por danos incidentais ou consequenciais, o que significa que algumas das limitações acima podem não se aplicar. Nesses estados e territórios, a responsabilidade de cada parte será limitada ao máximo permitido por lei."), n("br"), n("br"), e._v("Em relação aos residentes franceses, a Empresa (incluindo seus funcionários, agentes e distribuidores) não aceita qualquer responsabilidade por qualquer (i) dano indireto, (ii) danos que não resultariam da violação da Empresa de suas obrigações contratuais ou legais ou (iii) danos resultantes de um evento de força maior. ")]), e._v(" "), n("p", [n("b", [e._v('"COMO ESTÁ" e "CONFORME DISPONÍVEL"')])]), e._v(" "), n("p", [e._v("O Serviço é fornecido “COMO ESTÁ” e “CONFORME DISPONÍVEL” e com todas as falhas e defeitos sem garantia de qualquer tipo. Na extensão máxima permitida pela lei aplicável, a Empresa, em seu próprio nome e em nome de suas Afiliadas e seus respectivos licenciadores e prestadores de serviços, renuncia expressamente a todas as garantias, sejam expressas, implícitas, estatutárias ou de outra forma, com relação ao Serviço, incluindo todas as garantias implícitas de comercialização, adequação a uma finalidade específica, título e não violação e garantias que possam surgir durante a negociação, desempenho, uso ou prática comercial. Sem limite ao exposto anteriormente, a Empresa não oferece nenhuma garantia ou compromisso, e não faz qualquer afirmação de qualquer tipo de que o Serviço atenderá aos seus requisitos, alcançará qualquer resultado pretendido, será compatível ou funcionará com qualquer outro software, aplicativo, sistema ou serviço, operará sem interrupção, atenderá a qualquer padrão de desempenho ou confiabilidade, ou que estará livre de erros ou que qualquer erro ou defeito possa ou será corrigido.")]), e._v(" "), n("p", [e._v("Sem limite ao exposto anteriormente, nem a Empresa nem qualquer um dos fornecedores dela faz qualquer afirmação ou garantia de qualquer tipo, expressa ou implícita: (i) quanto à operação ou disponibilidade do Serviço, ou as informações, conteúdo e materiais ou produtos incluídos nele; (ii) que o Serviço será ininterrupto ou livre de erros; (iii) quanto à precisão, confiabilidade ou atualidade de qualquer informação ou conteúdo fornecido através do Serviço; ou (iv) que o Serviço, seus servidores, o conteúdo ou e-mails enviados de ou em nome da Empresa estão livres de vírus, scripts, cavalos de Troia, worms, malware, bombas-relógio ou outros componentes prejudiciais.")]), e._v(" "), n("p", [e._v("Algumas jurisdições não permitem a exclusão de alguns tipos de garantias ou limitações sobre os direitos estatutários aplicáveis do consumidor; portanto alguma ou todas as exclusões e limitações acima podem não se aplicar a você. Mas, em tal caso, as exclusões e limitações definidas nesta seção devem ser aplicadas na maior medida exequível conforme a lei aplicável.")]), e._v(" "), n("p", [n("b", [e._v("Legislação Aplicável")])]), e._v(" "), n("p", [e._v("As leis do país, excluindo seus conflitos de normas legais, regerão estes Termos e o uso do Serviço por você. O uso do Aplicativo também pode estar sujeito a outras leis locais, estaduais, nacionais ou internacionais.")]), e._v(" "), n("p", [n("b", [e._v("Resolução de Controvérsias")])]), e._v(" "), n("p", [e._v("Caso você tenha qualquer dúvida ou questionamento sobre o Serviço, concorda em primeiro tentar resolver a controvérsia informalmente, entrando em contato com a Empresa.")]), e._v(" "), n("p", [n("b", [e._v("Para usuários da União Europeia (UE)")])]), e._v(" "), n("p", [e._v("Se for um consumidor da União Europeia, você se beneficiará de qualquer disposição obrigatória da lei do país em que reside.")]), e._v(" "), n("p", [n("b", [e._v("Conformidade Legal dos Estados Unidos")])]), e._v(" "), n("p", [e._v("Você declara e garante que (i) Você não está localizado em um país sujeito ao embargo do governo dos Estados Unidos ou que foi designado pelo governo dos Estados Unidos como um país que “apoia o terrorismo” e (ii) Você não consta em nenhuma lista do governo dos Estados Unidos de entidades proibidas ou restritas.")]), e._v(" "), n("p", [n("b", [e._v("Separabilidade e Renúncia")])]), e._v(" "), n("p", [n("b", [e._v("Separabilidade")])]), e._v(" "), n("p", [e._v("Se qualquer cláusula destes Termos for considerada inexequível ou inválida, tal cláusula será alterada e interpretada para cumprir os objetivos de tal cláusula na maior medida possível sob a lei aplicável e as cláusulas restantes continuarão em pleno vigor e efeito.")]), e._v(" "), n("p", [n("b", [e._v("Renúncia")])]), e._v(" "), n("p", [e._v("Exceto conforme previsto neste documento, a falha em exercer um direito ou em exigir o cumprimento de uma obrigação de acordo com estes Termos não afetará a capacidade de uma parte de exercer tal direito ou exigir tal cumprimento em qualquer momento posterior, nem a renúncia de uma violação constituirá uma renúncia de qualquer violação subsequente.")]), e._v(" "), n("p", [n("b", [e._v("Interpretação da Tradução")])]), e._v(" "), n("p", [e._v("Estes Termos e Condições podem ter sido traduzidos se os tivermos disponibilizado para Você em nosso Serviço. Exceto em relação aos residentes da França, você concorda que o texto original em inglês deve prevalecer em caso de disputa.")]), e._v(" "), n("p", [n("b", [e._v("Alterações nestes Termos e Condições")])]), e._v(" "), n("p", [e._v("Nós nos reservamos o direito, a nosso exclusivo critério, de alterar ou substituir estes Termos a qualquer momento. Se uma revisão for material, nós faremos todos os esforços consideráveis para fornecer um aviso pelo menos 30 dias antes que qualquer novo termo entre em vigor. O que constitui uma alteração material será determinado a nosso exclusivo critério.")]), e._v(" "), n("p", [e._v("Ao continuar a acessar ou usar o nosso serviço após essas revisões entrarem em vigor, você concorda em obedecer aos termos revisados. Caso você não concorde com os novos termos, no todo ou em parte, pare de usar o site e o Serviço.")]), e._v(" "), n("p", [n("b", [e._v("Fale Conosco")])]), e._v(" "), n("p", [e._v("Caso tenha alguma dúvida sobre estes Termos e Condições, você pode entrar em contato conosco:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Por e-mail: "), n("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [n("span", [e._v("support@pokemonkidswinterfest.com")])])])])]), e._v(" "), n("p", [n("b", [e._v("Códigos de Recompensa")])]), e._v(" "), n("p", [e._v("Os códigos obtidos são fornecidos a você de acordo com uma licença limitada, pessoal, revogável, intransferível e não sublicenciável para ser usada apenas no site. Você não tem participação, direito ou título de usar qualquer um desses códigos ou sobre eles. Nós podemos rescindir sua licença de uso de um código a qualquer momento e a nosso exclusivo critério.")])])
                }], !1, null, null, null).exports,
                D = Object(r.a)({}, (function() {
                    var e = this.$createElement;
                    this._self._c;
                    return this._m(0)
                }), [function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("div", [n("p", [n("b", [e._v("Geschäftsbedingungen")])]), e._v(" "), n("p", [e._v("Bitte lesen Sie diese Geschäftsbedingungen vor der Nutzung unseres Angebots sorgfältig.")]), e._v(" "), n("p", [n("b", [e._v("Auslegung und Begriffsbestimmungen")])]), e._v(" "), n("p", [n("b", [e._v("Auslegung")])]), e._v(" "), n("p", [e._v("Im englischen Original großgeschriebene Wörter sind in den nachstehenden Geschäftsbedingungen definiert. Die nachstehenden Begriffsbestimmungen gelten unabhängig davon, ob ein Begriff im Singular oder im Plural verwendet wird.")]), e._v(" "), n("p", [n("b", [e._v("Begriffsbestimmungen")])]), e._v(" "), n("p", [e._v("Für die Zwecke dieser Geschäftsbedingungen gelten die folgenden Begriffsbestimmungen:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Verbundenes Unternehmen bedeutet ein Unternehmen, das eine Partei beherrscht, von dieser beherrscht wird oder einer gemeinsamen Beherrschung mit dieser unterliegt, wobei „Beherrschung“ das Eigentum an mindestens 50 % der Geschäftsanteile, Aktien oder sonstigen zu der Wahl der Verwaltungsratsmitglieder oder des sonstigen Führungsgremiums berechtigende Wertpapiere bedeutet.")])]), e._v(" "), n("li", [n("span", [e._v("Land bezieht sich auf: (1) das Vereinigte Königreich für Staatsangehörige des Vereinigten Königreichs, Deutschlands, Italiens und Spaniens, (2) Frankreich für Staatsangehörige Frankreichs und (3) den Bundesstaat Washington für Staatsangehörige der USA, Mexikos, Chiles, Kolumbiens, Perus, Argentiniens, Panamas, Costa Ricas, Guatemalas, Boliviens, Uruguays, Paraguays, Guatemalas, El Salvadors, Brasiliens, der Dominikanischen Republik und von Honduras.")])]), e._v(" "), n("li", [n("span", [e._v("Die Gesellschaft (auf die in diesem Vertrag entweder als „die Gesellschaft“, „wir“, „uns“ oder „unser(e)“ Bezug genommen wird) bedeutet The Pokémon Company International, Inc., TPCi London, 3rd Floor Building 10, Chiswick Park, 566 Chiswick High Road, London W4 5XS, Vereinigtes Königreich.")])]), e._v(" "), n("li", [n("span", [e._v("Gerät bedeutet jedes Gerät, das auf das Angebot zugreifen kann, wie ein Computer, ein Mobiltelefon oder ein Tablet.")])]), e._v(" "), n("li", [n("span", [e._v("Angebot bezieht sich auf die Webseite.")])]), e._v(" "), n("li", [n("span", [e._v("Geschäftsbedingungen (auch als „Bedingungen“ bezeichnet) bedeutet diese Geschäftsbedingungen, die die gesamte Vereinbarung zwischen Ihnen und der Gesellschaft über die Nutzung des Angebots darstellen. Diese Geschäftsbedingungen wurden mithilfe des "), n("a", {
                        attrs: {
                            target: "blank",
                            href: "https://www.termsfeed.com/terms-conditions-generator/"
                        }
                    }, [e._v("Generators für Geschäftsbedingungen")]), e._v(" erstellt.")])]), e._v(" "), n("li", [n("span", [e._v("Externer Social Media-Service bedeutet sämtliche Leistungen oder Inhalte (einschließlich Daten, Informationen, Produkte oder Leistungen), die von Dritten erbracht werden und die eventuell durch das Angebot angezeigt, einbezogen oder bereitgestellt werden.")])]), e._v(" "), n("li", [n("span", [e._v("Webseite bezieht sich auf die Webseite www.pokemonkidswinterfest.de, auf die von Pokémon Kids Winter Fest aus zugegriffen werden kann.")])]), e._v(" "), n("li", [n("span", [e._v("„Sie“ bedeutet die Person, die auf das Angebot zugreift oder dieses nutzt, oder das Unternehmen oder die sonstige juristische Person, für das bzw. die diese Person auf das Angebot zugreift bzw. dieses nutzt.")])])]), e._v(" "), n("p", [n("b", [e._v("Immaterialgüterrechte")])]), e._v(" "), n("p", [e._v("Sofern nichts anderes angegeben ist, ist die Seite unser urheberrechtlich geschütztes Eigentum und der gesamte Quellcode, die gesamte Software, alle Datenbanken, Funktionen, Webdesigns, Audio- und Videoinhalte, Texte, Fotos und Grafiken auf der Seite (zusammen der „Inhalt“) sowie die darin enthaltenen Markenzeichen, Dienstleistungsmarken und Logos (die „Marken“) stehen in unserem Eigentum oder unter unserer Kontrolle oder werden von uns im Rahmen von Lizenzen genutzt, und sie sind urheber- und markenrechtlich sowie durch verschiedene sonstige Immaterialgüterrechte und das Wettbewerbsrecht der USA, anderer Länder und internationaler Abkommen geschützt.")]), e._v(" "), n("p", [e._v("Der Inhalt und die Marken werden auf der Seite im Ist-Zustand nur zu Ihrer Information und zu Ihrer persönlichen Verwendung bereitgestellt. Außer bei ausdrücklich anders lautenden Bestimmungen in diesen Geschäftsbedingungen dürfen diese Seite sowie Inhalte oder Marken ohne unsere vorherige ausdrückliche schriftliche Zustimmung weder ganz noch teilweise kopiert, vervielfältigt, aggregiert, neu veröffentlicht, hochgeladen, gepostet, öffentlich dargestellt, codiert, übersetzt, übermittelt, verbreitet, verkauft, lizenziert, oder auf andere Weise für gewerbliche Zwecke genutzt werden.")]), e._v(" "), n("p", [e._v("Sofern es Ihnen gestattet ist die Seite zu nutzen, erhalten Sie eine limitierte Lizenz für den Zugriff auf und die Nutzung der Seite, sowie die Erlaubnis, einen Teil der Inhalte, auf die Sie rechtmäßig zugegriffen haben, herunterzuladen oder eine Kopie davon auszudrucken. Dies geschieht ausschließlich für Ihre persönliche, nicht gewerbliche Nutzung. Wir behalten uns alle Rechte an der Seite, dem Inhalt und den Marken vor, die Ihnen nicht ausdrücklich eingeräumt werden.")]), e._v(" "), n("p", [n("b", [e._v("Bestätigung")])]), e._v(" "), n("p", [e._v("Dies sind die Geschäftsbedingungen, die für die Nutzung dieses Angebots und die Vereinbarung zwischen Ihnen und der Gesellschaft gelten. Diese Geschäftsbedingungen regeln die Rechte und Pflichten aller Benutzer in Bezug auf die Nutzung des Angebots.")]), e._v(" "), n("p", [e._v("Ihr Zugang zu dem Angebot und dessen Nutzung ist durch Ihre Zustimmung zu diesen Geschäftsbedingungen und deren Einhaltung bedingt. Diese Geschäftsbedingungen gelten für alle Besucher, Benutzer und sonstigen Personen, die auf das Angebot zugreifen oder dieses nutzen.")]), e._v(" "), n("p", [e._v("Mit dem Zugriff auf das Angebot oder dessen Nutzung erklären Sie sich an diese Geschäftsbedingungen gebunden. Wenn Sie nicht vollständig mit diesen Geschäftsbedingungen einverstanden sind, dürfen Sie nicht auf das Angebot zugreifen.")]), e._v(" "), n("p", [e._v("Alle Benutzer, die im Land ihres Wohnsitzes minderjährig (d. h. im Allgemeinen unter 18 Jahre alt) sind, benötigen die Zustimmung eines Elternteils oder Erziehungsberechtigten zur Nutzung der Seite und müssen von diesen unmittelbar beaufsichtigt werden. Wenn Sie minderjährig sind, muss ein Elternteil oder Erziehungsberechtigter diese Geschäftsbedingungen lesen und ihnen zustimmen, bevor Sie die Seite nutzen können.")]), e._v(" "), n("p", [e._v("Ihr Zugang zu dem Angebot und dessen Nutzung ist auch durch Ihre Zustimmung zu der Datenschutzerklärung der Gesellschaft und deren Einhaltung bedingt. Unsere Datenschutzerklärung beschreibt unsere Richtlinien und Verfahren für die Erfassung, Nutzung und Weitergabe Ihrer personenbezogenen Daten bei der Nutzung unserer Angebote oder Webseite. Diese Datenschutzerklärung klärt zudem über Ihre Rechte auf, und wie diese gesetzlich geschützt werden. Bitte lesen Sie unsere "), n("span", [e._v("Datenschutzerklärung")]), e._v(" und unsere "), n("span", [e._v("Cookie-Richtlinie")]), e._v(" vor der Nutzung unseres Angebots sorgfältig.")]), e._v(" "), n("p", [n("b", [e._v("Links zu anderen Webseiten")])]), e._v(" "), n("p", [e._v("Unser Angebot kann Links zu externen Webseiten oder Angeboten enthalten, die nicht im Eigentum oder unter der Kontrolle der Gesellschaft stehen.")]), e._v(" "), n("p", [e._v("Die Gesellschaft hat keine Kontrolle über den Inhalt, die Datenschutzrichtlinien oder Vorgehensweisen externer Webseiten oder Angebote und sie übernimmt dafür keine Verantwortung. Weiterhin nehmen Sie zur Kenntnis und stimmen zu, dass die Gesellschaft weder direkt noch indirekt verantwortlich oder haftbar ist für Schäden oder Verluste, die aufgrund oder in Verbindung mit der Nutzung von oder im Vertrauen auf derartige auf oder durch diese Webseiten oder Angebote verfügbaren Inhalten, Waren oder Dienstleistungen entstanden sind oder entstanden sein sollen.")]), e._v(" "), n("p", [e._v("Wir raten Ihnen dringend zur Lektüre der Geschäftsbedingungen und Datenschutzerklärungen aller externen Webseiten oder Angebote, die Sie besuchen.")]), e._v(" "), n("p", [n("b", [e._v("Beendigung")])]), e._v(" "), n("p", [e._v("Wir können Ihren Zugang aus beliebigem Grund unter anderem bei einem Verstoß gegen diese Geschäftsbedingungen umgehend und ohne Vorankündigung oder Haftung beenden oder aussetzen.")]), e._v(" "), n("p", [e._v("Bei der Beendigung endet Ihr Recht zur Nutzung des Angebots umgehend.")]), e._v(" "), n("p", [n("b", [e._v("Haftungsbegrenzung")])]), e._v(" "), n("p", [e._v("Ungeachtet jeglicher Schäden die Ihnen entstehen können, ist die gesamte Haftung der Gesellschaft und ihrer Lieferanten nach den Bestimmungen dieser Geschäftsbedingungen, sowie Ihr ausschließliches Rechtsmittel für das vorangehende begrenzt auf den Betrag, den Sie tatsächlich über das Angebot bezahlt haben, bzw. auf 100 USD, falls Sie keine Käufe über das Angebot getätigt haben. Für Personen mit Wohnsitz in Frankreich gelten anderslautende Bestimmungen (siehe unten).")]), e._v(" "), n("p", [e._v("In dem gesetzlich maximal zulässigen Maß und unter keinerlei Umständen werden die Gesellschaft oder ihre Lieferanten für besondere, indirekte, Neben- oder Folgeschäden haften (insbesondere Schäden für Gewinnverluste, Verlust von Daten oder anderen Informationen, für Geschäftsunterbrechungen, für Personenschäden, Verlust von Privatsphäre verursacht durch oder in irgendeiner Weise verbunden mit der Nutzung oder Unfähigkeit der Nutzung des Angebots, der mit dem Angebot verwendeten Software und/oder Hardware Dritter, oder anderweitig in Verbindung mit einer Bestimmung dieser Geschäftsbedingungen), selbst wenn die Gesellschaft oder ein Lieferant auf die Möglichkeit eines solchen Schadens hingewiesen wurde und auch falls das Rechtsmittel seinen wesentlichen Zweck nicht erfüllt.")]), e._v(" "), n("p", [e._v("In manchen Staaten oder sonstigen Gebietskörperschaften ist es nicht zulässig, stillschweigende Gewährleistungen oder die Haftung für Neben- oder Folgeschäden auszuschließen oder zu beschränken. Daher kann es sein, dass einige der vorstehenden Beschränkungen nicht gelten. In diesen Ländern und Gebietskörperschaften wird die Haftung jeder Partei im größten gesetzlich zulässigen Umfang beschränkt."), n("br"), n("br"), e._v("In Bezug auf Personen mit Wohnsitz in Frankreich übernimmt die Gesellschaft (einschließlich ihrer Betriebsangehörigen, Erfüllungsgehilfen und Zwischenhändler) keinerlei Verantwortung für (i) indirekte Schäden, (ii) Schäden die nicht auf Verletzung von vertraglichen oder gesetzlichen Verpflichtungen durch die Gesellschaft zurückzuführen sind oder (iii) Schäden die auf höhere Gewalt zurückzuführen sind.")]), n("p", [n("b", [e._v("Haftungsausschluss – IST-ZUSTAND und „WIE VERFÜGBAR“")])]), e._v(" "), n("p", [e._v("Das Angebot wird Ihnen im IST-ZUSTAND und „WIE VERFÜGBAR“ bereitgestellt, mit sämtlichen Fehlern und Mängeln und ohne jegliche Gewährleistung. In dem gesetzlich maximal zulässigen Maß lehnt die Gesellschaft im eigenen Namen, und im Namen der ihr verbundenen Unternehmen und ihrer jeweiligen Lizenzgeber und Dienstleister, im Zusammenhang mit dem Angebot ausdrücklich jegliche Gewährleistung ab, egal ob es sich um eine ausdrückliche, stillschweigende, gesetzliche oder jede andere Art der Gewährleistung handelt, einschließlich aller stillschweigenden Zusicherungen der allgemeinen Gebrauchstüchtigkeit, Eignung für einen bestimmten Zweck, Freiheit von Rechts- und Sachmängel sowie Schutzrechtverletzungen, und Gewährleistungen die sich aus dem Geschäftsgang, im Rahmen der Durchführung, Nutzung, oder Handelspraxis ergeben. Ohne Einschränkung der vorherigen Ausführungen gilt, dass die Gesellschaft keinerlei Garantien oder Verpflichtungen ausspricht und keinerlei Zusicherungen macht, dass das Angebot Ihren Anforderungen entspricht, ein beabsichtigtes Ergebnis liefert, mit anderer Software, anderen Applikationen, Systemen oder Angeboten kompatibel ist oder auf diesen funktioniert, ohne Unterbrechungen läuft, Anforderungen an Leistung oder Zuverlässigkeit entspricht, frei von Fehlern ist oder dass Fehler oder Mängel korrigiert werden können oder werden.")]), e._v(" "), n("p", [e._v("Ohne Einschränkung der vorherigen Ausführungen gilt, dass weder die Gesellschaft noch ein Dienstleister der Gesellschaft eine Zusicherung oder Gewährleistung, ob ausdrücklich oder stillschweigend, ausspricht: (i) welche den Betrieb oder die Verfügbarkeit des Angebots, oder der darin enthaltenen Informationen, Inhalte, Materialien oder Produkte, betrifft; (ii) welche zusagt, dass das Angebot ohne Unterbrechungen oder Fehler geliefert wird; (iii) welche die Richtigkeit, Zuverlässigkeit, oder Aktualität jeglicher Informationen oder Inhalte des Angebots betrifft; oder (iv) welche zusagt, dass das Angebot, seine Server, die Inhalte, oder von oder im Namen der Gesellschaft versendete E-Mails frei von Viren, Scripts, Trojanern, Würmern, Schadsoftware, Zeitbomben oder anderen schädlichen Komponenten sind.")]), e._v(" "), n("p", [e._v("In einigen Rechtsräumen ist es nicht zulässig, bestimmte Gewährleistungen auszuschließen oder die einschlägigen gesetzlichen Rechte eines Konsumenten einzuschränken, daher treffen ggf. nicht alle der oben aufgeführten Ausschlüsse und Beschränkungen auf Sie zu. In diesem Fall gelten die in diesem Abschnitt dargelegten Ausschlüsse und Beschränkungen jedoch im größten gemäß geltendem Recht durchsetzbaren Umfang.")]), e._v(" "), n("p", [n("b", [e._v("Rechtswahl")])]), e._v(" "), n("p", [e._v("Das Recht des definierten Landes mit Ausnahme seiner Konfliktnormen gilt für diese Bedingungen und Ihre Nutzung des Angebots. Ihre Nutzung der Anwendung kann auch sonstigen Rechtsvorschriften auf lokaler, bundesstaatlicher, nationaler oder internationaler Ebene unterliegen.")]), e._v(" "), n("p", [n("b", [e._v("Beilegung von Streitigkeiten")])]), e._v(" "), n("p", [e._v("Sie verpflichten sich, im Fall von Bedenken oder Streitigkeiten in Bezug auf das Angebot zunächst zu versuchen, die Streitigkeit formlos durch Kontaktaufnahme mit der Gesellschaft beizulegen.")]), e._v(" "), n("p", [n("b", [e._v("Für Benutzer in der Europäischen Union (EU)")])]), e._v(" "), n("p", [e._v("Wenn Sie ein Verbraucher aus der Europäischen Union sind, genießen Sie den Schutz aller obligatorischen Vorschriften des Landes, in dem Sie ansässig sind.")]), e._v(" "), n("p", [n("b", [e._v("Konformität mit dem Recht der Vereinigten Staaten")])]), e._v(" "), n("p", [e._v("Sie sichern zu und gewährleisten, dass (i) Sie sich nicht in einem Land befinden, über das die US-amerikanische Regierung ein Embargo verhängt hat, oder das die US-amerikanische Regierung als „Terroristen unterstützendes Land“ klassifiziert hat; und dass (ii) Sie nicht auf einer Liste verbotener oder eingeschränkter Parteien der US-amerikanischen Regierung vermerkt sind.")]), e._v(" "), n("p", [n("b", [e._v("Salvatorische Klausel und Verzicht")])]), e._v(" "), n("p", [n("b", [e._v("Salvatorische Klausel")])]), e._v(" "), n("p", [e._v("Sollte eine Bestimmung dieser Geschäftsbedingungen undurchführbar oder unwirksam werden, wird eine derartige Bestimmung geändert und so ausgelegt, dass sie der Zielsetzung der ursprünglichen Bestimmung so genau wie möglich unter geltendem Recht entspricht. Die Gültigkeit der übrigen Bestimmungen wird dadurch nicht berührt.")]), e._v(" "), n("p", [n("b", [e._v("Verzicht")])]), e._v(" "), n("p", [e._v("Sollte ein Recht nicht ausgeübt oder die Einhaltung einer Verpflichtung nicht eingefordert werden, so hat dies, außer bei anders lautenden Bestimmungen in diesen Geschäftsbedingungen, keinen Einfluss auf die Möglichkeit einer Partei, ein solches Recht zu einem späteren Zeitpunkt auszuüben oder die Einhaltung einer solchen Verpflichtung zu einem späteren Zeitpunkt einzufordern; weiterhin stellt eine Verzichtserklärung hinsichtlich eines Verstoßes keine Verzichtserklärung hinsichtlich eines weiteren Verstoßes dar.")]), e._v(" "), n("p", [n("b", [e._v("Auslegung der Übersetzung")])]), e._v(" "), n("p", [e._v("Diese Geschäftsbedingungen wurden für die Bereitstellung im Rahmen unseres Angebots eventuell übersetzt. Sofern Sie nicht in Frankreich ansässig sind, erklären Sie sich damit einverstanden, dass die englische Originalfassung im Zweifelsfall verbindlich ist.")]), e._v(" "), n("p", [n("b", [e._v("Änderungen dieser Geschäftsbedingungen")])]), e._v(" "), n("p", [e._v("Wir behalten uns das Recht vor, diese Bedingungen jederzeit in unserem alleinigen Ermessen zu ändern oder zu ersetzen. Wenn eine Änderung wesentlich ist, werden wir uns in angemessenem Umfang bemühen, neue Bedingungen vor ihrem Inkrafttreten mit einer Frist von mindestens 30 Tagen anzukündigen. Wir bestimmen in unserem alleinigen Ermessen, was eine wesentliche Änderung darstellt.")]), e._v(" "), n("p", [e._v("Mit dem weiteren Zugriff auf unser Angebot oder mit dessen weiterer Nutzung nach dem Inkrafttreten dieser Änderungen erklären Sie sich an die geänderten Bedingungen gebunden. Wenn Sie ganz oder teilweise nicht mit den neuen Bedingungen einverstanden sind, stellen Sie die Nutzung der Webseite und des Angebots bitte ein.")]), e._v(" "), n("p", [n("b", [e._v("Kontakt")])]), e._v(" "), n("p", [e._v("Wenn Sie Fragen zu diesen Geschäftsbedingungen haben, können Sie uns wie folgt kontaktieren:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Per E-Mail: "), n("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [n("span", [e._v("support@pokemonkidswinterfest.com")])])])])]), e._v(" "), n("p", [n("b", [e._v("Promo-Codes")])]), e._v(" "), n("p", [e._v("Erhaltene Codes werden unter einer beschränkten, persönlichen, widerrufbaren, nicht übertragbaren und nicht unterlizenzierbaren Lizenz zur Verfügung gestellt und können nur auf der Webseite verwendet werden. Du hast keinerlei Eigentümerinteressen, Rechte oder Ansprüche auf einen Code oder darauf, einen Code zu verwenden. Wir können Deine Lizenz zur Nutzung eines Codes jederzeit und in eigenem Ermessen kündigen.")])])
                }], !1, null, null, null).exports,
                R = Object(r.a)({}, (function() {
                    var e = this.$createElement;
                    this._self._c;
                    return this._m(0)
                }), [function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("div", [n("p", [n("b", [e._v("Terms and Conditions")])]), e._v(" "), n("p", [e._v("Please read these terms and conditions carefully before using our Service.")]), e._v(" "), n("p", [n("b", [e._v("Interpretation and Definitions")])]), e._v(" "), n("p", [n("b", [e._v("Interpretation")])]), e._v(" "), n("p", [e._v("The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.")]), e._v(" "), n("p", [n("b", [e._v("Definitions")])]), e._v(" "), n("p", [e._v("For the purposes of these Terms and Conditions:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Affiliate means an entity that controls, is controlled by or is under common control with a party, where “control” means ownership of 50% or more of the shares, equity interest, or other securities entitled to vote for election of directors or other managing authority.")])]), e._v(" "), n("li", [n("span", [e._v("Country refers to: (1) United Kingdom for citizens of the UK, Germany, Italy, and Spain, (2) France for citizens in France, and (3) the State of Washington for citizens of the United States of America, Mexico, Chile, Colombia, Perú, Argentina, Panamá, Costa Rica, Guatemala, Honduras, Bolivia, Uruguay, Paraguay, Guatemala, El Salvador, Dominican Republic, and Brazil.")])]), e._v(" "), n("li", [n("span", [e._v("Company (referred to as either “the Company”, “We”, “Us”, or “Our” in this Agreement) refers to The Pokémon Company International, Inc., TPCi London, 3rd Floor Building 10, Chiswick Park, 566 Chiswick High Road, London, W4 5XS United Kingdom.")])]), e._v(" "), n("li", [n("span", [e._v("Device means any device that can access the Service such as a computer, a cellphone, or a digital tablet.")])]), e._v(" "), n("li", [n("span", [e._v("Service refers to the Website.")])]), e._v(" "), n("li", [n("span", [e._v("Terms and Conditions (also referred as “Terms”) mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the "), n("a", {
                        attrs: {
                            target: "blank",
                            href: "https://www.termsfeed.com/terms-conditions-generator/"
                        }
                    }, [e._v("Terms and Conditions Generator")]), e._v(".")])]), e._v(" "), n("li", [n("span", [e._v("Third-party Social Media Service means any services or content (including data, information, products, or services) provided by a third-party that may be displayed, included or made available by the Service.")])]), e._v(" "), n("li", [n("span", [e._v("Website refers to www.pokemonkidswinterfest.com, accessible from Pokémon Kids Winter Fest.")])]), e._v(" "), n("li", [n("span", [e._v("You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.")])])]), e._v(" "), n("p", [n("b", [e._v("Intellectual Property Rights")])]), e._v(" "), n("p", [e._v("Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”), and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, foreign jurisdictions, and international conventions.")]), e._v(" "), n("p", [e._v("The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms and Conditions, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.")]), e._v(" "), n("p", [e._v("Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content, and the Marks.")]), e._v(" "), n("p", [n("b", [e._v("Acknowledgment")])]), e._v(" "), n("p", [e._v("These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.")]), e._v(" "), n("p", [e._v("Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users, and others who access or use the Service.")]), e._v(" "), n("p", [e._v("By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions, then You may not access the Service.")]), e._v(" "), n("p", [e._v("All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Site. If you are a minor, you must have your parent or guardian read and agree to these Terms and Conditions prior to you using the Site.")]), e._v(" "), n("p", [e._v("Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our"), n("span", [e._v(" Privacy Policy")]), e._v(" and "), n("span", [e._v("Cookie Policy")]), e._v(" carefully before using Our Service."), n("span", [n("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    })])]), e._v(" "), n("p", [n("b", [e._v("Links to Other Websites")])]), e._v(" "), n("p", [e._v("Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.")]), e._v(" "), n("p", [e._v("The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.")]), e._v(" "), n("p", [e._v("We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or services that You visit.")]), e._v(" "), n("p", [n("b", [e._v("Termination")])]), e._v(" "), n("p", [e._v("We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.")]), e._v(" "), n("p", [e._v("Upon termination, Your right to use the Service will cease immediately.")]), e._v(" "), n("p", [n("b", [e._v("Limitation of Liability")])]), e._v(" "), n("p", [e._v("Except in relation to French residents (as further set out below), notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or $100 USD if You haven’t purchased anything through the Service.")]), e._v(" "), n("p", [e._v("To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.")]), e._v(" "), n("p", [e._v("Some states and territories do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states and territories, each party’s liability will be limited to the greatest extent permitted by law."), n("br"), n("br"), e._v("In relation to French residents, the Company (including its employees, agents and distributors) accepts no responsibility for any (i) indirect damages, (ii) damages that would not result from Company’s breach of its contractual or legal obligations or (iii) damages that would result from a force majeure event. ")]), e._v(" "), n("p", [n("b", [e._v("“AS IS” and “AS AVAILABLE” Disclaimer")])]), e._v(" "), n("p", [e._v("The Service is provided to You “AS IS” and “AS AVAILABLE” and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory, or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage, or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards, or be error free or that any errors or defects can or will be corrected.")]), e._v(" "), n("p", [e._v("Without limiting the foregoing, neither the Company nor any of the company’s providers makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or emails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs, or other harmful components.")]), e._v(" "), n("p", [e._v("Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.")]), e._v(" "), n("p", [n("b", [e._v("Governing Law")])]), e._v(" "), n("p", [e._v("The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.")]), e._v(" "), n("p", [n("b", [e._v("Disputes Resolution")])]), e._v(" "), n("p", [e._v("If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.")]), e._v(" "), n("p", [n("b", [e._v("For European Union (EU) Users")])]), e._v(" "), n("p", [e._v("If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.")]), e._v(" "), n("p", [n("b", [e._v("United States Legal Compliance")])]), e._v(" "), n("p", [e._v("You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a “terrorist supporting” country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.")]), e._v(" "), n("p", [n("b", [e._v("Severability and Waiver")])]), e._v(" "), n("p", [n("b", [e._v("Severability")])]), e._v(" "), n("p", [e._v("If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.")]), e._v(" "), n("p", [n("b", [e._v("Waiver")])]), e._v(" "), n("p", [e._v("Except as provided herein, the failure to exercise a right or to require performance of an obligation under this Terms shall not affect a party’s ability to exercise such right or require such performance at any time thereafter nor shall be the waiver of a breach constitute a waiver of any subsequent breach.")]), e._v(" "), n("p", [n("b", [e._v("Translation Interpretation")])]), e._v(" "), n("p", [e._v("These Terms and Conditions may have been translated if We have made them available to You on our Service. Except in relation to French residents, you agree that the original English text shall prevail in the case of a dispute.")]), e._v(" "), n("p", [n("b", [e._v("Changes to These Terms and Conditions")])]), e._v(" "), n("p", [e._v("We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material, We will make reasonable efforts to provide at least 30 days’ notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.")]), e._v(" "), n("p", [e._v("By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.")]), e._v(" "), n("p", [n("b", [e._v("Contact Us")])]), e._v(" "), n("p", [e._v("If you have any questions about these Terms and Conditions, You can contact us:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("By email: "), n("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [n("span", [e._v("support@pokemonkidswinterfest.com")])])])])]), e._v(" "), n("p", [n("b", [e._v("Reward Codes")])]), e._v(" "), n("p", [e._v("Codes obtained are provided to you under a limited, personal, revocable, non-transferable, non-sublicenseable license to use within the website only. You have no proprietary interest, right or title in or to use of any codes. We may terminate your license for use of a code at any time and at our sole discretion.")])])
                }], !1, null, null, null).exports,
                M = Object(r.a)({}, (function() {
                    var e = this.$createElement;
                    this._self._c;
                    return this._m(0)
                }), [function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("div", [n("p", [n("b", [e._v("Términos y condiciones")])]), e._v(" "), n("p", [e._v("Le pedimos que lea atentamente estos términos y condiciones antes de utilizar nuestro Servicio.")]), e._v(" "), n("p", [n("b", [e._v("Interpretación y definiciones")])]), e._v(" "), n("p", [n("b", [e._v("Interpretación")])]), e._v(" "), n("p", [e._v("Las palabras cuya primera letra está en mayúscula tienen el significado definido conforme a las siguientes condiciones. Las siguientes definiciones tendrán el mismo significado, independientemente de si aparecen en singular o en plural.")]), e._v(" "), n("p", [n("b", [e._v("Definiciones")])]), e._v(" "), n("p", [e._v("En el marco de estos Términos y condiciones:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("«Socio» significa una entidad que controla, es controlada o se encuentra bajo el control común junto con una parte (por «control» se entiende la propiedad del 50 % o más de las acciones, la participación en el capital social u otros valores con derecho a voto para la elección de los directores u otra autoridad de gestión).")])]), e._v(" "), n("li", [n("span", [e._v("«País» hace referencia a: (1) Reino Unido para los ciudadanos de Reino Unido, Alemania, Italia y España, (2) Francia para los ciudadanos de Francia y (3) el Estado de Washington para los ciudadanos de Estados Unidos de América, México, Chile, Colombia, Perú, Argentina, Panamá, Costa Rica, Guatemala, Honduras, Bolivia, Uruguay, Paraguay, El Salvador, República Dominicana y Brasil.")])]), e._v(" "), n("li", [n("span", [e._v("«Empresa» (a la que se puede hacer referencia como «la Empresa», «Nosotros», «Nos» o «Nuestro/a» en este Acuerdo) hace referencia a The Pokémon Company International, Inc., TPCi London, 3rd Floor Building 10, Chiswick Park, 566 Chiswick High Road, Londres, W4 5XS (Reino Unido).")])]), e._v(" "), n("li", [n("span", [e._v("«Dispositivo» significa cualquier dispositivo que pueda acceder al Servicio como, por ejemplo, un ordenador, un teléfono móvil o una tableta digital.")])]), e._v(" "), n("li", [n("span", [e._v("«Servicio» hace referencia al Sitio web.")])]), e._v(" "), n("li", [n("span", [e._v("«Términos y condiciones» (o «Términos») significa estos Términos y condiciones, que constituyen el acuerdo íntegro entre Usted y la Empresa respecto al uso del Servicio. Este acuerdo de Términos y condiciones se ha creado con la ayuda del "), n("a", {
                        attrs: {
                            target: "blank",
                            href: "https://www.termsfeed.com/terms-conditions-generator/"
                        }
                    }, [e._v("Generador de términos y condiciones")]), e._v(".")])]), e._v(" "), n("li", [n("span", [e._v("«Servicio de redes sociales de terceros» significa cualquier servicio o contenido (incluidos datos, información, productos y servicios) prestado por un tercero que puede mostrar, incluir o proporcionar el Servicio.")])]), e._v(" "), n("li", [n("span", [e._v("«Sitio web» hace referencia a www.pokemonkidswinterfest.com, accesible desde Pokémon Kids Winter Fest.")])]), e._v(" "), n("li", [n("span", [e._v("«Usted» significa la persona que accede o utiliza el Servicio, o la empresa u otra entidad legal en nombre de la cual dicho individuo accede o utiliza el servicio, según corresponda.")])])]), e._v(" "), n("p", [n("b", [e._v("Derechos de propiedad intelectual")])]), e._v(" "), n("p", [e._v("A menos que se estipule lo contrario, el Sitio es de nuestra propiedad y todo el código fuente, las bases de datos, la funcionalidad, el "), n("i", [e._v("software")]), e._v(", los diseños del sitio web, el audio, el vídeo, el texto, las fotografías y los gráficos del Sitio (colectivamente, el «Contenido»), así como las marcas comerciales, las marcas de servicio y los logotipos que contiene (las «Marcas») son de nuestra propiedad o están bajo nuestro control o bajo nuestra licencia y están protegidos por las leyes de derechos de autor y marcas comerciales y otros derechos de propiedad intelectual, así como por las leyes de competencia desleal de Estados Unidos, las jurisdicciones extranjeras y los convenios internacionales.")]), e._v(" "), n("p", [e._v("El Contenido y las Marcas se proporcionan en el Sitio «TAL CUAL» con fines informativos y únicamente para uso personal. Salvo lo dispuesto expresamente en estos Términos y condiciones, no se podrá copiar, reproducir, agregar, volver a publicar, cargar, publicar, mostrar públicamente, cifrar, traducir, transmitir, distribuir, vender, conceder licencias o explotar de cualquier otro modo ninguna parte del Sitio y ningún Contenido o Marca para un fin comercial sin nuestra autorización expresa previa por escrito.")]), e._v(" "), n("p", [e._v("Siempre y cuando tenga derecho a utilizar el Sitio, se le concede una licencia limitada para acceder y utilizar el Sitio y para descargar o imprimir una copia de cualquier parte del Contenido al que haya accedido adecuadamente únicamente para uso personal y no comercial. Nos reservamos todos los derechos que no se le han concedido expresamente y en lo que respecta al Sitio, el Contenido y las Marcas.")]), e._v(" "), n("p", [n("b", [e._v("Aceptación")])]), e._v(" "), n("p", [e._v("Estos son los Términos y condiciones que rigen el uso de este Servicio y el acuerdo suscrito entre Usted y la Empresa. Estos Términos y condiciones establecen los derechos y obligaciones de todos los usuarios en relación con el uso del Servicio.")]), e._v(" "), n("p", [e._v("Su acceso y uso del Servicio está condicionado a la aceptación y el cumplimiento por su parte de estos Términos y condiciones. Estos Términos y condiciones son aplicables a todos los visitantes, usuarios y otras personas que accedan o utilicen el Servicio.")]), e._v(" "), n("p", [e._v("Al acceder o utilizar el Servicio, acepta quedar vinculado por estos Términos y condiciones. Si no está de acuerdo con alguna parte de estos Términos y condiciones, no podrá acceder al Servicio.")]), e._v(" "), n("p", [e._v("Todos los usuarios menores de edad en la jurisdicción en la que residen (por lo general, menores de 18 años) deben tener el permiso de sus padres o tutores, y estar directamente supervisados por ellos, para utilizar el Sitio. Si es usted menor de edad, su padre o tutor deberá leer y aceptar estos Términos y condiciones para que pueda utilizar el Sitio.")]), e._v(" "), n("p", [e._v("Su acceso y uso del Servicio está condicionado asimismo a la aceptación y el cumplimiento por su parte de la Política de privacidad de la Empresa. Nuestra Política de privacidad describe nuestras políticas y procedimientos en cuanto a la recopilación, el uso y la divulgación de su información personal al utilizar la Aplicación o el Sitio web y le informa sobre sus derechos de privacidad y la forma en que está protegido por la ley. Lea atentamente nuestra"), n("span", [e._v(" Política de privacidad")]), e._v(" y nuestra "), n("span", [e._v("Política de "), n("i", [e._v("cookies")])]), e._v("antes de utilizar nuestro Servicio.")]), e._v(" "), n("p", [n("b", [e._v("Enlaces a otros sitios web")])]), e._v(" "), n("p", [e._v("Nuestro Servicio puede incluir enlaces a sitios web o servicios de terceros que no son propiedad ni están controlados por la Empresa.")]), e._v(" "), n("p", [e._v("La Empresa no tiene control sobre el contenido, las políticas de privacidad o las prácticas de los sitios web o servicios de terceros y no asume ninguna responsabilidad al respecto. Además, Usted reconoce y acepta que la Empresa no será responsable, directa o indirectamente, de ningún daño o pérdida causados o supuestamente causados por o relacionados con el uso o la confianza en cualquiera de dichos contenidos, bienes o servicios disponibles en o a través de cualquiera de dichos sitios web o servicios.")]), e._v(" "), n("p", [e._v("Le recomendamos encarecidamente que lea los términos y condiciones y las políticas de privacidad de cualquier sitio web o servicio de terceros que visite.")]), e._v(" "), n("p", [n("b", [e._v("Rescisión")])]), e._v(" "), n("p", [e._v("Podemos rescindir o suspender su acceso inmediatamente, sin previo aviso o responsabilidad por cualquier razón, incluida, entre otras, el incumplimiento por su parte de estos Términos y condiciones.")]), e._v(" "), n("p", [e._v("Tras la rescisión, su derecho a utilizar el Servicio se extinguirá de inmediato.")]), e._v(" "), n("p", [n("b", [e._v("Limitación de la responsabilidad")])]), e._v(" "), n("p", [e._v("Excepto en lo que respecta a los residentes franceses (como se indica a continuación), sin perjuicio de los daños en los que pueda incurrir, la responsabilidad total de la Empresa y de cualquiera de sus proveedores en virtud de cualquier disposición recogida en estos Términos y su recurso exclusivo para todo lo anterior se limitará a la cantidad que haya pagado realmente a través del servicio o a 100 USD si no ha adquirido nada a través del Servicio.")]), e._v(" "), n("p", [e._v("En la medida en que lo permita la legislación aplicable, la Empresa o sus proveedores no serán responsables en ningún caso de ningún daño especial, fortuito, indirecto o derivado (incluidos, entre otros, daños por pérdida de beneficios, pérdida de datos u otra información, interrupción de la actividad comercial, lesiones personales, pérdida de privacidad derivada o relacionada de algún modo con el uso o la imposibilidad de usar el Servicio, el "), n("i", [e._v("software ")]), e._v("o el "), n("i", [e._v("hardware ")]), e._v("de terceros utilizado con el Servicio o relacionado de otro modo con cualquier disposición incluida en estos Términos), incluso aunque se haya advertido a la Empresa o a cualquier proveedor de la posibilidad de que se produzcan dichos daños e incluso aunque la solución no cumpla su propósito fundamental.")]), e._v(" "), n("p", [e._v("Determinados estados y territorios no permiten la exclusión de garantías implícitas o la limitación de la responsabilidad por daños indirectos o derivados, lo que significa que algunas de las limitaciones anteriores podrían no ser aplicables. En estos estados y territorios, la responsabilidad de cada una de las partes estará limitada en la medida en que lo permita la legislación aplicable."), n("br"), n("br"), e._v("En lo que respecta a los residentes franceses, la Empresa (incluidos sus empleados, agentes y distribuidores) no acepta responsabilidad alguna por (i) daños indirectos, (ii) daños no derivados del incumplimiento por parte de la Empresa de sus obligaciones contractuales o legales o (iii) daños derivados de un evento de fuerza mayor. ")]), e._v(" "), n("p", [n("b", [e._v("Descargo de responsabilidad «TAL CUAL» y «SEGÚN DISPONIBILIDAD»")])]), e._v(" "), n("p", [e._v("El Servicio se le presta «TAL CUAL», «SEGÚN DISPONIBILIDAD» y con todos los fallos y defectos, sin garantía de ningún tipo. En la medida en que lo permita la legislación aplicable, la Empresa, en su nombre o en nombre de sus Socios y licenciadores y proveedores de servicios correspondientes, renuncia de forma expresa a todas las garantías, ya sean expresas, implícitas, estatutarias o de otro tipo, con respecto al Servicio, incluidas todas las garantías implícitas de comerciabilidad, adecuación a un fin particular, titularidad y no infracción, así como las garantías que puedan surgir en el curso de las negociaciones, la ejecución, el uso o la práctica comercial. Sin perjuicio de lo anterior, la Empresa no proporciona ninguna garantía o compromiso, ni ofrece ninguna declaración de ningún tipo, de que el Servicio cumplirá con sus requisitos, conseguirá el resultado deseado, será compatible o funcionará con cualquier otro "), n("i", [e._v("software")]), e._v(", aplicaciones, sistemas o servicios, funcionará sin interrupciones, cumplirá con cualquier estándar de rendimiento o fiabilidad o no presentará errores, así como de que cualquier error o defecto puede corregirse o se corregirá.")]), e._v(" "), n("p", [e._v("Sin perjuicio de lo anterior, ni la Empresa ni ninguno de sus proveedores ofrecen ninguna declaración o garantía de ningún tipo, ya sea expresa o implícita: (i) en cuanto al funcionamiento o la disponibilidad del Servicio, o la información, el contenido y los materiales o productos incluidos en él; (ii) en cuanto a que el Servicio se prestará de forma ininterrumpida o sin errores; (iii) en cuanto a la exactitud, fiabilidad o actualidad de cualquier información o contenido que se facilite a través del Servicio; o (iv) en cuanto a que el Servicio, sus servidores, el contenido o los mensajes de correo electrónico enviados desde o en nombre de la empresa están libres de virus, "), n("i", [e._v("scripts")]), e._v(", troyanos, gusanos, "), n("i", [e._v("malware")]), e._v(", bombas de relojería u otros componentes dañinos.")]), e._v(" "), n("p", [e._v("Algunas jurisdicciones no permiten la exclusión de ciertos tipos de garantías o limitaciones de los derechos estatutarios aplicables de un consumidor, por lo que es posible que algunas o todas las exclusiones y limitaciones mencionadas anteriormente no sean aplicables en su caso. En estos casos, las exclusiones y limitaciones establecidas en este apartado se aplicarán en la medida en que lo permita la legislación aplicable.")]), e._v(" "), n("p", [n("b", [e._v("Legislación aplicable")])]), e._v(" "), n("p", [e._v("Las leyes del País, sin incluir sus normas de conflicto de leyes, regirán estos Términos y el uso que haga del Servicio. El uso que haga de la Aplicación puede estar sujeto también a otras leyes locales, estatales, nacionales o internacionales.")]), e._v(" "), n("p", [n("b", [e._v("Resolución de disputas")])]), e._v(" "), n("p", [e._v("Si tiene algún problema o surge alguna disputa en relación con el Servicio, acepta intentar primero resolver la disputa de manera informal, poniéndose en contacto con la Empresa.")]), e._v(" "), n("p", [n("b", [e._v("Para usuarios de la Unión Europea (UE)")])]), e._v(" "), n("p", [e._v("Si es Usted un consumidor de la Unión Europea, se beneficiará de todas las disposiciones obligatorias de la legislación de su país de residencia.")]), e._v(" "), n("p", [n("b", [e._v("Cumplimiento legal en Estados Unidos")])]), e._v(" "), n("p", [e._v("Usted declara y garantiza que (i) no se encuentra en un país que esté sujeto al embargo del gobierno de Estados Unidos, o que haya sido calificado por el gobierno de Estados Unidos como país «que apoya el terrorismo»; y (ii) no figura en ninguna lista del gobierno de Estados Unidos de partes prohibidas o restringidas.")]), e._v(" "), n("p", [n("b", [e._v("Divisibilidad y renuncia")])]), e._v(" "), n("p", [n("b", [e._v("Divisibilidad")])]), e._v(" "), n("p", [e._v("Si alguna disposición de estos Términos se considera inaplicable o inválida, dicha disposición se modificará e interpretará para cumplir con los objetivos de dicha disposición en la medida en que lo permita la legislación aplicable, mientras que las disposiciones restantes seguirán en pleno vigor y efecto.")]), e._v(" "), n("p", [n("b", [e._v("Renuncia")])]), e._v(" "), n("p", [e._v("Salvo lo dispuesto en el presente documento, el hecho de no ejercer un derecho o exigir el cumplimiento de una obligación en virtud de estos Términos no afectará a la capacidad de una parte para ejercer tal derecho o exigir tal cumplimiento en cualquier momento posterior y la renuncia a un incumplimiento no constituirá una renuncia a cualquier incumplimiento posterior.")]), e._v(" "), n("p", [n("b", [e._v("Interpretación de la traducción")])]), e._v(" "), n("p", [e._v("Estos Términos y condiciones pueden haber sido traducidos si los hemos puesto a su disposición en nuestro Servicio. Excepto en el caso de los residentes de Francia, acepta que en caso de controversia prevalecerá el texto original en inglés.")]), e._v(" "), n("p", [n("b", [e._v("Cambios en los Términos y condiciones")])]), e._v(" "), n("p", [e._v("Nos reservamos el derecho, según nuestro propio criterio, de modificar o sustituir estos Términos en cualquier momento. Si es importante realizar una revisión, haremos todo lo posible para avisar al menos 30 días antes de que entren en vigor los nuevos términos. Determinaremos lo que constituye un cambio importante según nuestro criterio.")]), e._v(" "), n("p", [e._v("Al seguir accediendo o utilizando nuestro Servicio después de que entren en vigor estas revisiones, acepta quedar vinculado por los términos revisados. Si no acepta los nuevos términos, ya sea en parte o en su totalidad, le pedimos que deje de utilizar el sitio web y el Servicio.")]), e._v(" "), n("p", [n("b", [e._v("Contacto")])]), e._v(" "), n("p", [e._v("Si tiene alguna pregunta sobre estos Términos y condiciones, puede ponerse en contacto con nosotros:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Por correo electrónico: "), n("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [n("span", [e._v("support@pokemonkidswinterfest.com")])])])])]), e._v(" "), n("p", [n("b", [e._v("Códigos de recompensa")])]), e._v(" "), n("p", [e._v("Los códigos obtenidos se te proporcionan con una licencia limitada, personal, revocable, intransferible y no sublicenciable para usarlos únicamente en el sitio web. No tienes ningún derecho de propiedad, derecho o título en o para el uso de cualquier código. Podemos cancelar tu licencia de uso de un código en cualquier momento y a nuestra entera discreción.")])])
                }], !1, null, null, null).exports,
                U = Object(r.a)({}, (function() {
                    var e = this.$createElement;
                    this._self._c;
                    return this._m(0)
                }), [function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("div", [n("p", [n("b", [e._v("Conditions générales")])]), e._v(" "), n("p", [e._v("Veuillez lire attentivement les présentes conditions générales avant d'utiliser nos Services.")]), e._v(" "), n("p", [n("b", [e._v("Interprétation et Définitions")])]), e._v(" "), n("p", [n("b", [e._v("Interprétation")])]), e._v(" "), n("p", [e._v("Les termes commençant par une majuscule sont définis dans les conditions ci-dessous. Les définitions suivantes auront la même signification, que les termes apparaissent au singulier ou au pluriel.")]), e._v(" "), n("p", [n("b", [e._v("Définitions")])]), e._v(" "), n("p", [e._v("Dans le cadre des présentes Conditions générales :")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Une Filiale est une entité qui contrôle, est contrôlée par ou est sous contrôle conjoint avec une partie, où « contrôle » signifie propriété d'au moins 50 % des actions, des participations ou d'autres titres de créance pour voter aux élections de directeurs ou autres membres de la direction.")])]), e._v(" "), n("li", [n("span", [e._v("« Pays » désigne : (1) Royaume-Uni pour les citoyens du Royaume-Uni, Allemagne, Italie et Espagne, (2) France pour les citoyens français, et (3) l'État de Washington pour les citoyens des États-Unis d'Amérique, Mexique, Chili, Colombie, Pérou, Argentine, Panama, Costa Rico, Guatemala, Honduras, Bolivie, Uruguay, Paraguay, Salvador, République Dominicaine et Brésil.")])]), e._v(" "), n("li", [n("span", [e._v("« Société » (« la Société », « Nous », « Notre » ou « Nôtre » dans le présent contrat) désigne The Pokémon Company International, Inc., TPCi London, 3rd Floor Building 10, Chiswick Park, 566 Chiswick High Road, London, W4 5XS Royaume-Uni.")])]), e._v(" "), n("li", [n("span", [e._v("« Appareil » désigne tout appareil pouvant accéder au Service, comme un ordinateur, un téléphone mobile ou une tablette numérique.")])]), e._v(" "), n("li", [n("span", [e._v("« Service » désigne le Site web.")])]), e._v(" "), n("li", [n("span", [e._v("« Conditions générales » (aussi appelées « Conditions ») désigne les présentes Conditions générales, qui constituent l'intégralité du contrat liant Vous et la Société concernant l'utilisation du Service. Les présentes Conditions générales ont été créées à l'aide du "), n("a", {
                        attrs: {
                            target: "blank",
                            href: "https://www.termsfeed.com/terms-conditions-generator/"
                        }
                    }, [e._v("Générateur de Conditions générales")]), e._v(".")])]), e._v(" "), n("li", [n("span", [e._v("Le « Service Tiers de Réseaux Sociaux » désigne tout service ou contenu (y compris les données, les informations, les produits et les services) fournis par un tiers qui pourrait être publié, inclus ou mis à disposition par le Service.")])]), e._v(" "), n("li", [n("span", [e._v("Site web désigne www.pokemonkidswinterfest.com, accessible depuis Pokémon Kids Winter Fest.")])]), e._v(" "), n("li", [n("span", [e._v("« Vous » désigne l'individu visitant ou utilisant le Service, ou la Société, ou toute autre entité légale au nom de laquelle cet individu visite ou utilise le Service, s'il y a lieu.")])])]), e._v(" "), n("p", [n("b", [e._v("Droit de propriété intellectuelle")])]), e._v(" "), n("p", [e._v("Sauf indication contraire, le Site est notre propriété et tous les codes sources, bases de données, fonctionnalités, logiciels, designs de site web, fichiers audio, fichiers vidéo, textes, photographies et images présents sur le Site (ensemble désigné par « Contenu »), et les marques déposées, les marques de service et les logos inclus dedans (les « Marques ») nous appartiennent ou sont contrôlés par nous ou font l'objet d'une licence dont nous sommes titulaires, et sont protégés par les lois sur les droits d'auteur et les marques déposées et plusieurs autres droits de propriété intellectuelle et lois contre la concurrence déloyales des États-Unis, des juridictions étrangères et des conventions internationales.")]), e._v(" "), n("p", [e._v("Le Contenu et les Marques sont fournis sur le Site « tels quels » pour votre information et votre usage personnel uniquement. Sauf disposition contraire dans les présentes Conditions générales, aucune partie du Site et aucun Contenu ou Marque ne peut être copié, reproduit, agrégé, republié, téléchargé, publié, encodé, traduit, transmis, distribué, vendu, accrédité ou exploité de quelque autre façon à des fins commerciales, quelles qu'elles soient, sans autorisation expresse préalable de notre part.")]), e._v(" "), n("p", [e._v("En supposant que vous soyez éligible à l'utilisation du Site, vous obtenez une licence limitée pour accéder et utiliser le Site et pour télécharger et imprimer une copie de toute partie du Contenu pour laquelle vous avez obtenu l'accès, uniquement pour votre usage personnel et non-commercial. Nous nous réservons tous les droits de vous accorder expressément l'accès au Site, au Contenu et aux Marques.")]), e._v(" "), n("p", [n("b", [e._v("Reconnaissance")])]), e._v(" "), n("p", [e._v("Les présentes Conditions générales régissent l'utilisation de ce Service et l'accord qui Vous lie à la Société. Les présentes Conditions générales définissent les droits et obligations de tous les utilisateurs concernant l'utilisation du Service.")]), e._v(" "), n("p", [e._v("Votre accès et votre utilisation du Service dépendent de Votre accord et de Votre respect des présentes Conditions générales. Ces Conditions générales s'appliquent à tout visiteur, utilisateur et autre individu consultant ou utilisant le Service.")]), e._v(" "), n("p", [e._v("En visitant ou en utilisant le Service, Vous acceptez de vous soumettre aux présentes Conditions générales. Si vous n'êtes pas d'accord avec un ou plusieurs des présentes Conditions générales, Nous Vous recommandons de ne pas accéder au Service.")]), e._v(" "), n("p", [e._v("Tous les utilisateurs mineurs dans la juridiction où ils résident (généralement moins de 18 ans) doivent avoir l'autorisation d'un parent ou tuteur, et être sous leur supervision, pour utiliser le Site. Si vous êtes mineur, vous devez faire lire et accepter les présentes Conditions générales par votre parent ou tuteur avant d'utiliser le Site vous-même.")]), e._v(" "), n("p", [e._v("Votre accès et votre utilisation du Service dépendent de Votre accord et de Votre respect de la Politique de confidentialité de la Société. Notre Politique de confidentialité décrit Nos politiques et procédures à propos de la collecte, de l'utilisation et de la divulgation de Vos informations personnelles quand Vous utilisez l'Application ou le Site web, et Vous informent sur Votre droit à la vie privée et sur Votre protection juridique. Veuillez lire attentivement Notre "), n("span", [e._v("Politique de confidentialité")]), e._v(" et Notre "), n("span", [e._v("Politique sur les cookies")]), e._v(" avant d'utiliser Notre Service.")]), e._v(" "), n("p", [n("b", [e._v("Liens vers d'autres sites web")])]), e._v(" "), n("p", [e._v("Notre Service peut contenir des liens vers des sites web ou services de tiers qui n'appartiennent pas et ne sont pas contrôlés par la Société.")]), e._v(" "), n("p", [e._v("La Société n'a aucune prise et n'est en aucun cas responsable du contenu, des politiques de confidentialité ou des pratiques des sites web et services de tiers, quels qu'ils soient. De plus, Vous reconnaissez et acceptez que la Société ne pourra en aucun cas être tenu pour responsable, directement ou indirectement, en cas de dommages ou de perte causés ou soupçonnés d'avoir été causés ou en lien avec l'utilisation ou le recours à ces contenus, biens ou services disponibles sur ou via nos sites web ou services.")]), e._v(" "), n("p", [e._v("Nous Vous recommandons fortement de lire les termes et conditions et les politiques de confidentialité de tous les sites web et services tiers que vous visitez.")]), e._v(" "), n("p", [n("b", [e._v("Résiliation")])]), e._v(" "), n("p", [e._v("Nous pouvons être amenés à résilier ou suspendre Votre accès immédiatement, sans préavis et sans en être tenus responsables, quelle qu'en soit la raison, y compris sans limitation si Vous contrevenez aux présentes Conditions générales.")]), e._v(" "), n("p", [e._v("En cas de résiliation, Votre droit d'utiliser le Service cessera immédiatement.")]), e._v(" "), n("p", [n("b", [e._v("Limitation de responsabilité")])]), e._v(" "), n("p", [e._v("Sauf pour les citoyens français (comme indiqué ci-dessous), nonobstant tout dommage pouvant Vous arriver, l'entière responsabilité de la Société et de tous ses fournisseurs, en application de toutes les dispositions des présentes Conditions générales et de Votre recours exclusif à ce qui précède seront limités au montant effectivement payé par Vous via le Service ou à 100 USD si Vous n'avez rien acheté via le Service.")]), e._v(" "), n("p", [e._v("Dans les limites autorisées par la loi en vigueur, la Société ou ses fournisseurs ne pourront en aucun cas être tenus pour responsables en cas de dommages spéciaux, accidentels, indirects ou consécutifs, quels qu'ils soient (y compris, mais sans s'y limiter, les pertes de bénéfices, pertes de données ou autres informations, les interruptions de travail, les blessures corporelles, les pertes de confidentialité découlant ou liées de quelque façon que ce soit à l'utilisation ou à l'inaccessibilité du Service, de logiciels tiers et/ou de matériel tiers utilisé avec le Service, ou lié de quelque autre façon que ce soit à des dispositions des présentes Conditions), même si la Société ou tout fournisseur a été informé de la possibilité de ces dommages et même si la solution proposée ne remplit pas son objectif premier.")]), e._v(" "), n("p", [e._v("Certains États et territoires n'autorisent pas l'exclusion de garantie implicite ou la limitation de responsabilité en cas de dommages accidentels ou consécutifs. Cela signifie que certaines des limitations ci-dessus ne s'y appliquent pas. Dans ces États et territoires, la responsabilité de chaque partie sera limitée à toute la mesure permise par la loi."), n("br"), n("br"), e._v("En ce qui concerne les citoyens français, la Société (y compris ses employés, agents et distributeurs) n'accepte aucune responsabilité en cas de (i) dommages indirects, (ii) dommages ne résultant pas du non-respect par la Société de ses obligations contractuelles et légales ou (iii) dommages résultant de cas de force majeure. ")]), e._v(" "), n("p", [n("b", [e._v("Clause de non-responsabilité « tel quel » et « selon disponibilité »")])]), e._v(" "), n("p", [e._v("Le Service Vous est proposé « tel quel » ou « selon disponibilité » et sans aucune garantie sur les défauts et anomalies. Dans toute la mesure permise par la loi en vigueur, la Société, en son nom propre et au nom de ses Filiales et de ses/leurs concédants et fournisseurs de services, décline expressément toute garantie, qu'elle soit explicite, implicite, statutaire ou autre, en rapport avec le Service, y compris toutes les garanties implicites de valeur commerciale, de conformité à certains besoins, de titre et d'absence de contrefaçon et toute garantie pouvant découler de rapports d'affaires, de l'exercice de leurs fonctions, de leur utilisation ou de pratiques commerciales. Sans qu'en soit limitée la portée de ce qui précède, la Société ne fournit aucune garantie ou engagement, et ne donne aucune assurance de quelque nature que ce soit sur le fait que le Service répondra à Vos besoins, atteindra des objectifs souhaités, sera compatible ou fonctionnera avec tout autre logiciel, application, système ou service, fonctionnera sans interruption, satisfera des normes de performance ou de fiabilité, ne présentera aucune erreur ou que les éventuels défauts ou erreurs pourront être ou seront corrigés.")]), e._v(" "), n("p", [e._v("Sans qu'en soit limitée la portée de ce qui précède, ni la Société ni aucun des fournisseurs de la Société ne donne d'assurance de quelque nature que ce soit ou ne garantissent, explicitement ou implicitement : (i) le fonctionnement ou la disponibilité du Service, ou des informations, du contenu, de la documentation et des produits inclus ; (ii) que le Service sera ininterrompu ou ne présentera aucune erreur ; (iii) la précision, la fiabilité et l'actualité de tout contenu ou information fourni via le Service ; ou (iv) que le Service, ses serveurs, le contenu, ou les e-mails envoyés par ou au nom de la Société ne contiennent aucun virus, script, cheval de Troie, ver informatique, programme malveillant, bombe à retardement ou autre composant dangereux.")]), e._v(" "), n("p", [e._v("Certaines juridictions n'autorisent pas l'exclusion de certains types de garanties ou les limitations sur les droits en vigueur des consommateurs. Par conséquent, tout ou partie des exclusions et limitations ci-dessus peuvent ne pas s'appliquer à Vous. Dans ce cas, les exclusions et limitations présentées dans cette section seront appliquées dans toute la mesure permise par la loi en vigueur.")]), e._v(" "), n("p", [n("b", [e._v("Loi applicable")])]), e._v(" "), n("p", [e._v("Les lois du Pays, sauf ses règles de conflits des lois, régissent les présentes Conditions générales et Votre utilisation du Service. Votre utilisation de l'Application peut aussi être soumise à d'autres lois locales, d'État, nationales ou internationales.")]), e._v(" "), n("p", [n("b", [e._v("Résolution des conflits")])]), e._v(" "), n("p", [e._v("En cas d'inquiétude ou de conflit de Votre part à propos du Service, Vous acceptez d'essayer en premier lieu de résoudre ce conflit de façon informelle en contactant la Société.")]), e._v(" "), n("p", [n("b", [e._v("Pour les utilisateurs de l'Union européenne (UE)")])]), e._v(" "), n("p", [e._v("Si vous êtes un consommateur de l'Union européenne, vous bénéficiez des dispositions impératives de la loi du pays dans lequel vous résidez.")]), e._v(" "), n("p", [n("b", [e._v("Conformité juridique pour les États-Unis")])]), e._v(" "), n("p", [e._v("Vous déclarez et garantissez que (i) Vous ne résidez pas dans un pays faisant l'objet d'un embargo par le gouvernement des États-Unis, ou qui a été désigné par le gouvernement des États-Unis comme un pays « qui soutient le terrorisme », et (ii) Vous ne figurez sur la liste des personnes limitées ou interdites d'aucun des États-Unis.")]), e._v(" "), n("p", [n("b", [e._v("Divisibilité et renonciation")])]), e._v(" "), n("p", [n("b", [e._v("Divisibilité")])]), e._v(" "), n("p", [e._v("En cas de disposition des présentes Conditions générales considérée comme non-applicable ou invalide, cette disposition sera modifiée et interprétée pour atteindre ses objectifs dans toute la mesure permise par la loi en vigueur, et les dispositions restantes continueront d'être pleinement applicables.")]), e._v(" "), n("p", [n("b", [e._v("Renonciation")])]), e._v(" "), n("p", [e._v("Sauf disposition prévue dans les présentes Conditions générales, en cas d'impossibilité d'exercer un droit ou d'exiger l'exécution d'une obligation en vertu de ces Conditions, cela ne nuira pas à la capacité des parties à exercer ce droit ou à exiger l'exécution de cette disposition ultérieurement, et la renonciation à faire valoir une violation ne constituera pas une renonciation à faire valoir des violations consécutives.")]), e._v(" "), n("p", [n("b", [e._v("Traduction et interprétation")])]), e._v(" "), n("p", [e._v("Les présentes Conditions générales ont pu être traduites si Nous les avons mises à Votre disposition sur notre Service. Sauf pour les citoyens français, vous acceptez que le texte original en anglais prévaudra en cas de litige.")]), e._v(" "), n("p", [n("b", [e._v("Modifications des Conditions générales")])]), e._v(" "), n("p", [e._v("Nous nous réservons le droit, à Notre entière discrétion, de modifier ou de remplacer les présentes Conditions générales à tout moment. En cas de modification documentaire, Nous ferons Notre possible pour Vous en avertir par un préavis d'au moins 30 jours avant la prise d'effet des nouvelles conditions. Ce qui constitue une modification documentaire sera déterminé à Notre entière discrétion.")]), e._v(" "), n("p", [e._v("En continuant de consulter et d'utiliser Notre Service après la prise d'effet de ces révisions, Vous acceptez d'être lié par ces conditions révisées. Si Vous n'acceptez pas les nouvelles conditions, en tout ou partie, veuillez arrêter d'utiliser le site web et le Service.")]), e._v(" "), n("p", [n("b", [e._v("Contact")])]), e._v(" "), n("p", [e._v("Pour toute question à propos des présentes Conditions générales, Vous pouvez Nous contacter :")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Par e-mail : "), n("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [n("span", [e._v("support@pokemonkidswinterfest.com")])])])])]), e._v(" "), n("p", [n("b", [e._v("Codes de récompense")])]), e._v(" "), n("p", [e._v("Les codes que vous recevez sont limités, personnels, révocables, non transférables, non cessible. Vous pouvez les utiliser uniquement sur le site Internet. Vous n'avez aucun intérêt, droit ou titre de propriété sur les codes ou leur utilisation. Nous pouvons révoquer votre droit à utiliser un code à tout moment et à notre entière discrétion.")])])
                }], !1, null, null, null).exports,
                x = Object(r.a)({}, (function() {
                    var e = this.$createElement;
                    this._self._c;
                    return this._m(0)
                }), [function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("div", [n("p", [n("b", [e._v("Termini e condizioni")])]), e._v(" "), n("p", [e._v("Si invita a leggere con attenzione i presenti termini e condizioni prima di utilizzare il Servizio.")]), e._v(" "), n("p", [n("b", [e._v("Interpretazione e definizioni")])]), e._v(" "), n("p", [n("b", [e._v("Interpretazione")])]), e._v(" "), n("p", [e._v("Le parole con iniziale maiuscola hanno il significato definito nelle seguenti condizioni. Le definizioni che seguono hanno lo stesso significato indipendentemente dal fatto che compaiano al singolare o al plurale.")]), e._v(" "), n("p", [n("b", [e._v("Definizioni")])]), e._v(" "), n("p", [e._v("Ai fini dei presenti Termini e Condizioni:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v('Per Consociata si intende una persona giuridica che controlla una parte, ne è controllata o è sottoposta a comune controllo con la stessa, ove per "controllo" si intende il possesso di almeno il 50% delle azioni, delle partecipazioni azionarie o di altri titoli aventi diritto di voto per l\'elezione degli amministratori o di altre autorità di gestione.')])]), e._v(" "), n("li", [n("span", [e._v("Per Paesi si intende:(1) il Regno Unito per i cittadini di Regno Unito, Germania, Italia e Spagna, (2) Francia per i cittadini in Francia e (3) lo Stato di Washington per i cittadini degli Stati Uniti d'America, Messico, Cile, Colombia, Perù, Argentina, Panama, Costa Rica, Guatemala, Honduras, Bolivia, Uruguay, Paraguay, Guatemala, El Salvador, Repubblica Dominicana e Brasile.")])]), e._v(" "), n("li", [n("span", [e._v('Per Società (nel prosieguo del presente Contratto la "Società") si intende The Pokémon Company International, Inc., TPCi London, 3° piano, edificio 10, Chiswick Park, 566 Chiswick High Road, Londra, W4 5XS Regno Unito.')])]), e._v(" "), n("li", [n("span", [e._v("Per Dispositivo si intende qualsivoglia dispositivo con cui si possa accedere al Servizio come un computer, un cellulare o un tablet.")])]), e._v(" "), n("li", [n("span", [e._v("Per Servizio si intende il Sito Web.")])]), e._v(" "), n("li", [n("span", [e._v("Per Termini e Condizioni (nel prosieguo anche \"Termini\") si intendono i presenti Termini e Condizioni che costituiscono l'intero accordo tra l'Utente e la Società in relazione all'utilizzo del Servizio. Il presente accordo su Termini e Condizioni è stato creato con l'ausilio del "), n("a", {
                        attrs: {
                            target: "blank",
                            href: "https://www.termsfeed.com/terms-conditions-generator/"
                        }
                    }, [e._v("Generatore di Termini e Condizioni")]), e._v(".")])]), e._v(" "), n("li", [n("span", [e._v("Per Servizio di social media di terzi si intende qualsivoglia servizio o contenuto (inclusi dati, informazioni, prodotti o servizi) fornito da terzi che può essere visualizzato, incluso o messo a disposizione dal Servizio.")])]), e._v(" "), n("li", [n("span", [e._v("Per Sito Web si intende www.pokemonkidswinterfest.com, accessibile dalla Pokémon Kids Winter Fest.")])]), e._v(" "), n("li", [n("span", [e._v("Per Utente si intende la persona fisica che accede o utilizza il Servizio ovvero la società, o altra persona giuridica, per conto della quale tale persona fisica accede o utilizza il Servizio, a seconda dei casi.")])])]), e._v(" "), n("p", [n("b", [e._v("Diritti di proprietà intellettuale")])]), e._v(" "), n("p", [e._v('Se non diversamente indicato, il Sito è di proprietà della Società e tutti i codici sorgente, i database, le funzionalità, i software, i disegni dei siti web, gli audio, i video, i testi, le fotografie e la grafica sul Sito (nel complesso, il "Contenuto"), e i marchi di prodotto, i marchi di servizio e i loghi ivi contenuti (i "Marchi") sono di proprietà della Società ovvero dalla stessa controllati o alla stessa concessi in licenza, e sono protetti da leggi in materia di diritto d\'autore e marchi e da vari altri diritti di proprietà intellettuale e leggi sulla concorrenza sleale di Stati Uniti, giurisdizioni straniere e convenzioni internazionali.')]), e._v(" "), n("p", [e._v('Il Contenuto e i Marchi sono forniti sul Sito "NELLO STATO IN CUI SI TROVA(NO)" esclusivamente ad uso personale e a scopo puramente informativo. Salvo per quanto espressamente previsto nei presenti Termini e Condizioni, nessuna parte del Sito e nessun Contenuto o Marchio può essere copiato, riprodotto, aggregato, ripubblicato, caricato, pubblicato, pubblicamente visualizzato, codificato, tradotto, trasmesso, distribuito, venduto, concesso in licenza o sfruttato in altro modo per qualsivoglia scopo commerciale, senza l\'espressa autorizzazione scritta della Società.')]), e._v(" "), n("p", [e._v("Nella misura in cui sia idoneo all'utilizzo del Sito, l'Utente ottiene una licenza limitata all'accesso e all'utilizzo del Sito e a scaricare o stampare una copia di qualsivoglia parte del Contenuto legittimamente accessibile, solo per uso personale e non commerciale. La Società si riserva tutti i diritti non espressamente concessi all'Utente rispetto e in relazione a Sito, Contenuto e Marchi.")]), n("p", [n("b", [e._v("Riconoscimento")])]), e._v(" "), n("p", [e._v("I presenti Termini e Condizioni disciplinano l'utilizzo del presente Servizio e l'accordo in essere tra l'Utente e la Società. I presenti Termini e Condizioni definiscono i diritti e gli obblighi di tutti gli utenti in merito all'utilizzo del Servizio.")]), e._v(" "), n("p", [e._v("L'accesso e l'utilizzo del Servizio è subordinato all'accettazione e al rispetto dei presenti Termini e Condizioni da parte dell'Utente. I presenti Termini e Condizioni si applicano a tutti i visitatori, utenti e altri soggetti che accedono o utilizzano il Servizio.")]), e._v(" "), n("p", [e._v("Accedendo o utilizzando il Servizio, l'Utente accetta di essere soggetto al rispetto dei presenti Termini e Condizioni. In assenza di accordo su una qualsiasi parte dei presenti Termini e Condizioni, l'Utente non potrà avere accesso al Servizio.")]), e._v(" "), n("p", [e._v("Tutti gli utenti minorenni nella giurisdizione in cui sono residenti (generalmente di età inferiore ai 18 anni) devono avere il permesso di genitori o tutori per utilizzare il Sito ed essere direttamente controllati dagli stessi. Se l'utente è minorenne, è necessario che il genitore o tutore abbia letto e accettato i presenti Termini e Condizioni prima di utilizzare il Sito.")]), e._v(" "), n("p", [e._v("L'accesso e l'utilizzo del Servizio è subordinato anche all'accettazione e al rispetto dell'Informativa sulla riservatezza da parte dell'Utente. L'Informativa sulla riservatezza della Società descrive le politiche e procedure adottate dalla Società in merito a raccolta, uso e divulgazione delle informazioni personali dell'Utente durante l'utilizzo dell'Applicazione o del Sito Web e illustra i diritti alla riservatezza dell'Utente e le tutele previste per legge. Si invita a leggere attentamente l'"), n("span", [e._v("Informativa sulla riservatezza")]), e._v(" e l'"), n("span", [e._v("Informativa sui Cookie")]), e._v(" prima di utilizzare il Servizio della Società.")]), e._v(" "), n("p", [n("b", [e._v("Link ad altri siti Web")])]), e._v(" "), n("p", [e._v("Il Servizio della Società può contenere link a siti Web o servizi di terze parti che non sono di proprietà o controllati dalla Società.")]), e._v(" "), n("p", [e._v("La Società non ha alcun controllo sul contenuto, le informative in materia di riservatezza o le pratiche di qualsivoglia sito Web o servizio di terzi e non si assume alcuna responsabilità in merito. Inoltre, l'Utente riconosce e accetta che la Società non sarà responsabile o perseguibile, direttamente o indirettamente, per qualsivoglia perdita o danno causato, o presumibilmente causato, dall'uso o dall'affidamento su tali contenuti, beni o servizi disponibili su tali siti Web o servizi o mediante tali siti Web o servizi ovvero in relazione a tale uso o affidamento.")]), e._v(" "), n("p", [e._v("È vivamente consigliata una lettura dei termini e delle condizioni, nonché delle informative sulla riservatezza, di qualsivoglia sito Web o servizio di terzi eventualmente visitato.")]), e._v(" "), n("p", [n("b", [e._v("Cancellazione")])]), e._v(" "), n("p", [e._v("La Società ha facoltà di cancellare o sospendere immediatamente l'accesso dell'Utente, senza preavviso o responsabilità di sorta, per qualsivoglia motivo, incluso, a titolo esemplificativo ma non esaustivo, per violazione dei presenti Termini e Condizioni.")]), e._v(" "), n("p", [e._v("In caso di cancellazione dell'accesso, il diritto dell'Utente di utilizzare il Servizio cesserà con effetto immediato.")]), e._v(" "), n("p", [n("b", [e._v("Limitazione di responsabilità")])]), e._v(" "), n("p", [e._v("Ad eccezione dei residenti in Francia (come indicato di seguito), in caso di danni subiti dall'Utente, l'intera responsabilità della Società e dei relativi fornitori in forza di qualsiasi previsione contenuta nei presenti Termini e l'unico rimedio a disposizione dell'Utente per quanto precede saranno limitati all'importo effettivamente corrisposto dall'Utente attraverso il Servizio o a USD 100 in caso l'utente non abbia effettuato acquisti attraverso il Servizio.")]), e._v(" "), n("p", [e._v("Nella misura massima consentita dalla legge applicabile, in nessun caso la Società o i relativi fornitori saranno responsabili per danni speciali, incidentali, indiretti o consequenziali di qualsivoglia natura (inclusi, a titolo esemplificativo ma non esaustivo, danni per perdita di profitti, perdita di dati o altre informazioni, per interruzione dell'attività, per lesioni personali, violazione della riservatezza derivante da o in qualsiasi modo connessa all'utilizzo o all'impossibilità di utilizzo del Servizio, di software e/o l'hardware di terzi utilizzati con il Servizio, o comunque in relazione a qualsivoglia previsione contenuta nei presenti Termini), anche laddove la Società o qualsivoglia fornitore fosse stato informato della possibilità di tali danni e anche laddove il rimedio sia venuto meno al suo scopo essenziale.")]), e._v(" "), n("p", [e._v("Dato che alcuni Stati e territori non consentono l'esclusione di garanzie implicite o la limitazione di responsabilità per danni incidentali o consequenziali, alcune delle limitazioni di cui sopra potrebbero non essere applicabili. In questi Stati e territori, la responsabilità di ciascuna parte sarà limitata nella misura massima consentita dalla legge. In relazione ai residenti in Francia, la Società (inclusi i relativi dipendenti, agenti e distributori) declina qualsivoglia responsabilità per (i) danni indiretti, (ii) danni che non deriverebbero da violazione, da parte della Società, dei propri obblighi contrattuali o legali ovvero (iii) danni che deriverebbero da un evento di forza maggiore.")]), e._v(" "), n("p", [n("b", [e._v("Esclusione di responsabilità: “NELLO STATO IN CUI SI TROVA” e “COME DISPONIBILE”")])]), e._v(" "), n("p", [e._v('Il Servizio è fornito all\'Utente "NELLO STATO IN CUI SI TROVA" e "COME DISPONIBILE" e con tutti i vizi e i difetti senza garanzia di alcun tipo. Nella misura massima consentita dalla legge applicabile, la Società, per conto proprio e per conto delle relative Consociate, e rispettivi licenzianti e fornitori di servizi, declina espressamente tutte le garanzie, espresse, implicite, legali o di altro tipo, in relazione al Servizio, comprese tutte le garanzie implicite di commerciabilità, idoneità per un particolare scopo, titolarità e non violazione dei diritti di terzi, e le garanzie eventualmente sorte da prassi negoziali, adempimenti, usi o prassi commerciali. Fermo restando quanto precede, la Società non fornisce alcuna garanzia o impegno, né rilascia alcuna dichiarazione di qualsivoglia genere, rispetto al fatto che il Servizio soddisferà le esigenze dell\'Utente, raggiungerà qualsivoglia risultato previsto, sarà compatibile o funzionerà con qualsivoglia altro software, applicazione, sistema o servizio, funzionerà senza interruzioni, soddisferà qualsivoglia standard di performance o affidabilità, o sarà privo di errori ovvero rispetto al fatto che eventuali errori o difetti potranno essere corretti o saranno corretti.')]), e._v(" "), n("p", [e._v("Fermo restando quanto precede, né la Società né alcuno dei fornitori della Società rilascia alcuna dichiarazione o garanzia di qualsivoglia genere, espressa o implicita:(i) per quanto riguarda il funzionamento o la disponibilità del Servizio, o le informazioni, i contenuti e i materiali o prodotti ivi inclusi;(ii) che il Servizio sarà ininterrotto o privo di errori; (iii) per quanto riguarda l'accuratezza, l'affidabilità o l'attualità di qualsivoglia informazione o contenuto fornito attraverso il Servizio;o (iv) che il Servizio, i relativi server, il contenuto, o le e-mail inviate da o per conto della Società sono prive di virus, script, cavalli di troia, worm, malware, timebomb, o altri componenti dannosi.")]), e._v(" "), n("p", [e._v("Dato che alcune giurisdizioni non consentono l'esclusione di alcuni tipi di garanzie o limitazioni sui diritti legali applicabili di un consumatore, le esclusioni e le limitazioni di cui sopra, o una loro parte, potrebbero non essere applicabili all'Utente. In tal caso, tuttavia, le esclusioni e le limitazioni di cui alla presente sezione saranno applicate nella misura più ampia possibile ai sensi della legge applicabile.")]), n("p", [n("b", [e._v("Legge applicabile")])]), e._v(" "), n("p", [e._v("Le leggi del Paese, con esclusione delle relative norme di conflitto, regolano i presenti Termini e l'utilizzo del Servizio da parte dell'Utente. L'utilizzo dell'Applicazione da parte dell'Utente può essere soggetto anche ad altre leggi locali, statali, nazionali o internazionali.")]), e._v(" "), n("p", [n("b", [e._v("Risoluzione delle controversie")])]), e._v(" "), n("p", [e._v("In caso di dubbi o controversie in merito al Servizio, l'Utente accetta di tentare anzitutto di risolvere amichevolmente la controversia contattando la Società.")]), e._v(" "), n("p", [n("b", [e._v("Per gli Utenti dell'Unione europea (UE)")])]), e._v(" "), n("p", [e._v("I consumatori dell'Unione europea potranno beneficiare di tutte le disposizioni inderogabili applicabili nel Paese in cui sono residenti.")]), e._v(" "), n("p", [n("b", [e._v("Conformità alle leggi degli Stati Uniti")])]), e._v(" "), n("p", [e._v("L'Utente dichiara e garantisce che (i) non si trova in un paese soggetto all'embargo del governo degli Stati Uniti o che è stato designato dal governo degli Stati Uniti come paese \"a sostegno del terrorismo\" e (ii) non è presente in alcun elenco di parti proibite o soggette a restrizioni del governo degli Stati Uniti.")]), e._v(" "), n("p", [n("b", [e._v("Clausola di invalidità parziale e rinuncia ai diritti")])]), e._v(" "), n("p", [n("b", [e._v("Clausola di invalidità parziale")])]), e._v(" "), n("p", [e._v("Laddove una qualsiasi previsione contenuta nei presenti Termini sia ritenuta non azionabile in giudizio o non valida, tale previsione sarà modificata e interpretata per raggiungere gli obiettivi di tale previsione nella misura più ampia possibile ai sensi della legge applicabile e le restanti previsioni continueranno ad essere efficaci e valide a tutti gli effetti.")]), e._v(" "), n("p", [n("b", [e._v("Clausola di rinuncia ai diritti")])]), e._v(" "), n("p", [e._v("Salvo quanto previsto nel presente documento, il mancato esercizio di un diritto o la mancata richiesta di adempimento di un obbligo ai sensi dei presenti Termini non pregiudica la capacità di una parte di esercitare tale diritto o di richiedere tale adempimento in qualsiasi momento successivo, né la rinuncia a una violazione costituisce una rinuncia a qualsiasi successiva violazione.")]), e._v(" "), n("p", [n("b", [e._v("Interpretazione della traduzione")])]), e._v(" "), n("p", [e._v("I presenti Termini e Condizioni possono essere stati tradotti ove messi a disposizione dell'Utente sul Servizio della Società. L'Utente, salvo il caso in cui sia residente in Francia, accetta che, in caso di controversia, prevarrà il testo originale in inglese.")]), e._v(" "), n("p", [n("b", [e._v("Modifiche ai presenti Termini e Condizioni ")])]), e._v(" "), n("p", [e._v("La Società si riserva il diritto, a sua esclusiva discrezione, di modificare o sostituire i presenti Termini in qualsiasi momento. In caso di revisione sostanziale, la Società farà il possibile per dare un preavviso di almeno 30 giorni rispetto alla data di efficacia di qualsiasi nuovo termine. La definizione di modifica sostanziale sarà a esclusiva discrezione della Società.")]), e._v(" "), n("p", [e._v("Continuando ad accedere o a utilizzare il Servizio della Società anche una volta divenute efficaci tali revisioni, l'Utente accetta di essere soggetto ai termini rivisti. In caso di mancato consenso sui nuovi termini, anche solo in parte, si invita a interrompere l'utilizzo del sito web e del Servizio.")]), e._v(" "), n("p", [n("b", [e._v("Contatti")])]), e._v(" "), n("p", [e._v("Per domande sui presenti Termini e Condizioni, è possibile contattare la Società:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Via e-mail: "), n("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [n("span", [e._v("support@pokemonkidswinterfest.com")])])])])]), e._v(" "), n("p", [n("b", [e._v("Codici promozionali")])]), e._v(" "), n("p", [e._v("I codici ottenuti ti vengono forniti con una licenza limitata, personale, revocabile, non trasferibile e non cedibile in sublicenza, da utilizzare solo all'interno del sito web. Non hai alcun interesse proprietario, diritto o titolo nell'uso di tale codice. Possiamo revocare la tua licenza per l'utilizzo di un codice in qualsiasi momento, a nostra esclusiva discrezione.")])])
                }], !1, null, null, null).exports,
                j = Object(r.a)({}, (function() {
                    var e = this.$createElement;
                    this._self._c;
                    return this._m(0)
                }), [function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("div", [n("p", [n("b", [e._v("Términos y condiciones")])]), e._v(" "), n("p", [e._v("Le pedimos que lea atentamente estos términos y condiciones antes de utilizar nuestro Servicio.")]), e._v(" "), n("p", [n("b", [e._v("Interpretación y definiciones")])]), e._v(" "), n("p", [n("b", [e._v("Interpretación")])]), e._v(" "), n("p", [e._v("Las palabras cuya primera letra está en mayúscula tienen el significado definido conforme a las siguientes condiciones. Las siguientes definiciones tendrán el mismo significado, independientemente de si aparecen en singular o en plural.")]), e._v(" "), n("p", [n("b", [e._v("Definiciones")])]), e._v(" "), n("p", [e._v("En el marco de estos Términos y condiciones:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v('"Socio" significa una entidad que controla, es controlada o se encuentra bajo el control común junto con una parte (por "control" se entiende la propiedad del 50 % o más de las acciones, la participación en el capital social u otros valores con derecho a voto para la elección de los directores u otra autoridad de gestión).')])]), e._v(" "), n("li", [n("span", [e._v('"País" hace referencia a: (1) Reino Unido para los ciudadanos de Reino Unido, Alemania, Italia y España, (2) Francia para los ciudadanos de Francia y (3) el Estado de Washington para los ciudadanos de Estados Unidos de América, México, Chile, Colombia, Perú, Argentina, Panamá, Costa Rica, Guatemala, Honduras, Bolivia, Uruguay, Paraguay, El Salvador, República Dominicana y Brasil.')])]), e._v(" "), n("li", [n("span", [e._v('"Empresa" (a la que se puede hacer referencia como "la Empresa", "Nosotros", "Nos" o "Nuestro/a" en este Acuerdo) hace referencia a The Pokémon Company International, Inc., TPCi London, 3rd Floor Building 10, Chiswick Park, 566 Chiswick High Road, Londres, W4 5XS (Reino Unido).')])]), e._v(" "), n("li", [n("span", [e._v('"Dispositivo" significa cualquier dispositivo que pueda acceder al Servicio como, por ejemplo, una computadora, un teléfono móvil o una tableta digital.')])]), e._v(" "), n("li", [n("span", [e._v('"Servicio" hace referencia al Sitio web.')])]), e._v(" "), n("li", [n("span", [e._v('"Términos y condiciones" (o "Términos") significa estos Términos y condiciones, que constituyen el acuerdo íntegro entre Usted y la Empresa respecto al uso del Servicio. Este acuerdo de Términos y condiciones se ha creado con la ayuda del '), n("a", {
                        attrs: {
                            target: "blank",
                            href: "https://www.termsfeed.com/terms-conditions-generator/"
                        }
                    }, [e._v("Generador de términos y condiciones")]), e._v(".")])]), e._v(" "), n("li", [n("span", [e._v('"Servicio de redes sociales de terceros" significa cualquier servicio o contenido (incluidos datos, información, productos y servicios) prestado por un tercero que puede mostrar, incluir o proporcionar el Servicio.')])]), e._v(" "), n("li", [n("span", [e._v('"Sitio web" hace referencia a www.pokemonkidswinterfest.com, accesible desde Pokémon Kids Winter Fest.')])]), e._v(" "), n("li", [n("span", [e._v('"Usted" significa la persona que accede o utiliza el Servicio, o la empresa u otra entidad legal en nombre de la cual dicho individuo accede o utiliza el servicio, según corresponda.')])])]), e._v(" "), n("p", [n("b", [e._v("Derechos de propiedad intelectual")])]), e._v(" "), n("p", [e._v("A menos que se estipule lo contrario, el Sitio es de nuestra propiedad y todo el código fuente, las bases de datos, la funcionalidad, el "), n("i", [e._v("software")]), e._v(', los diseños del sitio web, el audio, el video, el texto, las fotografías y los gráficos del Sitio (colectivamente, el "Contenido"), así como las marcas comerciales, las marcas de servicio y los logotipos que contiene (las "Marcas") son de nuestra propiedad o están bajo nuestro control o bajo nuestra licencia y están protegidos por las leyes de derechos de autor y marcas comerciales y otros derechos de propiedad intelectual, así como por las leyes de competencia desleal de Estados Unidos, las jurisdicciones extranjeras y los convenios internacionales.')]), e._v(" "), n("p", [e._v('El Contenido y las Marcas se proporcionan en el Sitio "TAL CUAL" con fines informativos y únicamente para uso personal. Salvo lo dispuesto expresamente en estos Términos y condiciones, no se podrá copiar, reproducir, agregar, volver a publicar, cargar, publicar, mostrar públicamente, cifrar, traducir, transmitir, distribuir, vender, conceder licencias o explotar de cualquier otro modo ninguna parte del Sitio y ningún Contenido o Marca para un fin comercial sin nuestra autorización expresa previa por escrito.')]), e._v(" "), n("p", [e._v("Siempre y cuando tenga derecho a utilizar el Sitio, se le concede una licencia limitada para acceder y utilizar el Sitio y para descargar o imprimir una copia de cualquier parte del Contenido al que haya accedido adecuadamente únicamente para uso personal y no comercial. Nos reservamos todos los derechos que no se le han concedido expresamente y en lo que respecta al Sitio, el Contenido y las Marcas.")]), e._v(" "), n("p", [n("b", [e._v("Aceptación")])]), e._v(" "), n("p", [e._v("Estos son los Términos y condiciones que rigen el uso de este Servicio y el acuerdo suscrito entre Usted y la Empresa. Estos Términos y condiciones establecen los derechos y obligaciones de todos los usuarios en relación con el uso del Servicio.")]), e._v(" "), n("p", [e._v("Su acceso y uso del Servicio está condicionado a la aceptación y el cumplimiento por su parte de estos Términos y condiciones. Estos Términos y condiciones son aplicables a todos los visitantes, usuarios y otras personas que accedan o utilicen el Servicio.")]), e._v(" "), n("p", [e._v("Al acceder o utilizar el Servicio, acepta quedar vinculado por estos Términos y condiciones. Si no está de acuerdo con alguna parte de estos Términos y condiciones, no podrá acceder al Servicio.")]), e._v(" "), n("p", [e._v("Todos los usuarios menores de edad en la jurisdicción en la que residen (por lo general, menores de 18 años) deben tener el permiso de sus padres o tutores, y estar directamente supervisados por ellos, para utilizar el Sitio. Si es usted menor de edad, su padre o tutor deberá leer y aceptar estos Términos y condiciones para que pueda utilizar el Sitio.")]), e._v(" "), n("p", [e._v("Su acceso y uso del Servicio está condicionado asimismo a la aceptación y el cumplimiento por su parte de la Política de privacidad de la Empresa. Nuestra Política de privacidad describe nuestras políticas y procedimientos en cuanto a la recopilación, el uso y la divulgación de su información personal al utilizar la Aplicación o el Sitio web y le informa sobre sus derechos de privacidad y la forma en que está protegido por la ley. Lea atentamente nuestra"), n("span", [e._v(" Política de privacidad")]), e._v(" y nuestra "), n("span", [e._v("Política de "), n("i", [e._v("cookies")])]), e._v("antes de utilizar nuestro Servicio.")]), e._v(" "), n("p", [n("b", [e._v("Enlaces a otros sitios web")])]), e._v(" "), n("p", [e._v("Nuestro Servicio puede incluir enlaces a sitios web o servicios de terceros que no son propiedad ni están controlados por la Empresa.")]), e._v(" "), n("p", [e._v("La Empresa no tiene control sobre el contenido, las políticas de privacidad o las prácticas de los sitios web o servicios de terceros y no asume ninguna responsabilidad al respecto. Además, Usted reconoce y acepta que la Empresa no será responsable, directa o indirectamente, de ningún daño o pérdida causados o supuestamente causados por o relacionados con el uso o la confianza en cualquiera de dichos contenidos, bienes o servicios disponibles en o a través de cualquiera de dichos sitios web o servicios.")]), e._v(" "), n("p", [e._v("Le recomendamos encarecidamente que lea los términos y condiciones y las políticas de privacidad de cualquier sitio web o servicio de terceros que visite.")]), e._v(" "), n("p", [n("b", [e._v("Rescisión")])]), e._v(" "), n("p", [e._v("Podemos rescindir o suspender su acceso inmediatamente, sin previo aviso o responsabilidad por cualquier razón, incluida, entre otras, el incumplimiento por su parte de estos Términos y condiciones.")]), e._v(" "), n("p", [e._v("Tras la rescisión, su derecho a utilizar el Servicio se extinguirá de inmediato.")]), e._v(" "), n("p", [n("b", [e._v("Limitación de la responsabilidad")])]), e._v(" "), n("p", [e._v("Excepto en lo que respecta a los residentes franceses (como se indica a continuación), sin perjuicio de los daños en los que pueda incurrir, la responsabilidad total de la Empresa y de cualquiera de sus proveedores en virtud de cualquier disposición recogida en estos Términos y su recurso exclusivo para todo lo anterior se limitará a la cantidad que haya pagado realmente a través del servicio o a 100 USD si no ha adquirido nada a través del Servicio.")]), e._v(" "), n("p", [e._v("En la medida en que lo permita la legislación aplicable, la Empresa o sus proveedores no serán responsables en ningún caso de ningún daño especial, fortuito, indirecto o derivado (incluidos, entre otros, daños por pérdida de beneficios, pérdida de datos u otra información, interrupción de la actividad comercial, lesiones personales, pérdida de privacidad derivada o relacionada de algún modo con el uso o la imposibilidad de usar el Servicio, el "), n("i", [e._v("software ")]), e._v("o el "), n("i", [e._v("hardware ")]), e._v("de terceros utilizado con el Servicio o relacionado de otro modo con cualquier disposición incluida en estos Términos), incluso aunque se haya advertido a la Empresa o a cualquier proveedor de la posibilidad de que se produzcan dichos daños e incluso aunque la solución no cumpla su propósito fundamental.")]), e._v(" "), n("p", [e._v("Determinados estados y territorios no permiten la exclusión de garantías implícitas o la limitación de la responsabilidad por daños indirectos o derivados, lo que significa que algunas de las limitaciones anteriores podrían no ser aplicables. En estos estados y territorios, la responsabilidad de cada una de las partes estará limitada en la medida en que lo permita la legislación aplicable."), n("br"), n("br"), e._v("En lo que respecta a los residentes franceses, la Empresa (incluidos sus empleados, agentes y distribuidores) no acepta responsabilidad alguna por (i) daños indirectos, (ii) daños no derivados del incumplimiento por parte de la Empresa de sus obligaciones contractuales o legales o (iii) daños derivados de un evento de fuerza mayor. ")]), e._v(" "), n("p", [n("b", [e._v('Descargo de responsabilidad "TAL CUAL" y "SEGÚN DISPONIBILIDAD"')])]), e._v(" "), n("p", [e._v('El Servicio se le presta "TAL CUAL", "SEGÚN DISPONIBILIDAD" y con todas las fallas y defectos, sin garantía de ningún tipo. En la medida en que lo permita la legislación aplicable, la Empresa, en su nombre o en nombre de sus Socios y licenciadores y proveedores de servicios correspondientes, renuncia de forma expresa a todas las garantías, ya sean expresas, implícitas, estatutarias o de otro tipo, con respecto al Servicio, incluidas todas las garantías implícitas de comerciabilidad, adecuación a un fin particular, titularidad y no infracción, así como las garantías que puedan surgir en el curso de las negociaciones, la ejecución, el uso o la práctica comercial. Sin perjuicio de lo anterior, la Empresa no proporciona ninguna garantía o compromiso, ni ofrece ninguna declaración de ningún tipo, de que el Servicio cumplirá con sus requisitos, conseguirá el resultado deseado, será compatible o funcionará con cualquier otro '), n("i", [e._v("software")]), e._v(", aplicaciones, sistemas o servicios, funcionará sin interrupciones, cumplirá con cualquier estándar de rendimiento o fiabilidad o no presentará errores, así como de que cualquier error o defecto puede corregirse o se corregirá.")]), e._v(" "), n("p", [e._v("Sin perjuicio de lo anterior, ni la Empresa ni ninguno de sus proveedores ofrecen ninguna declaración o garantía de ningún tipo, ya sea expresa o implícita: (i) en cuanto al funcionamiento o la disponibilidad del Servicio, o la información, el contenido y los materiales o productos incluidos en él; (ii) en cuanto a que el Servicio se prestará de forma ininterrumpida o sin errores; (iii) en cuanto a la exactitud, fiabilidad o actualidad de cualquier información o contenido que se facilite a través del Servicio; o (iv) en cuanto a que el Servicio, sus servidores, el contenido o los mensajes de correo electrónico enviados desde o en nombre de la empresa están libres de virus, "), n("i", [e._v("scripts")]), e._v(", troyanos, gusanos, "), n("i", [e._v("malware")]), e._v(", bombas de relojería u otros componentes dañinos.")]), e._v(" "), n("p", [e._v("Algunas jurisdicciones no permiten la exclusión de ciertos tipos de garantías o limitaciones de los derechos estatutarios aplicables de un consumidor, por lo que es posible que algunas o todas las exclusiones y limitaciones mencionadas anteriormente no sean aplicables en su caso. En estos casos, las exclusiones y limitaciones establecidas en este apartado se aplicarán en la medida en que lo permita la legislación aplicable.")]), e._v(" "), n("p", [n("b", [e._v("Legislación aplicable")])]), e._v(" "), n("p", [e._v("Las leyes del País, sin incluir sus normas de conflicto de leyes, regirán estos Términos y el uso que haga del Servicio. El uso que haga de la Aplicación puede estar sujeto también a otras leyes locales, estatales, nacionales o internacionales.")]), e._v(" "), n("p", [n("b", [e._v("Resolución de disputas")])]), e._v(" "), n("p", [e._v("Si tiene algún problema o surge alguna disputa en relación con el Servicio, acepta intentar primero resolver la disputa de manera informal, poniéndose en contacto con la Empresa.")]), e._v(" "), n("p", [n("b", [e._v("Para usuarios de la Unión Europea (UE)")])]), e._v(" "), n("p", [e._v("Si es Usted un consumidor de la Unión Europea, se beneficiará de todas las disposiciones obligatorias de la legislación de su país de residencia.")]), e._v(" "), n("p", [n("b", [e._v("Cumplimiento legal en Estados Unidos")])]), e._v(" "), n("p", [e._v('Usted declara y garantiza que (i) no se encuentra en un país que esté sujeto al embargo del gobierno de Estados Unidos, o que haya sido calificado por el gobierno de Estados Unidos como país "que apoya el terrorismo"; y (ii) no figura en ninguna lista del gobierno de Estados Unidos de partes prohibidas o restringidas.')]), e._v(" "), n("p", [n("b", [e._v("Divisibilidad y renuncia")])]), e._v(" "), n("p", [n("b", [e._v("Divisibilidad")])]), e._v(" "), n("p", [e._v("Si alguna disposición de estos Términos se considera inaplicable o inválida, dicha disposición se modificará e interpretará para cumplir con los objetivos de dicha disposición en la medida en que lo permita la legislación aplicable, mientras que las disposiciones restantes seguirán en pleno vigor y efecto.")]), e._v(" "), n("p", [n("b", [e._v("Renuncia")])]), e._v(" "), n("p", [e._v("Salvo lo dispuesto en el presente documento, el hecho de no ejercer un derecho o exigir el cumplimiento de una obligación en virtud de estos Términos no afectará a la capacidad de una parte para ejercer tal derecho o exigir tal cumplimiento en cualquier momento posterior y la renuncia a un incumplimiento no constituirá una renuncia a cualquier incumplimiento posterior.")]), e._v(" "), n("p", [n("b", [e._v("Interpretación de la traducción")])]), e._v(" "), n("p", [e._v("Estos Términos y condiciones pueden haber sido traducidos si los hemos puesto a su disposición en nuestro Servicio. Excepto en el caso de los residentes de Francia, acepta que en caso de controversia prevalecerá el texto original en inglés.")]), e._v(" "), n("p", [n("b", [e._v("Cambios en los Términos y condiciones")])]), e._v(" "), n("p", [e._v("Nos reservamos el derecho, según nuestro propio criterio, de modificar o sustituir estos Términos en cualquier momento. Si es importante realizar una revisión, haremos todo lo posible para avisar al menos 30 días antes de que entren en vigor los nuevos términos. Determinaremos lo que constituye un cambio importante según nuestro criterio.")]), e._v(" "), n("p", [e._v("Al seguir accediendo o utilizando nuestro Servicio después de que entren en vigor estas revisiones, acepta quedar vinculado por los términos revisados. Si no acepta los nuevos términos, ya sea en parte o en su totalidad, le pedimos que deje de utilizar el sitio web y el Servicio.")]), e._v(" "), n("p", [n("b", [e._v("Contacto")])]), e._v(" "), n("p", [e._v("Si tiene alguna pregunta sobre estos Términos y condiciones, puede ponerse en contacto con nosotros:")]), e._v(" "), n("ul", [n("li", [n("span", [e._v("Por correo electrónico: "), n("a", {
                        attrs: {
                            target: "blank",
                            href: "mailto:support@pokemonkidswinterfest.com"
                        }
                    }, [n("span", [e._v("support@pokemonkidswinterfest.com")])])])])]), e._v(" "), n("p", [n("b", [e._v("Códigos de recompensa")])]), e._v(" "), n("p", [e._v("Los códigos obtenidos se te proporcionan con una licencia limitada, personal, revocable, intransferible y no sublicenciable para usarlos únicamente en el sitio web. No tienes ningún derecho de propiedad, derecho o título en o para el uso de cualquier código. Podemos cancelar tu licencia de uso de un código en cualquier momento y a nuestra entera discreción.")])])
                }], !1, null, null, null).exports,
                W = n(633),
                F = n(111),
                B = n(566),
                V = n(18);

            function $(object, e) {
                var o = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), o.push.apply(o, n)
                }
                return o
            }
            var G = {
                    props: ["content"],
                    components: {
                        CookiesBR: l,
                        CookiesDE: c,
                        CookiesEN: d,
                        CookiesES: m,
                        CookiesFR: v,
                        CookiesIT: h,
                        CookiesLATAM: f,
                        PrivacyBR: z,
                        PrivacyDE: S,
                        PrivacyEN: k,
                        PrivacyES: I,
                        PrivacyFR: A,
                        PrivacyIT: N,
                        PrivacyLATAM: L,
                        TermsBR: P,
                        TermsDE: D,
                        TermsEN: R,
                        TermsES: M,
                        TermsFR: U,
                        TermsIT: x,
                        TermsLATAM: j,
                        Faqs: W.default,
                        Button: F.default,
                        InputText: B.default
                    },
                    data: function() {
                        return {
                            animate: !1,
                            disableSubmit: !0,
                            newNickname: "",
                            originalContent: !1,
                            theContent: !1,
                            showBackBtn: !1
                        }
                    },
                    mounted: function() {
                        var e = this;
                        this.originalContent = this.content, this.theContent = this.content, setTimeout((function() {
                            e.animate = !0
                        }), 50)
                    },
                    computed: function(e) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? $(Object(source), !0).forEach((function(o) {
                                Object(t.a)(e, o, source[o])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : $(Object(source)).forEach((function(o) {
                                Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(source, o))
                            }))
                        }
                        return e
                    }({}, Object(V.b)({
                        lang: "lang"
                    })),
                    methods: {
                        goBack: function() {
                            var e = this;
                            this.animate = !1, setTimeout((function() {
                                e.$emit("close", !0)
                            }), 500)
                        },
                        changeContentType: function(e) {
                            this.theContent = e, this.showBackBtn = !0
                        },
                        backToLast: function() {
                            this.theContent = this.originalContent, this.showBackBtn = !1
                        }
                    }
                },
                K = (n(674), Object(r.a)(G, (function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("div", {
                        staticClass: "legal-article",
                        class: {
                            active: e.animate
                        }
                    }, [n("div", {
                        staticClass: "blue-cover"
                    }), e._v(" "), n("div", {
                        staticClass: "white-block"
                    }, [n("div", {
                        staticClass: "white-block-inner"
                    }, [n("div", {
                        staticClass: "panel",
                        class: {
                            active: e.animate
                        }
                    }, ["terms" == e.theContent ? n("div", {
                        staticClass: "content"
                    }, ["br" == e.lang ? n("TermsBR") : e._e(), e._v(" "), "de" == e.lang ? n("TermsDE") : e._e(), e._v(" "), "en" == e.lang ? n("TermsEN") : e._e(), e._v(" "), "es" == e.lang ? n("TermsES") : e._e(), e._v(" "), "fr" == e.lang ? n("TermsFR") : e._e(), e._v(" "), "it" == e.lang ? n("TermsIT") : e._e(), e._v(" "), "latam" == e.lang ? n("TermsLATAM") : e._e()], 1) : e._e(), e._v(" "), "cookies" == e.theContent ? n("div", {
                        staticClass: "content"
                    }, ["br" == e.lang ? n("CookiesBR") : e._e(), e._v(" "), "de" == e.lang ? n("CookiesDE") : e._e(), e._v(" "), "en" == e.lang ? n("CookiesEN") : e._e(), e._v(" "), "es" == e.lang ? n("CookiesES") : e._e(), e._v(" "), "fr" == e.lang ? n("CookiesFR") : e._e(), e._v(" "), "it" == e.lang ? n("CookiesIT") : e._e(), e._v(" "), "latam" == e.lang ? n("CookiesLATAM") : e._e()], 1) : e._e(), e._v(" "), "privacy" == e.theContent ? n("div", {
                        staticClass: "content",
                        attrs: {
                            id: "privacy"
                        }
                    }, ["br" == e.lang ? n("PrivacyBR") : e._e(), e._v(" "), "de" == e.lang ? n("PrivacyDE") : e._e(), e._v(" "), "en" == e.lang ? n("PrivacyEN") : e._e(), e._v(" "), "es" == e.lang ? n("PrivacyES") : e._e(), e._v(" "), "fr" == e.lang ? n("PrivacyFR") : e._e(), e._v(" "), "it" == e.lang ? n("PrivacyIT") : e._e(), e._v(" "), "latam" == e.lang ? n("PrivacyLATAM") : e._e()], 1) : e._e(), e._v(" "), "faqs" == e.theContent ? n("div", {
                        staticClass: "content",
                        attrs: {
                            id: "faqs"
                        }
                    }, [n("Faqs", {
                        on: {
                            changeContent: e.changeContentType
                        }
                    })], 1) : e._e(), e._v(" "), n("div", {
                        staticClass: "close-button"
                    }, [e.showBackBtn ? n("Button", {
                        staticClass: "back-btn",
                        attrs: {
                            smaller: !0,
                            flexwidth: !0
                        },
                        nativeOn: {
                            click: function(o) {
                                return e.backToLast(o)
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: "/icons/icon-arrow-back.png"
                        }
                    })]) : e._e(), e._v(" "), n("Button", {
                        attrs: {
                            color: "blue",
                            smaller: !0,
                            flexwidth: !0
                        },
                        nativeOn: {
                            click: function(o) {
                                return e.goBack(o)
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: "/icons/icon-close.png"
                        }
                    })])], 1)])])])])
                }), [], !1, null, null, null));
            o.default = K.exports;
            installComponents(K, {
                Faqs: n(633).default,
                Button: n(111).default
            })
        },
        585: function(e, o, n) {
            "use strict";
            n.r(o);
            n(58), n(40), n(37), n(23), n(43);
            var t = n(14),
                r = n(18);

            function l(object, e) {
                var o = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), o.push.apply(o, n)
                }
                return o
            }
            var c = {
                    components: {
                        Button: n(111).default
                    },
                    data: function() {
                        return {
                            animate: !1
                        }
                    },
                    mounted: function() {
                        var e = this;
                        setTimeout((function() {
                            e.animate = !0
                        }), 50)
                    },
                    computed: function(e) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? l(Object(source), !0).forEach((function(o) {
                                Object(t.a)(e, o, source[o])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(o) {
                                Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(source, o))
                            }))
                        }
                        return e
                    }({}, Object(r.b)({
                        lang: "lang"
                    })),
                    methods: {
                        selectLang: function(e) {
                            this.$store.commit("setLang", e);
                            var o = this;
                            this.animate = !1, setTimeout((function() {
                                o.$emit("close", !0)
                            }), 500)
                        }
                    }
                },
                d = (n(677), n(36)),
                component = Object(d.a)(c, (function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("div", {
                        staticClass: "select-lang",
                        class: {
                            active: e.animate
                        }
                    }, [n("div", {
                        staticClass: "blue-cover"
                    }), e._v(" "), n("div", {
                        staticClass: "white-block"
                    }, [n("div", {
                        staticClass: "white-block-inner"
                    }, [n("div", {
                        staticClass: "panel",
                        class: {
                            active: e.animate
                        }
                    }, [n("div", {
                        staticClass: "title"
                    }, [e._v(e._s(e.t("onboarding", "SelectLanguage")))]), e._v(" "), n("div", {
                        staticClass: "button-group"
                    }, [n("Button", {
                        attrs: {
                            flexwidth: !0,
                            selected: "en" == e.lang
                        },
                        nativeOn: {
                            click: function(o) {
                                return e.selectLang("en")
                            }
                        }
                    }, [e._v("\n\t\t\t\t\t\tEnglish\n\t\t\t\t\t")]), e._v(" "), n("Button", {
                        attrs: {
                            flexwidth: !0,
                            selected: "fr" == e.lang
                        },
                        nativeOn: {
                            click: function(o) {
                                return e.selectLang("fr")
                            }
                        }
                    }, [e._v("\n\t\t\t\t\t\tFrançais\n\t\t\t\t\t")]), e._v(" "), n("Button", {
                        attrs: {
                            flexwidth: !0,
                            selected: "de" == e.lang
                        },
                        nativeOn: {
                            click: function(o) {
                                return e.selectLang("de")
                            }
                        }
                    }, [e._v("\n\t\t\t\t\t\tDeutsch\n\t\t\t\t\t")]), e._v(" "), n("Button", {
                        attrs: {
                            flexwidth: !0,
                            selected: "it" == e.lang
                        },
                        nativeOn: {
                            click: function(o) {
                                return e.selectLang("it")
                            }
                        }
                    }, [e._v("\n\t\t\t\t\t\tItaliano\n\t\t\t\t\t")]), e._v(" "), n("Button", {
                        attrs: {
                            flexwidth: !0,
                            selected: "es" == e.lang
                        },
                        nativeOn: {
                            click: function(o) {
                                return e.selectLang("es")
                            }
                        }
                    }, [e._v("\n\t\t\t\t\t\tEspañol\n\t\t\t\t\t")]), e._v(" "), n("Button", {
                        attrs: {
                            flexwidth: !0,
                            selected: "latam" == e.lang
                        },
                        nativeOn: {
                            click: function(o) {
                                return e.selectLang("latam")
                            }
                        }
                    }, [e._v("\n\t\t\t\t\t\tEspañol latino\n\t\t\t\t\t")]), e._v(" "), n("Button", {
                        attrs: {
                            flexwidth: !0,
                            selected: "br" == e.lang
                        },
                        nativeOn: {
                            click: function(o) {
                                return e.selectLang("br")
                            }
                        }
                    }, [e._v("\n\t\t\t\t\t\tPORTUGUÊS (BRASIL) \n\t\t\t\t\t")])], 1)])])])])
                }), [], !1, null, "f51d26a6", null);
            o.default = component.exports;
            installComponents(component, {
                Button: n(111).default
            })
        },
        609: function(e, o, n) {},
        610: function(e, o, n) {
            "use strict";
            var t = n(574);
            n.n(t).a
        },
        611: function(e, o, n) {},
        614: function(e, o, n) {},
        633: function(e, o, n) {
            "use strict";
            n.r(o);
            n(89), n(88), n(87), n(66), n(72), n(73), n(58), n(40), n(37), n(23), n(43), n(132), n(100);
            var t = n(14),
                r = [{
                    title: "PERGUNTAS GERAIS"
                }, {
                    id: 1,
                    question: "Quais dispositivos são compatíveis com o Pokémon Kids: Festival de Inverno?",
                    answer: "O site foi elaborado para ser compatível com a maioria dos dispositivos móveis, tablets e computadores, desde que tais dispositivos possuam um navegador de internet.",
                    answerListTitle: "Requisitos mínimos",
                    answerList: ["Dispositivos Android com o sistema operacional Lollipop (5.0) ou superior", "Apple iPhone 6 com o sistema operacional iOS 11 ou superior", "Google Chrome v52 ou superior", "Mozilla Firefox v52 ou superior", "Microsoft Edge v15 ou superior", "Safari v11.1 ou superior"]
                }, {
                    id: 2,
                    question: "Quando o Pokémon Kids: Festival de Inverno terminará?",
                    answer: "O Pokémon Kids: Festival de Inverno é um evento por tempo limitado que acontecerá de 1.º de dezembro de 2020 a 1.º de janeiro de 2021, às 11h59 GMT. Após o final do evento, você terá uma semana para visualizar as insígnias que ganhou."
                }, {
                    id: 3,
                    question: "Quais idiomas estarão disponíveis?",
                    answerListTitle: "O evento estará disponível nas seguintes línguas.",
                    answerList: ["Inglês", "Alemão", "Francês", "Espanhol", "Italiano", "Espanhol (América Latina)", "Português (Brasil)"]
                }, {
                    id: 4,
                    question: "Por que as insígnias que coletei não estão aparecendo?",
                    answer: 'Pode ser que um problema de cookies esteja prevenindo seu progresso de ser salvo corretamente. Leia nossa [{LINK type="cookies" text="Política de Uso de cookies"}] para saber como atualizar suas configurações de cookies.'
                }, {
                    id: 5,
                    question: "Como serei notificado sobre eventos no jogo?",
                    answer: "Uma lista de eventos e bônus ativos será mostrada cada vez que você visitar o site. Certifique-se de conferir todos os dias para ficar de olho nas novidades!"
                }, {
                    id: 6,
                    question: "Posso trocar meu Pokémon companheiro?",
                    answer: "Sim. Após coletar uma insígnia de Pokémon, você pode selecionar aquele Pokémon como seu companheiro."
                }, {
                    id: 7,
                    question: "O que são Frutas Frambo e o que elas fazem?",
                    answer: "Frutas Frambo são itens que você pode ganhar jogando os jogos do Pokémon Kids: Festival de Inverno. Ao ganhar uma certa quantidade, você receberá uma bolsa de insígnias contendo insígnias de Pokémon para adicionar à sua coleção. Quaisquer Frutas Frambo que você coletar serão adicionadas ao total diário da sua equipe, o que fará com que sua equipe possa progredir nas corridas de equipe. A primeira equipe a cruzar a linha de chegada receberá um prêmio."
                }, {
                    id: 8,
                    question: "Como coleto Frutas Frambo?",
                    answer: "Frutas Frambo podem ser coletadas jogando ou usando a roleta de recompensas diárias. Haverá também eventos especiais que aumentam a quantidade de Frutas Frambo que você pode ganhar de uma vez, então não perca estas oportunidades."
                }, {
                    id: 9,
                    question: "O que são insígnias de Pokémon?",
                    answer: "Insígnias de Pokémon são recompensas que os jogadores podem ganhar durante o evento. Seu objetivo é coletar todas as insígnias de Pokémon enquanto o evento estiver ativo. Será que você conseguirá completar sua coleção?"
                }, {
                    id: 10,
                    question: "Como eu coleto insígnias?",
                    answer: "Insígnias aparecem em bolsas de insígnias, que são concedidas quando você joga um jogo e ganha a quantidade necessária de Frutas Frambo. A raridade da bolsa de insígnias que você recebe dependerá do número de Frutas Frambo coletadas. Bolsas de insígnias também podem ser adquiridas através dos seguintes métodos:",
                    answerList: ["Atingindo recordes nas corridas de equipe", "Usando a roleta de recompensas diárias", "Coletando recompensas diárias especiais", "Usando códigos de resgate únicos "]
                }, {
                    id: 11,
                    question: "Quantas insígnias estão incluídas em cada bolsa de insígnias?",
                    answer: "Há quatro tipos de bolsas de insígnias disponíveis para serem coletadas. Confira abaixo o conteúdo de cada uma delas:",
                    answerList: ["Bolsa comum: 2 insígnia de Pokémon", "Bolsa rara: 4 insígnias de Pokémon", "Bolsa épica: 5 insígnias de Pokémon", "Bolsa lendária: 5 insígnias de Pokémon e 1 insígnia de Pokémon Lendário"]
                }, {
                    id: 12,
                    question: "Como coleto insígnias de Pokémon Lendário?",
                    answer: "Insígnias de Pokémon Lendário são o tipo mais raro e só podem ser encontradas em bolsas lendárias. Você pode ganhar bolsas lendárias através dos seguintes métodos:",
                    answerList: ["Vencendo as corridas de equipe", "Usando a roleta de recompensas diárias", "Coletando recompensas diárias especiais", "Usando códigos de resgate únicos"]
                }, {
                    id: 13,
                    question: "Como coleto insígnias de Pokémon Mítico?",
                    answer: "Insígnias de Pokémon Mítico são insígnias especiais concedidas por completar a missão mítica diária. Confira a missão de hoje para saber o que você precisa fazer!"
                }, {
                    id: 14,
                    question: "Posso mudar minha equipe?",
                    answer: "Não. Para fazer com que as corridas de equipe sejam balanceadas e justas para todos os jogadores, não é permitido mudar sua equipe."
                }, {
                    id: 15,
                    question: "Posso mudar meu apelido?",
                    answer: "Sim. Para fazer isto, vá para a Área do Treinador. Você deve se certificar de que seu novo apelido não está em uso para completar a mudança"
                }, {
                    id: 16,
                    question: "O que é a roleta de recompensas diárias?",
                    answer: "A roleta de recompensas diárias é uma funcionalidade especial que lhe dá a oportunidade de ganhar prêmios empolgantes uma vez por dia e também uma ajuda no seu progresso no evento. Se você girar a roleta de recompensas diárias todos os dias por sete dias consecutivos, você receberá um prêmio adicional!"
                }, {
                    id: 17,
                    question: "Como jogar?",
                    answer: "Para jogar, confira a lista de jogos e selecione aquele que deseja jogar. Em seguida, siga as instruções do jogo selecionado."
                }, {
                    title: "PERGUNTAS TÉCNICAS"
                }, {
                    id: 18,
                    question: "Os jogos não estão funcionando. Por quê?",
                    answer: "O site do evento utiliza as tecnologias mais recentes de HTML. Se você está tendo problemas, certifique-se de que seu navegador está atualizado para a versão mais recente. Se você está jogando em um dispositivo móvel ou tablet, certifique-se também de que seu sistema operacional está atualizado para a versão mais recente."
                }, {
                    id: 19,
                    question: "Por que meu progresso no jogo não está sendo salvo?",
                    answer: 'Um problema de cookies pode estar prevenindo seu progresso de ser salvo corretamente. Leia nossa [{LINK type="cookies" text="Política de Uso de cookies"}] para mais informações sobre como atualizar suas configurações de cookies.'
                }, {
                    id: 20,
                    question: "Informações sobre meu filho(a) serão coletadas?",
                    answer: 'Não. Os únicos dados salvos nos nossos servidores são aqueles necessários para monitorar o progresso no jogo. Leia nossa [{LINK type="privacy" text="Política de Privacidade"}] para mais detalhes.'
                }, {
                    id: 21,
                    question: "Dados que podem ser compartilhados com anunciantes serão coletados?",
                    answer: 'Não. Quaisquer dados coletados serão utilizados unicamente para o andamento do evento. Leia nossa [{LINK type="privacy" text="Política de Privacidade"}] para mais detalhes.'
                }, {
                    id: 22,
                    question: "Eu preciso entrar na minha conta para jogar?",
                    answer: "Os jogadores precisam criar um Treinador para jogar. Assim que tiverem feito isso, não precisarão entrar em suas contas."
                }, {
                    id: 23,
                    question: "Parece que perdi meu progresso no jogo. É possível recuperá-lo?",
                    answer: "Como o site salva os dados de maneira local no seu dispositivo, infelizmente não podemos recuperar seu progresso caso ele seja deletado."
                }, {
                    id: 24,
                    question: "Eu vi um código exclusivo, como faço para usá-lo e resgatar minha recompensa?",
                    answer: 'Se você descobriu um de nossos códigos de resgate exclusivos, basta clicar no botão que diz "Código de Resgate" no menu principal. Em seguida, você verá um campo de texto em que poderá inserir seu código. Caso você digite um código válido, ganhará uma bela recompensa. Os códigos podem ser usados apenas uma vez por treinador.'
                }, {
                    title: "AINDA PRECISA DE AJUDA?"
                }, {
                    id: 25,
                    question: "Se eu tiver algum problema, como posso entrar em contato com o portal de atendimento ao consumidor?",
                    answer: 'Se você estiver tendo problemas, envie um e-mail para <a href="mailto:support@pokemonkidswinterfest.com"><span>support@pokemonkidswinterfest.com</span></a>.<br /><br />[{LINK type="privacy" text="Política de Privacidade"}]<br/>[{LINK type="cookies" text="Política de Uso de cookies"}]<br/>[{LINK type="terms" text="Termos de Uso"}]<br/><br />©2020 Pokémon. ©1995–2020 Nintendo/Creatures Inc./GAME FREAK inc. Pokémon e nomes dos personagens são marcas da Nintendo.<br/>'
                }],
                l = [{
                    title: "ALLGEMEINE FRAGEN"
                }, {
                    id: 1,
                    question: "Welche Geräte werden vom Pokémon Kids: Winterfest unterstützt?",
                    answer: "Die Website läuft auf den meisten Mobilgeräten, Tablets und Computern, insofern diese über einen Webbrowser verfügen.",
                    answerListTitle: "Mindestanforderungen:",
                    answerList: ["Android-Gerät mit Lollipop (5.0) oder höher", "Apple iPhone 6 mit iOS 11 oder höher", "Google Chrome v52 oder höher", "Mozilla Firefox v52 oder höher", "Microsoft Edge v15 oder höher", "Safari v11.1 oder höher"]
                }, {
                    id: 2,
                    question: "Wann endet das Pokémon Kids: Winterfest?",
                    answer: "Das Pokémon Kids: Winterfest ist eine zeitlich festgelegte Veranstaltung, die vom 1. Dezember 2020 bis zum 2. Januar 2021 um 00:59 Uhr (MEZ) stattfindet. Nach Ende der Veranstaltung hast du eine Woche lang Zeit, um dir die Abzeichen anzusehen, die du erhalten hast."
                }, {
                    id: 3,
                    question: "Welche Sprachen werden unterstützt?",
                    answerListTitle: "Die Veranstaltung unterstützt die folgenden Sprachen:",
                    answerList: ["Englisch", "Deutsch", "Französisch", "Spanisch", "Italienisch", "Lateinamerikanisches Spanisch", "Brasilianisches Portugiesisch"]
                }, {
                    id: 4,
                    question: "Warum werden die Abzeichen, die ich gesammelt habe, nicht angezeigt?",
                    answer: 'Eventuell verhindern Probleme mit Cookies, dass dein Spielfortschritt ordnungsgemäß gespeichert wird. Bitte lies dir unsere [{LINK type="cookies" text="Cookie-Richtlinie"}] durch, um zu erfahren, wie du deine Cookie-Einstellungen änderst.'
                }, {
                    id: 5,
                    question: "Wie werde ich über Events im Spiel benachrichtigt?",
                    answer: "Eine Liste aktiver Events und Boni wird jedes Mal angezeigt, wenn du die Website besuchst. Schau am besten jeden Tag vorbei, um zu sehen, was es Neues gibt!"
                }, {
                    id: 6,
                    question: "Kann ich mein Begleiter-Pokémon wechseln?",
                    answer: "Ja. Nachdem du das Abzeichen eines Pokémon erhalten hast, kannst du dieses Pokémon als deinen Begleiter festlegen."
                }, {
                    id: 7,
                    question: "Was sind Himmihbeeren und wozu dienen sie?",
                    answer: "Himmihbeeren sind Items, die du in den Spielen des Pokémon Kids: Winterfests erhältst. Sobald du eine bestimmte Anzahl gesammelt hast, erhältst du ein Abzeichen-Säckchen, in dem sich Pokémon-Abzeichen befinden, die deiner Sammlung hinzugefügt werden. Alle gesammelten Himmihbeeren werden darüber hinaus dem täglichen Gesamtergebnis deines Teams angerechnet, was dein Team in den Teamrennen voranbringt. Das erste Team, das die Ziellinie überquert, gewinnt einen Preis."
                }, {
                    id: 8,
                    question: "Wie sammle ich Himmihbeeren?",
                    answer: "Himmihbeeren können entweder in Spielen oder durch das Rad für tägliche Belohnungen gesammelt werden. Gelegentlich gibt es besondere Events, welche die Anzahl an Himmihbeeren erhöhen, die du auf einmal erhalten kannst. Also halte immer Ausschau danach!"
                }, {
                    id: 9,
                    question: "Was sind Pokémon-Abzeichen?",
                    answer: "Pokémon-Abzeichen sind Belohnungen, die Spieler im Laufe des Fests erhalten können. Dein Ziel ist es, alle Pokémon-Abzeichen zu sammeln, solange die Veranstaltung läuft. Schaffst du es, deine Sammlung zu vervollständigen?"
                }, {
                    id: 10,
                    question: "Wie sammle ich Abzeichen?",
                    answer: "Abzeichen erscheinen in den Abzeichen-Säckchen, die du erhältst, wenn du beim Spielen die notwendige Anzahl an Himmihbeeren sammelst. Die Seltenheit des Abzeichen-Säckchens, das du erhältst, hängt von der Anzahl der gesammelten Himmihbeeren ab. Abzeichen-Säckchen können zudem wie folgt erhalten werden:",
                    answerList: ["Erreiche Meilensteine in den Teamrennen", "Drehe das Rad für tägliche Belohnungen", "Sammle besondere tägliche Belohnungen", "Löse einmalige Codes ein"]
                }, {
                    id: 11,
                    question: "Wie viele Abzeichen befinden sich in jedem Abzeichen-Säckchen?",
                    answer: "Es gibt vier Arten von Abzeichen-Säckchen, die du erhalten kannst. Ihre Inhalte lauten wie folgt:",
                    answerList: ["Gewöhnliches Säckchen: Zwei Pokémon-Abzeichen", "Seltenes Säckchen: Vier Pokémon-Abzeichen", "Episches Säckchen: Fünf Pokémon-Abzeichen", "Legendäres Säckchen: Fünf Pokémon-Abzeichen und ein Abzeichen eines Legendären Pokémon"]
                }, {
                    id: 12,
                    question: "Wie sammle ich die Abzeichen Legendärer Pokémon?",
                    answer: "Bei den Abzeichen Legendärer Pokémon handelt es sich um die seltensten Abzeichen. Sie können sich nur in Legendären Säckchen befinden. Du kannst Legendäre Säckchen wie folgt erhalten:",
                    answerList: ["Gewinne die Teamrennen", "Drehe das Rad für tägliche Belohnungen", "Sammle besondere tägliche Belohnungen", "Löse einmalige Codes ein"]
                }, {
                    id: 13,
                    question: "Wie sammle ich die Abzeichen Mysteriöser Pokémon?",
                    answer: "Die Abzeichen Mysteriöser Pokémon sind besondere Abzeichen, die du erhältst, wenn du die tägliche Mysteriöse Mission abschließt. Schau dir die heutige Mission an, um zu erfahren, was du dafür tun musst!"
                }, {
                    id: 14,
                    question: "Kann ich mein Team wechseln?",
                    answer: "Nein. Um zu gewährleisten, dass die Teamrennen ausgeglichen und fair für alle Spieler sind, kannst du dein Team nicht wechseln."
                }, {
                    id: 15,
                    question: "Kann ich meinen Spitznamen ändern?",
                    answer: "Ja. Rufe hierzu einfach die Trainer-Zone auf. Um die Änderung erfolgreich durchzuführen, musst du sicherstellen, dass dein neuer Spitzname noch nicht vergeben ist."
                }, {
                    id: 16,
                    question: "Was ist das Rad für tägliche Belohnungen?",
                    answer: "Mit dem Rad für tägliche Belohnungen kannst du ein Mal pro Tag aufregende Preise gewinnen, die dir beim Voranschreiten während des Fests helfen können. Wenn du das Rad für tägliche Belohnungen sieben Tage lang in Folge benutzt, bekommst du einen zusätzlichen Preis."
                }, {
                    id: 17,
                    question: "Wie werden die Spiele gespielt?",
                    answer: "Um ein Spiel zu spielen, rufe einfach das Spielmenü auf und wähle das gewünschte Spiel aus. Folge anschließend der Anleitung für das ausgewählte Spiel."
                }, {
                    title: "TECHNISCHE FRAGEN"
                }, {
                    id: 18,
                    question: "Die Spiele funktionieren nicht. Wieso?",
                    answer: "Die Website dieser Veranstaltung nutzt die neuesten HTML-Technologien. Sollten Probleme auftreten, stelle bitte sicher, dass dein Browser auf die neueste Version aktualisiert wurde. Wenn du auf einem Mobilgerät oder Tablet spielst, stelle bitte zudem sicher, dass dein Betriebssystem der neuesten Version entspricht."
                }, {
                    id: 19,
                    question: "Warum wird mein Spielfortschritt nicht gespeichert?",
                    answer: 'Eventuell verhindern Probleme mit Cookies, dass dein Spielfortschritt ordnungsgemäß gespeichert wird. Bitte lies dir unsere [{LINK type="cookies" text="Cookie-Richtlinie"}] durch, um zu erfahren, wie du deine Cookie-Einstellungen änderst.'
                }, {
                    id: 20,
                    question: "Werden Informationen über mein Kind gesammelt?",
                    answer: 'Nein. Es werden nur die Daten auf unseren Servern gespeichert, die notwendig sind, um den Spielfortschritt zu verfolgen. Mehr Informationen dazu gibt es in unserer [{LINK type="privacy" text="Datenschutzrichtlinie"}].'
                }, {
                    id: 21,
                    question: "Werden Daten gesammelt, die mit Werbetreibenden geteilt werden?",
                    answer: 'Nein. Alle gesammelten Daten werden nur zum Zwecke der Veranstaltung verwendet. Mehr Informationen dazu gibt es in unserer [{LINK type="privacy" text="Datenschutzrichtlinie"}].'
                }, {
                    id: 22,
                    question: "Muss ich mich zum Spielen einloggen?",
                    answer: "Spieler müssen einen Trainer erstellen, um spielen zu können. Sobald sie dies gemacht haben, müssen sie sich nicht einloggen."
                }, {
                    id: 23,
                    question: "Ich scheine meinen Spielfortschritt verloren zu haben. Kann ich ihn wiederherstellen?",
                    answer: "Da die Website Daten lokal auf deinem Gerät speichert, können wir deinen Spielfortschritt leider nicht wiederherstellen, wenn er gelöscht wurde."
                }, {
                    id: 24,
                    question: "Ich habe einen exklusiven Code gesehen. Wie kann ich meine Items einlösen?",
                    answer: "Wenn Du einen unserer exklusiven Promo-Codes entdeckt hast, dann klick einfach auf den „Code einlösen“ Button im Hauptmenü. Es erscheint ein Textfeld, in dem Du Deinen Code eingeben kannst. Wenn Du einen gültigen Code eingibst, erhältst Du die dazugehörigen Items. Jeder Code kann nur einmal pro Trainer eingelöst werden."
                }, {
                    title: "WEITERE UNTERSTÜTZUNG"
                }, {
                    id: 25,
                    question: "Wie kann ich den Kundenservice erreichen, wenn ich ein Problem habe?",
                    answer: 'Wenn Probleme auftreten, kannst du eine E-Mail an <a href="mailto:support@pokemonkidswinterfest.com"><span>support@pokemonkidswinterfest.com</span></a> schicken. Wir werden unser Bestes geben, zeitnah zu antworten.<br /><br />[{LINK type="privacy" text="Datenschutzrichtlinie"}]<br/>[{LINK type="cookies" text="Cookie-Richtlinie"}]<br/>[{LINK type="terms" text="Nutzungsbedingungen"}]<br/><br />©2020 Pokémon. ©1995–2020 Nintendo / Creatures Inc. / GAME FREAK inc. Pokémon and Pokémon character names are trademarks of Nintendo.<br/>'
                }],
                c = [{
                    title: "GENERAL QUESTIONS"
                }, {
                    id: 1,
                    question: "What devices does Pok&eacute;mon Kids: Winter Fest support?",
                    answer: "The website has been designed to run on most mobile devices, tablets, and computers, so long as they have a web browser.",
                    answerListTitle: "Minimum Requirements",
                    answerList: ["Android device running Lollipop (5.0) or above", "Apple iPhone 6 running iOS 11 or above", "Google Chrome v52 or above", "Mozilla Firefox v52 or above", "Microsoft Edge v15 or above", "Safari v11.1 or above"]
                }, {
                    id: 2,
                    question: "When will Pok&eacute;mon Kids: Winter Fest end?",
                    answer: "Pok&eacute;mon Kids: Winter Fest is a timed event that will run from 1 December 2020 until 1<span><sup>st</sup></span> January 2021 at 11:59 p.m. GMT. Once the event has concluded, you will have one week to view the badges you have earned."
                }, {
                    id: 3,
                    question: "What languages are supported?",
                    answerListTitle: "The event supports the following languages.",
                    answerList: ["English", "German", "French", "Spanish", "Italian", "Latin American Spanish", "Brazilian Portuguese"]
                }, {
                    id: 4,
                    question: "Why are the badges I have collected not being displayed?",
                    answer: 'A cookie issue may be preventing your progress from being properly saved. Please read our [{LINK type="cookies" text="Cookies Policy"}] to find out how to update your cookie settings.'
                }, {
                    id: 5,
                    question: "How will I be notified of in-game events?",
                    answer: "A list of active events and benefits will be displayed each time you visit the website. Make sure to check back each day to see what&rsquo;s new!"
                }, {
                    id: 6,
                    question: "Can I change my companion Pok&eacute;mon?",
                    answer: "Yes. After you collect a Pok&eacute;mon badge, you can then select that Pok&eacute;mon as your companion."
                }, {
                    id: 7,
                    question: "What are Razz Berries, and what do they do?",
                    answer: "Razz Berries are items you earn by playing the games included in Pok&eacute;mon Kids: Winter Fest. Once you earn a certain amount, you will be awarded with a badge pouch containing Pok&eacute;mon badges to add to your collection. Any Razz Berries you collect will also be added to your team&rsquo;s daily total, which will progress your team in the team races. The first team to cross the finish line will be awarded with a prize."
                }, {
                    id: 8,
                    question: "How do I collect Razz Berries?",
                    answer: "Razz Berries can be collected by either playing games or using the daily rewards wheel. There will occasionally be special events that increase the amount of Razz Berries you can earn at once, so keep an eye out."
                }, {
                    id: 9,
                    question: "What are Pok&eacute;mon badges?",
                    answer: "Pok&eacute;mon badges are rewards that players can get throughout the event. Your aim is to collect all the Pok&eacute;mon badges while the event is active. Can you complete your collection?"
                }, {
                    id: 10,
                    question: "How do I collect badges?",
                    answer: "Badges appear in the badge pouches that are awarded when you play a game and earn the necessary amount of Razz Berries. The rarity of the badge pouch you receive is based on the number of Razz Berries you collect. Badge pouches can also be earned via the following methods.",
                    answerList: ["Reaching milestones in the team races", "Using the daily rewards wheel", "Collecting special daily rewards", "Entering unique redemption codes"]
                }, {
                    id: 11,
                    question: "How many badges are included in each badge pouch?",
                    answer: "There are four types of badge pouches available to collect. Their contents are as follows.",
                    answerList: ["Common Pouch: Two Pok&eacute;mon badge", "Rare Pouch: Four Pok&eacute;mon badges", "Epic Pouch: Five Pok&eacute;mon badges", "Legendary Pouch: Five Pok&eacute;mon badges and one Legendary Pok&eacute;mon badge"]
                }, {
                    id: 12,
                    question: "How do I collect Legendary Pok&eacute;mon badges?",
                    answer: "Legendary Pok&eacute;mon badges are the rarest type of badges and can only be found in Legendary Pouches. You can earn Legendary Pouches via the following methods.",
                    answerList: ["Winning the team races", "Using the daily rewards wheel", "Collecting special daily rewards", "Entering unique redemption codes"]
                }, {
                    id: 13,
                    question: "How do I collect Mythical Pok&eacute;mon badges?",
                    answer: "Mythical Pok&eacute;mon badges are special badges that are awarded for completing the daily Mythical mission. Check out today's mission to see what you need to do!"
                }, {
                    id: 14,
                    question: "Can I change my team?",
                    answer: "No. To keep the team races evenly balanced and fair for all players, you are not able to swap teams."
                }, {
                    id: 15,
                    question: "Can I change my nickname?",
                    answer: "Yes. To do so, simply navigate to the Trainer Zone. You will need to ensure your new nickname is unique to successfully complete the change."
                }, {
                    id: 16,
                    question: "What is the daily rewards wheel?",
                    answer: "The daily rewards wheel is a special feature that allows you to win some exciting prizes once per day to help you progress in the event. If you use the daily rewards wheel each day for seven consecutive days, you will be awarded with an extra prize."
                }, {
                    id: 17,
                    question: "How do I play the games?",
                    answer: "To play a game, simply visit the list of games and select the game you wish to play. From there, please follow the instructions for the game you selected."
                }, {
                    title: "TECHNICAL QUESTIONS"
                }, {
                    id: 18,
                    question: "The games do not work. Why?",
                    answer: "The event website uses the latest HTML technologies. If you are experiencing problems, please make sure your browser has been updated to the latest version. If you are playing on a mobile or tablet device, please also make sure your OS has been updated to the latest version."
                }, {
                    id: 19,
                    question: "Why is my game progress not being saved?",
                    answer: 'A cookie issue may be preventing your progress from being properly saved. Please read our [{LINK type="cookies" text="Cookie Policy"}] to find out how to update your cookie settings.'
                }, {
                    id: 20,
                    question: "Do you collect information about my child?",
                    answer: 'No. The only data saved to our servers is that which is necessary to track in-game progress. Please read our [{LINK type="privacy" text="Privacy Policy"}] for full details.'
                }, {
                    id: 21,
                    question: "Do you collect data that is shared with advertisers?",
                    answer: 'No. Any data collected will be used solely for the purpose of running the event. Please read our [{LINK type="privacy" text="Privacy Policy"}] for full details.'
                }, {
                    id: 22,
                    question: "Do I need to log in to play?",
                    answer: "Players are required to create a Trainer in order to play. Once they do so, they will not need to log in."
                }, {
                    id: 23,
                    question: "I seem to have lost my game progress. Can I get it back?",
                    answer: "Because the website saves data locally to your device, we are unfortunately unable to restore it in the event of its deletion."
                }, {
                    id: 24,
                    question: "I have seen an exclusive code, how do I use it to claim my reward?",
                    answer: 'If you have discovered one of our exclusive redeem codes then simply click on the button that says "Redeem Code" on the main menu. You will then be shown a text field where you can enter your code. If you enter a valid code you will be awarded with the relevant reward. Codes can only be used once per trainer.'
                }, {
                    title: "FURTHER SUPPORT"
                }, {
                    id: 25,
                    question: "If I have a problem, how can I contact support?",
                    answer: 'If you are experiencing issues, please feel free to email <a href="mailto:support@pokemonkidswinterfest.com"><span>support@pokemonkidswinterfest.com</span></a>, and we will do our best to get back to you. <br /> <br />[{LINK type="privacy" text="Privacy Policy"}]<br/>[{LINK type="cookies" text="Cookie Policy"}]<br/>[{LINK type="terms" text="Terms of Use"}]<br/><br />©2020 Pokémon. ©1995–2020 Nintendo / Creatures Inc. / GAME FREAK inc. Pokémon and Pokémon character names are trademarks of Nintendo.<br/>'
                }],
                d = [{
                    title: "Preguntas Generales"
                }, {
                    id: 1,
                    question: "¿En qué dispositivos puedo utilizar Pokémon Kids: Festival Invernal?",
                    answer: "La página ha sido diseñada para que funcione en la mayoría de los dispositivos móviles, tabletas y ordenadores que cuenten con un navegador.",
                    answerListTitle: "Requisitos mínimos:",
                    answerList: ["Dispositivos Android con Lollipop (5.0) o posterior", "iPhone 6 de Apple con iOS 11 o posterior", "Google Chrome v52 o posterior", "Mozilla Firefox v52 o posterior", "Microsoft Edge v15 o posterior", "Safari v11.1 o posterior"]
                }, {
                    id: 2,
                    question: "¿Hasta cuándo estará disponible Pokémon Kids: Festival Invernal?",
                    answer: "Pokémon Kids: Festival Invernal es un evento de duración limitada que tendrá lugar del 1 de diciembre de 2020 al 1 de enero de 2021 a las 23:59 (UTC). Las insignias que hayas conseguido se podrán ver hasta pasada una semana tras finalizar el evento."
                }, {
                    id: 3,
                    question: "¿En qué idiomas está disponible?",
                    answerListTitle: "El evento está disponible en los siguientes idiomas:",
                    answerList: ["Inglés", "Alemán", "Francés", "Español (España)", "Italiano", "Español (Latinoamérica)", "Portugués (Brasil)"]
                }, {
                    id: 4,
                    question: "¿Por qué no puedo ver las insignias que he conseguido?",
                    answer: 'Puede que haya un problema con las cookies que impide que tu progreso se guarde correctamente. Vuelve a leer la [{LINK type="cookies" text="Política de cookies"}] para averiguar cómo modificar los ajustes.'
                }, {
                    id: 5,
                    question: "¿Cómo voy a recibir las notificaciones sobre los eventos del juego?",
                    answer: "Cada vez que visites la página, podrás ver una lista con los eventos disponibles en ese momento y las recompensas. ¡Vuelve cada día para enterarte de todas las novedades!"
                }, {
                    id: 6,
                    question: "¿Puedo cambiar mi compañero Pokémon?",
                    answer: "Sí. Cuando consigas una insignia, podrás elegir al Pokémon que aparece en ella como compañero."
                }, {
                    id: 7,
                    question: "¿Qué son las Bayas Frambu y para qué sirven?",
                    answer: "Las Bayas Frambu son objetos que puedes ganar en los juegos de Pokémon Kids: Festival Invernal. Cuando acumules cierta cantidad, conseguirás una bolsa con insignias que se añadirán a tu colección. Además, las bayas que reúnas se añadirán al contador diario de tu equipo para que progrese en la carrera de equipos. El primer equipo que consiga cruzar la meta conseguirá un premio."
                }, {
                    id: 8,
                    question: "¿Cómo puedo conseguir Bayas Frambu?",
                    answer: "Puedes conseguir Bayas Frambu en los juegos o en la ruleta de premios diarios. Mantente al día, porque, de vez en cuando, habrá eventos especiales durante los que aumentará el número de bayas que puedes ganar."
                }, {
                    id: 9,
                    question: "¿Qué son las insignias Pokémon?",
                    answer: "Las insignias Pokémon son las recompensas que reciben los jugadores mientras dure el evento. El objetivo es conseguir todas las insignias mientras el evento está activo. ¿Serás capaz de completar tu colección?"
                }, {
                    id: 10,
                    question: "¿Cómo consigo las insignias?",
                    answer: "Las insignias se pueden encontrar en las bolsas que recibirás cuando juegues a uno de los juegos y consigas las suficientes Bayas Frambu. La bolsa de insignias que recibas será más o menos especial dependiendo del número de Bayas Frambu que consigas. Hay otras formas de obtener bolsas de insignias:",
                    answerList: ["Al cumplir objetivos de la carrera de equipos", "Con la ruleta de premios diarios", "Con las recompensas diarias", "Con códigos exclusivos"]
                }, {
                    id: 11,
                    question: "¿Cuántas insignias hay en cada bolsa de insignias?",
                    answer: "Este es el contenido de cada tipo de bolsa:",
                    answerList: ["Bolsa Normal: dos insignia Pokémon", "Bolsa Especial: cuatro insignias Pokémon", "Bolsa Épica: cinco insignias Pokémon", "Bolsa Legendaria: cinco insignias y una insignia Pokémon legendario"]
                }, {
                    id: 12,
                    question: "¿Cómo puedo conseguir insignias Pokémon legendario?",
                    answer: "Las insignias Pokémon legendario son las más exclusivas y solo se pueden conseguir en las Bolsas Legendarias, que se pueden obtener de las siguientes maneras:",
                    answerList: ["Al ganar la carrera de equipos", "Con la ruleta de premios diarios", "Con las recompensas diarias", "Con códigos exclusivos"]
                }, {
                    id: 13,
                    question: "¿Cómo puedo conseguir las insignias Pokémon singular?",
                    answer: "Las insignias Pokémon singular son insignias muy especiales que se pueden conseguir al superar misiones singulares. ¡Comprueba qué misiones hay disponibles hoy para saber lo que tienes que hacer!"
                }, {
                    id: 14,
                    question: "¿Puedo cambiarme de equipo?",
                    answer: "No. Para que las carreras de equipos estén equilibradas y sean justas para todos los jugadores, no estará permitido cambiar de equipo."
                }, {
                    id: 15,
                    question: "¿Puedo cambiar mi nombre de usuario?",
                    answer: "Sí. Para hacerlo, simplemente tienes que ir al Área de Entrenadores. Tendrás que asegurarte de que el nuevo nombre no está repetido para poder realizar el cambio."
                }, {
                    id: 16,
                    question: "¿En qué consiste la ruleta de premios diarios?",
                    answer: "La ruleta de premios diarios es una función con la que podrás conseguir premios estupendos una vez al día que te ayudarán a progresar en el juego. Si la usas siete días seguidos, ganarás un premio adicional."
                }, {
                    id: 17,
                    question: "¿Cómo funcionan los juegos?",
                    answer: "Para comenzar un juego basta con visitar el menú con los juegos, seleccionar el que quieras y seguir las instrucciones."
                }, {
                    title: "Preguntas de soporte técnico"
                }, {
                    id: 18,
                    question: "Los juegos no funcionan. ¿Qué ocurre?",
                    answer: "La página del evento utiliza la última tecnología HTML. Si tienes problemas, asegúrate en primer lugar de que estás utilizando la versión más actualizada de tu navegador. Si estás jugando en un dispositivo móvil o una tableta, asegúrate de que estás utilizando la versión más actualizada de tu sistema operativo."
                }, {
                    id: 19,
                    question: "¿Por qué no se guarda mi progreso en el juego?",
                    answer: 'Puede que haya un problema con las cookies que impide que tu progreso se guarde correctamente. Vuelve a leer la [{LINK type="cookies" text="Política de cookies"}] para averiguar cómo modificar los ajustes.'
                }, {
                    id: 20,
                    question: "¿Recopiláis datos de mi hijo?",
                    answer: 'No. Los únicos datos que se guardan en nuestros servidores son los datos necesarios para guardar el progreso del juego. Puedes encontrar toda la información en nuestro [{LINK type="privacy" text="Aviso de privacidad"}].'
                }, {
                    id: 21,
                    question: "¿Recopiláis datos para compartirlos con anunciantes?",
                    answer: 'No. Los datos que se guardan se utilizarán únicamente para fines relacionados con este evento. Puedes encontrar toda la información en nuestro [{LINK type="privacy" text="Aviso de privacidad"}].'
                }, {
                    id: 22,
                    question: "¿Necesito iniciar sesión para jugar?",
                    answer: "Los jugadores tendrán que crear un perfil de Entrenador o Entrenadora para jugar. Una vez que lo hayan hecho, no necesitarán iniciar sesión."
                }, {
                    id: 23,
                    question: "Parece que he perdido mi progreso del juego. ¿Puedo recuperarlo?",
                    answer: "Lamentablemente, como la página guarda los datos de forma local en tu dispositivo, resulta imposible recuperar los datos que se hayan perdido."
                }, {
                    id: 24,
                    question: "He visto un código exclusivo, ¿cómo lo uso para solicitar mi recompensa?",
                    answer: "Si has descubierto uno de nuestros códigos exclusivos, simplemente pulsa el botón «Canjear» en el menú principal. A continuación aparecerá un campo de texto donde podrás introducir tu código. Si introduces un código válido serás premiado con la recompensa correspondiente. Los códigos solo puede usarse una vez por entrenador."
                }, {
                    title: "Ayuda avanzada"
                }, {
                    id: 25,
                    question: "¿Cómo puedo contactar con el servicio de atención al cliente si tengo algún problema?",
                    answer: 'Si estás teniendo problemas, escríbenos a <a href="mailto:support@pokemonkidswinterfest.com"><span>support@pokemonkidswinterfest.com</span></a> e intentaremos responderte cuanto antes.<br /><br />[{LINK type="privacy" text="Aviso de privacidad"}]<br/>[{LINK type="cookies" text="Política de cookies"}]<br/>[{LINK type="terms" text="Condiciones de uso"}]<br/><br />©2020 Pokémon. ©1995–2020 Nintendo / Creatures Inc. / GAME FREAK inc. Pokémon and Pokémon character names are trademarks of Nintendo.<br/>'
                }],
                m = [{
                    title: "QUESTIONS GÉNÉRALES"
                }, {
                    id: 1,
                    question: "Avec quels appareils l'évènement « Pokémon Kids : Festival hivernal » est-il compatible ?",
                    answer: "Ce site a été conçu pour fonctionner sur la majorité des appareils mobiles, tablettes et ordinateurs dotés d’un navigateur internet.",
                    answerListTitle: "Configuration minimale requise :",
                    answerList: ["Lollipop 5.0 ou plus récent pour les appareils Android", "iOS 11 ou plus récent à partir de l’iPhone 6 pour les appareils Apple", "Google Chrome v52 ou plus récent", "Mozilla Firefox v52 ou plus récent", "Microsoft Edge v15 ou plus récent", "Safari v11.1 ou plus récent"]
                }, {
                    id: 2,
                    question: "Quand se termine l'évènement « Pokémon Kids : Festival hivernal » ?",
                    answer: "« Pokémon Kids : Festival hivernal » est un évènement à durée limitée. Il se tient du 1er décembre 2020 au 1er janvier 2021 à 23:59 UTC. Une fois terminé, il vous restera une semaine pour consulter les badges que vous avez obtenus."
                }, {
                    id: 3,
                    question: "Quelles langues sont prises en charge par le site ?",
                    answerListTitle: "Le site est disponible dans les langues suivantes :",
                    answerList: ["Anglais", "Allemand", "Français", "Espagnol", "Italien", "Espagnol (Amérique latine)", "Portugais (Brésil)"]
                }, {
                    id: 4,
                    question: "Pourquoi les badges obtenus ne sont-ils pas affichés ?",
                    answer: 'Un problème de cookies peut empêcher votre progression d’être sauvegardée correctement. Veuillez consulter notre [{LINK type="cookies" text="Politique relative aux cookies"}] pour savoir comment paramétrer ce réglage.'
                }, {
                    id: 5,
                    question: "Comment serons-nous informés des évènements en jeu ?",
                    answer: "Une liste des évènements actifs et des bonus en cours s’affichera chaque fois que vous vous rendrez sur le site. Revenez quotidiennement pour découvrir les dernières actualités !"
                }, {
                    id: 6,
                    question: "Peut-on changer de compagnon Pokémon ?",
                    answer: "Oui. Vous pouvez choisir un Pokémon en tant que compagnon après avoir obtenu le badge du Pokémon en question."
                }, {
                    id: 7,
                    question: "Que sont les Baies Framby et à quoi servent-elles ?",
                    answer: "Les Baies Framby sont des objets que vous remportez en jouant aux jeux du Pokémon Kids : Festival hivernal. Après en avoir récolté un certain nombre, vous obtiendrez un sac à badges contenant des badges de Pokémon qui s’ajouteront à votre collection. Les Baies Framby que vous récupérez s’ajouteront également au total quotidien de votre équipe, ce qui la fera avancer dans la course des équipes. La première équipe à franchir la ligne d’arrivée remportera un prix."
                }, {
                    id: 8,
                    question: "Comment récupérer des Baies Framby ?",
                    answer: "Vous pouvez récupérer des Baies Framby en jouant à des jeux ou en tournant la roue des récompenses quotidiennes. Des évènements spéciaux augmenteront la quantité de Baies Framby qu’il est possible de récupérer d’un coup, alors restez à l’affût."
                }, {
                    id: 9,
                    question: "Que sont les badges de Pokémon ?",
                    answer: "Les badges de Pokémon sont des récompenses que vous pourrez obtenir tout au long de l’évènement. Votre but est de compléter votre collection de badges avant la fin. Y parviendrez-vous ?"
                }, {
                    id: 10,
                    question: "Comment collecter des badges ?",
                    answer: "Les badges apparaissent dans les sacs de badges obtenus en récompense après avoir terminé une partie de jeu ou après avoir récolté un certain nombre de Baies Framby. La rareté des sacs dépend du nombre de Baies Framby récupérées. Vous pouvez également en obtenir des façons suivantes :",
                    answerList: ["Atteindre des paliers au cours de la course des équipes", "Utiliser la roue des récompenses quotidiennes", "Récupérer des récompenses quotidiennes spéciales", "Utiliser des codes d’échange uniques"]
                }, {
                    id: 11,
                    question: "Combien de badges se trouvent dans un sac ?",
                    answer: "Il existe quatre types de sacs différents. Voici leur contenu :",
                    answerList: ["Sac commun : deux badge de Pokémon", "Sac rare : quatre badges de Pokémon", "Sac épique : cinq badges de Pokémon", "Sac légendaire : cinq badges de Pokémon et un badge de Pokémon légendaire"]
                }, {
                    id: 12,
                    question: "Comment collecter des badges de Pokémon légendaires ?",
                    answer: "Les badges de Pokémon légendaires sont les plus rares. Ils ne se trouvent que dans les sacs légendaires. Voici comment les obtenir :",
                    answerList: ["Remporter les courses des équipes", "Utiliser la roue des récompenses quotidiennes", "Récupérer des récompenses quotidiennes spéciales", "Utiliser des codes d’échange uniques"]
                }, {
                    id: 13,
                    question: "Comment collecter des badges de Pokémon fabuleux ?",
                    answer: "Les badges de Pokémon fabuleux sont des badges spéciaux obtenus en terminant les missions fabuleuses quotidiennes. Consultez la mission d’aujourd’hui pour savoir quoi faire !"
                }, {
                    id: 14,
                    question: "Peut-on changer d’équipe ?",
                    answer: "Non. Afin que la course des équipes soit équilibrée et juste pour tous les joueurs, vous ne pouvez pas changer d’équipe."
                }, {
                    id: 15,
                    question: "Peut-on changer de surnom ?",
                    answer: "Oui. Vous pouvez le faire en vous rendant dans la zone Dresseur. Vous devrez utiliser un surnom unique afin de valider ce changement."
                }, {
                    id: 16,
                    question: "Qu’est-ce que la roue des récompenses quotidiennes ?",
                    answer: "La roue des récompenses quotidiennes est une fonctionnalité spéciale vous permettant de remporter une fois par jour des récompenses qui vous aideront à progresser durant l’évènement. Utilisez la roue des récompenses quotidiennes sept jours consécutifs pour remporter un prix encore plus conséquent."
                }, {
                    id: 17,
                    question: "Comment jouer aux jeux ?",
                    answer: "Rendez-vous simplement dans la liste des jeux et sélectionnez celui auquel vous souhaitez jouer. Suivez ensuite les instructions du jeu en question."
                }, {
                    title: "QUESTIONS TECHNIQUES"
                }, {
                    id: 18,
                    question: "Les jeux ne fonctionnent pas. Pourquoi ?",
                    answer: "Le site web utilise les dernières technologies HTML. Si vous rencontrez des problèmes, assurez-vous que votre navigateur est à jour. Si vous jouez sur mobile ou tablette, assurez-vous d’avoir installé la dernière version de votre système d’exploitation."
                }, {
                    id: 19,
                    question: "Pourquoi ma progression n’a-t-elle pas été sauvegardée ?",
                    answer: 'Un problème de cookies peut empêcher votre progression d’être sauvegardée correctement. Veuillez consulter notre [{LINK type="cookies" text="Politique relative aux cookies"}] pour savoir comment paramétrer ce réglage.'
                }, {
                    id: 20,
                    question: "Collectez-vous des informations sur mon enfant ?",
                    answer: 'Non. Les seules données collectées sur notre serveur sont utilisées pour mettre à jour la progression des jeux. Veuillez consulter notre [{LINK type="privacy" text="Politique de confidentialité"}] pour plus d’informations.'
                }, {
                    id: 21,
                    question: "Collectez-vous des données qui sont ensuite divulguées à des annonceurs ?",
                    answer: 'Non. Les données collectées ne servent qu’au déroulement de cet évènement. Veuillez consulter notre [{LINK type="privacy" text="Politique de confidentialité"}] pour plus d’informations.'
                }, {
                    id: 22,
                    question: "Doit-on se connecter pour jouer ?",
                    answer: "Il est nécessaire de créer un Dresseur pour jouer. Par la suite, il n’est plus nécessaire de se connecter."
                }, {
                    id: 23,
                    question: "J’ai perdu ma progression. Est-il possible de la récupérer ?",
                    answer: "Le site enregistre les données localement (sur votre appareil). Nous ne sommes malheureusement pas capables de la récupérer si elle a été supprimée."
                }, {
                    id: 24,
                    question: "J'ai découvert un code exclusif. Comment l'utiliser pour obtenir ma récompense ?",
                    answer: "Si vous avez trouvé l'un de nos codes exclusifs, cliquez simplement sur le bouton « Échanger le code » dans le menu principal. Vous verrez alors apparaître un champ textuel dans lequel vous pourrez saisir votre code. Si vous saisissez un code valide, vous recevrez la récompense correspondante. Les codes ne peuvent être utilisés qu'une seule fois par Dresseur."
                }, {
                    title: "QUESTIONS SUPPLÉMENTAIRES"
                }, {
                    id: 25,
                    question: "En cas de problème, comment contacter le service client ?",
                    answer: 'En cas de problème, utilisez l’adresse suivante pour nous contacter :<a href="mailto:support@pokemonkidswinterfest.com"><span>support@pokemonkidswinterfest.com</span></a>. Nous ferons notre possible pour vous venir en aide.<br /><br />[{LINK type="privacy" text="Politique de confidentialité"}]<br/>[{LINK type="cookies" text="Politique relative aux cookies"}]<br/>[{LINK type="terms" text="Conditions d\'utilisation"}]<br/><br />©2020 Pokémon. ©1995–2020 Nintendo / Creatures Inc. / GAME FREAK inc. Pokémon et les noms des personnages Pokémon sont des marques de Nintendo.<br/>'
                }],
                v = [{
                    title: "DOMANDE GENERALI"
                }, {
                    id: 1,
                    question: "Quali dispositivi sono compatibili con Pokémon Kids: Festa d'inverno?",
                    answer: "Il sito è stato pensato per essere utilizzato con la maggior parte dei dispositivi mobili, tablet e computer, purché possiedano un browser web.",
                    answerListTitle: "Requisiti minimi",
                    answerList: ["Dispositivo Android con Lollipop (5.0) o versioni successive", "Apple iPhone 6 con iOS 11 o versioni successive", "Google Chrome v52 o successive", "Mozilla Firefox v52 o successive", "Microsoft Edge v15 o successive", "Safari v11.1 o successive"]
                }, {
                    id: 2,
                    question: "Quando finirà Pokémon Kids: Festa d'inverno?",
                    answer: "Pokémon Kids: Festa d'inverno è un evento a tempo determinato, previsto dal 1 dicembre 2020 alle 23: 59(UTC) del 1 gennaio 2020. Dopo la conclusione dell'evento avrai a disposizione una settimana di tempo per visualizzare le medaglie che hai ottenuto."
                }, {
                    id: 3,
                    question: "Quali lingue sono supportate?",
                    answerListTitle: "L'evento è disponibile nelle seguenti lingue: ",
                    answerList: ["Inglese", "Tedesco", "Francese", "Spagnolo", "Italiano", "Spagnolo latino-americano", "Portoghese brasiliano"]
                }, {
                    id: 4,
                    question: "Perché le medaglie che ho ottenuto non vengono visualizzate?",
                    answer: 'È possibile che un problema relativo ai cookie impedisca il salvataggio corretto dei tuoi progressi di gioco. Leggi la nostra [{LINK type="cookies" text="Informativa sui cookie"}] per informazioni su come modificare la gestione dei cookie nel tuo browser.'
                }, {
                    id: 5,
                    question: "Come riceverò aggiornamenti sugli eventi all'interno del gioco?",
                    answer: "Ogni volta che visiterai il sito verrà visualizzata una lista degli eventi e delle promozioni in corso. Visita il sito ogni giorno per scoprire le ultime novità!"
                }, {
                    id: 6,
                    question: "Posso cambiare il mio compagno d'avventura?",
                    answer: "Sì. Dopo aver ottenuto la medaglia di un Pokémon, puoi sceglierlo come tuo compagno d'avventura."
                }, {
                    id: 7,
                    question: "Cosa sono le Baccalampon e a cosa servono?",
                    answer: "Le Baccalampon sono degli strumenti che puoi ottenere giocando ai minigiochi che fanno parte di Pokémon Kids: Festa d'inverno.Dopo averne raccolte una certa quantità, riceverai in premio un sacchetto che contiene delle medaglie per arricchire la tua collezione.Ogni Baccalampon ottenuta verrà sommata anche al totale giornaliero della tua squadra, facendola avanzare nelle gare a squadre.La prima squadra che taglierà il traguardo riceverà un premio."
                }, {
                    id: 8,
                    question: "Come si ottengono le Baccalampon?",
                    answer: "Puoi raccogliere Baccalampon giocando ai minigiochi o usando la ruota delle ricompense giornaliere. Ogni tanto ci saranno degli eventi speciali che faranno aumentare la quantità di Baccalampon che puoi vincere in una volta sola: occhio a non perderteli!"
                }, {
                    id: 9,
                    question: "Cosa sono le medaglie Pokémon?",
                    answer: "Le medaglie Pokémon sono delle ricompense che i giocatori possono ottenere durante l'evento.Il tuo obiettivo è quello di raccogliere tutte le medaglie Pokémon nel periodo in cui l'evento è in corso. Riuscirai a completare la tua collezione?"
                }, {
                    id: 10,
                    question: "Come si ottengono le medaglie?",
                    answer: "Le medaglie appaiono nei sacchetti che ricevi in premio quando ottieni un numero sufficiente di Baccalampon nei minigiochi. Quante più Baccalampon raccoglierai, tanto più sarà raro il sacchetto. I sacchetti possono essere ottenuti anche nei seguenti modi:",
                    answerList: ["Raggiungendo determinati traguardi nelle gare a squadre", "Facendo girare la ruota delle ricompense giornaliere", "Ottenendo le ricompense giornaliere speciali", "Riscattando dei codici unici"]
                }, {
                    id: 11,
                    question: "Quante medaglie ci sono in un sacchetto?",
                    answer: "Puoi ottenere quattro tipi di sacchetti. Ecco cosa contengono.",
                    answerList: ["Sacchetto base: tre medaglia Pokémon", "Sacchetto raro: quattro medaglie Pokémon", "Sacchetto epico: cinque medaglie Pokémon", "Sacchetto leggendario: cinque medaglie Pokémon e una medaglia Pokémon leggendari"]
                }, {
                    id: 12,
                    question: "Come si ottengono le medaglie Pokémon leggendari?",
                    answer: "Le medaglie Pokémon leggendari sono le medaglie più rare e si trovano solo nei sacchetti leggendari. Puoi ottenere i sacchetti leggendari nei seguenti modi:",
                    answerList: ["Vincendo le gare a squadre", "Facendo girare la ruota delle ricompense giornaliere", "Ottenendo le ricompense giornaliere speciali", "Riscattando dei codici unici"]
                }, {
                    id: 13,
                    question: "Come si ottengono le medaglie Pokémon misteriosi?",
                    answer: "Le medaglie Pokémon misteriosi sono delle medaglie speciali che si ottengono come premio per aver completato le missioni misteriose giornaliere. Dai un'occhiata alla missione del giorno per scoprire cosa devi fare!"
                }, {
                    id: 14,
                    question: "Posso cambiare squadra?",
                    answer: "No. Al fine di garantire uno svolgimento equo e bilanciato delle gare a squadre, non è possibile cambiare squadra."
                }, {
                    id: 15,
                    question: "Posso cambiare il mio nome utente?",
                    answer: "Sì. Per farlo, vai nella tua area Allenatore. Se il nuovo nome che hai scelto è disponibile, potrai modificarlo."
                }, {
                    id: 16,
                    question: "Cos'è la ruota delle ricompense giornaliere?",
                    answer: "La ruota delle ricompense giornaliere è una funzione speciale che ti permette di ottenere dei fantastici premi una volta al giorno per aiutarti a progredire nell'evento.Se usi la ruota delle ricompense giornaliere per sette giorni consecutivi, riceverai un premio aggiuntivo."
                }, {
                    id: 17,
                    question: "Come si accede ai minigiochi?",
                    answer: "Consulta la lista dei minigiochi e seleziona quello a cui vuoi giocare. A quel punto, segui le istruzioni del minigioco che hai selezionato."
                }, {
                    title: "DOMANDE TECNICHE"
                }, {
                    id: 18,
                    question: "I minigiochi non funzionano. Perché?",
                    answer: "Il sito web dell'evento utilizza la tecnologia HTML più recente.Se si verificano dei problemi, assicurati che il tuo browser sia aggiornato alla versione più recente.Se utilizzi un dispositivo mobile come un cellulare o un tablet per giocare, assicurati che anche il loro sistema operativo sia aggiornato alla versione più recente."
                }, {
                    id: 19,
                    question: "Perché i miei progressi di gioco non vengono salvati?",
                    answer: 'È possibile che un problema relativo ai cookie impedisca il salvataggio corretto dei tuoi progressi di gioco. Leggi la nostra [{LINK type="cookies" text="Informativa sui cookie"}] per informazioni su come modificare la gestione dei cookie nel tuo browser.'
                }, {
                    id: 20,
                    question: "Raccogliete informazioni relative al mio bambino o alla mia bambina?",
                    answer: 'No. Gli unici dati che vengono conservati nei nostri server sono quelli necessari a tenere traccia dei progressi di gioco. Per informazioni esaustive leggi la nostra [{LINK type="privacy" text="Informativa sulla privacy"}].'
                }, {
                    id: 21,
                    question: "Raccogliete dati che rendete accessibili a terze parti?",
                    answer: 'No. I dati raccolti verranno utilizzati esclusivamente per garantire lo svolgimento dell\'evento.Per informazioni esaustive leggi la nostra [{LINK type="privacy" text="Informativa sulla privacy"}].'
                }, {
                    id: 22,
                    question: "Devo effettuare l'accesso per poter giocare?",
                    answer: "I giocatori devono creare un Allenatore o un'Allenatrice per poter giocare.Dopo averlo fatto, non dovranno effettuare l'accesso."
                }, {
                    id: 23,
                    question: "Credo di aver perso i miei dati di gioco. Posso recuperarli?",
                    answer: "Poiché il sito effettua il salvataggio dei dati in locale sul tuo dispositivo, qualora venissero eliminati non saremo in grado di recuperarli."
                }, {
                    title: "ULTERIORE ASSISTENZA"
                }, {
                    id: 24,
                    question: "In caso di problemi, come posso mettermi in contatto con il servizio assistenza?",
                    answer: 'Se stai riscontrando dei problemi, invia un\'email a<a href = "mailto:support@pokemonkidswinterfest.com">< span > support@pokemonkidswinterfest.com</span ></a > e cercheremo di risponderti al più presto.<br /><br />[{LINK type="privacy" text="Informativa sulla privacy"}]<br/>[{LINK type="cookies" text="Informativa sui cookie"}]<br/>[{LINK type="terms" text="Termini di utilizzo"}]<br/><br />©2020 Pokémon. ©1995–2020 Nintendo / Creatures Inc. / GAME FREAK inc. Pokémon and Pokémon character names are trademarks of Nintendo.<br/>'
                }],
                h = [{
                    title: "Preguntas generales"
                }, {
                    id: 1,
                    question: "¿En qué dispositivos puedo utilizar Pokémon Kids: Festival de Invierno?",
                    answer: "La página se diseñó para que funcione en la mayoría de los dispositivos móviles, tabletas y equipos que cuenten con un navegador.",
                    answerListTitle: "Requisitos mínimos:",
                    answerList: ["Dispositivo Android con Lollipop (5.0) o posterior", "iPhone 6 (Apple) con iOS 11 o posterior", "Google Chrome vers. 52 o posterior", "Mozilla Firefox vers. 52 o posterior", "Microsoft Edge vers. 15 o posterior", "Safari vers. 11.1 o posterior"]
                }, {
                    id: 2,
                    question: "¿Hasta cuándo estará disponible Pokémon Kids: Festival de Invierno?",
                    answer: "Pokémon Kids: Festival de Invierno se llevará a cabo del 1 de diciembre de 2020 al 1 de enero de 2021 a las 23:59 UTC. Una vez que concluya el evento, tendrás una semana para ver las medallas que hayas obtenido."
                }, {
                    id: 3,
                    question: "¿En qué idiomas está disponible?",
                    answerListTitle: "El evento está disponible en los siguientes idiomas:",
                    answerList: ["Inglés", "Alemán", "Francés", "Español (España)", "Italiano", "Español (Latinoamérica)", "Portugués (Brasil)"]
                }, {
                    id: 4,
                    question: "¿Por qué no puedo ver las medallas que he obtenido?",
                    answer: 'Un problema con las cookies puede estar impidiendo que tu progreso se guarde correctamente. Lee nuestra [{LINK type="cookies" text="Política de cookies"}] para obtener más información sobre cómo modificar la configuración de las mismas.'
                }, {
                    id: 5,
                    question: "¿Cómo se me notificará de los eventos dentro del juego?",
                    answer: "Cada vez que visites la página, podrás ver una lista de los eventos disponibles y las recompensas. ¡Asegúrate de verificar todos los días para ver qué hay de nuevo!"
                }, {
                    id: 6,
                    question: "¿Puedo cambiar mi compañero Pokémon?",
                    answer: "Sí. Tras obtener la medalla de un Pokémon, puedes elegir a ese Pokémon como tu compañero."
                }, {
                    id: 7,
                    question: "¿Qué son las Bayas Frambu y para qué sirven?",
                    answer: "Las Bayas Frambu son objetos que puedes ganar en los juegos de Pokémon Kids: Festival de Invierno. Cuando acumules cierta cantidad, se te otorgará una bolsita de medallas Pokémon que se añadirán a tu colección. Además, las bayas que reúnas se añadirán al contador diario de tu equipo para que progrese en la carrera de equipos. El primer equipo que cruce la meta recibirá un premio."
                }, {
                    id: 8,
                    question: "¿Cómo obtengo Bayas Frambu?",
                    answer: "Puedes conseguir Bayas Frambu en los juegos o en la ruleta de recompensas diarias. De vez en cuando, habrá eventos especiales durante los que aumentará la cantidad de bayas que puedes ganar, así que estate pendiente."
                }, {
                    id: 9,
                    question: "¿Qué son las medallas Pokémon?",
                    answer: "Las medallas Pokémon son las recompensas que los jugadores pueden obtener mientras dure el evento. El objetivo es conseguir todas las medallas disponibles mientras el evento esté activo. ¿Podrás completar la colección?"
                }, {
                    id: 10,
                    question: "¿Cómo obtengo las medallas?",
                    answer: "Las medallas se pueden encontrar en las bolsitas que recibirás cuando juegues a uno de los juegos y consigas suficientes Bayas Frambu. La rareza de las bolsitas de medallas que recibas dependerá de la cantidad de Bayas Frambu que obtengas. Las bolsitas de medallas también se pueden obtener de la siguiente manera:",
                    answerList: ["Al cumplir objetivos de la carrera de equipos", "Con la ruleta de recompensas diarias", "Con las recompensas diarias especiales", "Con códigos exclusivos"]
                }, {
                    id: 11,
                    question: "¿Cuántas medallas hay en cada bolsita?",
                    answer: "Hay cuatro tipos de bolsitas disponibles. Su contenido es el siguiente:",
                    answerList: ["Bolsita Normal: dos medalla Pokémon", "Bolsita Especial: cuatro medallas Pokémon", "Bolsita Épica: cinco medallas Pokémon", "Bolsita Legendaria: cinco medallas Pokémon y una medalla de Pokémon Legendario"]
                }, {
                    id: 12,
                    question: "¿Cómo obtengo las medallas de Pokémon Legendarios?",
                    answer: "Las medallas de Pokémon Legendarios son las más raras y sólo se pueden encontrar en las Bolsitas Legendarias, que se pueden obtener de la siguientes manera:",
                    answerList: ["Al ganar la carrera de equipos", "Con la ruleta de recompensas diarias", "Con las recompensas diarias especiales", "Con códigos exclusivos"]
                }, {
                    id: 13,
                    question: "¿Cómo puedo obtener las medallas de Pokémon Míticos?",
                    answer: "Las medallas de Pokémon Míticos son medallas especiales que se otorgan por completar la misión diaria. ¡Comprueba la misión de hoy para saber lo que tienes que hacer!"
                }, {
                    id: 14,
                    question: "¿Puedo cambiar de equipo?",
                    answer: "No. Para mantener el equilibrio de las carreras de equipos y que sean justas para todos los jugadores, no es posible cambiarse de equipo."
                }, {
                    id: 15,
                    question: "¿Puedo cambiar mi nombre de usuario?",
                    answer: "Sí. Para hacerlo, ve a la Zona de Entrenadores. Asegúrate de que tu nuevo nombre de usuario no esté repetido para poder realizar el cambio."
                }, {
                    id: 16,
                    question: "¿En qué consiste la ruleta de recompensas diarias?",
                    answer: "La ruleta de recompensas diarias es una función que te permite ganar emocionantes premios una vez al día que te ayudarán a progresar en el juego. Si la usas siete días seguidos, recibirás un premio adicional."
                }, {
                    id: 17,
                    question: "¿Cómo funcionan los juegos?",
                    answer: "Para comenzar un juego, visita el menú, selecciona el que quieras jugar y sigue las instrucciones."
                }, {
                    title: "Preguntas de soporte técnico"
                }, {
                    id: 18,
                    question: "Los juegos no funcionan. ¿Qué sucede?",
                    answer: "La página del evento utiliza la última tecnología HTML. Si tienes problemas, asegúrate de que tu navegador esté actualizado a la versión más reciente. Si estás jugando en un dispositivo móvil o tableta, asegúrate también de que tu sistema operativo esté actualizado a la versión más reciente."
                }, {
                    id: 19,
                    question: "¿Por qué no se guarda mi progreso en el juego?",
                    answer: 'Un problema con las cookies puede estar impidiendo que tu progreso se guarde correctamente. Lee nuestra [{LINK type="cookies" text="Política de cookies"}] para obtener más información sobre cómo modificar la configuración de las mismas.'
                }, {
                    id: 20,
                    question: "¿Se recopila información sobre mi hijo/a?",
                    answer: 'No. Los únicos datos que se guardan en nuestros servidores son los necesarios para guardar el progreso del juego. Lee nuestro [{LINK type="privacy" text="Aviso de privacidad"}] para más detalles.'
                }, {
                    id: 21,
                    question: "¿Se recopilan datos para compartirlos con anunciantes?",
                    answer: 'No. Los datos que se guardan se utilizarán únicamente para fines relacionados con este evento. Lee nuestro [{LINK type="privacy" text="Aviso de privacidad"}] para más detalles.'
                }, {
                    id: 22,
                    question: "¿Necesito iniciar sesión para jugar?",
                    answer: "Los jugadores tendrán que crear un perfil de Entrenador o Entrenadora para jugar. Una vez que lo hagan, no necesitarán iniciar sesión."
                }, {
                    id: 23,
                    question: "Parece que perdí mi progreso en el juego. ¿Puedo recuperarlo?",
                    answer: "Lamentablemente, como la página guarda los datos localmente en tu dispositivo, resulta imposible recuperar los datos que se hayan perdido."
                }, {
                    id: 24,
                    question: "Vi un código exclusivo, ¿cómo lo uso para solicitar mi recompensa?",
                    answer: "Si descubriste uno de nuestros códigos exclusivos, simplemente pulsa el botón «Canjear» en el menú principal. A continuación, aparecerá un campo de texto donde podrás introducir tu código. Si introduces un código válido serás premiado(a) con la recompensa correspondiente. Los códigos solo pueden usarse una vez por entrenador."
                }, {
                    title: "Ayuda avanzada"
                }, {
                    id: 25,
                    question: "¿Cómo me puedo comunicar con el equipo de soporte si tengo algún problema?",
                    answer: 'Si estás teniendo problemas, escríbenos a <a href="mailto:support@pokemonkidswinterfest.com"><span>support@pokemonkidswinterfest.com</span></a>, e intentaremos responderte lo antes posible.<br /><br />[{LINK type="privacy" text="Política de privacidad"}]<br/>[{LINK type="cookies" text="Política de cookies"}]<br/>[{LINK type="terms" text="Condiciones de uso"}]<br/><br />©2020 Pokémon. ©1995–2020 Nintendo / Creatures Inc. / GAME FREAK inc. Pokémon and Pokémon character names are trademarks of Nintendo.<br/>'
                }],
                f = n(18);

            function _(e, o) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, o) {
                            if (!e) return;
                            if ("string" == typeof e) return z(e, o);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return z(e, o)
                        }(e)) || o && e && "number" == typeof e.length) {
                        n && (e = n);
                        var i = 0,
                            t = function() {};
                        return {
                            s: t,
                            n: function() {
                                return i >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[i++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: t
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var r, l = !0,
                    c = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return l = e.done, e
                    },
                    e: function(e) {
                        c = !0, r = e
                    },
                    f: function() {
                        try {
                            l || null == n.return || n.return()
                        } finally {
                            if (c) throw r
                        }
                    }
                }
            }

            function z(e, o) {
                (null == o || o > e.length) && (o = e.length);
                for (var i = 0, n = new Array(o); i < o; i++) n[i] = e[i];
                return n
            }

            function E(object, e) {
                var o = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), o.push.apply(o, n)
                }
                return o
            }

            function S(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? E(Object(source), !0).forEach((function(o) {
                        Object(t.a)(e, o, source[o])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : E(Object(source)).forEach((function(o) {
                        Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(source, o))
                    }))
                }
                return e
            }
            var w = {
                    computed: S(S({}, Object(f.b)({
                        lang: "lang"
                    })), {}, {
                        strippedOfTitles: function() {
                            return this.faqData.filter((function(i) {
                                return !i.title
                            }))
                        },
                        faqData: function() {
                            switch (this.lang) {
                                case "br":
                                    return r;
                                case "de":
                                    return l;
                                case "en":
                                    return c;
                                case "es":
                                    return d;
                                case "fr":
                                    return m;
                                case "it":
                                    return v;
                                case "latam":
                                    return h
                            }
                        }
                    }),
                    mounted: function() {},
                    methods: {
                        scrollMeTo: function(e) {
                            var o = this.$refs[e][0].offsetTop - 10;
                            document.getElementById("faqs").scrollTop = o
                        },
                        changeContent: function(e) {
                            document.getElementById("faqs").scrollTop = 0, this.$emit("changeContent", e)
                        },
                        parseLinks: function(e) {
                            var o, n = e.split(/\[(.*?)\]/g),
                                output = [],
                                t = _(n);
                            try {
                                for (t.s(); !(o = t.n()).done;) {
                                    var r = o.value;
                                    r.match(/\{(.*?)\}/g) ? function() {
                                        var e = {};
                                        r.match(/[\w-]+=".+?"/g).forEach((function(o) {
                                            o = o.match(/([\w-]+)="(.+?)"/), e[o[1]] = o[2]
                                        })), output.push(e)
                                    }() : output.push(r)
                                }
                            } catch (e) {
                                t.e(e)
                            } finally {
                                t.f()
                            }
                            return output
                        }
                    }
                },
                k = (n(673), n(36)),
                component = Object(k.a)(w, (function() {
                    var e = this,
                        o = e.$createElement,
                        n = e._self._c || o;
                    return n("div", {
                        staticClass: "faqs"
                    }, [n("div", {
                        staticClass: "faq-index"
                    }, [n("ol", e._l(e.strippedOfTitles, (function(o, i) {
                        return n("li", {
                            key: i
                        }, [n("a", {
                            domProps: {
                                innerHTML: e._s(o.question)
                            },
                            on: {
                                click: function(n) {
                                    return n.preventDefault(), e.scrollMeTo("Q" + o.id)
                                }
                            }
                        })])
                    })), 0)]), e._v(" "), e._l(e.faqData, (function(o, i) {
                        return n("div", {
                            key: i,
                            ref: "Q" + o.id,
                            refInFor: !0,
                            staticClass: "faq-part"
                        }, [o.title ? n("h2", [e._v("\n\t\t\t" + e._s(o.title) + "\n\t\t")]) : e._e(), e._v(" "), o.question ? n("div", {
                            staticClass: "question"
                        }, [n("p", [n("strong", {
                            domProps: {
                                innerHTML: e._s(o.question)
                            }
                        })])]) : e._e(), e._v(" "), o.answer ? n("div", {
                            staticClass: "answer"
                        }, [n("p", e._l(e.parseLinks(o.answer), (function(o, i) {
                            return n("span", {
                                key: i
                            }, [n("span", "object" == typeof o ? [n("a", {
                                domProps: {
                                    innerHTML: e._s(o.text)
                                },
                                on: {
                                    click: function(n) {
                                        return e.changeContent(o.type)
                                    }
                                }
                            })] : [n("span", {
                                domProps: {
                                    innerHTML: e._s(o)
                                }
                            })])])
                        })), 0)]) : e._e(), e._v(" "), o.answerListTitle ? n("div", {
                            staticClass: "answer-list-title"
                        }) : e._e(), e._v(" "), o.answerList ? n("div", {
                            staticClass: "answer-list"
                        }, [n("ul", e._l(o.answerList, (function(o, t) {
                            return n("li", {
                                key: t,
                                domProps: {
                                    innerHTML: e._s(o)
                                }
                            })
                        })), 0)]) : e._e()])
                    }))], 2)
                }), [], !1, null, "1e5279a9", null);
            o.default = component.exports
        },
        673: function(e, o, n) {
            "use strict";
            var t = n(609);
            n.n(t).a
        },
        674: function(e, o, n) {
            "use strict";
            var t = n(611);
            n.n(t).a
        },
        677: function(e, o, n) {
            "use strict";
            var t = n(614);
            n.n(t).a
        }
    }
]);