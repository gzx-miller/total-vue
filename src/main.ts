import App from './App.vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import 'highlight.js/styles/github.css'
import './style.css'
import router from './router'

createApp(App).use(createPinia()).use(router).mount('#app')
