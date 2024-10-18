"use client";
import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Permission, RolePermissions } from "@prisma/client";
import { togglePermissionLevel } from "@/shared/actions";
import { fetchRoleById, FetchRolePermissionsOutput } from "@/shared/queries";
import { useToast, useTooltip } from "@/shared/hooks";
import { useIcons } from "@/tw-styled/tools";
import { Box, Card, Heading } from "@/tw-styled/ui";

type PermissionItemProps = RolePermissions & {
  permission: Permission;
};

export const PermissionItem = (props: PermissionItemProps) => {
  const {
    role_id,
    permission_id,
    permission_level,
    permission: { name: permission_name }
  } = props;

  const Tooltip = useTooltip({
    place: "top-end",
    anchorSelect: `#${permission_id}_info_icon`
  });

  const icons = useIcons({
    names: ["info", "check", "x"],
    variant: "duotone"
  });

  const { toast } = useToast();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: togglePermissionLevel,
    async onSuccess(data) {
      const role = await fetchRoleById({ role_id }).then((r) => r?.name);

      queryClient.setQueryData<FetchRolePermissionsOutput>(
        [`permissions:${role}`],
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
        const disabledMessage = `Disabled ${role}:${permission_name}`;
        const enabledMessage = `Enabled ${role}:${permission_name}`;

        return !data.permission_level ? disabledMessage : enabledMessage;
      }

      toast(getToastMessage());
    },

    onError(error) {
      console.log({ error });
    }
  });

  enum PermissionName {
    READ_PRODUCTS = "READ_PRODUCTS",
    CREATE_ORDER = "CREATE_ORDER",
    APPROVE_USER = "APPROVE_USER",
    DELETE_USER = "DELETE_USER",
    CREATE_ADMIN = "CREATE_ADMIN",
    DELETE_ADMIN = "DELETE_ADMIN",
    UPDATE_USER = "UPDATE_USER"
  }

  const permissionDescriptions: Record<PermissionName, string> = React.useMemo(() => {
    return {
      [PermissionName.READ_PRODUCTS]: "Enable product view",
      [PermissionName.CREATE_ORDER]: "Enables order creation",
      [PermissionName.APPROVE_USER]: "Enables user account approval",
      [PermissionName.DELETE_USER]: "Enables user account deletion",
      [PermissionName.CREATE_ADMIN]: "Enables admin account creation",
      [PermissionName.DELETE_ADMIN]: "Enables admin account deletion",
      [PermissionName.UPDATE_USER]: "Enables user account updates"
    };
  }, [PermissionName]);

  const getPermissionDescription = (permission_name: string) => {
    return permissionDescriptions[permission_name as keyof typeof PermissionName];
  };

  // TODO: *** Configure: complete card UI / configure loading UI ***
  return (
    <Card style={{ wrapper: { backgroundColor: "tertiary", className: "md:max-w-sm" } }}>
      <Box
        style={{
          wrapper: {
            display: "flex-row",
            flexRowPosition: "center-center",
            flexSpacing: "space-between"
          }
        }}
      >
        <Heading
          text={permission_name}
          as="h6"
        />
        <icons.info
          id={`${permission_id}_info_icon`}
          data-tooltip-html={getPermissionDescription(permission_name)}
        />
        {Tooltip}
      </Box>

      <Box>
        <p onClick={() => mutate({ role_id, permission_id, permission_level })}>
          {permission_level ? <icons.check /> : <icons.x />}
        </p>
      </Box>
    </Card>
  );
};
