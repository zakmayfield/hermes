import type { Metadata } from "next";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import { quicksand } from "@/utils/ui";
import { CoreProvider } from "@/lib/providers";
import { getAuthSession } from "@/lib/auth/auth.options";
import { Layout } from "@/tw-styled/ui";
import { Footer, Header } from "@/shared/components";
import "./globals.css";
import "react-toastify/ReactToastify.min.css";
import "react-tooltip/dist/react-tooltip.css";

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
          {/* NAV */}
          {is_auth && <Header />}

          <Layout
            style={{
              childrenWrapper: { minHeight: "screen" }
            }}
          >
            {children}
          </Layout>

          {/* FOOTER */}
          {is_auth && <Footer />}

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
