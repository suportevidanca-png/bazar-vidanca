import Link from "next/link";
import { ArrowLeft, Users, Music, Palette, Trophy, Laptop, HeartHandshake } from "lucide-react";
import PageTracker from "@/components/PageTracker";

export default function CursosPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <PageTracker />
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition mb-12 font-medium bg-white/10 px-6 py-2 rounded-full">
            <ArrowLeft size={18} /> Voltar para a Página Inicial
          </Link>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">Nossos Cursos</h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Programas educacionais e culturais gratuitos que revelam talentos escondidos e geram novas oportunidades de vida. Conheça nossos eixos de atuação.
          </p>
        </div>
      </section>

      {/* Categorias e Cursos */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 space-y-12">
        
        {/* Dança */}
        <div className="bg-white rounded-[3rem] shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row border border-slate-100 group">
          <div className="lg:w-2/5 min-h-[300px] lg:min-h-full relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=800&auto=format&fit=crop" alt="Dança" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
          </div>
          <div className="lg:w-3/5 p-8 lg:p-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                <Users size={32} />
              </div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Dança</h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              A dança é o nosso coração. Aqui, o corpo se expressa em movimento através de diferentes ritmos e propostas, estimulando a disciplina, a criatividade e a sensibilidade artística.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Balé Clássico</h3>
                <p className="text-slate-600 leading-relaxed text-sm">Técnica, postura e a leveza da dança clássica para a formação de novos bailarinos.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Dança Contemporânea</h3>
                <p className="text-slate-600 leading-relaxed text-sm">Liberdade de expressão, pesquisa de movimento e a criação de novas poéticas corporais.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Dança Dramática</h3>
                <p className="text-slate-600 leading-relaxed text-sm">A união perfeita entre a expressão corporal, o ritmo e o teatro, valorizando a cultura popular.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Hip Hop / Danças Urbanas</h3>
                <p className="text-slate-600 leading-relaxed text-sm">O ritmo e a força da cultura de rua, celebrando a identidade e a energia da juventude.</p>
              </div>
              <div className="space-y-2 md:col-span-2">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Dança Funcional</h3>
                <p className="text-slate-600 leading-relaxed text-sm">Consciência corporal, saúde, bem-estar e qualidade de vida por meio do movimento.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Música (Reverso) */}
        <div className="bg-white rounded-[3rem] shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row-reverse border border-slate-100 group">
          <div className="lg:w-2/5 min-h-[300px] lg:min-h-full relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop" alt="Música" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-orange-900/40 mix-blend-multiply"></div>
          </div>
          <div className="lg:w-3/5 p-8 lg:p-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center shrink-0">
                <Music size={32} />
              </div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Música</h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              O som que pulsa no Vidança transforma a escuta e cria conexões profundas. Nossos cursos de música unem técnica e sensibilidade.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-orange-500"></span> Flauta</h3>
                <p className="text-slate-600 leading-relaxed text-sm">Introdução à musicalização, percepção melódica e o sopro poético da música clássica e popular.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-orange-500"></span> Percussão</h3>
                <p className="text-slate-600 leading-relaxed text-sm">O batuque que conecta! O aprendizado do ritmo a partir das nossas matrizes culturais e tambores periféricos.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Artes Manuais */}
        <div className="bg-white rounded-[3rem] shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row border border-slate-100 group">
          <div className="lg:w-2/5 min-h-[300px] lg:min-h-full relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=800&auto=format&fit=crop" alt="Artes Manuais" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-purple-900/40 mix-blend-multiply"></div>
          </div>
          <div className="lg:w-3/5 p-8 lg:p-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center shrink-0">
                <Palette size={32} />
              </div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Artes Manuais</h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Cursos focados na economia criativa, na valorização das tradições artesanais do Ceará e na geração de renda.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-purple-500"></span> Fuxico e Bordado</h3>
                <p className="text-slate-600 leading-relaxed text-sm">Resgate de técnicas tradicionais que transformam tecidos e linhas em pura poesia visual e afetiva.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-purple-500"></span> Corte e Costura</h3>
                <p className="text-slate-600 leading-relaxed text-sm">Modelagem, confecção de peças e autonomia técnica para abrir portas no mercado de trabalho e na moda.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Esporte e Cidadania (Reverso) */}
        <div className="bg-white rounded-[3rem] shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row-reverse border border-slate-100 group">
          <div className="lg:w-2/5 min-h-[300px] lg:min-h-full relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1542152342-a226760de8f5?q=80&w=800&auto=format&fit=crop" alt="Esporte e Cidadania" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-emerald-900/40 mix-blend-multiply"></div>
          </div>
          <div className="lg:w-3/5 p-8 lg:p-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
                <Trophy size={32} />
              </div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Esporte & Cidadania</h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Disciplinas que trabalham a mente, o respeito mútuo, a defesa pessoal e a valorização da cultura afro-brasileira.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Karatê</h3>
                <p className="text-slate-600 leading-relaxed text-sm">Filosofia oriental aliada à disciplina, ao equilíbrio emocional e ao desenvolvimento motor.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Capoeira</h3>
                <p className="text-slate-600 leading-relaxed text-sm">Jogo, luta, música e história. Uma expressão legítima da nossa identidade e resistência cultural.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tecnologia */}
        <div className="bg-white rounded-[3rem] shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row border border-slate-100 group">
          <div className="lg:w-2/5 min-h-[300px] lg:min-h-full relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" alt="Tecnologia" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-cyan-900/40 mix-blend-multiply"></div>
          </div>
          <div className="lg:w-3/5 p-8 lg:p-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center shrink-0">
                <Laptop size={32} />
              </div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Tecnologia</h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Preparando a nossa comunidade para os desafios contemporâneos por meio de ferramentas práticas e linguagens inclusivas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-cyan-500"></span> Robótica</h3>
                <p className="text-slate-600 leading-relaxed text-sm">Raciocínio lógico, programação e tecnologia ao alcance de crianças e jovens para criarem soluções do futuro.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Inclusão (Reverso) */}
        <div className="bg-white rounded-[3rem] shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row-reverse border border-slate-100 group">
          <div className="lg:w-2/5 min-h-[300px] lg:min-h-full relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop" alt="Inclusão" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-rose-900/40 mix-blend-multiply"></div>
          </div>
          <div className="lg:w-3/5 p-8 lg:p-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center shrink-0">
                <HeartHandshake size={32} />
              </div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Inclusão</h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Promovendo a verdadeira inclusão, comunicação acessível e desenvolvimento prático para a vida em sociedade.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-rose-500"></span> Libras</h3>
                <p className="text-slate-600 leading-relaxed text-sm">Língua Brasileira de Sinais: Acessibilidade dentro e fora do nosso território.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-rose-500"></span> Educação Financeira</h3>
                <p className="text-slate-600 leading-relaxed text-sm">Aprendizado prático sobre gestão de recursos, planejamento de vida e economia doméstica de forma simples.</p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
