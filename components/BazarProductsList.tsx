'use client';

import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '@/store/cart';
import { useEffect, useState } from 'react';
import { product } from '@prisma/client';

export default function BazarProductsList({ products }: { products: product[] }) {
  const [mounted, setMounted] = useState(false);
  const cartItems = useCartStore((state) => state.items);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter out products that are already in the cart
  const displayedProducts = mounted 
    ? products.filter(p => !cartItems.some(item => item.product.id === p.id))
    : products; // On server render, show all to avoid hydration mismatch, then filter

  if (displayedProducts.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-slate-500">Nenhum produto disponível no momento.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {displayedProducts.map((product) => {
        const images = product.images as string[];
        const coverImage = images && images.length > 0 ? images[0] : null;

        const conditionLabels: Record<string, string> = {
          NEW: "Novo",
          LIKE_NEW: "Seminovo",
          USED: "Usado",
        };

        const isOutOfStock = product.stockCount < 1;

        return (
          <Link href={`/product/${product.id}`} key={product.id} className="bg-white rounded-3xl p-4 shadow-sm border border-slate-50 hover:shadow-xl transition-all duration-500 group flex flex-col cursor-pointer">
            <div className="relative aspect-square bg-slate-100 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full shadow-sm text-slate-700">
                  {conditionLabels[product.condition] || "Usado"}
                </div>
                
                {coverImage ? (
                  <img src={coverImage} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <span className="text-slate-300 text-xs text-center px-4">Sem Imagem</span>
                )}
            </div>
            
            <div className="flex-1">
              <h4 className="font-bold text-slate-800 mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors">{product.name}</h4>
              <p className="text-xs text-slate-400 mb-3">{product.category} {product.size ? `• Tam: ${product.size}` : ''}</p>
              <p className="text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                {product.shortDescription}
              </p>
            </div>

            <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-50">
              <span className="text-lg font-black text-blue-600">
                R$ {Number(product.price).toFixed(2)}
              </span>
              
              {isOutOfStock ? (
                <span className="text-xs font-bold text-red-500 bg-red-50 px-3 py-2 rounded-xl">Esgotado</span>
              ) : (
                <button className="bg-slate-900 text-white p-2 rounded-xl hover:bg-blue-600 transition shadow-sm">
                  <ShoppingBag size={18} />
                </button>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
