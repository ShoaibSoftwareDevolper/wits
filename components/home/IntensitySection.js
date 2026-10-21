import Image from "next/image";

export default function IntensitySection() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      <div className="lg:col-span-5">
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#f4f1ec] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)]">
          <Image
            src="/intensity_woman.jpg"
            alt="Woman in peaceful meditation"
            fill
            sizes="(max-width: 1024px) 100vw, 480px"
            className="object-cover object-center"
          />
        </div>
      </div>
      <div className="lg:col-span-7 lg:pl-6">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-medium tracking-[0.04em] uppercase text-[#1f1d1b] leading-[1.18] max-w-2xl">
          <span className="block lg:whitespace-nowrap">ADJUST THE INTENSITY</span>
          <span className="block">TO YOUR OWN NEEDS</span>
        </h2>
        <p className="font-sans text-[#6e665e] text-sm sm:text-base leading-relaxed mt-6 max-w-xl">
          Affronting discretion motionless commended no an. Comfort endeavor me objection intention sweetness software. Passing mention civilized mr am intention. Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
        </p>
        <button
          type="button"
          className="mt-8 bg-[#1f1d1b] text-white text-xs font-sans font-medium uppercase tracking-[0.18em] px-8 py-3.5 rounded-none hover:bg-black transition-all shadow-[0_12px_24px_-6px_rgba(0,0,0,0.4)] cursor-pointer"
        >
          READ MORE
        </button>
      </div>
    </section>
  );
}
