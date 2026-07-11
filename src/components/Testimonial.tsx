import { motion } from "motion/react";
import { Star, Quote, Heart } from "lucide-react";
import { TESTIMONIALS } from "../data";

export function Testimonial() {
  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden" id="testimoni">
      {/* Decorative gradient overlay to match our modern brand layout */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[35%] h-[35%] rounded-full bg-orange-100/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20" id="testimoni-header">
          <span className="text-xs font-bold text-[#F59E0B] tracking-widest font-sans uppercase">
            Testimoni Autentik
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-[#111827] tracking-tight mt-2 mb-4">
            Apa Kata Pelanggan Setia?
          </h2>
          <div className="h-1 w-12 bg-[#F59E0B] mx-auto rounded-full mb-6" />
          
          {/* Subtitle highlighting local trust */}
          <p className="font-sans text-sm sm:text-base text-[#6B7280] font-medium leading-relaxed max-w-xl mx-auto">
            Dipercaya pelanggan rumah tangga, UMKM, dan pelaku kuliner di Sampang.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" id="testimoni-grid">
          {TESTIMONIALS.map((testi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-[24px] border border-[#E5E7EB] p-8 flex flex-col justify-between shadow-sm relative transition-all duration-300 hover:shadow-md hover:border-[#F59E0B]/15 group"
            >
              {/* Quote Icon watermark */}
              <div className="absolute top-6 right-6 text-[#F59E0B]/10 group-hover:text-[#F59E0B]/20 transition-colors duration-300">
                <Quote size={32} strokeWidth={1.5} />
              </div>

              <div>
                {/* 5-Star Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="font-sans text-[#111827]/90 text-sm leading-relaxed italic mb-8">
                  &ldquo;{testi.quote}&rdquo;
                </p>
              </div>

              {/* User Bio Card */}
              <div className="flex items-center gap-4.5 border-t border-[#E5E7EB] pt-5">
                {/* Custom modern avatar badge representing initial letters */}
                <div className="w-11 h-11 rounded-full bg-slate-100 border border-[#E5E7EB] flex items-center justify-center font-sans font-black text-xs text-[#111827] select-none shrink-0 uppercase">
                  {testi.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs sm:text-sm text-[#111827]">
                    {testi.name}
                  </h4>
                  <p className="font-sans text-[11px] text-[#6B7280] font-medium uppercase tracking-wide mt-0.5">
                    {testi.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Local impact callout bar */}
        <div className="mt-16 text-center" id="testimoni-callout">
          <div className="inline-flex items-center gap-2.5 bg-orange-50 rounded-full px-4.5 py-2 border border-[#E5E7EB]">
            <Heart size={14} className="text-[#F59E0B] fill-[#F59E0B]" />
            <span className="font-sans text-xs font-semibold text-[#F59E0B] tracking-wider uppercase">
              100% Produk Lokal Terbaik Sampang, Madura
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
