import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#fafafa] pt-16 pb-16">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
        <div className="lg:col-span-2">
          <Link href="/" className="inline-block hover:opacity-85 transition-opacity">
            <Logo iconSize={48} textSize="text-3xl" />
          </Link>
          <p className="font-sans text-xs text-[#736c64] mt-4 max-w-xs leading-relaxed">
            Wits seamlessly connects your members with the community resources.
          </p>
          <div className="flex items-center gap-4.5 mt-6 text-[#575047]">
            <a href="#" aria-label="Facebook" className="hover:text-black transition-colors">
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-black transition-colors">
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-black transition-colors">
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.39 9.74v-8.37H5.07v8.37z"/>
              </svg>
            </a>
            <a href="#" aria-label="Pinterest" className="hover:text-black transition-colors">
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.371-11.987-12-11.987z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-sans text-xs font-semibold text-[#1f1d1b] tracking-wider mb-4">
            Navigation
          </h4>
          <ul className="space-y-3 text-xs text-[#736c64]">
            <li><Link href="/flavors" className="hover:text-black transition-colors">Flavors</Link></li>
            <li><Link href="/store" className="hover:text-black transition-colors">Store</Link></li>
            <li><Link href="/blog" className="hover:text-black transition-colors">Blog</Link></li>
            <li><Link href="/about" className="hover:text-black transition-colors">About Us</Link></li>
            <li><Link href="/checkout" className="hover:text-black transition-colors">Checkout</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-xs font-semibold text-[#1f1d1b] tracking-wider mb-4">
            Services
          </h4>
          <ul className="space-y-3 text-xs text-[#736c64]">
            <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Press</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Payroll</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Library</a></li>
            <li><Link href="/blog" className="hover:text-black transition-colors">Blog</Link></li>
            <li><a href="#" className="hover:text-black transition-colors">Help Center</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-xs font-semibold text-[#1f1d1b] tracking-wider mb-4">
            Resources
          </h4>
          <ul className="space-y-3 text-xs text-[#736c64]">
            <li><a href="#" className="hover:text-black transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-black transition-colors">FAQs</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Contact Support</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Terms</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-xs font-semibold text-[#1f1d1b] tracking-wider mb-4">
            Support
          </h4>
          <ul className="space-y-3 text-xs text-[#736c64]">
            <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Affiliates</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Sitemap</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Cancelation Policy</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Pricing</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
