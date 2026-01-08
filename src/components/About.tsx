"use client";

import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState<"office" | "factory">("office");

  const officeImages = [
    "https://ugc.same-assets.com/NKf8ALEpctfFLglpeBti8iGn5iUL-XzP.jpeg",
    "https://ugc.same-assets.com/8KBPfhFJCJiYT73VlS95WxShQdEnpbUr.jpeg",
    "https://ugc.same-assets.com/ywMFifHAtKrCTxl3PJcvpdouPc2MPwoE.jpeg",
  ];

  const factoryImages = [
    "https://ugc.same-assets.com/qrW3O898HfMk6FB4ZUMJKTcHIrL_uEsk.jpeg",
    "https://ugc.same-assets.com/Yxb9iq6gdCV-_x3VfWjwZBBMVLSPxDZR.jpeg",
    "https://ugc.same-assets.com/fuhv15_8ZUfAv_7bbFjY2cPjSKTvj5Bt.jpeg",
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About TRENDS
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Established in 2009, TRENDS is a leading manufacturer of womens clothing in China. We aim to meet the manufacturing needs of private labels and fashion companies by providing high-quality products and services.
          </p>
          <a
            href="#"
            className="inline-block mt-6 hover:underline font-semibold text-[#12AEE2]"
          >
            Learn More!
          </a>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("office")}
            className={`px-6 py-3 rounded transition-colors ${
              activeTab === "office"
                ? "bg-[#33D6FF] text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Office And Sampling Rooms
          </button>
          <button
            onClick={() => setActiveTab("factory")}
            className={`px-6 py-3 rounded transition-colors ${
              activeTab === "factory"
                ? "bg-[#33D6FF] text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Factories
          </button>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(activeTab === "office" ? officeImages : factoryImages).map(
            (image, index) => (
              <div
                key={index}
                className="aspect-[4/3] bg-gray-200 rounded overflow-hidden"
              >
                <img
                  src={image}
                  alt={`${activeTab} ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
