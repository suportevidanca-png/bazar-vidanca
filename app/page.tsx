import { ArrowRight, ShoppingBag, Music, Palette, Users, Sparkles, Heart } from 'lucide-react';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import CustomCursor from '@/components/CustomCursor';
import PageTracker from '@/components/PageTracker';

export const dynamic = 'force-dynamic';

export default async function InstitutionalHome() {
  const latestProducts = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' },
    take: 4,
  });

  return (
    <div className="bg-white min-h-screen relative selection:bg-orange-500 selection:text-white">
      <CustomCursor />
      
      {/* HERO SECTION - TELA CHEIA C/ IMAGEM */}
      <section className="relative w-full min-h-[90vh] flex items-center pt-20 pb-32">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero.png" 
            alt="Instituto Vidança" 
            className="w-full h-full object-cover"
          />
          {/* Degradê escuro para garantir legibilidade (Gerando Falcões style) */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500 text-white font-black text-xs uppercase tracking-widest shadow-xl">
              <Sparkles size={14} />
              Transformando Vidas
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight drop-shadow-lg">
              A arte de <br />
              <span className="text-orange-400">
                gerar futuros
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed max-w-lg font-medium drop-shadow-md">
              O Instituto Vidança utiliza a dança, a música e a profissionalização como ferramentas de inclusão social na comunidade de Vila Velha.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-6">
              <Link href="/doar" className="group relative bg-orange-500 text-white px-8 py-4 rounded-xl font-black uppercase tracking-wider overflow-hidden shadow-2xl flex items-center gap-2 transition-all hover:scale-105 hover:bg-orange-400">
                <Heart size={20} className="fill-white" />
                <span>Quero Apoiar</span>
              </Link>
              <Link href="/sobre" className="bg-white/10 backdrop-blur-md border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-slate-900 transition-all hover:scale-105 shadow-xl">
                Nossa História
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EIXOS DE ATUAÇÃO / CURSOS */}
      <section className="py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <div className="inline-block mb-4">
              <span className="bg-slate-200 text-slate-700 text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest">
                Nossos Pilares
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              Eixos de Atuação
            </h2>
            <p className="text-slate-600 text-lg md:text-xl">
              Programas educacionais e culturais gratuitos que revelam talentos escondidos e geram novas oportunidades de vida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Dança */}
            <Link href="/sobre" className="group relative bg-slate-900 p-10 rounded-[2.5rem] shadow-xl hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-900/50 transition-all duration-500 overflow-hidden cursor-pointer block min-h-[400px] flex flex-col justify-end">
              <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=800&auto=format&fit=crop" alt="Dança" className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent"></div>
              </div>
              <div className="relative z-10 text-white mt-auto">
                <div className="w-16 h-16 bg-blue-500/80 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                  <Users size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-black mb-3 tracking-tight">Dança</h3>
                <p className="text-blue-50 leading-relaxed mb-6 text-base font-medium line-clamp-3">
                  Balé clássico, dança contemporânea e ritmos populares, promovendo disciplina, saúde e expressão corporal.
                </p>
                <div className="font-black uppercase tracking-wider flex items-center gap-2 group-hover:text-blue-200 text-sm">
                  <span>Conhecer</span> 
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-3" />
                </div>
              </div>
            </Link>

            {/* Card 2: Música */}
            <Link href="/sobre" className="group relative bg-slate-900 p-10 rounded-[2.5rem] shadow-xl hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-900/50 transition-all duration-500 overflow-hidden cursor-pointer block min-h-[400px] flex flex-col justify-end">
              <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop" alt="Música" className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90 via-orange-900/40 to-transparent"></div>
              </div>
              <div className="relative z-10 text-white mt-auto">
                <div className="w-16 h-16 bg-orange-500/80 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Music size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-black mb-3 tracking-tight">Música</h3>
                <p className="text-orange-50 leading-relaxed mb-6 text-base font-medium line-clamp-3">
                  Aulas teóricas e práticas de instrumentos variados e canto coral, despertando talentos e sensibilidade.
                </p>
                <div className="font-black uppercase tracking-wider flex items-center gap-2 group-hover:text-orange-200 text-sm">
                  <span>Conhecer</span> 
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-3" />
                </div>
              </div>
            </Link>

            {/* Card 3: Ofícios */}
            <Link href="/sobre" className="group relative bg-slate-900 p-10 rounded-[2.5rem] shadow-xl hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-900/50 transition-all duration-500 overflow-hidden cursor-pointer block min-h-[400px] flex flex-col justify-end">
              <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=800&auto=format&fit=crop" alt="Ofícios" className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent"></div>
              </div>
              <div className="relative z-10 text-white mt-auto">
                <div className="w-16 h-16 bg-purple-500/80 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  <Palette size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-black mb-3 tracking-tight">Ofícios</h3>
                <p className="text-purple-50 leading-relaxed mb-6 text-base font-medium line-clamp-3">
                  Costura, artesanato criativo e tecnologia, focando na profissionalização e na geração de renda local.
                </p>
                <div className="font-black uppercase tracking-wider flex items-center gap-2 group-hover:text-purple-200 text-sm">
                  <span>Conhecer</span> 
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-3" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* MÉTRICAS DE IMPACTO (ESCURO) */}
      <section className="bg-slate-950 py-24 relative overflow-hidden">
        {/* Elemento gráfico de fundo */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-black"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-white">
            <div className="px-4 group cursor-default">
              <div className="text-5xl md:text-6xl lg:text-7xl font-black mb-2 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2 text-white">+40</div>
              <div className="text-sm md:text-base font-bold uppercase tracking-widest text-slate-400">Anos de História</div>
            </div>
            <div className="px-4 group cursor-default">
              <div className="text-5xl md:text-6xl lg:text-7xl font-black mb-2 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2 text-orange-400">+200</div>
              <div className="text-sm md:text-base font-bold uppercase tracking-widest text-slate-400">Alunos Atendidos</div>
            </div>
            <div className="px-4 group cursor-default">
              <div className="text-5xl md:text-6xl lg:text-7xl font-black mb-2 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2 text-blue-400">+15</div>
              <div className="text-sm md:text-base font-bold uppercase tracking-widest text-slate-400">Oficinas Ativas</div>
            </div>
            <div className="px-4 group cursor-default">
              <div className="text-5xl md:text-6xl lg:text-7xl font-black mb-2 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2 text-purple-400">100%</div>
              <div className="text-sm md:text-base font-bold uppercase tracking-widest text-slate-400">Transformação</div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO VISITE NOSSO BAZAR */}
      <section className="py-32 bg-white border-t border-slate-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white font-black text-xs uppercase tracking-widest mb-6">
                Economia Solidária
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                Visite Nosso Bazar
              </h2>
              <p className="text-slate-600 text-xl font-medium">
                Toda a renda com a venda de produtos no Bazar Vidança é revertida diretamente para a manutenção das oficinas.
              </p>
            </div>
            <Link href="/bazar" className="group shrink-0 bg-blue-600 text-white px-8 py-4 rounded-xl font-black uppercase tracking-wider hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 flex items-center gap-3 hover:-translate-y-1 hover:scale-105">
              Acessar Loja Completa 
              <ShoppingBag size={20} className="transition-transform duration-300 group-hover:scale-110" />
            </Link>
          </div>

          {/* Destaques do Bazar */}
          {latestProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {latestProducts.map((product) => {
                const images = product.images as string[];
                const coverImage = images && images.length > 0 ? images[0] : null;

                return (
                  <Link href={`/product/${product.id}`} key={product.id} className="bg-[#F8F9FA] rounded-[2.5rem] p-5 border border-slate-100 hover:shadow-2xl hover:border-slate-300 transition-all duration-500 group flex flex-col hover:-translate-y-2">
                    <div className="relative aspect-square bg-white rounded-3xl mb-6 flex items-center justify-center overflow-hidden">
                      {coverImage ? (
                        <img src={coverImage} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      ) : (
                        <span className="text-slate-300 text-xs text-center px-4 font-medium">Sem Imagem</span>
                      )}
                      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-500"></div>
                    </div>
                    
                    <div className="flex-1 px-2">
                      <h4 className="font-black text-xl text-slate-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-sm text-slate-500 font-bold mb-4 uppercase tracking-wider">
                        {product.category}
                      </p>
                    </div>

                    <div className="px-2 pb-2 flex justify-between items-center mt-auto">
                      <span className="text-2xl font-black text-slate-900">
                        R$ {Number(product.price).toFixed(2)}
                      </span>
                      <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-900 shadow-sm border border-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 group-hover:scale-110">
                        <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="bg-[#F8F9FA] rounded-[3rem] p-16 text-center border border-slate-100">
              <ShoppingBag size={64} className="mx-auto text-slate-300 mb-6" />
              <p className="text-slate-500 font-bold text-xl">Não há produtos em destaque no momento.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}