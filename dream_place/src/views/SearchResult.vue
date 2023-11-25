<template>
  <div>
    <!-- Your NavBar component goes here -->
    <NavBar class="bg-gradient-to-r from-blue-500 to-blue-900 text-white">
      <!-- NavBar content -->
    </NavBar>

    <div class="relative h-screen bg-cover bg-center">
      <div class="py-24 bg-gradient-to-r from-blue-500 to-blue-900">
        <div class="absolute top-[-10%] w-full h-1/2 flex justify-center items-end">
          <SearchBar class="w-5/6" />
        </div>
      </div>
      


      <div class="py-32 max-w-6xl mx-auto">
    <!-- Header -->
    <div class="flex">
      <div class="flex-1 hidden md:block"></div>
      <div class="flex-1">
        <h2 class="text-xl font-heading">Melbourne : 2,582 search results found</h2>
      </div>
      <div class="items-center justify-end flex-1 hidden space-x-4 md:flex">
        <!-- <select v-model="selectedType" class="w-32 px-6 border-gray-200 rounded-full">
          <option>Rent</option>
          <option>Sell</option>
        </select> -->
        
        <select v-model="selectedSort" class="px-2 py-3 border-gray-200 border rounded-md w-44">
          <option>Recommended</option>
        </select>
      </div>
    </div>

    <!-- Filter Section -->
    <div class="mt-8 lg:flex">
      <div class="w-full lg:pr-8 lg:w-4/12">
        <div class="bg-white border rounded-sm shadow-lg mb-7">
    <div class="px-6 py-4 border-b">
        <h3 class="flex text-lg text-red-400 uppercase ">
            <span> Filter Section</span>
            <!-- <button class="ml-auto text-sm text-gray-600 ">Show</button> -->
        </h3>
    </div>
    <div class="px-6 py-10 space-y-10 ">
        <!-- <div>
            <h3 class="uppercase font-heading">Property Type</h3>
            <select id="type" name="type" class="w-full px-6 py-3 mt-4 border-gray-200 rounded-sm">
                <option>Select Property</option>
            </select>
        </div> -->
        <!-- search box  -->
        <div class=" p-6 border rounded-md border-gray-300 bg-gray-100">
      <p class="text-md font-semibold">Search by property name</p>
      <div class="pt-3 relative text-gray-600">
        <button type="submit" class="absolute left-0 top-0 mt-6 ml-3">
        <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
          viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
          width="515px" height="515px">
          <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
      </button>
      <input class="border-2 border-gray-300 bg-white h-10 px-8 pr-16 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="eg. Beach westpalm">
      </div>
    </div>
    
    <!-- filter by box -->
    <div class="py-8 relative">
    <div class=" inset-x-0 top-7 bg-gray-300">

    <div class="p-6 absolute  space-x-2 border rounded-md">
      <p class="text-md font-semibold pb-2">Your budget per day</p>
      <hr>
      <!-- Checkbox and range input -->
      <div class="pt-4 flex justify-between items-center">
        <label class="flex items-center">
          <input type="checkbox" class="ml-4 w-5 h-5" v-model="showMinMax" />
          <span class="ml-2 mr-2">$0 - $100</span>
        </label>

        <input
          type="range"
          v-if="showMinMax"
          min="0"
          max="100"
          step="1"
          v-model="selectedRange"
          class="ml-2"
        />

        <div class="ml-2">100</div>
      </div>

      <div class="pt-2 flex justify-between items-center">
        <label class="flex items-center">
          <input type="checkbox" class="ml-4 w-5 h-5" v-model="showMinMax" />
          <span class="ml-2 mr-2">$0 - $100</span>
        </label>

        <input
          type="range"
          v-if="showMinMax"
          min="0"
          max="100"
          step="1"
          v-model="selectedRange"
          class="ml-2"
        />

        <div class="ml-2">100</div>
      </div>
      <div class="pt-2 flex justify-between items-center">
        <label class="flex items-center">
          <input type="checkbox" class="ml-4 w-5 h-5" v-model="showMinMax" />
          <span class="ml-2 mr-2">$0 - $100</span>
        </label>

        <input
          type="range"
          v-if="showMinMax"
          min="0"
          max="100"
          step="1"
          v-model="selectedRange"
          class="ml-2"
        />

        <div class="ml-2">100</div>
      </div>

      <!-- Set your own budget section -->
      <p class="my-4">Set your own budget</p>

      <div class="flex justify-between gap-4">
        <!-- Min budget dropdown -->
        <div class="border border-gray-100 py-2 rounded-md px-2">
          <label for="minBudget">Min Budget</label>
          <select id="minBudget" v-model="minBudget" class="ml-2">
            <!-- Options for min budget -->
            <option v-for="number in numbers" :key="number" :value="number">
              {{ number }}
            </option>
          </select>
        </div>

        <!-- Max budget dropdown -->
        <div class="border border-gray-100 py-2 rounded-md px-2">
          <label for="maxBudget">Max Budget:</label>
          <select id="maxBudget" v-model="maxBudget" class="ml-2">
            <!-- Options for max budget starting from min budget -->
            <option v-for="number in numbers.slice(minBudget)" :key="number" :value="number">
              {{ number }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
  </div>


<!-- Rating box -->
        <div class="py-14">
           
            <div class="mt-5">
                
                <div class=" py-48">
  <div class="py-8 relative ">
    <div class="relative p-6 border rounded-md border-gray-300 bg-gray-100">
      <p class="text-md font-semibold">Rating</p>
      <p class="text-gray-500">Show only ratings more than</p>
      <div class="flex pt-3 relative text-gray-600">
        <div class=" flex items-center px-2 py-2 border border-gray-300">
          <span>1</span>
          <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
      </div>
      <div class="flex items-center px-3 border border-gray-300">
          <span>1</span>
          <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
      </div>
      <div class="flex items-center px-3 border border-gray-300">
          <span>1</span>
          <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
      </div>
      <div class="flex items-center px-3 border border-gray-300">
          <span>1</span>
          <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
      </div>
      <div class="flex items-center px-3 border border-gray-300">
          <span>1</span>
          <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
      </div>
    </div>
    </div>
  </div>
                    
                </div>
            </div>
        </div>
        
        
    </div>
</div>

      </div>

      <!-- Search Results -->
      <div class="grid w-full gap-8 lg:w-8/12 lg:grid-cols-1">

        <div class="flex-col justify-center h-screen">
    <div class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
      <div class="w-full md:w-1/3 bg-white grid place-items-center">
        <img
          src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="tailwind logo"
          class="rounded-xl"
        />
      </div>
      <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
        <div class="flex justify-between item-center">
          <p class="text-black font-medium hidden md:block">Julia Dens Resort</p>
          <div class="bg-red-500 px-3 py-1 rounded-md text-xs font-medium text-white hidden md:block">
            Book now and receive 15% off
          </div>
        </div>
        <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <p class="text-gray-500  text-sm ml-1">
              4.96(76 reviews)
            </p>
          </div>

          <div class="flex justify-between items-center">
            <p class=" text-gray-500 text-base">
          Live a little and celbrate with champagne
        </p>
        <div class="bg-green-700 px-3 py-1 rounded-md text-xs font-medium text-white hidden md:block">
             5% off
          </div>

          </div>
          <p class="text-gray-500">Reats include a glass of French champagne, parking and a late checkout. Gym included. Flexible cancellation applies</p>
       
          <div class="flex justify-between items-center">
            <button class="text-white bg-blue-600 rounded-md py-2 px-3 ">See Availability</button>
           <div>
            <p class="text-l"><del class="text-red-500">8160</del> $130</p>
            <p class="text-sm text-gray-500">Includes taxes and fees</p>
           </div>
          </div>
      </div>
    </div>
  </div>



   <!-- pagination section  -->
   <div class="mt-8">
    <div class="flex items-center justify-center space-x-2 md:space-x-5">
      <button @click="prevPage" class="flex items-center justify-center w-10 h-10 border shadow-md rounded-md bg-white text-gray-400 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <div class="space-x-2 md:space-x-2.5 flex items-center">
        <button v-for="page in visiblePages" :key="page" @click="goToPage(page)" :class="{ 'text-white': currentPage === page, 'bg-blue-500': currentPage === page, 'bg-white-200': currentPage !== page, 'text-gray-400': currentPage !== page }" class="flex items-center justify-center w-10 h-10 rounded-md focus:outline-none">
          {{ page }}
        </button>
        <span class="flex items-center justify-center w-5 h-10 rounded-md">…</span>
        <button @click="goToPage(totalPages)" class="flex items-center justify-center w-10 h-10 rounded-md focus:outline-none text-gray-400">
          {{ totalPages }}
        </button>
      </div>
      <button @click="nextPage" class="flex items-center justify-center w-10 h-10 border shadow-md rounded-md bg-white text-blue-500  focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
        
      </div>


     

    </div>
    
<!-- COVID ALERT  -->
<CovidAlert />


  </div>
  <!-- footer  -->
<FooterBar/> 
</div>
</div>

</template>

<script>
import NavBar from '../components/NavBar.vue';
import SearchBar from '../components/SearchBar.vue';
import { ref } from 'vue'; // Make sure to import ref from Vue
import CovidAlert from '../components/CovidAlert.vue';
import FooterBar from '../components/FooterBar.vue';

export default {
  data() {
    return {
      currentPage: 1,
      totalPages: 20,
      pagesToShow: 5,
      visiblePages: [],


      selectedType: 'Rent',
      selectedSort: 'Recommended',
      properties: [
        // Sample property data
        {
          image: '/photos/property1.jpg',
          type: 'Rent',
          price: 1660,
          beds: 2,
          area: 2000,
          bath: 2,
          location: 'New York',
        },
        // Add more property objects as needed
      ],
      showMinMax: ref(false),
      selectedRange: ref(50), // Default value for the range input
      minBudget: ref(0),
      maxBudget: ref(50),
      numbers: Array.from({ length: 101 }, (_, i) => i),
    };
  },
  components: {
    NavBar,
    SearchBar,
    CovidAlert,
    FooterBar,
  },

  watch: {
    currentPage: 'calculateVisiblePages',
    totalPages: 'calculateVisiblePages',
  },
  mounted() {
    this.calculateVisiblePages();
  },

  methods: {
    calculateVisiblePages() {
      const half = Math.floor(this.pagesToShow / 2);
      let start = this.currentPage - half;
      let end = this.currentPage + half;

      if (start <= 0) {
        start = 1;
        end = Math.min(this.pagesToShow, this.totalPages);
      } else if (end > this.totalPages) {
        start = Math.max(1, this.totalPages - this.pagesToShow + 1);
        end = this.totalPages;
      }

      this.visiblePages = Array.from({ length: end - start + 1 }, (_, i) => start + i);
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1;
      }
    },
  },
};
</script>




<style scoped>
/* Tailwind CSS classes can be used here */
</style>



















<!-- <div v-for="(property, index) in properties" :key="index">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
<div class="overflow-hidden transition-all duration-150 ease-out bg-white border rounded hover:shadow-xl hover:shadow-gray-200">
<div class="relative cursor-zoom-in">
    <div class="aspect-[3/2] relative z-auto">
        <div data-rmiz-wrap="visible" style="width: 100%; height: 100%;">
            <span style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;">
                <img alt="Property Photo" sizes="100vw" 
                    src="../assets/images/card1.png" decoding="async" data-nimg="fill" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;">
            </span>
            <button aria-label="Zoom image" data-rmiz-btn-open="true"></button>
        </div>
    </div>
    <div class="absolute inset-0 pointer-events-none">
        <div class="flex flex-col justify-between h-full px-5 py-5 bg-gradient-to-t from-transparent-5 to-transparent">
            <div>
                <span class="px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase bg-red-500 rounded-full bg-opacity-90">Rent</span>
            </div>
            <span class="text-2xl font-semibold text-white">$1660</span>
        </div>
        <button class="absolute flex items-center justify-center bg-white border rounded-full shadow-lg focus:outline-none right-6 -bottom-7 w-14 h-14">
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="text-red-500 w-7 h-7">
                <path d="M12 21C-8 10 6-2 12 5.7 18-2 32 10 12 21z" fill="currentColor"></path>
            </svg>
            <span class="sr-only">Mark as favorite</span>
        </button>
    </div>
</div>
<div class="relative">
    <div class="px-5 py-5">
        <h3 class="text-lg font-semibold">2 BHK Apartment</h3>
        <p class="mt-1 text-sm text-gray-500">New York</p>
    </div>
    <div class="flex text-sm border-t border-gray-100 divide-x divide-gray-200">
        <div class="flex items-center justify-center flex-1 px-2 py-3 text-gray-500">2 Beds</div>
        <div class="flex items-center justify-center flex-1 px-2 py-3 text-gray-500">2,000 SF</div>
        <div class="items-center justify-center flex-1 hidden px-2 py-3 text-gray-500 sm:flex">2 Bath</div>
        <div class="flex items-center justify-end flex-1 h-full py-3 pr-4 text-gray-600">
            <button class="px-3 py-1.5 text-xs font-medium ml-3 text-cyan-500 bg-cyan-100 rounded-full focus:outline-none">Details</button>
        </div>
    </div>
    <a class="absolute inset-0" href="/listing/details" data-ur1313m3t="true">
        <span class="sr-only">Click to open</span>
    </a>
</div>
</div>
</div>

</div> -->



































      <!-- <div class="flex flex-col lg:flex-row lg:w-3/4 mx-auto">
       
        <SearchBox />

        
        <FilterBox />

        
        <RatingBox />
      </div>
    </div>

    <FooterBar />
  </div>
</template>

<script setup >
import NavBar from '../components/NavBar.vue';
import SearchBar from '../components/SearchBar.vue';
import FooterBar from '../components/FooterBar.vue';
import SearchBox from '../components/SearchBox.vue';
import FilterBox from '../components/FilterBox.vue';
import RatingBox from '@/components/RatingBox.vue';
// import { ref } from 'vue'

// import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';




</script>

<style lang="scss" scoped>

</style> -->