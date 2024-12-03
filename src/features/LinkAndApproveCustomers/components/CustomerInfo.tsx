import { CustomerInfo as CustomerInfoType } from "@prisma/client";
import { Icon } from "@/ui";

export const CustomerInfo = ({
  email,
  customerInfo
}: {
  email: string;
  customerInfo: CustomerInfoType | null;
}) => {
  return (
    <div className="flex flex-col gap-md bg-theme-tertiary p-md rounded-lg">
      <div>
        <h3 className="border-b">Customer Information</h3>
      </div>

      <div className="flex gap-md flex-wrap">
        <div className="flex flex-col gap-xs">
          <h4 className="italic opacity-75">Company Name</h4>
          <p className="bg-theme-primary px-lg py-xs rounded-lg min-w-xs">
            {customerInfo?.companyName}
          </p>
        </div>

        <div className="flex flex-col gap-xs">
          <h4 className="italic opacity-75">Customer Email</h4>
          <p className="bg-theme-primary px-lg py-xs rounded-lg min-w-xs">{email}</p>
        </div>

        {customerInfo?.phoneNumber && (
          <div className="flex flex-col gap-xs">
            <h4 className="italic opacity-75">Phone Number</h4>
            <p className="bg-theme-primary px-lg py-xs rounded-lg min-w-xs">
              {customerInfo.phoneNumber}
            </p>
          </div>
        )}

        <div className="flex flex-col gap-xs">
          <h4 className="italic opacity-75">Existing Customer</h4>
          <div className="bg-theme-primary px-lg py-xs rounded-lg flex justify-center max-w-4xs">
            <Icon
              name={customerInfo?.isExistingCustomer ? "check" : "x"}
              style={{
                textColor: customerInfo?.isExistingCustomer
                  ? "theme-green-light"
                  : "theme-red-light",
                className: "text-2xl"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
