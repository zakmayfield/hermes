"use client";
import { useQuery } from "@tanstack/react-query";
import { PermissionCard } from "../molecules";
import { Box, Pulse } from "@/ui/components";
import { $Enums } from "@prisma/client";
import { fetchRolePermissions } from "./ConfigurePermissions.db";

export const ConfigurePermissions = () => {
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
