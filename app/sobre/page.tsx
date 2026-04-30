import { Heart, MapPin, Users, History } from "lucide-react";
import Link from "next/link";

export default function SobrePage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Cabeçalho Histórico */}
      <div className="bg-slate-900 text-white py-24 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/1920/1080?grayscale')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Nossa História</span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            43 anos transformando vidas através da arte.
          </h1>
          <p className="text-lg text-slate-300">
            A Associação Vidança Cia de Danças do Ceará promove a inclusão social formando bailarinos na periferia de Fortaleza.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100 space-y-12">
          
          {/* Missão e Fundação */}
          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 mt-1">
              <History size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Como tudo começou</h2>
              <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed">
                <p>
                  Fundada há mais de 4 décadas pela professora, bailarina e coreógrafa <strong>Ana Anália Timbó Catunda Filha</strong>, 
                  o Instituto Vidança nasceu de um sonho: levar a cultura e a arte para quem mais precisa.
                </p>
                <p>
                  Com sede no bairro Vila Velha, nosso foco é atuar diretamente no território da Regional 1, oferecendo a crianças 
                  e jovens da periferia a oportunidade de se expressarem, aprenderem e se profissionalizarem na dança.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* O Impacto */}
          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center shrink-0 mt-1">
              <Users size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Nosso Impacto</h2>
              <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed">
                <p>
                  Ao longo destes anos, a companhia produziu dezenas de espetáculos premiados pela sua qualidade estética e artística. 
                  Porém, nosso maior prêmio é a cidadania. Promovemos não apenas passos de dança, mas passos em direção a um futuro com mais dignidade, educação e respeito.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* O Papel do Bazar */}
          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shrink-0 mt-1">
              <Heart size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Por que o Bazar Vidança existe?</h2>
              <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed">
                <p>
                  Manter uma estrutura para dezenas de jovens exige recursos contínuos. O <strong>Bazar Digital do Instituto Vidança</strong> é o nosso braço de sustentabilidade.
                </p>
                <p>
                  Cada produto de moda, brinquedo ou artesanato que você adquire ou doa em nossa plataforma financia diretamente as oficinas, os figurinos e a alimentação dos nossos bailarinos.
                </p>
              </div>
            </div>
          </section>

          <div className="bg-slate-50 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <MapPin className="text-slate-400 shrink-0" size={32} />
              <div>
                <h4 className="font-bold text-slate-900">Sede do Instituto</h4>
                <p className="text-slate-500 text-sm">Avenida L, 400 - Vila Velha<br/>Fortaleza - CE</p>
              </div>
            </div>
            <Link href="/doar" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition w-full md:w-auto text-center">
              Faça Parte: Doar Agora
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
