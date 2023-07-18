import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { ComponentLibrary } from '@chepe/stencil-vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ComponentLibrary)

app.mount('#app')
