import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Search, Calendar, User, Clock, ArrowRight, BookOpen } from "lucide-react";
import { BLOG_POSTS } from "../data/blog";
import { SEOManager } from "../components/SEOManager";
import { getBreadcrumbSchema } from "../data/seoSchemas";

export function BlogIndex() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const categories = useMemo(() => {
    const list = new Set(BLOG_POSTS.map((post) => post.category));
    return ["Semua", ...Array.from(list)];
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "Semua" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Beranda", url: "/" },
    { name: "Blog", url: "/blog" },
  ]);

  return (
    <>
      <SEOManager
        title="Artikel & Edukasi Kuliner Telur Asin | KING TELUR"
        description="Pelajari tips memilih telur asin berkualitas, rahasia penyimpanan agar tahan lama, sains kuliner telur bebek, hingga oleh-oleh khas Sampang Madura."
        canonicalUrl="https://kingtelur.com/blog"
        schema={breadcrumbs}
      />

      <div className="pt-32 pb-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          {/* Header Banner */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#F59E0B] tracking-widest uppercase bg-orange-50 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Pusat Edukasi & Informasi
            </span>
            <h1 className="text-4xl sm:text-5xl font-sans font-black text-[#111827] tracking-tight mb-6">
              Blog King Telur
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#6B7280] leading-relaxed">
              Temukan wawasan gizi, panduan kuliner, tips penyimpanan terbaik, hingga eksplorasi budaya dan oleh-oleh khas Sampang, Madura.
            </p>
          </div>

          {/* Search and Category Filters */}
          <div className="max-w-4xl mx-auto mb-16 flex flex-col md:flex-row gap-6 items-center justify-between" id="blog-filters-section">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] w-5 h-5" />
              <input
                type="text"
                placeholder="Cari artikel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#E5E7EB] rounded-full pl-12 pr-6 py-3 text-sm text-[#111827] focus:outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/10 transition-all shadow-sm"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2.5 justify-center" id="blog-category-pills">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? "bg-[#111827] text-white shadow"
                      : "bg-white text-[#6B7280] border border-[#E5E7EB] hover:bg-slate-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-grid">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-[24px] border border-[#E5E7EB] overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-[#F59E0B]/20 transition-all duration-300 group"
                >
                  <div>
                    {/* Cover Image */}
                    <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="absolute top-4 left-4 bg-[#F59E0B] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>

                    {/* Metadata */}
                    <div className="p-6 pb-0">
                      <div className="flex items-center gap-4 text-[11px] text-[#6B7280] font-medium mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="font-sans font-black text-xl text-[#111827] mb-3 group-hover:text-[#F59E0B] transition-colors line-clamp-2">
                        <Link to={`/blog/${post.slug}`} className="focus:outline-none">
                          {post.title}
                        </Link>
                      </h2>

                      {/* Excerpt */}
                      <p className="font-sans text-[#6B7280] text-sm leading-relaxed line-clamp-3 mb-6">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Read More Footer Link */}
                  <div className="p-6 pt-0 border-t border-[#F1F5F9] mt-auto">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-extrabold text-[#111827] group-hover:text-[#F59E0B] transition-colors mt-4"
                    >
                      Baca Selengkapnya
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-[24px] border border-[#E5E7EB] max-w-xl mx-auto">
              <BookOpen size={48} className="text-[#9CA3AF] mx-auto mb-4" />
              <h3 className="font-sans font-bold text-lg text-[#111827] mb-2">Artikel Tidak Ditemukan</h3>
              <p className="font-sans text-sm text-[#6B7280]">
                Coba gunakan kata kunci pencarian yang lain atau pilih kategori yang berbeda.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
