'use client';
import { useQuery } from '@tanstack/react-query';
// import api from '@/lib/api';
import { Background, ReactFlow, ReactFlowProvider } from '@xyflow/react';

const FlowPreview = ({ contentJson }: { contentJson: string }) => {
  const {
    data: flowData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['contentJson', contentJson],
    queryFn: async () => {
      return typeof contentJson === 'string'
        ? JSON.parse(contentJson)
        : contentJson;
    },
  });

  console.log(flowData);

  if (isLoading) return <div>Loading preview...</div>;
  if (error || !flowData) return <div>Error loading preview</div>;

  return (
    <div style={{ height: '160px', width: '100%' }}>
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
