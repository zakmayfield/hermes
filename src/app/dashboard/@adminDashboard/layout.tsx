import { AdminNav } from "@/features/dashboard/admin/atoms";
import { SegmentLayout } from "@/features/dashboard/core";

export default function AdminDashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <SegmentLayout nav={<AdminNav />}>{children}</SegmentLayout>;
}
