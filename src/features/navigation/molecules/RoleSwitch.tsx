import { ChangeEvent } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PiSpinnerGap } from "react-icons/pi";
import { changeRole } from "@/shared/actions";
import { fetchUserRoles } from "@/shared/queries";

export const RoleSwitch = () => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["user_roles"],
    queryFn: async () => await fetchUserRoles()
  });

  const invalidateRolesCache = () =>
    queryClient.invalidateQueries({
      queryKey: ["user_roles"]
    });

  const { mutate } = useMutation({
    mutationFn: changeRole,
    onSuccess: invalidateRolesCache
  });

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const form = e.target.form;
    form?.requestSubmit();
  };

  return (
    <div className="absolute top-1/4 bottom-1/4 flex items-center">
      <form action={mutate}>
        {isLoading ? (
          <PiSpinnerGap className="animate-spin" />
        ) : (
          <select
            name="role"
            id="role"
            className="bg-transparent"
            onChange={handleChange}
            value={data?.[data.length - 1].name}
          >
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
            <option value="SUPER">SUPER</option>
          </select>
        )}
      </form>
    </div>
  );
};
