'use client';

import Link from 'next/link';

export default function ProductsCTA() {
  return (
    <section
      className="relative py-24 md:py-32 px-4 bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://ext.same-assets.com/3350946252/1224869828.webp)'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Want to see custom women's clothing we made?
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-10">
          Do you have your own designs ready?
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 bg-[#FF6B35] hover:bg-[#e55a28] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300"
        >
          Contact us now!
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
