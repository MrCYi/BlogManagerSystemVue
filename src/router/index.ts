import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home/Home.vue'
import DashBoard from '@/views/home/dashboard/DashBoard.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'DashBoard',
        component: DashBoard
      },
      {
        path: '/users',
        name: 'Users',
        component: () => import('@/views/home/users/Users.vue')
      },
      {
        path: '/permission/role',
        name: 'Role',
        component: () => import('@/views/home/permission/Role.vue')
      },
      {
        path: '/permission/menu',
        name: 'Menu',
        component: () => import('@/views/home/permission/Menu.vue')
      },
      {
        path: '/account/home',
        name: 'AccountHome',
        component: () => import('@/views/home/account/AccountHome.vue')
      },
      {
        path: '/account/setting',
        name: 'AccountSetting',
        component: () => import('@/views/home/account/AccountSetting.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
