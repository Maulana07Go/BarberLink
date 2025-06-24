import React from 'react';

const Footer: React.FC = () => {
  return (
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
              Menghubungkan customer dengan barber profesional untuk
              pengalaman grooming terbaik.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                <span className="text-white font-bold text-lg">f</span>{' '}
              </div>
              <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
                <span className="text-white font-bold text-lg">t</span>{' '}
              </div>
              <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-pink-700 transition-colors">
                <span className="text-white font-bold text-lg">i</span>{' '}
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Menu</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Barber
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tentang Kami
                </a>
              </li>
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
  );
};

export default Footer;