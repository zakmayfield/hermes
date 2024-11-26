import Link from "next/link";

export default async function Page() {
  return (
    <div className="bg-primary p-lg rounded-md space-y-sm w-md mx-auto">
      <h2>QuickBooks Succesfully Linked</h2>

      <nav className="text-foreground/70 flex items-center gap-sm">
        <Link
          href="/qb/customer"
          className="underline"
        >
          Customers
        </Link>

        <Link
          href="/qb/invoice"
          className="underline"
        >
          Invoices
        </Link>
      </nav>
    </div>
  );
}
