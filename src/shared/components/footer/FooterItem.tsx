import { Children } from "@/tw-styled/types";
import { Heading } from "@/tw-styled/ui";
import { Box } from "@/ui/components";

type FooterItemProps = {
  children?: Children;
  title?: string;
};

export const FooterItem = (props: FooterItemProps) => {
  const { title, children } = props;
  return (
    <Box
      style={{
        backgroundColor: "primary",
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
