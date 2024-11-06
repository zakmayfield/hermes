import { Box } from "@/ui";
import { AdminCard } from "../organisms";
import { useQuery } from "@tanstack/react-query";
import { fetchAdmins, fetchPermissionsByRole } from "@/shared/queries";

export const AdminCards = () => {
  const { data: admins } = useQuery({
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
      {admins?.map((admin) => (
        <AdminCard
          key={admin.id}
          admin={admin}
          permissions={permissions}
        />
      ))}
    </Box>
  );
};
