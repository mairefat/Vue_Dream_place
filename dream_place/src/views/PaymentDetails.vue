<template>
  <div>
    <NavBar class="top-0 left-0 right-0 z-50" />
    <br />
    <br />

    <div class="bg-gray-100 pt-16 px-16">
      <h2 class="font-semibold text-2xl">Secure your reservation</h2>
      <CovidAlert />

      <div class="py-10 px-10 grid grid-rows-2 gap-10 lg:flex">
        <!-- right section  -->
        <div class="lg:w-2/3">
          <div>
            <div class="flex flex-col">
              <div
                class="flex p-4 rounded-t-md border border-white dark:border-blue-600 dark:bg-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="secure"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"
                  />
                </svg>
                <p class="text-white px-2 text-l">
                  Room 1<span class="px-2"
                    >2 adults, 1 double bed and 1 twin bed, Non-smoking</span
                  >
                </p>
              </div>

              <div
                class="w-full mx-auto rounded-md bg-white shadow-lg p-5 text-gray-700"
              >
                <div class="flex px-4 mt-5 gap-8">
                  <div class="flex flex-col mb-2">
                    <label for="firstName">First Name</label>
                    <input
                      id="firstName"
                      class="bg-gray-200 hover:border-blue-500 py-1 border rounded-md focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Juilis"
                      required
                    />
                  </div>
                  <div class="flex flex-col mb-2">
                    <label for="firstName">Last Name</label>
                    <input
                      class="bg-gray-200 py-1 border rounded-md hover:border-blue-500 focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Lorenzo"
                      required
                    />
                  </div>
                </div>

                <div class="flex-col flex py-6">
                  <label for="mobileNumber" class="px-4">Mobile Number:</label>
                  <div class="flex px-4 gap-6">
                    <div class="border border-gray-200 flex p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="25"
                        viewBox="0 0 600 400"
                      >
                        <rect width="600" height="80" fill="#e32213" />
                        <rect width="600" height="80" y="160" fill="#fff" />
                        <rect width="600" height="80" y="320" fill="#000" />
                      </svg>

                      <select id="countrySelector">
                        <option value="+02">+02</option>
                      </select>
                    </div>

                    <input
                      v-model="phoneNumber"
                      type="text"
                      :placeholder="88672778"
                      class="bg-gray-200 py-1 border rounded-md hover:border-blue-500 text-lg"
                      required
                    />
                  </div>
                </div>

                <div class="flex px-4 pb-8">
                  <input type="checkbox" width="20px" height="20px" required />
                  <p class="px-2">Receive text alerts about this trip.</p>
                </div>
              </div>
            </div>

            <div
              class="min-w-screen min-h-screen flex items-center justify-center px-5 pb-10 pt-16"
            >
              <div class="flex flex-col">
                <div
                  class="flex p-4 border border-white rounded-t-md dark:border-blue-600 dark:bg-blue-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="secure"
                    height="1em"
                    viewBox="0 0 576 512"
                  >
                    <path
                      d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"
                    />
                  </svg>
                  <p class="text-white px-2 text-l">Payment options</p>
                </div>
                <div
                  class="w-full mx-auto rounded-md bg-white shadow-lg p-5 text-gray-700"
                >
                  <div class="mb-3 flex -mx-2">
                    <div class="px-2">
                      <label
                        for="type1"
                        class="flex items-center cursor-pointer"
                      >
                        <img
                          src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                          class="h-8 ml-3"
                        />
                      </label>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label class="font-bold text-sm mb-2 ml-1"
                      >Name on card</label
                    >
                    <div>
                      <input
                        v-model="nameOnCard"
                        required
                        class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="Julius Lorenzo"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="font-bold text-sm mb-2 ml-1"
                      >Debit/Credit card number</label
                    >
                    <div>
                      <input
                        v-model="cardNumber"
                        required
                        class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="9923 4643 7482 2293"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="mb-3 -mx-2 flex items-end">
                    <div class="px-2 w-1/2">
                      <label class="font-bold text-sm mb-2 ml-1"
                        >Expiration Date</label
                      >
                      <div>
                        <select
                          v-model="expirationMonth"
                          class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                        >
                          <option value="April">April</option>
                        </select>
                      </div>
                    </div>
                    <div class="px-2 w-1/2">
                      <select
                        v-model="expirationYear"
                        class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                      >
                        <option value="2026">2026</option>
                      </select>
                    </div>
                  </div>

                  <div class="mb-3 -mx-2 flex items-end">
                    <div class="px-2 w-1/2">
                      <label class="font-bold text-sm mb-2 ml-1"
                        >Security code</label
                      >
                      <div>
                        <input
                          v-model="securityCode"
                          required
                          class="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                          placeholder="543"
                          type="text"
                        />
                      </div>
                    </div>
                    <div class="px-2 w-1/2">
                      <label class="font-bold text-sm mb-2 ml-1"
                        >Billing Zip code</label
                      >
                      <div>
                        <input
                          v-model="securityCode"
                          required
                          class="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                          placeholder="203846"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="py-8 flex flex-col">
                  <div
                    class="flex p-4 border border-white bg-gray-50 rounded-t-md dark:border-yellow-500 dark:bg-yellow-500"
                  >
                    <p class="px-2 text-l">
                      Important information about your booking
                    </p>
                  </div>
                  <div class="p-8 rounded-md border-white bg-white">
                    <p>
                      1. This rate is non-refundable. If you change or cancel
                      your booking you will not get a refund or credit to use
                      for a future stay.
                    </p>
                    <p>2. Stay extensions will require a new reservation.</p>
                    <p>3. Front desk staff will greet guests on arrival</p>
                    <p>
                      4. No refunds will be issued for late check-in or early
                      check-out.
                    </p>

                    <br />

                    <p>
                      By clicking the button below, I acknowledge that I have
                      reviewed the
                      <span class="text-blue-500">Privacy Statement</span> and
                      have reviewd and accept the
                      <span class="text-blue-500">Rules and Restrictions</span>
                      and <span class="text-blue-500">Terms of Use.</span>
                    </p>

                    <div class="pt-3">
                      <button
                        v-on:click="showModal = true"
                        class="w-100 max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                      >
                        <i class="mr-1"></i> Complete Booking
                      </button>

                      <transition name="bounce" mode="out-in">
                        <PaymentModal v-if="showModal" @close="closeModal" />
                      </transition>
                    </div>
                    <div class="flex py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="lock"
                        height="1em"
                        viewBox="0 0 448 512"
                      >
                        <path
                          d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
                        />
                      </svg>
                      <p class="whitespace-nowrap px-2">
                        We use secure transmission and encrypted storage to
                        protect your personal information
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- left section  -->
        <div class="lg:w-1/3">
          <div class="grid lg:grid-col-1">
            <!--  card code  -->
            <div class="bg-white shadow rounded">
              <div
                class="w-full bg-gray-200 p-4 bg-cover bg-center"
                style="
                  background-image: url('https://th.bing.com/th/id/OIP.uBZzLNUexdwwV7S-lX3o0QHaFj?rs=1&pid=ImgDetMain');
                  width: 450px;
                  height: 180px;
                  border-radius: 6px;
                "
              >
                <div></div>
              </div>
              <div class="p-4 flex flex-col">
                <p class="font-semibold">Lakeside Motel Warefront</p>
                <!-- review  -->
                <div class="flex items-center pt-2">
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

                <div class="pt-4">
                  <p class="text-red-500 mt-1">Non refundable</p>
                  <p class="text-gray-500 mt-1">
                    Check in: Sunday, March 18, 2022
                  </p>
                  <p class="text-gray-500 mt-1">
                    Check out: Tuesday, March 20, 2022
                  </p>
                  <p class="text-gray-500 mt-1">2 night stay</p>
                </div>
              </div>
            </div>

            <!-- price details  -->
            <div class="py-8 flex flex-col">
              <div
                class="flex p-4 rounded-t-md border border-white dark:border-green-300 dark:bg-green-300"
              >
                <p class="px-2 text-l">Price Details</p>
              </div>
              <div
                class="w-full mx-auto rounded-md bg-white shadow-lg p-5 text-gray-500"
              >
                <div class="flex items-center justify-between">
                  <p>1 room X 2 nights</p>
                  <p>$ 120.32</p>
                </div>
                <div class="pb-2 flex items-center justify-between">
                  <p>Tax and service fees</p>
                  <p>$ 8.32</p>
                </div>

                <hr />

                <div
                  class="flex items-center justify-between py-2 font-semibold text-black"
                >
                  <p>Total</p>
                  <p>$ 130</p>
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
import CovidAlert from "@/components/CovidAlert.vue";
import NavBar from "@/components/NavBar.vue";
import { ref } from "vue";
import PaymentModal from "@/components/PaymentModal.vue";
const showModal = ref(false);

const closeModal = () => {
  showModal.value = false;
};
</script>




<style>
svg.lock {
  fill: #3b9b76;
}
svg.secure {
  fill: #ffffff;
}
input[type="checkbox"] {
  width: 20px;
  height: 20px;
}
</style>



