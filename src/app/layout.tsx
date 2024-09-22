import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { quicksand } from "@/utils/ui";
import { CoreProvider } from "@/lib/providers";
import "./globals.css";
import "react-toastify/ReactToastify.min.css";
import "react-tooltip/dist/react-tooltip.css";
import { getAuthSession } from "@/lib/auth/auth.options";
import { Layout } from "@/shared/components/containers";
import { NavigationTemplate } from "@/features/navigation/templates";
import { FooterTemplate } from "@/features/footer/templates";

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

  const Nav = is_auth && <NavigationTemplate />;
  const Footer = is_auth && <FooterTemplate />;

  return (
    <html lang="en">
      <CoreProvider>
        <body className={`${quicksand.className} antialiased`}>
          {/* NAV */}
          {Nav}

          <Layout
            classList={{
              childrenClassName: "min-h-screen",
              wrapperClassName: "border"
            }}
            style={{
              childrenPadding: "lg",
              width: "3xl"
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
