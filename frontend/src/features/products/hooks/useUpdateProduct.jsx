import { useMutation, useQueryClient } from "@tanstack/react-query";

import { productsService } from "../services/products.service";
import { notifyError, notifySuccess } from "@/utils/notify";

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: productsService.update,

    onSuccess: (product) => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });

      notifySuccess(
        "Product updated successfully",
        `${product.name} has been updated.`,
      );
    },

    onError: (error) => {
      notifyError("Failed to update product", error);
    },
  });
};
