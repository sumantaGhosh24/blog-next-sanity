import "./globals.css";
import {Inter as FontSans} from "next/font/google";
import type {Metadata} from "next";
import {ReactNode} from "react";

import {ThemeProvider} from "@/components/theme-provider";
import PrimaryColorProvider from "@/components/primary-provider";
import {cn} from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Blog Next",
    default: "Blog Next",
  },
  description: "Blog using nextjs and sanity",
};

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PrimaryColorProvider>{children}</PrimaryColorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
