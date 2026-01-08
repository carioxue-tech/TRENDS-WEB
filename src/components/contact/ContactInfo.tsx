"use client";

export default function ContactInfo() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Company Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              TRENDS TEXTILE CO., LTD
            </h2>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Office Address</h3>
                <p className="text-gray-700">
                  Room 2205-2207, Floor 22nd, Regent Sunshine Building, No.19 Wuning Road, Pu Tuo area, Shanghai
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Factory Address</h3>
                <p className="text-gray-700">
                  SHANGHAI CHINA
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 italic mb-6">

            </p>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">
                Phone/Wechat/Whatsapp :+86 18116277762
              </h3>
            </div>
          </div>

          {/* Right: Map */}
          <div className="w-full h-[500px] bg-gray-200 rounded shadow">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=113.37528228759766%2C23.096912892207713%2C113.39130401611328%2C23.106906207534916&layer=mapnik&marker=23.10190952026951%2C113.38329315185547"
              width="100%"
              height="100%"
              className="rounded"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
