"use client";
import { useQuery } from "@tanstack/react-query";
import { PermissionCard } from "../molecules";
import { Box, Pulse } from "@/ui/components";
import { $Enums } from "@prisma/client";
import { fetchRolePermissions } from "./ConfigurePermissions.db";

export const ConfigurePermissions = () => {
  // TODO: *** This query evokes a function which is identical to `fetchPermissionsByRole` - clean this up ***
  // Note that using the same function is okay, but need to switch up the query key for caching purposes
  const { data, isLoading } = useQuery({
    queryKey: [`role_permissions:${$Enums.Roles.ADMIN}`],
    queryFn: async () => fetchRolePermissions({ role: $Enums.Roles.ADMIN }),
    staleTime: Infinity
  });

  const loading = isLoading && <Pulse size="lg" />;

  return (
    <Box style={{ spaceY: "sm", minHeight: "3xs" }}>
      {loading}

      {data && !isLoading && (
        <Box
          style={{
            display: "flex-row",
            gap: "md",
            flexWrap: "wrap"
          }}
        >
          {data &&
            data.map((p) => (
              <PermissionCard
                key={p.permission_id}
                {...p}
              />
            ))}
        </Box>
      )}
    </Box>
  );
};
