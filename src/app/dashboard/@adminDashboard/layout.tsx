import { AdminNav } from "@/features/dashboard/admin";
import { SegmentLayout } from "@/features/dashboard";

export default function AdminDashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <SegmentLayout nav={<AdminNav />}>{children}</SegmentLayout>;
}
