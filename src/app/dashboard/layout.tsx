import { getAuthSession } from "@/lib/auth/auth.options";
import { Layout } from "@/tw-styled/ui";
import { redirect } from "next/navigation";

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

  const user_roles = session.user.roles;

  const dashboard =
    (user_roles.includes("SUPER") && superDashboard) ||
    (user_roles.includes("ADMIN") && !user_roles.includes("SUPER") && adminDashboard) ||
    (!user_roles.includes("ADMIN") && !user_roles.includes("SUPER") && userDashboard);

  return (
    <Layout
      options={{ as: "main", titleText: "Dashboard" }}
      style={{
        parentWrapper: {
          borderRadius: "lg",
          maxWidth: "3xl",
          place: "center",
          backgroundColor: "secondary",
          spaceY: "lg",
          padding: "lg"
        },
        childrenWrapper: {
          minHeight: "md",
          display: "flex-col"
        }
      }}
    >
      {dashboard}
    </Layout>
  );
}
