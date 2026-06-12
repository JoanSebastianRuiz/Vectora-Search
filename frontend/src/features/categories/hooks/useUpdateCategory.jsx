import { useMutation, useQueryClient } from "@tanstack/react-query";
import { categoriesService } from "../services/categories.service";
import { notifyError, notifySuccess } from "@/utils/notify";

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: categoriesService.update,

    onSuccess: (category) => {
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });

      notifySuccess(
        "Category updated successfully",
        `${category.name} has been updated.`,
      );
    },

    onError: (error) => {
      notifyError("Failed to update category", error);
    },
  });
};
