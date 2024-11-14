import { UseMutateFunction, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addAuthorizedAdmin,
  AddAuthorizedAdminInput,
  AddAuthorizedAdminOutput,
  deleteAuthorizedAdmin,
  revokeAdminRole
} from "./AuthorizedAdmins.db";
import { authorizedAdminsValidator } from "@/utils/validators/formValidators";
import { AuthorizedAdmin } from "@prisma/client";
import { useToast } from "@/shared/hooks/ui";
import { useFormContext } from "@/shared/hooks/forms";

export const useAddAuthorizedAdmin = () => {
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

  return { mutate };
};

export const useDeleteAuthorizedAdmin = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteAuthorizedAdmin,
    async onSuccess(data) {
      queryClient.setQueryData<AuthorizedAdmin[]>(["authorized_admins"], (oldData) => {
        return oldData
          ? oldData.filter(
              (admin) => admin.authorized_admin_id !== data.authorized_admin_id
            )
          : oldData;
      });

      await revokeAdminRole(data.email);
    }
  });

  return { mutate };
};

export const useAuthorizedAdminsForm = (
  mutate: UseMutateFunction<
    AddAuthorizedAdminOutput,
    Error,
    AddAuthorizedAdminInput,
    unknown
  >
) => {
  const formMeta = authorizedAdminsValidator();

  const { methods, submitHandler } = useFormContext<
    AddAuthorizedAdminInput,
    AddAuthorizedAdminOutput
  >({ ...formMeta, mutate });

  return { methods, submitHandler };
};
