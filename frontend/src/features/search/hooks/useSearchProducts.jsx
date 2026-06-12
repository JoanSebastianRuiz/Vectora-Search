import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "../services/search.service";

export const useSearchProducts = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: getProducts,

    onSuccess: (data, query) => {
      queryClient.setQueryData(["products", "search", query], data);
    },
  });
};
