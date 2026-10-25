# DPTool

**Phigros 工具站** —— 纯静态前端，没有后端、没有数据库，运行时只读静态 JSON 和曲绘。

> [!WARNING]
> **本项目是 vibe coding 的产物。** 代码、文档与重构大量由 AI 生成 —— 用的是 **DeepSeek V4.1 Flash**（DeepSeek 官方 API，模型 id `deepseek-flash`），人类作者负责提需求、做决定与验收。AI 输出**可能包含错误、过时或不准确的内容**，一切以仓库里的代码和你在线上 / 本机的实测结果为准；改动曲目数据前请自己对一遍游戏内数值。曲绘、曲名与谱面数据的版权归 Pigeon Games，本项目只做非官方整理。

## 站点与仓库

- 站点：<https://daogemm.github.io/>，hash 路由，页面链接形如 `https://daogemm.github.io/#/table/level`
- 仓库：<https://github.com/DaogeMM/daogemm.github.io> —— 只有一个 `main` 分支，里面装的就是网站本身（静态文件），源码不在这里

## 功能

顶部是一级导航（曲目 / 列表 / PMT / 工具 / 数据），当前一级下的条目列在左侧栏；「关于本站」固定在侧栏左下角。

### 数据查询

| 页面 | 路由 | 说明 |
| --- | --- | --- |
| 曲目列表 | `#/single` | 按章节分组的曲绘卡片，列表用低清曲绘懒加载；点卡片进单曲页 |
| 单曲详情 | `#/single/:songName` | 高清曲绘 + 难度 / 定数 / 物量 / 谱师名义 / 谱师，以及更新、版本、时长、关联、赛事等元信息 |
| 定数列表 | `#/table/level` | 全部谱面的定数卡片网格（列数可配），按定数从高到低 |
| 谱师列表 | `#/table/charter` | 按谱师名义聚合的谱面列表 |
| 其它列表 | `#/table` | 入口页，下含 **BPM列表** `#/table/bpm`、**B30列表** `#/table/b30`（列表页显示 RKS） |

### PMT

| 页面 | 路由 | 说明 |
| --- | --- | --- |
| PMT图池 | `#/pmtMaps` | 按海选 / 决赛切换的比赛图池 |
| PMT赛况 | `#/pmtStatus` | 「预选 / 排名 / 赛况」三个页签，排名页区分冠军、亚军、季军 |

### 工具与趣味

| 页面 | 路由 | 说明 |
| --- | --- | --- |
| 定数变更 | `#/lvmdfList` | 按版本查看定数变化，共 11 个版本（1.5.0 → 3.20.0） |
| 年度爱曲 | `#/yfpsList` | 2020–2026 每年一份年度曲目列表，按年份切换 |
| 猜曲游戏 | `#/guessGame` | 「连字猜曲 / 开字猜曲」两种模式；可调网格大小、选曲数量、非英文曲名、字母全大写，一键生成字谜 |
| 噪域画笔 | `#/noisePainter` | WebGL 图片噪点化编辑器：导入图片、画笔 / 矩形 / 直线 / 填充 / 橡皮 / 移动、撤销重做、清空、动画播放、参数面板、导出 PNG。着色器与遮罩管线移植自 **Phira-Pro**（GPL-3.0），见[许可与出处](#许可与出处) |
| 突脸数字 | `#/signalNumber` | 复刻 Phigros 主线第九章开场「难度提升」的 1920×1080 演出：同屏 / 单画面预览、时间轴播放与参考静帧、文本选项、90 项画面参数、16:9 / 4:3 画幅，可导出 GIF 或 PNG 帧序列。渲染引擎移植自 **signal-replica**（MIT），见[许可与出处](#许可与出处) |
| 联机模拟 | `#/gui/phiLink` | 连线工具；入口在导航里被注释隐藏，取消 `vue/src/layout/Layout.vue` 里那行注释即可恢复 |

另外全站有个**截图按钮**（`vue/src/components/ui/pageShot.vue` + `html2canvas`），能把自己正在看的页面导成图片。

### 关于

| 页面 | 路由 | 说明 |
| --- | --- | --- |
| 关于本站 | `#/about` | 站点定位、致谢、引用项目、开源许可、第三方素材、开发方式、非官方声明，页脚是仓库 / 许可 / 反馈入口 |

列表页的卡片都可以点开进单曲详情。

## 内容都在哪

| 路径 | 内容 |
| --- | --- |
| `vue/public/files/` | 数据 JSON：曲目与定数、BPM、谱师、定数变更（11 个版本）、年度爱曲（2020–2026）、PMT 图池与赛况 |
| `vue/public/assets/` | 曲绘：`ill/<曲ID>.png` 高清、`illLow/<曲ID>.png` 列表用低清 |
| `vue/dist/` | 构建后的站点本体，线上部署的就是它（约 949 MB / 912 个文件） |

## 许可与出处

- 本仓库（源码与站点）以 **GPL-3.0** 分发，全文见根目录的 [`LICENSE`](https://github.com/DaogeMM/daogemm.github.io/blob/main/LICENSE)，它随站点一起发布。
- **噪域画笔的着色器移植自 [Phira-Pro](https://github.com/Phira-Pro/Phira-Pro)（GPL-3.0）**：`vue/src/assets/shaders/blockEffectShaders.js`、`vue/src/views/tool/noisePainter.vue` 与同目录 `noisePainter/consts.js` 里的 GLSL、遮罩膨胀 / 环带提取逻辑与材质参数，来自 Phira-Pro 的 `prpr/src/core/block_shader_full.frag` 与 `prpr/src/core/block_shader.rs`（源自 prpr 的 block-area 效果实现）；页面外壳、交互与界面是本站自己写的。这部分与本仓库同为 GPL-3.0，再分发时保留本声明即可。
- 界面图标用 **Material Design Icons**（Pictogrammers，Apache-2.0），只取在用的十几枚字形：字体是 `vue/public/assets/fonts/materialdesignicons-webfont.woff2`，字形码表在 `vue/public/icons.css`。
- **突脸数字的渲染引擎移植自 [signal-replica](https://github.com/Lylighte/signal-replica)（MIT）**：`vue/src/views/tool/signalNumber/bilitoy/` 里的 `engine.js`、`design.js`、`config.js`、`frame-export.js`、`gif-*.js`、`screen-curve.js`、`signal-distortion.js` 与数字的字形光栅化方式来自该仓库的 `bilitoy` 分支（上游复刻 Phigros 主线第九章开场动画）；页面外壳、交互与站点集成是本站重写的。上游许可全文随代码保留在 `vue/src/views/tool/signalNumber/bilitoy/LICENSE-bilitoy.txt`；Saira 字体按 SIL OFL 分发，全文在 `vue/public/assets/part/Saira-OFL.txt`。
- 曲绘、曲名、谱面数据与定数等内容的版权归 **Pigeon Games（Phigros）** 所有；本项目只做非官方的整理与展示，不声称任何授权或代理关系，权利人如要求会立即移除相关内容。
- **非官方**：与 Pigeon Games、TeamFlos（Phira）均无隶属、授权或赞助关系；相关游戏名与商标归各自权利人。
- 曲绘是全量入库的（约 820 MB 原始图片），clone 会慢，这是有意的取舍。

界面与数据字段仍在变动，细节一律以代码与实测为准。问题与建议直接联系作者（DaogeMM）。
