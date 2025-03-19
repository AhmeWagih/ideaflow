"use client";

import { useMutation } from "@tanstack/react-query";
import { generateResponse } from "../api/generate/generateApi";
import { useRouter } from "next/navigation";

export const useGenerate = ({
  prompt,
  modelOption,
}: {
  prompt: string;
  modelOption: number;
}) => {
  const router = useRouter();

  return useMutation({
    mutationFn: () => generateResponse({ prompt, modelOption }),
    onSuccess: (data) => {
      const encodedData = encodeURIComponent(JSON.stringify(data.result));
      router.push(`/mindmap?data=${encodedData}`);
    },
  });
};
