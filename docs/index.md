---
layout: home

title: Hy-design-vue
titleTemplate: Components Library

hero:
  name: Hy-design-vue
  text: Amazing UI 组件库
  tagline: 基于 Vue3 + Ant-design-vue4 + Vite 开发
  image:
    src: /logo-with-shadow.png
    alt: Hy-design-vue
  actions:
    - theme: brand
      text: Get Started
      link: /guide/features
    - theme: alt
      text: View on GitHub
      link: https://github.com/Hy-zj/hy-design-vue
    - theme: alt
      text: View on NPM
      link: https://www.npmjs.com/package/hy-design-vue
features:
  - icon: 🛠️
    title: 开发依赖
    details: 组件库采用 Vue3@3.3.4  + Vite4.4.6 + Less@4.1.3 实现
  - icon: ⚡️
    title: border-box
    details: '所有组件 CSS 样式均使用 box-sizing: border-box; 模式'
  - icon: 🚀
    title: 开箱即用
    details: 目前共有 1 个常用基础 UI 组件，以及 0 个常用工具函数
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // fetchVersion()
})
</script>
