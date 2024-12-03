import Select, { SingleValue } from "react-select";
import { QuickbooksCustomerData } from "../LinkAndApproveCustomers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createQuickbooksCustomerSyncRecord } from "@/data/database/mutations";
import { useToast } from "@/shared/hooks/ui";

export const CustomerLink = ({
  user_id,
  quickbooksCustomerData
}: {
  user_id: string;
  quickbooksCustomerData: QuickbooksCustomerData;
}) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { mutate: createQBSyncRecord, isPending: isCreateQBSyncRecordPending } =
    useMutation({
      mutationFn: createQuickbooksCustomerSyncRecord,
      onError(error) {
        toast(error.message, "error");
      },
      onSuccess(data) {
        toast(`Successfully linked ${data.company_name}`);
        queryClient.invalidateQueries({
          queryKey: ["quickbooks_customer_sync_ref", user_id]
        });
      }
    });

  const formattedDropdownData = !quickbooksCustomerData
    ? []
    : quickbooksCustomerData.map((c) => ({
        value: c.Id,
        label: c.CompanyName
      }));

  const handleOnChange = (
    data: SingleValue<{
      value: string;
      label: string;
    }>
  ) => {
    if (data) {
      createQBSyncRecord({ id: data.value, companyName: data.label, user_id });
    }
  };

  return (
    <div className="flex flex-col gap-md bg-theme-tertiary p-lg rounded-lg">
      <div>
        <h3 className="border-b">Link To An Existing QuickBooks Customer</h3>
      </div>

      <div className="flex gap-lg">
        <div className="flex flex-col gap-xs">
          <h4 className="italic opacity-75">QuickBooks Customers</h4>
          <Select
            onChange={handleOnChange}
            className="dark:text-background min-w-xs"
            isClearable={true}
            options={formattedDropdownData}
          />
        </div>
      </div>
    </div>
  );
};
