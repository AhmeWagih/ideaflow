// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// // import { Toaster } from "@/components/ui/toaster";
// // import { UserProvider } from "../context/UserContext";

// import '../globals.css';
// // import QueryProvider from "@/components/shared/QueryProvider";

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'IdeaFlow',
//   description: '',
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//          <UserProvider>
//           <QueryProvider>{children}</QueryProvider>
//         </UserProvider>
//          <Footer />
//         <Toaster /> 
//       </body>
//     </html>
//   );
// }
