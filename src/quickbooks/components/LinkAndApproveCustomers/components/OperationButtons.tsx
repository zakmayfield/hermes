export const OperationButtons = ({
  handleOpenApproveCustomerModal,
  handleOpenExistingCustomerModal
}: {
  handleOpenApproveCustomerModal: () => void;
  handleOpenExistingCustomerModal: () => void;
}) => {
  return (
    <div className="inline-flex ml-auto gap-md">
      <button
        className="btn-green font-bold px-md"
        onClick={handleOpenApproveCustomerModal}
      >
        Approve Customer
      </button>
      <button
        className="btn-blue font-bold px-md py-xs"
        onClick={handleOpenExistingCustomerModal}
      >
        Create New QuickBooks Customer
      </button>
    </div>
  );
};
