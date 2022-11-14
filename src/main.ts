import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 样式初始化
import 'normalize.css'
import './assets/css/index.less'

// Vuex
import { createPinia } from 'pinia'

// 第三方依赖注册
import register from '@/register'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(register)
app.mount('#app')
