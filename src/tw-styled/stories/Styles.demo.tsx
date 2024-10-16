"use client";
import { Box } from "../ui";

export const StylesDemo = () => {
  return (
    <Box style={{ wrapper: { className: "demo", minHeight: "lg", display: "flex-col" } }}>
      <Box style={{ wrapper: { className: "demo" } }} />
      <Box style={{ wrapper: { className: "demo", flexSize: "grow" } }} />
    </Box>
  );
};
