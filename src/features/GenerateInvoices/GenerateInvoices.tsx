"use client";

import { getOrders } from "@/data/database/order";
import { $Enums, Order, OrderItem } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createInvoice } from "@/data/qb/invoice";
import { useToast } from "@/shared/hooks/ui";

export const GenerateInvoices = () => {
  const { data: order } = useQuery({
    staleTime: Infinity,
    queryKey: ["orders", $Enums.OrderStatus.INVOICE_PENDING],
    queryFn: async () =>
      getOrders<(Order & { items: OrderItem[] })[]>({
        where: { status: $Enums.OrderStatus.INVOICE_PENDING }
      })
  });

  return (
    <div className="bg-theme-primary p-lg rounded-lg flex flex-col gap-md">
      <div className="flex items-center gap-md justify-between">
        <h2>Gen Invoices</h2>
        <button className="btn-ghost">Generate All</button>
      </div>

      <div className="flex flex-col gap-md">
        {order?.map((order) => (
          <OrderCard
            key={order.orderId}
            order={order}
          />
        ))}
      </div>
    </div>
  );
};

function OrderCard({ order }: { order: Order & { items: OrderItem[] } }) {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { mutate } = useMutation({
    mutationFn: createInvoice,
    onError(error) {
      toast(error.message, "error");
    },
    onSuccess() {
      toast("Created new invoice");
      queryClient.invalidateQueries({
        queryKey: ["orders", $Enums.OrderStatus.INVOICE_PENDING]
      });
    }
  });

  return (
    <div className="bg-theme-secondary p-md rounded-lg flex flex-col gap-md">
      <div className="flex items-start justify-between gap-md">
        <div>
          <h3>CompanyName</h3>
          <h4>Order #: {order.orderId}</h4>
        </div>

        <button
          className="btn-ghost"
          onClick={() => mutate(order)}
        >
          Create Invoice
        </button>
      </div>

      <div>Line Items</div>
    </div>
  );
}
