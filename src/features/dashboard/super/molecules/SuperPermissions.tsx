"use client";

import { useQuery } from "@tanstack/react-query";
import { PermissionItem, PermissionList } from "../atoms";
import { fetchRolePermissions } from "@/shared/queries";
import { Box } from "@/tw-styled/ui";

export const SuperPermissions = () => {
  const { data } = useQuery({
    queryKey: ["permissions:super"],
    queryFn: async () => fetchRolePermissions("SUPER"),
    staleTime: Infinity
  });

  return (
    <PermissionList title="Super">
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
