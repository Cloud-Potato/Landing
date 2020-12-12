<template>
  <div class="websites">
    <b-card class="text-left shadow-sm" title="Marco van Poortvliet">
      <b-card-text>
        Portfolio by Marco van Poortvliet.
      </b-card-text>
      <b-link target="_blank" href="https://marcovp.nl" class="card-link">
        Visit Website
      </b-link>
      <b-link
        target="_blank"
        href="https://github.com/marc0tjevp/portfolio"
        class="card-link"
      >
        View on Github
      </b-link>
    </b-card>
    <b-card class="text-left shadow-sm" title="Yannick Willems">
      <b-card-text>
        Portfolio by Yannick Willems.
      </b-card-text>
      <b-link target="_blank" href="http://ywillems.nl" class="card-link">
        Visit Website
      </b-link>
      <b-link
        target="_blank"
        href="https://github.com/Ker0h/portfolio"
        class="card-link"
      >
        View on Github
      </b-link>
    </b-card>
    <b-card class="text-left shadow-sm" title="Lisa Tyem">
      <b-card-text>
        Portfolio by Lisa Tyem. Work in progress.
      </b-card-text>
    </b-card>
    <b-card class="text-left shadow-sm" title="N3rdCoffee">
      <b-card-text>
        Hosting for N3rdCoffee.
      </b-card-text>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Websites extends Vue {}
</script>

<style scoped></style>
