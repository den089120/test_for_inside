import { createApp } from 'vue';
import App from './App.vue';
import {router} from "@/Router";
import {pinia} from "@/Store";

createApp(App).use(router).use(pinia).mount('#app');
