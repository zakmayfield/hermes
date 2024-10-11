"use client";
import React from "react";
import { useThemeCtx } from "../theme";
import { useStyleResolver } from "../tools";

export const StylesDemo = () => {
  const theme = useThemeCtx();
  console.log(theme.colors.primary);

  const x = useStyleResolver({
    foobar: { bgColor: "primary" }
  });

  return (
    <div className="demo-col space-y-6">
      <div className={`demo bg-primary`}>
        <div className="demo bg-secondary">
          <div className="demo bg-tertiary">
            <div className="demo bg-accent">
              <p
                className={`demo ${x.foobar}`}
                style={{ backgroundColor: theme.colors.secondary }}
              >
                Hello World
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
