import { DashboardLayoutTemplate } from "@/features/dashboard/templates";
import { getAuthSession } from "@/lib/auth/auth.options";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  superDashboard,
  adminDashboard,
  userDashboard
}: {
  superDashboard: React.ReactNode;
  adminDashboard: React.ReactNode;
  userDashboard: React.ReactNode;
}) {
  const session = await getAuthSession();
  if (!session) redirect("/sign-in");

  // TODO: signing in causes useContext error
  const user_roles = ["USER", "ADMIN", "SUPER"];

  const dashboard =
    (user_roles.includes("SUPER") && superDashboard) ||
    (user_roles.includes("ADMIN") && !user_roles.includes("SUPER") && adminDashboard) ||
    (!user_roles.includes("ADMIN") && !user_roles.includes("SUPER") && userDashboard);

  return <DashboardLayoutTemplate>{dashboard}</DashboardLayoutTemplate>;
}
