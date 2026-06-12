import App from './App.vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'highlight.js/styles/github.css'
import './style.css'
import router from './router'

// GitHub Pages SPA hack: 从 404.html 恢复真实路由
const redirect = sessionStorage.redirect
delete sessionStorage.redirect
if (redirect && redirect !== '/') {
  router.replace(redirect)
}

createApp(App).use(createPinia()).use(router).use(ElementPlus).mount('#app')
