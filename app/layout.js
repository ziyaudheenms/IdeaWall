import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../elements/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IDEAWALL",
  description: "Place to showcase your products",
  icons: {
    icon: '/favicon.ico', // or '/images/favicon-192.png'
  },
};
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-3`}
      >
        {/* <NavBarDemo /> */}
        {children}
         <Toaster richColors/>
      </body>
    </html>
  );
}
