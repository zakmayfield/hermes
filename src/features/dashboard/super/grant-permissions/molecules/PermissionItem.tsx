import { Permission } from "@prisma/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleUserPermission } from "../templates/GrantPermissions.db";
import { Box } from "@/ui";

export const PermissionItem = ({
  checked,
  user_id,
  permission
}: {
  checked: boolean;
  user_id: string;
  permission: Permission;
}) => {
  const { permission_id } = permission;
  const queryClient = useQueryClient();

  const { mutate: togglePermission } = useMutation({
    mutationFn: toggleUserPermission,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["user_permissions"] });
    }
  });

  const handleChange = () => togglePermission({ checked, user_id, permission_id });

  return (
    <Box
      style={{
        backgroundColor: "primary",
        display: "flex-row",
        gap: "sm",
        padding: "xs",
        paddingX: "sm",
        borderRadius: "md",
        minWidth: "xs"
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <p>{permission.display_name}</p>
    </Box>
  );
};
