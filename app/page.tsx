import Link from "next/link";
import {
  TruckIcon,
  ClockIcon,
  MapPinIcon,
  ShoppingCartIcon,
  ArrowRightIcon,
  StarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';


// 25103002685
// cs@kai.id

const sampleLocations = [
  {
    id: '1',
    name: 'Candi Borobudur',
    description: 'Candi Buddha terbesar di dunia dan situs warisan dunia UNESCO yang memukau dengan arsitektur kuno yang megah.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&auto=format',
    rating: 4.8,
    category: 'Sejarah & Budaya',
    highlights: ['UNESCO World Heritage', 'Sunrise Tour', 'Arsitektur Kuno', 'Spiritual Journey'],
    activities: ['Photography', 'Guided Tour', 'Meditation', 'Cultural Learning'],
    bestTime: 'Pagi (05:00-08:00)',
    duration: '2-3 jam'
  },
  {
    id: '2',
    name: 'Pantai Kuta Bali',
    description: 'Pantai terkenal dengan pasir putih dan sunset yang menakjubkan, surga bagi para peselancar dan pecinta pantai.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop&auto=format',
    rating: 4.6,
    category: 'Pantai & Alam',
    highlights: ['Sunset Point', 'Surfing Spot', 'Beach Club', 'Water Sports'],
    activities: ['Surfing', 'Beach Walk', 'Sunset Watching', 'Water Sports'],
    bestTime: 'Sore (16:00-19:00)',
    duration: '3-4 jam'
  },
  {
    id: '3',
    name: 'Malioboro Street',
    description: 'Jalan legendaris Yogyakarta dengan berbagai toko, kuliner khas, dan pertunjukan seni jalanan yang meriah.',
    image: 'https://images.unsplash.com/photo-1555400082-8c5cd5b3c3d1?w=400&h=250&fit=crop&auto=format',
    rating: 4.5,
    category: 'Wisata Kota',
    highlights: ['Shopping Street', 'Street Food', 'Cultural Shows', 'Historic Area'],
    activities: ['Shopping', 'Culinary Tour', 'Street Performance', 'Photography'],
    bestTime: 'Malam (19:00-22:00)',
    duration: '2-4 jam'
  },
  {
    id: '4',
    name: 'Kawah Ijen',
    description: 'Kawah vulkanik dengan fenomena blue fire yang langka dan pemandangan danau asam yang spektakuler.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop&auto=format',
    rating: 4.9,
    category: 'Alam & Petualangan',
    highlights: ['Blue Fire', 'Sulfur Mining', 'Crater Lake', 'Sunrise View'],
    activities: ['Hiking', 'Blue Fire Tour', 'Photography', 'Sunrise Watching'],
    bestTime: 'Dini Hari (02:00-06:00)',
    duration: '4-6 jam'
  },
  {
    id: '5',
    name: 'Taman Nasional Komodo',
    description: 'Habitat asli komodo dragon dengan keindahan alam yang menakjubkan dan keanekaragaman hayati yang unik.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&auto=format',
    rating: 4.7,
    category: 'Alam & Satwa',
    highlights: ['Komodo Dragon', 'Pink Beach', 'Diving Spot', 'Wildlife Safari'],
    activities: ['Wildlife Watching', 'Snorkeling', 'Island Hopping', 'Trekking'],
    bestTime: 'Pagi (07:00-11:00)',
    duration: 'Full Day'
  },
  {
    id: '6',
    name: 'Danau Toba',
    description: 'Danau vulkanik terbesar di dunia dengan Pulau Samosir di tengahnya, menawarkan keindahan alam yang memukau.',
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=250&fit=crop&auto=format',
    rating: 4.4,
    category: 'Danau & Pegunungan',
    highlights: ['Volcanic Lake', 'Samosir Island', 'Batak Culture', 'Mountain View'],
    activities: ['Boat Tour', 'Cultural Visit', 'Swimming', 'Photography'],
    bestTime: 'Siang (10:00-15:00)',
    duration: '1-2 hari'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-blue-300 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center group">
                <div className="bg-slate-800 p-2 rounded-xl group-hover:bg-slate-900 transition-colors">
                  <TruckIcon className="h-5 w-5 text-white" />
                </div>
                <span className="ml-3 text-xl font-semibold text-slate-800">
                  TraceIT
                </span>
              </Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-1">
              <Link href="#features" className="text-slate-700 hover:text-teal-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">Fitur</Link>
              <Link href="#how-it-works" className="text-slate-700 hover:text-teal-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">Cara Kerja</Link>
              <Link href="#umkm" className="text-blue-700 hover:text-blue-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors">UMKM</Link>
              <div className="h-4 w-px bg-blue-400 mx-2"></div>
              <Link
                href="/login"
                className="text-blue-700 hover:text-blue-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Masuk
              </Link>
              <Link
                href="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-emerald-50 bg-opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="pt-20 pb-16 lg:pt-32 lg:pb-24">
            <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
              <div className="lg:col-span-6">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-sm">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
                    Platform Travel #1 Indonesia
                  </div>
                  <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
                    Jelajahi
                    <span className="block text-emerald-600">Nusantara</span>
                    <span className="block text-slate-700 text-4xl lg:text-5xl font-medium">dengan Nyaman</span>
                  </h1>
                  <p className="text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                    Nikmati perjalanan wisata yang tak terlupakan dengan layanan bus premium dan dukungan UMKM lokal terbaik.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                    <Link href="/bus-tickets" className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/25 inline-flex items-center justify-center group hover:scale-105 hover:-translate-y-1">
                      <TruckIcon className="h-6 w-6 mr-3 group-hover:scale-110 group-hover:rotate-3 transition-transform" />
                      Mulai Perjalanan
                    </Link>
                    <Link href="/trip-order" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 inline-flex items-center justify-center group hover:scale-105 hover:-translate-y-1">
                      <MapPinIcon className="h-6 w-6 mr-3 group-hover:scale-110 group-hover:rotate-3 transition-transform" />
                      Demo Tracking
                    </Link>
                    <Link href="#how-it-works" className="bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-200 hover:border-emerald-300 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 shadow-sm hover:shadow-md inline-flex items-center justify-center">
                      Pelajari Lebih Lanjut
                      <ArrowRightIcon className="h-5 w-5 ml-3" />
                    </Link>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-8 text-center lg:text-left">
                    <div className="group cursor-pointer">
                      <div className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-emerald-600 bg-clip-text text-transparent mb-1 group-hover:from-emerald-600 group-hover:to-emerald-700 transition-all duration-300 group-hover:scale-110">50K+</div>
                      <div className="text-sm text-slate-500 font-medium group-hover:text-slate-700 transition-colors">Pelanggan Puas</div>
                    </div>
                    <div className="group cursor-pointer">
                      <div className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent mb-1 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300 group-hover:scale-110">200+</div>
                      <div className="text-sm text-slate-500 font-medium group-hover:text-slate-700 transition-colors">Rute Tersedia</div>
                    </div>
                    <div className="group cursor-pointer">
                      <div className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-purple-600 bg-clip-text text-transparent mb-1 group-hover:from-purple-600 group-hover:to-purple-700 transition-all duration-300 group-hover:scale-110">1000+</div>
                      <div className="text-sm text-slate-500 font-medium group-hover:text-slate-700 transition-colors">UMKM Partner</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 lg:mt-0 lg:col-span-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-3xl transform rotate-3"></div>
                  <div className="relative rounded-3xl shadow-2xl w-full h-96 lg:h-[500px] bg-white border border-secondary-200 overflow-hidden">
                    {/* Header */}
                    <div className="bg-secondary-900 h-12 flex items-center px-4 space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="ml-4 text-secondary-400 text-sm">TraceIT Dashboard</div>
                    </div>

                    {/* Dashboard Content */}
                    <div className="p-6 bg-secondary-50 h-full">
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-secondary-200">
                          <div className="text-2xl font-bold text-primary-600">1,247</div>
                          <div className="text-sm text-secondary-600">Total Bookings</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-secondary-200">
                          <div className="text-2xl font-bold text-accent-600">89</div>
                          <div className="text-sm text-secondary-600">Active Routes</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-secondary-200">
                          <div className="text-2xl font-bold text-blue-600">456</div>
                          <div className="text-sm text-secondary-600">UMKM Partners</div>
                        </div>
                      </div>

                      {/* Chart Area */}
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-secondary-200 h-48">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold text-secondary-900">Revenue Analytics</h3>
                          <div className="flex space-x-2">
                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex items-end space-x-2 h-32">
                          <div className="bg-primary-200 w-8 h-16 rounded-t"></div>
                          <div className="bg-primary-300 w-8 h-24 rounded-t"></div>
                          <div className="bg-primary-400 w-8 h-20 rounded-t"></div>
                          <div className="bg-primary-500 w-8 h-28 rounded-t"></div>
                          <div className="bg-primary-400 w-8 h-18 rounded-t"></div>
                          <div className="bg-primary-300 w-8 h-22 rounded-t"></div>
                          <div className="bg-primary-500 w-8 h-32 rounded-t"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <MapPinIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-blue-900">Jakarta - Bali</div>
                      <div className="text-sm text-blue-600">Tersedia hari ini</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center bg-blue-50 text-blue-700 px-5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6 border border-blue-100">
              Fitur Unggulan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 max-w-3xl mx-auto">
              Solusi Perjalanan Lengkap
              <span className="text-blue-600 block mt-2">Dalam Satu Platform</span>
            </h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Nikmati kemudahan perjalanan dengan fitur-fitur terdepan yang dirancang untuk kenyamanan dan kepuasan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Fitur 1 */}
            <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-100/50">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center mb-5 mx-auto group-hover:from-emerald-100 group-hover:to-emerald-200 transition-all duration-300 group-hover:scale-110">
                <TruckIcon className="h-5 w-5 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center group-hover:text-emerald-700 transition-colors">Pesan Tiket Bus</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center group-hover:text-gray-700 transition-colors">
                Cari dan pesan tiket bus wisata dengan mudah. Pilih rute, tanggal, dan kursi favorit Anda dalam hitungan menit.
              </p>
            </div>

            {/* Fitur 2 */}
            <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-100/50">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-5 mx-auto group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 group-hover:scale-110">
                <ShoppingCartIcon className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center group-hover:text-blue-700 transition-colors">Trip Order</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center group-hover:text-gray-700 transition-colors">
                Pesan tiket, makanan, dan kebutuhan perjalanan lainnya sebelum tiba di destinasi dengan mudah dan praktis.
              </p>
            </div>

            {/* Fitur 3 */}
            <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-100/50">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center mb-5 mx-auto group-hover:from-orange-100 group-hover:to-orange-200 transition-all duration-300 group-hover:scale-110">
                <ClockIcon className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center group-hover:text-orange-700 transition-colors">Real-time Tracking</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center group-hover:text-gray-700 transition-colors">
                Pantau perjalanan dan perkiraan waktu tiba secara real-time untuk perencanaan yang lebih baik.
              </p>
            </div>

            {/* Fitur 4 */}
            <div className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-100/50">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center mb-5 mx-auto group-hover:from-purple-100 group-hover:to-purple-200 transition-all duration-300 group-hover:scale-110">
                <MapPinIcon className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center group-hover:text-purple-700 transition-colors">Panduan Destinasi</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center group-hover:text-gray-700 transition-colors">
                Temukan rekomendasi tempat wisata dan kuliner terbaik di sekitar tujuan perjalanan Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Showcase Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center bg-emerald-50 text-emerald-700 px-5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6 border border-emerald-100">
              Destinasi Populer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 max-w-3xl mx-auto">
              Jelajahi Keindahan
              <span className="text-emerald-600 block mt-2">Nusantara</span>
            </h2>
            <div className="h-1 w-16 bg-emerald-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Temukan destinasi wisata terbaik Indonesia dengan informasi lengkap dan panduan perjalanan yang komprehensif
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-200 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Cara Kerja
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Mulai Perjalanan dalam 3 Langkah Mudah
            </h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              Proses yang simpel dan intuitif untuk pengalaman perjalanan yang tak terlupakan
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
              <div className="flex justify-between">
                <div className="w-8 h-8 bg-blue-300 rounded-full"></div>
                <div className="flex-1 h-0.5 bg-blue-300 mt-4 mx-4"></div>
                <div className="w-8 h-8 bg-blue-300 rounded-full"></div>
                <div className="flex-1 h-0.5 bg-blue-300 mt-4 mx-4"></div>
                <div className="w-8 h-8 bg-blue-300 rounded-full"></div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
              {/* Langkah 1 */}
              <div className="text-center">
                <div className="bg-blue-300 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Pilih & Pesan</h3>
                <p className="text-blue-700 leading-relaxed">
                  Pilih rute perjalanan, tanggal keberangkatan, dan kursi yang Anda inginkan dengan mudah.
                </p>
              </div>

              {/* Langkah 2 */}
              <div className="text-center">
                <div className="bg-blue-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Eksplorasi UMKM</h3>
                <p className="text-blue-700 leading-relaxed">
                  Jelajahi dan pesan produk dari UMKM lokal di destinasi tujuan Anda.
                </p>
              </div>

              {/* Langkah 3 */}
              <div className="text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Nikmati Perjalanan</h3>
                <p className="text-blue-700 leading-relaxed">
                  Pantau perjalanan real-time dan nikmati pengalaman wisata yang tak terlupakan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UMKM Section */}
      <section id="umkm" className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-200 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Untuk UMKM
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
                Kembangkan Bisnis Anda Bersama TraceIT
              </h2>
              <p className="text-lg text-blue-700 mb-8">
                Bergabunglah dengan platform kami dan jangkau ribuan wisatawan yang berkunjung ke daerah Anda.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-200 p-2 rounded-lg flex-shrink-0">
                    <UserGroupIcon className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">Jangkauan Lebih Luas</h3>
                    <p className="text-blue-700">Tampilkan produk kepada ribuan wisatawan</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-300 p-2 rounded-lg flex-shrink-0">
                    <ShoppingCartIcon className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">Sistem Mudah</h3>
                    <p className="text-blue-700">Kelola pesanan dengan dashboard yang intuitif</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-200 p-2 rounded-lg flex-shrink-0">
                    <StarIcon className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">Promosi Gratis</h3>
                    <p className="text-blue-700">Dapatkan eksposur tanpa biaya tambahan</p>
                  </div>
                </div>
              </div>

              <Link href="/umkm/register" className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                <UserGroupIcon className="h-5 w-5 mr-2" />
                Daftar Sebagai Mitra UMKM
              </Link>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-400 rounded-3xl transform -rotate-3"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="text-center">
                    <div className="bg-blue-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <ShoppingCartIcon className="h-8 w-8 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Dashboard UMKM</h3>
                    <p className="text-blue-700 mb-6">Kelola bisnis Anda dengan mudah</p>

                    <div className="space-y-3 text-left">
                      <div className="flex justify-between items-center p-3 bg-blue-100 rounded-lg">
                        <span className="text-sm text-blue-700">Pesanan Hari Ini</span>
                        <span className="font-semibold text-blue-900">24</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-100 rounded-lg">
                        <span className="text-sm text-blue-700">Pendapatan Bulan Ini</span>
                        <span className="font-semibold text-blue-500">Rp 12.5M</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-100 rounded-lg">
                        <span className="text-sm text-blue-700">Rating</span>
                        <div className="flex items-center">
                          <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="font-semibold text-blue-900 ml-1">4.8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Siap Memulai Perjalanan Anda?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan pelancong yang telah merasakan kemudahan TraceIT.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
              Daftar Sekarang
            </Link>
            <Link href="/bus-tickets" className="border-2 border-white text-white hover:bg-white hover:text-blue-400 px-8 py-4 rounded-xl font-semibold transition-colors">
              Lihat Rute Bus
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="bg-blue-300 p-2 rounded-xl">
                  <TruckIcon className="h-6 w-6 text-white" />
                </div>
                <span className="ml-3 text-2xl font-bold text-white">TraceIT</span>
              </div>
              <p className="text-blue-200 mb-6 leading-relaxed">
                Platform terpadu untuk perjalanan wisata yang menghubungkan pelancong dengan UMKM lokal di seluruh Indonesia.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="bg-secondary-800 hover:bg-secondary-700 p-2 rounded-lg transition-colors">
                  <svg className="h-5 w-5 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="bg-secondary-800 hover:bg-secondary-700 p-2 rounded-lg transition-colors">
                  <svg className="h-5 w-5 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="bg-secondary-800 hover:bg-secondary-700 p-2 rounded-lg transition-colors">
                  <svg className="h-5 w-5 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Perusahaan</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-blue-200 hover:text-white transition-colors">Tentang Kami</Link></li>
                <li><Link href="#" className="text-blue-200 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-blue-200 hover:text-white transition-colors">Karir</Link></li>
                <li><Link href="#" className="text-blue-200 hover:text-white transition-colors">Kontak</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Layanan</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-blue-200 hover:text-white transition-colors">Tiket Bus</Link></li>
                <li><Link href="#" className="text-blue-200 hover:text-white transition-colors">UMKM Partner</Link></li>
                <li><Link href="#" className="text-blue-200 hover:text-white transition-colors">Panduan Wisata</Link></li>
                <li><Link href="#" className="text-blue-200 hover:text-white transition-colors">Tracking</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Dukungan</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-blue-200 hover:text-white transition-colors">Pusat Bantuan</Link></li>
                <li><Link href="#" className="text-blue-200 hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="#" className="text-blue-200 hover:text-white transition-colors">Kebijakan Privasi</Link></li>
                <li><Link href="#" className="text-blue-200 hover:text-white transition-colors">Syarat & Ketentuan</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-secondary-800 mt-12 pt-8 text-center">
            <p className="text-secondary-400">
              &copy; {new Date().getFullYear()} TraceIT. Semua hak dilindungi.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Demo Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="group relative">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 animate-bounce">
            <span className="text-sm font-semibold">DEMO</span>
          </button>

          {/* Demo Menu */}
          <div className="absolute bottom-16 right-0 bg-white rounded-xl shadow-2xl border border-slate-200 py-3 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="px-4 py-2 text-sm font-semibold text-slate-800 border-b border-slate-100 bg-slate-50 rounded-t-xl">
              🚀 Demo Features
            </div>

            <Link
              href="/trip-order"
              className="flex items-center px-4 py-3 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-200 group/item"
            >
              <div className="bg-emerald-100 p-2 rounded-lg mr-3 group-hover/item:bg-emerald-200 transition-colors">
                <MapPinIcon className="h-4 w-4 text-emerald-600" />
              </div>
              <div>
                <div className="font-medium">Demo Trip Order</div>
                <div className="text-xs text-slate-500">Live tracking perjalanan</div>
              </div>
            </Link>

            <div className="flex items-center px-4 py-3 text-sm text-slate-400 cursor-not-allowed">
              <div className="bg-slate-100 p-2 rounded-lg mr-3">
                <TruckIcon className="h-4 w-4 text-slate-400" />
              </div>
              <div>
                <div className="font-medium">Demo Bus</div>
                <div className="text-xs text-slate-400">Coming Soon...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
