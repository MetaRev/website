<template>
  <div class="relative w-full h-screen">
    <Background class="absolute inset-0 z-0" />
  </div>
</template>

<script setup>
import Background from './components/background.vue'
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: black;
  overflow: hidden;
}

* {
  user-select: none;
  -webkit-user-select: none; /* For Safari */
  -moz-user-select: none; /* For Firefox */
  -ms-user-select: none; /* For IE/Edge */
}
</style>
