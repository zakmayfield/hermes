import { SegmentLayout } from "@/features/dashboard";
import { UserNav } from "@/features/dashboard/user";

export default function UserDashboardLayout({ children }: { children: React.ReactNode }) {
  return <SegmentLayout nav={<UserNav />}>{children}</SegmentLayout>;
}
