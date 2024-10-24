import { redirect } from "next/navigation";

export default function Page() {
  const role = "USER";
  if (role === "USER") {
    redirect("/test/dashboard-segments");
  }
  return <div>Shared Dash Page</div>;
}
