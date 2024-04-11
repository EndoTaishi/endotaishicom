import React from 'react';
import "@/app/ui/globals.css";
import { MPlus1Code } from "@/app/ui/fonts"
import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
import TabLinks from '@/app/ui/tab-links';
import Providers from '@/app/providers'

export default function Layout({ children, }: { children: React.ReactNode, }) {
  return (
    <html>
      <body className={`${MPlus1Code.className} antialiased h-full bg-gray-100`}>
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
