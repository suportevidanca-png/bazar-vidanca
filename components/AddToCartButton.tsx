'use client';

import { useState } from 'react';
import { ShoppingBag, Check } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import { product } from '@prisma/client';
import { incrementCartCount } from '@/app/actions';

export default function AddToCartButton({ product }: { product: product }) {
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = async () => {
    addItem(product, quantity);
    setAdded(true);
    await incrementCartCount(product.id);
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
    <div className="mb-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
          <button 
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
            className="w-12 h-12 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition font-bold"
          >
            -
          </button>
          <span className="w-12 text-center font-bold text-slate-900">{quantity}</span>
          <button 
            onClick={() => setQuantity(q => Math.min(product.stockCount, q + 1))}
            className="w-12 h-12 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition font-bold"
          >
            +
          </button>
        </div>
        <span className="text-sm text-slate-500 font-medium">{product.stockCount} disponíveis em estoque</span>
      </div>
      
      <button 
        onClick={handleAddToCart}
        disabled={added}
        className={`w-full py-5 rounded-2xl font-bold text-lg transition-colors shadow-xl shadow-slate-900/20 flex items-center justify-center gap-3 ${
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
            <ShoppingBag size={24} /> Adicionar {quantity} à Sacola
          </>
        )}
      </button>
    </div>
  );
}
