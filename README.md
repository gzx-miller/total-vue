# 举个栗子

一个中文前端知识案例库。当前已完成 Vue3 分类，使用 `Vue 3 + TypeScript + Vite + Vue Router + Pinia`，通过独立真实案例展示 Vue3 的重要知识点。

主题是“一只可爱的松鼠举着一颗板栗”：每个知识点都是一个栗子，适合按顺序逐个学习。

## 启动

```bash
pnpm install
pnpm dev
```

默认 Vue3 学习入口：

```text
/vue
```

具体章节路由示例：

```text
/vue/k-1/app-entry
/vue/k-12/routing/lee
```

## 验证

```bash
pnpm type-check
pnpm test
pnpm build
```

## 学习顺序

顶部导航用于区分知识类别，当前启用 `Vue3`，后续可扩展 `TypeScript`、`React`、`工程化` 等分类。

左侧导航按 `K_1` 到 `K_21` 排列。每个章节都是独立页面，右侧包含案例演示、关键代码、原理、处理流程、注意事项和解决的问题。

## 约定

- 页面展示使用中文，变量名和文件名使用英文。
- 路由需要保留知识类别层级，例如 Vue3 分类使用 `/vue/...`。
- 每个知识点只解决一个核心问题，避免重复讲解。
- 新增案例时保持 `K_序号` 命名，左侧导航标题使用短标题，正文标题可以更完整。
- 提交前至少运行 `pnpm type-check`、`pnpm test` 和 `pnpm build`。
