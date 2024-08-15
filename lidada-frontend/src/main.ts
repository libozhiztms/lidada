import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
import { createPinia } from "pinia";
import "@/access";

const pinia = createPinia();
createApp(App).use(pinia).use(pinia).use(ArcoVue).use(router).mount("#app");
