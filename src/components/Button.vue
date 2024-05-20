<template>
  <button
    :class="[
      'border',
      background,
      'rounded-md',
      'py-2',
      'px-3',
      'transition-all',
      'hover:brightness-50',
      borderColor,
      'text-white',
    ]"
  >
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: String,
  background: String,
  borderColor: String,
});
</script>
