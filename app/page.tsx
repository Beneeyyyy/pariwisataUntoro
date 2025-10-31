'use client';

import Link from "next/link";
import { useState } from 'react';
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

export default function Home() {
  const [showDemoMenu, setShowDemoMenu] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-blue-300 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center group">
                <div className="bg-blue-600 p-2 rounded-xl group-hover:bg-blue-700 transition-colors">
                  <TruckIcon className="h-5 w-5 text-white" />
                </div>
                <span className="ml-3 text-xl font-semibold text-blue-800">
                  TraceIT
                </span>
              </Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-1">
              <Link href="#features" className="text-blue-700 hover:text-blue-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors">Fitur</Link>
              <Link href="#how-it-works" className="text-blue-700 hover:text-blue-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors">Cara Kerja</Link>
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

      {/* Demo Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <button 
            onClick={() => setShowDemoMenu(!showDemoMenu)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full shadow-xl transition-all transform hover:scale-105 flex items-center space-x-2"
          >
            <span>Demo</span>
            <svg 
              className={`h-5 w-5 transition-transform ${showDemoMenu ? 'transform rotate-180' : ''}`} 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          
          {showDemoMenu && (
            <div className="absolute bottom-14 right-0 w-48 bg-white rounded-lg shadow-2xl py-2 overflow-hidden">
              <Link 
                href="/trip-order" 
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 transition-colors"
                onClick={() => setShowDemoMenu(false)}
              >
                Demo Trip Order
              </Link>
              <Link 
                href="#bus" 
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 transition-colors"
                onClick={() => setShowDemoMenu(false)}
              >
                Demo Bus
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative pt-20 pb-16 lg:pt-32 lg:pb-24">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
              <div className="lg:col-span-6">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center bg-blue-100 text-blue-700 border border-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <StarIcon className="h-4 w-4 mr-2" />
                    Platform Travel Terpercaya
                  </div>
                  <h1 className="text-4xl lg:text-6xl font-bold text-blue-900 leading-tight">
                    Jelajahi Indonesia dengan
                    <span className="text-blue-600 block">Mudah & Nyaman</span>
                  </h1>
                  <p className="mt-6 text-lg text-blue-800 max-w-2xl mx-auto lg:mx-0">
                    Temukan pengalaman perjalanan terbaik dengan layanan bus wisata terintegrasi dan dukungan UMKM lokal di seluruh Indonesia.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link href="/bus-tickets" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                      <TruckIcon className="h-5 w-5 mr-2" />
                      Pesan Tiket Sekarang
                    </Link>
                    <Link href="#how-it-works" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                      Pelajari Lebih Lanjut
                      <ArrowRightIcon className="h-4 w-4 ml-2" />
                    </Link>
                  </div>

                  {/* Stats */}
                  <div className="mt-12 grid grid-cols-3 gap-6 text-center lg:text-left">
                    <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl border border-blue-100">
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">50K+</div>
                      <div className="text-sm text-gray-600 mt-1">Pelanggan Puas</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl border border-blue-100">
                      <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">200+</div>
                      <div className="text-sm text-gray-600 mt-1">Rute Tersedia</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl border border-blue-100">
                      <div className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent">1000+</div>
                      <div className="text-sm text-gray-600 mt-1">UMKM Partner</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 lg:mt-0 lg:col-span-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl transform rotate-3"></div>
                 <div className="relative w-full h-full">
                        <img 
                          src="/image/dashboard.jpg" 
                          alt="Dashboard Preview" 
                          className="w-full h-full object-contain"
                        />
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
      <section id="features" className="section-padding bg-secondary-50">
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
          <div className="group bg-white rounded-lg p-6 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-5 mx-auto group-hover:bg-blue-100 transition-colors">
              <TruckIcon className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">Pesan Tiket Bus</h3>
            <p className="text-gray-600 text-sm leading-relaxed text-center">
              Cari dan pesan tiket bus wisata dengan mudah. Pilih rute, tanggal, dan kursi favorit Anda dalam hitungan menit.
            </p>
          </div>

          {/* Fitur 2 */}
          <div className="group bg-white rounded-lg p-6 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-5 mx-auto group-hover:bg-blue-100 transition-colors">
              <ShoppingCartIcon className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">Trip Order</h3>
            <p className="text-gray-600 text-sm leading-relaxed text-center">
              Pesan tiket, makanan, dan kebutuhan perjalanan lainnya sebelum tiba di destinasi dengan mudah dan praktis.
            </p>
          </div>

          {/* Fitur 3 */}
          <div className="group bg-white rounded-lg p-6 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-5 mx-auto group-hover:bg-blue-100 transition-colors">
              <ClockIcon className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">Real-time Tracking</h3>
            <p className="text-gray-600 text-sm leading-relaxed text-center">
              Pantau perjalanan dan perkiraan waktu tiba secara real-time untuk perencanaan yang lebih baik.
            </p>
          </div>

          {/* Fitur 4 */}
          <div className="group bg-white rounded-lg p-6 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-5 mx-auto group-hover:bg-blue-100 transition-colors">
              <MapPinIcon className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">Panduan Destinasi</h3>
            <p className="text-gray-600 text-sm leading-relaxed text-center">
              Temukan rekomendasi tempat wisata dan kuliner terbaik di sekitar tujuan perjalanan Anda.
            </p>
          </div>
        </div>
      </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cara Kerja</h2>
            <p className="text-gray-600">Mulai perjalanan Anda dengan mudah dalam 3 langkah sederhana</p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-600 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">1</div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-gray-900">Pilih & Pesan</h3>
                <p className="mt-1 text-gray-600">Pilih rute perjalanan, tanggal keberangkatan, dan kursi yang Anda inginkan dengan mudah.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-600 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">2</div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-gray-900">Eksplorasi UMKM</h3>
                <p className="mt-1 text-gray-600">Jelajahi dan pesan produk dari UMKM lokal di destinasi tujuan Anda.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-600 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">2</div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-gray-900">Nikmati Perjalanan</h3>
                <p className="mt-1 text-gray-600">Pantau perjalanan real-time dan nikmati pengalaman wisata yang tak terlupakan.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/bus-tickets" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Mulai Sekarang
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* UMKM Section */}
      <section id="umkm" className="py-20 bg-gradient-to-br from-blue-100 to-blue-200">
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

              <Link href="/umkm/register" className="inline-flex items-center bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors">
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
      <section className="py-20 bg-gradient-to-r from-blue-400 to-blue-500">
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
      <footer className="bg-blue-900">
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
                <Link href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-lg transition-colors">
                  <svg className="h-5 w-5 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-lg transition-colors">
                  <svg className="h-5 w-5 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-lg transition-colors">
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

          <div className="border-t border-blue-800 mt-12 pt-8 text-center">
            <p className="text-blue-200">
              &copy; {new Date().getFullYear()} TraceIT. Semua hak dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
