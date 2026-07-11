export interface Product {
  id: string;
  badge: string;
  title: string;
  image: string;
  description: string;
  features: string[];
  price?: string;
  tagline?: string;
}

export const BRAND_INFO = {
  name: "KING TELUR",
  tagline: "Satu Telur, Sejuta Rasa, Kualitas Tiada Dua.",
  address: "Buleng - Pengelen - Sampang",
  founded: 2024,
  whatsapp: "0881080171883",
  phone: "087755324488",
  whatsappLink: "https://wa.me/62881080171883?text=Halo%20King%20Telur%2C%20saya%20ingin%20memesan%20telur%20asin%20premium%20Anda.",
  phoneLink: "tel:+6287755324488",
  whatsappDisplay: "0881-0801-71883",
  phoneDisplay: "0877-5532-4488",
};

export const IMAGES = {
  logo: "/src/assets/images/king_telur_logo_1783782954859.jpg",
  original: "/src/assets/images/salted_egg_original_1783782970737.jpg",
  smoked: "/src/assets/images/salted_egg_smoked_1783782988441.jpg",
  story: "/src/assets/images/king_telur_farm_1783783132854.jpg",
};

export const BADGES = [
  "✓ Berdiri sejak 2024",
  "✓ Peternakan Sendiri",
  "✓ Higienis",
  "✓ Kualitas Premium",
];

export const TIMELINE = [
  {
    year: "2024",
    title: "Awal Mula Peternakan",
    description: "Merasa bingung menjual hasil ternak bebek yang melimpah setiap harinya.",
  },
  {
    year: "Hilirisasi",
    title: "Semangat Hilirisasi",
    description: "Terinspirasi semangat hilirisasi untuk mengolah bahan mentah menjadi produk bernilai tinggi.",
  },
  {
    year: "Hari ke-1",
    title: "Tantangan Pertama",
    description: "Hari pertama menjajakan telur asin hasil olahan perdana, belum laku terjual.",
  },
  {
    year: "Hari ke-2",
    title: "Langkah Kecil",
    description: "Hari kedua membuahkan hasil dengan terjualnya 3 butir telur asin pertama kami.",
  },
  {
    year: "Konsistensi",
    title: "Peningkatan Kualitas",
    description: "Terus melakukan evaluasi resep pengasinan tradisonal untuk menyempurnakan cita rasa.",
  },
  {
    year: "Kini",
    title: "Kepercayaan Pelanggan",
    description: "Kini dipercaya oleh ratusan keluarga, warung makan, UMKM, dan pecinta kuliner di Sampang.",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "original",
    badge: "BEST SELLER",
    title: "Telur Asin Original",
    image: IMAGES.original,
    description: "Rasa gurih yang autentik dari proses pengasinan tradisional menggunakan telur bebek pilihan segar peternakan sendiri.",
    features: [
      "Gurih Tradisional Alami",
      "Kuning Telur Masir & Berminyak",
      "Tanpa Perisa Buatan",
      "Cocok untuk Konsumsi Harian",
      "Harga Lebih Terjangkau",
    ],
  },
  {
    id: "smoked",
    badge: "PREMIUM",
    title: "Telur Asin Asap",
    image: IMAGES.smoked,
    description: "Perpaduan telur asin premium pilihan dengan proses pengasapan khusus menghasilkan aroma smoky yang khas dan tekstur padat masir.",
    features: [
      "Aroma Smoky yang Kaya",
      "Tekstur Kuning Lebih Padat",
      "Cita Rasa Mewah & Premium",
      "Sangat Cocok untuk Oleh-Oleh",
      "Pilihan Terbaik untuk Restoran",
    ],
  },
];

export const COMPARISONS = [
  { attribute: "Rasa Utama", original: "Gurih Tradisional", smoked: "Gurih Smoky" },
  { attribute: "Aroma", original: "Aroma Klasik Alami", smoked: "Aroma Asap Khas (Smoky)" },
  { attribute: "Karakter Tekstur", original: "Lembut & Berminyak", smoked: "Lebih Padat & Intens" },
  { attribute: "Rekomendasi", original: "Konsumsi Harian & Lauk", smoked: "Hidangan Premium & Oleh-Oleh" },
  { attribute: "Status", original: "Best Seller", smoked: "Signature Product" },
  { attribute: "Harga", original: "Lebih Terjangkau", smoked: "Lebih Eksklusif" },
];

export const WHY_CHOOSE_US = [
  {
    title: "Peternakan Sendiri",
    description: "Pakan berkualitas terkontrol menghasilkan telur bebek dengan kandungan nutrisi optimal dan kuning telur orange alami.",
    iconName: "Egg",
  },
  {
    title: "Sangat Higienis",
    description: "Melalui proses pencucian ganda dan sterilisasi suhu sebelum dipacking untuk menjamin kebersihan maksimal.",
    iconName: "ShieldCheck",
  },
  {
    title: "Quality Control",
    description: "Setiap butir telur asin diteropong (candling) satu per satu untuk memastikan rongga udara kecil dan tidak retak.",
    iconName: "CheckCircle",
  },
  {
    title: "Rasa Konsisten",
    description: "Menggunakan racikan garam dan batu bata dengan takaran presisi serta masa inkubasi tepat demi rasa gurih yang stabil.",
    iconName: "RotateCcw",
  },
  {
    title: "Kemasan Aman",
    description: "Kemasan khusus boks tahan benturan dengan pembungkus pelindung tebal untuk pengiriman dalam dan luar kota.",
    iconName: "Box",
  },
  {
    title: "Harga Kompetitif",
    description: "Kualitas premium kelas internasional dengan harga ramah produsen langsung karena rantai pasok mandiri.",
    iconName: "TrendingDown",
  },
];

export const SERVICES = [
  { title: "Retail", description: "Pembelian satuan aman bergaransi untuk keluarga.", iconName: "ShoppingBag" },
  { title: "Grosir", description: "Harga spesial untuk pembelian partai besar dengan pengiriman cepat.", iconName: "Layers" },
  { title: "Restoran", description: "Kemitraan pasokan terjadwal untuk menjamin ketersediaan bahan baku.", iconName: "Utensils" },
  { title: "UMKM Kuliner", description: "Dukungan pasokan telur asin masir untuk meningkatkan nilai jual masakan Anda.", iconName: "Briefcase" },
  { title: "Reseller Resmi", description: "Kesempatan bisnis menjanjikan dengan margin keuntungan yang menarik.", iconName: "Users" },
];

export const TESTIMONIALS = [
  {
    rating: 5,
    quote: "Kuning telurnya benar-benar masir, berminyak, dan gurihnya pas sekali. Tidak bikin enek. Sekarang jadi menu andalan wajib di warung kami.",
    name: "Bu Sari",
    role: "Pemilik Warung Nasi Sampang",
  },
  {
    rating: 5,
    quote: "Anak-anak saya sangat suka telur asin originalnya. Putihnya bersih dan rasanya mantap. Telur asin asapnya juga luar biasa wangi asapnya!",
    name: "Pak Budi",
    role: "Ibu Rumah Tangga & Pecinta Kuliner",
  },
  {
    rating: 5,
    quote: "Untuk oleh-oleh keluar kota, telur asin asap King Telur juaranya. Kemasannya sangat premium, rapi, aman tidak gampang pecah. Sukses terus!",
    name: "Mbak Nia",
    role: "Pecinta Kuliner & Traveller",
  },
];
