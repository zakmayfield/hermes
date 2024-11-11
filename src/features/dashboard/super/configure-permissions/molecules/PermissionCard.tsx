"use client";
import React from "react";
import { useTooltip } from "@/shared/hooks";
import { useTogglePermission } from "../templates/ConfigurePermissions.hooks";
import { FetchRolePermissionsOutput } from "../templates/ConfigurePermissions.db";
import { Box, Heading, Icon, Text } from "@/ui/components";

export const PermissionCard = (props: FetchRolePermissionsOutput) => {
  const { role_id, permission_id, permission_level, permission } = props;

  const togglePermission = useTogglePermission(
    role_id,
    permission_id,
    permission_level,
    permission.name
  );

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
        width: "full",
        className: "md:w-md"
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
};
