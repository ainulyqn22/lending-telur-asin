import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, ShoppingCart, Info, Star } from "lucide-react";
import { PRODUCTS, BRAND_INFO } from "../data";
import { SEOManager } from "../components/SEOManager";
import { getBreadcrumbSchema } from "../data/seoSchemas";

export function ProductIndex() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Beranda", url: "/" },
    { name: "Varian Produk", url: "/produk" },
  ]);

  return (
    <>
      <SEOManager
        title="Varian Produk Telur Asin Premium Sampang | KING TELUR"
        description="Pilih varian terbaik King Telur: Telur Asin Original dengan rasa gurih masir berminyak alami atau Telur Asin Asap dengan aroma smoky batok kelapa."
        canonicalUrl="https://kingtelur.com/produk"
        schema={breadcrumbs}
      />

      <div className="pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-bold text-[#F59E0B] tracking-widest uppercase bg-orange-50 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Katalog Premium Khas Madura
            </span>
            <h1 className="text-4xl sm:text-5xl font-sans font-black text-[#111827] tracking-tight mb-6">
              Varian King Telur
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#6B7280] leading-relaxed">
              Dua mahakarya kuliner autentik yang diproduksi secara bersih dan presisi sejak dari peternakan bebek mandiri kami di Sampang.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto" id="product-index-grid">
            {PRODUCTS.map((product) => {
              const detailPath = `/produk/telur-asin-${product.id}`;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-[#F8FAFC] rounded-[32px] border border-[#E5E7EB] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:bg-white group"
                >
                  <div>
                    {/* Badge header */}
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-black bg-white border border-[#E5E7EB] px-3 py-1.5 rounded-full text-[#6B7280]">
                        {product.id.toUpperCase()}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <Star size={13} className="fill-[#F59E0B] text-[#F59E0B]" />
                        <span className="text-xs font-bold text-[#111827]">5.0 (Review)</span>
                      </div>
                    </div>

                    {/* Image Stage */}
                    <div className="relative aspect-[4/3] w-full flex items-center justify-center bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden mb-8 group-hover:scale-[1.01] transition-transform duration-500">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-[80%] h-[80%] object-contain select-none transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    {/* Title */}
                    <h2 className="font-sans font-black text-2xl sm:text-3xl text-[#111827] mb-4">
                      {product.title}
                    </h2>

                    {/* Description */}
                    <p className="font-sans text-[#6B7280] text-sm leading-relaxed mb-8">
                      {product.description}
                    </p>

                    {/* Features list */}
                    <ul className="flex flex-col gap-3 mb-10">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#10B981]/10 flex items-center justify-center text-[#10B981] mt-0.5 shrink-0">
                            <Check size={12} />
                          </div>
                          <span className="font-sans text-xs sm:text-sm font-semibold text-[#6B7280]">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to={detailPath}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-[#111827] hover:text-white text-[#111827] border border-[#E5E7EB] font-bold text-xs py-3.5 rounded-xl transition-all duration-300"
                    >
                      <Info size={14} />
                      Detail Lengkap
                    </Link>
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
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
