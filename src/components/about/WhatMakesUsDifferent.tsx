export default function WhatMakesUsDifferent() {
  return (
    <section id="advantages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          #What Make Us <span className="bg-[#FF6B35] text-white px-2 py-1">Different</span>?
        </h2>

        {/* Advantage 1: High-quality Women's Clothing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          <div className="order-2 lg:order-1">
            <img
              src="https://ext.same-assets.com/3350946252/2353195642.jpeg"
              alt="High-quality Women's Clothing"
              className="w-full h-[400px] object-cover rounded"
            />
          </div>
          <div className="order-1 lg:order-2 lg:pl-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              We Focus On{" "}
              <span className="bg-[#FF6B35] text-white px-2 py-1">
                High-quality Women's Clothing
              </span>
            </h3>
          </div>
        </div>

        {/* Advantage 2: Quick-turn Production */}
        <div className="bg-black text-white rounded mb-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl md:text-3xl font-bold">
                We Specialize In{" "}
                <span className="bg-[#FF6B35] px-2 py-1">
                  Quick-turn Production
                </span>
                .
              </h3>
            </div>
            <div>
              <img
                src="https://ext.same-assets.com/3350946252/4245166848.jpeg"
                alt="Quick-turn Production"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Advantage 3: Quality Guarantee */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://ext.same-assets.com/3350946252/4088181219.jpeg"
              alt="Quality Guarantee"
              className="w-full h-[400px] object-cover rounded"
            />
          </div>
          <div className="lg:pl-8">
            <h3 className="text-2xl md:text-3xl font-bold">
              We Guarantee Our{" "}
              <span className="bg-[#FF6B35] text-white px-2 py-1">Quality</span>.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
