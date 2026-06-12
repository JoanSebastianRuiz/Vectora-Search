import { Navigate } from "react-router-dom";
import SearchPage from "./features/search/pages/SearchPage";
import MainLayout from "./layouts/MainLayout";
import ProductsPage from "./features/products/pages/ProductsPage";
import CategoriesPage from "./features/categories/pages/CategoriesPage";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <SearchPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/categories",
        element: <CategoriesPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];

export default routes;
