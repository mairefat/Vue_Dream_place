// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// createApp(App).use(router).mount('#app')
// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { pinia } from './assets/store/index.js'; // Import the pinia instance

createApp(App)
  .use(pinia) // Use Pinia as a plugin
  .use(router)
  .mount('#app');