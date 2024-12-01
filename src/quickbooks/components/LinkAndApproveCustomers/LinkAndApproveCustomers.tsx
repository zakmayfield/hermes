"use client";
import { SecureUser } from "@/data/database/models/User";
import { getUsers } from "@/data/database/queries";
import { getAllCustomers } from "@/quickbooks/services/customer";
import {
  CustomerInfo as CustomerInfoType,
  CustomerShipAddr,
  CustomerBillAddr,
  Onboarding
} from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
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
    queryKey: ["quickbooks", "customers"],
    queryFn: async () => await getAllCustomers()
  });

  return (
    <div className="bg-primary p-lg rounded-lg flex flex-col gap-lg">
      <h2>Link Customers To QuickBooks</h2>

      <div className="border rounded-lg p-lg flex flex-col gap-lg">
        {newCustomerData &&
          newCustomerData.map((data) => (
            <CustomerReviewCard
              key={data.id}
              newCustomer={data}
              quickbooksCustomerData={quickbooksCustomerData}
            />
          ))}
      </div>
    </div>
  );
};

function CustomerReviewCard({
  newCustomer,
  quickbooksCustomerData
}: {
  newCustomer: LinkAndApproveCustomersData;
  quickbooksCustomerData: QuickbooksCustomerData;
}) {
  const { customerShipAddr, customerBillAddr, customerInfo, ...rest } = newCustomer;

  const infoProps = {
    ...rest,
    customerInfo
  };

  const addrProps = {
    customerShipAddr,
    customerBillAddr
  };

  return (
    <div className="p-lg bg-secondary rounded-lg">
      <CustomerInfo infoProps={infoProps} />

      {customerShipAddr && customerBillAddr && (
        <CustomerAddresses addrProps={addrProps} />
      )}

      <QuickBooksCustomersDropDown quickbooksCustomerData={quickbooksCustomerData} />
    </div>
  );
}

function CustomerInfo({
  infoProps
}: {
  infoProps: SecureUser & { customerInfo: LinkAndApproveCustomersData["customerInfo"] };
}) {
  function Tag({ isExistingCustomer }: { isExistingCustomer: boolean | undefined }) {
    switch (isExistingCustomer) {
      case true:
        return (
          <div className="min-w-4xs text-center px-md border rounded-lg bg-success/20">
            new
          </div>
        );
      case false:
        return (
          <div className="min-w-4xs text-center px-md border rounded-lg bg-blue-600/20">
            existing
          </div>
        );
    }
  }

  return (
    <div className="inline-flex flex-col bg-tertiary p-lg rounded-lg mb-lg">
      <div className="flex items-center gap-lg">
        <div>
          <h3>{infoProps.customerInfo?.companyName}</h3>
        </div>

        <div>
          <Tag isExistingCustomer={infoProps.customerInfo?.isExistingCustomer} />
        </div>
      </div>

      <div>
        <p>{infoProps.email}</p>
      </div>
    </div>
  );
}

function CustomerAddresses({
  addrProps
}: {
  addrProps: {
    customerShipAddr: LinkAndApproveCustomersData["customerShipAddr"];
    customerBillAddr: LinkAndApproveCustomersData["customerBillAddr"];
  };
}) {
  const { customerShipAddr, customerBillAddr } = addrProps;

  return (
    <div className="flex items-center gap-lg">
      <div>
        <p>Shipping Address</p>
        <div>
          <p>{customerShipAddr?.line1}</p>
          <p>{customerShipAddr?.city}</p>
          <p>{customerShipAddr?.state}</p>
          <p>{customerShipAddr?.country}</p>
          <p>{customerShipAddr?.postalCode}</p>
        </div>
      </div>

      <div>
        <p>Billing Address</p>
        <div>
          <p>{customerBillAddr?.line1}</p>
          <p>{customerBillAddr?.city}</p>
          <p>{customerBillAddr?.state}</p>
          <p>{customerBillAddr?.country}</p>
          <p>{customerBillAddr?.postalCode}</p>
        </div>
      </div>
    </div>
  );
}

function QuickBooksCustomersDropDown({
  quickbooksCustomerData
}: {
  quickbooksCustomerData: QuickbooksCustomerData;
}) {
  const formattedDropdownData = quickbooksCustomerData?.map((c) => ({
    value: c.Id,
    label: c.CompanyName
  }));

  return (
    <div>
      <Select
        className="dark:text-background"
        isClearable={true}
        options={formattedDropdownData}
      />
    </div>
  );
}
