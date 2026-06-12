import { useMutation, useQueryClient } from "@tanstack/react-query";

import { notifyError, notifySuccess } from "@/utils/notify";
import { categoriesService } from "../services/categories.service";

export const useCreateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: categoriesService.create,

    onSuccess: (category) => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });

      notifySuccess(
        "Category created successfully",
        `${category.name} has been added.`,
      );
    },

    onError: (error) => {
      notifyError("Failed to create category", error);
    },
  });
};
