<template>
  <div>
    <NavBar />
    <div class="bg-gray-100">
      <h3 class="pt-32 pb-4 font-semibold text-2xl flex justify-center">
        My Trips
      </h3>
      <!-- my trips  -->

      <div>
        <h2>Visited Hotels</h2>
        <ul>
          <li v-for="visitedHotel in visitedHotels" :key="visitedHotel.id">
            {{ visitedHotel.id ? visitedHotel.id : "No ID" }} -
            {{ visitedHotel.name ? visitedHotel.name : "No Name" }}
          </li>
        </ul>
      </div>
      <div class="grid gap-8 lg:grid-cols-1 w-full">
        <!-- fisrt trip  -->
        <div class="flex-col justify-center h-screen">
          <div
            class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white"
          >
            <div class="w-full md:w-1/3 bg-white grid place-items-center">
              <img
                src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="tailwind logo"
                class="rounded-xl"
              />
            </div>
            <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
              <div class="flex justify-between item-center">
                <p class="text-black font-medium hidden md:block">
                  Julia Dens Resort
                </p>
              </div>
              <div class="flex items-center">
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
                <p class="text-gray-500 text-sm ml-1">4.96(76 reviews)</p>
              </div>
              <div class="flex justify-between items-center">
                <div class="pt-4 flex flex-col">
                  <p class="text-red-500 mt-1">Non refundable</p>
                  <p class="text-gray-500 mt-1">
                    Check in: Sunday, March 18, 2022
                  </p>
                  <p class="text-gray-500 mt-1">
                    Check out: Tuesday, March 20, 2022
                  </p>
                  <p class="text-gray-500 mt-1">2 night stay</p>
                </div>

                <div>
                  <p class="text-l">
                    <del class="text-red-500">8160</del> $130
                  </p>
                  <p class="text-sm text-gray-500 pb-4">
                    Includes taxes and fees
                  </p>
                  <div class="">
                    <button class="text-white bg-blue-600 rounded-md py-2 px-3">
                      View trip details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- second trip  -->
          <div class="py-6 flex-col justify-center h-screen">
            <div
              class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white"
            >
              <div class="w-full md:w-1/3 bg-white grid place-items-center">
                <img
                  src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="tailwind logo"
                  class="rounded-xl"
                />
              </div>
              <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                <div class="flex justify-between item-center">
                  <p class="text-black font-medium hidden md:block">
                    Julia Dens Resort
                  </p>
                </div>
                <div class="flex items-center">
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
                  <p class="text-gray-500 text-sm ml-1">4.96(76 reviews)</p>
                </div>
                <div class="flex justify-between items-center">
                  <div class="pt-4 flex flex-col">
                    <p class="text-red-500 mt-1">Non refundable</p>
                    <p class="text-gray-500 mt-1">
                      Check in: Sunday, March 18, 2022
                    </p>
                    <p class="text-gray-500 mt-1">
                      Check out: Tuesday, March 20, 2022
                    </p>
                    <p class="text-gray-500 mt-1">2 night stay</p>
                  </div>

                  <div>
                    <p class="text-l">
                      <del class="text-red-500">8160</del> $130
                    </p>
                    <p class="text-sm text-gray-500 pb-4">
                      Includes taxes and fees
                    </p>
                    <div class="">
                      <button
                        class="text-white bg-blue-600 rounded-md py-2 px-3"
                      >
                        View trip details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CovidAlert class="px-16" />

      <FooterBar />
    </div>
  </div>
</template>



<script setup>
import { MY_API_KEY } from "@/config";

import NavBar from "@/components/NavBar.vue";
import CovidAlert from "../components/CovidAlert.vue";
import FooterBar from "../components/FooterBar.vue";
import axios from "axios";
import { ref, onMounted } from "vue";
import { useAuthStore } from "@/assets/store/index.js";

const authStore = useAuthStore();
const visitedHotels = ref([]);

const visitedHotelIds = authStore.visitedHotelIds;

onMounted(() => {
  fetchVisitedHotels();
});

const fetchVisitedHotels = async () => {
  visitedHotels.value = await Promise.all(
    visitedHotelIds.map(async (hotelId) => {
      try {
        const hotelDetails = await fetchHotelDetails(hotelId);
        return {
          id: hotelId,
          name: hotelDetails.name,
        };
      } catch (error) {
        console.error(`Error fetching details for hotel ${hotelId}:`, error);
        return null;
      }
    })
  );
};

const fetchHotelDetails = async (hotelId) => {
  const options = {
    method: "GET",
    url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails",
    params: {
      hotel_id: hotelId,
      arrival_date: authStore.arrivalDate,
      departure_date: authStore.departureDate,
    },
    headers: {
      "X-RapidAPI-Key": MY_API_KEY,
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);

    if (response.data && response.data.data && response.data.data.name) {
      return response.data.data;
    } else {
      console.error("Invalid data structure in the response:", response);
      throw new Error("Invalid data structure in the response");
    }
  } catch (error) {
    console.error(`Error fetching details for hotel ${hotelId}:`, error);
    throw error;
  }
};
</script>





<style lang="scss" scoped>
</style>