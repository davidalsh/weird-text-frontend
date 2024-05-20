<template>
  <nav class="py-10">
    <div class="text-center mb-5">
      <span class="text-4xl text-white">WeirdText</span>
    </div>
    <div class="flex justify-center items-center gap-3 text-xl">
      <RouterLink :to="{ name: 'encode' }" v-if="route.name !== 'encode'">
        <Button
          text="Encode"
          background="bg-red-400"
          borderColor="border-red-400"
        />
      </RouterLink>

      <RouterLink :to="{ name: 'decode' }" v-if="route.name !== 'decode'">
        <Button
          text="Decode"
          background="bg-emerald-400"
          borderColor="border-emerald-400"
        />
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import Button from "@/components/Button.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>
