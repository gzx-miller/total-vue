import App from './App.vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'highlight.js/styles/github.css'
import './style.css'
import router from './router'

createApp(App).use(createPinia()).use(router).use(ElementPlus).mount('#app')
