import { useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Check, Star, ShoppingCart, ArrowLeft, ShieldCheck, Heart, RotateCcw, Award, ChevronRight } from "lucide-react";
import { PRODUCTS, BRAND_INFO } from "../data";
import { SEOManager } from "../components/SEOManager";
import { getProductSchema, getBreadcrumbSchema } from "../data/seoSchemas";

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Handle both params: "telur-asin-original" or "original" or "telur-asin-smoked" or "telur-asin-asap"
  const productId = useMemo(() => {
    if (!id) return "original";
    if (id.includes("asap") || id.includes("smoked")) return "smoked";
    return "original";
  }, [id]);

  const product = useMemo(() => {
    return PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];
  }, [productId]);

  const details = useMemo(() => {
    if (product.id === "original") {
      return {
        price: "Rp 4.000 / butir",
        scientificTitle: "Telur Asin Original Tradisional",
        longDescription:
          "Telur asin original King Telur diolah melalui metode perendaman tradisional menggunakan adonan abu gosok atau batu bata merah berkualitas tinggi yang dicampur garam beryodium pilihan. Proses pengasinan membutuhkan waktu inkubasi presisi selama 14 hari untuk menyempurnakan osmosis kadar garam, menghasilkan kuning telur yang berminyak alami dan berpasir (masir) sempurna.",
        nutrition: [
          { name: "Protein Utama", val: "13.6 gram" },
          { name: "Omega 3 & DHA", val: "Tinggi" },
          { name: "Vitamin B12", val: "Sangat Kaya" },
          { name: "Zat Besi", val: "1.8 mg" },
        ],
        specifications: [
          { name: "Bahan Baku", val: "100% Telur Bebek Segar Pilihan" },
          { name: "Media Pengasinan", val: "Abu Batu Bata Merah alami + Garam" },
          { name: "Masa Inkubasi", val: "14 Hari Presisi" },
          { name: "Tekstur Kuning", val: "Sangat Berpasir (Masir) & Berminyak" },
          { name: "Tekstur Putih", val: "Lembut & Kenyal Alami" },
        ],
      };
    } else {
      return {
        price: "Rp 5.000 / butir",
        scientificTitle: "Telur Asin Asap (Smoked Egg) Premium",
        longDescription:
          "Telur asin asap kami melalui proses pasca-pengasinan yang istimewa. Setelah matang direbus, telur diletakkan di dalam oven pengasapan khusus selama beberapa jam menggunakan batok kelapa pilihan. Proses pengasapan lambat ini memberikan warna kulit kecokelatan eksklusif, mengurangi kandungan air di putih telur agar teksturnya lebih kenyal, serta memberikan rasa smoky gurih mendalam hingga ke pusat kuning telur.",
        nutrition: [
          { name: "Protein Utama", val: "14.2 gram" },
          { name: "Kadar Air", val: "Minim (Lebih Awet)" },
          { name: "Vitamin B12", val: "Sangat Kaya" },
          { name: "Kandungan Lemak", val: "Terkontrol" },
        ],
        specifications: [
          { name: "Bahan Baku", val: "100% Telur Bebek Segar Pilihan" },
          { name: "Media Pengasinan", val: "Abu Batu Bata Merah alami + Garam" },
          { name: "Metode Pematangan", val: "Perebusan dilanjutkan Pengasapan Batok Kelapa" },
          { name: "Durasi Oven Asap", val: "3 - 5 Jam Lambat" },
          { name: "Daya Tahan", val: "21 Hari Suhu Ruang (Tanpa Pengawet)" },
        ],
      };
    }
  }, [product.id]);

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Beranda", url: "/" },
    { name: "Varian Produk", url: "/produk" },
    { name: product.title, url: `/produk/telur-asin-${product.id}` },
  ]);

  const productSchemaObj = getProductSchema(product.id as "original" | "smoked");

  return (
    <>
      <SEOManager
        title={`${product.title} Premium Sampang | KING TELUR`}
        description={`${product.title}: ${product.description} Harga: ${details.price}. Pesan langsung dari peternakan.`}
        canonicalUrl={`https://kingtelur.com/produk/telur-asin-${product.id}`}
        ogImage={`https://kingtelur.com/src/assets/images/salted_egg_${product.id}_...`}
        schema={[breadcrumbs, productSchemaObj]}
      />

      <div className="pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-[#6B7280] mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#111827] transition-colors">Beranda</Link>
            <ChevronRight size={12} />
            <Link to="/produk" className="hover:text-[#111827] transition-colors">Varian Produk</Link>
            <ChevronRight size={12} />
            <span className="text-[#111827]">{product.title}</span>
          </nav>

          {/* Back Trigger */}
          <button
            onClick={() => navigate("/produk")}
            className="inline-flex items-center gap-2 text-xs font-extrabold text-[#6B7280] hover:text-[#111827] transition-colors mb-12 cursor-pointer"
          >
            <ArrowLeft size={14} />
            Kembali ke Katalog
          </button>

          {/* Core Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" id="product-detail-stage">
            {/* Left: Product Visual Image Banner */}
            <div className="lg:col-span-5">
              <div className="relative aspect-square w-full flex items-center justify-center bg-[#F8FAFC] border border-[#E5E7EB] rounded-[32px] overflow-hidden p-8 shadow-sm">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-[85%] h-[85%] object-contain select-none"
                  loading="eager"
                />
                <span className="absolute top-6 left-6 bg-[#111827] text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
                  {product.badge}
                </span>
              </div>
            </div>

            {/* Right: Technical Details & Ordering Panel */}
            <div className="lg:col-span-7">
              <div className="mb-8">
                <span className="text-xs font-bold text-[#F59E0B] tracking-widest uppercase block mb-2">
                  {details.scientificTitle}
                </span>
                <h1 className="text-3xl sm:text-4xl font-sans font-black text-[#111827] tracking-tight mb-4">
                  {product.title}
                </h1>

                {/* Rating Bar */}
                <div className="flex items-center gap-2 mb-4" id="rating-bar">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={16} className="fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#111827]">5.0</span>
                  <span className="text-xs text-[#6B7280] border-l border-[#E5E7EB] pl-2">24 Ulasan Pelanggan</span>
                </div>

                {/* Price Display */}
                <div className="text-2xl font-sans font-black text-[#F59E0B] mb-6">
                  {details.price}
                </div>

                <p className="font-sans text-[#6B7280] text-sm leading-relaxed mb-8">
                  {details.longDescription}
                </p>
              </div>

              {/* Specifications Block */}
              <div className="mb-8 border-t border-[#E5E7EB] pt-8">
                <h3 className="font-sans font-extrabold text-[#111827] text-sm uppercase tracking-wider mb-4">
                  Spesifikasi Teknis
                </h3>
                <div className="bg-[#F8FAFC] rounded-2xl border border-[#E5E7EB] divide-y divide-[#E5E7EB]">
                  {details.specifications.map((spec, i) => (
                    <div key={i} className="grid grid-cols-1 sm:grid-cols-3 gap-2 px-5 py-3.5 items-center">
                      <div className="text-xs sm:text-sm font-bold text-[#111827]">{spec.name}</div>
                      <div className="sm:col-span-2 text-xs sm:text-sm text-[#6B7280]">{spec.val}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nutritional Highlights */}
              <div className="mb-10">
                <h3 className="font-sans font-extrabold text-[#111827] text-sm uppercase tracking-wider mb-4">
                  Kandungan Gizi & Nutrisi
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {details.nutrition.map((nut, i) => (
                    <div key={i} className="bg-orange-50/40 border border-orange-100 rounded-xl p-4 text-center">
                      <div className="text-[10px] text-[#6B7280] font-bold uppercase tracking-wide mb-1">{nut.name}</div>
                      <div className="text-xs sm:text-sm font-extrabold text-[#111827]">{nut.val}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Ordering Call To Actions */}
              <div className="flex flex-col sm:flex-row gap-4 border-t border-[#E5E7EB] pt-8" id="product-detail-actions">
                <a
                  href={BRAND_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:scale-[1.02] active:scale-95 text-white font-bold text-xs py-4 rounded-xl transition-all shadow-md"
                >
                  <ShoppingCart size={15} />
                  Pesan via WhatsApp Sekarang
                </a>
                <button
                  onClick={() => navigate("/kontak")}
                  className="bg-slate-100 hover:bg-slate-200 text-[#111827] font-bold text-xs px-8 py-4 rounded-xl transition-all"
                >
                  Kunjungi Rumah Produksi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
