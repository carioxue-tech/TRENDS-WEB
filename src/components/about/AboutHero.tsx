"use client";

export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center pt-20 bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://ext.same-assets.com/3350946252/291949103.webp"
          alt="About Tuer Garment"
          className="w-full h-full object-cover brightness-[0.5]"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
            About TRENDS
          </h1>
        </div>
      </div>

      {/* Right Side Navigation */}
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-20">
        <nav className="flex flex-col gap-4 text-white">
          <a
            href="#values"
            className="text-right hover:text-[#FF6B35] transition-colors border-b border-white pb-2"
          >
            Values
          </a>
          <a
            href="#team"
            className="text-right hover:text-[#FF6B35] transition-colors border-b border-white pb-2"
          >
            Team
          </a>
          <a
            href="#advantages"
            className="text-right hover:text-[#FF6B35] transition-colors border-b border-white pb-2"
          >
            Advantages
          </a>
          <a
            href="#ethics"
            className="text-right hover:text-[#FF6B35] transition-colors border-b border-white pb-2"
          >
            Ethics &<br />
            Sustainability
          </a>
        </nav>
      </div>
    </section>
  );
}
