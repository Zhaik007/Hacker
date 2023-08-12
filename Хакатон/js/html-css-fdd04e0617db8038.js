(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [855],
  {
    93733: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "",
        function () {
          return s(82711);
        },
      ]);
    },
    23328: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/author.9f4b9d27.png",
        height: 144,
        width: 144,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEUwKyViSjZGOS8+MSM/Ni1INCgaGhwoJiRMaXEZHSdUTUaTcGA5KyJwU0EKERdNRD5UTEIxLCgJFSVzW05YUk2oiX0jLDhSRDcVFBJLQjiBZFeegng8cke3AAAAF3RSTlMi/Oyo6fyo/QD+7P7+/OqoqOz+56gi7HkiUEsAAAAJcEhZcwAAFiUAABYlAUlSJPAAAABBSURBVAiZBcEHAoAgDACxY5bp1iL+/58mJJy1Kwm8+VQ9bK+pTSRSNIScx07RduQsnku71DAc99nnHAsk4rNE0g9brwLJuhYNJQAAAABJRU5ErkJggg==",
      };
    },
    10665: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/icon-arrow-right.e2a7f9cc.svg",
        height: 16,
        width: 28,
      };
    },
    61416: function (e, t, s) {
      "use strict";
      s.d(t, {
        O: function () {
          return l;
        },
      });
      var i = s(85893),
        r = s(67294),
        a = s(94184),
        n = s.n(a),
        l = function (e) {
          var t = e.children,
            s = e.reference,
            a = (0, r.useState)(!0),
            l = a[0],
            c = a[1];
          return (0, i.jsx)("section", {
            className: n()({ dark: l }),
            ref: s,
            children: (0, i.jsx)("div", {
              className: "container relative py-[60px] px-0 md:px-5",
              children: (0, i.jsxs)("div", {
                className:
                  "relative flex flex-col items-center overflow-hidden rounded-none bg-stone-100 pt-[60px] pb-8 transition-all duration-500 dark:bg-black sm:pb-0 md:rounded-2xl",
                children: [
                  (0, i.jsxs)("div", {
                    className: "absolute top-7 right-7 w-[170px]",
                    children: [
                      (0, i.jsx)("input", {
                        className: "hidden",
                        type: "checkbox",
                        name: "themeSwitcher",
                        id: "themeSwitcher",
                        checked: l,
                        onChange: function () {
                          return c(!l);
                        },
                      }),
                      (0, i.jsxs)("label", {
                        className:
                          "flex cursor-pointer items-center dark:text-white",
                        htmlFor: "themeSwitcher",
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              "flex h-4 w-9 items-center rounded-full bg-[#C6CBD8] transition-all duration-500 dark:bg-[#52D076]",
                            children: (0, i.jsx)("div", {
                              className:
                                "-ml-0.5 h-5 w-5 rounded-full bg-white shadow transition-all duration-300 ease-linear ".concat(
                                  l ? "translate-x-5" : "translate-x-0"
                                ),
                            }),
                          }),
                          (0, i.jsx)("span", {
                            className:
                              "ml-4 text-[20px] leading-[1.3] transition-all duration-500 dark:text-white",
                            children: l ? "Dark mode" : "Light mode",
                          }),
                        ],
                      }),
                    ],
                  }),
                  t,
                ],
              }),
            }),
          });
        };
    },
    41414: function (e, t, s) {
      "use strict";
      s.d(t, {
        K: function () {
          return n;
        },
      });
      var i = s(85893),
        r = s(67294),
        a = s(11163),
        n = function (e) {
          var t,
            s,
            n = e.widgetId,
            l = e.scriptId,
            c = (0, a.useRouter)(),
            x = (0, r.useRef)(null),
            o = (0, r.useState)(""),
            d = o[0],
            m = o[1],
            p = (0, r.useState)("lk"),
            h = p[0],
            u = p[1],
            f = (0, r.useState)(
              ((t = 1), (s = 999), Math.floor(Math.random() * (s - t + 1) + t))
            )[0];
          return (
            (0, r.useEffect)(
              function () {
                var e = function (e) {
                  var t = e.data;
                  x.current &&
                    "REDIRECT" ===
                      (null === t || void 0 === t ? void 0 : t.action) &&
                    c.push({ pathname: t.payload.url, query: c.query });
                };
                function t(s) {
                  var i = s.data;
                  x.current &&
                    (0 === i.height && u("eu"),
                    (null === i || void 0 === i ? void 0 : i.uniqName) === l &&
                      i.height &&
                      (null === i || void 0 === i ? void 0 : i.iframeName) ===
                        x.current.name &&
                      ((x.current.style.height = "".concat(i.height, "px")),
                      window.removeEventListener("message", t)),
                    "INIT_FORM_WITH_MESSAGES" ===
                      (null === i || void 0 === i ? void 0 : i.action) &&
                      window.addEventListener("message", e, !1));
                }
                if (
                  (m(
                    "https://"
                      .concat(h, ".result.school/pl/lite/widget/widget?")
                      .concat(window.location.search.slice(1), "&id=")
                      .concat(n, "&ref=")
                      .concat(encodeURIComponent(document.referrer), "&loc=")
                      .concat(encodeURIComponent(document.location.href))
                  ),
                  c.isReady)
                )
                  return (
                    window.addEventListener("message", t, !1),
                    function () {
                      window.removeEventListener("message", t),
                        window.removeEventListener("message", e);
                    }
                  );
              },
              [l, n, h, c.query]
            ),
            (0, i.jsx)(i.Fragment, {
              children:
                d &&
                (0, i.jsx)("iframe", {
                  ref: x,
                  src: d,
                  style: {
                    width: "100%",
                    height: "0px",
                    border: "none",
                    overflow: "hidden",
                  },
                  allowFullScreen: !0,
                  name: "".concat(f),
                  id: "6c5167d0909c474016f58d0d671330e738c20d25_".concat(f),
                  title: "getcourse",
                }),
            })
          );
        };
    },
    89842: function (e, t, s) {
      "use strict";
      s.d(t, {
        u: function () {
          return a;
        },
      });
      var i = s(85893),
        r = (s(67294), s(89147)),
        a = function (e) {
          var t = e.active,
            s = e.setActive,
            a = e.children;
          return (0, i.jsx)(r.h, {
            children: (0, i.jsx)("div", {
              className: t ? "modal active" : "modal",
              onClick: function () {
                return s(!1);
              },
              children: (0, i.jsxs)("div", {
                className: t ? "modal__content active" : "modal__content",
                onClick: function (e) {
                  return e.stopPropagation();
                },
                children: [
                  (0, i.jsx)("button", {
                    className: "modal__close",
                    onClick: function () {
                      return s(!1);
                    },
                  }),
                  a,
                ],
              }),
            }),
          });
        };
    },
    33059: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = s(85893),
        r = s(25675),
        a = s.n(r),
        n = s(23328),
        l = function () {
          return (0, i.jsx)("section", {
            className: "relative flex flex-col items-center py-[60px]",
            children: (0, i.jsxs)("div", {
              className: "container flex flex-col items-center",
              children: [
                (0, i.jsx)("h2", {
                  className:
                    "mb-10 text-center text-4xl font-bold leading-[1.3] sm:mb-20 sm:text-[54px]",
                  children:
                    "\u0410\u0432\u0442\u043e\u0440 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f",
                }),
                (0, i.jsxs)("div", {
                  className:
                    "flex w-full max-w-[1280px] flex-col rounded-[20px] bg-white px-4 py-8 shadow-xl md:flex-row md:items-center md:px-7 md:py-10 lg:px-[50px] lg:py-[60px]",
                  children: [
                    (0, i.jsxs)("div", {
                      className:
                        "mb-5 shrink-0 md:mb-0 md:mr-[5%] md:border-r md:border-[#F0F0F0] md:pr-[5%]",
                      children: [
                        (0, i.jsxs)("div", {
                          className: "mb-6 flex items-center md:mb-11",
                          children: [
                            (0, i.jsx)("div", {
                              className:
                                "mr-5 flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full border-2 border-primary2 p-0.5",
                              children: (0, i.jsx)(a(), {
                                src: n.Z,
                                alt: "vladilen minin",
                                className: "h-auto w-full align-middle",
                              }),
                            }),
                            (0, i.jsxs)("div", {
                              className: "flex flex-col items-start",
                              children: [
                                (0, i.jsx)("h3", {
                                  className:
                                    "relative mb-1.5 pr-7 text-lg font-semibold leading-[1.5] before:absolute before:top-1.5 before:right-0 before:h-3 before:w-5 before:bg-[url('/img/icons/icon-check-primary.svg')] before:bg-contain before:bg-no-repeat before:content-[''] sm:text-[22px] before:sm:top-[11px]",
                                  children:
                                    "\u0412\u043b\u0430\u0434\u0438\u043b\u0435\u043d \u041c\u0438\u043d\u0438\u043d",
                                }),
                                (0, i.jsx)("p", {
                                  className: "mt-0 text-base text-[#444c51]",
                                  children: "Senior Frontend Developer",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: "flex flex-wrap items-center",
                          children: [
                            (0, i.jsx)("a", {
                              id: "38",
                              className:
                                "mr-1.5 mb-2 flex items-center justify-center rounded-full bg-[#F0F2F5] py-3 px-5 text-[14px] leading-[1] text-[#838c98] hover:bg-[#E14646] hover:text-white focus:bg-[#E14646]",
                              target: "_blank",
                              href: "https://www.youtube.com/channel/UCg8ss4xW9jASrqWGP30jXiw",
                              rel: "noreferrer",
                              children: "Youtube",
                            }),
                            (0, i.jsx)("a", {
                              id: "39",
                              className:
                                "mr-1.5 mb-2 flex items-center justify-center rounded-full bg-[#F0F2F5] py-3 px-5 text-[14px] leading-[1] text-[#838c98] hover:bg-[#5DABE5] hover:text-white focus:bg-[#5DABE5]",
                              target: "_blank",
                              href: "https://t.me/js_by_vladilen",
                              rel: "noreferrer",
                              children: "Telegram",
                            }),
                            (0, i.jsx)("a", {
                              id: "40",
                              className:
                                "mr-1.5 mb-2 flex items-center justify-center rounded-full bg-[#F0F2F5] py-3 px-5 text-[14px] leading-[1] text-[#838c98] hover:bg-[#3877F6] hover:text-white focus:bg-[#3877F6]",
                              target: "_blank",
                              href: "https://vk.com/vladilen.minin",
                              rel: "noreferrer",
                              children:
                                "\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("ul", {
                      className: "list-disc pl-4 text-base",
                      children: [
                        (0, i.jsx)("li", {
                          className: "mb-2.5",
                          children:
                            "\u0411\u043e\u043b\u0435\u0435 8 \u043b\u0435\u0442 \u043e\u043f\u044b\u0442\u0430",
                        }),
                        (0, i.jsx)("li", {
                          className: "mb-2.5",
                          children:
                            "\u0422\u0438\u043c\u043b\u0438\u0434 \u0434\u043b\u044f \u043a\u043e\u043c\u0430\u043d\u0434 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0431\u043e\u043b\u0435\u0435 10 \u0447\u0435\u043b\u043e\u0432\u0435\u043a",
                        }),
                        (0, i.jsx)("li", {
                          className: "mb-2.5",
                          children:
                            "\u0411\u043e\u043b\u0435\u0435 6 \u043b\u0435\u0442 \u043e\u0431\u0443\u0447\u0430\u0435\u0442 JavaScript",
                        }),
                        (0, i.jsx)("li", {
                          className: "mb-2.5",
                          children:
                            "\u041e\u043f\u044b\u0442 \u043a\u043e\u043c\u043c\u0435\u0440\u0447\u0435\u0441\u043a\u043e\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0431\u043e\u043b\u0435\u0435 8 \u043b\u0435\u0442",
                        }),
                        (0, i.jsx)("li", {
                          className: "mb-2.5",
                          children:
                            "24 000 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u043e\u0432 \u043e\u043d\u043b\u0430\u0439\u043d",
                        }),
                        (0, i.jsx)("li", {
                          className: "mb-0",
                          children:
                            "\u0410\u0432\u0442\u043e\u0440 YouTube \u043a\u0430\u043d\u0430\u043b\u0430 \u0431\u043e\u043b\u0435\u0435 \u0447\u0435\u043c \u0441 287 000 \u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0430\u043c\u0438",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        };
    },
    96178: function (e, t, s) {
      "use strict";
      s.d(t, {
        C: function () {
          return n;
        },
      });
      var i = s(85893),
        r = (s(67294), s(25675)),
        a = s.n(r),
        n = function (e) {
          var t = e.includes;
          return (0, i.jsxs)("section", {
            className: "container flex flex-col items-center py-[60px]",
            children: [
              (0, i.jsx)("h2", {
                className:
                  "mb-10 text-center text-4xl font-bold leading-[1.3] sm:mb-20 sm:text-[54px]",
                children: t.title,
              }),
              (0, i.jsx)("ul", {
                className:
                  "grid grid-cols-1 gap-y-[10px] gap-x-[30px] md:grid-cols-2 lg:grid-cols-3",
                children: t.list.map(function (e) {
                  return (0,
                  i.jsxs)("li", { className: "flex flex-col py-5 px-0 sm:px-6", children: [(0, i.jsxs)("div", { className: "mb-3 flex items-center text-2xl font-semibold", children: [(0, i.jsx)("div", { className: "mr-3 h-10", children: (0, i.jsx)(a(), { src: "/img/icons/icon-".concat(e.icon, ".svg"), width: 40, height: 40, alt: "icon" }) }), (0, i.jsx)("h3", { children: e.title })] }), (0, i.jsx)("p", { className: "text-base", children: e.content })] }, e.id);
                }),
              }),
            ],
          });
        };
    },
    56659: function (e, t, s) {
      "use strict";
      s.d(t, {
        u: function () {
          return o;
        },
      });
      var i = s(85893),
        r = s(67294),
        a = s(41414),
        n = s(89842),
        l = s(79797),
        c = s(53459),
        x = s.n(c),
        o = function (e) {
          var t = e.program,
            s = e.title,
            c = e.colorTheme,
            o = e.link,
            d = (0, r.useState)(!1),
            m = d[0],
            p = d[1];
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("div", {
                className: x()[c],
                children: (0, i.jsx)("section", {
                  className: x().section,
                  children: (0, i.jsxs)("div", {
                    className:
                      "container relative z-10 flex flex-col items-center py-[60px]",
                    children: [
                      (0, i.jsx)("h2", {
                        className:
                          "mb-14 text-center text-4xl font-bold leading-[1.3] text-white sm:mb-20 sm:text-[54px]",
                        children: s,
                      }),
                      (0, i.jsx)("ul", {
                        className: "flex w-full max-w-[1230px] flex-col",
                        children: t.map(function (e, t) {
                          return (0, i.jsxs)(
                            "li",
                            {
                              className:
                                "mb-[10px] flex min-h-[240px] flex-col rounded-xl bg-white bg-opacity-[0.12] py-10 px-5 font-['Montserrat'] text-white last-of-type:mb-0 sm:px-12 lg:flex-row",
                              children: [
                                (0, i.jsxs)("div", {
                                  className: x().itemCol,
                                  children: [
                                    (0, i.jsxs)("p", {
                                      className:
                                        "mb-4 text-sm font-semibold uppercase",
                                      children: [
                                        "\u041c\u043e\u0434\u0443\u043b\u044c ",
                                        t + 1,
                                      ],
                                    }),
                                    (0, i.jsx)("h3", {
                                      className:
                                        "text-[22px] font-semibold leading-[1]",
                                      children: e.title,
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)("div", {
                                  className: x().itemCol,
                                  children: [
                                    (0, i.jsx)("p", {
                                      className:
                                        "mb-4 text-sm font-semibold uppercase",
                                      children:
                                        "\u0417\u0430\u043d\u044f\u0442\u0438\u044f",
                                    }),
                                    (0, i.jsx)("ul", {
                                      className: "text-sm font-medium",
                                      children: e.programList.map(function (
                                        e,
                                        t
                                      ) {
                                        return (0, i.jsxs)(
                                          "li",
                                          {
                                            className: "mb-0.5",
                                            children: [t + 1, ". ", e],
                                          },
                                          t
                                        );
                                      }),
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)("div", {
                                  className: x().itemCol,
                                  children: [
                                    (0, i.jsx)("p", {
                                      className:
                                        "mb-4 text-sm font-semibold uppercase",
                                      children:
                                        "\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",
                                    }),
                                    (0, i.jsx)("div", {
                                      className: "text-sm",
                                      children: e.resultList.map(function (
                                        e,
                                        t
                                      ) {
                                        return (0, i.jsx)(
                                          "p",
                                          {
                                            className: "mb-6 last-of-type:mb-0",
                                            children: e,
                                          },
                                          t
                                        );
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            },
                            e.id
                          );
                        }),
                      }),
                      o
                        ? (0, i.jsxs)("div", {
                            className: "mt-10 flex flex-col items-center",
                            children: [
                              (0, i.jsx)("p", {
                                className:
                                  "mb-7 mt-0 text-center text-[20px] font-medium leading-[1.3] text-white md:text-[24px]",
                                children:
                                  "\u041f\u043e\u043b\u0443\u0447\u0438 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0443\u044e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443 \u043a\u0443\u0440\u0441\u0430",
                              }),
                              (0, i.jsx)("button", {
                                className:
                                  "flex items-center justify-center rounded-[40px] bg-white py-5 px-10 transition duration-300 hover:bg-primary2 hover:text-white focus:bg-primary2 focus:text-white",
                                onClick: function () {
                                  p(!0),
                                    (0, l.L)("junior_js_free_konsultaciya3");
                                },
                                children:
                                  "\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443",
                              }),
                            ],
                          })
                        : null,
                    ],
                  }),
                }),
              }),
              (0, i.jsx)(n.u, {
                active: m,
                setActive: p,
                children: (0, i.jsx)(a.K, {
                  widgetId: "688817&rand=gxcf",
                  scriptId: "377aa2ee129f97626afd7b1a72d0775c32414a9b",
                }),
              }),
            ],
          });
        };
      o.defaultProps = {
        title:
          "\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f",
      };
    },
    44388: function (e, t, s) {
      "use strict";
      s.d(t, {
        v: function () {
          return r;
        },
      });
      var i = s(85893),
        r = function (e) {
          var t = e.statistic;
          return (0, i.jsx)("section", {
            className: "container relative pt-[20px] pb-[60px]",
            children: (0, i.jsx)("ul", {
              className: "flex flex-wrap items-center justify-evenly",
              children: t.map(function (e, t) {
                return (0,
                i.jsxs)("li", { className: "relative my-[20px] flex items-center justify-center pl-[30px] before:absolute before:top-[50%] before:left-0 before:h-[10px] before:w-[10px] before:translate-y-[-50%] before:rounded-full before:bg-[#E0E6E9] before:content-[''] sm:m-[20px] sm:shrink-0", children: [(0, i.jsx)("span", { className: "mr-[20px] whitespace-nowrap text-6xl font-semibold text-[#FF6900] sm:text-7xl", children: e.number }), (0, i.jsx)("p", { style: { maxWidth: "".concat(e.size, "px") }, className: "w-full text-base font-normal", children: e.text })] }, t);
              }),
            }),
          });
        };
    },
    13333: function (e, t, s) {
      "use strict";
      s.d(t, {
        t: function () {
          return r;
        },
      });
      var i = s(85893),
        r = function () {
          return (0, i.jsx)("section", {
            className: "relative pt-10 pb-20 sm:py-20",
            children: (0, i.jsx)("div", {
              className: "container",
              children: (0, i.jsxs)("div", {
                className:
                  "flex min-h-[500px] flex-col items-center bg-contain bg-center bg-no-repeat lg:min-h-[750px]",
                style: { backgroundImage: "url(/img/bg/bg-map-circles.png)" },
                children: [
                  (0, i.jsx)("h2", {
                    className:
                      "mt-0 mb-10 pt-12 text-center text-[36px] font-bold leading-[1.3] sm:text-[54px] md:mb-20 lg:mb-24",
                    children:
                      "\u041f\u043e\u0447\u0435\u043c\u0443 \u043c\u044b \u044d\u0442\u0438\u043c \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u043c\u0441\u044f",
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "mb-4 flex w-auto max-w-[740px] flex-col items-center rounded-xl bg-[#232627] px-5 py-6",
                    children: (0, i.jsx)("p", {
                      className:
                        "mt-0 text-center text-base text-white sm:text-left",
                      children:
                        "\u0414\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c, \u0447\u0442\u043e \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u0432 IT \u2014 \u0440\u0435\u0430\u043b\u044c\u043d\u043e \u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e",
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "mb-4 flex w-auto max-w-[740px] flex-col items-center rounded-xl bg-[#232627] px-5 py-6",
                    children: (0, i.jsx)("p", {
                      className:
                        "mt-0 text-center text-base text-white sm:text-left",
                      children:
                        "\u041e\u0431\u0443\u0447\u0430\u0435\u043c \u043d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435, \u043f\u043e \u0441\u0430\u043c\u043e\u0439 \u043d\u043e\u0432\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u0438 \xab\u0431\u0435\u0437 \u0432\u043e\u0434\u044b\xbb",
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "mb-4 flex w-auto max-w-[740px] flex-col items-center rounded-xl bg-[#232627] px-5 py-6",
                    children: (0, i.jsx)("p", {
                      className:
                        "mt-0 text-center text-base text-white sm:text-left",
                      children:
                        "\u0414\u0430\u0435\u043c \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438, \u043d\u0430\u0434 \u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u0432 IT-\u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f\u0445 \u043f\u0440\u044f\u043c\u043e \u0441\u0435\u0439\u0447\u0430\u0441",
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "mb-4 flex w-auto max-w-[740px] flex-col items-center rounded-xl bg-[#232627] px-5 py-6",
                    children: (0, i.jsx)("p", {
                      className:
                        "mt-0 text-center text-base text-white sm:text-left",
                      children:
                        "\u041f\u043e\u043c\u043e\u0433\u0430\u0435\u043c \u043d\u0430\u0439\u0442\u0438 \u0440\u0430\u0431\u043e\u0442\u0443, \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0436\u0438\u0437\u043d\u0438 \u043b\u0443\u0447\u0448\u0435 \u0438 \u043d\u0430\u0447\u0430\u0442\u044c \u043a\u0430\u0440\u044c\u0435\u0440\u0443 \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435",
                    }),
                  }),
                ],
              }),
            }),
          });
        };
    },
    82711: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return G;
          },
        });
      var i = s(85893),
        r = s(67294),
        a = s(9008),
        n = s.n(a),
        l = s(25675),
        c = s.n(l),
        x = s(5951),
        o = s.n(x),
        d = s(41414),
        m = s(89842),
        p = s(56546),
        h = s(79797),
        u = {
          src: "/_next/static/media/icon-html.66cf7875.svg",
          height: 40,
          width: 40,
        },
        f = function () {
          var e = (0, r.useState)(!1),
            t = e[0],
            s = e[1];
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)("section", {
                className: o().section,
                children: [
                  (0, i.jsx)("div", {
                    className: o().top,
                    children: (0, i.jsxs)("div", {
                      className: o().wrapper,
                      children: [
                        (0, i.jsxs)("div", {
                          className: o().promo,
                          children: [
                            (0, i.jsx)("h2", {
                              className: o().title,
                              children:
                                "HTML&CSS \u2014 \u043f\u0435\u0440\u0432\u044b\u0439 \u0448\u0430\u0433 \u0434\u043b\u044f \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0449\u0438\u0445 \u0432 IT",
                            }),
                            (0, i.jsx)("p", {
                              className: o().subtitle,
                              children:
                                "\u0418\u0437\u0443\u0447\u0438\u0442\u0435 \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 Frontend-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438, \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u044e\u0449\u0438\u0435 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0437\u043d\u0430\u043d\u0438\u0439",
                            }),
                            (0, i.jsx)("p", {
                              className: o().text,
                              children:
                                "\u041f\u0440\u043e\u0439\u0434\u0438\u0442\u0435 \u043c\u043e\u0434\u0443\u043b\u044c HTML & CSS \u0437\u0430 2 \u043d\u0435\u0434\u0435\u043b\u0438 \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0434\u043e\u0441\u0442\u0443\u043f \u043d\u0430\u0432\u0441\u0435\u0433\u0434\u0430",
                            }),
                            (0, i.jsx)("div", {
                              className: o().btnContainer,
                              children: (0, i.jsx)("button", {
                                id: "35",
                                className: o().btnPrimary,
                                onClick: function () {
                                  s(!0), (0, h.L)("html_css_reg1");
                                },
                                children:
                                  "\u041f\u0440\u0438\u0441\u0442\u0443\u043f\u0438\u0442\u044c \u043a \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044e",
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: o().video,
                          children: (0, i.jsx)("video", {
                            autoPlay: !0,
                            muted: !0,
                            loop: !0,
                            src: "/img/content/html-css/html-page.mp4",
                            onLoadedData: function () {
                              return p.ScrollTrigger.refresh();
                            },
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className: o().circles,
                          children: [
                            (0, i.jsx)("div", { className: o().circle }),
                            (0, i.jsx)("div", { className: o().circle }),
                            (0, i.jsx)("div", { className: o().circle }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: o().bottom,
                    children: (0, i.jsxs)("div", {
                      className: o().cloud,
                      children: [
                        (0, i.jsx)("div", {
                          className: o().cloudIcon,
                          children: (0, i.jsx)(c(), {
                            src: u,
                            alt: "html-icon",
                          }),
                        }),
                        (0, i.jsxs)("p", {
                          className: o().cloudText,
                          children: [
                            "\u0412 \u044d\u0442\u043e\u043c \u043c\u043e\u0434\u0443\u043b\u0435 ",
                            (0, i.jsx)("span", {
                              className: o().primaryText,
                              children:
                                "\u0432\u044b\u0441\u0442\u0440\u043e\u0438\u0442\u0435 \u0444\u0443\u043d\u0434\u0430\u043c\u0435\u043d\u0442",
                            }),
                            " \u0434\u043b\u044f \u0441\u0442\u0430\u0440\u0442\u0430 ",
                            (0, i.jsx)("span", {
                              className: o().primaryText,
                              children:
                                "\u0432\xa0\u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435",
                            }),
                            ". \u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u0434\u043b\u044f \u0442\u0435\u0445, \u043a\u0442\u043e \u0445\u043e\u0447\u0435\u0442 ",
                            (0, i.jsx)("span", {
                              className: o().grayText,
                              children:
                                "\u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0441\u0435\u0431\u044f \u0432 IT",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, i.jsx)(m.u, {
                active: t,
                setActive: s,
                children: (0, i.jsx)(d.K, {
                  widgetId: "683007&rand=jsdf",
                  scriptId: "054bb4e7bbe8fbe26097c43becc6404fa4aca2af",
                }),
              }),
            ],
          });
        },
        j = s(44388),
        b = s(16502),
        _ = s.n(b),
        g = {
          src: "/_next/static/media/bg-2-man.edfc5d91.png",
          height: 1300,
          width: 1858,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAARVBMVEWihYWPhY+qra/Wx7+2qqv+///GyMr6/v60nZLWxMDUxbyShoT09PShjJG/qqF6bGrs7u7QrqPGvLnV1NPXx8eRiYi8koKW1OlDAAAADnRSTlP9/f7L/sf+x8z9yfz//p/E29wAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAxSURBVAiZBcGHAQAgCAOworhBcf5/qglS9inkGiB9ivVlYEVxjSIUetzjiDJI9rj2ASEXAZfR6KgqAAAAAElFTkSuQmCC",
        },
        N = function () {
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)("section", {
              className: _().section,
              children: (0, i.jsxs)("div", {
                className: _().wrapper,
                children: [
                  (0, i.jsx)("h2", {
                    className: _().title,
                    children:
                      "\u042d\u0442\u043e\u0442 \u043c\u043e\u0434\u0443\u043b\u044c \u043f\u043e\u0434\u043e\u0439\u0434\u0435\u0442",
                  }),
                  (0, i.jsxs)("div", {
                    className: _().content,
                    children: [
                      (0, i.jsx)("div", {
                        className: _().picture,
                        children: (0, i.jsx)(c(), {
                          src: g,
                          alt: "\u0412\u0441\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0441\u044f!",
                          onLoad: function () {
                            return p.ScrollTrigger.refresh();
                          },
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className: _().cloud,
                        children: [
                          (0, i.jsx)("h3", {
                            className: _().cloudTitle,
                            children:
                              "\u0418\u0449\u0435\u0442\u0435 \u0441\u0435\u0431\u044f",
                          }),
                          (0, i.jsx)("p", {
                            className: _().cloudText,
                            children:
                              "\u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0441\u0435\u0431\u044f \u0432 \u0440\u043e\u043b\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430 \u0438 \u043f\u043e\u043d\u044f\u0442\u044c \u0432\u0430\u0448\u0435 \u044d\u0442\u043e \u0438\u043b\u0438 \u043d\u0435\u0442. \u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u043a\u0430\u0436\u0435\u0442, \u0447\u0442\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0449\u0435, \u0447\u0435\u043c \u043a\u0430\u0436\u0435\u0442\u0441\u044f.",
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: _().cloud,
                        children: [
                          (0, i.jsx)("h3", {
                            className: _().cloudTitle,
                            children:
                              "\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u043b\u0438\u0441\u044c",
                          }),
                          (0, i.jsx)("p", {
                            className: _().cloudText,
                            children:
                              "\u0415\u0441\u043b\u0438 \u0432\u044b \u0440\u0435\u0448\u0438\u043b\u0438 \u0441\u0442\u0430\u0442\u044c \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u043c, \u0438 \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u044b \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 \u0431\u0435\u0437 \u043b\u0438\u0448\u043d\u0435\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438. \u0421\u0434\u0435\u043b\u0430\u0435\u0442\u0435 \u043f\u0435\u0440\u0432\u044b\u0439 \u0448\u0430\u0433 \u043a \u043a\u0430\u0440\u044c\u0435\u0440\u0435 \u0432\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        y = s(96178),
        v = s(56659),
        w = s(41625),
        C = s.n(w),
        k = function () {
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)("section", {
              className: C().section,
              children: (0, i.jsx)("div", {
                className: C().wrapper,
                children: (0, i.jsxs)("div", {
                  className: C().content,
                  children: [
                    (0, i.jsx)("h2", {
                      className: C().title,
                      children:
                        "\u0422\u0435\u043e\u0440\u0438\u044f \u0432\u0430\u0436\u043d\u0430, \u043d\u043e \u0432\u0441\u0435 \u043d\u0430\u0432\u044b\u043a\u0438 \u043f\u043e\u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435",
                    }),
                    (0, i.jsxs)("div", {
                      className: C().chart,
                      children: [
                        (0, i.jsxs)("div", {
                          className: C().percent20,
                          children: [
                            (0, i.jsx)("span", {
                              className: C().percent,
                              children: "20%",
                            }),
                            (0, i.jsx)("div", { className: C().line }),
                            (0, i.jsx)("span", {
                              className: C().caption,
                              children: "\u0422\u0435\u043e\u0440\u0438\u044f",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: C().percent80,
                          children: [
                            (0, i.jsx)("span", {
                              className: C().percent,
                              children: "80%",
                            }),
                            (0, i.jsx)("div", { className: C().line }),
                            (0, i.jsx)("span", {
                              className: C().caption,
                              children:
                                "\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: C().description,
                      children: [
                        (0, i.jsxs)("p", {
                          children: [
                            (0, i.jsx)("span", {
                              className: C().textPrimary,
                              children:
                                "20% \u0442\u0435\u043e\u0440\u0438\u0438 \u0438 80% \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438",
                            }),
                            " \u2014 \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b, \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u043f\u043e \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0443 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0445 \u0432\u0438\u0434\u0435\u043e, \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0435\u0433\u043e \u0442\u0443\u0442 \u0436\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435.",
                          ],
                        }),
                        (0, i.jsxs)("p", {
                          children: [
                            "\u0412 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u043a\u0443\u0440\u0441\u0430",
                            " ",
                            (0, i.jsx)("span", {
                              className: C().textPrimary,
                              children:
                                "\u0432\u044b \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0435 \u0441\u0432\u043e\u0439 \u0433\u043e\u0442\u043e\u0432\u044b\u0439 \u0441\u0430\u0439\u0442",
                            }),
                            " \u0438 \u043d\u0430 \u0432\u044b\u0445\u043e\u0434\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0435 \u043d\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u043d\u0430\u0431\u043e\u0440 \u0437\u043d\u0430\u043d\u0438\u0439, \u0430",
                            " ",
                            (0, i.jsx)("span", {
                              className: C().textPrimary,
                              children:
                                "\u043b\u0438\u0447\u043d\u044b\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u043e\u043f\u044b\u0442",
                            }),
                            ".",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        A = s(14492),
        T = s.n(A),
        F = function () {
          var e = (0, r.useState)(!1),
            t = e[0],
            s = e[1];
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)("section", {
                className: T().section,
                children: [
                  (0, i.jsx)("h2", {
                    className: T().title,
                    children:
                      "\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0441\u0435\u0439\u0447\u0430\u0441",
                  }),
                  (0, i.jsxs)("ul", {
                    className: T().list,
                    children: [
                      (0, i.jsxs)("li", {
                        className: T().item,
                        children: [
                          (0, i.jsxs)("div", {
                            className: T().itemHeader,
                            children: [
                              (0, i.jsxs)("div", {
                                className: T().itemLevel,
                                children: [
                                  (0, i.jsx)("span", {
                                    className: T().levelActive,
                                  }),
                                  (0, i.jsx)("span", {
                                    className: T().levelActive,
                                  }),
                                  (0, i.jsx)("span", {
                                    className: T().levelActive,
                                  }),
                                ],
                              }),
                              (0, i.jsx)("h3", {
                                className: T().itemTitle,
                                children:
                                  "\u041e\u0441\u043d\u043e\u0432\u044b HTML&CSS",
                              }),
                            ],
                          }),
                          (0, i.jsx)("p", {
                            className: T().itemSubtitle,
                            children:
                              "\u0421\u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u043f\u0435\u0440\u0432\u044b\u0439 \u0448\u0430\u0433 \u043a \u043a\u0430\u0440\u044c\u0435\u0440\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430",
                          }),
                          (0, i.jsxs)("ul", {
                            className: T().itemList,
                            children: [
                              (0, i.jsx)("li", {
                                children:
                                  "\u0427\u0435\u0442\u043a\u0438\u0435 \u0434\u0435\u0434\u043b\u0430\u0439\u043d\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u0442\u0438\u043c\u0443\u043b\u0438\u0440\u0443\u044e\u0442 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442",
                              }),
                              (0, i.jsx)("li", {
                                children:
                                  "\u0413\u043e\u0442\u043e\u0432\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c",
                              }),
                              (0, i.jsx)("li", {
                                children:
                                  "\u0417\u0430 \u043d\u0435\u0434\u0435\u043b\u044e \u043e\u0441\u0432\u043e\u0438\u0442\u0435 HTML \u0438 CSS",
                              }),
                              (0, i.jsx)("li", {
                                children:
                                  "\u041f\u043e\u0439\u043c\u0435\u0442\u0435 \u0432\u0441\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u0448\u0430\u0433\u0438 \u0434\u043b\u044f \u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430",
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className: T().itemFooter,
                            children: (0, i.jsx)("button", {
                              id: "37",
                              className: T().itemButton,
                              onClick: function () {
                                s(!0), (0, h.L)("html_css_reg2");
                              },
                              children:
                                "\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c",
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsx)("li", {
                        className: T().uniq,
                        children: (0, i.jsxs)("div", {
                          className: T().uniqContent,
                          children: [
                            (0, i.jsx)("h3", {
                              className: T().uniqTitle,
                              children:
                                "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c",
                            }),
                            (0, i.jsxs)("div", {
                              className: T().uniqCloud,
                              children: [
                                (0, i.jsx)("p", {
                                  className: T().uniqSquares,
                                  children:
                                    "2 \u043d\u0435\u0434\u0435\u043b\u0438",
                                }),
                                (0, i.jsx)("p", {
                                  className: T().uniqSubtitle,
                                  children:
                                    "\u041f\u0440\u043e\u0445\u043e\u0434\u0438\u0442\u0435 \u043c\u043e\u0434\u0443\u043b\u044c \u0437\u0430 2 \u043d\u0435\u0434\u0435\u043b\u0438 \u2014 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0435 \u0434\u043e\u0441\u0442\u0443\u043f \u043a\u043e \u0432\u0441\u0435\u043c \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430\u043c \u043d\u0430\u0432\u0441\u0435\u0433\u0434\u0430",
                                }),
                              ],
                            }),
                            (0, i.jsxs)("p", {
                              className: T().uniqDescription,
                              children: [
                                (0, i.jsx)("span", {
                                  className: T().textPrimary,
                                  children:
                                    "\u041f\u043e\u0447\u0435\u043c\u0443 \u043d\u0435 \u0434\u0430\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043d\u0430\u0432\u0441\u0435\u0433\u0434\u0430?",
                                }),
                                " \u2014 \u041d\u0430\u043c \u0432\u0430\u0436\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u0432\u044b ",
                                (0, i.jsx)("span", {
                                  className: T().textGray,
                                  children:
                                    "\u043d\u0435\xa0\u0437\u0430\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u043b\u0438 \u0443\u0447\u0435\u0431\u0443",
                                }),
                                " ",
                                "\u0432 \u0434\u043e\u043b\u0433\u0438\u0439 \u044f\u0449\u0438\u043a \u0438 \u0432\u0441\u0435 \u0436\u0435",
                                " ",
                                (0, i.jsx)("span", {
                                  className: T().textGray,
                                  children:
                                    "\u043e\u0431\u0443\u0447\u0438\u043b\u0438\u0441\u044c \u0436\u0435\u043b\u0430\u043d\u043d\u043e\u0439 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)(m.u, {
                active: t,
                setActive: s,
                children: (0, i.jsx)(d.K, {
                  widgetId: "683007&rand=zxcv",
                  scriptId: "054bb4e7bbe8fbe26097c43becc6404fa4aca2af",
                }),
              }),
            ],
          });
        },
        P = s(33059),
        S = s(13333),
        E = s(89521),
        B = s(61416),
        D = {
          src: "/_next/static/media/icon-lock.819ef4ae.svg",
          height: 56,
          width: 56,
        };
      E.gsap.registerPlugin(p.ScrollTrigger);
      var L = function () {
          var e = (0, r.useRef)(),
            t = (0, r.useRef)(null),
            s = (0, r.useCallback)(function () {
              var s = E.gsap.timeline();
              s.to("._scene-code-2", { display: "none", duration: 0 }),
                s.to("._scene-navigation-2", { display: "none", duration: 0 }),
                s.fromTo(
                  "._scene-cloud-1",
                  { y: 50, opacity: 0 },
                  { y: 0, opacity: 1 }
                ),
                s.fromTo(
                  "._scene-code-1",
                  { opacity: 1 },
                  { opacity: 1, duration: 2 }
                ),
                s.fromTo(
                  "._scene-cloud-1",
                  { y: 0, opacity: 1 },
                  { y: -50, opacity: 0 }
                ),
                s.fromTo("._scene-code-1", { opacity: 1 }, { opacity: 0 }),
                s.to("._scene-navigation-1", { display: "none", duration: 0 }),
                s.to("._scene-navigation-2", { display: "flex", duration: 0 }),
                s.to("._scene-code-1", { display: "none", duration: 0 }),
                s.to("._scene-code-2", { display: "flex", duration: 0 }),
                s.fromTo("._scene-code-2", { opacity: 0 }, { opacity: 1 }),
                s.fromTo(
                  "._scene-cloud-2",
                  { y: 50, opacity: 0 },
                  { y: 0, opacity: 1 }
                ),
                s.fromTo(
                  "._scene-code-2",
                  { opacity: 1 },
                  { opacity: 1, duration: 2 }
                ),
                s.fromTo(
                  "._scene-cloud-2",
                  { y: 0, opacity: 1 },
                  { y: -50, opacity: 0 }
                ),
                s.fromTo(
                  "._scene-final",
                  { opacity: 0 },
                  { opacity: 1, duration: 2 }
                ),
                s.fromTo(
                  "._scene-final-cloud",
                  { y: 50, opacity: 0 },
                  { y: 0, opacity: 1 }
                ),
                s.fromTo(
                  "._scene-final",
                  { opacity: 1 },
                  { opacity: 1, duration: 2 }
                ),
                p.ScrollTrigger.create({
                  trigger: e.current,
                  start: "top top",
                  end: "bottom bottom",
                  animation: s,
                  pin: t.current,
                  scrub: !0,
                });
            }, []);
          return (
            (0, r.useEffect)(
              function () {
                E.gsap.registerPlugin(p.ScrollTrigger), s();
              },
              [s]
            ),
            (0, i.jsx)("div", {
              ref: e,
              className: "_pin h-[600vh]",
              children: (0, i.jsx)(B.O, {
                reference: t,
                children: (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("h2", {
                      className:
                        "m-0 mb-2 max-w-[860px] px-5 pt-[60px] text-center text-2xl font-bold leading-[1.3] transition-all duration-500 dark:text-white sm:text-[54px] md:mb-[30px]",
                      children:
                        "\u041d\u0430\u0447\u0438\u043d\u0430\u0442\u044c \u043d\u0443\u0436\u043d\u043e \u0441 \u043e\u0441\u043d\u043e\u0432!",
                    }),
                    (0, i.jsxs)("p", {
                      className:
                        "mb-5 max-w-[860px] px-5 text-center text-sm leading-[1.5] transition-all duration-500 dark:text-white sm:text-[24px] md:mb-16",
                      children: [
                        "\u0427\u0442\u043e\u0431\u044b ",
                        (0, i.jsx)("span", {
                          className: "text-primary4",
                          children:
                            "\u043d\u0430\u0443\u0447\u0438\u0442\u044c\u0441\u044f \u043f\u0438\u0441\u0430\u0442\u044c",
                        }),
                        " \u0441\u043b\u043e\u0432\u0430, \u043d\u0443\u0436\u043d\u043e",
                        " ",
                        (0, i.jsx)("span", {
                          className: "text-primary4",
                          children:
                            "\u0432\u044b\u0443\u0447\u0438\u0442\u044c \u0431\u0443\u043a\u0432\u0430\u0440\u044c",
                        }),
                        ". \u0410 \u0434\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430",
                        " ",
                        (0, i.jsx)("span", {
                          className: "text-primary4",
                          children:
                            "\u043a\u0430\u0440\u044c\u0435\u0440\u044b Frontend",
                        }),
                        "-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430 \u043d\u0443\u0436\u043d\u043e \u0438\u0437\u0443\u0447\u0438\u0442\u044c HTML&CSS.",
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className:
                        "relative flex w-full items-center justify-center px-2 pt-5 lg:px-60",
                      children: [
                        (0, i.jsxs)("div", {
                          className:
                            "_scene-final absolute left-0 top-0 z-[10] flex h-full w-full justify-center pt-20 backdrop-blur-sm md:items-center md:pt-0",
                          children: [
                            (0, i.jsx)("div", {
                              className: "h-[56px] w-[56px]",
                              children: (0, i.jsx)(c(), {
                                src: D,
                                alt: "\u041d\u0430\u0447\u0438\u043d\u0430\u0442\u044c \u043d\u0443\u0436\u043d\u043e \u0441 \u043e\u0441\u043d\u043e\u0432!",
                              }),
                            }),
                            (0, i.jsx)("p", {
                              className:
                                "_scene-final-cloud absolute left-3 bottom-28 w-[calc(100%_-_24px)] max-w-[533px] rounded-2xl bg-primary4 py-4 pr-4 pl-14 text-base text-white before:absolute before:top-1/2 before:left-4 before:h-[18px] before:w-[18px] before:-translate-y-1/2 before:bg-[url('/img/icons/icon-attention.svg')] before:bg-no-repeat before:content-[''] md:left-1/2 md:bottom-20 md:-translate-x-1/2 md:text-[20px] md:leading-[1.5]",
                              children:
                                "\u0411\u0435\u0437 \u044d\u0442\u0438\u0445 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0434\u043e\u0440\u043e\u0433\u0430 \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0443, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u0443\u044e \u0441 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043e\u043c, \u0437\u0430\u043a\u0440\u044b\u0442\u0430.",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className:
                            "relative w-full max-w-[790px] rounded-[14px] bg-white shadow-xl transition-all duration-500 dark:bg-[#282D32] md:rounded-b-none",
                          children: [
                            (0, i.jsxs)("div", {
                              className:
                                "flex items-center border-b border-[#E6E9EC] py-3 px-5 transition-all duration-500 dark:border-[#21262B]",
                              children: [
                                (0, i.jsx)("span", {
                                  className:
                                    "mr-1 h-3 w-3 rounded-full bg-[#E6E9EC] transition-all duration-500 dark:bg-[#3A3F45]",
                                }),
                                (0, i.jsx)("span", {
                                  className:
                                    "mr-1 h-3 w-3 rounded-full bg-[#E6E9EC] transition-all duration-500 dark:bg-[#3A3F45]",
                                }),
                                (0, i.jsx)("span", {
                                  className:
                                    "mr-1 h-3 w-3 rounded-full bg-[#E6E9EC] transition-all duration-500 dark:bg-[#3A3F45]",
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className:
                                "relative flex min-h-[420px] md:min-h-[540px]",
                              children: [
                                (0, i.jsxs)("div", {
                                  className:
                                    "_scene-navigation-1 flex w-[15%] flex-col rounded-bl-[14px] bg-[#EEF1F5] text-sm transition-all duration-500 dark:bg-[#202529] md:text-base",
                                  children: [
                                    (0, i.jsx)("span", {
                                      className:
                                        "w-full bg-[#E8EDF2] px-1 py-2 transition-all duration-500 dark:bg-[#191D21] dark:text-white md:px-3",
                                      children: "Html",
                                    }),
                                    (0, i.jsx)("span", {
                                      className:
                                        "w-full px-1 py-2 text-black opacity-[0.4] transition-all duration-500 dark:text-white md:px-3",
                                      children: "CSS",
                                    }),
                                  ],
                                }),
                                (0, i.jsxs)("div", {
                                  className:
                                    "_scene-navigation-2 flex w-[15%] flex-col rounded-bl-[14px] bg-[#EEF1F5] text-sm transition-all duration-500 dark:bg-[#202529] md:text-base",
                                  children: [
                                    (0, i.jsx)("span", {
                                      className:
                                        "w-full px-1 py-2 opacity-[0.4] transition-all duration-500 dark:text-white md:px-3",
                                      children: "Html",
                                    }),
                                    (0, i.jsx)("span", {
                                      className:
                                        "w-full bg-[#E8EDF2] px-1 py-2 text-black transition-all duration-500 dark:bg-[#191D21] dark:text-white md:px-3",
                                      children: "CSS",
                                    }),
                                  ],
                                }),
                                (0, i.jsx)("div", {
                                  className:
                                    "_scene-code-1 w-[85%] overflow-hidden p-4 sm:p-[30px]",
                                  children: (0, i.jsx)("pre", {
                                    className:
                                      "font-['DroidSans'] text-[10px] transition-all duration-500 dark:text-white sm:text-xs md:text-sm",
                                    children: (0, i.jsxs)("code", {
                                      className: "font-sans leading-[1.7]",
                                      children: [
                                        (0, i.jsxs)("p", {
                                          children: [
                                            (0, i.jsx)("span", {
                                              className:
                                                "text-[#3E62C0] transition-all duration-500 dark:text-[#9CB4F2]",
                                              children: "<!DOCTYPE",
                                            }),
                                            " ",
                                            "HTML",
                                            (0, i.jsx)("span", {
                                              className:
                                                "text-[#3E62C0] transition-all duration-500 dark:text-[#9CB4F2]",
                                              children: ">",
                                            }),
                                          ],
                                        }),
                                        (0, i.jsx)("p", {
                                          children: (0, i.jsx)("span", {
                                            className:
                                              "text-[#3E62C0] transition-all duration-500 dark:text-[#9CB4F2]",
                                            children: "<html>",
                                          }),
                                        }),
                                        (0, i.jsx)("p", {
                                          children: (0, i.jsx)("span", {
                                            className:
                                              "text-[#3E62C0] transition-all duration-500 dark:text-[#9CB4F2]",
                                            children: "<head>",
                                          }),
                                        }),
                                        (0, i.jsxs)("p", {
                                          children: [
                                            (0, i.jsx)("span", {
                                              className:
                                                "text-[#3E62C0] transition-all duration-500 dark:text-[#9CB4F2]",
                                              children: "  <title>",
                                            }),
                                            "My first styled page",
                                            (0, i.jsx)("span", {
                                              className:
                                                "text-[#3E62C0] transition-all duration-500 dark:text-[#9CB4F2]",
                                              children: "</title>",
                                            }),
                                          ],
                                        }),
                                        (0, i.jsx)("p", {
                                          children: (0, i.jsx)("span", {
                                            className:
                                              "text-[#3E62C0] transition-all duration-500 dark:text-[#9CB4F2]",
                                            children: "</head>",
                                          }),
                                        }),
                                        (0, i.jsx)("p", {
                                          children: (0, i.jsx)("span", {
                                            className:
                                              "text-[#3E62C0] transition-all duration-500 dark:text-[#9CB4F2]",
                                            children: "<body>",
                                          }),
                                        }),
                                        (0, i.jsx)("p", {
                                          children: (0, i.jsxs)("span", {
                                            className:
                                              "text-[#3E62C0] transition-all duration-500 dark:text-[#9CB4F2]",
                                            children: [
                                              "  <ul",
                                              " ",
                                              (0, i.jsx)("span", {
                                                className:
                                                  "text-[#CB486B] transition-all duration-500 dark:text-[#FF799D]",
                                                children: "class",
                                              }),
                                              '="',
                                              (0, i.jsx)("span", {
                                                className:
                                                  "text-[#39B1A3] transition-all duration-500 dark:text-[#73E0D3]",
                                                children: "navbar",
                                              }),
                                              '">',
                                            ],
                                          }),
                                        }),
                                        (0, i.jsx)("p", {
                                          children: (0, i.jsxs)("span", {
                                            className:
                                              "text-[#3E62C0] transition-all duration-500 dark:text-[#9CB4F2]",
                                            children: [
                                              "    <li><a",
                                              " ",
                                              (0, i.jsx)("span", {
                                                className:
                                                  "text-[#CB486B] transition-all duration-500 dark:text-[#FF799D]",
                                                children: "href",
                                              }),
                                              '="',
                                              (0, i.jsx)("span", {
                                                className:
                                                  "text-black transition-all duration-500 dark:text-white",
                                                children: "index.html",
                                              }),
                                              '">',
                                              (0, i.jsx)("span", {
                                                className:
                                                  "text-[#39B1A3] transition-all duration-500 dark:text-[#73E0D3]",
                                                children: "Home page",
                                              }),
                                              "</a></li>",
                                            ],
                                          }),
                                        }),
                                        (0, i.jsx)("p", {
                                          children: (0, i.jsxs)("span", {
                                            className:
                                              "text-[#3E62C0] transition-all duration-500 dark:text-[#9CB4F2]",
                                            children: [
                                              "    <li><a",
                                              " ",
                                              (0, i.jsx)("span", {
                                                className:
                                                  "text-[#CB486B] transition-all duration-500 dark:text-[#FF799D]",
                                                children: "href",
                                              }),
                                              '="',
                                              (0, i.jsx)("span", {
                                                className:
                                                  "text-black transition-all duration-500 dark:text-white",
                                                children: "about.html",
                                              }),
                                              '">',
                                              (0, i.jsx)("span", {
                                                className:
                                                  "text-[#39B1A3] transition-all duration-500 dark:text-[#73E0D3]",
                                                children: "About me",
                                              }),
                                              "</a></li>",
                                            ],
                                          }),
                                        }),
                                        (0, i.jsx)("p", {
                                          children: (0, i.jsxs)("span", {
                                            className:
                                              "text-[#3E62C0] transition-all duration-500 dark:text-[#9CB4F2]",
                                            children: [
                                              "    <li><a",
                                              " ",
                                              (0, i.jsx)("span", {
                                                className:
                                                  "text-[#CB486B] transition-all duration-500 dark:text-[#FF799D]",
                                                children: "href",
                                              }),
                                              '="',
                                              (0, i.jsx)("span", {
                                                className:
                                                  "text-black transition-all duration-500 dark:text-white",
                                                children: "projects.html",
                                              }),
                                              '">',
                                              (0, i.jsx)("span", {
                                                className:
                                                  "text-[#39B1A3] transition-all duration-500 dark:text-[#73E0D3]",
                                                children: "Projects",
                                              }),
                                              "</a></li>",
                                            ],
                                          }),
                                        }),
                                        (0, i.jsx)("p", {
                                          children: (0, i.jsxs)("span", {
                                            className:
                                              "text-[#3E62C0] transition-all duration-500 dark:text-[#9CB4F2]",
                                            children: [
                                              "    <li><a",
                                              " ",
                                              (0, i.jsx)("span", {
                                                className:
                                                  "text-[#CB486B] transition-all duration-500 dark:text-[#FF799D]",
                                                children: "href",
                                              }),
                                              '="',
                                              (0, i.jsx)("span", {
                                                className:
                                                  "text-black transition-all duration-500 dark:text-white",
                                                children: "links.html",
                                              }),
                                              '">',
                                              (0, i.jsx)("span", {
                                                className:
                                                  "text-[#39B1A3] transition-all duration-500 dark:text-[#73E0D3]",
                                                children: "Links",
                                              }),
                                              "</a></li>",
                                            ],
                                          }),
                                        }),
                                        (0, i.jsx)("p", {
                                          children: (0, i.jsx)("span", {
                                            className:
                                              "text-[#3E62C0] transition-all duration-500 dark:text-[#9CB4F2]",
                                            children: "  </ul>",
                                          }),
                                        }),
                                        (0, i.jsxs)("p", {
                                          children: [
                                            (0, i.jsx)("span", {
                                              className:
                                                "text-[#3E62C0] transition-all duration-500 dark:text-[#9CB4F2]",
                                              children: "  <h1>",
                                            }),
                                            "Hello there!",
                                            (0, i.jsx)("span", {
                                              className:
                                                "text-[#3E62C0] transition-all duration-500 dark:text-[#9CB4F2]",
                                              children: "</h1>",
                                            }),
                                          ],
                                        }),
                                        (0, i.jsxs)("p", {
                                          children: [
                                            (0, i.jsx)("span", {
                                              className:
                                                "text-[#3E62C0] transition-all duration-500 dark:text-[#9CB4F2]",
                                              children: "  <p>",
                                            }),
                                            "My name is Dmitriy and it\u2019s my first portfolio site",
                                            (0, i.jsx)("span", {
                                              className:
                                                "text-[#3E62C0] transition-all duration-500 dark:text-[#9CB4F2]",
                                              children: "</p>",
                                            }),
                                          ],
                                        }),
                                        (0, i.jsx)("p", {
                                          children: (0, i.jsx)("span", {
                                            className:
                                              "text-[#3E62C0] transition-all duration-500 dark:text-[#9CB4F2]",
                                            children: "</body>",
                                          }),
                                        }),
                                        (0, i.jsx)("p", {
                                          children: (0, i.jsx)("span", {
                                            className:
                                              "text-[#3E62C0] transition-all duration-500 dark:text-[#9CB4F2]",
                                            children: "</html>",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className:
                                    "_scene-code-2 w-[85%] overflow-hidden p-4 sm:p-[30px]",
                                  children: (0, i.jsx)("pre", {
                                    className:
                                      "font-['DroidSans'] text-[10px] transition-all duration-500 dark:text-white sm:text-xs md:text-sm",
                                    children: (0, i.jsxs)("code", {
                                      className: "font-sans leading-[1.7]",
                                      children: [
                                        (0, i.jsx)("p", { children: "body{" }),
                                        (0, i.jsxs)("p", {
                                          children: [
                                            "  background: ",
                                            (0, i.jsx)("span", {
                                              className:
                                                "text-[#CB486B] transition-all duration-500 dark:text-[#FF799D]",
                                              children: "#c0c0c0",
                                            }),
                                            "; /* \u041c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0444\u043e\u043d \u044d\u043a\u0440\u0430\u043d\u0430, \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044f \u0437\u0434\u0435\u0441\u044c */",
                                          ],
                                        }),
                                        (0, i.jsx)("p", { children: "}" }),
                                        (0, i.jsx)("br", {}),
                                        (0, i.jsx)("p", {
                                          children:
                                            "#wrapper{ /* \u041e\u0431\u043e\u043b\u043e\u0447\u043a\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0441\u0430\u0439\u0442\u0430 */",
                                        }),
                                        (0, i.jsxs)("p", {
                                          children: [
                                            "  width: ",
                                            (0, i.jsx)("span", {
                                              className:
                                                "text-[#CB486B] transition-all duration-500 dark:text-[#FF799D]",
                                              children: "900px",
                                            }),
                                            "; /* \u041c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0448\u0438\u0440\u0438\u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b */",
                                          ],
                                        }),
                                        (0, i.jsxs)("p", {
                                          children: [
                                            "  margin: ",
                                            (0, i.jsx)("span", {
                                              className:
                                                "text-[#CB486B] transition-all duration-500 dark:text-[#FF799D]",
                                              children: "0 auto",
                                            }),
                                            ";",
                                          ],
                                        }),
                                        (0, i.jsxs)("p", {
                                          children: [
                                            "  background: ",
                                            (0, i.jsx)("span", {
                                              className:
                                                "text-[#CB486B] transition-all duration-500 dark:text-[#FF799D]",
                                              children: "#f2e8c9",
                                            }),
                                            "; /* \u041c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0437\u0430\u0434\u043d\u0438\u0439 \u0444\u043e\u043d \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b */",
                                          ],
                                        }),
                                        (0, i.jsx)("p", { children: "}" }),
                                        (0, i.jsx)("br", {}),
                                        (0, i.jsx)("p", {
                                          children:
                                            "/* \u0428\u0430\u043f\u043a\u0430 \u0441\u0430\u0439\u0442\u0430 */",
                                        }),
                                        (0, i.jsx)("br", {}),
                                        (0, i.jsx)("p", {
                                          children: "#header{",
                                        }),
                                        (0, i.jsxs)("p", {
                                          children: [
                                            "  position: ",
                                            (0, i.jsx)("span", {
                                              className:
                                                "text-[#CB486B] transition-all duration-500 dark:text-[#FF799D]",
                                              children: "relative",
                                            }),
                                            ";",
                                          ],
                                        }),
                                        (0, i.jsxs)("p", {
                                          children: [
                                            "  height: ",
                                            (0, i.jsx)("span", {
                                              className:
                                                "text-[#CB486B] transition-all duration-500 dark:text-[#FF799D]",
                                              children: "250px",
                                            }),
                                            ";",
                                          ],
                                        }),
                                        (0, i.jsxs)("p", {
                                          children: [
                                            "  background-color: ",
                                            (0, i.jsx)("span", {
                                              className:
                                                "text-[#CB486B] transition-all duration-500 dark:text-[#FF799D]",
                                              children: "#ffffff",
                                            }),
                                            ";",
                                          ],
                                        }),
                                        (0, i.jsxs)("p", {
                                          children: [
                                            "  margin-bottom: ",
                                            (0, i.jsx)("span", {
                                              className:
                                                "text-[#CB486B] transition-all duration-500 dark:text-[#FF799D]",
                                              children: "5px",
                                            }),
                                            ";...",
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className:
                                "_scene-cloud-1 absolute bottom-28 top-auto right-0 left-3 -mt-2 flex w-[calc(100%_-_24px)] flex-col rounded-2xl bg-white py-5 px-6 text-sm text-black shadow-2xl transition-all duration-500 dark:bg-[#4D5258] dark:text-white sm:bottom-auto sm:top-32 sm:left-auto sm:mt-0 sm:w-[353px] sm:text-base md:-right-4 lg:-right-56",
                              children: [
                                (0, i.jsx)("span", {
                                  className: "mb-2.5",
                                  children: "HTML",
                                }),
                                (0, i.jsx)("span", {
                                  children:
                                    "\u041e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0442\u043e, \u043a\u0430\u043a \u0440\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u0442\u0441\u044f \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0441\u0430\u0439\u0442\u0430",
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className:
                                "_scene-cloud-2 absolute bottom-28 top-auto left-3 -mt-2 flex w-[calc(100%_-_24px)] flex-col rounded-2xl bg-white py-5 px-6 text-sm text-black shadow-2xl transition-all duration-500 dark:bg-[#4D5258] dark:text-white sm:bottom-auto sm:top-60 sm:mt-0 sm:w-[353px] sm:text-base md:-left-4 lg:-left-56",
                              children: [
                                (0, i.jsx)("span", {
                                  className: "mb-2.5",
                                  children: "CSS",
                                }),
                                (0, i.jsx)("span", {
                                  children:
                                    "\u0413\u043e\u0432\u043e\u0440\u0438\u0442, \u043a\u0430\u043a \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0432\u043d\u0435\u0448\u043d\u0435.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          );
        },
        M = s(41016),
        q = s(10665);
      E.gsap.registerPlugin(p.ScrollTrigger);
      var H = function () {
          var e = (0, r.useRef)(),
            t = (0, r.useRef)(null),
            s = (0, r.useCallback)(function () {
              var s = E.gsap.timeline();
              p.ScrollTrigger.saveStyles(
                "._anim-block-start, ._anim-container-1, ._anim-container-2, ._anim-container-3, ._anim-description-1, ._anim-description-2, ._anim-description-3, ._anim-step-1, ._anim-step-2, ._anim-block-1, ._anim-block-2"
              ),
                p.ScrollTrigger.matchMedia({
                  "(max-width: 1023px)": function () {
                    s.fromTo(
                      "._anim-block-start",
                      { opacity: 0 },
                      { opacity: 1 }
                    ),
                      s.fromTo("._anim-block-start", { y: 100 }, { y: 0 }),
                      s.fromTo("._anim-step-1", { opacity: 0 }, { opacity: 1 }),
                      s.fromTo(
                        "._anim-description-1",
                        { x: 100, opacity: 0 },
                        { x: 0, opacity: 1 }
                      ),
                      s.fromTo(
                        "._anim-description-1",
                        { x: 0, opacity: 1 },
                        { x: -100, opacity: 0, delay: 1 }
                      ),
                      s.fromTo(
                        "._anim-container-2",
                        { x: 0 },
                        { x: "-100%", duration: 0 }
                      ),
                      s.fromTo("._anim-step-2", { opacity: 0 }, { opacity: 1 }),
                      s.fromTo(
                        "._anim-description-2",
                        { x: 100, opacity: 0 },
                        { x: 0, opacity: 1 }
                      ),
                      s.fromTo(
                        "._anim-description-2",
                        { x: 0, opacity: 1 },
                        { x: -100, opacity: 0, delay: 1 }
                      ),
                      s.fromTo(
                        "._anim-block-1",
                        { x: 0, opacity: 1 },
                        { x: -100, opacity: 0 }
                      ),
                      s.fromTo(
                        "._anim-container-3",
                        { x: 0 },
                        { x: "-200%", duration: 0 }
                      ),
                      s.fromTo(
                        "._anim-block-2",
                        { x: 100, opacity: 0 },
                        { x: 0, opacity: 1 }
                      ),
                      s.fromTo(
                        "._anim-description-3",
                        { x: 100, opacity: 0 },
                        { x: 0, opacity: 1 }
                      ),
                      s.fromTo(
                        "._anim-description-3",
                        { x: 0, opacity: 1 },
                        { x: -100, opacity: 0, delay: 1 }
                      );
                  },
                  "(min-width: 1024px)": function () {
                    s.fromTo(
                      "._anim-block-start",
                      { opacity: 0 },
                      { opacity: 1 }
                    ),
                      s.fromTo("._anim-block-start", { y: 100 }, { y: 0 }),
                      s.fromTo(
                        "._anim-description-1",
                        { y: 10, opacity: 0 },
                        { y: 0, opacity: 1 }
                      ),
                      s.fromTo(
                        "._anim-description-1",
                        { y: 0, opacity: 1 },
                        { y: 10, opacity: 0, delay: 1 }
                      ),
                      s.fromTo(
                        "._anim-container-2",
                        { x: 0 },
                        { x: "-100%", duration: 0 }
                      ),
                      s.fromTo(
                        "._anim-description-2",
                        { y: 10, opacity: 0 },
                        { y: 0, opacity: 1 }
                      ),
                      s.fromTo(
                        "._anim-description-2",
                        { y: 0, opacity: 1 },
                        { y: 10, opacity: 0, delay: 1 }
                      ),
                      s.fromTo(
                        "._anim-container-3",
                        { x: 0 },
                        { x: "-200%", duration: 0 }
                      ),
                      s.fromTo(
                        "._anim-description-3",
                        { y: 10, opacity: 0 },
                        { y: 0, opacity: 1 }
                      ),
                      s.fromTo(
                        "._anim-description-3",
                        { y: 0, opacity: 1 },
                        { y: 10, opacity: 0, delay: 1 }
                      );
                  },
                }),
                p.ScrollTrigger.create({
                  trigger: e.current,
                  start: "top top",
                  end: "bottom bottom",
                  animation: s,
                  pin: t.current,
                  scrub: !0,
                });
            }, []);
          return (
            (0, r.useEffect)(
              function () {
                E.gsap.registerPlugin(p.ScrollTrigger), s();
              },
              [s]
            ),
            (0, i.jsx)("div", {
              ref: e,
              className: "_pin h-[500vh] overflow-x-hidden",
              children: (0, i.jsxs)("section", {
                ref: t,
                className:
                  "_anim-section relative flex h-screen w-[300%] flex-row overflow-hidden py-0 xl:py-[40px]",
                children: [
                  (0, i.jsx)("div", {
                    className:
                      "_anim-container-1 flex h-full w-full items-start justify-center md:items-center",
                    children: (0, i.jsx)("div", {
                      className:
                        "mx-auto flex h-full w-full max-w-[1860px] items-start justify-center rounded-none bg-black pt-[10vh] md:items-center md:rounded-2xl md:pt-0",
                      children: (0, i.jsxs)("div", {
                        className:
                          "_anim-block-start container flex flex-col items-center pb-[20%] pt-2 md:pt-10",
                        children: [
                          (0, i.jsx)("h2", {
                            className:
                              "mt-0 mb-14 text-center text-[28px] font-bold text-white md:mb-[80px] md:text-[54px] md:leading-[1.3]",
                            children:
                              "\u041f\u0435\u0440\u0432\u044b\u0435 \u0448\u0430\u0433\u0438 \u0431\u0443\u0434\u0443\u0449\u0435\u0433\u043e \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430",
                          }),
                          (0, i.jsxs)("div", {
                            className:
                              "flex w-full items-center justify-center md:w-auto",
                            children: [
                              (0, i.jsxs)("div", {
                                className:
                                  "_anim-block-1 relative flex flex-col items-center rounded-lg border-2 border-dashed border-[#2b3438] py-3 px-2 md:flex-row",
                                children: [
                                  (0, i.jsx)("p", {
                                    className:
                                      "absolute -top-10 left-0 text-sm uppercase text-white opacity-80",
                                    children:
                                      "\u0428\u0430\u0433 1 - 14 \u0434\u043d\u0435\u0439",
                                  }),
                                  (0, i.jsxs)("div", {
                                    className:
                                      "_anim-step-1 relative max-w-[250px] rounded-lg bg-[#3E494F] py-[18px] px-[10px] text-center text-[18px] leading-[1.3] text-white md:text-[24px] lg:text-[18px] xl:p-[18px] xl:text-[24px]",
                                    children: [
                                      (0, i.jsx)("span", {
                                        children:
                                          "\u0418\u0437\u0443\u0447\u0438\u0442\u044c \u043e\u0441\u043d\u043e\u0432\u044b HTML&CSS",
                                      }),
                                      (0, i.jsx)("div", {
                                        className:
                                          "_anim-description-1 absolute top-[298px] left-1/2 w-[278px] before:absolute before:-top-[40px] before:left-[0] before:h-[40px] before:w-px before:bg-white md:top-[210px] xl:left-[120px]",
                                        children: (0, i.jsx)("p", {
                                          className:
                                            "-translate-x-1/2 text-center text-base text-white md:text-lg lg:translate-x-0 lg:text-left",
                                          children:
                                            "\u0423\u0437\u043d\u0430\u0435\u0442\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0443\u044e \u0434\u043b\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0441\u0430\u0439\u0442\u043e\u0432 \u0431\u0430\u0437\u0443 \u0438 \u043e\u0441\u043d\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0437\u0430\u043a\u0440\u0435\u043f\u0438\u0442\u0435 \u0435\u0451",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, i.jsx)("div", {
                                    className:
                                      "mx-[5px] shrink-0 rotate-90 items-center justify-center p-[25px] opacity-0 md:rotate-0 md:p-[5px] lg:opacity-100",
                                    children: (0, i.jsx)(c(), {
                                      src: q.Z,
                                      alt: "icon-arrow",
                                    }),
                                  }),
                                  (0, i.jsx)("div", {
                                    className:
                                      "relative flex min-h-[83px] w-full max-w-[250px] items-center justify-center rounded-lg bg-[#2b3438] py-[18px] px-[10px] text-center text-[18px] leading-[1.3] text-white opacity-0 md:max-w-[230px] md:text-[24px] lg:text-[18px] lg:opacity-100 xl:min-h-min xl:p-[18px] xl:text-[24px]",
                                    children: (0, i.jsx)("span", {
                                      children:
                                        "\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0441\u0430\u0439\u0442",
                                    }),
                                  }),
                                ],
                              }),
                              (0, i.jsx)("div", {
                                className:
                                  "mx-[5px] hidden shrink-0 items-center justify-center p-[5px] lg:flex lg:p-[15px]",
                                children: (0, i.jsx)(c(), {
                                  src: q.Z,
                                  alt: "icon-arrow",
                                }),
                              }),
                              (0, i.jsxs)("div", {
                                className:
                                  "relative hidden items-center rounded-lg border-2 border-dashed border-[#2b3438] py-3 px-2 lg:flex",
                                children: [
                                  (0, i.jsx)("p", {
                                    className:
                                      "absolute -top-10 left-0 text-sm uppercase text-white opacity-80",
                                    children:
                                      "\u0428\u0430\u0433 2 - 7 \u043c\u0435\u0441\u044f\u0446\u0435\u0432",
                                  }),
                                  (0, i.jsx)("div", {
                                    className:
                                      "relative max-w-[250px] rounded-lg bg-[#2b3438] py-[18px] px-[10px] text-center text-[18px] leading-[1.3] text-white md:text-[24px] lg:text-[18px] xl:p-[18px] xl:text-[24px]",
                                    children: (0, i.jsx)("span", {
                                      children:
                                        "\u0421\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0437\u043d\u0430\u043d\u0438\u044f",
                                    }),
                                  }),
                                  (0, i.jsx)("div", {
                                    className:
                                      "mx-[5px] hidden shrink-0 items-center justify-center p-[5px] lg:flex",
                                    children: (0, i.jsx)(c(), {
                                      src: q.Z,
                                      alt: "icon-arrow",
                                    }),
                                  }),
                                  (0, i.jsx)("div", {
                                    className:
                                      "relative max-w-[250px] rounded-lg bg-[#2b3438] py-[18px] px-[10px] text-center text-[18px] leading-[1.3] text-white md:text-[24px] lg:text-[18px] xl:p-[18px] xl:text-[24px]",
                                    children: (0, i.jsx)("span", {
                                      children:
                                        "\u0411\u0440\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "_anim-container-2 flex h-full w-full items-start justify-center md:items-center",
                    children: (0, i.jsx)("div", {
                      className:
                        "mx-auto flex h-full w-full max-w-[1860px] items-start justify-center rounded-none bg-black pt-[10vh] md:items-center md:rounded-2xl md:pt-0",
                      children: (0, i.jsxs)("div", {
                        className:
                          "_anim-block-start container flex flex-col items-center pb-[20%] pt-2 md:pt-10",
                        children: [
                          (0, i.jsx)("h2", {
                            className:
                              "mt-0 mb-14 text-center text-[28px] font-bold text-white md:mb-[80px] md:text-[54px] md:leading-[1.3]",
                            children:
                              "\u041f\u0435\u0440\u0432\u044b\u0435 \u0448\u0430\u0433\u0438 \u0431\u0443\u0434\u0443\u0449\u0435\u0433\u043e \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430",
                          }),
                          (0, i.jsxs)("div", {
                            className:
                              "flex w-full items-center justify-center md:w-auto",
                            children: [
                              (0, i.jsxs)("div", {
                                className:
                                  "_anim-block-1 relative flex flex-col items-center rounded-lg border-2 border-dashed border-[#2b3438] py-3 px-2 md:flex-row",
                                children: [
                                  (0, i.jsx)("p", {
                                    className:
                                      "absolute -top-10 left-0 text-sm uppercase text-white opacity-80",
                                    children:
                                      "\u0428\u0430\u0433 1 - 14 \u0434\u043d\u0435\u0439",
                                  }),
                                  (0, i.jsx)("div", {
                                    className:
                                      "relative max-w-[250px] rounded-lg bg-[#2b3438] py-[18px] px-[10px] text-center text-[18px] leading-[1.3] text-white md:text-[24px] lg:text-[18px] xl:p-[18px] xl:text-[24px]",
                                    children: (0, i.jsx)("span", {
                                      children:
                                        "\u0418\u0437\u0443\u0447\u0438\u0442\u044c \u043e\u0441\u043d\u043e\u0432\u044b HTML&CSS",
                                    }),
                                  }),
                                  (0, i.jsx)("div", {
                                    className:
                                      "mx-[5px] shrink-0 rotate-90 items-center justify-center p-[25px] md:rotate-0 md:p-[5px]",
                                    children: (0, i.jsx)(c(), {
                                      src: q.Z,
                                      alt: "icon-arrow",
                                    }),
                                  }),
                                  (0, i.jsxs)("div", {
                                    className:
                                      "_anim-step-2 relative flex min-h-[83px] w-full max-w-[250px] items-center justify-center rounded-lg bg-[#3E494F] py-[18px] px-[10px] text-center text-[18px] leading-[1.3] text-white md:max-w-[230px] md:text-[24px] lg:text-[18px] xl:min-h-min xl:p-[18px] xl:text-[24px]",
                                    children: [
                                      (0, i.jsx)("span", {
                                        children:
                                          "\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0441\u0430\u0439\u0442",
                                      }),
                                      (0, i.jsx)("div", {
                                        className:
                                          "_anim-description-2 absolute top-[150px] left-1/2 w-[278px] before:absolute before:-top-[40px] before:left-[0] before:h-[40px] before:w-px before:bg-white md:top-[210px] xl:left-[110px]",
                                        children: (0, i.jsx)("p", {
                                          className:
                                            "-translate-x-1/2 text-center text-base text-white md:text-lg lg:translate-x-0 lg:text-left",
                                          children:
                                            "\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0432 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0435 \u0437\u043d\u0430\u043d\u0438\u044f, \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442\u0435 \u0441\u0432\u043e\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u0441\u0430\u0439\u0442",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, i.jsx)("div", {
                                className:
                                  "mx-[5px] hidden shrink-0 items-center justify-center p-[5px] lg:flex lg:p-[15px]",
                                children: (0, i.jsx)(c(), {
                                  src: q.Z,
                                  alt: "icon-arrow",
                                }),
                              }),
                              (0, i.jsxs)("div", {
                                className:
                                  "relative hidden items-center rounded-lg border-2 border-dashed border-[#2b3438] py-3 px-2 lg:flex",
                                children: [
                                  (0, i.jsx)("p", {
                                    className:
                                      "absolute -top-10 left-0 text-sm uppercase text-white opacity-80",
                                    children:
                                      "\u0428\u0430\u0433 2 - 7 \u043c\u0435\u0441\u044f\u0446\u0435\u0432",
                                  }),
                                  (0, i.jsx)("div", {
                                    className:
                                      "relative max-w-[250px] rounded-lg bg-[#2b3438] py-[18px] px-[10px] text-center text-[18px] leading-[1.3] text-white md:text-[24px] lg:text-[18px] xl:p-[18px] xl:text-[24px]",
                                    children: (0, i.jsx)("span", {
                                      children:
                                        "\u0421\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0437\u043d\u0430\u043d\u0438\u044f",
                                    }),
                                  }),
                                  (0, i.jsx)("div", {
                                    className:
                                      "mx-[5px] hidden shrink-0 items-center justify-center p-[5px] md:flex",
                                    children: (0, i.jsx)(c(), {
                                      src: q.Z,
                                      alt: "icon-arrow",
                                    }),
                                  }),
                                  (0, i.jsx)("div", {
                                    className:
                                      "relative max-w-[250px] rounded-lg bg-[#2b3438] py-[18px] px-[10px] text-center text-[18px] leading-[1.3] text-white md:text-[24px] lg:text-[18px] xl:p-[18px] xl:text-[24px]",
                                    children: (0, i.jsx)("span", {
                                      children:
                                        "\u0411\u0440\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "_anim-container-3 flex h-full w-full items-start justify-center md:items-center",
                    children: (0, i.jsx)("div", {
                      className:
                        "mx-auto flex h-full w-full max-w-[1860px] items-start justify-center rounded-none bg-black pt-[10vh] md:items-center md:rounded-2xl md:pt-0",
                      children: (0, i.jsxs)("div", {
                        className:
                          "_anim-block-start container flex flex-col items-center pb-[20%] pt-2 md:pt-10",
                        children: [
                          (0, i.jsx)("h2", {
                            className:
                              "mt-0 mb-14 text-center text-[28px] font-bold text-white md:mb-[80px] md:text-[54px] md:leading-[1.3]",
                            children:
                              "\u041f\u0435\u0440\u0432\u044b\u0435 \u0448\u0430\u0433\u0438 \u0431\u0443\u0434\u0443\u0449\u0435\u0433\u043e \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430",
                          }),
                          (0, i.jsxs)("div", {
                            className:
                              "flex w-full items-center justify-center md:w-auto",
                            children: [
                              (0, i.jsxs)("div", {
                                className:
                                  "_anim_block-2 relative hidden items-center rounded-lg border-2 border-dashed border-[#2b3438] py-3 px-2 lg:flex",
                                children: [
                                  (0, i.jsx)("p", {
                                    className:
                                      "absolute -top-10 left-0 text-sm uppercase text-white opacity-80",
                                    children:
                                      "\u0428\u0430\u0433 1 - 14 \u0434\u043d\u0435\u0439",
                                  }),
                                  (0, i.jsx)("div", {
                                    className:
                                      "relative max-w-[250px] rounded-lg bg-[#2b3438] py-[18px] px-[10px] text-center text-[18px] leading-[1.3] text-white md:text-[24px] lg:text-[18px] xl:p-[18px] xl:text-[24px]",
                                    children: (0, i.jsx)("span", {
                                      children:
                                        "\u0418\u0437\u0443\u0447\u0438\u0442\u044c \u043e\u0441\u043d\u043e\u0432\u044b HTML&CSS",
                                    }),
                                  }),
                                  (0, i.jsx)("div", {
                                    className:
                                      "mx-[5px] hidden shrink-0 items-center justify-center p-[5px] md:flex",
                                    children: (0, i.jsx)(c(), {
                                      src: q.Z,
                                      alt: "icon-arrow",
                                    }),
                                  }),
                                  (0, i.jsx)("div", {
                                    className:
                                      "relative flex min-h-[83px] w-full max-w-[250px] items-center justify-center rounded-lg bg-[#2b3438] py-[18px] px-[10px] text-center text-[18px] leading-[1.3] text-white md:max-w-[230px] md:text-[24px] lg:text-[18px] xl:min-h-min xl:p-[18px] xl:text-[24px]",
                                    children: (0, i.jsx)("span", {
                                      children:
                                        "\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0441\u0430\u0439\u0442",
                                    }),
                                  }),
                                ],
                              }),
                              (0, i.jsx)("div", {
                                className:
                                  "mx-[5px] hidden shrink-0 items-center justify-center p-[5px] lg:flex lg:p-[15px]",
                                children: (0, i.jsx)(c(), {
                                  src: q.Z,
                                  alt: "icon-arrow",
                                }),
                              }),
                              (0, i.jsxs)("div", {
                                className:
                                  "_anim-block-2 relative flex flex-col items-center rounded-lg border-2 border-dashed border-[#9088ff] py-3 px-2 md:flex-row",
                                children: [
                                  (0, i.jsx)("p", {
                                    className:
                                      "absolute -top-10 left-0 text-sm uppercase text-white opacity-80",
                                    children:
                                      "\u0428\u0430\u0433 2 - 7 \u043c\u0435\u0441\u044f\u0446\u0435\u0432",
                                  }),
                                  (0, i.jsxs)("div", {
                                    className:
                                      "relative max-w-[250px] rounded-lg bg-[#9088ff] py-[18px] px-[10px] text-center text-[18px] leading-[1.3] text-white md:text-[24px] lg:text-[18px] xl:p-[18px] xl:text-[24px]",
                                    children: [
                                      (0, i.jsx)("span", {
                                        children:
                                          "\u0421\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0437\u043d\u0430\u043d\u0438\u044f",
                                      }),
                                      (0, i.jsx)("div", {
                                        className:
                                          "_anim-description-3 absolute top-[305px] left-1/2 w-[278px] before:absolute before:-top-[45px] before:left-[0] before:h-[40px] before:w-px before:bg-white md:top-[210px] md:left-[80px] xl:left-[110px]",
                                        children: (0, i.jsxs)("div", {
                                          className:
                                            "flex -translate-x-1/2 flex-col items-center text-center text-base text-white md:translate-x-0 md:items-start md:text-left md:text-lg",
                                          children: [
                                            (0, i.jsx)("span", {
                                              className: "mb-5",
                                              children:
                                                "\u0423\u0437\u043d\u0430\u0435\u0442\u0435 \u043d\u0430 \u043a\u0443\u0440\u0441\u0435 \xab\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f \u0414\u0436\u0443\u043d\u0438\u043e\u0440 Frontend-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\xbb",
                                            }),
                                            (0, i.jsx)(M.a, {
                                              href: "/products/junior-js",
                                              children: (0, i.jsx)("a", {
                                                id: "36",
                                                className:
                                                  "flex items-center justify-center rounded-2xl bg-[#9088ff] py-2 px-4 text-[14px] leading-[1] text-white",
                                                children:
                                                  "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, i.jsx)("div", {
                                    className:
                                      "mx-[5px] shrink-0 rotate-90 items-center justify-center p-[25px] md:rotate-0 md:p-[5px]",
                                    children: (0, i.jsx)(c(), {
                                      src: q.Z,
                                      alt: "icon-arrow",
                                    }),
                                  }),
                                  (0, i.jsx)("div", {
                                    className:
                                      "relative max-w-[250px] rounded-lg bg-[#9088ff] py-[18px] px-[10px] text-center text-[18px] leading-[1.3] text-white md:text-[24px] lg:text-[18px] xl:p-[18px] xl:text-[24px]",
                                    children: (0, i.jsx)("span", {
                                      children:
                                        "\u0411\u0440\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            })
          );
        },
        R = function () {
          var e = (0, r.useRef)(null);
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)("section", {
              className: "_pin relative py-20",
              ref: e,
              children: (0, i.jsxs)("div", {
                className: "flex flex-col",
                children: [
                  (0, i.jsx)("h2", {
                    className:
                      "container mb-10 text-center text-[30px] font-semibold leading-[1.3] md:mb-20 md:text-[36px]",
                    children:
                      "\u0421\u0435\u0439\u0447\u0430\u0441 \u0443 \u0432\u0430\u0441 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u044e\u0442 \u0432\u043e\u0442 \u0442\u0430\u043a\u0438\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b:",
                  }),
                  (0, i.jsxs)("div", {
                    className: "container flex w-full flex-col items-center",
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "_line w-full py-3 text-center text-[18px] font-semibold uppercase leading-[1.3] text-primary4 md:py-7 md:text-[30px]",
                        children: (0, i.jsx)("span", {
                          children:
                            "\u0423 \u043c\u0435\u043d\u044f \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0441\u044f?",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "_line w-full py-3 text-center text-[18px] font-semibold uppercase leading-[1.3] text-primary4 md:py-7 md:text-[30px]",
                        children: (0, i.jsx)("span", {
                          children:
                            "\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 Frontend? \u0412 \u0447\u0435\u043c \u043e\u0442\u043b\u0438\u0447\u0438\u044f \u043e\u0442 Backend?",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "_line w-full py-3 text-center text-[18px] font-semibold uppercase leading-[1.3] text-primary4 md:py-7 md:text-[30px]",
                        children: (0, i.jsx)("span", {
                          children:
                            "\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438 \u043e\u0431\u0449\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u043d\u0435\u043f\u043e\u043d\u044f\u0442\u043d\u043e\u043c \u044f\u0437\u044b\u043a\u0435. \u042f \u0438\u0445 \u043d\u0435 \u043f\u043e\u043d\u0438\u043c\u0430\u044e",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "_line w-full py-3 text-center text-[18px] font-semibold uppercase leading-[1.3] text-primary4 md:py-7 md:text-[30px]",
                        children: (0, i.jsx)("span", {
                          children:
                            "\u0412 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0435 \u043c\u043d\u043e\u0433\u043e \u0441\u043b\u043e\u0436\u043d\u043e\u0433\u043e \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430. \u041a\u0410\u041a \u0432\u0441\u0435 \u044d\u0442\u043e \u0438\u0437\u0443\u0447\u0438\u0442\u044c?",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "_line w-full py-3 text-center text-[18px] font-semibold uppercase leading-[1.3] text-primary4 md:py-7 md:text-[30px]",
                        children: (0, i.jsx)("span", {
                          children:
                            "\u041a\u0430\u043a \u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0438\u0442\u044c\u0441\u044f \u0432 \u044d\u0442\u043e\u0439 \u0441\u0444\u0435\u0440\u0435?",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "_line w-full py-3 text-center text-[18px] font-semibold uppercase leading-[1.3] text-primary4 md:py-7 md:text-[30px]",
                        children: (0, i.jsx)("span", {
                          children:
                            "\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043d\u0443\u0436\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u0443\u0441\u0432\u043e\u0438\u0442\u044c \u0432\u0435\u0441\u044c \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b?",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "_line w-full py-3 text-center text-[18px] font-semibold uppercase leading-[1.3] text-primary4 md:py-7 md:text-[30px]",
                        children: (0, i.jsx)("span", {
                          children:
                            "\u041c\u043d\u0435 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e, \u043d\u043e \u044f \u043d\u0435 \u043c\u043e\u0433\u0443 \u043f\u043e\u043d\u044f\u0442\u044c, \u043c\u043e\u0451 \u043b\u0438 \u044d\u0442\u043e?",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "_line w-full py-3 text-center text-[18px] font-semibold uppercase leading-[1.3] text-primary4 md:py-7 md:text-[30px]",
                        children: (0, i.jsx)("span", {
                          children:
                            "\u042f \u0441\u043c\u043e\u0433\u0443 \u043e\u0441\u0442\u0430\u0442\u044c\u0441\u044f \u043f\u0440\u0435\u0436\u043d\u0438\u043c \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u043e\u043c?",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "_line w-full py-3 text-center text-[18px] font-semibold uppercase leading-[1.3] text-primary4 md:py-7 md:text-[30px]",
                        children: (0, i.jsx)("span", {
                          children:
                            "\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u043d\u0443\u0436\u043d\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u0447\u0442\u043e\u0431\u044b \u0441\u0442\u0430\u0442\u044c Junior-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u043c?",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        I = [
          {
            number: "32",
            text: "HD \u0432\u0438\u0434\u0435\u043e\u0443\u0440\u043e\u043a\u043e\u0432 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043a\u0443\u0440\u0441",
            size: 144,
          },
          {
            number: "3-15",
            text: "\u043c\u0438\u043d\u0443\u0442 \u0434\u043b\u044f\u0442\u0441\u044f \u0432\u0438\u0434\u0435\u043e\u0443\u0440\u043e\u043a\u0438",
            size: 144,
          },
          {
            number: "10",
            text: "\u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0445 \u0437\u0430\u0434\u0430\u043d\u0438\u0439 \u0434\u043b\u044f \u0437\u0430\u043a\u0440\u0435\u043f\u043b\u0435\u043d\u0438\u044f + \u043f\u0440\u043e\u0435\u043a\u0442",
            size: 193,
          },
        ],
        U = {
          title:
            "\u0427\u0442\u043e \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043e \u0432 \u043c\u043e\u0434\u0443\u043b\u044c HTML&CSS",
          list: [
            {
              id: 1,
              icon: "hd-primary4",
              title: "32 \u0443\u0440\u043e\u043a\u0430 \u0432 HD",
              content:
                "\u0423\u0440\u043e\u043a\u0438 \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u044b \u0432 \u0445\u043e\u0440\u043e\u0448\u0435\u043c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u0438\u0434\u0435\u043e \u0438 \u0437\u0432\u0443\u043a\u0430.",
            },
            {
              id: 2,
              icon: "time-primary4",
              title:
                "\u043e\u0442 3 \u0434\u043e 15 \u043c\u0438\u043d\u0443\u0442",
              content:
                "\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u0430, \u0447\u0442\u043e\u0431\u044b \u0434\u0430\u0432\u0430\u0442\u044c \u0441\u0430\u043c\u0443\u044e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043f\u043e\u044d\u0442\u0430\u043f\u043d\u043e",
            },
            {
              id: 3,
              icon: "code-primary4",
              title:
                "10 \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0445 \u0437\u0430\u0434\u0430\u0447",
              content:
                "\u0418\u0437\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0441\u0440\u0430\u0437\u0443 \u0437\u0430\u043a\u0440\u0435\u043f\u0438\u0442\u0435 \u043d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435 \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u0435 \u0443\u0441\u0432\u043e\u0435\u043d\u043d\u044b\u0435 \u0438\u0437 \u0443\u0440\u043e\u043a\u043e\u0432 \u0437\u043d\u0430\u043d\u0438\u044f",
            },
            {
              id: 4,
              icon: "support-primary4",
              title:
                "\u0427\u0430\u0442 \u0441 \u043a\u0443\u0440\u0430\u0442\u043e\u0440\u043e\u043c",
              content:
                "\u0413\u0434\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043e\u0442\u0432\u0435\u0442 \u043d\u0430 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u043f\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044e",
            },
            {
              id: 5,
              icon: "message-primary4",
              title:
                "\u0421\u043b\u0443\u0436\u0431\u0430 \u0437\u0430\u0431\u043e\u0442\u044b",
              content:
                "\u0412\u0441\u0435\u0433\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 \u0440\u044f\u0434\u043e\u043c \u043f\u0440\u0438 \u0432\u043e\u0437\u043d\u0438\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u0438 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u043e\u043d\u043d\u044b\u0445 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432.",
            },
            {
              id: 6,
              icon: "cloud-primary4",
              title:
                "\u041e\u043d\u043b\u0430\u0439\u043d-\u0434\u043e\u0441\u0442\u0443\u043f",
              content:
                "\u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0435 \u043e\u043d\u043b\u0430\u0439\u043d-\u0434\u043e\u0441\u0442\u0443\u043f \u043a \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0443 \u043d\u0430 2 \u043d\u0435\u0434\u0435\u043b\u0438. \u042d\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u0432\u044b \u043d\u0435 \u043e\u0442\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u043b\u0438 \u0443\u0447\u0435\u0431\u0443 \u0432 \u0434\u043e\u043b\u0433\u0438\u0439 \u044f\u0449\u0438\u043a.",
            },
          ],
        },
        Z = [
          {
            id: 1,
            title: "HTML",
            programList: [
              "\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 Web",
              "\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 HTML&CSS",
              "\u041e\u0441\u043d\u043e\u0432\u044b \u0438 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441",
              "\u0422\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0439 \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440 VSCode",
              "\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 HTML-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430",
              "\u0421\u0435\u043a\u0446\u0438\u044f Head",
              "\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0442\u0435\u043a\u0441\u0442\u043e\u043c",
              "\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0438 \u0441\u0441\u044b\u043b\u043a\u0438",
              "\u0421\u043f\u0438\u0441\u043a\u0438",
              "\u0422\u0430\u0431\u043b\u0438\u0446\u044b",
              "\u0424\u043e\u0440\u043c\u044b",
              "\u041b\u0438\u043d\u0435\u0439\u043d\u044b\u0435 \u0438 \u0431\u043b\u043e\u0447\u043d\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b",
              "\u041a\u043b\u0430\u0441\u0441\u044b, ID",
              "HTML 5 \u0421\u0435\u043c\u0430\u043d\u0442\u0438\u043a\u0430",
              "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u0441\u0430\u0439\u0442 \u043d\u0430 Github",
            ],
            resultList: [
              "\u041f\u043e\u0439\u043c\u0435\u0442\u0435, \u043a\u0430\u043a \u0443\u0441\u0442\u0440\u043e\u0435\u043d\u044b \u0432\u0435\u0431-\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438.",
              "\u0411\u0435\u0437 \u0431\u0430\u0440\u044c\u0435\u0440\u043e\u0432 \u043d\u0430\u043f\u0438\u0448\u0435\u0442\u0435 \u043f\u0435\u0440\u0432\u044b\u0439 \u043a\u043e\u0434, \u0434\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u043d\u0438\u043a\u043e\u0433\u0434\u0430 \u0435\u0433\u043e \u043d\u0435 \u043f\u0438\u0441\u0430\u043b\u0438.",
              "\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u0442\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0438 \u0443\u0432\u0438\u0434\u0438\u0442\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0441\u0432\u043e\u0435\u0439 \u0440\u0430\u0431\u043e\u0442\u044b.",
            ],
          },
          {
            id: 2,
            title: "CSS",
            programList: [
              "\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 CSS",
              "\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 CSS",
              "\u0421\u043f\u043e\u0441\u043e\u0431\u044b \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f CSS",
              "\u0421\u0435\u043b\u0435\u043a\u0442\u043e\u0440\u044b",
              "\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 DevTools",
              "\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0442\u0435\u043a\u0441\u0442\u043e\u043c",
              "\u0426\u0432\u0435\u0442\u0430",
              "\u0413\u0440\u0430\u043d\u0438\u0446\u044b \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432",
              "Box Model",
              "\u0421\u0441\u044b\u043b\u043a\u0438 \u0438 \u043f\u0441\u0435\u0432\u0434\u043e\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440\u044b",
              "\u0421\u043f\u0438\u0441\u043a\u0438 \u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b",
              "\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e display. Inline & Block & Inline-block",
              "\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e Position",
              "\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0442\u043a\u0443 \u0441 Media",
              "Deploy",
            ],
            resultList: [
              "\u041f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 CSS \u043d\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044c \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440, \u0444\u043e\u0440\u043c\u0443, \u0446\u0432\u0435\u0442 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0435 \u0432 HTML.",
              "\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043e\u0441\u043d\u043e\u0432\u044b \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0442\u043a\u0438",
            ],
          },
        ],
        V = s(94869),
        Y = function () {
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(n(), {
                children: (0, i.jsx)("title", {
                  children: "HTML & CSS | Result School",
                }),
              }),
              (0, i.jsx)("h1", {
                className: "visually-hidden",
                children: "HTML & CSS",
              }),
              (0, i.jsx)(f, {}),
              (0, i.jsx)(j.v, { statistic: I }),
              (0, i.jsx)(N, {}),
              (0, i.jsx)(H, {}),
              (0, i.jsx)(R, {}),
              (0, i.jsx)(L, {}),
              (0, i.jsx)(y.C, { includes: U }),
              (0, i.jsx)(v.u, { program: Z, colorTheme: "primary4" }),
              (0, i.jsx)(k, {}),
              (0, i.jsx)(F, {}),
              (0, i.jsx)(P.Z, {}),
              (0, i.jsx)(S.t, {}),
            ],
          });
        };
      Y.getLayout = function (e) {
        return (0, i.jsx)(V.Z, { children: e });
      };
      var G = Y;
    },
    53459: function (e) {
      e.exports = {
        primary1: "ProductProgram_primary1__VcLtt",
        section: "ProductProgram_section__Ld78N",
        primary3: "ProductProgram_primary3__Rn4s0",
        primary4: "ProductProgram_primary4__qY_VJ",
        primary5: "ProductProgram_primary5__PNCmY",
        lightgreen: "ProductProgram_lightgreen__kyqYQ",
        itemCol: "ProductProgram_itemCol__5Xn1B",
      };
    },
    16502: function (e) {
      e.exports = {
        section: "CourseForWhom_section__IZyj8",
        wrapper: "CourseForWhom_wrapper__a_pUq",
        title: "CourseForWhom_title__VrKLM",
        content: "CourseForWhom_content__FePJQ",
        picture: "CourseForWhom_picture__R2Roh",
        cloud: "CourseForWhom_cloud__61zbV",
        cloudTitle: "CourseForWhom_cloudTitle__GcokM",
        cloudText: "CourseForWhom_cloudText___YNU9",
      };
    },
    41625: function (e) {
      e.exports = {
        section: "CoursePercent_section__xBJIT",
        wrapper: "CoursePercent_wrapper__hXtch",
        content: "CoursePercent_content__AB9BG",
        title: "CoursePercent_title__Fs3xe",
        chart: "CoursePercent_chart__SD_op",
        percent20: "CoursePercent_percent20__2E51z",
        percent: "CoursePercent_percent__5Y5Ug",
        line: "CoursePercent_line__T57VY",
        caption: "CoursePercent_caption__KSRQM",
        percent80: "CoursePercent_percent80__c6_WW",
        description: "CoursePercent_description__IfP0N",
        textPrimary: "CoursePercent_textPrimary___3TM2",
      };
    },
    14492: function (e) {
      e.exports = {
        section: "CoursePrices_section__VZDHV",
        title: "CoursePrices_title__8AM85",
        list: "CoursePrices_list__EOrmY",
        item: "CoursePrices_item__rFAbi",
        itemHeader: "CoursePrices_itemHeader__eKhwd",
        itemLevel: "CoursePrices_itemLevel__9jIF6",
        levelActive: "CoursePrices_levelActive__eKmPd",
        itemTitle: "CoursePrices_itemTitle__kCggp",
        itemSubtitle: "CoursePrices_itemSubtitle__0TM_p",
        itemList: "CoursePrices_itemList__c0B84",
        itemFooter: "CoursePrices_itemFooter__CVobX",
        itemPrice: "CoursePrices_itemPrice__UjV4P",
        price: "CoursePrices_price__B04zv",
        through: "CoursePrices_through__e3uhQ",
        itemButton: "CoursePrices_itemButton__DObrj",
        uniq: "CoursePrices_uniq__cO13H",
        uniqContent: "CoursePrices_uniqContent__esoz8",
        uniqTitle: "CoursePrices_uniqTitle__BHGFT",
        uniqCloud: "CoursePrices_uniqCloud__pkAOx",
        uniqSquares: "CoursePrices_uniqSquares__SPi4G",
        uniqSubtitle: "CoursePrices_uniqSubtitle__DJ5_C",
        uniqDescription: "CoursePrices_uniqDescription__mbNsw",
        textPrimary: "CoursePrices_textPrimary__zzHGb",
        textGray: "CoursePrices_textGray__HfK7V",
      };
    },
    5951: function (e) {
      e.exports = {
        section: "CoursePromo_section__xoBd8",
        top: "CoursePromo_top__nSb_p",
        wrapper: "CoursePromo_wrapper__Qw6hq",
        video: "CoursePromo_video__BfpTC",
        circles: "CoursePromo_circles__Vc1A1",
        circle: "CoursePromo_circle__fhhY2",
        promo: "CoursePromo_promo__bZSbE",
        title: "CoursePromo_title__tS4Bn",
        subtitle: "CoursePromo_subtitle__vHPcL",
        text: "CoursePromo_text__YUU5N",
        link: "CoursePromo_link__H__hP",
        btnContainer: "CoursePromo_btnContainer__1_X_U",
        btnPrimary: "CoursePromo_btnPrimary__RYbMT",
        price: "CoursePromo_price__0Ldfr",
        through: "CoursePromo_through__LZQTA",
        bottom: "CoursePromo_bottom__DLupY",
        cloud: "CoursePromo_cloud__P_e0d",
        cloudIcon: "CoursePromo_cloudIcon__JiY8L",
        cloudText: "CoursePromo_cloudText__4dobe",
        grayText: "CoursePromo_grayText__gTljA",
        primaryText: "CoursePromo_primaryText__jHgex",
      };
    },
  },
  function (e) {
    e.O(0, [433, 480, 581, 869, 774, 888, 179], function () {
      return (t = 93733), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
