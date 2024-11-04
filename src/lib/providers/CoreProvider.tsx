"use client";

import { themeCtx, ThemeProvider } from "@/utils/theme";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}
const queryClient = new QueryClient();

export const CoreProvider = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <ThemeProvider theme={themeCtx}>{children}</ThemeProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
};
