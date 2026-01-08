export default function EthicsAndSustainability() {
  return (
    <section id="ethics" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Decorative Banner */}
        <div className="relative mb-16 overflow-hidden">
          <div className="flex items-center h-32">
            {/* Orange stripe */}
            <div
              className="absolute top-0 left-0 right-0 h-16 bg-[#FF6B35] flex items-center"
              style={{
                clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
              }}
            >
              <div className="flex gap-8 animate-scroll whitespace-nowrap">
                {[...Array(10)].map((_, i) => (
                  <span key={i} className="text-white font-semibold">
                    Grow your business
                  </span>
                ))}
              </div>
            </div>
            {/* Black stripe */}
            <div
              className="absolute bottom-0 left-0 right-0 h-16 bg-black flex items-center"
              style={{
                clipPath: "polygon(5% 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              <div className="flex gap-8 animate-scroll-reverse whitespace-nowrap ml-12">
                {[...Array(10)].map((_, i) => (
                  <span key={i} className="text-[#FF6B35] font-semibold">
                    Grow your business
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Our Ethical Fair Trade Practices */}
        <h2 className="text-3xl md:text-4xl font-bold text-right mb-16">
          Our Ethical Fair Trade Practices
        </h2>

        {/* Sedex Member Badge and Sustainable Manufacturing */}
        <div className="flex flex-col items-center mb-12">
          <img
            src="https://ext.same-assets.com/3350946252/649421457.png"
            alt="Sedex Member"
            className="w-48 h-auto mb-8"
          />
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Sustainable Clothing Manufacturing
          </h3>
        </div>

        {/* Certification Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center mb-16">
          <img
            src="https://ext.same-assets.com/3350946252/316651159.png"
            alt="Global Recycled Standard"
            className="w-full h-auto"
          />
          <img
            src="https://ext.same-assets.com/3350946252/3674310856.png"
            alt="Organic Content Standard"
            className="w-full h-auto"
          />
          <img
            src="https://ext.same-assets.com/3350946252/3446974867.png"
            alt="OEKO-TEX Standard 100"
            className="w-full h-auto"
          />
          <img
            src="https://ext.same-assets.com/3350946252/483946720.png"
            alt="European Flax"
            className="w-full h-auto"
          />
          <img
            src="https://ext.same-assets.com/3350946252/1757478318.jpeg"
            alt="Tencel"
            className="w-full h-auto"
          />
          <img
            src="https://ext.same-assets.com/3350946252/2031796645.jpeg"
            alt="EcoVero"
            className="w-full h-auto"
          />
          <img
            src="https://ext.same-assets.com/3350946252/1757478318.jpeg"
            alt="Lenzing"
            className="w-full h-auto"
          />
        </div>

        {/* Factory Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src="https://ext.same-assets.com/3350946252/2826891296.svg"
            alt="Factory"
            className="w-full h-64 object-cover rounded"
          />
          <img
            src="https://ext.same-assets.com/3350946252/194715190.svg"
            alt="Manufacturing"
            className="w-full h-64 object-cover rounded"
          />
        </div>
      </div>
    </section>
  );
}
