"use client";
import { useFormContext } from "@/shared/hooks/forms";
import { Form, Input, SubmitButton } from "@/ui";
import {
  createProduct,
  CreateProductInput,
  CreateProductOutput
} from "@/utils/qb/mutations";
import { createProductValidator } from "@/utils/validators/formValidators";
import { useMutation } from "@tanstack/react-query";

// TODO: *** Attempt QuickBooks authentication with PostMan again, if not configure workspace that uses Bearer token ***
// TODO: *** Create a brainstorm note to work through the types of requests that will be needed ***
// Note: several requests rely on other requests, for example creating a product requires `IncomeAccountRef` information, which means
// an Account query is required to retrieve this data
// TODO: *** Create a separate QuickBooks services directory with one function per file ***
// TODO: *** Update `createProduct` to accept more product data ***

export const CreateProduct = () => {
  const { mutate } = useMutation({ mutationFn: createProduct });

  const { methods, submitHandler } = useFormContext<
    CreateProductInput,
    CreateProductOutput | null
  >({
    mutate,
    ...createProductValidator()
  });

  return (
    <div>
      <Form submitHandler={submitHandler}>
        <Input
          options={{
            name: "Name",
            id: "Name",
            placeholder: "LI-1",
            register: methods.register
          }}
        />
        <Input
          options={{
            name: "Type",
            id: "Type",
            placeholder: "NonInventory",
            register: methods.register
          }}
        />
        <SubmitButton options={{ text: "Create Product", variant: "primary" }} />
      </Form>
    </div>
  );
};
