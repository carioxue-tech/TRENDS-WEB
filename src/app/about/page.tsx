import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";

export const metadata = {
  title: "About Us - Tuer Garment | Clothing Manufacturer in China",
  description:
    "As one of the top women's clothing manufacturers in China. We are dedicated to be best manufacturer for your private labels and clothing line",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="relative min-h-[40vh] pt-20 flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="https://ext.same-assets.com/3350946252/4186231226.jpeg"
            alt="Factory"
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">About TRENDS</h1>
        </div>
      </section>
      <About />
      <Footer />
    </main>
  );
}
