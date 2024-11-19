"use client";
import { useTooltip } from "@/shared/hooks/ui";
import { Box, Button, Heading, Icon, Pulse, Text } from "@/ui";
import { QueryKeys } from "@/utils/core/queryKeys";
import { getOnboardPendingUsers } from "@/utils/database/user/queries";
import { User } from "@prisma/client";
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
          <PendingUser
            key={user.id}
            user={user}
          />
        ))
      ) : (
        <Box
          style={{
            textColor: "success-light",
            padding: "lg",
            backgroundColor: "secondary",
            borderRadius: "lg"
          }}
        >
          All users have completed onboarding
        </Box>
      )}
    </Box>
  );
};

function PendingUser({ user }: { user: Omit<User, "password"> }) {
  const tooltip = useTooltip({
    anchorSelect: "#notify-button",
    content: `Send reminder email to complete onboarding`,
    place: "top-end"
  });

  return (
    <Box
      style={{
        width: "full",
        padding: "md",
        borderRadius: "lg",
        backgroundColor: "secondary",
        display: "flex-row",
        flexAlign: "center",
        flexSpacing: "space-between",
        gap: "md"
      }}
    >
      <Heading
        as="h3"
        text={user.email}
      />

      <Button
        options={{ variant: "ghost", id: "notify-button" }}
        style={{ display: "flex-row", flexAlign: "center", gap: "sm", paddingX: "xl" }}
      >
        <Icon
          name="bell"
          variant="duotone"
          style={{ fontSize: "xl" }}
        />

        {tooltip}
      </Button>
    </Box>
  );
}
