import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './router'
import './style.css'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primeicons/primeicons.css'
import nbNO from './locales/nb-NO.json'

const i18n = createI18n({
  legacy: false,
  locale: 'nb-NO',
  fallbackLocale: 'nb-NO',
  messages: {
    'nb-NO': nbNO
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(PrimeVue)

app.mount('#app')