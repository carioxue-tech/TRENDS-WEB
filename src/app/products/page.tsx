import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProductsPage() {
  const products = [
    "https://ugc.same-assets.com/Gb_Uu2DZTubA6xQo2_3I2x5Cn_-WgMSB.png",
    "https://ugc.same-assets.com/v_GSGa4MP2J851tZ6RnSqmbJV-2uzFur.png",
    "https://ugc.same-assets.com/Xj4TMB2R4EtPL48LEjvtrdpJkW5bfeZn.png",
    "https://ugc.same-assets.com/ofYK25W-HDKgkYC4IgRVNWFHWO19VWCs.png",
    "https://ugc.same-assets.com/0JQx4HMkNqMA4EKBYG6JPXJ3w3YzXXp4.png",
    "https://ugc.same-assets.com/UCif935kt-aQo58_FkYWgCC6RdMvJuos.png",
    "https://ugc.same-assets.com/MM9sd7awr3DX22H0k9wGhQSP4E6woo6O.png",
    "https://ugc.same-assets.com/ZoPZGgV7lEEDHyByhi70T201c6sjd2j8.png",
    "https://ugc.same-assets.com/MobI8B1n14Ril8m-BUN8cKmxg8G0cquk.png",
    "https://ugc.same-assets.com/6s0gzyXzQQCRg3l-8BPSY5cR7LfFLs89.png",
    "https://ugc.same-assets.com/JkJY1cCrNHDjiqVQDYqluNWGPz-AYgno.png",
    "https://ugc.same-assets.com/AQcqoXp_1mxgPjSy3aknb4XRP04rjDdY.png",
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <section className="relative min-h-[40vh] pt-20 flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="/uploads/store-interior.png"
            alt="Products"
            className="w-full h-full object-cover brightness-[0.45]"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Products Gallery</h1>
          <p className="text-gray-200 mt-2">A selection of our womenswear categories</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((src, i) => (
              <div key={i} className="aspect-[4/5] bg-gray-100 rounded overflow-hidden">
                <img
                  src={src}
                  alt={`Product ${i + 1}`}
                  className="w-full h-full hover:scale-105 transition-transform duration-300 object-none"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
