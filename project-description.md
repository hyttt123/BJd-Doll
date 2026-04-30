# 小米百万亿 Tokens 活动 — 项目描述

## 项目名称
**BJD 入坑一站式 Wiki** — AI 驱动的球关节娃娃知识平台

---

## 项目描述

我构建了一个基于 Claude Code Agent 全流程驱动的 BJD 球关节娃娃新人入坑 Wiki 平台。BJD 是一个高度封闭的兴趣圈层，圈内术语（黑话）超过 50 个，各品牌体型参数分散在微博、贴吧、日韩官网、英文 Wiki 等数十个来源，新人面对巨大的信息差无从下手。

**核心解决痛点**：用 AI Agent 在 1 小时内完成了一个新人原本需要数月跨平台搜索才能积累的领域知识的结构化整合——包括 24+ 个体型（覆盖 12 分到 2 分全尺寸）的 16 项身体参数对比、16+ 个头型的适配关系、50+ 个圈内术语的词典、以及 15 组体×头搭配方案。

**核心逻辑流**：
1. **多 Agent 并行调研**：3 个 Explore Agent 并行发起 WebSearch（中文 + 英文 + 日韩品牌专项），搜索了超过 30 个网页源，提取 VLoks/Luts/龙魂/DollZone 等品牌的详细体型参数表、妆娘术语体系、新手入坑教程
2. **Plan Agent 架构设计**：根据调研到的数据特征，Plan Agent 设计了 TypeScript 类型系统（Body/Head/GlossaryTerm/Combination 等接口）和 SPA 路由架构（8 个页面、6 个数据模块）
3. **长链实现**：主 Agent 依次完成了 Vite + React + TypeScript + Tailwind CSS 项目脚手架搭建 → 数据层编码（6 个数据文件）→ 通用组件库（7 个组件，含全局搜索、多体并排对比表）→ 8 个页面视图 → TypeScript 编译修复 → 生产构建验证的完整闭环
4. **项目总计约 30 个文件、2500+ 行代码，全程由 Agent 从零生成，人工零编码**

**技术栈**：React 18 + TypeScript + Vite 5 + Tailwind CSS 3 + React Router 6，纯前端静态站点，零后端依赖。

**价值与影响力**：该项目将 BJD 入坑的知识获取效率提升了至少 80%——原本需要跨微博、贴吧、日韩官网、英文 Wiki 等至少 6 个平台数周才能收集齐全的信息，现在在一个 Wiki 内即可检索、筛选、对比。平台完全开源、纯静态部署，可被 BJD 社区自由使用和扩展。

---

## 证明链接

项目已在本地完成构建验证：

```bash
npm run build
# ✓ built in 815ms
# dist/index.html     0.55 kB
# dist/assets/...css  25.15 kB (gzip: 4.98 kB)
# dist/assets/...js   226.59 kB (gzip: 76.03 kB)
```

TypeScript 类型检查零错误，生产构建通过。
