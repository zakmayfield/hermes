import { SuperDashboardLayout } from "@/features/dashboard/super/templates";

export default async function Layout({ children }: { children: React.ReactNode }) {
  return <SuperDashboardLayout>{children}</SuperDashboardLayout>;
}
