import { $Enums } from "@prisma/client";
import { useToast } from "@/shared/hooks";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import {
  fetchRoleById,
  FetchRolePermissionsOutput,
  togglePermissionLevel
} from "./ConfigurePermissions.db";

export const useTogglePermission = (
  role_id: string,
  permission_id: string,
  permission_level: number,
  name?: $Enums.Permissions
) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: togglePermissionLevel,
    async onSuccess(data) {
      const role = await fetchRoleById({ role_id }).then((r) => r?.name);

      queryClient.setQueryData<FetchRolePermissionsOutput[]>(
        [`role_permissions:${role}`],
        (oldData) => {
          return oldData
            ? oldData.map((rp) =>
                rp.permission_id === data.permission_id
                  ? {
                      ...rp,
                      permission_level: data.permission_level
                    }
                  : rp
              )
            : oldData;
        }
      );

      function getToastMessage() {
        const disabledMessage = `Disabled ${role}:${name}`;
        const enabledMessage = `Enabled ${role}:${name}`;

        return !data.permission_level ? disabledMessage : enabledMessage;
      }

      toast(getToastMessage());
    },

    onError(error) {
      console.log({ error });
    }
  });

  const toggle = () => mutate({ role_id, permission_id, permission_level });

  return toggle;
};
