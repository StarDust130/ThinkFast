import type { Metadata } from "next";
import { Stardos_Stencil } from "next/font/google";
import "./globals.css";

const fredericka = Stardos_Stencil({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Think Fast",
  description:
    "ThinkFast 🎉 is an interactive quiz app for kids and Gen Z, turning learning into a fun competition! ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${fredericka.className} antialiased`}>{children}</body>
    </html>
  );
}
