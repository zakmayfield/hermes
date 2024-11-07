import { useFetchAuthorizedAdmins } from "../templates/AuthorizedAdmins.hooks";
import { AdminCard } from "../molecules";
import { Box, Pulse } from "@/ui";

export const AdminList = () => {
  const { data, isLoading } = useFetchAuthorizedAdmins();
  const loading = isLoading && <Pulse size="md" />;

  const adminCards =
    data &&
    data.map((admin) => (
      <AdminCard
        key={admin.authorized_admin_id}
        admin={admin}
      />
    ));

  const emptyAdmins = data && data.length === 0 && (
    <p className="text-foreground/70 italic text-center lg:text-left">
      Authorize an email to get started
    </p>
  );

  return (
    <Box
      style={{
        width: "full",
        display: "flex-col",
        gap: "md"
      }}
    >
      {loading}
      {adminCards}
      {emptyAdmins}
    </Box>
  );
};
