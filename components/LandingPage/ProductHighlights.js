import Link from "next/link";

// Mock data for highlighted products
const highlightedProducts = [
  { id: 1, name: "Product A", price: 29.99, image: "placeholder-url" },
  { id: 2, name: "Product B", price: 49.99, image: "placeholder-url" },
  { id: 3, name: "Product C", price: 99.5, image: "placeholder-url" },
];

export default function ProductHighlights() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {highlightedProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
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
      </div>
    </section>
  );
}
