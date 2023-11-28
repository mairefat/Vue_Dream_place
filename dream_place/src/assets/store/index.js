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
    searchResults: [], // Add searchResults to the state
  }),
  actions: {
    setToken(token) {
      this.token = token;
    },

    // Add the updateSearchResults action
    updateSearchResults(hotels) {
      this.searchResults = hotels;
    },
  },
});


