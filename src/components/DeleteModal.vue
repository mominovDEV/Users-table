<script setup>
import { ref } from "vue";
import { userStore } from "@/stores/users";

const store = userStore();
const modal = ref(false);
let user_id;
const openModal = (id) => {
  modal.value = true;
  user_id = id;
};
const deleteUser = async () => {
  await store.deleteUser(user_id);
  modal.value = false;
};
defineExpose({ openModal });
</script>

<template>
  <div
    class="z-50 left-0 w-full h-screen bg-black/50 flex items-center justify-center duration-300 fixed"
    :class="!modal ? 'opacity-0 -top-full' : 'top-0 opacity-100'"
  >
    <div class="rounded bg-white w-[470px] p-5">
      <div class="flex items-center justify-between mb-5">
        <span class="font-bold text-xl text-gray-700">Are you sure?</span>
        <i
          @click="modal = false"
          class="bx bx-x text-4xl text-gray-500 cursor-pointer"
        ></i>
      </div>
      <div class="text-end">
        <button
          @click="deleteUser"
          class="bg-red-500 text-white p-2.5 px-4 rounded text-sm"
        >
          Yes, I'm sure !
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
