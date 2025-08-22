"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          MyStore
        </Link>
        <div className="flex space-x-4 items-center">
          <Link href="/products" className="hover:text-gray-300">
            Products
          </Link>
          {status === "authenticated" && (
            <Link href="/dashboard/add-product" className="hover:text-gray-300">
              Add Product
            </Link>
          )}
          {status === "authenticated" ? (
            <button
              onClick={() => signOut()}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded-md"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
