import { toast } from "sonner";

export const notifySuccess = (message, description) => {
  toast.success(message, {
    description,
  });
};

export const notifyError = (message, error) => {
  toast.error(message, {
    description:
      error?.response?.data?.message || "An unexpected error occurred.",
  });
};
