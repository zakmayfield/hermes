import Select, { SingleValue } from "react-select";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createQuickbooksCustomerSyncRecord } from "@/data/database/mutations";
import { useToast } from "@/shared/hooks/ui";
import { CustomerQuery, CustomerQueryResults } from "@/data/qb/validators";
import { Pulse } from "@/ui";
import { useEffect } from "react";

export const CustomerLink = ({ userId }: { userId: string }) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const queryData = queryClient.getQueryState<CustomerQueryResults>([
    "quickbooks",
    "customers"
  ]);

  useEffect(() => {
    console.log(queryData);
  }, [queryData]);

  const { mutate: createQBSyncRecord } = useMutation({
    mutationFn: createQuickbooksCustomerSyncRecord,
    onError(error) {
      toast(error.message, "error");
    },
    onSuccess(data) {
      toast(`Successfully linked ${data.companyName}`);
      queryClient.invalidateQueries({
        queryKey: ["quickbooks_customer_sync_ref", userId]
      });
    }
  });

  function isCustomerData(data: CustomerQueryResults | undefined): data is CustomerQuery {
    return !!data && Object.keys(data.QueryResponse).includes("Customer");
  }

  const formattedDropdownData = isCustomerData(queryData?.data)
    ? queryData.data.QueryResponse.Customer.map((c) => ({
        value: c.Id,
        label: c.CompanyName
      }))
    : [];

  const handleOnChange = (
    data: SingleValue<{
      value: string;
      label: string;
    }>
  ) => {
    if (data) {
      createQBSyncRecord({ id: data.value, companyName: data.label, userId });
    }
  };

  return (
    <div className="flex flex-col gap-md bg-theme-tertiary p-md rounded-lg">
      <div>
        <h3 className="border-b">Link To An Existing QuickBooks Customer</h3>
      </div>

      <div>
        {queryData?.fetchStatus === "fetching" ? (
          <Pulse />
        ) : !isCustomerData(queryData?.data) ? (
          <div>No QuickBooks customers found</div>
        ) : (
          <div className="flex flex-col gap-xs max-w-xs">
            <h4 className="italic opacity-75">QuickBooks Customers</h4>
            <Select
              onChange={handleOnChange}
              className="dark:text-background min-w-xs"
              isClearable={true}
              options={formattedDropdownData}
            />
          </div>
        )}
      </div>
    </div>
  );
};
