"use client";

import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://ugc.same-assets.com/qrW3O898HfMk6FB4ZUMJKTcHIrL_uEsk.jpeg"
          alt="Factory"
          className="w-full h-full object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h5 className="text-sm mb-4 tracking-wider uppercase">Welcome!</h5>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            We're TRENDS<br />
            <span className="text-3xl md:text-4xl lg:text-5xl font-normal">
              Womens Fashion Clothing<br />
              ODM, OEM<br />
              Manufacturer in China
            </span>
          </h1>
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#about"
              className="hover:bg-[#ff8555] px-8 py-3 rounded transition-colors inline-block font-semibold bg-[#12AEE2]"
            >
              Learn More
            </a>
            <button className="flex items-center gap-2 hover:text-[#FF6B35] transition-colors font-semibold">
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:border-[#FF6B35] transition-colors">
                <Play size={20} fill="white" />
              </div>
              <span>Play Video</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
