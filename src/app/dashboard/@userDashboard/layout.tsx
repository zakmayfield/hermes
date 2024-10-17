import { SegmentLayout } from "@/features/dashboard/core";
import { UserNav } from "@/features/dashboard/user/atoms";

export default function UserDashboardLayout({ children }: { children: React.ReactNode }) {
  return <SegmentLayout nav={<UserNav />}>{children}</SegmentLayout>;
}
