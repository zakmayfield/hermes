import { SuperDashboardLayoutTemplate } from "@/features/dashboard/templates/super";

export default async function SuperDashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <SuperDashboardLayoutTemplate>{children}</SuperDashboardLayoutTemplate>;
}
