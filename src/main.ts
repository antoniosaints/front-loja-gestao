import 'primeicons/primeicons.css'
import './style.css'

import { createApp } from 'vue'
import PrimeVue from "primevue/config";
import ToastService from 'primevue/toastservice';
// @ts-ignore
import App from './App.vue'
// @ts-ignore
import router from './routes/router'
// @ts-ignore
import Lara from "./presets/Lara"
import Button from 'primevue/button';
import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag';
import Toast from 'primevue/toast';

const app = createApp(App)

// usa os middlewares
app.use(PrimeVue, {
    ripple: true,
    pt: Lara
})
app.use(ToastService);
app.use(router)

// componentes
app.component('Button', Button)
app.component('Carousel', Carousel)
app.component('Tag', Tag)
app.component('Toast', Toast)

// monta a aplicação
app.mount('#app')
