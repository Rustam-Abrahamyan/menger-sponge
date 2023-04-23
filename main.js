!(function (e) {
    var n = {};
    function t(o) {
        if (n[o]) return n[o].exports;
        var i = (n[o] = { i: o, l: !1, exports: {} });
        return e[o].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
    }
    (t.m = e),
        (t.c = n),
        (t.d = function (e, n, o) {
            t.o(e, n) ||
                Object.defineProperty(e, n, { enumerable: !0, get: o });
        }),
        (t.r = function (e) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (t.t = function (e, n) {
            if ((1 & n && (e = t(e)), 8 & n)) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (
                (t.r(o),
                Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e,
                }),
                2 & n && "string" != typeof e)
            )
                for (var i in e)
                    t.d(
                        o,
                        i,
                        function (n) {
                            return e[n];
                        }.bind(null, i)
                    );
            return o;
        }),
        (t.n = function (e) {
            var n =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return t.d(n, "a", n), n;
        }),
        (t.o = function (e, n) {
            return Object.prototype.hasOwnProperty.call(e, n);
        }),
        (t.p = ""),
        t((t.s = 0));
})([
    function (e, n) {
        const t = [
                [0, 1, 3, 2, "hsl(50, 100%, 35%)"],
                [0, 1, 5, 4, "hsl(50, 100%, 55%)"],
                [0, 4, 6, 2, "hsl(50, 100%, 70%)"],
                [4, 5, 7, 6, "hsl(50, 100%, 35%)"],
                [7, 6, 2, 3, "hsl(50, 100%, 55%)"],
                [7, 3, 1, 5, "hsl(50, 100%, 70%)"],
            ],
            o = Math.PI,
            i = Math.sin,
            r = Math.cos,
            u = Math.sqrt;
        let l,
            c,
            d,
            a,
            f,
            s,
            w,
            h,
            p,
            b,
            v,
            m,
            g,
            y,
            x,
            M,
            j,
            E,
            O,
            P,
            S,
            L,
            T,
            _,
            C,
            k = -0.6,
            A = 0.3,
            q = i(k),
            H = i(A) * r(k),
            N = r(k),
            W = -i(A) * i(k),
            X = 0,
            Y = -r(A),
            F = !1,
            I = !1;
        function R(e, n, t) {
            return [f + e * x + n * j + t * O, s + e * M + n * E + t * P];
        }
        function V(e, n) {
            let t = e[4];
            c.beginPath(),
                c.moveTo(n[e[0]][0], n[e[0]][1]),
                c.lineTo(n[e[1]][0], n[e[1]][1]),
                c.lineTo(n[e[2]][0], n[e[2]][1]),
                c.lineTo(n[e[3]][0], n[e[3]][1]),
                (c.fillStyle = t),
                c.fill();
        }
        function z() {
            !(function () {
                (q = i(k)),
                    (H = i(A) * r(k)),
                    (N = r(k)),
                    (W = -i(A) * i(k)),
                    (X = 0),
                    (Y = -r(A));
                let e = 2 * u(3),
                    n = 2 * u(3),
                    o = (0.9 * d) / e;
                o * n > 0.9 * a && (o = (0.9 * a) / n),
                    (x = q * o),
                    (M = H * o),
                    (j = N * o),
                    (E = W * o),
                    (O = X * o),
                    (P = Y * o);
                let l = q * W - N * H,
                    c = N * Y - X * W,
                    f = X * H - q * Y;
                (l = l > 0 ? 0 : 1),
                    (c = c > 0 ? 0 : 1),
                    (f = f > 0 ? 0 : 1),
                    (h = c + 2 * f + 4 * l),
                    (w = t.filter((e) => e.includes(h))),
                    ([p, b] = [
                        [2, -1],
                        [0, 1],
                    ][c]),
                    ([v, m] = [
                        [2, -1],
                        [0, 1],
                    ][f]),
                    ([g, y] = [
                        [2, -1],
                        [0, 1],
                    ][l]);
            })(),
                c.clearRect(0, 0, d, a),
                (function e(n) {
                    let t, o, i, r, u, l, c;
                    switch (n.length) {
                        case 0:
                            throw "trying to draw hole";
                        case 3:
                            for (c = 0, r = g; c < 3; r += y, ++c)
                                for (l = 0, i = v; l < 3; i += m, ++l)
                                    if (0 !== n[r][i])
                                        for (u = 0, o = p; u < 3; o += b, ++u)
                                            0 !== n[r][i][o] && e(n[r][i][o]);
                            break;
                        case 6:
                            t = [];
                            for (let e = 0; e < 8; ++e)
                                t[e] = R(
                                    n[0 + (1 & e)],
                                    n[2 + ((e >> 1) & 1)],
                                    n[4 + ((e >> 2) & 1)]
                                );
                            V(w[0], t), V(w[1], t), V(w[2], t);
                            break;
                        default:
                            throw "unexpected length of sponge";
                    }
                })(S),
                (I = !1);
        }
        function B() {
            return (
                (F = !1),
                (d = window.innerWidth),
                (a = window.innerHeight),
                (l.style.left = (window.innerWidth - d) / 2 + "px"),
                (l.style.top = (window.innerHeight - a) / 2 + "px"),
                (c.canvas.width = d),
                (c.canvas.height = a),
                (c.lineCap = "round"),
                !(d < 100) &&
                    ((f = d / 2),
                    (s = a / 2),
                    (S = (function e(n, t, o, i, r, u, l) {
                        if (0 == n) return [t, o, i, r, u, l];
                        let c = (2 * t + o) / 3,
                            d = (t + 2 * o) / 3,
                            a = (2 * i + r) / 3,
                            f = (i + 2 * r) / 3,
                            s = (2 * u + l) / 3,
                            w = (u + 2 * l) / 3;
                        return [
                            [
                                [
                                    e(--n, t, c, i, a, u, s),
                                    e(n, c, d, i, a, u, s),
                                    e(n, d, o, i, a, u, s),
                                ],
                                [
                                    e(n, t, c, a, f, u, s),
                                    0,
                                    e(n, d, o, a, f, u, s),
                                ],
                                [
                                    e(n, t, c, f, r, u, s),
                                    e(n, c, d, f, r, u, s),
                                    e(n, d, o, f, r, u, s),
                                ],
                            ],
                            [
                                [
                                    e(n, t, c, i, a, s, w),
                                    0,
                                    e(n, d, o, i, a, s, w),
                                ],
                                0,
                                [
                                    e(n, t, c, f, r, s, w),
                                    0,
                                    e(n, d, o, f, r, s, w),
                                ],
                            ],
                            [
                                [
                                    e(n, t, c, i, a, w, l),
                                    e(n, c, d, i, a, w, l),
                                    e(n, d, o, i, a, w, l),
                                ],
                                [
                                    e(n, t, c, a, f, w, l),
                                    0,
                                    e(n, d, o, a, f, w, l),
                                ],
                                [
                                    e(n, t, c, f, r, w, l),
                                    e(n, c, d, f, r, w, l),
                                    e(n, d, o, f, r, w, l),
                                ],
                            ],
                        ];
                    })(3, -1, 1, -1, 1, -1, 1)),
                    z(),
                    (F = !0),
                    !0)
            );
        }
        function D(e) {
            "CANVAS" === e.target.tagName && (L = !0);
        }
        function G(e) {
            0 === e.button && ((T = !0), (_ = e.clientX), (C = e.clientY));
        }
        function J(e) {
            0 === e.button && (T = !1);
        }
        function K(e) {
            T = !1;
        }
        function Q(e) {
            if (!T) return;
            let n = e.clientX,
                t = e.clientY;
            (n === _ && t === C) ||
                ((k += ((n - _) / 500) * o),
                (A += ((t - C) / 500) * o),
                (_ = n),
                (C = t),
                (I = !0));
        }
        function U(e) {
            L && B() && (L = !1),
                F && I && z(),
                window.requestAnimationFrame(U);
        }
        window.addEventListener("load", () => {
            (l = document.createElement("canvas")),
                document.body.appendChild(l),
                (c = l.getContext("2d")),
                window.addEventListener("click", D),
                window.addEventListener("mousedown", G),
                window.addEventListener("mouseout", K),
                window.addEventListener("mouseup", J),
                window.addEventListener("mousemove", Q),
                U(),
                (L = !0);
        });
    },
]);
