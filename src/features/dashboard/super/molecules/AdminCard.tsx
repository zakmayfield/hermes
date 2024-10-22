import { Box, Button, Icon } from "@/tw-styled/ui";
import { AuthorizedAdmin } from "@prisma/client";
import { useDeleteAuthorizedAdmin } from "../templates/AuthorizedAdmins.hooks";
import { useState } from "react";
import { Modal } from "@/shared/components";

export const AdminCard = ({ admin }: { admin: AuthorizedAdmin }) => {
  const { mutate } = useDeleteAuthorizedAdmin();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box
      style={{
        width: "full",
        display: "flex-row",
        gap: "sm"
      }}
    >
      <Button
        handleClick={() => setIsModalOpen(true)}
        options={{ variant: "warning" }}
        style={{ padding: "none", paddingX: "lg", paddingY: "xs", className: "lg:px-sm" }}
      >
        <Icon
          name="trash"
          style={{ icon: { fontSize: "lg" } }}
        />
      </Button>

      <Box
        style={{
          backgroundColor: "secondary",
          padding: "xs",
          paddingX: "md",
          borderRadius: "md",
          width: "full",
          className: "text-right text-sm sm:text-base"
        }}
      >
        <span>{admin.email}</span>
      </Box>

      {isModalOpen && (
        <Modal>
          <div className="max-w-md w-full mx-lg p-xl rounded-lg bg-primary space-y-md shadow-2xl">
            <div>
              <h5>Are you sure you want to remove this admin?</h5>

              <h6 className="text-foreground/60 italic text-center">{admin.email}</h6>
            </div>

            <div className="flex gap-[var(--space-lg)]">
              <Button
                options={{ variant: "warning" }}
                handleClick={() => {
                  mutate({ authorized_admin_id: admin.authorized_admin_id });
                  setIsModalOpen(false);
                }}
                style={{ width: "full" }}
              >
                Delete
              </Button>

              <Button
                options={{ variant: "ghost" }}
                handleClick={() => setIsModalOpen(false)}
              >
                Back
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </Box>
  );
};
