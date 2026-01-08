import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return {
    title: `Blog ${id} - Tuer Garment`,
    description: `Blog detail page for post ${id}.`,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="min-h-screen">
      <Header />

      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="mb-6">
          <a href="/blog" className="text-sm underline">
            ← Back to Blog
          </a>
        </div>

        <h1 className="text-3xl font-semibold">Blog Post</h1>
        <p className="mt-2 text-sm opacity-70">Post ID: {id}</p>

        <div className="mt-8 rounded-xl border p-6">
          <p className="opacity-80">
            This is a placeholder detail page. Replace this section with your
            real blog content rendering logic.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

