"use client";
import { Form, Input, SubmitButton } from "@/ui";

export const CreateProduct = () => {
  return (
    <div>
      <Form>
        <Input
          options={{
            name: "Name",
            id: "Name",
            placeholder: "LI-1"
          }}
        />
        <Input
          options={{
            name: "Type",
            id: "Type",
            placeholder: "NonInventory"
          }}
        />
        <SubmitButton options={{ text: "Create Product", variant: "primary" }} />
      </Form>
    </div>
  );
};
