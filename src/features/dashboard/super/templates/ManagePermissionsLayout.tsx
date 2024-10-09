"use client";
import { Children } from "@/tw-styled/types";

type ManagePermissionsLayoutProps = {
  children: Children;
};

export const ManagePermissionsLayout = (props: ManagePermissionsLayoutProps) => {
  const { children } = props;
  return (
    <div>
      <h3>Permissions</h3>
      {children}
    </div>
  );
};
