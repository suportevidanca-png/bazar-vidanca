import Link from 'next/link';
import { ShoppingBag, Search, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-slate-900 text-white p-2 rounded-xl">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">Bazar Vidança</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Produtos</Link>
              <Link href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Sobre o Instituto</Link>
              <Link href="/admin" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Painel Admin</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-slate-900 transition rounded-full hover:bg-slate-50">
              <Search className="w-5 h-5" />
            </button>
            <button className="md:hidden p-2 text-slate-400 hover:text-slate-900 transition rounded-full hover:bg-slate-50">
              <Menu className="w-5 h-5" />
            </button>
            <Link href="#" className="hidden md:flex items-center justify-center bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition shadow-sm">
              Doar agora
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}