import { Box, Heading } from "@/tw-styled/ui";

type PermissionListProps = { children: React.ReactNode; title: string };

export const PermissionList = (props: PermissionListProps) => {
  const { title, children } = props;
  return (
    <Box style={{ spaceY: "sm", minHeight: "3xs" }}>
      <Heading
        as="h3"
        text={title}
      />
      {children}
    </Box>
  );
};
