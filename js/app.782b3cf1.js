(() => {
    "use strict";
    var e = {
            219(e, t, a) {
                var r = a(751),
                    l = a(641),
                    s = a(953),
                    n = a(29);
                const c = {
                        __name: "App",
                        setup(e) {
                            return (e, t) => (
                                (0, l.uX)(),
                                (0, l.Wv)((0, s.R1)(n.Tp))
                            );
                        },
                    },
                    o = c,
                    i = o,
                    u = { class: "app-container" },
                    d = { class: "top-nav" },
                    p = { class: "nav-left" },
                    v = { class: "nav-right" },
                    b = { class: "page-container" },
                    m = {
                        __name: "Layout",
                        setup(e) {
                            const t = (e) => {
                                window.open(e, "_blank");
                            };
                            return (e, a) => (
                                (0, l.uX)(),
                                (0, l.CE)("div", u, [
                                    (0, l.Lk)("div", d, [
                                        (0, l.Lk)("div", p, [
                                            (0, l.Lk)(
                                                "div",
                                                {
                                                    class: "nav-item",
                                                    onClick:
                                                        a[0] ||
                                                        (a[0] = (t) =>
                                                            e.$router.push({
                                                                name: "start",
                                                            })),
                                                },
                                                " 主页 "
                                            ),
                                            (0, l.Lk)(
                                                "div",
                                                {
                                                    class: "nav-item",
                                                    onClick:
                                                        a[1] ||
                                                        (a[1] = (t) =>
                                                            e.$router.push({
                                                                name: "tableMain",
                                                            })),
                                                },
                                                " 列表 "
                                            ),
                                        ]),
                                        (0, l.Lk)("div", v, [
                                            (0, l.Lk)(
                                                "div",
                                                {
                                                    class: "nav-right-text",
                                                    onClick:
                                                        a[2] ||
                                                        (a[2] = (e) =>
                                                            t(
                                                                "https://space.bilibili.com/521730845"
                                                            )),
                                                },
                                                "个人主页"
                                            ),
                                            (0, l.Lk)(
                                                "div",
                                                {
                                                    class: "nav-right-text",
                                                    onClick:
                                                        a[3] ||
                                                        (a[3] = (e) =>
                                                            t(
                                                                "https://space.bilibili.com/414149787"
                                                            )),
                                                },
                                                "官方账号"
                                            ),
                                        ]),
                                    ]),
                                    (0, l.Lk)("div", b, [
                                        (0, l.bF)((0, s.R1)(n.Tp)),
                                    ]),
                                ])
                            );
                        },
                    };
                var f = a(262);
                const h = (0, f.A)(m, [["__scopeId", "data-v-4908f676"]]),
                    y = h,
                    g = { class: "start-page" };
                function k(e, t) {
                    return (
                        (0, l.uX)(),
                        (0, l.CE)("div", g, [
                            ...(t[0] ||
                                (t[0] = [
                                    (0, l.Lk)(
                                        "div",
                                        { class: "title-group" },
                                        [
                                            (0, l.Lk)(
                                                "h1",
                                                { class: "page-title" },
                                                "DP-Tool"
                                            ),
                                            (0, l.Lk)(
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
                    E = (0, f.A)(_, [
                        ["render", k],
                        ["__scopeId", "data-v-7ff5f58b"],
                    ]),
                    L = E,
                    C = { class: "table-main-container" },
                    I = { class: "table-card-list" },
                    X = {
                        __name: "tableMain",
                        setup(e) {
                            const t = (0, n.rd)(),
                                a = (e) => {
                                    t.push({ name: e });
                                };
                            return (e, t) => (
                                (0, l.uX)(),
                                (0, l.CE)("div", C, [
                                    (0, l.Lk)("div", I, [
                                        (0, l.Lk)(
                                            "div",
                                            {
                                                class: "table-card",
                                                onClick:
                                                    t[0] ||
                                                    (t[0] = (e) =>
                                                        a("tableLevel")),
                                            },
                                            [
                                                ...(t[4] ||
                                                    (t[4] = [
                                                        (0, l.Lk)(
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
                                        (0, l.Lk)(
                                            "div",
                                            {
                                                class: "table-card",
                                                onClick:
                                                    t[1] ||
                                                    (t[1] = (e) =>
                                                        a("tableBPM")),
                                            },
                                            [
                                                ...(t[5] ||
                                                    (t[5] = [
                                                        (0, l.Lk)(
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
                                        (0, l.Lk)(
                                            "div",
                                            {
                                                class: "table-card",
                                                onClick:
                                                    t[2] ||
                                                    (t[2] = (e) =>
                                                        a("tableB30")),
                                            },
                                            [
                                                ...(t[6] ||
                                                    (t[6] = [
                                                        (0, l.Lk)(
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
                                        (0, l.Lk)(
                                            "div",
                                            {
                                                class: "table-card",
                                                onClick:
                                                    t[3] ||
                                                    (t[3] = (e) =>
                                                        a("tableInfo")),
                                            },
                                            [
                                                ...(t[7] ||
                                                    (t[7] = [
                                                        (0, l.Lk)(
                                                            "div",
                                                            {
                                                                class: "table-card-title",
                                                            },
                                                            "信息表",
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
                    A = (0, f.A)(X, [["__scopeId", "data-v-59c88da7"]]),
                    B = A;
                var w = a(33);
                const N = { class: "group-title" },
                    $ = {
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
                                a = (0, l.EW)(() => ({
                                    width:
                                        "number" === typeof t.gridWidth
                                            ? `${t.gridWidth}px`
                                            : t.gridWidth,
                                    margin: "0 auto",
                                    boxSizing: "border-box",
                                })),
                                r = () => ({
                                    "--column-count": t.columns,
                                    "--gap-size": `${t.gap}px`,
                                    "--column-width":
                                        "calc((100% - (var(--column-count) - 1) * var(--gap-size)) / var(--column-count))",
                                }),
                                s = (0, l.EW)(() => {
                                    const e = Object.entries(t.cardList),
                                        a = e.sort((e, t) => {
                                            const a = Number(e[0]),
                                                r = Number(t[0]);
                                            return r - a;
                                        });
                                    return a.map(([e, t]) => ({
                                        key: e,
                                        value: t,
                                    }));
                                });
                            return (e, t) => (
                                (0, l.uX)(),
                                (0, l.CE)(
                                    "div",
                                    {
                                        class: "card-container",
                                        style: (0, w.Tr)(a.value),
                                    },
                                    [
                                        ((0, l.uX)(!0),
                                        (0, l.CE)(
                                            l.FK,
                                            null,
                                            (0, l.pI)(
                                                s.value,
                                                ({ key: t, value: a }, s) => (
                                                    (0, l.uX)(),
                                                    (0, l.CE)(
                                                        "div",
                                                        {
                                                            key: t,
                                                            class: "card-group",
                                                        },
                                                        [
                                                            (0, l.Lk)(
                                                                "div",
                                                                N,
                                                                (0, w.v_)(
                                                                    Number(
                                                                        t
                                                                    ).toFixed(1)
                                                                ),
                                                                1
                                                            ),
                                                            (0, l.Lk)(
                                                                "div",
                                                                {
                                                                    class: "card-grid",
                                                                    style: (0,
                                                                    w.Tr)(r()),
                                                                },
                                                                [
                                                                    ((0, l.uX)(
                                                                        !0
                                                                    ),
                                                                    (0, l.CE)(
                                                                        l.FK,
                                                                        null,
                                                                        (0,
                                                                        l.pI)(
                                                                            a,
                                                                            (
                                                                                a,
                                                                                r
                                                                            ) =>
                                                                                (0,
                                                                                l.RG)(
                                                                                    e.$slots,
                                                                                    "default",
                                                                                    {
                                                                                        key: r,
                                                                                        cardData:
                                                                                            a,
                                                                                        index: r,
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
                    x = (0, f.A)($, [["__scopeId", "data-v-01ea6be3"]]),
                    D = x,
                    O = { class: "chart-card" },
                    T = { class: "card-cover" },
                    K = ["src", "alt"],
                    W = { class: "card-info" },
                    j = {
                        __name: "levelCard",
                        props: { chartInfo: { type: Array, required: !0 } },
                        setup(e) {
                            return (t, a) => (
                                (0, l.uX)(),
                                (0, l.CE)("div", O, [
                                    (0, l.Lk)("div", T, [
                                        (0, l.Lk)(
                                            "img",
                                            {
                                                src: e.chartInfo[2],
                                                alt: e.chartInfo[2],
                                                class: "cover-img",
                                            },
                                            null,
                                            8,
                                            K
                                        ),
                                    ]),
                                    (0, l.Lk)("div", W, [
                                        (0, l.Lk)(
                                            "div",
                                            {
                                                class: "difficulty-tag",
                                                style: (0, w.Tr)({
                                                    backgroundColor:
                                                        e.chartInfo[4] ||
                                                        "#cccccc",
                                                }),
                                            },
                                            (0, w.v_)(e.chartInfo[3]),
                                            5
                                        ),
                                    ]),
                                ])
                            );
                        },
                    },
                    F = (0, f.A)(j, [["__scopeId", "data-v-1a62dc28"]]),
                    P = F;
                var M = a(335);
                const R = {
                        name: "LevelGet",
                        methods: {
                            async getLevel() {
                                const e = "",
                                    t = `${e}/files`,
                                    a = `${t}/infos/infos.json`,
                                    r = {
                                        EZ: "#0D9A28",
                                        HD: "#0175B8",
                                        IN: "#CF1313",
                                        AT: "#383838",
                                        SP: "#383838",
                                        LY: "#383838",
                                    },
                                    l = ["EZ", "HD", "IN", "AT"];
                                try {
                                    const t = await M.A.get(a),
                                        s = t.data,
                                        n = [];
                                    for (const [e, a] of Object.entries(s))
                                        if (a.name && a.display)
                                            for (const t of l)
                                                if (
                                                    a[t] &&
                                                    a[t].lvl &&
                                                    "" !== a[t].lvl.trim()
                                                ) {
                                                    const r = parseFloat(
                                                        a[t].lvl
                                                    );
                                                    isNaN(r) ||
                                                        n.push([e, r, t]);
                                                }
                                    const c = `${e}/assets/illLow`;
                                    for (const e of n) {
                                        e[1] = Math.round(10 * e[1]) / 10;
                                        const t = e[2];
                                        ((e[2] = `${c}/${e[0]}.png`),
                                            e.push(t),
                                            e.push(r[t] || "#383838"));
                                    }
                                    const o = {};
                                    for (const e of n) {
                                        const t = e[1];
                                        (o[t] || (o[t] = []), o[t].push(e));
                                    }
                                    const i = {};
                                    for (const [e, a] of Object.entries(o)) {
                                        const t = a.sort((e, t) =>
                                            e[0].localeCompare(t[0])
                                        );
                                        i[e] = t;
                                    }
                                    return i;
                                } catch (s) {
                                    return (
                                        console.error("获取数据失败：", s),
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
                    S = R,
                    G = S,
                    q = { class: "table-container" },
                    H = { key: 0, class: "empty-tip" },
                    Z = { key: 1, class: "empty-tip error" },
                    z = { key: 2, class: "level-list" },
                    J = { key: 3, class: "empty-tip" },
                    U = {
                        __name: "tableLevel",
                        setup(e) {
                            const t = (0, s.KR)(null),
                                a = (0, s.KR)(!0),
                                r = (0, s.KR)("");
                            return (
                                (0, l.sV)(async () => {
                                    try {
                                        const e = await G.methods.getLevel();
                                        ((t.value = e), (r.value = ""));
                                    } catch (e) {
                                        (console.error("定数表加载失败：", e),
                                            (r.value =
                                                "定数表加载失败，请刷新重试"));
                                    } finally {
                                        a.value = !1;
                                    }
                                }),
                                (e, s) => (
                                    (0, l.uX)(),
                                    (0, l.CE)("div", q, [
                                        a.value
                                            ? ((0, l.uX)(),
                                              (0, l.CE)(
                                                  "div",
                                                  H,
                                                  " 正在加载定数表 "
                                              ))
                                            : r.value
                                              ? ((0, l.uX)(),
                                                (0, l.CE)(
                                                    "div",
                                                    Z,
                                                    (0, w.v_)(r.value),
                                                    1
                                                ))
                                              : t.value
                                                ? ((0, l.uX)(),
                                                  (0, l.CE)("div", z, [
                                                      (0, l.bF)(
                                                          D,
                                                          {
                                                              "card-list":
                                                                  t.value,
                                                              columns: 5,
                                                              gap: 20,
                                                          },
                                                          {
                                                              default: (0,
                                                              l.k6)(
                                                                  ({
                                                                      cardData:
                                                                          e,
                                                                  }) => [
                                                                      (0, l.bF)(
                                                                          P,
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
                                                : ((0, l.uX)(),
                                                  (0, l.CE)(
                                                      "div",
                                                      J,
                                                      " 暂无定数表数据 "
                                                  )),
                                    ])
                                )
                            );
                        },
                    },
                    V = (0, f.A)(U, [["__scopeId", "data-v-25a46be3"]]),
                    Q = V,
                    Y = {
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
                        setup(e) {
                            const t = e,
                                a = (0, l.EW)(() => ({
                                    width:
                                        "number" === typeof t.gridWidth
                                            ? `${t.gridWidth}px`
                                            : t.gridWidth,
                                    "--column-count": t.columns,
                                    "--gap-size": `${t.gap}px`,
                                    "--column-width":
                                        "calc((100% - (var(--column-count) - 1) * var(--gap-size)) / var(--column-count))",
                                }));
                            return (t, r) => (
                                (0, l.uX)(),
                                (0, l.CE)(
                                    "div",
                                    {
                                        class: "card-grid",
                                        style: (0, w.Tr)(a.value),
                                    },
                                    [
                                        ((0, l.uX)(!0),
                                        (0, l.CE)(
                                            l.FK,
                                            null,
                                            (0, l.pI)(e.cardList, (e, a) =>
                                                (0, l.RG)(t.$slots, "default", {
                                                    key: a,
                                                    cardData: e,
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
                    ee = (0, f.A)(Y, [["__scopeId", "data-v-46a25622"]]),
                    te = ee,
                    ae = { class: "top-right-text" },
                    re = { class: "card-cover" },
                    le = ["src", "alt"],
                    se = { class: "card-info" },
                    ne = { class: "chart-name" },
                    ce = {
                        __name: "b30Card",
                        props: { chartInfo: { type: Array, required: !0 } },
                        setup(e) {
                            return (t, a) => (
                                (0, l.uX)(),
                                (0, l.CE)(
                                    "div",
                                    {
                                        class: (0, w.C4)([
                                            "chart-card",
                                            { "glow-border": e.chartInfo[7] },
                                        ]),
                                    },
                                    [
                                        (0, l.Lk)(
                                            "div",
                                            ae,
                                            (0, w.v_)(e.chartInfo[6]),
                                            1
                                        ),
                                        (0, l.Lk)("div", re, [
                                            (0, l.Lk)(
                                                "img",
                                                {
                                                    src: e.chartInfo[2],
                                                    alt: e.chartInfo[2],
                                                    class: "cover-img",
                                                },
                                                null,
                                                8,
                                                le
                                            ),
                                        ]),
                                        (0, l.Lk)("div", se, [
                                            (0, l.Lk)(
                                                "h3",
                                                ne,
                                                (0, w.v_)(e.chartInfo[3]),
                                                1
                                            ),
                                            (0, l.Lk)(
                                                "div",
                                                {
                                                    class: "difficulty-tag",
                                                    style: (0, w.Tr)({
                                                        backgroundColor:
                                                            e.chartInfo[5] ||
                                                            "#cccccc",
                                                    }),
                                                },
                                                (0, w.v_)(
                                                    e.chartInfo[4] +
                                                        " Lv." +
                                                        e.chartInfo[1]
                                                ),
                                                5
                                            ),
                                        ]),
                                        a[0] ||
                                            (a[0] = (0, l.Fv)(
                                                '<div class="bottom-left-info" data-v-1d0765d3><img src="/assets/rank/Phi.png" class="info-icon" data-v-1d0765d3><div class="info-text-wrapper" data-v-1d0765d3><div class="main-text" data-v-1d0765d3> 1000000 </div><div class="sub-text" data-v-1d0765d3> 100.00% </div></div></div>',
                                                1
                                            )),
                                    ],
                                    2
                                )
                            );
                        },
                    },
                    oe = (0, f.A)(ce, [["__scopeId", "data-v-1d0765d3"]]),
                    ie = oe,
                    ue = {
                        name: "b30Get",
                        methods: {
                            async getB30() {
                                const e = "",
                                    t = `${e}/files`,
                                    a = `${t}/infos/infos.json`,
                                    r = {
                                        EZ: "#0D9A28",
                                        HD: "#0175B8",
                                        IN: "#CF1313",
                                        AT: "#383838",
                                    },
                                    l = ["IN", "AT"];
                                try {
                                    const t = await M.A.get(a),
                                        s = t.data,
                                        n = [];
                                    for (const [e, a] of Object.entries(s))
                                        if (a.name && a.display)
                                            for (const t of l)
                                                if (
                                                    a[t] &&
                                                    a[t].lvl &&
                                                    "" !== a[t].lvl.trim()
                                                ) {
                                                    const r = parseFloat(
                                                            a[t].lvl
                                                        ),
                                                        l = a.name;
                                                    isNaN(r) ||
                                                        n.push([e, r, t, l]);
                                                }
                                    n.sort((e, t) => t[1] - e[1]);
                                    for (const a of n) {
                                        a[1] = Math.round(10 * a[1]) / 10;
                                        const t = a[2];
                                        ((a[2] = `${e}/assets/illLow/${a[0]}.png`),
                                            a.push(t),
                                            a.push(r[t] || "#383838"));
                                    }
                                    const c = n.slice(0, 3).map((e) => [...e]);
                                    for (let e = 0; e < n.length; e++) {
                                        const t = e + 1;
                                        t <= 27 &&
                                            (n[e].push(`[B${t}]`),
                                            n[e].push(!1));
                                    }
                                    for (let e = 0; e < c.length; e++) {
                                        const t = e + 1;
                                        (c[e].push(`[P${t}]`), c[e].push(!0));
                                    }
                                    const o = [...c, ...n].slice(0, 30),
                                        i = o.map((e) => e[1]),
                                        u = i.reduce((e, t) => e + t, 0) / 30,
                                        d = u.toFixed(2),
                                        p = u.toFixed(8);
                                    return [o, [d, p]];
                                } catch (s) {
                                    return (
                                        console.error("获取数据失败：", s),
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
                    de = ue,
                    pe = de,
                    ve = { class: "table-container" },
                    be = { key: 0, class: "empty-tip" },
                    me = { key: 1, class: "empty-tip error" },
                    fe = { key: 2, class: "b30-list" },
                    he = { class: "fixed-left-text" },
                    ye = { key: 3, class: "empty-tip" },
                    ge = {
                        __name: "tableB30",
                        setup(e) {
                            const t = (0, s.KR)(null),
                                a = (0, s.KR)(!0),
                                r = (0, s.KR)(""),
                                n = (0, s.KR)([]);
                            return (
                                (0, l.sV)(async () => {
                                    try {
                                        const [e, a] =
                                            await pe.methods.getB30();
                                        ((t.value = e),
                                            (n.value = a),
                                            (r.value = ""));
                                    } catch (e) {
                                        (console.error("B30加载失败：", e),
                                            (r.value =
                                                "B30加载失败，请刷新重试"));
                                    } finally {
                                        a.value = !1;
                                    }
                                }),
                                (e, s) => (
                                    (0, l.uX)(),
                                    (0, l.CE)("div", ve, [
                                        a.value
                                            ? ((0, l.uX)(),
                                              (0, l.CE)(
                                                  "div",
                                                  be,
                                                  " 正在加载B30表 "
                                              ))
                                            : r.value
                                              ? ((0, l.uX)(),
                                                (0, l.CE)(
                                                    "div",
                                                    me,
                                                    (0, w.v_)(r.value),
                                                    1
                                                ))
                                              : t.value
                                                ? ((0, l.uX)(),
                                                  (0, l.CE)("div", fe, [
                                                      (0, l.bF)(
                                                          te,
                                                          {
                                                              "card-list":
                                                                  t.value,
                                                              columns: 3,
                                                              gap: 20,
                                                          },
                                                          {
                                                              default: (0,
                                                              l.k6)(
                                                                  ({
                                                                      cardData:
                                                                          e,
                                                                  }) => [
                                                                      (0, l.bF)(
                                                                          ie,
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
                                                      (0, l.Lk)(
                                                          "div",
                                                          he,
                                                          " RKS " +
                                                              (0, w.v_)(
                                                                  n.value[0]
                                                              ) +
                                                              " (" +
                                                              (0, w.v_)(
                                                                  n.value[1]
                                                              ) +
                                                              ") ",
                                                          1
                                                      ),
                                                  ]))
                                                : ((0, l.uX)(),
                                                  (0, l.CE)(
                                                      "div",
                                                      ye,
                                                      " 暂无B30表数据 "
                                                  )),
                                    ])
                                )
                            );
                        },
                    },
                    ke = (0, f.A)(ge, [["__scopeId", "data-v-d545f06e"]]),
                    _e = ke,
                    Ee = { class: "group-title" },
                    Le = { class: "content-wrapper" },
                    Ce = { class: "sub-bpm-label" },
                    Ie = {
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
                        setup(e) {
                            const t = e,
                                a = (0, l.EW)(() => ({
                                    width:
                                        "number" === typeof t.gridWidth
                                            ? `${t.gridWidth}px`
                                            : t.gridWidth,
                                    margin: "0 auto",
                                    boxSizing: "border-box",
                                })),
                                r = () => ({
                                    "--column-count": t.columns,
                                    "--gap-size": `${t.gap}px`,
                                    "--column-width":
                                        "calc((100% - (var(--column-count) - 1) * var(--gap-size)) / var(--column-count))",
                                }),
                                s = (0, l.EW)(() => {
                                    const e = [...t.cardList].sort((e, t) => {
                                        const a = Number(e.mainBpm),
                                            r = Number(t.mainBpm);
                                        return r - a;
                                    });
                                    return e.map((e) => ({
                                        ...e,
                                        subBpmList: [...e.subBpmList].sort(
                                            (e, t) => {
                                                const a = Number(
                                                        e.subBpm.replace(
                                                            "x",
                                                            ""
                                                        )
                                                    ),
                                                    r = Number(
                                                        t.subBpm.replace(
                                                            "x",
                                                            ""
                                                        )
                                                    );
                                                return a - r;
                                            }
                                        ),
                                    }));
                                });
                            return (e, t) => (
                                (0, l.uX)(),
                                (0, l.CE)(
                                    "div",
                                    {
                                        class: "card-container",
                                        style: (0, w.Tr)(a.value),
                                    },
                                    [
                                        ((0, l.uX)(!0),
                                        (0, l.CE)(
                                            l.FK,
                                            null,
                                            (0, l.pI)(
                                                s.value,
                                                (t, a) => (
                                                    (0, l.uX)(),
                                                    (0, l.CE)(
                                                        "div",
                                                        {
                                                            key: a,
                                                            class: "card-group",
                                                        },
                                                        [
                                                            (0, l.Lk)(
                                                                "div",
                                                                Ee,
                                                                (0, w.v_)(
                                                                    Number(
                                                                        t.mainBpm
                                                                    )
                                                                ),
                                                                1
                                                            ),
                                                            ((0, l.uX)(!0),
                                                            (0, l.CE)(
                                                                l.FK,
                                                                null,
                                                                (0, l.pI)(
                                                                    t.subBpmList,
                                                                    (a, s) => (
                                                                        (0,
                                                                        l.uX)(),
                                                                        (0,
                                                                        l.CE)(
                                                                            "div",
                                                                            {
                                                                                key: s,
                                                                                class: "sub-bpm-row",
                                                                            },
                                                                            [
                                                                                (0,
                                                                                l.Lk)(
                                                                                    "div",
                                                                                    Le,
                                                                                    [
                                                                                        (0,
                                                                                        l.Lk)(
                                                                                            "div",
                                                                                            Ce,
                                                                                            (0,
                                                                                            w.v_)(
                                                                                                a.subBpm
                                                                                            ),
                                                                                            1
                                                                                        ),
                                                                                        (0,
                                                                                        l.Lk)(
                                                                                            "div",
                                                                                            {
                                                                                                class: "card-grid",
                                                                                                style: (0,
                                                                                                w.Tr)(
                                                                                                    r()
                                                                                                ),
                                                                                            },
                                                                                            [
                                                                                                ((0,
                                                                                                l.uX)(
                                                                                                    !0
                                                                                                ),
                                                                                                (0,
                                                                                                l.CE)(
                                                                                                    l.FK,
                                                                                                    null,
                                                                                                    (0,
                                                                                                    l.pI)(
                                                                                                        a.contentList,
                                                                                                        (
                                                                                                            r,
                                                                                                            s
                                                                                                        ) =>
                                                                                                            (0,
                                                                                                            l.RG)(
                                                                                                                e.$slots,
                                                                                                                "default",
                                                                                                                {
                                                                                                                    key: s,
                                                                                                                    cardData:
                                                                                                                        r,
                                                                                                                    index: s,
                                                                                                                    mainBpm:
                                                                                                                        t.mainBpm,
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
                    Xe = (0, f.A)(Ie, [["__scopeId", "data-v-cbdde434"]]),
                    Ae = Xe,
                    Be = { class: "chart-card" },
                    we = { class: "card-cover" },
                    Ne = ["src", "alt"],
                    $e = {
                        __name: "bpmCard",
                        props: { chartInfo: { type: String, required: !0 } },
                        setup(e) {
                            return (t, a) => (
                                (0, l.uX)(),
                                (0, l.CE)("div", Be, [
                                    (0, l.Lk)("div", we, [
                                        (0, l.Lk)(
                                            "img",
                                            {
                                                src: e.chartInfo,
                                                alt: e.chartInfo,
                                                class: "cover-img",
                                            },
                                            null,
                                            8,
                                            Ne
                                        ),
                                    ]),
                                ])
                            );
                        },
                    },
                    xe = (0, f.A)($e, [["__scopeId", "data-v-055c26c4"]]),
                    De = xe,
                    Oe = {
                        name: "bpmGet",
                        methods: {
                            transformSongPaths(e, t) {
                                if (Array.isArray(e))
                                    return e.map((e) =>
                                        this.transformSongPaths(e, t)
                                    );
                                if ("object" === typeof e && null !== e) {
                                    const a = {};
                                    for (const r in e)
                                        a[r] = this.transformSongPaths(e[r], t);
                                    return a;
                                }
                                return "string" === typeof e
                                    ? `${t}/assets/illLow/${e}.png`
                                    : e;
                            },
                            async getBPM() {
                                const e = "",
                                    t = `${e}/files`,
                                    a = `${t}/infos/bpm.json`;
                                try {
                                    const t = await M.A.get(a),
                                        r = t.data,
                                        l = this.transformSongPaths(r, e);
                                    return l;
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
                    Te = Oe,
                    Ke = Te,
                    We = { class: "table-container" },
                    je = { key: 0, class: "empty-tip" },
                    Fe = { key: 1, class: "empty-tip error" },
                    Pe = { key: 2, class: "bpm-list" },
                    Me = { key: 3, class: "empty-tip" },
                    Re = {
                        __name: "tableBPM",
                        setup(e) {
                            const t = (0, s.KR)([]),
                                a = (0, s.KR)(!0),
                                r = (0, s.KR)(""),
                                n = (e) =>
                                    Array.isArray(e)
                                        ? e.map((e) => {
                                              const [t, a] = e,
                                                  r = Object.entries(a).map(
                                                      ([e, t]) => ({
                                                          subBpm: e,
                                                          contentList: t,
                                                      })
                                                  );
                                              return {
                                                  mainBpm: Number(t),
                                                  subBpmList: r,
                                              };
                                          })
                                        : [];
                            return (
                                (0, l.sV)(async () => {
                                    try {
                                        const e = await Ke.methods.getBPM();
                                        ((t.value = n(e)), (r.value = ""));
                                    } catch (e) {
                                        (console.error("BPM表加载失败：", e),
                                            (r.value =
                                                "BPM表加载失败，请刷新重试"));
                                    } finally {
                                        a.value = !1;
                                    }
                                }),
                                (e, s) => (
                                    (0, l.uX)(),
                                    (0, l.CE)("div", We, [
                                        a.value
                                            ? ((0, l.uX)(),
                                              (0, l.CE)(
                                                  "div",
                                                  je,
                                                  " 正在加载BPM表 "
                                              ))
                                            : r.value
                                              ? ((0, l.uX)(),
                                                (0, l.CE)(
                                                    "div",
                                                    Fe,
                                                    (0, w.v_)(r.value),
                                                    1
                                                ))
                                              : t.value.length > 0
                                                ? ((0, l.uX)(),
                                                  (0, l.CE)("div", Pe, [
                                                      (0, l.bF)(
                                                          Ae,
                                                          {
                                                              "card-list":
                                                                  t.value,
                                                              columns: 5,
                                                              gap: 20,
                                                          },
                                                          {
                                                              default: (0,
                                                              l.k6)(
                                                                  ({
                                                                      cardData:
                                                                          e,
                                                                  }) => [
                                                                      (0, l.bF)(
                                                                          De,
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
                                                : ((0, l.uX)(),
                                                  (0, l.CE)(
                                                      "div",
                                                      Me,
                                                      " 暂无BPM表数据 "
                                                  )),
                                    ])
                                )
                            );
                        },
                    },
                    Se = (0, f.A)(Re, [["__scopeId", "data-v-5d5460ce"]]),
                    Ge = Se,
                    qe = { key: 0, class: "table-title" },
                    He = { key: 1, class: "empty-table-tip" },
                    Ze = { class: "data-table" },
                    ze = {
                        __name: "infoGUI",
                        props: {
                            tableData: { type: Array, required: !0 },
                            tableWidth: {
                                type: [Number, String],
                                default: "100%",
                            },
                            cellGap: { type: Number, default: 8 },
                            tableTitle: { type: String, default: "" },
                        },
                        setup(e) {
                            const t = e,
                                a = (0, s.KR)(null),
                                r = (0, s.KR)(!1),
                                n = (0, s.KR)(0),
                                c = (0, s.KR)(0),
                                o = (0, l.EW)(() => {
                                    if (
                                        !Array.isArray(t.tableData) ||
                                        0 === t.tableData.length
                                    )
                                        return (
                                            console.warn("tableData 为空数组"),
                                            !1
                                        );
                                    const e = t.tableData[0];
                                    if (
                                        "object" !== typeof e ||
                                        null === e ||
                                        Array.isArray(e)
                                    )
                                        return (
                                            console.warn(
                                                "tableData 第0项不是有效字典（对象）"
                                            ),
                                            !1
                                        );
                                    const a = t.tableData.slice(1);
                                    if (0 === a.length)
                                        return (
                                            console.warn(
                                                "tableData 无表体数据（仅表头）"
                                            ),
                                            !1
                                        );
                                    const r = a[0];
                                    return (
                                        ("object" === typeof r &&
                                            null !== r &&
                                            !Array.isArray(r)) ||
                                        (console.warn(
                                            "tableData 表体数据不是有效字典（对象）"
                                        ),
                                        !1)
                                    );
                                }),
                                i = (0, l.EW)(() =>
                                    o.value ? t.tableData[0] : {}
                                ),
                                u = (0, l.EW)(() =>
                                    o.value ? t.tableData.slice(1) : []
                                ),
                                d = (0, l.EW)(() => "暂无表格数据"),
                                p = (0, l.EW)(() => ({
                                    width:
                                        "number" === typeof t.tableWidth
                                            ? `${t.tableWidth}px`
                                            : t.tableWidth,
                                    "--cell-gap": `${t.cellGap}px`,
                                    margin: "0 auto",
                                })),
                                v = (e) => {
                                    a.value &&
                                        ((r.value = !0),
                                        (n.value = e.clientX),
                                        (c.value = a.value.scrollLeft),
                                        e.preventDefault());
                                },
                                b = (e) => {
                                    if (!r.value || !a.value) return;
                                    const t = e.clientX - n.value;
                                    a.value.scrollLeft = c.value - t;
                                },
                                m = () => {
                                    r.value = !1;
                                },
                                f = () => {
                                    r.value = !1;
                                };
                            return (t, s) => (
                                (0, l.uX)(),
                                (0, l.CE)(
                                    "div",
                                    {
                                        class: "table-container",
                                        style: (0, w.Tr)(p.value),
                                    },
                                    [
                                        e.tableTitle
                                            ? ((0, l.uX)(),
                                              (0, l.CE)(
                                                  "div",
                                                  qe,
                                                  (0, w.v_)(e.tableTitle),
                                                  1
                                              ))
                                            : (0, l.Q3)("", !0),
                                        o.value
                                            ? ((0, l.uX)(),
                                              (0, l.CE)(
                                                  "div",
                                                  {
                                                      key: 2,
                                                      ref_key:
                                                          "tableWrapperRef",
                                                      ref: a,
                                                      class: "table-wrapper",
                                                      onMousedown: v,
                                                      onMouseleave: f,
                                                      onMouseup: m,
                                                      onMousemove: b,
                                                      style: (0, w.Tr)({
                                                          cursor: r.value
                                                              ? "grabbing"
                                                              : "grab",
                                                      }),
                                                  },
                                                  [
                                                      (0, l.Lk)("table", Ze, [
                                                          (0, l.Lk)(
                                                              "thead",
                                                              null,
                                                              [
                                                                  (0, l.Lk)(
                                                                      "tr",
                                                                      null,
                                                                      [
                                                                          ((0,
                                                                          l.uX)(
                                                                              !0
                                                                          ),
                                                                          (0,
                                                                          l.CE)(
                                                                              l.FK,
                                                                              null,
                                                                              (0,
                                                                              l.pI)(
                                                                                  i.value,
                                                                                  (
                                                                                      e,
                                                                                      t,
                                                                                      a
                                                                                  ) => (
                                                                                      (0,
                                                                                      l.uX)(),
                                                                                      (0,
                                                                                      l.CE)(
                                                                                          "th",
                                                                                          {
                                                                                              key: `header-${a}`,
                                                                                              class: "table-th",
                                                                                          },
                                                                                          (0,
                                                                                          w.v_)(
                                                                                              t
                                                                                          ),
                                                                                          1
                                                                                      )
                                                                                  )
                                                                              ),
                                                                              128
                                                                          )),
                                                                      ]
                                                                  ),
                                                              ]
                                                          ),
                                                          (0, l.Lk)(
                                                              "tbody",
                                                              null,
                                                              [
                                                                  ((0, l.uX)(
                                                                      !0
                                                                  ),
                                                                  (0, l.CE)(
                                                                      l.FK,
                                                                      null,
                                                                      (0, l.pI)(
                                                                          u.value,
                                                                          (
                                                                              e,
                                                                              t
                                                                          ) => (
                                                                              (0,
                                                                              l.uX)(),
                                                                              (0,
                                                                              l.CE)(
                                                                                  "tr",
                                                                                  {
                                                                                      key: `row-${t}`,
                                                                                      class: (0,
                                                                                      w.C4)(
                                                                                          {
                                                                                              "even-row":
                                                                                                  t %
                                                                                                      2 ===
                                                                                                  0,
                                                                                          }
                                                                                      ),
                                                                                  },
                                                                                  [
                                                                                      ((0,
                                                                                      l.uX)(
                                                                                          !0
                                                                                      ),
                                                                                      (0,
                                                                                      l.CE)(
                                                                                          l.FK,
                                                                                          null,
                                                                                          (0,
                                                                                          l.pI)(
                                                                                              Object.values(
                                                                                                  e
                                                                                              ),
                                                                                              (
                                                                                                  e,
                                                                                                  t
                                                                                              ) => (
                                                                                                  (0,
                                                                                                  l.uX)(),
                                                                                                  (0,
                                                                                                  l.CE)(
                                                                                                      "td",
                                                                                                      {
                                                                                                          key: `cell-${t}`,
                                                                                                      },
                                                                                                      (0,
                                                                                                      w.v_)(
                                                                                                          e
                                                                                                      ),
                                                                                                      1
                                                                                                  )
                                                                                              )
                                                                                          ),
                                                                                          128
                                                                                      )),
                                                                                  ],
                                                                                  2
                                                                              )
                                                                          )
                                                                      ),
                                                                      128
                                                                  )),
                                                              ]
                                                          ),
                                                      ]),
                                                  ],
                                                  36
                                              ))
                                            : ((0, l.uX)(),
                                              (0, l.CE)(
                                                  "div",
                                                  He,
                                                  (0, w.v_)(d.value),
                                                  1
                                              )),
                                    ],
                                    4
                                )
                            );
                        },
                    },
                    Je = (0, f.A)(ze, [["__scopeId", "data-v-5e43f93f"]]),
                    Ue = Je,
                    Ve = {
                        name: "infoGet",
                        methods: {
                            async getInfo(e = {}) {
                                const t = "",
                                    a = `${t}/files`,
                                    r = `${a}/infos/infos.json`;
                                try {
                                    const t = await M.A.get(r),
                                        a = t.data,
                                        l = {};
                                    Object.entries(e).forEach(([e, t]) => {
                                        l[e] = t;
                                    });
                                    const s = [];
                                    for (const [r, n] of Object.entries(a)) {
                                        if (!n.name || !n.display) continue;
                                        const t = {};
                                        (Object.entries(e).forEach(([e, a]) => {
                                            const r = a.split(":");
                                            let l = "";
                                            if (1 === r.length)
                                                l = n[r[0]] ?? "";
                                            else {
                                                const [e, t] = r;
                                                l = n[e]?.[t] ?? "";
                                            }
                                            t[e] = l;
                                        }),
                                            Object.keys(t).length > 0 &&
                                                s.push(t));
                                    }
                                    return [l, ...s];
                                } catch (l) {
                                    (console.error("获取数据失败：", l),
                                        console.error(
                                            "实际请求的JSON文件路径：",
                                            r
                                        ));
                                    const t = {};
                                    return (
                                        Object.entries(e).forEach(([e, a]) => {
                                            t[e] = a;
                                        }),
                                        [t]
                                    );
                                }
                            },
                        },
                    },
                    Qe = Ve,
                    Ye = Qe,
                    et = { class: "table-container" },
                    tt = { key: 0, class: "empty-tip" },
                    at = { key: 1, class: "empty-tip error" },
                    rt = { key: 2, class: "info-list" },
                    lt = { key: 3, class: "empty-tip" },
                    st = {
                        __name: "tableInfo",
                        setup(e) {
                            const t = (0, s.KR)(null),
                                a = (0, s.KR)(!0),
                                r = (0, s.KR)(""),
                                n = {
                                    曲名: "name",
                                    曲师: "composer",
                                    画师: "illustrator",
                                    更新: "date",
                                    章节: "chapter",
                                    版本: "version",
                                    BPM: "BPM",
                                    时长: "duration",
                                    EZ定数: "EZ:lvl",
                                    EZ谱师名义: "EZ:tcharter",
                                    EZ物量: "EZ:notecount",
                                    HD定数: "HD:lvl",
                                    HD谱师名义: "HD:charter",
                                    HD物量: "HD:notecount",
                                    IN定数: "IN:lvl",
                                    IN谱师名义: "IN:charter",
                                    IN物量: "IN:notecount",
                                    AT定数: "AT:lvl",
                                    AT谱师名义: "AT:charter",
                                    AT物量: "AT:notecount",
                                };
                            return (
                                (0, l.sV)(async () => {
                                    try {
                                        const e = await Ye.methods.getInfo(n);
                                        ((t.value = e), (r.value = ""));
                                    } catch (e) {
                                        (console.error("信息表加载失败：", e),
                                            (r.value =
                                                "信息表加载失败，请刷新重试"),
                                            (t.value = []));
                                    } finally {
                                        a.value = !1;
                                    }
                                }),
                                (e, s) => (
                                    (0, l.uX)(),
                                    (0, l.CE)("div", et, [
                                        a.value
                                            ? ((0, l.uX)(),
                                              (0, l.CE)(
                                                  "div",
                                                  tt,
                                                  " 正在加载信息表 "
                                              ))
                                            : r.value
                                              ? ((0, l.uX)(),
                                                (0, l.CE)(
                                                    "div",
                                                    at,
                                                    (0, w.v_)(r.value),
                                                    1
                                                ))
                                              : t.value && t.value.length > 1
                                                ? ((0, l.uX)(),
                                                  (0, l.CE)("div", rt, [
                                                      (0, l.bF)(
                                                          Ue,
                                                          {
                                                              "table-data":
                                                                  t.value,
                                                              "table-width": 1500,
                                                              "cell-gap": 10,
                                                              "border-color":
                                                                  "#d1d5db",
                                                          },
                                                          null,
                                                          8,
                                                          ["table-data"]
                                                      ),
                                                  ]))
                                                : ((0, l.uX)(),
                                                  (0, l.CE)(
                                                      "div",
                                                      lt,
                                                      " 暂无信息表数据 "
                                                  )),
                                    ])
                                )
                            );
                        },
                    },
                    nt = (0, f.A)(st, [["__scopeId", "data-v-f757729a"]]),
                    ct = nt,
                    ot = [
                        {
                            path: "/",
                            component: y,
                            children: [
                                { path: "", name: "start", component: L },
                                {
                                    path: "table",
                                    name: "tableMain",
                                    component: B,
                                },
                                {
                                    path: "table",
                                    children: [
                                        {
                                            path: "level",
                                            name: "tableLevel",
                                            component: Q,
                                        },
                                        {
                                            path: "b30",
                                            name: "tableB30",
                                            component: _e,
                                        },
                                        {
                                            path: "bpm",
                                            name: "tableBPM",
                                            component: Ge,
                                        },
                                        {
                                            path: "info",
                                            name: "tableInfo",
                                            component: ct,
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
                    it = (0, n.aE)({
                        history: (0, n.Bt)(),
                        routes: ot,
                        scrollBehavior() {
                            return { top: 0 };
                        },
                    }),
                    ut = it;
                (0, r.Ef)(i).use(ut).mount("#app");
            },
        },
        t = {};
    function a(r) {
        var l = t[r];
        if (void 0 !== l) return l.exports;
        var s = (t[r] = { exports: {} });
        return (e[r](s, s.exports, a), s.exports);
    }
    ((a.m = e),
        (() => {
            var e = [];
            a.O = (t, r, l, s) => {
                if (!r) {
                    var n = 1 / 0;
                    for (u = 0; u < e.length; u++) {
                        for (
                            var [r, l, s] = e[u], c = !0, o = 0;
                            o < r.length;
                            o++
                        )
                            (!1 & s || n >= s) &&
                            Object.keys(a.O).every((e) => a.O[e](r[o]))
                                ? r.splice(o--, 1)
                                : ((c = !1), s < n && (n = s));
                        if (c) {
                            e.splice(u--, 1);
                            var i = l();
                            void 0 !== i && (t = i);
                        }
                    }
                    return t;
                }
                s = s || 0;
                for (var u = e.length; u > 0 && e[u - 1][2] > s; u--)
                    e[u] = e[u - 1];
                e[u] = [r, l, s];
            };
        })(),
        (() => {
            a.d = (e, t) => {
                for (var r in t)
                    a.o(t, r) &&
                        !a.o(e, r) &&
                        Object.defineProperty(e, r, {
                            enumerable: !0,
                            get: t[r],
                        });
            };
        })(),
        (() => {
            a.g = (function () {
                if ("object" === typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")();
                } catch (e) {
                    if ("object" === typeof window) return window;
                }
            })();
        })(),
        (() => {
            a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
        })(),
        (() => {
            a.r = (e) => {
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
            a.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                    var l,
                        s,
                        [n, c, o] = r,
                        i = 0;
                    if (n.some((t) => 0 !== e[t])) {
                        for (l in c) a.o(c, l) && (a.m[l] = c[l]);
                        if (o) var u = o(a);
                    }
                    for (t && t(r); i < n.length; i++)
                        ((s = n[i]),
                            a.o(e, s) && e[s] && e[s][0](),
                            (e[s] = 0));
                    return a.O(u);
                },
                r = (self["webpackChunkpcs"] = self["webpackChunkpcs"] || []);
            (r.forEach(t.bind(null, 0)),
                (r.push = t.bind(null, r.push.bind(r))));
        })());
    var r = a.O(void 0, [504], () => a(219));
    r = a.O(r);
})();
//# sourceMappingURL=app.782b3cf1.js.map
