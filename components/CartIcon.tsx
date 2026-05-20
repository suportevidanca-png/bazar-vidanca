'use client';

import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '@/store/cart';
import { useEffect, useState } from 'react';

export default function CartIcon() {
  const [mounted, setMounted] = useState(false);
  const totalItems = useCartStore((state) => state.getTotalItems());

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Link href="/carrinho" className="relative p-2 text-slate-300 hover:text-white transition rounded-full hover:bg-white/10">
      <ShoppingBag className="w-5 h-5" />
      {mounted && totalItems > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
          {totalItems}
        </span>
      )}
    </Link>
  );
}
