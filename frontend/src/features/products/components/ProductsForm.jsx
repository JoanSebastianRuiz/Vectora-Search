import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";

import CategoryCombobox from "./CategoryCombobox";
import { NumericFormat } from "react-number-format";
import { Textarea } from "@/components/ui/textarea";
import Form from "@/components/form/Form";
import { useCategories } from "@/features/categories/hooks/useCategories";

const schema = z.object({
  name: z
    .string()
    .min(3, "Name must contain at least 3 characters")
    .max(100, "Name cannot exceed 100 characters"),

  description: z
    .string()
    .max(200, "Description cannot exceed 200 characters")
    .optional(),

  category_id: z.coerce.number("Required").positive("Category is required"),

  price: z.coerce.number("Required").positive("Price must be greater than 0"),
});

const ProductsForm = ({ selectedItem, onSubmit }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: selectedItem?.name ?? "",
      description: selectedItem?.description ?? "",
      category_id: selectedItem?.category?.id ?? "",
      price: selectedItem?.price ?? "",
    },
  });

  const { data: categories = [] } = useCategories();

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
    {
      name: "description",
      label: "Description",
      input: (
        <Textarea
          {...register("description")}
          placeholder="Enter a description"
          disabled={isSubmitting}
          rows={4}
        />
      ),
    },
    {
      name: "category_id",
      label: "Category",
      input: (
        <Controller
          name="category_id"
          control={control}
          render={({ field }) => (
            <CategoryCombobox
              categories={categories}
              value={field.value}
              onChange={field.onChange}
              disabled={isSubmitting}
            />
          )}
        />
      ),
    },
    {
      name: "price",
      label: "Price",
      input: (
        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <NumericFormat
              customInput={Input}
              thousandSeparator
              decimalScale={0}
              fixedDecimalScale
              value={field.value}
              prefix="USD "
              onValueChange={(values) => {
                field.onChange(values.floatValue ?? "");
              }}
              placeholder="Enter a price"
              disabled={isSubmitting}
            />
          )}
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

export default ProductsForm;
