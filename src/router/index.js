/*
 * @Description:
 * @Author: huangyue
 * @LastEditors: huangyue
 * @LastEditTime: 2023-08-15 12:17:21
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
