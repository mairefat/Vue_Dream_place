<template>
  <div>
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
  </div>
  
</template>


<script setup>
import { ref } from "vue";


const showMinMax = ref(false);
const selectedRange = ref(50); // Default value for the range input

const minBudget = ref(0);
const maxBudget = ref(50);

// Generate an array of numbers (adjust the range as needed)
const numbers = Array.from({ length: 101 }, (_, i) => i);



</script>

<style lang="scss" scoped>

</style>