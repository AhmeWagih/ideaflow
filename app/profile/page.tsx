import { redirect } from "next/navigation"

export default function DefaultProfilePage({ params }: { params: { userID: string } }) {
  // Get the user ID from the query parameters
  const userID = params.userID;
  console.log(userID);
  // Redirect to the user's profile page
  redirect(`/profile/${userID}/diagrams`);
}
