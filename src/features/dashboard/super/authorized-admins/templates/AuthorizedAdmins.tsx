"use client";
import { Box } from "@/ui/components";
import { AdminList, AuthorizedAdminForm } from "../organisms";

export const AuthorizedAdmins = () => {
  return (
    <Box
      style={{
        display: "flex-col",
        gap: "lg",
        flexAlign: "center",
        width: "full",
        place: "center",
        className: "lg:flex-row lg:items-start lg:max-w-2xl"
      }}
    >
      <AuthorizedAdminForm />
      <AdminList />
    </Box>
  );
};
