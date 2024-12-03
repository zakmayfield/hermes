import { CustomerInfo, QuickbooksCustomerSync } from "@prisma/client";

export const ReviewCardTitle = ({
  customerInfo,
  qbSyncRecord
}: {
  customerInfo: CustomerInfo | null;
  qbSyncRecord: QuickbooksCustomerSync | null | undefined;
}) => {
  const isLinked = !!qbSyncRecord;
  return (
    <div className="flex items-center gap-md">
      <h2>{customerInfo?.companyName}</h2>
      <p
        className={`border rounded-full px-md opacity-75 text-sm ${
          !isLinked ? "bg-theme-red" : "bg-theme-green"
        }`}
      >
        {!isLinked ? "not linked" : "linked"}
      </p>
    </div>
  );
};
