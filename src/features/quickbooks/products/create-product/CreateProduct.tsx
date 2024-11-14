import { Button, Form } from "@/ui";
import { useForm } from "react-hook-form";

type QbProductFields = {
  Name: string;
  Description: string;
};

export const CreateProduct = () => {
  // TODO: *** Implement form to create product ***
  const {} = useForm({});

  return (
    <div>
      <Form>
        <input />
        <input />
        <Button options={{ variant: "primary" }}>Create Product</Button>
      </Form>
    </div>
  );
};
