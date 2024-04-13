import React from 'react';
import "@/app/ui/globals.css";
import { MPlus1Code } from "@/app/ui/fonts"
import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';

export default function Layout({ children, }: { children: React.ReactNode, }) {
  return (
    <div className={`${MPlus1Code.className} antialiased h-full bg-gray-100`}>
      <Header />
        {children}
      <Footer />
    </div>
  )
};
