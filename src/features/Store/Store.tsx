"use client";

import { useDialog } from "@/shared/components";
import { useCart, useCartQuery } from "@/shared/hooks/data/useCart";
import { useProductsQuery } from "@/shared/hooks/data/useProduct";
import { Pulse } from "@/ui";
import { Product, Unit } from "@prisma/client";
import React, { useEffect } from "react";
import Select from "react-select";

export const Store = () => {
  const productQuery = useProductsQuery();
  useCartQuery();

  return (
    <div className="p-lg bg-theme-primary rounded-lg">
      {productQuery.isLoading ? (
        <Pulse size="lg" />
      ) : productQuery.isError ? (
        <div>There was an error accessing the store.</div>
      ) : productQuery.data?.length === 0 ? (
        <div>No products</div>
      ) : (
        <div className="flex flex-col gap-md">
          {productQuery.data?.map((p) => (
            <ProductCard
              key={p.productId}
              product={p}
            />
          ))}
        </div>
      )}
    </div>
  );
};

function ProductCard({ product }: { product: Product & { units: Unit[] } }) {
  const [selectedUnitId, setSelectedUnitId] = React.useState<string | null>(null);
  const { createCartItemMutation } = useCart();

  useEffect(() => {
    console.log(selectedUnitId);
  }, [selectedUnitId]);

  const {
    Dialog,
    isOpen,
    methods: { handleClose, handleOpen }
  } = useDialog();

  return (
    <div>
      <div
        onClick={handleOpen}
        className="flex items-center gap-md p-xs rounded-lg bg-theme-secondary cursor-pointer"
      >
        <p>{product.name}</p>
        <p>{product.category}</p>
      </div>

      <Dialog
        state={{ isOpen, handleClose }}
        options={{ place: "top-center" }}
        className="flex flex-col gap-lg"
      >
        <div className="flex flex-col gap-sm">
          <div>
            <h2>{product.name}</h2>
            <p className="opacity-75">{product.category}</p>
          </div>

          <div className="flex flex-col gap-sm">
            <h3>Select a size</h3>

            {/* {product.units.map((unit) => (
              <div className="flex items-center justify-between gap-md bg-theme-secondary p-xs rounded-md">
                <p className="min-w-3xs">{unit.size}</p>

                <button className="btn-green px-md py-xs">
                  <Icon name="cart" />
                </button>
              </div>
            ))} */}

            <Select
              className="dark:text-background"
              onChange={(d) => setSelectedUnitId(d?.value || null)}
              options={product.units.map((u) => ({ value: u.unitId, label: u.size }))}
            />
          </div>
        </div>

        <div className="flex items-center gap-md">
          <button
            onClick={handleClose}
            className="btn-green flex-1"
          >
            Add To Cart
          </button>
          <button
            onClick={handleClose}
            className="btn-red ml-auto"
          >
            Cancel
          </button>
        </div>
      </Dialog>
    </div>
  );
}
