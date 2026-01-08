import { ArrowRight } from "lucide-react";

export default function MeetTheTeam() {
  const leaders = [
    {
      name: "Henry Liu",
      title: "CEO, Founder",
      image: "https://ext.same-assets.com/3350946252/1795627812.jpeg",
      bio: "Meet Henry Liu, the CEO and Founder of Tuer. With over 20 years of experience in the fashion industry, He has built a reputation as a dynamic and innovative leader. Henry began his career as a garment technician at a big clothing manufacturer in the city. Over the years, he has worked with various clothing brands and manufacturers, honing his skills in pattern making, garment construction, and quality control.",
    },
    {
      name: "Yanming Liu",
      title: "COO, Partner",
      image: "https://ext.same-assets.com/3350946252/3288118367.jpeg",
      bio: "Meet Yanming Liu, an experienced manufacturing executive with over 20 years of industry experience. As the current head of manufacturing at Tuer, Yanming is responsible for overseeing all aspects of production, from raw materials QA to finished product delivery.",
    },
  ];

  const teamMembers = [
    {
      name: "Kimchy Chen",
      title: "Senior Designer",
      image: "https://ext.same-assets.com/3350946252/946576583.jpeg",
    },
    {
      name: "Xin Wang",
      title: "Head of Garment Technician",
      image: "https://ext.same-assets.com/3350946252/2045955206.jpeg",
    },
    {
      name: "Rayson Zhong",
      title: "Trade Manager",
      image: "https://ext.same-assets.com/3350946252/581065681.jpeg",
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Meet The Team</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Left: Intro and Testimonial */}
          <div className="space-y-8">
            <p className="text-gray-700">
              We're an experienced team that always work with passion for
              fashion. We commit to push your brand and business forward!
            </p>

            <div className="border-l-4 border-gray-300 pl-6">
              <blockquote className="text-xl md:text-2xl font-light text-gray-800 mb-6 leading-relaxed">
                "Cario was there every step of the way and brought my business further than I could have imagined!"
              </blockquote>

              <div className="flex items-center gap-3">
                <img
                  src="https://ugc.same-assets.com/TnaEqOsGfw6ET-TFIvTblC2FbFnvdoZG.jpeg"
                  alt="Jordus Lim"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold">Cario Hsueh</div>
                  <div className="text-sm text-gray-600">
                    Founder of Supergurl
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Leader Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {leaders.map((leader) => (
              <div key={leader.name} className="text-center">
                <div className="mb-4 bg-gray-200 aspect-[3/4] rounded overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-sm text-gray-600 mb-1">{leader.title}</div>
                <h3 className="text-2xl font-bold mb-3">{leader.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* More Team Members */}
        <div className="border-t border-gray-300 pt-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-0.5 bg-gray-400"></div>
            <h3 className="text-2xl md:text-3xl font-bold">
              More Team Members!
            </h3>
            <a
              href="/about/our-team"
              className="text-[#FF6B35] hover:text-[#ff8555] transition-colors"
            >
              <ArrowRight size={24} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="text-sm text-gray-600 mb-1">{member.title}</div>
                <h4 className="text-xl font-bold">{member.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
