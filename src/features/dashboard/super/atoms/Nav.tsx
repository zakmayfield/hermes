"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export const Nav = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <nav>
      <div>
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
      </div>
    </nav>
  );
};
