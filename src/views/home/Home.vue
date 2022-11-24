<template>
  <a-layout class="home">
    <NavSide />
    <a-layout>
      <a-affix>
        <NavHeader />
      </a-affix>
      <a-layout-content class="nav_content">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useSideStore } from '@/store/sideStore'
import NavSide from './NavSide.vue'
import NavHeader from './NavHeader'

const route = useRoute()
const sideStore = useSideStore()

// 初始化
// 刷新选中菜单项
const fullPathArr = route.fullPath.split('/')
sideStore.subMenuKeysArr.splice(0, 1, fullPathArr[1])
if (route.name) sideStore.menuItemKeysArr.splice(0, 1, route.name.toString())
</script>

<style scoped lang="less">
.home {
  min-height: 100vh;
  min-width: 200px;
}
.nav_content {
  min-height: 280px;
  margin: 24px 16px;
}
</style>
