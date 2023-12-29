import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import pinia from '@/store/index'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'

createApp(App)
    .use(router)
    .use(pinia)
    .use(ElementPlus)
    .mount('#app')
