export default function OurValues() {
  const values = [
    {
      number: "01",
      title: "We develop",
      highlight: "partnership",
      description:
        "We take every business as long term and create more value for our customers",
    },
    {
      number: "02",
      title: "We promote",
      highlight: "intergrity",
      description: "Responsibility, honesty and openness.",
    },
    {
      number: "03",
      title: "We work with",
      highlight: "passion",
      description: "Passion to the fashion and passion to the work we do.",
    },
  ];

  return (
    <section id="values" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Title */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Our
              <br />
              Values
            </h2>
          </div>

          {/* Values List */}
          <div className="lg:col-span-2 space-y-8">
            {values.map((value) => (
              <div key={value.number} className="border-b border-gray-300 pb-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl md:text-2xl font-normal">
                    {value.title}{" "}
                    <span className="bg-[#FF6B35] text-white px-2 py-1">
                      {value.highlight}
                    </span>
                    .
                  </h3>
                  <span className="text-3xl md:text-4xl font-light text-gray-300">
                    {value.number}
                  </span>
                </div>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
