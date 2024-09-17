import type { Metadata } from "next";
import { quicksand } from "@/utils/ui";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hermes",
  description: "Chasers Juice Ordering"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} antialiased`}>{children}</body>
    </html>
  );
}
