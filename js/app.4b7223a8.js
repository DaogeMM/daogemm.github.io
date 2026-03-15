(() => {
    "use strict";
    var t = {
            439(t, e, a) {
                var r = a(751),
                    s = a(641),
                    c = a(953),
                    n = a(29);
                const o = {
                        __name: "App",
                        setup(t) {
                            return (t, e) => (
                                (0, s.uX)(),
                                (0, s.Wv)((0, c.R1)(n.Tp))
                            );
                        },
                    },
                    l = o,
                    i = l,
                    u = { class: "app-container" },
                    d = { class: "top-nav" },
                    p = { class: "nav-left" },
                    v = { class: "nav-right" },
                    m = { class: "page-container" },
                    b = {
                        __name: "Layout",
                        setup(t) {
                            const e = (t) => {
                                window.open(t, "_blank");
                            };
                            return (t, a) => (
                                (0, s.uX)(),
                                (0, s.CE)("div", u, [
                                    (0, s.Lk)("div", d, [
                                        (0, s.Lk)("div", p, [
                                            (0, s.Lk)(
                                                "div",
                                                {
                                                    class: "nav-item",
                                                    onClick:
                                                        a[0] ||
                                                        (a[0] = (e) =>
                                                            t.$router.push({
                                                                name: "start",
                                                            })),
                                                },
                                                " 主页 "
                                            ),
                                            (0, s.Lk)(
                                                "div",
                                                {
                                                    class: "nav-item",
                                                    onClick:
                                                        a[1] ||
                                                        (a[1] = (e) =>
                                                            t.$router.push({
                                                                name: "tableMain",
                                                            })),
                                                },
                                                " 列表 "
                                            ),
                                        ]),
                                        (0, s.Lk)("div", v, [
                                            (0, s.Lk)(
                                                "div",
                                                {
                                                    class: "nav-right-text",
                                                    onClick:
                                                        a[2] ||
                                                        (a[2] = (t) =>
                                                            e(
                                                                "https://space.bilibili.com/521730845"
                                                            )),
                                                },
                                                "个人主页"
                                            ),
                                            (0, s.Lk)(
                                                "div",
                                                {
                                                    class: "nav-right-text",
                                                    onClick:
                                                        a[3] ||
                                                        (a[3] = (t) =>
                                                            e(
                                                                "https://space.bilibili.com/414149787"
                                                            )),
                                                },
                                                "官方账号"
                                            ),
                                        ]),
                                    ]),
                                    (0, s.Lk)("div", m, [
                                        (0, s.bF)((0, c.R1)(n.Tp)),
                                    ]),
                                ])
                            );
                        },
                    };
                var f = a(262);
                const h = (0, f.A)(b, [["__scopeId", "data-v-02cd0030"]]),
                    y = h,
                    g = { class: "start-page" };
                function k(t, e) {
                    return (
                        (0, s.uX)(),
                        (0, s.CE)("div", g, [
                            ...(e[0] ||
                                (e[0] = [
                                    (0, s.Lk)(
                                        "div",
                                        { class: "title-group" },
                                        [
                                            (0, s.Lk)(
                                                "h1",
                                                { class: "page-title" },
                                                "DP-Tool"
                                            ),
                                            (0, s.Lk)(
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
                const _ = {},
                    L = (0, f.A)(_, [
                        ["render", k],
                        ["__scopeId", "data-v-7f28ff8c"],
                    ]),
                    C = L,
                    E = { class: "table-main-container" },
                    I = { class: "table-card-list" },
                    B = {
                        __name: "tableMain",
                        setup(t) {
                            const e = (0, n.rd)(),
                                a = (t) => {
                                    e.push({ name: t });
                                };
                            return (t, e) => (
                                (0, s.uX)(),
                                (0, s.CE)("div", E, [
                                    (0, s.Lk)("div", I, [
                                        (0, s.Lk)(
                                            "div",
                                            {
                                                class: "table-card",
                                                onClick:
                                                    e[0] ||
                                                    (e[0] = (t) =>
                                                        a("tableLevel")),
                                            },
                                            [
                                                ...(e[3] ||
                                                    (e[3] = [
                                                        (0, s.Lk)(
                                                            "div",
                                                            {
                                                                class: "table-card-title",
                                                            },
                                                            "定数表",
                                                            -1
                                                        ),
                                                    ])),
                                            ]
                                        ),
                                        (0, s.Lk)(
                                            "div",
                                            {
                                                class: "table-card",
                                                onClick:
                                                    e[1] ||
                                                    (e[1] = (t) =>
                                                        a("tableBPM")),
                                            },
                                            [
                                                ...(e[4] ||
                                                    (e[4] = [
                                                        (0, s.Lk)(
                                                            "div",
                                                            {
                                                                class: "table-card-title",
                                                            },
                                                            "BPM表",
                                                            -1
                                                        ),
                                                    ])),
                                            ]
                                        ),
                                        (0, s.Lk)(
                                            "div",
                                            {
                                                class: "table-card",
                                                onClick:
                                                    e[2] ||
                                                    (e[2] = (t) =>
                                                        a("tableB30")),
                                            },
                                            [
                                                ...(e[5] ||
                                                    (e[5] = [
                                                        (0, s.Lk)(
                                                            "div",
                                                            {
                                                                class: "table-card-title",
                                                            },
                                                            "B30表",
                                                            -1
                                                        ),
                                                    ])),
                                            ]
                                        ),
                                    ]),
                                ])
                            );
                        },
                    },
                    X = (0, f.A)(B, [["__scopeId", "data-v-4abed6d0"]]),
                    x = X;
                var A = a(33);
                const w = { class: "group-title" },
                    N = {
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
                        setup(t) {
                            const e = t,
                                a = (0, s.EW)(() => ({
                                    width:
                                        "number" === typeof e.gridWidth
                                            ? `${e.gridWidth}px`
                                            : e.gridWidth,
                                    margin: "0 auto",
                                    boxSizing: "border-box",
                                })),
                                r = () => ({
                                    "--column-count": e.columns,
                                    "--gap-size": `${e.gap}px`,
                                    "--column-width":
                                        "calc((100% - (var(--column-count) - 1) * var(--gap-size)) / var(--column-count))",
                                }),
                                c = (0, s.EW)(() => {
                                    const t = Object.entries(e.cardList),
                                        a = t.sort((t, e) => {
                                            const a = Number(t[0]),
                                                r = Number(e[0]);
                                            return r - a;
                                        });
                                    return a.map(([t, e]) => ({
                                        key: t,
                                        value: e,
                                    }));
                                });
                            return (t, e) => (
                                (0, s.uX)(),
                                (0, s.CE)(
                                    "div",
                                    {
                                        class: "card-container",
                                        style: (0, A.Tr)(a.value),
                                    },
                                    [
                                        ((0, s.uX)(!0),
                                        (0, s.CE)(
                                            s.FK,
                                            null,
                                            (0, s.pI)(
                                                c.value,
                                                ({ key: e, value: a }, c) => (
                                                    (0, s.uX)(),
                                                    (0, s.CE)(
                                                        "div",
                                                        {
                                                            key: e,
                                                            class: "card-group",
                                                        },
                                                        [
                                                            (0, s.Lk)(
                                                                "div",
                                                                w,
                                                                (0, A.v_)(
                                                                    Number(
                                                                        e
                                                                    ).toFixed(1)
                                                                ),
                                                                1
                                                            ),
                                                            (0, s.Lk)(
                                                                "div",
                                                                {
                                                                    class: "card-grid",
                                                                    style: (0,
                                                                    A.Tr)(r()),
                                                                },
                                                                [
                                                                    ((0, s.uX)(
                                                                        !0
                                                                    ),
                                                                    (0, s.CE)(
                                                                        s.FK,
                                                                        null,
                                                                        (0,
                                                                        s.pI)(
                                                                            a,
                                                                            (
                                                                                a,
                                                                                r
                                                                            ) =>
                                                                                (0,
                                                                                s.RG)(
                                                                                    t.$slots,
                                                                                    "default",
                                                                                    {
                                                                                        key: r,
                                                                                        cardData:
                                                                                            a,
                                                                                        index: r,
                                                                                        groupKey:
                                                                                            e,
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
                    $ = (0, f.A)(N, [["__scopeId", "data-v-01ea6be3"]]),
                    P = $,
                    F = { class: "chart-card" },
                    O = { class: "card-cover" },
                    S = ["src", "alt"],
                    j = { class: "card-info" },
                    K = {
                        __name: "levelCard",
                        props: { chartInfo: { type: Array, required: !0 } },
                        setup(t) {
                            return (e, a) => (
                                (0, s.uX)(),
                                (0, s.CE)("div", F, [
                                    (0, s.Lk)("div", O, [
                                        (0, s.Lk)(
                                            "img",
                                            {
                                                src: t.chartInfo[2],
                                                alt: t.chartInfo[2],
                                                class: "cover-img",
                                            },
                                            null,
                                            8,
                                            S
                                        ),
                                    ]),
                                    (0, s.Lk)("div", j, [
                                        (0, s.Lk)(
                                            "div",
                                            {
                                                class: "difficulty-tag",
                                                style: (0, A.Tr)({
                                                    backgroundColor:
                                                        t.chartInfo[4] ||
                                                        "#cccccc",
                                                }),
                                            },
                                            (0, A.v_)(t.chartInfo[3]),
                                            5
                                        ),
                                    ]),
                                ])
                            );
                        },
                    },
                    M = (0, f.A)(K, [["__scopeId", "data-v-1a62dc28"]]),
                    T = M;
                var W = a(335);
                const R = {
                        name: "LevelGet",
                        methods: {
                            async getLevel() {
                                const t = "",
                                    e = `${t}/files`,
                                    a = `${e}/infos/infos.json`,
                                    r = {
                                        EZ: "#0D9A28",
                                        HD: "#0175B8",
                                        IN: "#CF1313",
                                        AT: "#383838",
                                        SP: "#383838",
                                        LY: "#383838",
                                    },
                                    s = ["EZ", "HD", "IN", "AT"];
                                try {
                                    const e = await W.A.get(a),
                                        c = e.data,
                                        n = [];
                                    for (const [t, a] of Object.entries(c))
                                        if (a.name && a.display)
                                            for (const e of s)
                                                if (
                                                    a[e] &&
                                                    a[e].lvl &&
                                                    "" !== a[e].lvl.trim()
                                                ) {
                                                    const r = parseFloat(
                                                        a[e].lvl
                                                    );
                                                    isNaN(r) ||
                                                        n.push([t, r, e]);
                                                }
                                    const o = `${t}/assets/illLow`;
                                    for (const t of n) {
                                        t[1] = Math.round(10 * t[1]) / 10;
                                        const e = t[2];
                                        ((t[2] = `${o}/${t[0]}.png`),
                                            t.push(e),
                                            t.push(r[e] || "#383838"));
                                    }
                                    const l = {};
                                    for (const t of n) {
                                        const e = t[1];
                                        (l[e] || (l[e] = []), l[e].push(t));
                                    }
                                    const i = {};
                                    for (const [t, a] of Object.entries(l)) {
                                        const e = a.sort((t, e) =>
                                            t[0].localeCompare(e[0])
                                        );
                                        i[t] = e;
                                    }
                                    return i;
                                } catch (c) {
                                    return (
                                        console.error("获取数据失败：", c),
                                        console.error(
                                            "实际请求的JSON文件路径：",
                                            a
                                        ),
                                        {}
                                    );
                                }
                            },
                        },
                    },
                    D = R,
                    G = D,
                    q = { class: "table-container" },
                    z = { key: 0, class: "empty-tip" },
                    H = { key: 1, class: "empty-tip error" },
                    J = { key: 2, class: "level-list" },
                    U = { key: 3, class: "empty-tip" },
                    V = {
                        __name: "tableLevel",
                        setup(t) {
                            const e = (0, c.KR)(null),
                                a = (0, c.KR)(!0),
                                r = (0, c.KR)("");
                            return (
                                (0, s.sV)(async () => {
                                    try {
                                        const t = await G.methods.getLevel();
                                        ((e.value = t), (r.value = ""));
                                    } catch (t) {
                                        (console.error("定数表加载失败：", t),
                                            (r.value =
                                                "定数表加载失败，请刷新重试"));
                                    } finally {
                                        a.value = !1;
                                    }
                                }),
                                (t, c) => (
                                    (0, s.uX)(),
                                    (0, s.CE)("div", q, [
                                        a.value
                                            ? ((0, s.uX)(),
                                              (0, s.CE)(
                                                  "div",
                                                  z,
                                                  " 正在加载定数表 "
                                              ))
                                            : r.value
                                              ? ((0, s.uX)(),
                                                (0, s.CE)(
                                                    "div",
                                                    H,
                                                    (0, A.v_)(r.value),
                                                    1
                                                ))
                                              : e.value
                                                ? ((0, s.uX)(),
                                                  (0, s.CE)("div", J, [
                                                      (0, s.bF)(
                                                          P,
                                                          {
                                                              "card-list":
                                                                  e.value,
                                                              columns: 5,
                                                              gap: 20,
                                                          },
                                                          {
                                                              default: (0,
                                                              s.k6)(
                                                                  ({
                                                                      cardData:
                                                                          t,
                                                                  }) => [
                                                                      (0, s.bF)(
                                                                          T,
                                                                          {
                                                                              "chart-info":
                                                                                  t,
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
                                                : ((0, s.uX)(),
                                                  (0, s.CE)(
                                                      "div",
                                                      U,
                                                      " 暂无定数表数据 "
                                                  )),
                                    ])
                                )
                            );
                        },
                    },
                    Z = (0, f.A)(V, [["__scopeId", "data-v-51ee2834"]]),
                    Y = Z,
                    Q = {
                        __name: "b30GUI",
                        props: {
                            cardList: { type: Array, required: !0 },
                            columns: { type: Number },
                            gap: { type: Number },
                            gridWidth: {
                                type: [Number, String],
                                default: 1500,
                            },
                        },
                        setup(t) {
                            const e = t,
                                a = (0, s.EW)(() => ({
                                    width:
                                        "number" === typeof e.gridWidth
                                            ? `${e.gridWidth}px`
                                            : e.gridWidth,
                                    "--column-count": e.columns,
                                    "--gap-size": `${e.gap}px`,
                                    "--column-width":
                                        "calc((100% - (var(--column-count) - 1) * var(--gap-size)) / var(--column-count))",
                                }));
                            return (e, r) => (
                                (0, s.uX)(),
                                (0, s.CE)(
                                    "div",
                                    {
                                        class: "card-grid",
                                        style: (0, A.Tr)(a.value),
                                    },
                                    [
                                        ((0, s.uX)(!0),
                                        (0, s.CE)(
                                            s.FK,
                                            null,
                                            (0, s.pI)(t.cardList, (t, a) =>
                                                (0, s.RG)(e.$slots, "default", {
                                                    key: a,
                                                    cardData: t,
                                                    index: a,
                                                })
                                            ),
                                            128
                                        )),
                                    ],
                                    4
                                )
                            );
                        },
                    },
                    tt = (0, f.A)(Q, [["__scopeId", "data-v-46a25622"]]),
                    et = tt,
                    at = { class: "top-right-text" },
                    rt = { class: "card-cover" },
                    st = ["src", "alt"],
                    ct = { class: "card-info" },
                    nt = { class: "chart-name" },
                    ot = {
                        __name: "b30Card",
                        props: { chartInfo: { type: Array, required: !0 } },
                        setup(t) {
                            return (e, a) => (
                                (0, s.uX)(),
                                (0, s.CE)(
                                    "div",
                                    {
                                        class: (0, A.C4)([
                                            "chart-card",
                                            { "glow-border": t.chartInfo[7] },
                                        ]),
                                    },
                                    [
                                        (0, s.Lk)(
                                            "div",
                                            at,
                                            (0, A.v_)(t.chartInfo[6]),
                                            1
                                        ),
                                        (0, s.Lk)("div", rt, [
                                            (0, s.Lk)(
                                                "img",
                                                {
                                                    src: t.chartInfo[2],
                                                    alt: t.chartInfo[2],
                                                    class: "cover-img",
                                                },
                                                null,
                                                8,
                                                st
                                            ),
                                        ]),
                                        (0, s.Lk)("div", ct, [
                                            (0, s.Lk)(
                                                "h3",
                                                nt,
                                                (0, A.v_)(t.chartInfo[3]),
                                                1
                                            ),
                                            (0, s.Lk)(
                                                "div",
                                                {
                                                    class: "difficulty-tag",
                                                    style: (0, A.Tr)({
                                                        backgroundColor:
                                                            t.chartInfo[5] ||
                                                            "#cccccc",
                                                    }),
                                                },
                                                (0, A.v_)(
                                                    t.chartInfo[4] +
                                                        " Lv." +
                                                        t.chartInfo[1]
                                                ),
                                                5
                                            ),
                                        ]),
                                        a[0] ||
                                            (a[0] = (0, s.Fv)(
                                                '<div class="bottom-left-info" data-v-1d0765d3><img src="/assets/rank/Phi.png" class="info-icon" data-v-1d0765d3><div class="info-text-wrapper" data-v-1d0765d3><div class="main-text" data-v-1d0765d3> 1000000 </div><div class="sub-text" data-v-1d0765d3> 100.00% </div></div></div>',
                                                1
                                            )),
                                    ],
                                    2
                                )
                            );
                        },
                    },
                    lt = (0, f.A)(ot, [["__scopeId", "data-v-1d0765d3"]]),
                    it = lt,
                    ut = {
                        name: "b30Get",
                        methods: {
                            async getB30() {
                                const t = "",
                                    e = `${t}/files`,
                                    a = `${e}/infos/infos.json`,
                                    r = {
                                        EZ: "#0D9A28",
                                        HD: "#0175B8",
                                        IN: "#CF1313",
                                        AT: "#383838",
                                    },
                                    s = ["IN", "AT"];
                                try {
                                    const e = await W.A.get(a),
                                        c = e.data,
                                        n = [];
                                    for (const [t, a] of Object.entries(c))
                                        if (a.name && a.display)
                                            for (const e of s)
                                                if (
                                                    a[e] &&
                                                    a[e].lvl &&
                                                    "" !== a[e].lvl.trim()
                                                ) {
                                                    const r = parseFloat(
                                                            a[e].lvl
                                                        ),
                                                        s = a.name;
                                                    isNaN(r) ||
                                                        n.push([t, r, e, s]);
                                                }
                                    n.sort((t, e) => e[1] - t[1]);
                                    for (const a of n) {
                                        a[1] = Math.round(10 * a[1]) / 10;
                                        const e = a[2];
                                        ((a[2] = `${t}/assets/illLow/${a[0]}.png`),
                                            a.push(e),
                                            a.push(r[e] || "#383838"));
                                    }
                                    const o = n.slice(0, 3).map((t) => [...t]);
                                    for (let t = 0; t < n.length; t++) {
                                        const e = t + 1;
                                        e <= 27 &&
                                            (n[t].push(`[B${e}]`),
                                            n[t].push(!1));
                                    }
                                    for (let t = 0; t < o.length; t++) {
                                        const e = t + 1;
                                        (o[t].push(`[P${e}]`), o[t].push(!0));
                                    }
                                    const l = [...o, ...n].slice(0, 30),
                                        i = l.map((t) => t[1]),
                                        u = i.reduce((t, e) => t + e, 0) / 30,
                                        d = u.toFixed(2),
                                        p = u.toFixed(8);
                                    return [l, [d, p]];
                                } catch (c) {
                                    return (
                                        console.error("获取数据失败：", c),
                                        console.error(
                                            "实际请求的JSON文件路径：",
                                            a
                                        ),
                                        {}
                                    );
                                }
                            },
                        },
                    },
                    dt = ut,
                    pt = dt,
                    vt = { class: "table-container" },
                    mt = { key: 0, class: "empty-tip" },
                    bt = { key: 1, class: "empty-tip error" },
                    ft = { key: 2, class: "b30-list" },
                    ht = { class: "fixed-left-text" },
                    yt = { key: 3, class: "empty-tip" },
                    gt = {
                        __name: "tableB30",
                        setup(t) {
                            const e = (0, c.KR)(null),
                                a = (0, c.KR)(!0),
                                r = (0, c.KR)(""),
                                n = (0, c.KR)([]);
                            return (
                                (0, s.sV)(async () => {
                                    try {
                                        const [t, a] =
                                            await pt.methods.getB30();
                                        ((e.value = t),
                                            (n.value = a),
                                            (r.value = ""));
                                    } catch (t) {
                                        (console.error("B30加载失败：", t),
                                            (r.value =
                                                "B30加载失败，请刷新重试"));
                                    } finally {
                                        a.value = !1;
                                    }
                                }),
                                (t, c) => (
                                    (0, s.uX)(),
                                    (0, s.CE)("div", vt, [
                                        a.value
                                            ? ((0, s.uX)(),
                                              (0, s.CE)(
                                                  "div",
                                                  mt,
                                                  " 正在加载B30表 "
                                              ))
                                            : r.value
                                              ? ((0, s.uX)(),
                                                (0, s.CE)(
                                                    "div",
                                                    bt,
                                                    (0, A.v_)(r.value),
                                                    1
                                                ))
                                              : e.value
                                                ? ((0, s.uX)(),
                                                  (0, s.CE)("div", ft, [
                                                      (0, s.bF)(
                                                          et,
                                                          {
                                                              "card-list":
                                                                  e.value,
                                                              columns: 3,
                                                              gap: 20,
                                                          },
                                                          {
                                                              default: (0,
                                                              s.k6)(
                                                                  ({
                                                                      cardData:
                                                                          t,
                                                                  }) => [
                                                                      (0, s.bF)(
                                                                          it,
                                                                          {
                                                                              "chart-info":
                                                                                  t,
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
                                                      (0, s.Lk)(
                                                          "div",
                                                          ht,
                                                          " RKS " +
                                                              (0, A.v_)(
                                                                  n.value[0]
                                                              ) +
                                                              " (" +
                                                              (0, A.v_)(
                                                                  n.value[1]
                                                              ) +
                                                              ") ",
                                                          1
                                                      ),
                                                  ]))
                                                : ((0, s.uX)(),
                                                  (0, s.CE)(
                                                      "div",
                                                      yt,
                                                      " 暂无B30表数据 "
                                                  )),
                                    ])
                                )
                            );
                        },
                    },
                    kt = (0, f.A)(gt, [["__scopeId", "data-v-d545f06e"]]),
                    _t = kt,
                    Lt = { class: "group-title" },
                    Ct = { class: "content-wrapper" },
                    Et = { class: "sub-bpm-label" },
                    It = {
                        __name: "bpmGUI",
                        props: {
                            cardList: { type: Array, required: !0 },
                            columns: { type: Number, required: !0 },
                            gap: { type: Number, default: 16 },
                            gridWidth: {
                                type: [Number, String],
                                default: 1500,
                            },
                        },
                        setup(t) {
                            const e = t,
                                a = (0, s.EW)(() => ({
                                    width:
                                        "number" === typeof e.gridWidth
                                            ? `${e.gridWidth}px`
                                            : e.gridWidth,
                                    margin: "0 auto",
                                    boxSizing: "border-box",
                                })),
                                r = () => ({
                                    "--column-count": e.columns,
                                    "--gap-size": `${e.gap}px`,
                                    "--column-width":
                                        "calc((100% - (var(--column-count) - 1) * var(--gap-size)) / var(--column-count))",
                                }),
                                c = (0, s.EW)(() => {
                                    const t = [...e.cardList].sort((t, e) => {
                                        const a = Number(t.mainBpm),
                                            r = Number(e.mainBpm);
                                        return r - a;
                                    });
                                    return t.map((t) => ({
                                        ...t,
                                        subBpmList: [...t.subBpmList].sort(
                                            (t, e) => {
                                                const a = Number(
                                                        t.subBpm.replace(
                                                            "x",
                                                            ""
                                                        )
                                                    ),
                                                    r = Number(
                                                        e.subBpm.replace(
                                                            "x",
                                                            ""
                                                        )
                                                    );
                                                return a - r;
                                            }
                                        ),
                                    }));
                                });
                            return (t, e) => (
                                (0, s.uX)(),
                                (0, s.CE)(
                                    "div",
                                    {
                                        class: "card-container",
                                        style: (0, A.Tr)(a.value),
                                    },
                                    [
                                        ((0, s.uX)(!0),
                                        (0, s.CE)(
                                            s.FK,
                                            null,
                                            (0, s.pI)(
                                                c.value,
                                                (e, a) => (
                                                    (0, s.uX)(),
                                                    (0, s.CE)(
                                                        "div",
                                                        {
                                                            key: a,
                                                            class: "card-group",
                                                        },
                                                        [
                                                            (0, s.Lk)(
                                                                "div",
                                                                Lt,
                                                                (0, A.v_)(
                                                                    Number(
                                                                        e.mainBpm
                                                                    )
                                                                ),
                                                                1
                                                            ),
                                                            ((0, s.uX)(!0),
                                                            (0, s.CE)(
                                                                s.FK,
                                                                null,
                                                                (0, s.pI)(
                                                                    e.subBpmList,
                                                                    (a, c) => (
                                                                        (0,
                                                                        s.uX)(),
                                                                        (0,
                                                                        s.CE)(
                                                                            "div",
                                                                            {
                                                                                key: c,
                                                                                class: "sub-bpm-row",
                                                                            },
                                                                            [
                                                                                (0,
                                                                                s.Lk)(
                                                                                    "div",
                                                                                    Ct,
                                                                                    [
                                                                                        (0,
                                                                                        s.Lk)(
                                                                                            "div",
                                                                                            Et,
                                                                                            (0,
                                                                                            A.v_)(
                                                                                                a.subBpm
                                                                                            ),
                                                                                            1
                                                                                        ),
                                                                                        (0,
                                                                                        s.Lk)(
                                                                                            "div",
                                                                                            {
                                                                                                class: "card-grid",
                                                                                                style: (0,
                                                                                                A.Tr)(
                                                                                                    r()
                                                                                                ),
                                                                                            },
                                                                                            [
                                                                                                ((0,
                                                                                                s.uX)(
                                                                                                    !0
                                                                                                ),
                                                                                                (0,
                                                                                                s.CE)(
                                                                                                    s.FK,
                                                                                                    null,
                                                                                                    (0,
                                                                                                    s.pI)(
                                                                                                        a.contentList,
                                                                                                        (
                                                                                                            r,
                                                                                                            c
                                                                                                        ) =>
                                                                                                            (0,
                                                                                                            s.RG)(
                                                                                                                t.$slots,
                                                                                                                "default",
                                                                                                                {
                                                                                                                    key: c,
                                                                                                                    cardData:
                                                                                                                        r,
                                                                                                                    index: c,
                                                                                                                    mainBpm:
                                                                                                                        e.mainBpm,
                                                                                                                    subBpm: a.subBpm,
                                                                                                                }
                                                                                                            )
                                                                                                    ),
                                                                                                    128
                                                                                                )),
                                                                                            ],
                                                                                            4
                                                                                        ),
                                                                                    ]
                                                                                ),
                                                                            ]
                                                                        )
                                                                    )
                                                                ),
                                                                128
                                                            )),
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
                    Bt = (0, f.A)(It, [["__scopeId", "data-v-cbdde434"]]),
                    Xt = Bt,
                    xt = { class: "chart-card" },
                    At = { class: "card-cover" },
                    wt = ["src", "alt"],
                    Nt = {
                        __name: "bpmCard",
                        props: { chartInfo: { type: String, required: !0 } },
                        setup(t) {
                            return (e, a) => (
                                (0, s.uX)(),
                                (0, s.CE)("div", xt, [
                                    (0, s.Lk)("div", At, [
                                        (0, s.Lk)(
                                            "img",
                                            {
                                                src: t.chartInfo,
                                                alt: t.chartInfo,
                                                class: "cover-img",
                                            },
                                            null,
                                            8,
                                            wt
                                        ),
                                    ]),
                                ])
                            );
                        },
                    },
                    $t = (0, f.A)(Nt, [["__scopeId", "data-v-055c26c4"]]),
                    Pt = $t,
                    Ft = {
                        name: "bpmGet",
                        methods: {
                            transformSongPaths(t, e) {
                                if (Array.isArray(t))
                                    return t.map((t) =>
                                        this.transformSongPaths(t, e)
                                    );
                                if ("object" === typeof t && null !== t) {
                                    const a = {};
                                    for (const r in t)
                                        a[r] = this.transformSongPaths(t[r], e);
                                    return a;
                                }
                                return "string" === typeof t
                                    ? `${e}/assets/illLow/${t}.png`
                                    : t;
                            },
                            async getBPM() {
                                const t = "",
                                    e = `${t}/files`,
                                    a = `${e}/infos/bpm.json`;
                                try {
                                    const e = await W.A.get(a),
                                        r = e.data,
                                        s = this.transformSongPaths(r, t);
                                    return s;
                                } catch (r) {
                                    return (
                                        console.error("获取数据失败：", r),
                                        console.error(
                                            "实际请求的JSON文件路径：",
                                            a
                                        ),
                                        {}
                                    );
                                }
                            },
                        },
                    },
                    Ot = Ft,
                    St = Ot,
                    jt = { class: "table-container" },
                    Kt = { key: 0, class: "empty-tip" },
                    Mt = { key: 1, class: "empty-tip error" },
                    Tt = { key: 2, class: "bpm-list" },
                    Wt = { key: 3, class: "empty-tip" },
                    Rt = {
                        __name: "tableBPM",
                        setup(t) {
                            const e = (0, c.KR)([]),
                                a = (0, c.KR)(!0),
                                r = (0, c.KR)(""),
                                n = (t) =>
                                    Array.isArray(t)
                                        ? t.map((t) => {
                                              const [e, a] = t,
                                                  r = Object.entries(a).map(
                                                      ([t, e]) => ({
                                                          subBpm: t,
                                                          contentList: e,
                                                      })
                                                  );
                                              return {
                                                  mainBpm: Number(e),
                                                  subBpmList: r,
                                              };
                                          })
                                        : [];
                            return (
                                (0, s.sV)(async () => {
                                    try {
                                        const t = await St.methods.getBPM();
                                        ((e.value = n(t)), (r.value = ""));
                                    } catch (t) {
                                        (console.error("BPM表加载失败：", t),
                                            (r.value =
                                                "BPM表加载失败，请刷新重试"));
                                    } finally {
                                        a.value = !1;
                                    }
                                }),
                                (t, c) => (
                                    (0, s.uX)(),
                                    (0, s.CE)("div", jt, [
                                        a.value
                                            ? ((0, s.uX)(),
                                              (0, s.CE)(
                                                  "div",
                                                  Kt,
                                                  " 正在加载BPM表 "
                                              ))
                                            : r.value
                                              ? ((0, s.uX)(),
                                                (0, s.CE)(
                                                    "div",
                                                    Mt,
                                                    (0, A.v_)(r.value),
                                                    1
                                                ))
                                              : e.value.length > 0
                                                ? ((0, s.uX)(),
                                                  (0, s.CE)("div", Tt, [
                                                      (0, s.bF)(
                                                          Xt,
                                                          {
                                                              "card-list":
                                                                  e.value,
                                                              columns: 5,
                                                              gap: 20,
                                                          },
                                                          {
                                                              default: (0,
                                                              s.k6)(
                                                                  ({
                                                                      cardData:
                                                                          t,
                                                                  }) => [
                                                                      (0, s.bF)(
                                                                          Pt,
                                                                          {
                                                                              "chart-info":
                                                                                  t,
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
                                                : ((0, s.uX)(),
                                                  (0, s.CE)(
                                                      "div",
                                                      Wt,
                                                      " 暂无BPM表数据 "
                                                  )),
                                    ])
                                )
                            );
                        },
                    },
                    Dt = (0, f.A)(Rt, [["__scopeId", "data-v-5d5460ce"]]),
                    Gt = Dt,
                    qt = [
                        {
                            path: "/",
                            component: y,
                            children: [
                                { path: "", name: "start", component: C },
                                {
                                    path: "table",
                                    name: "tableMain",
                                    component: x,
                                },
                                {
                                    path: "table",
                                    children: [
                                        {
                                            path: "level",
                                            name: "tableLevel",
                                            component: Y,
                                        },
                                        {
                                            path: "b30",
                                            name: "tableB30",
                                            component: _t,
                                        },
                                        {
                                            path: "bpm",
                                            name: "tableBPM",
                                            component: Gt,
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            path: "/:pathMatch(.*)*",
                            redirect: { name: "start" },
                        },
                    ],
                    zt = (0, n.aE)({
                        history: (0, n.Bt)(),
                        routes: qt,
                        scrollBehavior() {
                            return { top: 0 };
                        },
                    }),
                    Ht = zt;
                (0, r.Ef)(i).use(Ht).mount("#app");
            },
        },
        e = {};
    function a(r) {
        var s = e[r];
        if (void 0 !== s) return s.exports;
        var c = (e[r] = { exports: {} });
        return (t[r](c, c.exports, a), c.exports);
    }
    ((a.m = t),
        (() => {
            var t = [];
            a.O = (e, r, s, c) => {
                if (!r) {
                    var n = 1 / 0;
                    for (u = 0; u < t.length; u++) {
                        for (
                            var [r, s, c] = t[u], o = !0, l = 0;
                            l < r.length;
                            l++
                        )
                            (!1 & c || n >= c) &&
                            Object.keys(a.O).every((t) => a.O[t](r[l]))
                                ? r.splice(l--, 1)
                                : ((o = !1), c < n && (n = c));
                        if (o) {
                            t.splice(u--, 1);
                            var i = s();
                            void 0 !== i && (e = i);
                        }
                    }
                    return e;
                }
                c = c || 0;
                for (var u = t.length; u > 0 && t[u - 1][2] > c; u--)
                    t[u] = t[u - 1];
                t[u] = [r, s, c];
            };
        })(),
        (() => {
            a.d = (t, e) => {
                for (var r in e)
                    a.o(e, r) &&
                        !a.o(t, r) &&
                        Object.defineProperty(t, r, {
                            enumerable: !0,
                            get: e[r],
                        });
            };
        })(),
        (() => {
            a.g = (function () {
                if ("object" === typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")();
                } catch (t) {
                    if ("object" === typeof window) return window;
                }
            })();
        })(),
        (() => {
            a.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
        })(),
        (() => {
            a.r = (t) => {
                ("undefined" !== typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module",
                    }),
                    Object.defineProperty(t, "__esModule", { value: !0 }));
            };
        })(),
        (() => {
            var t = { 524: 0 };
            a.O.j = (e) => 0 === t[e];
            var e = (e, r) => {
                    var s,
                        c,
                        [n, o, l] = r,
                        i = 0;
                    if (n.some((e) => 0 !== t[e])) {
                        for (s in o) a.o(o, s) && (a.m[s] = o[s]);
                        if (l) var u = l(a);
                    }
                    for (e && e(r); i < n.length; i++)
                        ((c = n[i]),
                            a.o(t, c) && t[c] && t[c][0](),
                            (t[c] = 0));
                    return a.O(u);
                },
                r = (self["webpackChunkpcs"] = self["webpackChunkpcs"] || []);
            (r.forEach(e.bind(null, 0)),
                (r.push = e.bind(null, r.push.bind(r))));
        })());
    var r = a.O(void 0, [504], () => a(439));
    r = a.O(r);
})();
//# sourceMappingURL=app.4b7223a8.js.map
