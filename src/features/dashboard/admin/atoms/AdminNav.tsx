"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { SegmentNav } from "../../core";

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
    </SegmentNav>
  );
};
