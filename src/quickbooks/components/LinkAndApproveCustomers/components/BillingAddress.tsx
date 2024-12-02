import { CustomerBillAddr } from "@prisma/client";

export const BillingAddress = ({
  customerBillAddr
}: {
  customerBillAddr: CustomerBillAddr;
}) => {
  return (
    <div className="flex flex-col gap-md bg-theme-tertiary p-lg rounded-lg">
      <div>
        <h3 className="border-b">Billing Address</h3>
      </div>

      <div className="flex gap-md flex-wrap">
        <div className="flex flex-col gap-xs">
          <h4 className="italic opacity-75">Address</h4>
          <p className="bg-theme-primary px-lg py-xs rounded-lg min-w-xs">
            {customerBillAddr.line1}
          </p>
        </div>

        <div className="flex flex-col gap-xs">
          <h4 className="italic opacity-75">City</h4>
          <p className="bg-theme-primary px-lg py-xs rounded-lg min-w-2xs">
            {customerBillAddr.city}
          </p>
        </div>

        <div className="flex flex-col gap-xs">
          <h4 className="italic opacity-75">Province</h4>
          <p className="bg-theme-primary px-lg py-xs rounded-lg min-w-2xs">
            {customerBillAddr.state}
          </p>
        </div>

        <div className="flex flex-col gap-xs">
          <h4 className="italic opacity-75">Country</h4>
          <p className="bg-theme-primary px-lg py-xs rounded-lg min-w-2xs">
            {customerBillAddr.country}
          </p>
        </div>

        <div className="flex flex-col gap-xs">
          <h4 className="italic opacity-75">Postal Code</h4>
          <p className="bg-theme-primary px-lg py-xs rounded-lg min-w-2xs">
            {customerBillAddr.postalCode}
          </p>
        </div>
      </div>
    </div>
  );
};
