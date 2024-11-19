"use client";

import { useToast, useTooltip } from "@/shared/hooks/ui";
import { Box, Heading, Icon, Pulse, Text } from "@/ui";
import { togglePermissionLevel } from "@/utils/database/permissions/mutations";
import {
  getRolePermissions,
  GetRolePermissionsOutput
} from "@/utils/database/permissions/queries";
import { getRoleById } from "@/utils/database/roles/queries";
import { $Enums } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";

export const PermissionManagement = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [`role_permissions:${$Enums.Roles.ADMIN}`],
    queryFn: async () => getRolePermissions({ role: $Enums.Roles.ADMIN }),
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
      <h2>Configure Default Admin Permissions</h2>

      {isLoading ? (
        <Pulse />
      ) : error ? (
        <Box>{error.message}</Box>
      ) : data && data.length > 0 ? (
        <Box style={{ display: "flex-col", gap: "sm" }}>
          {data.map((rp) => (
            <PermissionCard role_permission={rp} />
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
  role_permission: GetRolePermissionsOutput;
}) {
  const { role_id, permission_id, permission_level, permission } = role_permission;

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: togglePermissionLevel,
    async onSuccess(data) {
      const role = await getRoleById({ role_id }).then((r) => r?.name);

      queryClient.setQueryData<GetRolePermissionsOutput[]>(
        [`role_permissions:${role}`],
        (oldData) => {
          return oldData
            ? oldData.map((rp) =>
                rp.permission_id === data.permission_id
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

  const toggle = () => mutate({ role_id, permission_id, permission_level });

  const Tooltip = useTooltip({
    place: "top-end",
    anchorSelect: `#${permission_id}_description`
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
        backgroundColor: "secondary",
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
            textColor: isEnabled ? "success" : "warning",
            borderColor: isEnabled ? "success" : "warning",
            minWidth: "4xs",
            width: "4xs",
            textAlign: "center",
            backgroundColor: "primary",
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
            text={permission.display_name as string}
            as="h5"
          />

          {/* INFO ICON */}
          <Box>
            <Icon
              name="info"
              id={`${permission_id}_description`}
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
          textColor: "accent",
          className: "italic h-full"
        }}
      >
        {permission.description}
      </Text>
    </Box>
  );
}
