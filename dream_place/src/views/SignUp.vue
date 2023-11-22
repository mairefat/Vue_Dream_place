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
                      <input type="email" name="email" id="email" class=" sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100  placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500" placeholder="name@gmail.com" required="">
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium ">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class=" sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  bg-gray-100 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500" required="">
                  </div>
                  <div>
                      <label for="confirm-password" class="block mb-2 text-sm font-medium">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class=" sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100 border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500" required="">
                  </div>
                  <div>
                    <button
            type="submit"
            class="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800"
          >
            Submit
          </button>
                  </div>
              </form>
              <p class="text-sm text-center font-light text-gray-600 ">
                      Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline text-blue-500">Sign In</a>
                  </p>
          </div>
      </div>
  </div>
</section>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/assets/store/index.js'; // Adjust the path accordingly
// import { v4 as uuidv4 } from 'uuid';

const router = useRouter();
const authStore = useAuthStore();

const users = [];

const formData = ref({
  email: '',
  password: '',
});

const simulateRegistration = (enteredEmail, enteredPassword) => {
  // Check if the email is already taken
  if (users.some(u => u.email === enteredEmail)) {
    return { success: false, error: 'Email is already taken' };
  }

  // Generate a unique ID for the new user
  const userId = String(users.length + 1);

  // Add the new user to the users array
  users.push({ email: enteredEmail, password: enteredPassword, id: userId });

  return { success: true, userId };
};

const submitForm = () => {
  const { email, password } = formData.value;

  // Simulate registration (replace this with your actual registration logic)
  const registrationResult = simulateRegistration(email, password);

  if (registrationResult.success) {
    const token = generateToken(); // Replace with your actual token generation logic
    authStore.setToken(token);
    router.push('/');
  } else {
    // Handle registration failure
    console.error(`Registration failed: ${registrationResult.error}`);
    // You might want to show an error message to the user
  }
};
const generateToken = () => {
  // Replace with your actual token generation logic
  return 'exampleToken';
};

</script>