<!-- Navbar.vue -->
<template>
    <nav class="bg-white p-4" >
    <div class="container mx-auto flex items-center justify-between">
      <div class="text-black text-lg flex items-center space-x-2 font-bold">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3.414 13.7782C2.5 14.0002 2 15.1922 2 15.1922C2 15.1922 5.398 15.6262 6.949 17.3132C8.5 19.0002 9.071 22.2632 9.071 22.2632C9.071 22.2632 10.47 22.6982 10.485 20.8492C10.5 19.0002 9.778 17.3132 9.778 17.3132L13.091 14.0002L16.701 21.7042C16.701 21.7042 18.08 22.2302 18.04 20.3652C18 18.5002 16.85 10.2422 16.85 10.2422L19.678 7.41319C19.869 7.22869 20.0214 7.008 20.1262 6.76399C20.231 6.51999 20.2862 6.25755 20.2885 5.99199C20.2908 5.72643 20.2402 5.46307 20.1396 5.21728C20.0391 4.97149 19.8906 4.74818 19.7028 4.5604C19.515 4.37261 19.2917 4.2241 19.0459 4.12354C18.8001 4.02298 18.5368 3.97238 18.2712 3.97468C18.0056 3.97699 17.7432 4.03217 17.4992 4.13698C17.2552 4.2418 17.0345 4.39417 16.85 4.58519L13.947 7.48819C13.947 7.48819 6.148 6.09419 3.824 6.29719C1.5 6.50018 2.559 7.56319 2.559 7.56319L10.203 11.2332L6.95 14.4862C6.95 14.4862 4.328 13.5562 3.414 13.7782Z" fill="#2F80ED"/>
        </svg>
        <router-link to="/" class="text-black">my Dream Place</router-link>
      </div>
  
        <div class="hidden md:flex space-x-4 mx-auto">
          <router-link to="/" class="text-black">Home</router-link>
          <router-link to="/discover" class="text-black">Dicover</router-link>
          <router-link to="/activities" class="text-black">Activities</router-link>
          <router-link to="/about" class="text-black">About</router-link>
          <router-link to="/contact" class="text-black">Contact</router-link>
        </div>

        <div class="hidden md:flex items-center space-x-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
          <router-link to="/register" class="text-white">Register</router-link>
        </div>
  
        <div class="md:hidden">
          <button @click="toggleMobileMenu" class="text-black">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
  
        <!-- Mobile menu -->
        <div v-if="isMobileMenuOpen" class="md:hidden absolute top-16 left-0 right-0 bg-white">
          <div class="flex flex-col items-center space-y-4 p-4">
            <router-link to="/" class="text-black">Home</router-link>
            <router-link to="/about" class="text-black">About</router-link>
            <router-link to="/services" class="text-black">Services</router-link>
            <router-link to="/contact" class="text-black">Contact</router-link>

            <!-- <div class="hidden md:flex items-center space-x-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
          <router-link to="/register" class="text-white">Register</router-link>
        </div> -->
          </div>
        </div>
  
        

      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMobileMenuOpen: false,
      };
    },
    methods: {
      toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
      },
    },
  };
  </script>
  
  <style scoped>
@import '../assets/css/main.css';
  /* Add any additional styling here */
  </style>
  