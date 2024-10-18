"use client";

import { Styles } from "@/tw-styled/types";
import { Icon } from "./Icon";
import { useStyleToClass } from "@/tw-styled/style-to-class-resolver";

type IconDemoProps = {
  fontSize?: Styles["fontSize"];
};

export const IconDemo = (props: IconDemoProps) => {
  const { fontSize = "md" } = props;

  const classes = useStyleToClass({
    default: { fontSize }
  });

  const defaultClasses = classes.get("default");

  const styles = (
    <div>
      <h3>Styles</h3>

      <div className="demo-row border-0">
        <Icon
          name="cart"
          style={{ icon: { className: defaultClasses } }}
        />
        <Icon
          name="info"
          style={{ icon: { className: defaultClasses } }}
        />
        <Icon
          name="check"
          style={{ icon: { className: defaultClasses } }}
        />
        <Icon
          name="x"
          style={{ icon: { className: defaultClasses } }}
        />
        <Icon
          name="error"
          style={{ icon: { className: defaultClasses } }}
        />
        <Icon
          name="spin"
          style={{ icon: { className: defaultClasses } }}
        />
      </div>

      <div className="demo-row border-0">
        <Icon
          name="cart"
          variant="duotone"
          style={{ icon: { className: defaultClasses } }}
        />
        <Icon
          name="info"
          variant="duotone"
          style={{ icon: { className: defaultClasses } }}
        />
        <Icon
          name="check"
          variant="duotone"
          style={{ icon: { className: defaultClasses } }}
        />
        <Icon
          name="x"
          variant="duotone"
          style={{ icon: { className: defaultClasses } }}
        />
        <Icon
          name="error"
          variant="duotone"
          style={{ icon: { className: defaultClasses } }}
        />
        <Icon
          name="spin"
          variant="duotone"
          style={{ icon: { className: defaultClasses } }}
        />
      </div>
    </div>
  );

  return <div className="demo-col">{styles}</div>;
};
