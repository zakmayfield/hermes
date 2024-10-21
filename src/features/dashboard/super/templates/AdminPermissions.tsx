"use client";
import { fetchRolePermissions } from "@/shared/queries";
import { Pulse, Box } from "@/tw-styled/ui";
import { $Enums } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { PermissionList } from "../organisms";
import { PermissionCard } from "../molecules";

export const AdminPermissions = () => {
  const { data, isLoading } = useQuery({
    queryKey: [`permissions:${$Enums.Roles.ADMIN}`],
    queryFn: async () => fetchRolePermissions({ role: $Enums.Roles.ADMIN }),
    staleTime: Infinity
  });

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
        wrapper: {
          display: "flex-col",
          gap: "md",
          flexWrap: "wrap",
          className: "sm:flex-row"
        }
      }}
    >
      {permissionItems}
    </Box>
  );

  return (
    <PermissionList title="Admin">
      {loading}
      {permissions}
    </PermissionList>
  );
};
