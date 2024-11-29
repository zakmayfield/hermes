"use client";
import { FormProvider, useFormContext } from "react-hook-form";
import { Form } from "@/ui/components";
import { useSignUpForm } from "@/shared/hooks/forms";
import { useEffect } from "react";
import { signupValidator } from "@/utils/validators/forms/signupValidator";

// TODO: *** configure field validation error styles ***

export const SignUpForm = () => {
  const { methods, submitHandler } = useSignUpForm();
  const watchIsExistingCustomer = methods.watch("customerInfo.isExistingCustomer");

  return (
    <div>
      <FormProvider {...methods}>
        <Form
          submitHandler={submitHandler}
          style={{
            form: {
              backgroundColor: "primary",
              padding: "lg",
              className: `${watchIsExistingCustomer && "w-full lg:w-md"}`
            }
          }}
        >
          <Inputs />

          <button
            className={`btn-primary p-xs ${
              watchIsExistingCustomer ? "w-full" : "w-1/2 mr-auto"
            }`}
          >
            Sign Up
          </button>
        </Form>
      </FormProvider>
    </div>
  );
};

function Inputs() {
  const { defaultValues } = signupValidator;

  const {
    register,
    watch,
    setValue,
    getValues,
    formState: { errors }
  } = useFormContext<typeof defaultValues>();

  const watchIsExistingCustomer = watch("customerInfo.isExistingCustomer");
  const watchIsBillingSameAsShipping = watch("customerInfo.isBillingSameAsShipping");

  useEffect(() => {
    if (watchIsBillingSameAsShipping) {
      const values = getValues().shipAddr;

      setValue("billAddr", {
        line1: values?.line1 || "",
        city: values?.city || "",
        country: values?.country || "",
        state: values?.state || "",
        postalCode: values?.postalCode || ""
      });

      console.log("new values", getValues());
    } else {
      setValue("billAddr", {
        line1: "",
        city: "",
        country: "",
        state: "",
        postalCode: ""
      });
      console.log("new values", getValues());
    }
  }, [watchIsBillingSameAsShipping, getValues, setValue]);

  return (
    <div className="flex flex-col lg:flex-row gap-lg">
      <div
        className={` ${
          watchIsExistingCustomer
            ? "w-full bg-primary"
            : "flex-1 bg-secondary/50 p-md rounded-lg flex flex-col gap-md"
        }`}
      >
        <div className="flex flex-col gap-xs">
          <div className="flex flex-col gap-xs">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="Email"
              {...register("customerInfo.email")}
            />
            <span>{errors.customerInfo?.email?.message}</span>
          </div>

          <div className="flex flex-col gap-xs">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              placeholder="Password"
              type="password"
              {...register("customerInfo.password")}
            />
            <span>{errors.customerInfo?.password?.message}</span>
          </div>

          <div className="flex items-center gap-xs mb-md">
            <input
              type="checkbox"
              {...register("customerInfo.isExistingCustomer")}
            />
            <label htmlFor="isExistingCustomer">I am an existing customer</label>
          </div>
        </div>

        {!watchIsExistingCustomer && (
          <div className="flex flex-col gap-xs">
            <h4 className="text-foreground/75">Account Info</h4>

            <div className="flex gap-sm">
              <div className="flex flex-col gap-xs flex-1">
                <label htmlFor="givenName">First Name</label>
                <input
                  id="givenName"
                  placeholder="John"
                  {...register("customerInfo.givenName")}
                />
                <span>{errors.customerInfo?.givenName?.message}</span>
              </div>

              <div className="flex flex-col gap-xs flex-1">
                <label htmlFor="familyName">Last Name</label>
                <input
                  id="familyName"
                  placeholder="Doe"
                  {...register("customerInfo.familyName")}
                />
                <span>{errors.customerInfo?.familyName?.message}</span>
              </div>
            </div>

            <div className="flex flex-col gap-xs">
              <label htmlFor="companyName">Company Name</label>
              <input
                id="companyName"
                placeholder="ACME Inc"
                {...register("customerInfo.companyName")}
              />
              <span>{errors.customerInfo?.companyName?.message}</span>
            </div>

            <div className="flex flex-col gap-xs w-1/2">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                id="phoneNumber"
                placeholder="4892234212"
                {...register("customerInfo.phoneNumber")}
              />
              <span>{errors.customerInfo?.phoneNumber?.message}</span>
            </div>
          </div>
        )}
      </div>

      {!watchIsExistingCustomer && (
        <div className="flex-1 flex flex-col">
          <ShipAddrInputs />

          <div className="flex items-center justify-end gap-xs mt-sm mb-lg">
            <input
              type="checkbox"
              {...register("customerInfo.isBillingSameAsShipping")}
            />
            <label htmlFor="isExistingCustomer">Use shipping address for billing</label>
          </div>

          {!watchIsBillingSameAsShipping && <BillAddrInputs />}
        </div>
      )}
    </div>
  );
}

function ShipAddrInputs() {
  const { defaultValues } = signupValidator;

  const {
    register,
    formState: { errors }
  } = useFormContext<typeof defaultValues>();
  return (
    <div className="flex flex-col gap-xs p-md bg-accent/50 rounded-lg">
      <h4 className="text-foreground/75">Shipping Address</h4>

      <div className="flex flex-col gap-xs">
        <label htmlFor="line1">Address 1</label>
        <input
          id="shipAddrLine1"
          placeholder="10 Super Dr"
          {...register("shipAddr.line1")}
        />
        <span>{errors.shipAddr?.line1?.message}</span>
      </div>

      <div className="flex gap-sm">
        <div className="flex flex-col gap-xs flex-1">
          <label htmlFor="city">City</label>
          <input
            id="shipAddrCity"
            placeholder="Etobicoke"
            {...register("shipAddr.city")}
          />
          <span>{errors.shipAddr?.city?.message}</span>
        </div>

        <div className="flex flex-col gap-xs">
          <label htmlFor="state">State</label>
          <input
            id="shipAddrState"
            placeholder="Ontario"
            {...register("shipAddr.state")}
          />
          <span>{errors.shipAddr?.state?.message}</span>
        </div>
      </div>

      <div className="flex gap-sm justify-end">
        <div className="flex flex-col gap-xs flex-1">
          <label htmlFor="country">Country</label>
          <input
            id="shipAddrCountry"
            placeholder="CA"
            {...register("shipAddr.country")}
          />
          <span>{errors.shipAddr?.country?.message}</span>
        </div>

        <div className="flex flex-col gap-xs flex-1">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            id="shipAddrPostalCode"
            placeholder="A1A2B2"
            {...register("shipAddr.postalCode")}
          />
          <span>{errors.shipAddr?.postalCode?.message}</span>
        </div>
      </div>
    </div>
  );
}

function BillAddrInputs() {
  const { defaultValues } = signupValidator;

  const {
    register,
    formState: { errors }
  } = useFormContext<typeof defaultValues>();

  return (
    <div className="flex flex-col gap-xs p-md bg-accent/50 rounded-lg">
      <h4 className="text-foreground/75">Billing Address</h4>

      <div className="flex flex-col gap-xs">
        <label htmlFor="line1">Address 1</label>
        <input
          id="billAddrLine1"
          placeholder="10 Super Dr"
          {...register("billAddr.line1")}
        />
        <span>{errors.billAddr?.line1?.message}</span>
      </div>

      <div className="flex gap-sm">
        <div className="flex flex-col gap-xs flex-1">
          <label htmlFor="city">City</label>
          <input
            id="billAddrCity"
            placeholder="Etobicoke"
            {...register("billAddr.city")}
          />
          <span>{errors.billAddr?.city?.message}</span>
        </div>

        <div className="flex flex-col gap-xs">
          <label htmlFor="state">State</label>
          <input
            id="billAddrState"
            placeholder="Ontario"
            {...register("billAddr.state")}
          />
          <span>{errors.billAddr?.state?.message}</span>
        </div>
      </div>

      <div className="flex gap-sm justify-end">
        <div className="flex flex-col gap-xs flex-1">
          <label htmlFor="city">Country</label>
          <input
            id="billAddrCountry"
            placeholder="CA"
            {...register("billAddr.country")}
          />
          <span>{errors.billAddr?.country?.message}</span>
        </div>

        <div className="flex flex-col gap-xs flex-1">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            id="billAddrPostalCode"
            placeholder="A1A2B2"
            {...register("billAddr.postalCode")}
          />
          <span>{errors.billAddr?.postalCode?.message}</span>
        </div>
      </div>
    </div>
  );
}
