import { Box, Text } from "@/tw-styled/ui";
import { AuthorizedAdmin } from "@prisma/client";

export const AdminCard = ({ admin }: { admin: AuthorizedAdmin }) => {
  return (
    <Box>
      <Text>{admin.email}</Text>
    </Box>
  );
};
