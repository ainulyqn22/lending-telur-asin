import { BRAND_INFO } from "../data";

const BASE_URL = "https://kingtelur.com";

// 1. WebSite Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": BRAND_INFO.name,
  "url": BASE_URL,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${BASE_URL}/blog?search={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

// 2. Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": BRAND_INFO.name,
  "url": BASE_URL,
  "logo": `${BASE_URL}/src/assets/images/king_telur_logo_1783782954859.jpg`,
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+62-881-0801-71883",
      "contactType": "sales",
      "areaServed": "ID",
      "availableLanguage": ["id", "en"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+62-877-5532-4488",
      "contactType": "customer service",
      "areaServed": "ID",
      "availableLanguage": ["id", "en"]
    }
  ],
  "sameAs": [
    "https://maps.app.goo.gl/Go9YvSC7cnet9cGt7?g_st=awb"
  ]
};

// 3. LocalBusiness Schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  "@id": `${BASE_URL}/#localbusiness`,
  "name": BRAND_INFO.name,
  "image": `${BASE_URL}/src/assets/images/king_telur_logo_1783782954859.jpg`,
  "url": BASE_URL,
  "telephone": `+62881080171883`,
  "priceRange": "$$",
  "servesCuisine": "Indonesian, Salted Eggs",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Buleng, Pengelen",
    "addressLocality": "Sampang",
    "addressRegion": "Madura, Jawa Timur",
    "postalCode": "69213",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-7.195028",
    "longitude": "113.250556"
  },
  "hasMap": "https://maps.app.goo.gl/Go9YvSC7cnet9cGt7?g_st=awb",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "07:00",
    "closes": "21:00"
  }
};

// 4. Product Schema Generator
export function getProductSchema(productId: "original" | "smoked") {
  const isOriginal = productId === "original";
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": isOriginal ? "Telur Asin Original King Telur" : "Telur Asin Asap King Telur",
    "image": isOriginal 
      ? `${BASE_URL}/src/assets/images/salted_egg_original_1783782970737.jpg`
      : `${BASE_URL}/src/assets/images/salted_egg_smoked_1783782988441.jpg`,
    "description": isOriginal
      ? "Telur asin original premium khas Sampang, diolah secara tradisional dengan abu bata merah alami, menghasilkan kuning telur orange pekat yang masir, gurih, dan berminyak alami."
      : "Telur asin asap premium khas Sampang, diproses melalui pengasapan alami batok kelapa pilihan selama berjam-jam, menghasilkan tekstur padat masir dengan aroma smoky harum eksklusif.",
    "brand": {
      "@type": "Brand",
      "name": "KING TELUR"
    },
    "category": "Food, Beverages & Tobacco > Food Items > Dairy Products > Eggs",
    "offers": {
      "@type": "Offer",
      "url": `${BASE_URL}/produk/telur-asin-${productId}`,
      "priceCurrency": "IDR",
      "price": isOriginal ? "4000" : "5000",
      "priceValidUntil": "2027-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "KING TELUR"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "24",
      "bestRating": "5",
      "worstRating": "5"
    }
  };
}

// 5. Breadcrumb Generator
export function getBreadcrumbSchema(links: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": links.map((link, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": link.name,
      "item": `${BASE_URL}${link.url}`
    }))
  };
}

// 6. FAQ Page Schema (Contains all 10 FAQs requested in the PRD)
export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Apa perbedaan Telur Asin Original dan Asap?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Telur Asin Original direbus biasa dengan rasa gurih klasik dan kuning telur sangat basah berminyak. Sedangkan Telur Asin Asap dikukus lalu diasap dengan batok kelapa pilihan berjam-jam, menghasilkan aroma harum kayu (smoky) yang khas, tekstur putih telur kenyal tidak berair, dan kuning telur lebih kesat padat masir."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa lama telur asin King Telur tahan disimpan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pada suhu ruangan, Telur Asin Original tahan hingga 10-14 hari, sedangkan Telur Asin Asap tahan hingga 21 hari karena kadar airnya minim. Jika disimpan di kulkas (bukan freezer), keduanya bisa bertahan prima hingga 1-2 bulan."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah King Telur menggunakan bahan pengawet kimia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sama sekali tidak. King Telur menggunakan garam beryodium bermutu tinggi sebagai satu-satunya bahan pengawet alami. Sifat osmotik garam mengikat molekul air sehingga menghambat pertumbuhan bakteri patogen secara aman dan sehat."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana cara penyimpanan telur asin yang benar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simpan di tempat kering dan sejuk terhindar dari panas matahari. Jika ingin disimpan lama, masukkan ke wadah tertutup di dalam kulkas (rak bagian tengah, jangan pintu kulkas agar suhunya stabil). Jangan membekukannya di freezer karena akan merusak tekstur kuning telur menjadi kenyal seperti karet."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah bisa dikirim ke luar kota atau luar pulau?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sangat bisa! Kami berpengalaman mengirim ke seluruh Indonesia. Kami menggunakan boks kardus bergelombang tebal, ditambah sekat pelindung dan bubble wrap tebal di setiap butir telur untuk meminimalisir risiko retak selama ekspedisi."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah King Telur menerima pesanan grosir untuk katering, restoran, atau soto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya, kami melayani kemitraan pasokan skala besar (grosir) secara terjadwal untuk menjamin ketersediaan bahan baku restoran, katering, atau warung makan dengan penawaran harga khusus yang sangat kompetitif."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana cara bergabung menjadi reseller resmi King Telur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Anda bisa langsung menghubungi Admin WA kami di nomor +62881080171883 untuk mendapatkan skema harga kemitraan agen/reseller dengan margin keuntungan yang sangat menarik serta jaminan kualitas suplai konsisten."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana proses produksi King Telur dilakukan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Proses kami sangat ketat: pembersihan ganda telur bebek segar, pembungkusan dengan adonan garam abu bata merah pilihan, inkubasi presisi selama 14 hari, penyaringan telur pecah dengan teropong cahaya (candling), perebusan higienis, dan pengasapan khusus batok kelapa (untuk varian asap)."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah menggunakan telur bebek dari peternakan sendiri?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Betul sekali. Kami mengandalkan bebek petelur dari peternakan mandiri kami di Sampang. Pakan bebek kami kontrol dengan kandungan nutrisi seimbang untuk menjamin kuning telur berwarna orange kemerahan pekat dan padat gizi alami."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana cara pemesanan dan metode pembayarannya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pemesanan sangat mudah melalui tombol pesan WhatsApp yang tersedia di website (+62881080171883). Pembayaran dapat ditransfer via rekening bank resmi kami atau Cash on Delivery (COD) khusus wilayah Sampang."
      }
    }
  ]
};
