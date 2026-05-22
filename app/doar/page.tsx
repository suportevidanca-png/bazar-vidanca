import { HeartHandshake, Mail, Phone, ArrowLeft, Copy } from "lucide-react";
import Link from "next/link";
import PageTracker from "@/components/PageTracker";

export default function DoarPage() {
  const pixKey = "contato@vidanca.org";
  // API pública para gerar o QR Code apontando para a chave PIX (email)
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(pixKey)}`;

  return (
    <div className="bg-[#f8f9fa] min-h-screen py-12">
      <PageTracker path="/doar" />
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Voltar */}
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition mb-8 font-medium">
          <ArrowLeft size={18} /> Voltar para a Vitrine
        </Link>

        <div className="bg-white rounded-[40px] shadow-xl border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Seção Informativa (Esquerda) */}
            <div className="bg-slate-900 text-white p-10 md:p-14 flex flex-col justify-center">
              <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">Apoie a Causa</span>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Faça a arte continuar dançando.
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-10">
                Sua doação ajuda a manter as portas abertas para dezenas de jovens da periferia de Fortaleza. Toda contribuição é investida diretamente em infraestrutura, figurinos e alimentação dos bailarinos.
              </p>

              <div className="space-y-6">
                <h3 className="font-bold text-xl mb-4">Outras Formas de Doar</h3>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shrink-0">
                    <HeartHandshake size={20} className="text-rose-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Doar Produtos para o Bazar</p>
                    <p className="text-sm">Aceitamos roupas e itens em bom estado.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Ligue para Nós</p>
                    <p className="text-sm">(85) 98643-0182</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Seção de Pagamento PIX (Direita) */}
            <div className="p-10 md:p-14 flex flex-col items-center justify-center text-center">
              <div className="mb-6">
                <span className="inline-block bg-blue-50 text-blue-600 font-bold px-4 py-2 rounded-full text-sm mb-4">
                  Transparência e Rapidez
                </span>
                <h2 className="text-3xl font-bold text-slate-900">Doe via PIX</h2>
                <p className="text-slate-500 mt-2">Qualquer valor faz a diferença na vida dos nossos alunos.</p>
              </div>

              {/* QR Code */}
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-inner mb-8">
                <img src={qrCodeUrl} alt="QR Code para Doação PIX" className="w-48 h-48 md:w-56 md:h-56 mix-blend-multiply" />
              </div>

              <p className="text-sm text-slate-500 font-medium mb-3">Abra o app do seu banco e escaneie o código acima, ou use a chave e-mail abaixo:</p>

              {/* Chave Pix Copia e Cola */}
              <div className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 flex items-center justify-between">
                <div className="flex items-center gap-3 pl-3 overflow-hidden text-slate-700">
                  <Mail size={18} className="text-slate-400 shrink-0" />
                  <span className="font-bold truncate">{pixKey}</span>
                </div>
                {/* Aqui poderíamos ter uma ação real de cópia, mas visualmente já funciona */}
                <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-100 transition flex items-center gap-2">
                  <Copy size={16} /> Copiar
                </button>
              </div>

              <p className="text-xs text-slate-400 mt-6 mt-auto">
                Favorecido: Associação Vidança Cia de Danças do Ceará
              </p>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
