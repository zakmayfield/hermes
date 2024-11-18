"use client";

import { Box, Pulse, Text } from "@/ui";
import { QueryKeys } from "@/utils/core/queryKeys";
import { getUnapprovedUsers } from "@/utils/database/user/queries";
import { useQuery } from "@tanstack/react-query";

export const UserApprovals = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [QueryKeys.UNAPPROVED_USERS_LIST],
    queryFn: async () => await getUnapprovedUsers(),
    staleTime: Infinity
  });

  return (
    <Box
      style={{
        maxWidth: "md",
        borderRadius: "lg",
        backgroundColor: "primary",
        padding: "md",
        spaceY: "md"
      }}
    >
      <h2>Users Requiring Approval</h2>

      {isLoading ? (
        <Pulse />
      ) : error ? (
        <Box style={{ textColor: "warning", textAlign: "center" }}>{error.message}</Box>
      ) : data && data.length > 0 ? (
        data.map((user) => (
          <Box style={{ border: "sm", padding: "sm" }}>
            <Text>{user.email}</Text>
          </Box>
        ))
      ) : (
        <Box style={{ textColor: "success-light" }}>All users are approved</Box>
      )}
    </Box>
  );
};
