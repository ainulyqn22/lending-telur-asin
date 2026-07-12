import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { BRAND_INFO } from "../data";
import { SEOManager } from "../components/SEOManager";
import { getBreadcrumbSchema } from "../data/seoSchemas";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "Retail / Pembelian Biasa",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert("Harap lengkapi semua isian sebelum mengirim.");
      return;
    }

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({ name: "", phone: "", subject: "Retail / Pembelian Biasa", message: "" });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Beranda", url: "/" },
    { name: "Hubungi Kami", url: "/kontak" },
  ]);

  return (
    <>
      <SEOManager
        title="Hubungi Kami & Alamat Peternakan | KING TELUR"
        description="Hubungi King Telur Sampang di +62881080171883 atau kunjungi langsung kandang bebek kami di Buleng - Pengelen - Sampang untuk pemesanan eceran dan grosir."
        canonicalUrl="https://kingtelur.com/kontak"
        schema={breadcrumbs}
      />

      <div className="pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-bold text-[#F59E0B] tracking-widest uppercase bg-orange-50 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Lokasi & Kemitraan
            </span>
            <h1 className="text-4xl sm:text-5xl font-sans font-black text-[#111827] tracking-tight mb-6">
              Hubungi Kami
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#6B7280] leading-relaxed">
              Kami siap melayani kebutuhan telur asin harian Anda, pasokan katering restoran, serta program kemitraan reseller resmi.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" id="contact-stage">
            {/* Left Column: Local Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#F8FAFC] rounded-3xl border border-[#E5E7EB] p-8 space-y-8">
                <h2 className="font-sans font-black text-xl text-[#111827] mb-6 border-b border-[#E5E7EB] pb-4">
                  Informasi Kontak Resmi
                </h2>

                {/* Address Item */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#F59E0B] mt-0.5 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm text-[#111827] mb-1">Alamat Rumah Produksi</h3>
                    <p className="font-sans text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                      Buleng, Desa Pengelen, Kabupaten Sampang, Madura, Jawa Timur, Indonesia
                    </p>
                    <a
                      href="https://maps.app.goo.gl/Go9YvSC7cnet9cGt7?g_st=awb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F59E0B] hover:underline mt-2.5"
                    >
                      Buka Petunjuk Arah di Google Maps
                    </a>
                  </div>
                </div>

                {/* Telephone Item */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#F59E0B] mt-0.5 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm text-[#111827] mb-1">Nomor Telepon & WA</h3>
                    <div className="space-y-1 font-sans text-xs sm:text-sm text-[#6B7280]">
                      <div>Admin Order WA: <a href="https://wa.me/62881080171883" className="hover:text-[#F59E0B] font-bold underline">+62 881-0801-71883</a></div>
                      <div>Layanan Pelanggan: <a href="tel:+6287755324488" className="hover:text-[#F59E0B] font-bold underline">+62 877-5532-4488</a></div>
                    </div>
                  </div>
                </div>

                {/* Email Item */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#F59E0B] mt-0.5 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm text-[#111827] mb-1">Email Resmi</h3>
                    <p className="font-sans text-xs sm:text-sm text-[#6B7280]">
                      info@kingtelur.com
                    </p>
                  </div>
                </div>

                {/* Operational Hours */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#F59E0B] mt-0.5 shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm text-[#111827] mb-1">Jam Operasional</h3>
                    <p className="font-sans text-xs sm:text-sm text-[#6B7280]">
                      Senin - Minggu: 07:00 - 21:00 WIB
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Maps Redirect Banner card */}
              <div className="bg-[#111827] text-white rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between aspect-[16/9]" id="gmaps-banner">
                <div>
                  <h3 className="font-sans font-black text-lg mb-2">Lokasi Terdaftar Resmi</h3>
                  <p className="text-[#9CA3AF] text-xs leading-relaxed">
                    Peternakan dan tempat produksi kami sudah terdaftar di Google Maps & Google Business Profile secara resmi.
                  </p>
                </div>
                <a
                  href="https://maps.app.goo.gl/Go9YvSC7cnet9cGt7?g_st=awb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 bg-[#F59E0B] text-white hover:scale-[1.01] transition-all font-bold text-xs rounded-xl inline-flex items-center justify-center gap-2"
                >
                  Buka Petunjuk Google Maps
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-[#E5E7EB] rounded-[32px] p-8 sm:p-10 shadow-sm relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      id="contact-form"
                    >
                      <h2 className="font-sans font-black text-2xl text-[#111827] mb-6">
                        Kirimkan Pesan Anda
                      </h2>

                      {/* Name Input */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name-input" className="text-xs font-bold text-[#111827] uppercase tracking-wider">
                          Nama Lengkap
                        </label>
                        <input
                          id="name-input"
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Masukkan nama Anda"
                          className="bg-slate-50 border border-[#E5E7EB] rounded-xl px-5 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/10 transition-all"
                        />
                      </div>

                      {/* Phone Input */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone-input" className="text-xs font-bold text-[#111827] uppercase tracking-wider">
                          Nomor WhatsApp / HP
                        </label>
                        <input
                          id="phone-input"
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Contoh: 0881080171883"
                          className="bg-slate-50 border border-[#E5E7EB] rounded-xl px-5 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/10 transition-all"
                        />
                      </div>

                      {/* Subject Select */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="subject-select" className="text-xs font-bold text-[#111827] uppercase tracking-wider">
                          Kebutuhan Layanan
                        </label>
                        <select
                          id="subject-select"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="bg-slate-50 border border-[#E5E7EB] rounded-xl px-5 py-3.5 text-sm text-[#111827] focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/10 transition-all"
                        >
                          <option value="Retail / Pembelian Biasa">Retail / Pembelian Biasa</option>
                          <option value="Grosir / Partai Besar">Grosir / Partai Besar</option>
                          <option value="Restoran / Mitra Kuliner">Restoran / Mitra Kuliner</option>
                          <option value="Program Reseller Resmi">Program Reseller Resmi</option>
                        </select>
                      </div>

                      {/* Message Input */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="message-input" className="text-xs font-bold text-[#111827] uppercase tracking-wider">
                          Pesan atau Pertanyaan
                        </label>
                        <textarea
                          id="message-input"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tuliskan detail pertanyaan atau pesanan Anda..."
                          className="bg-slate-50 border border-[#E5E7EB] rounded-xl px-5 py-3.5 text-sm text-[#111827] focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/10 transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#111827] text-white font-bold text-xs py-4 rounded-xl hover:bg-black transition-all shadow flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                        id="btn-submit-contact"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <Send size={14} />
                            Kirim Pesan Sekarang
                          </>
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="py-12 text-center"
                      id="contact-form-success"
                    >
                      <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-100">
                        <CheckCircle2 size={32} />
                      </div>
                      <h2 className="font-sans font-black text-2xl text-[#111827] mb-3">Pesan Berhasil Terkirim</h2>
                      <p className="font-sans text-sm text-[#6B7280] max-w-md mx-auto mb-8 leading-relaxed">
                        Terima kasih atas pesan Anda! Tim administrasi King Telur akan segera menindaklanjuti pesan Anda melalui nomor WhatsApp yang Anda cantumkan dalam kurun waktu maksimal 24 jam.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-[#111827] rounded-full font-bold text-xs cursor-pointer"
                      >
                        Kirim Pesan Baru
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
