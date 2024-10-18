"use client";
import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Permission, RolePermissions } from "@prisma/client";
import { togglePermissionLevel } from "@/shared/actions";
import { fetchRoleById, FetchRolePermissionsOutput } from "@/shared/queries";
import { useToast, useTooltip } from "@/shared/hooks";
import { useIcons } from "@/tw-styled/tools";
import { Box, Button, Card, Heading, Icon } from "@/tw-styled/ui";

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
    anchorSelect: `#${permission_id}_description`
  });

  const icons = useIcons({
    names: ["info"],
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

  const isEnabled = React.useMemo(() => {
    return !!permission_level;
  }, [permission_level]);

  return (
    <Card
      style={{
        wrapper: {
          backgroundColor: "secondary",
          flexSize: "remaining",
          className: "lg:max-w-half"
        },
        body: { display: "flex-col", gap: "md", className: "sm:flex-row" }
      }}
    >
      <Box style={{ wrapper: { display: "flex-row", flexAlign: "center", gap: "sm" } }}>
        {/* STATUS ICON */}
        {isEnabled ? (
          <Icon
            name="check"
            variant="duotone"
            style={{ icon: { fontSize: "xl", textColor: "success" } }}
          />
        ) : (
          <Icon
            name="x"
            variant="duotone"
            style={{ icon: { fontSize: "xl", textColor: "warning" } }}
          />
        )}

        {/* PERMISSION NAME */}
        <Heading
          as="h6"
          text={permission_name}
        />

        {/* PERMISSION INFO */}
        <Box>
          <icons.info
            id={`${permission_id}_description`}
            data-tooltip-html={getPermissionDescription(permission_name)}
          />
          {Tooltip}
        </Box>
      </Box>

      {/* TOGGLE PERMISSION BUTTON */}
      <Button
        handleClick={() => mutate({ role_id, permission_id, permission_level })}
        text={isEnabled ? "disable" : "enable"}
        style={{
          button: {
            textColor: isEnabled ? "warning" : "success",
            border: "sm",
            borderColor: isEnabled ? "warning" : "success",
            padding: "none",
            paddingY: "sm",
            paddingX: "sm",
            width: "full",
            className: "ml-auto sm:w-auto sm:py-1"
          }
        }}
      />

      {/* HEADER */}
      {/* <Box
        style={{
          wrapper: {
            display: "flex-row",
            gap: "sm",
            className: "items-center"
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
      </Box> */}

      {/* BODY */}
      {/* <Box style={{ wrapper: { display: "flex-row", className: "items-center" } }}>
        <Button
          text={!permission_level ? "enable" : "disable"}
          options={{ variant: "ghost" }}
          style={{ button: { padding: "none", paddingX: "sm" } }}
        />

        <p onClick={() => mutate({ role_id, permission_id, permission_level })}>
          {permission_level ? (
            <Icon
              name="check"
              variant="duotone"
              style={{ icon: { fontSize: "xl", textColor: "success" } }}
            />
          ) : (
            <Icon
              name="x"
              style={{ icon: { fontSize: "xl", textColor: "warning" } }}
            />
          )}
        </p>
      </Box> */}
    </Card>
  );
};
