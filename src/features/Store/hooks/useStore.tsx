import { useProductsQuery } from "@/shared/hooks/data/useProduct";
import React from "react";
import { SingleValue } from "react-select";

export const useStore = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const [pageSize, setPageSize] = React.useState(2);
  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(e.target.value));
    if (pageSize !== Number(e.target.value)) {
      setCurrentPage(1);
    }
  };

  const [filterInput, setFilterInput] = React.useState("");
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFilterInput(e.target.value);
    setCurrentPage(1);
  };

  const [filterCategory, setFilterCategory] = React.useState<string | null>(null);
  const handleCategoryFilterChange = (
    data: SingleValue<{
      value: string;
      label: string;
    }>
  ) => {
    setFilterCategory(data?.value ? data.value : null);
  };

  const { data, isLoading } = useProductsQuery(
    currentPage,
    pageSize,
    filterCategory,
    filterInput
  );

  const productsData = data?.products;
  const totalCount = data?.totalCount || 0;
  const totalPages = Math.ceil(totalCount / pageSize);

  return {
    products: {
      data: productsData,
      isLoading
    },
    pagination: {
      totalPages,
      currentPage,
      handlePageChange,
      pageSize,
      handlePageSizeChange
    },
    filter: {
      filterInput,
      handleFilterChange,
      handleCategoryFilterChange
    }
  };
};
