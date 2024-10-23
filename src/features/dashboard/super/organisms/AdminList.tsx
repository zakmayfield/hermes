import { Box, Pulse } from "@/tw-styled/ui";
import { AdminCard } from "../molecules";
import { useFetchAuthorizedAdmins } from "../templates/AuthorizedAdmins.hooks";
import { useIcons } from "@/tw-styled/tools";
import { useTooltip } from "@/shared/hooks";

export const AdminList = () => {
  const { data, isLoading } = useFetchAuthorizedAdmins();
  const icons = useIcons({ names: ["info"] });
  const tooltip = useTooltip({ anchorSelect: "#delete_authorized_admin_info" });

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
      <div className="flex items-center gap-[var(--space-sm)]">
        <h3>All Authorized Admins</h3>
        <icons.info
          id="delete_authorized_admin_info"
          className="text-lg"
          data-tooltip-html="Deleting an authorized admin will remove the users <br /> administrative privileges"
        />
        {tooltip}
      </div>
      {loading}
      {adminCards}
      {emptyAdmins}
    </Box>
  );
};
