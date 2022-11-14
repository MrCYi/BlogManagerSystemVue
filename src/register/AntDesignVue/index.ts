import { App } from 'vue'
import 'ant-design-vue/dist/antd.css'
import {
  Dropdown,
  Layout,
  LayoutContent,
  LayoutHeader,
  LayoutSider,
  Menu,
  MenuItem,
  SubMenu
} from 'ant-design-vue'

const components = [
  Layout,
  LayoutSider,
  LayoutHeader,
  LayoutContent,
  Menu,
  MenuItem,
  SubMenu,
  Dropdown
]

export default function (app: App) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
