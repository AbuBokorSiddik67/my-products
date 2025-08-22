export default function Hero() {
  return (
    <div className="bg-blue-600 text-white py-20 text-center">
      <h1 className="text-5xl font-bold mb-4">
        Welcome to Our E-commerce Store
      </h1>
      <p className="text-xl mb-8">
        Discover amazing products at unbeatable prices.
      </p>
      <a
        href="/products"
        className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-gray-200"
      >
        Shop Now
      </a>
    </div>
  );
}
