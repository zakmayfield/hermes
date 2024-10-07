type PermissionListProps = { children: React.ReactNode; title: string };

export const PermissionList = (props: PermissionListProps) => {
  const { title, children } = props;
  return (
    <div>
      <h5>{title}</h5>
      {children}
    </div>
  );
};
