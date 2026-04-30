import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header"; // Vamos criar este arquivo a seguir

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bazar Vidança | Sustentabilidade e Arte",
  description: "Catálogo de produtos do Instituto Vidança",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        {/* Futuro Footer aqui */}
      </body>
    </html>
  );
}