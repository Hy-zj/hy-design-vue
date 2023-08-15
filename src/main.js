/*
 * @Description: 项目入口文件
 * @Author: huangyue
 * @LastEditors: huangyue
 * @LastEditTime: 2023-08-15 13:52:00
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/less/global.less'
import HyDesignVue from '../dist/hy-design-vue.mjs'
import '../dist/style.css'
const app = createApp(App)

app.use(router)

app.use(HyDesignVue)

app.mount('#app')
