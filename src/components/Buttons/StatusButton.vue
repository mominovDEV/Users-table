<script setup>
defineProps(['text', 'bg', 'color', 'pad'])
</script>

<template>
  <span
    class="text-center rounded"
    :class="`${bg} ${color} ${pad ? pad : 'text-xs p-1 px-2'}`"
    v-html="text"
  ></span>
</template>

<style scoped></style>
