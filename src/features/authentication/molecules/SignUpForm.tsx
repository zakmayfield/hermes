"use client";

import { useState } from "react";

export const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <form className="flex flex-col gap-3">
        <div className="w-full">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="name@host.com"
            className="w-full p-2 rounded-md"
          />
        </div>

        <div className="w-full">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="password"
            className="w-full p-2 rounded-md"
          />
        </div>

        <button className="bg-theme-green p-2 rounded-md">Sign Up</button>
      </form>
    </div>
  );
};

// function Inputs() {
//   const { defaultValues } = signupValidator;

//   const {
//     register,
//     watch,
//     setValue,
//     getValues,
//     formState: { errors }
//   } = useFormContext<typeof defaultValues>();

//   const watchIsExistingCustomer = watch("customer.isExistingCustomer");
//   const watchIsBillingSameAsShipping = watch("customer.isBillingSameAsShipping");

//   useEffect(() => {
//     if (watchIsBillingSameAsShipping) {
//       const values = getValues().ship;

//       if (values) {
//         setValue("bill", {
//           city: values.city,
//           country: values.country,
//           line1: values.line1,
//           postalCode: values.postalCode,
//           state: values.state
//         });
//       }
//     } else {
//       setValue("bill", {
//         city: "",
//         country: "",
//         line1: "",
//         postalCode: "",
//         state: ""
//       });
//     }
//   }, [watchIsBillingSameAsShipping, getValues, setValue]);

//   return (
//     <div className="flex flex-col lg:flex-row gap-lg">
//       <div
//         className={` ${
//           watchIsExistingCustomer
//             ? "w-full bg-theme-primary"
//             : "flex-1 bg-theme-secondary/50 p-md rounded-lg flex flex-col gap-md"
//         }`}
//       >
//         <div className="flex flex-col gap-xs">
//           <div className="flex flex-col gap-xs">
//             <label htmlFor="email">Email</label>
//             <input
//               id="email"
//               placeholder="Email"
//               {...register("customer.email")}
//             />
//             <span>{errors.customer?.email?.message}</span>
//           </div>

//           <div className="flex flex-col gap-xs">
//             <label htmlFor="password">Password</label>
//             <input
//               id="password"
//               placeholder="Password"
//               type="password"
//               {...register("customer.password")}
//             />
//             <span>{errors.customer?.password?.message}</span>
//           </div>

//           <div className="flex flex-col gap-xs">
//             <label htmlFor="companyName">Company Name</label>
//             <input
//               id="companyName"
//               placeholder="ACME Inc"
//               {...register("customer.companyName")}
//             />
//             <span>{errors.customer?.companyName?.message}</span>
//           </div>

//           <div className="flex items-center gap-xs mb-md">
//             <input
//               type="checkbox"
//               {...register("customer.isExistingCustomer")}
//             />
//             <label htmlFor="isExistingCustomer">I am an existing customer</label>
//           </div>
//         </div>

//         {!watchIsExistingCustomer && (
//           <div className="flex flex-col gap-xs">
//             <h4 className="text-foreground/75">Account Info</h4>

//             <div className="flex gap-sm">
//               <div className="flex flex-col gap-xs flex-1">
//                 <label htmlFor="givenName">First Name</label>
//                 <input
//                   id="givenName"
//                   placeholder="John"
//                   {...register("customer.givenName")}
//                 />
//                 <span>{errors.customer?.givenName?.message}</span>
//               </div>

//               <div className="flex flex-col gap-xs flex-1">
//                 <label htmlFor="familyName">Last Name</label>
//                 <input
//                   id="familyName"
//                   placeholder="Doe"
//                   {...register("customer.familyName")}
//                 />
//                 <span>{errors.customer?.familyName?.message}</span>
//               </div>
//             </div>

//             <div className="flex flex-col gap-xs w-1/2">
//               <label htmlFor="phoneNumber">Phone Number</label>
//               <input
//                 id="phoneNumber"
//                 placeholder="4892234212"
//                 {...register("customer.phoneNumber")}
//               />
//               <span>{errors.customer?.phoneNumber?.message}</span>
//             </div>
//           </div>
//         )}
//       </div>

//       {!watchIsExistingCustomer && (
//         <div className="flex-1 flex flex-col">
//           <ShipAddrInputs />

//           <div className="flex items-center justify-end gap-xs mt-sm mb-lg">
//             <input
//               type="checkbox"
//               {...register("customer.isBillingSameAsShipping")}
//             />
//             <label htmlFor="isExistingCustomer">Use shipping address for billing</label>
//           </div>

//           {!watchIsBillingSameAsShipping && <BillAddrInputs />}
//         </div>
//       )}
//     </div>
//   );
// }

// function ShipAddrInputs() {
//   const { defaultValues } = signupValidator;

//   const {
//     register,
//     formState: { errors }
//   } = useFormContext<typeof defaultValues>();
//   return (
//     <div className="flex flex-col gap-xs p-md bg-theme-accent/50 rounded-lg">
//       <h4 className="text-foreground/75">Shipping Address</h4>

//       <div className="flex flex-col gap-xs">
//         <label htmlFor="line1">Address 1</label>
//         <input
//           id="shipAddrLine1"
//           placeholder="10 Super Dr"
//           {...register("ship.line1")}
//         />
//         <span>{errors.ship?.line1?.message}</span>
//       </div>

//       <div className="flex gap-sm">
//         <div className="flex flex-col gap-xs flex-1">
//           <label htmlFor="city">City</label>
//           <input
//             id="shipAddrCity"
//             placeholder="Etobicoke"
//             {...register("ship.city")}
//           />
//           <span>{errors.ship?.city?.message}</span>
//         </div>

//         <div className="flex flex-col gap-xs">
//           <label htmlFor="state">State</label>
//           <input
//             id="shipAddrState"
//             placeholder="Ontario"
//             {...register("ship.state")}
//           />
//           <span>{errors.ship?.state?.message}</span>
//         </div>
//       </div>

//       <div className="flex gap-sm justify-end">
//         <div className="flex flex-col gap-xs flex-1">
//           <label htmlFor="country">Country</label>
//           <input
//             id="shipAddrCountry"
//             placeholder="CA"
//             {...register("ship.country")}
//           />
//           <span>{errors.ship?.country?.message}</span>
//         </div>

//         <div className="flex flex-col gap-xs flex-1">
//           <label htmlFor="postalCode">Postal Code</label>
//           <input
//             id="shipAddrPostalCode"
//             placeholder="A1A2B2"
//             {...register("ship.postalCode")}
//           />
//           <span>{errors.ship?.postalCode?.message}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// function BillAddrInputs() {
//   const { defaultValues } = signupValidator;

//   const {
//     register,
//     formState: { errors }
//   } = useFormContext<typeof defaultValues>();

//   return (
//     <div className="flex flex-col gap-xs p-md bg-theme-accent/50 rounded-lg">
//       <h4 className="text-foreground/75">Billing Address</h4>

//       <div className="flex flex-col gap-xs">
//         <label htmlFor="line1">Address 1</label>
//         <input
//           id="billAddrLine1"
//           placeholder="10 Super Dr"
//           {...register("bill.line1")}
//         />
//         <span>{errors.bill?.line1?.message}</span>
//       </div>

//       <div className="flex gap-sm">
//         <div className="flex flex-col gap-xs flex-1">
//           <label htmlFor="city">City</label>
//           <input
//             id="billAddrCity"
//             placeholder="Etobicoke"
//             {...register("bill.city")}
//           />
//           <span>{errors.bill?.city?.message}</span>
//         </div>

//         <div className="flex flex-col gap-xs">
//           <label htmlFor="state">State</label>
//           <input
//             id="billAddrState"
//             placeholder="Ontario"
//             {...register("bill.state")}
//           />
//           <span>{errors.bill?.state?.message}</span>
//         </div>
//       </div>

//       <div className="flex gap-sm justify-end">
//         <div className="flex flex-col gap-xs flex-1">
//           <label htmlFor="city">Country</label>
//           <input
//             id="billAddrCountry"
//             placeholder="CA"
//             {...register("bill.country")}
//           />
//           <span>{errors.bill?.country?.message}</span>
//         </div>

//         <div className="flex flex-col gap-xs flex-1">
//           <label htmlFor="postalCode">Postal Code</label>
//           <input
//             id="billAddrPostalCode"
//             placeholder="A1A2B2"
//             {...register("bill.postalCode")}
//           />
//           <span>{errors.bill?.postalCode?.message}</span>
//         </div>
//       </div>
//     </div>
//   );
// }
