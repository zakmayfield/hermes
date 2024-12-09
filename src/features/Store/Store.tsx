"use client";

import React from "react";
import { Product, ProductGroup } from "@prisma/client";
import { Pulse } from "@/ui";
import { useDialog } from "@/shared/components";
import { useCart, useCartQuery } from "@/shared/hooks/data/useCart";
import { useProductsQuery } from "@/shared/hooks/data/useProduct";
import Select, { SingleValue } from "react-select";

export const Store = () => {
  const { data: products, ...productQuery } = useProductsQuery();
  useCartQuery();

  const { createCartItemMutation } = useCart();
  const handleAddToCart = (productId: string) => createCartItemMutation.mutate(productId);

  return (
    <div>
      {productQuery.isLoading ? (
        <Pulse />
      ) : productQuery.isError ? (
        <div>{productQuery.error.message}</div>
      ) : (
        <div>
          <h2>Products</h2>

          {products?.map((group) => (
            <ProductCard
              key={group.productGroupId}
              productGroup={group}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

function ProductCard({
  productGroup,
  handleAddToCart
}: {
  productGroup: ProductGroup & { products: Product[] };
  handleAddToCart: (productId: string) => void;
}) {
  const {
    Dialog,
    isOpen,
    methods: { handleClose, handleOpen }
  } = useDialog();

  return (
    <div key={productGroup.productGroupId}>
      <div onClick={handleOpen}>
        <h2>{productGroup.name}</h2>
      </div>

      <Dialog
        state={{ isOpen, handleClose }}
        options={{ place: "top-center" }}
      >
        <ProductDialog
          productGroup={productGroup}
          handleClose={handleClose}
          handleAddToCart={handleAddToCart}
        />
      </Dialog>
    </div>
  );
}

function ProductDialog({
  productGroup,
  handleClose,
  handleAddToCart
}: {
  productGroup: ProductGroup & { products: Product[] };
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
    const product = productGroup.products.find((p) => p.code === data?.value);
    setSelectedProduct(product ? product : null);
  };

  return (
    <div className="flex flex-col gap-md">
      <div>
        <h2>{productGroup.name}</h2>
        <p>
          {productGroup.category.charAt(0).toUpperCase() + productGroup.category.slice(1)}
        </p>
      </div>

      <div className="flex flex-col gap-xs">
        <h3>Select a Size</h3>
        <Select
          className="dark:text-background"
          isClearable={true}
          onChange={(data) => handleSelectProduct(data)}
          options={productGroup.products.map((p) => ({
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
