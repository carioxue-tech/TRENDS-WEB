import Link from "next/link";

export default function FaqCta() {
  return (
    <section
      className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1558769132-cb1aea3c6a66?w=1600&h=400&fit=crop)",
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Have More Questions?
        </h2>
        <Link
          href="/contact"
          className="inline-block hover:bg-[#ff5722] text-white font-semibold px-8 py-4 rounded-md transition-colors bg-[#33D6FF]"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
}
