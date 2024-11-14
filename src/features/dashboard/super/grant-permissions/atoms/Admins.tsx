import { Box, Pulse } from "@/ui";
import { Admin } from "../organisms";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/utils/core/queryKeys";
import { $Enums } from "@prisma/client";
import { getUsersByRole } from "@/utils/database/user/queries";
import { getPermissionsByRole } from "@/utils/database/permissions/queries";

export const Admins = () => {
  const { data: admins, isLoading } = useQuery({
    queryKey: [QueryKeys.USERS, `role:${$Enums.Roles.ADMIN}`],
    queryFn: async () => await getUsersByRole($Enums.Roles.ADMIN),
    staleTime: Infinity
  });

  const { data: permissions } = useQuery({
    queryKey: [QueryKeys.PERMISSIONS, `role:${$Enums.Roles.ADMIN}`],
    queryFn: async () => await getPermissionsByRole($Enums.Roles.ADMIN),
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
