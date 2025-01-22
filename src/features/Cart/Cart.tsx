"use client";

import { useCart, useCartQuery } from "@/shared/hooks/data/useCart";
import { useOrder } from "@/shared/hooks/data/useOrder";
import { Icon, Pulse } from "@/ui";
import { CartItem, Product } from "@prisma/client";
import React, { useEffect } from "react";

// TODO: *** Cart Tasks ***
// - create order

export const Cart = () => {
  return (
    <div>
      <h1>Cart</h1>

      <CartTable />
    </div>
  );
};

function CartTable() {
  const { data: cart, isLoading } = useCartQuery();
  const { deleteAllCartItemsMutation } = useCart();
  const { createOrderMutation } = useOrder();

  useEffect(() => {
    if (createOrderMutation.isSuccess) {
      deleteAllCartItemsMutation.mutate();
    }
  }, [createOrderMutation.isSuccess]);

  return (
    <div>
      <div className="p-md rounded-lg bg-theme-tertiary flex flex-col gap-lg max-w-2xl">
        <table className="bg-theme-primary p-md rounded-lg border-separate border-spacing-y-3 border-spacing-x-1 w-full">
          <thead>
            <tr>
              <th className="w-4xs" />

              <th
                align="left"
                className="w-sm font-normal"
              >
                Name
              </th>
              <th
                align="left"
                className="w-2xs font-normal"
              >
                Size
              </th>
              <th
                align="left"
                className="w-xs font-normal"
              >
                Quantity
              </th>
            </tr>
          </thead>

          <tbody className="border">
            {isLoading && (
              <tr>
                <td colSpan={4}>
                  <div className="flex flex-col gap-sm">
                    <Pulse />
                    <Pulse />
                  </div>
                </td>
              </tr>
            )}
            {cart?.items.length === 0 && (
              <tr>
                <td colSpan={4}>
                  <div className="flex items-center justify-center p-md">
                    <span className="text-center p-sm px-lg bg-theme-secondary rounded-md">
                      Cart is empty
                    </span>
                  </div>
                </td>
              </tr>
            )}
            {cart?.items.map((cartItem) => (
              <CartItemRow
                key={cartItem.cartItemId}
                cartItem={cartItem}
              />
            ))}
          </tbody>
        </table>

        <div className="p-lg rounded-lg bg-theme-primary">
          <button
            onClick={() => createOrderMutation.mutate({ cartItems: cart?.items || [] })}
            disabled={cart?.items.length === 0 || isLoading}
            className="btn-green w-full"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

function CartItemRow({
  cartItem
}: {
  cartItem: CartItem & {
    product: Product;
  };
}) {
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

    handleToggleEditOff();
  };
  return (
    <tr className="border">
      {/* Remove Item Button */}
      <td align="left">
        <button
          onClick={() => deleteCartItemMutation.mutate({ productId: cartItem.productId })}
          className="bg-theme-secondary"
        >
          <Icon name="x" />
        </button>
      </td>
      {/* Name */}
      <td>
        <div className="p-xs rounded-md bg-theme-secondary">{cartItem.product.name}</div>
      </td>
      {/* Size */}
      <td>
        <div className="p-xs rounded-md bg-theme-secondary">
          {cartItem.product.size ? cartItem.product.size : cartItem.product.description}
        </div>
      </td>
      {/* Quantity */}
      <td>
        <div className="p-xs rounded-md bg-theme-secondary flex items-center gap-sm">
          {/* Current Quantity */}
          <p>x{cartItem.quantity}</p>
          {/* Edit Quantity Button/Input */}
          {!isQuantityEditToggled ? (
            <button
              onClick={handleToggleEditOn}
              className="bg-theme-primary"
            >
              <Icon name="edit" />
            </button>
          ) : (
            <div className="flex items-center gap-xs">
              <input
                type="number"
                value={quantityInput}
                min={1}
                onChange={(e) => handleUpdateQuantityInput(Number(e.target.value))}
                className="p-none px-sm w-4xs"
              />

              <button
                onClick={handleSaveInput}
                disabled={cartItem.quantity === quantityInput}
                className={`py-none hover:bg-theme-primary ${
                  cartItem.quantity === quantityInput ? "bg-theme-primary" : ""
                }`}
              >
                save
              </button>

              <button
                onClick={handleCancelInput}
                className="py-none hover:bg-theme-primary"
              >
                cancel
              </button>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}
