import { motion } from "motion/react";
import { MessageSquare } from "lucide-react";
import { BRAND_INFO } from "../data";

export function FloatingWhatsApp() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      id="floating-wa-wrapper"
    >
      {/* Decorative pulse ripple animations */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
      <div className="absolute -inset-1 rounded-full border border-[#25D366]/40 animate-pulse" />

      {/* Actual button link */}
      <a
        href={BRAND_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pesan via WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95 group relative z-10"
        id="btn-floating-wa"
      >
        <MessageSquare size={26} className="fill-current group-hover:rotate-12 transition-transform duration-300" />
      </a>
    </motion.div>
  );
}
