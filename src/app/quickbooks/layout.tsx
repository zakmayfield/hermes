import React from "react";

export default async function Layout({
  children,
  products,
  invoicing
}: {
  children: React.ReactNode;
  products: React.ReactNode;
  invoicing: React.ReactNode;
  params: Promise<{ code: string; realmId: string }>;
}) {
  return (
    <div>
      <h1>QuickBooks Manager</h1>

      {children}
    </div>
  );
}
