"use client";
import React from "react";
import {
  ContentWrapper,
  Flex,
  LayoutTemplate,
  Text
} from "@/shared/components/containers";
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
          children: {
            flex: "col",
            padding: "lg"
          }
        }}
        classList={{
          childrenClassName: "items-start justify-between lg:flex-row gap-6"
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
            width: "lg"
          },
          children: {
            flex: "col",
            padding: "md",
            rounded: "lg",
            bg: "bg-slate-800"
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
      <ContentWrapper>
        <Flex className="justify-between">
          <Text>{name}</Text>
          <Flex className="justify-end">
            <PiInfoDuotone id={`${permission_id}_info_icon`} />
            <Tooltip />
            <Text>{permission_level ? "✅" : "🚫"}</Text>
          </Flex>
        </Flex>
      </ContentWrapper>
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
