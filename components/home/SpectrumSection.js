import Image from "next/image";

export default function SpectrumSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 pt-6 sm:pt-8 pb-16 sm:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      <div className="lg:col-span-5">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-[0.06em] uppercase text-[#1f1d1b] leading-[1.18]">
          OIL FALLS SPECTRUM
        </h2>
        <p className="font-sans text-[#6e665e] text-sm sm:text-base leading-relaxed mt-6 max-w-xl">
          Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen drawn ample eat off doors money.
        </p>
        <p className="font-sans text-[#6e665e] text-sm sm:text-base leading-relaxed mt-4 max-w-xl">
          Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Wrong widen drawn ample eat off doors money. Six curiosity day assurance bed necessary.
        </p>
        <button
          type="button"
          className="mt-8 bg-[#1f1d1b] text-white text-xs font-sans font-medium uppercase tracking-[0.18em] px-8 py-3.5 rounded-none hover:bg-black transition-all cursor-pointer"
        >
          READ MORE
        </button>
      </div>
      <div className="lg:col-span-7">
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#f4f1ec] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)]">
          <Image
            src="/oil_falls_dropper.jpg"
            alt="Oil dripping from amber bottle onto white stones"
            fill
            sizes="(max-width: 1024px) 100vw, 680px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
