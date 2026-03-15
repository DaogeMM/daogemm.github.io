(() => {
    "use strict";
    var e = {
            193(e, t, r) {
                var a = r(751),
                    o = r(641),
                    s = r(953),
                    n = r(29);
                const c = {
                        __name: "App",
                        setup(e) {
                            return (e, t) => (
                                (0, o.uX)(),
                                (0, o.Wv)((0, s.R1)(n.Tp))
                            );
                        },
                    },
                    l = c,
                    i = l,
                    u = { class: "top-nav" },
                    d = { class: "nav-left" },
                    p = { class: "page-container" },
                    v = {
                        __name: "Layout",
                        setup(e) {
                            return (e, t) => (
                                (0, o.uX)(),
                                (0, o.CE)(
                                    o.FK,
                                    null,
                                    [
                                        (0, o.Lk)("div", u, [
                                            (0, o.Lk)("div", d, [
                                                (0, o.Lk)(
                                                    "div",
                                                    {
                                                        class: "nav-item",
                                                        onClick:
                                                            t[0] ||
                                                            (t[0] = (t) =>
                                                                e.$router.push({
                                                                    name: "start",
                                                                })),
                                                    },
                                                    " 主页 "
                                                ),
                                                (0, o.Lk)(
                                                    "div",
                                                    {
                                                        class: "nav-item",
                                                        onClick:
                                                            t[1] ||
                                                            (t[1] = (t) =>
                                                                e.$router.push({
                                                                    name: "tableLevel",
                                                                })),
                                                    },
                                                    " 定数表 "
                                                ),
                                            ]),
                                        ]),
                                        (0, o.Lk)("div", p, [
                                            (0, o.bF)((0, s.R1)(n.Tp)),
                                        ]),
                                    ],
                                    64
                                )
                            );
                        },
                    };
                var f = r(262);
                const h = (0, f.A)(v, [["__scopeId", "data-v-e9775386"]]),
                    m = h,
                    b = { class: "start-page" };
                function y(e, t) {
                    return (
                        (0, o.uX)(),
                        (0, o.CE)("div", b, [
                            ...(t[0] ||
                                (t[0] = [
                                    (0, o.Lk)(
                                        "div",
                                        { class: "title-group" },
                                        [
                                            (0, o.Lk)(
                                                "h1",
                                                { class: "page-title" },
                                                "DP-Tool"
                                            ),
                                            (0, o.Lk)(
                                                "p",
                                                { class: "page-subtitle" },
                                                " 您的 Phigros 助手 "
                                            ),
                                        ],
                                        -1
                                    ),
                                ])),
                        ])
                    );
                }
                const g = {},
                    k = (0, f.A)(g, [
                        ["render", y],
                        ["__scopeId", "data-v-7f28ff8c"],
                    ]),
                    _ = k;
                var L = r(33);
                const C = { class: "group-title" },
                    E = {
                        __name: "levelGUI",
                        props: {
                            cardList: { type: Object, required: !0 },
                            columns: { type: Number, required: !0 },
                            gap: { type: Number, default: 16 },
                            gridWidth: {
                                type: [Number, String],
                                default: 1500,
                            },
                        },
                        setup(e) {
                            const t = e,
                                r = (0, o.EW)(() => ({
                                    width:
                                        "number" === typeof t.gridWidth
                                            ? `${t.gridWidth}px`
                                            : t.gridWidth,
                                    margin: "0 auto",
                                    boxSizing: "border-box",
                                })),
                                a = () => ({
                                    "--column-count": t.columns,
                                    "--gap-size": `${t.gap}px`,
                                    "--column-width":
                                        "calc((100% - (var(--column-count) - 1) * var(--gap-size)) / var(--column-count))",
                                }),
                                s = (0, o.EW)(() => {
                                    const e = Object.entries(t.cardList),
                                        r = e.sort((e, t) => {
                                            const r = Number(e[0]),
                                                a = Number(t[0]);
                                            return a - r;
                                        });
                                    return r.map(([e, t]) => ({
                                        key: e,
                                        value: t,
                                    }));
                                });
                            return (e, t) => (
                                (0, o.uX)(),
                                (0, o.CE)(
                                    "div",
                                    {
                                        class: "card-container",
                                        style: (0, L.Tr)(r.value),
                                    },
                                    [
                                        ((0, o.uX)(!0),
                                        (0, o.CE)(
                                            o.FK,
                                            null,
                                            (0, o.pI)(
                                                s.value,
                                                ({ key: t, value: r }, s) => (
                                                    (0, o.uX)(),
                                                    (0, o.CE)(
                                                        "div",
                                                        {
                                                            key: t,
                                                            class: "card-group",
                                                        },
                                                        [
                                                            (0, o.Lk)(
                                                                "div",
                                                                C,
                                                                (0, L.v_)(
                                                                    Number(
                                                                        t
                                                                    ).toFixed(1)
                                                                ),
                                                                1
                                                            ),
                                                            (0, o.Lk)(
                                                                "div",
                                                                {
                                                                    class: "card-grid",
                                                                    style: (0,
                                                                    L.Tr)(a()),
                                                                },
                                                                [
                                                                    ((0, o.uX)(
                                                                        !0
                                                                    ),
                                                                    (0, o.CE)(
                                                                        o.FK,
                                                                        null,
                                                                        (0,
                                                                        o.pI)(
                                                                            r,
                                                                            (
                                                                                r,
                                                                                a
                                                                            ) =>
                                                                                (0,
                                                                                o.RG)(
                                                                                    e.$slots,
                                                                                    "default",
                                                                                    {
                                                                                        key: a,
                                                                                        cardData:
                                                                                            r,
                                                                                        index: a,
                                                                                        groupKey:
                                                                                            t,
                                                                                    }
                                                                                )
                                                                        ),
                                                                        128
                                                                    )),
                                                                ],
                                                                4
                                                            ),
                                                        ]
                                                    )
                                                )
                                            ),
                                            128
                                        )),
                                    ],
                                    4
                                )
                            );
                        },
                    },
                    O = (0, f.A)(E, [["__scopeId", "data-v-01ea6be3"]]),
                    I = O,
                    X = { class: "chart-card" },
                    j = { class: "card-cover" },
                    w = ["src", "alt"],
                    A = { class: "card-info" },
                    T = {
                        __name: "levelCard",
                        props: { chartInfo: { type: Array, required: !0 } },
                        setup(e) {
                            return (t, r) => (
                                (0, o.uX)(),
                                (0, o.CE)("div", X, [
                                    (0, o.Lk)("div", j, [
                                        (0, o.Lk)(
                                            "img",
                                            {
                                                src: e.chartInfo[2],
                                                alt: e.chartInfo[0],
                                                class: "cover-img",
                                            },
                                            null,
                                            8,
                                            w
                                        ),
                                    ]),
                                    (0, o.Lk)("div", A, [
                                        (0, o.Lk)(
                                            "div",
                                            {
                                                class: "difficulty-tag",
                                                style: (0, L.Tr)({
                                                    backgroundColor:
                                                        e.chartInfo[4] ||
                                                        "#cccccc",
                                                }),
                                            },
                                            (0, L.v_)(e.chartInfo[3]),
                                            5
                                        ),
                                    ]),
                                ])
                            );
                        },
                    },
                    N = (0, f.A)(T, [["__scopeId", "data-v-6afeab2e"]]),
                    x = N;
                function F(e, t, r, a, s, n) {
                    return ((0, o.uX)(), (0, o.CE)("div"));
                }
                var $ = r(335);
                const S = {
                        name: "LevelGet",
                        methods: {
                            async getLevel() {
                                const e = "",
                                    t = `${e}/files`,
                                    r = `${t}/infos/infos.json`,
                                    a = {
                                        EZ: "#0D9A28",
                                        HD: "#0175B8",
                                        IN: "#CF1313",
                                        AT: "#383838",
                                        SP: "#383838",
                                        LY: "#383838",
                                    },
                                    o = ["EZ", "HD", "IN", "AT"];
                                try {
                                    const t = await $.A.get(r),
                                        s = t.data,
                                        n = [];
                                    for (const [e, r] of Object.entries(s))
                                        if (r.name && r.display)
                                            for (const t of o)
                                                if (
                                                    r[t] &&
                                                    r[t].lvl &&
                                                    "" !== r[t].lvl.trim()
                                                ) {
                                                    const a = parseFloat(
                                                        r[t].lvl
                                                    );
                                                    isNaN(a) ||
                                                        n.push([e, a, t]);
                                                }
                                    const c = `${e}/assets/illLow`;
                                    for (const e of n) {
                                        e[1] = Math.round(10 * e[1]) / 10;
                                        const t = e[2];
                                        ((e[2] = `${c}/${e[0]}.png`),
                                            e.push(t),
                                            e.push(a[t] || "#383838"));
                                    }
                                    const l = {};
                                    for (const e of n) {
                                        const t = e[1];
                                        (l[t] || (l[t] = []), l[t].push(e));
                                    }
                                    const i = {};
                                    for (const [e, r] of Object.entries(l)) {
                                        const t = r.sort((e, t) =>
                                            e[0].localeCompare(t[0])
                                        );
                                        i[e] = t;
                                    }
                                    return i;
                                } catch (s) {
                                    return (
                                        console.error("获取关卡数据失败：", s),
                                        console.error(
                                            "实际请求的JSON文件路径：",
                                            r
                                        ),
                                        {}
                                    );
                                }
                            },
                        },
                    },
                    W = (0, f.A)(S, [["render", F]]),
                    K = W,
                    P = { class: "table-container" },
                    D = { key: 0, class: "empty-tip" },
                    R = { key: 1, class: "empty-tip error" },
                    M = { key: 2, class: "level-list" },
                    q = { key: 3, class: "empty-tip" },
                    z = {
                        __name: "tableWeb",
                        setup(e) {
                            const t = (0, s.KR)(null),
                                r = (0, s.KR)(!0),
                                a = (0, s.KR)("");
                            return (
                                (0, o.sV)(async () => {
                                    try {
                                        const e = await K.methods.getLevel();
                                        ((t.value = e), (a.value = ""));
                                    } catch (e) {
                                        (console.error("定数表加载失败：", e),
                                            (a.value =
                                                "定数表加载失败，请刷新重试"));
                                    } finally {
                                        r.value = !1;
                                    }
                                }),
                                (e, s) => (
                                    (0, o.uX)(),
                                    (0, o.CE)("div", P, [
                                        r.value
                                            ? ((0, o.uX)(),
                                              (0, o.CE)(
                                                  "div",
                                                  D,
                                                  " 正在加载定数表 "
                                              ))
                                            : a.value
                                              ? ((0, o.uX)(),
                                                (0, o.CE)(
                                                    "div",
                                                    R,
                                                    (0, L.v_)(a.value),
                                                    1
                                                ))
                                              : t.value
                                                ? ((0, o.uX)(),
                                                  (0, o.CE)("div", M, [
                                                      (0, o.bF)(
                                                          I,
                                                          {
                                                              "card-list":
                                                                  t.value,
                                                              columns: 5,
                                                              gap: 20,
                                                          },
                                                          {
                                                              default: (0,
                                                              o.k6)(
                                                                  ({
                                                                      cardData:
                                                                          e,
                                                                  }) => [
                                                                      (0, o.bF)(
                                                                          x,
                                                                          {
                                                                              "chart-info":
                                                                                  e,
                                                                          },
                                                                          null,
                                                                          8,
                                                                          [
                                                                              "chart-info",
                                                                          ]
                                                                      ),
                                                                  ]
                                                              ),
                                                              _: 1,
                                                          },
                                                          8,
                                                          ["card-list"]
                                                      ),
                                                  ]))
                                                : ((0, o.uX)(),
                                                  (0, o.CE)(
                                                      "div",
                                                      q,
                                                      " 暂无定数表数据 "
                                                  )),
                                    ])
                                )
                            );
                        },
                    },
                    B = (0, f.A)(z, [["__scopeId", "data-v-75605076"]]),
                    G = B,
                    H = [
                        {
                            path: "/",
                            component: m,
                            children: [
                                { path: "", name: "start", component: _ },
                                {
                                    path: "tableLevel",
                                    name: "tableLevel",
                                    component: G,
                                },
                            ],
                        },
                        {
                            path: "/:pathMatch(.*)*",
                            redirect: { name: "start" },
                        },
                    ],
                    Z = (0, n.aE)({
                        history: (0, n.Bt)(),
                        routes: H,
                        scrollBehavior() {
                            return { top: 0 };
                        },
                    }),
                    J = Z;
                (0, a.Ef)(i).use(J).mount("#app");
            },
        },
        t = {};
    function r(a) {
        var o = t[a];
        if (void 0 !== o) return o.exports;
        var s = (t[a] = { exports: {} });
        return (e[a](s, s.exports, r), s.exports);
    }
    ((r.m = e),
        (() => {
            var e = [];
            r.O = (t, a, o, s) => {
                if (!a) {
                    var n = 1 / 0;
                    for (u = 0; u < e.length; u++) {
                        for (
                            var [a, o, s] = e[u], c = !0, l = 0;
                            l < a.length;
                            l++
                        )
                            (!1 & s || n >= s) &&
                            Object.keys(r.O).every((e) => r.O[e](a[l]))
                                ? a.splice(l--, 1)
                                : ((c = !1), s < n && (n = s));
                        if (c) {
                            e.splice(u--, 1);
                            var i = o();
                            void 0 !== i && (t = i);
                        }
                    }
                    return t;
                }
                s = s || 0;
                for (var u = e.length; u > 0 && e[u - 1][2] > s; u--)
                    e[u] = e[u - 1];
                e[u] = [a, o, s];
            };
        })(),
        (() => {
            r.d = (e, t) => {
                for (var a in t)
                    r.o(t, a) &&
                        !r.o(e, a) &&
                        Object.defineProperty(e, a, {
                            enumerable: !0,
                            get: t[a],
                        });
            };
        })(),
        (() => {
            r.g = (function () {
                if ("object" === typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")();
                } catch (e) {
                    if ("object" === typeof window) return window;
                }
            })();
        })(),
        (() => {
            r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
        })(),
        (() => {
            r.r = (e) => {
                ("undefined" !== typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module",
                    }),
                    Object.defineProperty(e, "__esModule", { value: !0 }));
            };
        })(),
        (() => {
            var e = { 524: 0 };
            r.O.j = (t) => 0 === e[t];
            var t = (t, a) => {
                    var o,
                        s,
                        [n, c, l] = a,
                        i = 0;
                    if (n.some((t) => 0 !== e[t])) {
                        for (o in c) r.o(c, o) && (r.m[o] = c[o]);
                        if (l) var u = l(r);
                    }
                    for (t && t(a); i < n.length; i++)
                        ((s = n[i]),
                            r.o(e, s) && e[s] && e[s][0](),
                            (e[s] = 0));
                    return r.O(u);
                },
                a = (self["webpackChunkpcs"] = self["webpackChunkpcs"] || []);
            (a.forEach(t.bind(null, 0)),
                (a.push = t.bind(null, a.push.bind(a))));
        })());
    var a = r.O(void 0, [504], () => r(193));
    a = r.O(a);
})();
//# sourceMappingURL=app.6df5b551.js.map
