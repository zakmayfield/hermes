"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { SegmentNav } from "..";
import { QuickBooksLink } from "@/shared/components";

export const SuperNav = ({ authCodeRequestUrl }: { authCodeRequestUrl: string }) => {
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
        className={`${(segment === "admins" && "underline") || ""}`}
      >
        Admins
      </Link>
      <Link
        href="/dashboard/permissions"
        className={`${(segment === "permissions" && "underline") || ""}`}
      >
        Permissions
      </Link>

      <QuickBooksLink authCodeRequestUrl={authCodeRequestUrl} />
    </SegmentNav>
  );
};
