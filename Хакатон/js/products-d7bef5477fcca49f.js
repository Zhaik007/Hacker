(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [345],
  {
    74918: function (t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/products",
        function () {
          return n(56872);
        },
      ]);
    },
    9532: function (t, e, n) {
      "use strict";
      n.d(e, {
        B: function () {
          return c;
        },
      });
      var r = n(85893),
        s = n(67294),
        i = n(94184),
        l = n.n(i),
        a = function (t) {
          return t < 10 ? "0".concat(t) : t;
        },
        c = function (t) {
          var e = t.deadline,
            n = t.className,
            i = (0, s.useState)(0),
            c = i[0],
            o = i[1],
            d = (0, s.useState)(0),
            u = d[0],
            x = d[1],
            m = (0, s.useState)(0),
            p = m[0],
            f = m[1],
            g = (0, s.useState)(0),
            h = g[0],
            v = g[1],
            b = (0, s.useCallback)(
              function () {
                var t = e - Date.now();
                t <= 0 ||
                  (o(t <= 0 ? 0 : Math.floor(t / 864e5)),
                  x(Math.floor((t / 36e5) % 24)),
                  f(Math.floor((t / 1e3 / 60) % 60)),
                  v(Math.floor((t / 1e3) % 60)));
              },
              [e]
            );
          (0, s.useEffect)(
            function () {
              var t = setInterval(function () {
                return b();
              }, 1e3);
              return function () {
                return clearInterval(t);
              };
            },
            [e, b]
          );
          var j = c
              ? "".concat(c, " ").concat(
                  (function (t, e) {
                    var n = Math.abs(t) % 100,
                      r = n % 10;
                    return n > 10 && n < 20
                      ? e[2]
                      : r > 1 && r < 5
                      ? e[1]
                      : 1 === r
                      ? e[0]
                      : e[2];
                  })(c, [
                    "\u0434\u0435\u043d\u044c",
                    "\u0434\u043d\u044f",
                    "\u0434\u043d\u0435\u0439",
                  ])
                )
              : null,
            w = a(u),
            k = a(p),
            S = a(h);
          return (0, r.jsxs)("p", {
            className: l()(n),
            children: [j, " ", w, ":", k, ":", S],
          });
        };
    },
    20175: function (t, e, n) {
      "use strict";
      n.d(e, {
        G: function () {
          return s;
        },
      });
      var r = n(28997),
        s = [
          {
            start: "31.07.23",
            end: "30.07.23:23:59:59",
            flow: 1,
            flowStart: "31.07",
            intervals: [
              {
                start: "10.07.23",
                end: "30.07.23:23:59:59",
                discount: r.p.ThirtyNine,
              },
            ],
          },
          {
            start: "28.08.23",
            end: "27.08.23:23:59:59",
            flow: 1,
            flowStart: "28.08",
            intervals: [
              {
                start: "31.07.23",
                end: "27.08.23:23:59:59",
                discount: r.p.ThirtySix,
              },
            ],
          },
        ];
    },
    18477: function (t, e, n) {
      "use strict";
      n.d(e, {
        X1: function () {
          return i;
        },
        Gl: function () {
          return r.G;
        },
        M8: function () {
          return l;
        },
        XN: function () {
          return a;
        },
      });
      var r = n(20175),
        s = n(28997),
        i = [
          {
            start: "31.07.23",
            end: "30.07.23:23:59:59",
            flow: 1,
            flowStart: "31.07",
            intervals: [
              {
                start: "03.07.23",
                end: "09.07.23:23:59:59",
                discount: s.p.Twenty,
              },
              {
                start: "10.07.23",
                end: "16.07.23:23:59:59",
                discount: s.p.Fifteen,
              },
              {
                start: "17.07.23",
                end: "23.07.23:23:59:59",
                discount: s.p.Ten,
              },
              {
                start: "24.07.23",
                end: "30.07.23:23:59:59",
                discount: s.p.Five,
              },
            ],
          },
          {
            start: "28.08.23",
            end: "27.08.23:23:59:59",
            flow: 1,
            flowStart: "28.08",
            intervals: [
              {
                start: "31.07.23",
                end: "06.08.23:23:59:59",
                discount: s.p.Twenty,
              },
              {
                start: "07.08.23",
                end: "13.08.23:23:59:59",
                discount: s.p.Fifteen,
              },
              {
                start: "14.08.23",
                end: "20.08.23:23:59:59",
                discount: s.p.Ten,
              },
              {
                start: "21.08.23",
                end: "27.08.23:23:59:59",
                discount: s.p.Five,
              },
            ],
          },
        ],
        l = [
          {
            start: "31.07.23",
            end: "30.07.23:23:59:59",
            flow: 1,
            flowStart: "31.07",
            intervals: [
              {
                start: "03.07.23",
                end: "09.07.23:23:59:59",
                discount: s.p.Twenty,
              },
              {
                start: "10.07.23",
                end: "16.07.23:23:59:59",
                discount: s.p.Fifteen,
              },
              {
                start: "17.07.23",
                end: "23.07.23:23:59:59",
                discount: s.p.Ten,
              },
              {
                start: "24.07.23",
                end: "30.07.23:23:59:59",
                discount: s.p.Five,
              },
            ],
          },
          {
            start: "28.08.23",
            end: "27.08.23:23:59:59",
            flow: 1,
            flowStart: "28.08",
            intervals: [
              {
                start: "31.07.23",
                end: "06.08.23:23:59:59",
                discount: s.p.Twenty,
              },
              {
                start: "07.08.23",
                end: "13.08.23:23:59:59",
                discount: s.p.Fifteen,
              },
              {
                start: "14.08.23",
                end: "20.08.23:23:59:59",
                discount: s.p.Ten,
              },
              {
                start: "21.08.23",
                end: "27.08.23:23:59:59",
                discount: s.p.Five,
              },
            ],
          },
        ],
        a = [
          {
            start: "11.09.23",
            end: "10.09.23:23:59:59",
            flow: 1,
            flowStart: "11.09",
            intervals: [
              {
                start: "10.07.23",
                end: "23.07.23:23:59:59",
                discount: s.p.Twenty,
              },
              {
                start: "24.07.23",
                end: "13.08.23:23:59:59",
                discount: s.p.Fifteen,
              },
              {
                start: "14.08.23",
                end: "27.08.23:23:59:59",
                discount: s.p.Ten,
              },
              {
                start: "28.08.23",
                end: "10.09.23:23:59:59",
                discount: s.p.Five,
              },
            ],
          },
        ];
    },
    78194: function (t, e, n) {
      "use strict";
      n.d(e, {
        H: function () {
          return i;
        },
      });
      var r = n(61223),
        s = function (t) {
          var e = t.start,
            n = t.end,
            s = t.now,
            i = t.searchIntervals,
            l = void 0 !== i && i,
            a = (0, r.sG)(e, r.mX.ru).getTime(),
            c = (0, r.sG)(n, r.mX.ruFull).getTime();
          return l ? a <= s && s <= c : s <= a && s <= c;
        },
        i = function (t) {
          var e = Date.now(),
            n = t.findIndex(function (t, n) {
              var r = t.start,
                i = t.end;
              return s({ start: r, end: i, now: e });
            });
          if (-1 === n) return null;
          var i = t[n],
            l = i.flow,
            a = i.intervals,
            c = i.start,
            o = i.flowStart,
            d = (0, r.J_)((0, r.sG)(c), r.mX.ruShort),
            u = a.findIndex(function (t, n) {
              var r = t.start,
                i = t.end;
              return s({ start: r, end: i, now: e, searchIntervals: !0 });
            });
          if (-1 === u) return null;
          var x = a[u],
            m = x.discount,
            p = x.end,
            f = a[u + 1];
          return f
            ? {
                flow: l,
                startDate: d,
                endIntervalDate: p,
                discount: m,
                nextDiscount: f.discount,
                nextIntervalStart: f.start.slice(0, 5),
                flowStart: o,
              }
            : {
                flow: l,
                startDate: d,
                discount: m,
                endIntervalDate: p,
                flowStart: o,
              };
        };
    },
    28997: function (t, e, n) {
      "use strict";
      var r;
      n.d(e, {
        p: function () {
          return r;
        },
      }),
        (function (t) {
          (t[(t.Zero = 0)] = "Zero"),
            (t[(t.Five = 5)] = "Five"),
            (t[(t.Ten = 10)] = "Ten"),
            (t[(t.Fifteen = 15)] = "Fifteen"),
            (t[(t.Twenty = 20)] = "Twenty"),
            (t[(t.Thirty = 30)] = "Thirty"),
            (t[(t.ThirtyFive = 35)] = "ThirtyFive"),
            (t[(t.ThirtySix = 36)] = "ThirtySix"),
            (t[(t.ThirtyNine = 39)] = "ThirtyNine"),
            (t[(t.FortyTwo = 42)] = "FortyTwo");
        })(r || (r = {}));
    },
    56872: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          default: function () {
            return T;
          },
        });
      var r,
        s,
        i = n(85893),
        l = n(94869),
        a = n(9008),
        c = n.n(a),
        o = n(67294),
        d = n(78194),
        u = n(18477),
        x = n(61223),
        m = n(9532),
        p = n(41016),
        f = function () {
          var t = (0, o.useState)(null),
            e = t[0],
            n = t[1],
            r = (0, d.H)(u.Gl) || {},
            s = r.endIntervalDate,
            l = r.nextIntervalStart;
          return (
            (0, o.useEffect)(
              function () {
                n(s ? (0, x.sG)(s, x.mX.ruFull).getTime() : null);
              },
              [s]
            ),
            (0, i.jsx)("section", {
              className: "mb-[108px]",
              children: (0, i.jsx)("div", {
                style: { backgroundImage: "url('/img/bg/products-bg.png')" },
                className: "bg-cover bg-top bg-no-repeat",
                children: (0, i.jsxs)("div", {
                  className:
                    "flex flex-col items-center pt-[64px] pb-[70px] md:pt-[112px] md:pb-[186px]",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "mb-[105px] md:mb-[64px]",
                      children: [
                        (0, i.jsx)("h1", {
                          className:
                            "mt-0 mb-[8px] max-w-[913px] text-center font-['Inter'] text-[34px] font-extrabold leading-[120%] text-white md:mb-[16px] md:text-[56px] md:leading-[67.2px]",
                          children:
                            "\u0421\u0442\u0430\u0442\u044c \u043c\u0438\u0434\u043b\u043e\u043c \u0432 2024 \u0433\u043e\u0434\u0443",
                        }),
                        (0, i.jsx)("h2", {
                          className:
                            "m-0 max-w-[929px] px-[16px] text-center font-['Inter'] text-[16px] font-normal leading-[21.6px] text-[#D1D1D1] md:text-[26px] md:leading-[2rem]",
                          children:
                            "\u041c\u044b \u0441\u0434\u0435\u043b\u0430\u0435\u043c \u0432\u0430\u0441 middle-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u043c \u0441 \u0434\u043e\u0445\u043e\u0434\u043e\u043c \u043e\u0442 100 000 \u20bd \u0438 \u0447\u0435\u0441\u0442\u043d\u043e\u0439 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0435\u0439 \u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430",
                        }),
                      ],
                    }),
                    (0, i.jsx)(p.a, {
                      href: "/study-developer-start",
                      children: (0, i.jsx)("a", {
                        target: "_blank",
                        className:
                          "mb-[10px] w-full max-w-[289px] rounded-[7px] bg-white py-[12px] text-center font-['Golos'] text-[16px] font-medium leading-[25.6px] text-black",
                        children:
                          "\u0423\u0437\u043d\u0430\u0442\u044c \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
                      }),
                    }),
                    Boolean(e) &&
                      (0, i.jsxs)("div", {
                        className:
                          "flex items-center font-['Golos'] font-semibold leading-[19.2px] text-white",
                        children: [
                          (0, i.jsx)("span", {
                            children: l
                              ? "\u0421\u0442\u0430\u0440\u0442 \u0447\u0435\u0440\u0435\u0437:"
                              : "\u0417\u0430\u043a\u0440\u043e\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437:",
                          }),
                          " ",
                          (0, i.jsx)(m.B, {
                            deadline: e,
                            className: "m-0 ml-1 font-normal text-[#86868D]",
                          }),
                        ],
                      }),
                  ],
                }),
              }),
            })
          );
        },
        g = function () {
          return (0, i.jsxs)("section", {
            className: "container mb-[108px] md:mb-[84px]",
            children: [
              (0, i.jsx)("h3", {
                className:
                  "mb-[16px] font-['Inter'] text-[28px] font-extrabold leading-[100%] text-[#10141D] md:text-[38px] md:leading-[130%]",
                children:
                  "\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438",
              }),
              (0, i.jsx)("p", {
                className:
                  "m-0 mb-[24px] font-['Golos'] text-[16px] leading-[140%] text-[#8A8A8A] md:text-[18px]",
                children:
                  "\u041e\u0441\u0432\u043e\u0438\u0442\u0435 \u0432\u043e\u0441\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u043d\u0443\u044e IT-\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0438 \u0443\u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0441\u0442\u0432\u0443\u0435\u0442\u0435 \u0441\u0432\u043e\u0438 \u0437\u043d\u0430\u043d\u0438\u044f, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0439\u0442\u0438 \u043d\u0430 \u043d\u043e\u0432\u044b\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u0438\u0437\u043c\u0430",
              }),
              (0, i.jsxs)("div", {
                className:
                  "flex grid-cols-1 grid-rows-3 flex-col gap-[12px] md:grid md:grid-cols-2 md:grid-rows-2 md:gap-[20px]",
                children: [
                  (0, i.jsx)(p.a, {
                    href: "products/junior-js",
                    children: (0, i.jsx)("a", {
                      target: "products/junior-js".includes(
                        "https://lk.result.school/"
                      )
                        ? "_blank"
                        : null,
                      children: (0, i.jsxs)("div", {
                        className:
                          "flex h-[240px] flex-col justify-between rounded-[16px] bg-[#14191D] p-[24px] md:h-[368px] md:justify-start md:p-[30px]",
                        children: [
                          (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsxs)("h4", {
                                className:
                                  "mb-[12px] font-['Inter'] text-[21px] font-extrabold leading-[130%] text-white md:text-[28px]",
                                children: [
                                  "\u0414\u0436\u0443\u043d\u0438\u043e\u0440 ",
                                  (0, i.jsx)("br", {}),
                                  " Frontend-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a",
                                ],
                              }),
                              (0, i.jsxs)("p", {
                                className:
                                  "mt-0 mb-[12px] max-w-[483px] font-['Golos'] text-[14px] leading-[135%] text-[#86868B] md:text-[16px]",
                                children: [
                                  (0, i.jsx)("span", {
                                    className: "text-white",
                                    children:
                                      "\u0412\u044b \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0435\u0442\u0435 \u043d\u0430\u0432\u044b\u043a\u0438:",
                                  }),
                                  " HTML&CSS, JavaScript, React, Redux, Redux Toolkit, Backend, MongoDB, Docker, TypeScript, \u0422\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e",
                                ],
                              }),
                            ],
                          }),
                          (0, i.jsx)("p", {
                            className:
                              "m-0 font-['Golos'] text-[13px] leading-[120%] tracking-[0.065px] text-[#8A8A8A] md:text-[14px] md:tracking-[0.07px]",
                            children:
                              "\u0421 \u043d\u0443\u043b\u044f \u2022 4-9 \u043c\u0435\u0441\u044f\u0446\u0435\u0432",
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, i.jsx)(p.a, {
                    href: "products/middle-js",
                    children: (0, i.jsx)("a", {
                      target: "products/middle-js".includes(
                        "https://lk.result.school/"
                      )
                        ? "_blank"
                        : null,
                      children: (0, i.jsxs)("div", {
                        className:
                          "flex h-[240px] flex-col justify-between rounded-[16px] bg-[#14191D] p-[24px] md:col-start-1 md:row-start-2 md:h-[368px] md:justify-start md:p-[30px]",
                        children: [
                          (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsxs)("h4", {
                                className:
                                  "mb-[12px] font-['Inter'] text-[21px] font-extrabold leading-[130%] text-white md:text-[28px]",
                                children: [
                                  "\u041c\u0438\u0434\u0434\u043b ",
                                  (0, i.jsx)("br", {}),
                                  " Frontend-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a",
                                ],
                              }),
                              (0, i.jsxs)("p", {
                                className:
                                  "mt-0 mb-[12px] max-w-[483px] font-['Golos'] text-[14px] leading-[135%] text-[#86868B] md:text-[16px]",
                                children: [
                                  (0, i.jsx)("span", {
                                    className: "text-white",
                                    children:
                                      "\u0412\u044b \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0435\u0442\u0435 \u043d\u0430\u0432\u044b\u043a\u0438:",
                                  }),
                                  " Webpack, Git, TypeScript, React Advanced, State Managers, Testing, Scrum, SSR, DevOps...",
                                ],
                              }),
                            ],
                          }),
                          (0, i.jsx)("p", {
                            className:
                              "m-0 font-['Golos'] text-[13px] leading-[120%] tracking-[0.065px] text-[#8A8A8A] md:text-[14px] md:tracking-[0.07px]",
                            children:
                              "\u041f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u044b\u0439 \u2022 4-9 \u043c\u0435\u0441\u044f\u0446\u0435\u0432",
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, i.jsx)(p.a, {
                    href: "products/diagnostics",
                    children: (0, i.jsx)("a", {
                      target: "products/diagnostics".includes(
                        "https://lk.result.school/"
                      )
                        ? "_blank"
                        : null,
                      style: {
                        backgroundImage: "url('/img/bg/products-person.png')",
                      },
                      className:
                        "relative h-[408px] rounded-[16px] bg-cover bg-top bg-no-repeat md:col-start-2 md:row-span-2 md:row-start-1 md:h-auto",
                      children: (0, i.jsxs)("div", {
                        className:
                          "flex h-full flex-col items-start justify-end rounded-[16px] bg-gradient-to-t from-[#000]/90 to-[#000]/0 p-[24px] text-white md:items-center md:py-[49px] md:px-[30px]",
                        children: [
                          (0, i.jsx)("h3", {
                            className:
                              "mb-[12px] font-['Inter'] text-[21px] font-extrabold leading-[130%] md:text-[28px]",
                            children:
                              "\u0414\u0438\u0430\u0433\u043d\u043e\u0441\u0442\u0438\u043a\u0430",
                          }),
                          (0, i.jsx)("p", {
                            className:
                              "m-0 max-w-[513px] font-['Golos'] text-[14px] leading-[135%] md:mb-[18px] md:text-center md:text-[16px] md:tracking-[0.08px]",
                            children:
                              "\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0437\u043d\u0430\u043d\u0438\u044f \u0438 \u043d\u0430\u0439\u0434\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u043f\u0440\u043e\u0439\u0434\u044f \u0434\u0438\u0430\u0433\u043d\u043e\u0441\u0442\u0438\u043a\u0443 \u0441 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u044e\u0449\u0438\u043c \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u043c",
                          }),
                          (0, i.jsx)("button", {
                            className:
                              "hidden rounded-[7px] border border-[#D1D1D1] px-[16px] pb-[8px] pt-[7px] md:block",
                            children:
                              "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        };
      !(function (t) {
        (t.Includes = "\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442:"),
          (t.Skills =
            "\u0412\u044b \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0451\u0442\u0435 \u043d\u0430\u0432\u044b\u043a\u0438:");
      })(r || (r = {})),
        (function (t) {
          (t.IndividualSkill =
            "\u041e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u043d\u0430\u0432\u044b\u043a"),
            (t.Intensives =
              "\u0418\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u044b"),
            (t.FreeCourses =
              "\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0435 \u043a\u0443\u0440\u0441\u044b");
        })(s || (s = {}));
      var h = {
          individualSkill: [
            {
              id: "29",
              title: "TypeScript",
              link: "/products/typescript",
              image: "/img/icons/newProducts/icon-ts.svg",
              summaryText: r.Skills,
              text: "\u041e\u0441\u043d\u043e\u0432\u044b, \u0442\u0438\u043f\u044b, \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440, \u043a\u043b\u0430\u0441\u0441\u044b, generic, \u0443\u0442\u0438\u043b\u0438\u0442\u044b, \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u044b, advanced...",
              time: "\u0421 \u043e\u043f\u044b\u0442\u043e\u043c \u2022 2 \u043d\u0435\u0434\u0435\u043b\u0438",
              currentPrice: null,
              fullPrice: null,
            },
            {
              id: "30",
              title: "Git \u0438 GitHub",
              link: "/products/git",
              image: "/img/icons/newProducts/icon-git.svg",
              summaryText: r.Skills,
              text: "BLD, \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u0432\u0435\u0440\u0441\u0438\u0439 , \u0432\u0435\u0442\u0432\u043b\u0435\u043d\u0438\u0435, \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u044b\u0439 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439, \u0440\u0435\u043b\u0438\u0437\u044b, opensourse...",
              time: "\u0421 \u043e\u043f\u044b\u0442\u043e\u043c \u2022 2 \u043d\u0435\u0434\u0435\u043b\u0438",
              currentPrice: null,
              fullPrice: null,
            },
            {
              id: "999",
              title: "Redux, Redux Toolkit \u0438 MobX",
              link: "/products/state-managers",
              image: "/img/icons/newProducts/icon-state-managers.svg",
              summaryText: r.Skills,
              text: "Redux, React Redux, Redux DevTools, Redux Toolkit, RTK Query, \u041cob\u0425\u2026",
              time: "\u0421 \u043e\u043f\u044b\u0442\u043e\u043c \u2022 6 \u043d\u0435\u0434\u0435\u043b\u044c",
              currentPrice: null,
              fullPrice: null,
            },
          ],
          intensives: [
            {
              id: "24",
              title:
                "\u041e\u0441\u043d\u043e\u0432\u044b \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",
              link: "/products/base-programming",
              image: "/img/icons/newProducts/icon-base-programming.svg",
              summaryText: r.Includes,
              text: "\u043e\u0441\u043d\u043e\u0432\u044b \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u043e\u0432, \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0438 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0430, \u043f\u0440\u043e\u0441\u0442\u044b\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b JS",
              time: "\u0421 \u043d\u0443\u043b\u044f \u2022 2 \u043d\u0435\u0434\u0435\u043b\u0438",
              currentPrice: null,
              fullPrice: null,
            },
            {
              id: "32",
              title:
                "\u041f\u0435\u0440\u0432\u044b\u0439 \u043f\u0435\u0442 \u043f\u0440\u043e\u0435\u043a\u0442 \u043d\u0430 JS",
              link: "/products/demo-week",
              image: "/img/icons/newProducts/icon-test-drive.svg",
              summaryText: r.Includes,
              text: "\u043e\u0441\u043d\u043e\u0432\u044b \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u044b\u043c \u043e\u043a\u043d\u043e\u043c, \u043b\u043e\u0433\u0438\u043a\u0430 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441-\u0431\u0430\u0440\u0430, checkbox, \u0444\u043e\u0440\u043c\u044b, \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f",
              time: "\u0421 \u043e\u043f\u044b\u0442\u043e\u043c \u2022 1 \u043d\u0435\u0434\u0435\u043b\u044f",
              currentPrice: null,
              fullPrice: null,
            },
            {
              id: "33",
              title:
                "\u041f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u044b\u0439 JavaScript. \u0421\u043e\u0437\u0434\u0430\u0435\u043c \u0441\u0432\u043e\u0439 Excel",
              link: "/products/advanced-js",
              image: "/img/icons/newProducts/icon-advanced-js.svg",
              summaryText: r.Includes,
              text: "Webpack, Jest, Node.js, State Managers, \u041e\u041e\u041f, ESlint, SASS, Data Layer",
              time: "\u0421 \u043e\u043f\u044b\u0442\u043e\u043c \u2022 2 \u043c\u0435\u0441\u044f\u0446\u0430",
              currentPrice: null,
              fullPrice: null,
            },
          ],
          freeCourses: [
            {
              id: "28",
              title:
                "\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c \u043e\u0441\u043d\u043e\u0432\u044b JavaScript \u0438 50 \u0437\u0430\u0434\u0430\u043d\u0438\u0439",
              link: "/products/javascript",
              image: "/img/icons/newProducts/icon-javascript.svg",
              summaryText: r.Skills,
              text: "JavaScript, \u043c\u0430\u0441\u0441\u0438\u0432\u044b, \u043e\u0431\u044a\u0435\u043a\u0442\u044b, \u0446\u0438\u043a\u043b\u044b, \u0444\u0443\u043d\u043a\u0446\u0438\u0438, debug, \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0441\u0442\u044c...",
              time: "\u0421 \u043d\u0443\u043b\u044f \u2022 2 \u043d\u0435\u0434\u0435\u043b\u0438",
              currentPrice: null,
              fullPrice: null,
            },
            {
              id: "23",
              title:
                "HTML&CSS - \u043f\u0435\u0440\u0432\u044b\u0439 \u0448\u0430\u0433 \u0432 IT",
              link: "/products/html-css",
              image: "/img/icons/newProducts/icon-html-css.svg",
              summaryText: r.Skills,
              text: "HTML, \u0440\u0430\u0431\u043e\u0442\u0430 \u0441 \u0442\u0435\u043a\u0441\u0442\u043e\u043c, \u0441\u043f\u0438\u0441\u043a\u0438, \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u0444\u043e\u0440\u043c\u044b, CSS, \u0440\u0430\u0431\u043e\u0442\u0430 \u0441 \u0446\u0432\u0435\u0442\u043e\u043c...",
              time: "\u0421 \u043d\u0443\u043b\u044f \u2022 2 \u043d\u0435\u0434\u0435\u043b\u0438",
              currentPrice: null,
              fullPrice: null,
            },
            {
              id: "26",
              title:
                "\u041c\u0430\u0440\u0430\u0444\u043e\u043d JavaScript 5 \u0434\u043d\u0435\u0439 5 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432",
              link: "/products/marathon-js",
              image: "/img/icons/newProducts/icon-marathon-five-x-five.svg",
              summaryText: r.Includes,
              text: "\u043f\u043b\u0430\u0433\u0438\u043d \u0434\u043b\u044f \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a, \u043c\u0438\u043d\u0438-\u043a\u043e\u043b Trello, \u0441\u043b\u0430\u0439\u0434\u0435\u0440 \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a, \u043c\u0438\u043d\u0438-\u0438\u0433\u0440\u0430, \u0430\u043d\u0438\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0438\u0433\u0440\u0430",
              time: "\u0421 \u043d\u0443\u043b\u044f \u2022 1 \u043d\u0435\u0434\u0435\u043b\u044f",
              currentPrice: null,
              fullPrice: null,
            },
            {
              id: "27",
              title:
                "\u041e\u0442 Junior \u0434\u043e Middle \u0437\u0430 \u043e\u0434\u043d\u043e \u0441\u043e\u0431\u0435\u0441\u0435\u0434\u043e\u0432\u043d\u0438\u0435",
              link: "/products/marathon-mfd",
              image: "/img/icons/newProducts/icon-marathon-mfd.svg",
              summaryText: r.Includes,
              text: "\u043e\u0442\u043b\u0438\u0447\u0438\u0435 Junior \u043e\u0442 Middle, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0439 \u0441\u0442\u0435\u043a, soft skills, \u043a\u0430\u043a \u0440\u0430\u0441\u0442\u0438 \u0432 \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0435",
              time: "\u0421 \u043d\u0443\u043b\u044f \u2022 2 \u0434\u043d\u044f",
              currentPrice: null,
              fullPrice: null,
            },
          ],
        },
        v = n(94184),
        b = n.n(v),
        j = n(25675),
        w = n.n(j),
        k = function (t) {
          var e = t.label,
            n = t.text,
            r = t.group,
            s = t.className;
          return (0, i.jsxs)("section", {
            className: b()(s, "container"),
            children: [
              (0, i.jsxs)("div", {
                className: "mb-[24px]",
                children: [
                  (0, i.jsx)("h4", {
                    className:
                      "mb-[16px] font-['Inter'] text-[28px] font-extrabold leading-[100%] text-[#10141D] md:text-[38px] md:leading-[130%]",
                    children: e,
                  }),
                  (0, i.jsx)("p", {
                    className:
                      "m-0 font-['Golos'] text-[16px] leading-[140%] text-[#8A8A8A] md:text-[18px]",
                    children: n,
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className:
                  "grid grid-cols-1 grid-rows-1 gap-[12px] sm:grid-cols-2 sm:gap-[20px] md:grid-cols-3 lg:grid-cols-4",
                children: r.map(function (t) {
                  return (0,
                  i.jsx)(p.a, { href: t.link, children: (0, i.jsx)("a", { id: t.id, target: t.link.includes("https://lk.result.school/") ? "_blank" : null, children: (0, i.jsxs)("div", { className: "rounded-[10px] border border-[#E1E1E1]", children: [(0, i.jsx)("div", { className: "flex h-[150px] items-center justify-center rounded-t-[10px] bg-[#F5F5F4]", children: (0, i.jsx)(w(), { src: t.image, alt: "course", width: 212, height: 114 }) }), (0, i.jsxs)("div", { className: "flex h-[215px] flex-col justify-between p-[16px] md:p-[20px]", children: [(0, i.jsxs)("div", { children: [(0, i.jsx)("h5", { className: "mb-[10px] font-['Inter'] text-[18px] font-bold leading-[120%] text-[#0F1214]", children: t.title }), (0, i.jsxs)("p", { className: "m-0 font-['Golos'] text-[14px] font-normal leading-[135%] text-[#8A8A8A]", children: [(0, i.jsx)("span", { className: "font-medium text-[#0F1214]", children: t.summaryText }), " ", t.text] })] }), (0, i.jsxs)("div", { children: [(0, i.jsx)("p", { className: "m-0 font-['Golos'] text-[13px] leading-[120%] tracking-[0.065px] text-[#8A8A8A]", children: t.time }), t.currentPrice && (0, i.jsx)("p", { className: "m-0 mb-[2px] font-['Golos'] text-[18px] font-medium text-[#0F1214]", children: t.currentPrice }), t.fullPrice && (0, i.jsx)("p", { className: "m-0 font-['Golos'] text-[12px] leading-[130%] text-[#8A8A8A]", children: t.fullPrice })] })] })] }) }) }, t.id);
                }),
              }),
            ],
          });
        },
        S = function () {
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(k, {
                label: s.IndividualSkill,
                text: "\u0418\u0437\u0443\u0447\u0438\u0442\u0435 \u0432\u043e\u0441\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438, \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0441\u0448\u0438\u0440\u0438\u0442\u044c \u0441\u0432\u043e\u0439 \u0441\u0442\u0435\u043a \u0438 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0432\u0435\u0442\u043d\u0443\u044e \u0433\u0430\u043b\u043e\u0447\u043a\u0443 \u0432 \u0440\u0435\u0437\u044e\u043c\u0435",
                group: h.individualSkill,
                className: "mb-[108px] md:mb-[84px]",
              }),
              (0, i.jsx)(k, {
                label: s.Intensives,
                text: "\u042d\u043a\u0441\u043f\u0440\u0435\u0441\u0441-\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b, \u0433\u0434\u0435 \u0437\u0430 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u043f\u0435\u0440\u0438\u043e\u0434 \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0435 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u043f\u043e\u043b\u044c\u0437\u044b",
                group: h.intensives,
                className: "mb-[108px] md:mb-[84px]",
              }),
              (0, i.jsx)(k, {
                label: s.FreeCourses,
                text: "\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438 \u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u044b \u0432 \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e \u0437\u0430 \u0432\u0430\u0448\u0438 \u0441\u0442\u0430\u0440\u0430\u043d\u0438\u044f",
                group: h.freeCourses,
                className: "mb-[80px]",
              }),
            ],
          });
        },
        N = function () {
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(c(), {
                children: (0, i.jsx)("title", {
                  children:
                    "\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b | Result School",
                }),
              }),
              (0, i.jsx)(f, {}),
              (0, i.jsx)(g, {}),
              (0, i.jsx)(S, {}),
            ],
          });
        };
      N.getLayout = function (t) {
        return (0, i.jsx)(l.Z, { children: t });
      };
      var T = N;
    },
    61223: function (t, e, n) {
      "use strict";
      n.d(e, {
        J_: function () {
          return a;
        },
        _3: function () {
          return o;
        },
        mX: function () {
          return r;
        },
        sG: function () {
          return c;
        },
      });
      var r,
        s = n(42298),
        i = n(63672),
        l = n(61436);
      !(function (t) {
        (t.ruShort = "dd.MM"),
          (t.ru = "dd.MM.yy"),
          (t.ruFull = "dd.MM.yy:HH:mm:ss");
      })(r || (r = {}));
      var a = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : r.ru;
          return (0, s.Z)(t, e);
        },
        c = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : r.ru;
          if (t) {
            var n = (0, i.Z)(t, e, new Date());
            if ((0, l.Z)(n)) return n;
          }
        },
        o = function (t) {
          var e = new Date(t),
            n = e.getFullYear(),
            r =
              e.getMonth() + 1 < 10
                ? "0".concat(e.getMonth() + 1)
                : e.getMonth() + 1,
            s = e.getDate() < 10 ? "0".concat(e.getDate()) : e.getDate();
          return "".concat(s, ".").concat(r, ".").concat(n);
        };
    },
    31955: function (t, e) {
      "use strict";
      function n(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n) t[r] = n[r];
        }
        return t;
      }
      var r = (function t(e, r) {
        function s(t, s, i) {
          if ("undefined" !== typeof document) {
            "number" === typeof (i = n({}, r, i)).expires &&
              (i.expires = new Date(Date.now() + 864e5 * i.expires)),
              i.expires && (i.expires = i.expires.toUTCString()),
              (t = encodeURIComponent(t)
                .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                .replace(/[()]/g, escape));
            var l = "";
            for (var a in i)
              i[a] &&
                ((l += "; " + a),
                !0 !== i[a] && (l += "=" + i[a].split(";")[0]));
            return (document.cookie = t + "=" + e.write(s, t) + l);
          }
        }
        return Object.create(
          {
            set: s,
            get: function (t) {
              if ("undefined" !== typeof document && (!arguments.length || t)) {
                for (
                  var n = document.cookie ? document.cookie.split("; ") : [],
                    r = {},
                    s = 0;
                  s < n.length;
                  s++
                ) {
                  var i = n[s].split("="),
                    l = i.slice(1).join("=");
                  try {
                    var a = decodeURIComponent(i[0]);
                    if (((r[a] = e.read(l, a)), t === a)) break;
                  } catch (c) {}
                }
                return t ? r[t] : r;
              }
            },
            remove: function (t, e) {
              s(t, "", n({}, e, { expires: -1 }));
            },
            withAttributes: function (e) {
              return t(this.converter, n({}, this.attributes, e));
            },
            withConverter: function (e) {
              return t(n({}, this.converter, e), this.attributes);
            },
          },
          {
            attributes: { value: Object.freeze(r) },
            converter: { value: Object.freeze(e) },
          }
        );
      })(
        {
          read: function (t) {
            return (
              '"' === t[0] && (t = t.slice(1, -1)),
              t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
            );
          },
          write: function (t) {
            return encodeURIComponent(t).replace(
              /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
              decodeURIComponent
            );
          },
        },
        { path: "/" }
      );
      e.Z = r;
    },
  },
  function (t) {
    t.O(0, [480, 260, 869, 774, 888, 179], function () {
      return (e = 74918), t((t.s = e));
      var e;
    });
    var e = t.O();
    _N_E = e;
  },
]);
