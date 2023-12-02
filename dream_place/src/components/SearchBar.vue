<template>
  <div class="py-4">
    <div class="border bg-white p-4 rounded-lg shadow-md">
      <form>
        <div class="relative flex space-x-4">
          <div class="">
            <div class="relative" @focusout="handleClickOutside">
              <div class="flex items-center border rounded p-2 bg-gray-200">
                <div class="icon-wrap py-2">
                  <!-- Location Icon SVG -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6 text-gray-700"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    ></path>
                  </svg>
                </div>
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Where are you going?"
                  @input="filterLocations"
                  class="w-full border-none focus:outline-none bg-gray-200"
                  @focus="toggleDropdown"
                />

                <!-- Arrow Down Icon SVG with click event to show the dropdown -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-6 w-6 text-gray-400 absolute right-2 bottom-3 cursor-pointer"
                  @click="toggleDropdown"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>

                <!-- Dropdown List -->
                <ul
                  v-show="showDropdown"
                  class="absolute z-10 w-full bg-white border rounded top-full"
                >
                  <li
                    v-for="location in filteredLocations"
                    :key="location"
                    class="py-1 px-3 cursor-pointer hover:bg-gray-100"
                    @click="selectLocation(location)"
                  >
                    {{ location }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Check in Date -->
          <div class="flex-1">
            <div class="flex items-center border bg-gray-200 rounded p-2">
              <div class="icon-wrap p-2">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
              </div>
              <input
                ref="arrivalDateInput"
                v-model="arrivalDate"
                @focus="openArrivalDatePicker"
                class="w-full border-none focus:outline-none p-2 bg-gray-200"
                type="text"
                placeholder="Check in"
              />
            </div>
          </div>

          <!-- Check out Date -->
          <div class="flex-1">
            <div class="flex items-center border bg-gray-200 rounded p-2">
              <div class="icon-wrap p-2">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
              </div>
              <input
                ref="departureDateInput"
                v-model="departureDate"
                @focus="openDepartureDatePicker"
                class="w-full border-none focus:outline-none p-2 bg-gray-200"
                type="text"
                placeholder="Check out"
              />
            </div>
          </div>

          <div class="flex-1">
    <div class="relative">
      <div class="flex items-center border rounded p-2 bg-gray-200">
        <div class="icon-wrap p-2">
          <!-- Guests Icon SVG -->
          <svg
            class="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            ></path>
          </svg>
        </div>

        <input
          type="number"
          v-model="numberOfGuests"
          placeholder="Guests"
          class="w-full border-none focus:outline-none bg-gray-200"
          @focus="showGuestsDropdown"
          @blur="hideDropdown('guests')"
        />

        <!-- Dropdown List -->
        <ul v-show="showDropdownGuests" class="absolute z-10 w-full bg-white border rounded top-full">
          <li v-for="guestOption in guestOptions" :key="guestOption" class="py-1 px-3 cursor-pointer hover:bg-gray-100" @click="selectGuest(guestOption)">
            {{ guestOption }}
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="flex-1 bg-gray-200">
    <div class="relative">
      <div class="flex items-center border rounded p-3">
        <div class="icon-wrap p-2 room">
          <!-- Guests Icon SVG -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 640 512"
          >
            <path
              d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"
            />
          </svg>
        </div>

        <input
          type="number"
          v-model="numberOfRooms"
          placeholder="Rooms"
          class="w-full border-none focus:outline-none bg-gray-200"
          @focus="showRoomsDropdown"
          @blur="hideDropdown('rooms')"
        />

        <!-- Dropdown List -->
        <ul v-show="showDropdownRooms" class="absolute z-10 w-full bg-white border rounded top-full">
          <li v-for="roomOption in roomsOptions" :key="roomOption" class="py-1 px-3 cursor-pointer hover:bg-gray-100" @click="selectRooms(roomOption)">
            {{ roomOption }}
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="flex">
    <button
      @click.prevent="handleSearch"
      class="btn-search px-14 py-4 bg-blue-500 text-white hover:bg-blue-600 font-bold border-none rounded p-2"
      type="button"
    >
      SEARCH
    </button>
  </div>
        
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import axios from 'axios';
import { MY_API_KEY } from '@/config';
import { useAuthStore } from '@/assets/store/index.js';



const router = useRouter();

const numberOfGuests = ref(1);
const guestOptions = ref([1, 2, 3, 4, 5]);
const numberOfRooms = ref(1);
const roomsOptions = ref([1, 2, 3, 4, 5]);
const showDropdownGuests = ref(false);
const showDropdownRooms = ref(false);



const searchQuery = ref('');
const showDropdown = ref(false);
const suggestedLocations = ref([]);

const filteredLocations = computed(() => {
  if (!Array.isArray(suggestedLocations.value)) {
    // console.error('suggestedLocations is not an array:', suggestedLocations.value);
    return [];
  }

  return suggestedLocations.value
    .filter((location) => typeof location === 'string' && location.trim() !== '')
    .filter((location) => {
      if (typeof location !== 'string') {
        console.error('Invalid location type:', location);
        return false;
      }
      return location.toLowerCase().includes(searchQuery.value.toLowerCase());
    });
});

onMounted(() => {
  fetchLocations();
});

// Create refs for date picker instances
const arrivalDatePickerInstance = ref(null);
const departureDatePickerInstance = ref(null);

// Create refs for selected dates
const arrivalDate = ref('');
const departureDate = ref('');

// Create refs for date input elements
const arrivalDateInput = ref(null);
const departureDateInput = ref(null);

// Date Picker Functionality
const openArrivalDatePicker = () => {
  if (!arrivalDatePickerInstance.value) {
    arrivalDatePickerInstance.value = flatpickr(
      arrivalDateInput.value,
      {
        dateFormat: "m/d/Y",
        onClose: (selectedDates) => {
          if (selectedDates && selectedDates.length > 0) {
            arrivalDate.value = selectedDates[0];
          }
        },
      }
    );
  }
};

const openDepartureDatePicker = () => {
  if (!departureDatePickerInstance.value) {
    departureDatePickerInstance.value = flatpickr(
      departureDateInput.value,
      {
        dateFormat: "m/d/Y",
        minDate: arrivalDate.value, // Set minimum date as check-in date
        onClose: (selectedDates) => {
          if (selectedDates && selectedDates.length > 0) {
            departureDate.value = selectedDates[0];
          }
        },
      }
    );
  } else {
    // If the date picker is already open, update the minDate dynamically
    departureDatePickerInstance.value.set("minDate", arrivalDate.value);
  }
};
    // Location Search Functionality
    const fetchLocations = async (query) => {
  const options = {
    method: 'GET',
    url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination',
    params: { query: query },
    headers: {
      'X-RapidAPI-Key': MY_API_KEY,
      'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com',
    },
  };

  try {
    const response = await axios(options);

    if (response.data && response.data.status === true) {
      suggestedLocations.value = response.data.data.map((hotel) => hotel.name);
      // console.log('Fetched locations:', suggestedLocations.value);
    } else {
      console.error('Error fetching locations. Response:', response.data);
    }
  } catch (error) {
    console.error('Error fetching locations:', error);
  }
};

const filterLocations = async () => {
  if (searchQuery.value.trim() !== '') {
    await fetchLocations(searchQuery.value);
  }
  showDropdown.value = true;
};

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const hideDropdown = () => {
  showDropdown.value = false;
};

const selectLocation = (location) => {
  searchQuery.value = location;
  hideDropdown();
};

const handleClickOutside = (event) => {
  const dropdownElement = document.querySelector('.flex'); // Adjust this selector as needed
  if (dropdownElement && !dropdownElement.contains(event.target)) {
    hideDropdown();
  }
};

const hideDropdownWithType = (dropdownType) => {
  if (dropdownType === 'guests') {
    showDropdownGuests.value = false;
  } else if (dropdownType === 'rooms') {
    showDropdownRooms.value = false;
  }
};

const showGuestsDropdown = () => {
  showDropdownGuests.value = true;
  showDropdownRooms.value = false;
};

const selectGuest = (guestOption) => {
  numberOfGuests.value = guestOption;
  hideDropdownWithType('guests');
};

const showRoomsDropdown = () => {
  showDropdownRooms.value = true;
  showDropdownGuests.value = false;
};

const selectRooms = (roomOption) => {
  numberOfRooms.value = roomOption;
  hideDropdownWithType('rooms');
};

// Function to format the date in the required format
const formatDate = (date) => {
  const formattedDate = new Date(date);
  return formattedDate.toISOString().split('T')[0];
};
    // handle search query 
    const handleSearch = async () => {
  console.log('handleSearch function called');

   // Check if the user is registered
   if (!useAuthStore().isUserRegistered()) {
    // If not registered, redirect to the sign-in page
    router.push('/signin');
    return;
  }
  
  // Validate user input
  if (!searchQuery.value || !arrivalDate.value || !departureDate.value) {
    // Display an error message or handle it appropriately
    console.error('Please fill in all required fields.');
    return;
  }

  // Make the API request to get destination information
  const destinationOptions = {
    method: 'GET',
    url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination',
    params: { query: searchQuery.value },
    headers: {
      'X-RapidAPI-Key': MY_API_KEY,
      'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com',
    },
  };

  try {
    const destinationResponse = await axios.request(destinationOptions);

    // Check if the response is successful and has destination data
    if (destinationResponse.data && destinationResponse.data.status === true) {
      const dest_id = destinationResponse.data.data[0].dest_id; // Assuming the first result
      // console.log('Destination ID:', dest_id);

      // Prepare API request parameters based on user input and destination data
      const apiParams = {
        dest_id: dest_id,
        search_type: 'CITY',
        arrival_date: formatDate(arrivalDate.value),
        departure_date: formatDate(departureDate.value),
        adults: numberOfGuests.value,
        room_qty: numberOfRooms.value,
        page_number: '1',
        languagecode: 'en-us',
        currency_code: 'AED',
      };

      // Make the API request to search hotels
      const hotelSearchOptions = {
        method: 'GET',
        url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels',
        params: apiParams,
        headers: {
          'X-RapidAPI-Key': MY_API_KEY,
          'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com',
        },
      };

      const hotelSearchResponse = await axios.request(hotelSearchOptions);

      // console.log('Search Results:', hotelSearchResponse.data.data.hotels);

      // Use the router instance to navigate to the SearchResults component
      router.push({
    name: 'searchResult',
    params: { hotels: hotelSearchResponse.data.data.hotels },
  });

  // Process the API response and update the state to render results
  await updateSearchResults(hotelSearchResponse.data.data.hotels);
 } else {
      console.error('Error fetching destination data. Response:', destinationResponse.data);
    }
  } catch (error) {
    console.error('Error searching hotels:', error);
  }
};

// Update search results action
const updateSearchResults = async (hotels) => {
  await useAuthStore().updateSearchResults(hotels);
};



</script>
<style>
.room {
  fill: #4f4f4f;
}
</style>