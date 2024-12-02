import Select from "react-select";
import { QuickbooksCustomerData } from "../LinkAndApproveCustomers";

export const CustomerLink = ({
  quickbooksCustomerData
}: {
  quickbooksCustomerData: QuickbooksCustomerData;
}) => {
  const formattedDropdownData = quickbooksCustomerData?.map((c) => ({
    value: c.Id,
    label: c.CompanyName
  }));
  return (
    <div className="flex flex-col gap-md bg-theme-tertiary p-lg rounded-lg">
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
  );
};
