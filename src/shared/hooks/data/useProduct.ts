import { getProducts } from "@/data/database/product";
import { Product, ProductGroup } from "@prisma/client";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

export const useProductsQuery = (
  page: number,
  pageSize: number,
  filterCategory: string | null,
  filterInput?: string
) => {
  const filter = filterInput;
  const category = filterCategory;
  const take = pageSize;
  const skip = (page - 1) * pageSize;

  const productsQuery = useQuery({
    staleTime: 1000 * 60 * 60,
    queryKey: [
      "products",
      `page:${page}-pageSize:${pageSize}`,
      `filter--name:${filter ? filter : "*"}-category:${category ? category : "*"}`
    ],
    queryFn: async () =>
      await getProducts<(ProductGroup & { products: Product[] })[]>({
        take,
        skip,
        where: {
          category: category ? category : undefined,
          AND: filter?.split("").map((char) => ({
            name: { contains: char.trim(), mode: "insensitive" }
          }))
        },
        include: { products: { orderBy: { price: "asc" } } }
      }),
    placeholderData: keepPreviousData
  });

  return productsQuery;
};
