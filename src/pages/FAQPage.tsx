import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, Search, HelpCircle, MessageSquare } from "lucide-react";
import { SEOManager } from "../components/SEOManager";
import { faqPageSchema } from "../data/seoSchemas";
import { BRAND_INFO } from "../data";

export function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Apa perbedaan Telur Asin Original dan Asap?",
      a: "Telur Asin Original direbus biasa dengan rasa gurih klasik dan kuning telur sangat basah berminyak. Sedangkan Telur Asin Asap dikukus lalu diasap dengan batok kelapa pilihan berjam-jam, menghasilkan aroma harum kayu (smoky) yang khas, tekstur putih telur kenyal tidak berair, dan kuning telur lebih kesat padat masir."
    },
    {
      q: "Berapa lama telur asin King Telur tahan disimpan?",
      a: "Pada suhu ruangan, Telur Asin Original tahan hingga 10-14 hari, sedangkan Telur Asin Asap tahan hingga 21 hari karena kadar airnya minim. Jika disimpan di kulkas (bukan freezer), keduanya bisa bertahan prima hingga 1-2 bulan."
    },
    {
      q: "Apakah King Telur menggunakan bahan pengawet kimia?",
      a: "Sama sekali tidak. King Telur menggunakan garam beryodium bermutu tinggi sebagai satu-satunya bahan pengawet alami. Sifat osmotik garam mengikat molekul air sehingga menghambat pertumbuhan bakteri patogen secara aman dan sehat."
    },
    {
      q: "Bagaimana cara penyimpanan telur asin yang benar?",
      a: "Simpan di tempat kering dan sejuk terhindar dari panas matahari. Jika ingin disimpan lama, masukkan ke wadah tertutup di dalam kulkas (rak bagian tengah, jangan pintu kulkas agar suhunya stabil). Jangan membekukannya di freezer karena akan merusak tekstur kuning telur menjadi kenyal seperti karet."
    },
    {
      q: "Apakah bisa dikirim ke luar kota atau luar pulau?",
      a: "Sangat bisa! Kami berpengalaman mengirim ke seluruh Indonesia. Kami menggunakan boks kardus bergelombang tebal, ditambah sekat pelindung dan bubble wrap tebal di setiap butir telur untuk meminimalisir risiko retak selama ekspedisi."
    },
    {
      q: "Apakah King Telur menerima pesanan grosir untuk katering, restoran, atau soto?",
      a: "Ya, kami melayani kemitraan pasokan skala besar (grosir) secara terjadwal untuk menjamin ketersediaan bahan baku restoran, katering, atau warung makan dengan penawaran harga khusus yang sangat kompetitif."
    },
    {
      q: "Apakah menerima reseller atau keagenan resmi?",
      a: "Tentu saja! Kami sangat menyambut reseller dan agen resmi. Kami menyediakan program kemitraan dengan diskon khusus dan harga direct-peternak untuk memberikan profit margin terbaik bagi bisnis Anda di kota masing-masing."
    },
    {
      q: "Bagaimana proses produksi King Telur dilakukan?",
      a: "Proses kami sangat higienis dan bertahap: pembersihan ganda telur bebek segar, pembungkusan dengan adonan garam abu bata merah pilihan, inkubasi presisi selama 14 hari, penyaringan telur pecah dengan teropong cahaya (candling), perebusan higienis, dan pengasapan khusus batok kelapa (untuk varian asap)."
    },
    {
      q: "Apakah menggunakan telur bebek dari peternakan sendiri?",
      a: "Betul sekali. Semua telur asin diproduksi dari peternakan bebek mandiri kami di Sampang. Pakan bebek dikontrol ketat untuk menghasilkan kuning telur berwarna orange alami, berminyak lezat, dan padat gizi alami."
    },
    {
      q: "Bagaimana cara pemesanan dan metode pembayarannya?",
      a: "Pemesanan sangat mudah melalui tombol pesan WhatsApp yang tersedia di website (+62881080171883). Pembayaran dapat ditransfer via rekening bank resmi kami atau Cash on Delivery (COD) khusus wilayah Sampang."
    }
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <SEOManager
        title="Pertanyaan Sering Diajukan (FAQ) | KING TELUR"
        description="Punya pertanyaan tentang daya tahan telur asin, cara pemesanan grosir, program reseller, atau proses produksi? Temukan jawabannya di FAQ resmi King Telur."
        canonicalUrl="https://kingtelur.com/faq"
        schema={faqPageSchema}
      />

      <div className="pt-32 pb-24 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[#F59E0B] tracking-widest uppercase bg-orange-50 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Pusat Bantuan
            </span>
            <h1 className="text-4xl font-sans font-black text-[#111827] tracking-tight mb-4">
              Pertanyaan Sering Diajukan
            </h1>
            <p className="font-sans text-sm sm:text-base text-[#6B7280]">
              Semua jawaban lengkap mengenai produk, keawetan, metode pengiriman, hingga kemitraan reseller King Telur.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative mb-12 max-w-xl mx-auto" id="faq-search-box">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] w-5 h-5" />
            <input
              type="text"
              placeholder="Ketik pertanyaan atau kata kunci..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#E5E7EB] rounded-full pl-12 pr-6 py-3.5 text-sm text-[#111827] focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/10 transition-all shadow-sm"
              aria-label="Cari FAQ"
            />
          </div>

          {/* Accordion List */}
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4 mb-16" id="faq-accordion-list" role="tablist">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden hover:border-[#F59E0B]/20 transition-all duration-300"
                  >
                    {/* Header Trigger */}
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:bg-slate-50"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${idx}`}
                      id={`faq-btn-${idx}`}
                      role="tab"
                    >
                      <span className="font-sans font-extrabold text-sm sm:text-base text-[#111827]">
                        {faq.q}
                      </span>
                      <div className="p-1 rounded-full bg-slate-100 text-[#6B7280]">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                    </button>

                    {/* Answer Area */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${idx}`}
                          role="tabpanel"
                          aria-labelledby={`faq-btn-${idx}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6 pt-2 font-sans text-xs sm:text-sm text-[#6B7280] leading-relaxed border-t border-slate-100 bg-slate-50/50">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#E5E7EB] mb-16">
              <HelpCircle size={40} className="text-[#9CA3AF] mx-auto mb-3" />
              <h3 className="font-sans font-bold text-base text-[#111827] mb-1">Pencarian Tidak Ditemukan</h3>
              <p className="font-sans text-xs text-[#6B7280]">
                Coba ketik kata kunci yang lain atau hubungi layanan pelanggan kami.
              </p>
            </div>
          )}

          {/* Secondary CTA Card */}
          <div className="bg-[#111827] text-white rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden" id="faq-cta-card">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
            <h2 className="text-xl sm:text-2xl font-sans font-black mb-3">
              Punya Pertanyaan Lain yang Belum Terjawab?
            </h2>
            <p className="text-[#9CA3AF] text-xs sm:text-sm max-w-lg mx-auto mb-6 leading-relaxed">
              Tim support King Telur siap membantu Anda dengan ramah untuk menjawab pertanyaan grosir, katering, atau reseller.
            </p>
            <a
              href={BRAND_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F59E0B] text-white hover:scale-[1.02] active:scale-95 font-bold text-xs px-6 py-3.5 rounded-xl transition-all"
            >
              <MessageSquare size={16} className="fill-current" />
              Tanyakan via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
