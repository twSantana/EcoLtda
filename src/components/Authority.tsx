import { Award, Shield, CheckCircle, FileCheck } from 'lucide-react';

export function Authority() {
  const certifications = [
    { icon: Shield, label: 'Natureza', color: 'text-green-600' },
    { icon: Award, label: 'Confiavel', color: 'text-blue-600' },
    { icon: CheckCircle, label: 'Excelência', color: 'text-emerald-600' },
    { icon: FileCheck, label: 'verificar', color: 'text-orange-600' },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wide mb-8">
          Empresa Licenciada e Regularizada
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.label}
              className="flex flex-col items-center justify-center space-y-3 p-6 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className={`${cert.color} bg-gray-50 p-4 rounded-full`}>
                <cert.icon className="w-10 h-10" />
              </div>
              <p className="font-semibold text-gray-900 text-center">{cert.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
