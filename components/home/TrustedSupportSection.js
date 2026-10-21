import Image from "next/image";

export default function TrustedSupportSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 pt-16 sm:pt-20 pb-8 sm:pb-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      <div className="lg:col-span-5">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-[0.06em] uppercase text-[#1f1d1b] leading-[1.18]">
          WELL INARTIFICIAL<br />TRUSTED SUPPORT
        </h2>
        <p className="font-sans text-[#6e665e] text-sm sm:text-base leading-relaxed mt-4 max-w-md">
          The expense windows adapted sir. Wrong widen drawn ample off doors money.
        </p>
        <div className="mt-8 relative w-full aspect-square overflow-hidden bg-[#f4f1ec] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)]">
          <Image
            src="/dropper_cup.jpg"
            alt="Hand holding essential oil dropper"
            fill
            sizes="(max-width: 1024px) 100vw, 480px"
            className="object-cover"
          />
        </div>
      </div>
      <div className="lg:col-span-7">
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#f4f1ec] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)]">
          <Image
            src="/product_driftwood.jpg"
            alt="Natural aroma bottle and driftwood"
            fill
            sizes="(max-width: 1024px) 100vw, 680px"
            className="object-cover"
          />
        </div>
        <p className="font-sans text-[#6e665e] text-xs sm:text-sm leading-relaxed mt-6 max-w-xl">
          Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen drawn ample eat off doors money. Six curiosity day assurance bed necessary.
        </p>
        <button
          type="button"
          className="mt-6 bg-[#1f1d1b] text-white text-xs font-sans font-medium uppercase tracking-[0.18em] px-8 py-3.5 rounded-none hover:bg-black transition-all cursor-pointer"
        >
          READ MORE
        </button>
      </div>
    </section>
  );
}
