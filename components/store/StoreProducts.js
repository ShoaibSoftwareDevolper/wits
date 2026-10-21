"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products, productCategories } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function StoreProducts() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [addedId, setAddedId] = useState(null);
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedId(product.id);
    setTimeout(() => {
      setAddedId(null);
    }, 1500);
  };

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#ece7de]">
          <div>
            <span className="text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#736c64]">
              Collection
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#1c1a17] mt-1.5">
              Botanical Fragrances
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {productCategories.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`text-xs font-sans font-medium px-3.5 py-1.5 rounded-full transition-colors cursor-pointer ${
                  activeCategory === tab.id
                    ? "bg-[#1c1a17] text-white shadow-xs"
                    : "bg-[#fafafa] text-[#736c64] hover:text-[#1c1a17]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 pt-8">
          {filteredProducts.map((product) => (
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
