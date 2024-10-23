import {
  UseMutateFunction,
  useMutation,
  useQuery,
  useQueryClient
} from "@tanstack/react-query";
import {
  addAuthorizedAdmin,
  AddAuthorizedAdminInput,
  AddAuthorizedAdminOutput,
  deleteAuthorizedAdmin,
  fetchAuthorizedAdmins,
  revokeAdminRole
} from "./AuthorizedAdmins.db";
import { validators } from "@/shared/validators";
import { AuthorizedAdmin } from "@prisma/client";
import { useFormContext, useToast } from "@/shared/hooks";

export const useFetchAuthorizedAdmins = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["authorized_admins"],
    queryFn: async () => await fetchAuthorizedAdmins()
  });

  return { data, isLoading };
};

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
  const formMeta = validators.authorizedAdminsValidator();

  const { methods, submitHandler } = useFormContext<
    AddAuthorizedAdminInput,
    AddAuthorizedAdminOutput
  >({ ...formMeta, mutate });

  return { methods, submitHandler };
};
