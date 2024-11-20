import { fetcher } from "@/utils/database/fetcher";
import { getQuickbooksToken } from "@/utils/database/quickbooks/queries";
import { getAuthSession } from "@/utils/database/session/queries";
import { isTokenExpired } from "@/utils/security/quickbooksToken";
import { redirect } from "next/navigation";
import React from "react";

export default async function Layout({
  children,
  error,
  no_token,
  renew_access,
  invoicing
}: {
  children: React.ReactNode;
  no_token: React.ReactNode;
  error: React.ReactNode;
  renew_access: React.ReactNode;
  products: React.ReactNode;
  invoicing: React.ReactNode;
  params: Promise<{ code: string; realmId: string }>;
}) {
  const sessionData = await getAuthSession();
  if (!sessionData || !sessionData.response) {
    redirect("/sign-in");
  }
  const { id } = sessionData.response;

  const { error: responseError, response } = await fetcher({
    options: {
      dbFn: async () => await getQuickbooksToken(id)
    }
  });

  const refreshToken = await isTokenExpired("refresh", response);

  return (
    <div className="space-y-lg">
      <div className="relative">
        <h1>QuickBooks Manager</h1>

        {children}
      </div>

      {responseError ? (
        error
      ) : !response ? (
        no_token
      ) : refreshToken.isValidToken && refreshToken.isExpired ? (
        renew_access
      ) : (
        <div>{invoicing}</div>
      )}
    </div>
  );
}
