"use client";
import { ChangeEvent } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PiSpinnerGap } from "react-icons/pi";
import { changeRole } from "@/utils/database/actions";
import { fetchAuthUserRole } from "@/utils/database/queries";
import { QueryKeys } from "@/utils/core/queryKeys";

export const RoleSwitch = () => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: [QueryKeys.ACTIVE_USER_ROLE],
    queryFn: async () => await fetchAuthUserRole()
  });

  const invalidateRolesCache = () =>
    queryClient.invalidateQueries({
      queryKey: [QueryKeys.ACTIVE_USER_ROLE]
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
    <div className="absolute left-0 top-1/4 bottom-1/4 flex items-center">
      <form action={mutate}>
        {isLoading ? (
          <PiSpinnerGap className="animate-spin" />
        ) : (
          <select
            name="role"
            id="role"
            className="bg-transparent"
            onChange={handleChange}
            value={data}
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
