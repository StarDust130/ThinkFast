import type { Metadata } from "next";
import { Stardos_Stencil } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/elements/theme-provider";

import Footer from "@/components/elements/Footer";
import { dark } from "@clerk/themes";
import { ClerkProvider } from "@clerk/nextjs";

const fredericka = Stardos_Stencil({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    template: "%s : Think Fast",
    default: "Welcome:  Think Fast",
  },
  description:
    "ThinkFast 🎉 is an interactive quiz app for kids and Gen Z, turning learning into a fun competition! ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={` ${fredericka.className} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="min-h-screen flex flex-col dark:bg-black dark:text-white">
              <div className="min-h-screen w-full flex-grow  ">
                {children}
                <Footer />
              </div>
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
