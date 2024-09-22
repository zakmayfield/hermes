"use client";
import React from "react";
import { ContentWrapper, Layout, Text } from "@/shared/components/containers";
import { fetchRolePermissions } from "@/shared/queries";
import { Permission, Role, RolePermissions } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

type PermissionItemProps = RolePermissions & {
  permission: Permission;
  role: Role;
};

export const ManagePermissionsPage = () => {
  const { data } = useQuery({
    queryKey: ["permissions"],
    queryFn: async () => await fetchRolePermissions()
  });

  const ManagePermissionsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <Layout
        heading="h3"
        title="Permissions"
        style={{ childrenFlex: "col", childrenPadding: "lg" }}
        classList={{
          childrenClassName: "items-start justify-between lg:flex-row gap-6"
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
          width: "lg",
          childrenFlex: "col",
          childrenPadding: "md"
        }}
        classList={{
          childrenClassName: "rounded-lg bg-slate-800"
        }}
      >
        {children}
      </Layout>
    );
  };
  const PermissionItem = (props: PermissionItemProps) => {
    return (
      <ContentWrapper>
        <Text>Name:</Text>
        <Text>{props.permission.name}</Text>
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
