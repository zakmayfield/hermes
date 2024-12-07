"use client";

import { useCart, useCartQuery } from "@/shared/hooks/data/useCart";
import { useProductsQuery } from "@/shared/hooks/data/useProduct";
import { useModal } from "@/shared/hooks/ui";
import { Icon, Pulse } from "@/ui";
import { Product, Unit } from "@prisma/client";

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
  const { createCartItemMutation } = useCart();
  const { Modal, isModalOpen, handleOpenModal, handleCancelModal } = useModal();

  return (
    <div>
      <div
        onClick={handleOpenModal}
        className="flex items-center gap-md p-xs rounded-lg bg-theme-secondary border cursor-pointer"
      >
        <p>{product.name}</p>
        <p>{product.category}</p>
      </div>

      {isModalOpen && (
        <Modal handleCancelModal={handleCancelModal}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-theme-primary p-lg rounded-lg min-w-md absolute top-[5rem]"
          >
            <div className="flex items-center justify-between">
              <h2>{product.name}</h2>

              <div
                onClick={handleCancelModal}
                className="inline-block px-sm py-xs rounded-md hover:bg-theme-secondary/25 cursor-pointer"
              >
                <Icon
                  name="xCircle"
                  style={{ fontSize: "2xl" }}
                />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
