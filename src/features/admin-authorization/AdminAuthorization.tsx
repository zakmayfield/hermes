"use client";
import { useFormContext } from "@/shared/hooks/forms";
import { useToast } from "@/shared/hooks/ui";
import { Box, Button, Form, Icon, Input, Pulse, SubmitButton, Text } from "@/ui";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QueryKeys } from "@/utils/core/queryKeys";
import { $Enums, AuthorizedAdmin } from "@prisma/client";
import React from "react";
import { Modal } from "@/shared/components";
import { getAuthorizedAdmins } from "@/data/database/queries";
import {
  createAuthorizedAdmin,
  deleteAuthorizedAdmin,
  revokeAdminRole
} from "@/data/database/mutations";
import { authorizeAdminValidator } from "@/utils/validators/forms/authorizeAdminValidator";

export const AdminAuthorization = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createAuthorizedAdmin,
    onSuccess(data) {
      toast(`Authorized: ${data.email}`);
      queryClient.setQueryData<AuthorizedAdmin[]>(
        [QueryKeys.AUTHORIZED_ADMINS_LIST],
        (oldData) => {
          return oldData ? [data, ...oldData] : oldData;
        }
      );
      queryClient.invalidateQueries({
        queryKey: ["users", `role:${$Enums.Roles.ADMIN}`]
      });
    },
    onError(error) {
      toast(error.message, "error");
    }
  });

  const { defaultValues, resolver } = authorizeAdminValidator;

  const { methods, submitHandler } = useFormContext<{ email: string }, AuthorizedAdmin>({
    mutate,
    defaultValues,
    resolver
  });

  return (
    <Box
      style={{
        borderRadius: "lg",
        backgroundColor: "theme-primary",
        padding: "md",
        spaceY: "md"
      }}
    >
      <h2>Authorize Admins</h2>

      <Form submitHandler={submitHandler}>
        <Input
          options={{
            name: "email",
            id: "email",
            placeholder: "johndoe@email.com",
            register: methods.register
          }}
        />
        <SubmitButton options={{ text: "Authorize Admin", variant: "green" }} />
      </Form>

      <AuthorizedAdminList />
    </Box>
  );
};

function AuthorizedAdminList() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["authorized_admins"],
    queryFn: async () => await getAuthorizedAdmins(),
    staleTime: Infinity
  });

  return (
    <Box style={{ display: "flex-col", gap: "sm" }}>
      {isLoading ? (
        <Pulse />
      ) : error ? (
        <Box>{error.message}</Box>
      ) : data && data.length > 0 ? (
        data.map((admin) => (
          <AuthorizedAdminItem
            key={admin.authorized_admin_id}
            admin={admin}
          />
        ))
      ) : (
        <Box
          style={{
            backgroundColor: "theme-secondary",
            padding: "lg",
            borderRadius: "lg"
          }}
        >
          <Text>No authorized admins</Text>
        </Box>
      )}
    </Box>
  );
}

function AuthorizedAdminItem({ admin }: { admin: AuthorizedAdmin }) {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const { mutate } = useMutation({
    mutationFn: deleteAuthorizedAdmin,
    async onSuccess(data) {
      queryClient.setQueryData<AuthorizedAdmin[]>(
        [QueryKeys.AUTHORIZED_ADMINS_LIST],
        (oldData) => {
          return oldData
            ? oldData.filter(
                (admin) => admin.authorized_admin_id !== data.authorized_admin_id
              )
            : oldData;
        }
      );

      await revokeAdminRole(data.email);

      queryClient.invalidateQueries({
        queryKey: ["users", `role:${$Enums.Roles.ADMIN}`]
      });
    }
  });

  return (
    <Box
      style={{
        width: "full",
        display: "flex-row",
        gap: "sm"
      }}
    >
      <Button
        handleClick={() => setIsModalOpen(true)}
        options={{ variant: "red" }}
        style={{ padding: "none", paddingX: "lg", paddingY: "xs", className: "lg:px-sm" }}
      >
        <Icon
          name="trash"
          style={{ fontSize: "lg" }}
        />
      </Button>

      <Box
        style={{
          backgroundColor: "theme-secondary",
          padding: "xs",
          paddingX: "md",
          borderRadius: "md",
          width: "full"
        }}
      >
        <span>{admin.email}</span>
      </Box>

      {isModalOpen && (
        <Modal>
          <div className="max-w-md w-full mx-lg p-xl rounded-lg bg-primary space-y-lg shadow-2xl">
            <div className="space-y-md">
              <h5>Are you sure you want to remove this admin?</h5>

              <p className="text-foreground/60 italic">
                Caution: removing <span className="text-foreground">{admin.email}</span>{" "}
                will revoke their administrative privileges.
              </p>
            </div>

            <div className="flex gap-[var(--space-lg)]">
              <Button
                options={{ variant: "red" }}
                handleClick={() => {
                  mutate({ authorized_admin_id: admin.authorized_admin_id });
                  setIsModalOpen(false);
                }}
                style={{ width: "full" }}
              >
                Delete
              </Button>

              <Button
                options={{ variant: "ghost" }}
                handleClick={() => setIsModalOpen(false)}
              >
                Back
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </Box>
  );
}
