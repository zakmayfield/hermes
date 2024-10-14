"use client";
import React from "react";
import { styleToClass } from "../style-to-class-resolver";

export const StylesDemo = () => {
  const result = styleToClass({
    foobar: {
      display: "flex-row",
      gap: "lg"
    },
    foobaz: {
      textDecoration: "underline",
      border: "sm",
      borderRadius: "lg",
      padding: "lg"
    }
  });

  console.log({ result });

  return (
    <div className="space-y-6">
      <div className={`demo bg-primary`}>
        <div className="demo bg-secondary">
          <div className="demo bg-tertiary">
            <div className={`demo bg-accent ${result.get("foobar")}`}>
              <p className={`${result.get("foobaz")}`}>Hello There</p>
            </div>
          </div>
        </div>
      </div>

      <div className="demo flex flex-col h-48 items-end justify-center">
        <div className="demo" />
        <div className="demo" />
      </div>
    </div>
  );
};
