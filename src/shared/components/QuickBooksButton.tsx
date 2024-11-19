"use client";

import { Button } from "@/ui";
import Link from "next/link";

export const QuickBooksButton = () => {
  return (
    <Button
      options={{ variant: "ghost" }}
      style={{ className: "ml-auto" }}
    >
      Connect to QuickBooks
    </Button>
  );
};

export const QuickBooksLink = ({
  authCodeRequestUrl
}: {
  authCodeRequestUrl: string;
}) => {
  return (
    <Link
      href={authCodeRequestUrl || "#"}
      className="ml-auto p-xs border rounded-lg"
    >
      Connect to QuickBooks
    </Link>
  );
};
