import { redirect } from "next/navigation"

export default function DefaultProfilePage() {
  // In a real app, you would get the user ID from authentication
  const id = "user123" // Example user ID

  // Redirect to the user's profile page
  redirect(`/profile/${id}`)
}

