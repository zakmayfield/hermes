import {
  LinkAndApproveCustomersData,
  QuickbooksCustomerData
} from "../LinkAndApproveCustomers";
import { useModal } from "@/shared/hooks/ui";
import { useState } from "react";
import { OperationButtons } from "./OperationButtons";
import { CustomerLink } from "./CustomerLink";
import { BillingAddress } from "./BillingAddress";
import { AddressMatch } from "./AddressMatch";
import { ShippingAddress } from "./ShippingAddress";
import { CustomerInfo } from "./CustomerInfo";
import { ReviewCardTitle } from "./ReviewCardTitle";

export const ReviewCard = ({
  newCustomer,
  quickbooksCustomerData
}: {
  newCustomer: LinkAndApproveCustomersData;
  quickbooksCustomerData: QuickbooksCustomerData;
}) => {
  const { customerShipAddr, customerBillAddr, customerInfo, ...rest } = newCustomer;

  function handleIsAddressMatch() {
    const serialized = {
      ship: JSON.stringify({
        line1: customerShipAddr?.line1,
        city: customerShipAddr?.city,
        state: customerShipAddr?.state,
        country: customerShipAddr?.country,
        postalCode: customerShipAddr?.postalCode
      }),
      bill: JSON.stringify({
        line1: customerBillAddr?.line1,
        city: customerBillAddr?.city,
        state: customerBillAddr?.state,
        country: customerBillAddr?.country,
        postalCode: customerBillAddr?.postalCode
      })
    };

    if (serialized.ship === serialized.bill) {
      return true;
    }

    return false;
  }

  const [isAddressMatch] = useState(
    !customerBillAddr ? false : () => handleIsAddressMatch()
  );

  const {
    Modal: ExistingCustomerModal,
    isModalOpen: isExistingCustomerModalOpen,
    handleOpenModal: handleOpenExistingCustomerModal,
    handleCancelModal: handleCancelExistingCustomerModal
  } = useModal();

  const {
    Modal: ApproveCustomerModal,
    isModalOpen: isApproveCustomerModalOpen,
    handleOpenModal: handleOpenApproveCustomerModal,
    handleCancelModal: handleCancelApproveCustomerModal
  } = useModal();

  return (
    <div className="p-lg bg-theme-secondary rounded-lg flex flex-col gap-lg">
      {/* Review Card Title and Status Pill */}
      <ReviewCardTitle customerInfo={customerInfo} />

      {/* Customer Info */}
      <CustomerInfo
        email={rest.email}
        customerInfo={customerInfo}
      />

      {/* Shipping Address */}
      {customerShipAddr && <ShippingAddress customerShipAddr={customerShipAddr} />}

      {/* Billing Same as Shipping */}
      {isAddressMatch && <AddressMatch />}

      {/* Billing Address */}
      {customerBillAddr && !isAddressMatch && (
        <BillingAddress customerBillAddr={customerBillAddr} />
      )}

      {/* Link to QuickBooks Customer */}
      {customerInfo?.isExistingCustomer && (
        <CustomerLink quickbooksCustomerData={quickbooksCustomerData} />
      )}

      {/* Operation Buttons */}
      <OperationButtons
        handleOpenApproveCustomerModal={handleOpenApproveCustomerModal}
        handleOpenExistingCustomerModal={handleOpenExistingCustomerModal}
      />

      {isExistingCustomerModalOpen && (
        <ExistingCustomerModal>
          <div className="bg-theme-primary p-lg rounded-lg w-md flex flex-col gap-md">
            <h2>Warning</h2>

            <div>
              <p>
                <span className="italic mr-2">{customerInfo?.companyName}</span>
                <span className="opacity-80">
                  stated they are an existing customer. Are you sure you want to create a
                  new QuickBooks customer?
                </span>
              </p>
            </div>

            <div className="flex items-center gap-lg">
              <button className="flex-1 btn-green">Proceed</button>
              <button
                className="btn-red"
                onClick={handleCancelExistingCustomerModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </ExistingCustomerModal>
      )}
    </div>
  );
};
