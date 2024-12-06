"use client";
import { useCart } from "@/shared/hooks/data/useCart";
import { useInvoice } from "@/shared/hooks/data/useInvoice";
import { useOrder } from "@/shared/hooks/data/useOrder";

const testUnitIds = ["cm4blbulc00049kcos1d4u00t", "cm4blbul700019kcocaxtlraq"];

export const TestServices = () => {
  const { cartQuery, createCartItemMutation } = useCart();
  const { ordersQuery, createOrderMutation } = useOrder();
  const { invoiceQuery, createInvoiceMutation } = useInvoice();

  const cartItems = cartQuery.data ? cartQuery.data.items : [];
  const orders = ordersQuery.data ? ordersQuery.data : [];

  return (
    <div className="space-y-lg">
      <h2>Test Services</h2>
      <div className="flex flex-col gap-sm">
        <button
          className="btn-ghost"
          onClick={() =>
            testUnitIds.forEach((id) =>
              createCartItemMutation.mutate({ unitId: id, quantity: 1 })
            )
          }
        >
          Create Cart Items
        </button>

        <button
          className="btn-ghost"
          onClick={() => createOrderMutation.mutate({ cartItems })}
        >
          Create Order With Cart Items
        </button>
      </div>

      <div className="flex flex-col gap-sm">
        {orders.map((o) => (
          <button
            key={o.orderId}
            onClick={() => {}}
            className="btn-ghost"
          >
            Create Invoice for {o.orderId}
          </button>
        ))}
      </div>
    </div>
  );
};
