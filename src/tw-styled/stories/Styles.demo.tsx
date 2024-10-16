"use client";
import React from "react";
import { useStyleToClass } from "../style-to-class-resolver";
import { Layout } from "../ui";

export const StylesDemo = () => {
  const classes = useStyleToClass({
    a: {}
  });
  return (
    <Layout
      options={{ as: "main", titleText: "Foobar" }}
      style={{
        parentWrapper: { className: "demo" },
        titleWrapper: { className: "demo" },
        title: { className: "demo" },
        childrenWrapper: { className: "demo" },
        children: { className: "demo" }
      }}
    >
      <div>child 1</div>
      <div>child 2</div>
    </Layout>
  );
};
