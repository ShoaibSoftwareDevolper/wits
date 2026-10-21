import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="max-w-3xl pb-12 border-b border-[#ece7de]">
          <span className="text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#736c64]">
            Our Story & Heritage
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#1c1a17] mt-3 leading-tight">
            Rooted in Nature. Distilled with Intention.
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#736c64] mt-5 leading-relaxed">
            Wits was created with a clear philosophy: perfume should be a grounding sensory anchor that supports mindfulness, rather than an artificial fragrance designed for aggressive projection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-center">
          <div className="lg:col-span-6 space-y-6 font-sans text-sm text-[#575047] leading-relaxed">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1c1a17]">
              The Botanical Difference
            </h2>
            <p>
              Standard commercial perfumes use up to 80% synthetic fixatives and petrochemical carriers to artificially extend shelf life and projection. In contrast, every drop of Wits aroma is formulated around wild-harvested roots, bark extracts, and floral distillates.
            </p>
            <p>
              Because natural botanicals interact uniquely with your personal skin chemistry, a Wits perfume does not smell identical on every person. It transforms gradually throughout the day, releasing fresh volatile citrus notes first, before settling into warm cedar, amber, and vetiver baselines.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 bg-[#fafafa] rounded-2xl shadow-[0_8px_24px_-8px_rgba(0,0,0,0.06)]">
                <span className="font-serif text-2xl font-bold text-[#1c1a17]">100%</span>
                <p className="font-sans text-xs text-[#736c64] mt-1">Natural & Organic Ingredients</p>
              </div>
              <div className="p-5 bg-[#fafafa] rounded-2xl shadow-[0_8px_24px_-8px_rgba(0,0,0,0.06)]">
                <span className="font-serif text-2xl font-bold text-[#1c1a17]">Zero</span>
                <p className="font-sans text-xs text-[#736c64] mt-1">Synthetic Phthalates or Toxins</p>
              </div>
              <div className="p-5 bg-[#fafafa] rounded-2xl shadow-[0_8px_24px_-8px_rgba(0,0,0,0.06)]">
                <span className="font-serif text-2xl font-bold text-[#1c1a17]">Small</span>
                <p className="font-sans text-xs text-[#736c64] mt-1">Batch Steam Extraction</p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/store"
                className="inline-block bg-[#1c1a17] text-white text-[11px] font-sans font-medium uppercase tracking-[0.18em] px-8 py-3.5 hover:bg-black transition-colors"
              >
                Explore The Collection
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative bg-[#fafafa] rounded-2xl p-4 sm:p-6 overflow-hidden shadow-[0_16px_36px_-16px_rgba(0,0,0,0.08)]">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/intensity_woman.jpg"
                  alt="Wits Botanical Mindfulness"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
              </div>

              <div className="mt-6 p-5 sm:p-6 bg-white rounded-xl shadow-xs">
                <p className="font-serif italic text-base sm:text-lg text-[#1c1a17] leading-snug">
                  &ldquo;True luxury in fragrance is not about filling an entire room; it is about creating an intimate boundary of tranquility for the person wearing it.&rdquo;
                </p>
                <span className="block font-sans text-xs uppercase tracking-wider text-[#736c64] mt-3">
                  Wits Botanical Atelier
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
