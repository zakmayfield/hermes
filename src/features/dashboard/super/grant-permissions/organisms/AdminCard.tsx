import React from "react";
import { fetchUserPermissionsById } from "@/shared/queries";
import { Permission, User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { PermissionItem } from "../molecules";
import { Icon } from "@/ui";

export const AdminCard = ({
  admin,
  permissions
}: {
  admin: Omit<User, "password">;
  permissions?: Permission[];
}) => {
  const [isDropDownOpen, setDropDownOpen] = React.useState(false);

  const { data: userPermissions } = useQuery({
    queryKey: ["user_permissions", admin.id],
    queryFn: async () => fetchUserPermissionsById(admin.id)
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
          {permissions?.map((p) => (
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
