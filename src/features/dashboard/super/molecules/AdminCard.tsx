import { Box, Icon } from "@/tw-styled/ui";
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
      <button
        onClick={() => mutate({ authorized_admin_id: admin.authorized_admin_id })}
        className="p-0 px-lg lg:px-sm py-xs bg-warning"
      >
        <Icon
          name="x"
          style={{ icon: { fontSize: "lg" } }}
        />
      </button>

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
