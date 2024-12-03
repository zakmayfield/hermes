import { CustomerShipAddr } from "@prisma/client";

export const ShippingAddress = ({
  customerShipAddr
}: {
  customerShipAddr: CustomerShipAddr;
}) => {
  return (
    <div className="flex flex-col gap-md bg-theme-tertiary p-md rounded-lg">
      <div>
        <h3 className="border-b">Shipping Address</h3>
      </div>

      <div className="flex gap-md flex-wrap">
        <div className="flex flex-col gap-xs">
          <h4 className="italic opacity-75">Address</h4>
          <p className="bg-theme-primary px-lg py-xs rounded-lg min-w-xs">
            {customerShipAddr.line1}
          </p>
        </div>

        <div className="flex flex-col gap-xs">
          <h4 className="italic opacity-75">City</h4>
          <p className="bg-theme-primary px-lg py-xs rounded-lg min-w-2xs">
            {customerShipAddr.city}
          </p>
        </div>

        <div className="flex flex-col gap-xs">
          <h4 className="italic opacity-75">Province</h4>
          <p className="bg-theme-primary px-lg py-xs rounded-lg min-w-2xs">
            {customerShipAddr.state}
          </p>
        </div>

        <div className="flex flex-col gap-xs">
          <h4 className="italic opacity-75">Country</h4>
          <p className="bg-theme-primary px-lg py-xs rounded-lg min-w-2xs">
            {customerShipAddr.country}
          </p>
        </div>

        <div className="flex flex-col gap-xs">
          <h4 className="italic opacity-75">Postal Code</h4>
          <p className="bg-theme-primary px-lg py-xs rounded-lg min-w-2xs">
            {customerShipAddr.postalCode}
          </p>
        </div>
      </div>
    </div>
  );
};
