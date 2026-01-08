export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Designs Details",
      points: [
        "Provide us the designs you want to make.",
        "It can be physical samples/images/sketches/drawing/techpacks etc.",
        "Please include the measurement if available",
        "Please do check our FAQ page to know more how we work before we start!",
      ],
    },
    {
      number: "2",
      title: "Prices Estimation",
      points: [
        "We will provide estimated prices based on the design details provided.",
        "The estimated prices are not the final production prices. Final production prices will be advised after samples are made",
        "Time required 2-3 working days",
        "Once the estimated prices are approved, we will move to the sampling process.",
      ],
    },
    {
      number: "3",
      title: "Samples Development",
      points: [
        "Sample charge (only apply to new customers) is 3x the estimated price and will be refunded after a bulk order is placed.",
        "We will source fabrics based on the designs for approval before sampling.",
        "Samples will be created according to the selected fabric and designs details provided.",
        "Once the samples are ready, photos of the samples will be sent for approval before dispatch.",
        "Optional fabric will be sent together with the samples.",
        "Sample lead time 10-15 working days.",
        "If the samples are not approved, we will make 2nd samples with improvements free of charge if theres an bulk order later for the samples.",
        "Final production prices will be advised after samples are made and approved.",
      ],
    },
    {
      number: "4",
      title: "Bulk Order Production",
      points: [
        "Production will start after an order is placed and samples are approved.",
        "We usually require a 30% deposit of the order amount before beginning production. The balance is due before shipment or against shipping documents.",
        "Pre-production and shipment (TOP) samples need to be required when the order is placed.",
        "Packing trims, labels, etc., need to be provided when the order is placed.",
        "Production lead time will be advised before the order is placed.",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="italic text-[#12AEE2]">How To Start</span>{" "}
            Manufacturing For Your Brand?
          </h2>
          <p className="text-xl text-gray-600">
            High-quality Custom Clothing Manufacturer
          </p>
        </div>

        {/* Process Images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <img
            src="https://ugc.same-assets.com/pOuFP6swCv-MDrzDKSoabmDES38q41fl.jpeg"
            alt="Process"
            className="w-full h-48 object-cover rounded"
          />
          <img
            src="https://ugc.same-assets.com/VIwDKu3kU3R3vl2GzHkwH7BcyjfcALPX.jpeg"
            alt="Process"
            className="w-full h-48 object-cover rounded"
          />
          <img
            src="https://ugc.same-assets.com/6uO_RnIqE-kTxLBHnHXMurWdXg0F6XxD.jpeg"
            alt="Process"
            className="w-full h-48 object-cover rounded"
          />
          <img
            src="https://ugc.same-assets.com/w2hqhrKU__ws3TIwCaohyKZEqm7egRL7.jpeg"
            alt="Process"
            className="w-full h-48 object-cover rounded"
          />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 text-white rounded-full flex items-center justify-center text-xl font-bold bg-[#12AEE2]">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <ul className="space-y-2">
                    {step.points.map((point, index) => (
                      <li key={index} className="text-sm text-gray-600 flex gap-2">
                        <span className="text-[#FF6B35] flex-shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
