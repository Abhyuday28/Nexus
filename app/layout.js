import { Inter, Tenor_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import Providers from "./Providers";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nexus",
  description: "Nexus Academic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <div className="flex-col justify-between">
            <div className="min-h-screen pb-4">
              <Header />
              {children}
              <Toaster />
            </div>
            <Footer />
          </div>
        </body>
      </Providers>
    </html>
  );
}
