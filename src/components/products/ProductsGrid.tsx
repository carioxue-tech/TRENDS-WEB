'use client';

const categories = [
  {
    name: 'TOPS',
    icon: 'https://ext.same-assets.com/3350946252/3679813442.svg',
    link: '/products/tops'
  },
  {
    name: 'BOTTOMS',
    icon: 'https://ext.same-assets.com/3350946252/683015159.svg',
    link: '/products/bottoms'
  },
  {
    name: 'DRESSES',
    icon: 'https://ext.same-assets.com/3350946252/1621548929.svg',
    link: '/products/dresses'
  },
  {
    name: 'JUMPSUITS & ROMPERS',
    icon: 'https://ext.same-assets.com/3350946252/3067458527.svg',
    link: '/products/jumpsuits-rompers'
  },
  {
    name: 'DENIM & JEANS',
    icon: 'https://ext.same-assets.com/3350946252/2281934757.svg',
    link: '/products/denim'
  },
  {
    name: 'JACKETS AND BLAZERS',
    icon: 'https://ext.same-assets.com/3350946252/2483224132.svg',
    link: '/products/jackets-blazers'
  },
  {
    name: 'KNITWEAR & SWEATER',
    icon: 'https://ext.same-assets.com/3350946252/138254943.svg',
    link: '/products/knitwear-sweaters'
  },
  {
    name: 'LINEN APPAREL',
    icon: 'https://ext.same-assets.com/3350946252/1421355859.svg',
    link: '/products/linen-apparel'
  }
];

export default function ProductsGrid() {
  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              className="group relative h-[300px] md:h-[350px] overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 shadow-lg"
            >
              {/* Dark Background with Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900">
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                {/* Icon */}
                <div className="mb-6 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <img
                    src={category.icon}
                    alt={category.name}
                    className="w-full h-full object-contain filter brightness-0 invert"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {category.name}
                </h3>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-[#FF6B35]/0 group-hover:bg-[#FF6B35]/20 transition-colors duration-300"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
