<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
  font-size: 18px;
}

body {
  background: #262638;
}
</style>
