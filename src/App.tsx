import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Story } from "./components/Story";
import { Products } from "./components/Products";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Services } from "./components/Services";
import { Testimonial } from "./components/Testimonial";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen selection:bg-brand-orange/20 selection:text-brand-dark">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col overflow-x-hidden"
          >
            {/* Header / Top Navigation bar */}
            <Navbar />

            {/* Main Landing Sections */}
            <main className="flex-grow">
              <Hero />
              <Story />
              <Products />
              <WhyChooseUs />
              <Services />
              <Testimonial />
              <CTA />
            </main>

            {/* Footer and conversions */}
            <Footer />
            <FloatingWhatsApp />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
