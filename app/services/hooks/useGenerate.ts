"use client";

import { useMutation } from "@tanstack/react-query";
import { generateResponse } from "../api/generate/generateApi";
import { useRouter } from "next/navigation";

export const useGenerate = (prompt: string) => {
  const router = useRouter();

  return useMutation({
    mutationFn: () => generateResponse(prompt),
    onSuccess: (data) => {
      console.log(data);
      const encodedData = encodeURIComponent(JSON.stringify(data.result));
      router.push(`/mindmap?data=${encodedData}`);
    },
  });
};
