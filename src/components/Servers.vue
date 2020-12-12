<template>
  <div class="servers">
    <b-card class="text-left shadow-sm" title="Piplup">
      <b-card-text>
        <dt>Architecture</dt>
        <dd>1 vCPU / 1GB RAM / 25GB Disk</dd>
        <dt>OS</dt>
        <dd>CentOS 8</dd>
        <dt>Responsibilities</dt>
        <dd>Webhosting in Docker containers</dd>
      </b-card-text>
    </b-card>
    <b-card class="text-left shadow-sm" title="Mudkip">
      <b-card-text>
        <dt>Architecture</dt>
        <dd>1 vCPU / 512MB RAM / 25GB Disk</dd>
        <dt>OS</dt>
        <dd>CentOS 8</dd>
        <dt>Responsibilities</dt>
        <dd>Nginx reverse proxy</dd>
      </b-card-text>
    </b-card>
    <b-card class="text-left shadow-sm" title="Mantine">
      <b-card-text>
        <dt>Architecture</dt>
        <dd>1 vCPU / 2GB RAM / 25GB Disk</dd>
        <dt>OS</dt>
        <dd>Ubuntu 18.04</dd>
        <dt>Responsibilities</dt>
        <dd>Minecraft Server</dd>
      </b-card-text>
    </b-card>
    <b-card class="text-left shadow-sm" title="Poliwag">
      <b-card-text>
        <dt>Architecture</dt>
        <dd>Shared Hosting</dd>
        <dt>Responsibilities</dt>
        <dd>Apache2 server hosting legacy websites. Will be removed in 2021.</dd>
      </b-card-text>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Servers extends Vue {}
</script>

<style scoped></style>
