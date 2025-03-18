import type { Metadata } from "next";
// import { Poppins } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/shared/Navbar";
import QueryProvider from "@/components/providers/QueryProvider";
import { Toaster } from "@/components/ui/sonner";
import { UserProvider } from "../context/UserContext";
// import Footer from "@/components/shared/Footer";
// const poppins = Poppins({
//   style: "normal",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

export const metadata: Metadata = {
  title: "Idea Flow",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <QueryProvider>
            <Navbar />
            {children}
            {/* <Footer /> */}
          </QueryProvider>
        </UserProvider>
        <Toaster />
      </body>
    </html>
  );
}
