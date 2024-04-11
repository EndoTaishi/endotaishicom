import "@/app/ui/globals.css";
import { MPlus1Code } from "@/app/ui/fonts"
import type { Metadata } from "next";
//import Header from "./ui/header";
//import Footer from "./ui/footer";
//import TabLinks from "./ui/tab-links";
import Providers from './providers'

export const metadata: Metadata = {
  title: "Endo Taishi",
  description: "このサイトは、自分の技術力を向上させるためにNext.js、TypeScript、Tailwind CSS、Chakra UIを使って開発し、Vercelでホスティングしています。",
};

export default function RootLayout({ children, }: { children: React.ReactNode, }) {
  return (
    <html>
      <body className={`${MPlus1Code.className} antialiased full bg-gray-100`}>
          <Providers>{children}</Providers>
      </body>
    </html>
  )
};
