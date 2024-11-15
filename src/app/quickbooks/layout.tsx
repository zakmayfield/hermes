import { Nav } from "@/features/quickbooks/Nav";
import React from "react";

export default function Layout({
  children,
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
        {children}
        {products}
        {invoicing}
      </div>
    </div>
  );
}
