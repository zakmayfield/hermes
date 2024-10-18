"use client";

import { useQuery } from "@tanstack/react-query";
import { PermissionItem, PermissionList } from "../atoms";
import { fetchRolePermissions } from "@/shared/queries";
import { Box, Pulse } from "@/tw-styled/ui";
import { Roles } from "@prisma/client";

export const AdminPermissions = () => {
  const { data, isLoading } = useQuery({
    queryKey: [`permissions:${Roles.ADMIN}`],
    queryFn: async () => fetchRolePermissions({ role: Roles.ADMIN }),
    staleTime: Infinity
  });

  return (
    <PermissionList title="Admin">
      {isLoading ? (
        <Pulse
          size="sm"
          style={{ parentWrapper: { maxWidth: "lg" } }}
        />
      ) : (
        <Box
          style={{
            wrapper: {
              display: "flex-row",
              gap: "md",
              flexWrap: "wrap"
            }
          }}
        >
          {data?.map((p) => (
            <PermissionItem
              key={p.permission_id}
              {...p}
            />
          ))}
        </Box>
      )}
    </PermissionList>
  );
};
