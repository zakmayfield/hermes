import { RefreshButton } from "@/shared/components";

export default function Page() {
  return (
    <div className="bg-primary p-lg rounded-md space-y-sm w-md mx-auto">
      <h2>Error retrieving QuickBooks information</h2>

      <RefreshButton
        text="Retry"
        style={{ width: "full" }}
      />
    </div>
  );
}
