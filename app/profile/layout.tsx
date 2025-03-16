import { Navbar } from '@/components/shared/Navbar';
import Sidebar from '@/components/shared/Sidebar';
import '../globals.css';

export const metadata = {
  title: 'Profile',
  description: 'Profile',
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    id: string;
  };
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="flex h-screen">
          <div className="w-1/6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[#F5F3FF]">
            <Sidebar userId={params.id} />
          </div>
          <div className="flex-1 p-6 bg-white">{children}</div>
        </div>
      </body>
    </html>
  );
}
