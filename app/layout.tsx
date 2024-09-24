import "./globals.css";
import {ReactNode} from "react";
import type {Metadata} from "next";
import {Inter as FontSans} from "next/font/google";

import {cn} from "@/lib/utils";
import {ThemeProvider} from "@/components/theme-provider";
import PrimaryProvider from "@/components/primary-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Blog Next",
    default: "Blog Next",
  },
  description: "Blog website using nextjs and sanity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-white dark:bg-black font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PrimaryProvider>{children}</PrimaryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
