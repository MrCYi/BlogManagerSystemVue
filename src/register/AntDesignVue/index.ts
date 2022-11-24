import { App } from 'vue'
import 'ant-design-vue/dist/antd.css'
import {
  Affix,
  Avatar,
  Badge,
  Button,
  Card,
  Divider,
  Drawer,
  Dropdown,
  Image,
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutSider,
  Menu,
  MenuDivider,
  MenuItem,
  SubMenu,
  Table
} from 'ant-design-vue'

import {
  TeamOutlined,
  DashboardOutlined,
  UserOutlined,
  SecurityScanOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SettingOutlined,
  LogoutOutlined
} from '@ant-design/icons-vue'

const components = [
  Layout,
  LayoutSider,
  LayoutHeader,
  LayoutContent,
  Menu,
  MenuItem,
  SubMenu,
  Dropdown,
  Button,
  Affix,
  Drawer,
  Avatar,
  MenuDivider,
  Card,
  Table,
  Divider,
  Badge,
  Image
]

const svgComponents = [
  TeamOutlined,
  DashboardOutlined,
  SecurityScanOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SettingOutlined,
  LogoutOutlined
]

export default function (app: App) {
  components.forEach((component) => {
    app.component(component.name, component)
  })

  svgComponents.forEach((component) => {
    app.component(component.name, component)
  })
}
