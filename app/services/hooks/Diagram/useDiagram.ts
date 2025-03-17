import { useQuery } from "@tanstack/react-query";
import { getDiagramById } from "../../api/diagram/diagramApi";

export const useGetDiagramById = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: ["diagram"],
    queryFn: () => getDiagramById({ id }),
  });
};
