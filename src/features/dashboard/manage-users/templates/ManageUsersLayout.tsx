"use client";
type ManageUsersLayoutProps = {
  children: React.ReactNode;
};

export const ManageUsersLayout = (props: ManageUsersLayoutProps) => {
  const { children } = props;
  return <div>{children}</div>;
};
