import { useStyleResolver } from "@/tw-styled/style-resolver/hooks";
import { Children, DefaultStyleProps, HeadingElements } from "@/tw-styled/types";
import React, { useMemo } from "react";
import { styleHooks } from "../ui/hooks";

type LayoutDemoProps = {
  children?: "1" | "2" | "3";
  title?: "a" | "b";
  borders?: boolean;
  headingAs?: HeadingElements;
  style?: {
    parentWrapper?: DefaultStyleProps;
    childrenWrapper?: DefaultStyleProps;
    children?: DefaultStyleProps;
    headingWrapper?: DefaultStyleProps;
    headingChildren?: DefaultStyleProps;
  };
};

const getChildren = (
  children: LayoutDemoProps["children"],
  classes: Record<string, string>,
  border: " border" | ""
) => {
  const ChildrenWrapper = ({ children }: { children?: Children }) =>
    useMemo(() => {
      return <div className={classes.childrenWrapper + border}>{children}</div>;
    }, [border, classes]);

  const child = useMemo(() => {
    switch (children) {
      case "1":
        return (
          <div className={classes.children + border}>
            <h3>Child 1</h3>
            <p>
              Child 1 content: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore animi exercitationem eius explicabo recusandae veritatis eveniet,
              temporibus possimus est ex labore at voluptatum laudantium totam.
              Consequatur eius illum dicta tempora.
            </p>
          </div>
        );
      case "2":
        return [
          <div
            className={classes.children + border + " max-w-sm w-full"}
            key={0}
          >
            <h3>Child 1</h3>
            <p>
              Child 1 content: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore animi exercitationem eius explicabo recusandae veritatis eveniet,
              temporibus possimus est ex labore at voluptatum laudantium totam.
              Consequatur eius illum dicta tempora.
            </p>
          </div>,
          <div
            className={classes.children + border + " flex-grow"}
            key={1}
          >
            <h3>Child 2</h3>
            <p>
              Child 2 content: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore animi exercitationem eius explicabo recusandae veritatis eveniet,
              temporibus possimus est ex labore at voluptatum laudantium totam.
              Consequatur eius illum dicta tempora.
            </p>
          </div>
        ];
      case "3":
        return [
          <div
            className={classes.children + border + " max-w-sm w-full"}
            key={0}
          >
            <h3>Child 1</h3>
            <p>
              Child 1 content: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore animi exercitationem eius explicabo recusandae veritatis eveniet,
              temporibus possimus est ex labore at voluptatum laudantium totam.
              Consequatur eius illum dicta tempora.
            </p>
          </div>,
          <div
            className={classes.children + border + " flex-grow"}
            key={1}
          >
            <h3>Child 2</h3>
            <p>
              Child 2 content: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore animi exercitationem eius explicabo recusandae veritatis eveniet,
              temporibus possimus est ex labore at voluptatum laudantium totam.
              Consequatur eius illum dicta tempora.
            </p>
          </div>,
          <div
            className={classes.children + border + " max-w-sm w-full"}
            key={2}
          >
            <h3>Child 3</h3>
            <p>
              Child 3 content: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore animi exercitationem eius explicabo recusandae veritatis eveniet,
              temporibus possimus est ex labore at voluptatum laudantium totam.
              Consequatur eius illum dicta tempora.
            </p>
          </div>
        ];
    }
  }, [children, classes, border]);

  return <ChildrenWrapper>{child}</ChildrenWrapper>;
};

const getHeading = (
  title: LayoutDemoProps["title"],
  classes: Record<string, string>,
  border: " border" | "",
  headingAs: HeadingElements
) => {
  const HeadingWrapper = ({ children }: { children?: Children }) =>
    useMemo(() => {
      return <div className={classes.headingWrapper + border}>{children}</div>;
    }, [border, classes]);

  const heading = useMemo(() => {
    const titleText = title === "a" ? "Title A" : "Title B";

    return React.createElement(
      headingAs,
      { className: classes.headingChildren + border },
      titleText
    );
  }, [title, border, headingAs, classes]);

  return (
    <HeadingWrapper>
      {heading}

      {title === "b" && (
        <span className={classes.headingChildren + border}>title sub content</span>
      )}
    </HeadingWrapper>
  );
};

export const LayoutDemo = (props: LayoutDemoProps) => {
  const { children = "1", title = "a", headingAs = "h1", borders = false, style } = props;
  const border = (borders && " border") || "";

  const styles = styleHooks.useLayoutStyles({ style });
  const classes = useStyleResolver({ ...styles });

  const titleComp = getHeading(title, classes, border, headingAs);
  const childrenComp = getChildren(children, classes, border);

  return (
    <div className={classes.parentWrapper + border}>
      {titleComp}
      {childrenComp}
    </div>
  );
};
