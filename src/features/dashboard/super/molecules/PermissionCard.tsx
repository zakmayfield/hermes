"use client";
import React from "react";
import { useTooltip } from "@/shared/hooks";
import { FetchRolePermissionsOutput } from "@/shared/queries";
import { Icon, Heading, Button, Box, Text } from "@/tw-styled/ui";
import { useIsPermissionEnabled, useTogglePermission } from "./PermissionCard.hooks";
import { useIcons } from "@/tw-styled/tools";

export const PermissionCard = (props: FetchRolePermissionsOutput) => {
  const {
    role_id,
    permission_id,
    permission_level,
    permission: { name, display_name, description }
  } = props;

  const togglePermission = useTogglePermission(
    role_id,
    permission_id,
    permission_level,
    name
  );

  const Tooltip = useTooltip({
    place: "top-end",
    anchorSelect: `#${permission_id}_description`
  });

  const icons = useIcons({
    names: ["info"],
    variant: "duotone"
  });

  const isEnabled = useIsPermissionEnabled(permission_level);

  const statusIcon = isEnabled ? (
    <Icon
      name="check"
      style={{ icon: { fontSize: "xl", textColor: "success" } }}
    />
  ) : (
    <Icon
      name="x"
      style={{ icon: { fontSize: "xl", textColor: "warning" } }}
    />
  );

  const displayName = (
    <Heading
      text={display_name as string}
      as="h6"
    />
  );

  const info = (
    <Box>
      <icons.info
        id={`${permission_id}_description`}
        data-tooltip-html={description}
      />
      {Tooltip}
    </Box>
  );

  const togglePermissionButton = (
    <Button
      handleClick={togglePermission}
      text={isEnabled ? "disable" : "enable"}
      style={{
        button: {
          textColor: isEnabled ? "warning" : "success",
          border: "sm",
          borderColor: isEnabled ? "warning" : "success",
          padding: "none",
          paddingY: "sm",
          paddingX: "sm"
        }
      }}
    />
  );

  return (
    <Box
      style={{
        wrapper: {
          padding: "sm",
          borderRadius: "lg",
          display: "flex-col",
          gap: "md",
          backgroundColor: "secondary",
          flexSize: "grow",
          className: "sm:flex-row sm:justify-between sm:items-start"
        }
      }}
    >
      <Box style={{ wrapper: { width: "sm" } }}>
        <Box
          style={{
            wrapper: {
              display: "flex-row",
              flexAlign: "center",
              gap: "sm"
            }
          }}
        >
          {statusIcon}
          {displayName}
          {info}
        </Box>

        <Text
          style={{
            parentWrapper: {
              textColor: "accent",
              paddingL: "lg",
              className: "italic"
            }
          }}
        >
          {description}
        </Text>
      </Box>

      {togglePermissionButton}
    </Box>
  );
};
