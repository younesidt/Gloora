<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div>
    <div class="sticky right-0 left-0 z-40 top-0">
      <NavBar />
    </div>
    <router-view />
  </div>
</template>

<style scoped>

</style>
