import { Roles } from "@prisma/client";
import { PermissionItem, PermissionList } from "../atoms";

type PermissionListsProps = {
  data?: ({
    role: {
      role_id: string;
      name: Roles;
    };
    permission: {
      permission_id: string;
      name: string;
    };
  } & {
    role_id: string;
    permission_id: string;
    permission_level: number;
  })[];
};

export const SuperPermissionsList = (props: PermissionListsProps) => {
  return (
    <PermissionList title="Super">
      {props.data?.map(
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
};

export const AdminPermissionsList = (props: PermissionListsProps) => {
  return (
    <PermissionList title="Admin">
      {props.data?.map(
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
};

export const UserPermissionsList = (props: PermissionListsProps) => {
  return (
    <PermissionList title="User">
      {props.data?.map(
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
};
