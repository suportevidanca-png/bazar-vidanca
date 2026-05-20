'use client';

import { useFormStatus } from 'react-dom';
import { login } from './actions';
import { Lock } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button 
      type="submit" 
      disabled={pending}
      className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition disabled:opacity-50 mt-4"
    >
      {pending ? 'Verificando...' : 'Entrar no Painel'}
    </button>
  );
}

function LoginContent() {
  const searchParams = useSearchParams();
  const hasError = searchParams.get('error') === 'true';

  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center">
        <div className="w-16 h-16 bg-slate-100 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
          <Lock size={32} />
        </div>
        
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Acesso Restrito</h1>
        <p className="text-slate-500 mb-8">Área exclusiva para administração do bazar.</p>

        {hasError && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm font-medium">
            Senha incorreta. Tente novamente.
          </div>
        )}

        <form action={login} className="space-y-4">
          <div>
            <input 
              type="password" 
              name="password" 
              required 
              placeholder="Senha de acesso" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition text-center" 
            />
          </div>

          <SubmitButton />
        </form>

        <div className="mt-6 text-sm">
          <Link href="/" className="text-slate-500 hover:text-slate-900 transition">
            Voltar para a Loja
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="bg-slate-50 min-h-screen flex items-center justify-center p-6">Carregando...</div>}>
      <LoginContent />
    </Suspense>
  );
}
