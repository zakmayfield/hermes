"use client";

import React from "react";
import { Product, ProductGroup } from "@prisma/client";
import { useDialog } from "@/shared/components";
import { useCart, useCartQuery } from "@/shared/hooks/data/useCart";
import Select, { SingleValue } from "react-select";
import categories from "../../../prisma/data/categories.json";
import { Icon } from "@/ui";
import { useStore } from "./hooks/useStore";

export const Store = () => {
  const { products, pagination, filter } = useStore();
  useCartQuery();

  return (
    <div>
      <div>
        <h2>Products</h2>

        <ProductTable
          products={products}
          pagination={pagination}
          filter={filter}
        />
      </div>
    </div>
  );
};

function ProductTable({
  products,
  pagination,
  filter
}: {
  products: { data?: (ProductGroup & { products: Product[] })[] };
  pagination: {
    totalPages: number;
    currentPage: number;
    handlePageChange: (page: number) => void;
    pageSize: number;
    handlePageSizeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  };
  filter: {
    filterInput: string;
    handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleCategoryFilterChange: (
      data: SingleValue<{
        value: string;
        label: string;
      }>
    ) => void;
  };
}) {
  const { data } = products;
  const { totalPages, currentPage, handlePageChange, pageSize, handlePageSizeChange } =
    pagination;
  const { filterInput, handleFilterChange, handleCategoryFilterChange } = filter;

  const { createCartItemMutation } = useCart();
  const handleAddToCart = (productId: string) => createCartItemMutation.mutate(productId);

  const [selectedProductGroup, setSelectedProductGroup] = React.useState<
    (ProductGroup & { products: Product[] }) | null
  >();

  const handleSetDialogGroup = (productGroup: ProductGroup & { products: Product[] }) => {
    setSelectedProductGroup(productGroup);
    handleOpen();
  };

  const handleClearDialogGroup = () => {
    setSelectedProductGroup(null);
    handleClose();
  };

  const {
    Dialog,
    isOpen,
    methods: { handleOpen, handleClose }
  } = useDialog();
  return (
    <div className="flex flex-col gap-md">
      <table className="max-w-lg">
        <thead className="border">
          <tr>
            <th className="border w-2/3 text-left p-xs">
              <input
                placeholder="Name"
                type="text"
                name="filter"
                id="filter"
                value={filterInput}
                onChange={handleFilterChange}
                className="w-full bg-theme-tertiary/35 focus:bg-theme-tertiary/75 dark:text-foreground"
              />
            </th>
            <th className="border text-left p-xs">
              <Select
                id="category-select"
                placeholder="Category"
                isClearable={true}
                className="text-background"
                onChange={(data) => handleCategoryFilterChange(data)}
                options={categories.map((c) => ({ value: c, label: c }))}
              />
            </th>
          </tr>
        </thead>

        <tbody className="border">
          {data?.map((group) => (
            <ProductRow
              key={group.productGroupId}
              productGroup={group}
              handleSetDialogGroup={handleSetDialogGroup}
            />
          ))}
        </tbody>
      </table>

      <div className="flex items-center gap-md">
        <div className="flex items-center gap-xs">
          <button
            className="btn-ghost"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {"<<"}
          </button>

          <span className="min-w-3xs text-center">
            Page {currentPage} of{" "}
            {totalPages === 0 ? (
              <Icon
                name="spin"
                style={{ className: "animate-spin inline" }}
              />
            ) : (
              totalPages
            )}
          </span>

          <button
            className="btn-ghost"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            {">>"}
          </button>
        </div>

        <div className="flex items-center gap-xs">
          <span>Show</span>
          <select
            name="show"
            id="show"
            value={pageSize}
            onChange={(e) => handlePageSizeChange(e)}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
          </select>
        </div>
      </div>

      <Dialog
        state={{ handleClose: handleClearDialogGroup, isOpen }}
        options={{ place: "top-center" }}
      >
        <ProductDialog
          productGroup={selectedProductGroup}
          handleClose={handleClearDialogGroup}
          handleAddToCart={handleAddToCart}
        />
      </Dialog>
    </div>
  );
}

function ProductRow({
  productGroup,
  handleSetDialogGroup
}: {
  productGroup: ProductGroup & { products: Product[] };
  handleSetDialogGroup: (productGroup: ProductGroup & { products: Product[] }) => void;
}) {
  return (
    <tr
      className="odd:bg-theme-secondary/50"
      onClick={() => handleSetDialogGroup(productGroup)}
    >
      <td className="p-xs">{productGroup.name}</td>
      <td className="p-xs">{productGroup.category}</td>
    </tr>
  );
}

function ProductDialog({
  productGroup,
  handleClose,
  handleAddToCart
}: {
  productGroup: (ProductGroup & { products: Product[] }) | undefined | null;
  handleClose?: () => void;
  handleAddToCart: (productId: string) => void;
}) {
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);

  const handleSelectProduct = (
    data: SingleValue<{
      value: string;
      label: string;
    }>
  ) => {
    const product = productGroup?.products.find((p) => p.code === data?.value);
    setSelectedProduct(product ? product : null);
  };

  return (
    <div className="flex flex-col gap-md">
      <div>
        <h2>{productGroup?.name}</h2>
        <p>
          {`${productGroup?.category
            .charAt(0)
            .toUpperCase()}${productGroup?.category.slice(1)}`}
        </p>
      </div>

      <div className="flex flex-col gap-xs">
        <h3>Select a Size</h3>
        <Select
          className="dark:text-background"
          isClearable={true}
          onChange={(data) => handleSelectProduct(data)}
          options={productGroup?.products.map((p) => ({
            value: p.code,
            label: p.size ? p.size : p.description
          }))}
        />
      </div>

      <div className="flex items-center gap-md">
        <button
          disabled={!selectedProduct}
          className="btn-green flex-1"
          onClick={() => handleAddToCart(selectedProduct?.productId || "")}
        >
          Add to Cart
        </button>

        <button
          className="btn-red"
          onClick={handleClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
