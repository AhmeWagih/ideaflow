import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Globe, Lock } from 'lucide-react';
import Link from 'next/link';
import {
  getAllDiagrams,
  // getUserDiagrams,
} from '@/app/services/api/diagram/diagramApi';
import { TDiagram } from '@/constants/types';


const page = async () => {
  // const diagrams = await getUserDiagrams();
  const allDiagrams = await getAllDiagrams();
  console.log(allDiagrams.result.items);
  // console.log(diagrams.result.items);

  return (
    <div className="container mx-auto p-6 flex flex-col gap-6">
      <div className="flex sm:items-center items-start flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
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
        {allDiagrams.result.items.map((diagram: TDiagram, index: number) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-40 bg-gray-100">
              <Image
                src={diagram.thumbnail || '/placeholder.svg'}
                alt={diagram.title}
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-medium text-lg">{diagram.title}</h3>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>
                  Last edited {new Date(diagram.updatedAt).toLocaleDateString()}
                </span>
                <div className="flex items-center flex-col md:flex-row gap-2">
                  {diagram.isPublic === true && <Globe className="h-4 w-4" />}
                  {diagram.isPublic === false && <Lock className="h-4 w-4" />}
                  <span>{diagram.isPublic ? 'Public' : 'Private'}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
