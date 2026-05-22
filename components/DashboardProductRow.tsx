'use client';

import { useState, useTransition } from 'react';
import { toggleProductStatus, updateProductStock } from '@/app/actions';
import { product } from '@prisma/client';

export default function DashboardProductRow({ product }: { product: product }) {
  const [isPending, startTransition] = useTransition();
  const [stock, setStock] = useState(product.stockCount);

  const handleToggleActive = () => {
    startTransition(() => {
      toggleProductStatus(product.id, !product.isActive);
    });
  };

  const handleStockUpdate = (newStock: number) => {
    const validStock = Math.max(0, newStock);
    setStock(validStock);
    startTransition(() => {
      updateProductStock(product.id, validStock);
    });
  };

  return (
    <tr className={`border-b border-slate-100 ${!product.isActive ? 'bg-slate-50' : ''} ${isPending ? 'opacity-50' : ''}`}>
      <td className="p-4">
        <div className="font-bold text-slate-900 line-clamp-1">{product.name}</div>
        <div className="text-xs text-slate-500">{product.category}</div>
      </td>
      <td className="p-4 text-center">
        <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-full">
          {product.views}
        </span>
      </td>
      <td className="p-4 text-center">
        <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
          {product.addedToCart}
        </span>
      </td>
      <td className="p-4">
        <div className="flex items-center justify-center gap-2">
          <button 
            onClick={() => handleStockUpdate(stock - 1)}
            className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition text-slate-600 font-bold"
          >-</button>
          <span className="w-8 text-center font-bold text-slate-800">{stock}</span>
          <button 
            onClick={() => handleStockUpdate(stock + 1)}
            className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition text-slate-600 font-bold"
          >+</button>
        </div>
      </td>
      <td className="p-4 text-center">
        <button 
          onClick={handleToggleActive}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
            product.isActive 
              ? 'bg-red-50 text-red-600 hover:bg-red-100 border border-red-200' 
              : 'bg-green-50 text-green-600 hover:bg-green-100 border border-green-200'
          }`}
        >
          {product.isActive ? 'Remover da Vitrine' : 'Voltar à Vitrine'}
        </button>
      </td>
    </tr>
  );
}
