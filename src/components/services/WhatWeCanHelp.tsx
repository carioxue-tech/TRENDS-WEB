'use client';

export default function WhatWeCanHelp() {
  const workWith = [
    'Designers',
    'Start-ups',
    'E-commerce Fashion Shops',
    'Fast Fashion Brands',
    'Fashion Buyers',
    'Influencers'
  ];

  const styles = [
    'Contemporary',
    'Eco-friendly',
    'Casual',
    'Bohemian',
    'Boho-chic',
    'Streetwear',
    'Sport',
    'Minimalist',
    'Vintage/retro'
  ];

  const capabilities = [
    'Dresses',
    'Tops (Shirts, Blouse, Vest, Camisoles, T-shirts etc)',
    'Bottoms (Skirts, Skort, Pants etc)',
    'Hoodies & Sweatshirts',
    'Blazers & Jackets',
    'Jumpsuits & Rompers',
    'Knitwear & Sweater',
    'Denim & Jeans'
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What We Can Help?
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Starting and running a fashion brand is not easy but we can help you!
          <br />
          All you need is some dollars and dream!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* We Proudly Work With */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              We Proudly Work With
            </h3>
            <ul className="space-y-3">
              {workWith.map((item, index) => (
                <li key={index} className="text-gray-700 flex items-start">
                  <span className="text-[#FF6B35] mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Styles We Specialize in */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Styles We Specialize in
            </h3>
            <ul className="space-y-3">
              {styles.map((item, index) => (
                <li key={index} className="text-gray-700 flex items-start">
                  <span className="text-[#FF6B35] mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Garment Capabilities */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Garment Capabilities
            </h3>
            <ul className="space-y-3">
              {capabilities.map((item, index) => (
                <li key={index} className="text-gray-700 flex items-start">
                  <span className="text-[#FF6B35] mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
