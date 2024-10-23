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
        href="/dashboard/manage-users"
        className={`${(segment === "manage-users" && "underline") || ""}`}
      >
        Users
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
    </SegmentNav>
  );
};
