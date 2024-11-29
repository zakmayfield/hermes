import { getCoreSessionUser } from "@/data/session";
import { Layout } from "@/ui";
import { $Enums } from "@prisma/client";
import { redirect } from "next/navigation";
import React from "react";

type LayoutProps = {
  admin: React.ReactNode;
  user: React.ReactNode;
};

export default async function DashboardLayout({ admin, user }: LayoutProps) {
  const session = await getCoreSessionUser();
  if (!session) redirect("/sign-in");
  const { role } = session;

  const dashboard =
    role.includes($Enums.Roles.ADMIN) ||
    (role.includes($Enums.Roles.SUPER) && admin) ||
    (role.includes($Enums.Roles.CUSTOMER) && user);

  return <Layout options={{ as: "main", title: <h1>Dashboard</h1> }}>{dashboard}</Layout>;
}
