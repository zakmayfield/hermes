import { useClassNameResolver } from "@/ui";
import { StackProps } from "./Stack.types";

export const Stack = (props: StackProps) => {
  const { children, style } = props;

  const classes = useClassNameResolver({
    wrapper: { display: "flex-col", gap: "sm", ...style }
  });

  return <div className={classes.get("wrapper")}>{children}</div>;
};
