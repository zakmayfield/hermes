import { CustomerInfo } from "@prisma/client";

export const ReviewCardTitle = ({
  customerInfo
}: {
  customerInfo: CustomerInfo | null;
}) => {
  return (
    <div className="flex items-center gap-lg">
      <h2>{customerInfo?.companyName}</h2>
      {customerInfo?.isExistingCustomer ? (
        <p className="border rounded-full px-sm text-sm">existing customer</p>
      ) : (
        <p className="border rounded-full px-sm text-sm">new customer</p>
      )}
    </div>
  );
};
