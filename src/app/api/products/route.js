import { NextResponse } from "next/server";

// Mock product data to be used by the API
const products = [
  {
    id: 1,
    name: "Product A",
    description: "This is the description for product A.",
    price: 29.99,
  },
  {
    id: 2,
    name: "Product B",
    description: "This is the description for product B.",
    price: 49.99,
  },
  {
    id: 3,
    name: "Product C",
    description: "This is the description for product C.",
    price: 99.5,
  },
];

export async function GET() {
  return NextResponse.json(products);
}
