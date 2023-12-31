<template>
  <div class="p-20">
    <div class="flex items-center justify-between mb-5">
      <AddModal ref="add_modal"></AddModal>
      <DeleteModal ref="delete_modal"></DeleteModal>
      <button
        @click="openAddModal()"
        class="flex items-center gap-2 bg-teal-700 rounded px-5 p-2 text-white"
      >
        <i class="bx bx-plus"></i>
        <span>Add users</span>
      </button>
      <h2 class="px-5 py-3 font-bold text-2xl text-gray-600">Users tables</h2>
      <div class="relative w-72 h-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <i class="bx bx-search text-gray-500 text-xl"></i>
        </div>
        <input
          type="text"
          autocomplete="off"
          class="outline-none block w-full h-full p-3 pl-10 text-sm text-gray-900 rounded bg-white border border-gray-300 ring-0 focus:ring-0 focus:border-gray-400"
          placeholder="Search for result"
          required
        />
      </div>
    </div>
    <div class="mb-5 overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-left">
        <thead class="text-sm text-gray-500 uppercase bg-white">
          <tr>
            <th class="px-5 py-3 font-bold">ID</th>
            <th class="px-5 py-3 font-bold">First name</th>
            <th class="px-5 py-3 font-bold">Last Name</th>
            <th class="px-5 py-3 font-bold">Phone</th>
            <th class="px-5 py-3 font-bold">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in store.users" :key="user.id">
            <td class="px-5 py-3">{{ user.id }}</td>
            <td class="px-5 py-3">{{ user.first_name }}</td>
            <td class="px-5 py-3">{{ user.last_name }}</td>
            <td class="px-5 py-3">{{ user.phone }}</td>
            <td class="px-5 py-4 whitespace-nowrap">
              <div class="flex gap-2">
                <ViewButton @click="$router.push(`/users/${user.id}`)" />
                <EditButton @click="openAddModal(user)" />
                <DeleteButton @click="openDeleteModal(user.id)"></DeleteButton>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import ViewButton from "../components/Buttons/ViewButton.vue";
import DeleteButton from "../components/Buttons/DeleteButton.vue";
import EditButton from "../components/Buttons/EditButton.vue";
import AddModal from "../components/AddModal.vue";
import DeleteModal from "../components/DeleteModal.vue";
import { userStore } from "../stores/users";

const store = userStore();

const add_modal = ref();
const delete_modal = ref();

const openAddModal = (user) => {
  add_modal.value.openModal(user);
};

const openDeleteModal = (id) => {
  delete_modal.value.openModal(id);
};

onMounted(async () => {
  await store.getUsers();
});
</script>

<style scoped></style>
