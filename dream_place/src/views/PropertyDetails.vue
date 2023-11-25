<template>
     <div>
        <NavBar />
    <div class="grid grid-rows-2 gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3 aspect-[16/7]">
      <div v-for="(image, index) in images" :key="index" class="relative" :class="{ 'col-span-2 row-span-2': index === 0 }">
        <span v-if="index === 0" class="aspect-w-2 aspect-h-1 block overflow-hidden bg-none opacity-1 border-0 m-0 p-0 absolute inset-0">
          <img :src="image.src" decoding="async" data-nimg="fill" class="object-cover absolute inset-0 w-0 h-0 min-w-full max-w-full min-h-full max-h-full" :sizes="image.sizes" />
        </span>
        <span v-else class="aspect-w-2 aspect-h-1 block overflow-hidden bg-none opacity-1 border-0 m-0 p-0 absolute inset-0">
          <img :src="image.src" decoding="async" data-nimg="fill" class="object-cover absolute inset-0 w-0 h-0 min-w-full max-w-full min-h-full max-h-full" sizes="100vw" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
export default {
  data() {
    return {
      images: [
        {  src: "../assets/images/Rectangle 18.png", sizes: "100vw" },
        {  src: "../assets/images/Rectangle 18.png", sizes: "100vw" },
        {  src: "../assets/images/Rectangle 18.png", sizes: "100vw" },
      ]
    };
},
  
  components: {
    NavBar,
  }

};

</script>

<style lang="scss" scoped>

</style>