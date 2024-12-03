import { LinkAndApproveCustomersData } from "../LinkAndApproveCustomers";
import { useModal, useToast } from "@/shared/hooks/ui";
import { useState } from "react";
import { OperationButtons } from "./OperationButtons";
import { CustomerLink } from "./CustomerLink";
import { BillingAddress } from "./BillingAddress";
import { AddressMatch } from "./AddressMatch";
import { ShippingAddress } from "./ShippingAddress";
import { CustomerInfo } from "./CustomerInfo";
import { ReviewCardTitle } from "./ReviewCardTitle";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getQuickBooksCustomerSyncRecordByUserId } from "@/data/database/queries";
import { createCustomer } from "@/data/qb/services/customer";
import { Icon } from "@/ui";
import { toggleUserIsApproved } from "@/data/database/mutations";

export const ReviewCard = ({
  newCustomer
}: {
  newCustomer: LinkAndApproveCustomersData;
}) => {
  const { customerShipAddr, customerBillAddr, customerInfo, ...rest } = newCustomer;
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const qbSyncRecordQuery = useQuery({
    staleTime: Infinity,
    queryKey: ["quickbooks_customer_sync_ref", newCustomer.id],
    queryFn: async () =>
      await getQuickBooksCustomerSyncRecordByUserId({ user_id: newCustomer.id })
  });

  const { mutate: createQuickBooksCustomer, isPending: isCreateCustomerPending } =
    useMutation({
      mutationFn: createCustomer,
      onError(error) {
        toast(error.message, "error");
      },
      onSuccess(data) {
        toast(`Successfully created customer: ${data.CompanyName}`);
        createCustomerModalMethods.handleCancelModal();
        queryClient.invalidateQueries({
          queryKey: ["quickbooks_customer_sync_ref", newCustomer.id]
        });
      }
    });

  const { mutate: toggleIsApproved, isPending: isToggleIsApprovedPending } = useMutation({
    mutationFn: toggleUserIsApproved,
    onError(error) {
      toast(error.message, "error");
    },
    onSuccess() {
      toast(`Successfully approved ${customerInfo?.companyName}`);
      queryClient.invalidateQueries({ queryKey: ["customers", "is_approved", false] });
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

  const {
    Modal: ApproveCustomerModal,
    isModalOpen: isApproveCustomerModalOpen,
    ...approveCustomerModalMethods
  } = useModal();

  return (
    <div className="p-md bg-theme-secondary rounded-lg flex flex-col gap-md">
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
      {customerInfo?.isExistingCustomer && !qbSyncRecordQuery.data && (
        <CustomerLink user_id={newCustomer.id} />
      )}

      {/* Operation Buttons */}
      <OperationButtons
        customerInfo={customerInfo}
        createCustomerModalMethods={{ ...createCustomerModalMethods }}
        approveCustomerModalMethods={{ ...approveCustomerModalMethods }}
      />

      {isCreateCustomerModalOpen && (
        <CreateCustomerModal>
          <div className="bg-theme-primary p-lg rounded-lg w-xl flex flex-col gap-md">
            <h2>Confirm customer information</h2>

            <div
              className={`bg-theme-secondary p-lg rounded-lg flex flex-col gap-md ${
                isCreateCustomerPending && "opacity-50"
              }`}
            >
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
                disabled={isCreateCustomerPending}
                className="flex-1 btn-green py-xs"
                onClick={() =>
                  createQuickBooksCustomer({
                    user_id: rest.id,
                    email: rest.email,
                    customerInfo,
                    customerShipAddr,
                    customerBillAddr
                  })
                }
              >
                {isCreateCustomerPending ? (
                  <Icon
                    name="spin"
                    style={{ className: "animate-spin mx-auto text-2xl" }}
                  />
                ) : (
                  "Create Customer"
                )}
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

      {isApproveCustomerModalOpen && (
        <ApproveCustomerModal>
          <div className="bg-theme-primary p-lg rounded-lg w-xl flex flex-col gap-md">
            <h2>Approve customer account</h2>

            {!qbSyncRecordQuery.data ? (
              <div className="flex flex-col gap-md">
                <p className="opacity-80">
                  Please link this customer to a QuickBooks account to continue.
                </p>

                <CustomerLink user_id={rest.id} />
              </div>
            ) : (
              <div>
                <p>
                  Are you sure you want to approve {qbSyncRecordQuery.data.company_name}
                </p>
              </div>
            )}

            <div className="flex items-center gap-lg">
              <button
                disabled={isToggleIsApprovedPending || !qbSyncRecordQuery.data}
                className="flex-1 btn-green py-xs"
                onClick={() => toggleIsApproved(newCustomer.id)}
              >
                {isToggleIsApprovedPending ? (
                  <Icon
                    name="spin"
                    style={{ className: "animate-spin mx-auto text-2xl" }}
                  />
                ) : (
                  "Approve Customer"
                )}
              </button>

              <button
                className="btn-red px-md py-xs"
                onClick={() => approveCustomerModalMethods.handleCancelModal()}
              >
                Cancel
              </button>
            </div>
          </div>
        </ApproveCustomerModal>
      )}
    </div>
  );
};
