<template>
  <div>
    <div class="logo">
      <img src="@/assets/logo.png" alt="LOGO" />
      <span
        v-if="!sideStore.collapsed || !sideStore.useDefaultSide"
        class="logo-title"
        >后台管理系统</span
      >
    </div>
    <a-menu
      v-model:open-keys="sideStore.subMenuKeysArr"
      v-model:selectedKeys="sideStore.menuItemKeysArr"
      theme="dark"
      mode="inline"
      @openChange="handleSubMenu"
    >
      <a-menu-item key="DashBoard" @click="$router.push('/dashboard')">
        <dashboard-outlined />
        <span>DashBoard</span>
      </a-menu-item>
      <a-menu-item key="Users" @click="$router.push('/users')">
        <team-outlined />
        <span>用户管理</span>
      </a-menu-item>
      <a-sub-menu key="permission">
        <template #icon>
          <security-scan-outlined />
        </template>
        <template #title>权限管理</template>
        <a-menu-item key="Role" @click="$router.push('/permission/role')"
          >角色管理</a-menu-item
        >
        <a-menu-item key="Menu" @click="$router.push('/permission/menu')"
          >菜单管理</a-menu-item
        >
      </a-sub-menu>
      <a-sub-menu key="account">
        <template #icon>
          <user-outlined />
        </template>
        <template #title>个人中心</template>
        <a-menu-item key="AccountHome" @click="$router.push('/account/home')"
          >我的空间</a-menu-item
        >
        <a-menu-item
          key="AccountSetting"
          @click="$router.push('/account/setting')"
          >个人设置</a-menu-item
        >
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script lang="ts" setup>
import { useSideStore } from '@/store/sideStore'

const sideStore = useSideStore()

// method
// 保持 SubMenu 只展开一项
const handleSubMenu = (openKeys: string[]) => {
  if (openKeys.length > 1) {
    openKeys.splice(0, 1)
  }
}
</script>

<style scoped lang="less">
.logo {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  height: 48px;
  padding: 8px 16px;

  img {
    height: 100%;
    margin: 0 10px;
  }

  .logo-title {
    height: 100%;
    font-size: 16px;
    color: #fff;
    line-height: 32px;
    overflow: hidden;
  }
}
</style>
