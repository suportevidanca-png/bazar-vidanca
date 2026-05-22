import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { ArrowLeft, BarChart3, Users, Eye, ShoppingBag } from 'lucide-react';
import DashboardProductRow from '@/components/DashboardProductRow';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  // Fetch stats
  const pageVisits = await prisma.pageVisit.groupBy({
    by: ['path'],
    _count: { path: true },
  });

  const getCount = (path: string) => pageVisits.find(v => v.path === path)?._count.path || 0;
  
  const homeVisits = getCount('/');
  const bazarVisits = getCount('/bazar');
  const doarVisits = getCount('/doar');

  // Fetch products
  const products = await prisma.product.findMany({
    orderBy: [
      { views: 'desc' },
      { createdAt: 'desc' }
    ]
  });

  const totalViews = products.reduce((acc, p) => acc + p.views, 0);
  const totalCartAdds = products.reduce((acc, p) => acc + p.addedToCart, 0);

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="p-2 bg-white border border-slate-200 rounded-full hover:bg-slate-100 transition text-slate-600">
              <ArrowLeft size={20} />
            </Link>
            <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3">
              <BarChart3 className="text-blue-600" /> Dashboard de Métricas
            </h1>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                <Users size={24} />
              </div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">Acessos Home</div>
            </div>
            <div className="text-4xl font-black text-slate-900">{homeVisits}</div>
          </div>
          
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center">
                <ShoppingBag size={24} />
              </div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">Acessos Bazar</div>
            </div>
            <div className="text-4xl font-black text-slate-900">{bazarVisits}</div>
          </div>
          
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center">
                <HeartIcon />
              </div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">Acessos Doação</div>
            </div>
            <div className="text-4xl font-black text-slate-900">{doarVisits}</div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center">
                <Eye size={24} />
              </div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">Total Visitas Prod.</div>
            </div>
            <div className="text-4xl font-black text-slate-900">{totalViews}</div>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-8 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">Desempenho de Produtos</h2>
            <div className="bg-slate-100 text-slate-600 px-4 py-2 rounded-xl text-sm font-bold">
              {totalCartAdds} Adiçoes Totais ao Carrinho
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider font-bold">
                  <th className="p-4 pl-8">Produto</th>
                  <th className="p-4 text-center">Visualizações</th>
                  <th className="p-4 text-center">No Carrinho</th>
                  <th className="p-4 text-center">Estoque</th>
                  <th className="p-4 text-center">Ações / Gestão</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <DashboardProductRow key={product.id} product={product} />
                ))}
              </tbody>
            </table>
            {products.length === 0 && (
              <div className="text-center p-12 text-slate-500">
                Nenhum produto cadastrado ainda.
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

function HeartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
  );
}
