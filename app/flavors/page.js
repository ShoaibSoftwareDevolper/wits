import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FlavorsGrid from "@/components/flavors/FlavorsGrid";

export const metadata = {
  title: "Flavors & Notes - Wits Perfumes",
  description: "Explore the olfactory pyramids and natural notes behind each Wits organic perfume.",
};

export default function FlavorsPage() {
  return (
    <div className="min-h-screen bg-white text-[#171717] selection:bg-[#c27845] selection:text-white">
      <header className="border-b border-[#ece7de] bg-white sticky top-0 z-30">
        <Navbar />
      </header>
      <main>
        <FlavorsGrid />
      </main>
      <Footer />
    </div>
  );
}
