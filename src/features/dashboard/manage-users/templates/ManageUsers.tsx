"use client";
import React from "react";
import { User } from "@prisma/client";
import { useTooltip } from "@/shared/hooks";
import { useIcons } from "@/tw-styled/tools";
import { useFetchUnapprovedUsers, useToggleUserApproval } from "./ManageUsers.hooks";
import { Button, Icon, Pulse } from "@/ui/components";

export const ManageUsers = () => {
  const { data, isLoading } = useFetchUnapprovedUsers();
  const { mutate } = useToggleUserApproval();

  const icons = useIcons({ names: ["info"] });

  const tooltip = useTooltip({
    anchorSelect: "#user_approval_info"
  });

  const loading = isLoading && <Pulse size="md" />;

  const UserCard = ({ user }: { user: Omit<User, "password"> }) => (
    <div className="flex flex-col sm:flex-row gap-[var(--space-sm)] justify-between">
      <div className="bg-secondary rounded-md p-md sm:p-sm px-md grow space-y-md">
        <p className="text-sm sm:text-base">Company Name</p>
        <p className="text-sm sm:text-base">{user.email}</p>
      </div>

      <Button
        options={{ variant: "primary" }}
        style={{ padding: "none", paddingX: "md", paddingY: "xs" }}
        handleClick={() => mutate(user.id)}
      >
        <Icon
          name="check"
          style={{ icon: { fontSize: "xl", textAlign: "center", className: "mx-auto" } }}
        />
      </Button>
    </div>
  );

  const emptyData = data && data.length === 0 && (
    <div>
      <p className="text-foreground/80 italic text-center lg:text-left">
        No users awaiting approval
      </p>
    </div>
  );

  const usersList = (
    <div className="space-y-md lg:max-w-lg lg:w-full lg:mx-auto bg-tertiary p-md lg:p-lg rounded-md">
      <div className="flex gap-[var(--space-sm)] items-center">
        <h3>Clients Awaiting Approval</h3>
        <icons.info
          id="user_approval_info"
          className="text-lg"
          data-tooltip-html="Approving a user will enable that user to view products and create orders <br /> after they have successfully onboarded"
        />
        {tooltip}
      </div>

      <div className="flex flex-col gap-[var(--space-lg)] sm:gap-[var(--space-md)]">
        {data &&
          data.map((user) => (
            <UserCard
              key={user.id}
              user={user}
            />
          ))}

        {emptyData}
        {loading}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-[var(--space-md)]">
      <h2>Manage Users</h2>
      {usersList}
    </div>
  );
};
