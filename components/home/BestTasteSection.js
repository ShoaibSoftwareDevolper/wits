import Image from "next/image";

export default function BestTasteSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      <div className="lg:col-span-6 relative">
        <div className="relative max-w-lg mx-auto lg:mr-auto">
          <div className="absolute -bottom-5 -left-5 sm:-bottom-6 sm:-left-6 w-full h-full bg-[#24211e]"></div>
          <div className="absolute -top-5 -right-5 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 border-t border-r border-[#24211e] pointer-events-none z-20"></div>
          <div className="relative z-10 aspect-[4/3] bg-[#f4f1ec] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.18)]">
            <Image
              src="/best_taste_set.jpg"
              alt="Natural organic aromatherapy and skincare products"
              fill
              sizes="(max-width: 1024px) 100vw, 512px"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="lg:col-span-6 lg:pl-10">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-[0.06em] uppercase text-[#1f1d1b] leading-[1.18]">
          WE PROVIDE YOU<br />THE BEST TASTE
        </h2>
        <p className="font-sans text-[#6e665e] text-sm sm:text-base leading-relaxed mt-6 max-w-xl">
          Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured windows adapted sir. Wrong widen drawn ample eat off doors money. sir breeding her. Six curiosity day assurance bed necessary.
        </p>
      </div>
    </section>
  );
}
