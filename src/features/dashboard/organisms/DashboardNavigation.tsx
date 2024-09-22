import { Flex } from "@/shared/components/containers";
import Link from "next/link";

type TDashboardNavigationProps = {};

export const DashboardNavigation = (props: TDashboardNavigationProps) => {
  return (
    <nav>
      <Flex>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/manage-admins">Manage Admins</Link>
      </Flex>
    </nav>
  );
};
