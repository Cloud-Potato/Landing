<template>
  <div class="welcome">
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
        <b-jumbotron class="shadow-sm my-auto">
          <template #header>
            <h1 class="display-4">Cloudpotato</h1>
          </template>

          <template #lead>
            Cloudpotato is an umbrella for multiple services and websites ran by
            a small group of developers.
          </template>

          <b-button
            size="lg"
            block
            class="shadow-sm"
            href="https://status.cloudpotato.nl/"
            target="_blank"
            variant="outline-info"
            >Status page</b-button
          >
        </b-jumbotron>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Welcome extends Vue {}
</script>

<style scoped>
.lead {
  padding: 20px;
}
.jumbotron {
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #222629;
}
</style>
