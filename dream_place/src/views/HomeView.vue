<template>
  <div>
    <NavBar />
    <HomeContent />
    <FooterBar />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";
import HomeContent from "@/components/HomeContent.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    HomeContent,
    FooterBar,
  },
};
</script>


