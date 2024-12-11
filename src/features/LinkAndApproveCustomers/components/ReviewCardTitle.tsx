import { Icon } from "@/ui";
import { CustomerInfo, QuickbooksCustomerSync } from "@prisma/client";
import { useQueryClient } from "@tanstack/react-query";

export const ReviewCardTitle = ({
  customerInfo
}: {
  customerInfo: CustomerInfo | null;
}) => {
  const queryClient = useQueryClient();

  const queryData = queryClient.getQueryState<QuickbooksCustomerSync>([
    "quickbooks_customer_sync_ref",
    customerInfo?.userId
  ]);

  function isLinked() {
    if (queryData?.data) {
      return true;
    }

    if (queryData?.data === null) {
      return false;
    }
  }

  return (
    <div className="flex items-center gap-md">
      <h2>{customerInfo?.companyName}</h2>

      {queryData?.status === "pending" ? (
        <Icon
          name="spin"
          style={{ className: "animate-spin" }}
        />
      ) : isLinked() ? (
        <p>linked</p>
      ) : (
        <p>not linked</p>
      )}
    </div>
  );
};
