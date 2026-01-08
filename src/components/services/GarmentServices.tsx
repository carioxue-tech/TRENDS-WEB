'use client';

import { useState } from 'react';

export default function GarmentServices() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: 'Designs Consultation',
      icon: 'https://ext.same-assets.com/3350946252/2567906565.svg',
      image: 'https://ext.same-assets.com/3350946252/2207143132.png',
      description: `We work with different type of presentations for the designs to make, such as reference samples, tech packs, images, sketches or just idea.

All designs should focus on details such as color combinations, embellishment, proportions, pocket positions and accessories etc.

Things to consider when creating the initial designs:
• Garment Complexity
• Fabric Type & Usage
• Garment techniques
• Sizing proportions
• Characteristics of the label
• Special treatment/finishing
• Single sample vs. Mass Production

We help customers to turn their initial designs into a first sample which give them a better visualization to make design adjustments and revisions.`
    },
    {
      title: 'Fabric & Trims Sourcing',
      icon: 'https://ext.same-assets.com/3350946252/2109534029.svg',
      image: 'https://ext.same-assets.com/3350946252/1495653292.jpeg',
      description: `Generally, customers bring us the fabric and trims swatches they want to use on their designs, we then source the same in our market. However, when these are not available from customers, our designers will source the appropriate fabric and trims from the market that are align with the design styles while also meeting the target price agreed upon by both parties.

Choosing the right fabric for production depends on the quantity of garments needed, as it can affect cost and lead time. Fabric prices are based on length of the fabric to use. It is important to have properly marked, graded, and digitized patterns to help reduce fabric yield, ultimately reducing total fabric waste.

In case the required fabric and trims are unavailable in the market, we can create them by collaborating with direct suppliers who have a lower minimum order quantity (MOQ). This approach allows us to meet the demand for the fabric/trims while keeping costs low and maintaining quality.`
    },
    {
      title: 'Patterns & Samples',
      icon: 'https://ext.same-assets.com/3350946252/2979072426.svg',
      image: 'https://ext.same-assets.com/3350946252/705304663.png',
      description: `After finalizing the design, the creation of patterns is necessary. Our advanced 3D CAD pattern making technology greatly enhances the accuracy, speed and efficiency of the entire process. This technology enables designers to develop digital 3D models of the garment and make virtual modifications to the design, such as alterations to the fit, length, or style, before creating a physical pattern.

Once the pattern is complete, it is utilized to cut fabric and construct the garment. Following the pattern cutting, our team engages in grading to produce various garment sizes from a base size. Our master pattern technicians will ensure that the graded sizes cater well to the intended audience and maximizes the fabric's use.

When all of these are completed, we will proceed the first set of samples for fit and style approval. Once the samples are ready, our product development team will review them for consistency and approve them prior to sending them to you.`
    },
    {
      title: 'Cut & Sew',
      icon: 'https://ext.same-assets.com/3350946252/769845782.svg',
      image: 'https://ext.same-assets.com/3350946252/255812371.png',
      description: `The cut and sew process is a major part of production, involving several steps, each of which is carried out with precision and care by our experienced team of workers.

Before we start cutting, we carefully inspect the fabric and preshrink it as required. Once the fabric is ready and laid flat, we use state-of-the-art equipment to marked it accurately and consistently in order to minimize waste and maximize efficiency. Our skilled workers use their years of experience and expertise to ensure that each piece is cut to the correct size and shape, with close attention paid to maintaining consistency and minimizing errors.

Once the fabric is cut to size, it is ready for sewing. We have six sewing teams, which form six separate production lines. Each team is responsible for sewing a different part of the garment, and then the finished pieces are assembled together to create the final product. This process is known as a sequential assembly line, where each team has a specific task and the product moves from one team to the next until it is completed. By dividing the sewing process into smaller tasks, each team can focus on perfecting their specific skill set, which can lead to a more efficient and higher quality production process.

Once the garment is fully assembled, it goes through a quality control (QC) process to ensure that everything is correct. This is an essential step in the production process because it helps to catch any errors or defects before the product is shipped out to customers.`
    },
    {
      title: 'Special Finishing',
      icon: 'https://ext.same-assets.com/3350946252/2364364037.svg',
      image: 'https://ext.same-assets.com/3350946252/3630642760.jpeg',
      description: `We work with a network of different suppliers that can provide special finishing as our customer want to achieve special styling and hand feel.

We support below kind of finishing and more:
• Washing & Dye
• Digital prints
• Screen prints
• Heat transfer print
• Embroidery

These special finishing can give our customers more options on their designs and enhance their catalog.`
    },
    {
      title: 'Labels & Package Development',
      icon: 'https://ext.same-assets.com/3350946252/2704251096.svg',
      image: 'https://ext.same-assets.com/3350946252/2420659019.jpeg',
      description: `We help our customers to create customized labels, tags, hardware and package.

Please contact us for more details on the MOQ of customizing different items.`
    },
    {
      title: 'Quality Assurance',
      icon: 'https://ext.same-assets.com/3350946252/3159022003.svg',
      image: 'https://ext.same-assets.com/3350946252/1625342068.png',
      description: `In our production, we conduct inspections at various stages to ensure the quality of the final product. This includes inspection of the raw materials before they are used, in-line inspection during the manufacturing process, and a final inspection of the finished product. Each inspection is conducted with attention to detail and strict adherence to our quality standards to ensure that our customers receive only the highest quality products.

By implementing these rigorous inspection processes, we have no problem meeting the Acceptable Quality Level (AQL) specified by our customers. We take pride in providing our customers with products that meet their expectations and reflect our commitment to excellence.`
    },
    {
      title: 'Packing & Shipping',
      icon: 'https://ext.same-assets.com/3350946252/2668882521.svg',
      image: 'https://ext.same-assets.com/3350946252/3615143609.jpeg',
      description: `All garments are properly ironed and wrapped to ensure the clothing are safe and undamaged during shipping.

Regarding the shipping, we can coordinate with nominated forwarders to ensure the goods are shipped out in safe and fast method.

In case there's no forwarder or agent nominated for the shipping, we offer different shipping options to suit your budget and timing requirement.

For small amount of garment, we work with various shipping providers like DHL, FEDEX, TNT to ship the orders with door to door service.

For orders above 500kg/1500 pieces, we offer sea freight options from multiple cooperative forwarders.

Please note that delivery time varies by delivery location and ocean freight takes longer than air freight.`
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Garment Manufacturing <span className="text-[#00A0DC]">Services</span>
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                activeTab === index
                  ? 'bg-[#FF6B35] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <img
                src={service.icon}
                alt={service.title}
                className={`w-6 h-6 ${activeTab === index ? 'filter brightness-0 invert' : ''}`}
              />
              <span className="font-semibold text-sm md:text-base">{service.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <img
                src={services[activeTab].image}
                alt={services[activeTab].title}
                className="w-full rounded-lg"
              />
            </div>

            {/* Description */}
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-[#FF6B35] inline-block pb-2">
                {services[activeTab].title}
              </h3>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {services[activeTab].description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
