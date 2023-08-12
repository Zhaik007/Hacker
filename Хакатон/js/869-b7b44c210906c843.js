"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [869],
  {
    63179: function (e, s) {
      s.Z = {
        src: "/_next/static/media/main-logo-black.85858284.svg",
        height: 28,
        width: 172,
      };
    },
    4141: function (e, s) {
      s.Z = {
        src: "/_next/static/media/main-logo-white.da2381ef.svg",
        height: 25,
        width: 162,
      };
    },
    41016: function (e, s, t) {
      t.d(s, {
        a: function () {
          return h;
        },
      });
      var l = t(26042),
        r = t(69396),
        i = t(99534),
        n = t(85893),
        a = (t(67294), t(41664)),
        c = t.n(a),
        d = t(11163),
        h = function (e) {
          var s = e.children,
            t = e.href,
            a = e.as,
            h = (0, i.Z)(e, ["children", "href", "as"]),
            x = (0, d.useRouter)().query;
          return (0, n.jsx)(
            c(),
            (0, r.Z)((0, l.Z)({ href: { pathname: t, query: x } }, h), {
              as: a,
              children: s,
            })
          );
        };
    },
    94869: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return v;
        },
      });
      var l = t(85893),
        r = t(67294),
        i = t(41664),
        n = t.n(i),
        a = t(25675),
        c = t.n(a),
        d = t(11163),
        h = t(94184),
        x = t.n(h),
        o = t(41016),
        m = t(63179),
        f = t(4141),
        u = t(79797),
        b = function (e) {
          var s = e.isDark,
            t = void 0 !== s && s,
            i = (0, r.useState)(!1),
            a = i[0],
            h = i[1],
            b = (0, d.useRouter)(),
            j = function (e) {
              var s = b.asPath.split("?")[0] === e;
              return x()("transition-all duration-200", {
                "text-[#767676] hover:text-[#10141D]": !t && !s,
                "text-white hover:underline": t && !s,
                "text-[#10141D]": !t && s,
                "text-white underline": t && s,
              });
            },
            p = function () {
              h(!1);
            };
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)("header", {
                className: x()(
                  "container fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b-[1px] border-b-neutral-300 py-3 md:relative md:inset-x-auto md:top-auto md:z-[1] md:border-none md:py-[1.125rem]",
                  { "border-none": b.pathname.split("/")[1] },
                  t ? "bg-black" : "bg-zinc-50"
                ),
                children: [
                  (0, l.jsx)("div", {
                    children: (0, l.jsx)(o.a, {
                      href: "/",
                      children: (0, l.jsx)("a", {
                        id: "1",
                        children: (0, l.jsx)("div", {
                          className:
                            "mr-3 flex h-[26px] w-[150px] items-center justify-center md:h-[30px] md:w-[170px]",
                          children: (0, l.jsx)(c(), {
                            src: t ? f.Z : m.Z,
                            alt: "Logotype",
                          }),
                        }),
                      }),
                    }),
                  }),
                  (0, l.jsx)("button", {
                    className: "header-burger md:hidden ".concat(
                      a ? "_active" : ""
                    ),
                    onClick: function () {
                      return h(!a);
                    },
                    children: (0, l.jsx)("span", {
                      className: x()(
                        t
                          ? "bg-white after:bg-white before:bg-white"
                          : "bg-black after:bg-black before:bg-black"
                      ),
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: "hidden md:block",
                    children: (0, l.jsxs)("ul", {
                      className: "flex flex-wrap items-center",
                      children: [
                        (0, l.jsx)("li", {
                          className: "mx-8",
                          children: (0, l.jsx)(o.a, {
                            href: "/",
                            children: (0, l.jsx)("a", {
                              id: "2",
                              className: j("/"),
                              children: "\u041e \u0448\u043a\u043e\u043b\u0435",
                            }),
                          }),
                        }),
                        (0, l.jsx)("li", {
                          className: "mx-8",
                          children: (0, l.jsx)(o.a, {
                            href: "/products",
                            children: (0, l.jsx)("a", {
                              id: "3",
                              className: j("/products"),
                              onClick: function () {
                                return (0, u.L)("kurs_glavnaya1");
                              },
                              children: "\u041a\u0443\u0440\u0441\u044b",
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: "mt-6 hidden md:mt-0 md:block",
                    children: (0, l.jsx)(n(), {
                      href: "https://lk.result.school/cms/system/login",
                      children: (0, l.jsx)("a", {
                        id: "5",
                        target: "_blank",
                        className: x()(
                          "rounded-[7px] border px-4 pb-2 pt-[7px] font-medium transition-all duration-300",
                          t
                            ? "border-[#8D8E92] hover:bg-[#242427] text-[#FDFDFD]"
                            : "border-[#D1D1D1] hover:border-[#10141D] text-[#767676] hover:text-[#10141D]"
                        ),
                        children: "\u0412\u043e\u0439\u0442\u0438",
                      }),
                    }),
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                className: x()(
                  "fixed top-[51px] right-0 bottom-0 z-40 m-0 block w-full p-5 drop-shadow-[-50px_0_37px_rgba(22,23,27,0.5)] transition-all duration-500 ease-in-out will-change-transform",
                  a ? "translate-x-0" : "translate-x-[120%]",
                  t ? "bg-black" : "bg-zinc-50"
                ),
                children: (0, l.jsxs)("div", {
                  className: "flex flex-col items-center",
                  children: [
                    (0, l.jsxs)("ul", {
                      className: "mb-4 flex flex-col items-center text-2xl",
                      children: [
                        (0, l.jsx)("li", {
                          className: "mb-4",
                          children: (0, l.jsx)(o.a, {
                            href: "/",
                            children: (0, l.jsx)("a", {
                              id: "2",
                              className: j("/"),
                              onClick: p,
                              children: "\u041e \u0448\u043a\u043e\u043b\u0435",
                            }),
                          }),
                        }),
                        (0, l.jsx)("li", {
                          className: "mb-4",
                          children: (0, l.jsx)(o.a, {
                            href: "/products",
                            children: (0, l.jsx)("a", {
                              id: "3",
                              className: j("/products"),
                              onClick: p,
                              children: "\u041a\u0443\u0440\u0441\u044b",
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: "flex w-full items-center justify-center",
                      children: (0, l.jsx)(n(), {
                        href: "https://lk.result.school/cms/system/login",
                        children: (0, l.jsx)("a", {
                          id: "5",
                          target: "_blank",
                          className: x()(
                            "flex w-full max-w-[300px] items-center justify-center rounded-[7px] border px-4 pb-2 pt-[7px] font-medium transition-all duration-300",
                            t
                              ? "border-[#8D8E92] hover:bg-[#242427] text-[#FDFDFD]"
                              : "border-[#D1D1D1] hover:border-[#10141D] text-[#767676] hover:text-[#10141D]"
                          ),
                          children: "\u0412\u043e\u0439\u0442\u0438",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        j = function () {
          return (0, l.jsx)("footer", {
            className: "relative bg-black",
            children: (0, l.jsxs)("div", {
              className: "container py-16 md:py-20",
              children: [
                (0, l.jsxs)("div", {
                  className:
                    "mb-10 grid grid-rows-[30px] gap-6 md:grid-cols-4 md:justify-items-center md:gap-4",
                  children: [
                    (0, l.jsx)(o.a, {
                      href: "/",
                      children: (0, l.jsx)("a", {
                        id: "6",
                        className:
                          "flex h-[30px] w-[170px] items-center justify-center justify-self-start",
                        children: (0, l.jsx)(c(), {
                          src: f.Z,
                          alt: "vladilen.ru",
                        }),
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className: "row-span-2 flex flex-col",
                      children: [
                        (0, l.jsx)("h3", {
                          className:
                            "mt-0 mb-5 text-[20px] font-semibold leading-[1.5] text-white",
                          children:
                            "\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",
                        }),
                        (0, l.jsxs)("ul", {
                          className: "flex flex-col text-base text-white",
                          children: [
                            (0, l.jsx)("li", {
                              className: "mb-2",
                              children: (0, l.jsx)(o.a, {
                                href: "/",
                                children: (0, l.jsx)("a", {
                                  id: "7",
                                  className:
                                    "link-hover before:bg-white after:bg-white",
                                  onClick: function () {
                                    return (0, u.L)("\u043e_shkole");
                                  },
                                  children:
                                    "\u041e \u0448\u043a\u043e\u043b\u0435",
                                }),
                              }),
                            }),
                            (0, l.jsx)("li", {
                              className: "mb-2",
                              children: (0, l.jsx)(o.a, {
                                href: "/cooperation",
                                children: (0, l.jsx)("a", {
                                  id: "9",
                                  className:
                                    "link-hover before:bg-white after:bg-white",
                                  onClick: function () {
                                    return (0, u.L)("vakansii");
                                  },
                                  children:
                                    "\u0412\u0430\u043a\u0430\u043d\u0441\u0438\u0438",
                                }),
                              }),
                            }),
                            (0, l.jsx)("li", {
                              className: "mb-2",
                              children: (0, l.jsx)(n(), {
                                href: "https://lk.result.school/public_offer",
                                children: (0, l.jsx)("a", {
                                  id: "8",
                                  className:
                                    "link-hover before:bg-white after:bg-white",
                                  target: "_blank",
                                  onClick: function () {
                                    return (0, u.L)("Dokumenty");
                                  },
                                  children:
                                    "\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: "row-span-2 flex flex-col",
                      children: [
                        (0, l.jsx)("h3", {
                          className:
                            "mt-0 mb-5 text-[20px] font-semibold leading-[1.5] text-white",
                          children:
                            "\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f",
                        }),
                        (0, l.jsxs)("ul", {
                          className: "flex flex-col text-base text-white",
                          children: [
                            (0, l.jsx)("li", {
                              className: "mb-2",
                              children: (0, l.jsx)(o.a, {
                                href: "/products",
                                children: (0, l.jsx)("a", {
                                  id: "10",
                                  className:
                                    "link-hover before:bg-white after:bg-white",
                                  onClick: function () {
                                    return (0, u.L)("kurs_glavnaya3");
                                  },
                                  children: "\u041a\u0443\u0440\u0441\u044b",
                                }),
                              }),
                            }),
                            (0, l.jsx)("li", {
                              className: "mb-2",
                              children: (0, l.jsx)(o.a, {
                                href: "/products/html-css",
                                children: (0, l.jsx)("a", {
                                  id: "11",
                                  className:
                                    "link-hover before:bg-white after:bg-white",
                                  children:
                                    "\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u043d\u0441\u0438\u0432",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: "row-span-2 flex flex-col",
                      children: [
                        (0, l.jsx)("h3", {
                          className:
                            "mt-0 mb-5 text-[20px] font-semibold leading-[1.5] text-white",
                          children:
                            "\u041f\u043e\u0434\u043f\u0438\u0448\u0438\u0442\u0435\u0441\u044c",
                        }),
                        (0, l.jsxs)("ul", {
                          className: "flex flex-col text-base text-white",
                          children: [
                            (0, l.jsx)("li", {
                              className: "mb-2",
                              children: (0, l.jsx)(n(), {
                                href: "https://t.me/result_school_it",
                                children: (0, l.jsx)("a", {
                                  id: "12",
                                  className:
                                    "link-hover before:bg-white after:bg-white",
                                  target: "_blank",
                                  children: "Telegram",
                                }),
                              }),
                            }),
                            (0, l.jsx)("li", {
                              className: "mb-2",
                              children: (0, l.jsx)(n(), {
                                href: "https://www.youtube.com/c/VladilenMinin",
                                children: (0, l.jsx)("a", {
                                  id: "13",
                                  className:
                                    "link-hover before:bg-white after:bg-white",
                                  target: "_blank",
                                  children: "Youtube",
                                }),
                              }),
                            }),
                            (0, l.jsx)("li", {
                              className: "mb-2",
                              children: (0, l.jsx)(n(), {
                                href: "https://vk.com/result.school",
                                children: (0, l.jsx)("a", {
                                  id: "14",
                                  className:
                                    "link-hover before:bg-white after:bg-white",
                                  target: "_blank",
                                  children:
                                    "\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsxs)("ul", {
                      className:
                        "flex flex-col items-start justify-self-start text-base text-gray",
                      children: [
                        (0, l.jsx)("li", {
                          children:
                            "\u0418\u041f \u041c\u0438\u043d\u0438\u043d \u0412. \u0418.;",
                        }),
                        (0, l.jsx)("li", {
                          children: "\u0418\u041d\u041d 781714316555;",
                        }),
                        (0, l.jsx)("li", {
                          children:
                            "\u041e\u0413\u0420\u041d\u0418\u041f 317784700113455",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsx)("p", {
                  className: "mt-0 text-xs text-[#272B2E] md:text-sm",
                  children:
                    "\u041b\u044e\u0431\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432 \u0441 \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0430, \u0434\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f \u043d\u0435 \u0438\u043d\u0430\u0447\u0435 \u043a\u0430\u043a \u0441 \u043f\u0438\u0441\u044c\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0435\u0433\u043e \u043f\u0440\u0430\u0432\u043e\u043e\u0431\u043b\u0430\u0434\u0430\u0442\u0435\u043b\u044f - 781714316555 \u0418\u041d\u041d/\u041e\u0413\u0420\u041d\u0418\u041f \u043d\u043e\u043c\u0435\u0440 \u043e\u0442 317784700113455. \u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430 \u0441 \u0441\u0430\u0439\u0442\u0430 \u0438 \u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435 \u0430\u0432\u0442\u043e\u0440\u0441\u043a\u0438\u0445 \u0438 \u0441\u043c\u0435\u0436\u043d\u044b\u0445 \u043f\u0440\u0430\u0432, \u043f\u0440\u0430\u0432\u043e\u043e\u0431\u043b\u0430\u0434\u0430\u0442\u0435\u043b\u044f \u043d\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441\u043e \u0441\u0442 146 \u0423\u041a \u0420\u0424. \u0412\u0441\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u0430\u044f \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 \u043d\u0438 \u043f\u0440\u0438 \u043a\u0430\u043a\u0438\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u0445 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0439 \u043e\u0444\u0435\u0440\u0442\u043e\u0439, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u043c\u043e\u0439 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u043c\u0438 \u0421\u0442\u0430\u0442\u044c\u0438 437 (2) \u0413\u0440\u0430\u0436\u0434\u0430\u043d\u0441\u043a\u043e\u0433\u043e \u043a\u043e\u0434\u0435\u043a\u0441\u0430 \u0420\u0424",
                }),
              ],
            }),
          });
        },
        p = t(31955),
        g = t(82669),
        N = "cookie_agreement",
        k = "true",
        w = function () {
          var e = (0, r.useState)(null),
            s = e[0],
            t = e[1];
          return (
            (0, r.useEffect)(function () {
              var e = (function (e) {
                if (g.j) return p.Z.get(e);
              })(N);
              t(e);
            }, []),
            s
              ? null
              : (0, l.jsx)("div", {
                  className:
                    "cookies fixed bottom-0 left-0 z-50 w-full bg-black py-3",
                  children: (0, l.jsxs)("div", {
                    className:
                      "container block items-center px-4 sm:flex sm:justify-center md:px-20 lg:px-4",
                    children: [
                      (0, l.jsxs)("p", {
                        className: "mb-4 mt-0 mr-8 text-white sm:mb-0",
                        children: [
                          "\u041c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c cookie. \u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0430\u0439\u0442, \u0412\u044b \u0434\u0430\u0435\u0442\u0435 \u0441\u0432\u043e\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 cookie \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445.",
                          " ",
                          (0, l.jsx)(n(), {
                            href: "https://lk.result.school/policy",
                            children: (0, l.jsx)("a", {
                              className: "font-medium text-white no-underline",
                              target: "_blank",
                              children:
                                "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsx)("button", {
                        onClick: function () {
                          !(function (e, s, t) {
                            if (g.j) p.Z.set(e, s, t);
                          })(N, k),
                            t(k);
                        },
                        className:
                          "w-full rounded-lg bg-white py-1.5 px-3.5 font-medium text-black sm:w-auto",
                        children: "\u0425\u043e\u0440\u043e\u0448\u043e",
                      }),
                    ],
                  }),
                })
          );
        },
        v = function (e) {
          var s = e.children,
            t = e.isDark;
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)("div", {
                className: x()("wrapper", { "bg-black text-white": t }),
                children: [
                  (0, l.jsx)(b, { isDark: t }),
                  (0, l.jsx)("main", {
                    className: "pt-[51px] md:pt-0",
                    children: s,
                  }),
                  (0, l.jsx)(j, {}),
                ],
              }),
              (0, l.jsx)(w, {}),
            ],
          });
        };
    },
    79797: function (e, s, t) {
      t.d(s, {
        L: function () {
          return l;
        },
      });
      var l = function (e) {};
    },
  },
]);
