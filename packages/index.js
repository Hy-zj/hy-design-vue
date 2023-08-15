/*
 * @Description:  
 * @Author: huangyue
 * @LastEditors: huangyue
 * @LastEditTime: 2023-08-15 08:16:29
 */
// 所有组件列表
import Tooltip from './tooltip/Tooltip.vue'

const components = [
  Tooltip,
]

// 定义 install 方法
const install = (app) => {
  // 遍历注册所有组件
  components.forEach(component => app.component(component.__name , component))
}

export {
  Tooltip,
}

const HYUI = {
  install
}

export default HYUI
