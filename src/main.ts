import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { createPinia } from 'pinia'

import App from './App.vue'
import 'primevue/resources/themes/lara-light-indigo/theme.css';
import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()

app
  .use(PrimeVue)
	.use(pinia)
  .mount('#app')
