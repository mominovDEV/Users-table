<template>
  <div class="p-20">
    <div class="flex items-center justify-between mb-5">
      <div
        class="absolute z-50 left-0 w-full h-screen bg-black/50 flex items-center justify-center duration-300"
        :class="!modal ? 'opacity-0 -top-full' : 'top-0 opacity-100'"
      >
        <div class="rounded bg-white w-[470px] p-5">
          <div>
            <div class="flex items-center justify-between mb-5">
              <span class="font-bold text-xl text-gray-700">Are you sure?</span>
              <i
                @click="changeModal"
                class="bx bx-x text-4xl text-gray-500 cursor-pointer"
              ></i>
            </div>
            <div class="mt-2">
              <input
                v-model="firstName"
                type="text"
                autocomplete="off"
                placeholder="First Name"
                required
              />
              <input
                v-model="lastName"
                type="text"
                autocomplete="off"
                placeholder="Last Name"
                required
              />
              <input
                v-model="phone"
                type="number"
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
              Add
            </button>
          </div>
        </div>
      </div>
      <button
        @click="changeModal"
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
          <tr v-for="user in users" :key="user.id">
            <td class="px-5 py-3">{{ user.id }}</td>
            <td class="px-5 py-3">{{ user.first_name }}</td>
            <td class="px-5 py-3">{{ user.last_name }}</td>
            <td class="px-5 py-3">{{ user.phone }}</td>
            <td class="px-5 py-4 whitespace-nowrap">
              <div class="flex gap-2">
                <router-link to="/user">
                  <ViewButton />
                </router-link>
                <router-link to="/user-add">
                  <EditButton />
                </router-link>
                <DeleteButton />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import ViewButton from "../components/Buttons/ViewButton.vue";
import DeleteButton from "../components/Buttons/DeleteButton.vue";
import EditButton from "../components/Buttons/EditButton.vue";
// add
import AddModal from "../components/AddModal.vue";
const modal = ref(false);
const changeModal = () => (modal.value = !modal.value);
const users = ref([]);
const baseURL = "http://127.0.0.1:3000/users";
// const addUser = ()=>{
//     const res = await axios.post(baseURL, { first_name: this.FirstName });

//     this.users = [...this.users, res.data];

//     this.FirstName = "",
// }

// const addUser = () => {
//   const userData = { first_name: firstName.value, last_name: lastName.value, phone: phone.value };
//   users.value = [...users.value, userData];
//   changeModal();
// };

const addUser = async () => {
  try {
    const userData = {
      first_name: firstName.value,
      last_name: lastName.value,
      phone: phone.value
    };

    const res = await axios.post(baseURL, userData);

    users.value = [...users.value, res.data];

    firstName.value = '';
    lastName.value = '';
    phone.value = '';

    changeModal();
  } catch (error) {
    console.error(error);
  }
};
// add

const fetchData = async () => {
  try {
    const res = await axios.get(baseURL);
    users.value = res.data;
  } catch (e) {
    console.error(e);
  }
};

onMounted(() => {
  fetchData();
});
</script>


<style scoped>
</style>
