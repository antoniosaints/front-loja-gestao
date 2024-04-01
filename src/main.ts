import 'primeicons/primeicons.css'
import './style.css'

import { createApp } from 'vue'
import PrimeVue from "primevue/config";
// @ts-ignore
import App from './App.vue'
// @ts-ignore
import Lara from "./presets/Lara"
import Button from 'primevue/button';
import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag';

const app = createApp(App)

// usa os middlewares
app.use(PrimeVue, {
    ripple: true,
    pt: Lara
})

// componentes
app.component('Button', Button)
app.component('Carousel', Carousel)
app.component('Tag', Tag)

// monta a aplicação
app.mount('#app')
