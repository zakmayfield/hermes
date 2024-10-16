"use client";
import React from "react";
import { Layout } from "../ui";

export const StylesDemo = () => {
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
