import { ArrowRight, Clock } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-blue-50"
      style={{
        '--tw-animate-blink': 'blink 1.5s infinite'
      } as React.CSSProperties}
    >
      <style>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0.3; }
        }
        .animate-blink {
          animation: blink 6.5s infinite;
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium animate-blink">
              <Clock className="w-4 h-4" />
              <span>Atendimento em até 24h</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Coleta de Óleo Industrial:{' '}
              <span className="text-emerald-600">Rápida, Certificada</span> e Sustentável
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Transforme seu passivo ambiental em segurança jurídica. Atendemos sua
              indústria em até 24h com conformidade total.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 group"
              >
                <span>Solicitar Coleta Agora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/554195807668?text=Olá,%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20coleta%20de%20óleo%20industrial."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-colors text-center"
              >
                Falar com Especialista
              </a>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-gray-900">24h</p>
                <p className="text-sm text-gray-600">Tempo de Resposta</p>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-600">Rastreável</p>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900">Certificado</p>
                <p className="text-sm text-gray-600">Digital na Hora</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-emerald-400 to-blue-500 rounded-3xl shadow-2xl flex items-center justify-center">
              <img
                src="/img/EcoAcao_LTDA.png"
                alt="Industrial oil collection"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
              <p className="text-sm text-gray-600 font-medium">Conformidade Garantida</p>
              <p className="text-2xl font-bold text-emerald-600">ANP • IBAMA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
