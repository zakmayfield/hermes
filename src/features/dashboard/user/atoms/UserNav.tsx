"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { DashboardNavLayout } from "../../default/templates";

export const UserNav = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <DashboardNavLayout>
      <Link
        href="/dashboard"
        className={`${(!segment && "underline") || ""}`}
      >
        Dashboard
      </Link>
      <Link
        href="/dashboard"
        className={`${(segment === "foobar" && "underline") || ""}`}
      >
        Foobar
      </Link>
      <Link
        href="/dashboard"
        className={`${(segment === "foobaz" && "underline") || ""}`}
      >
        Foobaz
      </Link>
    </DashboardNavLayout>
  );
};
