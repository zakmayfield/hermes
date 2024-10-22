"use client";
import { useIcons } from "@/tw-styled/tools";
import { Box } from "../box/Box";
import { Heading } from "../heading/Heading";
import { Card } from "./Card";

export const CardDemo = () => {
  const icons = useIcons({
    names: ["info"]
  });
  return (
    <div className="demo-col">
      <Card
        options={{ title: "Card Title" }}
        style={{ wrapper: { backgroundColor: "primary" } }}
      >
        <div>Body content</div>
      </Card>

      <Card style={{ wrapper: { backgroundColor: "primary" } }}>
        <Box
          style={{
            display: "flex-row",
            flexRowPosition: "center-center",
            flexSpacing: "space-between"
          }}
        >
          <Heading
            text="Card Title"
            as="h5"
          />
          <icons.info />
        </Box>

        <div>Body content</div>
      </Card>
    </div>
  );
};
