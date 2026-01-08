export default function ContactHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center pt-20 bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://ext.same-assets.com/3350946252/135053824.png"
          alt="Contact Tuer Garment"
          className="w-full h-full object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Contact Us Now!
        </h1>
        <p className="text-lg md:text-xl">
          Tell us about your clothing manufacturing needs!
        </p>
      </div>
    </section>
  );
}
