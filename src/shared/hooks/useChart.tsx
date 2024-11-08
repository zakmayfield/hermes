import { CartesianGrid, Label, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

export const useChart = (props: {
  data: any;
  lineDataKey: string;
  xAxisDataKey: string;
  options?: {
    width?: number;
    height?: number;
    hasGrid?: boolean;
  };
}) => {
  const { data, xAxisDataKey, lineDataKey, options } = props;
  return (
    <LineChart
      width={options?.width || 800}
      height={options?.height || 200}
      data={data}
      margin={{ bottom: 15, right: 55, top: 20 }}
    >
      {options?.hasGrid && (
        <CartesianGrid
          strokeDasharray="3 3"
          opacity={0.25}
        />
      )}
      <Line
        type="monotone"
        dataKey={lineDataKey}
      />
      <XAxis
        dataKey={xAxisDataKey}
        tickMargin={10}
      />
      <YAxis allowDecimals={false} />
      <Tooltip
        active={true}
        labelStyle={{ display: "none" }}
      />
    </LineChart>
  );
};
