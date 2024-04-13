import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import Providers from '@/app/providers'
import "@/app/ui/globals.css";

export default function RootLayout({ children, }: { children: React.ReactNode, }) {
  return (
    <div className="h-full bg-gray-100">{children}</div>
  )
};