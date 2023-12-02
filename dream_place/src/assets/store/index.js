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
import { defineStore, createPinia } from 'pinia';

const pinia = createPinia(); // Create Pinia instance

// const formatDate = (date) => {
//   const formattedDate = new Date(date);
//   return formattedDate.toISOString().split('T')[0];
// };

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    email: null,
    searchResults: [],
    // loading: false,
  }),
  actions: {
    setToken(token) {
      this.token = token;
    },

    setUser(user) {
      this.email = user.email;
      // You can store other user data in the state if needed
    },

    isUserRegistered() {
      // Check if the user is registered based on your logic
      // For example, you can check if the user has an email
      return this.email !== null;
    },

    updateSearchResults(hotels) {
      // Save the search results to the state
      this.searchResults = hotels;
    
      // Save additional information to local storage
      if (hotels.length > 0) {
        const firstHotel = hotels[0].property;
        localStorage.setItem('destId', firstHotel.ufi);
        localStorage.setItem('hotelId', firstHotel.hotel_id);
        localStorage.setItem('arrivalDate', firstHotel.checkinDate);
        localStorage.setItem('departureDate', firstHotel.checkoutDate);
      }
    },
  },
});


export { pinia };