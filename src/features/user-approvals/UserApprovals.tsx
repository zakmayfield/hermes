"use client";

import { useToast } from "@/shared/hooks/ui";
import { Box, Button, Heading, Icon, Pulse, Text } from "@/ui";
import { $Enums } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { UserWithOnboardingStatus } from "@/data/database/models/User";
import { getCustomersByIsApproved, toggleUserIsApproved } from "@/data/database/user";

export const UserApprovals = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["customers", "isApproved", false],
    queryFn: async () => await getCustomersByIsApproved({ isApproved: false }),
    staleTime: Infinity
  });

  return (
    <Box
      style={{
        borderRadius: "lg",
        backgroundColor: "theme-primary",
        padding: "md",
        spaceY: "md"
      }}
    >
      <h2>Users Requiring Approval</h2>

      {isLoading ? (
        <Pulse />
      ) : error ? (
        <Box style={{ textColor: "theme-red", textAlign: "center" }}>{error.message}</Box>
      ) : data && data.length > 0 ? (
        data.map((user) => (
          <UnapprovedUser
            key={user.id}
            user={user}
          />
        ))
      ) : (
        <Box
          style={{
            textColor: "theme-green",
            backgroundColor: "theme-secondary",
            padding: "lg",
            borderRadius: "lg"
          }}
        >
          All users are approved
        </Box>
      )}
    </Box>
  );
};

function UnapprovedUser({ user }: { user: UserWithOnboardingStatus }) {
  const { toast } = useToast();

  const queryClient = useQueryClient();

  const handleInvalidateQuery = () => {
    queryClient.invalidateQueries({ queryKey: ["customers", "isApproved", false] });
  };

  const { mutate } = useMutation({
    mutationFn: toggleUserIsApproved,
    onSuccess() {
      handleInvalidateQuery();
      toast("Successfully approved user");
    },
    onError(error) {
      toast(error.message, "error");
    }
  });

  return (
    <Box>
      <Box
        style={{
          width: "full",
          minHeight: "3xs",
          padding: "md",
          borderRadius: "lg",
          backgroundColor: "theme-secondary",
          display: "flex-col",
          gap: "md"
        }}
      >
        {/* Title */}
        <Box style={{ display: "flex-row", flexAlign: "center", gap: "sm" }}>
          <Heading
            as="h3"
            text={user.email}
          />

          <Text
            style={{
              border: "sm",
              borderRadius: "lg",
              paddingX: "sm",
              fontSize: "sm",
              className: `text-foreground border-foreground/50 ${
                user.onboarding?.status === $Enums.OnboardingStatus.PENDING
                  ? "bg-theme-red/50"
                  : "bg-theme-green/50"
              }`
            }}
          >
            onboarding {user.onboarding?.status.toLowerCase()}
          </Text>

          <Button
            options={{ variant: "green" }}
            style={{ paddingX: "xl", className: "ml-auto" }}
            handleClick={() => mutate(user.id)}
          >
            <Icon
              name="check"
              style={{ fontSize: "xl", textAlign: "center", className: "mx-auto" }}
            />
          </Button>
        </Box>

        {/* Body */}
        <Box style={{ display: "flex-row", flexWrap: "wrap" }}>
          <Box style={{ minWidth: "2xs", spaceY: "sm" }}>
            <Heading
              as="h5"
              text="Contact"
              style={{ className: "text-foreground/50 border-b border-foreground/50" }}
            />

            <Box>
              <Text>Name</Text>
              <Text>123-123-1234</Text>
            </Box>
          </Box>

          <Box style={{ minWidth: "2xs", spaceY: "sm" }}>
            <Heading
              as="h5"
              text="Company"
              style={{ className: "text-foreground/50 border-b border-foreground/50" }}
            />

            <Box>
              <Text>Name</Text>
              <Text>Account payable</Text>
              <Text>Payment method</Text>
            </Box>
          </Box>

          <Box style={{ spaceY: "sm" }}>
            <Heading
              as="h5"
              text="Address"
              style={{ className: "text-foreground/50 border-b border-foreground/50" }}
            />

            <Box style={{ display: "flex-row", gap: "lg" }}>
              <Box>
                <Text style={{ className: "mb-xs text-foreground/50" }}>Shipping</Text>
                <Text>4 Old York Cres</Text>
                <Text>Kitchener, ON</Text>
                <Text>N2B 3G3</Text>
              </Box>

              <Box>
                <Text style={{ className: "mb-xs text-foreground/50" }}>Billing</Text>
                <Text>4 Old York Cres</Text>
                <Text>Kitchener, ON</Text>
                <Text>N2B 3G3</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
