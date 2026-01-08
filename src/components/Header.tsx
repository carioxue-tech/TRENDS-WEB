"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://ugc.same-assets.com/8rhoWk1obmy04Qwn5HTLrlJkMQnlp8cQ.png"
              alt="TRENDS"
              className="h-12 object-fill xl:mx-[1px] xl:my-[100px] xl:p-[1px] bg-[#000000]"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="hover:text-[#33D6FF] transition-colors xl:text-left">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#33D6FF] transition-colors">
              About
            </Link>
            <Link href="/services" className="hover:text-[#33D6FF] transition-colors">
              Services
            </Link>
            <Link href="/faqs" className="hover:text-[#33D6FF] transition-colors">
              FAQs
            </Link>
            <Link href="/products" className="hover:text-[#33D6FF] transition-colors">
              Products Gallery
            </Link>
            <Link href="/blog" className="hover:text-[#33D6FF] transition-colors text-[#ffffff]">
              Blog
            </Link>
            <Link
              href="/contact"
              className="hover:bg-[#ff8555] px-6 py-2 rounded transition-colors bg-[#33D6FF]"
            >
              Get In Touch
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 space-y-4">
            <Link href="/" className="block hover:text-[#FF6B35] transition-colors">
              Home
            </Link>
            <Link href="/about" className="block hover:text-[#FF6B35] transition-colors">
              About
            </Link>
            <Link href="/services" className="block hover:text-[#FF6B35] transition-colors">
              Services
            </Link>
            <Link href="/faqs" className="block hover:text-[#FF6B35] transition-colors">
              FAQs
            </Link>
            <Link href="/products" className="block hover:text-[#FF6B35] transition-colors">
              Products Gallery
            </Link>
            <Link href="/blog" className="block hover:text-[#FF6B35] transition-colors">
              Blog
            </Link>
            <Link
              href="/contact"
              className="block hover:bg-[#ff8555] px-6 py-2 rounded transition-colors text-center bg-[#18cdf2]"
            >
              Get In Touch
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
