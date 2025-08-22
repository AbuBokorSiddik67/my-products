import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import Hero from "../../components/LandingPage/Hero";
import ProductHighlights from "../../components/LandingPage/ProductHighlights";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProductHighlights />
      </main>
      <Footer />
    </div>
  );
}
