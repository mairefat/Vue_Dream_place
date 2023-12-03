import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { pinia } from "./assets/store/index.js";

createApp(App).use(pinia).use(router).mount("#app");
