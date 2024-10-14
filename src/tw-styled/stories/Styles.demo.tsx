"use client";
import React from "react";
import { styleToClass } from "../style-to-class-resolver";

export const StylesDemo = () => {
  const classes = styleToClass({
    a: { backgroundColor: "primary", className: "demo" },
    b: { backgroundColor: "secondary", className: "demo" }
  });

  return (
    <div className="demo h-screen">
      <div className={classes.get("a")}>
        <div className={classes.get("b")}></div>
      </div>
    </div>
  );
};
