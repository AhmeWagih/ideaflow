import api from "@/lib/api";

export const generateResponse = async (prompt: string) => {
  const { data } = await api.post("/Generator/generate", {
    prompt,
  });
  return data;
};
