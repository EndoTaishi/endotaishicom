import React from 'react';
import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';
import TabLinks from '@/app/ui/tab-links';
import Providers from '@/app/providers'
import "@/app/ui/globals.css";

export default function Layout({ children, }: { children: React.ReactNode, }) {
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
