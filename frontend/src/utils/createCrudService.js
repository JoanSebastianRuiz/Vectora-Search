import { api } from "@/lib/axios/client";

export const createCrudService = (endpoint) => ({
  getAll: async () => {
    const response = await api.get(endpoint);
    return response.data;
  },

  create: async (data) => {
    const response = await api.post(endpoint, data);
    return response.data;
  },

  update: async (data) => {
    const { id, ...rest } = data;
    const response = await api.put(`${endpoint}/${id}`, rest);
    return response.data;
  },

  remove: async (id) => {
    await api.delete(`${endpoint}/${id}`);
  },
});
