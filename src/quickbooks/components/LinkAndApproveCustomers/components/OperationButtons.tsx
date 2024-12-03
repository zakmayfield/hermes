import { QuickbooksCustomerSync } from "@prisma/client";

export const OperationButtons = ({
  qbSyncRecord,
  createCustomerModalMethods,
  approveCustomerModalMethods
}: {
  qbSyncRecord: QuickbooksCustomerSync | null | undefined;
  createCustomerModalMethods: {
    handleOpenModal: () => void;
    handleCancelModal: () => void;
  };
  approveCustomerModalMethods: {
    handleOpenModal: () => void;
    handleCancelModal: () => void;
  };
}) => {
  return (
    <div className="inline-flex ml-auto gap-md">
      <button
        className="btn-green font-bold px-md opacity-75 hover:opacity-100"
        onClick={() => approveCustomerModalMethods.handleOpenModal()}
      >
        Approve Customer
      </button>

      {!qbSyncRecord && (
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
