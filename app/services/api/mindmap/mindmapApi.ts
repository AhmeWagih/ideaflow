import { TSave_Mindmap } from "@/constants/types";
import api from "@/lib/api";

export const saveMindmap = async ({
  title,
  contentjson,
  isPublic,
}: TSave_Mindmap) => {
  const { data } = await api.post("/Diagram/addDiagram", {
    title,
    contentjson,
    isPublic,
  });
  return data;
};
