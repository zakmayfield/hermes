"use client";
import { SecureUser } from "@/data/database/models/User";
import { getUsers } from "@/data/database/queries";
import {
  CustomerInfo as CustomerInfoType,
  CustomerShipAddr,
  CustomerBillAddr,
  Onboarding
} from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { ReviewCard } from "./components";
import { queryCustomers } from "@/data/qb/services/customer";
import { CustomerQueryResults } from "@/data/qb/validators";

export type LinkAndApproveCustomersData = SecureUser & {
  customerInfo: CustomerInfoType | null;
  customerShipAddr: CustomerShipAddr | null;
  customerBillAddr: CustomerBillAddr | null;
  onboarding: Onboarding | null;
};

export type QuickbooksCustomerData =
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

  useQuery<CustomerQueryResults>({
    staleTime: Infinity,
    queryKey: ["quickbooks", "customers"],
    queryFn: async () => await queryCustomers()
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
            />
          ))}
      </div>
    </div>
  );
};