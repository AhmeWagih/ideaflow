"use client";

import { useGetDiagramById } from "@/app/services/hooks/Diagram/useDiagram";
import DiagramFlow from "@/components/shared/CommunityMindmapFlow";
import StarDiagramButton from "@/components/shared/StarDiagramButton";
import { TDiagram } from "@/constants/types";
import { useParams } from "next/navigation";

const DiagramPage = () => {
  const { id } = useParams();

  const { data: diagramData } = useGetDiagramById({ id: id as string }) as {
    data: { result: TDiagram };
  };

  console.log(diagramData);

  return (
    <div className="mx-auto container p-10">
      {/* start of the header */}
      <div className="flex justify-between gap-2">
        <div className="flex-grow">
          <p className="opacity-50">Mind map for</p>
          <h1 className="text-2xl font-semibold">
            {diagramData?.result?.title}
          </h1>
          <p>
            {" "}
            {diagramData?.result?.fullName}: {diagramData?.result?.description}
          </p>
        </div>
        <div>
          {/* Button to star the diagram */}
          <StarDiagramButton />
        </div>
      </div>
      <hr className="mt-10" />
      {/* end of the header */}
      <DiagramFlow id={diagramData?.result?.diagramID} />
    </div>
  );
};

export default DiagramPage;
