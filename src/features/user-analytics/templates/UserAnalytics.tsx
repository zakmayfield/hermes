"use client";
import { Box, Heading } from "@/ui";
import { useQuery } from "@tanstack/react-query";
import { formatSignupData } from "./UserAnalytics.utils";
import { useChart } from "@/shared/hooks/ui";
import { QueryKeys } from "@/utils/core/queryKeys";
import { getRecentUsers } from "@/utils/database/user/queries";

export const UserAnalytics = () => {
  const { data } = useQuery({
    queryKey: [QueryKeys.RECENT_CUSTOMER_SIGNUPS],
    queryFn: async () => await getRecentUsers(7)
  });

  {
    /*
    Recharts may not be the best call for data vis because they do not support SSR out of the box 
    so there are some inherent hydration issues: see console error
  */
  }

  // TODO: *** Reintegrate dynamic loading and pass a loading prop to the `dynamic` call ***
  // See: https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#adding-a-custom-loading-component

  const chart = useChart({
    data: formatSignupData({ users: data }),
    xAxisDataKey: "date",
    lineDataKey: "signups",
    options: {
      height: 250,
      width: 750,
      hasGrid: true
    }
  });

  return (
    <Box style={{ spaceY: "md" }}>
      <Heading
        as="h3"
        text="Recent Sign Up Activity"
      />

      <div className="border rounded-lg border-white/25 p-sm inline-block">{chart}</div>
    </Box>
  );
};
