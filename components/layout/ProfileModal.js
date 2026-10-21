"use client";

import { X, User, Package, Heart, MapPin, Settings, LogOut } from "lucide-react";

export default function ProfileModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-xs">
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl p-6 z-10 border border-[#ede8e1] font-sans animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between pb-4 border-b border-[#ece7de]">
          <h3 className="font-serif text-xl font-medium text-[#1c1a17]">
            Account
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#736c64] hover:text-black hover:bg-[#fafafa] transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        <div className="pt-5 flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-full bg-[#fafafa] border border-[#ede8e1] flex items-center justify-center text-[#1c1a17] shrink-0">
            <User size={22} strokeWidth={1.5} />
          </div>
          <div>
            <h4 className="font-sans text-sm font-semibold text-[#1c1a17]">
              Guest Member
            </h4>
            <span className="text-xs text-[#736c64]">
              atelier.member@wits.com
            </span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#f0ece5] space-y-1">
          {[
            { label: "My Orders", icon: Package },
            { label: "Saved Fragrances", icon: Heart },
            { label: "Delivery Addresses", icon: MapPin },
            { label: "Preferences", icon: Settings },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                type="button"
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium text-[#33302c] hover:bg-[#fafafa] hover:text-[#1c1a17] transition-colors cursor-pointer text-left"
              >
                <Icon size={16} className="text-[#736c64]" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-5 pt-4 border-t border-[#f0ece5]">
          <button
            type="button"
            onClick={onClose}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-[#8c3a3a] hover:bg-[#fafafa] transition-colors cursor-pointer"
          >
            <LogOut size={15} />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}
