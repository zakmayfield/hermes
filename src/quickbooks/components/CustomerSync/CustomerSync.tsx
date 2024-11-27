"use client";

import {
  FormattedCustomer,
  getAllCustomers,
  getQBSyncAccount,
  syncQuickbooksAccount
} from "@/quickbooks/services/customer";
import { Customer, CustomerQueryResponse } from "@/quickbooks/types/customer";
import { Modal } from "@/shared/components";
import { useToast } from "@/shared/hooks/ui";
import {
  getUnapprovedUsers,
  UserWithOnboardingStatus
} from "@/utils/database/user/queries";
import { QuickbooksCustomerSync } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import Select, { SingleValue } from "react-select";

export const CustomerSync = () => {
  const { data: databaseUsers } = useQuery({
    queryKey: ["new_users"],
    queryFn: async () => await getUnapprovedUsers(),
    staleTime: Infinity
  });

  const { data: quickbooksCustomers } = useQuery({
    queryKey: ["quickbooks_customers"],
    queryFn: async () => await getAllCustomers(),
    staleTime: Infinity
  });

  return (
    <div className="bg-primary rounded-lg p-lg flex flex-col gap-lg">
      <h2>Manage New Customers</h2>

      <div className="bg-secondary rounded-lg p-lg flex flex-col gap-md">
        {/* LABELS */}
        <div className="flex gap-md">
          <h6 className="w-xs border-b italic opacity-60">Email</h6>
          <h6 className="w-xs border-b italic opacity-60">Company Name</h6>
          <h6 className="w-xs border-b italic opacity-60">Link Customer</h6>
        </div>

        {/* CUSTOMERS */}
        {databaseUsers?.map((dbCustomer) => (
          <NewCustomer
            key={dbCustomer.id}
            dbCustomer={dbCustomer}
            quickbooksCustomers={quickbooksCustomers}
          />
        ))}
      </div>
    </div>
  );
};

function NewCustomer({
  dbCustomer,
  quickbooksCustomers
}: {
  dbCustomer: UserWithOnboardingStatus;
  quickbooksCustomers: FormattedCustomer[] | undefined;
}) {
  const [isConfirmationModalShowing, setIsConfirmationModalShowing] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<FormattedCustomer | null>(
    null
  );

  const handleCancelModal = () => {
    setIsConfirmationModalShowing(false);
    setSelectedCustomer(null);
  };

  const handleLinkCustomerChange = ({
    data
  }: {
    data: SingleValue<{ value: string | undefined; label: string | undefined }>;
  }) => {
    if (data?.value && data.label) {
      setIsConfirmationModalShowing(true);
      setSelectedCustomer(
        quickbooksCustomers?.filter((customer) => customer.Id === data.value)[0] || null
      );
    }
  };

  const { toast } = useToast();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: syncQuickbooksAccount,
    onSuccess(data) {
      toast("Successfully linked account");
      setIsConfirmationModalShowing(false);
      setSelectedCustomer(null);

      queryClient.setQueryData<QuickbooksCustomerSync>(
        ["linked_qb_account", dbCustomer.id],
        (oldData) => {
          return oldData ? { ...data } : oldData;
        }
      );
    },
    onError(error) {
      toast(error.message, "error");
    }
  });

  const { data, isLoading } = useQuery({
    queryKey: ["linked_qb_account", dbCustomer.id],
    queryFn: async () => await getQBSyncAccount(dbCustomer.id)
  });

  return (
    <div className="flex gap-md">
      <div className="w-xs">{dbCustomer.email}</div>
      <div className="w-xs">{dbCustomer.company_name}</div>

      <Select
        className={`max-w-xs w-full dark:text-background`}
        options={quickbooksCustomers?.map((qbCustomer) => ({
          value: qbCustomer.Id,
          label: qbCustomer.CompanyName
        }))}
        isClearable={true}
        isLoading={isLoading}
        onChange={(data) => handleLinkCustomerChange({ data })}
        value={(data && { value: data.customer_id, label: data.company_name }) || null}
      />

      {isConfirmationModalShowing && (
        <Modal>
          <div className="bg-primary rounded-lg p-lg flex flex-col gap-lg w-md">
            <div className="flex flex-col gap-xs">
              <h2>Confirm Account Link</h2>

              <p className="text-foreground/70">
                Are you sure you want to link these accounts?
              </p>
            </div>

            <div className="flex flex-col gap-sm">
              {/* New Customer */}
              <div className="flex flex-col gap-xs">
                <h5 className="text-foreground/70">New Customer</h5>
                <div className="flex-1 bg-secondary p-sm rounded-md">
                  <p>{dbCustomer.company_name}</p>
                  <p>{dbCustomer.email}</p>
                </div>
              </div>

              {/* QB Customer */}
              <div className="flex flex-col gap-xs">
                <h5 className="text-foreground/70">QuickBooks Customer</h5>
                <div className="flex-1 bg-secondary p-sm rounded-md">
                  <p>{selectedCustomer?.CompanyName}</p>
                  <p>{selectedCustomer?.PrimaryEmailAddr}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-sm">
              <button
                onClick={() =>
                  mutate({
                    user_id: dbCustomer.id,
                    customer_id: selectedCustomer?.Id || null,
                    company_name: selectedCustomer?.CompanyName || null
                  })
                }
                className="btn-primary w-full px-sm"
              >
                Link Account
              </button>
              <button
                onClick={handleCancelModal}
                className="btn-warning px-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
