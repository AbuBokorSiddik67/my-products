import Link from "next/link";

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}
export default async function ProductListPage() {
  const products = await getProducts();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <div className="flex flex-wrap justify-between">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md mt-20 p-6"
          >
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-bold text-indigo-600">
              ${product.price.toFixed(2)}
            </p>
            <Link
              href={`/products/${product.id}`}
              className="mt-4 inline-block text-indigo-600 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
      <div className="text-blue-600 mt-20 flex justify-center btn btn-primary">
        <Link href={`/`}>Back to Home</Link>
      </div>
    </div>
  );
}
