"use client";
import { Box, Stack } from "@/ui/components";
import { AdminList, AuthorizedAdminForm } from "../organisms";

export const AuthorizedAdmins = () => {
  return (
    <Box style={{}}>
      <Stack style={{ gap: "md" }}>
        <AuthorizedAdminForm />
        <AdminList />
      </Stack>
    </Box>
  );
};
