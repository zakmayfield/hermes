import React from "react";
import { Permission, User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { PermissionItem } from "../molecules";
import { Icon, Pulse } from "@/ui";
import { QueryKeys } from "@/utils/core/queryKeys";
import { getUserPermissionsById } from "@/utils/database/user/queries";

export const Admin = ({
  admin,
  permissions
}: {
  admin: Omit<User, "password">;
  permissions?: Permission[];
}) => {
  const [isDropDownOpen, setDropDownOpen] = React.useState(false);

  const { data: userPermissions, isLoading } = useQuery({
    queryKey: [QueryKeys.USER_PERMISSIONS, `user:${admin.id}`],
    queryFn: async () => await getUserPermissionsById(admin.id),
    staleTime: Infinity
  });

  return (
    <div className="space-y-sm">
      <div className="flex justify-between items-center pb-xs border-b border-b-accent px-sm">
        <h5>{admin.email}</h5>
        <div onClick={() => setDropDownOpen(!isDropDownOpen)}>
          <Icon
            name="downarrow"
            style={{
              fontSize: "lg",
              cursor: "pointer",
              className: isDropDownOpen ? "rotate-180" : ""
            }}
          />
        </div>
      </div>

      {isDropDownOpen && (
        <div className="flex gap-sm flex-wrap px-sm">
          {isLoading
            ? [0, 1, 2, 3, 4, 5, 6].map((p) => (
                <Pulse
                  key={p}
                  style={{
                    parentWrapper: { width: "xs", paddingY: "xs" },
                    children: { padding: "sm" }
                  }}
                />
              ))
            : permissions?.map((p) => (
                <PermissionItem
                  key={p.name}
                  user_id={admin.id}
                  permission={p}
                  checked={
                    !!userPermissions?.find((up) => up.permission_id === p.permission_id)
                  }
                />
              ))}
        </div>
      )}
    </div>
  );
};
