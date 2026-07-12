import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { BackToTop } from "./components/BackToTop";

// Import pages
import { Home } from "./pages/Home";
import { AboutPage } from "./pages/AboutPage";
import { ProductIndex } from "./pages/ProductIndex";
import { ProductDetail } from "./pages/ProductDetail";
import { FAQPage } from "./pages/FAQPage";
import { BlogIndex } from "./pages/BlogIndex";
import { BlogDetail } from "./pages/BlogDetail";
import { ContactPage } from "./pages/ContactPage";

// Scroll To Top Utility Component for Route Transitions
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant" as ScrollBehavior, // TypeScript compliant casting if needed
    });
  }, [pathname]);

  return null;
}

// Router Wrapper to get access to useLocation for Page transition animations
function AppContent({ isLoading, onComplete }: { isLoading: boolean; onComplete: () => void }) {
  const location = useLocation();

  return (
    <div className="relative min-h-screen selection:bg-[#F59E0B]/20 selection:text-[#111827]">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={onComplete} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col overflow-x-hidden min-h-screen"
          >
            {/* Scroll Management */}
            <ScrollToTop />

            {/* Global Navbar */}
            <Navbar />

            {/* Main Multi-page Router */}
            <main className="flex-grow">
              <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/tentang" element={<AboutPage />} />
                    <Route path="/produk" element={<ProductIndex />} />
                    <Route path="/produk/telur-asin-:id" element={<ProductDetail />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/blog" element={<BlogIndex />} />
                    <Route path="/blog/:slug" element={<BlogDetail />} />
                    <Route path="/kontak" element={<ContactPage />} />
                  </Routes>
                </motion.div>
              </AnimatePresence>
            </main>

            {/* Global Footer and Conversion Triggers */}
            <Footer />
            <FloatingWhatsApp />
            <BackToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      <AppContent isLoading={isLoading} onComplete={() => setIsLoading(false)} />
    </BrowserRouter>
  );
}
