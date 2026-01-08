import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact Us - Tuer Garment | Clothing Manufacturer in China",
  description:
    "Get in touch with our team to see how our garment production services can meet your production and manufacturing needs.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </main>
  );
}
