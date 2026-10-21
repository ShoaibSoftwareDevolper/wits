import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/about/AboutSection";

export const metadata = {
  title: "About Us - Wits Perfumes",
  description: "Learn about the botanical philosophy and intentional small-batch distillation behind Wits.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#171717] selection:bg-[#c27845] selection:text-white">
      <header className="border-b border-[#ece7de] bg-white sticky top-0 z-30">
        <Navbar />
      </header>
      <main>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
