"use client";
import { useStyleToClass } from "@/tw-styled/style-to-class-resolver";
import { Box } from "./box/Box";
import { Button } from "./button/Button";

export const ComponentsDemo = () => {
  return (
    <div className="space-y-lg">
      <div className="demo">
        <h2 className="w-xs border-b mb-lg">Button</h2>
        <Button style={{ border: "sm" }}>Submit</Button>
      </div>

      <div className="demo">
        <h2 className="w-xs border-b mb-lg">Box</h2>
        <Box
          style={{
            border: "sm",
            width: "full",
            padding: "lg",
            className: "md:w-md lg:w-sm md:p-sm"
          }}
        >
          Box Children
        </Box>
      </div>
    </div>
  );
};
