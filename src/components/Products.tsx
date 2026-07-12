import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Info, ShoppingCart, ArrowRight, X } from "lucide-react";
import { PRODUCTS, COMPARISONS, BRAND_INFO } from "../data";

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);

  return (
    <section className="py-24 bg-white" id="produk">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20" id="products-header">
          <span className="text-xs font-bold text-[#F59E0B] tracking-widest font-sans uppercase">
            Pilihan Varian Terbaik
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-[#111827] tracking-tight mt-2 mb-4">
            Dua Karya Autentik <br className="sm:hidden" /> Khas King Telur
          </h2>
          <div className="h-1 w-12 bg-[#F59E0B] mx-auto rounded-full" />
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-24" id="products-grid">
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[24px] border border-[#E5E7EB] p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 hover:shadow-xl hover:border-[#F59E0B]/20 group"
            >
              <div>
                {/* Product Badge Header */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-black bg-slate-100 px-3 py-1.5 rounded-full text-[#6B7280]">
                    {product.id.toUpperCase()}
                  </span>
                  <span className={`text-xs font-bold ${
                    product.badge === "BEST SELLER" ? "text-[#F59E0B]" : "text-[#FB923C]"
                  }`}>
                    {product.badge}
                  </span>
                </div>

                {/* Product Title */}
                <h3 className="font-sans font-black text-2xl sm:text-3xl text-[#111827] mb-4">
                  {product.title}
                </h3>

                {/* Product Image Stage */}
                <div className="relative aspect-[4/3] w-full flex items-center justify-center bg-[#F8FAFC] rounded-2xl border border-[#E5E7EB] overflow-hidden mb-8 group-hover:scale-[1.01] transition-transform duration-500">
                  {/* Smoke animation background for Telur Asap */}
                  {product.id === "smoked" && (
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <div className="absolute inset-0 bg-radial-gradient from-transparent to-white/10 opacity-30" />
                      <div className="absolute bottom-4 left-1/4 w-32 h-32 bg-slate-200/40 rounded-full blur-2xl animate-pulse" style={{ animationDuration: "6s" }} />
                      <div className="absolute bottom-6 right-1/4 w-40 h-40 bg-orange-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "8s" }} />
                    </div>
                  )}

                  <img
                    src={product.image}
                    alt={product.title}
                    title={`${product.title} - KING TELUR`}
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="300"
                    className="w-[85%] h-[85%] object-contain select-none transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[70%] h-4 bg-[#111827]/5 blur-lg rounded-full" />
                </div>

                {/* Description */}
                <p className="font-sans text-[#6B7280] text-sm leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Feature Checklist */}
                <ul className="flex flex-col gap-3 mb-10">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-[#111827]/90">
                      <div className="w-5 h-5 rounded-full bg-[#10B981]/10 flex items-center justify-center text-[#10B981] mt-0.5 shrink-0">
                        <Check size={12} />
                      </div>
                      <span className="font-sans text-xs sm:text-sm font-semibold tracking-wide text-[#6B7280]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product Card Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-[#111827] hover:text-white text-[#111827] border border-[#E5E7EB] hover:border-[#111827] font-bold text-xs py-3.5 rounded-xl transition-all duration-300"
                >
                  <Info size={14} />
                  Detail Spesifikasi
                </button>
                <a
                  href={BRAND_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#F59E0B] text-white hover:scale-[1.02] active:scale-95 font-bold text-xs py-3.5 rounded-xl transition-all duration-300 shadow-sm"
                >
                  <ShoppingCart size={14} />
                  Pesan Sekarang
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* COMPARISON CARDS SECTION: Mana Favorit Anda? */}
        <div className="mt-28" id="comparison">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#F59E0B] tracking-widest font-sans uppercase">
              Komparasi Spesifikasi
            </span>
            <h3 className="text-2xl sm:text-3xl font-sans font-black text-[#111827] tracking-tight mt-2 mb-3">
              Mana Favorit Anda?
            </h3>
            <p className="font-sans text-sm text-[#6B7280]">
              Bandingkan detail dan karakteristik masing-masing varian untuk pilihan selera Anda.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto bg-[#F8FAFC] rounded-[24px] border border-[#E5E7EB] p-6 sm:p-10"
          >
            {/* Table Header with Vector Eggs illustrations */}
            <div className="grid grid-cols-3 gap-4 pb-8 border-b border-[#E5E7EB] items-center text-center">
              <div>{/* Empty cell for attributes column */}</div>
              {/* Original Header Column */}
              <div className="flex flex-col items-center">
                {/* SVG Egg Illustration for Original */}
                <div className="w-16 h-16 rounded-full bg-[#E0F2FE] border-2 border-[#F59E0B]/10 flex items-center justify-center mb-3 shadow-inner relative overflow-hidden group">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#F59E0B] shadow-md flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-white/20 blur-xs" />
                  </div>
                  {/* Blue duck egg shell representation */}
                  <div className="absolute inset-0 bg-[#A5F3FC]/30 rounded-full" />
                </div>
                <h4 className="font-sans font-bold text-xs sm:text-base text-[#111827] uppercase tracking-wide">
                  Original
                </h4>
              </div>

              {/* Smoked Header Column */}
              <div className="flex flex-col items-center">
                {/* SVG Egg Illustration for Smoked */}
                <div className="w-16 h-16 rounded-full bg-[#FEF3C7] border-2 border-[#F59E0B]/10 flex items-center justify-center mb-3 shadow-inner relative overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#F59E0B] shadow-md">
                    <div className="w-4 h-4 rounded-full bg-white/20 blur-xs" />
                  </div>
                  {/* Smoked brown shell representation */}
                  <div className="absolute inset-0 bg-[#D97706]/25 rounded-full" />
                </div>
                <h4 className="font-sans font-bold text-xs sm:text-base text-[#111827] uppercase tracking-wide">
                  Smoked (Asap)
                </h4>
              </div>
            </div>

            {/* Table Body rows */}
            <div className="divide-y divide-[#E5E7EB]">
              {COMPARISONS.map((comp, idx) => (
                <div key={idx} className="grid grid-cols-3 gap-4 py-4 sm:py-5 items-center hover:bg-white/40 transition-colors rounded-lg px-2">
                  <div className="text-left">
                    <span className="font-sans font-bold text-xs sm:text-sm text-[#111827]">
                      {comp.attribute}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="font-sans text-xs sm:text-sm font-medium text-[#6B7280]">
                      {comp.original}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="font-sans text-xs sm:text-sm font-bold text-[#111827]">
                      {comp.smoked}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dynamic Spec Modal Drawer */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#111827]/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-[24px] max-w-lg w-full p-8 relative shadow-2xl border border-[#E5E7EB]"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 p-1.5 text-[#6B7280] hover:text-[#111827] rounded-full hover:bg-slate-100 transition-colors"
              >
                <X size={20} />
              </button>

              <span className="text-[10px] font-extrabold tracking-widest text-[#F59E0B] uppercase mb-2 block">
                KING TELUR SPECIFICATION
              </span>
              <h3 className="font-sans font-black text-2xl text-[#111827] mb-4">
                {selectedProduct.title}
              </h3>

              <div className="aspect-[16/10] bg-[#F8FAFC] rounded-xl flex items-center justify-center border border-[#E5E7EB] overflow-hidden mb-6">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  title={`${selectedProduct.title} Detail Spesifikasi`}
                  loading="lazy"
                  decoding="async"
                  width="480"
                  height="300"
                  className="w-[70%] h-[70%] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h4 className="font-sans font-bold text-sm text-[#111827] mb-3">Detail Deskripsi & Nutrisi:</h4>
              <p className="font-sans text-xs sm:text-sm text-[#6B7280] leading-relaxed mb-6">
                {selectedProduct.id === "original"
                  ? "Telur asin original diolah melalui metode perendaman tradisional menggunakan adonan abu gosok/batu bata merah berkualitas tinggi yang dicampur garam beryodium pilihan. Proses pengasinan membutuhkan waktu inkubasi presisi selama 14 hari untuk menyempurnakan osmosis kadar garam, menghasilkan kuning telur yang berminyak alami dan berpasir (masir) sempurna."
                  : "Telur asin asap kami melalui proses pasca-pengasinan yang istimewa. Setelah matang direbus, telur diletakkan di dalam oven pengasapan khusus selama beberapa jam menggunakan batok kelapa pilihan. Proses pengasapan lambat ini memberikan warna kulit kecokelatan eksklusif, mengurangi kandungan air di putih telur agar teksturnya lebih kenyal, serta memberikan rasa smoky gurih mendalam hingga ke pusat kuning telur."}
              </p>

              <div className="flex gap-4">
                <a
                  href={BRAND_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:scale-[1.02] active:scale-95 text-white font-bold text-xs py-3.5 rounded-xl transition-all duration-300"
                >
                  <ShoppingCart size={14} />
                  Pesan Sekarang via WA
                </a>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="bg-slate-100 hover:bg-slate-200 text-[#111827] font-bold text-xs px-6 py-3.5 rounded-xl transition-all duration-300"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
