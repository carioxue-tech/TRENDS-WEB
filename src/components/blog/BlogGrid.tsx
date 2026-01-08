import Link from "next/link";

export default function BlogGrid() {
  const blogPosts = [
    {
      id: 1,
      image: "https://ugc.same-assets.com/QhkUyzoV14Jim2YcArGcOeGHYU1iuwn4.png",
      categories: ["Woolen Apparel", "Suppliers Sourcing Guide"],
      title: "11 Common Mistakes Fashion Startups Make When Ordering Linen Clothing",
      excerpt:
        "Ordering woolen Clothing to go with your design idea can be hard when you start a fashion firm. If you want to buy plus size linen clothing or work with a...",
      author: "TRENDS",
      date: "08/11/2025",
    },
    {
      id: 2,
      image: "https://ugc.same-assets.com/1SidWFrHZxZdSxQSUzQhZd06tYY4cmih.png",
      categories: ["Woolen Apparel", "Suppliers Sourcing Guide"],
      title: "Why TRENDS garment is Your Trusted Woolen Clothes Supplier for Quality Designs?",
      excerpt:
        "For any fashion brand, picking the correctwooeln clothes supplier is quite important. You need a partner who can meet the quality standards of your business and understands your vision. Tuergarment...",
      author: "TRENDS",
      date: "07/28/2025",
    },
    {
      id: 3,
      image: "https://ugc.same-assets.com/L8U8nwUzAPIzgAbYXOfQVbOnK2v9syRY.png",
      categories: ["Woolen Apparel", "Suppliers Sourcing Guide"],
      title: "How to Choose the Right Woolen Clothing Factory for Your Fashion Line?",
      excerpt:
        "Choosing the right woolen clothing factory is very important for the success of your fashion line. Choosing the correct partner makes sure that your products not only satisfy quality standards...",
      author: "TRENDS",
      date: "07/24/2025",
    },
    {
      id: 4,
      image: "https://ugc.same-assets.com/2vXiWHJZCf1DLZFFeATL8hidflylRZHW.png",
      categories: ["Woolen Apparel"],
      title:
        "We've Been Supplying woolen Clothing for 10+ Years — Here's What Our Clients Ask Most",
      excerpt:
        "In the last ten years, we've worked with brands of all sizes, from those just starting out to those with outlets on multiple continents. The questions never change, though. Customers...",
      author: "TRENDS",
      date: "07/21/2025",
    },
    {
      id: 5,
      image: "https://ugc.same-assets.com/tiRQSGdWT8v6DudVqIc2X5Ec3mlJ0-sv.png",
      categories: ["Woolen Apparel"],
      title: "Thinking of Producing wool coat Clothing? Here's What to Know Before Choosing a Factory",
      excerpt:
        "Producing wool coat may look easy at first, but it's not. There are several steps involved in making a product, from getting the materials to stitching them together, that can make...",
      author: "TRENDS",
      date: "07/21/2025",
    },
    {
      id: 6,
      image: "https://ugc.same-assets.com/BLO0drpi9AvORgpVDAKj8PWpDZFxyq4C.png",
      categories: ["Clothing Manufacturing Insight", "Suppliers Sourcing Guide"],
      title: "Analysis: Apparel Production in Zhejiang,Hebei，Shangdong",
      excerpt:
        "The china wool coat industry has been the backbone of global apparel sourcing for many years. The clothing industry in China, Zhejiang,hebei,shangdong  is characterised by its own set of...",
      author: "TRENDS",
      date: "06/30/2025",
    },
    {
      id: 7,
      image: "https://ext.same-assets.com/3350946252/2386252570.jpeg",
      categories: ["Suppliers Sourcing Guide"],
      title: "Private Label Clothing Manufacturers: How to Create Your Own Brand?",
      excerpt:
        "For many, designing their own private label clothes brand is a dream. Turning that dream into reality, however, calls for the proper plan, tools, and, most importantly, the ideal clothing...",
      author: "TRENDS",
      date: "02/09/2025",
    },
    {
      id: 8,
      image: "https://ext.same-assets.com/3350946252/1691850080.webp",
      categories: ["Suppliers Sourcing Guide"],
      title: "Finding Clothing Manufacturers with Low MOQ Requirements",
      excerpt:
        "Starting a clothing line is an interesting trip. Still, one of the toughest obstacles many small-scale business owners encounter is locating a trustworthy clothing manufacturer low MOQ (Minimum Order Quantity) requirements....",
      author: "TRENDS",
      date: "01/26/2025",
    },
    {
      id: 9,
      image: "https://ext.same-assets.com/3350946252/2948460771.jpeg",
      categories: ["Suppliers Sourcing Guide"],
      title: "Top Tips to Find the Best Clothing Manufacturer for Startups in China",
      excerpt:
        "Starting your clothes brand can be exhilarating and intimidating at once. Of the several choices you will have to make, selecting the appropriate clothing manufacturer for startups is among the most...",
      author: "TRENDS",
      date: "10/07/2024",
    },
    {
      id: 10,
      image: "https://ugc.same-assets.com/1nj3-xCkspt-87SvMY8cyn8ElZcBGJKX.png",
      categories: ["Clothing Manufacturing Insight"],
      title:
        "As a fashion city of China ,Shanghai always have very new fashion show and trends",
      excerpt:
        "Shanghai As one of China's foremost hubs for clothing manufacturing, it is a vibrant...",
      author: "TRENDS",
      date: "09/22/2023",
    },
    {
      id: 11,
      image: "https://ugc.same-assets.com/jQq4P25K5BVmay5f-WA6MYqU1MRasy68.png",
      categories: ["Suppliers Sourcing Guide"],
      title:
        "Exploring the Best Women's Clothing Factories For Your Brands in China!",
      excerpt:
        "China remains the epicenter of global garment manufacturing, and its women's apparel sector is a powerhouse of innovation, scalability, and specialization. For brands seeking quality, speed, or niche designs, understanding...",
      author: "TRENDS",
      date: "09/15/2023",
    },
    {
      id: 12,
      image: "https://ugc.same-assets.com/LXC3cfvpXInhla-weCPz9QYK70mSHsVK.png",
      categories: ["Clothing Manufacturing Insight", "Suppliers Sourcing Guide"],
      title: "Custom Clothing Manufacturing: Everything You Need to Know",
      excerpt:
        "Launching a clothing line is an interesting trip, but it also calls for careful design and appropriate collaborations. The core of this process is a crucial choice: selecting the ideal...",
      author: "TRENDS",
      date: "08/25/2023",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <Link href={`/blog/${post.id}`} className="block">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-300 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.map((category, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold uppercase text-[#33D6FF]"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF6B35] transition-colors text-[#33D6FF]">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#787878]">
                      <span className="text-xs font-semibold text-gray-600">
                        {post.author.charAt(0)}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold">{post.author}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
