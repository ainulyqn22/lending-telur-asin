import { motion } from "motion/react";
import { ArrowRight, ShoppingCart, Award, Sparkles, CheckCircle } from "lucide-react";
import { BRAND_INFO, IMAGES, BADGES } from "../data";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-16 flex items-center overflow-hidden bg-white" id="hero">
      {/* Background radial soft gradient resembling Apple/Linear landing pages */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] rounded-full bg-gradient-to-b from-brand-orange/5 to-transparent blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] rounded-full bg-gradient-to-t from-brand-yellow/5 to-transparent blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Brand details, badges, CTA */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-left" id="hero-content">
          {/* Standing info tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E5E7EB] gap-2 w-fit mb-2"
            id="hero-tag"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#10B981]"></span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#6B7280]">
              Est. 2024 — Sampang
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl font-sans font-black leading-[0.95] tracking-tight text-[#111827]"
            id="hero-title"
          >
            Telur Asin <br />
            <span className="text-[#F59E0B]">Premium.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[#6B7280] leading-relaxed pr-8 font-sans font-normal"
            id="hero-desc"
          >
            Satu Telur, Sejuta Rasa, Kualitas Tiada Dua. Menggunakan telur bebek pilihan dari peternakan sendiri, diproses secara higienis dengan cita rasa autentik khas Sampang.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
            id="hero-ctas"
          >
            <a
              href={BRAND_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#F59E0B] text-white rounded-full font-bold shadow-lg shadow-orange-100 hover:scale-105 active:scale-95 transition-all text-sm tracking-wide"
              id="btn-hero-primary"
            >
              Pesan Sekarang
            </a>
            <a
              href="#produk"
              className="px-8 py-4 border border-[#E5E7EB] rounded-full font-bold hover:bg-slate-50 transition-all text-sm tracking-wide text-[#111827]"
              id="btn-hero-secondary"
            >
              Lihat Varian
            </a>
          </motion.div>

          {/* Badge Grid Checklist */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-y-3 pt-4 border-t border-[#E5E7EB]"
            id="hero-badges"
          >
            {BADGES.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-xs font-semibold text-[#6B7280]">
                <svg className="w-4 h-4 text-[#10B981] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {badge.replace("✓ ", "")}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Main photo product and floating seals */}
        <div className="lg:col-span-6 relative flex items-center justify-center pt-8 lg:pt-0" id="hero-image-wrapper">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-[400px] sm:h-[480px] bg-[#F8FAFC] rounded-[32px] overflow-hidden border border-[#E5E7EB] group flex items-center justify-center"
          >
            {/* Top-Left Absolute Badges */}
            <div className="absolute top-6 left-6 flex flex-col gap-2 z-20">
              <span className="bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-black border border-[#E5E7EB] uppercase tracking-tighter text-[#111827]">
                100% Telur Bebek Pilihan
              </span>
              <span className="bg-black text-white w-fit px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter">
                Quality Checked
              </span>
            </div>

            {/* Glowing background highlights simulating professional studio photography */}
            <div className="absolute w-64 h-64 bg-orange-200/40 blur-[100px] rounded-full -z-10" />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#FB923C]/20 rounded-full blur-3xl -z-10" />

            {/* Premium realistic product image representation */}
            <div className="w-[85%] h-[85%] relative flex flex-col items-center justify-center transform group-hover:scale-105 transition-transform duration-700">
              <img
                src={IMAGES.original}
                alt="King Telur Asin Original Premium"
                className="max-h-[80%] max-w-[80%] object-contain select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(17,24,39,0.15)]"
                referrerPolicy="no-referrer"
                id="hero-product-img"
              />
              <div className="mt-4 text-center">
                <p className="text-xs font-bold text-[#6B7280] italic">The Gold Standard</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
