import { CustomerInfo, QuickbooksCustomerSync } from "@prisma/client";
import { useQueryClient } from "@tanstack/react-query";

export const OperationButtons = ({
  customerInfo,
  createCustomerModalMethods,
  approveCustomerModalMethods
}: {
  customerInfo: CustomerInfo | null;
  createCustomerModalMethods: {
    handleOpenModal: () => void;
    handleCancelModal: () => void;
  };
  approveCustomerModalMethods: {
    handleOpenModal: () => void;
    handleCancelModal: () => void;
  };
}) => {
  const queryClient = useQueryClient();

  const queryData = queryClient.getQueryState<QuickbooksCustomerSync>([
    "quickbooks_customer_sync_ref",
    customerInfo?.userId
  ]);

  return (
    <div className="inline-flex ml-auto gap-md">
      <button
        className="btn-green font-bold px-md opacity-75 hover:opacity-100"
        onClick={() => approveCustomerModalMethods.handleOpenModal()}
      >
        Approve Customer
      </button>

      {!queryData?.data && !customerInfo?.isExistingCustomer && (
        <button
          className="btn-blue font-bold px-md py-xs opacity-75 hover:opacity-100"
          onClick={() => createCustomerModalMethods.handleOpenModal()}
        >
          Create New QuickBooks Customer
        </button>
      )}
    </div>
  );
};
