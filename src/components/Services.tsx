import { Clock, Shield, Leaf } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Clock,
      title: 'Agilidade na Retirada',
      description:
        'Sabemos que espaço é dinheiro. Agendamento flexível e pontualidade rigorosa.',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Shield,
      title: 'Certificado na Mão',
      description:
        'Emissão imediata do Certificado de Destinação Final (CDF) e manifesto de transporte.',
      gradient: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Leaf,
      title: 'Destino 100% Rastreável',
      description:
        'Garantia de rerrefino e reuso ético. Compliance ambiental garantido para sua auditoria.',
      gradient: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section id="servicos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Sua operação não pode parar por causa de resíduos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas para coleta e destinação de óleo industrial
            com total conformidade ambiental
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
