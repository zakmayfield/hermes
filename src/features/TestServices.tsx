"use client";
import { useCart } from "@/shared/hooks/data/useCart";

const testUnitId = "cm4blbulc00049kcos1d4u00t";

export const TestServices = () => {
  const {
    cartQuery,
    createCartItemMutation,
    deleteCartItemMutation,
    upsertCartItemMutation
  } = useCart();

  const { data, isLoading } = cartQuery;

  return (
    <div>
      <h2>Test Services</h2>

      <div>
        <h3>Query Data</h3>

        <p>isLoading: {isLoading ? "true" : "false"}</p>
        <p>Cart ID: {!data ? "null" : data.cartId}</p>
      </div>

      <div>
        <button
          className="btn-ghost"
          onClick={() =>
            createCartItemMutation.mutate({ unitId: testUnitId, quantity: 1 })
          }
        >
          Create Cart Item
        </button>

        <button
          className="btn-ghost"
          onClick={() =>
            upsertCartItemMutation.mutate({ unitId: testUnitId, quantity: 10 })
          }
        >
          Update Cart Item
        </button>

        <button
          className="btn-ghost"
          onClick={() => deleteCartItemMutation.mutate({ unitId: testUnitId })}
        >
          Delete Cart Item
        </button>
      </div>
    </div>
  );
};
