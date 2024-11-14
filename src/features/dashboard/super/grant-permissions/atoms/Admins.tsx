import { Box, Pulse } from "@/ui";
import { Admin } from "../organisms";
import { useQuery } from "@tanstack/react-query";
import { fetchAdmins, fetchPermissionsByRole } from "@/utils/database/queries";
import { QueryKeys } from "@/utils/core/queryKeys";
import { $Enums } from "@prisma/client";

export const Admins = () => {
  const { data: admins, isLoading } = useQuery({
    queryKey: [QueryKeys.USERS, `role:${$Enums.Roles.ADMIN}`],
    queryFn: async () => await fetchAdmins(),
    staleTime: Infinity
  });

  const { data: permissions } = useQuery({
    queryKey: [QueryKeys.PERMISSIONS, `role:${$Enums.Roles.ADMIN}`],
    queryFn: async () => await fetchPermissionsByRole("ADMIN"),
    staleTime: Infinity
  });

  return (
    <Box style={{ spaceY: "md" }}>
      {isLoading ? (
        <Pulse size="md" />
      ) : (
        admins &&
        admins.map((admin) => (
          <Admin
            key={admin.id}
            admin={admin}
            permissions={permissions}
          />
        ))
      )}
    </Box>
  );
};
