import { Suspense } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import IntensitySection from "@/components/home/IntensitySection";
import TrustedSupportSection from "@/components/home/TrustedSupportSection";
import SpectrumSection from "@/components/home/SpectrumSection";
import AuthenticSection from "@/components/home/AuthenticSection";
import BestTasteSection from "@/components/home/BestTasteSection";
import BrandLogos from "@/components/home/BrandLogos";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#171717] selection:bg-[#c27845] selection:text-white">
      <header className="relative w-full overflow-hidden isolate">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <Image
            src="/hero-bg-opt.jpg"
            alt="Hero background"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <Navbar />
        <Hero />
      </header>
      <Stats />
      <FeaturedProducts />
      <IntensitySection />
      <TrustedSupportSection />
      <SpectrumSection />
      <AuthenticSection />
      <BestTasteSection />
      <Suspense fallback={<div className="h-28 bg-[#fafafa]" />}>
        <BrandLogos />
      </Suspense>
      <Suspense fallback={<div className="h-96" />}>
        <Testimonials />
      </Suspense>
      <CtaBanner />
      <Footer />
    </div>
  );
}
