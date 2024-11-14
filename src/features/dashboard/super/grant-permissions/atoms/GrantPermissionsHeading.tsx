import { useTooltip } from "@/shared/hooks/ui";
import { Box, Heading, Icon } from "@/ui";

export const GrantPermissionsHeading = () => {
  const tooltip = useTooltip({
    anchorSelect: "#grant_permissions_title",
    place: "top-start"
  });

  return (
    <Box style={{ display: "flex-row", flexAlign: "center", gap: "sm" }}>
      <Heading
        as="h3"
        text="Grant Permissions"
      />

      <Icon
        name="info"
        id="grant_permissions_title"
        tooltipHtml="Granting a permission will override the <br /> default permission status."
        style={{ fontSize: "lg" }}
      />

      {tooltip}
    </Box>
  );
};
