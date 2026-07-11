import { motion } from "motion/react";
import { Sparkles, Calendar, TrendingUp, HelpCircle, Lightbulb } from "lucide-react";
import { TIMELINE, IMAGES } from "../data";

export function Story() {
  // Map icons based on timeline steps for visual context
  const getTimelineIcon = (year: string) => {
    switch (year) {
      case "2024":
        return <HelpCircle className="text-brand-orange" size={18} />;
      case "Hilirisasi":
        return <Lightbulb className="text-brand-yellow" size={18} />;
      case "Hari ke-1":
        return <Calendar className="text-brand-gray" size={18} />;
      case "Hari ke-2":
        return <TrendingUp className="text-brand-success" size={18} />;
      case "Konsistensi":
        return <Sparkles className="text-brand-orange" size={18} />;
      case "Kini":
        return <Sparkles className="text-brand-yellow" size={18} />;
      default:
        return <Sparkles className="text-brand-orange" size={18} />;
    }
  };

  return (
    <section className="py-24 bg-[#F8FAFC]" id="tentang">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20" id="story-header">
          <span className="text-xs font-bold text-[#F59E0B] tracking-widest font-sans uppercase">
            Kisah Perjalanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-[#111827] tracking-tight mt-2 mb-4">
            Dari Peternakan Lokal <br className="sm:hidden" /> Hingga Cita Rasa Premium
          </h2>
          <div className="h-1 w-12 bg-[#F59E0B] mx-auto rounded-full" />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Visual image with minimalist aesthetic frame */}
          <div className="lg:col-span-5 relative" id="story-left-col">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[24px] overflow-hidden aspect-[4/5] bg-white border border-[#E5E7EB] p-4 shadow-sm"
            >
              <div className="relative w-full h-full rounded-[16px] overflow-hidden">
                <img
                  src={IMAGES.story}
                  alt="Peternakan Bebek King Telur"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#F59E0B]/90">
                    Peternakan Sendiri
                  </span>
                  <h4 className="font-sans font-black text-lg mt-1">
                    Dedikasi Penuh Sejak Awal
                  </h4>
                  <p className="font-sans text-xs text-white/80 font-light mt-1">
                    Buleng, Pengelen, Sampang, Madura
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Modern vertical interactive timeline */}
          <div className="lg:col-span-7" id="story-right-col">
            <div className="relative border-l-2 border-[#E5E7EB] pl-6 sm:pl-10 ml-4 py-2 flex flex-col gap-10">
              {TIMELINE.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline bullet node */}
                  <div className="absolute -left-[39px] sm:-left-[55px] top-1.5 w-8 h-8 rounded-full bg-white border-2 border-[#F59E0B]/30 group-hover:border-[#F59E0B] flex items-center justify-center transition-all duration-300 shadow-sm group-hover:scale-110">
                    {getTimelineIcon(item.year)}
                  </div>

                  {/* Year Tag */}
                  <span className="inline-block bg-[#111827] text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-2">
                    {item.year}
                  </span>

                  {/* Timeline Card Content */}
                  <div className="bg-white rounded-[20px] border border-[#E5E7EB] p-6 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-[#F59E0B]/20">
                    <h3 className="font-sans font-extrabold text-base text-[#111827] group-hover:text-[#F59E0B] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-[#6B7280] font-normal leading-relaxed mt-1.5">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
