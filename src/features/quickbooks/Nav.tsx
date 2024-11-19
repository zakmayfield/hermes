import { Navbar } from "@/ui";
import Link from "next/link";

export const Nav = () => {
  return (
    <Navbar style={{ display: "flex-row", gap: "md" }}>
      <Link href="/quickbooks/products">Products</Link>
      <Link href="/quickbooks/invoicing">Invoicing</Link>
    </Navbar>
  );
};
