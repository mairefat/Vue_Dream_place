<template>
  <div>
    <!-- Your NavBar component goes here -->
    <NavBar class="bg-gradient-to-r from-blue-500 to-blue-900 text-white">
      <!-- NavBar content -->
    </NavBar>

    <div class="relative h-screen bg-cover bg-center">
      <div class="py-24 bg-gradient-to-r from-blue-500 to-blue-900">
        <div
          class="absolute top-[-10%] w-full h-1/2 flex justify-center items-end"
        >
          <SearchBar class="w-5/6" />
        </div>
      </div>

      <div class="py-32 max-w-6xl mx-auto">
        <!-- Header -->
        <div class="flex">
          <div class="flex-1 hidden md:block"></div>
          <div class="flex-1">
            <h2 v-if="searchResults && searchResults.length > 0" class="text-xl font-heading">
  {{ searchResults[0].property.wishlistName }} : {{ searchResults.length }} search results found
</h2>
  <h2 v-else class="text-xl font-heading">
    No results found
  </h2>
</div>
          <div class="items-center justify-end flex-1 hidden space-x-4 md:flex">
            <!-- <select v-model="selectedType" class="w-32 px-6 border-gray-200 rounded-full">
          <option>Rent</option>
          <option>Sell</option>
        </select> -->

            <select
              v-model="selectedSort"
              class="px-2 py-3 border-gray-200 border rounded-md w-44"
            >
              <option>Recommended</option>
            </select>
          </div>
        </div>

        <!-- Filter Section -->
        <div class="mt-8 lg:flex">
          <div class="w-full lg:pr-8 lg:w-4/12">
            <div class="bg-white border rounded-sm shadow-lg mb-7">
              <div class="px-6 py-4 border-b">
                <h3 class="flex text-lg text-red-400 uppercase">
                  <span> Filter Section</span>
                  <!-- <button class="ml-auto text-sm text-gray-600 ">Show</button> -->
                </h3>
              </div>
              <div class="px-6 py-10 space-y-10">
                <!-- search box  -->
                <div class="p-6 border rounded-md border-gray-300 bg-gray-100">
                  <p class="text-md font-semibold">Search by property name</p>
                  <div class="pt-3 relative text-gray-600">
                    <button
                    @click="handleSearch"
                      type="submit"
                      class="absolute left-0 top-0 mt-6 ml-3"
                    >
                      <svg
                        class="text-gray-600 h-4 w-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 56.966 56.966"
                        style="enable-background: new 0 0 56.966 56.966"
                        xml:space="preserve"
                        width="515px"
                        height="515px"
                      >
                        <path
                          d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                        />
                      </svg>
                    </button>
                    <input
                      class="border-2 border-gray-300 bg-white h-10 px-8 pr-16 rounded-lg text-sm focus:outline-none"
                      v-model="searchTerm"
                      @input="handleSearch"
                      type="search"
                      name="search"
                      placeholder="eg. Beach westpalm"
                    />
                  </div>
                </div>

                <!-- filter by box -->
                <div class="py-8 relative">
                  <div class="inset-x-0 top-7 bg-gray-300">
                    <div class="p-6 absolute space-x-2 border rounded-md">
                      <p class="text-md font-semibold pb-2">
                        Your budget per day
                      </p>
                      <hr />
                      <!-- Checkbox and range input -->
                      <div v-for="(range, key) in budgetRanges" :key="key" class="pt-2 flex justify-between items-center">
  <label class="flex items-center">
    <input
      type="checkbox"
      class="ml-4 w-5 h-5"
      v-model="filterRanges[key]"
    />
    <span class="ml-2 mr-2">{{ range }}</span>
  </label>
</div>
                      <!-- Set your own budget section -->
                      <p class="my-4">Set your own budget</p>

                      <div class="flex justify-between gap-4">
                        <!-- Min budget dropdown -->
                        <div
                          class="border border-gray-100 py-2 rounded-md px-2"
                        >
                          <label for="minBudget">Min Budget</label>
                          <select
                            id="minBudget"
                            v-model="minBudget"
                            class="ml-2"
                          >
                            <!-- Options for min budget -->
                            <option
                            v-for="number in numbers" :key="number" :value="number"
                              
                            >
                              {{ number }}
                            </option>
                          </select>
                        </div>

                        <!-- Max budget dropdown -->
                        <div
                          class="border border-gray-100 py-2 rounded-md px-2"
                        >
                          <label for="maxBudget">Max Budget:</label>
                          <select
                            id="maxBudget"
                            v-model="maxBudget"
                            class="ml-2"
                          >
                            <!-- Options for max budget starting from min budget -->
                            <option
                              v-for="number in numbers.slice(minBudget, 5001)"
                              :key="number"
                              :value="number"
                            >
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
                    <div class="py-48">
                      <div class="py-8 relative">
                        <div
                          class="relative p-6 border rounded-md border-gray-300 bg-gray-100"
                        >
                          <p class="text-md font-semibold">Rating</p>
                          <p class="text-gray-500">
                            Show only ratings more than
                          </p>
                          <div class="flex pt-3 relative text-gray-600">
                            <div
                              class="flex items-center px-2 py-2 border border-gray-300"
                            >
                              <span>1</span>
                              <svg
                                class="w-4 h-4 text-yellow-300 ms-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                              >
                                <path
                                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                                />
                              </svg>
                            </div>
                            <div
                              class="flex items-center px-3 border border-gray-300"
                            >
                              <span>1</span>
                              <svg
                                class="w-4 h-4 text-yellow-300 ms-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                              >
                                <path
                                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                                />
                              </svg>
                            </div>
                            <div
                              class="flex items-center px-3 border border-gray-300"
                            >
                              <span>1</span>
                              <svg
                                class="w-4 h-4 text-yellow-300 ms-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                              >
                                <path
                                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                                />
                              </svg>
                            </div>
                            <div
                              class="flex items-center px-3 border border-gray-300"
                            >
                              <span>1</span>
                              <svg
                                class="w-4 h-4 text-yellow-300 ms-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                              >
                                <path
                                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                                />
                              </svg>
                            </div>
                            <div
                              class="flex items-center px-3 border border-gray-300"
                            >
                              <span>1</span>
                              <svg
                                class="w-4 h-4 text-yellow-300 ms-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                              >
                                <path
                                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                                />
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
<div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 w-full xl:grid-cols-1 gap-8">

<!-- Render default search results if no search term -->
<div v-if="!authStore.searchResults" >
  <div v-for="(hotel, index) in searchResults" :key="'default_' + index" class="flex-col justify-center">
  <div
                class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white"
              >
                <div class="w-full md:w-1/3 bg-white grid place-items-center">
                  <img
                    :src="hotel.property.photoUrls"
                    alt="Hotel Image"
                    style="
                      width: 285px;
                      height: 200px;
                      top: 394px;
                      left: 445px;
                      border-radius: 5px;
                    "
                  />
                </div>
                <div
                  class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3"
                >
                  <div class="flex justify-between item-center">
                    <p class="text-black text-2xl font-medium hidden md:block">
                      {{ hotel.property.name }}
                    </p>
                    <!--  -->
                    <div
                      v-if="hotel.property.discountAvailable"
                      class="bg-red-500 px-3 py-1 rounded-md text-xs font-medium text-white hidden md:block"
                    >
                      Book now and receive 15% off
                    </div>
                  </div>
                  <div class="flex">
                    <div
                      class="flex items-center"
                      v-for="(star, index) in getStars(
                        hotel.property.reviewScore
                      )"
                      :key="index"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    </div>

                    <p class="text-gray-500 text-sm ml-1">
                      {{ hotel.property.reviewScore }} ({{
                        hotel.property.reviewCount
                      }}
                      reviews)
                    </p>
                  </div>

                  <div class="flex justify-between items-center">
                    <p class="text-gray-500 text-base">
                      {{ hotel.accessibilityLabel }}
                    </p>

                    <div
                      v-if="hotel.property.discountAvailable"
                      class="bg-green-700 px-3 py-1 rounded-md text-xs font-medium text-white hidden md:block"
                    >
                      5% off
                    </div>
                  </div>

                  <div class="flex justify-between items-center">
                    <button class="text-white bg-blue-600 rounded-md py-2 px-3">
                      See Availability
                    </button>
                    <div>
                      <div class="flex">
                        <del class="text-red-500">
                          $
                          {{
                            hotel.property.priceBreakdown.strikethroughPrice
                              ? hotel.property.priceBreakdown.strikethroughPrice.value.toFixed(
                                  0
                                )
                              : ""
                          }}
                        </del>
                        <p class="text-l font-semibold">
                          $
                          {{
                            hotel.property.priceBreakdown.grossPrice.value.toFixed(
                              0
                            )
                          }}
                        </p>
                      </div>
                      <p class="text-md text-gray-500">
                        Includes taxes and fees
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
</div>

<!-- Render search results if a search term is present -->
<div v-else v-for="(hotel, index) in authStore.searchResults" :key="'search_' + hotel.property.id + '_' + index" class="flex-col justify-center">
  <div
                class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white"
              >
                <div class="w-full md:w-1/3 bg-white grid place-items-center">
                  <img
                    :src="hotel.property.photoUrls"
                    alt="Hotel Image"
                    style="
                      width: 285px;
                      height: 200px;
                      top: 394px;
                      left: 445px;
                      border-radius: 5px;
                    "
                  />
                </div>
                <div
                  class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3"
                >
                  <div class="flex justify-between item-center">
                    <p class="text-black text-2xl font-medium hidden md:block">
                      {{ hotel.property.name }}
                    </p>
                    <!--  -->
                    <div
                      v-if="hotel.property.discountAvailable"
                      class="bg-red-500 px-3 py-1 rounded-md text-xs font-medium text-white hidden md:block"
                    >
                      Book now and receive 15% off
                    </div>
                  </div>
                  <div class="flex">
                    <div
                      class="flex items-center"
                      v-for="(star, index) in getStars(
                        hotel.property.reviewScore
                      )"
                      :key="index"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    </div>

                    <p class="text-gray-500 text-sm ml-1">
                      {{ hotel.property.reviewScore }} ({{
                        hotel.property.reviewCount
                      }}
                      reviews)
                    </p>
                  </div>

                  <div class="flex justify-between items-center">
                    <p class="text-gray-500 text-base">
                      {{ hotel.accessibilityLabel }}
                    </p>

                    <div
                      v-if="hotel.property.discountAvailable"
                      class="bg-green-700 px-3 py-1 rounded-md text-xs font-medium text-white hidden md:block"
                    >
                      5% off
                    </div>
                  </div>

                  <div class="flex justify-between items-center">
                    <button class="text-white bg-blue-600 rounded-md py-2 px-3">
                      See Availability
                    </button>
                    <div>
                      <div class="flex">
                        <del class="text-red-500">
                          $
                          {{
                            hotel.property.priceBreakdown.strikethroughPrice
                              ? hotel.property.priceBreakdown.strikethroughPrice.value.toFixed(
                                  0
                                )
                              : ""
                          }}
                        </del>
                        <p class="text-l font-semibold">
                          $
                          {{
                            hotel.property.priceBreakdown.grossPrice.value.toFixed(
                              0
                            )
                          }}
                        </p>
                      </div>
                      <p class="text-md text-gray-500">
                        Includes taxes and fees
                      </p>
                    </div>
                  </div>
                </div>
              </div>
</div>

 

        
            <!-- Pagination section -->
            <div class="mt-8 bottom-0 h-screen">
              <div
                class="flex items-center justify-center space-x-2 md:space-x-5"
              >
                <button
                  @click="prevPage"
                  class="flex items-center justify-center w-10 h-10 border shadow-md rounded-md bg-white text-gray-400 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                </button>
                <div class="space-x-2 md:space-x-2.5 flex items-center">
                  <button
                    v-for="page in visiblePages"
                    :key="page"
                    @click="goToPage(page)"
                    :class="{
                      'text-white': currentPage === page,
                      'bg-blue-500': currentPage === page,
                      'bg-white-200': currentPage !== page,
                      'text-gray-400': currentPage !== page,
                    }"
                    class="flex items-center justify-center w-10 h-10 rounded-md focus:outline-none"
                  >
                    {{ page }}
                  </button>
                  <span
                    class="flex items-center justify-center w-5 h-10 rounded-md"
                    >…</span
                  >
                  <button
                    @click="goToPage(totalPages)"
                    class="flex items-center justify-center w-10 h-10 rounded-md focus:outline-none text-gray-400"
                  >
                    {{ totalPages }}
                  </button>
                </div>
                <button
                  @click="nextPage"
                  class="flex items-center justify-center w-10 h-10 border shadow-md rounded-md bg-white text-blue-500 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
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
      <FooterBar />
    </div>
  </div>
</template>



<script setup>
import { ref, onMounted, watch } from "vue";
import axios from 'axios';
import NavBar from "../components/NavBar.vue";
import SearchBar from "../components/SearchBar.vue";
import CovidAlert from "../components/CovidAlert.vue";
import FooterBar from "../components/FooterBar.vue";
import { useAuthStore } from "@/assets/store";
import { MY_API_KEY } from '@/config';

const currentPage = ref(1);
const totalPages = ref(20);
const pagesToShow = 5;
const visiblePages = ref([]);
const selectedSort = ref("Recommended");
const filterRanges = ref({
  '$0-$100': false,
  '$200-$500': false,
  '$500-$1000': false,
});
const minBudget = ref(100);
const maxBudget = ref(5000);
const numbers = Array.from({ length: 4901 }, (_, i) => i + 100);
const authStore = useAuthStore();
const searchResults = ref(authStore.searchResults);


onMounted(async () => {
  await fetchData();
});

const getDestinationId = async (query) => {
  const options = {
    method: 'GET',
    url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination',
    params: {
      query: query,
    },
    headers: {
      'X-RapidAPI-Key': MY_API_KEY,
      'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data[0].dest_id;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const fetchData = async (page = 1) => {
  try {
    const destId = await getDestinationId('man'); 

    if (!destId) {
      console.error('Failed to get destination ID');
      return;
    }
    console.log('Destination ID:', destId);
    const apiParams = {
      dest_id: destId,
      search_type: 'CITY',
      arrival_date: formatDate(authStore.checkinDate),
      departure_date: formatDate(authStore.checkoutDate),
      page_number: page,
      
    };

    const hotelSearchOptions = {
      method: 'GET',
      url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels',
      params: {
        apiParams
      },
      headers: {
        'X-RapidAPI-Key': MY_API_KEY,
        'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com',
      },
    };

    const response = await axios.request(hotelSearchOptions);

    if (response.data.status && response.data.data && response.data.data.hotels.length > 0) {
      searchResults.value = response.data.data.hotels;

      console.log('Hotel Data:', response.data.data.hotels);
      // Update other state variables as needed
    }
  } catch (error) {
    console.error(error);
  }
};
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
    fetchData(currentPage.value);
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1;
    fetchData(currentPage.value);
  }
}

const goToPage = (page) => {
  if (page !== currentPage.value && page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    fetchData(page);
  }
}

const searchTerm = ref('');

watch(searchTerm, handleSearch);

function handleSearch() {
  // Filter search results based on the property name
  if (searchTerm.value.trim() === "") {
    // If search term is empty, show all results
    searchResults.value = authStore.searchResults;
  } else {
    // Filter results based on the property name containing the search term
    searchResults.value = authStore.searchResults.filter(
      (hotel) =>
        hotel.property.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  }

  currentPage.value = 1;
}

const getStars = (score) => {
  const roundedScore = Math.round(score);
  return Array.from({ length: 5 }, (_, index) => index < roundedScore);
};

onMounted(() => {
  calculateVisiblePages();
});

watch([currentPage, totalPages], calculateVisiblePages);

function calculateVisiblePages() {
  const half = Math.floor(pagesToShow / 2);
  let start = currentPage.value - half;
  let end = currentPage.value + half;

  if (start <= 0) {
    start = 1;
    end = Math.min(pagesToShow, totalPages.value);
  } else if (end > totalPages.value) {
    start = Math.max(1, totalPages.value - pagesToShow + 1);
    end = totalPages.value;
  }

  visiblePages.value = Array.from(
    { length: end - start + 1 },
    (_, i) => start + i
  );
}
</script>

