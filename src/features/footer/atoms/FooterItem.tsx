import { Children } from "@/tw-styled/types";
import { Heading, Wrapper } from "@/tw-styled/ui";

type FooterItemProps = {
  children?: Children;
  title?: string;
};

export const FooterItem = (props: FooterItemProps) => {
  const { title, children } = props;
  return (
    <Wrapper
      style={{
        parentWrapper: {
          backgroundColor: "secondary",
          padding: "lg",
          borderRadius: "lg",
          maxWidth: "lg",
          width: "full",
          className: `md:w-md`
        },
        childrenWrapper: {
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
    </Wrapper>
  );
};
