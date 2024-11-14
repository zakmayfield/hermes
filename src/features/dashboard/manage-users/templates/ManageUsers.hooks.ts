import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchUnapprovedUsers,
  FetchUnapprovedUsersOutput,
  toggleUserApproval
} from "./ManageUsers.db";
import { useToast } from "@/shared/hooks/ui";
import { Onboarding } from "@prisma/client";
import { QueryKeys } from "@/utils/core/queryKeys";

export const useFetchUnapprovedUsers = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QueryKeys.UNAPPROVED_USERS_LIST],
    queryFn: async () => await fetchUnapprovedUsers(),
    staleTime: Infinity
  });

  return { data, isLoading };
};

export const useToggleUserApproval = () => {
  const { toast } = useToast();

  const queryClient = useQueryClient();

  const handleFilterCache = (data: Onboarding) => {
    queryClient.setQueryData<FetchUnapprovedUsersOutput>(
      [QueryKeys.UNAPPROVED_USERS_LIST],
      (oldData) => {
        return oldData ? oldData.filter((user) => user.id !== data.user_id) : oldData;
      }
    );
  };

  const { mutate } = useMutation({
    mutationFn: toggleUserApproval,
    onSuccess(data) {
      handleFilterCache(data);
      toast("Successfully approved user");
    },
    onError(error) {
      toast(error.message, "error");
    }
  });

  return { mutate };
};
