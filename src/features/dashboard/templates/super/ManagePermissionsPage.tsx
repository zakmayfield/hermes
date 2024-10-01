"use client";
import React from "react";
import { fetchRolePermissions } from "@/shared/queries";
import { Permission, Role, RolePermissions } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { utilityHooks } from "@/shared/hooks";
import { PiInfoDuotone } from "react-icons/pi";
import { Layout, Text, Wrapper } from "@/tw-styled/components";

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
      <Layout
        heading="h3"
        title="Permissions"
        style={{
          parentWrapper: {
            flex: "col",
            gap: "lg",
            border: "sm",
            paddingX: "zero",
            className: "border-red-400"
          },
          childrenWrapper: {
            flex: "col",
            gap: "lg",
            flexSpacing: "space-evenly",
            flexWrap: "nowrap",
            className: "lg:flex-row"
          }
        }}
      >
        {children}
      </Layout>
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
      <Layout
        heading="h5"
        title={title}
        style={{
          parentWrapper: {
            flex: "col",
            gap: "md",
            width: "sm",
            place: "center",
            border: "sm",
            className: "border-yellow-400"
          },
          childrenWrapper: {
            padding: "md",
            rounded: "lg",
            bgColor: "dark",
            border: "sm",
            height: "full"
          }
        }}
      >
        {children}
      </Layout>
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
      <Wrapper style={{ childrenWrapper: { flex: "row", flexSpacing: "space-between" } }}>
        <Text>{name}</Text>

        <Wrapper
          style={{
            childrenWrapper: {
              flex: "row",
              flexRowPosition: "center-right",
              gap: "sm",
              place: "right"
            }
          }}
        >
          <Text>{permission_level ? "✅" : "🚫"}</Text>
          <PiInfoDuotone id={`${permission_id}_info_icon`} />
          <Tooltip />
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
