export default function CtaBanner() {
  return (
    <section className="bg-[#fafafa]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 py-16 sm:py-24 border-b border-[#e8e4de]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <h3 className="font-serif text-3xl sm:text-4xl md:text-[44px] lg:text-[46px] text-[#1f1d1b] font-medium leading-[1.16] text-center lg:text-left">
            Start your business today<br />for $0+ state fees.
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-5 shrink-0">
            <button
              type="button"
              className="bg-[#1f1d1b] text-white text-xs sm:text-[13px] font-sans font-medium uppercase tracking-[0.2em] px-9 sm:px-10 py-4 sm:py-4.5 rounded-none hover:bg-black transition-all cursor-pointer"
            >
              GET STARTED
            </button>
            <button
              type="button"
              className="bg-white border border-[#ded8cf] text-[#1f1d1b] text-xs sm:text-[13px] font-sans font-medium uppercase tracking-[0.2em] px-9 sm:px-10 py-4 sm:py-4.5 rounded-none hover:bg-neutral-50 transition-all cursor-pointer"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
