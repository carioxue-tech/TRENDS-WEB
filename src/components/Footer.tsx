import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <img
              src="https://ugc.same-assets.com/PMNEbKPBlqdP1unqTtiykG_4HgU8U-QL.png"
              alt="TRENDS"
              className="h-12 mb-4"
            />
            <p className="text-gray-400 text-sm mb-4">
              Leading women's fast fashion clothing manufacturer in , China. We produce high-quality women's clothing for brands worldwide.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#FF6B35] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#FF6B35] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#FF6B35] transition-colors"
              >
                <Phone size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#FF6B35] transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm"
                >
                  Tops
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm"
                >
                  Bottoms
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm"
                >
                  Dresses
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors text-sm"
                >
                  Jackets & Blazers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>+86 -21-6216-3368</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>sales@trends-textile.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© 2025 TRENDS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
