'use client';
import { useQuery } from '@tanstack/react-query';
import api from '@/lib/api';
import { Background, ReactFlow, ReactFlowProvider } from '@xyflow/react';

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

export default FlowPreview;
