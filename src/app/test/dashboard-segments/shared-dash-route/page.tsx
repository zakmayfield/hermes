import { redirect } from "next/navigation";

export default function Page() {
  const role = "CUSTOMER";
  if (role === "CUSTOMER") {
    redirect("/test/dashboard-segments");
  }
  return <div>Shared Dash Page</div>;
}
