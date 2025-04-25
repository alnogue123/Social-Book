import { createApp } from "vue";
import App from "./App.vue";
import router from "./infrastructure/router";
import pinia from "./plugins/pinia";
import primeVue from "./plugins/PrimeVuePlugin";
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import "@/assets/Styles/Base.css";
import "primeicons/primeicons.css";

const app = createApp(App);
app.component('QuillEditor', QuillEditor)
app.use(router);
app.use(pinia);
app.use(primeVue);
app.mount('#app');