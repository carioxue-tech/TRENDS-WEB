'use client';

export default function ServicesHero() {
  return (
    <section
      className="relative h-[300px] md:h-[400px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://ext.same-assets.com/3350946252/1356709350.jpeg)'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Need A Manufacturer For Your Brands?
        </h1>
        <p className="text-xl md:text-2xl text-white/90">
          Trust us to do the job well for you!
        </p>
      </div>
    </section>
  );
}
