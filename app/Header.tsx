'use client';

import Link from 'next/link';
import { Search, Menu, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import CartIcon from '@/components/CartIcon';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  // A transparência dinâmica é apenas para a Home
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`w-full z-50 transition-all duration-300 ${
        isHome 
          ? `fixed top-0 left-0 right-0 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-sm py-2' : 'bg-gradient-to-b from-black/60 to-transparent py-4'}`
          : 'sticky top-0 bg-slate-900 border-b border-slate-800 shadow-sm py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <Image src="/logo.png" alt="Instituto Vidança" width={56} height={56} className="object-contain" />
              <span className="font-bold text-xl tracking-tight text-white">Instituto Vidança</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-sm font-medium text-slate-200 hover:text-white transition">O Instituto</Link>
              <Link href="/sobre" className="text-sm font-medium text-slate-200 hover:text-white transition">Projetos</Link>
              <Link href="/bazar" className="text-sm font-bold text-orange-400 hover:text-orange-300 transition flex items-center gap-1">
                Bazar Vidança
              </Link>
              <Link href="/login" className="text-sm font-medium text-slate-200 hover:text-white transition">Login</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-300 hover:text-white transition rounded-full hover:bg-white/10">
              <Search className="w-5 h-5" />
            </button>
            {/* Carrinho Restaurado */}
            <CartIcon />
            <button className="md:hidden p-2 text-slate-300 hover:text-white transition rounded-full hover:bg-white/10">
              <Menu className="w-5 h-5" />
            </button>
            <Link href="/doar" className="hidden md:flex items-center justify-center bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/30 hover:scale-105">
              Doar agora
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}