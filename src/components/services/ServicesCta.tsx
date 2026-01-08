import Link from 'next/link';

export default function ServicesCta() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-lg text-white/80 mb-8">
          Get in touch with us today to discuss your manufacturing needs.
        </p>
        <Link
          href="/contact"
          className="inline-block hover:bg-[#e55a28] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 bg-[#37cde1]"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
