import type { Metadata } from "next";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import { quicksand } from "@/utils/ui";
import { CoreProvider } from "@/lib/providers";
import { getAuthSession } from "@/lib/auth/auth.options";
import { FooterLayout, HeaderLayout } from "@/features/templates";
import "./globals.css";
import "react-toastify/ReactToastify.min.css";
import "react-tooltip/dist/react-tooltip.css";
import { Layout } from "@/tw-styled/ui";

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

  const Header = is_auth && <HeaderLayout />;
  const Footer = is_auth && <FooterLayout />;

  return (
    <html lang="en">
      <CoreProvider>
        <body className={`${quicksand.className} antialiased`}>
          {/* NAV */}
          {Header}

          <Layout
            style={{
              parentWrapper: {
                width: "3xl",
                place: "center",
                border: "sm",
                height: "screen",
                className: "border-orange-500"
              }
            }}
          >
            {children}
          </Layout>

          {/* FOOTER */}
          {Footer}

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
