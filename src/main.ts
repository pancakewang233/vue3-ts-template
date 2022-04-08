import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'
import '@/router/permission'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia';
import locale from 'element-plus/lib/locale/lang/zh-CN' // 引入中文解决有些组件显示英文问题

createApp(App)
    .use(createPinia())
    .use(router)
    .use(ElementPlus, {locale})
    .mount('#app')
