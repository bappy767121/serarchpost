import { createApp } from 'vue'
import App from './App.vue'

// Create a new Vue app instance
const app = createApp(App)

// Register the "snippet" filter globally
app.config.globalProperties.$filters = {
  snippet(text) {
    if (!text || typeof text !== 'string') return ''
    return text.slice(0, 40)
  }
}

// Mount the app to the DOM
app.mount('#app')
