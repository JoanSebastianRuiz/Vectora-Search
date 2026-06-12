import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";

import Form from "@/components/form/Form";

const schema = z.object({
  name: z
    .string()
    .min(3, "Name must contain at least 3 characters")
    .max(100, "Name cannot exceed 100 characters"),
});

const CategoriesForm = ({ selectedItem, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: selectedItem?.name ?? "",
    },
  });

  const formConfigs = [
    {
      name: "name",
      label: "Name",
      input: (
        <Input
          {...register("name")}
          placeholder="Enter a name"
          disabled={isSubmitting}
        />
      ),
    },
  ];

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      isSubmitting={isSubmitting}
      selectedItem={selectedItem}
      formConfigs={formConfigs}
      errors={errors}
    />
  );
};

export default CategoriesForm;
