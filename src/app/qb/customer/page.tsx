import { CustomerSync } from "@/quickbooks/components/CustomerSync";

export default async function Page() {
  return (
    <div>
      <h1>customer</h1>

      <CustomerSync />
    </div>
  );
}
