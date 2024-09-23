import { Flex } from "@/shared/components/containers";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export const SuperNavigation = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <nav>
      <Flex>
        <Link
          href="/dashboard"
          className={`${(!segment && "underline") || ""}`}
        >
          Dashboard
        </Link>
        <Link
          href="/dashboard/manage-admins"
          className={`${(segment === "manage-admins" && "underline") || ""}`}
        >
          Admins
        </Link>
        <Link
          href="/dashboard/manage-permissions"
          className={`${(segment === "manage-permissions" && "underline") || ""}`}
        >
          Permissions
        </Link>
      </Flex>
    </nav>
  );
};