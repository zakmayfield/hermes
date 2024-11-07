"use client";
import { PermissionList } from "../organisms";
import { PermissionCard } from "../molecules";
import { useFetchPermissions } from "./AdminPermissions.hooks";
import { Box, Pulse } from "@/ui/components";

export const AdminPermissions = () => {
  const { data, isLoading } = useFetchPermissions();

  const loading = isLoading && <Pulse size="lg" />;

  return (
    <PermissionList title="Configure Admin Permissions">
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
    </PermissionList>
  );
};
