import { motion } from "motion/react";
import { MessageSquare, ArrowRight, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { BRAND_INFO } from "../data";

export function CTA() {
  return (
    <section className="py-20 bg-white" id="pesan">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[32px] overflow-hidden bg-[#111827] py-16 px-8 sm:px-12 md:px-16 text-center text-white shadow-xl border border-white/5"
          id="cta-gradient-container"
        >
          {/* Decorative smooth abstract concentric circles resembling eggs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -left-[10%] w-[350px] h-[350px] rounded-full border border-white/5" />
            <div className="absolute -bottom-[30%] -right-[10%] w-[450px] h-[450px] rounded-full border border-white/5" />
            <div className="absolute top-[30%] right-[10%] w-32 h-32 rounded-full bg-white/5 blur-3xl" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto" id="cta-inner-content">
            <span className="text-[10px] font-extrabold tracking-widest uppercase bg-white/10 px-3.5 py-1.5 rounded-full block w-fit mx-auto mb-6">
              DIKIRIM LANGSUNG DARI PETERNAKAN
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black tracking-tight mb-5 leading-tight text-white">
              Siap Menikmati <br className="sm:hidden" /> Telur Asin Premium?
            </h2>

            <p className="font-sans text-white/80 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-10">
              Rasakan cita rasa legendaris telur asin asli Sampang dengan sensasi gurih, masir, dan berminyak alami dalam setiap butirnya. Hubungi admin kami untuk pengiriman hari ini!
            </p>

            {/* Premium WA Ordering Button */}
            <motion.a
              href={BRAND_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#F59E0B] text-white hover:scale-105 active:scale-95 text-sm sm:text-base font-extrabold px-10 py-5 rounded-full transition-all duration-300 shadow-lg group"
              id="btn-cta-whatsapp"
            >
              <MessageSquare size={20} className="fill-current" />
              Pesan via WhatsApp
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </motion.a>

            {/* Secondary benefits bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 mt-14 border-t border-white/10 pt-10" id="cta-footer-benefits">
              <div className="flex flex-col items-center gap-2">
                <Truck className="text-[#F59E0B]" size={22} strokeWidth={1.5} />
                <span className="font-sans font-bold text-xs text-white">Pengiriman Cepat</span>
                <span className="font-sans text-[10px] text-white/50">Sampang & sekitarnya</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <ShieldCheck className="text-[#F59E0B]" size={22} strokeWidth={1.5} />
                <span className="font-sans font-bold text-xs text-white">Kualitas Terjamin</span>
                <span className="font-sans text-[10px] text-white/50">QC Teropong Cahaya</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <RotateCcw className="text-[#F59E0B]" size={22} strokeWidth={1.5} />
                <span className="font-sans font-bold text-xs text-white">Garansi Pecah</span>
                <span className="font-sans text-[10px] text-white/50">Ganti baru gratis</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
