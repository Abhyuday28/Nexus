"use client";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
const Providers = ({ children }) => {
  return (
    <SessionProvider>
      {/* <NextThemesProvider attribute="class" defaultTheme="system" enableSystem> */}
      {children}
      {/* </NextThemesProvider> */}
    </SessionProvider>
  );
};

export default Providers;
