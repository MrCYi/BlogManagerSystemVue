<template>
  <a-layout-header class="nav_header">
    <menu-fold-outlined
      v-if="!sideStore.collapsed"
      class="trigger"
      @click="handleSideCollapsed"
    />
    <menu-unfold-outlined v-else class="trigger" @click="handleSideCollapsed" />
    <a-dropdown class="nav_dropdown" :trigger="['click', 'hover']">
      <a-menu>
        <a-menu-item id="dropdown_menu_item">
          <template #icon>
            <a-avatar src="https://joeschmoe.io/api/v1/random" />
          </template>
          小马
        </a-menu-item>
      </a-menu>
      <template #overlay>
        <a-menu>
          <a-menu-item
            key="personal_center"
            @click="toView('home', 'AccountHome')"
          >
            <template #icon>
              <user-outlined />
            </template>
            个人中心
          </a-menu-item>
          <a-menu-item
            key="personal_setting"
            @click="toView('setting', 'AccountSetting')"
          >
            <template #icon>
              <setting-outlined />
            </template>
            个人设置
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item key="logout">
            <template #icon>
              <logout-outlined />
            </template>
            退出登录
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </a-layout-header>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useSideStore } from '@/store/sideStore'

// data
const router = useRouter()
const sideStore = useSideStore()

// methods
const handleSideCollapsed = () => {
  if (sideStore.useDefaultSide) {
    sideStore.collapsed = !sideStore.collapsed
  } else {
    sideStore.drawerCollapsed = !sideStore.drawerCollapsed
  }
}
const toView = (path: string, routeName: string) => {
  sideStore.subMenuKeysArr.splice(0, 1, 'account')
  sideStore.menuItemKeysArr.splice(0, 1, routeName)
  router.push(`/account/${path}`)
}
</script>

<style scoped lang="less">
.nav_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0;
  background-color: #fff;
  .trigger {
    font-size: 18px;
    line-height: 48px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
  .nav_dropdown {
    margin: 0 32px;
    border-right: 0;
  }
}
</style>
