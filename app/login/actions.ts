'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  const password = formData.get('password') as string;
  
  // Senha simples para o MVP do projeto. Em produção o ideal é usar env.
  if (password === 'bazar123') { 
    const cookieStore = await cookies();
    cookieStore.set('admin_auth', 'true', { 
      secure: process.env.NODE_ENV === 'production', 
      httpOnly: true, 
      path: '/' 
    });
    redirect('/admin');
  } else {
    redirect('/login?error=true');
  }
}
