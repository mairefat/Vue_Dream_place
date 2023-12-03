import { defineStore, createPinia } from "pinia";

const pinia = createPinia();

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null,
    email: null,
    searchResults: [],
    visitedHotelIds: [],
  }),
  actions: {
    setToken(token) {
      this.token = token;
    },

    setUser(user) {
      this.email = user.email;
    },

    isUserRegistered() {
      return this.email !== null;
    },

    updateSearchResults(hotels) {
      if (Array.isArray(hotels)) {
        this.searchResults = hotels;

        if (hotels.length > 0) {
          const firstHotel = hotels[0].property;
          localStorage.setItem("destId", firstHotel.ufi);
          localStorage.setItem("hotelId", firstHotel.hotel_id);
          localStorage.setItem("arrivalDate", firstHotel.checkinDate);
          localStorage.setItem("departureDate", firstHotel.checkoutDate);
        }
      } else {
        console.error("Invalid hotels data:", hotels);
      }
    },

    addToVisitedHotels(hotelId) {
      if (!this.visitedHotelIds.includes(hotelId)) {
        this.visitedHotelIds.push(hotelId);
        localStorage.setItem(
          "visitedHotelIds",
          JSON.stringify(this.visitedHotelIds)
        );
      }
    },
  },
});

export { pinia };
