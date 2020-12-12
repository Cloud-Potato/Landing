<template>
  <div class="home">
    <b-container class="text-white text-center">
      <img alt="logo" class="logo" src="../assets/logo.png" />
      <Welcome />
    </b-container>
  </div>
</template>

<script>
import Welcome from "@/components/Welcome.vue";

export default {
  name: "Home",
  components: {
    Welcome,
  },
};
</script>

<style>
.logo {
  max-height: 160px;
  margin-bottom: 50px;
}
</style>