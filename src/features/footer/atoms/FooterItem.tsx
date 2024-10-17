import { Children } from "@/tw-styled/types";
import { Box, Heading } from "@/tw-styled/ui";

type FooterItemProps = {
  children?: Children;
  title?: string;
};

export const FooterItem = (props: FooterItemProps) => {
  const { title, children } = props;
  return (
    <Box
      style={{
        wrapper: {
          backgroundColor: "primary",
          padding: "lg",
          borderRadius: "lg",
          maxWidth: "lg",
          width: "full",
          className: `md:w-md`
        }
      }}
    >
      <Box
        style={{
          wrapper: {
            display: "flex-col",
            gap: "md"
          }
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
