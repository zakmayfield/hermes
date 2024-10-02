"use client";
import React from "react";
import { fetchRolePermissions } from "@/shared/queries";
import { Permission, Role, RolePermissions } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { utilityHooks } from "@/shared/hooks";
import { PiInfoDuotone } from "react-icons/pi";

export const ManagePermissionsPage = () => {
  const { data } = useQuery({
    queryKey: ["permissions"],
    queryFn: async () => await fetchRolePermissions(),
    staleTime: Infinity
  });

  const ManagePermissionsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div>
        {" "}
        <h3>Permissions</h3>
        {children}
      </div>
    );
  };

  const PermissionList = ({
    children,
    title
  }: {
    children: React.ReactNode;
    title: string;
  }) => {
    return (
      <div>
        {" "}
        <h5>{title}</h5>
        {children}
      </div>
    );
  };

  type PermissionItemProps = RolePermissions & {
    permission: Permission;
    role: Role;
  };

  const PermissionItem = (props: PermissionItemProps) => {
    const {
      permission: { name, permission_id },
      permission_level
    } = props;

    const { Tooltip } = utilityHooks.useTooltip({
      place: "top-end",
      anchorSelect: `#${permission_id}_info_icon`,
      content: "Enable to give access to permission"
    });

    return (
      <div>
        <p>{name}</p>

        <div>
          <p>{permission_level ? "✅" : "🚫"}</p>
          <PiInfoDuotone id={`${permission_id}_info_icon`} />
          <Tooltip />
        </div>
      </div>
    );
  };

  const SuperPermissions = data && (
    <PermissionList title="Super">
      {data.map(
        (p) =>
          p.role.name === "SUPER" && (
            <PermissionItem
              key={p.permission_id}
              {...p}
            />
          )
      )}
    </PermissionList>
  );

  const AdminPermissions = data && (
    <PermissionList title="Admin">
      {data.map(
        (p) =>
          p.role.name === "ADMIN" && (
            <PermissionItem
              key={p.permission_id}
              {...p}
            />
          )
      )}
    </PermissionList>
  );

  const UserPermissions = data && (
    <PermissionList title="User">
      {data.map(
        (p) =>
          p.role.name === "USER" && (
            <PermissionItem
              key={p.permission_id}
              {...p}
            />
          )
      )}
    </PermissionList>
  );

  return (
    <ManagePermissionsLayout>
      {UserPermissions}
      {AdminPermissions}
      {SuperPermissions}
    </ManagePermissionsLayout>
  );
};
