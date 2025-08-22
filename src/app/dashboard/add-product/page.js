"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import AddProductForm from "../../../../components/Forms/AddProductForm";
// import AddProductForm from "@/components/Forms/AddProductForm";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Show a loading state while fetching session status
  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  // Redirect to login page if user is not authenticated
  if (status === "unauthenticated") {
    router.push("/login");
    return null; // Return null to prevent rendering the component
  }

  // Render the page content for authenticated users
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Add a New Product</h1>
      <AddProductForm />
    </div>
  );
}
