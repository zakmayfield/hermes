"use client";
import { AdminList } from "../organisms";
import { AuthorizedAdminForm } from "../molecules";
import { Box } from "@/tw-styled/ui";

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
