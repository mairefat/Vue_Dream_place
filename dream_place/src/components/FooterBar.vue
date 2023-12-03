<template>
  <div>
    <div
      class="bottom-0 px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <div class="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div class="md:max-w-md lg:col-span-2">
          <div class="text-black text-lg flex items-center space-x-2 font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3.414 13.7782C2.5 14.0002 2 15.1922 2 15.1922C2 15.1922 5.398 15.6262 6.949 17.3132C8.5 19.0002 9.071 22.2632 9.071 22.2632C9.071 22.2632 10.47 22.6982 10.485 20.8492C10.5 19.0002 9.778 17.3132 9.778 17.3132L13.091 14.0002L16.701 21.7042C16.701 21.7042 18.08 22.2302 18.04 20.3652C18 18.5002 16.85 10.2422 16.85 10.2422L19.678 7.41319C19.869 7.22869 20.0214 7.008 20.1262 6.76399C20.231 6.51999 20.2862 6.25755 20.2885 5.99199C20.2908 5.72643 20.2402 5.46307 20.1396 5.21728C20.0391 4.97149 19.8906 4.74818 19.7028 4.5604C19.515 4.37261 19.2917 4.2241 19.0459 4.12354C18.8001 4.02298 18.5368 3.97238 18.2712 3.97468C18.0056 3.97699 17.7432 4.03217 17.4992 4.13698C17.2552 4.2418 17.0345 4.39417 16.85 4.58519L13.947 7.48819C13.947 7.48819 6.148 6.09419 3.824 6.29719C1.5 6.50018 2.559 7.56319 2.559 7.56319L10.203 11.2332L6.95 14.4862C6.95 14.4862 4.328 13.5562 3.414 13.7782Z"
                fill="#2F80ED"
              />
            </svg>
            <router-link to="/" class="text-black">my Dream Place</router-link>
          </div>
          <div class="mt-4 lg:max-w-sm">
            <p
              class="text-gray-700 ml-6 font-sans text-base font-normal leading-normal tracking-tight"
              style="
                color: var(--Gray-2, #4f4f4f);
                font-family: SF Pro Display;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 140%;
                letter-spacing: 0.28px;
              "
            >
              Your next goto companion for <br />
              travel
            </p>
          </div>
        </div>
        <div
          class="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4"
        >
          <div>
            <p class="font-semibold tracking-wide text-gray-800">Company</p>
            <ul class="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >About</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >Jobs</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >Newsroom</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >Advertising</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >Contact US</a
                >
              </li>
            </ul>
          </div>
          <div>
            <p class="font-semibold tracking-wide text-gray-800">Explore</p>
            <ul class="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >Australia</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >New Zealand</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >United States America (USA)</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >Greece</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >Maldives</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >Singapore</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-blue-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >See more</a
                >
              </li>
            </ul>
          </div>
          <div>
            <p class="font-semibold tracking-wide text-gray-800">
              Terms and Policies
            </p>
            <ul class="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >Privacy Policy</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >Terms of use</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >Acessibility</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >Reward system policy</a
                >
              </li>
            </ul>
          </div>
          <div>
            <p class="font-semibold tracking-wide text-gray-800">Help</p>
            <ul class="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >Support</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >Cancle your bookings</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >Use Coupon</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >Refund Policies</a
                >
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >International Travel Documents</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-gray-200 flex flex-col justify-end pt-5 pb-10 border-t sm:flex-row"
    >
      <div class="flex items-center mt-4 space-x-4 sm:mt-0">
        <p
          class="text-sm text-gray-700 mr-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
        >
          © myDreamPlace 2020.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
