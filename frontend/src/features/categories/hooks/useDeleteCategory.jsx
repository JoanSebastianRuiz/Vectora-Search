import { useMutation, useQueryClient } from "@tanstack/react-query";

import { notifyError, notifySuccess } from "@/utils/notify";
import { categoriesService } from "../services/categories.service";

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: categoriesService.remove,

    onSuccess: (category) => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });

      notifySuccess(
        "Category deleted successfully",
        `${category.name} has been removed.`,
      );
    },

    onError: (error) => {
      notifyError("Failed to delete category", error);
    },
  });
};
