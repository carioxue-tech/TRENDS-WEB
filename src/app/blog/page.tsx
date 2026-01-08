import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";

export const metadata = {
  title: "Blog - Tuer Garment | Women's Clothing Manufacturing News and Trends",
  description:
    "Stay informed with Tuer Garment Blog's insights on the women's clothing manufacturing industry and trends.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <BlogHero />
      <BlogGrid />
      <Footer />
    </main>
  );
}
