"use client";

import Link from "next/link";
import { useState } from "react";

export default function ManufacturingServices() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "design",
      icon: "https://ext.same-assets.com/3350946252/3381704357.svg",
      title: "Designs Consultation",
      content: {
        heading: "Designs Consultation",
        description: [
          "We work with different type of presentations for the designs to make, such as reference samples, tech packs, images, sketches or just idea.",
          "All designs should focus on details such as color combinations, embellishment, proportions, pocket positions and accessories etc.",
        ],
        considerations: [
          "Garment Complexity",
          "Fabric Type & Usage",
          "Garment techniques",
          "Sizing proportions",
          "Characteristics of the label",
          "Special treatment/finishing",
          "Single sample vs. Mass Production",
        ],
        conclusion:
          "We help customers to turn their initial designs into a first sample which give them a better visualization to make design adjustments and revisions.",
        images: [
          "https://ext.same-assets.com/3350946252/958317376.svg",
          "https://ext.same-assets.com/3350946252/1896185237.svg",
        ],
      },
    },
    {
      id: "fabric",
      icon: "https://ext.same-assets.com/3350946252/2063754334.svg",
      title: "Fabric & Trims Sourcing",
      content: {
        heading: "Fabric & Trims Sourcing",
        description: [
          "Generally, customers bring us the fabric and trims swatches they want to use on their designs, we then source the same in our market. However, when these are not available from customers, our designers will source the appropriate fabric and trims from the market that are align with the design styles while also meeting the target price agreed upon by both parties.",
          "Choosing the right fabric for production depends on the quantity of garments needed, as it can affect cost and lead time. Fabric prices are based on length of the fabric to use. It is important to have properly marked, graded, and digitized patterns to help reduce fabric yield, ultimately reducing total fabric waste.",
          "In case the required fabric and trims are unavailable in the market, we can create them by collaborating with direct suppliers who have a lower minimum order quantity (MOQ). This approach allows us to meet the demand for the fabric/trims while keeping costs low and maintaining quality.",
        ],
        images: ["https://ext.same-assets.com/3350946252/472548108.svg"],
      },
    },
    {
      id: "samples",
      icon: "https://ext.same-assets.com/3350946252/3690046731.svg",
      title: "Patterns & Samples",
      content: {
        heading: "Patterns & Samples",
        description: [
          "After finalizing the design, the creation of patterns is necessary. Our advanced 3D CAD pattern making technology greatly enhances the accuracy, speed and efficiency of the entire process. This technology enables designers to develop digital 3D models of the garment and make virtual modifications to the design, such as alterations to the fit, length, or style, before creating a physical pattern.",
          "Once the pattern is complete, it is utilized to cut fabric and construct the garment. Following the pattern cutting, our team engages in grading to produce various garment sizes from a base size. Our master pattern technicians will ensure that the graded sizes cater well to the intended audience and maximizes the fabrics use.",
          "When all of these are completed, we will proceed the first set of samples for fit and style approval. Once the samples are ready, our product development team will review them for consistency and approve them prior to sending them to you.",
        ],
        images: [
          "https://tuergarment.com/wp-content/uploads/2024/08/tuer23.jpg",
          "https://tuergarment.com/wp-content/uploads/2023/03/sampling.png",
        ],
      },
    },
    {
      id: "sewing",
      icon: "https://ext.same-assets.com/3350946252/1505494407.svg",
      title: "Cut & Sew",
      content: {
        heading: "Cut & Sew",
        description: [
          "The cut and sew process is a major part of production, involving several steps, each of which is carried out with precision and care by our experienced team of workers.",
          "Before we start cutting, we carefully inspect the fabric and preshrink it as required. Once the fabric is ready and laid flat, we use state-of-the-art equipment to marked it accurately and consistently in order to minimize waste and maximize efficiency. Our skilled workers use their years of experience and expertise to ensure that each piece is cut to the correct size and shape, with close attention paid to maintaining consistency and minimizing errors.",
          "Once the fabric is cut to size, it is ready for sewing. We have six sewing teams, which form six separate production lines. Each team is responsible for sewing a different part of the garment, and then the finished pieces are assembled together to create the final product. This process is known as a sequential assembly line, where each team has a specific task and the product moves from one team to the next until it is completed.",
          "Once the garment is fully assembled, it goes through a quality control (QC) process to ensure that everything is correct. This is an essential step in the production process because it helps to catch any errors or defects before the product is shipped out to customers.",
        ],
        images: [
          "https://ext.same-assets.com/3350946252/3299792254.png",
          "https://ext.same-assets.com/3350946252/3502079826.png",
        ],
      },
    },
    {
      id: "finishing",
      icon: "https://ext.same-assets.com/3350946252/1541395182.svg",
      title: "Special Finishing",
      content: {
        heading: "Special Finishing",
        description: [
          "We work with a network of different suppliers that can provided special finishing as our customer want to achieve special styling and hand feel.",
          "We support below kind of finishing and more:",
        ],
        list: [
          "Washing & Dye",
          "Digital prints",
          "Screen prints",
          "Heat transfer print",
          "Embroidery",
        ],
        conclusion:
          "These special finishing can give our customers more options on their designs and enhance their catalog.",
        images: [
          "https://ext.same-assets.com/3350946252/1690767070.jpeg",
          "https://ext.same-assets.com/3350946252/3563177270.jpeg",
        ],
      },
    },
    {
      id: "trims",
      icon: "https://ext.same-assets.com/3350946252/3517262619.svg",
      title: "Labels, Hardware and Packaging Developments",
      content: {
        heading: "Labels, Hardware and Packaging Developments",
        description: [
          "We help our customers to create customized label, tags, hardware and package.",
          "Please contact us for more details on the MOQ of customizing different items.",
        ],
        images: ["https://tuergarment.com/wp-content/uploads/2024/08/hangtag.jpg"],
      },
    },
    {
      id: "qc",
      icon: "https://ext.same-assets.com/3350946252/60644691.svg",
      title: "Quality Assurance",
      content: {
        heading: "Quality Assurance",
        description: [
          "In our production, we conduct inspections at various stages to ensure the quality of the final product. This includes inspection of the raw materials before they are used, in-line inspection during the manufacturing process, and a final inspection of the finished product. Each inspection is conducted with attention to detail and strict adherence to our quality standards to ensure that our customers receive only the highest quality products.",
          "By implementing these rigorous inspection processes, we have no problem meeting the Acceptable Quality Level (AQL) specified by our customers. We take pride in providing our customers with products that meet their expectations and reflect our commitment to excellence.",
        ],
        images: ["https://ext.same-assets.com/3350946252/3665961285.png"],
      },
    },
    {
      id: "pns",
      icon: "https://ext.same-assets.com/3350946252/3250380652.svg",
      title: "Packing & Shipping",
      content: {
        heading: "Packing & Shipping",
        description: [
          "All garments are properly ironed and wrapped to ensure the clothing are safe and undamaged during shipping.",
          "Regarding the shipping, we can coordinate with nominated forwarders to ensure the goods are shipped out in safe and fast method.",
          "In case there's no forwarder or agent nominated for the shipping, we offer different shipping options to suit your budget and timing requirement.",
          "For small amount of garment, we work with various shipping providers like DHL, FEDEX, TNT to ship the orders with door to door service.",
          "For orders above 500kg/1500 pieces, we offer sea freight options from multiple cooperative forwarders.",
          "Please note that delivery time varies by delivery location and ocean freight takes longer than air freight for delivery.",
        ],
        images: [],
      },
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Garment Manufacturing
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Services
        </h3>

        {/* Tab Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(index)}
              className={`flex flex-col items-center gap-3 p-4 rounded transition-all ${
                activeTab === index
                  ? "bg-white shadow-lg border-2 border-[#FF6B35]"
                  : "bg-white border-2 border-transparent hover:border-gray-300"
              }`}
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-12 h-12"
              />
              <span className="text-xs text-center font-medium leading-tight">
                {service.title}
              </span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left: Text Content */}
            <div>
              <h4 className="text-2xl md:text-3xl font-bold mb-6 italic">
                {services[activeTab].content.heading}
              </h4>

              <div className="space-y-4 text-gray-700">
                {services[activeTab].content.description?.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}

                {services[activeTab].content.considerations && (
                  <div className="my-6">
                    <p className="font-semibold mb-3">
                      Things to consider when creating the initial designs:
                    </p>
                    <ul className="space-y-2">
                      {services[activeTab].content.considerations.map(
                        (item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#FF6B35] mt-1">•</span>
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                {services[activeTab].content.list && (
                  <ul className="space-y-2 my-4">
                    {services[activeTab].content.list.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#FF6B35] mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {services[activeTab].content.conclusion && (
                  <p className="mt-4">{services[activeTab].content.conclusion}</p>
                )}
              </div>
            </div>

            {/* Right: Images */}
            {services[activeTab].content.images &&
              services[activeTab].content.images.length > 0 && (
                <div className="space-y-4">
                  {services[activeTab].content.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${services[activeTab].title} ${idx + 1}`}
                      className="w-full h-auto rounded shadow"
                    />
                  ))}
                </div>
              )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-black text-white rounded-lg p-8 text-center">
          <p className="text-xl md:text-2xl mb-6">Send Us Your Inquiry!</p>
          <Link
            href="/contact"
            className="inline-block bg-[#FF6B35] hover:bg-[#ff8555] px-8 py-3 rounded text-white font-semibold transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
