"use client";

import { useToast } from "@/shared/hooks/ui";
import { Box, Button, Icon, Pulse, Text } from "@/ui";
import { QueryKeys } from "@/utils/core/queryKeys";
import { toggleUserApproval } from "@/utils/database/user/mutations";
import { getUnapprovedUsers } from "@/utils/database/user/queries";
import { Onboarding, User } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const UserApprovals = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: [QueryKeys.UNAPPROVED_USERS_LIST],
    queryFn: async () => await getUnapprovedUsers(),
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
      <h2>Users Requiring Approval</h2>

      {isLoading ? (
        <Pulse />
      ) : error ? (
        <Box style={{ textColor: "warning", textAlign: "center" }}>{error.message}</Box>
      ) : data && data.length > 0 ? (
        data.map((user) => (
          <UnapprovedUser
            key={user.id}
            user={user}
          />
        ))
      ) : (
        <Box style={{ textColor: "success-light" }}>All users are approved</Box>
      )}
    </Box>
  );
};

function UnapprovedUser({ user }: { user: Omit<User, "password"> }) {
  const { toast } = useToast();

  const queryClient = useQueryClient();

  const handleFilterCache = (data: Onboarding) => {
    queryClient.setQueryData<Omit<User, "password">[]>(
      [QueryKeys.UNAPPROVED_USERS_LIST],
      (oldData) => {
        return oldData ? oldData.filter((user) => user.id !== data.user_id) : oldData;
      }
    );
  };

  const { mutate } = useMutation({
    mutationFn: toggleUserApproval,
    onSuccess(data) {
      handleFilterCache(data);
      toast("Successfully approved user");
    },
    onError(error) {
      toast(error.message, "error");
    }
  });

  return (
    <Box
      style={{
        border: "sm",
        padding: "sm",
        display: "flex-row",
        flexAlign: "center",
        gap: "sm"
      }}
    >
      <Button
        options={{ variant: "primary" }}
        style={{ padding: "none" }}
        handleClick={() => mutate(user.id)}
      >
        <Icon
          name="check"
          style={{ fontSize: "xl", textAlign: "center", className: "mx-auto" }}
        />
      </Button>

      <Text>{user.email}</Text>
    </Box>
  );
}
