export default function OurMission() {
  return (
    <section className="pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Title */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Our<br />Mission</h2>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">
            <p>
              We strive to ensure superior product quality and craftsmanship
              while continuously improving our performance. Our ultimate goal is
              to provide a easy,seamless, enjoyable experience for our customers
              throughout the entire apparel production process.
            </p>

            <p>
              With the passion and skills of each team members, we aim to deliver
              world-class services to our customers worldwide.
            </p>
          </div>
        </div>

        <hr className="mt-12 border-gray-300" />
      </div>
    </section>
  );
}
