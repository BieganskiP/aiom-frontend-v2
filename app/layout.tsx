import type { Metadata } from "next";
import "./globals.css";

import { Header } from "@/components/molecules/Header";
import { Footer } from "@/components/organisims/Footer";

export const metadata: Metadata = {
  title: "Fitlit",
  description: "Fitlit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="bg-background text-foreground">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
