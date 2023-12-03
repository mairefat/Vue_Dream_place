<template>
  <div>
    <div class="container mx-auto relative">
      <!-- Background image -->
      <div class="relative h-screen bg-cover bg-center">
        <img
          class="object-cover w-full h-full rounded-md absolute inset-0"
          alt="Background Image"
          src="../assets/images/Rectangle 2.png"
        />

        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center text-white">
            <h1 class="text-4xl font-bold">Enjoy Your Dream Vacation</h1>
            <p class="mt-4 text-lg">
              Plan and book our perfect trip with expert advice, travel tips,
              destination <br />
              information, and inspiration from us
            </p>
          </div>
        </div>

        <!--  display the search bar above the background image from the bottom -->
        <div
          class="absolute top-[59%] w-full h-1/2 flex justify-center items-end"
        >
          <SearchBar class="w-5/6" />
        </div>
      </div>

      <CovidAlert />

      <!-- paragraph -->
      <div class="py-8">
        <h3 class="font-bold text-lg">Enjoy your dream vacation</h3>
        <p class="text-sm text-gray-600 py-3">
          Plan and book our perfect trip with expert advice, travel tips,
          destination information and <br />
          inspiration from us
        </p>
      </div>

      <!-- first-cards -->
      <div class="grid grid-cols-12 gap-4">
        <!-- card 1 -->
        <div class="col-span-12 sm:col-span-6 md:col-span-3">
          <card class="w-full flex flex-col">
            <div class="relative">
              <!-- Image card -->
              <a href="#">
                <img
                  src="../assets/images/Rectangle 8.png"
                  class="w-96 h-auto"
                />
              </a>
            </div>

            <div class="flex flex-row mt-2 gap-2">
              <!-- Description -->
              <div clas="flex flex-col">
                <h5 class="font-bold">Australia</h5>
                <p class="text-gray-600 text-xs mt-1">2246 properties</p>
              </div>
            </div>
          </card>
        </div>

        <!-- card 2 -->
        <div class="col-span-12 sm:col-span-6 md:col-span-3">
          <card class="w-full flex flex-col">
            <div class="relative">
              <!-- Image card -->
              <a href="#">
                <img
                  src="../assets/images/Rectangle 9.png"
                  class="w-96 h-auto"
                />
              </a>
            </div>

            <div class="flex flex-row mt-2 gap-2">
              <!-- Description -->
              <div clas="flex flex-col">
                <h5 class="font-bold">Japan</h5>
                <p class="text-gray-600 text-xs mt-1">1278 properties</p>
              </div>
            </div>
          </card>
        </div>

        <!-- card 3 -->
        <div class="col-span-12 sm:col-span-6 md:col-span-3">
          <card class="w-full flex flex-col">
            <div class="relative">
              <!-- Image card -->
              <a href="#">
                <img
                  src="../assets/images/Rectangle 10.png"
                  class="w-96 h-auto"
                />
              </a>
            </div>

            <div class="flex flex-row mt-2 gap-2">
              <!-- Description -->
              <div clas="flex flex-col">
                <h5 class="font-bold">New Zealand</h5>
                <p class="text-gray-600 text-xs mt-1">480 properties</p>
              </div>
            </div>
          </card>
        </div>

        <!-- card 4 -->
        <div class="col-span-12 sm:col-span-6 md:col-span-3">
          <card class="w-full flex flex-col">
            <div class="relative">
              <!-- Image card -->
              <a href="#">
                <img
                  src="../assets/images/Rectangle 11.png"
                  class="w-96 h-auto"
                />
              </a>
            </div>

            <div class="flex flex-row mt-2 gap-2">
              <!-- Description -->
              <div clas="flex flex-col">
                <h5 class="font-bold">Greece</h5>
                <p class="text-gray-600 text-xs mt-1">320 properties</p>
              </div>
            </div>
          </card>
        </div>
      </div>

      <!-- second-cards -->
      <div class="py-6">
        <h3 class="font-bold text-lg">Get inspiration for your next trip</h3>
      </div>
      <div class="grid grid-cols-12 gap-4">
        <!-- card 1 -->
        <div class="col-span-3 sm:col-span-6 md:col-span-4 relative">
          <card class="w-full flex flex-col relative">
            <!-- Image card -->
            <a href="#" class="block relative">
              <img src="../assets/images/card1.png" class="w-full h-auto" />
              <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
                <!-- Description -->
                <h5 class="font-bold">
                  Sydneys 10 most fashionable 5-star hotels
                </h5>
                <p class="mt-2 text-white text-xs">
                  Browse the fastest growing tourism sector in the heart of
                  Australia tourism capital ....
                </p>
              </div>
            </a>
          </card>
        </div>

        <!-- card 2 -->
        <div class="col-span-3 sm:col-span-6 md:col-span-4 relative">
          <card class="w-full flex flex-col relative">
            <!-- Image card -->
            <a href="#" class="block relative">
              <img
                src="../assets/images/Rectangle 16.png"
                class="w-full h-auto"
              />
              <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
                <!-- Description -->
                <h5 class="font-bold">Top cities for Vegan Travellers</h5>
                <p class="mt-2 text-white text-xs">
                  Top sites where you do not have to worry about being a vegan.
                  Our tourist guide is here...
                </p>
              </div>
            </a>
          </card>
        </div>

        <!-- card 3 -->
        <div class="col-span-3 sm:col-span-6 md:col-span-4 relative">
          <card class="w-full flex flex-col relative">
            <!-- Image card -->
            <a href="#" class="block relative">
              <img
                src="../assets/images/Rectangle 17.png"
                class="w-full h-auto"
              />
              <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
                <!-- Description -->
                <h5 class="font-bold">
                  Worlds top destinations during and post covid timeline
                </h5>
                <p class="mt-2 text-white text-xs">
                  Pandemic is still intact and will be here for a longer time.
                  Here’s where your next destination...
                </p>
              </div>
            </a>
          </card>
        </div>
      </div>

      <!-- third-cards -->
      <div class="py-6">
        <h3 class="font-bold text-lg">Popular hotels</h3>
      </div>
      <div class="grid grid-cols-12 gap-4">
        <!-- card 1 -->
        <div class="col-span-12 sm:col-span-6 md:col-span-3">
          <card class="w-full flex flex-col">
            <div class="relative">
              <!-- Image card -->
              <a href="#">
                <img src="../assets/images/card2.png" class="w-96 h-auto" />
              </a>
            </div>

            <div class="flex flex-row mt-2 gap-2">
              <!-- Description -->
              <div clas="flex flex-col">
                <h5 class="font-bold">Lakeside Motel Warefront</h5>
                <p class="text-gray-600 text-xs mt-1">2246 properties</p>
              </div>
            </div>
          </card>
        </div>

        <!-- card 2 -->
        <div class="col-span-12 sm:col-span-6 md:col-span-3">
          <card class="w-full flex flex-col">
            <div class="relative">
              <!-- Image card -->
              <a href="#">
                <img src="../assets/images/Rectangle.png" class="w-96 h-auto" />
              </a>
            </div>

            <div class="flex flex-row mt-2 gap-2">
              <!-- Description -->
              <div clas="flex flex-col">
                <h5 class="font-bold">Recce Graham resort</h5>
                <p class="text-gray-600 text-xs mt-1">1278 properties</p>
              </div>
            </div>
          </card>
        </div>

        <!-- card 3 -->
        <div class="col-span-12 sm:col-span-6 md:col-span-3">
          <card class="w-full flex flex-col">
            <div class="relative">
              <!-- Image card -->
              <a href="#">
                <img src="../assets/images/card3.png" class="w-96 h-auto" />
              </a>
            </div>

            <div class="flex flex-row mt-2 gap-2">
              <!-- Description -->
              <div clas="flex flex-col">
                <h5 class="font-bold">Fireside Dinners</h5>
                <p class="text-gray-600 text-xs mt-1">480 properties</p>
              </div>
            </div>
          </card>
        </div>

        <!-- card 4 -->
        <div class="col-span-12 sm:col-span-6 md:col-span-3">
          <card class="w-full flex flex-col">
            <div class="relative">
              <!-- Image card -->
              <a href="#">
                <img src="../assets/images/card4.png" class="w-96 h-auto" />
              </a>
            </div>

            <div class="flex flex-row mt-2 gap-2">
              <!-- Description -->
              <div clas="flex flex-col">
                <h5 class="font-bold">Oculous Inn Stay</h5>
                <p class="text-gray-600 text-xs mt-1">320 properties</p>
              </div>
            </div>
          </card>
        </div>
      </div>

      <!-- Ads-cover -->
      <div class="mt-32 py-24 relative">
        <div class="absolute inset-0 flex items-center">
          <!-- ads img -->
          <div class="relative">
            <img
              src="../assets/images/Rectangle 18.png"
              alt="ads"
              class="rounded-md w-full h-full object-cover"
            />

            <!-- ad_cover img -->
            <div class="absolute top-0 right-32 buttom-4 mr-4">
              <img
                src="../assets/images/ad_cover.png"
                alt="img"
                style="
                  width: 490px;
                  height: 279.5px;
                  max-width: 100%;
                  max-height: 100%;
                "
              />
            </div>
          </div>
        </div>

        <div class="absolute top-0 left-4 p-8 text-white">
          <p class="mb-4 font-bold text-xl">
            Download the mobile application for bonus <br />
            coupons and travel codes
          </p>
          <div class="rounded">
            <router-link
              to="#"
              class="text-white inline-flex items-center px-3 py-2 rounded bg-blue-500 hover:bg-blue-700 hover:text-blue-500"
            >
              Download mobile app
            </router-link>
          </div>
        </div>
      </div>

      <div class="mt-32 justify-center text-center">
        <h3 class="text-xl font-bold">Explore the world with My Dream place</h3>
        <p class="text-sm text-blue-600 mt-4">
          Discover new places and experiences
        </p>
      </div>
    </div>
  </div>
</template>

<script >
import CovidAlert from "./CovidAlert.vue";
import SearchBar from "./SearchBar.vue";

export default {
  components: {
    SearchBar,
    CovidAlert,
  },
};
</script>

<style lang="scss" scoped>
</style>


