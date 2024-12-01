"use client";
import { Icon } from "@/ui";
import Select from "react-select";

export const LinkCustomers = () => {
  return (
    <div className="bg-primary p-lg rounded-lg flex flex-col gap-lg">
      <h2>Link Customers To QuickBooks</h2>

      <div className="border rounded-lg p-lg flex flex-col gap-sm">
        <div className="flex items-center gap-lg p-xs">
          <div className="border-b min-w-2xs">
            <p>Company Name</p>
          </div>

          <div className="border-b min-w-2xs">
            <p>Email</p>
          </div>

          <div className="border-b min-w-2xs">
            <p>Existing Customer</p>
          </div>

          <div className="border-b min-w-2xs">
            <p>Link Customer</p>
          </div>
        </div>

        <div className="p-xs bg-secondary rounded-lg">
          <div className="flex items-center gap-lg">
            <div className="min-w-2xs">
              <p>CompanyName</p>
            </div>

            <div className="min-w-2xs">
              <p>CustomerEmail</p>
            </div>

            <div className="min-w-2xs">
              <Icon name="check" />
            </div>

            <div className="min-w-2xs">
              <Select
                className="dark:text-background"
                isClearable={true}
                options={[{ label: "Foo", value: "Foo" }]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
