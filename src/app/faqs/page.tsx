import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FaqsHero from '@/components/faqs/FaqsHero';
import FaqSection from '@/components/faqs/FaqSection';
import FaqCta from '@/components/faqs/FaqCta';

const generalFaqs = [
  {
    question: "What's your minimum order quantity (MOQ)?",
    answer:
      "The MOQ depends on different designs. Usually it starts from 150-200 pieces per color/style. For custom hardware, fabrics, trims, dyeing, printing, and embroidery, different MOQs may apply. Please enquire us for more details.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "Usually our payment term is 30% advanced payment and the balance before shipment. For long-term customers, we can be more flexible after negotiation.",
  },
  {
    question: "What type of garment can you make?",
    answer:
      "We specialize in all types of womenswear such as dresses, tops, shirts, blouses, skirts, pants, jumpsuits, sweaters, denim etc.",
  },
  {
    question: "Do you provide sourcing service?",
    answer:
      "Yes. Our experienced designers go to the fabric market every day to source fabrics and trims required for our customers. Send us what you need to source and we'll share options the next day. This service is free!",
  },
  {
    question: "How long does it take to complete an order?",
    answer:
      "Typically 4-6 weeks for the entire process, excluding delivery, for orders that do not require custom fabric development or special finishing. Repeat orders can ship in 7-20 days depending on quantity.",
  },
  {
    question: "Can I visit you before I start the business?",
    answer:
      "We highly encourage a visit as a crucial initial step toward long-term collaboration. Our location is close to Guangzhou Zhongda fabric market; we can organize the visit and pick up for you.",
  },
  {
    question: "Is your factory ethical?",
    answer:
      "We are committed to ethical fair trade practices: no workers under the age of 16, fair minimum living wages, no forced labor, overtime compensated, safe working environment, proper lighting and sanitation, and regular fire drills.",
  },
  {
    question: "Do you work with third-party suppliers?",
    answer:
      "All garments are manufactured in-house except sweaters and denim which require specialized machinery and washing facilities. We partner with trusted suppliers for these categories.",
  },
  {
    question: "Do you offer ready-made clothing or stock?",
    answer:
      "No. We produce custom apparel according to our customers' designs with their brands.",
  },
  {
    question: "Do you have existing patterns or designs I can use?",
    answer:
      "Yes, we often provide hot styles to new customers. Contact us and we will send updated styles for reference.",
  },
  {
    question: "Are my designs protected?",
    answer:
      "We will not sell or share your designs with other customers. We can sign a non-disclosure agreement if required.",
  },
  {
    question: "What happens if I receive defective items?",
    answer:
      "We will refund for affected pieces or a percentage according to the defect condition. Defects should be reported within 15 days after receipt. We conduct QC at each stage to minimize defects.",
  },
  {
    question: "Can you manage rush orders?",
    answer:
      "Yes. We can organize a dedicated team to ensure timely delivery. There will be an additional fee for rush orders.",
  },
];

const quotationFaqs = [
  {
    question: "Do I need to provide tech pack or real samples to quote?",
    answer:
      "Ideally tech packs are available. In most cases, customers send samples or photos; we can develop similar styles from photos or sketches.",
  },
  {
    question: "What information do I need to provide for quotation?",
    answer:
      "Reference samples/CAD/images, fabric information if available, size breakdown, quantity, and any packing or delivery time requirements.",
  },
  {
    question: "Will the quotation be the production prices?",
    answer:
      "No. The preliminary quotation is for reference. Final production prices are confirmed after samples are approved.",
  },
  {
    question: "Do I need to provide complete measurement chart for quotation?",
    answer:
      "Helpful but not mandatory. If unavailable, provide basic measurements of the middle size (bust, waist, hip). We will do grading for other sizes.",
  },
  {
    question: "How soon can you send the quotation?",
    answer:
      "Usually same day if the inquiry contains all information. Special fabrics or finishing may require one additional day.",
  },
  {
    question: "What if your quotation is higher than my target?",
    answer:
      "Inform us of your target prices and we will explore different fabric and technique options to meet them.",
  },
];

const samplesFaqs = [
  {
    question: "What do I need to provide to make the samples?",
    answer:
      "Reference samples or designs (photos, sketches, CAD). Please let us know the size of the samples required.",
  },
  {
    question: "What's the lead time for the samples?",
    answer:
      "Usually 3-7 days after all details are confirmed, depending on styles and quantity.",
  },
  {
    question: "What's the sample charge and how can I pay it?",
    answer:
      "For new customers, sample charge is typically 2.5-3x the estimated production price. Pay via wire transfer or PayPal. Shipping fees are borne by customers.",
  },
  {
    question: "Can I get my sample charge refunded?",
    answer:
      "Yes. We reimburse sample cost once you place a bulk order; the refund is deducted from the bulk order payment.",
  },
  {
    question: "Will you make second samples if the first is not approved?",
    answer:
      "Absolutely. Provide clear change requests and we will make a second set of samples.",
  },
  {
    question: "Will you send fabric and color/print options with samples?",
    answer:
      "Yes, upon request we provide available fabric and color/print options along with the samples.",
  },
  {
    question: "Do you provide grading for sizes?",
    answer:
      "Yes. Our master pattern technicians grade sizes from a base size to suit the intended audience and maximize fabric usage.",
  },
  {
    question: "Can you work from photos?",
    answer:
      "Yes. We are experienced at developing samples from photos or sketches when tech packs aren't available.",
  },
];

const productionFaqs = [
  {
    question: "What production processes do you handle in-house?",
    answer:
      "Design consultation, fabric & trims sourcing, pattern & sample, cutting & sewing, quality assurance, packing & shipping. Special finishing via trusted partners.",
  },
  {
    question: "How many sewing teams do you have?",
    answer:
      "We have six sewing teams forming six separate production lines for efficient sequential assembly.",
  },
  {
    question: "Do you preshrink fabric?",
    answer: "Yes, before cutting we inspect and preshrink fabrics as required.",
  },
  {
    question: "What QC steps do you follow?",
    answer:
      "Raw material inspection, in-line inspection during manufacturing, and final inspection of finished products.",
  },
  {
    question: "Do you support special finishing?",
    answer:
      "Yes: washing & dye, digital prints, screen prints, heat transfer, embroidery, and more.",
  },
  {
    question: "Can you produce knitwear and denim?",
    answer:
      "Yes, via long-term trusted partners with specialized machinery and washing facilities.",
  },
];

const shippingFaqs = [
  {
    question: "What shipping methods do you offer?",
    answer:
      "Door-to-door via DHL/FEDEX/TNT for small orders; sea freight via multiple forwarders for >500kg/1500 pieces.",
  },
  {
    question: "Do you coordinate with nominated forwarders?",
    answer: "Yes, we can coordinate with your nominated forwarders for safe and fast shipping.",
  },
  {
    question: "How long is delivery?",
    answer:
      "Varies by destination; ocean freight takes longer than air freight.",
  },
  {
    question: "How are garments packed?",
    answer:
      "All garments are properly ironed and wrapped to ensure they are safe and undamaged during shipping.",
  },
];

export default function FaqsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <FaqsHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FaqSection title="General FAQs" faqs={generalFaqs} />
        <FaqSection title="Quotation FAQs" faqs={quotationFaqs} titleStyle="orange" />
        <FaqSection title="Samples FAQs" faqs={samplesFaqs} titleStyle="orange" />
        <FaqSection title="Production FAQs" faqs={productionFaqs} />
        <FaqSection title="Shipping FAQs" faqs={shippingFaqs} />
      </div>
      <FaqCta />
      <Footer />
    </main>
  );
}
