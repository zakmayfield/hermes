import { getAuthSession } from "@/lib/auth/auth.options";
import { Layout } from "@/ui";
import { $Enums } from "@prisma/client";
import { redirect } from "next/navigation";
import React from "react";

type LayoutProps = {
  admin: React.ReactNode;
  user: React.ReactNode;
  userDashboard: React.ReactNode;
  adminDashboard: React.ReactNode;
  superDashboard: React.ReactNode;
};

export default async function DashboardLayout({ admin, user }: LayoutProps) {
  const session = await getAuthSession();
  if (!session) redirect("/sign-in");

  const user_role = session.user.role;

  const dashboard =
    user_role.includes($Enums.Roles.ADMIN) ||
    (user_role.includes($Enums.Roles.SUPER) && admin) ||
    (user_role.includes($Enums.Roles.USER) && user);

  return <Layout options={{ as: "main", title: <h1>Dashboard</h1> }}>{dashboard}</Layout>;
}
