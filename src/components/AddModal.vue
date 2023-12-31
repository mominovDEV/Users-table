<template>
  <div
    class="fixed z-50 left-0 w-full h-screen bg-black/50 flex items-center justify-center duration-300"
    :class="!modal ? 'opacity-0 -top-full' : 'top-0 opacity-100'"
  >
    <div class="rounded bg-white w-[470px] p-5">
      <div>
        <div class="flex items-center justify-between mb-5">
          <span class="font-bold text-xl text-gray-700">Are you sure?</span>
          <i
            @click="modal = false"
            class="bx bx-x text-4xl text-gray-500 cursor-pointer"
          ></i>
        </div>
        <div class="mt-2">
          <input
            v-model="form.first_name"
            type="text"
            autocomplete="off"
            placeholder="First Name"
            required
          />
          <input
            v-model="form.last_name"
            type="text"
            autocomplete="off"
            placeholder="Last Name"
            required
          />
          <input
            v-model="form.phone"
            type="text"
            autocomplete="off"
            placeholder="Phone Number"
            required
          />
        </div>
      </div>
      <div class="text-end">
        <button
          @click="addUser"
          class="bg-green-500 text-white p-2.5 px-4 rounded text-sm"
        >
          {{ !edit ? "Add" : "Save" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { userStore } from "../stores/users";

const store = userStore();
const modal = ref(false);
const edit = ref(false);
const user_id = ref();

const form = reactive({
  first_name: "",
  last_name: "",
  phone: "",
});

const addUser = async () => {
  if (!user_id.value) {
    await store.addUser(form);
  } else {
    await store.updateUser(user_id.value, form);
  }
  modal.value = false;
};

const openModal = (user) => {
  modal.value = true;
  user_id.value = null;
  form.first_name = "";
  form.last_name = "";
  form.phone = "";
  edit.value = false;
  if (user) {
    user_id.value = user.id;
    form.first_name = user?.first_name;
    form.last_name = user?.last_name;
    form.phone = user?.phone;
    edit.value = true;
  }
};

defineExpose({ openModal });
</script>

<style scoped></style>
