import { Box } from "@/tw-styled/ui";
import { AdminCard } from "../molecules";
import { useFetchAuthorizedAdmins } from "../templates/AuthorizedAdmins.hooks";

export const AdminList = () => {
  const { data } = useFetchAuthorizedAdmins();

  const adminCards =
    data &&
    data.map((admin) => (
      <AdminCard
        key={admin.authorized_admin_id}
        admin={admin}
      />
    ));

  return <Box>{adminCards}</Box>;
};
