"use client";

import { createInvoice } from "@/data/qb/services/invoice";
import { useMutation } from "@tanstack/react-query";

export const GenerateInvoices = () => {
  return (
    <div className="bg-theme-primary p-lg rounded-lg flex flex-col gap-md">
      <div className="flex items-center gap-md justify-between">
        <h2>Gen Invoices</h2>
        <button className="btn-ghost">Generate All</button>
      </div>

      <div className="flex flex-col gap-md">
        {[0, 1, 2].map((order) => (
          <Order key={order} />
        ))}
      </div>
    </div>
  );
};

function Order() {
  const { mutate } = useMutation({ mutationFn: createInvoice });

  return (
    <div className="bg-theme-secondary p-md rounded-lg">
      <div className="flex items-center gap-md">
        <h3>CompanyName</h3>
        <h4>Order #: 123</h4>
        <button
          className="btn-ghost"
          onClick={() => mutate({ order: null })}
        >
          Create Invoice
        </button>
      </div>

      <div>Line Items</div>
    </div>
  );
}