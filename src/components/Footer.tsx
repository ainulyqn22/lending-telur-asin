import React from "react";
import { motion } from "motion/react";
import { MapPin, Phone, MessageSquare, ArrowUpRight, Egg } from "lucide-react";
import { BRAND_INFO, IMAGES } from "../data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111827] text-white pt-20 pb-12 relative overflow-hidden" id="footer">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10 relative z-10">
        {/* Column 1: Brand details and statement */}
        <div className="md:col-span-5 flex flex-col gap-6" id="footer-col-1">
          <a href="#" onClick={handleScrollToTop} className="flex items-center gap-3 focus:outline-none">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-white/20 bg-white flex items-center justify-center">
              <img
                src={IMAGES.logo}
                alt="KT Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-black text-base tracking-wider text-white">
                KING <span className="text-[#F59E0B]">TELUR</span>
              </span>
              <span className="text-[8px] text-white/50 tracking-widest font-bold uppercase -mt-1">
                PREMIUM SELECTION
              </span>
            </div>
          </a>

          <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed font-light max-w-sm">
            Menghadirkan kelezatan telur asin masir berkelas internasional langsung dari peternakan kami sendiri di Sampang, Madura. Satu Telur, Sejuta Rasa, Kualitas Tiada Dua.
          </p>

          {/* Map Location Badge */}
          <div className="flex items-start gap-3 mt-2">
            <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
              <MapPin size={16} className="text-[#F59E0B]" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-xs text-white">Rumah Produksi</h4>
              <p className="font-sans text-xs text-white/60 mt-0.5">{BRAND_INFO.address}</p>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="md:col-span-3 flex flex-col gap-5" id="footer-col-2">
          <h4 className="font-sans font-black text-xs uppercase tracking-widest text-[#F59E0B]">
            Navigasi Cepat
          </h4>
          <ul className="flex flex-col gap-3.5 font-sans text-xs sm:text-sm font-light text-white/75">
            <li>
              <a href="#" onClick={handleScrollToTop} className="hover:text-[#F59E0B] transition-colors flex items-center gap-1.5 group">
                Beranda
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
            <li>
              <a href="#tentang" className="hover:text-[#F59E0B] transition-colors flex items-center gap-1.5 group">
                Tentang Kami
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
            <li>
              <a href="#produk" className="hover:text-[#F59E0B] transition-colors flex items-center gap-1.5 group">
                Varian Produk
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
            <li>
              <a href="#keunggulan" className="hover:text-[#F59E0B] transition-colors flex items-center gap-1.5 group">
                Keunggulan
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
            <li>
              <a href="#layanan" className="hover:text-[#F59E0B] transition-colors flex items-center gap-1.5 group">
                Kemitraan
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact & Direct Actions */}
        <div className="md:col-span-4 flex flex-col gap-5" id="footer-col-3">
          <h4 className="font-sans font-black text-xs uppercase tracking-widest text-[#F59E0B]">
            Hubungi Kami
          </h4>
          <p className="font-sans text-xs text-white/60 font-light leading-relaxed mb-1">
            Ada pertanyaan tentang pemesanan grosir, restoran, atau kemitraan reseller resmi? Hubungi kontak di bawah ini.
          </p>

          <div className="flex flex-col gap-3.5" id="footer-contacts">
            {/* WhatsApp Contact */}
            <a
              href={BRAND_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 p-3 rounded-2xl transition-all duration-300 group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                <MessageSquare size={16} className="fill-current" />
              </div>
              <div className="text-left">
                <span className="font-sans text-[10px] text-white/40 block leading-none">WhatsApp Order</span>
                <span className="font-sans font-bold text-xs text-white group-hover:text-[#F59E0B] transition-colors mt-1.5 block">
                  {BRAND_INFO.whatsappDisplay}
                </span>
              </div>
            </a>

            {/* Telephone Contact */}
            <a
              href={BRAND_INFO.phoneLink}
              className="flex items-center gap-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 p-3 rounded-2xl transition-all duration-300 group"
            >
              <div className="w-8 h-8 rounded-lg bg-orange-50/10 flex items-center justify-center text-[#F59E0B]">
                <Phone size={16} />
              </div>
              <div className="text-left">
                <span className="font-sans text-[10px] text-white/40 block leading-none">Call Center</span>
                <span className="font-sans font-bold text-xs text-white group-hover:text-[#F59E0B] transition-colors mt-1.5 block">
                  {BRAND_INFO.phoneDisplay}
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-white/40 font-light">
        <p id="footer-copyright">
          &copy; {BRAND_INFO.founded} - {currentYear} {BRAND_INFO.name}. Hak Cipta Dilindungi Undang-Undang.
        </p>
        <p className="flex items-center gap-1.5">
          Premium Salted Eggs Handcrafted in Madura
          <Egg size={10} className="text-[#F59E0B]" />
        </p>
      </div>
    </footer>
  );
}
