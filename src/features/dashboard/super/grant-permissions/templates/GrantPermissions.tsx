"use client";
import React from "react";
import { Box } from "@/ui";
import { AdminCards, GrantPermissionsHeading } from "../atoms";

export const GrantPermissions = () => {
  return (
    <Box
      style={{
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
