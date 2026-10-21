"use client";

import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { navLinks } from "@/data/navigation";
import Logo from "./Logo";

export default function MobileNav({
  isOpen,
  onClose,
  onOpenProfile,
  cartCount,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden bg-white flex flex-col justify-between p-6 sm:p-10 overflow-y-auto animate-in fade-in duration-200">
      <div className="flex items-center justify-between pb-6 border-b border-[#ece7de]">
        <Link href="/" onClick={onClose}>
          <Logo iconSize={40} textSize="text-2xl" />
        </Link>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="w-10 h-10 rounded-full flex items-center justify-center text-[#1c1a17] hover:bg-[#fafafa] transition-colors cursor-pointer"
        >
          <X size={22} strokeWidth={1.5} />
        </button>
      </div>

      <nav className="my-auto py-10 flex flex-col space-y-7">
        {navLinks.map((link, idx) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="group flex items-baseline justify-between py-1"
          >
            <div className="flex items-baseline gap-4">
              <span className="text-[11px] font-sans font-medium text-[#ab7a4e] tracking-widest">
                0{idx + 1}
              </span>
              <span className="font-serif text-3xl font-medium text-[#1c1a17] group-hover:text-[#ab7a4e] transition-colors tracking-tight">
                {link.label}
              </span>
            </div>
            <ArrowRight
              size={18}
              className="text-[#736c64] group-hover:text-[#1c1a17] group-hover:translate-x-1 transition-all"
            />
          </Link>
        ))}
      </nav>

      <div className="pt-6 border-t border-[#ece7de] flex items-center justify-between font-sans text-xs text-[#736c64]">
        <button
          type="button"
          onClick={() => {
            onClose();
            if (onOpenProfile) onOpenProfile();
          }}
          className="text-left cursor-pointer hover:opacity-80 transition-opacity"
        >
          <span className="block font-semibold uppercase tracking-wider text-[#1c1a17] text-[10px]">
            My Account
          </span>
          <span className="text-[11px] text-[#736c64] mt-0.5 block">
            Member Profile & Orders
          </span>
        </button>

        <Link
          href="/checkout"
          onClick={onClose}
          className="text-xs font-sans font-semibold uppercase tracking-[0.16em] text-[#1c1a17] hover:underline"
        >
          Bag ({cartCount})
        </Link>
      </div>
    </div>
  );
}
