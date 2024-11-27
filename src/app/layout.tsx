import type { Metadata } from "next";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import { quicksand } from "@/utils/core/fonts";
import { CoreProvider } from "@/lib/providers";
import { getAuthSession } from "@/lib/auth/auth.options";
import "./globals.css";
import "react-toastify/ReactToastify.min.css";
import "react-tooltip/dist/react-tooltip.css";
import { Box, SidebarNavigation } from "@/ui";

export const metadata: Metadata = {
  title: "Hermes",
  description: "Chasers Juice Ordering"
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getAuthSession();
  const is_auth = !!session;

  return (
    <html lang="en">
      <CoreProvider>
        <body className={`${quicksand.className} antialiased`}>
          <Box
            style={{
              minHeight: "screen",
              display: "flex-row",
              position: "relative"
            }}
          >
            {is_auth && <SidebarNavigation role={session?.user.role} />}

            <Box style={{ width: "full" }}>
              <Box
                style={{
                  backgroundColor: "secondary",
                  height: "full",
                  padding: "lg"
                }}
              >
                {children}
              </Box>
            </Box>
          </Box>

          <ToastContainer
            limit={4}
            autoClose={3000}
            position="bottom-right"
          />

          <ReactQueryDevtools initialIsOpen={false} />
        </body>
      </CoreProvider>
    </html>
  );
}
