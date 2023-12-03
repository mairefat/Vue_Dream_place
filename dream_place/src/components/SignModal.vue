<template>
  <div>
    <div
      class="w-full h-full fixed top-0 left-0 bg-[#848A97] bg-opacity-60 z-20"
      @click="hide"
    >
      <div class="flex items-center justify-center h-full">
        <div
          class="sm:w-[385px] sm:min-w-[40vw] min-w-[80vw] min-h-[50vh] flex flex-col items-center gap-2 p-6 bg-[#FFFFEB] rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-[#059669] mx-auto h-11 rounded-full bg-[#D1FAE5] w-11"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span class="text-2xl font-medium">Welcome to My Dream Place</span>
          <p class="text-center">
            You can now enjoy your travel experience with easy access to
            resources and more
          </p>
          <router-link :to="{ name: 'home' }">
            <button
              @click="closeModal"
              class="p-3 bg-[#4F46E5] rounded-lg w-full text-white"
            >
              Get Started
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "TheModalComponent",
  methods: {
    hide() {
      console.log("click registered");
      this.$emit("close");
    },
  },
};
</script>
  
  <style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s ease-out both;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse ease-in both;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
  




   



   
     