"use client";
import React from "react";
import { LayoutTemplate, Text, Wrapper } from "@/shared/components/containers";
import { fetchRolePermissions } from "@/shared/queries";
import { Permission, Role, RolePermissions } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { utilityHooks } from "@/shared/hooks";
import { PiInfoDuotone } from "react-icons/pi";

type PermissionItemProps = RolePermissions & {
  permission: Permission;
  role: Role;
};

export const ManagePermissionsPage = () => {
  const { data } = useQuery({
    queryKey: ["permissions"],
    queryFn: async () => await fetchRolePermissions(),
    staleTime: Infinity
  });

  const ManagePermissionsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <LayoutTemplate
        heading="h3"
        title="Permissions"
        style={{
          wrapper: {
            flex: "col",
            gap: "lg"
          },
          children: {
            flex: "col",
            gap: "lg"
          }
        }}
        classList={{
          childrenClassName: "lg:flex-row"
        }}
      >
        {children}
      </LayoutTemplate>
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
      <LayoutTemplate
        heading="h5"
        title={title}
        style={{
          wrapper: {
            flex: "col",
            gap: "md",
            width: "md",
            place: "center"
          },
          children: {
            padding: "md",
            rounded: "lg",
            bg: "bg-slate-800",
            border: "sm",
            height: "full"
          }
        }}
      >
        {children}
      </LayoutTemplate>
    );
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
      <Wrapper>
        <Wrapper
          style={{ flex: "row", gap: "sm" }}
          className="justify-between"
        >
          <Text>{name}</Text>
          <Wrapper
            style={{ flex: "row", flexPosition: "center-right", gap: "sm" }}
            className="justify-end"
          >
            <Text>{permission_level ? "✅" : "🚫"}</Text>
            <PiInfoDuotone id={`${permission_id}_info_icon`} />
            <Tooltip />
          </Wrapper>
        </Wrapper>
      </Wrapper>
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
