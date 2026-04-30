# 🎎 BJD 入坑一站式 Wiki

> 从什么都不懂的新人，到自信入坑的新手。把所有信息差拉回同一水平。

BJD（Ball-Jointed Doll，球关节娃娃）入坑门槛高、圈内黑话多、信息碎片化严重。这个项目是一个**一站式 Wiki Web 应用**，把分散在各处的 BJD 知识整合到一个可检索、可对比、可视化的平台中。

## ✨ 特色

### 📐 体型百科 — 参数全透明
覆盖 **12分/8分/6分/4分/3分/叔/2分** 共 7 个尺寸级别、6 大品牌（Volks、Luts、龙魂、DollZone、云猜、UF Doll 等）、24+ 个经典素体的**完整参数**：
- 身高、胸围、腰围、臀围、肩宽
- 臂长、手长、腿长、大腿围、脚长
- 头围、颈围、眼珠尺寸
- 体重、材质、人气、参考价格

支持**多维度筛选**（尺寸 × 品牌 × 性别），**任选 2-3 个体型并排对比** 16 项参数，一目了然。

### 👤 头型百科 — 头身适配不再懵
16+ 个热门头型，每个都标注了：
- 头围、颈孔直径、适配眼珠尺寸
- 脸型描述、适合年龄感
- **关联适配的体型**（跨品牌混搭方案）

### 🖼️ 搭配图鉴 — 直观感受组合效果
15 组精选体 × 头搭配方案，覆盖成熟男性、清秀少年、甜美少女、韩系御姐、日系萌娃、幼儿等风格。每组标注搭配风格、角色类型、适配说明。**图片占位系统**已就绪，放入照片即刻展示。

### 📖 黑话词典 — 50+ 术语全覆盖
8 大分类，覆盖从入坑到进阶的全部圈内用语：
- 基础称呼（BJD、娃娘、壮士、素头……）
- 尺寸相关（分、叔、SD、MSD、YOSD……）
- 妆面类型（自由妆、指定妆、脑洞妆、成本妆……）
- 技法材料（粉彩、丙烯、消光、光油、面纹……）
- 送妆流程（妆则、小纸条、排单、定妆照、面罩……）
- 配件相关 + 皮肤颜色 + 圈内用语

支持**按分类筛选**和**关键词搜索**。

### 🚀 新手指南 — 6 步走完入坑路
从"BJD 是什么"到"日常养护"，循序渐进的图文教程，每步都有小贴士。

### 🔍 全局搜索
顶部搜索栏可跨类型检索体型、头型、术语，输入关键词即刻出结果。

### 📱 响应式设计
桌面端侧边栏导航 + 移动端抽屉式导航，手机浏览同样流畅。

## 🛠 技术栈

| 技术 | 用途 |
|------|------|
| **React 18** | UI 框架 |
| **TypeScript** | 类型安全 |
| **Vite 5** | 构建工具（极速 HMR） |
| **Tailwind CSS 3** | 原子化 CSS，内置暗色模式支持 |
| **React Router 6** | 客户端路由 |
| **零后端** | 全静态数据，TypeScript 源文件存放，无需服务器 |

## 🚦 快速开始

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
npm run dev

# 3. 打开浏览器访问
# http://localhost:5173
```

生产构建：

```bash
npm run build    # 输出到 dist/
npm run preview  # 预览生产构建
```

部署 —— 将 `dist/` 目录部署到任意静态托管服务即可（GitHub Pages、Vercel、Netlify、Nginx 等）。

## 📁 项目结构

```
Bjd/
├── index.html                 # 入口 HTML
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── images/                # 图片目录（放入真实照片即可替换占位图）
│       ├── bodies/            #   体型照片
│       ├── heads/             #   头型照片
│       └── gallery/           #   搭配展示照片
└── src/
    ├── main.tsx               # React 入口
    ├── App.tsx                # 路由配置
    ├── index.css              # Tailwind 基础样式
    ├── types.ts               # 全局 TypeScript 类型定义
    ├── components/            # 通用组件
    │   ├── Layout.tsx         #   页面布局（侧边栏 + 顶栏 + 内容区）
    │   ├── SearchBar.tsx      #   全局搜索（跨体型/头型/术语）
    │   ├── ComparisonTable.tsx#   体型并排对比表
    │   ├── BodyCard.tsx       #   体型列表卡片
    │   ├── HeadCard.tsx       #   头型列表卡片
    │   ├── TermCard.tsx       #   术语卡片
    │   └── ImagePlaceholder.tsx#  图片占位组件
    ├── pages/                 # 页面组件
    │   ├── HomePage.tsx       #   首页
    │   ├── BodyListPage.tsx   #   体型百科列表
    │   ├── BodyDetailPage.tsx #   体型详情
    │   ├── HeadListPage.tsx   #   头型百科列表
    │   ├── HeadDetailPage.tsx #   头型详情
    │   ├── GalleryPage.tsx    #   搭配图鉴
    │   ├── GlossaryPage.tsx   #   黑话词典
    │   └── GuidePage.tsx      #   新手指南
    └── data/                  # 数据层（TypeScript 源文件）
        ├── bodies.ts          #   24+ 体型完整参数
        ├── heads.ts           #   16+ 头型 + 适配关系
        ├── glossary.ts        #   50+ 术语 + 分类
        ├── guide.ts           #   6 步新手指南
        ├── combinations.ts    #   15 组体×头搭配推荐
        └── images.ts          #   图片路径映射表
```

## 🖼 如何替换图片

1. 将你的照片按尺寸放到 `public/images/` 对应目录下
2. 编辑 `src/data/images.ts`，填入文件名：

```typescript
export const bodyImages: Record<string, string> = {
  'volks-sd17': '/images/bodies/sd17.jpg',       // ← 你的照片
  'dz-4-female': '/images/bodies/dz4-female.jpg', // ← 你的照片
};
```

3. 刷新页面，占位图自动替换为你的照片

没有照片时，系统会显示风格友好的占位组件，不影响浏览体验。

## 🎯 设计理念

- **信息差归零**：把资深玩家才知道的参数、术语、搭配经验公开透明化
- **数据驱动**：不是空洞的建议，而是具体到厘米的参数、到元的预算
- **可生长**：纯 TypeScript 数据文件，新增体型/头型/术语只需追加一条 JSON
- **零门槛部署**：纯静态站点，一个 `dist/` 文件夹丢到任何地方就能跑

---

用 ❤️ 为 BJD 新手社区贡献。欢迎 PR 补充更多体型数据、术语和搭配方案。
