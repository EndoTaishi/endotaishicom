import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./ui/header";
import Footer from "./ui/footer";
import TabLinks from "./ui/tab-links";
import Providers from './providers'
import "@/app/ui/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Endo Taishi",
  description: "このサイトは、自分の技術力を向上させるためにNext.js、TypeScript、Tailwind CSS、Chakra UIを使って開発し、Vercelでホスティングしています。",
};

export default function RootLayout({ children, }: { children: React.ReactNode, }) {
  return (
    <html lang='en'>
      <body className="h-full bg-gray-100">
        <Providers>
          <Header />
          <TabLinks />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
};
