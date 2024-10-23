import { SegmentLayout } from "@/features/dashboard";
import { SuperNav } from "@/features/dashboard/super";

export default async function SuperDashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <SegmentLayout nav={<SuperNav />}>{children}</SegmentLayout>;
}
