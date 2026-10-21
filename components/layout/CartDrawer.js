"use client";

import Link from "next/link";
import Image from "next/image";
import { X, Plus, Minus, Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const {
    items,
    cartCount,
    subtotal,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col justify-between p-6 sm:p-8 z-10 border-l border-[#ede8e1]">
        <div className="flex-1 overflow-y-auto pr-1">
          <div className="flex items-center justify-between pb-5 border-b border-[#ece7de]">
            <div className="flex items-center gap-2">
              <span className="font-sans text-xl font-semibold text-[#1f1d1b] tracking-tight">
                Your Bag
              </span>
              <span className="text-xs bg-[#fafafa] text-[#1f1d1b] font-bold px-2 py-0.5 rounded-full border border-[#ede8e1]">
                {cartCount}
              </span>
            </div>
            <button
              type="button"
              onClick={closeCart}
              aria-label="Close bag"
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#736c64] hover:text-black hover:bg-[#fafafa] transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {items.length > 0 ? (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 rounded-xl bg-[#fafafa] shadow-xs"
                >
                  <div className="relative w-20 h-20 bg-white rounded-lg p-2 shrink-0 flex items-center justify-center">
                    <Image
                      src={item.image || "/perfume.png"}
                      alt={item.name}
                      width={72}
                      height={72}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-sans text-sm font-semibold text-[#1f1d1b] line-clamp-1">
                          {item.name}
                        </h4>
                        <span className="text-xs text-[#7e766e]">
                          {item.size || "50ml"}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Remove item"
                        className="text-[#999] hover:text-red-600 transition-colors cursor-pointer p-1"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#dcd6cc] rounded-lg bg-white">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 hover:bg-[#fafafa] rounded-l-lg transition-colors cursor-pointer"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-xs font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 hover:bg-[#fafafa] rounded-r-lg transition-colors cursor-pointer"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="font-sans font-bold text-sm text-[#1f1d1b]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="w-12 h-12 rounded-full bg-[#fafafa] flex items-center justify-center mx-auto text-[#7e766e] mb-3">
                  <ShoppingBag size={22} />
                </div>
                <p className="text-sm text-[#7e766e]">Your shopping bag is empty.</p>
                <Link
                  href="/store"
                  onClick={closeCart}
                  className="inline-block mt-4 text-xs font-semibold uppercase tracking-wider text-[#1f1d1b] underline cursor-pointer"
                >
                  Explore Fragrances
                </Link>
              </div>
            )}
          </div>
        </div>

        {items.length > 0 && (
          <div className="pt-6 border-t border-[#ece7de] space-y-4 shrink-0">
            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-[#7e766e]">
                <span>Subtotal</span>
                <span className="font-semibold text-[#1f1d1b]">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-[#7e766e]">
                <span>Shipping</span>
                <span className="font-semibold text-[#2e7d32]">FREE</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#1c1a17] pt-2 border-t border-[#f0ece6]">
                <span>Estimated Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              onClick={closeCart}
              className="w-full bg-[#1f1d1b] text-white text-xs font-sans font-medium uppercase tracking-[0.2em] py-4 rounded-none hover:bg-black transition-all shadow-[0_12px_24px_-6px_rgba(0,0,0,0.35)] cursor-pointer flex items-center justify-center gap-2"
            >
              <span>PROCEED TO CHECKOUT</span>
              <ArrowRight size={14} />
            </Link>

            <button
              type="button"
              onClick={closeCart}
              className="w-full text-center text-xs font-sans text-[#736c64] hover:text-black transition-colors cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
