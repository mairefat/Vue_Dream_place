<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <NavBar />
    <SearchBar />
    <HomeContent />
    <FooterBar />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';
import HomeContent from '@/components/HomeContent.vue';
import SearchBar from '@/components/SearchBar.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    SearchBar,
    HomeContent,
    FooterBar,

  }
}
</script>


<!-- src/views/HomeView.vue -->
<!-- <template>
  <div>
    <h1>{{ $store.main.someValue }}</h1> -->
    <!-- Your component content -->
  <!-- </div>
</template>

<script>
import { onMounted } from 'vue';
import { useStore } from '../assets/store';

export default {
  setup() {
    const store = useStore();

    // Access and modify the store state
    onMounted(() => {
      store.someValue = 'Hello from Pinia!';
    });

    return {
      // Your component properties
    };
  },
};
</script> -->
