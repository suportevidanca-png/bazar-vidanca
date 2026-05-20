'use client';

import { useCartStore } from '@/store/cart';
import { Trash2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { createOrder } from './actions';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button 
      type="submit" 
      disabled={pending}
      className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition disabled:opacity-50 mt-4"
    >
      {pending ? 'Processando...' : 'Finalizar Pedido'}
    </button>
  );
}

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Sua sacola está vazia</h1>
        <p className="text-slate-500 mb-8">Navegue pela nossa vitrine e encontre peças incríveis.</p>
        <Link href="/" className="inline-block bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition">
          Voltar para a Vitrine
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition mb-8 font-medium">
          <ArrowLeft size={18} /> Continuar Comprando
        </Link>

        <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Sua Sacola</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Lista de Itens */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => {
              const product = item.product;
              const images = product.images as string[] || [];
              const mainImage = images[0];
              const price = typeof product.price === 'string' ? parseFloat(product.price) : Number(product.price);

              return (
                <div key={product.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6">
                  <div className="w-24 h-24 bg-slate-100 rounded-2xl overflow-hidden flex-shrink-0">
                    {mainImage ? (
                      <img src={mainImage} alt={product.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs text-slate-400">Sem Imagem</div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900">{product.name}</h3>
                    <p className="text-sm text-slate-500 mb-2">{product.shortDescription}</p>
                    <div className="text-lg font-black text-slate-900">R$ {price.toFixed(2)}</div>
                  </div>

                  <div className="flex flex-col items-end gap-4">
                    <button 
                      onClick={() => removeItem(product.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                      title="Remover item"
                    >
                      <Trash2 size={20} />
                    </button>
                    {/* Como é bazar, a quantidade quase sempre é 1, mas deixamos aqui se precisar */}
                    <div className="flex items-center gap-3 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                      <button onClick={() => updateQuantity(product.id, item.quantity - 1)} className="text-slate-500 hover:text-slate-900 font-bold px-2">-</button>
                      <span className="font-bold text-slate-900 w-4 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(product.id, item.quantity + 1)} className="text-slate-500 hover:text-slate-900 font-bold px-2">+</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Resumo e Checkout */}
          <div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm sticky top-24">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Resumo do Pedido</h2>
              
              <div className="flex justify-between items-center mb-4 text-slate-600">
                <span>Subtotal ({items.length} itens)</span>
                <span>R$ {getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-6 text-slate-600">
                <span>Frete Solidário</span>
                <span className="text-green-500 font-bold">Grátis</span>
              </div>
              
              <div className="border-t border-slate-100 pt-6 mb-8 flex justify-between items-center">
                <span className="text-lg font-bold text-slate-900">Total</span>
                <span className="text-3xl font-black text-slate-900">R$ {getTotalPrice().toFixed(2)}</span>
              </div>

              <form action={createOrder} className="space-y-4">
                <h3 className="font-bold text-slate-900 mb-2">Seus Dados</h3>
                
                <input type="hidden" name="items" value={JSON.stringify(items.map(i => ({ productId: i.product.id, quantity: i.quantity, price: typeof i.product.price === 'string' ? parseFloat(i.product.price) : Number(i.product.price) })))} />
                <input type="hidden" name="totalAmount" value={getTotalPrice().toString()} />

                <div>
                  <input type="text" name="customerName" required placeholder="Nome Completo" className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition" />
                </div>
                <div>
                  <input type="email" name="customerEmail" required placeholder="E-mail" className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition" />
                </div>
                <div>
                  <input type="tel" name="customerPhone" required placeholder="WhatsApp / Telefone" className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition" />
                </div>

                <SubmitButton />
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
