import { SegmentLayout } from "@/features/dashboard/core";
import { SuperNav } from "@/features/dashboard/super/atoms";

export default async function SuperDashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <SegmentLayout nav={<SuperNav />}>{children}</SegmentLayout>;
}
