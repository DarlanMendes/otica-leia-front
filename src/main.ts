import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css';
import {setPrimeVue}from "./modules/prime.module";
import { setComponents } from './modules/components.module';
const app = createApp(App)

app.use(router)
app.use(PrimeVue);
setPrimeVue(app);
setComponents(app)
app.mount('#app')




