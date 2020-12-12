<template>
  <div class="home">
    <b-container class="text-white text-center">
      <img alt="logo" class="logo" src="../assets/logo.png" />

      <b-row>
        <b-col
          offset="1"
          cols="10"
          offset-sm="0"
          sm="12"
          offset-md="2"
          md="8"
          offset-lg="3"
          lg="6"
          offset-xl="3"
          xl="6"
        >
          <b-tabs pills align="center">
            <b-tab title="Intro" active>
              <Welcome />
            </b-tab>
            <b-tab title="Websites">
              <Websites />
            </b-tab>
            <b-tab title="Servers">
              <Servers />
            </b-tab>
            <!-- <b-tab title="Services">
              <Services />
            </b-tab> -->
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Welcome from "@/components/Welcome.vue";
import Websites from "@/components/Websites.vue";
// import Services from "@/components/Services.vue";
import Servers from "@/components/Servers.vue";

export default {
  name: "Home",
  components: {
    Welcome,
    Websites,
    // Services,
    Servers,
  },
};
</script>

<style>
.logo {
  max-height: 160px;
  margin-bottom: 50px;
}
.nav-pills {
  margin-bottom: 20px !important;
}
.nav-pills > li > a.active {
  color: #ffffff;
  background-color: #17a2b8 !important;
}
.nav-pills > li > a {
  color: #17a2b8;
}
</style>
