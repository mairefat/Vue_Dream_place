<!-- Navbar.vue -->
<template>
    <nav class="bg-white fixed p-4 w-full z-50" >
    <div class="container mx-auto flex items-center justify-between">
      <div class="bg-white text-lg flex items-center space-x-2 font-bold">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3.414 13.7782C2.5 14.0002 2 15.1922 2 15.1922C2 15.1922 5.398 15.6262 6.949 17.3132C8.5 19.0002 9.071 22.2632 9.071 22.2632C9.071 22.2632 10.47 22.6982 10.485 20.8492C10.5 19.0002 9.778 17.3132 9.778 17.3132L13.091 14.0002L16.701 21.7042C16.701 21.7042 18.08 22.2302 18.04 20.3652C18 18.5002 16.85 10.2422 16.85 10.2422L19.678 7.41319C19.869 7.22869 20.0214 7.008 20.1262 6.76399C20.231 6.51999 20.2862 6.25755 20.2885 5.99199C20.2908 5.72643 20.2402 5.46307 20.1396 5.21728C20.0391 4.97149 19.8906 4.74818 19.7028 4.5604C19.515 4.37261 19.2917 4.2241 19.0459 4.12354C18.8001 4.02298 18.5368 3.97238 18.2712 3.97468C18.0056 3.97699 17.7432 4.03217 17.4992 4.13698C17.2552 4.2418 17.0345 4.39417 16.85 4.58519L13.947 7.48819C13.947 7.48819 6.148 6.09419 3.824 6.29719C1.5 6.50018 2.559 7.56319 2.559 7.56319L10.203 11.2332L6.95 14.4862C6.95 14.4862 4.328 13.5562 3.414 13.7782Z" fill="#2F80ED"/>
        </svg>
        <router-link to="/" class="text-black">my Dream Place</router-link>
      </div>
  
        <div class="hidden md:flex space-x-4 mx-auto">
          <router-link to="/" class="text-black">Home</router-link>
          <router-link to="#" class="text-black">Dicover</router-link>
          <router-link to="#" class="text-black">Activities</router-link>
          <router-link to="#" class="text-black">About</router-link>
          <router-link to="#" class="text-black">Contact</router-link>
        </div>

        <!-- register button -->

        <div v-if="!isLoggedIn" class="hidden md:flex items-center space-x-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
      <router-link to="/signup" class="text-white">Register</router-link>
    </div>

        <!-- notification and profile account -->
        <div v-if="isLoggedIn" class="hidden xl:flex space-x-5 items-center">
      <a class="flex items-center hover:text-gray-200" href="#">
        <i class="fas fa-bell" style="font-size: 24px; color: gray;"></i>
        <span class="flex absolute -mt-5 ml-4">
          <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
      </a>

          <!-- profile dropdown -->
          <div class="py-3 relative" @click="toggleDropdown">
        <!-- Profile Picture -->
        <div class="flex justify-center items-center space-x-3 cursor-pointer">
          <div class="w-12 h-12 rounded-full overflow-hidden">
            <!-- You might want to replace this with the actual profile picture -->
            <img src="../assets/images/Ellipse 2.svg" alt="profile pic" class="w-full h-full object-cover">
          </div>
        </div>

        <!-- Profile Dropdown -->
        <div v-show="isDropdownVisible" class="absolute top-full left-1/2 transform -translate-x-1/2 w-60 px-5 py-3 bg-gray-200 rounded-lg shadow border-transparent mt-3">
      <ul class="space-y-3">
            <li class="font-medium">
              <a href="#" class="flex items-center transform transition-colors duration-200 border-r-4 border-transparent ">
                <div class="mr-3">
                  <svg class="w-6 h-6 "  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                Account
              </a>
            </li>
            <hr class="border-gray-400">
            <li class="font-medium">
              <a href="#" class="flex items-center transform transition-colors duration-200 border-r-4 border-transparent ">
                <div class="mr-3" >
                  <svg class="text-gray-400"  height="1em" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2H248.4c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48H542.8c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z"/></svg>
                </div>
                My Trips
              </a>
            </li>
            <hr class="border-gray-400">
            <li class="font-medium">
              <a href="#" class="flex items-center transform transition-colors duration-200 border-r-4 border-transparent ">
                <div class="mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" style="svg{fill:#6d6f74}">
                  <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                </div>
                Reward and wallet
              </a>
            </li>
            
            <hr class="border-gray-400">
            <li class="font-medium">
              <a href="#" class="flex items-center transform transition-colors duration-200 border-r-4 border-transparent ">
                <div class="mr-3 ">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                </div>
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
  

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
  
  <script setup>
import '@fortawesome/fontawesome-free/css/all.css';
import { ref } from 'vue';

// import { useRouter } from 'vue-router';
import { useAuthStore } from '@/assets/store/index.js'; // Adjust the path accordingly

// const router = useRouter();
const authStore = useAuthStore();
const isDropdownVisible = ref(false);

const isLoggedIn = ref(authStore.token !== null);

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};


</script>

  
  <style scoped>
@import '../assets/css/main.css';
  /* Add any additional styling here */  
  </style>
  