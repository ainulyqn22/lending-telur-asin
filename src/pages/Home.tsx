import { Hero } from "../components/Hero";
import { Story } from "../components/Story";
import { Products } from "../components/Products";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Services } from "../components/Services";
import { Testimonial } from "../components/Testimonial";
import { CTA } from "../components/CTA";
import { SEOManager } from "../components/SEOManager";
import {
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "../data/seoSchemas";

export function Home() {
  return (
    <>
      <SEOManager
        title="KING TELUR | Telur Asin Premium Asli Sampang"
        description="KING TELUR menghadirkan telur asin original dan telur asin asap premium dari peternakan sendiri di Sampang. Melayani eceran, grosir, restoran, UMKM, dan reseller."
        canonicalUrl="https://kingtelur.com/"
        schema={[websiteSchema, organizationSchema, localBusinessSchema]}
      />
      <Hero />
      <Story />
      <Products />
      <WhyChooseUs />
      <Services />
      <Testimonial />
      <CTA />
    </>
  );
}
