import Link from "next/link";
import Image from "next/image";
import { articles } from "@/data/articles";

export default function BlogGrid() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="max-w-2xl pb-6 border-b border-[#ece7de]">
          <span className="text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#736c64]">
            Journal & Research
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#1c1a17] mt-1.5">
            Stories, Sourcing & Science
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#736c64] mt-2 leading-relaxed">
            Notes from our laboratory, field harvesting reports, and explorations in sensory wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-8">
          {articles.map((article) => (
            <article
              key={article.title}
              className="bg-[#fafafa] rounded-xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] bg-white overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                    className="object-cover"
                  />
                </div>

                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-[10px] font-sans text-[#736c64]">
                    <span className="font-medium uppercase tracking-[0.16em] text-[#ab7a4e]">
                      {article.category}
                    </span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h2 className="font-serif text-base font-medium text-[#1c1a17] mt-2 leading-snug line-clamp-2">
                    {article.title}
                  </h2>

                  <p className="font-sans text-xs text-[#736c64] mt-2 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
                <Link
                  href="/store"
                  className="text-[11px] font-sans font-semibold text-[#1c1a17] hover:underline inline-flex items-center gap-1"
                >
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
