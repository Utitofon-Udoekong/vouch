import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import { Web3Provider } from "@/context/Web3Provider";
import { ToastProvider } from "@/components/Toast";
import { ProtectedDataProvider } from "@/context/ProtectedDataContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vouch - Verified Yield Badge",
  description: "Privacy-preserving property income verification for DeFi lending",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const cookies = headersList.get("cookie");

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Web3Provider cookies={cookies}>
          <ToastProvider>
            <ProtectedDataProvider>
              {children}
            </ProtectedDataProvider>
          </ToastProvider>
        </Web3Provider>
      </body>
    </html>
  );
}
