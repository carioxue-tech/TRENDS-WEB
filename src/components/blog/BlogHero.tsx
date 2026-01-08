export default function BlogHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center pt-20 bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/uploads/shanghai.png"
          alt="Tuer Garment Blog"
          className="w-full h-full object-cover brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white text-center py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Welcome To Our Blog
        </h1>
        <p className="text-lg md:text-xl">
          Please check if there're anything you're interested!
        </p>
      </div>
    </section>
  );
}
