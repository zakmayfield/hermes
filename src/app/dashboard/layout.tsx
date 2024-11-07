import { getAuthSession } from "@/lib/auth/auth.options";
import { Layout } from "@/ui/components";
import { redirect } from "next/navigation";
import React from "react";

type LayoutProps = {
  superDashboard: React.ReactNode;
  adminDashboard: React.ReactNode;
  userDashboard: React.ReactNode;
};

export default async function DashboardLayout({
  superDashboard,
  adminDashboard,
  userDashboard
}: LayoutProps) {
  const session = await getAuthSession();
  if (!session) redirect("/sign-in");

  const user_role = session.user.role;

  const dashboard =
    (user_role.includes("SUPER") && superDashboard) ||
    (user_role.includes("ADMIN") && adminDashboard) ||
    (user_role.includes("USER") && userDashboard);

  return (
    <Layout
      options={{ as: "main", title: <h1>Dashboard</h1> }}
      style={{
        parentWrapper: {
          borderRadius: "lg",
          maxWidth: "3xl",
          place: "center",
          backgroundColor: "secondary",
          spaceY: "lg",
          padding: "lg"
        },
        bodyWrapper: {
          minHeight: "md",
          display: "flex-col"
        }
      }}
    >
      {dashboard}
    </Layout>
  );
}
