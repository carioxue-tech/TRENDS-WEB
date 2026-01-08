export default function Stats() {
  const stats = [
    {
      number: "7-15",
      unit: "DAYS FOR SAMPLES",
      description: "End-To-End Supply Chain",
      detail: "We own 5 factories, 5000 workers",
    },
    {
      number: "200+",
      unit: "NEW SAMPLES WEEKLY",
      description: "20 Years Of Experience",
      detail: "Experts in custom OEM,ODM",
    },
    {
      number: "20-90",
      unit: "DAYS FOR PRODUCTION",
      description: "Stable and reliable production",
      detail: "MOQ is 3000 pcs/color/styles.",
    },
    {
      number: "100K",
      unit: "MONTHLY OUTPUT",
      description: "Quick Turnarounds",
      detail: "Highly efficient in samples development and production",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-left">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-[#12AEE2]">
                  {stat.number}
                </span>
              </div>
              <div className="text-sm font-semibold mb-4 text-[#12AEE2]">
                {stat.unit}
              </div>
              <h3 className="text-lg font-semibold mb-2">{stat.description}</h3>
              <p className="text-sm text-gray-600">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
