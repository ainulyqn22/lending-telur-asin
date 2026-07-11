import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Layers, Utensils, Briefcase, Users, Check, ArrowRight } from "lucide-react";
import { SERVICES, BRAND_INFO } from "../data";

export function Services() {
  const [activeTab, setActiveTab] = useState(0);

  const icons = [
    <ShoppingBag key="0" className="w-5 h-5" />,
    <Layers key="1" className="w-5 h-5" />,
    <Utensils key="2" className="w-5 h-5" />,
    <Briefcase key="3" className="w-5 h-5" />,
    <Users key="4" className="w-5 h-5" />,
  ];

  // Specific benefits for each partnership channel
  const serviceBenefits = [
    [
      "Tanpa Minimum Pembelian",
      "Kualitas Telur Masir Bergaransi",
      "Kemasan Rapi dan Higienis",
      "Siap Antar Wilayah Sampang Kota",
    ],
    [
      "Harga Diskon Skala Grosir",
      "Sistem Pre-Order Terjadwal",
      "Packing Kayu Ekstra Aman",
      "Pengiriman Antar Pulau Jawa & Madura",
    ],
    [
      "Kualitas Rasa Konsisten (SOP)",
      "Termin Pembayaran Fleksibel",
      "Prioritas Alokasi Stok Utama",
      "Gratis Sampel Uji Coba Resep",
    ],
    [
      "Suplai Mingguan Sesuai Kebutuhan",
      "Dukungan Promosi Bersama di Medsos",
      "Rekomendasi Menu Kreatif",
      "Sertifikat Mutu Higienis",
    ],
    [
      "Margin Keuntungan Sangat Tinggi",
      "Kit Konten Pemasaran Lengkap",
      "Proteksi Wilayah Pemasaran",
      "Bimbingan Manajemen Penjualan",
    ],
  ];

  return (
    <section className="py-24 bg-white" id="layanan">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20" id="services-header">
          <span className="text-xs font-bold text-[#F59E0B] tracking-widest font-sans uppercase">
            Saluran Kemitraan
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-[#111827] tracking-tight mt-2 mb-4">
            Solusi Pasokan Telur Asin <br className="sm:hidden" /> Sesuai Kebutuhan Anda
          </h2>
          <div className="h-1 w-12 bg-[#F59E0B] mx-auto rounded-full" />
        </div>

        {/* Tab Layout Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto" id="services-tabs-container">
          {/* Left Column: Vertical tab list */}
          <div className="lg:col-span-5 flex flex-col gap-3.5" id="services-tab-list">
            {SERVICES.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full flex items-center gap-4 px-6 py-4.5 rounded-2xl text-left border transition-all duration-300 focus:outline-none ${
                  activeTab === index
                    ? "bg-[#111827] border-[#111827] text-white shadow-md -translate-x-1 sm:-translate-x-2"
                    : "bg-[#F8FAFC] border-[#E5E7EB] hover:bg-white text-[#111827] hover:border-[#F59E0B]/20"
                }`}
              >
                <div className={`p-2.5 rounded-xl transition-colors duration-300 ${
                  activeTab === index ? "bg-[#F59E0B] text-white" : "bg-slate-200 text-[#111827]"
                }`}>
                  {icons[index]}
                </div>
                <div>
                  <h3 className="font-sans font-extrabold text-sm sm:text-base tracking-wide text-inherit">
                    {service.title}
                  </h3>
                  <span className={`text-[10px] font-sans transition-colors duration-300 block mt-0.5 ${
                    activeTab === index ? "text-white/60" : "text-[#6B7280]"
                  }`}>
                    Pelajari lebih lanjut &arr;
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Active tab content display panel */}
          <div className="lg:col-span-7 bg-[#F8FAFC] rounded-[24px] border border-[#E5E7EB] p-8 sm:p-10 h-full min-h-[380px] flex flex-col justify-between shadow-sm relative overflow-hidden" id="services-tab-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full">
                      Kemitraan {SERVICES[activeTab].title}
                    </span>
                  </div>

                  <h3 className="font-sans font-black text-2xl text-[#111827] mb-3">
                    {SERVICES[activeTab].title} King Telur
                  </h3>

                  <p className="font-sans text-[#6B7280] text-sm leading-relaxed mb-8">
                    {SERVICES[activeTab].description} Kami menghadirkan kemudahan pasokan berkelanjutan dengan jaminan kualitas terbaik langsung dari fasilitas produksi kami sendiri di Sampang.
                  </p>

                  {/* Checklist benefits */}
                  <h4 className="font-sans font-extrabold text-xs text-[#111827] tracking-wide uppercase mb-4">Benefit Layanan:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
                    {serviceBenefits[activeTab].map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-[#111827]">
                        <div className="w-5 h-5 rounded-full bg-[#10B981]/10 flex items-center justify-center text-[#10B981] shrink-0">
                          <Check size={12} />
                        </div>
                        <span className="font-sans text-xs sm:text-sm font-semibold tracking-wide text-[#6B7280]">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct CTA action for specific service */}
                <div className="pt-6 border-t border-[#E5E7EB]">
                  <a
                    href={`https://wa.me/62881080171883?text=Halo%20King%20Telur%2C%20saya%20tertarik%20dengan%20layanan%20kemitraan%20${encodeURIComponent(SERVICES[activeTab].title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-[#F59E0B] hover:scale-[1.02] active:scale-95 text-white font-bold text-xs px-6 py-3.5 rounded-xl transition-all duration-300 shadow-sm"
                  >
                    Ajukan Kemitraan {SERVICES[activeTab].title}
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
