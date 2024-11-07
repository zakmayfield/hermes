"use client";
import { PermissionCard } from "../molecules";
import { useFetchPermissions } from "./ConfigurePermissions.hooks";
import { Box, Pulse } from "@/ui/components";

export const ConfigurePermissions = () => {
  const { data, isLoading } = useFetchPermissions();

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
