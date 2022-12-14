import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { createHead } from '@vueuse/head'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import 'tw-elements';
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'
import './style.css'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const head = createHead()

const i18n = createI18n({
  locale: 'pl',
  messages
})

const app = createApp(App)
app.use(head)
app.use(router)
app.use(i18n)
app.use(PrimeVue)
app.mount('#app')