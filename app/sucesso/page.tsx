'use client';

import { useEffect } from 'react';
import { useCartStore } from '@/store/cart';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SucessoPage() {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    // Limpa o carrinho logo que a página de sucesso carrega
    clearCart();
  }, [clearCart]);

  return (
    <div className="bg-slate-50 min-h-screen py-24 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-6 text-center">
        <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm">
          <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          
          <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Pedido Realizado!</h1>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Seu pedido foi registrado com sucesso. Entraremos em contato via WhatsApp para combinar o pagamento (PIX) e a entrega/retirada.
          </p>
          
          <Link href="/" className="inline-flex items-center justify-center gap-2 w-full bg-slate-900 text-white px-6 py-4 rounded-xl font-bold hover:bg-slate-800 transition">
            Voltar para a Loja <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
