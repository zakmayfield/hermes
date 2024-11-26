"use client";

import { useQuery } from "@tanstack/react-query";

export const CustomerSync = () => {
  const { data: newCustomers } = useQuery({
    queryKey: ["new_users"]
  });

  return (
    <div className="bg-primary rounded-lg p-lg flex flex-col gap-lg">
      <h2>New Customers</h2>

      <div className="bg-secondary rounded-lg p-lg flex flex-col gap-md">
        {/* LABELS */}
        <div className="flex gap-md">
          <h6 className="w-xs border-b italic opacity-60">Email</h6>
          <h6 className="w-xs border-b italic opacity-60">Company Name</h6>
        </div>

        {/* CUSTOMERS */}
        {/* {newCustomers?.map((customer) => (
          <div className="flex gap-md">
            <div className="w-xs">{customer.email}</div>
            <div className="w-xs">{customer.company_name}</div>
          </div>
        ))} */}
      </div>
    </div>
  );
};
