import { Box, Button, Icon } from "@/tw-styled/ui";
import { AuthorizedAdmin } from "@prisma/client";
import { useDeleteAuthorizedAdmin } from "../templates/AuthorizedAdmins.hooks";

export const AdminCard = ({ admin }: { admin: AuthorizedAdmin }) => {
  const { mutate } = useDeleteAuthorizedAdmin();

  return (
    <Box
      style={{
        width: "full",
        display: "flex-row",
        gap: "sm"
      }}
    >
      <Button
        handleClick={() => mutate({ authorized_admin_id: admin.authorized_admin_id })}
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
    </Box>
  );
};
