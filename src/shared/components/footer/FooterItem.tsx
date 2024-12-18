import { Box, Heading } from "@/ui/components";

type FooterItemProps = {
  children?: React.ReactNode;
  title?: string;
};

export const FooterItem = (props: FooterItemProps) => {
  const { title, children } = props;
  return (
    <Box
      style={{
        backgroundColor: "theme-primary",
        padding: "lg",
        borderRadius: "lg",
        maxWidth: "lg",
        width: "full",
        className: `md:w-md`
      }}
    >
      <Box
        style={{
          display: "flex-col",
          gap: "md"
        }}
      >
        <Heading
          as="h6"
          text={title}
        />

        {children}
      </Box>
    </Box>
  );
};
