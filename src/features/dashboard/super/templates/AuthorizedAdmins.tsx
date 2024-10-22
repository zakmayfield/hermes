"use client";

import { addAuthorizedAdmin } from "@/shared/actions";
import { useToast } from "@/shared/hooks";
import { fetchAuthorizedAdmins } from "@/shared/queries";
import { validators } from "@/shared/validators";
import { Box, Form, FormField, Text } from "@/tw-styled/ui";
import { AuthorizedAdmin } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FieldValues, useForm } from "react-hook-form";

export const AuthorizedAdmins = () => {
  const { data } = useQuery({
    queryKey: ["authorized_admins"],
    queryFn: async () => await fetchAuthorizedAdmins()
  });

  const queryClient = useQueryClient();
  const formMeta = validators.authorizedAdminsValidator();

  type FormData = typeof formMeta.defaultValues;
  type Response = AuthorizedAdmin;

  const { toast } = useToast();

  const { mutate } = useMutation({
    mutationFn: addAuthorizedAdmin,
    onSuccess(data) {
      toast(`Authorized: ${data.email}`);
      queryClient.setQueryData<AuthorizedAdmin[]>(["authorized_admins"], (oldData) => {
        return oldData ? [data, ...oldData] : oldData;
      });
    },
    onError(error) {
      console.log({ error });
      toast("Unable to add authorized admin", "error");
    }
  });

  const { register, reset, handleSubmit } = useForm<FormData, Response>({
    defaultValues: { ...formMeta.defaultValues },
    resolver: formMeta.resolver
  });

  const onSubmit = (data: FieldValues) => {
    mutate(data as FormData);
    reset();
  };

  const submitHandler = handleSubmit(onSubmit);

  const form = (
    <Form
      submitHandler={submitHandler}
      buttonProps={{ variant: "primary" }}
      style={{
        formStyles: { backgroundColor: "secondary" }
      }}
    >
      <FormField
        register={register}
        name="email"
        labelText="Email"
        hiddenElements={{ label_hidden: true }}
      />
    </Form>
  );

  const adminCards =
    data &&
    data.map((admin) => (
      <Box key={admin.authorized_admin_id}>
        <Text>{admin.email}</Text>
      </Box>
    ));

  const admins = <Box>{adminCards}</Box>;

  return (
    <div>
      {form} {admins}
    </div>
  );
};
