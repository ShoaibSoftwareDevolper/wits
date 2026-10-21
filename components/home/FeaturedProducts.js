"use client";

import { useState } from "react";
import Image from "next/image";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function FeaturedProducts() {
  const [addedId, setAddedId] = useState(null);
  const { addToCart } = useCart();

  const featured = products.slice(0, 4);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedId(product.id);
    setTimeout(() => {
      setAddedId(null);
    }, 1500);
  };

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 pb-8 border-b border-[#ece7de]">
          <div>
            <span className="text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#736c64]">
              Our Collection
            </span>
          </div>
          <a
            href="/store"
            className="text-[11px] font-sans font-medium uppercase tracking-[0.2em] px-7 py-2.5 border border-[#1c1a17] text-[#1c1a17] hover:bg-[#1c1a17] hover:text-white transition-all cursor-pointer inline-block self-start sm:self-auto"
          >
            View All
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 pt-8">
          {featured.map((product) => (
            <div
              key={product.id}
              className="bg-[#fafafa] rounded-xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-square bg-white flex items-center justify-center p-5">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={220}
                    height={220}
                    className="w-full h-full object-contain max-h-44"
                  />
                </div>

                <div className="p-4">
                  <span className="text-[10px] font-sans font-medium uppercase tracking-[0.16em] text-[#ab7a4e]">
                    {product.size}
                  </span>
                  <h3 className="font-sans text-sm font-semibold text-[#1c1a17] mt-1 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm font-bold text-[#1c1a17] mt-1">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="px-4 pb-4 pt-0">
                <button
                  type="button"
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-[#1c1a17] text-white text-[10px] font-sans font-medium uppercase tracking-[0.18em] py-2.5 flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
                >
                  {addedId === product.id ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
