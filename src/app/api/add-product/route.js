import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

// A simple mock database
let mockProducts = [
  { id: 1, name: "Product A", description: "Description A", price: 29.99 },
];

export async function POST(request) {
  // Check for an authenticated session
  const session = await getServerSession(authOptions);

  if (!session) {
    // If no session exists, return an unauthorized response
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  // Parse the product data from the request body
  const newProduct = await request.json();

  // Add a unique ID to the new product (for simplicity)
  const newProductId = mockProducts.length + 1;
  const productToAdd = { id: newProductId, ...newProduct };
  mockProducts.push(productToAdd);

  // Log the new product to the console
  console.log("New product added:", productToAdd);

  // Return a success response
  return NextResponse.json(
    { message: "Product added successfully", product: productToAdd },
    { status: 201 }
  );
}

