import Header from "@/components/Header";
import Footer from "@/components/Footer";

const posts = [
  { id: 1, title: "11 Common Mistakes Fashion  Make When Ordering  Clothing", image: "https://ext.same-assets.com/3350946252/2641751351.jpeg", author: "TRENDS", date: "08/11/2025", content: `Ordering Woolen Clothing to go with your design idea can be hard when you start a fashion firm...` },
  { id: 2, title: "Why Tuer garment is Your Trusted Woolen Clothes Supplier for Quality Designs?", image: "/uploads/25.png", author: "TRENDS", date: "07/28/2025", content: `For any fashion brand, picking the correct woolen clothes supplier is quite important...` },
  { id: 3, title: "How to Choose the Right Woolen Clothing Factory for Your Fashion Line?", image: "https://ext.same-assets.com/3350946252/3114004674.webp", author: "TUER", date: "07/24/2025", content: `Choosing the right woolen clothing factory is very important for the success of your fashion line...` },
];

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = posts.find(p => String(p.id) === String(id)) ?? posts[0];

  return (
    <main className="min-h-screen">
      <Header />
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>
          <div className="text-sm text-gray-600 mb-6">By <span className="font-semibold">{post.author}</span> • {post.date}</div>
          <div className="rounded overflow-hidden mb-8">
            <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
          </div>
          <div className="prose max-w-none text-gray-800 leading-relaxed">
            <p>{post.content}</p>
            <p>Contact us if you want to produce similar garments with high quality, low MOQ, and on-time delivery.</p>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
