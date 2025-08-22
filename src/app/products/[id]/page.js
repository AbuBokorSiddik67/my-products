import Link from "next/link";

async function getProduct(id) {
  // In a real application, you would fetch from a database or a specific API endpoint.
  // For this mock, we'll fetch all products and find the one with the matching ID.
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return null;
  }
  const products = await res.json();
  return products.find((product) => product.id === parseInt(id));
}

export default async function ProductDetailsPage({ params }) {
  const product = await getProduct(params.id);

  if (!product) {
    return (
      <div className="text-center mt-8 text-red-600">Product not found!</div>
    );
  }
  return (
    <div className="mt-10 pt-20">
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {product.name}
        </h1>
        <p className="text-gray-600 text-lg mb-6">{product.description}</p>
        <p className="text-2xl font-bold text-indigo-600 mb-4">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-sm text-gray-500">Product ID: {product.id}</p>
      </div>
      <div className="text-blue-600 mt-20 flex justify-center btn btn-primary">
        <Link href={`/`}>Back to Home</Link>
      </div>
    </div>
  );
}
