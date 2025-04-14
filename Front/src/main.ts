import { createApp } from "vue";
import App from "./App.vue";
import router from "./infrastructure/router";
import pinia from "./plugins/pinia";
import primeVue from "./plugins/PrimeVuePlugin";
import 'primeicons/primeicons.css'
import "@/assets/Styles/Base.css";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(primeVue);
app.mount('#app');