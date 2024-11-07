import { Box } from "@/ui/components";

type SegmentLayoutProps = {
  children: React.ReactNode;
  nav: JSX.Element;
};

export const SegmentLayout = (props: SegmentLayoutProps) => {
  const { children, nav } = props;
  return (
    <Box
      style={{
        display: "flex-col",
        gap: "md",
        flexSize: "grow"
      }}
    >
      {nav}

      <Box
        style={{
          padding: "lg",
          borderRadius: "lg",
          flexSize: "grow",
          backgroundColor: "primary"
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
