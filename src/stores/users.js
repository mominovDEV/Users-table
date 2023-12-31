import axios from "axios";
import { defineStore } from "pinia";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

export const userStore = defineStore("users_store", {
  state: () => ({
    users: [],
    user: {},
  }),
  actions: {
    async addUser(payload) {
      const response = await axiosClient.post("/users", payload);
      this.users.push(response.data);
    },

    async getUsers() {
      const response = await axiosClient.get("/users");
      this.users = response.data;
    },

    async getUser(id) {
      const response = await axiosClient.get("/users/" + id);
      this.user = response.data;
    },

    async deleteUser(id) {
      await axiosClient.delete(`/users/${id}`);
      await this.getUsers();
    },

    async updateUser(id, payload) {
      await axiosClient.put(`/users/${id}`, payload);
      await this.getUsers();
    },
  },
});
