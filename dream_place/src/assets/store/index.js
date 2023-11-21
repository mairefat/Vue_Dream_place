// src/store/index.js
import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    someValue: 'Hello from Pinia!',
    // Add more state properties as needed
  }),
  actions: {
    // Add actions as needed
  },
});
