"use client";
import React from "react";
import { useTooltip } from "@/shared/hooks";
import {
  useIsPermissionEnabled,
  useTogglePermission
} from "../templates/AdminPermissions.hooks";
import { FetchRolePermissionsOutput } from "../templates/AdminPermissions.db";
import { Box, Button, Heading, Icon, Text } from "@/ui/components";

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

  const isEnabled = useIsPermissionEnabled(permission_level);

  return (
    <Box
      style={{
        padding: "sm",
        borderRadius: "lg",
        display: "flex-col",
        gap: "sm",
        flexSpacing: "space-between",
        backgroundColor: "secondary",
        width: "sm"
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
            padding: "xs",
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
          <span onClick={togglePermission}>{isEnabled ? "enabled" : "disabled"}</span>
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
            text={display_name as string}
            as="h5"
          />

          {/* INFO ICON */}
          <Box>
            <Icon
              name="info"
              id={`${permission_id}_description`}
              tooltipHtml={description || ""}
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
        {description}
      </Text>
    </Box>
  );
};
