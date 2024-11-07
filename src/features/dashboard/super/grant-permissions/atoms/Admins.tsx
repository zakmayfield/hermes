import { Box, Pulse } from "@/ui";
import { Admin } from "../organisms";
import { useQuery } from "@tanstack/react-query";
import { fetchAdmins, fetchPermissionsByRole } from "@/shared/queries";

export const Admins = () => {
  const { data: admins, isLoading } = useQuery({
    queryKey: ["admins"],
    queryFn: async () => await fetchAdmins(),
    staleTime: Infinity
  });

  const { data: permissions } = useQuery({
    queryKey: ["permissions:ADMIN"],
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
