"use client";
import { AdminList } from "../organisms";
import { AuthorizedAdminForm } from "../molecules";
import { Box } from "@/tw-styled/ui";

export const AuthorizedAdmins = () => {
  return (
    <Box>
      <AuthorizedAdminForm />
      <AdminList />
    </Box>
  );
};
