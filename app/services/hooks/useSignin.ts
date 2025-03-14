// "use client";

// import { useMutation } from "@tanstack/react-query";
// import { useRouter } from "next/navigation";
// import { Login } from "../api/user/userApi";
// import { TSignIn } from "@/constants/types";

// export const useSignin = ({ email, password }: TSignIn) => {
//   const router = useRouter();

//   return useMutation({
//     mutationFn: () => Login({ email, password }),
//     onSuccess: (data) => {
//       // router.push(`/`);
//       console.log(data);
//     },
//   });
// };
