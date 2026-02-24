export async function enviarParaDiscord(dados: {
  nome: string;
  email: string;
  data: string;
  mensagem: string;
}) {
  const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK;

  if (!webhookUrl) {
    console.warn('VITE_DISCORD_WEBHOOK não está definido. Ignorando envio ao Discord.');
    return;
  }

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      embeds: [
        {
          title: "📩 Novo Formulário Recebido",
          color: 3066993,
          fields: [
            {
              name: "👤 Nome",
              value: dados.nome || "N/A",
              inline: false,
            },
            {
              name: "📧 Email",
              value: dados.email || "N/A",
              inline: false,
            },
            {
              name: "📅 Data",
              value: dados.data || "N/A",
              inline: false,
            },
            {
              name: "💬 Detalhes",
              value: dados.mensagem || "N/A",
              inline: false,
            },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Falha no webhook do Discord: ${res.status} ${res.statusText} ${text}`);
  }
}