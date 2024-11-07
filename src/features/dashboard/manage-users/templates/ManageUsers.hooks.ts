import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchUnapprovedUsers,
  FetchUnapprovedUsersOutput,
  toggleUserApproval
} from "./ManageUsers.db";
import { useToast } from "@/shared/hooks";
import { Onboarding } from "@prisma/client";

export const useFetchUnapprovedUsers = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["unapproved_users"],
    queryFn: async () => await fetchUnapprovedUsers()
  });

  return { data, isLoading };
};

export const useToggleUserApproval = () => {
  const { toast } = useToast();

  const queryClient = useQueryClient();

  const handleFilterCache = (data: Onboarding) => {
    queryClient.setQueryData<FetchUnapprovedUsersOutput>(
      ["unapproved_users"],
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
