"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { SegmentNav } from "../SegmentNav";

export const AdminNav = () => {
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
    </SegmentNav>
  );
};
