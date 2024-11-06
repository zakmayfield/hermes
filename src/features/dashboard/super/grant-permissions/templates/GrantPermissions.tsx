"use client";
import React from "react";
import { Permission, User } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchAdmins,
  fetchPermissionsByRole,
  fetchUserPermissionsById
} from "@/shared/queries";
import { Box, Heading, Icon } from "@/ui";
import { grantPermission, revokePermission } from "./GrantPermissions.db";

const PermissionItem = ({
  permission,
  user_id,
  checked
}: {
  permission: Permission;
  user_id: string;
  checked?: boolean;
}) => {
  const queryClient = useQueryClient();

  const { mutate: grant } = useMutation({
    mutationFn: grantPermission,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["user_permissions"] });
    }
  });

  const { mutate: revoke } = useMutation({
    mutationFn: revokePermission,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["user_permissions"] });
    }
  });

  const handleChange = () => {
    console.log("changed");
    checked
      ? revoke({ permission_id: permission.permission_id, user_id })
      : grant({
          permission_id: permission.permission_id,
          user_id
        });
  };

  return (
    <div className="flex gap-sm items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <p>{permission.name}</p>
    </div>
  );
};

const Admin = ({
  admin,
  permissions
}: {
  admin: Omit<User, "password">;
  permissions?: Permission[];
}) => {
  const { data: userPermissions } = useQuery({
    queryKey: ["user_permissions"],
    queryFn: async () => fetchUserPermissionsById(admin.id)
  });

  return (
    <div>
      <div className="flex justify-between items-center">
        <h5>{admin.email}</h5>
        <Icon
          name="downarrow"
          style={{ fontSize: "lg" }}
        />
      </div>

      <div className="flex gap-sm flex-wrap">
        {permissions?.map((p) => (
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
    </div>
  );
};

export const GrantPermissions = () => {
  const { data: admins } = useQuery({
    queryKey: ["admins"],
    queryFn: async () => await fetchAdmins(),
    staleTime: Infinity
  });

  const { data: permissions } = useQuery({
    queryKey: ["permissions:ADMIN"],
    queryFn: async () => await fetchPermissionsByRole("ADMIN"),
    enabled: !!admins,
    staleTime: Infinity
  });

  return (
    <Box
      style={{
        maxWidth: "md",
        width: "full",
        backgroundColor: "secondary",
        padding: "md",
        borderRadius: "lg"
      }}
    >
      <Heading
        as="h3"
        text="Grant Permissions"
      />
      {admins?.map((admin) => (
        <Admin
          key={admin.id}
          admin={admin}
          permissions={permissions}
        />
      ))}
    </Box>
  );
};
