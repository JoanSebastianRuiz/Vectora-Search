import { useProductsColumns } from "../hooks/useProductsColumns";
import { useProducts } from "../hooks/useProducts";
import CrudPage from "@/components/crud/CrudPage";
import ProductsForm from "../components/ProductsForm";
import { useCreateProduct } from "../hooks/useCreateProduct";
import { useUpdateProduct } from "../hooks/useUpdateProduct";
import { useDeleteProduct } from "../hooks/useDeleteProduct";

const ProductsPage = () => {
  return (
    <CrudPage
      title="Products"
      createLabel="Create Product"
      editLabel="Edit Product"
      useColumns={useProductsColumns}
      useData={useProducts}
      useCreate={useCreateProduct}
      useUpdate={useUpdateProduct}
      useDelete={useDeleteProduct}
      formComponent={ProductsForm}
    />
  );
};

export default ProductsPage;
