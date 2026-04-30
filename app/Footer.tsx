import Link from 'next/link';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight flex items-center gap-2">
              Bazar Vidança
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Sua compra apoia as oficinas de arte, dança e tecnologia do Instituto Vidança para a comunidade local.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/institutovidanca" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://facebook.com/institutovidanca" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Navegação</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm hover:text-white transition">Vitrine</Link></li>
              <li><Link href="/sobre" className="text-sm hover:text-white transition">Sobre o Instituto</Link></li>
              <li><Link href="/doar" className="text-sm hover:text-white transition">Como doar produtos</Link></li>
              <li><Link href="/admin" className="text-sm hover:text-white transition">Acesso Restrito</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-500 shrink-0" />
                <span className="text-sm leading-relaxed">Avenida L, 400 - Vila Velha<br />Fortaleza - CE</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-500 shrink-0" />
                <span className="text-sm">(85) 98643-0182</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-slate-500 shrink-0" />
                <span className="text-sm">contato@vidanca.org</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Apoie a Causa</h3>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Aceitamos doações de itens usados em bom estado para o bazar. Entre em contato para saber mais!
            </p>
            <Link href="/doar" className="flex items-center justify-center gap-2 w-full bg-slate-800 hover:bg-slate-700 text-white px-4 py-3 rounded-xl text-sm font-medium transition">
              <Heart className="w-4 h-4 text-red-400" />
              Seja um doador
            </Link>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Instituto Vidança. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-xs text-slate-500 hover:text-white transition">Termos de Uso</Link>
            <Link href="#" className="text-xs text-slate-500 hover:text-white transition">Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
