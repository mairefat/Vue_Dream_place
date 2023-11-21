// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// createApp(App).use(router).mount('#app')
// src/main.js
// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import { useStore } from './assets/store';
import { createPinia } from 'pinia';

const pinia = createPinia();
// const store = useStore(); // Unused declaration

createApp(App)
  .use(pinia) // Use Pinia as a plugin
  .use(router)
  .provide('pinia', pinia) // Provide the Pinia instance
  .mount('#app');
