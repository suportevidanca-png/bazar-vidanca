import { ShoppingBag, ArrowRight } from 'lucide-react';
import { prisma } from '@/lib/prisma'; // Importa a conexão

export default async function Home() {
  // Busca os produtos do MySQL usando o Prisma
  const products = await prisma.product.findMany();

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-20">
      {/* Hero Section - Minimalista com tom pastel */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm">Instituto Vidança</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Capture a arte em cada detalhe.
          </h1>
          <p className="text-lg text-slate-600 max-w-md">
            Produtos únicos que financiam oficinas de arte, dança e tecnologia para nossa comunidade.
          </p>
          <div className="flex gap-4">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition shadow-lg flex items-center gap-2">
              Comprar Agora <ArrowRight size={18} />
            </button>
            <button className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition">
              Nossa História
            </button>
          </div>
        </div>

        {/* Espaço para a Imagem de Destaque (como o Gimbal da sua foto) */}
        <div className="relative aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-[40px] flex items-center justify-center overflow-hidden shadow-2xl">
          <div className="absolute inset-0 flex items-center justify-center text-blue-200 font-black text-9xl select-none">
            VIDANÇA
          </div>
          {/* Quando tiver a foto do produto, ela entra aqui */}
          <div className="z-10 text-center p-8">
            <p className="text-slate-400 italic">Espaço para foto do produto em destaque</p>
          </div>
        </div>
      </section>

      {/* Seção de Categorias Redondas (como no design que você gostou) */}
      <section className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h3 className="text-2xl font-bold mb-10 text-slate-800">Escolha por Categoria</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {['Roupas', 'Brinquedos', 'Acessórios', 'Artesanato', 'Eletros'].map((cat) => (
            <div key={cat} className="group cursor-pointer">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-sm border border-slate-100 flex items-center justify-center group-hover:shadow-md group-hover:border-blue-200 transition-all duration-300 mb-3 overflow-hidden">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
                  <ShoppingBag size={24} />
                </div>
              </div>
              <span className="text-sm font-semibold text-slate-600 group-hover:text-blue-600 transition">{cat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Grid de Produtos REAIS do Banco */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-slate-900 mb-10">Produtos do Bazar</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl p-4 shadow-sm border border-slate-50 hover:shadow-xl transition-all duration-500 group">
              <div className="aspect-square bg-slate-100 rounded-2xl mb-4 flex items-center justify-center">
                 {/* Placeholder para quando não tem imagem */}
                 <span className="text-slate-300 text-xs text-center px-4">{product.name}</span>
              </div>
              <h4 className="font-bold text-slate-800 mb-1">{product.name}</h4>
              <p className="text-xs text-slate-400 mb-3">{product.category}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-black text-blue-600">
                  R$ {Number(product.price).toFixed(2)}
                </span>
                <button className="bg-slate-900 text-white p-2 rounded-xl hover:bg-blue-600 transition">
                  <ShoppingBag size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}