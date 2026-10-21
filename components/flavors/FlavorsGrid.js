import Link from "next/link";
import Image from "next/image";
import { flavorProfiles } from "@/data/flavors";

export default function FlavorsGrid() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="max-w-2xl pb-6 border-b border-[#ece7de]">
          <span className="text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#736c64]">
            Fragrance Architecture
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#1c1a17] mt-1.5">
            Flavors & Botanical Notes
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#736c64] mt-2 leading-relaxed">
            Slow steam distillation of wild-harvested botanicals without synthetic fixatives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-8">
          {flavorProfiles.map((profile) => (
            <div
              key={profile.name}
              className="bg-[#fafafa] rounded-xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] bg-white flex items-center justify-center p-5 overflow-hidden">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    width={220}
                    height={165}
                    className="w-full h-full object-contain max-h-36"
                  />
                </div>

                <div className="p-4 sm:p-5">
                  <span className="text-[10px] font-sans font-medium uppercase tracking-[0.16em] text-[#ab7a4e]">
                    {profile.family}
                  </span>
                  <h3 className="font-serif text-lg font-medium text-[#1c1a17] mt-1 line-clamp-1">
                    {profile.name}
                  </h3>
                  <p className="font-sans text-xs text-[#736c64] mt-1.5 line-clamp-2 leading-relaxed">
                    {profile.description}
                  </p>

                  <div className="mt-4 bg-white rounded-lg p-3 shadow-xs space-y-1.5 font-sans text-[11px]">
                    <div className="flex items-baseline gap-2">
                      <span className="font-semibold text-[#1c1a17] w-11 shrink-0">Top</span>
                      <span className="text-[#736c64] truncate">{profile.top}</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-semibold text-[#1c1a17] w-11 shrink-0">Heart</span>
                      <span className="text-[#736c64] truncate">{profile.heart}</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-semibold text-[#1c1a17] w-11 shrink-0">Base</span>
                      <span className="text-[#736c64] truncate">{profile.base}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
                <Link
                  href="/store"
                  className="w-full bg-[#1c1a17] text-white text-[10px] font-sans font-medium uppercase tracking-[0.18em] py-2.5 flex items-center justify-center hover:bg-black transition-colors"
                >
                  Explore in Store
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
