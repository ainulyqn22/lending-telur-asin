import { motion } from "motion/react";
import { Egg, ShieldCheck, CheckCircle, RotateCcw, Box, TrendingDown } from "lucide-react";
import { WHY_CHOOSE_US } from "../data";

export function WhyChooseUs() {
  // Static icon component mapping based on string identifiers
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Egg":
        return <Egg className="text-[#F59E0B]" size={28} strokeWidth={1.5} />;
      case "ShieldCheck":
        return <ShieldCheck className="text-[#F59E0B]" size={28} strokeWidth={1.5} />;
      case "CheckCircle":
        return <CheckCircle className="text-[#F59E0B]" size={28} strokeWidth={1.5} />;
      case "RotateCcw":
        return <RotateCcw className="text-[#F59E0B]" size={28} strokeWidth={1.5} />;
      case "Box":
        return <Box className="text-[#F59E0B]" size={28} strokeWidth={1.5} />;
      case "TrendingDown":
        return <TrendingDown className="text-[#F59E0B]" size={28} strokeWidth={1.5} />;
      default:
        return <CheckCircle className="text-[#F59E0B]" size={28} strokeWidth={1.5} />;
    }
  };

  return (
    <section className="py-24 bg-[#F8FAFC]" id="keunggulan">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20" id="why-choose-header">
          <span className="text-xs font-bold text-[#F59E0B] tracking-widest font-sans uppercase">
            Standar Kualitas King Telur
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-[#111827] tracking-tight mt-2 mb-4">
            Mengapa Memilih Produk Kami?
          </h2>
          <div className="h-1 w-12 bg-[#F59E0B] mx-auto rounded-full" />
        </div>

        {/* 6-Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="why-choose-grid">
          {WHY_CHOOSE_US.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-[24px] border border-[#E5E7EB] p-8 flex flex-col items-start gap-5 transition-all duration-300 hover:shadow-lg hover:border-[#F59E0B]/15 hover:-translate-y-1 group"
            >
              {/* Icon Stage */}
              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shrink-0">
                {getIcon(item.iconName)}
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-2">
                <h3 className="font-sans font-extrabold text-lg text-[#111827] group-hover:text-[#F59E0B] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-[#6B7280] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
