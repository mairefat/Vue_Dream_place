// src/store/index.js
// import { defineStore } from 'pinia';

// export const useStore = defineStore('main', {
//   state: () => ({
//     someValue: 'Hello from Pinia!',
//     // Add more state properties as needed
//   }),
//   actions: {
//     // Add actions as needed
//   },
// });


// authStore.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
  }),
  actions: {
    setToken(token) {
      this.token = token;
    },
  },
});


