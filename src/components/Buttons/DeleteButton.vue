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
    class="bg-red-500/10 text-red-700 hover:bg-red-500 hover:text-white duration-300 p-2 px-3 rounded flex items-center justify-center"
  >
    <i class="bx bx-trash"></i>
  </button>
</template>

<style scoped></style>
