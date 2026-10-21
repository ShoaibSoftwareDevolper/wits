import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogGrid from "@/components/blog/BlogGrid";

export const metadata = {
  title: "Blog & Journal - Wits Perfumes",
  description: "Read stories about botanical extraction, mindful aromatics, and organic sourcing.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-[#171717] selection:bg-[#c27845] selection:text-white">
      <header className="border-b border-[#ece7de] bg-white sticky top-0 z-30">
        <Navbar />
      </header>
      <main>
        <BlogGrid />
      </main>
      <Footer />
    </div>
  );
}
