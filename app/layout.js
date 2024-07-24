import { Inter, Tenor_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import Providers from "./Providers";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nexus",
  description: "Nexus a connect app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Toaster/>
        </Providers>
        <Footer/>
      </body>
    </html>
  );
}
