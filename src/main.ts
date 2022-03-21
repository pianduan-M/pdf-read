import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

// 样式
import './assets/css/index.scss'

// element-ui
import './global/element-ui'
