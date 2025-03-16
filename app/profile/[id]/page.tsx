import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Globe, Lock, Users } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  const diagrams = [
    {
      id: '1',
      title: 'Educational-Platform',
      lastEdited: '2h ago',
      visibility: 'Public',
      thumbnail: '/placeholder.svg?height=200&width=300',
    },
    {
      id: '2',
      title: 'E-commerce Database',
      lastEdited: '1d ago',
      visibility: 'Private',
      thumbnail: '/placeholder.svg?height=200&width=300',
    },
    {
      id: '3',
      title: 'Social Media App',
      lastEdited: '3d ago',
      visibility: 'Team',
      thumbnail: '/placeholder.svg?height=200&width=300',
    },
  ];

  return (
    <div className="container mx-auto p-6 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Your Mind Map</h1>
        <Link href="/generate">
          <Button className="bg-purple-600 hover:bg-purple-700 cursor-pointer">
            <span className="mr-1">+</span> Generate New
          </Button>
        </Link>
      </div>

      <div className="">
        <div className="relative inline-block">
          <select className="appearance-none cursor-pointer border rounded-md py-2 pl-3 pr-10 bg-white outline-none text-sm">
            <option>Date updated</option>
            <option>Title</option>
            <option>Recently viewed</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {diagrams.map((diagram) => (
          <div key={diagram.id} className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-40 bg-gray-100">
              <Image
                src={diagram.thumbnail || '/placeholder.svg'}
                alt={diagram.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-lg">{diagram.title}</h3>
              <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                <span>Last edited {diagram.lastEdited}</span>
                <div className="flex items-center">
                  {diagram.visibility === 'Public' && <Globe className="h-4 w-4" />}
                  {diagram.visibility === 'Private' && <Lock className="h-4 w-4" />}
                  {diagram.visibility === 'Team' && <Users className="h-4 w-4" />}
                  <span className="ml-1">{diagram.visibility}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
