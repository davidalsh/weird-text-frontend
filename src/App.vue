<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <div class="container">
    <NavBar />
  </div>
  <main class="flex justify-center py-6">
    <RouterView />
  </main>
</template>
