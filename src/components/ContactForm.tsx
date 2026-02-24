import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { enviarParaDiscord } from '../services/discord';

export function ContactForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    responsiblePerson: '',
    estimatedVolume: '',
    phone: '',
    address: '',
    preferredTime: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus('idle');
  setErrorMessage(null);

  try {
    await enviarParaDiscord({
      nome: formData.responsiblePerson || formData.companyName,
      email: '',
      data: new Date().toLocaleString(),
      mensagem: `Empresa: ${formData.companyName}\nVolume: ${formData.estimatedVolume}\nTelefone: ${formData.phone}\nEndereço: ${formData.address}\nHorário: ${formData.preferredTime}`,
    });

    setSubmitStatus('success');
    setFormData({
      companyName: '',
      responsiblePerson: '',
      estimatedVolume: '',
      phone: '',
      address: '',
      preferredTime: '',
    });

    setTimeout(() => setSubmitStatus('idle'), 5000);
  } catch (error) {
    console.error('Error submitting form:', error);
    setSubmitStatus('error');
    setErrorMessage(error instanceof Error ? error.message : String(error));
  } finally {
    setIsSubmitting(false);
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Fale com um Especialista
          </h2>
          <p className="text-xl text-gray-600">
            Receba uma cotação rápida e personalizada para sua empresa
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
                <CheckCircle className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Solicitação Enviada com Sucesso!
              </h3>
              <p className="text-gray-600 mb-8">
                Nossa equipe entrará em contato em breve para fornecer sua cotação
                personalizada.
              </p>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="text-emerald-600 font-semibold hover:text-emerald-700"
              >
                Enviar Outra Solicitação
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Nome da Empresa *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="Sua Empresa Ltda"
                  />
                </div>

                <div>
                  <label
                    htmlFor="responsiblePerson"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Responsável *
                  </label>
                  <input
                    type="text"
                    id="responsiblePerson"
                    name="responsiblePerson"
                    value={formData.responsiblePerson}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="João Silva"
                  />
                </div>
              </div>





              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="estimatedVolume"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Volume Estimado (Litros) *
                  </label>
                  <select
                    id="estimatedVolume"
                    name="estimatedVolume"
                    value={formData.estimatedVolume}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                  >
                    <option value="">Selecione...</option>
                    <option value="Até 100L">Até 100L</option>
                    <option value="100L - 500L">100L - 500L</option>
                    <option value="500L - 1.000L">500L - 1.000L</option>
                    <option value="1.000L - 5.000L">1.000L - 5.000L</option>
                    <option value="5.000L - 10.000L">5.000L - 10.000L</option>
                    <option value="Acima de 10.000L">Acima de 10.000L</option>
                    <option value="Não sei informar">Não sei informar</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="preferredTime"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Horário de Preferência *
                  </label>
                  <input
                    type="time"
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Endereço *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="Rua Exemplo, 123 - Cidade, Estado"
                  />
                </div>
              </div>

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  <div className="font-semibold">Erro ao enviar formulário.</div>
                  <div className="text-sm mt-1">{errorMessage || 'Por favor, tente novamente.'}</div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg"
              >
                {isSubmitting ? (
                  <span>Enviando...</span>
                ) : (
                  <>
                    <span>Receber Cotação Rápida</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-sm text-gray-500 text-center">
                * Campos obrigatórios. Respeitamos sua privacidade e não compartilhamos
                seus dados.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
