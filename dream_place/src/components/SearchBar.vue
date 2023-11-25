<template>
  <div class=" py-4 ">
  <div class="border bg-white p-4 rounded-lg shadow-md">
    <form>
      <div class="relative flex space-x-4">
        <div class="">
          <div class="relative">
            <div class="flex items-center border rounded p-2 bg-gray-200">
              <div class="icon-wrap py-2 ">
                <!-- Location Icon SVG -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-700">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                </svg>
              </div>
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Where are you going?"
                @input="filterLocations"
                class="w-full border-none  focus:outline-none bg-gray-200"
                @focus="showDropdown"
                @blur="hideDropdown"
              />

              <!-- Arrow Down Icon SVG with click event to show the dropdown -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6 text-gray-400 absolute right-2 bottom-3 cursor-pointer"
                @click="showDropdown"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>

             <!-- Dropdown List -->
<ul v-show="showDropdownList" class="absolute z-10 w-full bg-white border rounded top-full">
  <li v-for="location in filteredLocations" :key="location" class="py-1 px-3 cursor-pointer hover:bg-gray-100" @click="selectLocation(location)">
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
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
        </svg>
      </div>
      <input
        ref="dateInput"
        v-model="departureDate"
        @click="openDatePicker"
        class="w-full border-none  focus:outline-none p-2 bg-gray-200"
        type="text"
        placeholder="Check in "
      />
    </div>
  </div>

  <!-- Check out Date -->
  <div class="flex-1">
    <div class="flex items-center border bg-gray-200 rounded p-2">
      <div class="icon-wrap p-2">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
        </svg>
      </div>
      <input
        ref="dateInput"
        v-model="departureDate"
        @click="openDatePicker"
        class="w-full border-none focus:outline-none p-2 bg-gray-200 "
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
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        </div>

        <input
  type="number"
  v-model="numberOfGuests"
  placeholder="Guests"
  class="w-full border-none focus:outline-none bg-gray-200"
  @focus="showDropdownGuests"
  @blur="hideDropdown('guests')"
/>

        <!-- Dropdown List -->
        <ul v-show="showDropdownGustes" class="absolute z-10 w-full bg-white border rounded top-full">
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
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"/></svg>

        </div>

        <input
        
  type="number"
  v-model="numberOfRooms"
  placeholder="Rooms"
  class="w-full border-none focus:outline-none bg-gray-200"
  @focus="showDropdown_Rooms"
  @blur="hideDropdown('rooms')"
/>

        <!-- Dropdown List -->
        <ul v-show="showDropdownRooms" class="absolute z-10 w-full bg-white border rounded top-full">
          <li v-for="roomOption in roomsOptions" :key="roomOption" class="py-1 px-3 cursor-pointer hover:bg-gray-100" @click="selectGuest(guestOption)">
            {{ roomOption }}
          </li>
        </ul>
      </div>
    </div>
  </div>

        
        
       


        <div class="flex">
          <button @click.prevent="search" class="btn-search px-14 py-4 bg-blue-500 text-white font-bold border-none rounded p-2" type="button">SEARCH</button>
        </div>
      </div>
    </form>
  </div>
  </div>
</template>

<script>

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
export default {
  data() {
    return {
      numberOfGuests: 'Gustes',
      guestOptions: [1, 2, 3, 4, 5],
      numberOfRooms: 'Rooms',
      roomsOptions: [1, 2, 3, 4, 5],
      departureDate: '',
      datePickerInstance: null,
      searchQuery: '',
      showDropdownList: false,
      showDropdownGustes: false,
      showDropdownRooms: false,
      suggestedLocations: ['Location 1', 'Location 2', 'Location 3'], // Replace with your actual suggested locations
    };
  },
  computed: {
    filteredLocations() {
      return this.suggestedLocations.filter(location => location.toLowerCase().includes(this.searchQuery.toLowerCase()));
    },
  },
  methods: {
    // Date Picker Functionality
    openDatePicker() {
      if (!this.datePickerInstance) {
        this.datePickerInstance = flatpickr(this.$refs.dateInput, {
          dateFormat: 'm/d/Y',
        });
      }

      this.datePickerInstance.open();
    },

    // Location Search Functionality
    filterLocations() {
    this.showDropdownList = true;
    // this.showDropdownGustes = false; // Hide guests dropdown
    // this.showDropdownRooms = false;
  },
  showDropdown() {
    this.showDropdownList = true;
    // this.showDropdownGustes = false; // Hide guests dropdown
    // this.showDropdownRooms = false;
  },
  hideDropdown(source) {
    if (source !== 'guests') {
      this.showDropdownList = false;
    }

    if (source !== 'location') {
      this.showDropdownGustes = false;
    }
    if (source !== 'rooms') {
      this.showDropdownRooms = false;
    }
  },
  selectLocation(location) {
    this.searchQuery = location;
    this.hideDropdown('location');
  },

  // Guests Functionality
  showDropdownGuests() {
    this.showDropdownGustes = true;
    // this.showDropdownList = false; // Hide location dropdown
  },
  selectGuest(guestOption) {
    this.numberOfGuests = guestOption;
    this.hideDropdown('guests');
  },
  showDropdown_Rooms() {
    this.showDropdownRooms = true;
    // this.showDropdownGuests = false; // Hide location dropdown
  },
  selectRooms(roomOption) {
  this.numberOfRooms = roomOption;
  this.hideDropdown('rooms');
},

},

};

</script>
<style>
.room{fill: #4F4F4F;
}
</style>