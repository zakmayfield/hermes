import { classHooks } from "@/shared/hooks";

export type TTextStyleProps = {
  className?: string;
  style?: {
    width?: "auto" | "sm" | "md" | "lg" | "full";
    padding?: "sm" | "md" | "lg";
    margin?: "sm" | "md" | "lg";
    position?: "left" | "center" | "right";
  };
};

type TTextProps = TTextStyleProps & {
  children: React.ReactNode;
  as?: "p" | "span";
};

export const Text = (props: TTextProps) => {
  const { children, as = "p" } = props;
  const classes = classHooks.useTextClasses({ ...props });

  switch (as) {
    case "p":
      return <p className={classes.wrapper}>{children}</p>;
    case "span":
      return <span className={classes.wrapper}>{children}</span>;
  }
};
