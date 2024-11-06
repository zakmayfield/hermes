"use client";
import React from "react";
import { Box } from "@/ui";
import { AdminCards, GrantPermissionsHeading } from "../atoms";

export const GrantPermissions = () => {
  return (
    <Box
      style={{
        maxWidth: "xl",
        width: "full",
        backgroundColor: "secondary",
        padding: "md",
        borderRadius: "lg",
        spaceY: "sm"
      }}
    >
      <GrantPermissionsHeading />
      <AdminCards />
    </Box>
  );
};
