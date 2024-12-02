"use client";
import { SecureUser } from "@/data/database/models/User";
import { getUsers } from "@/data/database/queries";
import { getAllCustomers } from "@/quickbooks/services/customer";
import { Icon } from "@/ui";
import {
  CustomerInfo as CustomerInfoType,
  CustomerShipAddr,
  CustomerBillAddr,
  Onboarding
} from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Select from "react-select";

type LinkAndApproveCustomersData = SecureUser & {
  customerInfo: CustomerInfoType | null;
  customerShipAddr: CustomerShipAddr | null;
  customerBillAddr: CustomerBillAddr | null;
  onboarding: Onboarding | null;
};

type QuickbooksCustomerData =
  | {
      Id: string;
      CompanyName: string;
      PrimaryEmailAddr: string;
    }[]
  | undefined;

export const LinkAndApproveCustomers = () => {
  const { data: newCustomerData } = useQuery({
    staleTime: Infinity,
    queryKey: ["customers", "is_approved", false],
    queryFn: async () =>
      await getUsers<LinkAndApproveCustomersData[]>({
        options: {
          where: {
            role: { name: "CUSTOMER" },
            AND: { onboarding: { is_approved: false } }
          },
          include: {
            customerInfo: true,
            customerShipAddr: true,
            customerBillAddr: true,
            onboarding: true
          },
          orderBy: { created_at: "desc" }
        }
      })
  });

  const { data: quickbooksCustomerData } = useQuery({
    staleTime: Infinity,
    queryKey: ["quickbooks", "customers"],
    queryFn: async () => await getAllCustomers()
  });

  return (
    <div className="bg-theme-primary p-lg rounded-lg">
      <h2>Review Customer Information</h2>

      <div className="rounded-lg p-lg flex flex-col gap-lg">
        {newCustomerData &&
          newCustomerData.map((data) => (
            <ReviewCard
              key={data.id}
              newCustomer={data}
              quickbooksCustomerData={quickbooksCustomerData}
            />
          ))}
      </div>
    </div>
  );
};

function ReviewCard({
  newCustomer,
  quickbooksCustomerData
}: {
  newCustomer: LinkAndApproveCustomersData;
  quickbooksCustomerData: QuickbooksCustomerData;
}) {
  const { customerShipAddr, customerBillAddr, customerInfo, ...rest } = newCustomer;

  function handleIsAddressMatch() {
    const serialized = {
      ship: JSON.stringify({
        line1: customerShipAddr?.line1,
        city: customerShipAddr?.city,
        state: customerShipAddr?.state,
        country: customerShipAddr?.country,
        postalCode: customerShipAddr?.postalCode
      }),
      bill: JSON.stringify({
        line1: customerBillAddr?.line1,
        city: customerBillAddr?.city,
        state: customerBillAddr?.state,
        country: customerBillAddr?.country,
        postalCode: customerBillAddr?.postalCode
      })
    };

    if (serialized.ship === serialized.bill) {
      return true;
    }

    return false;
  }

  const [isAddressMatch] = useState(
    !customerBillAddr ? false : () => handleIsAddressMatch()
  );

  const formattedDropdownData = quickbooksCustomerData?.map((c) => ({
    value: c.Id,
    label: c.CompanyName
  }));

  return (
    <div className="p-lg bg-theme-secondary rounded-lg flex flex-col gap-lg">
      {/* Review Card Title and Status Pill */}
      <div className="flex items-center gap-lg">
        <h2>{customerInfo?.companyName}</h2>
        {customerInfo?.isExistingCustomer ? (
          <p className="border rounded-full px-sm bg-blue-500/50 text-sm">
            existing customer
          </p>
        ) : (
          <p className="border rounded-full px-sm bg-theme-green/50 text-sm">
            new customer
          </p>
        )}
      </div>

      {/* Customer Info */}
      <div className="flex flex-col gap-md bg-theme-tertiary/50 p-lg rounded-lg">
        <div>
          <h3 className="border-b">Customer Information</h3>
        </div>

        <div className="flex gap-md flex-wrap">
          <div className="flex flex-col gap-xs">
            <h4 className="italic opacity-75">Company Name</h4>
            <p className="bg-theme-primary/35 px-lg py-xs rounded-lg min-w-xs">
              {customerInfo?.companyName}
            </p>
          </div>

          <div className="flex flex-col gap-xs">
            <h4 className="italic opacity-75">Customer Email</h4>
            <p className="bg-theme-primary/35 px-lg py-xs rounded-lg min-w-xs">
              {rest.email}
            </p>
          </div>

          <div className="flex flex-col gap-xs">
            <h4 className="italic opacity-75">Existing Customer</h4>
            <div className="bg-theme-primary/35 px-lg py-xs rounded-lg flex justify-center max-w-4xs">
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

      {/* Shipping Address */}
      {customerShipAddr && (
        <div className="flex flex-col gap-md bg-theme-tertiary/50 p-lg rounded-lg">
          <div>
            <h3 className="border-b">Shipping Address</h3>
          </div>

          <div className="flex gap-md flex-wrap">
            <div className="flex flex-col gap-xs">
              <h4 className="italic opacity-75">Address</h4>
              <p className="bg-theme-primary/35 px-lg py-xs rounded-lg min-w-xs">
                {customerShipAddr.line1}
              </p>
            </div>

            <div className="flex flex-col gap-xs">
              <h4 className="italic opacity-75">City</h4>
              <p className="bg-theme-primary/35 px-lg py-xs rounded-lg min-w-2xs">
                {customerShipAddr.city}
              </p>
            </div>

            <div className="flex flex-col gap-xs">
              <h4 className="italic opacity-75">Province</h4>
              <p className="bg-theme-primary/35 px-lg py-xs rounded-lg min-w-2xs">
                {customerShipAddr.state}
              </p>
            </div>

            <div className="flex flex-col gap-xs">
              <h4 className="italic opacity-75">Country</h4>
              <p className="bg-theme-primary/35 px-lg py-xs rounded-lg min-w-2xs">
                {customerShipAddr.country}
              </p>
            </div>

            <div className="flex flex-col gap-xs">
              <h4 className="italic opacity-75">Postal Code</h4>
              <p className="bg-theme-primary/35 px-lg py-xs rounded-lg min-w-2xs">
                {customerShipAddr.postalCode}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Billing Same as Shipping */}
      {isAddressMatch && (
        <div className="flex flex-col gap-md bg-theme-tertiary/50 p-lg rounded-lg">
          <div>
            <h3 className="border-b">Billing Address</h3>
          </div>

          <div className="flex gap-lg">
            <p className="bg-theme-primary/35 px-lg py-xs rounded-lg min-w-xs">
              Same as shipping
            </p>
          </div>
        </div>
      )}

      {/* Billing Address */}
      {customerBillAddr && !isAddressMatch && (
        <div className="flex flex-col gap-md bg-theme-tertiary/50 p-lg rounded-lg">
          <div>
            <h3 className="border-b">Billing Address</h3>
          </div>

          <div className="flex gap-md flex-wrap">
            <div className="flex flex-col gap-xs">
              <h4 className="italic opacity-75">Address</h4>
              <p className="bg-theme-primary/35 px-lg py-xs rounded-lg min-w-xs">
                {customerBillAddr.line1}
              </p>
            </div>

            <div className="flex flex-col gap-xs">
              <h4 className="italic opacity-75">City</h4>
              <p className="bg-theme-primary/35 px-lg py-xs rounded-lg min-w-2xs">
                {customerBillAddr.city}
              </p>
            </div>

            <div className="flex flex-col gap-xs">
              <h4 className="italic opacity-75">Province</h4>
              <p className="bg-theme-primary/35 px-lg py-xs rounded-lg min-w-2xs">
                {customerBillAddr.state}
              </p>
            </div>

            <div className="flex flex-col gap-xs">
              <h4 className="italic opacity-75">Country</h4>
              <p className="bg-theme-primary/35 px-lg py-xs rounded-lg min-w-2xs">
                {customerBillAddr.country}
              </p>
            </div>

            <div className="flex flex-col gap-xs">
              <h4 className="italic opacity-75">Postal Code</h4>
              <p className="bg-theme-primary/35 px-lg py-xs rounded-lg min-w-2xs">
                {customerBillAddr.postalCode}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Link to QuickBooks Customer */}
      <div className="flex flex-col gap-md bg-theme-tertiary/50 p-lg rounded-lg">
        <div>
          <h3 className="border-b">Link To An Existing QuickBooks Customer</h3>
        </div>

        <div className="flex gap-lg">
          <div className="flex flex-col gap-xs">
            <h4 className="italic opacity-75">QuickBooks Customers</h4>
            <Select
              className="dark:text-background min-w-xs"
              isClearable={true}
              options={formattedDropdownData}
            />
          </div>
        </div>
      </div>

      {/* Operation Buttons */}
      <div className="inline-flex ml-auto gap-md">
        <button className="btn-green font-bold">Approve Customer</button>
        <button className="btn-blue font-bold">Create New QuickBooks Customer</button>
      </div>
    </div>
  );
}
