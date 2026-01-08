export default function HowItBegan() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          How It All Began
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="https://ugc.same-assets.com/knZ3ke75M_gkLzy1NTJ5rSZbM2RiNAcQ.png"
              alt="TUER GARMENT"
              className="w-48 h-auto"
            />
          </div>

          {/* Text Content */}
          <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">
            <p>
              Established in 2013, Guangzhou Tuer Garment originated as the
              brainchild of our founder, Henry Liu. From a young age, Henry
              pursued his passion for garment technology, honing his skills
              throughout his college years. His dedication and expertise led him
              to become the chief garment technician at one of the largest local
              apparel manufacturing companies in 2006.
            </p>

            <p>
              After gaining invaluable experience in the corporate environment,
              Henry recognized his true calling was to collaborate directly with
              designers and brands, crafting products that meet and exceed their
              expectations in terms of quality. Driven by this vision, he left
              his position to embark on his entrepreneurial journey, laying the
              foundation for Tuer
            </p>

            <p>
              In its early days, Tuer focused on providing sample-making services
              to a select group of clients. Thanks to Henry's strong technical
              background, exceptional problem-solving abilities, and unwavering
              commitment to excellent service, he quickly earned the trust of his
              customers. As a result, they began entrusting Henry with their
              production tasks.
            </p>

            <p>
              Over the years, Tuer has attracted a team of talented professionals
              who share Henry's dedication to quality and innovation. Today, our
              company boasts an office of 30 staff members specializing in design
              and development, supported by a manufacturing base employing over
              150 skilled workers. Together, we proudly serve customers from
              around the globe, continuing to push the boundaries of what's
              possible in the world of women's fashion.
            </p>
          </div>
        </div>

        <hr className="my-12 border-gray-300" />
      </div>
    </section>
  );
}
