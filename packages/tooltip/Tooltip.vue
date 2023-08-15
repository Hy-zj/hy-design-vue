<!--
 * @Description:  
 * @Author: huangyue
 * @LastEditors: huangyue
 * @LastEditTime: 2023-08-15 12:18:38
-->
<template>
  <Tooltip v-if="showTooltipByEllipsis" :open="isShowTooltip" v-bind="$attrs">
    <template #title>{{ content }}</template>
    <span ref="contentRef" @mouseenter="visibleChange" @mouseleave="setIsShowTooltip(false)" class="text-hidden">{{ content }}</span>
  </Tooltip>
  <Tooltip v-else v-bind="$attrs">
    <template #title>{{ content }}</template>
    {{ content }}
  </Tooltip>
</template>

<script setup>
import { ref } from 'vue'
import { Tooltip } from 'ant-design-vue'
import 'ant-design-vue/lib/tooltip/style/index'
const { content, showTooltipByEllipsis } = defineProps({
  content: {
    type: String,
    default: '--'
  },
  showTooltipByEllipsis: {
    type: Boolean,
    default: false
  }
})
const isShowTooltip = ref(false)
const contentRef = ref()
const setIsShowTooltip = (val)=>{
  isShowTooltip.value = val
}
const visibleChange = () => {
  const dom = contentRef.value
  console.log(dom.toString())
  const sw = contentRef.value.scrollWidth
  const cw = contentRef.value.clientWidth
  if (sw > cw) {
    setIsShowTooltip(true)
  } else {
    setIsShowTooltip(false)
  }
}

</script>

<style lang="less" scoped>
.text-hidden {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
