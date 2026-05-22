import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { ShoppingBag, ArrowLeft, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";
import PageTracker from "@/components/PageTracker";

export const dynamic = 'force-dynamic';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: { id },
  });

  if (!product) {
    notFound();
  }

  const images = (product.images as string[]) || [];
  const mainImage = images.length > 0 ? images[0] : null;
  const isOutOfStock = product.stockCount < 1;

  const conditionLabels: Record<string, string> = {
    NEW: "Novo",
    LIKE_NEW: "Seminovo",
    USED: "Usado",
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <PageTracker productId={product.id} />
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Voltar */}
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition mb-8 font-medium">
          <ArrowLeft size={18} /> Voltar para a Vitrine
        </Link>

        <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 lg:p-12">
            
            {/* Galeria de Fotos */}
            <div className="space-y-4">
              <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden flex items-center justify-center">
                {mainImage ? (
                  <img src={mainImage} alt={product.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-slate-400">Sem Imagem</span>
                )}
              </div>
              {images.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {images.map((img, index) => (
                    <div key={index} className="aspect-square bg-slate-100 rounded-2xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500 transition">
                      <img src={img} alt={`${product.name} - Foto ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Informações da Peça */}
            <div className="flex flex-col">
              <div className="mb-6">
                <span className="inline-block bg-blue-50 text-blue-600 font-bold px-3 py-1 rounded-full text-xs tracking-wider uppercase mb-4">
                  {product.category}
                </span>
                <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                  {product.name}
                </h1>
                <p className="text-xl font-medium text-slate-500">
                  {product.shortDescription}
                </p>
              </div>

              <div className="mb-8 flex items-end gap-4">
                <span className="text-5xl font-black text-slate-900">
                  R$ {Number(product.price).toFixed(2)}
                </span>
                <span className="text-slate-400 mb-2 font-medium">/ à vista</span>
              </div>

              {/* Atributos (Tamanho, Cor, Condição) */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <span className="block text-xs text-slate-500 mb-1">Condição</span>
                  <span className="font-bold text-slate-800">{conditionLabels[product.condition]}</span>
                </div>
                {product.size && (
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <span className="block text-xs text-slate-500 mb-1">Tamanho</span>
                    <span className="font-bold text-slate-800">{product.size}</span>
                  </div>
                )}
                {product.color && (
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <span className="block text-xs text-slate-500 mb-1">Cor Primária</span>
                    <span className="font-bold text-slate-800">{product.color}</span>
                  </div>
                )}
              </div>

              <AddToCartButton product={product} />

              {/* Trust Badges */}
              <div className="flex gap-6 py-6 border-y border-slate-100 mb-8">
                <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                  <ShieldCheck className="text-green-500" size={20} /> Compra Segura
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                  <Truck className="text-blue-500" size={20} /> Frete Solidário
                </div>
              </div>

              {/* Descrição Detalhada */}
              <div className="mt-auto">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Sobre esta peça</h3>
                <div className="prose prose-slate prose-p:leading-relaxed prose-p:text-slate-600" dangerouslySetInnerHTML={{ __html: product.detailedDescription }} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
