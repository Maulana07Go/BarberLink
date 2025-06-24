import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
          Siap untuk Tampil Lebih Keren?
        </h2>
        <p className="text-xl text-blue-100 mb-12 leading-relaxed animate-fade-in-up delay-100">
          Bergabung dengan ribuan customer yang sudah merasakan kemudahan
          booking di BarberLink. Daftar sekarang dan dapatkan diskon untuk
          booking pertama!
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
  );
};

export default CtaSection;