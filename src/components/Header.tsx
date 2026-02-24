import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <img src="/img/logo.png" alt="EcoAção Logo" className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">EcoAção</h1>
              <p className="text-xs text-gray-600">Coleta Industrial Ágil</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('processo')}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg"
            >
              Área do Cliente
            </button>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-emerald-600 font-medium text-left"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-gray-700 hover:text-emerald-600 font-medium text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('processo')}
                className="text-gray-700 hover:text-emerald-600 font-medium text-left"
              >
                Como Funciona
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors text-center"
              >
                Quem somos
            </button>
            <button
              onClick={() => scrollToSection('processo')}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              >
                Área do Cliente
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
