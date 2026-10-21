"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { testimonials } from "@/data/testimonials";
import { useIsMounted } from "@/context/useIsMounted";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const isMounted = useIsMounted();

  return (
    <section className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 pt-20 sm:pt-28 pb-24 sm:pb-32 text-center">
      <h2 className="font-serif text-3xl sm:text-4xl md:text-[40px] font-medium tracking-[0.06em] uppercase text-[#1f1d1b]">
        WHAT DOES OUR CUSTOMER SAY?
      </h2>
      <p className="font-sans text-xs sm:text-sm text-[#7e766e] mt-3 max-w-md mx-auto">
        The expense windows adapted sir. Wrong widen drawn ample eat off doors money.
      </p>

      <div className="mt-14 max-w-[1020px] mx-auto">
        {isMounted ? (
          <>
            <Swiper
              modules={[Pagination, Autoplay]}
              loop={true}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                el: ".custom-testimonials-pagination",
                bulletClass:
                  "w-2.5 h-2.5 rounded-full bg-[#d6d0c7] cursor-pointer inline-block transition-all",
                bulletActiveClass: "!bg-[#221f1c] scale-110",
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 28,
                },
              }}
              className="w-full pb-6"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id} className="h-auto">
                  <div className="h-full bg-white rounded-2xl p-8 sm:p-12 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.07)] border border-[#f0ebe3] flex flex-col items-center justify-between text-center">
                    <div className="flex flex-col items-center">
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-sm mb-6">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          sizes="112px"
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-sans text-base sm:text-lg font-bold text-[#1f1d1b]">
                        {item.name}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[#736c64] mt-3 leading-relaxed max-w-sm">
                        {item.quote}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="custom-testimonials-pagination flex items-center justify-center gap-2.5 mt-8" />
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-8 sm:p-12 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.07)] border border-[#f0ebe3] flex flex-col items-center justify-between text-center"
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-sm mb-6">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-sans text-base sm:text-lg font-bold text-[#1f1d1b]">
                    {item.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#736c64] mt-3 leading-relaxed max-w-sm">
                    {item.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
