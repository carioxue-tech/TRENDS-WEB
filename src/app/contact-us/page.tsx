import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactUsPage() {
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
