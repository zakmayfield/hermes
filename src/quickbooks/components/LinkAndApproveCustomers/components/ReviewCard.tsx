import {
  LinkAndApproveCustomersData,
  QuickbooksCustomerData
} from "../LinkAndApproveCustomers";
import { useModal, useToast } from "@/shared/hooks/ui";
import { useState } from "react";
import { OperationButtons } from "./OperationButtons";
import { CustomerLink } from "./CustomerLink";
import { BillingAddress } from "./BillingAddress";
import { AddressMatch } from "./AddressMatch";
import { ShippingAddress } from "./ShippingAddress";
import { CustomerInfo } from "./CustomerInfo";
import { ReviewCardTitle } from "./ReviewCardTitle";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getQuickBooksCustomerSyncRecordByUserId } from "@/data/database/queries";
import { createCustomer } from "@/data/services/createCustomer";

export const ReviewCard = ({
  newCustomer,
  quickbooksCustomerData
}: {
  newCustomer: LinkAndApproveCustomersData;
  quickbooksCustomerData: QuickbooksCustomerData;
}) => {
  const { customerShipAddr, customerBillAddr, customerInfo, ...rest } = newCustomer;

  const { data: qbSyncRecord } = useQuery({
    staleTime: Infinity,
    queryKey: ["quickbooks_customer_sync_ref", newCustomer.id],
    queryFn: async () =>
      await getQuickBooksCustomerSyncRecordByUserId({ user_id: newCustomer.id })
  });

  const { toast } = useToast();

  const { mutate: createQuickBooksCustomer } = useMutation({
    mutationFn: createCustomer,
    onError(error) {
      toast(error.message, "error");
    }
  });

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
    Modal: CreateCustomerModal,
    isModalOpen: isCreateCustomerModalOpen,
    ...createCustomerModalMethods
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
        qbSyncRecord={qbSyncRecord}
        createCustomerModalMethods={{ ...createCustomerModalMethods }}
      />

      {isCreateCustomerModalOpen && (
        <CreateCustomerModal>
          <div className="bg-theme-primary p-lg rounded-lg w-xl flex flex-col gap-md">
            <h2>Confirm customer information</h2>

            <div className="bg-theme-secondary p-lg rounded-lg flex flex-col gap-md">
              <div className="flex flex-col gap-xs">
                <h3 className="text-3xl">{customerInfo?.companyName}</h3>

                <div className="flex flex-col gap-xs">
                  <p className="bg-theme-tertiary p-xs rounded-lg">
                    <span className="opacity-75 italic inline-block w-2xs">Email:</span>{" "}
                    {rest.email}
                  </p>
                  <p className="bg-theme-tertiary p-xs rounded-lg">
                    <span className="opacity-75 italic inline-block w-2xs">
                      Phone Number:
                    </span>{" "}
                    {customerInfo?.phoneNumber}
                  </p>
                </div>
              </div>

              <div className="flex gap-md">
                <div className="flex-1 flex flex-col gap-xs">
                  <h3 className="opacity-75 italic">Shipping Address</h3>
                  <div className="bg-theme-tertiary p-xs rounded-lg">
                    <p>{customerShipAddr?.line1}</p>
                    <p>
                      {customerShipAddr?.city}, {customerShipAddr?.state}{" "}
                      {customerShipAddr?.postalCode}
                    </p>
                    <p>{customerShipAddr?.country}</p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-xs">
                  <h3 className="opacity-75 italic">Billing Address</h3>
                  <div className="bg-theme-tertiary p-xs rounded-lg">
                    <p>{customerBillAddr?.line1}</p>
                    <p>
                      {customerBillAddr?.city}, {customerBillAddr?.state}{" "}
                      {customerBillAddr?.postalCode}
                    </p>
                    <p>{customerBillAddr?.country}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-lg">
              <button
                className="flex-1 btn-green py-xs"
                onClick={() =>
                  createQuickBooksCustomer({
                    email: "",
                    customerInfo,
                    customerShipAddr,
                    customerBillAddr
                  })
                }
              >
                Create Customer
              </button>
              <button
                className="btn-red px-md py-xs"
                onClick={() => createCustomerModalMethods.handleCancelModal()}
              >
                Cancel
              </button>
            </div>
          </div>
        </CreateCustomerModal>
      )}
    </div>
  );
};
