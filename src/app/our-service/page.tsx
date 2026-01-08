import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import WhatWeCanHelp from "@/components/services/WhatWeCanHelp";
import GarmentServices from "@/components/services/GarmentServices";
import ServicesCta from "@/components/services/ServicesCta";

export default function OurServicePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServicesHero />
      <WhatWeCanHelp />
      <GarmentServices />
      <ServicesCta />
      <Footer />
    </main>
  );
}
