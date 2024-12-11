"use client";

import { useCartQuery } from "@/shared/hooks/data/useCart";
import { useOrder } from "@/shared/hooks/data/useOrder";
import { Pulse } from "@/ui";
import { CartItem, Product } from "@prisma/client";

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
  return (
    <div className="bg-theme-secondary rounded-md p-xs">
      <div className="flex items-center gap-xs">
        <p className="min-w-3xs">{cartItem.product.name}</p>
        <p className="min-w-3xs">
          {cartItem.product.size ? cartItem.product.size : cartItem.product.description}
        </p>
        <p>x{cartItem.quantity}</p>
      </div>
    </div>
  );
}
