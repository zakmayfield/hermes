"use client";
import {
  getPermissionsByRole,
  getUserPermissionsByUserId,
  getUsersByRole
} from "@/data/database/queries";
import { toggleUserPermission } from "@/data/database/mutations";
import { Box, Heading, Icon, Pulse, Text } from "@/ui";
import { $Enums, Permission, User } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";

export const GrantPermissions = () => {
  const {
    data: admins,
    error,
    isLoading
  } = useQuery({
    queryKey: ["admins"],
    queryFn: async () => await getUsersByRole({ role: $Enums.Roles.ADMIN }),
    staleTime: Infinity
  });

  const { data: permissions } = useQuery({
    queryKey: ["admin_permissions"],
    queryFn: async () => await getPermissionsByRole({ role: $Enums.Roles.ADMIN }),
    staleTime: Infinity
  });

  return (
    <Box
      style={{
        borderRadius: "lg",
        backgroundColor: "primary",
        padding: "md",
        spaceY: "md"
      }}
    >
      <h2>Grant Admin Permissions</h2>

      <div>
        {isLoading ? (
          <Pulse />
        ) : error ? (
          <Box>{error.message}</Box>
        ) : admins && admins.length > 0 ? (
          admins?.map((admin) => (
            <GrantPermissionsItem
              key={admin.id}
              admin={admin}
              permissions={permissions}
            />
          ))
        ) : (
          <Box
            style={{ backgroundColor: "secondary", padding: "lg", borderRadius: "lg" }}
          >
            <Text>No admins</Text>
          </Box>
        )}
      </div>
    </Box>
  );
};

function GrantPermissionsItem({
  admin,
  permissions
}: {
  admin: Omit<User, "password">;
  permissions?: Permission[];
}) {
  const [isDropDownOpen, setDropDownOpen] = React.useState(false);

  const { data: userPermissions, isLoading } = useQuery({
    queryKey: ["admin_permissions", admin.id],
    queryFn: async () => await getUserPermissionsByUserId(admin.id),
    staleTime: Infinity
  });

  return (
    <Box style={{ spaceY: "md", padding: "sm" }}>
      <Box
        style={{
          display: "flex-row",
          flexAlign: "center",
          flexSpacing: "space-between",
          backgroundColor: "secondary",
          borderRadius: "lg",
          padding: "sm"
        }}
      >
        <Heading
          as="h5"
          text={admin.email}
        />

        <div onClick={() => setDropDownOpen(!isDropDownOpen)}>
          <Icon
            name="downarrowCircle"
            style={{
              fontSize: "xl",
              cursor: "pointer",
              className: isDropDownOpen ? "rotate-180" : ""
            }}
          />
        </div>
      </Box>

      {isDropDownOpen && (
        <div className="flex gap-sm flex-wrap px-sm">
          {isLoading
            ? [0, 1, 2, 3, 4, 5, 6].map((p) => (
                <Pulse
                  key={p}
                  style={{
                    parentWrapper: { width: "xs", paddingY: "xs" },
                    children: { padding: "sm" }
                  }}
                />
              ))
            : permissions?.map((p) => (
                <PermissionItem
                  key={p.name}
                  user_id={admin.id}
                  permission={p}
                  checked={
                    !!userPermissions?.find((up) => up.permission_id === p.permission_id)
                  }
                />
              ))}
        </div>
      )}
    </Box>
  );
}

function PermissionItem({
  checked,
  user_id,
  permission
}: {
  checked: boolean;
  user_id: string;
  permission: Permission;
}) {
  const { permission_id } = permission;
  const queryClient = useQueryClient();

  const { mutate: togglePermission } = useMutation({
    mutationFn: toggleUserPermission,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["admin_permissions", user_id] });
    }
  });

  const handleChange = () => togglePermission({ checked, user_id, permission_id });

  return (
    <Box
      style={{
        backgroundColor: "secondary",
        display: "flex-row",
        gap: "sm",
        padding: "xs",
        paddingX: "sm",
        borderRadius: "md",
        minWidth: "xs",
        flexAlign: "center"
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
}
