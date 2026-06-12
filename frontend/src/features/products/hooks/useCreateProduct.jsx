import { useMutation, useQueryClient } from "@tanstack/react-query";

import { productsService } from "../services/products.service";
import { notifyError, notifySuccess } from "@/utils/notify";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: productsService.create,

    onSuccess: (product) => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });

      notifySuccess(
        "Product created successfully",
        `${product.name} has been added.`,
      );
    },

    onError: (error) => {
      notifyError("Failed to create product", error);
    },
  });
};
