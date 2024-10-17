import { Layout } from "@/tw-styled/ui";

type PermissionListProps = { children: React.ReactNode; title: string };

export const PermissionList = (props: PermissionListProps) => {
  const { title, children } = props;
  return <Layout options={{ titleText: title, titleAs: "h5" }}>{children}</Layout>;
};
