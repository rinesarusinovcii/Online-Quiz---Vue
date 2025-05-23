
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';

import "@/assets/js/theme.min.js";
import "@/assets/libs/bootstrap/dist/js/bootstrap.min.js";
import "@/assets/libs/popperjs/core/dist/umd/popper.min.js";
import "@/assets/libs/simplebar/dist/simplebar.min.js";

import "@/assets/js/vendors/darkMode.js";
import "@/assets/css/quiz.css";
import "@/assets/css/theme.min.css";



import {createApp} from 'vue'
import App from './App.vue'
import router from "./router";
import { createPinia } from "pinia";

createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')
