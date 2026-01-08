import Link from "next/link";

export default function CallToActions() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Go to Service */}
          <Link
            href="/services"
            className="group flex flex-col items-center justify-center"
          >
            <div className="w-64 h-64 rounded-full border-4 border-black bg-black text-white flex flex-col items-center justify-center transition-all hover:scale-105">
              <div className="text-sm mb-2">See our service</div>
              <div className="text-2xl font-bold">Go to Service</div>
            </div>
          </Link>

          {/* Go to FAQs */}
          <a
            href="/faqs"
            className="group flex flex-col items-center justify-center"
          >
            <div className="w-64 h-64 rounded-full border-4 border-gray-800 bg-white text-gray-800 flex flex-col items-center justify-center transition-all hover:scale-105 hover:border-[#FF6B35] hover:text-[#FF6B35]">
              <div className="text-sm mb-2">Check FAQs</div>
              <div className="text-2xl font-bold">Go to FAQs</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
