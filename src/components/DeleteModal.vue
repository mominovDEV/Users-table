<script setup>
defineProps(['modalFunc', 'modal'])
</script>

<template>
  <div
    class="absolute z-50 left-0 w-full h-screen bg-black/50 flex items-center justify-center duration-300"
    :class="!modal ? 'opacity-0 -top-full' : 'top-0 opacity-100'"
  >
    <div class="rounded bg-white w-[470px] p-5">
      <div class="flex items-center justify-between mb-5">
        <span class="font-bold text-xl text-gray-700">Are you sure?</span>
        <i @click="modalFunc" class="bx bx-x text-4xl text-gray-500 cursor-pointer"></i>
      </div>
      <div class="text-end">
        <button @click="modalFunc" class="bg-red-500 text-white p-2.5 px-4 rounded text-sm">
          Yes, I'm sure !
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
