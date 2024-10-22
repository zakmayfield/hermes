"use client";
import { Pulse, Box } from "@/tw-styled/ui";
import { PermissionList } from "../organisms";
import { PermissionCard } from "../molecules";
import { useFetchPermissions } from "./AdminPermissions.hooks";

export const AdminPermissions = () => {
  const { data, isLoading } = useFetchPermissions();

  const loading = isLoading && <Pulse size="lg" />;

  const permissionItems =
    data &&
    data.map((p) => (
      <PermissionCard
        key={p.permission_id}
        {...p}
      />
    ));

  const permissions = data && !isLoading && (
    <Box
      style={{
        display: "flex-col",
        gap: "md",
        flexWrap: "wrap",
        className: "sm:flex-row"
      }}
    >
      {permissionItems}
    </Box>
  );

  return (
    <PermissionList title="Configure Admin Permissions">
      {loading}
      {permissions}
    </PermissionList>
  );
};
