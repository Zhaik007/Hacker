(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    6840: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(45609);
        },
      ]);
    },
    89147: function (t, e, n) {
      "use strict";
      n.d(e, {
        b: function () {
          return c;
        },
        h: function () {
          return o;
        },
      });
      var r = n(67294),
        i = n(73935),
        s = n(82669),
        c = "portal-root",
        o = (0, r.forwardRef)(function (t, e) {
          var n = t.children,
            o = t.portalRoot,
            a = void 0 === o ? c : o,
            u = (0, r.useRef)(s.j ? document.createElement("div") : null),
            d = (0, r.useState)(!1),
            l = d[0],
            f = d[1];
          return (
            (0, r.useEffect)(
              function () {
                var t = document.querySelector("#".concat(a)),
                  n = u.current;
                if (t && n)
                  return (
                    e && "current" in e && (e.current = n),
                    t.append(n),
                    f(!0),
                    function () {
                      n.remove();
                    }
                  );
              },
              [a, e]
            ),
            l && u.current ? (0, i.createPortal)(n, u.current) : null
          );
        });
    },
    45609: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return w;
          },
        });
      var r = n(26042),
        i = n(85893),
        s = n(9008),
        c = n.n(s),
        o = (n(67284), n(67294), n(4298)),
        a = n.n(o),
        u = function () {
          return (0, i.jsx)(a(), {
            id: "metrika-script",
            children:
              '(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n           m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n           (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");\n           ym('.concat(
                "89218905",
                ', "init", {\n                clickmap:true,\n                trackLinks:true,\n                accurateTrackBounce:true,\n                webvisor:true\n           });'
              ),
          });
        },
        d = function () {
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(a(), {
                id: "pixel-script",
                children:
                  'var _tmr = window._tmr || (window._tmr = []);\n      _tmr.push({id: "3306352", type: "pageView", start: (new Date()).getTime()});\n      (function (d, w, id) {\n        if (d.getElementById(id)) return;\n        var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;\n        ts.src = "https://top-fwz1.mail.ru/js/code.js";\n        var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};\n        if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }\n      })(document, window, "tmr-code");',
              }),
              (0, i.jsx)("noscript", {
                children: (0, i.jsx)("div", {
                  children: (0, i.jsx)("img", {
                    src: "https://top-fwz1.mail.ru/counter?id=3306352;js=na",
                    style: { position: "absolute", left: "-9999px" },
                    alt: "Top.Mail.Ru",
                  }),
                }),
              }),
            ],
          });
        },
        l = function () {
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(a(), {
              id: "antifraud-script",
              defer: !0,
              src: "https://af.click.ru/af.js?id=13517",
            }),
          });
        },
        f = function () {
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(a(), {
                id: "gtm-script",
                strategy: "afterInteractive",
                children:
                  "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n    })(window,document,'script','dataLayer','GTM-PVF5FDM');",
              }),
              (0, i.jsx)("noscript", {
                children: (0, i.jsx)("iframe", {
                  src: "https://www.googletagmanager.com/ns.html?id=GTM-PVF5FDM",
                  height: "0",
                  width: "0",
                  style: { display: "none", visibility: "hidden" },
                }),
              }),
            ],
          });
        },
        m = function () {
          return (0, i.jsx)(a(), {
            id: "userId-GA4",
            children:
              "let userId;\nconst session = localStorage.getItem('session');\n\nif (session) {\nconst { user_id } = JSON.parse(session);\nuserId = user_id;\n} \n  \nwindow.dataLayer = window.dataLayer || [];\nwindow.dataLayer.push(\n{'event':'user_id_event',\n'user_id':userId\n});",
          });
        },
        p = n(89147);
      var w = function (t) {
        var e,
          n = t.Component,
          s = t.pageProps,
          o =
            null !== (e = n.getLayout) && void 0 !== e
              ? e
              : function (t) {
                  return t;
                };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(c(), {
              children: [
                (0, i.jsx)("title", { children: "result.school" }),
                (0, i.jsx)("link", {
                  rel: "shortcut icon",
                  href: "/logo-result.school.png",
                }),
              ],
            }),
            o((0, i.jsx)(n, (0, r.Z)({}, s))),
            (0, i.jsx)(u, {}),
            (0, i.jsx)(d, {}),
            (0, i.jsx)(l, {}),
            (0, i.jsx)(f, {}),
            (0, i.jsx)(m, {}),
            (0, i.jsx)("div", { id: p.b }),
          ],
        });
      };
    },
    82669: function (t, e, n) {
      "use strict";
      n.d(e, {
        j: function () {
          return r;
        },
      });
      var r = !0;
    },
    67284: function () {},
    9008: function (t, e, n) {
      t.exports = n(5443);
    },
    4298: function (t, e, n) {
      t.exports = n(20699);
    },
    14924: function (t, e, n) {
      "use strict";
      function r(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
    26042: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      var r = n(14924);
      function i(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })
            )),
            i.forEach(function (e) {
              (0, r.Z)(t, e, n[e]);
            });
        }
        return t;
      }
    },
  },
  function (t) {
    var e = function (e) {
      return t((t.s = e));
    };
    t.O(0, [774, 179], function () {
      return e(6840), e(90387);
    });
    var n = t.O();
    _N_E = n;
  },
]);
