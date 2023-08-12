(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [581],
  {
    56546: function (e, t) {
      !(function (e) {
        "use strict";
        function t(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function n(e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        }
        var r,
          i,
          o,
          a,
          s,
          l,
          c,
          u,
          f,
          d,
          p,
          h,
          g = function () {
            return (
              r ||
              ("undefined" !== typeof window &&
                (r = window.gsap) &&
                r.registerPlugin &&
                r)
            );
          },
          v = 1,
          m = [],
          y = [],
          b = [],
          x = Date.now,
          w = function (e, t) {
            return t;
          },
          _ = function () {
            var e = f.core,
              t = e.bridge || {},
              n = e._scrollers,
              r = e._proxies;
            n.push.apply(n, y),
              r.push.apply(r, b),
              (y = n),
              (b = r),
              (w = function (e, n) {
                return t[e](n);
              });
          },
          k = function (e, t) {
            return ~b.indexOf(e) && b[b.indexOf(e) + 1][t];
          },
          S = function (e) {
            return !!~d.indexOf(e);
          },
          C = function (e, t, n, r, i) {
            return e.addEventListener(t, n, { passive: !r, capture: !!i });
          },
          T = function (e, t, n, r) {
            return e.removeEventListener(t, n, !!r);
          },
          E = "scrollLeft",
          M = "scrollTop",
          P = function () {
            return (p && p.isPressed) || y.cache++;
          },
          O = function (e, t) {
            var n = function n(r) {
              if (r || 0 === r) {
                v && (o.history.scrollRestoration = "manual");
                var i = p && p.isPressed;
                (r = n.v = Math.round(r) || (p && p.iOS ? 1 : 0)),
                  e(r),
                  (n.cacheID = y.cache),
                  i && w("ss", r);
              } else
                (t || y.cache !== n.cacheID || w("ref")) &&
                  ((n.cacheID = y.cache), (n.v = e()));
              return n.v + n.offset;
            };
            return (n.offset = 0), e && n;
          },
          A = {
            s: E,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: O(function (e) {
              return arguments.length
                ? o.scrollTo(e, D.sc())
                : o.pageXOffset || a[E] || s[E] || l[E] || 0;
            }),
          },
          D = {
            s: M,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: A,
            sc: O(function (e) {
              return arguments.length
                ? o.scrollTo(A.sc(), e)
                : o.pageYOffset || a[M] || s[M] || l[M] || 0;
            }),
          },
          R = function (e) {
            return (
              r.utils.toArray(e)[0] ||
              ("string" === typeof e && !1 !== r.config().nullTargetWarn
                ? console.warn("Element not found:", e)
                : null)
            );
          },
          Y = function (e, t) {
            var n = t.s,
              r = t.sc,
              i = y.indexOf(e),
              o = r === D.sc ? 1 : 2;
            return (
              !~i && (i = y.push(e) - 1),
              y[i + o] ||
                (y[i + o] =
                  O(k(e, n), !0) ||
                  (S(e)
                    ? r
                    : O(function (t) {
                        return arguments.length ? (e[n] = t) : e[n];
                      })))
            );
          },
          I = function (e, t, n) {
            var r = e,
              i = e,
              o = x(),
              a = o,
              s = t || 50,
              l = Math.max(500, 3 * s),
              c = function (e, t) {
                var l = x();
                t || l - o > s
                  ? ((i = r), (r = e), (a = o), (o = l))
                  : n
                  ? (r += e)
                  : (r = i + ((e - i) / (l - a)) * (o - a));
              },
              u = function (e) {
                var t = a,
                  s = i,
                  u = x();
                return (
                  (e || 0 === e) && e !== r && c(e),
                  o === a || u - a > l
                    ? 0
                    : ((r + (n ? s : -s)) / ((n ? u : o) - t)) * 1e3
                );
              };
            return {
              update: c,
              reset: function () {
                (i = r = n ? 0 : r), (a = o = 0);
              },
              getVelocity: u,
            };
          },
          X = function (e, t) {
            return (
              t && !e._gsapAllow && e.preventDefault(),
              e.changedTouches ? e.changedTouches[0] : e
            );
          },
          z = function (e) {
            var t = Math.max.apply(Math, e),
              n = Math.min.apply(Math, e);
            return Math.abs(t) >= Math.abs(n) ? t : n;
          },
          B = function () {
            (f = r.core.globals().ScrollTrigger) && f.core && _();
          },
          N = function (e) {
            return (
              (r = e || g()) &&
                "undefined" !== typeof document &&
                document.body &&
                ((o = window),
                (a = document),
                (s = a.documentElement),
                (l = a.body),
                (d = [o, a, s, l]),
                r.utils.clamp,
                (u = "onpointerenter" in l ? "pointer" : "mouse"),
                (c = L.isTouch =
                  o.matchMedia &&
                  o.matchMedia("(hover: none), (pointer: coarse)").matches
                    ? 1
                    : "ontouchstart" in o ||
                      navigator.maxTouchPoints > 0 ||
                      navigator.msMaxTouchPoints > 0
                    ? 2
                    : 0),
                (h = L.eventTypes =
                  (
                    "ontouchstart" in s
                      ? "touchstart,touchmove,touchcancel,touchend"
                      : "onpointerdown" in s
                      ? "pointerdown,pointermove,pointercancel,pointerup"
                      : "mousedown,mousemove,mouseup,mouseup"
                  ).split(",")),
                setTimeout(function () {
                  return (v = 0);
                }, 500),
                B(),
                (i = 1)),
              i
            );
          };
        (A.op = D), (y.cache = 0);
        var L = (function () {
          function e(e) {
            this.init(e);
          }
          return (
            (e.prototype.init = function (e) {
              i || N(r) || console.warn("Please gsap.registerPlugin(Observer)"),
                f || B();
              var t = e.tolerance,
                n = e.dragMinimum,
                d = e.type,
                g = e.target,
                v = e.lineHeight,
                y = e.debounce,
                b = e.preventDefault,
                w = e.onStop,
                _ = e.onStopDelay,
                k = e.ignore,
                E = e.wheelSpeed,
                M = e.event,
                O = e.onDragStart,
                L = e.onDragEnd,
                F = e.onDrag,
                H = e.onPress,
                W = e.onRelease,
                U = e.onRight,
                V = e.onLeft,
                j = e.onUp,
                q = e.onDown,
                G = e.onChangeX,
                K = e.onChangeY,
                Z = e.onChange,
                $ = e.onToggleX,
                J = e.onToggleY,
                Q = e.onHover,
                ee = e.onHoverEnd,
                te = e.onMove,
                ne = e.ignoreCheck,
                re = e.isNormalizer,
                ie = e.onGestureStart,
                oe = e.onGestureEnd,
                ae = e.onWheel,
                se = e.onEnable,
                le = e.onDisable,
                ce = e.onClick,
                ue = e.scrollSpeed,
                fe = e.capture,
                de = e.allowClicks,
                pe = e.lockAxis,
                he = e.onLockAxis;
              (this.target = g = R(g) || s),
                (this.vars = e),
                k && (k = r.utils.toArray(k)),
                (t = t || 0),
                (n = n || 0),
                (E = E || 1),
                (ue = ue || 1),
                (d = d || "wheel,touch,pointer"),
                (y = !1 !== y),
                v || (v = parseFloat(o.getComputedStyle(l).lineHeight) || 22);
              var ge,
                ve,
                me,
                ye,
                be,
                xe,
                we,
                _e = this,
                ke = 0,
                Se = 0,
                Ce = Y(g, A),
                Te = Y(g, D),
                Ee = Ce(),
                Me = Te(),
                Pe =
                  ~d.indexOf("touch") &&
                  !~d.indexOf("pointer") &&
                  "pointerdown" === h[0],
                Oe = S(g),
                Ae = g.ownerDocument || a,
                De = [0, 0, 0],
                Re = [0, 0, 0],
                Ye = 0,
                Ie = function () {
                  return (Ye = x());
                },
                Xe = function (e, t) {
                  return (
                    ((_e.event = e) && k && ~k.indexOf(e.target)) ||
                    (t && Pe && "touch" !== e.pointerType) ||
                    (ne && ne(e, t))
                  );
                },
                ze = function () {
                  _e._vx.reset(), _e._vy.reset(), ve.pause(), w && w(_e);
                },
                Be = function () {
                  var e = (_e.deltaX = z(De)),
                    n = (_e.deltaY = z(Re)),
                    r = Math.abs(e) >= t,
                    i = Math.abs(n) >= t;
                  Z && (r || i) && Z(_e, e, n, De, Re),
                    r &&
                      (U && _e.deltaX > 0 && U(_e),
                      V && _e.deltaX < 0 && V(_e),
                      G && G(_e),
                      $ && _e.deltaX < 0 !== ke < 0 && $(_e),
                      (ke = _e.deltaX),
                      (De[0] = De[1] = De[2] = 0)),
                    i &&
                      (q && _e.deltaY > 0 && q(_e),
                      j && _e.deltaY < 0 && j(_e),
                      K && K(_e),
                      J && _e.deltaY < 0 !== Se < 0 && J(_e),
                      (Se = _e.deltaY),
                      (Re[0] = Re[1] = Re[2] = 0)),
                    (ye || me) &&
                      (te && te(_e),
                      he && xe && he(_e),
                      me && (F(_e), (me = !1)),
                      (ye = xe = !1)),
                    be && (ae(_e), (be = !1)),
                    (ge = 0);
                },
                Ne = function (e, t, n) {
                  (De[n] += e),
                    (Re[n] += t),
                    _e._vx.update(e),
                    _e._vy.update(t),
                    y ? ge || (ge = requestAnimationFrame(Be)) : Be();
                },
                Le = function (e, t) {
                  "y" !== we && ((De[2] += e), _e._vx.update(e, !0)),
                    "x" !== we && ((Re[2] += t), _e._vy.update(t, !0)),
                    pe &&
                      !we &&
                      ((_e.axis = we = Math.abs(e) > Math.abs(t) ? "x" : "y"),
                      (xe = !0)),
                    y ? ge || (ge = requestAnimationFrame(Be)) : Be();
                },
                Fe = function (e) {
                  if (!Xe(e, 1)) {
                    var t = (e = X(e, b)).clientX,
                      r = e.clientY,
                      i = t - _e.x,
                      o = r - _e.y,
                      a = _e.isDragging;
                    (_e.x = t),
                      (_e.y = r),
                      (a ||
                        Math.abs(_e.startX - t) >= n ||
                        Math.abs(_e.startY - r) >= n) &&
                        (F && (me = !0),
                        a || (_e.isDragging = !0),
                        Le(i, o),
                        a || (O && O(_e)));
                  }
                },
                He = (_e.onPress = function (e) {
                  Xe(e, 1) ||
                    ((_e.axis = we = null),
                    ve.pause(),
                    (_e.isPressed = !0),
                    (e = X(e)),
                    (ke = Se = 0),
                    (_e.startX = _e.x = e.clientX),
                    (_e.startY = _e.y = e.clientY),
                    _e._vx.reset(),
                    _e._vy.reset(),
                    C(re ? g : Ae, h[1], Fe, b, !0),
                    (_e.deltaX = _e.deltaY = 0),
                    H && H(_e));
                }),
                We = function (e) {
                  if (!Xe(e, 1)) {
                    T(re ? g : Ae, h[1], Fe, !0);
                    var t =
                        _e.isDragging &&
                        (Math.abs(_e.x - _e.startX) > 3 ||
                          Math.abs(_e.y - _e.startY) > 3),
                      n = X(e);
                    t ||
                      (_e._vx.reset(),
                      _e._vy.reset(),
                      b &&
                        de &&
                        r.delayedCall(0.08, function () {
                          if (x() - Ye > 300 && !e.defaultPrevented)
                            if (e.target.click) e.target.click();
                            else if (Ae.createEvent) {
                              var t = Ae.createEvent("MouseEvents");
                              t.initMouseEvent(
                                "click",
                                !0,
                                !0,
                                o,
                                1,
                                n.screenX,
                                n.screenY,
                                n.clientX,
                                n.clientY,
                                !1,
                                !1,
                                !1,
                                !1,
                                0,
                                null
                              ),
                                e.target.dispatchEvent(t);
                            }
                        })),
                      (_e.isDragging = _e.isGesturing = _e.isPressed = !1),
                      w && !re && ve.restart(!0),
                      L && t && L(_e),
                      W && W(_e, t);
                  }
                },
                Ue = function (e) {
                  return (
                    e.touches &&
                    e.touches.length > 1 &&
                    (_e.isGesturing = !0) &&
                    ie(e, _e.isDragging)
                  );
                },
                Ve = function () {
                  return (_e.isGesturing = !1) || oe(_e);
                },
                je = function (e) {
                  if (!Xe(e)) {
                    var t = Ce(),
                      n = Te();
                    Ne((t - Ee) * ue, (n - Me) * ue, 1),
                      (Ee = t),
                      (Me = n),
                      w && ve.restart(!0);
                  }
                },
                qe = function (e) {
                  if (!Xe(e)) {
                    (e = X(e, b)), ae && (be = !0);
                    var t =
                      (1 === e.deltaMode
                        ? v
                        : 2 === e.deltaMode
                        ? o.innerHeight
                        : 1) * E;
                    Ne(e.deltaX * t, e.deltaY * t, 0),
                      w && !re && ve.restart(!0);
                  }
                },
                Ge = function (e) {
                  if (!Xe(e)) {
                    var t = e.clientX,
                      n = e.clientY,
                      r = t - _e.x,
                      i = n - _e.y;
                    (_e.x = t), (_e.y = n), (ye = !0), (r || i) && Le(r, i);
                  }
                },
                Ke = function (e) {
                  (_e.event = e), Q(_e);
                },
                Ze = function (e) {
                  (_e.event = e), ee(_e);
                },
                $e = function (e) {
                  return Xe(e) || (X(e, b) && ce(_e));
                };
              (ve = _e._dc = r.delayedCall(_ || 0.25, ze).pause()),
                (_e.deltaX = _e.deltaY = 0),
                (_e._vx = I(0, 50, !0)),
                (_e._vy = I(0, 50, !0)),
                (_e.scrollX = Ce),
                (_e.scrollY = Te),
                (_e.isDragging = _e.isGesturing = _e.isPressed = !1),
                (_e.enable = function (e) {
                  return (
                    _e.isEnabled ||
                      (C(Oe ? Ae : g, "scroll", P),
                      d.indexOf("scroll") >= 0 &&
                        C(Oe ? Ae : g, "scroll", je, b, fe),
                      d.indexOf("wheel") >= 0 && C(g, "wheel", qe, b, fe),
                      ((d.indexOf("touch") >= 0 && c) ||
                        d.indexOf("pointer") >= 0) &&
                        (C(g, h[0], He, b, fe),
                        C(Ae, h[2], We),
                        C(Ae, h[3], We),
                        de && C(g, "click", Ie, !1, !0),
                        ce && C(g, "click", $e),
                        ie && C(Ae, "gesturestart", Ue),
                        oe && C(Ae, "gestureend", Ve),
                        Q && C(g, u + "enter", Ke),
                        ee && C(g, u + "leave", Ze),
                        te && C(g, u + "move", Ge)),
                      (_e.isEnabled = !0),
                      e && e.type && He(e),
                      se && se(_e)),
                    _e
                  );
                }),
                (_e.disable = function () {
                  _e.isEnabled &&
                    (m.filter(function (e) {
                      return e !== _e && S(e.target);
                    }).length || T(Oe ? Ae : g, "scroll", P),
                    _e.isPressed &&
                      (_e._vx.reset(),
                      _e._vy.reset(),
                      T(re ? g : Ae, h[1], Fe, !0)),
                    T(Oe ? Ae : g, "scroll", je, fe),
                    T(g, "wheel", qe, fe),
                    T(g, h[0], He, fe),
                    T(Ae, h[2], We),
                    T(Ae, h[3], We),
                    T(g, "click", Ie, !0),
                    T(g, "click", $e),
                    T(Ae, "gesturestart", Ue),
                    T(Ae, "gestureend", Ve),
                    T(g, u + "enter", Ke),
                    T(g, u + "leave", Ze),
                    T(g, u + "move", Ge),
                    (_e.isEnabled = _e.isPressed = _e.isDragging = !1),
                    le && le(_e));
                }),
                (_e.kill = function () {
                  _e.disable();
                  var e = m.indexOf(_e);
                  e >= 0 && m.splice(e, 1), p === _e && (p = 0);
                }),
                m.push(_e),
                re && S(g) && (p = _e),
                _e.enable(M);
            }),
            n(e, [
              {
                key: "velocityX",
                get: function () {
                  return this._vx.getVelocity();
                },
              },
              {
                key: "velocityY",
                get: function () {
                  return this._vy.getVelocity();
                },
              },
            ]),
            e
          );
        })();
        (L.version = "3.10.4"),
          (L.create = function (e) {
            return new L(e);
          }),
          (L.register = N),
          (L.getAll = function () {
            return m.slice();
          }),
          (L.getById = function (e) {
            return m.filter(function (t) {
              return t.vars.id === e;
            })[0];
          }),
          g() && r.registerPlugin(L);
        var F,
          H,
          W,
          U,
          V,
          j,
          q,
          G,
          K,
          Z,
          $,
          J,
          Q,
          ee,
          te,
          ne,
          re,
          ie,
          oe,
          ae,
          se,
          le,
          ce,
          ue,
          fe,
          de,
          pe,
          he,
          ge,
          ve,
          me,
          ye,
          be,
          xe = 1,
          we = Date.now,
          _e = we(),
          ke = 0,
          Se = 0,
          Ce = function () {
            return (ee = 1);
          },
          Te = function () {
            return (ee = 0);
          },
          Ee = function (e) {
            return e;
          },
          Me = function (e) {
            return Math.round(1e5 * e) / 1e5 || 0;
          },
          Pe = function () {
            return "undefined" !== typeof window;
          },
          Oe = function () {
            return F || (Pe() && (F = window.gsap) && F.registerPlugin && F);
          },
          Ae = function (e) {
            return !!~q.indexOf(e);
          },
          De = function (e) {
            return (
              k(e, "getBoundingClientRect") ||
              (Ae(e)
                ? function () {
                    return (
                      (tn.width = W.innerWidth), (tn.height = W.innerHeight), tn
                    );
                  }
                : function () {
                    return ut(e);
                  })
            );
          },
          Re = function (e, t, n) {
            var r = n.d,
              i = n.d2,
              o = n.a;
            return (o = k(e, "getBoundingClientRect"))
              ? function () {
                  return o()[r];
                }
              : function () {
                  return (t ? W["inner" + i] : e["client" + i]) || 0;
                };
          },
          Ye = function (e, t) {
            return !t || ~b.indexOf(e)
              ? De(e)
              : function () {
                  return tn;
                };
          },
          Ie = function (e, t) {
            var n = t.s,
              r = t.d2,
              i = t.d,
              o = t.a;
            return (n = "scroll" + r) && (o = k(e, n))
              ? o() - De(e)()[i]
              : Ae(e)
              ? (V[n] || j[n]) -
                (W["inner" + r] || V["client" + r] || j["client" + r])
              : e[n] - e["offset" + r];
          },
          Xe = function (e, t) {
            for (var n = 0; n < oe.length; n += 3)
              (!t || ~t.indexOf(oe[n + 1])) && e(oe[n], oe[n + 1], oe[n + 2]);
          },
          ze = function (e) {
            return "string" === typeof e;
          },
          Be = function (e) {
            return "function" === typeof e;
          },
          Ne = function (e) {
            return "number" === typeof e;
          },
          Le = function (e) {
            return "object" === typeof e;
          },
          Fe = function (e) {
            return Be(e) && e();
          },
          He = function (e, t) {
            return function () {
              var n = Fe(e),
                r = Fe(t);
              return function () {
                Fe(n), Fe(r);
              };
            };
          },
          We = function (e, t, n) {
            return e && e.progress(t ? 0 : 1) && n && e.pause();
          },
          Ue = function (e, t) {
            if (e.enabled) {
              var n = t(e);
              n && n.totalTime && (e.callbackAnimation = n);
            }
          },
          Ve = Math.abs,
          je = "left",
          qe = "top",
          Ge = "right",
          Ke = "bottom",
          Ze = "width",
          $e = "height",
          Je = "Right",
          Qe = "Left",
          et = "Top",
          tt = "Bottom",
          nt = "padding",
          rt = "margin",
          it = "Width",
          ot = "Height",
          at = "px",
          st = function (e) {
            return W.getComputedStyle(e);
          },
          lt = function (e) {
            var t = st(e).position;
            e.style.position =
              "absolute" === t || "fixed" === t ? t : "relative";
          },
          ct = function (e, t) {
            for (var n in t) n in e || (e[n] = t[n]);
            return e;
          },
          ut = function (e, t) {
            var n =
                t &&
                "matrix(1, 0, 0, 1, 0, 0)" !== st(e)[te] &&
                F.to(e, {
                  x: 0,
                  y: 0,
                  xPercent: 0,
                  yPercent: 0,
                  rotation: 0,
                  rotationX: 0,
                  rotationY: 0,
                  scale: 1,
                  skewX: 0,
                  skewY: 0,
                }).progress(1),
              r = e.getBoundingClientRect();
            return n && n.progress(0).kill(), r;
          },
          ft = function (e, t) {
            var n = t.d2;
            return e["offset" + n] || e["client" + n] || 0;
          },
          dt = function (e) {
            var t,
              n = [],
              r = e.labels,
              i = e.duration();
            for (t in r) n.push(r[t] / i);
            return n;
          },
          pt = function (e) {
            return function (t) {
              return F.utils.snap(dt(e), t);
            };
          },
          ht = function (e) {
            var t = F.utils.snap(e),
              n =
                Array.isArray(e) &&
                e.slice(0).sort(function (e, t) {
                  return e - t;
                });
            return n
              ? function (e, r, i) {
                  var o;
                  if ((void 0 === i && (i = 0.001), !r)) return t(e);
                  if (r > 0) {
                    for (e -= i, o = 0; o < n.length; o++)
                      if (n[o] >= e) return n[o];
                    return n[o - 1];
                  }
                  for (o = n.length, e += i; o--; ) if (n[o] <= e) return n[o];
                  return n[0];
                }
              : function (n, r, i) {
                  void 0 === i && (i = 0.001);
                  var o = t(n);
                  return !r || Math.abs(o - n) < i || o - n < 0 === r < 0
                    ? o
                    : t(r < 0 ? n - e : n + e);
                };
          },
          gt = function (e) {
            return function (t, n) {
              return ht(dt(e))(t, n.direction);
            };
          },
          vt = function (e, t, n, r) {
            return n.split(",").forEach(function (n) {
              return e(t, n, r);
            });
          },
          mt = function (e, t, n, r, i) {
            return e.addEventListener(t, n, { passive: !r, capture: !!i });
          },
          yt = function (e, t, n, r) {
            return e.removeEventListener(t, n, !!r);
          },
          bt = function (e, t, n) {
            return n && n.wheelHandler && e(t, "wheel", n);
          },
          xt = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal",
          },
          wt = { toggleActions: "play", anticipatePin: 0 },
          _t = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
          kt = function (e, t) {
            if (ze(e)) {
              var n = e.indexOf("="),
                r = ~n
                  ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1))
                  : 0;
              ~n &&
                (e.indexOf("%") > n && (r *= t / 100),
                (e = e.substr(0, n - 1))),
                (e =
                  r +
                  (e in _t
                    ? _t[e] * t
                    : ~e.indexOf("%")
                    ? (parseFloat(e) * t) / 100
                    : parseFloat(e) || 0));
            }
            return e;
          },
          St = function (e, t, n, r, i, o, a, s) {
            var l = i.startColor,
              c = i.endColor,
              u = i.fontSize,
              f = i.indent,
              d = i.fontWeight,
              p = U.createElement("div"),
              h = Ae(n) || "fixed" === k(n, "pinType"),
              g = -1 !== e.indexOf("scroller"),
              v = h ? j : n,
              m = -1 !== e.indexOf("start"),
              y = m ? l : c,
              b =
                "border-color:" +
                y +
                ";font-size:" +
                u +
                ";color:" +
                y +
                ";font-weight:" +
                d +
                ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return (
              (b += "position:" + ((g || s) && h ? "fixed;" : "absolute;")),
              (g || s || !h) &&
                (b += (r === D ? Ge : Ke) + ":" + (o + parseFloat(f)) + "px;"),
              a &&
                (b +=
                  "box-sizing:border-box;text-align:left;width:" +
                  a.offsetWidth +
                  "px;"),
              (p._isStart = m),
              p.setAttribute(
                "class",
                "gsap-marker-" + e + (t ? " marker-" + t : "")
              ),
              (p.style.cssText = b),
              (p.innerText = t || 0 === t ? e + "-" + t : e),
              v.children[0]
                ? v.insertBefore(p, v.children[0])
                : v.appendChild(p),
              (p._offset = p["offset" + r.op.d2]),
              Ct(p, 0, r, m),
              p
            );
          },
          Ct = function (e, t, n, r) {
            var i = { display: "block" },
              o = n[r ? "os2" : "p2"],
              a = n[r ? "p2" : "os2"];
            (e._isFlipped = r),
              (i[n.a + "Percent"] = r ? -100 : 0),
              (i[n.a] = r ? "1px" : 0),
              (i["border" + o + it] = 1),
              (i["border" + a + it] = 0),
              (i[n.p] = t + "px"),
              F.set(e, i);
          },
          Tt = [],
          Et = {},
          Mt = function () {
            return we() - ke > 34 && jt();
          },
          Pt = function () {
            (!ce || !ce.isPressed || ce.startX > j.clientWidth) &&
              (y.cache++,
              ge || (ge = requestAnimationFrame(jt)),
              ke || zt("scrollStart"),
              (ke = we()));
          },
          Ot = function () {
            (de = W.innerWidth), (fe = W.innerHeight);
          },
          At = function () {
            y.cache++,
              !Q &&
                !le &&
                !U.fullscreenElement &&
                !U.webkitFullscreenElement &&
                (!ue ||
                  de !== W.innerWidth ||
                  Math.abs(W.innerHeight - fe) > 0.25 * W.innerHeight) &&
                G.restart(!0);
          },
          Dt = {},
          Rt = [],
          Yt = [],
          It = function (e) {
            var t,
              n = F.ticker.frame,
              r = [],
              i = 0;
            if (me !== n || xe) {
              for (Lt(); i < Yt.length; i += 4)
                (t = W.matchMedia(Yt[i]).matches) !== Yt[i + 3] &&
                  ((Yt[i + 3] = t),
                  t
                    ? r.push(i)
                    : Lt(1, Yt[i]) || (Be(Yt[i + 2]) && Yt[i + 2]()));
              for (Nt(), i = 0; i < r.length; i++)
                (t = r[i]), (ve = Yt[t]), (Yt[t + 2] = Yt[t + 1](e));
              (ve = 0), H && Wt(0, 1), (me = n), zt("matchMedia");
            }
          },
          Xt = function e() {
            return yt(sn, "scrollEnd", e) || Wt(!0);
          },
          zt = function (e) {
            return (
              (Dt[e] &&
                Dt[e].map(function (e) {
                  return e();
                })) ||
              Rt
            );
          },
          Bt = [],
          Nt = function (e) {
            for (var t = 0; t < Bt.length; t += 5)
              (e && Bt[t + 4] !== e) ||
                ((Bt[t].style.cssText = Bt[t + 1]),
                Bt[t].getBBox &&
                  Bt[t].setAttribute("transform", Bt[t + 2] || ""),
                (Bt[t + 3].uncache = 1));
          },
          Lt = function (e, t) {
            var n;
            for (ne = 0; ne < Tt.length; ne++)
              (n = Tt[ne]),
                (t && n.media !== t) || (e ? n.kill(1) : n.revert());
            t && Nt(t), t || zt("revert");
          },
          Ft = function () {
            return (
              y.cache++ &&
              y.forEach(function (e) {
                return "function" === typeof e && (e.rec = 0);
              })
            );
          },
          Ht = 0,
          Wt = function (e, t) {
            if (!ke || e) {
              ye = !0;
              var n = zt("refreshInit");
              ae && sn.sort(),
                t || Lt(),
                Tt.slice(0).forEach(function (e) {
                  return e.refresh();
                }),
                Tt.forEach(function (e) {
                  return (
                    "max" === e.vars.end &&
                    e.setPositions(e.start, Ie(e.scroller, e._dir))
                  );
                }),
                n.forEach(function (e) {
                  return e && e.render && e.render(-1);
                }),
                Ft(),
                G.pause(),
                Ht++,
                (ye = !1),
                zt("refresh");
            } else mt(sn, "scrollEnd", Xt);
          },
          Ut = 0,
          Vt = 1,
          jt = function () {
            if (!ye) {
              (sn.isUpdating = !0), be && be.update(0);
              var e = Tt.length,
                t = we(),
                n = t - _e >= 50,
                r = e && Tt[0].scroll();
              if (
                ((Vt = Ut > r ? -1 : 1),
                (Ut = r),
                n &&
                  (ke && !ee && t - ke > 200 && ((ke = 0), zt("scrollEnd")),
                  ($ = _e),
                  (_e = t)),
                Vt < 0)
              ) {
                for (ne = e; ne-- > 0; ) Tt[ne] && Tt[ne].update(0, n);
                Vt = 1;
              } else for (ne = 0; ne < e; ne++) Tt[ne] && Tt[ne].update(0, n);
              sn.isUpdating = !1;
            }
            ge = 0;
          },
          qt = [
            je,
            qe,
            Ke,
            Ge,
            rt + tt,
            rt + Je,
            rt + et,
            rt + Qe,
            "display",
            "flexShrink",
            "float",
            "zIndex",
            "gridColumnStart",
            "gridColumnEnd",
            "gridRowStart",
            "gridRowEnd",
            "gridArea",
            "justifySelf",
            "alignSelf",
            "placeSelf",
            "order",
          ],
          Gt = qt.concat([
            Ze,
            $e,
            "boxSizing",
            "max" + it,
            "max" + ot,
            "position",
            rt,
            nt,
            nt + et,
            nt + Je,
            nt + tt,
            nt + Qe,
          ]),
          Kt = function (e, t, n) {
            Jt(n);
            var r = e._gsap;
            if (r.spacerIsNative) Jt(r.spacerState);
            else if (e.parentNode === t) {
              var i = t.parentNode;
              i && (i.insertBefore(e, t), i.removeChild(t));
            }
          },
          Zt = function (e, t, n, r) {
            if (e.parentNode !== t) {
              for (var i, o = qt.length, a = t.style, s = e.style; o--; )
                a[(i = qt[o])] = n[i];
              (a.position =
                "absolute" === n.position ? "absolute" : "relative"),
                "inline" === n.display && (a.display = "inline-block"),
                (s[Ke] = s[Ge] = a.flexBasis = "auto"),
                (a.overflow = "visible"),
                (a.boxSizing = "border-box"),
                (a[Ze] = ft(e, A) + at),
                (a[$e] = ft(e, D) + at),
                (a[nt] = s[rt] = s[qe] = s[je] = "0"),
                Jt(r),
                (s[Ze] = s["max" + it] = n[Ze]),
                (s[$e] = s["max" + ot] = n[$e]),
                (s[nt] = n[nt]),
                e.parentNode.insertBefore(t, e),
                t.appendChild(e);
            }
          },
          $t = /([A-Z])/g,
          Jt = function (e) {
            if (e) {
              var t,
                n,
                r = e.t.style,
                i = e.length,
                o = 0;
              for (
                (e.t._gsap || F.core.getCache(e.t)).uncache = 1;
                o < i;
                o += 2
              )
                (n = e[o + 1]),
                  (t = e[o]),
                  n
                    ? (r[t] = n)
                    : r[t] &&
                      r.removeProperty(t.replace($t, "-$1").toLowerCase());
            }
          },
          Qt = function (e) {
            for (var t = Gt.length, n = e.style, r = [], i = 0; i < t; i++)
              r.push(Gt[i], n[Gt[i]]);
            return (r.t = e), r;
          },
          en = function (e, t, n) {
            for (var r, i = [], o = e.length, a = n ? 8 : 0; a < o; a += 2)
              (r = e[a]), i.push(r, r in t ? t[r] : e[a + 1]);
            return (i.t = e.t), i;
          },
          tn = { left: 0, top: 0 },
          nn = function (e, t, n, r, i, o, a, s, l, c, u, f, d) {
            Be(e) && (e = e(s)),
              ze(e) &&
                "max" === e.substr(0, 3) &&
                (e = f + ("=" === e.charAt(4) ? kt("0" + e.substr(3), n) : 0));
            var p,
              h,
              g,
              v = d ? d.time() : 0;
            if ((d && d.seek(0), Ne(e))) a && Ct(a, n, r, !0);
            else {
              Be(t) && (t = t(s));
              var m,
                y,
                b,
                x,
                w = e.split(" ");
              (g = R(t) || j),
                ((m = ut(g) || {}) && (m.left || m.top)) ||
                  "none" !== st(g).display ||
                  ((x = g.style.display),
                  (g.style.display = "block"),
                  (m = ut(g)),
                  x
                    ? (g.style.display = x)
                    : g.style.removeProperty("display")),
                (y = kt(w[0], m[r.d])),
                (b = kt(w[1] || "0", n)),
                (e = m[r.p] - l[r.p] - c + y + i - b),
                a && Ct(a, b, r, n - b < 20 || (a._isStart && b > 20)),
                (n -= n - b);
            }
            if (o) {
              var _ = e + n,
                k = o._isStart;
              (p = "scroll" + r.d2),
                Ct(
                  o,
                  _,
                  r,
                  (k && _ > 20) ||
                    (!k &&
                      (u ? Math.max(j[p], V[p]) : o.parentNode[p]) <= _ + 1)
                ),
                u &&
                  ((l = ut(a)),
                  u && (o.style[r.op.p] = l[r.op.p] - r.op.m - o._offset + at));
            }
            return (
              d &&
                g &&
                ((p = ut(g)),
                d.seek(f),
                (h = ut(g)),
                (d._caScrollDist = p[r.p] - h[r.p]),
                (e = (e / d._caScrollDist) * f)),
              d && d.seek(v),
              d ? e : Math.round(e)
            );
          },
          rn = /(webkit|moz|length|cssText|inset)/i,
          on = function (e, t, n, r) {
            if (e.parentNode !== t) {
              var i,
                o,
                a = e.style;
              if (t === j) {
                for (i in ((e._stOrig = a.cssText), (o = st(e))))
                  +i ||
                    rn.test(i) ||
                    !o[i] ||
                    "string" !== typeof a[i] ||
                    "0" === i ||
                    (a[i] = o[i]);
                (a.top = n), (a.left = r);
              } else a.cssText = e._stOrig;
              (F.core.getCache(e).uncache = 1), t.appendChild(e);
            }
          },
          an = function (e, t) {
            var n,
              r,
              i = Y(e, t),
              o = "_scroll" + t.p2,
              a = function t(a, s, l, c, u) {
                var f = t.tween,
                  d = s.onComplete,
                  p = {};
                return (
                  (l = l || i()),
                  (u = (c && u) || 0),
                  (c = c || a - l),
                  f && f.kill(),
                  (n = Math.round(l)),
                  (s[o] = a),
                  (s.modifiers = p),
                  (p[o] = function (e) {
                    return (
                      (e = Me(i())) !== n &&
                      e !== r &&
                      Math.abs(e - n) > 2 &&
                      Math.abs(e - r) > 2
                        ? (f.kill(), (t.tween = 0))
                        : (e = l + c * f.ratio + u * f.ratio * f.ratio),
                      (r = n),
                      (n = Me(e))
                    );
                  }),
                  (s.onComplete = function () {
                    (t.tween = 0), d && d.call(f);
                  }),
                  (f = t.tween = F.to(e, s))
                );
              };
            return (
              (e[o] = i),
              (i.wheelHandler = function () {
                return a.tween && a.tween.kill() && (a.tween = 0);
              }),
              mt(e, "wheel", i.wheelHandler),
              a
            );
          },
          sn = (function () {
            function e(t, n) {
              H ||
                e.register(F) ||
                console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
                this.init(t, n);
            }
            return (
              (e.prototype.init = function (t, n) {
                if (
                  ((this.progress = this.start = 0),
                  this.vars && this.kill(!0, !0),
                  Se)
                ) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    l,
                    c,
                    u,
                    f,
                    d,
                    p,
                    h,
                    g,
                    v,
                    m,
                    y,
                    x,
                    w,
                    _,
                    S,
                    C,
                    T,
                    E,
                    M,
                    P,
                    O,
                    I,
                    X,
                    z,
                    B,
                    N,
                    L,
                    H,
                    q,
                    G,
                    J,
                    te,
                    re,
                    ie = (t = ct(
                      ze(t) || Ne(t) || t.nodeType ? { trigger: t } : t,
                      wt
                    )),
                    oe = ie.onUpdate,
                    le = ie.toggleClass,
                    ce = ie.id,
                    ue = ie.onToggle,
                    fe = ie.onRefresh,
                    de = ie.scrub,
                    pe = ie.trigger,
                    ge = ie.pin,
                    me = ie.pinSpacing,
                    _e = ie.invalidateOnRefresh,
                    Ce = ie.anticipatePin,
                    Te = ie.onScrubComplete,
                    Pe = ie.onSnapComplete,
                    Oe = ie.once,
                    De = ie.snap,
                    Xe = ie.pinReparent,
                    Fe = ie.pinSpacer,
                    He = ie.containerAnimation,
                    je = ie.fastScrollEnd,
                    qe = ie.preventOverlaps,
                    Ge =
                      t.horizontal ||
                      (t.containerAnimation && !1 !== t.horizontal)
                        ? A
                        : D,
                    Ke = !de && 0 !== de,
                    dt = R(t.scroller || W),
                    vt = F.core.getCache(dt),
                    bt = Ae(dt),
                    _t =
                      "fixed" ===
                      ("pinType" in t
                        ? t.pinType
                        : k(dt, "pinType") || (bt && "fixed")),
                    Ct = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                    Mt = Ke && t.toggleActions.split(" "),
                    Ot = "markers" in t ? t.markers : wt.markers,
                    Dt = bt
                      ? 0
                      : parseFloat(st(dt)["border" + Ge.p2 + it]) || 0,
                    Rt = this,
                    Yt =
                      t.onRefreshInit &&
                      function () {
                        return t.onRefreshInit(Rt);
                      },
                    It = Re(dt, bt, Ge),
                    zt = Ye(dt, bt),
                    Bt = 0,
                    Nt = 0,
                    Lt = Y(dt, Ge);
                  if (
                    ((Rt.media = ve),
                    (Rt._dir = Ge),
                    (Ce *= 45),
                    (Rt.scroller = dt),
                    (Rt.scroll = He ? He.time.bind(He) : Lt),
                    (a = Lt()),
                    (Rt.vars = t),
                    (n = n || t.animation),
                    "refreshPriority" in t &&
                      ((ae = 1), -9999 === t.refreshPriority && (be = Rt)),
                    (vt.tweenScroll = vt.tweenScroll || {
                      top: an(dt, D),
                      left: an(dt, A),
                    }),
                    (Rt.tweenTo = r = vt.tweenScroll[Ge.p]),
                    (Rt.scrubDuration = function (e) {
                      (N = Ne(e) && e)
                        ? B
                          ? B.duration(e)
                          : (B = F.to(n, {
                              ease: "expo",
                              totalProgress: "+=0.001",
                              duration: N,
                              paused: !0,
                              onComplete: function () {
                                return Te && Te(Rt);
                              },
                            }))
                        : (B && B.progress(1).kill(), (B = 0));
                    }),
                    n &&
                      ((n.vars.lazy = !1),
                      n._initted ||
                        (!1 !== n.vars.immediateRender &&
                          !1 !== t.immediateRender &&
                          n.render(0, !0, !0)),
                      (Rt.animation = n.pause()),
                      (n.scrollTrigger = Rt),
                      Rt.scrubDuration(de),
                      (X = 0),
                      ce || (ce = n.vars.id)),
                    Tt.push(Rt),
                    De &&
                      ((Le(De) && !De.push) || (De = { snapTo: De }),
                      "scrollBehavior" in j.style &&
                        F.set(bt ? [j, V] : dt, { scrollBehavior: "auto" }),
                      (o = Be(De.snapTo)
                        ? De.snapTo
                        : "labels" === De.snapTo
                        ? pt(n)
                        : "labelsDirectional" === De.snapTo
                        ? gt(n)
                        : !1 !== De.directional
                        ? function (e, t) {
                            return ht(De.snapTo)(
                              e,
                              we() - Nt < 500 ? 0 : t.direction
                            );
                          }
                        : F.utils.snap(De.snapTo)),
                      (L = De.duration || { min: 0.1, max: 2 }),
                      (L = Le(L) ? Z(L.min, L.max) : Z(L, L)),
                      (H = F.delayedCall(De.delay || N / 2 || 0.1, function () {
                        var e = Lt(),
                          t = we() - Nt < 500,
                          i = r.tween;
                        if (
                          !(t || Math.abs(Rt.getVelocity()) < 10) ||
                          i ||
                          ee ||
                          Bt === e
                        )
                          Rt.isActive && Bt !== e && H.restart(!0);
                        else {
                          var a = (e - l) / g,
                            s = n && !Ke ? n.totalProgress() : a,
                            u = t ? 0 : ((s - z) / (we() - $)) * 1e3 || 0,
                            f = F.utils.clamp(
                              -a,
                              1 - a,
                              (Ve(u / 2) * u) / 0.185
                            ),
                            d = a + (!1 === De.inertia ? 0 : f),
                            p = Z(0, 1, o(d, Rt)),
                            h = Math.round(l + p * g),
                            v = De,
                            m = v.onStart,
                            y = v.onInterrupt,
                            b = v.onComplete;
                          if (e <= c && e >= l && h !== e) {
                            if (i && !i._initted && i.data <= Ve(h - e)) return;
                            !1 === De.inertia && (f = p - a),
                              r(
                                h,
                                {
                                  duration: L(
                                    Ve(
                                      (0.185 * Math.max(Ve(d - s), Ve(p - s))) /
                                        u /
                                        0.05 || 0
                                    )
                                  ),
                                  ease: De.ease || "power3",
                                  data: Ve(h - e),
                                  onInterrupt: function () {
                                    return H.restart(!0) && y && y(Rt);
                                  },
                                  onComplete: function () {
                                    Rt.update(),
                                      (Bt = Lt()),
                                      (X = z =
                                        n && !Ke
                                          ? n.totalProgress()
                                          : Rt.progress),
                                      Pe && Pe(Rt),
                                      b && b(Rt);
                                  },
                                },
                                e,
                                f * g,
                                h - e - f * g
                              ),
                              m && m(Rt, r.tween);
                          }
                        }
                      }).pause())),
                    ce && (Et[ce] = Rt),
                    (re =
                      (pe = Rt.trigger = R(pe || ge)) &&
                      pe._gsap &&
                      pe._gsap.stRevert) && (re = re(Rt)),
                    (ge = !0 === ge ? pe : R(ge)),
                    ze(le) && (le = { targets: pe, className: le }),
                    ge &&
                      (!1 === me ||
                        me === rt ||
                        (me =
                          !(!me && "flex" === st(ge.parentNode).display) && nt),
                      (Rt.pin = ge),
                      !1 !== t.force3D && F.set(ge, { force3D: !0 }),
                      (i = F.core.getCache(ge)).spacer
                        ? (v = i.pinState)
                        : (Fe &&
                            ((Fe = R(Fe)) &&
                              !Fe.nodeType &&
                              (Fe = Fe.current || Fe.nativeElement),
                            (i.spacerIsNative = !!Fe),
                            Fe && (i.spacerState = Qt(Fe))),
                          (i.spacer = x = Fe || U.createElement("div")),
                          x.classList.add("pin-spacer"),
                          ce && x.classList.add("pin-spacer-" + ce),
                          (i.pinState = v = Qt(ge))),
                      (Rt.spacer = x = i.spacer),
                      (I = st(ge)),
                      (E = I[me + Ge.os2]),
                      (_ = F.getProperty(ge)),
                      (S = F.quickSetter(ge, Ge.a, at)),
                      Zt(ge, x, I),
                      (y = Qt(ge))),
                    Ot)
                  ) {
                    (h = Le(Ot) ? ct(Ot, xt) : xt),
                      (d = St("scroller-start", ce, dt, Ge, h, 0)),
                      (p = St("scroller-end", ce, dt, Ge, h, 0, d)),
                      (w = d["offset" + Ge.op.d2]);
                    var Ft = R(k(dt, "content") || dt);
                    (u = this.markerStart =
                      St("start", ce, Ft, Ge, h, w, 0, He)),
                      (f = this.markerEnd = St("end", ce, Ft, Ge, h, w, 0, He)),
                      He && (te = F.quickSetter([u, f], Ge.a, at)),
                      _t ||
                        (b.length && !0 === k(dt, "fixedMarkers")) ||
                        (lt(bt ? j : dt),
                        F.set([d, p], { force3D: !0 }),
                        (P = F.quickSetter(d, Ge.a, at)),
                        (O = F.quickSetter(p, Ge.a, at)));
                  }
                  if (He) {
                    var Ht = He.vars.onUpdate,
                      Wt = He.vars.onUpdateParams;
                    He.eventCallback("onUpdate", function () {
                      Rt.update(0, 0, 1), Ht && Ht.apply(Wt || []);
                    });
                  }
                  (Rt.previous = function () {
                    return Tt[Tt.indexOf(Rt) - 1];
                  }),
                    (Rt.next = function () {
                      return Tt[Tt.indexOf(Rt) + 1];
                    }),
                    (Rt.revert = function (e) {
                      var t = !1 !== e || !Rt.enabled,
                        r = Q;
                      t !== Rt.isReverted &&
                        (t &&
                          (Rt.scroll.rec || !Q || !ye || (Rt.scroll.rec = Lt()),
                          (G = Math.max(Lt(), Rt.scroll.rec || 0)),
                          (q = Rt.progress),
                          (J = n && n.progress())),
                        u &&
                          [u, f, d, p].forEach(function (e) {
                            return (e.style.display = t ? "none" : "block");
                          }),
                        t && (Q = 1),
                        Rt.update(t),
                        (Q = r),
                        ge &&
                          (t
                            ? Kt(ge, x, v)
                            : (!Xe || !Rt.isActive) && Zt(ge, x, st(ge), M)),
                        (Rt.isReverted = t));
                    }),
                    (Rt.refresh = function (i, o) {
                      if ((!Q && Rt.enabled) || o)
                        if (ge && i && ke) mt(e, "scrollEnd", Xt);
                        else {
                          !ye && Yt && Yt(Rt),
                            (Q = 1),
                            (Nt = we()),
                            r.tween && (r.tween.kill(), (r.tween = 0)),
                            B && B.pause(),
                            _e && n && n.time(-0.01, !0).invalidate(),
                            Rt.isReverted || Rt.revert();
                          for (
                            var h,
                              b,
                              w,
                              k,
                              S,
                              E,
                              P,
                              O,
                              I,
                              X,
                              z = It(),
                              N = zt(),
                              L = He ? He.duration() : Ie(dt, Ge),
                              W = 0,
                              U = 0,
                              V = t.end,
                              K = t.endTrigger || pe,
                              Z =
                                t.start ||
                                (0 !== t.start && pe
                                  ? ge
                                    ? "0 0"
                                    : "0 100%"
                                  : 0),
                              $ = (Rt.pinnedContainer =
                                t.pinnedContainer && R(t.pinnedContainer)),
                              ee = (pe && Math.max(0, Tt.indexOf(Rt))) || 0,
                              te = ee;
                            te--;

                          )
                            (E = Tt[te]).end || E.refresh(0, 1) || (Q = 1),
                              !(P = E.pin) ||
                                (P !== pe && P !== ge) ||
                                E.isReverted ||
                                (X || (X = []), X.unshift(E), E.revert()),
                              E !== Tt[te] && (ee--, te--);
                          for (
                            Be(Z) && (Z = Z(Rt)),
                              l =
                                nn(
                                  Z,
                                  pe,
                                  z,
                                  Ge,
                                  Lt(),
                                  u,
                                  d,
                                  Rt,
                                  N,
                                  Dt,
                                  _t,
                                  L,
                                  He
                                ) || (ge ? -0.001 : 0),
                              Be(V) && (V = V(Rt)),
                              ze(V) &&
                                !V.indexOf("+=") &&
                                (~V.indexOf(" ")
                                  ? (V = (ze(Z) ? Z.split(" ")[0] : "") + V)
                                  : ((W = kt(V.substr(2), z)),
                                    (V = ze(Z) ? Z : l + W),
                                    (K = pe))),
                              c =
                                Math.max(
                                  l,
                                  nn(
                                    V || (K ? "100% 0" : L),
                                    K,
                                    z,
                                    Ge,
                                    Lt() + W,
                                    f,
                                    p,
                                    Rt,
                                    N,
                                    Dt,
                                    _t,
                                    L,
                                    He
                                  )
                                ) || -0.001,
                              g = c - l || ((l -= 0.01) && 0.001),
                              W = 0,
                              te = ee;
                            te--;

                          )
                            (P = (E = Tt[te]).pin) &&
                              E.start - E._pinPush < l &&
                              !He &&
                              E.end > 0 &&
                              ((h = E.end - E.start),
                              (P !== pe && P !== $) ||
                                Ne(Z) ||
                                (W += h * (1 - E.progress)),
                              P === ge && (U += h));
                          if (
                            ((l += W),
                            (c += W),
                            (Rt._pinPush = U),
                            u &&
                              W &&
                              (((h = {})[Ge.a] = "+=" + W),
                              $ && (h[Ge.p] = "-=" + Lt()),
                              F.set([u, f], h)),
                            ge)
                          )
                            (h = st(ge)),
                              (k = Ge === D),
                              (w = Lt()),
                              (C = parseFloat(_(Ge.a)) + U),
                              !L &&
                                c > 1 &&
                                ((bt ? j : dt).style["overflow-" + Ge.a] =
                                  "scroll"),
                              Zt(ge, x, h),
                              (y = Qt(ge)),
                              (b = ut(ge, !0)),
                              (O = _t && Y(dt, k ? A : D)()),
                              me &&
                                (((M = [me + Ge.os2, g + U + at]).t = x),
                                (te = me === nt ? ft(ge, Ge) + g + U : 0) &&
                                  M.push(Ge.d, te + at),
                                Jt(M),
                                _t && Lt(G)),
                              _t &&
                                (((S = {
                                  top: b.top + (k ? w - l : O) + at,
                                  left: b.left + (k ? O : w - l) + at,
                                  boxSizing: "border-box",
                                  position: "fixed",
                                })[Ze] = S["max" + it] =
                                  Math.ceil(b.width) + at),
                                (S[$e] = S["max" + ot] =
                                  Math.ceil(b.height) + at),
                                (S[rt] =
                                  S[rt + et] =
                                  S[rt + Je] =
                                  S[rt + tt] =
                                  S[rt + Qe] =
                                    "0"),
                                (S[nt] = h[nt]),
                                (S[nt + et] = h[nt + et]),
                                (S[nt + Je] = h[nt + Je]),
                                (S[nt + tt] = h[nt + tt]),
                                (S[nt + Qe] = h[nt + Qe]),
                                (m = en(v, S, Xe))),
                              n
                                ? ((I = n._initted),
                                  se(1),
                                  n.render(n.duration(), !0, !0),
                                  (T = _(Ge.a) - C + g + U),
                                  g !== T && _t && m.splice(m.length - 2, 2),
                                  n.render(0, !0, !0),
                                  I || n.invalidate(),
                                  se(0))
                                : (T = g);
                          else if (pe && Lt() && !He)
                            for (b = pe.parentNode; b && b !== j; )
                              b._pinOffset &&
                                ((l -= b._pinOffset), (c -= b._pinOffset)),
                                (b = b.parentNode);
                          X &&
                            X.forEach(function (e) {
                              return e.revert(!1);
                            }),
                            (Rt.start = l),
                            (Rt.end = c),
                            (a = s = Lt()),
                            He || (a < G && Lt(G), (Rt.scroll.rec = 0)),
                            Rt.revert(!1),
                            H &&
                              ((Bt = -1),
                              Rt.isActive && Lt(l + g * q),
                              H.restart(!0)),
                            (Q = 0),
                            n &&
                              Ke &&
                              (n._initted || J) &&
                              n.progress() !== J &&
                              n.progress(J, !0).render(n.time(), !0, !0),
                            (q !== Rt.progress || He) &&
                              (n && !Ke && n.totalProgress(q, !0),
                              (Rt.progress = q),
                              Rt.update(0, 0, 1)),
                            ge &&
                              me &&
                              (x._pinOffset = Math.round(Rt.progress * T)),
                            fe && fe(Rt);
                        }
                    }),
                    (Rt.getVelocity = function () {
                      return ((Lt() - s) / (we() - $)) * 1e3 || 0;
                    }),
                    (Rt.endAnimation = function () {
                      We(Rt.callbackAnimation),
                        n &&
                          (B
                            ? B.progress(1)
                            : n.paused()
                            ? Ke || We(n, Rt.direction < 0, 1)
                            : We(n, n.reversed()));
                    }),
                    (Rt.labelToScroll = function (e) {
                      return (
                        (n &&
                          n.labels &&
                          (l || Rt.refresh() || l) +
                            (n.labels[e] / n.duration()) * g) ||
                        0
                      );
                    }),
                    (Rt.getTrailing = function (e) {
                      var t = Tt.indexOf(Rt),
                        n =
                          Rt.direction > 0
                            ? Tt.slice(0, t).reverse()
                            : Tt.slice(t + 1);
                      return (
                        ze(e)
                          ? n.filter(function (t) {
                              return t.vars.preventOverlaps === e;
                            })
                          : n
                      ).filter(function (e) {
                        return Rt.direction > 0 ? e.end <= l : e.start >= c;
                      });
                    }),
                    (Rt.update = function (e, t, i) {
                      if (!He || i || e) {
                        var o,
                          u,
                          f,
                          p,
                          h,
                          v,
                          b,
                          w = Rt.scroll(),
                          _ = e ? 0 : (w - l) / g,
                          k = _ < 0 ? 0 : _ > 1 ? 1 : _ || 0,
                          M = Rt.progress;
                        if (
                          (t &&
                            ((s = a),
                            (a = He ? Lt() : w),
                            De &&
                              ((z = X),
                              (X = n && !Ke ? n.totalProgress() : k))),
                          Ce &&
                            !k &&
                            ge &&
                            !Q &&
                            !xe &&
                            ke &&
                            l < w + ((w - s) / (we() - $)) * Ce &&
                            (k = 1e-4),
                          k !== M && Rt.enabled)
                        ) {
                          if (
                            ((p =
                              (h =
                                (o = Rt.isActive = !!k && k < 1) !==
                                (!!M && M < 1)) || !!k !== !!M),
                            (Rt.direction = k > M ? 1 : -1),
                            (Rt.progress = k),
                            p &&
                              !Q &&
                              ((u =
                                k && !M ? 0 : 1 === k ? 1 : 1 === M ? 2 : 3),
                              Ke &&
                                ((f =
                                  (!h && "none" !== Mt[u + 1] && Mt[u + 1]) ||
                                  Mt[u]),
                                (b =
                                  n &&
                                  ("complete" === f ||
                                    "reset" === f ||
                                    f in n)))),
                            qe &&
                              (h || b) &&
                              (b || de || !n) &&
                              (Be(qe)
                                ? qe(Rt)
                                : Rt.getTrailing(qe).forEach(function (e) {
                                    return e.endAnimation();
                                  })),
                            Ke ||
                              (!B || Q || xe
                                ? n && n.totalProgress(k, !!Q)
                                : ((He || (be && be !== Rt)) &&
                                    B.render(B._dp._time - B._start),
                                  B.resetTo
                                    ? B.resetTo(
                                        "totalProgress",
                                        k,
                                        n._tTime / n._tDur
                                      )
                                    : ((B.vars.totalProgress = k),
                                      B.invalidate().restart()))),
                            ge)
                          )
                            if ((e && me && (x.style[me + Ge.os2] = E), _t)) {
                              if (p) {
                                if (
                                  ((v =
                                    !e &&
                                    k > M &&
                                    c + 1 > w &&
                                    w + 1 >= Ie(dt, Ge)),
                                  Xe)
                                )
                                  if (e || (!o && !v)) on(ge, x);
                                  else {
                                    var A = ut(ge, !0),
                                      R = w - l;
                                    on(
                                      ge,
                                      j,
                                      A.top + (Ge === D ? R : 0) + at,
                                      A.left + (Ge === D ? 0 : R) + at
                                    );
                                  }
                                Jt(o || v ? m : y),
                                  (T !== g && k < 1 && o) ||
                                    S(C + (1 !== k || v ? 0 : T));
                              }
                            } else S(Me(C + T * k));
                          De && !r.tween && !Q && !xe && H.restart(!0),
                            le &&
                              (h || (Oe && k && (k < 1 || !he))) &&
                              K(le.targets).forEach(function (e) {
                                return e.classList[o || Oe ? "add" : "remove"](
                                  le.className
                                );
                              }),
                            oe && !Ke && !e && oe(Rt),
                            p && !Q
                              ? (Ke &&
                                  (b &&
                                    ("complete" === f
                                      ? n.pause().totalProgress(1)
                                      : "reset" === f
                                      ? n.restart(!0).pause()
                                      : "restart" === f
                                      ? n.restart(!0)
                                      : n[f]()),
                                  oe && oe(Rt)),
                                (!h && he) ||
                                  (ue && h && Ue(Rt, ue),
                                  Ct[u] && Ue(Rt, Ct[u]),
                                  Oe &&
                                    (1 === k ? Rt.kill(!1, 1) : (Ct[u] = 0)),
                                  h ||
                                    (Ct[(u = 1 === k ? 1 : 3)] &&
                                      Ue(Rt, Ct[u]))),
                                je &&
                                  !o &&
                                  Math.abs(Rt.getVelocity()) >
                                    (Ne(je) ? je : 2500) &&
                                  (We(Rt.callbackAnimation),
                                  B ? B.progress(1) : We(n, !k, 1)))
                              : Ke && oe && !Q && oe(Rt);
                        }
                        if (O) {
                          var Y = He
                            ? (w / He.duration()) * (He._caScrollDist || 0)
                            : w;
                          P(Y + (d._isFlipped ? 1 : 0)), O(Y);
                        }
                        te &&
                          te((-w / He.duration()) * (He._caScrollDist || 0));
                      }
                    }),
                    (Rt.enable = function (t, n) {
                      Rt.enabled ||
                        ((Rt.enabled = !0),
                        mt(dt, "resize", At),
                        mt(bt ? U : dt, "scroll", Pt),
                        Yt && mt(e, "refreshInit", Yt),
                        !1 !== t &&
                          ((Rt.progress = q = 0), (a = s = Bt = Lt())),
                        !1 !== n && Rt.refresh());
                    }),
                    (Rt.getTween = function (e) {
                      return e && r ? r.tween : B;
                    }),
                    (Rt.setPositions = function (e, t) {
                      ge && ((C += e - l), (T += t - e - g)),
                        (Rt.start = l = e),
                        (Rt.end = c = t),
                        (g = t - e),
                        Rt.update();
                    }),
                    (Rt.disable = function (t, n) {
                      if (
                        Rt.enabled &&
                        (!1 !== t && Rt.revert(),
                        (Rt.enabled = Rt.isActive = !1),
                        n || (B && B.pause()),
                        (G = 0),
                        i && (i.uncache = 1),
                        Yt && yt(e, "refreshInit", Yt),
                        H &&
                          (H.pause(),
                          r.tween && r.tween.kill() && (r.tween = 0)),
                        !bt)
                      ) {
                        for (var o = Tt.length; o--; )
                          if (Tt[o].scroller === dt && Tt[o] !== Rt) return;
                        yt(dt, "resize", At), yt(dt, "scroll", Pt);
                      }
                    }),
                    (Rt.kill = function (e, r) {
                      Rt.disable(e, r),
                        B && !r && B.kill(),
                        ce && delete Et[ce];
                      var o = Tt.indexOf(Rt);
                      o >= 0 && Tt.splice(o, 1),
                        o === ne && Vt > 0 && ne--,
                        (o = 0),
                        Tt.forEach(function (e) {
                          return e.scroller === Rt.scroller && (o = 1);
                        }),
                        o || (Rt.scroll.rec = 0),
                        n &&
                          ((n.scrollTrigger = null),
                          e && n.render(-1),
                          r || n.kill()),
                        u &&
                          [u, f, d, p].forEach(function (e) {
                            return e.parentNode && e.parentNode.removeChild(e);
                          }),
                        be === Rt && (be = 0),
                        ge &&
                          (i && (i.uncache = 1),
                          (o = 0),
                          Tt.forEach(function (e) {
                            return e.pin === ge && o++;
                          }),
                          o || (i.spacer = 0)),
                        t.onKill && t.onKill(Rt);
                    }),
                    Rt.enable(!1, !1),
                    re && re(Rt),
                    n && n.add && !g
                      ? F.delayedCall(0.01, function () {
                          return l || c || Rt.refresh();
                        }) &&
                        (g = 0.01) &&
                        (l = c = 0)
                      : Rt.refresh();
                } else this.update = this.refresh = this.kill = Ee;
              }),
              (e.register = function (t) {
                return (
                  H ||
                    ((F = t || Oe()),
                    Pe() && window.document && e.enable(),
                    (H = Se)),
                  H
                );
              }),
              (e.defaults = function (e) {
                if (e) for (var t in e) wt[t] = e[t];
                return wt;
              }),
              (e.disable = function (e, t) {
                (Se = 0),
                  Tt.forEach(function (n) {
                    return n[t ? "kill" : "disable"](e);
                  }),
                  yt(W, "wheel", Pt),
                  yt(U, "scroll", Pt),
                  clearInterval(J),
                  yt(U, "touchcancel", Ee),
                  yt(j, "touchstart", Ee),
                  vt(yt, U, "pointerdown,touchstart,mousedown", Ce),
                  vt(yt, U, "pointerup,touchend,mouseup", Te),
                  G.kill(),
                  Xe(yt);
                for (var n = 0; n < y.length; n += 3)
                  bt(yt, y[n], y[n + 1]), bt(yt, y[n], y[n + 2]);
              }),
              (e.enable = function () {
                if (
                  ((W = window),
                  (U = document),
                  (V = U.documentElement),
                  (j = U.body),
                  F &&
                    ((K = F.utils.toArray),
                    (Z = F.utils.clamp),
                    (se = F.core.suppressOverwrites || Ee),
                    F.core.globals("ScrollTrigger", e),
                    j))
                ) {
                  (Se = 1),
                    L.register(F),
                    (e.isTouch = L.isTouch),
                    (pe =
                      L.isTouch &&
                      /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                    mt(W, "wheel", Pt),
                    (q = [W, U, V, j]),
                    e.matchMedia({
                      "(orientation: portrait)": function () {
                        return Ot(), Ot;
                      },
                    }),
                    mt(U, "scroll", Pt);
                  var t,
                    n,
                    r = j.style,
                    i = r.borderTopStyle;
                  for (
                    r.borderTopStyle = "solid",
                      t = ut(j),
                      D.m = Math.round(t.top + D.sc()) || 0,
                      A.m = Math.round(t.left + A.sc()) || 0,
                      i
                        ? (r.borderTopStyle = i)
                        : r.removeProperty("border-top-style"),
                      J = setInterval(Mt, 250),
                      F.delayedCall(0.5, function () {
                        return (xe = 0);
                      }),
                      mt(U, "touchcancel", Ee),
                      mt(j, "touchstart", Ee),
                      vt(mt, U, "pointerdown,touchstart,mousedown", Ce),
                      vt(mt, U, "pointerup,touchend,mouseup", Te),
                      te = F.utils.checkPrefix("transform"),
                      Gt.push(te),
                      H = we(),
                      G = F.delayedCall(0.2, Wt).pause(),
                      oe = [
                        U,
                        "visibilitychange",
                        function () {
                          var e = W.innerWidth,
                            t = W.innerHeight;
                          U.hidden
                            ? ((re = e), (ie = t))
                            : (re === e && ie === t) || At();
                        },
                        U,
                        "DOMContentLoaded",
                        Wt,
                        W,
                        "load",
                        Wt,
                        W,
                        "resize",
                        At,
                      ],
                      Xe(mt),
                      Tt.forEach(function (e) {
                        return e.enable(0, 1);
                      }),
                      n = 0;
                    n < y.length;
                    n += 3
                  )
                    bt(yt, y[n], y[n + 1]), bt(yt, y[n], y[n + 2]);
                }
              }),
              (e.config = function (t) {
                "limitCallbacks" in t && (he = !!t.limitCallbacks);
                var n = t.syncInterval;
                (n && clearInterval(J)) || ((J = n) && setInterval(Mt, n)),
                  "ignoreMobileResize" in t &&
                    (ue = 1 === e.isTouch && t.ignoreMobileResize),
                  "autoRefreshEvents" in t &&
                    (Xe(yt) || Xe(mt, t.autoRefreshEvents || "none"),
                    (le = -1 === (t.autoRefreshEvents + "").indexOf("resize")));
              }),
              (e.scrollerProxy = function (e, t) {
                var n = R(e),
                  r = y.indexOf(n),
                  i = Ae(n);
                ~r && y.splice(r, i ? 6 : 2),
                  t && (i ? b.unshift(W, t, j, t, V, t) : b.unshift(n, t));
              }),
              (e.matchMedia = function (e) {
                var t, n, r, i, o;
                for (n in e)
                  (r = Yt.indexOf(n)),
                    (i = e[n]),
                    (ve = n),
                    "all" === n
                      ? i()
                      : (t = W.matchMedia(n)) &&
                        (t.matches && (o = i()),
                        ~r
                          ? ((Yt[r + 1] = He(Yt[r + 1], i)),
                            (Yt[r + 2] = He(Yt[r + 2], o)))
                          : ((r = Yt.length),
                            Yt.push(n, i, o),
                            t.addListener
                              ? t.addListener(It)
                              : t.addEventListener("change", It)),
                        (Yt[r + 3] = t.matches)),
                    (ve = 0);
                return Yt;
              }),
              (e.clearMatchMedia = function (e) {
                e || (Yt.length = 0),
                  (e = Yt.indexOf(e)) >= 0 && Yt.splice(e, 4);
              }),
              (e.isInViewport = function (e, t, n) {
                var r = (ze(e) ? R(e) : e).getBoundingClientRect(),
                  i = r[n ? Ze : $e] * t || 0;
                return n
                  ? r.right - i > 0 && r.left + i < W.innerWidth
                  : r.bottom - i > 0 && r.top + i < W.innerHeight;
              }),
              (e.positionInViewport = function (e, t, n) {
                ze(e) && (e = R(e));
                var r = e.getBoundingClientRect(),
                  i = r[n ? Ze : $e],
                  o =
                    null == t
                      ? i / 2
                      : t in _t
                      ? _t[t] * i
                      : ~t.indexOf("%")
                      ? (parseFloat(t) * i) / 100
                      : parseFloat(t) || 0;
                return n
                  ? (r.left + o) / W.innerWidth
                  : (r.top + o) / W.innerHeight;
              }),
              e
            );
          })();
        (sn.version = "3.10.4"),
          (sn.saveStyles = function (e) {
            return e
              ? K(e).forEach(function (e) {
                  if (e && e.style) {
                    var t = Bt.indexOf(e);
                    t >= 0 && Bt.splice(t, 5),
                      Bt.push(
                        e,
                        e.style.cssText,
                        e.getBBox && e.getAttribute("transform"),
                        F.core.getCache(e),
                        ve
                      );
                  }
                })
              : Bt;
          }),
          (sn.revert = function (e, t) {
            return Lt(!e, t);
          }),
          (sn.create = function (e, t) {
            return new sn(e, t);
          }),
          (sn.refresh = function (e) {
            return e ? At() : (H || sn.register()) && Wt(!0);
          }),
          (sn.update = jt),
          (sn.clearScrollMemory = Ft),
          (sn.maxScroll = function (e, t) {
            return Ie(e, t ? A : D);
          }),
          (sn.getScrollFunc = function (e, t) {
            return Y(R(e), t ? A : D);
          }),
          (sn.getById = function (e) {
            return Et[e];
          }),
          (sn.getAll = function () {
            return Tt.filter(function (e) {
              return "ScrollSmoother" !== e.vars.id;
            });
          }),
          (sn.isScrolling = function () {
            return !!ke;
          }),
          (sn.snapDirectional = ht),
          (sn.addEventListener = function (e, t) {
            var n = Dt[e] || (Dt[e] = []);
            ~n.indexOf(t) || n.push(t);
          }),
          (sn.removeEventListener = function (e, t) {
            var n = Dt[e],
              r = n && n.indexOf(t);
            r >= 0 && n.splice(r, 1);
          }),
          (sn.batch = function (e, t) {
            var n,
              r = [],
              i = {},
              o = t.interval || 0.016,
              a = t.batchMax || 1e9,
              s = function (e, t) {
                var n = [],
                  r = [],
                  i = F.delayedCall(o, function () {
                    t(n, r), (n = []), (r = []);
                  }).pause();
                return function (e) {
                  n.length || i.restart(!0),
                    n.push(e.trigger),
                    r.push(e),
                    a <= n.length && i.progress(1);
                };
              };
            for (n in t)
              i[n] =
                "on" === n.substr(0, 2) && Be(t[n]) && "onRefreshInit" !== n
                  ? s(n, t[n])
                  : t[n];
            return (
              Be(a) &&
                ((a = a()),
                mt(sn, "refresh", function () {
                  return (a = t.batchMax());
                })),
              K(e).forEach(function (e) {
                var t = {};
                for (n in i) t[n] = i[n];
                (t.trigger = e), r.push(sn.create(t));
              }),
              r
            );
          });
        var ln,
          cn = function (e, t, n, r) {
            return (
              t > r ? e(r) : t < 0 && e(0),
              n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1
            );
          },
          un = function e(t, n) {
            !0 === n
              ? t.style.removeProperty("touch-action")
              : (t.style.touchAction =
                  !0 === n
                    ? "auto"
                    : n
                    ? "pan-" + n + (L.isTouch ? " pinch-zoom" : "")
                    : "none"),
              t === V && e(j, n);
          },
          fn = { auto: 1, scroll: 1 },
          dn = function (e) {
            var t,
              n = e.event,
              r = e.target,
              i = e.axis,
              o = (n.changedTouches ? n.changedTouches[0] : n).target,
              a = o._gsap || F.core.getCache(o),
              s = we();
            if (!a._isScrollT || s - a._isScrollT > 2e3) {
              for (; o && o.scrollHeight <= o.clientHeight; ) o = o.parentNode;
              (a._isScroll =
                o &&
                !Ae(o) &&
                o !== r &&
                (fn[(t = st(o)).overflowY] || fn[t.overflowX])),
                (a._isScrollT = s);
            }
            (a._isScroll || "x" === i) && (n._gsapAllow = !0);
          },
          pn = function (e, t, n, r) {
            return L.create({
              target: e,
              capture: !0,
              debounce: !1,
              lockAxis: !0,
              type: t,
              onWheel: (r = r && dn),
              onPress: r,
              onDrag: r,
              onScroll: r,
              onEnable: function () {
                return n && mt(U, L.eventTypes[0], gn, !1, !0);
              },
              onDisable: function () {
                return yt(U, L.eventTypes[0], gn, !0);
              },
            });
          },
          hn = /(input|label|select|textarea)/i,
          gn = function (e) {
            var t = hn.test(e.target.tagName);
            (t || ln) && ((e._gsapAllow = !0), (ln = t));
          },
          vn = function (e) {
            Le(e) || (e = {}),
              (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
              e.type || (e.type = "wheel,touch"),
              (e.debounce = !!e.debounce),
              (e.id = e.id || "normalizer");
            var t,
              n,
              r,
              i,
              o,
              a,
              s,
              l,
              c = e,
              u = c.normalizeScrollX,
              f = c.momentum,
              d = c.allowNestedScroll,
              p = R(e.target) || V,
              h = F.core.globals().ScrollSmoother,
              g =
                pe &&
                ((e.content && R(e.content)) ||
                  (h && h.get() && h.get().content())),
              v = Y(p, D),
              m = Y(p, A),
              b = 1,
              x =
                (L.isTouch && W.visualViewport
                  ? W.visualViewport.scale * W.visualViewport.width
                  : W.outerWidth) / W.innerWidth,
              w = 0,
              _ = Be(f)
                ? function () {
                    return f(t);
                  }
                : function () {
                    return f || 2.8;
                  },
              k = pn(p, e.type, !0, d),
              S = function () {
                return (r = !1);
              },
              C = Ee,
              T = Ee,
              E = function () {
                (n = Ie(p, D)),
                  (T = Z(pe ? 1 : 0, n)),
                  u && (C = Z(0, Ie(p, A))),
                  (i = Ht);
              },
              M = function () {
                if (r) {
                  requestAnimationFrame(S);
                  var e = Me(t.deltaY / 2),
                    n = T(v.v - e);
                  return (
                    g &&
                      n !== v.v + v.offset &&
                      ((v.offset = n - v.v),
                      (g.style.transform = "translateY(" + -v.offset + "px)"),
                      g._gsap && (g._gsap.y = -v.offset + "px"),
                      (v.cacheID = y.cache),
                      jt()),
                    !0
                  );
                }
                g &&
                  ((g.style.transform = "translateY(0px)"),
                  (v.offset = v.cacheID = 0),
                  g._gsap && (g._gsap.y = "0px")),
                  (r = !0);
              },
              P = function () {
                E(),
                  o.isActive() &&
                    o.vars.scrollY > n &&
                    (v() > n ? o.progress(1) && v(n) : o.resetTo("scrollY", n));
              };
            return (
              (e.ignoreCheck = function (e) {
                return (
                  (pe && "touchmove" === e.type && M()) ||
                  (b > 1.05 && "touchstart" !== e.type) ||
                  t.isGesturing ||
                  (e.touches && e.touches.length > 1)
                );
              }),
              (e.onPress = function () {
                var e = b;
                (b = Me(
                  ((W.visualViewport && W.visualViewport.scale) || 1) / x
                )),
                  o.pause(),
                  e !== b && un(p, b > 1.01 || (!u && "x")),
                  (r = !1),
                  (a = m()),
                  (s = v()),
                  E(),
                  (i = Ht);
              }),
              (e.onRelease = e.onGestureStart =
                function (e, t) {
                  if (
                    (g &&
                      ((g.style.transform = "translateY(0px)"),
                      (v.offset = v.cacheID = 0),
                      g._gsap && (g._gsap.y = "0px")),
                    t)
                  ) {
                    y.cache++;
                    var r,
                      i,
                      a = _();
                    u &&
                      ((i = (r = m()) + (0.05 * a * -e.velocityX) / 0.227),
                      (a *= cn(m, r, i, Ie(p, A))),
                      (o.vars.scrollX = C(i))),
                      (i = (r = v()) + (0.05 * a * -e.velocityY) / 0.227),
                      (a *= cn(v, r, i, Ie(p, D))),
                      (o.vars.scrollY = T(i)),
                      o.invalidate().duration(a).play(0.01),
                      ((pe && o.vars.scrollY >= n) || r >= n - 1) &&
                        F.to({}, { onUpdate: P, duration: a });
                  } else l.restart(!0);
                }),
              (e.onWheel = function () {
                o._ts && o.pause(), we() - w > 1e3 && ((i = 0), (w = we()));
              }),
              (e.onChange = function (e, t, n, r, o) {
                Ht !== i && E(),
                  t &&
                    u &&
                    m(C(r[2] === t ? a + (e.startX - e.x) : m() + t - r[1])),
                  n && v(T(o[2] === n ? s + (e.startY - e.y) : v() + n - o[1])),
                  jt();
              }),
              (e.onEnable = function () {
                un(p, !u && "x"), mt(W, "resize", P), k.enable();
              }),
              (e.onDisable = function () {
                un(p, !0), yt(W, "resize", P), k.kill();
              }),
              ((t = new L(e)).iOS = pe),
              pe && !v() && v(1),
              (l = t._dc),
              (o = F.to(t, {
                ease: "power4",
                paused: !0,
                scrollX: u ? "+=0.1" : "+=0",
                scrollY: "+=0.1",
                onComplete: l.vars.onComplete,
              })),
              t
            );
          };
        (sn.sort = function (e) {
          return Tt.sort(
            e ||
              function (e, t) {
                return (
                  -1e6 * (e.vars.refreshPriority || 0) +
                  e.start -
                  (t.start + -1e6 * (t.vars.refreshPriority || 0))
                );
              }
          );
        }),
          (sn.observe = function (e) {
            return new L(e);
          }),
          (sn.normalizeScroll = function (e) {
            if ("undefined" === typeof e) return ce;
            if (!0 === e && ce) return ce.enable();
            if (!1 === e) return ce && ce.kill();
            var t = e instanceof L ? e : vn(e);
            return (
              ce && ce.target === t.target && ce.kill(),
              Ae(t.target) && (ce = t),
              t
            );
          }),
          (sn.core = {
            _getVelocityProp: I,
            _inputObserver: pn,
            _scrollers: y,
            _proxies: b,
            bridge: {
              ss: function () {
                ke || zt("scrollStart"), (ke = we());
              },
              ref: function () {
                return Q;
              },
            },
          }),
          Oe() && F.registerPlugin(sn),
          (e.ScrollTrigger = sn),
          (e.default = sn),
          "undefined" === typeof window || window !== e
            ? Object.defineProperty(e, "__esModule", { value: !0 })
            : delete window.default;
      })(t);
    },
    31955: function (e, t) {
      "use strict";
      function n(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) e[r] = n[r];
        }
        return e;
      }
      var r = (function e(t, r) {
        function i(e, i, o) {
          if ("undefined" !== typeof document) {
            "number" === typeof (o = n({}, r, o)).expires &&
              (o.expires = new Date(Date.now() + 864e5 * o.expires)),
              o.expires && (o.expires = o.expires.toUTCString()),
              (e = encodeURIComponent(e)
                .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                .replace(/[()]/g, escape));
            var a = "";
            for (var s in o)
              o[s] &&
                ((a += "; " + s),
                !0 !== o[s] && (a += "=" + o[s].split(";")[0]));
            return (document.cookie = e + "=" + t.write(i, e) + a);
          }
        }
        return Object.create(
          {
            set: i,
            get: function (e) {
              if ("undefined" !== typeof document && (!arguments.length || e)) {
                for (
                  var n = document.cookie ? document.cookie.split("; ") : [],
                    r = {},
                    i = 0;
                  i < n.length;
                  i++
                ) {
                  var o = n[i].split("="),
                    a = o.slice(1).join("=");
                  try {
                    var s = decodeURIComponent(o[0]);
                    if (((r[s] = t.read(a, s)), e === s)) break;
                  } catch (l) {}
                }
                return e ? r[e] : r;
              }
            },
            remove: function (e, t) {
              i(e, "", n({}, t, { expires: -1 }));
            },
            withAttributes: function (t) {
              return e(this.converter, n({}, this.attributes, t));
            },
            withConverter: function (t) {
              return e(n({}, this.converter, t), this.attributes);
            },
          },
          {
            attributes: { value: Object.freeze(r) },
            converter: { value: Object.freeze(t) },
          }
        );
      })(
        {
          read: function (e) {
            return (
              '"' === e[0] && (e = e.slice(1, -1)),
              e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
            );
          },
          write: function (e) {
            return encodeURIComponent(e).replace(
              /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
              decodeURIComponent
            );
          },
        },
        { path: "/" }
      );
      t.Z = r;
    },
  },
]);
