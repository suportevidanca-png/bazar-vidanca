import { ShoppingBag, ArrowRight } from 'lucide-react';
import { prisma } from '@/lib/prisma'; // Importa a conexão
import Link from 'next/link';
import PageTracker from '@/components/PageTracker';
import BazarProductsList from '@/components/BazarProductsList';

export const dynamic = 'force-dynamic';

export default async function BazarHome() {
  // Busca os produtos do MySQL usando o Prisma
  const products = await prisma.product.findMany({
    where: { isActive: true },
    orderBy: { createdAt: 'desc' }
  });

  // Busca o produto destaque ou o mais recente
  const featuredProduct = await prisma.product.findFirst({
    where: { isFeatured: true, isActive: true }
  }) || (products.length > 0 ? products[0] : null);

  const featuredImages = featuredProduct ? (featuredProduct.images as string[]) : [];
  const featuredCover = featuredImages && featuredImages.length > 0 ? featuredImages[0] : null;

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-20">
      <PageTracker path="/bazar" />
      {/* Hero Section - Dinâmico */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm">Destaque do Bazar</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            {featuredProduct ? featuredProduct.name : "Capture a arte em cada detalhe."}
          </h1>
          <p className="text-lg text-slate-600 max-w-md">
            {featuredProduct ? featuredProduct.shortDescription : "Produtos únicos que financiam oficinas de arte, dança e tecnologia para nossa comunidade."}
          </p>
          <div className="flex gap-4 mt-8">
            {featuredProduct ? (
              <Link href={`/product/${featuredProduct.id}`} className="bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-600 transition shadow-lg flex items-center gap-2">
                Ver Detalhes <ArrowRight size={18} />
              </Link>
            ) : (
              <button disabled className="bg-slate-300 text-slate-500 px-8 py-4 rounded-full font-medium cursor-not-allowed">
                Catálogo Vazio
              </button>
            )}
            <Link href="/sobre" className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition">
              Nossa História
            </Link>
          </div>
        </div>

        {/* Imagem de Destaque */}
        {featuredProduct && featuredCover ? (
          <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl group cursor-pointer">
            <Link href={`/product/${featuredProduct.id}`}>
              <img src={featuredCover} alt={featuredProduct.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-10">
                <div className="text-white">
                  <span className="bg-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Destaque</span>
                  <p className="font-bold text-3xl">R$ {Number(featuredProduct.price).toFixed(2)}</p>
                </div>
              </div>
            </Link>
          </div>
        ) : (
          <div className="relative aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-[40px] flex items-center justify-center overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center text-blue-200 font-black text-9xl select-none">
              VIDANÇA
            </div>
            <div className="z-10 text-center p-8">
              <p className="text-slate-500 font-medium">Sem imagem de destaque</p>
            </div>
          </div>
        )}
      </section>

      {/* Seção de Categorias */}
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
        <BazarProductsList products={products} />
      </section>
    </div>
  );
}
