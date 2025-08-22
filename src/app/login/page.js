"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  // If the user is already authenticated, redirect them away from the login page
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/products");
    }
  }, [status, router]);

  if (status === "authenticated") {
    return null; // Don't render anything if user is authenticated and redirecting
  }

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/products" });
  };

  const handleCredentialsSignIn = async (event) => {
    event.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email: "user@example.com", // Replace with actual form input
      password: "password123", // Replace with actual form input
    });
    if (result.ok) {
      router.push("/products");
    } else {
      console.error("Login failed");
    }
  };

  return (
    <div className="grid grid-col items-center justify-center min-h-screen py-2 pt-20">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <button
        onClick={handleGoogleSignIn}
        className="px-4 py-2 border rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4"
      >
        Sign in with Google
      </button>
      <p className="text-gray-500 mb-2">- or -</p>
      <button
        onClick={handleCredentialsSignIn}
        className="px-4 py-2 border rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Sign in with Credentials (Mock)
      </button>
    </div>
  );
}
