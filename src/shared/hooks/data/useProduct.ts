import { getProducts, getUnits } from "@/data/database/product";
import { Product, Unit } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

export const useProductsQuery = () => {
  const productsQuery = useQuery({
    staleTime: Infinity,
    queryKey: ["products"],
    queryFn: async () =>
      await getProducts<(Product & { units: Unit[] })[]>({ include: { units: true } })
  });

  return productsQuery;
};

export const useUnitsQuery = () => {
  const unitsQuery = useQuery({
    staleTime: Infinity,
    queryKey: ["units"],
    queryFn: async () => await getUnits()
  });

  return unitsQuery;
};
