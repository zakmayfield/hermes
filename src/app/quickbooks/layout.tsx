import { Nav } from "@/features/quickbooks/Nav";
import React from "react";

export default function Layout({
  products,
  invoicing
}: {
  children: React.ReactNode;
  products: React.ReactNode;
  invoicing: React.ReactNode;
}) {
  return (
    <div>
      <h1>QuickBooks Manager</h1>

      <Nav />

      <div>
        {products}
        {invoicing}
      </div>
    </div>
  );
}
