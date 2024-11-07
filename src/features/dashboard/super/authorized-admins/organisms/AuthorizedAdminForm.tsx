"use client";
import React from "react";
import {
  useAddAuthorizedAdmin,
  useAuthorizedAdminsForm
} from "../templates/AuthorizedAdmins.hooks";
import { useIcons, useTooltip } from "@/shared/hooks";
import { Box, FieldError, Form, Icon, Input, Label, SubmitButton } from "@/ui";

export const AuthorizedAdminForm = () => {
  const { mutate } = useAddAuthorizedAdmin();
  const { methods, submitHandler } = useAuthorizedAdminsForm(mutate);
  const icons = useIcons({ names: ["info"] });
  const tooltip = useTooltip({ anchorSelect: "#add_authorized_admins_info" });

  return (
    <Form
      submitHandler={submitHandler}
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
      <div className="flex items-center gap-[var(--space-sm)]">
        <h3>Add Authorized Admin</h3>
        <Icon
          name="info"
          id="add_authorized_admins_info"
          tooltipHtml="Authorizing an email allows the user to create an <br /> adminstrator account"
          style={{ fontSize: "lg" }}
        />
        {tooltip}
      </div>

      <Box style={{ display: "flex-col", gap: "md", flexAlign: "start" }}>
        <Box style={{ display: "flex-col", flexSize: "grow", width: "full" }}>
          <Label options={{ text: "Foobar", htmlFor: "email", visuallyHidden: true }} />
          <Input
            options={{
              type: "text",
              id: "email",
              name: "email",
              placeholder: "johnsmith@email.com",
              register: methods.register
            }}
            style={{ padding: "xs", borderRadius: "md" }}
          />

          {methods.formState.errors.email?.message && (
            <FieldError options={{ message: methods.formState.errors.email.message }} />
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
