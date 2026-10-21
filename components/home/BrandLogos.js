"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useIsMounted } from "@/context/useIsMounted";
import "swiper/css";

const logoItems = [
  {
    id: "afterpay",
    content: (
      <div className="flex items-center justify-center gap-2 select-none text-[#1b1917] hover:opacity-80 transition-opacity">
        <span className="font-sans text-2xl sm:text-[28px] font-extrabold tracking-tight">afterpay</span>
        <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12c6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12Zm1.236 4.924a2.21 2.21 0 0 1 1.15.299l4.457 2.557c1.495.857 1.495 3.013 0 3.87l-4.457 2.558c-1.488.854-3.342-.22-3.342-1.935v-.34a.441.441 0 0 0-.66-.383L6.287 13.9a.441.441 0 0 0 0 .765l4.096 2.35a.44.44 0 0 0 .661-.382v-.685c0-.333.36-.542.649-.376l1.041.597a.441.441 0 0 1 .222.383v.29c0 1.715-1.854 2.789-3.342 1.935L5.157 16.22c-1.495-.857-1.495-3.013 0-3.87l4.457-2.558c1.488-.854 3.342.22 3.342 1.935v.34c0 .34.366.551.66.383l4.097-2.35a.441.441 0 0 0 0-.765l-4.096-2.351a.441.441 0 0 0-.661.382v.685c0 .333-.36.541-.649.375l-1.041-.597a.442.442 0 0 1-.222-.383v-.29c0-1.285 1.043-2.21 2.192-2.233z"/>
        </svg>
      </div>
    ),
  },
  {
    id: "unicef",
    content: (
      <div className="flex items-center justify-center gap-2 select-none text-[#1b1917] hover:opacity-80 transition-opacity">
        <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M16 6 A 10 10 0 0 0 6 16 A 10 10 0 0 0 16 26 A 10 10 0 0 0 26 16 A 10 10 0 0 0 16 6 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="1.5 1.5" />
          <path d="M13 11 C11.5 11 10.5 12.5 11 14 C11.5 15.5 13 16 13 17.5 C13 19 11 20 10 21" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <circle cx="12.5" cy="9.5" r="1.5" fill="currentColor" />
          <circle cx="17.5" cy="11.5" r="1.2" fill="currentColor" />
          <path d="M18 13 C19 14 19.5 15.5 19 17 C18.5 18 17 19.5 17 21" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M7 23 C11 27 21 27 25 23" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
        <span className="font-sans text-2xl sm:text-[28px] font-bold tracking-tight lowercase">unicef</span>
      </div>
    ),
  },
  {
    id: "firsthealth",
    content: (
      <div className="flex items-center justify-center gap-2 select-none text-[#1b1917] hover:opacity-80 transition-opacity">
        <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          <path d="M10.5 7.5h3v2.5H16v3h-2.5V16h-3v-3H8v-3h2.5z" fill="#fafafa"/>
        </svg>
        <span className="font-sans text-xl sm:text-2xl font-bold tracking-wide">First Health</span>
      </div>
    ),
  },
  {
    id: "basecamp",
    content: (
      <div className="flex items-center justify-center gap-2 select-none text-[#1b1917] hover:opacity-80 transition-opacity">
        <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
          <path d="M12.6516 22.453c-4.0328 0-7.575-1.5542-10.244-4.4946a1.11 1.11 0 0 1-.219-1.1338c.7008-1.8884 2.5935-6.2808 5.0205-6.2948h.0125c1.219 0 2.1312.9655 2.8648 1.7412.2192.2324.555.5875.7818.7611.5656-.5587 1.6775-2.4158 2.5422-4.2779.259-.5567.9203-.7985 1.4765-.5402.557.2584.7988.919.5404 1.4762-2.6217 5.6503-4.019 5.6503-4.478 5.6503-1.022 0-1.7628-.7843-2.4791-1.5422-.3208-.339-.9878-1.045-1.2482-1.045h-.0004c-.5665.095-1.8085 2.0531-2.6966 4.2034 2.1925 2.1722 4.9232 3.2726 8.1266 3.2726 4.3955 0 7.683-1.1964 9.0996-3.2953-.4888-5.585-3.5642-13.1634-9.0996-13.1634-4.6855 0-8.2152 3.264-10.4915 9.7007-.205.579-.8416.8828-1.4187.6776-.5789-.2047-.882-.8398-.6776-1.4185 2.624-7.421 6.859-11.1833 12.5878-11.1833 7.4826 0 10.9304 9.5613 11.3458 15.588a1.1154 1.1154 0 0 1-.1456.6314c-1.7407 3.0221-5.7182 4.6864-11.2002 4.6864Z"/>
        </svg>
        <span className="font-sans text-xl sm:text-2xl font-bold tracking-tight">Basecamp</span>
      </div>
    ),
  },
  {
    id: "lovato",
    content: (
      <div className="flex items-center justify-center gap-2 select-none text-[#1b1917] hover:opacity-80 transition-opacity">
        <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="12" cy="12" r="4.5" fill="currentColor" />
        </svg>
        <span className="font-sans text-2xl sm:text-[28px] font-black tracking-widest uppercase">LOVATO</span>
      </div>
    ),
  },
];

export default function BrandLogos() {
  const isMounted = useIsMounted();

  return (
    <section className="bg-[#fafafa] border-y border-[#ede8e1]">
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-10 lg:px-12 py-10 sm:py-14">
        {isMounted ? (
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 2400,
              disableOnInteraction: false,
            }}
            speed={700}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            className="brand-swiper w-full flex items-center"
          >
            {logoItems.concat(logoItems).map((logo, index) => (
              <SwiperSlide key={`${logo.id}-${index}`} className="flex items-center justify-center">
                {logo.content}
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="flex flex-wrap items-center justify-between gap-8 sm:gap-12 w-full text-[#1b1917]">
            {logoItems.map((logo) => (
              <div key={logo.id} className="flex items-center justify-center">
                {logo.content}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
