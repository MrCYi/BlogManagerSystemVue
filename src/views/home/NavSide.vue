<template>
  <a-layout-sider
    v-if="sideStore.useDefaultSide"
    collapsible
    breakpoint="lg"
    :trigger="null"
    v-model:collapsed="sideStore.collapsed"
    @breakpoint="breakpointHook"
  >
    <a-affix>
      <NavSideItem />
    </a-affix>
  </a-layout-sider>
  <a-drawer
    v-else
    :width="200"
    placement="left"
    :closable="false"
    :drawerStyle="{ background: '#001529' }"
    :bodyStyle="{ padding: '0' }"
    :visible="sideStore.drawerCollapsed"
    @close="sideStore.drawerCollapsed = false"
  >
    <NavSideItem />
  </a-drawer>
</template>

<script lang="ts" setup>
import { useSideStore } from '@/store/sideStore'
import NavSideItem from './NavSideItem.vue'

// data
const sideStore = useSideStore()

// methods
const breakpointHook = (broken: boolean) => {
  if (broken) {
    sideStore.subMenuKeysArr = new Array<string>()
  }
  sideStore.collapsed = broken
}

// created
if (document.body.clientWidth < 768) sideStore.useDefaultSide = false
// 窗口发生改变时
window.onresize = () => {
  if (document.body.clientWidth < 768) {
    sideStore.useDefaultSide = false
  } else {
    sideStore.useDefaultSide = true
  }
}
</script>

<style scoped lang="less"></style>
