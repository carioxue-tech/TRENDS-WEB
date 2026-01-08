'use client';

const categories = [
  {
    name: 'TOPS',
    icon: 'https://ext.same-assets.com/3350946252/3290282211.svg',
    description: 'Shirts, Blouses, Crop Tops, T-shirts, Halter Tops, Bustier & Corsets, Hoodies & Sweatshirts etc',
    link: '/products/tops'
  },
  {
    name: 'BOTTOMS',
    icon: 'https://ext.same-assets.com/3350946252/283572943.svg',
    description: 'Skirts, Skorts, Pants, Shorts, Joggers etc',
    link: '/products/bottoms'
  },
  {
    name: 'DRESSES',
    icon: 'https://ext.same-assets.com/3350946252/3036286889.svg',
    description: 'Mini Dresses, Midi Dresses, Maxi Dresses, Formal Dresses, Floral Dresses, Sweater Dresses, Blazer Dresses etc',
    link: '/products/dresses'
  },
  {
    name: 'JUMPSUITS & ROMPERS',
    icon: 'https://ext.same-assets.com/3350946252/1783084984.svg',
    description: 'Jumpsuits, Rompers, 2 Pieces sets etc',
    link: '/products/jumpsuits-rompers'
  },
  {
    name: 'DENIM & JEANS',
    icon: 'https://ext.same-assets.com/3350946252/1954992109.svg',
    description: 'Denim tops, Denim Bottoms, Denim Dresses and Denim Jackets etc.',
    link: '/products/denim'
  },
  {
    name: 'JACKETS AND BLAZERS',
    icon: 'https://ext.same-assets.com/3350946252/2467884691.svg',
    description: 'Jackets and Blazers styles',
    link: '/products/jackets-blazers'
  },
  {
    name: 'KNITWEAR & SWEATER',
    icon: 'https://ext.same-assets.com/3350946252/364738888.svg',
    description: 'Knitwear and Sweater Styles',
    link: '/products/knitwear-sweaters'
  },
  {
    name: 'LINEN APPAREL',
    icon: 'https://ext.same-assets.com/3350946252/4222368293.svg',
    description: 'Linen Tops, Linen Bottoms, Linen Dresses etc',
    link: '/products/linen-apparel'
  }
];

export default function ProductCategories() {
  return (
    <section className="py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              className="group relative h-[350px] md:h-[400px] overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                {/* Icon */}
                <div className="mb-6 w-20 h-20 flex items-center justify-center">
                  <img
                    src={category.icon}
                    alt={category.name}
                    className="w-full h-full object-contain filter brightness-0 invert"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/80 leading-relaxed">
                  {category.description}
                </p>
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
