"use client";
import { Button, useClassNameResolver } from "@/ui";
import { BaseStyles } from "@/ui/types";
import { useRouter } from "next/navigation";

export const RefreshButton = ({ text, style }: { text: string; style?: BaseStyles }) => {
  const router = useRouter();

  const classes = useClassNameResolver({ button: { ...style } });
  const handleRefresh = () => router.refresh();

  return (
    <Button
      handleClick={handleRefresh}
      options={{ variant: "ghost" }}
      style={{ className: classes.get("button") }}
    >
      {text}
    </Button>
  );
};
