import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import "@/assets/js/theme.min.js";
import "@/assets/js/vendors/darkMode.js";
import "@/assets/css/theme.min.css";
import "@/assets/css/quiz.css";

import {createApp} from 'vue'
import App from './App.vue'
import router from "./router";
import { createPinia } from "pinia";

createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')
