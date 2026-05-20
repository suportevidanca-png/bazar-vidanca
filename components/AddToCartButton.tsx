'use client';

import { useState } from 'react';
import { ShoppingBag, Check } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import { product } from '@prisma/client';

export default function AddToCartButton({ product }: { product: product }) {
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const isOutOfStock = product.stockCount < 1;

  if (isOutOfStock) {
    return (
      <button disabled className="w-full bg-slate-100 text-slate-400 py-5 rounded-2xl font-bold text-lg mb-6 cursor-not-allowed border border-slate-200">
        Produto Esgotado
      </button>
    );
  }

  return (
    <button 
      onClick={handleAddToCart}
      disabled={added}
      className={`w-full py-5 rounded-2xl font-bold text-lg transition-colors shadow-xl shadow-slate-900/20 mb-6 flex items-center justify-center gap-3 ${
        added 
        ? "bg-green-500 text-white hover:bg-green-600" 
        : "bg-slate-900 text-white hover:bg-blue-600"
      }`}
    >
      {added ? (
        <>
          <Check size={24} /> Adicionado à Sacola
        </>
      ) : (
        <>
          <ShoppingBag size={24} /> Adicionar à Sacola
        </>
      )}
    </button>
  );
}
