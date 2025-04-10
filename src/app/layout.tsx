import type { Metadata } from "next";
import { Alice } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const alice = Alice({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Shortina - URL Shortener",
  description: "Shorten your urls!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alice.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
