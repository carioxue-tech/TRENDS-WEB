import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Alias mapping for compatibility with original site URLs
const aliasMap: Record<string, string> = {
  sweaters: 'knitwear-sweaters',
  'playsuit-jumpsuit': 'jumpsuits-rompers',
  tops: 'tops',
  bottom: 'bottoms',
};

const categoryConfig: Record<string, {
  title: string;
  description: string;
  heroImage: string;
  items: { name: string; image: string }[];
}> = {
  tops: {
    title: 'Tops',
    description: 'Shirts, Blouses, Crop Tops, T-shirts, Halter Tops, Bustier & Corsets, Hoodies & Sweatshirts',
    heroImage: 'https://images.unsplash.com/photo-1520975922203-b46f52b8505a?w=1600&h=700&fit=crop&q=80',
    items: Array.from({ length: 12 }).map((_, i) => ({
      name: `Top ${i + 1}`,
      image: `https://images.unsplash.com/photo-1520975922203-b46f52b8505a?w=800&h=1000&fit=crop&q=80&sig=${i}`,
    })),
  },
  bottoms: {
    title: 'Bottoms',
    description: 'Skirts, Skorts, Pants, Shorts, Joggers',
    heroImage: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=1600&h=700&fit=crop&q=80',
    items: Array.from({ length: 12 }).map((_, i) => ({
      name: `Bottom ${i + 1}`,
      image: `https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&h=1000&fit=crop&q=80&sig=${i}`,
    })),
  },
  dresses: {
    title: 'Dresses',
    description: 'Mini, Midi, Maxi, Floral, Party, Formal, Sweater & Blazer Dresses',
    heroImage: 'https://images.unsplash.com/photo-1520974735194-0e2a27139be5?w=1600&h=700&fit=crop&q=80',
    items: Array.from({ length: 12 }).map((_, i) => ({
      name: `Dress ${i + 1}`,
      image: `https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=1000&fit=crop&q=80&sig=${i}`,
    })),
  },
  'jumpsuits-rompers': {
    title: 'Jumpsuits & Rompers',
    description: 'Jumpsuits, Rompers, 2 Pieces Sets',
    heroImage: 'https://images.unsplash.com/photo-1520975244180-31c8c8a22b9f?w=1600&h=700&fit=crop&q=80',
    items: Array.from({ length: 12 }).map((_, i) => ({
      name: `Style ${i + 1}`,
      image: `https://images.unsplash.com/photo-1520975244180-31c8c8a22b9f?w=800&h=1000&fit=crop&q=80&sig=${i}`,
    })),
  },
  denim: {
    title: 'Denim & Jeans',
    description: 'Denim tops, Denim Bottoms, Denim Dresses and Denim Jackets',
    heroImage: 'https://images.unsplash.com/photo-1551234541-b4ef8f9aa1f0?w=1600&h=700&fit=crop&q=80',
    items: Array.from({ length: 12 }).map((_, i) => ({
      name: `Denim ${i + 1}`,
      image: `https://images.unsplash.com/photo-1513377887585-6f0d0e3d5f36?w=800&h=1000&fit=crop&q=80&sig=${i}`,
    })),
  },
  'jackets-blazers': {
    title: 'Jackets & Blazers',
    description: 'Outerwear for every season',
    heroImage: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=1600&h=700&fit=crop&q=80',
    items: Array.from({ length: 12 }).map((_, i) => ({
      name: `Outerwear ${i + 1}`,
      image: `https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=800&h=1000&fit=crop&q=80&sig=${i}`,
    })),
  },
  'knitwear-sweaters': {
    title: 'Knitwear & Sweaters',
    description: 'Knitwear and Sweater Styles',
    heroImage: 'https://images.unsplash.com/photo-1519235106638-30cc49f1b2f0?w=1600&h=700&fit=crop&q=80',
    items: Array.from({ length: 12 }).map((_, i) => ({
      name: `Knitwear ${i + 1}`,
      image: `https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1000&fit=crop&q=80&sig=${i}`,
    })),
  },
  'linen-apparel': {
    title: 'Linen Apparel',
    description: 'Linen Tops, Bottoms and Dresses',
    heroImage: 'https://images.unsplash.com/photo-1520974721514-9e0ce3db1c75?w=1600&h=700&fit=crop&q=80',
    items: Array.from({ length: 12 }).map((_, i) => ({
      name: `Linen ${i + 1}`,
      image: `https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=800&h=1000&fit=crop&q=80&sig=${i}`,
    })),
  },
  'co-ords-matching-sets': {
    title: 'Co-ords & Matching Sets',
    description: 'Co-ords and matching set styles',
    heroImage: 'https://images.unsplash.com/photo-1544441892-2dd7ddc0fa4b?w=1600&h=700&fit=crop&q=80',
    items: Array.from({ length: 12 }).map((_, i) => ({
      name: `Set ${i + 1}`,
      image: `https://images.unsplash.com/photo-1544441892-2dd7ddc0fa4b?w=800&h=1000&fit=crop&q=80&sig=${i}`,
    })),
  },
  'modest-clothing': {
    title: 'Modest Clothing',
    description: 'Modest clothing styles',
    heroImage: 'https://images.unsplash.com/photo-1516279427226-953f5f4f66b4?w=1600&h=700&fit=crop&q=80',
    items: Array.from({ length: 12 }).map((_, i) => ({
      name: `Modest ${i + 1}`,
      image: `https://images.unsplash.com/photo-1516279427226-953f5f4f66b4?w=800&h=1000&fit=crop&q=80&sig=${i}`,
    })),
  },
  loungewear: {
    title: 'Loungewear & Sets',
    description: 'Loungewear & Sets',
    heroImage: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1600&h=700&fit=crop&q=80',
    items: Array.from({ length: 12 }).map((_, i) => ({
      name: `Look ${i + 1}`,
      image: `https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop&q=80&sig=${i}`,
    })),
  },
};

const subcategoryConfig: Record<string, { title: string; parent: string; heroImage: string }> = {
  // Tops
  'crop-tops': { title: 'Crop Tops', parent: 'tops', heroImage: categoryConfig.tops.heroImage },
  'halter-tops': { title: 'Halter Tops', parent: 'tops', heroImage: categoryConfig.tops.heroImage },
  blouses: { title: 'Blouses', parent: 'tops', heroImage: categoryConfig.tops.heroImage },
  shirts: { title: 'Shirts', parent: 'tops', heroImage: categoryConfig.tops.heroImage },
  corsets: { title: 'Bustiers & Corsets', parent: 'tops', heroImage: categoryConfig.tops.heroImage },
  't-shirts': { title: 'T-shirts', parent: 'tops', heroImage: categoryConfig.tops.heroImage },
  'hoodies-sweatshirts': { title: 'Hoodies & Sweatshirts', parent: 'tops', heroImage: categoryConfig.tops.heroImage },
  // Bottoms
  pants: { title: 'Pants', parent: 'bottoms', heroImage: categoryConfig.bottoms.heroImage },
  shorts: { title: 'Shorts', parent: 'bottoms', heroImage: categoryConfig.bottoms.heroImage },
  skirts: { title: 'Skirts', parent: 'bottoms', heroImage: categoryConfig.bottoms.heroImage },
  skorts: { title: 'Skorts', parent: 'bottoms', heroImage: categoryConfig.bottoms.heroImage },
  joggers: { title: 'Joggers', parent: 'bottoms', heroImage: categoryConfig.bottoms.heroImage },
  // Dresses
  'mini-dresses': { title: 'Mini Dresses', parent: 'dresses', heroImage: categoryConfig.dresses.heroImage },
  'midi-dresses': { title: 'Midi Dresses', parent: 'dresses', heroImage: categoryConfig.dresses.heroImage },
  'maxi-dresses': { title: 'Maxi Dresses', parent: 'dresses', heroImage: categoryConfig.dresses.heroImage },
  'floral-dresses': { title: 'Floral Dresses', parent: 'dresses', heroImage: categoryConfig.dresses.heroImage },
  'party-dresses': { title: 'Party Dresses', parent: 'dresses', heroImage: categoryConfig.dresses.heroImage },
  'formal-dresses': { title: 'Formal Dresses', parent: 'dresses', heroImage: categoryConfig.dresses.heroImage },
  'sweater-dresses': { title: 'Sweater Dresses', parent: 'dresses', heroImage: categoryConfig.dresses.heroImage },
  'blazer-dresses': { title: 'Blazer Dresses', parent: 'dresses', heroImage: categoryConfig.dresses.heroImage },
  // Jumpsuits & Rompers
  jumpsuits: { title: 'Jumpsuits', parent: 'jumpsuits-rompers', heroImage: categoryConfig['jumpsuits-rompers'].heroImage },
  rompers: { title: 'Rompers', parent: 'jumpsuits-rompers', heroImage: categoryConfig['jumpsuits-rompers'].heroImage },
  // Jackets & Blazers
  jacket: { title: 'Jackets', parent: 'jackets-blazers', heroImage: categoryConfig['jackets-blazers'].heroImage },
  blazers: { title: 'Blazers', parent: 'jackets-blazers', heroImage: categoryConfig['jackets-blazers'].heroImage },
  // Denim
  'denim-tops': { title: 'Denim Tops', parent: 'denim', heroImage: categoryConfig.denim.heroImage },
  'denim-pants': { title: 'Denim Pants', parent: 'denim', heroImage: categoryConfig.denim.heroImage },
  'denim-dresses': { title: 'Denim Dresses', parent: 'denim', heroImage: categoryConfig.denim.heroImage },
  'denim-jackets': { title: 'Denim Jackets', parent: 'denim', heroImage: categoryConfig.denim.heroImage },
  // Co-ords & Matching Sets
  'co-ords': { title: 'Co-ords', parent: 'co-ords-matching-sets', heroImage: categoryConfig['co-ords-matching-sets'].heroImage },
  'matching-sets': { title: 'Matching Sets', parent: 'co-ords-matching-sets', heroImage: categoryConfig['co-ords-matching-sets'].heroImage },
  // Linen
  'linen-tops': { title: 'Linen Tops', parent: 'linen-apparel', heroImage: categoryConfig['linen-apparel'].heroImage },
  'linen-bottoms': { title: 'Linen Bottoms', parent: 'linen-apparel', heroImage: categoryConfig['linen-apparel'].heroImage },
  'linen-dresses': { title: 'Linen Dresses', parent: 'linen-apparel', heroImage: categoryConfig['linen-apparel'].heroImage },
  // Others
  'modest-clothing': { title: 'Modest Clothing', parent: 'modest-clothing', heroImage: categoryConfig['modest-clothing'].heroImage },
  loungewear: { title: 'Loungewear & Sets', parent: 'loungewear', heroImage: categoryConfig['loungewear'].heroImage },
};

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const raw = category.toLowerCase();
  const key = aliasMap[raw] ?? raw;

  const cfgFromCategory = categoryConfig[key];
  const sub = subcategoryConfig[key];

  const title = cfgFromCategory?.title ?? sub?.title ?? 'Products';
  const description = cfgFromCategory?.description ?? (sub ? categoryConfig[sub.parent].description : '');
  const heroImage = cfgFromCategory?.heroImage ?? sub?.heroImage ?? categoryConfig.tops.heroImage;

  const items = (cfgFromCategory?.items ?? Array.from({ length: 12 }).map((_, i) => ({
    name: `${title} ${i + 1}`,
    image: `https://images.unsplash.com/photo-1520975922203-b46f52b8505a?w=800&h=1000&fit=crop&q=80&sig=${i}`,
  })));

  return (
    <main className="min-h-screen">
      <Header />
      <section
        className="relative h-[260px] md:h-[360px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{title}</h1>
          {description && (<p className="text-white/90 max-w-3xl mx-auto">{description}</p>)}
        </div>
      </section>
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item, idx) => (
              <div key={idx} className="group overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-gray-900">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
