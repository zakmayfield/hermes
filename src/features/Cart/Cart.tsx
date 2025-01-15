"use client";

import { useCart, useCartQuery } from "@/shared/hooks/data/useCart";
import { useOrder } from "@/shared/hooks/data/useOrder";
import { Icon, Pulse } from "@/ui";
import { CartItem, Product } from "@prisma/client";
import React from "react";

export const Cart = () => {
  const { data: cart, isLoading, error } = useCartQuery();
  const { createOrderMutation } = useOrder();

  return (
    <div className="flex flex-col gap-md">
      <h1>Cart</h1>

      <div className="bg-theme-primary p-lg rounded-lg">
        {isLoading ? (
          <Pulse />
        ) : error ? (
          <div>{error.message}</div>
        ) : (
          <div className="flex flex-col gap-sm">
            {cart?.items.map((i) => (
              <CartItemCard
                key={i.cartItemId}
                cartItem={i}
              />
            ))}
          </div>
        )}
      </div>

      <button
        disabled={cart?.items.length === 0}
        className="btn-green"
        onClick={() =>
          createOrderMutation.mutate({ cartItems: cart?.items ? cart.items : [] })
        }
      >
        Place Order
      </button>
    </div>
  );
};

function CartItemCard({ cartItem }: { cartItem: CartItem & { product: Product } }) {
  const { deleteCartItemMutation, upsertCartItemMutation } = useCart();

  // UPDATE QUANTITY
  // ----- quantity input toggled state
  const [isQuantityEditToggled, setIsQuantityEditToggled] = React.useState(false);

  // ----- toggle edit
  const handleToggleEditOn = () => {
    setIsQuantityEditToggled(true);
  };
  const handleToggleEditOff = () => {
    setIsQuantityEditToggled(false);
  };

  // ----- quantity input state
  const [quantityInput, setQuantityInput] = React.useState(() => cartItem.quantity);

  // ----- update input state
  const handleUpdateQuantityInput = (quantity: number) => {
    setQuantityInput(quantity);
  };

  // ----- cancel input
  const handleCancelInput = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    handleUpdateQuantityInput(cartItem.quantity);
    handleToggleEditOff();
  };

  // ----- mutate item quantity
  const handleSaveInput = () => {
    upsertCartItemMutation.mutate({
      productId: cartItem.productId,
      quantity: quantityInput
    });

    if (upsertCartItemMutation.isSuccess) {
      handleToggleEditOff();
    }
  };

  return (
    <div className="bg-theme-secondary rounded-md p-xs flex gap-sm items-center min-h-4xs">
      <button
        className="hover:bg-theme-primary/50"
        onClick={() => deleteCartItemMutation.mutate({ productId: cartItem.productId })}
      >
        <Icon name="x" />
      </button>

      <div className="flex items-center gap-xs">
        <p className="min-w-3xs">{cartItem.product.name}</p>

        <p className="min-w-3xs">
          {cartItem.product.size ? cartItem.product.size : cartItem.product.description}
        </p>

        <div className="flex items-center gap-sm">
          <div className="flex items-center">
            <span>x</span>

            <span className="ml-1 mr-3">{cartItem.quantity}</span>

            {!isQuantityEditToggled && (
              <span>
                <button
                  onClick={handleToggleEditOn}
                  className="bg-theme-primary/50"
                >
                  <Icon name="edit" />
                </button>
              </span>
            )}
          </div>

          {isQuantityEditToggled && (
            <div className="flex items-center gap-xs">
              <input
                type="number"
                min={1}
                value={quantityInput}
                onChange={(e) => handleUpdateQuantityInput(Number(e.target.value))}
                className="max-w-4xs"
              />

              <button
                onClick={handleSaveInput}
                disabled={cartItem.quantity === quantityInput}
                className={`hover:bg-theme-primary/50 ${
                  cartItem.quantity === quantityInput ? "bg-theme-primary/50" : ""
                }`}
              >
                save
              </button>
              <button
                onClick={handleCancelInput}
                className="hover:bg-theme-primary/50"
              >
                cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
