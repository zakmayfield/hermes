"use client";
import { Box, Heading } from "@/ui";
import { useQuery } from "@tanstack/react-query";
import { recentUsers } from "./UserAnalytics.db";
import { useChart } from "@/shared/hooks";
import { formatChartData, getPastWeekDates } from "./UserAnalytics.signup";

export const UserAnalytics = () => {
  const { data } = useQuery({
    queryKey: ["recent_user_analytics"],
    queryFn: async () => await recentUsers({ dateRange: 7 })
  });

  const chart = useChart({
    data: formatChartData({
      dates: getPastWeekDates(),
      users: data
    }),
    xAxisDataKey: "date",
    lineDataKey: "signups",
    options: {
      height: 250,
      width: 750,
      hasGrid: true
    }
  });

  return (
    <Box>
      <Heading
        as="h3"
        text="Recent Sign Up Activity"
      />

      <div className="border rounded-lg border-white/25 p-sm inline-block">{chart}</div>
    </Box>
  );
};
