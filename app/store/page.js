import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StoreProducts from "@/components/store/StoreProducts";

export const metadata = {
  title: "Store - Wits Perfumes",
  description: "Browse the complete collection of Wits botanical aromas and organic perfume extracts.",
};

export default function StorePage() {
  return (
    <div className="min-h-screen bg-white text-[#171717] selection:bg-[#c27845] selection:text-white">
      <header className="border-b border-[#ece7de] bg-white sticky top-0 z-30">
        <Navbar />
      </header>
      <main>
        <StoreProducts />
      </main>
      <Footer />
    </div>
  );
}
