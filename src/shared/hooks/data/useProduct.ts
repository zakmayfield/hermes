import { getProducts } from "@/data/database/product";
import { Product, ProductGroup } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

export const useProductsQuery = () => {
  const productsQuery = useQuery({
    staleTime: Infinity,
    queryKey: ["products"],
    queryFn: async () =>
      await getProducts<(ProductGroup & { products: Product[] })[]>({
        include: { products: true }
      })
  });

  return productsQuery;
};
