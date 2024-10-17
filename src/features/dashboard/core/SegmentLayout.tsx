import { Box } from "@/tw-styled/ui";

type SegmentLayoutProps = {
  children: React.ReactNode;
  nav: JSX.Element;
};

export const SegmentLayout = (props: SegmentLayoutProps) => {
  const { children, nav } = props;
  return (
    <Box
      style={{
        wrapper: { display: "flex-col", gap: "md", flexSize: "grow" }
      }}
    >
      {nav}

      <Box
        style={{
          wrapper: {
            padding: "lg",
            borderRadius: "lg",
            flexSize: "grow",
            backgroundColor: "primary"
          }
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
