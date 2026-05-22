import Link from "next/link";
import { ArrowLeft, Users, Music, Palette, Trophy, Laptop, HeartHandshake } from "lucide-react";
import PageTracker from "@/components/PageTracker";

export default function CursosPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <PageTracker />
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition mb-8 font-medium">
            <ArrowLeft size={18} /> Voltar para a Página Inicial
          </Link>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Nossos Cursos</h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed">
            Programas educacionais e culturais gratuitos que revelam talentos escondidos e geram novas oportunidades de vida. Conheça nossos eixos de atuação.
          </p>
        </div>
      </section>

      {/* Categorias e Cursos */}
      <section className="max-w-7xl mx-auto px-6 mt-12 space-y-16">
        
        {/* Dança */}
        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3 space-y-6">
            <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
              <Users size={40} />
            </div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Dança</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              A dança é o nosso coração. Aqui, o corpo se expressa em movimento através de diferentes ritmos e propostas, estimulando a disciplina, a criatividade e a sensibilidade artística.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">Balé Clássico</h3>
              <p className="text-slate-600 leading-relaxed">Técnica, postura e a leveza da dança clássica para a formação de novos bailarinos.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">Dança Contemporânea</h3>
              <p className="text-slate-600 leading-relaxed">Liberdade de expressão, pesquisa de movimento e a criação de novas poéticas corporais.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">Dança Dramática</h3>
              <p className="text-slate-600 leading-relaxed">A união perfeita entre a expressão corporal, o ritmo e o teatro, valorizando a cultura popular.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">Hip Hop / Danças Urbanas</h3>
              <p className="text-slate-600 leading-relaxed">O ritmo e a força da cultura de rua, celebrando a identidade e a energia da juventude.</p>
            </div>
            <div className="space-y-2 sm:col-span-2">
              <h3 className="text-xl font-bold text-slate-900">Dança Funcional</h3>
              <p className="text-slate-600 leading-relaxed">Consciência corporal, saúde, bem-estar e qualidade de vida por meio do movimento.</p>
            </div>
          </div>
        </div>

        {/* Música */}
        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3 space-y-6">
            <div className="w-20 h-20 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center">
              <Music size={40} />
            </div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Música</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              O som que pulsa no Vidança transforma a escuta e cria conexões profundas. Nossos cursos de música unem técnica e sensibilidade.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">Flauta</h3>
              <p className="text-slate-600 leading-relaxed">Introdução à musicalização, percepção melódica e o sopro poético da música clássica e popular.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">Percussão</h3>
              <p className="text-slate-600 leading-relaxed">O batuque que conecta! O aprendizado do ritmo a partir das nossas matrizes culturais e tambores periféricos.</p>
            </div>
          </div>
        </div>

        {/* Artes Manuais e Manufatura */}
        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3 space-y-6">
            <div className="w-20 h-20 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center">
              <Palette size={40} />
            </div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Artes Manuais</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Cursos focados na economia criativa, na valorização das tradições artesanais do Ceará e na geração de renda.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">Fuxico e Bordado</h3>
              <p className="text-slate-600 leading-relaxed">Resgate de técnicas tradicionais que transformam tecidos e linhas em pura poesia visual e afetiva.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">Corte e Costura</h3>
              <p className="text-slate-600 leading-relaxed">Modelagem, confecção de peças e autonomia técnica para abrir portas no mercado de trabalho e na moda.</p>
            </div>
          </div>
        </div>

        {/* Esporte e Cidadania */}
        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3 space-y-6">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
              <Trophy size={40} />
            </div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Esporte & Cidadania</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Disciplinas que trabalham a mente, o respeito mútuo, a defesa pessoal e a valorização da cultura afro-brasileira.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">Karatê</h3>
              <p className="text-slate-600 leading-relaxed">Filosofia oriental aliada à disciplina, ao equilíbrio emocional e ao desenvolvimento motor.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">Capoeira</h3>
              <p className="text-slate-600 leading-relaxed">Jogo, luta, música e história. Uma expressão legítima da nossa identidade e resistência cultural.</p>
            </div>
          </div>
        </div>

        {/* Tecnologia */}
        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3 space-y-6">
            <div className="w-20 h-20 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center">
              <Laptop size={40} />
            </div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Tecnologia</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Preparando a nossa comunidade para os desafios contemporâneos por meio de ferramentas práticas.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">Robótica</h3>
              <p className="text-slate-600 leading-relaxed">Raciocínio lógico, programação e tecnologia ao alcance de crianças e jovens para criarem soluções do futuro.</p>
            </div>
          </div>
        </div>

        {/* Inclusão */}
        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3 space-y-6">
            <div className="w-20 h-20 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center">
              <HeartHandshake size={40} />
            </div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Inclusão</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Iniciativas focadas em linguagens inclusivas e desenvolvimento humano para a vida em sociedade.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">Libras</h3>
              <p className="text-slate-600 leading-relaxed">Língua Brasileira de Sinais: Promovendo a verdadeira inclusão e a comunicação acessível dentro e fora do nosso território.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">Educação Financeira</h3>
              <p className="text-slate-600 leading-relaxed">Aprendizado prático sobre gestão de recursos, planejamento de vida e economia doméstica de forma simples e direta.</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
