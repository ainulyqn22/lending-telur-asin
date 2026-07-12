import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { BRAND_INFO, IMAGES } from "../data";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Tentang Kami", path: "/tentang" },
    { name: "Varian Produk", path: "/produk" },
    { name: "FAQ", path: "/faq" },
    { name: "Blog", path: "/blog" },
    { name: "Kontak", path: "/kontak" },
  ];

  return (
    <>
      <motion.nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-[#E5E7EB] py-4 shadow-sm"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          {/* Logo Brand */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none" id="nav-logo">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#E5E7EB] bg-[#F59E0B] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm">
              <img
                src={IMAGES.logo}
                alt="KT Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-black text-xl tracking-tighter text-[#111827] flex items-center gap-1 leading-none">
                KING <span className="text-[#F59E0B]">TELUR</span>
              </span>
              <span className="text-[9px] text-[#6B7280] tracking-widest font-bold uppercase mt-0.5">
                PREMIUM SELECTION
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8" id="nav-desktop-links">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-sans text-sm font-bold transition-colors relative py-2 ${
                    isActive ? "text-[#F59E0B]" : "text-[#6B7280] hover:text-[#111827]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavDot"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#F59E0B]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-4" id="nav-desktop-cta">
            <Link
              to="/kontak"
              className="inline-flex items-center justify-center gap-2 bg-[#111827] text-white hover:bg-black text-xs font-bold px-6 py-2.5 rounded-full transition-all duration-300"
              id="btn-nav-order"
            >
              Hubungi Kami
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu Trigger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-brand-dark hover:text-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20 rounded-lg cursor-pointer"
            aria-label="Toggle menu"
            id="nav-mobile-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white md:hidden pt-24 px-6 flex flex-col justify-between"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            id="nav-mobile-menu"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`font-sans font-black text-2xl transition-colors border-b border-slate-100 pb-4 block ${
                        isActive ? "text-[#F59E0B]" : "text-[#111827] hover:text-[#F59E0B]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="pb-12 flex flex-col gap-4">
              <a
                href={BRAND_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-[#F59E0B] text-white hover:scale-[1.01] font-bold py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm"
                id="btn-mobile-order"
              >
                Pesan Sekarang via WhatsApp
              </a>
              <div className="text-center text-xs text-[#6B7280] font-medium">
                Satu Telur, Sejuta Rasa, Kualitas Tiada Dua.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
