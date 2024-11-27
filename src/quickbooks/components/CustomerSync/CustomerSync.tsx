"use client";

import {
  FormattedCustomer,
  getAllCustomers,
  getQBSyncAccount,
  syncQuickbooksAccount
} from "@/quickbooks/services/customer";
import { Modal } from "@/shared/components";
import { useToast, useTooltip } from "@/shared/hooks/ui";
import { Icon } from "@/ui";
import { toggleUserApproval } from "@/utils/database/user/mutations";
import {
  getUnapprovedUsers,
  UserWithOnboardingStatus
} from "@/utils/database/user/queries";
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
    onSuccess() {
      toast("Successfully linked account");
      setIsConfirmationModalShowing(false);
      setSelectedCustomer(null);

      queryClient.invalidateQueries({ queryKey: ["linked_qb_account"] });
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
    <div className="flex gap-md items-center bg-primary/50 p-sm rounded-lg">
      <div>{dbCustomer.email}</div>
      <div>{dbCustomer.company_name}</div>
      <Select
        className={`dark:text-background`}
        options={quickbooksCustomers?.map((qbCustomer) => ({
          value: qbCustomer.Id,
          label: qbCustomer.CompanyName
        }))}
        isClearable={true}
        isLoading={isLoading}
        onChange={(data) => handleLinkCustomerChange({ data })}
        value={(data && { value: data.customer_id, label: data.company_name }) || null}
      />

      {/* // TODO: *** integrate dropdown with approve or create customer *** */}
      {/* or two small square buttons to handle these actions */}
      <CustomerActions dbCustomer={dbCustomer} />

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

function CustomerActions({ dbCustomer }: { dbCustomer: UserWithOnboardingStatus }) {
  const approveUserTooltip = useTooltip({
    anchorSelect: "#approve_user_button",
    place: "top-end",
    content: "Approve Customer"
  });

  const addUserTooltip = useTooltip({
    anchorSelect: "#add_user_button",
    place: "top-end",
    content: "Create QuickBooks Customer"
  });

  const { toast } = useToast();

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: toggleUserApproval,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["new_users"] });
      toast(`Successfully approved ${dbCustomer.company_name}`);
    }
  });

  return (
    <div className="flex items-center gap-sm">
      <button
        onClick={() => mutate(dbCustomer.id)}
        id="approve_user_button"
        className="btn-ghost opacity-75 hover:opacity-100"
      >
        <Icon
          name="check"
          style={{ fontSize: "2xl" }}
        />
        {approveUserTooltip}
      </button>

      {/* // TODO: *** Implement create user API call *** */}
      <button
        id="add_user_button"
        className="btn-ghost opacity-75 hover:opacity-100"
      >
        <Icon
          name="userPlus"
          style={{ fontSize: "2xl" }}
        />
        {addUserTooltip}
      </button>
    </div>
  );
}
