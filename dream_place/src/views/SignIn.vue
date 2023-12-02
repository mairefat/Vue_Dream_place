<template>
    <div>
        <section class="bg-gray-50 ">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <a href="/" class="flex items-center justify-center mb-6 text-2xl font-semibold ">
          Register    
      </a>
              <form @submit.prevent="submitForm" class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class=" block mb-2 text-sm font-medium">Email address</label>
                      <input v-model="formData.email" type="email" name="email" id="email" class=" sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100  placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500" placeholder="name@gmail.com" required>
                      <p v-if="emailError" class="text-sm text-red-500">{{ emailError }}</p>
                    </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium ">Password</label>
                      <input v-model="formData.password" type="password" name="password" id="password" placeholder="••••••••" class=" sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  bg-gray-100 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500" required>
                      <p v-if="passwordError" class="text-sm text-red-500">{{ passwordError }}</p>

                  </div>
                  <div>
                    <button
                    v-on:click="showModal = true"
            type="submit"
            class="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800"
          >
            Sign in
          </button>
                  </div>
              </form>
              <p class="text-sm text-center font-light text-gray-600 ">
                      Don't have an account? <a href="#" class="font-medium text-primary-600 hover:underline text-blue-500">Register</a>
                  </p>

                  
      <transition name="bounce" mode="out-in">
     
<SignModal v-if="showModal" @close="closeModal" />

      </transition>
          </div>
      </div>
  </div>
</section>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/assets/store/index.js'; 
import SignModal from '@/components/SignModal.vue'
// import { v4 as uuidv4 } from 'uuid';


const showModal = ref(false);

// const openModal = () => {
//   isModalOpen.value = true;
//   // router.push({ name: 'UserTrips' });
// };

const closeModal = () => {
  showModal.value = false;
  // router.push({ name: 'UserTrips' });
};

const router = useRouter();
const authStore = useAuthStore();

const formData = ref({
  email: '',
  password: '',
});

const emailError = ref('');
const passwordError = ref('');

const validateForm = () => {
  // Reset errors
  emailError.value = '';
  passwordError.value = '';

  let isValid = true;

  // Email validation
  if (!formData.value.email || !/^\S+@\S+\.\S+$/.test(formData.value.email)) {
    emailError.value = 'Invalid email address';
    isValid = false;
  }

  // Password validation
  if (!formData.value.password || formData.value.password.length < 6) {
    passwordError.value = 'Password must be at least 6 characters';
    isValid = false;
  }

  return isValid;
};

const simulateRegistration = (enteredEmail, enteredPassword) => {
  // Check if the email is already taken in local storage
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  if (storedUsers.some(u => u.email === enteredEmail)) {
    return { success: false, error: 'Email is already taken' };
  }

  // Generate a unique ID for the new user
  const userId = String(storedUsers.length + 1);

  // Add the new user to the local storage users array
  storedUsers.push({ email: enteredEmail, password: enteredPassword, id: userId });
  localStorage.setItem('users', JSON.stringify(storedUsers));

  // Update the user data in the Pinia store
  useAuthStore().setUser({ email: enteredEmail, id: userId });

  return { success: true, userId };
};

const submitForm = () => {
  if (validateForm()) {
    const { email, password } = formData.value;

    // Use simulateRegistration function
    const registrationResult = simulateRegistration(email, password);

    if (registrationResult.success) {
      // Continue with your sign-in logic
      const token = generateToken(); // Replace with your actual token generation logic
      authStore.setToken(token);
      router.push('/');
    } else {
      // Handle registration failure
      console.error(`Registration failed: ${registrationResult.error}`);
      // You might want to show an error message to the user
    }
  }
};

const generateToken = () => {
  // Replace with your actual token generation logic
  return 'exampleToken';
};
</script>