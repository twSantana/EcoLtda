import { MessageCircle, Truck, FileText } from 'lucide-react';

export function Process() {
  const steps = [
    {
      number: '1',
      icon: MessageCircle,
      title: 'Solicitação',
      description: 'Você chama no WhatsApp ou Portal.',
      color: 'bg-blue-500',
    },
    {
      number: '2',
      icon: Truck,
      title: 'Coleta Técnica',
      description: 'Nossa equipe suga o óleo e limpa a área.',
      color: 'bg-emerald-500',
    },
    {
      number: '3',
      icon: FileText,
      title: 'Documentação',
      description: 'Você recebe o certificado digitalmente na hora.',
      color: 'bg-green-500',
    },
  ];

  return (
    <section id="processo" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Processo Simplificado
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Em apenas 3 passos simples, você resolve todo o passivo ambiental da sua
            indústria
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-1/2 w-full h-1 bg-gradient-to-r from-gray-300 to-gray-200 -z-10"></div>
              )}

              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-emerald-500 transition-all hover:shadow-xl">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg`}>
                    {step.number}
                  </div>

                  <div className="bg-white p-4 rounded-full shadow-md">
                    <step.icon className="w-8 h-8 text-gray-700" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
