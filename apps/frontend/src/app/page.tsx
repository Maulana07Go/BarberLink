import Image from "next/image";
import { Star, Clock, Calendar, Users, CheckCircle, MessageSquare, Search, ClipboardList, Scissors } from "lucide-react"; // Menambahkan ikon baru untuk bagian order

// Types
interface Barber {
  id: string;
  name: string;
  speciality: string;
  rating: number;
  totalReviews: number;
  image: string;
  price: string;
}

interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface OrderStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Home() {
  // Dummy data
  const featuredBarbers: Barber[] = [
    {
      id: "1",
      name: "Ahmad Rizky",
      speciality: "Classic & Modern Cut",
      rating: 4.8,
      totalReviews: 127,
      image: "https://via.placeholder.com/300x300?text=Ahmad+Rizky", // Placeholder image
      price: "Rp 50.000"
    },
    {
      id: "2",
      name: "Budi Santoso",
      speciality: "Beard Styling Expert",
      rating: 4.9,
      totalReviews: 89,
      image: "https://via.placeholder.com/300x300?text=Budi+Santoso", // Placeholder image
      price: "Rp 75.000"
    },
    {
      id: "3",
      name: "Candra Wijaya",
      speciality: "Premium Hair Treatment",
      rating: 4.7,
      totalReviews: 156,
      image: "https://via.placeholder.com/300x300?text=Candra+Wijaya", // Placeholder image
      price: "Rp 100.000"
    }
  ];

  const reviews: Review[] = [
    {
      id: "1",
      customerName: "Doni Pratama",
      rating: 5,
      comment: "Pelayanan sangat memuaskan! Barbernya profesional dan hasil potongannya rapi.",
      date: "2 hari lalu"
    },
    {
      id: "2",
      customerName: "Eko Wardana",
      rating: 4,
      comment: "Booking online mudah banget, tidak perlu antri lama. Recommended!",
      date: "1 minggu lalu"
    },
    {
      id: "3",
      customerName: "Fajar Nugraha",
      rating: 5,
      comment: "Tempat bersih, alat lengkap, dan barbernya ramah. Pasti balik lagi!",
      date: "2 minggu lalu"
    }
  ];

  const features: Feature[] = [
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      title: "Booking Online",
      description: "Reservasi mudah kapan saja dengan sistem booking online 24/7"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Jadwal Fleksibel",
      description: "Pilih waktu yang sesuai dengan jadwal Anda dari slot yang tersedia"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Barber Profesional",
      description: "Tim barber berpengalaman dengan keahlian berbagai gaya rambut"
    },
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
      title: "Review & Rating",
      description: "Sistem review transparan untuk menjaga kualitas layanan terbaik"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Konfirmasi Otomatis",
      description: "Dapatkan konfirmasi booking dan reminder melalui email"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
      title: "Layanan Terpercaya",
      description: "Platform terpercaya dengan ribuan customer yang puas"
    }
  ];

  const orderSteps: OrderStep[] = [
    {
      icon: <Search className="w-12 h-12 text-blue-600" />,
      title: "1. Temukan Barber Pilihanmu",
      description: "Jelajahi daftar barber profesional kami dan filter berdasarkan lokasi, spesialisasi, atau rating."
    },
    {
      icon: <Calendar className="w-12 h-12 text-blue-600" />,
      title: "2. Pilih Waktu yang Tepat",
      description: "Lihat ketersediaan jadwal barber secara real-time dan pilih slot yang paling sesuai dengan Anda."
    },
    {
      icon: <ClipboardList className="w-12 h-12 text-blue-600" />,
      title: "3. Konfirmasi Booking Anda",
      description: "Isi detail layanan yang diinginkan, konfirmasi booking, dan dapatkan notifikasi instan."
    },
    {
      icon: <Scissors className="w-12 h-12 text-blue-600" />,
      title: "4. Nikmati Potongan Rambut Terbaik!",
      description: "Datang tepat waktu dan biarkan barber ahli kami memberikan gaya rambut yang Anda impikan."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">BL</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  BarberLink
                </h1>
                <p className="text-sm text-gray-600">Your Style, Our Priority</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Beranda</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Barber</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Layanan</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Kontak</a>
            </nav>
            <div className="flex space-x-4">
              <button className="px-6 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                Masuk
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all font-medium">
                Daftar
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight animate-fade-in-up">
              Reservasi Barber
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Jadi Mudah!
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto md:mx-0 mb-12 leading-relaxed animate-fade-in-up delay-200">
              Platform booking barber online terpercaya. Pilih barber favorit, tentukan waktu,
              dan nikmati layanan berkualitas tanpa perlu antri.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up delay-400">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all">
                Book Sekarang
              </button>
              <button className="px-8 py-4 bg-white text-gray-700 border-2 border-gray-200 rounded-xl text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all">
                Lihat Barber
              </button>
            </div>
          </div>
          <div className="relative md:w-1/2 flex justify-center md:justify-end">
            {/* Contoh placeholder untuk elemen bergerak/animasi */}
            <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-full flex items-center justify-center relative shadow-2xl animate-scale-in">
              <Image
                src="https://via.placeholder.com/300x300?text=Barber+Hero+Image"
                alt="Barber Hero"
                width={300}
                height={300}
                className="rounded-full shadow-lg border-4 border-white transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-10 left-0 w-24 h-24 bg-blue-300 rounded-full opacity-60 animate-float delay-500"></div>
              <div className="absolute bottom-5 right-5 w-16 h-16 bg-purple-300 rounded-full opacity-60 animate-float delay-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Mengapa Pilih BarberLink?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-100">
              Fitur-fitur canggih yang memudahkan pengalaman booking Anda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100 animate-slide-in-bottom">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Barbers */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Barber Terpopuler
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-100">
              Pilihan barber terbaik dengan rating tertinggi dari customer
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBarbers.map((barber) => (
              <div key={barber.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-zoom-in">
                <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <Image
                    src={barber.image}
                    alt={barber.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{barber.name}</h3>
                  <p className="text-gray-600 mb-4">{barber.speciality}</p>
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1 mr-2">
                      {renderStars(barber.rating)}
                    </div>
                    <span className="text-sm text-gray-600">
                      {barber.rating} ({barber.totalReviews} ulasan)
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{barber.price}</span>
                    <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all font-medium">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Bagaimana Cara Memesan di BarberLink?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-100">
              Cukup ikuti langkah mudah di bawah ini untuk mendapatkan gaya rambut impian Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {orderSteps.map((step, index) => (
              <div key={index} className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100 text-center hover:shadow-xl transition-all transform hover:-translate-y-2 animate-fade-in-up">
                <div className="flex justify-center mb-6">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Apa Kata Customer Kami?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-100">
              Testimoni nyata dari ribuan customer yang puas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-100 animate-slide-in-bottom">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{review.customerName.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{review.customerName}</h4>
                    <div className="flex space-x-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">"{review.comment}"</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Siap untuk Tampil Lebih Keren?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed animate-fade-in-up delay-100">
            Bergabung dengan ribuan customer yang sudah merasakan kemudahan booking di BarberLink.
            Daftar sekarang dan dapatkan diskon untuk booking pertama!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all">
              Daftar Gratis
            </button>
            <button className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">BL</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">BarberLink</h3>
                  <p className="text-gray-400">Your Style, Our Priority</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Platform booking barber online terpercaya di Indonesia.
                Menghubungkan customer dengan barber profesional untuk pengalaman grooming terbaik.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                  <span className="text-white font-bold text-lg">f</span> {/* Placeholder for Facebook icon */}
                </div>
                <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
                  <span className="text-white font-bold text-lg">t</span> {/* Placeholder for Twitter icon */}
                </div>
                <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-pink-700 transition-colors">
                  <span className="text-white font-bold text-lg">i</span> {/* Placeholder for Instagram icon */}
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Menu</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Beranda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Barber</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Layanan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Kontak</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Email: info@barberlink.com</li>
                <li>Phone: +62 812-3456-7890</li>
                <li>Address: Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BarberLink. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Tailwind CSS Custom Animations (Tambahkan ini di file CSS global Anda, misal: globals.css) */}
<style dangerouslySetInnerHTML={{
  __html: `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideInBottom {
      from { opacity: 0; transform: translateY(50px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.9); }
      to { opacity: 1; transform: scale(1); }
    }

    @keyframes zoomIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }

    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }

    .animate-fade-in { animation: fadeIn 0.6s ease-out forwards; }
    .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
    .animate-slide-in-bottom { animation: slideInBottom 0.8s ease-out forwards; }
    .animate-scale-in { animation: scaleIn 0.8s ease-out forwards; }
    .animate-zoom-in { animation: zoomIn 0.6s ease-out forwards; }
    .animate-float { animation: float 3s ease-in-out infinite; }

    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    .delay-400 { animation-delay: 0.4s; }
    .delay-500 { animation-delay: 0.5s; }
    .delay-700 { animation-delay: 0.7s; }
  `
}} />
    </div>
  );
}