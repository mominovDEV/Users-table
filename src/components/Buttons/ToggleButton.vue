<script setup>
import DeleteModal from '@/components/DeleteModal.vue'
import { ref } from 'vue'
const modal = ref(false)
const changeModal = () => (modal.value = !modal.value)
</script>

<template>
  <DeleteModal :modalFunc="changeModal" :modal="modal" />
  <button
    @click="changeModal"
    class="bg-blue-500/10 text-blue-700 hover:bg-blue-500 hover:text-white duration-300 p-2 px-3 rounded flex items-center justify-center"
  >
    <i class="bx bx-toggle-right"></i>
  </button>
</template>

<style scoped></style>
