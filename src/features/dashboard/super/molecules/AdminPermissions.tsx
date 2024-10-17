"use client";

import { useQuery } from "@tanstack/react-query";
import { PermissionItem, PermissionList } from "../atoms";
import { fetchRolePermissions } from "@/shared/queries";
import { Box } from "@/tw-styled/ui";

export const AdminPermissions = () => {
  const { data } = useQuery({
    queryKey: ["permissions:admin"],
    queryFn: async () => fetchRolePermissions("ADMIN"),
    staleTime: Infinity
  });

  return (
    <PermissionList title="Admin">
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
