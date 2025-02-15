import type { Metadata } from "next";

import { Footer } from "@/src/widgets/footer";
import { Header } from "@/src/widgets/header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ weight: ["400", "500"], subsets: ["latin", "cyrillic"] });
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full overflow-x-hidden">
      <body
        className={`${inter.className} grid h-full grid-rows-[auto_1fr_auto] items-center overflow-x-hidden py-8 antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
