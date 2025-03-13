/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useSearchParams } from "next/navigation";
import { ReactFlow, Controls, Background, MarkerType } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useEffect, useState } from "react";

function MindMapScreen() {
  const searchParams = useSearchParams();
  const dataParam = searchParams.get("data");
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    if (dataParam) {
      try {
        const decodedData = JSON.parse(decodeURIComponent(dataParam));
        console.log(decodedData);
        const formattedNodes = decodedData.nodes.map(
          (node: any, index: number) => ({
            id: node.id.toString(),
            data: { label: node.data.label },
            position: node.position || { x: index * 100, y: index * 50 },
            style: {
              background: node.style.background,
              border: node.style.border,
              color: node.style.color,
              width: node.style.width,
              borderRadius: node.style.borderRaius,
            },
          })
        );

        const formattedEdges = decodedData.edges.map((edge: any) => ({
          id: `e${edge.source}-${edge.target}`,
          source: edge.source.toString(),
          target: edge.target.toString(),
          aniamte: true,
          type: "smoothstep",
          style: {
            stroke: edge.style.stroke,
            strokeWidth: edge.style.strokeWidth,
          },
          label: edge.label,
          markerEnd: { type: MarkerType.ArrowClosed, color: "#94a3b8" },
        }));

        setNodes(formattedNodes);
        setEdges(formattedEdges);
      } catch (error) {
        console.error("Error parsing mind map data:", error);
      }
    }
  }, [dataParam]);

  return (
    <div style={{ height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodesConnectable={false}
        zoomOnScroll={true}
        panOnDrag={true}
        fitView={true}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default MindMapScreen;
