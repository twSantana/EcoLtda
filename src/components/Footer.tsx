import { Mail, Phone, } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/img/logo-v2.png" alt="EcoAção Logo" className="w-8 h-8" />
              <div>
                <h3 className="text-xl font-bold text-white">EcoAção</h3>
                <p className="text-xs text-gray-400">Coleta Industrial Ágil</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Soluções profissionais para coleta e destinação de óleo industrial com
              total conformidade ambiental.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-500" />
                <span className="text-sm">(41) 95807668</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-500" />
                <span className="text-sm">ssustentaveisltda@gmail.com</span>
              </div>

            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#processo"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>CNPJ: </p>
              <p className="mt-1">
                © 2025 EcoAção. Todos os direitos reservados.
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-emerald-500 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                Trabalhe Conosco
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
