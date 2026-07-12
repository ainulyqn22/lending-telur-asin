import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { TIMELINE, BRAND_INFO, IMAGES } from "../data";
import { SEOManager } from "../components/SEOManager";
import { getBreadcrumbSchema } from "../data/seoSchemas";
import { Target, Users, Landmark, Egg, ShieldCheck, Heart } from "lucide-react";

export function AboutPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Beranda", url: "/" },
    { name: "Tentang Kami", url: "/tentang" },
  ]);

  const qualities = [
    {
      title: "100% Peternakan Mandiri",
      desc: "Semua telur dipanen langsung dari bebek peternakan terkontrol kami sendiri, memastikan konsistensi kualitas pakan dan tingkat kemasiran terbaik.",
      icon: Egg,
    },
    {
      title: "Tanpa Pengawet Buatan",
      desc: "Menggunakan garam beryodium pilihan sebagai zat pengawet biologis alami melalui osmosis masa inkubasi presisi selama 14 hari.",
      icon: ShieldCheck,
    },
    {
      title: "Hilirisasi Organik",
      desc: "Menghasilkan produk olahan matang bernilai tinggi langsung dari sektor hulu pertanian lokal di Sampang, meningkatkan kontribusi ekonomi lokal.",
      icon: Landmark,
    },
  ];

  return (
    <>
      <SEOManager
        title="Tentang Kami & Sejarah Hilirisasi | KING TELUR"
        description="Pelajari visi King Telur, sejarah peternakan bebek mandiri di Sampang, dan komitmen kami menghadirkan telur asin premium berkualitas tinggi."
        canonicalUrl="https://kingtelur.com/tentang"
        schema={breadcrumbs}
      />

      <div className="pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-bold text-[#F59E0B] tracking-widest uppercase bg-orange-50 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Dedikasi & Perjalanan Kami
            </span>
            <h1 className="text-4xl sm:text-5xl font-sans font-black text-[#111827] tracking-tight mb-6">
              Tentang King Telur
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#6B7280] leading-relaxed">
              Kisah dedikasi mengubah hasil ternak lokal menjadi mahakarya kuliner premium berstandar mutu tinggi.
            </p>
          </div>

          {/* Hero Story Block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24" id="about-story">
            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden border border-[#E5E7EB] shadow-md bg-slate-100">
              <img
                src={IMAGES.story}
                alt="Peternakan Bebek King Telur"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div>
              <h2 className="font-sans font-black text-2xl sm:text-3xl text-[#111827] mb-6">
                Lahir dari Semangat Hilirisasi & Kemandirian Pangan
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#6B7280] leading-relaxed mb-6">
                Didirikan di Buleng, Pengelen, Sampang pada tahun 2024, KING TELUR berawal dari kegelisahan peternak bebek lokal menghadapi melimpahnya hasil telur bebek mentah setiap harinya. Menjual telur mentah sering kali membuat nilai jual terombang-ambing oleh tengkulak.
              </p>
              <p className="font-sans text-sm sm:text-base text-[#6B7280] leading-relaxed mb-8">
                Terinspirasi oleh semangat hilirisasi nasional untuk mengolah bahan mentah menjadi komoditas bernilai tinggi, kami mendirikan dapur pengolahan tradisional berskala higienis. Dengan merumuskan metode pengasinan presisi menggunakan media abu bata merah alami, kami berhasil melahirkan produk telur asin yang masir sempurna, gurih seimbang, dan bebas bau amis.
              </p>
              
              <div className="flex gap-6 items-center" id="about-stats">
                <div>
                  <div className="text-3xl font-black text-[#F59E0B]">2024</div>
                  <div className="text-[10px] text-[#6B7280] font-bold uppercase tracking-wide">Tahun Berdiri</div>
                </div>
                <div className="h-8 w-px bg-[#E5E7EB]" />
                <div>
                  <div className="text-3xl font-black text-[#F59E0B]">100%</div>
                  <div className="text-[10px] text-[#6B7280] font-bold uppercase tracking-wide">Peternakan Sendiri</div>
                </div>
                <div className="h-8 w-px bg-[#E5E7EB]" />
                <div>
                  <div className="text-3xl font-black text-[#F59E0B]">24/7</div>
                  <div className="text-[10px] text-[#6B7280] font-bold uppercase tracking-wide">Kontrol Kualitas</div>
                </div>
              </div>
            </div>
          </div>

          {/* Value Qualities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24" id="about-qualities">
            {qualities.map((q, idx) => (
              <div key={idx} className="bg-[#F8FAFC] rounded-2xl border border-[#E5E7EB] p-8">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-[#F59E0B] mb-6">
                  <q.icon size={20} />
                </div>
                <h3 className="font-sans font-extrabold text-lg text-[#111827] mb-3">{q.title}</h3>
                <p className="font-sans text-sm text-[#6B7280] leading-relaxed">{q.desc}</p>
              </div>
            ))}
          </div>

          {/* Sejarah & Milestones Timeline */}
          <div className="border-t border-[#E5E7EB] pt-24" id="about-timeline-section">
            <div className="text-center max-w-xl mx-auto mb-16">
              <h3 className="text-2xl sm:text-3xl font-sans font-black text-[#111827]">
                Milestones & Garis Waktu
              </h3>
              <p className="font-sans text-sm text-[#6B7280] mt-2">
                Langkah demi langkah komitmen konsisten kami merajut kepercayaan dari butir pertama hingga ratusan pelanggan.
              </p>
            </div>

            <div className="relative border-l border-[#E5E7EB] max-w-3xl mx-auto pl-6 sm:pl-10 space-y-12">
              {TIMELINE.map((time, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node dot */}
                  <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#F59E0B] border-2 border-white group-hover:scale-110 transition-transform shadow-sm" />
                  
                  {/* Timeline Text Content */}
                  <div>
                    <span className="text-xs font-black text-[#F59E0B] uppercase tracking-wider block mb-1">
                      {time.year}
                    </span>
                    <h4 className="font-sans font-bold text-base sm:text-lg text-[#111827] mb-2">
                      {time.title}
                    </h4>
                    <p className="font-sans text-sm text-[#6B7280] leading-relaxed">
                      {time.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
