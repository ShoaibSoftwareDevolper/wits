"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import CheckoutSummary from "@/components/checkout/CheckoutSummary";
import Logo from "@/components/layout/Logo";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [discountCode, setDiscountCode] = useState("");
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const { subtotal } = useCart();

  const shippingCost = shippingMethod === "express" ? 12.0 : 0.0;
  const discountAmount = isDiscountApplied ? 10.0 : 0.0;
  const total = Math.max(0, subtotal + shippingCost - discountAmount);

  const handleApplyDiscount = (e) => {
    e.preventDefault();
    if (discountCode.trim().toUpperCase() === "WITS10") {
      setIsDiscountApplied(true);
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsOrderPlaced(true);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-white text-[#1c1a17]">
      <header className="border-b border-[#ece7de] bg-white sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-sans text-[#736c64] hover:text-[#1c1a17] transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Return to Store</span>
          </Link>

          <Link href="/" className="hover:opacity-85 transition-opacity">
            <Logo iconSize={40} textSize="text-2xl" />
          </Link>

          <div className="w-24" />
        </div>
      </header>

      {isOrderPlaced ? (
        <main className="max-w-xl mx-auto px-6 py-20 text-center">
          <div className="w-14 h-14 rounded-full bg-[#1c1a17] text-white flex items-center justify-center mx-auto mb-6">
            <Check size={28} />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#1c1a17]">
            Thank You for Your Order
          </h1>
          <p className="mt-4 font-sans text-sm text-[#736c64] leading-relaxed">
            Order #WTS-84920 has been received. A confirmation email with receipt and tracking details will be sent shortly.
          </p>
          <div className="mt-8 p-6 bg-[#fafafa] border border-[#ece7de] rounded-xl text-left font-sans text-xs space-y-3">
            <div className="flex justify-between border-b border-[#f3efe8] pb-3">
              <span className="text-[#736c64]">Item</span>
              <span className="font-medium text-[#1c1a17]">Wits 15% Organic Extract (50ml)</span>
            </div>
            <div className="flex justify-between border-b border-[#f3efe8] pb-3">
              <span className="text-[#736c64]">Delivery Method</span>
              <span className="font-medium text-[#1c1a17]">
                {shippingMethod === "express" ? "Priority Express" : "Complimentary Standard"}
              </span>
            </div>
            <div className="flex justify-between font-semibold text-sm text-[#1c1a17] pt-1">
              <span>Total Paid</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/"
              className="inline-block bg-[#1c1a17] text-white text-xs font-sans font-medium uppercase tracking-[0.2em] px-8 py-3.5 hover:bg-black transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </main>
      ) : (
        <main className="max-w-6xl mx-auto px-6 py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7">
              <CheckoutForm
                shippingMethod={shippingMethod}
                setShippingMethod={setShippingMethod}
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
                onSubmit={handlePlaceOrder}
                isSubmitting={isSubmitting}
                total={total}
              />
            </div>

            <div className="lg:col-span-5">
              <CheckoutSummary
                shippingCost={shippingCost}
                discountAmount={discountAmount}
                isDiscountApplied={isDiscountApplied}
                discountCode={discountCode}
                setDiscountCode={setDiscountCode}
                onApplyDiscount={handleApplyDiscount}
                total={total}
              />
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
