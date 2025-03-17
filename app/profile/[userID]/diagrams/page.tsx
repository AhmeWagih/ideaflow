'use client';
import { Button } from '@/components/ui/button';
import { Ellipsis, Globe, Lock } from 'lucide-react';
import Link from 'next/link';
import {
  getAllDiagrams,
  // getUserDiagrams,
} from '@/app/services/api/diagram/diagramApi';
import { TDiagram } from '@/constants/types';
import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';
import { Background, ReactFlow, ReactFlowProvider } from '@xyflow/react';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const FlowPreview = ({ diagramId }: { diagramId: string }) => {
  const {
    data: flowData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['diagramId', diagramId],
    queryFn: async () => {
      const { data } = await api.get(`/Diagram/getAllDiagram`);
      console.log(data);
      return typeof data.flowData === 'string'
        ? JSON.parse(data.flowData)
        : data.flowData;
    },
  });

  if (isLoading) return <div>Loading preview...</div>;
  if (error || !flowData) return <div>Error loading preview</div>;

  return (
    <div style={{ height: '200px', width: '100%' }}>
      <ReactFlowProvider>
        <ReactFlow
          nodes={flowData.nodes ?? []}
          edges={flowData.edges ?? []}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          zoomOnScroll={false}
          panOnScroll={false}
          preventScrolling={false}
          defaultViewport={flowData.viewport ?? { x: 0, y: 0, zoom: 1 }}
        >
          <Background />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

const page = async () => {
  const allDiagrams = await getAllDiagrams();
  return (
    <div className="container mx-auto p-6 flex flex-col gap-6">
      <div className="flex sm:items-center items-start flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
        <h1 className="text-2xl font-semibold">My Diagrams</h1>
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
            className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow relative"
          >
            <div className="absolute top-2 right-3 z-50">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button>
                    <Ellipsis
                      size={24}
                      className=" text-[#4F46E5] cursor-pointer bg-[#4F46E5]/20 rounded-full p-1"
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white shadow-lg rounded-md p-2">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="relative h-40 bg-gray-100">
              <FlowPreview diagramId={diagram.diagramID} />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-medium text-lg">{diagram.title}</h3>
              <div className="flex justify-between text-sm text-gray-500">
                <div className="flex flex-col gap-2">
                  <span>
                    Last edited{' '}
                    {new Date(diagram.updatedAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-end flex-col md:flex-row gap-2">
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
