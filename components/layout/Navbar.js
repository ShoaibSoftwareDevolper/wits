"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, User, X, Menu } from "lucide-react";
import CartDrawer from "./CartDrawer";
import MobileNav from "./MobileNav";
import ProfileModal from "./ProfileModal";
import Logo from "./Logo";
import { navLinks, popularSearches } from "@/data/navigation";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { cartCount, openCart } = useCart();

  return (
    <>
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-10 lg:px-12 pt-5 sm:pt-7 pb-4 flex items-center justify-between relative z-30">
        <Link href="/" className="hover:opacity-85 transition-opacity shrink-0">
          <Logo iconSize={42} priority />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#33302c] hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 sm:gap-6 text-[#221f1c]">
          <button
            type="button"
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search"
            className="flex items-center justify-center cursor-pointer hover:opacity-75 transition-opacity"
          >
            <Search size={21} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={openCart}
            aria-label="Cart"
            className="relative flex items-center justify-center cursor-pointer hover:opacity-75 transition-opacity"
          >
            <ShoppingBag size={21} strokeWidth={1.5} />
            <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#1f1d1b] text-white text-[10px] font-bold flex items-center justify-center leading-none">
              {cartCount}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setIsProfileOpen(true)}
            aria-label="Profile"
            className="hidden md:flex items-center justify-center cursor-pointer hover:opacity-75 transition-opacity"
          >
            <User size={21} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={() => setIsMobileNavOpen(true)}
            aria-label="Open navigation menu"
            className="md:hidden flex items-center justify-center text-[#221f1c] hover:opacity-75 transition-opacity cursor-pointer p-0.5"
          >
            <Menu size={23} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-start justify-center pt-20 sm:pt-28 px-4">
          <div className="bg-white max-w-xl w-full p-6 sm:p-8 rounded-2xl shadow-2xl relative border border-[#ede8e1]">
            <div className="flex items-center justify-between pb-4 border-b border-[#ece7de]">
              <span className="font-serif text-xl font-medium text-[#1f1d1b]">Search Wits</span>
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#736c64] hover:text-black hover:bg-[#fafafa] transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="relative mt-5">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#736c64]" />
              <input
                type="text"
                autoFocus
                placeholder="Search perfumes, organic extracts, oils..."
                className="w-full pl-11 pr-4 py-3.5 bg-[#fafafa] border border-[#e5dfd5] rounded-xl text-sm text-[#1f1d1b] focus:outline-none focus:border-[#1f1d1b] transition-colors"
              />
            </div>

            <div className="mt-6">
              <span className="text-xs uppercase tracking-wider text-[#7e766e] font-semibold">Popular Searches</span>
              <div className="flex flex-wrap gap-2 mt-3">
                {popularSearches.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className="text-xs bg-[#fafafa] hover:bg-[#ede8e1] text-[#2e2a27] px-3.5 py-1.5 rounded-full transition-colors cursor-pointer border border-[#ede8e1]"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={openCart}
        onOpenProfile={() => setIsProfileOpen(true)}
        cartCount={cartCount}
      />

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />

      <CartDrawer />
    </>
  );
}
