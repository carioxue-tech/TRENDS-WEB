import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

type Params = { id: string };

export default async function Page({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;

  return (
    <main className="min-h-screen">
      <Header />

      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="mb-6">
          <Link href="/blog" className="text-sm underline">
            ← Back to Blog
          </Link>
        </div>

        <h1 className="text-3xl font-semibold">Blog Detail</h1>
        <p className="mt-2 text-sm opacity-70">Post ID: {id}</p>

        <div className="mt-8 rounded-xl border p-6">
          <p className="opacity-80">
            Placeholder detail page. Replace with your real post rendering.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
