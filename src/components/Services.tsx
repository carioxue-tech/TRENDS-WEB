import {
  Palette,
  Layers,
  FileText,
  Scissors,
  Tag,
  Sparkles,
  ShieldCheck,
  Package,
  Camera,
  Headphones,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Palette className="w-12 h-12 text-[#33D6FF]" />,
      title: "Designs Consultation",
      description:
        "We offers an in-house design team for innovative trend right apparel. We can provide colour and fabric suggestion that in trend.",
    },
    {
      icon: <Layers className="w-12 h-12 text-[#33D6FF]" />,
      title: "Fabric & Trims Sourcing",
      description:
        "Our team will source and develope your key fabrics and trims for the new designs",
    },
    {
      icon: <FileText className="w-12 h-12 text-[#33D6FF]" />,
      title: "Pattern & Samples",
      description:
        "Our development team create the paper patterns and sew the samples base on your designs",
    },
    {
      icon: <Scissors className="w-12 h-12 text-[#33D6FF]" />,
      title: "Cut & Sew",
      description:
        "Bulk fabric are cut by advanced cutting machine and then sewn into elegent garment by experience sewing workers.",
    },
    {
      icon: <Tag className="w-12 h-12 text-[#33D6FF]" />,
      title: "Labels & Package Customization",
      description:
        "We have a vast network resources that can develop any custom trims and hardware for customers",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-[#33D6FF]" />,
      title: "Special Finishing",
      description:
        "We offer a large selection of washing, printing, heat transfer and embroidery techniques according to the effects you want to achieve on your designs",
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-[#33D6FF]" />,
      title: "Quality Assurance",
      description:
        "Multiple inspections will be applied during the whole production process to ensure each piece of garment meet the utmost quality standard.",
    },
    {
      icon: <Package className="w-12 h-12 text-[#33D6FF]" />,
      title: "Packing and Shipping",
      description:
        "After embellishments, ironing, folding, tagging, and quality inspections, your products are packed and shipped properly in a timely manner.",
    },
    {
      icon: <Camera className="w-12 h-12 text-[#33D6FF]" />,
      title: "Photo Shooting",
      description:
        "We work with some photo shooting agents. We can arrange photo shooting for your brands if required",
    },
    {
      icon: <Headphones className="w-12 h-12 text-[#33D6FF]" />,
      title: "Aftersale Service",
      description:
        "We care what you think. We want to hear you and your customers feedback because Your Success Is Our Mission",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            One-stop Clothing Manufacturing{" "}
            <span className="italic text-[#12AEE2]">Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 hover:bg-white hover:shadow-lg transition-all rounded-lg group"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-3 text-center group-hover:text-[#FF6B35] transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
