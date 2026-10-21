import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pt-4 sm:pt-8 pb-12 sm:pb-16 lg:pb-24 relative z-10">
        <div className="lg:col-span-6 z-20">
          <h1 className="font-serif text-[44px] sm:text-[62px] md:text-[72px] lg:text-[78px] xl:text-[84px] leading-[1.03] tracking-[-0.025em] text-[#1c1916]">
            <span className="block font-semibold">
              Rest Your Mind.
            </span>
            <span className="block mt-1 sm:mt-1.5 font-semibold text-[#8c562a]">
              Calm Your Body.
            </span>
          </h1>

          <p className="font-sans text-[#453e37] text-xs sm:text-sm lg:text-[15px] max-w-sm sm:max-w-md mt-5 sm:mt-6 leading-relaxed font-normal">
            Immerse your senses in pure botanical harmony. Handcrafted from rare organic extracts and slow-distilled essences to quiet the mind and awaken the spirit.
          </p>

          <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <a
              href="/store"
              className="bg-[#1f1d1b] text-white text-xs font-sans font-medium uppercase tracking-[0.2em] px-8 py-3.5 sm:px-9 sm:py-4 text-center rounded-none hover:bg-black transition-all cursor-pointer inline-block"
            >
              SHOP NOW
            </a>
            <p className="text-[#5c544c] text-[11px] sm:text-xs font-sans max-w-[210px] leading-snug">
              100% Organic certified. Complimentary discovery vial with every order.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[640px] mt-4 lg:mt-0">
          <div className="relative w-full max-w-[420px] sm:max-w-[580px] lg:max-w-[720px] flex items-center justify-center">
            <Image
              src="/wood.png"
              alt="Weathered driftwood"
              width={720}
              height={360}
              priority
              className="w-full h-auto object-contain drop-shadow-2xl select-none pointer-events-none scale-105"
            />
            <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-12 left-1/2 -translate-x-1/2 w-[46%] sm:w-[45%] lg:w-[80%] max-w-[200px] sm:max-w-[280px] lg:max-w-[520px]">
              <Image
                src="/perfume.png"
                alt="Wits perfume"
                width={520}
                height={680}
                priority
                className="w-full h-auto object-contain drop-shadow-[0_24px_36px_rgba(0,0,0,0.38)]"
              />
            </div>
          </div>
        </div>

        <div className="hidden lg:flex absolute right-4 sm:right-6 lg:right-8 bottom-4 lg:bottom-4 z-20 flex-col gap-3.5 text-[#544d45]">
          <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full flex items-center justify-center hover:text-black transition-colors">
            <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" aria-label="Dribbble" className="w-8 h-8 rounded-full flex items-center justify-center hover:text-black transition-colors">
            <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.312c-.281-.059-2.73-.559-5.27-.23 1.33-2.15 2.66-4.04 3.34-5.082zM12 3.518c2.09 0 4.02.76 5.51 2.03-.62.97-1.89 2.76-3.2 4.88-3.07-1.07-6.24-1.11-6.61-1.11-.08 0-.15.01-.22.01 1.05-3.41 2.94-5.81 4.52-5.81zM6.024 10.74c.24 0 2.89.04 5.76 1-.36.98-.75 2-1.16 3.03-3.61-.43-6.73 1.48-6.94 1.61A8.47 8.47 0 013.5 12c0-.44.04-.87.1-1.3.17.02 1.34.04 2.424.04zm3.626 5.37c.37-.92.71-1.83 1.04-2.71 2.42.3 4.67.92 6.64 1.83-.56 2.37-2.07 4.36-4.11 5.48-.48-1.52-1.95-3.8-3.57-4.6zm5.82 4.13c1.94-1.14 3.36-3.1 3.86-5.42 1.63-.12 3.19.14 3.29.16-.48 2.38-1.99 4.38-4.03 5.5-.96-.06-2.09-.13-3.12-.24zm4.84-6.85c-.24-.04-1.8-.32-3.42-.2 2.38-.28 4.68.18 4.95.23a8.544 8.544 0 01-1.53-.03z"/>
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full flex items-center justify-center hover:text-black transition-colors">
            <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.39 9.74v-8.37H5.07v8.37z"/>
            </svg>
          </a>
          <a href="#" aria-label="Vimeo" className="w-8 h-8 rounded-full flex items-center justify-center hover:text-black transition-colors">
            <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M22.84 8.16c-.14 3.04-2.27 7.21-6.38 12.51-4.27 5.53-7.88 8.3-10.84 8.3-1.83 0-3.38-1.69-4.66-5.07L-1.5 13.9C-2.4 10.37-3.4 8.6-4.5 8.6c-.23 0-.96.48-2.18 1.44L-8 8.44C-5.64 6.36-3.63 4.29-1.97 2.23.33-.23 2.05-.1 3.2.16c3.08.68 4.98 2.76 5.71 6.24.8 3.73 1.34 6.06 1.63 7 .86 3.12 1.83 4.68 2.92 4.68.85 0 2.1-1.35 3.74-4.04 1.62-2.7 2.49-4.75 2.6-6.16.23-2.18-.62-3.27-2.54-3.27-.92 0-1.88.21-2.88.63 1.9-6.24 5.54-9.3 10.9-9.18 3.99.11 5.89 2.75 5.66 7.9z" transform="scale(0.6) translate(10, 8)"/>
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full flex items-center justify-center hover:text-black transition-colors">
            <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
