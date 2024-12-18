"use client";

import { RolePermissionsWithPermission } from "@/data/database/models/Permission";
import {
  getRolePermissionsByRoles,
  togglePermissionLevel
} from "@/data/database/permission";
import { getRoleById } from "@/data/database/role";
import { useToast, useTooltip } from "@/shared/hooks/ui";
import { Box, Heading, Icon, Pulse, Text } from "@/ui";
import { $Enums } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";

export const PermissionManagement = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [`admin_role_permissions`],
    queryFn: async () => getRolePermissionsByRoles({ role: $Enums.Roles.ADMIN }),
    staleTime: Infinity
  });

  return (
    <Box
      style={{
        borderRadius: "lg",
        backgroundColor: "theme-primary",
        padding: "md",
        spaceY: "md"
      }}
    >
      <h2>Configure Default Admin Permissions</h2>

      {isLoading ? (
        <Pulse />
      ) : error ? (
        <Box>{error.message}</Box>
      ) : data && data.length > 0 ? (
        <Box style={{ display: "flex-col", gap: "sm" }}>
          {data.map((rp) => (
            <PermissionCard
              key={rp.permissionId}
              role_permission={rp}
            />
          ))}
        </Box>
      ) : (
        <Box>
          <Text>No permissions</Text>
        </Box>
      )}
    </Box>
  );
};

function PermissionCard({
  role_permission
}: {
  role_permission: RolePermissionsWithPermission;
}) {
  const { roleId, permissionId, permission_level, permission } = role_permission;

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: togglePermissionLevel,
    async onSuccess(data) {
      const role = await getRoleById({ roleId }).then((r) => r?.name);

      queryClient.setQueryData<RolePermissionsWithPermission[]>(
        ["admin_role_permissions"],
        (oldData) => {
          return oldData
            ? oldData.map((rp) =>
                rp.permissionId === data.permissionId
                  ? {
                      ...rp,
                      permission_level: data.permission_level
                    }
                  : rp
              )
            : oldData;
        }
      );

      function getToastMessage() {
        const disabledMessage = `Disabled ${role}:${name}`;
        const enabledMessage = `Enabled ${role}:${name}`;

        return !data.permission_level ? disabledMessage : enabledMessage;
      }

      toast(getToastMessage());
    },

    onError(error) {
      console.log({ error });
    }
  });

  const toggle = () => mutate({ permission_level, permission: { roleId, permissionId } });

  const Tooltip = useTooltip({
    place: "top-end",
    anchorSelect: `#${permissionId}_description`
  });

  const isEnabled = React.useMemo(() => {
    return !!permission_level;
  }, [permission_level]);

  return (
    <Box
      style={{
        padding: "sm",
        borderRadius: "lg",
        display: "flex-col",
        gap: "xs",
        flexSpacing: "space-between",
        backgroundColor: "theme-secondary",
        width: "full"
      }}
    >
      {/* STATUS AND HEADING WRAPPER */}
      <Box
        style={{
          display: "flex-row",
          flexAlign: "center",
          gap: "sm"
        }}
      >
        {/* STATUS FLAG */}
        <Box
          style={{
            border: "sm",
            borderRadius: "xl",
            textColor: isEnabled ? "theme-green" : "theme-red",
            borderColor: isEnabled ? "theme-green" : "theme-red",
            minWidth: "4xs",
            width: "4xs",
            textAlign: "center",
            backgroundColor: "theme-primary",
            cursor: "pointer",
            className: "sm:py-none"
          }}
        >
          <span onClick={toggle}>{isEnabled ? "enabled" : "disabled"}</span>
        </Box>

        {/* HEADING AND INFO ICON WRAPPER */}
        <Box
          style={{
            display: "flex-row",
            flexAlign: "center",
            flexSpacing: "space-between",
            width: "full"
          }}
        >
          {/* HEADING */}
          <Heading
            text={permission.displayName as string}
            as="h5"
          />

          {/* INFO ICON */}
          <Box>
            <Icon
              name="info"
              id={`${permissionId}_description`}
              tooltipHtml={permission.description || ""}
              style={{ fontSize: "lg" }}
            />
            {Tooltip}
          </Box>
        </Box>
      </Box>

      {/* DESCRIPTION */}
      <Text
        style={{
          textColor: "theme-accent",
          className: "italic h-full"
        }}
      >
        {permission.description}
      </Text>
    </Box>
  );
}
