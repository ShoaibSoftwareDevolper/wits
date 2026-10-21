import { Award, Truck, RefreshCcw, Headset } from "lucide-react";

export default function AuthenticSection() {
  return (
    <section className="py-12 sm:py-16 bg-[#fafafa]">
      <div className="text-center max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-[38px] font-medium tracking-normal uppercase text-[#1f1d1b]">
          <span className="font-sans font-semibold">100</span>% AUTHENTIC PRODUCT
        </h2>
        <p className="font-sans text-xs sm:text-sm text-[#7e766e] mt-2.5 max-w-xl mx-auto">
          And produce say the ten moments parties. Simple innate summer fat appear basket his desire joy.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center mb-3.5">
            <Award size={80} strokeWidth={1} color="#2b2b2b" />
          </div>
          <h3 className="font-sans text-xs sm:text-sm font-medium text-[#1f1d1b] max-w-[170px] leading-snug">
            100% Genuien Product Gurrentee
          </h3>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center mb-3.5">
            <Truck size={80} strokeWidth={1} color="#2b2b2b" />
          </div>
          <h3 className="font-sans text-xs sm:text-sm font-medium text-[#1f1d1b] max-w-[170px] leading-snug">
            Gurrented On Time Delivery
          </h3>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center mb-3.5">
            <RefreshCcw size={80} strokeWidth={1} color="#2b2b2b" />
          </div>
          <h3 className="font-sans text-xs sm:text-sm font-medium text-[#1f1d1b] max-w-[170px] leading-snug">
            100% Return Gurrentee & Exchange
          </h3>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center mb-3.5">
            <Headset size={80} strokeWidth={1} color="#2b2b2b" />
          </div>
          <h3 className="font-sans text-xs sm:text-sm font-medium text-[#1f1d1b] max-w-[170px] leading-snug">
            24 x7 Customer Support
          </h3>
        </div>
      </div>

      <div className="text-center mt-10 sm:mt-12">
        <button
          type="button"
          className="bg-[#1f1d1b] text-white text-xs font-sans font-medium uppercase tracking-[0.18em] px-8 py-3 rounded-none hover:bg-black transition-all shadow-[0_12px_24px_-6px_rgba(0,0,0,0.4)] cursor-pointer"
        >
          EXPLORE MORE
        </button>
      </div>
    </section>
  );
}
