"use client";
import { Box } from "./box/Box";
import { Button } from "./button/Button";
import { Layout } from "./layout/Layout";

export const ComponentsDemo = () => {
  return (
    <div className="space-y-lg">
      <div className="demo">
        <h2 className="w-xs border-b mb-lg">Styles</h2>
        <div className="border h-sm" />
      </div>

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

      <div className="demo">
        <h2 className="w-xs border-b mb-lg">Layout</h2>
        <Layout
          options={{ title: <h3>Title</h3> }}
          style={{
            parentWrapper: { border: "sm", padding: "lg", spaceY: "lg" },
            titleWrapper: { border: "sm" },
            bodyWrapper: { border: "sm" }
          }}
        >
          <div>
            <p>layout child one</p>
          </div>
          <div>
            <p>layout child two</p>
          </div>
        </Layout>
      </div>
    </div>
  );
};
