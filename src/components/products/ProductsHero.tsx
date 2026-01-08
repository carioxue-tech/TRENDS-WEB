'use client';

export default function ProductsHero() {
  return (
    <section className="relative h-[400px] md:h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://ext.same-assets.com/3350946252/2128232980.webp)'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Women's Clothing Manufacturer in China
        </h1>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed">
          As a professional custom apparel manufacturer in China, we create personalized,
          stylish women's clothing for our customers, delivering premium quality products worldwide.
        </p>
      </div>
    </section>
  );
}
