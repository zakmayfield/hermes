"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { SegmentNav } from "..";

export const SuperNav = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <SegmentNav>
      <Link
        href="/dashboard"
        className={`${(!segment && "underline") || ""}`}
      >
        Dashboard
      </Link>
      <Link
        href="/dashboard/manage-users-super"
        className={`${(segment === "manage-users-super" && "underline") || ""}`}
      >
        Users
      </Link>
      <Link
        href="/dashboard/admins"
        className={`${(segment === "manage-admins" && "underline") || ""}`}
      >
        Admins
      </Link>
      <Link
        href="/dashboard/permissions"
        className={`${(segment === "manage-permissions" && "underline") || ""}`}
      >
        Permissions
      </Link>
    </SegmentNav>
  );
};
