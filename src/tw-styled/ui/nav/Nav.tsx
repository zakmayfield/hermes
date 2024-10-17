import { Children } from "@/tw-styled/types";

type NavProps = {
  children?: Children;
};

export const Nav = (props: NavProps) => {
  const { children } = props;
  return (
    <nav>
      <div>{children}</div>
    </nav>
  );
};
