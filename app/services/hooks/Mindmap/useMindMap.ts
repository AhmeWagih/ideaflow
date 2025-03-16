import { TSave_Mindmap } from "@/constants/types";
import { useMutation } from "@tanstack/react-query";
import { saveMindmap } from "../../api/mindmap/mindmapApi";
import { toast } from "sonner";

export const useSaveMindMap = ({
  title,
  contentjson,
  isPublic,
}: TSave_Mindmap) => {
  return useMutation({
    mutationFn: () => saveMindmap({ title, contentjson, isPublic }),
    onSuccess: (data) => {
      console.log(data);
      toast("Your mind map has beed created!");
    },
  });
};
