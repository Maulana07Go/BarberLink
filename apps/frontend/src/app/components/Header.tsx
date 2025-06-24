import React from 'react';

const Header: React.FC = () => {
  return (
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
              <p className="text-sm text-gray-600">
                Your Style, Our Priority
              </p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Beranda
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Barber
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Layanan
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Kontak
            </a>
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
  );
};

export default Header;