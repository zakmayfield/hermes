import { utilityHooks } from "@/shared/hooks";
import { useIcons } from "@/tw-styled/tools";
import { Permission, Role, RolePermissions } from "@prisma/client";

type PermissionItemProps = RolePermissions & {
  permission: Permission;
  role: Role;
};

export const PermissionItem = (props: PermissionItemProps) => {
  const {
    permission: { name, permission_id },
    permission_level
  } = props;

  const { Tooltip } = utilityHooks.useTooltip({
    place: "top-end",
    anchorSelect: `#${permission_id}_info_icon`,
    content: "Enable to give access to permission"
  });

  const icons = useIcons({
    names: ["info"],
    variant: "duotone"
  });

  return (
    <div>
      <p>{name}</p>

      <div>
        <p>{permission_level ? "✅" : "🚫"}</p>
        <icons.info id={`${permission_id}_info_icon`} />
        <Tooltip />
      </div>
    </div>
  );
};
