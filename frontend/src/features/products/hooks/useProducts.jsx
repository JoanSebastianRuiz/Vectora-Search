import { useQuery } from "@tanstack/react-query";

import { productsService } from "../services/products.service";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: productsService.getAll,
  });
};
