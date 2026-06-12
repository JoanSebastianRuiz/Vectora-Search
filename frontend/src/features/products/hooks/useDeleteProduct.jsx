import { useMutation, useQueryClient } from "@tanstack/react-query";

import { productsService } from "../services/products.service";
import { notifyError, notifySuccess } from "@/utils/notify";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: productsService.remove,

    onSuccess: (product) => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });

      notifySuccess(
        "Product deleted successfully",
        `${product.name} has been removed.`,
      );
    },

    onError: (error) => {
      notifyError("Failed to delete product", error);
    },
  });
};
