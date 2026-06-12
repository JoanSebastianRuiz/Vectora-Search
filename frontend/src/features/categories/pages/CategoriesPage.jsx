import CrudPage from "@/components/crud/CrudPage";
import { useCategories } from "../hooks/useCategories";
import CategoriesForm from "../components/CategoriesForm";
import { useCategoriesColumns } from "../hooks/useCategoriesColumns";
import { useCreateCategory } from "../hooks/useCreateCategory";
import { useUpdateCategory } from "../hooks/useUpdateCategory";
import { useDeleteCategory } from "../hooks/useDeleteCategory";

const CategoriesPage = () => {
  return (
    <CrudPage
      title="Categories"
      createLabel="Create Category"
      editLabel="Edit Category"
      useColumns={useCategoriesColumns}
      useData={useCategories}
      useCreate={useCreateCategory}
      useUpdate={useUpdateCategory}
      useDelete={useDeleteCategory}
      formComponent={CategoriesForm}
    />
  );
};

export default CategoriesPage;
