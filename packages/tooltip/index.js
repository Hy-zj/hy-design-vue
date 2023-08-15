/*
 * @Description: 自定义tooltip
 * @Author: huangyue
 * @LastEditors: huangyue
 * @LastEditTime: 2023-08-11 17:26:21
 */
import Tooltip from './Tooltip.vue'

// 使用install方法，在app.use挂载
Tooltip.install = (app) => {
  app.component(Tooltip.__name, Tooltip)
}

export default Tooltip