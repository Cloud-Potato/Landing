<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  padding-top: 50px;
}
html,
body,
#app {
  height: 100%;
  background-color: #171a1c;
}

/* Bootstrap overrides */
.jumbotron {
  padding-top: 30px !important;
  padding-bottom: 30px !important;
  background-color: #222629 !important;
}
.card {
  margin-bottom: 30px !important;
  background-color: #222629 !important;
}

.card a {
  color: #17a2b8 !important;
}
.card a:hover {
  color: #17a2b8 !important;
}
</style>
