export default function FaqsHero() {
  return (
    <section className="relative h-[300px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://ext.same-assets.com/3350946252/1648685981.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          FAQs For Clothing Manufacturing
        </h1>
        <p className="text-lg md:text-xl">
          Let's address the basic inquiries about apparel production
        </p>
      </div>
    </section>
  );
}
