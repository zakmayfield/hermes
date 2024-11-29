import { Permission, RolePermissions } from "@prisma/client";

export type RolePermissionsWithPermission = RolePermissions & {
  permission: Permission;
};

export type TogglePermissionLevelInput = {
  permission_level: number;
  permission: {
    permission_id: string;
    role_id: string;
  };
};
