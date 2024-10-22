"use client";
import React from "react";
import {
  useAddAuthorizedAdmin,
  useAuthorizedAdminsForm
} from "../templates/AuthorizedAdmins.hooks";
import { Box, FieldError, Form, Input, Label, SubmitButton } from "@/tw-styled/ui";

export const AuthorizedAdminForm = () => {
  const { mutate } = useAddAuthorizedAdmin();
  const { methods, submitHandler } = useAuthorizedAdminsForm(mutate);

  return (
    <Form
      submitHandler={submitHandler}
      options={{ title: "Add Authorized Admins", heading: "h3" }}
      style={{
        form: {
          width: "full",
          display: "flex-col",
          gap: "md",
          backgroundColor: "secondary",
          padding: "md",
          borderRadius: "lg"
        }
      }}
    >
      <Box style={{ display: "flex-col", gap: "md", flexAlign: "start" }}>
        <Box style={{ display: "flex-col", flexSize: "grow", width: "full" }}>
          <Label options={{ text: "Foobar", htmlFor: "email", visuallyHidden: true }} />
          <Input
            options={{
              type: "text",
              name: "email",
              placeholder: "Email",
              register: methods.register
            }}
            style={{ padding: "xs", borderRadius: "md" }}
          />

          {methods.formState.errors.email?.message && (
            <FieldError message={methods.formState.errors.email.message} />
          )}
        </Box>

        <SubmitButton
          options={{ variant: "primary", text: "Authorize Admin" }}
          style={{ padding: "none", paddingX: "md", paddingY: "xs", width: "full" }}
        />
      </Box>
    </Form>
  );
};
