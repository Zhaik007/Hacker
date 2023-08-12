(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [480],
  {
    79361: function (e, t) {
      "use strict";
      t.Z = function (e, t, n) {
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n);
        return e;
      };
    },
    94184: function (e, t) {
      var n;
      !(function () {
        "use strict";
        var o = {}.hasOwnProperty;
        function r() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            if (n) {
              var i = typeof n;
              if ("string" === i || "number" === i) e.push(n);
              else if (Array.isArray(n)) {
                if (n.length) {
                  var a = r.apply(null, n);
                  a && e.push(a);
                }
              } else if ("object" === i)
                if (n.toString === Object.prototype.toString)
                  for (var l in n) o.call(n, l) && n[l] && e.push(l);
                else e.push(n.toString());
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((r.default = r), (e.exports = r))
          : void 0 ===
              (n = function () {
                return r;
              }.apply(t, [])) || (e.exports = n);
      })();
    },
    71210: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomainLocale = function (e, t, n, o) {
          return !1;
        });
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    28045: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(79361).Z,
        r = n(94941).Z,
        i = n(53929).Z;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          var t = e.src,
            n = e.sizes,
            l = e.unoptimized,
            u = void 0 !== l && l,
            y = e.priority,
            h = void 0 !== y && y,
            S = e.loading,
            A = e.lazyRoot,
            E = void 0 === A ? null : A,
            R = e.lazyBoundary,
            C = e.className,
            k = e.quality,
            L = e.width,
            P = e.height,
            I = e.style,
            M = e.objectFit,
            q = e.objectPosition,
            N = e.onLoadingComplete,
            D = e.placeholder,
            Z = void 0 === D ? "empty" : D,
            B = e.blurDataURL,
            U = c(e, [
              "src",
              "sizes",
              "unoptimized",
              "priority",
              "loading",
              "lazyRoot",
              "lazyBoundary",
              "className",
              "quality",
              "width",
              "height",
              "style",
              "objectFit",
              "objectPosition",
              "onLoadingComplete",
              "placeholder",
              "blurDataURL",
            ]),
            T = s.useContext(g.ImageConfigContext),
            W = s.useMemo(
              function () {
                var e = m || T || d.imageConfigDefault,
                  t = i(e.deviceSizes)
                    .concat(i(e.imageSizes))
                    .sort(function (e, t) {
                      return e - t;
                    }),
                  n = e.deviceSizes.sort(function (e, t) {
                    return e - t;
                  });
                return a({}, e, { allSizes: t, deviceSizes: n });
              },
              [T]
            ),
            H = U,
            V = n ? "responsive" : "intrinsic";
          "layout" in H && (H.layout && (V = H.layout), delete H.layout);
          var G = z;
          if ("loader" in H) {
            if (H.loader) {
              var F = H.loader;
              G = function (e) {
                e.config;
                var t = c(e, ["config"]);
                return F(t);
              };
            }
            delete H.loader;
          }
          var K = "";
          if (
            (function (e) {
              return (
                "object" === typeof e &&
                (j(e) ||
                  (function (e) {
                    return void 0 !== e.src;
                  })(e))
              );
            })(t)
          ) {
            var J = j(t) ? t.default : t;
            if (!J.src)
              throw new Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(
                  JSON.stringify(J)
                )
              );
            if (
              ((B = B || J.blurDataURL),
              (K = J.src),
              (!V || "fill" !== V) &&
                ((P = P || J.height),
                (L = L || J.width),
                !J.height || !J.width))
            )
              throw new Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(
                  JSON.stringify(J)
                )
              );
          }
          var Q = !h && ("lazy" === S || "undefined" === typeof S);
          ((t = "string" === typeof t ? t : K).startsWith("data:") ||
            t.startsWith("blob:")) &&
            ((u = !0), (Q = !1));
          b.has(t) && (Q = !1);
          v && (u = !0);
          var X,
            Y = r(s.useState(!1), 2),
            $ = Y[0],
            ee = Y[1],
            te = r(
              p.useIntersection({
                rootRef: E,
                rootMargin: R || "200px",
                disabled: !Q,
              }),
              3
            ),
            ne = te[0],
            oe = te[1],
            re = te[2],
            ie = !Q || oe,
            ae = {
              boxSizing: "border-box",
              display: "block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
            },
            le = {
              boxSizing: "border-box",
              display: "block",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
            },
            ue = !1,
            ce = {
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              boxSizing: "border-box",
              padding: 0,
              border: "none",
              margin: "auto",
              display: "block",
              width: 0,
              height: 0,
              minWidth: "100%",
              maxWidth: "100%",
              minHeight: "100%",
              maxHeight: "100%",
              objectFit: M,
              objectPosition: q,
            },
            se = O(L),
            fe = O(P),
            de = O(k);
          0;
          var pe = Object.assign({}, I, ce),
            ge =
              "blur" !== Z || $
                ? {}
                : {
                    backgroundSize: M || "cover",
                    backgroundPosition: q || "0% 0%",
                    filter: "blur(20px)",
                    backgroundImage: 'url("'.concat(B, '")'),
                  };
          if ("fill" === V)
            (ae.display = "block"),
              (ae.position = "absolute"),
              (ae.top = 0),
              (ae.left = 0),
              (ae.bottom = 0),
              (ae.right = 0);
          else if ("undefined" !== typeof se && "undefined" !== typeof fe) {
            var ye = fe / se,
              he = isNaN(ye) ? "100%" : "".concat(100 * ye, "%");
            "responsive" === V
              ? ((ae.display = "block"),
                (ae.position = "relative"),
                (ue = !0),
                (le.paddingTop = he))
              : "intrinsic" === V
              ? ((ae.display = "inline-block"),
                (ae.position = "relative"),
                (ae.maxWidth = "100%"),
                (ue = !0),
                (le.maxWidth = "100%"),
                (X =
                  "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27"
                    .concat(se, "%27%20height=%27")
                    .concat(fe, "%27/%3e")))
              : "fixed" === V &&
                ((ae.display = "inline-block"),
                (ae.position = "relative"),
                (ae.width = se),
                (ae.height = fe));
          } else 0;
          var ve = { src: w, srcSet: void 0, sizes: void 0 };
          ie &&
            (ve = x({
              config: W,
              src: t,
              unoptimized: u,
              layout: V,
              width: se,
              quality: de,
              sizes: n,
              loader: G,
            }));
          var me = t;
          0;
          var be,
            we = "imagesrcset",
            Se = "imagesizes";
          (we = "imageSrcSet"), (Se = "imageSizes");
          var je = (o((be = {}), we, ve.srcSet), o(be, Se, ve.sizes), be),
            xe = s.default.useLayoutEffect,
            Oe = s.useRef(N),
            ze = s.useRef(t);
          s.useEffect(
            function () {
              Oe.current = N;
            },
            [N]
          ),
            xe(
              function () {
                ze.current !== t && (re(), (ze.current = t));
              },
              [re, t]
            );
          var Ae = a(
            {
              isLazy: Q,
              imgAttributes: ve,
              heightInt: fe,
              widthInt: se,
              qualityInt: de,
              layout: V,
              className: C,
              imgStyle: pe,
              blurStyle: ge,
              loading: S,
              config: W,
              unoptimized: u,
              placeholder: Z,
              loader: G,
              srcString: me,
              onLoadingCompleteRef: Oe,
              setBlurComplete: ee,
              setIntersection: ne,
              isVisible: ie,
              noscriptSizes: n,
            },
            H
          );
          return s.default.createElement(
            s.default.Fragment,
            null,
            s.default.createElement(
              "span",
              { style: ae },
              ue
                ? s.default.createElement(
                    "span",
                    { style: le },
                    X
                      ? s.default.createElement("img", {
                          style: {
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          },
                          alt: "",
                          "aria-hidden": !0,
                          src: X,
                        })
                      : null
                  )
                : null,
              s.default.createElement(_, Object.assign({}, Ae))
            ),
            h
              ? s.default.createElement(
                  f.default,
                  null,
                  s.default.createElement(
                    "link",
                    Object.assign(
                      {
                        key: "__nimg-" + ve.src + ve.srcSet + ve.sizes,
                        rel: "preload",
                        as: "image",
                        href: ve.srcSet ? void 0 : ve.src,
                      },
                      je
                    )
                  )
                )
              : null
          );
        });
      var a = n(6495).Z,
        l = n(92648).Z,
        u = n(91598).Z,
        c = n(17273).Z,
        s = u(n(67294)),
        f = l(n(5443)),
        d = n(99309),
        p = n(57190),
        g = n(59977),
        y = (n(63794), n(82392));
      var h =
          {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
          } || {},
        v = h.experimentalUnoptimized,
        m = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
        },
        b = new Set(),
        w =
          (new Map(),
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
      var S = new Map([
        [
          "default",
          function (e) {
            var t = e.config,
              n = e.src,
              o = e.width,
              r = e.quality;
            0;
            if (n.endsWith(".svg") && !t.dangerouslyAllowSVG) return n;
            return ""
              .concat(y.normalizePathTrailingSlash(t.path), "?url=")
              .concat(encodeURIComponent(n), "&w=")
              .concat(o, "&q=")
              .concat(r || 75);
          },
        ],
        [
          "imgix",
          function (e) {
            var t = e.config,
              n = e.src,
              o = e.width,
              r = e.quality,
              i = new URL("".concat(t.path).concat(E(n))),
              a = i.searchParams;
            a.set("auto", a.getAll("auto").join(",") || "format"),
              a.set("fit", a.get("fit") || "max"),
              a.set("w", a.get("w") || o.toString()),
              r && a.set("q", r.toString());
            return i.href;
          },
        ],
        [
          "cloudinary",
          function (e) {
            var t = e.config,
              n = e.src,
              o = e.width,
              r = e.quality,
              i =
                ["f_auto", "c_limit", "w_" + o, "q_" + (r || "auto")].join(
                  ","
                ) + "/";
            return "".concat(t.path).concat(i).concat(E(n));
          },
        ],
        [
          "akamai",
          function (e) {
            var t = e.config,
              n = e.src,
              o = e.width;
            return "".concat(t.path).concat(E(n), "?imwidth=").concat(o);
          },
        ],
        [
          "custom",
          function (e) {
            var t = e.src;
            throw new Error(
              'Image with src "'.concat(t, '" is missing "loader" prop.') +
                "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader"
            );
          },
        ],
      ]);
      function j(e) {
        return void 0 !== e.default;
      }
      function x(e) {
        var t = e.config,
          n = e.src,
          o = e.unoptimized,
          r = e.layout,
          a = e.width,
          l = e.quality,
          u = e.sizes,
          c = e.loader;
        if (o) return { src: n, srcSet: void 0, sizes: void 0 };
        var s = (function (e, t, n, o) {
            var r = e.deviceSizes,
              a = e.allSizes;
            if (o && ("fill" === n || "responsive" === n)) {
              for (var l, u = /(^|\s)(1?\d?\d)vw/g, c = []; (l = u.exec(o)); l)
                c.push(parseInt(l[2]));
              if (c.length) {
                var s,
                  f = 0.01 * (s = Math).min.apply(s, i(c));
                return {
                  widths: a.filter(function (e) {
                    return e >= r[0] * f;
                  }),
                  kind: "w",
                };
              }
              return { widths: a, kind: "w" };
            }
            return "number" !== typeof t || "fill" === n || "responsive" === n
              ? { widths: r, kind: "w" }
              : {
                  widths: i(
                    new Set(
                      [t, 2 * t].map(function (e) {
                        return (
                          a.find(function (t) {
                            return t >= e;
                          }) || a[a.length - 1]
                        );
                      })
                    )
                  ),
                  kind: "x",
                };
          })(t, a, r, u),
          f = s.widths,
          d = s.kind,
          p = f.length - 1;
        return {
          sizes: u || "w" !== d ? u : "100vw",
          srcSet: f
            .map(function (e, o) {
              return ""
                .concat(c({ config: t, src: n, quality: l, width: e }), " ")
                .concat("w" === d ? e : o + 1)
                .concat(d);
            })
            .join(", "),
          src: c({ config: t, src: n, quality: l, width: f[p] }),
        };
      }
      function O(e) {
        return "number" === typeof e
          ? e
          : "string" === typeof e
          ? parseInt(e, 10)
          : void 0;
      }
      function z(e) {
        var t,
          n = (null == (t = e.config) ? void 0 : t.loader) || "default",
          o = S.get(n);
        if (o) return o(e);
        throw new Error(
          'Unknown "loader" found in "next.config.js". Expected: '
            .concat(d.VALID_LOADERS.join(", "), ". Received: ")
            .concat(n)
        );
      }
      function A(e, t, n, o, r, i) {
        e &&
          e.src !== w &&
          e["data-loaded-src"] !== t &&
          ((e["data-loaded-src"] = t),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(function () {})
            .then(function () {
              if (
                e.parentNode &&
                (b.add(t),
                "blur" === o && i(!0),
                null == r ? void 0 : r.current)
              ) {
                var n = e.naturalWidth,
                  a = e.naturalHeight;
                r.current({ naturalWidth: n, naturalHeight: a });
              }
            }));
      }
      var _ = function (e) {
        var t = e.imgAttributes,
          n = (e.heightInt, e.widthInt),
          o = e.qualityInt,
          r = e.layout,
          i = e.className,
          l = e.imgStyle,
          u = e.blurStyle,
          f = e.isLazy,
          d = e.placeholder,
          p = e.loading,
          g = e.srcString,
          y = e.config,
          h = e.unoptimized,
          v = e.loader,
          m = e.onLoadingCompleteRef,
          b = e.setBlurComplete,
          w = e.setIntersection,
          S = e.onLoad,
          j = e.onError,
          O = (e.isVisible, e.noscriptSizes),
          z = c(e, [
            "imgAttributes",
            "heightInt",
            "widthInt",
            "qualityInt",
            "layout",
            "className",
            "imgStyle",
            "blurStyle",
            "isLazy",
            "placeholder",
            "loading",
            "srcString",
            "config",
            "unoptimized",
            "loader",
            "onLoadingCompleteRef",
            "setBlurComplete",
            "setIntersection",
            "onLoad",
            "onError",
            "isVisible",
            "noscriptSizes",
          ]);
        return (
          (p = f ? "lazy" : p),
          s.default.createElement(
            s.default.Fragment,
            null,
            s.default.createElement(
              "img",
              Object.assign({}, z, t, {
                decoding: "async",
                "data-nimg": r,
                className: i,
                style: a({}, l, u),
                ref: s.useCallback(
                  function (e) {
                    w(e),
                      (null == e ? void 0 : e.complete) && A(e, g, 0, d, m, b);
                  },
                  [w, g, r, d, m, b]
                ),
                onLoad: function (e) {
                  A(e.currentTarget, g, 0, d, m, b), S && S(e);
                },
                onError: function (e) {
                  "blur" === d && b(!0), j && j(e);
                },
              })
            ),
            (f || "blur" === d) &&
              s.default.createElement(
                "noscript",
                null,
                s.default.createElement(
                  "img",
                  Object.assign(
                    {},
                    z,
                    x({
                      config: y,
                      src: g,
                      unoptimized: h,
                      layout: r,
                      width: n,
                      quality: o,
                      sizes: O,
                      loader: v,
                    }),
                    {
                      decoding: "async",
                      "data-nimg": r,
                      style: l,
                      className: i,
                      loading: p,
                    }
                  )
                )
              )
          )
        );
      };
      function E(e) {
        return "/" === e[0] ? e.slice(1) : e;
      }
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    48418: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(94941).Z;
      n(45753).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = n(92648).Z,
        i = n(17273).Z,
        a = r(n(67294)),
        l = n(76273),
        u = n(22725),
        c = n(63462),
        s = n(21018),
        f = n(57190),
        d = n(71210),
        p = n(98684),
        g = "undefined" !== typeof a.default.useTransition,
        y = {};
      function h(e, t, n, o) {
        if (e && l.isLocalURL(t)) {
          e.prefetch(t, n, o).catch(function (e) {
            0;
          });
          var r =
            o && "undefined" !== typeof o.locale ? o.locale : e && e.locale;
          y[t + "%" + n + (r ? "%" + r : "")] = !0;
        }
      }
      var v = a.default.forwardRef(function (e, t) {
        var n,
          r = e.href,
          v = e.as,
          m = e.children,
          b = e.prefetch,
          w = e.passHref,
          S = e.replace,
          j = e.soft,
          x = e.shallow,
          O = e.scroll,
          z = e.locale,
          A = e.onClick,
          _ = e.onMouseEnter,
          E = e.onTouchStart,
          R = e.legacyBehavior,
          C = void 0 === R ? !0 !== Boolean(!1) : R,
          k = i(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "soft",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (n = m),
          !C ||
            ("string" !== typeof n && "number" !== typeof n) ||
            (n = a.default.createElement("a", null, n));
        var L = !1 !== b,
          P = o(g ? a.default.useTransition() : [], 2)[1],
          I = a.default.useContext(c.RouterContext),
          M = a.default.useContext(s.AppRouterContext);
        M && (I = M);
        var q,
          N = a.default.useMemo(
            function () {
              var e = o(l.resolveHref(I, r, !0), 2),
                t = e[0],
                n = e[1];
              return { href: t, as: v ? l.resolveHref(I, v) : n || t };
            },
            [I, r, v]
          ),
          D = N.href,
          Z = N.as,
          B = a.default.useRef(D),
          U = a.default.useRef(Z);
        C && (q = a.default.Children.only(n));
        var T = C ? q && "object" === typeof q && q.ref : t,
          W = o(f.useIntersection({ rootMargin: "200px" }), 3),
          H = W[0],
          V = W[1],
          G = W[2],
          F = a.default.useCallback(
            function (e) {
              (U.current === Z && B.current === D) ||
                (G(), (U.current = Z), (B.current = D)),
                H(e),
                T &&
                  ("function" === typeof T
                    ? T(e)
                    : "object" === typeof T && (T.current = e));
            },
            [Z, T, D, G, H]
          );
        a.default.useEffect(
          function () {
            var e = V && L && l.isLocalURL(D),
              t = "undefined" !== typeof z ? z : I && I.locale,
              n = y[D + "%" + Z + (t ? "%" + t : "")];
            e && !n && h(I, D, Z, { locale: t });
          },
          [Z, D, V, z, L, I]
        );
        var K = {
          ref: F,
          onClick: function (e) {
            C || "function" !== typeof A || A(e),
              C &&
                q.props &&
                "function" === typeof q.props.onClick &&
                q.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, o, r, i, a, u, c, s) {
                  if (
                    "A" !== e.currentTarget.nodeName.toUpperCase() ||
                    (!(function (e) {
                      var t = e.currentTarget.target;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      l.isLocalURL(n))
                  ) {
                    e.preventDefault();
                    var f = function () {
                      "softPush" in t && "softReplace" in t
                        ? t[
                            i
                              ? r
                                ? "softReplace"
                                : "softPush"
                              : r
                              ? "replace"
                              : "push"
                          ](n)
                        : t[r ? "replace" : "push"](n, o, {
                            shallow: a,
                            locale: c,
                            scroll: u,
                          });
                    };
                    s ? s(f) : f();
                  }
                })(e, I, D, Z, S, j, x, O, z, M ? P : void 0);
          },
          onMouseEnter: function (e) {
            C || "function" !== typeof _ || _(e),
              C &&
                q.props &&
                "function" === typeof q.props.onMouseEnter &&
                q.props.onMouseEnter(e),
              l.isLocalURL(D) && h(I, D, Z, { priority: !0 });
          },
          onTouchStart: function (e) {
            C || "function" !== typeof E || E(e),
              C &&
                q.props &&
                "function" === typeof q.props.onTouchStart &&
                q.props.onTouchStart(e),
              l.isLocalURL(D) && h(I, D, Z, { priority: !0 });
          },
        };
        if (!C || w || ("a" === q.type && !("href" in q.props))) {
          var J = "undefined" !== typeof z ? z : I && I.locale,
            Q =
              I &&
              I.isLocaleDomain &&
              d.getDomainLocale(Z, J, I.locales, I.domainLocales);
          K.href = Q || p.addBasePath(u.addLocale(Z, J, I && I.defaultLocale));
        }
        return C
          ? a.default.cloneElement(q, K)
          : a.default.createElement("a", Object.assign({}, k, K), n);
      });
      (t.default = v),
        ("function" === typeof t.default ||
          ("object" === typeof t.default && null !== t.default)) &&
          "undefined" === typeof t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    57190: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(94941).Z;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          var t = e.rootRef,
            n = e.rootMargin,
            c = e.disabled || !a,
            s = r.useRef(),
            f = o(r.useState(!1), 2),
            d = f[0],
            p = f[1],
            g = o(r.useState(null), 2),
            y = g[0],
            h = g[1];
          r.useEffect(
            function () {
              if (a) {
                if ((s.current && (s.current(), (s.current = void 0)), c || d))
                  return;
                return (
                  y &&
                    y.tagName &&
                    (s.current = (function (e, t, n) {
                      var o = (function (e) {
                          var t,
                            n = {
                              root: e.root || null,
                              margin: e.rootMargin || "",
                            },
                            o = u.find(function (e) {
                              return e.root === n.root && e.margin === n.margin;
                            });
                          if (o && (t = l.get(o))) return t;
                          var r = new Map(),
                            i = new IntersectionObserver(function (e) {
                              e.forEach(function (e) {
                                var t = r.get(e.target),
                                  n =
                                    e.isIntersecting || e.intersectionRatio > 0;
                                t && n && t(n);
                              });
                            }, e);
                          return (
                            (t = { id: n, observer: i, elements: r }),
                            u.push(n),
                            l.set(n, t),
                            t
                          );
                        })(n),
                        r = o.id,
                        i = o.observer,
                        a = o.elements;
                      return (
                        a.set(e, t),
                        i.observe(e),
                        function () {
                          if ((a.delete(e), i.unobserve(e), 0 === a.size)) {
                            i.disconnect(), l.delete(r);
                            var t = u.findIndex(function (e) {
                              return e.root === r.root && e.margin === r.margin;
                            });
                            t > -1 && u.splice(t, 1);
                          }
                        }
                      );
                    })(
                      y,
                      function (e) {
                        return e && p(e);
                      },
                      { root: null == t ? void 0 : t.current, rootMargin: n }
                    )),
                  function () {
                    null == s.current || s.current(), (s.current = void 0);
                  }
                );
              }
              if (!d) {
                var e = i.requestIdleCallback(function () {
                  return p(!0);
                });
                return function () {
                  return i.cancelIdleCallback(e);
                };
              }
            },
            [y, c, n, t, d]
          );
          var v = r.useCallback(function () {
            p(!1);
          }, []);
          return [h, d, v];
        });
      var r = n(67294),
        i = n(9311),
        a = "function" === typeof IntersectionObserver;
      var l = new Map(),
        u = [];
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    21018: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GlobalLayoutRouterContext =
          t.LayoutRouterContext =
          t.AppRouterContext =
            void 0);
      var o = (0, n(92648).Z)(n(67294)),
        r = o.default.createContext(null);
      t.AppRouterContext = r;
      var i = o.default.createContext(null);
      t.LayoutRouterContext = i;
      var a = o.default.createContext(null);
      t.GlobalLayoutRouterContext = a;
    },
    25675: function (e, t, n) {
      e.exports = n(28045);
    },
    41664: function (e, t, n) {
      e.exports = n(48418);
    },
    11163: function (e, t, n) {
      e.exports = n(90387);
    },
    69396: function (e, t, n) {
      "use strict";
      function o(e, t) {
        return (
          (t = null != t ? t : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var o = Object.getOwnPropertySymbols(e);
                  t &&
                    (o = o.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, o);
                }
                return n;
              })(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              }),
          e
        );
      }
      n.d(t, {
        Z: function () {
          return o;
        },
      });
    },
    99534: function (e, t, n) {
      "use strict";
      function o(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              o,
              r = {},
              i = Object.keys(e);
            for (o = 0; o < i.length; o++)
              (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (o = 0; o < i.length; o++)
            (n = i[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      n.d(t, {
        Z: function () {
          return o;
        },
      });
    },
  },
]);
