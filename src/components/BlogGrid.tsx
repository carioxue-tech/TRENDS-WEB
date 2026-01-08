import { User } from "lucide-react";

interface BlogPost {
  id: number;
  image: string;
  categories: string[];
  title: string;
  excerpt: string;
  author: string;
  date: string;
}

export default function BlogGrid() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      image: "https://ext.same-assets.com/3350946252/1119409350.jpeg",
      categories: ["Woolen Apparel", "Suppliers Sourcing Guide"],
      title: "11 Common Mistakes Fashion Startups Make When Ordering Woolen Clothing",
      excerpt: "Ordering Woolen Clothing to go with your design idea can be hard when you start a fashion firm. If you want to buy plus size woolen clothing or work with a...",
      author: "TRENDS",
      date: "08/11/2025",
    },
    {
      id: 2,
      image: "/uploads/25.png",
      categories: ["Woolen Apparel", "Suppliers Sourcing Guide"],
      title: "Why Tuer garment is Your Trusted Woolen Clothes Supplier for Quality Designs?",
      excerpt: "For any fashion brand, picking the correct woolen clothes supplier is quite important. You need a partner who can meet the quality standards of your business...",
      author: "TRENDS",
      date: "07/28/2025",
    },
    {
      id: 3,
      image: "https://ext.same-assets.com/3350946252/2165366065.webp",
      categories: ["Woolen Apparel", "Suppliers Sourcing Guide"],
      title: "How to Choose the Right Woolen Clothing Factory for Your Fashion Line?",
      excerpt: "Choosing the right woolen clothing factory is very important for the success of your fashion line. Choosing the correct partner makes sure that your products...",
      author: "TRENDS",
      date: "07/24/2025",
    },
    {
      id: 4,
      image: "https://ext.same-assets.com/3350946252/930240140.png",
      categories: ["Woolen Apparel"],
      title: "We've Been Supplying Woolen Clothing for 10+ Years — Here's What Our Clients Ask Most",
      excerpt: "In the last ten years, we've worked with brands of all sizes, from those just starting out to those with outlets on multiple continents...",
      author: "TRENDS",
      date: "07/21/2025",
    },
    {
      id: 5,
      image: "https://ext.same-assets.com/3350946252/283154437.jpeg",
      categories: ["Woolen Apparel"],
      title: "Thinking of Producing Woolen Clothing? Here's What to Know Before Choosing a Factory",
      excerpt: "Producing woolen clothing may look easy at first, but it's not. There are several steps involved in making a product...",
      author: "TRENDS",
      date: "07/21/2025",
    },
    {
      id: 6,
      image: "https://ext.same-assets.com/3350946252/3969233966.jpeg",
      categories: ["Clothing Manufacturing Insight", "Suppliers Sourcing Guide"],
      title: "Analysis: Apparel Production in China, India, Vietnam, and Bangladesh",
      excerpt: "The Asian industry has been the backbone of global apparel sourcing for many years. The clothing industry in China, India, Vietnam and Bangladesh...",
      author: "TRENDS",
      date: "06/30/2025",
    },
    {
      id: 7,
      image: "https://ext.same-assets.com/3350946252/3011508085.png",
      categories: ["Suppliers Sourcing Guide"],
      title: "Private Label Clothing Manufacturers: How to Create Your Own Brand?",
      excerpt: "For many, designing their own private label clothes brand is a dream. Turning that dream into reality, however, calls for the proper plan...",
      author: "TRENDS",
      date: "02/09/2025",
    },
    {
      id: 8,
      image: "https://ext.same-assets.com/3350946252/626962.jpeg",
      categories: ["Suppliers Sourcing Guide"],
      title: "Finding Clothing Manufacturers with Low MOQ Requirements",
      excerpt: "Starting a clothing line is an interesting trip. Still, one of the toughest obstacles many small-scale business owners encounter...",
      author: "TRENDS",
      date: "01/26/2025",
    },
    {
      id: 9,
      image: "https://ext.same-assets.com/3350946252/2054196237.png",
      categories: ["Suppliers Sourcing Guide"],
      title: "Top Tips to Find the Best Clothing Manufacturer for Startups in China",
      excerpt: "Starting your clothes brand can be exhilarating and intimidating at once. Of the several choices you will have to make...",
      author: "TRENDS",
      date: "10/07/2024",
    },
    {
      id: 10,
      image: "https://ext.same-assets.com/3350946252/986267703.webp",
      categories: ["Clothing Manufacturing Insight"],
      title: "From Concept to Products: The Powerhouse of Clothing Manufacturing in Guangzhou",
      excerpt: "On the world stage of garment, Guangzhou has become an innovation and efficiency center and production station...",
      author: "Satish",
      date: "09/22/2023",
    },
    {
      id: 11,
      image: "https://ext.same-assets.com/3350946252/3394466023.jpeg",
      categories: ["Suppliers Sourcing Guide"],
      title: "Exploring the Best Women's Clothing Factories For Your Brands in China!",
      excerpt: "China remains the epicenter of global garment manufacturing, and its women's apparel sector is a powerhouse of innovation...",
      author: "Satish",
      date: "09/15/2023",
    },
    {
      id: 12,
      image: "https://ext.same-assets.com/3350946252/851267012.png",
      categories: ["Clothing Manufacturing Insight", "Suppliers Sourcing Guide"],
      title: "Custom Clothing Manufacturing: Everything You Need to Know",
      excerpt: "Launching a clothing line is an interesting trip, but it also calls for careful design and appropriate collaborations...",
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
              className="group bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.categories.map((category, index) => (
                    <span
                      key={index}
                      className="text-xs text-[#FF6B35] font-semibold"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF6B35] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <User size={16} className="text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-700">{post.author}</p>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
