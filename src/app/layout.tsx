import type { Metadata } from "next";
import { Stardos_Stencil } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/elements/theme-provider";
import Header from "@/components/elements/Header";

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
    <html lang="en" suppressHydrationWarning>
      <body className={` ${fredericka.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="px-10 h-screen w-full">
            <Header />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
