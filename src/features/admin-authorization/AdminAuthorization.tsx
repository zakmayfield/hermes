"use client";
import { useFormContext } from "@/shared/hooks/forms";
import { useToast } from "@/shared/hooks/ui";
import { Box, Button, Form, Input } from "@/ui";
import { authorizedAdminsValidator } from "@/utils/validators/formValidators";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormProvider } from "react-hook-form";
import { AuthorizedAdmin } from "@prisma/client";
import { addAuthorizedAdmin } from "@/utils/database/admin/mutations";

export type AddAuthorizedAdminInput = { email: string };
export type AddAuthorizedAdminOutput = AuthorizedAdmin;

export const AdminAuthorization = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: addAuthorizedAdmin,
    onSuccess(data) {
      toast(`Authorized: ${data.email}`);
      queryClient.setQueryData<AuthorizedAdmin[]>(["authorized_admins"], (oldData) => {
        return oldData ? [data, ...oldData] : oldData;
      });
    },
    onError(error) {
      toast(error.message, "error");
    }
  });

  const { methods, submitHandler } = useFormContext<
    AddAuthorizedAdminInput,
    AddAuthorizedAdminOutput
  >({ mutate, ...authorizedAdminsValidator() });

  return (
    <Box
      style={{
        borderRadius: "lg",
        backgroundColor: "primary",
        padding: "md",
        spaceY: "md"
      }}
    >
      <h2>Authorize Admins</h2>

      <FormProvider {...methods}>
        <Form submitHandler={submitHandler}>
          <Input
            options={{
              name: "email",
              id: "email",
              placeholder: "johndoe@email.com",
              register: methods.register
            }}
          />
          <Button options={{ variant: "primary" }}>Authorize Admin</Button>
        </Form>
      </FormProvider>
    </Box>
  );
};
