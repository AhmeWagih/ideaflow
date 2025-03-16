'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { SideBarItems } from '@/constants/indes';

const Sidebar = ({ userId }: { userId: string }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full p-2">
      <div className="flex flex-col gap-7 p-5">
        {SideBarItems(userId).map((item) => {
          const isActive = pathname === item.href;
          return (
            <div key={item.href}>
              <div
                className={cn(
                  'flex items-center gap-3 text-sm font-medium',
                  isActive
                    ? 'text-purple-700 bg-[#EDE9FE] rounded-md'
                    : 'text-slate-700 hover:text-purple-700'
                )}
              >
                <Link href={item.href} className="flex items-center gap-3 hover:bg-[#EDE9FE] p-3 rounded-md w-full">
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
