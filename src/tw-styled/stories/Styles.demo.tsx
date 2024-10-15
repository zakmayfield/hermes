"use client";
import React from "react";
import { Button } from "../ui";

export const StylesDemo = () => {
  return (
    <div className="demo h-screen">
      <Button
        style={{
          button: { width: "sm", border: "sm" }
        }}
      />
    </div>
  );
};
