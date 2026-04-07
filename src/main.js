import { createApp } from 'vue'
import './main.scss'
import './validation/rules'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
