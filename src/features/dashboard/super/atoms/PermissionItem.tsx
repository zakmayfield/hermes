"use client";
import { utilityHooks } from "@/shared/hooks";
import { useIcons } from "@/tw-styled/tools";
import { Box, Card, Heading } from "@/tw-styled/ui";
import { Permission, RolePermissions } from "@prisma/client";

type PermissionItemProps = RolePermissions & {
  permission: Permission;
};

const permissionDescriptions = {
  READ_PRODUCTS: "Enables a user to view products",
  CREATE_ORDER: "Enables a user to create orders",
  APPROVE_USER: "Enables an admin to approve user accounts",
  DELETE_USER: "Enables an admin to delete user accounts",
  CREATE_ADMIN: "Enables an admin to create admin accounts",
  DELETE_ADMIN: "Enables an admin to delete admin accounts",
  UPDATE_USER: "Enables an admin to update user accounts"
};

export const PermissionItem = (props: PermissionItemProps) => {
  const {
    permission: { name, permission_id },
    permission_level
  } = props;

  const Tooltip = utilityHooks.useTooltip({
    place: "top-end",
    anchorSelect: `#${permission_id}_info_icon`
  });

  const icons = useIcons({
    names: ["info"],
    variant: "duotone"
  });

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
          text={name}
          as="h6"
        />
        <icons.info
          id={`${permission_id}_info_icon`}
          data-tooltip-html={
            permissionDescriptions[name as keyof typeof permissionDescriptions]
          }
        />
        {Tooltip}
      </Box>

      <Box>
        <p>{permission_level ? "✅" : "🚫"}</p>
      </Box>
    </Card>
  );
};
