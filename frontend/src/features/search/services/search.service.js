import { api } from "@/lib/axios/client";

export const getProducts = async (query) => {
  const response = await api.post("/products/search", { query });
  return response.data;
};
