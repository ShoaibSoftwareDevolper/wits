export default function Stats() {
  return (
    <section className="bg-[#fafafa] border-t border-[#ece8e2]">
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-10 lg:px-12 py-12 sm:py-16 flex flex-col md:flex-row items-center justify-between text-center">
        <div className="flex-1 py-6 md:py-4 px-4 w-full">
          <div className="font-sans text-3xl sm:text-4xl font-bold text-[#1f1d1b] tracking-tight">
            500+
          </div>
          <div className="font-sans text-sm sm:text-base text-[#7e766e] mt-2 font-normal">
            Organic Products
          </div>
        </div>

        <div className="hidden md:block w-[2px] h-20 bg-[#2e2a27] shrink-0"></div>

        <div className="flex-1 py-6 md:py-4 px-4 w-full">
          <div className="font-sans text-3xl sm:text-4xl font-bold text-[#1f1d1b] tracking-tight">
            100+
          </div>
          <div className="font-sans text-sm sm:text-base text-[#7e766e] mt-2 font-normal">
            International Franchises
          </div>
        </div>

        <div className="hidden md:block w-[2px] h-20 bg-[#2e2a27] shrink-0"></div>

        <div className="flex-1 py-6 md:py-4 px-4 w-full">
          <div className="font-sans text-3xl sm:text-4xl font-bold text-[#1f1d1b] tracking-tight">
            1 Million+
          </div>
          <div className="font-sans text-sm sm:text-base text-[#7e766e] mt-2 font-normal">
            Sales through-out the World
          </div>
        </div>
      </div>
    </section>
  );
}
