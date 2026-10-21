"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CheckoutSummary({
  shippingCost,
  discountAmount,
  isDiscountApplied,
  discountCode,
  setDiscountCode,
  onApplyDiscount,
  total,
}) {
  const { items, subtotal } = useCart();

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 sticky top-24 font-sans shadow-[0_16px_36px_-16px_rgba(0,0,0,0.08)] border border-[#ede8e1]">
      <h2 className="font-serif text-2xl font-medium text-[#1c1a17] pb-5 border-b border-[#ece7de]">
        Order Summary
      </h2>

      <div className="py-4 border-b border-[#ece7de] space-y-4 max-h-72 overflow-y-auto pr-1">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4 items-center">
            <div className="relative w-16 h-16 bg-[#fafafa] rounded-xl p-2 shrink-0 flex items-center justify-center shadow-xs">
              <Image
                src={item.image || "/perfume.png"}
                alt={item.name}
                width={56}
                height={56}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-sans text-sm font-semibold text-[#1c1a17] truncate">
                {item.name}
              </h3>
              <p className="font-sans text-xs text-[#736c64]">
                {item.size || "50ml"} • Qty: {item.quantity}
              </p>
              <span className="font-sans text-xs font-bold text-[#1c1a17] mt-0.5 block">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={onApplyDiscount} className="py-5 border-b border-[#ece7de] flex gap-2">
        <input
          type="text"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          placeholder="Discount code (try WITS10)"
          className="flex-1 px-3.5 py-2.5 bg-[#fafafa] border border-[#dcd6cc] rounded-lg text-xs font-sans text-[#1c1a17] focus:outline-none focus:border-[#1c1a17]"
        />
        <button
          type="submit"
          className="px-4 py-2.5 bg-[#1c1a17] text-white text-xs font-sans font-medium uppercase tracking-wider rounded-lg hover:bg-black transition-colors cursor-pointer"
        >
          Apply
        </button>
      </form>

      {isDiscountApplied && (
        <div className="py-2 text-xs text-[#2e7d32] font-medium flex items-center justify-between">
          <span>Promo Code Applied (WITS10)</span>
          <span>-$10.00</span>
        </div>
      )}

      <div className="pt-5 space-y-2.5 text-xs">
        <div className="flex justify-between text-[#736c64]">
          <span>Subtotal</span>
          <span className="font-semibold text-[#1c1a17]">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-[#736c64]">
          <span>Shipping</span>
          <span className="font-semibold text-[#1c1a17]">
            {shippingCost === 0 ? "FREE" : `$${shippingCost.toFixed(2)}`}
          </span>
        </div>
        {discountAmount > 0 && (
          <div className="flex justify-between text-[#2e7d32]">
            <span>Discount</span>
            <span>-${discountAmount.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between text-base font-bold text-[#1c1a17] pt-3 border-t border-[#f0ece6]">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
