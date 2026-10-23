# DPTool

**Phigros 数据与工具站** —— 纯静态前端，没有后端、没有数据库，运行时只读静态 JSON 和曲绘。

> [!WARNING]
> **本项目是 vibe coding 的产物。** 代码、文档与重构大量由 AI 生成 —— 用的是 **DeepSeek V4.1 Flash**（DeepSeek 官方 API，模型 id `deepseek-flash`），人类作者负责提需求、做决定与验收。AI 输出**可能包含错误、过时或不准确的内容**，一切以仓库里的代码和你在线上 / 本机的实测结果为准；改动曲目数据前请自己对一遍游戏内数值。曲绘、曲名与谱面数据的版权归 Pigeon Games，本项目只做非官方整理。

| 路径 | 作用 |
| --- | --- |
| `vue/src/` | 前端源码：`router.js` 路由表、`Layout.vue` 顶部导航、各页面 `*.vue`、`api/` 取数、`components/` 卡片组件 |
| `vue/public/` | 静态资源，约 938 MB / 862 个文件：`files/` 数据 JSON、`assets/ill` 高清曲绘、`assets/illLow` 低清曲绘 |
| `vue/dist/` | 构建产物，约 949 MB / 912 个文件；被 `.gitignore` 排除，只存在于发布分支 |
| `python/` | 抓取与整理数据的脚本（`getInfos.py`、`getBPM.py`、`getCharter.py`、`getLvmdf.py`、`getAccount.py`、`comImg.py`）+ `accountList.xlsx` |
| `backsup/`、`.getter-backup/` | 备份与抓取缓存 |
| `.gitignore` / `.gitattributes` | 忽略 `dist`、`node_modules`；把图片 / 字体标成二进制，避免换行转换破坏文件 |
| `runVue.bat` / `buildVue.bat` / `setup.bat` | 起开发服务器 / 构建 / 一键起服务并打开浏览器 |
| `publish.ps1` + `publish.bat` | 把构建产物发布到 GitHub Pages |

## 站点与仓库

- 站点：<https://daogemm.github.io/>（hash 路由，页面链接形如 `https://daogemm.github.io/#/table/level`）
- 仓库：<https://github.com/DaogeMM/daogemm.github.io> —— 只有一个 `main` 分支，**内容就是网站本身**，源码只留在本地

## 功能

顶部导航分三组。

### 数据查询

| 页面 | 路由 | 说明 |
| --- | --- | --- |
| 曲目列表 | `#/single` | 按章节分组的曲绘卡片，低清曲绘懒加载；点卡片进单曲页 |
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
| 噪域画笔 | `#/noisePainter` | WebGL 图片噪点化编辑器：导入图片、画笔 / 矩形 / 直线 / 填充 / 橡皮 / 移动、撤销重做、动画播放、参数面板、导出 PNG |
| 联机模拟 | `#/gui/phiLink` | 连线工具；入口在导航里被注释隐藏（`Layout.vue` 取消注释即可恢复） |

另外全站有个**截图按钮**（`components/pageShot.vue` + `html2canvas`），能把自己正在看的页面导成图片。

## 数据从哪来

- 取数在 `vue/src/api/*.js`，`api/jsonCache.js` 对同一 URL 的请求做统一缓存：`infos.json` 只下载一次，曲目列表 / 定数 / B30 / 选曲共用
- 数据文件在 `vue/public/files/`：

  | 目录 | 内容 |
  | --- | --- |
  | `infos/infos.json` | 约 790 KB，曲目、定数、B30、选曲、各列表的总数据源 |
  | `infos/bpm.json`、`infos/charters.json` | BPM 表、谱师表 |
  | `lvmdf/lvmdf<版本>.json` | 11 份定数变更（1.5.0 → 3.20.0） |
  | `yfps/list<年份>.json` | 2020–2026 年度爱曲 |
  | `pmt/*.json` | PMT 图池与赛况 |

- 曲绘在 `vue/public/assets/`：`ill/<曲ID>.png` 高清、`illLow/<曲ID>.png` 列表用低清
- 资源前缀常量 `NET`（`api/common.js`）为空串；站点若要挪到子路径，改它并同步 `public/index.html` 里的绝对路径（`/js/...`、`/css/...`）

## 本地开发

需要 Node.js（`vue-cli-service` 5 能跑的版本即可）。

```powershell
cd vue
npm install        # 首次需要；node_modules 不入库
npm run serve      # http://localhost:8080
```

或直接双击 `setup.bat`（= `runVue.bat` + 打开 `http://localhost:8080`）。

## 构建

```powershell
cd vue
npm run build      # 输出到 vue\dist
```

或双击 `buildVue.bat`。注意 `dist/index.html` 引用的是 `/js/...`、`/css/...` 这类**绝对根路径**，所以站点必须部署在域名根目录（`https://daogemm.github.io/` 正好是）。

- `vue/package.json` 的 `build` 走的是 `vue-cli-service build`，**不是** vite；`vue/vite.config.js` 是废弃残留（里面还混了 CJS 的 `module.exports`），别拿它当构建配置。

## 发布

双击 `publish.bat`，或：

```powershell
.\publish.ps1              # 构建 → 提交源码到本地 main → 生成 site 提交 → 推送到远程 main
.\publish.ps1 -SkipBuild   # 不重新构建，直接用现有 vue/dist
.\publish.ps1 -NoPush      # 只更新本地 site 分支
```

### 分支模型

| 分支 | 内容 | 是否上传 |
| --- | --- | --- |
| `main`（本地） | 源码与整套资源 | 否，只留在本地 |
| `site`（本地） | `vue/dist` 的内容 + `LICENSE` + `README.md` | 是，推送到远程 `main` |
| `main`（远程） | 站点的完整内容，GitHub Pages 从这里部署 | —— |

发布脚本的几个要点：

- 用**临时索引 + 独立 work-tree** 读 `vue/dist`，靠 `commit-tree` 造提交，全程不切分支、不动工作区
- 父提交永远是**刚 fetch 下来的 `origin/main`**，所以推送必定快进，不会覆盖历史
- `LICENSE` 沿用远程的；`README.md` 用仓库根部的这一份（远程那边因此能看到同样的说明）
- 产物与线上完全一致时直接打印「无需发布」并退出
- `git push` 的默认 refspec 被限制为 `site → main`，源码不会被误推上去

### 代理

直连 GitHub 会超时，仓库本地配置里带了代理：

```powershell
git config --local http.proxy http://127.0.0.1:7890   # 开代理时
git config --local --unset http.proxy                  # 关代理后
```

## 更新数据

`python/` 下的脚本负责把外部数据整理成 `vue/public/files/**/*.json`（需要 Python 3 + `pandas`、`openpyxl`、`Pillow`）。改完重新构建再发布即可：

```powershell
python python\getInfos.py     # 其余脚本按需执行
.\publish.ps1
```

## 许可与出处

- 远程 `main` 根部的 [`LICENSE`](https://github.com/DaogeMM/daogemm.github.io/blob/main/LICENSE) 是 **Unlicense**（公有领域），随站点一起分发。
- 曲绘、曲名、谱面数据与定数等内容的版权归 **Pigeon Games（Phigros）** 所有；本项目只做非官方的整理与展示，不声称任何授权或代理关系，权利人如要求会立即移除相关内容。
- **非官方**：与 Pigeon Games、TeamFlos（Phira）均无隶属、授权或赞助关系；相关游戏名与商标归各自权利人。
- 曲绘是全量入库的（约 820 MB 原始图片，打包后 pack 约 913 MB），clone 会慢，这是有意的取舍。

界面与数据字段仍在变动，细节一律以代码与实测为准。问题与建议直接联系作者（DaogeMM）。
