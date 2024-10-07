import { DashboardLayout } from "@/features/templates";
import { getAuthSession } from "@/lib/auth/auth.options";
import { redirect } from "next/navigation";

type LayoutProps = {
  superDashboard: React.ReactNode;
  adminDashboard: React.ReactNode;
  userDashboard: React.ReactNode;
};

export default async function Layout({
  superDashboard,
  adminDashboard,
  userDashboard
}: LayoutProps) {
  const session = await getAuthSession();
  if (!session) redirect("/sign-in");

  const user_roles = session.user.roles;

  const dashboard =
    (user_roles.includes("SUPER") && superDashboard) ||
    (user_roles.includes("ADMIN") && !user_roles.includes("SUPER") && adminDashboard) ||
    (!user_roles.includes("ADMIN") && !user_roles.includes("SUPER") && userDashboard);

  return <DashboardLayout>{dashboard}</DashboardLayout>;
}
