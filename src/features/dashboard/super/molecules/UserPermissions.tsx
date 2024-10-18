"use client";

import { useQuery } from "@tanstack/react-query";
import { PermissionItem, PermissionList } from "../atoms";
import { fetchRolePermissions } from "@/shared/queries";
import { Box } from "@/tw-styled/ui";
import { Roles } from "@prisma/client";

export const UserPermissions = () => {
  const { data } = useQuery({
    queryKey: [`permissions:${Roles.USER}`],
    queryFn: async () => fetchRolePermissions({ role: Roles.USER }),
    staleTime: Infinity
  });

  return (
    <PermissionList title="User">
      <Box style={{ wrapper: { display: "flex-row", gap: "md", flexWrap: "wrap" } }}>
        {data?.map((p) => (
          <PermissionItem
            key={p.permission_id}
            {...p}
          />
        ))}
      </Box>
    </PermissionList>
  );
};
