import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import { Features } from "@/components/features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <LogoTicker/>
      <Features/>
      <ProductShowcase/>
      <Footer />
    </div>
  );
}
