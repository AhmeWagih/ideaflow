import api from "@/lib/api";

export const getUserDiagrams = async (userID: string) => {
  const { data } = await api.get(`/Diagram/getUserDiagrams/${userID}`);
  return data;
};

// export const getUserDiagrams = async () => {
//   const token = localStorage.getItem("token");
//   console.log(token);
//   const { data } = await api.get("/Diagram/getUserDiagrams", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return data;
// };

export const getAllDiagrams = async () => {
  const { data } = await api.get("/Diagram/getAllDiagrams");
  return data;
};

export const getPublicDiagrams = async () => {
  const { data } = await api.get("/Diagram/getPublicDiagrams");
  return data;
};

export const getDiagramByTitle = async (title: string) => {
  const { data } = await api.get(`/Diagram/getDiagrams/${title}`);
  return data;
};

export const getDiagramById = async ({ id }: { id: string }) => {
  const { data } = await api.get(`/Diagram/getDiagram/${id}`);
  return data;
};
