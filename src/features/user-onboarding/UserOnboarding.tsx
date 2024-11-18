"use client";
import { Box, Pulse, Text } from "@/ui";
import { QueryKeys } from "@/utils/core/queryKeys";
import { getOnboardPendingUsers } from "@/utils/database/user/queries";
import { useQuery } from "@tanstack/react-query";

export const UserOnboarding = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [QueryKeys.ONBOARD_PENDING_LIST],
    queryFn: async () => await getOnboardPendingUsers(),
    staleTime: Infinity
  });

  return (
    <Box
      style={{
        borderRadius: "lg",
        backgroundColor: "primary",
        padding: "md",
        spaceY: "md"
      }}
    >
      <h2>Users Pending Onboarding</h2>

      {isLoading ? (
        <Pulse />
      ) : error ? (
        <Box style={{ textColor: "warning", textAlign: "center" }}>{error.message}</Box>
      ) : data && data.length > 0 ? (
        data.map((user) => (
          <Box
            key={user.id}
            style={{ border: "sm", padding: "sm" }}
          >
            <Text>{user.email}</Text>
          </Box>
        ))
      ) : (
        <Box style={{ textColor: "success-light" }}>
          All users have completed onboarding
        </Box>
      )}
    </Box>
  );
};
