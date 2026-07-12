import React, { useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Calendar, User, Clock, ArrowLeft, Share2, ChevronRight, MessageSquare, Copy, Check } from "lucide-react";
import { BLOG_POSTS } from "../data/blog";
import { SEOManager } from "../components/SEOManager";
import { getBreadcrumbSchema } from "../data/seoSchemas";

export function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const post = useMemo(() => {
    return BLOG_POSTS.find((p) => p.slug === slug);
  }, [slug]);

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);
  }, [post]);

  if (!post) {
    return (
      <div className="pt-40 pb-24 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-2xl font-sans font-black text-[#111827] mb-4">Artikel Tidak Ditemukan</h1>
        <p className="text-[#6B7280] mb-8">Maaf, artikel yang Anda cari tidak tersedia atau telah dipindahkan.</p>
        <Link to="/blog" className="px-6 py-3 bg-[#F59E0B] text-white rounded-full font-bold text-xs">
          Kembali ke Blog
        </Link>
      </div>
    );
  }

  // A light, secure and fast markdown parser for our specific blog post schema
  const parsedContent = useMemo(() => {
    const blocks = post.content.split("\n\n");
    return blocks.map((block, idx) => {
      const trimmed = block.trim();

      // Heading 2
      if (trimmed.startsWith("## ")) {
        return (
          <h2 key={idx} className="text-2xl sm:text-3xl font-sans font-black text-[#111827] mt-10 mb-4 tracking-tight">
            {trimmed.replace("## ", "")}
          </h2>
        );
      }

      // Heading 3
      if (trimmed.startsWith("### ")) {
        return (
          <h3 key={idx} className="text-xl sm:text-2xl font-sans font-extrabold text-[#111827] mt-8 mb-3">
            {trimmed.replace("### ", "")}
          </h3>
        );
      }

      // Horizontal separator
      if (trimmed === "---") {
        return <hr key={idx} className="my-8 border-t border-[#E5E7EB]" />;
      }

      // Unordered lists
      if (trimmed.startsWith("* ") || trimmed.startsWith("- ") || trimmed.startsWith("• ")) {
        const items = trimmed.split("\n").map((line) => {
          // Remove bullet characters
          const text = line.replace(/^([*\-•]\s+)/, "");
          return parseInlineMarkdown(text);
        });
        return (
          <ul key={idx} className="list-disc list-inside space-y-2.5 my-4 pl-4 font-sans text-sm sm:text-base text-[#6B7280] leading-relaxed">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
      }

      // Ordered lists (numbered)
      if (/^\d+\.\s+/.test(trimmed)) {
        const items = trimmed.split("\n").map((line) => {
          const text = line.replace(/^\d+\.\s+/, "");
          return parseInlineMarkdown(text);
        });
        return (
          <ol key={idx} className="list-decimal list-inside space-y-2.5 my-4 pl-4 font-sans text-sm sm:text-base text-[#6B7280] leading-relaxed">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        );
      }

      // Markdown Table Parser
      if (trimmed.startsWith("|")) {
        const lines = trimmed.split("\n").filter((line) => line.trim() !== "");
        const rows = lines.map((line) =>
          line
            .split("|")
            .map((cell) => cell.trim())
            .filter((cell, i) => i > 0 && i < line.split("|").length - 1)
        );

        // Skip divider line (e.g. | :--- | :--- |)
        const contentRows = rows.filter((row) => !row.every((cell) => cell.startsWith(":") || cell.startsWith("-")));

        const headers = contentRows[0];
        const bodyRows = contentRows.slice(1);

        return (
          <div key={idx} className="overflow-x-auto my-8 border border-[#E5E7EB] rounded-2xl shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F8FAFC] border-b border-[#E5E7EB]">
                  {headers.map((h, i) => (
                    <th key={i} className="px-6 py-4 font-sans font-bold text-xs sm:text-sm text-[#111827] uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {bodyRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50 transition-colors">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-6 py-4 font-sans text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                        {parseInlineMarkdown(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }

      // Default paragraph block
      return (
        <p key={idx} className="font-sans text-sm sm:text-base text-[#6B7280] leading-relaxed mb-6">
          {parseInlineMarkdown(trimmed)}
        </p>
      );
    });
  }, [post.content]);

  // Handle Copy Link share
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Beranda", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  return (
    <>
      <SEOManager
        title={`${post.title} | KING TELUR`}
        description={post.excerpt}
        canonicalUrl={`https://kingtelur.com/blog/${post.slug}`}
        ogImage={`https://kingtelur.com${post.image}`}
        type="article"
        schema={breadcrumbs}
      />

      <div className="pt-32 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumbs Navigation */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-[#6B7280] mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#111827] transition-colors">Beranda</Link>
            <ChevronRight size={12} />
            <Link to="/blog" className="hover:text-[#111827] transition-colors">Blog</Link>
            <ChevronRight size={12} />
            <span className="text-[#111827] truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
          </nav>

          {/* Back Trigger */}
          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center gap-2 text-xs font-extrabold text-[#6B7280] hover:text-[#111827] transition-colors mb-6 cursor-pointer"
          >
            <ArrowLeft size={14} />
            Kembali ke Daftar Blog
          </button>

          {/* Article Header */}
          <div className="mb-10">
            <span className="text-[10px] font-black bg-amber-50 text-[#F59E0B] border border-[#F59E0B]/10 px-3 py-1.5 rounded-full uppercase tracking-wider block w-fit mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-[#111827] tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            {/* Author Profile Bar */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-[#6B7280] font-medium border-y border-[#E5E7EB] py-4">
              <span className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#111827] flex items-center justify-center font-sans font-black text-[9px] text-white">
                  KT
                </div>
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Main Visual Image Banner */}
          <div className="relative aspect-[16/9] bg-slate-100 rounded-3xl overflow-hidden border border-[#E5E7EB] mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          {/* Render Parsed Content */}
          <div className="prose prose-slate max-w-none mb-16" id="blog-body-container">
            {parsedContent}
          </div>

          {/* Share Block and CTA */}
          <div className="border-y border-[#E5E7EB] py-8 flex flex-col sm:flex-row items-center justify-between gap-6 mb-16">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-[#111827]">Bagikan Artikel:</span>
              <button
                onClick={handleCopyLink}
                className="p-2.5 bg-slate-100 hover:bg-slate-200 text-[#111827] rounded-full transition-colors relative cursor-pointer"
                title="Salin Tautan"
              >
                {copied ? <Check size={14} className="text-[#10B981]" /> : <Copy size={14} />}
              </button>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - https://kingtelur.com/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] rounded-full transition-colors"
                title="Bagikan ke WhatsApp"
              >
                <MessageSquare size={14} className="fill-current" />
              </a>
            </div>

            <a
              href="https://wa.me/62881080171883?text=Halo%20King%20Telur%2C%20saya%20membaca%20artikel%20anda%20dan%20tertarik%20membeli%20telur%20asin."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F59E0B] text-white hover:scale-[1.02] active:scale-95 font-bold text-xs px-6 py-3.5 rounded-xl transition-all shadow-sm"
            >
              Konsultasi Order via WhatsApp
            </a>
          </div>

          {/* Related Articles Carousel */}
          <div className="mt-16 border-t border-[#E5E7EB] pt-12">
            <h3 className="font-sans font-black text-2xl text-[#111827] mb-8">Artikel Terkait</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {relatedPosts.map((rPost) => (
                <div key={rPost.slug} className="group flex flex-col gap-4 border border-[#E5E7EB] rounded-2xl p-4 hover:border-[#F59E0B]/20 transition-all">
                  <div className="relative aspect-[16/10] bg-slate-100 rounded-xl overflow-hidden">
                    <img src={rPost.image} alt={rPost.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-[#F59E0B] uppercase tracking-wider">{rPost.category}</span>
                    <h4 className="font-sans font-bold text-base text-[#111827] group-hover:text-[#F59E0B] transition-colors mt-1 mb-2 line-clamp-1">
                      <Link to={`/blog/${rPost.slug}`}>{rPost.title}</Link>
                    </h4>
                    <p className="text-[#6B7280] text-xs line-clamp-2">{rPost.excerpt}</p>
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

// Helper to convert bold tags "**text**" inside strings to React elements safely
function parseInlineMarkdown(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold text-[#111827]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}
